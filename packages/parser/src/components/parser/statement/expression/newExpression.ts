import Expression from ".";
import { TokenTypes } from "../../../../constants/dadLangSpec";
import { NodeType } from "../../../../constants/constants";
import { ASTNode } from "../../types/nodeTypes";

export default class NewExpression extends Expression {
    getExpression(): ASTNode {
        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.NEW);

        // Class Name
        const callee = Expression.getExpressionImpl(NodeType.IdentifierExpression).getExpression();

        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.OPEN_PARENTHESIS_TYPE);

        const args: ASTNode[] = [];
        if (this._tokenExecutor.getLookahead()?.type !== TokenTypes.CLOSED_PARENTHESIS_TYPE) {
            do {
                args.push(Expression.getExpressionImpl(NodeType.AssignmentExpression).getExpression());
            } while (
                this._tokenExecutor.getLookahead()?.type === TokenTypes.COMMA_TYPE &&
                this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.COMMA_TYPE)
            );
        }

        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.CLOSED_PARENTHESIS_TYPE);

        return {
            type: NodeType.NewExpression,
            callee,
            arguments: args
        };
    }
}
