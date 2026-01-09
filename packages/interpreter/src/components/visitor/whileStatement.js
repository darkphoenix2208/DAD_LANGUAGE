"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var interpreterModule_1 = __importDefault(require("../../module/interpreterModule"));
var scope_1 = __importDefault(require("../scope"));
var WhileStatement = /** @class */ (function () {
    function WhileStatement() {
    }
    WhileStatement.prototype.visitNode = function (node) {
        var test = node.test;
        if (test) {
            var getConditionValue = function () { return interpreterModule_1["default"].getVisitor(test.type).visitNode(test); };
            var parentScope = interpreterModule_1["default"].getCurrentScope();
            interpreterModule_1["default"].setCurrentScope(new scope_1["default"](parentScope));
            interpreterModule_1["default"].getCurrentScope().setLoop(true);
            for (var testResult = getConditionValue(); testResult === true || testResult === "sahi" || testResult === "sharmaji_ka_beta"; testResult = getConditionValue()) {
                interpreterModule_1["default"].decrementPatience();
                if (interpreterModule_1["default"].getCurrentScope().isBreakStatement()) {
                    break;
                }
                if (interpreterModule_1["default"].getCurrentScope().isContinueStatement()) {
                    interpreterModule_1["default"].getCurrentScope().setContinueStatement(false);
                    continue;
                }
                var body = node.body;
                if (body && !Array.isArray(body)) {
                    interpreterModule_1["default"].getVisitor(body.type).visitNode(body);
                }
            }
            interpreterModule_1["default"].setCurrentScope(parentScope);
        }
    };
    return WhileStatement;
}());
exports["default"] = WhileStatement;
