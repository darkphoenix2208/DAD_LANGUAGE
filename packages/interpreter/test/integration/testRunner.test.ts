import { RuntimeException } from "../../src";
import Interpreter from "../../src/components/interpreter";
import InterpreterModule from "../../src/module/interpreterModule";

import { NegativeTestCases } from "./negativeTestsProvider";
import {
  NoOutputPositiveTests,
  WithOutputPositiveTests
} from "./positiveTestsProvider";


let interpreter: Interpreter = InterpreterModule.getInterpreter();

console.log = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

NoOutputPositiveTests.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).not.toThrowError();
  });
});

WithOutputPositiveTests.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).not.toThrowError();

    expect(console.log).toHaveBeenCalledWith(testCase.output);
  });
});

NegativeTestCases.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).toThrowError(
      testCase.exception
    );
  });
});

test("test redeclaring & printing variables in different scopes", () => {
  expect(() =>
    interpreter.interpret(`idhar aao;
    ye sambhal a = 4;
    {
      ye sambhal a = 90;
      jawab de a;
    }
    jawab de a;
    jao padhai karo;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("90");
  expect(console.log).toHaveBeenCalledWith("4");
});

test("test assigning variable in parent scope", () => {
  expect(() =>
    interpreter.interpret(`idhar aao;
    ye sambhal a = 4;
    {
      a = 90;
      jawab de a;
    }
    jawab de a;
    jao padhai karo;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("90");
  expect(console.log).toHaveBeenCalledWith("90");
});

test("test accessing variable in parent scope", () => {
  expect(() =>
    interpreter.interpret(`idhar aao;
    ye sambhal a = 4;
    {
      jawab de a;
    }
    jawab de a;
    jao padhai karo;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("4");
});

test("whileStatement test with 2 times loop, should success", () => {
  expect(() =>
    interpreter.interpret(`
    idhar aao;
    ye sambhal a = 0;
    jb tak main na bolu (a < 2) {
      jawab de "bhai";
      a += 1;
    }
    jao padhai karo;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("bhai");
  expect(console.log).toHaveBeenCalledWith("bhai");
});

test("whileStatement test with nested loops - 2, should success", () => {
  expect(() =>
    interpreter.interpret(`
    idhar aao;
    ye sambhal a = 0, b = 0;
    jb tak main na bolu (a < 2) {
      jb tak main na bolu (b < 1) {
        jawab de "bhai";
        b += 1;
      }
      a += 1;
    }
    jao padhai karo;
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("bhai");
});

test("whileStatement test with nested loops - 3, should success", () => {
  expect(() =>
    interpreter.interpret(`
    idhar aao;
    ye sambhal a = 0;
    jb tak main na bolu (a < 2) {
      ye sambhal b = 0;
      jb tak main na bolu (b < 2) {
        jawab de "bhai";
        b += 1;
        agar sharam hai (b == 1)
          bas kar bhai;
      }
      a += 1;
    }
    jao padhai karo;
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("bhai");
  expect(console.log).toHaveBeenCalledWith("bhai");
});


test("whileStatement test with nested loops - 4, should success", () => {
  expect(() =>
    interpreter.interpret(`
    idhar aao
    ye sambhal a = 0;
    jb tak main na bolu (a < 10) {
      jawab de a;
      a += 1;
      agar sharam hai (a == 6) {
        bas kar bhai;
      }
    }
    jawab de "done";
    jao padhai karo
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("3");
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("5");
});

test("whileStatement test with nested loops - 5, should success", () => {
  expect(() =>
    interpreter.interpret(`
    idhar aao
    ye sambhal a = 0;
    jb tak main na bolu (a < 10) {
      jawab de a;
      a += 1;
      agar sharam hai (a == 6)
        bas kar bhai;
    }
    jawab de "done";
    jao padhai karo
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("3");
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("5");
});

test("whileStatement test with nested loops - 6, should success", () => {
  expect(() =>
    interpreter.interpret(`
    idhar aao
    ye sambhal a = 0;
    jb tak main na bolu (a < 10) {
      jawab de a;
      a += 1;
      agar sharam hai (a == 3) {
        bas kar bhai;
      }
      jawab de "2 baar hi chapunga";
    }
    jawab de "done";
    jao padhai karo
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("2 baar hi chapunga");
  expect(console.log).toHaveBeenCalledWith("2 baar hi chapunga");
});

test("whileStatement test with infinite loop, should throw runtime exception after 5000 executions", () => {
  expect(() =>
    interpreter.interpret(`
    idhar aao
    
    jb tak main na bolu (sahi) {
      jawab de "bhai";
    }
    jao padhai karo;
    
    `)
  ).toThrowError(RuntimeException);

  expect(console.log).toHaveBeenCalledTimes(5001);
  expect(console.log).toHaveBeenCalledWith("bhai");
});

test("if-else ladders one after the other, should be evaluated separately", () => {
  expect(() =>
    interpreter.interpret(`
    idhar aao
    ye sambhal x = 6;
    agar sharam hai (x < 5) {
      jawab de "x < 5";
    } nahi to bhai (x < 8) {
      jawab de "x < 8";
    } agar sharam hai (x < 4) {
      jawab de "x < 4";
    } warna belt {
      jawab de "x > 4";
    }
    jao padhai karo;
    
    `)
  ).not.toThrowError();

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
