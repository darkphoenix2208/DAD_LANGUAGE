import Statement from ".";
import StatementList from "../statementList";
import TokenExecutor from "../tokenExecutor";
import { ASTNode } from "../types/nodeTypes";
export default class BlockStatement extends Statement {
    _statementList: StatementList;
    constructor(tokenExecutor: TokenExecutor, statementList: StatementList);
    getStatement(): ASTNode;
}
//# sourceMappingURL=blockStatement.d.ts.map