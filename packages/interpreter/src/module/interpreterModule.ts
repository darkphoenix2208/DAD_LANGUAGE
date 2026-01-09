import parser, { NodeType } from "dad-lang-parser";
import RuntimeException from "../exceptions/runtimeException";

import Interpreter from "../components/interpreter";
import Scope from "../components/scope";
import Visitor from "../components/visitor";
import AssignmentExpression from "../components/visitor/assignmentExpression";
import BinaryExpression from "../components/visitor/binaryExpression";
import BlockStatement from "../components/visitor/blockStatement";
import BooleanLiteral from "../components/visitor/booleanLiteral";
import BreakStatement from "../components/visitor/breakStatement";
import ContinueStatement from "../components/visitor/continueStatement";
import EmptyStatement from "../components/visitor/emptyStatement";
import ExpressionStatement from "../components/visitor/expressionStatement";
import IdentifierExpression from "../components/visitor/identifierExpression";
import IfStatement from "../components/visitor/ifStatement";
import InitStatement from "../components/visitor/initStatement";
import NullLiteral from "../components/visitor/nullLiteral";
import NumericLiteral from "../components/visitor/numericLiteral";
import PrintStatement from "../components/visitor/printStatement";
import Program from "../components/visitor/program";
import StringLiteral from "../components/visitor/stringLiteral";
import VariableDeclaration from "../components/visitor/variableDeclaration";
import VariableStatement from "../components/visitor/variableStatement";
import WhileStatement from "../components/visitor/whileStatement";
import SleepStatement from "../components/visitor/sleepStatement";
import TryCatchStatement from "../components/visitor/tryCatchStatement";
import InvalidStateException from "../exceptions/invalidStateException";

import ArrayExpression from "../components/visitor/arrayExpression";
import MemberExpression from "../components/visitor/memberExpression";
import CallExpression from "../components/visitor/callExpression";
import ClassDeclaration from "../components/visitor/classDeclaration";
import SwitchStatement from "../components/visitor/switchStatement";
import NewExpression from "../components/visitor/newExpression";
import ThisExpression from "../components/visitor/thisExpression";
import chalk from "chalk";

export default class InterpreterModule {
  private static _visitorMap = {
    [NodeType.Program]: new Program(),
    [NodeType.InitStatement]: new InitStatement(),
    [NodeType.PrintStatement]: new PrintStatement(),
    [NodeType.EmptyStatement]: new EmptyStatement(),
    [NodeType.BlockStatement]: new BlockStatement(),
    [NodeType.VariableStatement]: new VariableStatement(),
    [NodeType.IdentifierExpression]: new IdentifierExpression(),
    [NodeType.VariableDeclaration]: new VariableDeclaration(),
    [NodeType.AssignmentExpression]: new AssignmentExpression(),
    [NodeType.ExpressionStatement]: new ExpressionStatement(),
    [NodeType.BinaryExpression]: new BinaryExpression(),
    [NodeType.LogicalExpression]: new BinaryExpression(),
    [NodeType.StringLiteral]: new StringLiteral(),
    [NodeType.NumericLiteral]: new NumericLiteral(),
    [NodeType.BooleanLiteral]: new BooleanLiteral(),
    [NodeType.NullLiteral]: new NullLiteral(),
    [NodeType.IfStatement]: new IfStatement(),
    [NodeType.WhileStatement]: new WhileStatement(),
    [NodeType.BreakStatement]: new BreakStatement(),
    [NodeType.ContinueStatement]: new ContinueStatement(),
    [NodeType.SleepStatement]: new SleepStatement(),
    [NodeType.TryCatchStatement]: new TryCatchStatement(),
    [NodeType.ArrayExpression]: new ArrayExpression(),
    [NodeType.MemberExpression]: new MemberExpression(),
    [NodeType.CallExpression]: new CallExpression(),
    [NodeType.ClassDeclaration]: new ClassDeclaration(),
    [NodeType.SwitchStatement]: new SwitchStatement(),
    [NodeType.NewExpression]: new NewExpression(),
    [NodeType.ThisExpression]: new ThisExpression(),
  } as Record<string, Visitor>;

  private static _currentScope: Scope;
  private static _interpreter: Interpreter;
  private static _mode: "daddy" | "mummy" = "daddy";

  static getVisitor(nodeType: string) {
    const visitor = InterpreterModule._visitorMap[nodeType];

    if (!visitor)
      throw new InvalidStateException(
        `Couldn't find any visitor object for nodeType: ${nodeType}`
      );

    return visitor;
  }

  static getInterpreter() {
    this._interpreter =
      this._interpreter ?? new Interpreter(parser, this.getCurrentScope());
    return this._interpreter;
  }

  static getCurrentScope() {
    this._currentScope = this._currentScope ?? new Scope(null);
    return this._currentScope;
  }

  static setCurrentScope(scope: Scope) {
    this._currentScope = scope;
  }

  static setMode(mode: "daddy" | "mummy") {
    this._mode = mode;
  }

  static getMode() {
    return this._mode;
  }

  private static _patienceLevel = 1000;

  static resetPatience() {
    this._patienceLevel = 1000;
  }

  static decrementPatience() {
    this._patienceLevel--;
    if (this._patienceLevel <= 0) {
      if (this._mode === "mummy") {
        console.warn(chalk.yellow("Bas kar beta, thak gaya hoga (Warning: Long execution)"));
        this._patienceLevel = 1000; // Give bonus time
      } else {
        throw new RuntimeException("Din bhar computer pe baitha rehta hai! Band kar isko! (Runtime Limit Exceeded)");
      }
    }
  }
}
