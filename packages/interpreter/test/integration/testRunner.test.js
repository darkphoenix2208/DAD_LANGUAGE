"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var src_1 = require("../../src");
var interpreterModule_1 = __importDefault(require("../../src/module/interpreterModule"));
var negativeTestsProvider_1 = require("./negativeTestsProvider");
var positiveTestsProvider_1 = require("./positiveTestsProvider");
var interpreter = interpreterModule_1["default"].getInterpreter();
console.log = jest.fn();
beforeEach(function () {
    jest.clearAllMocks();
});
positiveTestsProvider_1.NoOutputPositiveTests.forEach(function (testCase) {
    test(testCase.name, function () {
        expect(function () { return interpreter.interpret(testCase.input); }).not.toThrowError();
    });
});
positiveTestsProvider_1.WithOutputPositiveTests.forEach(function (testCase) {
    test(testCase.name, function () {
        expect(function () { return interpreter.interpret(testCase.input); }).not.toThrowError();
        expect(console.log).toHaveBeenCalledWith(testCase.output);
    });
});
negativeTestsProvider_1.NegativeTestCases.forEach(function (testCase) {
    test(testCase.name, function () {
        expect(function () { return interpreter.interpret(testCase.input); }).toThrowError(testCase.exception);
    });
});
test("test redeclaring & printing variables in different scopes", function () {
    expect(function () {
        return interpreter.interpret("idhar aao;\n    ye sambhal a = 4;\n    {\n      ye sambhal a = 90;\n      jawab de a;\n    }\n    jawab de a;\n    jao padhai karo;");
    }).not.toThrowError();
    expect(console.log).toHaveBeenCalledWith("90");
    expect(console.log).toHaveBeenCalledWith("4");
});
test("test assigning variable in parent scope", function () {
    expect(function () {
        return interpreter.interpret("idhar aao;\n    ye sambhal a = 4;\n    {\n      a = 90;\n      jawab de a;\n    }\n    jawab de a;\n    jao padhai karo;");
    }).not.toThrowError();
    expect(console.log).toHaveBeenCalledWith("90");
    expect(console.log).toHaveBeenCalledWith("90");
});
test("test accessing variable in parent scope", function () {
    expect(function () {
        return interpreter.interpret("idhar aao;\n    ye sambhal a = 4;\n    {\n      jawab de a;\n    }\n    jawab de a;\n    jao padhai karo;");
    }).not.toThrowError();
    expect(console.log).toHaveBeenCalledWith("4");
    expect(console.log).toHaveBeenCalledWith("4");
});
test("whileStatement test with 2 times loop, should success", function () {
    expect(function () {
        return interpreter.interpret("\n    idhar aao;\n    ye sambhal a = 0;\n    jb tak main na bolu (a < 2) {\n      jawab de \"bhai\";\n      a += 1;\n    }\n    jao padhai karo;");
    }).not.toThrowError();
    expect(console.log).toHaveBeenCalledWith("bhai");
    expect(console.log).toHaveBeenCalledWith("bhai");
});
test("whileStatement test with nested loops - 2, should success", function () {
    expect(function () {
        return interpreter.interpret("\n    idhar aao;\n    ye sambhal a = 0, b = 0;\n    jb tak main na bolu (a < 2) {\n      jb tak main na bolu (b < 1) {\n        jawab de \"bhai\";\n        b += 1;\n      }\n      a += 1;\n    }\n    jao padhai karo;\n    ");
    }).not.toThrowError();
    expect(console.log).toHaveBeenCalledWith("bhai");
});
test("whileStatement test with nested loops - 3, should success", function () {
    expect(function () {
        return interpreter.interpret("\n    idhar aao;\n    ye sambhal a = 0;\n    jb tak main na bolu (a < 2) {\n      ye sambhal b = 0;\n      jb tak main na bolu (b < 2) {\n        jawab de \"bhai\";\n        b += 1;\n        agar sharam hai (b == 1)\n          bas kar bhai;\n      }\n      a += 1;\n    }\n    jao padhai karo;\n    ");
    }).not.toThrowError();
    expect(console.log).toHaveBeenCalledWith("bhai");
    expect(console.log).toHaveBeenCalledWith("bhai");
});
test("whileStatement test with nested loops - 4, should success", function () {
    expect(function () {
        return interpreter.interpret("\n    idhar aao\n    ye sambhal a = 0;\n    jb tak main na bolu (a < 10) {\n      jawab de a;\n      a += 1;\n      agar sharam hai (a == 6) {\n        bas kar bhai;\n      }\n    }\n    jawab de \"done\";\n    jao padhai karo\n    ");
    }).not.toThrowError();
    expect(console.log).toHaveBeenCalledWith("0");
    expect(console.log).toHaveBeenCalledWith("1");
    expect(console.log).toHaveBeenCalledWith("2");
    expect(console.log).toHaveBeenCalledWith("3");
    expect(console.log).toHaveBeenCalledWith("4");
    expect(console.log).toHaveBeenCalledWith("5");
});
test("whileStatement test with nested loops - 5, should success", function () {
    expect(function () {
        return interpreter.interpret("\n    idhar aao\n    ye sambhal a = 0;\n    jb tak main na bolu (a < 10) {\n      jawab de a;\n      a += 1;\n      agar sharam hai (a == 6)\n        bas kar bhai;\n    }\n    jawab de \"done\";\n    jao padhai karo\n    ");
    }).not.toThrowError();
    expect(console.log).toHaveBeenCalledWith("0");
    expect(console.log).toHaveBeenCalledWith("1");
    expect(console.log).toHaveBeenCalledWith("2");
    expect(console.log).toHaveBeenCalledWith("3");
    expect(console.log).toHaveBeenCalledWith("4");
    expect(console.log).toHaveBeenCalledWith("5");
});
test("whileStatement test with nested loops - 6, should success", function () {
    expect(function () {
        return interpreter.interpret("\n    idhar aao\n    ye sambhal a = 0;\n    jb tak main na bolu (a < 10) {\n      jawab de a;\n      a += 1;\n      agar sharam hai (a == 3) {\n        bas kar bhai;\n      }\n      jawab de \"2 baar hi chapunga\";\n    }\n    jawab de \"done\";\n    jao padhai karo\n    ");
    }).not.toThrowError();
    expect(console.log).toHaveBeenCalledWith("0");
    expect(console.log).toHaveBeenCalledWith("1");
    expect(console.log).toHaveBeenCalledWith("2");
    expect(console.log).toHaveBeenCalledWith("2 baar hi chapunga");
    expect(console.log).toHaveBeenCalledWith("2 baar hi chapunga");
});
test("whileStatement test with infinite loop, should throw runtime exception after 5000 executions", function () {
    expect(function () {
        return interpreter.interpret("\n    idhar aao\n    \n    jb tak main na bolu (sahi) {\n      jawab de \"bhai\";\n    }\n    jao padhai karo;\n    \n    ");
    }).toThrowError(src_1.RuntimeException);
    expect(console.log).toHaveBeenCalledTimes(5001);
    expect(console.log).toHaveBeenCalledWith("bhai");
});
test("if-else ladders one after the other, should be evaluated separately", function () {
    expect(function () {
        return interpreter.interpret("\n    idhar aao\n    ye sambhal x = 6;\n    agar sharam hai (x < 5) {\n      jawab de \"x < 5\";\n    } nahi to bhai (x < 8) {\n      jawab de \"x < 8\";\n    } agar sharam hai (x < 4) {\n      jawab de \"x < 4\";\n    } warna belt {\n      jawab de \"x > 4\";\n    }\n    jao padhai karo;\n    \n    ");
    }).not.toThrowError();
    expect(console.log).toHaveBeenCalledWith("x < 8");
    expect(console.log).toHaveBeenCalledWith("x > 4");
});
// test("jest", () => {
//     interpreter.interpret(`
//     idhar aao
//     ye sambhal a = 0;
//     jb tak main na bolu (a < 10) {
//       jawab de a;
//       a += 1;
//       agar sharam hai (a == 3) {
//         bas kar bhai;
//       }
//       jawab de "2 baar hi chapunga";
//     }
//     jawab de "done";
//     jao padhai karo
//     `);
// });
