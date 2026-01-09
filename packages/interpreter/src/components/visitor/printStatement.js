"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var invalidStateException_1 = __importDefault(require("../../exceptions/invalidStateException"));
var interpreterModule_1 = __importDefault(require("../../module/interpreterModule"));
var PrintStatement = /** @class */ (function () {
    function PrintStatement() {
    }
    PrintStatement.prototype.visitNode = function (node) {
        if (!node.expressions)
            throw new invalidStateException_1["default"]("No expressions to print: ".concat(node.expressions));
        var value = node.expressions
            .map(function (expression) {
            var currentNodeOutput = interpreterModule_1["default"].getVisitor(expression.type).visitNode(expression);
            if (currentNodeOutput === true)
                currentNodeOutput = "sahi";
            else if (currentNodeOutput === false)
                currentNodeOutput = "galat";
            return currentNodeOutput;
        })
            .join(" ");
        console.log(value);
    };
    return PrintStatement;
}());
exports["default"] = PrintStatement;
