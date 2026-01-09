import TokenExecutor from "./tokenExecutor";
export default class StatementList {
    private _tokenExecutor;
    constructor(tokenExecutor: TokenExecutor);
    getInitialStatementList(): import("./types/nodeTypes").ASTNode;
    getStatementList(stopLookaheadType: string): import("./types/nodeTypes").ASTNode[];
}
//# sourceMappingURL=statementList.d.ts.map