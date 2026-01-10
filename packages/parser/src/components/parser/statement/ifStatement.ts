import Statement from ".";

import { TokenTypes } from "../../../constants/dadLangSpec";
import { NodeType } from "../../../constants/constants";
import TokenExecutor from "../tokenExecutor";
import { ASTNode } from "../types/nodeTypes";

import Expression from "./expression";

const HANDLED_LOOP_TOKEN_TYPES = [TokenTypes.ELSE_CONDITION, TokenTypes.ELSE_IF_CONDITION];

export default class IfStatement extends Statement {

  constructor(tokenExecutor: TokenExecutor) {
    super(tokenExecutor);
  }

  private getConditionalStatement(tokenType: string): ASTNode {
    this._tokenExecutor.eatTokenAndForwardLookahead(tokenType);

    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.OPEN_PARENTHESIS_TYPE);

    const test = Expression.getExpressionImpl(
      NodeType.AssignmentExpression
    ).getExpression();

    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.CLOSED_PARENTHESIS_TYPE);

    if (this._tokenExecutor.getLookahead() == null) {
      throw new SyntaxError(`Unexpected end of "${tokenType}" statement`);
    }

    const consequent = Statement.getStatementImpl(this._tokenExecutor.getLookahead()!).getStatement();

    return {
      type: NodeType.IfStatement,
      test,
      consequent
    }
  }

  getStatement(): ASTNode {

    const ifStatement = this.getConditionalStatement(TokenTypes.IF_CONDITION);
    const alternates: ASTNode[] = [];

    // Loop until we keep getting "nahi to bhai" or "warna bhai"
    // Break as soon as we get the first "warna bhai" instance
    for (
      let lookahead = this._tokenExecutor.getLookahead();
      lookahead !== null && HANDLED_LOOP_TOKEN_TYPES.includes(lookahead.type);
      lookahead = this._tokenExecutor.getLookahead()
    ) {
      if (lookahead.type === TokenTypes.ELSE_CONDITION) {
        alternates.push(this._tokenExecutor.eatTokenAndForwardLookahead(lookahead.type) && Statement.getStatementImpl(this._tokenExecutor.getLookahead()!).getStatement());
        break;
      } else if (lookahead.type === TokenTypes.ELSE_IF_CONDITION) {
        alternates.push(this.getConditionalStatement(TokenTypes.ELSE_IF_CONDITION));
      }
    }

    return {
      ...ifStatement,
      alternates
    }
  }
}
