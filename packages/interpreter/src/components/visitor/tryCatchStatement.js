"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var interpreterModule_1 = __importDefault(require("../../module/interpreterModule"));
var TryCatchStatement = /** @class */ (function () {
    function TryCatchStatement() {
    }
    TryCatchStatement.prototype.visitNode = function (node) {
        try {
            if (node.tryBlock) {
                node.tryBlock.every(function (statement) {
                    interpreterModule_1["default"].getVisitor(statement.type).visitNode(statement);
                    return true;
                });
            }
        }
        catch (e) {
            if (node.catchBlock) {
                node.catchBlock.every(function (statement) {
                    interpreterModule_1["default"].getVisitor(statement.type).visitNode(statement);
                    return true;
                });
            }
        }
    };
    return TryCatchStatement;
}());
exports["default"] = TryCatchStatement;
