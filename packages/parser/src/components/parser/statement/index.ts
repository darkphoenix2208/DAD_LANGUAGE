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
      case TokenTypes.BOL_BHAI_TYPE:
        return DadLangModule.getPrintStatement();

      case TokenTypes.SEMI_COLON_TYPE:
        return DadLangModule.getEmptyStatement();

      case TokenTypes.OPEN_CURLY_BRACE_TYPE:
        return DadLangModule.getBlockStatement();

      case TokenTypes.BHAI_YE_HAI_TYPE:
      case TokenTypes.PARAMPARA:
        return DadLangModule.getVariableStatement();

      case TokenTypes.AGAR_BHAI:
        return DadLangModule.getIfStatement();

      case TokenTypes.JAB_TAK_BHAI:
        return DadLangModule.getWhileStatement();

      case TokenTypes.BAS_KAR_BHAI:
        return DadLangModule.getBreakStatement();

      case TokenTypes.AGLA_DEKH_BHAI:
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
