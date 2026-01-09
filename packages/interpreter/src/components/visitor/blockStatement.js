"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var interpreterModule_1 = __importDefault(require("../../module/interpreterModule"));
var scope_1 = __importDefault(require("../scope"));
var BlockStatement = /** @class */ (function () {
    function BlockStatement() {
    }
    BlockStatement.prototype.visitNode = function (node) {
        var parentScope = interpreterModule_1["default"].getCurrentScope();
        interpreterModule_1["default"].setCurrentScope(new scope_1["default"](parentScope));
        interpreterModule_1["default"].getCurrentScope().setLoop(parentScope.isLoop());
        if (Array.isArray(node.body)) {
            node.body.every(function (statement) {
                interpreterModule_1["default"].decrementPatience();
                if (interpreterModule_1["default"].getCurrentScope().isBreakStatement()) {
                    return false;
                }
                if (interpreterModule_1["default"].getCurrentScope().isContinueStatement()) {
                    parentScope.setContinueStatement(true);
                    return false;
                }
                interpreterModule_1["default"].getVisitor(statement.type).visitNode(statement);
                return true;
            });
        }
        parentScope.setBreakStatement(interpreterModule_1["default"].getCurrentScope().isBreakStatement());
        interpreterModule_1["default"].getCurrentScope().checkUnusedVariables();
        interpreterModule_1["default"].setCurrentScope(parentScope);
    };
    return BlockStatement;
}());
exports["default"] = BlockStatement;
