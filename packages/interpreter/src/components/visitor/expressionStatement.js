"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var interpreterModule_1 = __importDefault(require("../../module/interpreterModule"));
var ExpressionStatement = /** @class */ (function () {
    function ExpressionStatement() {
    }
    ExpressionStatement.prototype.visitNode = function (node) {
        if (node.expression) {
            interpreterModule_1["default"].getVisitor(node.expression.type).visitNode(node.expression);
        }
    };
    return ExpressionStatement;
}());
exports["default"] = ExpressionStatement;
