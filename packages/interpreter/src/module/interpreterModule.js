"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
exports.__esModule = true;
var dad_lang_parser_1 = __importStar(require("dad-lang-parser"));
var runtimeException_1 = __importDefault(require("../exceptions/runtimeException"));
var interpreter_1 = __importDefault(require("../components/interpreter"));
var scope_1 = __importDefault(require("../components/scope"));
var assignmentExpression_1 = __importDefault(require("../components/visitor/assignmentExpression"));
var binaryExpression_1 = __importDefault(require("../components/visitor/binaryExpression"));
var blockStatement_1 = __importDefault(require("../components/visitor/blockStatement"));
var booleanLiteral_1 = __importDefault(require("../components/visitor/booleanLiteral"));
var breakStatement_1 = __importDefault(require("../components/visitor/breakStatement"));
var continueStatement_1 = __importDefault(require("../components/visitor/continueStatement"));
var emptyStatement_1 = __importDefault(require("../components/visitor/emptyStatement"));
var expressionStatement_1 = __importDefault(require("../components/visitor/expressionStatement"));
var identifierExpression_1 = __importDefault(require("../components/visitor/identifierExpression"));
var ifStatement_1 = __importDefault(require("../components/visitor/ifStatement"));
var initStatement_1 = __importDefault(require("../components/visitor/initStatement"));
var nullLiteral_1 = __importDefault(require("../components/visitor/nullLiteral"));
var numericLiteral_1 = __importDefault(require("../components/visitor/numericLiteral"));
var printStatement_1 = __importDefault(require("../components/visitor/printStatement"));
var program_1 = __importDefault(require("../components/visitor/program"));
var stringLiteral_1 = __importDefault(require("../components/visitor/stringLiteral"));
var variableDeclaration_1 = __importDefault(require("../components/visitor/variableDeclaration"));
var variableStatement_1 = __importDefault(require("../components/visitor/variableStatement"));
var whileStatement_1 = __importDefault(require("../components/visitor/whileStatement"));
var sleepStatement_1 = __importDefault(require("../components/visitor/sleepStatement"));
var tryCatchStatement_1 = __importDefault(require("../components/visitor/tryCatchStatement"));
var invalidStateException_1 = __importDefault(require("../exceptions/invalidStateException"));
var arrayExpression_1 = __importDefault(require("../components/visitor/arrayExpression"));
var memberExpression_1 = __importDefault(require("../components/visitor/memberExpression"));
var callExpression_1 = __importDefault(require("../components/visitor/callExpression"));
var classDeclaration_1 = __importDefault(require("../components/visitor/classDeclaration"));
var switchStatement_1 = __importDefault(require("../components/visitor/switchStatement"));
var newExpression_1 = __importDefault(require("../components/visitor/newExpression"));
var thisExpression_1 = __importDefault(require("../components/visitor/thisExpression"));
var chalk_1 = __importDefault(require("chalk"));
var InterpreterModule = /** @class */ (function () {
    function InterpreterModule() {
    }
    InterpreterModule.getVisitor = function (nodeType) {
        var visitor = InterpreterModule._visitorMap[nodeType];
        if (!visitor)
            throw new invalidStateException_1["default"]("Couldn't find any visitor object for nodeType: ".concat(nodeType));
        return visitor;
    };
    InterpreterModule.getInterpreter = function () {
        var _a;
        this._interpreter =
            (_a = this._interpreter) !== null && _a !== void 0 ? _a : new interpreter_1["default"](dad_lang_parser_1["default"], this.getCurrentScope());
        return this._interpreter;
    };
    InterpreterModule.getCurrentScope = function () {
        var _a;
        this._currentScope = (_a = this._currentScope) !== null && _a !== void 0 ? _a : new scope_1["default"](null);
        return this._currentScope;
    };
    InterpreterModule.setCurrentScope = function (scope) {
        this._currentScope = scope;
    };
    InterpreterModule.setMode = function (mode) {
        this._mode = mode;
    };
    InterpreterModule.getMode = function () {
        return this._mode;
    };
    InterpreterModule.resetPatience = function () {
        this._patienceLevel = 1000;
    };
    InterpreterModule.decrementPatience = function () {
        this._patienceLevel--;
        if (this._patienceLevel <= 0) {
            if (this._mode === "mummy") {
                console.warn(chalk_1["default"].yellow("Bas kar beta, thak gaya hoga (Warning: Long execution)"));
                this._patienceLevel = 1000; // Give bonus time
            }
            else {
                throw new runtimeException_1["default"]("Din bhar computer pe baitha rehta hai! Band kar isko! (Runtime Limit Exceeded)");
            }
        }
    };
    InterpreterModule._visitorMap = (_a = {},
        _a[dad_lang_parser_1.NodeType.Program] = new program_1["default"](),
        _a[dad_lang_parser_1.NodeType.InitStatement] = new initStatement_1["default"](),
        _a[dad_lang_parser_1.NodeType.PrintStatement] = new printStatement_1["default"](),
        _a[dad_lang_parser_1.NodeType.EmptyStatement] = new emptyStatement_1["default"](),
        _a[dad_lang_parser_1.NodeType.BlockStatement] = new blockStatement_1["default"](),
        _a[dad_lang_parser_1.NodeType.VariableStatement] = new variableStatement_1["default"](),
        _a[dad_lang_parser_1.NodeType.IdentifierExpression] = new identifierExpression_1["default"](),
        _a[dad_lang_parser_1.NodeType.VariableDeclaration] = new variableDeclaration_1["default"](),
        _a[dad_lang_parser_1.NodeType.AssignmentExpression] = new assignmentExpression_1["default"](),
        _a[dad_lang_parser_1.NodeType.ExpressionStatement] = new expressionStatement_1["default"](),
        _a[dad_lang_parser_1.NodeType.BinaryExpression] = new binaryExpression_1["default"](),
        _a[dad_lang_parser_1.NodeType.LogicalExpression] = new binaryExpression_1["default"](),
        _a[dad_lang_parser_1.NodeType.StringLiteral] = new stringLiteral_1["default"](),
        _a[dad_lang_parser_1.NodeType.NumericLiteral] = new numericLiteral_1["default"](),
        _a[dad_lang_parser_1.NodeType.BooleanLiteral] = new booleanLiteral_1["default"](),
        _a[dad_lang_parser_1.NodeType.NullLiteral] = new nullLiteral_1["default"](),
        _a[dad_lang_parser_1.NodeType.IfStatement] = new ifStatement_1["default"](),
        _a[dad_lang_parser_1.NodeType.WhileStatement] = new whileStatement_1["default"](),
        _a[dad_lang_parser_1.NodeType.BreakStatement] = new breakStatement_1["default"](),
        _a[dad_lang_parser_1.NodeType.ContinueStatement] = new continueStatement_1["default"](),
        _a[dad_lang_parser_1.NodeType.SleepStatement] = new sleepStatement_1["default"](),
        _a[dad_lang_parser_1.NodeType.TryCatchStatement] = new tryCatchStatement_1["default"](),
        _a[dad_lang_parser_1.NodeType.ArrayExpression] = new arrayExpression_1["default"](),
        _a[dad_lang_parser_1.NodeType.MemberExpression] = new memberExpression_1["default"](),
        _a[dad_lang_parser_1.NodeType.CallExpression] = new callExpression_1["default"](),
        _a[dad_lang_parser_1.NodeType.ClassDeclaration] = new classDeclaration_1["default"](),
        _a[dad_lang_parser_1.NodeType.SwitchStatement] = new switchStatement_1["default"](),
        _a[dad_lang_parser_1.NodeType.NewExpression] = new newExpression_1["default"](),
        _a[dad_lang_parser_1.NodeType.ThisExpression] = new thisExpression_1["default"](),
        _a);
    InterpreterModule._mode = "daddy";
    InterpreterModule._patienceLevel = 1000;
    return InterpreterModule;
}());
exports["default"] = InterpreterModule;
