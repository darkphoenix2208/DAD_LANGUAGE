"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var interpreterModule_1 = __importDefault(require("../../module/interpreterModule"));
var ArrayExpression = /** @class */ (function () {
    function ArrayExpression() {
    }
    ArrayExpression.prototype.visitNode = function (node) {
        if (!node.elements)
            return [];
        return node.elements.map(function (element) {
            return interpreterModule_1["default"].getVisitor(element.type).visitNode(element);
        });
    };
    return ArrayExpression;
}());
exports["default"] = ArrayExpression;
