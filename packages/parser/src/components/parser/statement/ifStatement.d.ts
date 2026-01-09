import Statement from ".";
import TokenExecutor from "../tokenExecutor";
import { ASTNode } from "../types/nodeTypes";
export default class IfStatement extends Statement {
    constructor(tokenExecutor: TokenExecutor);
    private getConditionalStatement;
    getStatement(): ASTNode;
}
//# sourceMappingURL=ifStatement.d.ts.map