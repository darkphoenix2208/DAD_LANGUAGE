"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var src_1 = require("../../src");
var invalidStateException_1 = __importDefault(require("../../src/exceptions/invalidStateException"));
var helpers_1 = require("../../src/helpers");
var testCaseProvider = [
    // checkNumberOperands tests
    {
        name: "test checkNumberOperands with number oprands, should return true",
        input: {
            left: 45,
            right: 67
        },
        output: true,
        "function": helpers_1.checkNumberOperands
    },
    {
        name: "test checkNumberOperands without number oprands, should return false",
        input: {
            left: "hello",
            right: "67"
        },
        output: false,
        "function": helpers_1.checkNumberOperands
    },
    {
        name: "test checkNumberOperands with one number oprand and one non-number operand, should return false",
        input: {
            left: 90,
            right: "67"
        },
        output: false,
        "function": helpers_1.checkNumberOperands
    },
    {
        name: "test checkNumberOperands with one number oprand and one non-number operand - 2, should return false",
        input: {
            left: "67",
            right: 5678
        },
        output: false,
        "function": helpers_1.checkNumberOperands
    },
    // checkStringOperands tests
    {
        name: "test checkStringOperands with string oprands, should return true",
        input: {
            left: "45",
            right: "asdasdas"
        },
        output: true,
        "function": helpers_1.checkStringOperands
    },
    {
        name: "test checkStringOperands without string oprands, should return false",
        input: {
            left: 23432,
            right: null
        },
        output: false,
        "function": helpers_1.checkStringOperands
    },
    {
        name: "test checkStringOperands with one string oprand and one non-string operand, should return false",
        input: {
            left: 90,
            right: "67"
        },
        output: false,
        "function": helpers_1.checkStringOperands
    },
    {
        name: "test checkStringOperands with one number string and one non-string operand - 2, should return false",
        input: {
            left: "67",
            right: 5678
        },
        output: false,
        "function": helpers_1.checkStringOperands
    },
];
var getOperationValuePosTestCasesProvider = [
    // getOperationValue tests
    {
        name: "test getOperationValue \"=\" operator with string oprands, should return value of right operand - number",
        input1: {
            left: 23432,
            right: 890
        },
        input2: "=",
        output: 890,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"=\" operator with string oprands, should return value of right operand - null",
        input1: {
            left: 23432,
            right: null
        },
        input2: "=",
        output: null,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"=\" operator with string oprands, should return value of right operand - string",
        input1: {
            left: 23432,
            right: "hello"
        },
        input2: "=",
        output: "hello",
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"+\" operator with string oprands, should success",
        input1: {
            left: "hello",
            right: "crap"
        },
        input2: "+",
        output: "hellocrap",
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"+\" operator with number oprands, should success",
        input1: {
            left: 2,
            right: 3
        },
        input2: "+",
        output: 5,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"+\" operator with one number and one string oprands, should success",
        input1: {
            left: 15,
            right: "hello"
        },
        input2: "+",
        output: "15hello",
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"+\" operator with second operand number and first string, should success",
        input1: {
            left: "hello",
            right: 15
        },
        input2: "+",
        output: "hello15",
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"+\" operator with one very large number and one string oprands, should success",
        input1: {
            left: 15378247823432,
            right: "hello"
        },
        input2: "+",
        output: "15378247823432hello",
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"+=\" operator with number oprands, should success",
        input1: {
            left: 2,
            right: 3
        },
        input2: "+=",
        output: 5,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"+=\" operator with string oprands, should success",
        input1: {
            left: "hello",
            right: "crap"
        },
        input2: "+=",
        output: "hellocrap",
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"+=\" operator with one number and one string oprands, should success",
        input1: {
            left: 15,
            right: "hello"
        },
        input2: "+=",
        output: "15hello",
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"+=\" operator with second operand number and first string, should success",
        input1: {
            left: "hello",
            right: 15
        },
        input2: "+=",
        output: "hello15",
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"+=\" operator with one very large number and one string oprands, should success",
        input1: {
            left: 15378247823432,
            right: "hello"
        },
        input2: "+",
        output: "15378247823432hello",
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"-\" operator with number oprands, should success",
        input1: {
            left: 5,
            right: 3
        },
        input2: "-",
        output: 2,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"-=\" operator with number oprands, should success",
        input1: {
            left: 5,
            right: 3
        },
        input2: "-=",
        output: 2,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"*=\" operator with number oprands, should success",
        input1: {
            left: 5,
            right: 3
        },
        input2: "*=",
        output: 15,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"*\" operator with number oprands, should success",
        input1: {
            left: 5,
            right: 3
        },
        input2: "*",
        output: 15,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"/=\" operator with number oprands, should success",
        input1: {
            left: 15,
            right: 3
        },
        input2: "/=",
        output: 5,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"/\" operator with number oprands, should success",
        input1: {
            left: 15,
            right: 3
        },
        input2: "/",
        output: 5,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"==\" operator with number oprands, should success",
        input1: {
            left: 3,
            right: 3
        },
        input2: "==",
        output: true,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"==\" operator with number oprands unequal, should success",
        input1: {
            left: 5,
            right: 3
        },
        input2: "==",
        output: false,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"==\" operator with string oprands, should success",
        input1: {
            left: "hell",
            right: "hell"
        },
        input2: "==",
        output: true,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"==\" operator with string oprands unequal, should success",
        input1: {
            left: "crap",
            right: "hell"
        },
        input2: "==",
        output: false,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"==\" operator with one string & one number, should success",
        input1: {
            left: 15,
            right: "hell"
        },
        input2: "==",
        output: false,
        "function": helpers_1.getOperationValue
    },
    // !=
    {
        name: "test getOperationValue \"!=\" operator with number oprands, should success",
        input1: {
            left: 3,
            right: 3
        },
        input2: "!=",
        output: false,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"!=\" operator with number oprands unequal, should success",
        input1: {
            left: 5,
            right: 3
        },
        input2: "!=",
        output: true,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"!=\" operator with string oprands, should success",
        input1: {
            left: "hell",
            right: "hell"
        },
        input2: "!=",
        output: false,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"!=\" operator with string oprands unequal, should success",
        input1: {
            left: "crap",
            right: "hell"
        },
        input2: "!=",
        output: true,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"!=\" operator with one string & one number, should success",
        input1: {
            left: 15,
            right: "hell"
        },
        input2: "!=",
        output: true,
        "function": helpers_1.getOperationValue
    },
    // >
    {
        name: "test getOperationValue \">\" operator with number oprands, should success",
        input1: {
            left: 3,
            right: 3
        },
        input2: ">",
        output: false,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \">\" operator with number oprands left greater, should success",
        input1: {
            left: 5,
            right: 3
        },
        input2: ">",
        output: true,
        "function": helpers_1.getOperationValue
    },
    // <
    {
        name: "test getOperationValue \"<\" operator with number oprands, should success",
        input1: {
            left: 3,
            right: 3
        },
        input2: "<",
        output: false,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"<\" operator with number oprands left smaller, should success",
        input1: {
            left: 1,
            right: 3
        },
        input2: "<",
        output: true,
        "function": helpers_1.getOperationValue
    },
    // >=
    {
        name: "test getOperationValue \">=\" operator with number oprands equal, should success",
        input1: {
            left: 3,
            right: 3
        },
        input2: ">=",
        output: true,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \">=\" operator with number oprands left greater, should success",
        input1: {
            left: 5,
            right: 3
        },
        input2: ">=",
        output: true,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \">=\" operator with number oprands left smaller, should success",
        input1: {
            left: 1,
            right: 3
        },
        input2: ">=",
        output: false,
        "function": helpers_1.getOperationValue
    },
    // <=
    {
        name: "test getOperationValue \"<=\" operator with number oprands equal, should success",
        input1: {
            left: 3,
            right: 3
        },
        input2: "<=",
        output: true,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"<=\" operator with number oprands left greater, should success",
        input1: {
            left: 5,
            right: 3
        },
        input2: "<=",
        output: false,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"<=\" operator with number oprands left smaller, should success",
        input1: {
            left: 1,
            right: 3
        },
        input2: "<=",
        output: true,
        "function": helpers_1.getOperationValue
    }
];
var getOperationValueNegTestCasesProvider = [
    {
        name: "test getOperationValue \"+\" operator with one boolean and one string oprands, should throw an exception",
        input1: {
            left: true,
            right: "hello"
        },
        input2: "+",
        exception: src_1.RuntimeException,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"+\" operator with second operand boolean and first string, should throw an exception",
        input1: {
            left: "true",
            right: false
        },
        input2: "+",
        exception: src_1.RuntimeException,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"+=\" operator with one boolean and one string oprands, should throw an exception",
        input1: {
            left: true,
            right: "hello"
        },
        input2: "+=",
        exception: src_1.RuntimeException,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"+=\" operator with second operand boolean and first string, should throw an exception",
        input1: {
            left: "true",
            right: false
        },
        input2: "+=",
        exception: src_1.RuntimeException,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"-\" operator with one number and one string oprands, should throw an exception",
        input1: {
            left: 15,
            right: "hello"
        },
        input2: "-",
        exception: src_1.RuntimeException,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"-=\" operator with one number and one string oprands, should throw an exception",
        input1: {
            left: 15,
            right: "hello"
        },
        input2: "-=",
        exception: src_1.RuntimeException,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"-=\" operator with both strings oprands, should throw an exception",
        input1: {
            left: "15",
            right: "hello"
        },
        input2: "-=",
        exception: src_1.RuntimeException,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"*\" operator with one number and one string oprands, should throw an exception",
        input1: {
            left: 15,
            right: "hello"
        },
        input2: "*",
        exception: src_1.RuntimeException,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"*=\" operator with one number and one string oprands, should throw an exception",
        input1: {
            left: 15,
            right: "hello"
        },
        input2: "*=",
        exception: src_1.RuntimeException,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"/\" operator with one number and one string oprands, should throw an exception",
        input1: {
            left: 15,
            right: "hello"
        },
        input2: "/",
        exception: src_1.RuntimeException,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"/=\" operator with one number and one string oprands, should throw an exception",
        input1: {
            left: 15,
            right: "hello"
        },
        input2: "/=",
        exception: src_1.RuntimeException,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"/\" operator with zero divisor, should throw an exception",
        input1: {
            left: 15,
            right: 0
        },
        input2: "/",
        exception: src_1.RuntimeException,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"/=\" operator with zero divisor, should throw an exception",
        input1: {
            left: 15,
            right: 0
        },
        input2: "/",
        exception: src_1.RuntimeException,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"#\" operator, should throw an exception",
        input1: {
            left: 15,
            right: 5
        },
        input2: "#",
        exception: invalidStateException_1["default"],
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \">\" operator with one string & one number, should throw an exception",
        input1: {
            left: 15,
            right: "hell"
        },
        input2: ">",
        exception: src_1.RuntimeException,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \">\" operator with both string , should throw an exception",
        input1: {
            left: "cap",
            right: "hell"
        },
        input2: ">",
        exception: src_1.RuntimeException,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"<\" operator with one string & one number, should throw an exception",
        input1: {
            left: 15,
            right: "hell"
        },
        input2: "<",
        exception: src_1.RuntimeException,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"<\" operator with both string , should throw an exception",
        input1: {
            left: "cap",
            right: "hell"
        },
        input2: "<",
        exception: src_1.RuntimeException,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \">=\" operator with one string & one number, should throw an exception",
        input1: {
            left: 15,
            right: "hell"
        },
        input2: ">=",
        exception: src_1.RuntimeException,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \">=\" operator with both string , should throw an exception",
        input1: {
            left: "cap",
            right: "hell"
        },
        input2: ">=",
        exception: src_1.RuntimeException,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"<=\" operator with one string & one number, should throw an exception",
        input1: {
            left: 15,
            right: "hell"
        },
        input2: "<=",
        exception: src_1.RuntimeException,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"<=\" operator with both string , should throw an exception",
        input1: {
            left: "cap",
            right: "hell"
        },
        input2: "<=",
        exception: src_1.RuntimeException,
        "function": helpers_1.getOperationValue
    },
    {
        name: "test getOperationValue \"**\" operator with unsupported operator , should throw an exception",
        input1: {
            left: "cap",
            right: "hell"
        },
        input2: "**",
        exception: invalidStateException_1["default"],
        "function": helpers_1.getOperationValue
    },
];
testCaseProvider.forEach(function (testCase) {
    test(testCase.name, function () {
        expect(testCase["function"](testCase.input)).toStrictEqual(testCase.output);
    });
});
getOperationValuePosTestCasesProvider.forEach(function (testCase) {
    test(testCase.name, function () {
        expect(testCase["function"](testCase.input1, testCase.input2)).toStrictEqual(testCase.output);
    });
});
getOperationValueNegTestCasesProvider.forEach(function (testCase) {
    test(testCase.name, function () {
        expect(function () { return testCase["function"](testCase.input1, testCase.input2); }).toThrow(testCase.exception);
    });
});
