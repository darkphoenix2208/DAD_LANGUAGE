import Statement from ".";
import { TokenTypes } from "../../../constants/dadLangSpec";
import { NodeType } from "../../../constants/constants";
import { ASTNode } from "../types/nodeTypes";
import Expression from "./expression";

export default class SwitchStatement extends Statement {
    getStatement(): ASTNode {
        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.SWITCH);
        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.OPEN_PARENTHESIS_TYPE);
        const discriminant = Expression.getExpressionImpl(NodeType.AssignmentExpression).getExpression();
        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.CLOSED_PARENTHESIS_TYPE);

        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.OPEN_CURLY_BRACE_TYPE);

        const cases: ASTNode[] = [];
        while (this._tokenExecutor.getLookahead()?.type !== TokenTypes.CLOSED_CURLY_BRACE_TYPE) {
            if (this._tokenExecutor.getLookahead()?.type === TokenTypes.CASE) {
                this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.CASE);
                const test = Expression.getExpressionImpl(NodeType.AssignmentExpression).getExpression();
                this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.COLON_TYPE);

                const consequent: ASTNode[] = [];
                while (
                    this._tokenExecutor.getLookahead()?.type !== TokenTypes.CASE &&
                    this._tokenExecutor.getLookahead()?.type !== TokenTypes.DEFAULT &&
                    this._tokenExecutor.getLookahead()?.type !== TokenTypes.CLOSED_CURLY_BRACE_TYPE
                ) {
                    // Manually call Statement.getStatementImpl
                    const stmt = Statement.getStatementImpl(this._tokenExecutor.getLookahead()!).getStatement();
                    consequent.push(stmt);
                }

                cases.push({
                    type: NodeType.SwitchCase,
                    test,
                    consequent
                });
            } else if (this._tokenExecutor.getLookahead()?.type === TokenTypes.DEFAULT) {
                this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.DEFAULT);
                this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.COLON_TYPE);
                const consequent: ASTNode[] = [];
                while (this._tokenExecutor.getLookahead()?.type !== TokenTypes.CLOSED_CURLY_BRACE_TYPE) {
                    const stmt = Statement.getStatementImpl(this._tokenExecutor.getLookahead()!).getStatement();
                    consequent.push(stmt);
                }
                cases.push({
                    type: NodeType.SwitchCase,
                    test: null,
                    consequent
                });
            }
        }

        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.CLOSED_CURLY_BRACE_TYPE);

        return {
            type: NodeType.SwitchStatement,
            discriminant,
            cases
        };
    }
}
