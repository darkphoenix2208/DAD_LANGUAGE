"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var parser_1 = require("../components/parser");
var program_1 = __importDefault(require("../components/parser/program"));
var blockStatement_1 = __importDefault(require("../components/parser/statement/blockStatement"));
var breakStatement_1 = __importDefault(require("../components/parser/statement/breakStatement"));
var continueStatement_1 = __importDefault(require("../components/parser/statement/continueStatement"));
var emptyStatement_1 = __importDefault(require("../components/parser/statement/emptyStatement"));
var addititveExpression_1 = __importDefault(require("../components/parser/statement/expression/addititveExpression"));
var assignmentExpression_1 = __importDefault(require("../components/parser/statement/expression/assignmentExpression"));
var equalityExpression_1 = __importDefault(require("../components/parser/statement/expression/equalityExpression"));
var sleepStatement_1 = __importDefault(require("../components/parser/statement/sleepStatement"));
var tryCatchStatement_1 = __importDefault(require("../components/parser/statement/tryCatchStatement"));
var identifierExpression_1 = __importDefault(require("../components/parser/statement/expression/identifierExpression"));
var booleanLiteral_1 = __importDefault(require("../components/parser/statement/expression/literals/booleanLiteral"));
var nullLiteral_1 = __importDefault(require("../components/parser/statement/expression/literals/nullLiteral"));
var numericLiteral_1 = __importDefault(require("../components/parser/statement/expression/literals/numericLiteral"));
var stringLiteral_1 = __importDefault(require("../components/parser/statement/expression/literals/stringLiteral"));
var logicalANDExpression_1 = __importDefault(require("../components/parser/statement/expression/logicalANDExpression"));
var logicalORExpression_1 = __importDefault(require("../components/parser/statement/expression/logicalORExpression"));
var multiplicativeExpression_1 = __importDefault(require("../components/parser/statement/expression/multiplicativeExpression"));
var paranthesizedExpression_1 = __importDefault(require("../components/parser/statement/expression/paranthesizedExpression"));
var primaryExpression_1 = __importDefault(require("../components/parser/statement/expression/primaryExpression"));
var relationalExpression_1 = __importDefault(require("../components/parser/statement/expression/relationalExpression"));
var arrayExpression_1 = __importDefault(require("../components/parser/statement/expression/arrayExpression"));
var memberExpression_1 = __importDefault(require("../components/parser/statement/expression/memberExpression"));
var expressionStatement_1 = __importDefault(require("../components/parser/statement/expressionStatement"));
var ifStatement_1 = __importDefault(require("../components/parser/statement/ifStatement"));
var initStatement_1 = __importDefault(require("../components/parser/statement/initStatement"));
var printStatement_1 = __importDefault(require("../components/parser/statement/printStatement"));
var variableStatement_1 = __importDefault(require("../components/parser/statement/variableStatement"));
var whileStatement_1 = __importDefault(require("../components/parser/statement/whileStatement"));
var classDeclaration_1 = __importDefault(require("../components/parser/statement/classDeclaration"));
var switchStatement_1 = __importDefault(require("../components/parser/statement/switchStatement"));
var newExpression_1 = __importDefault(require("../components/parser/statement/expression/newExpression"));
var thisExpression_1 = __importDefault(require("../components/parser/statement/expression/thisExpression"));
var statementList_1 = __importDefault(require("../components/parser/statementList"));
var tokenExecutor_1 = __importDefault(require("../components/parser/tokenExecutor"));
var tokenizer_1 = __importDefault(require("../components/tokenizer"));
var dadLangSpec_1 = require("../constants/dadLangSpec");
var DadLangModule = /** @class */ (function () {
    function DadLangModule() {
    }
    DadLangModule.getTokenizer = function () {
        if (!this._tokenizer)
            this._tokenizer = new tokenizer_1["default"](dadLangSpec_1.SPEC);
        return this._tokenizer;
    };
    DadLangModule.getTokenExecutor = function () {
        if (!this._tokenExecutor)
            this._tokenExecutor = new tokenExecutor_1["default"](this.getTokenizer());
        return this._tokenExecutor;
    };
    DadLangModule.getStatementList = function () {
        if (!this._statementList)
            this._statementList = new statementList_1["default"](this.getTokenExecutor());
        return this._statementList;
    };
    DadLangModule.getInitStatement = function () {
        if (!this._initStatement)
            this._initStatement = new initStatement_1["default"](this.getTokenExecutor(), this.getStatementList());
        return this._initStatement;
    };
    DadLangModule.getPrintStatement = function () {
        if (!this._printStatement) {
            this._printStatement = new printStatement_1["default"](this.getTokenExecutor());
        }
        return this._printStatement;
    };
    DadLangModule.getIfStatement = function () {
        if (!this._ifStatement) {
            this._ifStatement = new ifStatement_1["default"](this.getTokenExecutor());
        }
        return this._ifStatement;
    };
    DadLangModule.getBreakStatement = function () {
        if (!this._breakStatement) {
            this._breakStatement = new breakStatement_1["default"](this.getTokenExecutor());
        }
        return this._breakStatement;
    };
    DadLangModule.getContinueStatement = function () {
        if (!this._continueStatement) {
            this._continueStatement = new continueStatement_1["default"](this.getTokenExecutor());
        }
        return this._continueStatement;
    };
    DadLangModule.getWhileStatement = function () {
        if (!this._whileStatement) {
            this._whileStatement = new whileStatement_1["default"](this.getTokenExecutor());
        }
        return this._whileStatement;
    };
    DadLangModule.getExpressionStatement = function () {
        if (!this._expresionStatement) {
            this._expresionStatement = new expressionStatement_1["default"](this.getTokenExecutor());
        }
        return this._expresionStatement;
    };
    DadLangModule.getEmptyStatement = function () {
        if (!this._emptyStatement) {
            this._emptyStatement = new emptyStatement_1["default"](this.getTokenExecutor());
        }
        return this._emptyStatement;
    };
    DadLangModule.getBlockStatement = function () {
        if (!this._blockStatement) {
            this._blockStatement = new blockStatement_1["default"](this.getTokenExecutor(), this.getStatementList());
        }
        return this._blockStatement;
    };
    DadLangModule.getVariableStatement = function () {
        if (!this._variableStatement)
            this._variableStatement = new variableStatement_1["default"](this.getTokenExecutor(), this.getNullLiteral());
        return this._variableStatement;
    };
    DadLangModule.getAdditiveExpression = function () {
        if (!this._additiveExpression) {
            this._additiveExpression = new addititveExpression_1["default"](this.getTokenExecutor());
        }
        return this._additiveExpression;
    };
    DadLangModule.getMultiplicativeExpression = function () {
        if (!this._multiplicativeExpression) {
            this._multiplicativeExpression = new multiplicativeExpression_1["default"](this.getTokenExecutor());
        }
        return this._multiplicativeExpression;
    };
    DadLangModule.getPrimaryExpression = function () {
        if (!this._primaryExpression) {
            this._primaryExpression = new primaryExpression_1["default"](this.getTokenExecutor());
        }
        return this._primaryExpression;
    };
    DadLangModule.getParanthesizedExpression = function () {
        if (!this._paranthesizedExpression) {
            this._paranthesizedExpression = new paranthesizedExpression_1["default"](this.getTokenExecutor());
        }
        return this._paranthesizedExpression;
    };
    DadLangModule.getIndentifierExpression = function () {
        if (!this._idetifierExpression)
            this._idetifierExpression = new identifierExpression_1["default"](this.getTokenExecutor());
        return this._idetifierExpression;
    };
    DadLangModule.getEqualityExpression = function () {
        if (!this._equalityExpression)
            this._equalityExpression = new equalityExpression_1["default"](this.getTokenExecutor());
        return this._equalityExpression;
    };
    DadLangModule.getLogicalANDExpression = function () {
        if (!this._logicalANDExpression)
            this._logicalANDExpression = new logicalANDExpression_1["default"](this.getTokenExecutor());
        return this._logicalANDExpression;
    };
    DadLangModule.getLogicalORExpression = function () {
        if (!this._logicalORExpression)
            this._logicalORExpression = new logicalORExpression_1["default"](this.getTokenExecutor());
        return this._logicalORExpression;
    };
    DadLangModule.getRelationalExpression = function () {
        if (!this._relationalExpression)
            this._relationalExpression = new relationalExpression_1["default"](this.getTokenExecutor());
        return this._relationalExpression;
    };
    DadLangModule.getAssignmentExpression = function () {
        if (!this._assignmentExpression)
            this._assignmentExpression = new assignmentExpression_1["default"](this.getTokenExecutor());
        return this._assignmentExpression;
    };
    DadLangModule.getNumericLiteral = function () {
        if (!this._numericLiteral) {
            this._numericLiteral = new numericLiteral_1["default"](this.getTokenExecutor());
        }
        return this._numericLiteral;
    };
    DadLangModule.getStringLiteral = function () {
        if (!this._stringLiteral) {
            this._stringLiteral = new stringLiteral_1["default"](this.getTokenExecutor());
        }
        return this._stringLiteral;
    };
    DadLangModule.getBooleanLiteral = function () {
        if (!this._booleanLiteral) {
            this._booleanLiteral = new booleanLiteral_1["default"](this.getTokenExecutor());
        }
        return this._booleanLiteral;
    };
    DadLangModule.getNullLiteral = function () {
        if (!this._nullLiteral) {
            this._nullLiteral = new nullLiteral_1["default"](this.getTokenExecutor());
        }
        return this._nullLiteral;
    };
    DadLangModule.getProgram = function () {
        if (!this._program)
            this._program = new program_1["default"](this.getStatementList());
        return this._program;
    };
    DadLangModule.getParser = function () {
        if (!this._parser)
            this._parser = new parser_1.Parser(this.getTokenizer(), this.getProgram(), this.getTokenExecutor());
        return this._parser;
    };
    DadLangModule.getSleepStatement = function () {
        if (!this._sleepStatement) {
            this._sleepStatement = new sleepStatement_1["default"](this.getTokenExecutor());
        }
        return this._sleepStatement;
    };
    DadLangModule.getTryCatchStatement = function () {
        if (!this._tryCatchStatement) {
            this._tryCatchStatement = new tryCatchStatement_1["default"](this.getTokenExecutor(), this.getStatementList());
        }
        return this._tryCatchStatement;
    };
    DadLangModule.getArrayExpression = function () {
        if (!this._arrayExpression) {
            this._arrayExpression = new arrayExpression_1["default"](this.getTokenExecutor());
        }
        return this._arrayExpression;
    };
    DadLangModule.getMemberExpression = function () {
        if (!this._memberExpression) {
            this._memberExpression = new memberExpression_1["default"](this.getTokenExecutor());
        }
        return this._memberExpression;
    };
    DadLangModule.getClassDeclaration = function () {
        if (!this._classDeclaration) {
            this._classDeclaration = new classDeclaration_1["default"](this.getTokenExecutor());
        }
        return this._classDeclaration;
    };
    DadLangModule.getSwitchStatement = function () {
        if (!this._switchStatement) {
            this._switchStatement = new switchStatement_1["default"](this.getTokenExecutor());
        }
        return this._switchStatement;
    };
    DadLangModule.getNewExpression = function () {
        if (!this._newExpression) {
            this._newExpression = new newExpression_1["default"](this.getTokenExecutor());
        }
        return this._newExpression;
    };
    DadLangModule.getThisExpression = function () {
        if (!this._thisExpression) {
            this._thisExpression = new thisExpression_1["default"](this.getTokenExecutor());
        }
        return this._thisExpression;
    };
    return DadLangModule;
}());
exports["default"] = DadLangModule;
