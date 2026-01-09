"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var invalidStateException_1 = __importDefault(require("../../exceptions/invalidStateException"));
var interpreterModule_1 = __importDefault(require("../../module/interpreterModule"));
var VariableStatement = /** @class */ (function () {
    function VariableStatement() {
    }
    VariableStatement.prototype.visitNode = function (node) {
        if (!node.declarations)
            throw new invalidStateException_1["default"]("variable declarations in variable statement is not present: ".concat(node.declarations));
        node.declarations.forEach(function (declaration) {
            interpreterModule_1["default"].getVisitor(declaration.type).visitNode(declaration);
        });
    };
    return VariableStatement;
}());
exports["default"] = VariableStatement;
