import Expression from ".";
import { ASTNode } from "../../types/nodeTypes";
export default class AssignmentExpression extends Expression {
    private _logicalORExpression;
    getExpression(): ASTNode;
    /**
     * Whether it is a assignmnet operator
     * @returns
     */
    private _isAssignmentOperator;
    private _getAssignmentOperator;
    /**
     * Extra check whether it's valid assignment target
     * @param {*} node
     */
    private _checkValidAssignmentTarget;
}
//# sourceMappingURL=assignmentExpression.d.ts.map