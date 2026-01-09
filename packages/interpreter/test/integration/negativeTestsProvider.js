"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.NegativeTestCases = void 0;
var src_1 = require("../../src");
var nallaPointerException_1 = __importDefault(require("../../src/exceptions/nallaPointerException"));
exports.NegativeTestCases = [
    {
        name: "interpreter assigning variable before declaration test, should throw an exception",
        input: "\n          idhar aao;\n          a = 4;\n          jao padhai karo;\n        ",
        exception: src_1.RuntimeException
    },
    {
        name: "interpreter assigning variable before declaration test with addition, should throw an exception",
        input: "\n          idhar aao;\n          a += 4;\n          jao padhai karo;\n        ",
        exception: src_1.RuntimeException
    },
    {
        name: "interpreter assigning variable before declaration test with subtraction, should throw an exception",
        input: "\n          idhar aao;\n          a -= 4;\n          jao padhai karo;\n        ",
        exception: src_1.RuntimeException
    },
    {
        name: "interpreter assigning variable before declaration test with multiplication, should throw an exception",
        input: "\n          idhar aao;\n          a -= 4;\n          jao padhai karo;\n        ",
        exception: src_1.RuntimeException
    },
    {
        name: "interpreter assigning variable before declaration test with division, should throw an exception",
        input: "\n          idhar aao;\n          a /= 4;\n          jao padhai karo;\n        ",
        exception: src_1.RuntimeException
    },
    {
        name: "interpreter assigning variable before declaration test - 2, should throw an exception",
        input: "\n          idhar aao;\n          a;\n          jao padhai karo;\n        ",
        exception: src_1.RuntimeException
    },
    {
        name: "interpreter adding two variables before declaration test, should throw an exception",
        input: "\n          idhar aao;\n          a + b;\n          jao padhai karo;\n        ",
        exception: src_1.RuntimeException
    },
    {
        name: "interpreter adding variable with constant before declaration test, should throw an exception",
        input: "\n          idhar aao;\n          a + 4;\n          jao padhai karo;\n        ",
        exception: src_1.RuntimeException
    },
    {
        name: "interpreter subtracting variable with constant before declaration test, should throw an exception",
        input: "\n          idhar aao;\n          a - 4;\n          jao padhai karo;\n        ",
        exception: src_1.RuntimeException
    },
    {
        name: "interpreter subtracting two variables before declaration test, should throw an exception",
        input: "\n          idhar aao;\n          a - b;\n          jao padhai karo;\n        ",
        exception: src_1.RuntimeException
    },
    {
        name: "interpreter multiplying variable with constant before declaration test, should throw an exception",
        input: "\n          idhar aao;\n          a * 4;\n          jao padhai karo;\n        ",
        exception: src_1.RuntimeException
    },
    {
        name: "interpreter multiplying two variables before declaration test, should throw an exception",
        input: "\n          idhar aao;\n          a * b;\n          jao padhai karo;\n        ",
        exception: src_1.RuntimeException
    },
    {
        name: "interpreter dividing variable with constant before declaration test, should throw an exception",
        input: "\n          idhar aao;\n          a / 4;\n          jao padhai karo;\n        ",
        exception: src_1.RuntimeException
    },
    {
        name: "interpreter dividing two variables before declaration test, should throw an exception",
        input: "\n          idhar aao;\n          a / b;\n          jao padhai karo;\n        ",
        exception: src_1.RuntimeException
    },
    {
        name: "interpreter printing variable before declaration test, should throw an exception",
        input: "\n          idhar aao;\n          jawab de a;\n          jao padhai karo;\n        ",
        exception: src_1.RuntimeException
    },
    {
        name: "interpreter printing multiple variables before declaration test, should throw an exception",
        input: "\n          idhar aao;\n          jawab de a, b;\n          jao padhai karo;\n        ",
        exception: src_1.RuntimeException
    },
    {
        name: "interpreter printing multiple variables with only one of them declared, should throw an exception",
        input: "\n          idhar aao;\n          ye sambhal a = 8;\n          jawab de a, b;\n          jao padhai karo;\n        ",
        exception: src_1.RuntimeException
    },
    {
        name: "interpreter declaring multiple variables with chain assignment, should throw an exception",
        input: "\n          idhar aao;\n          ye sambhal a = b = 8;\n          jao padhai karo;\n        ",
        exception: src_1.RuntimeException
    },
    {
        name: "interpreter re declare already declared variable, should throw an exception",
        input: "\n        idhar aao;\n        ye sambhal a;\n        a = 9;\n        ye sambhal a = 0;\n        jao padhai karo;\n      ",
        exception: src_1.RuntimeException
    },
    // cases with nalla
    {
        name: "interpreter use nalla variable in expression, should throw an exception",
        input: "\n      idhar aao;\n      ye sambhal a;\n      jawab de a + 9;\n      jao padhai karo;\n    ",
        exception: nallaPointerException_1["default"]
    },
    {
        name: "interpreter use nalla variable in expression - 2, should throw an exception",
        input: "\n      idhar aao;\n      ye sambhal a = nalla;\n      jawab de a + 9;\n      jao padhai karo;\n    ",
        exception: nallaPointerException_1["default"]
    },
    {
        name: "interpreter use nalla in variable initialisation expression, should throw an exception",
        input: "\n      idhar aao;\n      ye sambhal a = nalla + 80;\n      jao padhai karo;\n    ",
        exception: nallaPointerException_1["default"]
    },
    {
        name: "interpreter use nalla in variable initialisation expression - 2, should throw an exception",
        input: "\n      idhar aao;\n      ye sambhal a = nalla + \"jam\";\n      jao padhai karo;\n    ",
        exception: nallaPointerException_1["default"]
    },
    {
        name: "interpreter use nalla variable in another variable initialisation expression, should throw an exception",
        input: "\n      idhar aao;\n      ye sambhal a;\n      ye sambhal b = a + \"hello\";\n      jao padhai karo;\n    ",
        exception: nallaPointerException_1["default"]
    },
    {
        name: "interpreter use nalla variable in complex expression, should throw an exception",
        input: "\n      idhar aao;\n      ye sambhal a;\n      ye sambhal b = ((a*9) * a + \"hello\");\n      jao padhai karo;\n    ",
        exception: nallaPointerException_1["default"]
    },
    // sahi - galat case
    {
        name: "interpreter use sahi variable in expression, should throw an exception",
        input: "\n      idhar aao;\n      ye sambhal a = sahi;\n      jawab de a + 9;\n      jao padhai karo;\n    ",
        exception: src_1.RuntimeException
    },
    {
        name: "interpreter use galat variable in expression, should throw an exception",
        input: "\n      idhar aao;\n      ye sambhal a = galat;\n      jawab de a + 9;\n      jao padhai karo;\n    ",
        exception: src_1.RuntimeException
    },
    {
        name: "interpreter use sahi in variable initialisation expression, should throw an exception",
        input: "\n      idhar aao;\n      ye sambhal a = sahi + 80;\n      jao padhai karo;\n    ",
        exception: src_1.RuntimeException
    },
    {
        name: "interpreter use galat in variable initialisation expression, should throw an exception",
        input: "\n      idhar aao;\n      ye sambhal a = galat + 80;\n      jao padhai karo;\n    ",
        exception: src_1.RuntimeException
    },
    {
        name: "interpreter use sahi variable in another variable initialisation expression, should throw an exception",
        input: "\n      idhar aao;\n      ye sambhal a = sahi;\n      ye sambhal b = a + \"hello\";\n      jao padhai karo;\n    ",
        exception: src_1.RuntimeException
    },
    {
        name: "interpreter use galat variable in complex expression, should throw an exception",
        input: "\n      idhar aao;\n      ye sambhal a = galat;\n      ye sambhal b = ((a*9) * a + \"hello\");\n      jao padhai karo;\n    ",
        exception: src_1.RuntimeException
    },
    // ##########
    {
        name: "complex expression test with one nalla operand, should throw an exception",
        input: "\n        idhar aao\n        (nalla * (4 + 8 + 10));\n        jao padhai karo\n      ",
        output: nallaPointerException_1["default"]
    },
    {
        name: "complex expression test with one nalla operand and one boolean operand, should throw an exception",
        input: "\n        idhar aao\n        (nalla * (sahi + 8 + 10));\n        jao padhai karo\n      ",
        output: src_1.RuntimeException
    },
    {
        name: "complex expression test with one nalla operand and one boolean operand - 2, should throw nalla pointer exception",
        input: "\n        idhar aao\n        (sahi * (nalla + 8 + 10));\n        jao padhai karo\n      ",
        output: nallaPointerException_1["default"]
    },
    {
        name: "complex expression test with one nalla operand and one boolean operand - 3, should throw nalla pointer exception",
        input: "\n        idhar aao\n        (nalla + sahi);\n        jao padhai karo\n      ",
        output: nallaPointerException_1["default"]
    },
    {
        name: "complex expression test with one boolean operand, should throw an exception",
        input: "\n        idhar aao\n        (sahi * (4 + 8 + 10));\n        jao padhai karo\n      ",
        output: src_1.RuntimeException
    },
    {
        name: "additive expression test with only boolean operand, should throw an exception",
        input: "\n        idhar aao\n        sahi + galat;\n        jao padhai karo\n      ",
        output: src_1.RuntimeException
    },
    {
        name: "additive expression test with only variable boolean operand, should throw an exception",
        input: "\n        idhar aao\n        ye sambhal a = sahi, b = galat;\n        a + b;\n        jao padhai karo\n      ",
        output: src_1.RuntimeException
    },
    {
        name: "multiplicative expression test with only boolean operand, should throw an exception",
        input: "\n        idhar aao\n        sahi * galat;\n        jao padhai karo\n      ",
        output: src_1.RuntimeException
    },
    {
        name: "multiplicative expression test with only variable boolean operand, should throw an exception",
        input: "\n        idhar aao\n        ye sambhal a = sahi, b = galat;\n        a * b;\n        jao padhai karo\n      ",
        output: src_1.RuntimeException
    },
    {
        name: "division expression test with only boolean operand, should throw an exception",
        input: "\n        idhar aao\n        sahi / galat;\n        jao padhai karo\n      ",
        output: src_1.RuntimeException
    },
    {
        name: "division expression test with only variable boolean operand, should throw an exception",
        input: "\n        idhar aao\n        ye sambhal a = sahi, b = galat;\n        a / b;\n        jao padhai karo\n      ",
        output: src_1.RuntimeException
    },
    {
        name: "print statement test with expression containing nalla, should throw an exception",
        input: "\n        idhar aao\n        jawab de nalla + 5;\n        jao padhai karo;\n      ",
        output: nallaPointerException_1["default"]
    },
    {
        name: "complex assign test with expression containing nalla, should throw an exception",
        input: "\n        idhar aao\n        ye sambhal a;\n        a *= 5;\n        jao padhai karo;\n      ",
        output: nallaPointerException_1["default"]
    },
    {
        name: "complex assign test with expression containing sahi, should throw an exception",
        input: "\n        idhar aao\n        ye sambhal a = sahi;\n        a *= 5;\n        jao padhai karo;\n      ",
        output: nallaPointerException_1["default"]
    },
    {
        name: "complex assign test with expression containing nalla - 2, should throw an exception",
        input: "\n        idhar aao\n        ye sambhal a = nalla;\n        a /= 5;\n        jao padhai karo;\n      ",
        output: nallaPointerException_1["default"]
    },
    // while loop negative tests
    {
        name: "infinite while loop, should throw an exception",
        input: "\n        idhar aao\n        jb tak main na bolu (sahi) {\n\n        }\n        jao padhai karo;\n      ",
        output: src_1.RuntimeException
    },
    {
        name: "infinite condition while loop, should throw an exception",
        input: "\n        idhar aao\n        ye sambhal a = 0;\n        jb tak main na bolu (a < 2) {\n          jawab de \"bhai\";\n        }\n        jao padhai karo;\n      ",
        output: src_1.RuntimeException
    },
    {
        name: "invalid use of break, should throw an exception",
        input: "\n        idhar aao\n        ye sambhal a = 0;\n        agar sharam hai (sahi)\n          bas kar bhai;\n        jao padhai karo;\n      ",
        output: src_1.RuntimeException
    },
    // logical expression negative tests
    {
        name: "use of nalla with &&, should throw an exception",
        input: "\n        idhar aao\n        jawab de nalla && 90;\n        jao padhai karo;\n      ",
        output: nallaPointerException_1["default"]
    },
    {
        name: "use of nalla variable with &&, should throw an exception",
        input: "\n        idhar aao\n        ye sambhal a;\n        jawab de a && 90;\n        jao padhai karo;\n      ",
        output: nallaPointerException_1["default"]
    },
    // modulus operator test
    {
        name: "modulus operator test with invalid operand, should throw an exception",
        input: "\n      idhar aao;\n      jawab de \"sahi\" % 9;\n      jao padhai karo;\n    ",
        output: src_1.RuntimeException
    },
    // continue in loop test
    {
        name: "infinite condition while loop with continue, should throw an exception",
        input: "\n        idhar aao\n        ye sambhal a = 0;\n        jb tak main na bolu (a < 2) {\n          agla dekh bhai;\n          a = 5;\n        }\n        jao padhai karo;\n      ",
        output: src_1.RuntimeException
    },
    {
        name: "invalid use of continue, should throw an exception",
        input: "\n        idhar aao\n        ye sambhal a = 0;\n        agar sharam hai (sahi)\n          agla dekh bhai\n        jao padhai karo;\n      ",
        output: src_1.RuntimeException
    },
];
