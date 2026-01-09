import { RuntimeException } from "../../src";
import NallaPointerException from "../../src/exceptions/nallaPointerException";


export const NegativeTestCases = [
  {
    name: "interpreter assigning variable before declaration test, should throw an exception",
    input: `
          idhar aao;
          a = 4;
          jao padhai karo;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with addition, should throw an exception",
    input: `
          idhar aao;
          a += 4;
          jao padhai karo;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with subtraction, should throw an exception",
    input: `
          idhar aao;
          a -= 4;
          jao padhai karo;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with multiplication, should throw an exception",
    input: `
          idhar aao;
          a -= 4;
          jao padhai karo;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with division, should throw an exception",
    input: `
          idhar aao;
          a /= 4;
          jao padhai karo;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test - 2, should throw an exception",
    input: `
          idhar aao;
          a;
          jao padhai karo;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter adding two variables before declaration test, should throw an exception",
    input: `
          idhar aao;
          a + b;
          jao padhai karo;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter adding variable with constant before declaration test, should throw an exception",
    input: `
          idhar aao;
          a + 4;
          jao padhai karo;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter subtracting variable with constant before declaration test, should throw an exception",
    input: `
          idhar aao;
          a - 4;
          jao padhai karo;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter subtracting two variables before declaration test, should throw an exception",
    input: `
          idhar aao;
          a - b;
          jao padhai karo;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter multiplying variable with constant before declaration test, should throw an exception",
    input: `
          idhar aao;
          a * 4;
          jao padhai karo;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter multiplying two variables before declaration test, should throw an exception",
    input: `
          idhar aao;
          a * b;
          jao padhai karo;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter dividing variable with constant before declaration test, should throw an exception",
    input: `
          idhar aao;
          a / 4;
          jao padhai karo;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter dividing two variables before declaration test, should throw an exception",
    input: `
          idhar aao;
          a / b;
          jao padhai karo;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing variable before declaration test, should throw an exception",
    input: `
          idhar aao;
          jawab de a;
          jao padhai karo;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing multiple variables before declaration test, should throw an exception",
    input: `
          idhar aao;
          jawab de a, b;
          jao padhai karo;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing multiple variables with only one of them declared, should throw an exception",
    input: `
          idhar aao;
          ye sambhal a = 8;
          jawab de a, b;
          jao padhai karo;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter declaring multiple variables with chain assignment, should throw an exception",
    input: `
          idhar aao;
          ye sambhal a = b = 8;
          jao padhai karo;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter re declare already declared variable, should throw an exception",
    input: `
        idhar aao;
        ye sambhal a;
        a = 9;
        ye sambhal a = 0;
        jao padhai karo;
      `,
    exception: RuntimeException,
  },
  // cases with nalla
  {
    name: "interpreter use nalla variable in expression, should throw an exception",
    input: `
      idhar aao;
      ye sambhal a;
      jawab de a + 9;
      jao padhai karo;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nalla variable in expression - 2, should throw an exception",
    input: `
      idhar aao;
      ye sambhal a = nalla;
      jawab de a + 9;
      jao padhai karo;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nalla in variable initialisation expression, should throw an exception",
    input: `
      idhar aao;
      ye sambhal a = nalla + 80;
      jao padhai karo;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nalla in variable initialisation expression - 2, should throw an exception",
    input: `
      idhar aao;
      ye sambhal a = nalla + "jam";
      jao padhai karo;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nalla variable in another variable initialisation expression, should throw an exception",
    input: `
      idhar aao;
      ye sambhal a;
      ye sambhal b = a + "hello";
      jao padhai karo;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nalla variable in complex expression, should throw an exception",
    input: `
      idhar aao;
      ye sambhal a;
      ye sambhal b = ((a*9) * a + "hello");
      jao padhai karo;
    `,
    exception: NallaPointerException,
  },
  // sahi - galat case
  {
    name: "interpreter use sahi variable in expression, should throw an exception",
    input: `
      idhar aao;
      ye sambhal a = sahi;
      jawab de a + 9;
      jao padhai karo;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use galat variable in expression, should throw an exception",
    input: `
      idhar aao;
      ye sambhal a = galat;
      jawab de a + 9;
      jao padhai karo;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use sahi in variable initialisation expression, should throw an exception",
    input: `
      idhar aao;
      ye sambhal a = sahi + 80;
      jao padhai karo;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use galat in variable initialisation expression, should throw an exception",
    input: `
      idhar aao;
      ye sambhal a = galat + 80;
      jao padhai karo;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use sahi variable in another variable initialisation expression, should throw an exception",
    input: `
      idhar aao;
      ye sambhal a = sahi;
      ye sambhal b = a + "hello";
      jao padhai karo;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use galat variable in complex expression, should throw an exception",
    input: `
      idhar aao;
      ye sambhal a = galat;
      ye sambhal b = ((a*9) * a + "hello");
      jao padhai karo;
    `,
    exception: RuntimeException,
  },
  // ##########

  {
    name: "complex expression test with one nalla operand, should throw an exception",
    input: `
        idhar aao
        (nalla * (4 + 8 + 10));
        jao padhai karo
      `,
    output: NallaPointerException,
  },
  {
    name: "complex expression test with one nalla operand and one boolean operand, should throw an exception",
    input: `
        idhar aao
        (nalla * (sahi + 8 + 10));
        jao padhai karo
      `,
    output: RuntimeException,
  },
  {
    name: "complex expression test with one nalla operand and one boolean operand - 2, should throw nalla pointer exception",
    input: `
        idhar aao
        (sahi * (nalla + 8 + 10));
        jao padhai karo
      `,
    output: NallaPointerException,
  },
  {
    name: "complex expression test with one nalla operand and one boolean operand - 3, should throw nalla pointer exception",
    input: `
        idhar aao
        (nalla + sahi);
        jao padhai karo
      `,
    output: NallaPointerException,
  },
  {
    name: "complex expression test with one boolean operand, should throw an exception",
    input: `
        idhar aao
        (sahi * (4 + 8 + 10));
        jao padhai karo
      `,
    output: RuntimeException,
  },
  {
    name: "additive expression test with only boolean operand, should throw an exception",
    input: `
        idhar aao
        sahi + galat;
        jao padhai karo
      `,
    output: RuntimeException,
  },
  {
    name: "additive expression test with only variable boolean operand, should throw an exception",
    input: `
        idhar aao
        ye sambhal a = sahi, b = galat;
        a + b;
        jao padhai karo
      `,
    output: RuntimeException,
  },
  {
    name: "multiplicative expression test with only boolean operand, should throw an exception",
    input: `
        idhar aao
        sahi * galat;
        jao padhai karo
      `,
    output: RuntimeException,
  },
  {
    name: "multiplicative expression test with only variable boolean operand, should throw an exception",
    input: `
        idhar aao
        ye sambhal a = sahi, b = galat;
        a * b;
        jao padhai karo
      `,
    output: RuntimeException,
  },
  {
    name: "division expression test with only boolean operand, should throw an exception",
    input: `
        idhar aao
        sahi / galat;
        jao padhai karo
      `,
    output: RuntimeException,
  },
  {
    name: "division expression test with only variable boolean operand, should throw an exception",
    input: `
        idhar aao
        ye sambhal a = sahi, b = galat;
        a / b;
        jao padhai karo
      `,
    output: RuntimeException,
  },
  {
    name: "print statement test with expression containing nalla, should throw an exception",
    input: `
        idhar aao
        jawab de nalla + 5;
        jao padhai karo;
      `,
    output: NallaPointerException,
  },
  {
    name: "complex assign test with expression containing nalla, should throw an exception",
    input: `
        idhar aao
        ye sambhal a;
        a *= 5;
        jao padhai karo;
      `,
    output: NallaPointerException,
  },
  {
    name: "complex assign test with expression containing sahi, should throw an exception",
    input: `
        idhar aao
        ye sambhal a = sahi;
        a *= 5;
        jao padhai karo;
      `,
    output: NallaPointerException,
  },
  {
    name: "complex assign test with expression containing nalla - 2, should throw an exception",
    input: `
        idhar aao
        ye sambhal a = nalla;
        a /= 5;
        jao padhai karo;
      `,
    output: NallaPointerException,
  },
  // while loop negative tests
  {
    name: "infinite while loop, should throw an exception",
    input: `
        idhar aao
        jb tak main na bolu (sahi) {

        }
        jao padhai karo;
      `,
    output: RuntimeException,
  },
  {
    name: "infinite condition while loop, should throw an exception",
    input: `
        idhar aao
        ye sambhal a = 0;
        jb tak main na bolu (a < 2) {
          jawab de "bhai";
        }
        jao padhai karo;
      `,
    output: RuntimeException,
  },
  {
    name: "invalid use of break, should throw an exception",
    input: `
        idhar aao
        ye sambhal a = 0;
        agar sharam hai (sahi)
          bas kar bhai;
        jao padhai karo;
      `,
    output: RuntimeException,
  },
  // logical expression negative tests
  {
    name: "use of nalla with &&, should throw an exception",
    input: `
        idhar aao
        jawab de nalla && 90;
        jao padhai karo;
      `,
    output: NallaPointerException,
  },
  {
    name: "use of nalla variable with &&, should throw an exception",
    input: `
        idhar aao
        ye sambhal a;
        jawab de a && 90;
        jao padhai karo;
      `,
    output: NallaPointerException,
  },
  // modulus operator test
  {
    name: `modulus operator test with invalid operand, should throw an exception`,
    input: `
      idhar aao;
      jawab de "sahi" % 9;
      jao padhai karo;
    `,
    output: RuntimeException,
  },
  // continue in loop test
  {
    name: "infinite condition while loop with continue, should throw an exception",
    input: `
        idhar aao
        ye sambhal a = 0;
        jb tak main na bolu (a < 2) {
          agla dekh bhai;
          a = 5;
        }
        jao padhai karo;
      `,
    output: RuntimeException,
  },
  {
    name: "invalid use of continue, should throw an exception",
    input: `
        idhar aao
        ye sambhal a = 0;
        agar sharam hai (sahi)
          agla dekh bhai
        jao padhai karo;
      `,
    output: RuntimeException,
  },
];
