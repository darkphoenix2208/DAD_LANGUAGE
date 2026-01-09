"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var interpreterModule_1 = __importDefault(require("../../module/interpreterModule"));
var scope_1 = __importDefault(require("../scope"));
var IfStatement = /** @class */ (function () {
    function IfStatement() {
    }
    IfStatement.prototype.evaluateNode = function (node, parentScope) {
        if (node) {
            interpreterModule_1["default"].setCurrentScope(new scope_1["default"](parentScope));
            interpreterModule_1["default"].getCurrentScope().setLoop(parentScope.isLoop());
            interpreterModule_1["default"].getVisitor(node.type).visitNode(node);
        }
    };
    IfStatement.prototype.visitNode = function (node) {
        var test = node.test;
        var parentScope = interpreterModule_1["default"].getCurrentScope();
        if (test) {
            var testResult = interpreterModule_1["default"].getVisitor(test.type).visitNode(test);
            if (testResult === true || testResult === "sahi") {
                this.evaluateNode(node.consequent, parentScope);
            }
            else {
                var alternates = node.alternates;
                if (alternates && alternates.length > 0) {
                    for (var _i = 0, alternates_1 = alternates; _i < alternates_1.length; _i++) {
                        var alternate = alternates_1[_i];
                        var alternateTest = alternate.test;
                        if (!alternateTest) {
                            // Reached the "warna bhai" node in the alternate list, simply evaluate it and break
                            this.evaluateNode(alternate, parentScope);
                            break;
                        }
                        else {
                            // Evaluate the "test" condition of the "nahi to bhai" node
                            // If the condition is true, evaluate the node and break
                            var testResult_1 = interpreterModule_1["default"].getVisitor(alternateTest.type).visitNode(alternateTest);
                            if (testResult_1 === true || testResult_1 === "sahi") {
                                this.evaluateNode(alternate.consequent, parentScope);
                                break;
                            }
                        }
                    }
                }
            }
        }
        parentScope.setBreakStatement(interpreterModule_1["default"].getCurrentScope().isBreakStatement());
        parentScope.setContinueStatement(interpreterModule_1["default"].getCurrentScope().isContinueStatement());
        interpreterModule_1["default"].setCurrentScope(parentScope);
    };
    return IfStatement;
}());
exports["default"] = IfStatement;
