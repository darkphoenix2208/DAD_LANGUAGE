import { NodeType } from "../../../../constants/constants";
import DadLangModule from "../../../../module/dadLangModule";
import TokenExecutor from "../../tokenExecutor";
import { ASTNode } from "../../types/nodeTypes";


export default abstract class Expression {
  protected _tokenExecutor: TokenExecutor;

  constructor(tokenExecutor: TokenExecutor) {
    this._tokenExecutor = tokenExecutor;
  }

  abstract getExpression(): ASTNode;

  static getExpressionImpl(expressionType: keyof typeof NodeType): Expression {
    switch (expressionType) {
      case NodeType.AdditiveExpression:
        return DadLangModule.getAdditiveExpression();

      case NodeType.MultiplicativeExpression:
        return DadLangModule.getMultiplicativeExpression();

      case NodeType.PrimaryExpression:
        return DadLangModule.getPrimaryExpression();

      case NodeType.ParanthesizedExpression:
        return DadLangModule.getParanthesizedExpression();

      case NodeType.AssignmentExpression:
        return DadLangModule.getAssignmentExpression();

      case NodeType.EqualityExpression:
        return DadLangModule.getEqualityExpression();

      case NodeType.LogicalANDExpression:
        return DadLangModule.getLogicalANDExpression();

      case NodeType.LogicalORExpression:
        return DadLangModule.getLogicalORExpression();

      case NodeType.RelationalExpression:
        return DadLangModule.getRelationalExpression();

      case NodeType.ArrayExpression:
        return DadLangModule.getArrayExpression();

      case NodeType.MemberExpression:
        return DadLangModule.getMemberExpression();

      case NodeType.CallExpression:
        return DadLangModule.getMemberExpression();

      default:
        return DadLangModule.getIndentifierExpression();
    }
  }

  protected getBinaryExpression(
    downstreamExpressionType: keyof typeof NodeType,
    operatorToken: string
  ) {
    return this._getExpression(downstreamExpressionType, operatorToken, NodeType.BinaryExpression);
  }

  protected getLogicalExpression(
    downstreamExpressionType: keyof typeof NodeType,
    operatorToken: string
  ) {
    return this._getExpression(downstreamExpressionType, operatorToken, NodeType.LogicalExpression);
  }

  private _getExpression(
    downstreamExpressionType: keyof typeof NodeType,
    operatorToken: string,
    expressionType: keyof typeof NodeType
  ) {
    let left = Expression.getExpressionImpl(downstreamExpressionType).getExpression();

    while (this._tokenExecutor.getLookahead()?.type === operatorToken) {
      const operator =
        this._tokenExecutor.eatTokenAndForwardLookahead(operatorToken);
      const right =
        Expression.getExpressionImpl(downstreamExpressionType).getExpression();

      left = {
        type: expressionType,
        operator: operator.value,
        left,
        right,
      };
    }

    return left;
  }

}
