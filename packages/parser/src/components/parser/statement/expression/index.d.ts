import { NodeType } from "../../../../constants/constants";
import TokenExecutor from "../../tokenExecutor";
import { ASTNode } from "../../types/nodeTypes";
export default abstract class Expression {
    protected _tokenExecutor: TokenExecutor;
    constructor(tokenExecutor: TokenExecutor);
    abstract getExpression(): ASTNode;
    static getExpressionImpl(expressionType: keyof typeof NodeType): Expression;
    protected getBinaryExpression(downstreamExpressionType: keyof typeof NodeType, operatorToken: string): ASTNode;
    protected getLogicalExpression(downstreamExpressionType: keyof typeof NodeType, operatorToken: string): ASTNode;
    private _getExpression;
}
//# sourceMappingURL=index.d.ts.map