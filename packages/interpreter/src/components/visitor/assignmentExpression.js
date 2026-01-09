"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var invalidStateException_1 = __importDefault(require("../../exceptions/invalidStateException"));
var nallaPointerException_1 = __importDefault(require("../../exceptions/nallaPointerException"));
var runtimeException_1 = __importDefault(require("../../exceptions/runtimeException"));
var helpers_1 = require("../../helpers");
var interpreterModule_1 = __importDefault(require("../../module/interpreterModule"));
var AssignmentExpression = /** @class */ (function () {
    function AssignmentExpression() {
    }
    AssignmentExpression.prototype.visitNode = function (node) {
        if (!node.left)
            throw new invalidStateException_1["default"]("left node not present while executing: ".concat(node.type));
        var identifier = node.left.name;
        var value;
        var currentScope = interpreterModule_1["default"].getCurrentScope();
        if (node.right) {
            value = interpreterModule_1["default"].getVisitor(node.right.type).visitNode(node.right);
        }
        if (identifier && node.operator) {
            var left = currentScope.get(identifier);
            if (left === null && node.operator !== "=")
                throw new nallaPointerException_1["default"]("Nalla operand ni jamta \"".concat(node.operator, "\" ke sath"));
            if ((left === true || left === false) && node.operator !== "=")
                throw new runtimeException_1["default"]("Boolean operand ni jamta \"".concat(node.operator, "\" ke sath"));
            var newValue = (0, helpers_1.getOperationValue)({ left: currentScope.get(identifier), right: value }, node.operator);
            currentScope.assign(identifier, newValue);
            return currentScope.get(identifier);
        }
    };
    return AssignmentExpression;
}());
exports["default"] = AssignmentExpression;
