"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var interpreterModule_1 = __importDefault(require("../module/interpreterModule"));
var scope_1 = __importDefault(require("./scope"));
var Interpreter = /** @class */ (function () {
    function Interpreter(parserObj, scope) {
        this._parser = parserObj;
        this._scope = scope;
    }
    Interpreter.prototype.interpret = function (code) {
        try {
            interpreterModule_1["default"].resetPatience();
            var scope = interpreterModule_1["default"].getCurrentScope();
            scope.declare("kismat", function () { return Math.random(); }, true);
            scope.declare("tol_mol", function (val) { return Math.round(val); }, true);
            scope.declare("taarik_pe_taarik", function () { return Date.now(); }, true);
            // Reset count for user variables (don't count system globals)
            scope_1["default"].activeVariableCount = 0;
            var ast = this._parser.parse(code);
            interpreterModule_1["default"].getVisitor(ast.type).visitNode(ast);
        }
        finally {
            // reset the scope for next run
            interpreterModule_1["default"].setCurrentScope(new scope_1["default"](null));
        }
    };
    Interpreter.prototype.setMode = function (mode) {
        interpreterModule_1["default"].setMode(mode);
    };
    return Interpreter;
}());
exports["default"] = Interpreter;
