import { Token, Tokenizer } from "../tokenizer/types";
export default class TokenExecutor {
    private _tokenizer;
    private _lookahead;
    constructor(tokenizer: Tokenizer);
    eatTokenAndForwardLookahead(tokenType: string | null): Token;
    eatOptionalSemiColonToken(): void;
    getLookahead(): Token | null;
    setLookahead(lookahead: Token | null): void;
}
//# sourceMappingURL=tokenExecutor.d.ts.map