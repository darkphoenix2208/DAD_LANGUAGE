import Statement from ".";

import { TokenTypes } from "../../../constants/dadLangSpec";
import { NodeType } from "../../../constants/constants";
import { ASTNode } from "../types/nodeTypes";

import Expression from "./expression";

export default class SleepStatement extends Statement {
    getStatement(): ASTNode {
        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.SLEEP);

        const duration = Expression.getExpressionImpl(
            NodeType.AssignmentExpression
        ).getExpression();

        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.SEMI_COLON_TYPE);

        return {
            type: NodeType.SleepStatement,
            duration,
        };
    }
}
