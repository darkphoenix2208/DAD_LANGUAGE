import Statement from ".";
import TokenExecutor from "../tokenExecutor";
import { ASTNode } from "../types/nodeTypes";
import NullLiteral from "./expression/literals/nullLiteral";
export default class VariableStatement extends Statement {
    _nullLiteral: NullLiteral;
    constructor(tokenExecutor: TokenExecutor, nullLiteral: NullLiteral);
    getStatement(): ASTNode;
    private _getVariableDeclarationList;
    private _getVariableDeclaration;
    private _getVariableInitializer;
}
//# sourceMappingURL=variableStatement.d.ts.map