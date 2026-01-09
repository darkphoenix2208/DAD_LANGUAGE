import TokenExecutor from "../../../tokenExecutor";
import { ASTNode } from "../../../types/nodeTypes";
export default abstract class Literal {
    protected _tokenExecutor: TokenExecutor;
    constructor(tokenExecutor: TokenExecutor);
    abstract getLiteral(): ASTNode;
    static getLiteralImpl(tokenType?: string): Literal;
}
//# sourceMappingURL=index.d.ts.map