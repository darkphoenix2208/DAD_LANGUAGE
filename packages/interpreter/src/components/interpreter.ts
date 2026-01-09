import parser from "dad-lang-parser";

import InterpreterModule from "../module/interpreterModule";

import Scope from "./scope";

export default class Interpreter {
  _parser: typeof parser;
  _scope: Scope;

  constructor(parserObj: typeof parser, scope: Scope) {
    this._parser = parserObj;
    this._scope = scope;
  }

  interpret(code: string) {
    try {
      InterpreterModule.resetPatience();
      const scope = InterpreterModule.getCurrentScope();
      scope.declare("kismat", () => Math.random(), true);
      scope.declare("tol_mol", (val: any) => Math.round(val), true);
      scope.declare("taarik_pe_taarik", () => Date.now(), true);
      // Reset count for user variables (don't count system globals)
      Scope.activeVariableCount = 0;

      const ast = this._parser.parse(code);
      InterpreterModule.getVisitor(ast.type).visitNode(ast);
    } finally {
      // reset the scope for next run
      InterpreterModule.setCurrentScope(new Scope(null));
    }
  }

  setMode(mode: "daddy" | "mummy") {
    InterpreterModule.setMode(mode);
  }
}
