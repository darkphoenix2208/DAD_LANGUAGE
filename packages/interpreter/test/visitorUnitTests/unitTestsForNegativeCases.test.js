"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var bhai_lang_parser_1 = require("bhai-lang-parser");
var src_1 = require("../../src");
var scope_1 = __importDefault(require("../../src/components/scope"));
var assignmentExpression_1 = __importDefault(require("../../src/components/visitor/assignmentExpression"));
var binaryExpression_1 = __importDefault(require("../../src/components/visitor/binaryExpression"));
var identifierExpression_1 = __importDefault(require("../../src/components/visitor/identifierExpression"));
var printStatement_1 = __importDefault(require("../../src/components/visitor/printStatement"));
var program_1 = __importDefault(require("../../src/components/visitor/program"));
var variableDeclaration_1 = __importDefault(require("../../src/components/visitor/variableDeclaration"));
var variableStatement_1 = __importDefault(require("../../src/components/visitor/variableStatement"));
var invalidStateException_1 = __importDefault(require("../../src/exceptions/invalidStateException"));
jest.mock("../../src/module/interpreterModule");
var assignmentExpression = new assignmentExpression_1["default"]();
var binaryExpression = new binaryExpression_1["default"]();
var identifierExpression = new identifierExpression_1["default"]();
var program = new program_1["default"]();
var variableDeclaration = new variableDeclaration_1["default"]();
var variableStatement = new variableStatement_1["default"]();
var printStatement = new printStatement_1["default"]();
var scope = new scope_1["default"](null);
test("interpreter test assignmentExpression without left node should throw an exception", function () {
    var astNode = {
        type: bhai_lang_parser_1.NodeType.ExpressionStatement,
        operator: "="
    };
    expect(function () { return assignmentExpression.visitNode(astNode); }).toThrow(invalidStateException_1["default"]);
});
test("interpreter test binaryExpression without left node should throw an exception", function () {
    var astNode = {
        type: bhai_lang_parser_1.NodeType.BinaryExpression,
        operator: "="
    };
    expect(function () { return binaryExpression.visitNode(astNode); }).toThrow(invalidStateException_1["default"]);
});
test("interpreter test binaryExpression without right node should throw an exception", function () {
    var astNode = {
        type: bhai_lang_parser_1.NodeType.BinaryExpression,
        operator: "=",
        left: {
            type: bhai_lang_parser_1.NodeType.NumericLiteral,
            value: 5
        }
    };
    expect(function () { return binaryExpression.visitNode(astNode); }).toThrow(invalidStateException_1["default"]);
});
test("interpreter test binaryExpression without operator should throw an exception", function () {
    var astNode = {
        type: bhai_lang_parser_1.NodeType.BinaryExpression,
        left: {
            type: bhai_lang_parser_1.NodeType.NumericLiteral,
            value: 5
        },
        right: {
            type: bhai_lang_parser_1.NodeType.NumericLiteral,
            value: 10
        }
    };
    expect(function () { return binaryExpression.visitNode(astNode); }).toThrow(invalidStateException_1["default"]);
});
test("interpreter test identifierExpression without identifier should throw an exception", function () {
    var astNode = {
        type: bhai_lang_parser_1.NodeType.IdentifierExpression
    };
    expect(function () { return identifierExpression.visitNode(astNode); }).toThrow(invalidStateException_1["default"]);
});
test("interpreter test \"Program\" without body should throw an exception", function () {
    var astNode = {
        type: bhai_lang_parser_1.NodeType.Program
    };
    expect(function () { return program.visitNode(astNode); }).toThrow(invalidStateException_1["default"]);
});
test("interpreter test \"Program\" with an array body should throw an exception", function () {
    var astNode = {
        type: bhai_lang_parser_1.NodeType.Program,
        body: []
    };
    expect(function () { return program.visitNode(astNode); }).toThrow(invalidStateException_1["default"]);
});
test("interpreter test VariableDeclaration without an id should throw an exception", function () {
    var astNode = {
        type: bhai_lang_parser_1.NodeType.VariableDeclaration,
        init: {
            type: bhai_lang_parser_1.NodeType.NullLiteral,
            value: null
        }
    };
    expect(function () { return variableDeclaration.visitNode(astNode); }).toThrow(invalidStateException_1["default"]);
});
test("interpreter test VariableDeclaration without an init should throw an exception", function () {
    var astNode = {
        type: bhai_lang_parser_1.NodeType.VariableDeclaration,
        id: {
            type: bhai_lang_parser_1.NodeType.IdentifierExpression,
            name: "a"
        }
    };
    expect(function () { return variableDeclaration.visitNode(astNode); }).toThrow(invalidStateException_1["default"]);
});
test("interpreter test VariableStatement without variable declarations should throw an exception", function () {
    var astNode = {
        type: bhai_lang_parser_1.NodeType.VariableStatement
    };
    expect(function () { return variableStatement.visitNode(astNode); }).toThrow(invalidStateException_1["default"]);
});
test("interpreter test PrintStatement without expressions should throw an exception", function () {
    var astNode = {
        type: bhai_lang_parser_1.NodeType.PrintStatement
    };
    expect(function () { return printStatement.visitNode(astNode); }).toThrow(invalidStateException_1["default"]);
});
test("interpreter test Scope assign with undeclared variable should throw an exception", function () {
    expect(function () { return scope.assign("undeclared_identifier", 45); }).toThrow(src_1.RuntimeException);
});
