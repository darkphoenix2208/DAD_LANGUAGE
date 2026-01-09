import Interpreter from "../components/interpreter";
import Scope from "../components/scope";
import Visitor from "../components/visitor";
export default class InterpreterModule {
    private static _visitorMap;
    private static _currentScope;
    private static _interpreter;
    private static _mode;
    static getVisitor(nodeType: string): Visitor;
    static getInterpreter(): Interpreter;
    static getCurrentScope(): Scope;
    static setCurrentScope(scope: Scope): void;
    static setMode(mode: "daddy" | "mummy"): void;
    static getMode(): "daddy" | "mummy";
    private static _patienceLevel;
    static resetPatience(): void;
    static decrementPatience(): void;
}
//# sourceMappingURL=interpreterModule.d.ts.map