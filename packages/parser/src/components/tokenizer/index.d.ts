import { Spec } from "../../constants/dadLangSpec";
import { Token, Tokenizer } from "./types";
export default class TokenizerImpl implements Tokenizer {
    private _spec;
    private _string;
    private _cursor;
    constructor(spec: Spec);
    initTokenizer(stringToTokenize: String): void;
    isEOF(): boolean;
    hasMoreTokens(): boolean;
    getNextToken(): Token | null;
    _matched(regex: RegExp, string: string): string | null;
}
//# sourceMappingURL=index.d.ts.map