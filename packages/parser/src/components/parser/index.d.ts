import { Tokenizer } from "../tokenizer/types";
import Program from "./program";
import TokenExecutor from "./tokenExecutor";
export declare class Parser {
    private _tokenizer;
    private _program;
    private _tokenExecutor;
    private _stringToTokenize;
    constructor(tokenizer: Tokenizer, program: Program, tokenExecutor: TokenExecutor);
    parse(stringToTokenize: string): import("./types/nodeTypes").ASTNode;
}
//# sourceMappingURL=index.d.ts.map