"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var interpreterModule_1 = __importDefault(require("../../module/interpreterModule"));
var runtimeException_1 = __importDefault(require("../../exceptions/runtimeException"));
var CallExpression = /** @class */ (function () {
    function CallExpression() {
    }
    CallExpression.prototype.visitNode = function (node) {
        var callee = interpreterModule_1["default"].getVisitor(node.callee.type).visitNode(node.callee);
        var args = node.arguments ? node.arguments.map(function (a) { return interpreterModule_1["default"].getVisitor(a.type).visitNode(a); }) : [];
        if (typeof callee !== "function") {
            throw new runtimeException_1["default"]("Ye kya call kar raha hai? Function nahi hai ye! (Type Error)");
        }
        return callee.apply(void 0, args);
    };
    return CallExpression;
}());
exports["default"] = CallExpression;
