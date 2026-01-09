import Statement from ".";
import { ASTNode } from "../types/nodeTypes";
import StatementList from "../statementList";
import TokenExecutor from "../tokenExecutor";
export default class TryCatchStatement extends Statement {
    private _statementList;
    constructor(tokenExecutor: TokenExecutor, statementList: StatementList);
    getStatement(): ASTNode;
}
//# sourceMappingURL=tryCatchStatement.d.ts.map