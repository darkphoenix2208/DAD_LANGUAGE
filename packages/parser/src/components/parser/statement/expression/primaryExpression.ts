import Expression from ".";

import { TokenTypes } from "../../../../constants/dadLangSpec";
import { NodeType } from "../../../../constants/constants";
import { ASTNode } from "../../types/nodeTypes";

import Literal from "./literals";

export default class PrimaryExpression extends Expression {
  getExpression(): ASTNode {
    const token = this._tokenExecutor.getLookahead();

    switch (token?.type) {
      case TokenTypes.OPEN_SQUARE_BRACKET:
        return Expression.getExpressionImpl(
          NodeType.ArrayExpression
        ).getExpression();
      case TokenTypes.OPEN_PARENTHESIS_TYPE:
        return Expression.getExpressionImpl(
          NodeType.ParanthesizedExpression
        ).getExpression();
      case TokenTypes.STRING_TYPE:
      case TokenTypes.NUMBER_TYPE:
      case TokenTypes.BOOLEAN_TYPE:
        return Literal.getLiteralImpl(token.type).getLiteral();
      case TokenTypes.NALLA_TYPE:
        return this._getNallaLiteral();
      case TokenTypes.NEW:
        return Expression.getExpressionImpl(NodeType.NewExpression).getExpression();
      case TokenTypes.THIS:
        return Expression.getExpressionImpl(NodeType.ThisExpression).getExpression();
      default:
        return this._getLeftHandSideExpression();
    }
  }

  private _getNallaLiteral() {
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.NALLA_TYPE);
    return Literal.getLiteralImpl(TokenTypes.NALLA_TYPE).getLiteral();
  }

  private _getLeftHandSideExpression() {
    return Expression.getExpressionImpl(
      NodeType.IdentifierExpression
    ).getExpression();
  }
}
