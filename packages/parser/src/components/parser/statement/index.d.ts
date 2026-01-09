import { Token } from "../../tokenizer/types";
import TokenExecutor from "../tokenExecutor";
import { ASTNode } from "../types/nodeTypes";
export default abstract class Statement {
    protected _tokenExecutor: TokenExecutor;
    constructor(tokenExecutor: TokenExecutor);
    abstract getStatement(): ASTNode;
    static getStatementImpl(lookahead: Token): Statement;
}
//# sourceMappingURL=index.d.ts.map