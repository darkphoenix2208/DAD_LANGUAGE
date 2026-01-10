import RuntimeException from "../exceptions/runtimeException";
import chalk from "chalk";

type VariableValue = {
  value: unknown;
  accessed: boolean;
  isConst?: boolean;
};

export default class Scope {
  _variables: Map<string, VariableValue> = new Map();
  _isLoop = false;
  _isBreakStatement = false;
  _isContinueStatement = false;
  _parentScope: Scope | null;
  static activeVariableCount = 0;

  constructor(parentScope: Scope | null) {
    this._parentScope = parentScope;
    if (parentScope === null) {
      Scope.activeVariableCount = 0;
    }
  }

  isLoop() {
    return this._isLoop;
  }

  setLoop(isLoop: boolean) {
    this._isLoop = isLoop;
  }

  setBreakStatement(isBreakStatement: boolean) {
    this._isBreakStatement = isBreakStatement;
  }

  setContinueStatement(isContinueStatement: boolean) {
    this._isContinueStatement = isContinueStatement;
  }

  isBreakStatement() {
    return this._isBreakStatement;
  }

  isContinueStatement() {
    return this._isContinueStatement;
  }

  get(identifier: string): unknown {
    if (this._variables.has(identifier)) {
      const variable = this._variables.get(identifier)!;
      variable.accessed = true;
      return variable.value;
    }

    if (this._parentScope !== null) {
      return this._parentScope.get(identifier);
    }

    throw new RuntimeException(`Variable "${identifier}" bana to le pehle.`);
  }

  assign(identifier: string, value: unknown) {
    if (this._variables.has(identifier)) {
      // Keep existing accessed status or mark accessed? 
      // Usually assignment counts as usage, but the prompt says "declared but never accessed".
      // If I just assign and never read, it might be unused. 
      // But typically LHS is not 'access' in the "unused variable" sense (which implies read).
      // I will leave accessed as is, or initialized.
      const variable = this._variables.get(identifier)!;
      if (variable.isConst) {
        throw new RuntimeException(
          "Sanskaro ki dhajjiya uda di! (Assignment to constant variable)"
        );
      }
      variable.value = value;
      return;
    }

    if (this._parentScope !== null) {
      this._parentScope.assign(identifier, value);
      return;
    }

    throw new RuntimeException(
      `Variable "${identifier}" bana to le pehle fir assign karna.`
    );
  }

  declare(identifier: string, value: unknown, isConst: boolean = false, shouldCrashOnLimit: boolean = true) {
    if (this._variables.has(identifier)) {
      `Variable "${identifier}" pehle se exist karta hai gadhe. Check karle.`
    }

    // High BP Check
    Scope.activeVariableCount++;
    if (Scope.activeVariableCount > 15) {
      if (shouldCrashOnLimit) {
        throw new RuntimeException(
          "Mera BP badha diya tune! Itna raita kyu failaya hai? (Variable Limit Exceeded)"
        );
      } else {
        console.warn(chalk.yellow("Beta, dimaag par itna zor mat daal (Warning: High Memory Usage)"));
      }
    }

    this._variables.set(identifier, { value, accessed: false, isConst });
  }

  checkUnusedVariables() {
    this._variables.forEach((variable, identifier) => {
      if (!variable.accessed) {
        console.warn(
          chalk.yellow(
            `Ye '${identifier}' kyu paida kiya jab iska koi kaam hi nahi tha?`
          )
        );
      }
    });
  }

  createChildScope(): Scope {
    return new Scope(this);
  }
}
