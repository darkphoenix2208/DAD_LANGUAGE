type VariableValue = {
    value: unknown;
    accessed: boolean;
    isConst?: boolean;
};
export default class Scope {
    _variables: Map<string, VariableValue>;
    _isLoop: boolean;
    _isBreakStatement: boolean;
    _isContinueStatement: boolean;
    _parentScope: Scope | null;
    static activeVariableCount: number;
    constructor(parentScope: Scope | null);
    isLoop(): boolean;
    setLoop(isLoop: boolean): void;
    setBreakStatement(isBreakStatement: boolean): void;
    setContinueStatement(isContinueStatement: boolean): void;
    isBreakStatement(): boolean;
    isContinueStatement(): boolean;
    get(identifier: string): unknown;
    assign(identifier: string, value: unknown): void;
    declare(identifier: string, value: unknown, isConst?: boolean, shouldCrashOnLimit?: boolean): void;
    checkUnusedVariables(): void;
    createChildScope(): Scope;
}
export {};
//# sourceMappingURL=scope.d.ts.map