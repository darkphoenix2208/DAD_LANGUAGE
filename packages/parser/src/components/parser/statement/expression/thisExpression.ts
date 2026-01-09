import Expression from ".";
import { TokenTypes } from "../../../../constants/dadLangSpec";
import { NodeType } from "../../../../constants/constants";
import { ASTNode } from "../../types/nodeTypes";

export default class ThisExpression extends Expression {
    getExpression(): ASTNode {
        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.THIS);
        return {
            type: NodeType.ThisExpression
        };
    }
}
