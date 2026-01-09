import Expression from ".";
import { TokenTypes } from "../../../../constants/dadLangSpec";
import { NodeType } from "../../../../constants/constants";
import { ASTNode } from "../../types/nodeTypes";

export default class MemberExpression extends Expression {
    getExpression(): ASTNode {
        let object = Expression.getExpressionImpl(
            NodeType.PrimaryExpression
        ).getExpression();

        while (
            this._tokenExecutor.getLookahead()?.type ===
            TokenTypes.OPEN_SQUARE_BRACKET ||
            this._tokenExecutor.getLookahead()?.type === TokenTypes.DOT ||
            this._tokenExecutor.getLookahead()?.type === TokenTypes.OPEN_PARENTHESIS_TYPE
        ) {
            if (
                this._tokenExecutor.getLookahead()?.type ===
                TokenTypes.OPEN_SQUARE_BRACKET
            ) {
                this._tokenExecutor.eatTokenAndForwardLookahead(
                    TokenTypes.OPEN_SQUARE_BRACKET
                );
                const property = Expression.getExpressionImpl(
                    NodeType.AssignmentExpression
                ).getExpression();
                this._tokenExecutor.eatTokenAndForwardLookahead(
                    TokenTypes.CLOSED_SQUARE_BRACKET
                );
                object = {
                    type: NodeType.MemberExpression,
                    object,
                    property,
                    computed: true,
                };
            } else if (
                this._tokenExecutor.getLookahead()?.type === TokenTypes.DOT
            ) {
                this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.DOT);
                const property = Expression.getExpressionImpl(
                    NodeType.IdentifierExpression
                ).getExpression();
                object = {
                    type: NodeType.MemberExpression,
                    object,
                    property,
                    computed: false,
                };
            } else {
                // Call Expression
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

                object = {
                    type: NodeType.CallExpression,
                    callee: object,
                    arguments: args
                };
            }
        }

        return object;
    }
}
