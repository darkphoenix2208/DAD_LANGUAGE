"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var interpreterModule_1 = __importDefault(require("../../module/interpreterModule"));
var SwitchStatement = /** @class */ (function () {
    function SwitchStatement() {
    }
    SwitchStatement.prototype.visitNode = function (node) {
        var discriminant = interpreterModule_1["default"].getVisitor(node.discriminant.type).visitNode(node.discriminant);
        var matched = false;
        // Evaluate cases
        // node.cases is array of SwitchCase
        for (var _i = 0, _a = node.cases || []; _i < _a.length; _i++) {
            var switchCase = _a[_i];
            if (!matched) {
                if (!switchCase.test) {
                    // Default case - matches if no previous case matched? 
                    // Standard switch behavior: default matches if no other case matched. 
                    // But here we are iterating in order. Default usually comes last.
                    matched = true;
                }
                else {
                    var testVal = interpreterModule_1["default"].getVisitor(switchCase.test.type).visitNode(switchCase.test);
                    if (testVal === discriminant) {
                        matched = true;
                    }
                }
            }
            if (matched) {
                // Execute consequent
                var consequent = switchCase.consequent || [];
                // It's a list of statements.
                // We need to execute them.
                // Check for break? Scope?
                // Usually switch blocks share scope, or have block scope.
                // DadLang parser put StatementList in consequent.
                // We need to handle 'break' (bas_ho_gaya).
                // If break is encountered, we stop execution of switch.
                // We can check InterpreterModule.getCurrentScope().isBreakStatement()
                for (var _b = 0, consequent_1 = consequent; _b < consequent_1.length; _b++) {
                    var stmt = consequent_1[_b];
                    interpreterModule_1["default"].getVisitor(stmt.type).visitNode(stmt);
                    if (interpreterModule_1["default"].getCurrentScope().isBreakStatement()) {
                        interpreterModule_1["default"].getCurrentScope().setBreakStatement(false); // Consume break
                        return;
                    }
                    if (interpreterModule_1["default"].getCurrentScope().isContinueStatement()) {
                        // Continue usually doesn't apply to switch unless inside a loop.
                        // If inside loop, it should bubble up.
                        return;
                    }
                }
            }
        }
    };
    return SwitchStatement;
}());
exports["default"] = SwitchStatement;
