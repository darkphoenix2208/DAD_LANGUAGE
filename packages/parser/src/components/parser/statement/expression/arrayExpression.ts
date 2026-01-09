import Expression from ".";
import { TokenTypes } from "../../../../constants/dadLangSpec";
import { NodeType } from "../../../../constants/constants";
import { ASTNode } from "../../types/nodeTypes";

export default class ArrayExpression extends Expression {
    getExpression(): ASTNode {
        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.OPEN_SQUARE_BRACKET);

        const elements: ASTNode[] = [];

        if (this._tokenExecutor.getLookahead()?.type !== TokenTypes.CLOSED_SQUARE_BRACKET) {
            do {
                elements.push(Expression.getExpressionImpl(NodeType.AssignmentExpression).getExpression());
            } while (
                this._tokenExecutor.getLookahead()?.type === TokenTypes.COMMA_TYPE &&
                this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.COMMA_TYPE)
            );
        }

        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.CLOSED_SQUARE_BRACKET);

        return {
            type: NodeType.ArrayExpression,
            elements,
        };
    }
}
