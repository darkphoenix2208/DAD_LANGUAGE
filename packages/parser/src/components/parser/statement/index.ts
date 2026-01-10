import { TokenTypes } from "../../../constants/dadLangSpec";
import DadLangModule from "../../../module/dadLangModule";
import { Token } from "../../tokenizer/types";
import TokenExecutor from "../tokenExecutor";
import { ASTNode } from "../types/nodeTypes";


export default abstract class Statement {
  protected _tokenExecutor: TokenExecutor;

  constructor(tokenExecutor: TokenExecutor) {
    this._tokenExecutor = tokenExecutor;
  }

  abstract getStatement(): ASTNode;

  static getStatementImpl(lookahead: Token): Statement {
    switch (lookahead.type) {
      case TokenTypes.PRINT:
        return DadLangModule.getPrintStatement();

      case TokenTypes.SEMI_COLON_TYPE:
        return DadLangModule.getEmptyStatement();

      case TokenTypes.OPEN_CURLY_BRACE_TYPE:
        return DadLangModule.getBlockStatement();

      case TokenTypes.VARIABLE_DECLARATION:
      case TokenTypes.PARAMPARA:
        return DadLangModule.getVariableStatement();

      case TokenTypes.IF_CONDITION:
        return DadLangModule.getIfStatement();

      case TokenTypes.WHILE_LOOP:
        return DadLangModule.getWhileStatement();

      case TokenTypes.BREAK_STATEMENT:
        return DadLangModule.getBreakStatement();

      case TokenTypes.CONTINUE_STATEMENT:
        return DadLangModule.getContinueStatement();

      case TokenTypes.SLEEP:
        return DadLangModule.getSleepStatement();

      case TokenTypes.TRY:
        return DadLangModule.getTryCatchStatement();

      case TokenTypes.CLASS:
        return DadLangModule.getClassDeclaration();

      case TokenTypes.SWITCH:
        return DadLangModule.getSwitchStatement();

      default:
        return DadLangModule.getExpressionStatement();
    }
  }
}
