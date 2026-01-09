import parser from "dad-lang-parser";
import Scope from "./scope";
export default class Interpreter {
    _parser: typeof parser;
    _scope: Scope;
    constructor(parserObj: typeof parser, scope: Scope);
    interpret(code: string): void;
    setMode(mode: "daddy" | "mummy"): void;
}
//# sourceMappingURL=interpreter.d.ts.map