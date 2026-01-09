"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var scope_1 = __importDefault(require("../../src/components/scope"));
var invalidStateException_1 = __importDefault(require("../../src/exceptions/invalidStateException"));
var interpreterModule_1 = __importDefault(require("../../src/module/interpreterModule"));
jest.mock("../../src/components/visitor/program", function () {
    return jest.fn().mockImplementation(function () { return ({
        visitNode: jest.fn()
    }); });
});
jest.mock("../../src/components/visitor/initStatement", function () {
    return jest.fn().mockImplementation(function () { return ({
        visitNode: jest.fn()
    }); });
});
jest.mock("../../src/components/visitor/printStatement", function () {
    return jest.fn().mockImplementation(function () { return ({
        visitNode: jest.fn()
    }); });
});
jest.mock("../../src/components/visitor/emptyStatement", function () {
    return jest.fn().mockImplementation(function () { return ({
        visitNode: jest.fn()
    }); });
});
jest.mock("../../src/components/visitor/blockStatement", function () {
    return jest.fn().mockImplementation(function () { return ({
        visitNode: jest.fn()
    }); });
});
jest.mock("../../src/components/visitor/variableStatement", function () {
    return jest.fn().mockImplementation(function () { return ({
        visitNode: jest.fn()
    }); });
});
jest.mock("../../src/components/visitor/identifierExpression", function () {
    return jest.fn().mockImplementation(function () { return ({
        visitNode: jest.fn()
    }); });
});
jest.mock("../../src/components/visitor/variableDeclaration", function () {
    return jest.fn().mockImplementation(function () { return ({
        visitNode: jest.fn()
    }); });
});
jest.mock("../../src/components/visitor/assignmentExpression", function () {
    return jest.fn().mockImplementation(function () { return ({
        visitNode: jest.fn()
    }); });
});
jest.mock("../../src/components/visitor/expressionStatement", function () {
    return jest.fn().mockImplementation(function () { return ({
        visitNode: jest.fn()
    }); });
});
jest.mock("../../src/components/visitor/binaryExpression", function () {
    return jest.fn().mockImplementation(function () { return ({
        visitNode: jest.fn()
    }); });
});
jest.mock("../../src/components/visitor/stringLiteral", function () {
    return jest.fn().mockImplementation(function () { return ({
        visitNode: jest.fn()
    }); });
});
jest.mock("../../src/components/visitor/numericLiteral", function () {
    return jest.fn().mockImplementation(function () { return ({
        visitNode: jest.fn()
    }); });
});
jest.mock("../../src/components/visitor/booleanLiteral", function () {
    return jest.fn().mockImplementation(function () { return ({
        visitNode: jest.fn()
    }); });
});
jest.mock("../../src/components/visitor/nullLiteral", function () {
    return jest.fn().mockImplementation(function () { return ({
        visitNode: jest.fn()
    }); });
});
test("interpreter test InterpreterModule getVisitor with unknown node type should throw an exception", function () {
    expect(function () {
        return interpreterModule_1["default"].getVisitor("visitor_for_this_node_type_not_present");
    }).toThrow(invalidStateException_1["default"]);
});
test("interpreter test InterpreterModule getCurrentScope should success", function () {
    expect(interpreterModule_1["default"].getCurrentScope()).toBeInstanceOf(scope_1["default"]);
});
