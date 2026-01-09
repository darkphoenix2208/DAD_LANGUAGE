"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var interpreterModule_1 = __importDefault(require("../../module/interpreterModule"));
var dadRuntime_1 = require("../runtime/dadRuntime");
var runtimeException_1 = __importDefault(require("../../exceptions/runtimeException"));
var NewExpression = /** @class */ (function () {
    function NewExpression() {
    }
    NewExpression.prototype.visitNode = function (node) {
        // 1. Evaluate callee to get the class
        // Note: node.callee is IdentifierExpression. Visitor for IdentifierExpression returns the value from scope.
        var klass = interpreterModule_1["default"].getVisitor(node.callee.type).visitNode(node.callee);
        if (!(klass instanceof dadRuntime_1.DadClass)) {
            throw new runtimeException_1["default"]("Ye avtaar nahi hai! (Not a class)");
        }
        // 2. Evaluate arguments
        var args = node.arguments ? node.arguments.map(function (arg) { return interpreterModule_1["default"].getVisitor(arg.type).visitNode(arg); }) : [];
        // 3. Instantiate
        return klass.instantiate(args);
    };
    return NewExpression;
}());
exports["default"] = NewExpression;
