import { TokenTypes } from "../../../../../constants/dadLangSpec";
import UnsupportedTypeException from "../../../../../exceptions/unsupportedTypeException";
import DadLangModule from "../../../../../module/dadLangModule";
import TokenExecutor from "../../../tokenExecutor";
import { ASTNode } from "../../../types/nodeTypes";

export default abstract class Literal {
  protected _tokenExecutor: TokenExecutor;

  constructor(tokenExecutor: TokenExecutor) {
    this._tokenExecutor = tokenExecutor;
  }

  abstract getLiteral(): ASTNode;

  static getLiteralImpl(tokenType?: string): Literal {
    switch (tokenType) {
      case TokenTypes.NUMBER_TYPE:
        return DadLangModule.getNumericLiteral();

      case TokenTypes.BOOLEAN_TYPE:
        return DadLangModule.getBooleanLiteral();

      case TokenTypes.STRING_TYPE:
        return DadLangModule.getStringLiteral();

      case TokenTypes.NALLA_TYPE:
        return DadLangModule.getNullLiteral();

      default:
        throw new UnsupportedTypeException(
          `Token type not supproted for literal: ${tokenType}`
        );
    }
  }
}
