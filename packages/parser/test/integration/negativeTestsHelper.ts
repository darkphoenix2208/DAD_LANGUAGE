export const NegativeStatementTests = [
  // init statement tests
  {
    name: "only idhar aao, should throw an exception",
    input: `
        idhar aao
      `,
    output: SyntaxError,
  },
  {
    name: "only jao padhai karo, should throw an exception",
    input: `
        jao padhai karo
      `,
    output: SyntaxError,
  },
  {
    name: "multiple idhar aao, should throw an exception",
    input: `
        idhar aao
        idhar aao
        jao padhai karo
      `,
    output: SyntaxError,
  },
  {
    name: "multiple init, should throw an exception",
    input: `
        idhar aao
        idhar aao
        jao padhai karo
        jao padhai karo
      `,
    output: SyntaxError,
  },
  // block statement tests
  {
    name: "only open curly, should throw an exception",
    input: `
        idhar aao
        {
        jao padhai karo
      `,
    output: SyntaxError,
  },
  {
    name: "only closed curly, should throw an exception",
    input: `
        idhar aao
        }
        jao padhai karo
      `,
    output: SyntaxError,
  },
  {
    name: "open curly and no other token, should throw an exception",
    input: `
        idhar aao
        {
      `,
    output: SyntaxError,
  },
  {
    name: "missing semi colon after expression, should throw an exception",
    input: `
        idhar aao
        {
          naam = 4
        }
        jao padhai karo
      `,
    output: SyntaxError,
  },
  // print statement test
  {
    name: "empty print statement, should throw an exception",
    input: `
        idhar aao
        jawab de ;
        jao padhai karo
      `,
    output: SyntaxError,
  },
  {
    name: "print statement without semi colon, should throw an exception",
    input: `
        idhar aao
        jawab de 478
        jao padhai karo
      `,
    output: SyntaxError,
  },
  {
    name: "print statement with space separated values, should throw an exception",
    input: `
        idhar aao
        jawab de sahi galat;
        jao padhai karo
      `,
    output: SyntaxError,
  },
  {
    name: "print statement test with unknown thing printing, should throw an exception",
    input: `
        idhar aao
        jawab de ~!*;
        jao padhai karo
      `,
    output: SyntaxError,
  },
  {
    name: "print statement test with no other token, should throw an exception",
    input: `
        idhar aao
        jawab de a
      `,
    output: SyntaxError,
  },
  // variable statement test
  {
    name: "variable statement test with space separated variable declaration, should throw an exception",
    input: `
        idhar aao
        ye sambhal a b c;
        jao padhai karo
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test without semi colon, should throw an exception",
    input: `
        idhar aao
        ye sambhal a 
        jao padhai karo
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with no identifier token, should throw an exception",
    input: `
        idhar aao
        ye sambhal ;
        jao padhai karo
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with identifier expression and no other token, should throw an exception",
    input: `
        idhar aao
        ye sambhal a, b
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with assignment expression and no other token, should throw an exception",
    input: `
        idhar aao
        ye sambhal a = 5
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with no other token, should throw an exception",
    input: `
        idhar aao
        ye sambhal
      `,
    output: SyntaxError,
  },

  // while statement negative tests
  {
    name: "variable statement test with no other token, should throw an exception",
    input: `
    idhar aao
    jab tak main na bolu (x > 9)
      `,
    output: SyntaxError,
  },
];

export const NegativeExpressionsTests = [
  // assignment expression tests
  {
    name: "simple assignment expression test without semi colon, should throw an exception",
    input: `
        idhar aao
        a = 4
        jao padhai karo
      `,
    output: SyntaxError,
  },
  {
    name: "complex assignment expression test with unknown assignment, should throw an exception",
    input: `
        idhar aao
        a *=- 4;
        jao padhai karo
      `,
    output: SyntaxError,
  },
  {
    name: "assignment expression test with invalid left hand side, should throw an exception",
    input: `
        idhar aao
        "hello" = 4;
        jao padhai karo
      `,
    output: SyntaxError,
  },
  {
    name: "assignment expression test with invalid left hand side 2nd, should throw an exception",
    input: `
        idhar aao
        5 = 890;
        jao padhai karo
      `,
    output: SyntaxError,
  },
  {
    name: "assignment expression test with no other token, should throw an exception",
    input: `
        idhar aao
        a = 890
      `,
    output: SyntaxError,
  },
  // multiplicative expression test
  {
    name: "multiplicative expression test with no other token, should throw an exception",
    input: `
        idhar aao
        6 * 5 * 
      `,
    output: SyntaxError,
  },
  // paranthesized expression tests
  {
    name: "paranthesized expression test with only open parenthesis, should throw an exception",
    input: `
        idhar aao
        (a + 4;
        jao padhai karo
      `,
    output: SyntaxError,
  },
  {
    name: "paranthesized expression test with only close parenthesis, should throw an exception",
    input: `
        idhar aao
        a + 4);
        jao padhai karo
      `,
    output: SyntaxError,
  },

  {
    name: "paranthesized expression test with only close parenthesis and no other token, should throw an exception",
    input: `
        idhar aao
        (
      `,
    output: SyntaxError,
  },
  {
    name: "paranthesized expression test with one close parenthesis missing, should throw an exception",
    input: `
        idhar aao
        (a * (4 + 8 + 10);
        jao padhai karo
      `,
    output: SyntaxError,
  },
  // logical expression test
  {
    name: "logical expression test with right operand missing, should throw an exception",
    input: `
    idhar aao
    ye sambhal a = b && ;
    jao padhai karo;
      `,
    output: SyntaxError,
  },
  {
    name: "logical expression test with left operand missing, should throw an exception",
    input: `
    idhar aao
    ye sambhal a = && b;
    jao padhai karo;
      `,
    output: SyntaxError,
  },
  {
    name: "logical expression test with both operand missing, should throw an exception",
    input: `
    idhar aao
    agar sharam hai (&&);
    jao padhai karo;
      `,
    output: SyntaxError,
  },
  // float expression test
  {
    name: "float expression test with multiple continuous decimal points - 1, should throw an exception",
    input: `
    idhar aao
    ye sambhal a = 1..2;
    jao padhai karo;
      `,
    output: SyntaxError,
  },
  {
    name: "float expression test with multiple continuous decimal points - 2, should throw an exception",
    input: `
    idhar aao
    ye sambhal a = ..2;
    jao padhai karo;
      `,
    output: SyntaxError,
  },
  {
    name: "float expression test with multiple decimal points at different places, should throw an exception",
    input: `
    idhar aao
    ye sambhal a = 1.2.3;
    jao padhai karo;
      `,
    output: SyntaxError,
  },
];

export const IfStatementNagativeTests = [
  {
    name: "If statement test - nothing after if condition , should throw an exception",
    input: `
        idhar aao
        agar sharam hai (sahi)
      `,
    output: SyntaxError,
  },
  {
    name: "If statement test - no if condition before else , should throw an exception",
    input: `
        idhar aao
        warna belt {

        }
        jao padhai karo;
      `,
    output: SyntaxError,
  },
  {
    name: "If statement test - if without a condition , should throw an exception",
    input: `
        idhar aao
       agar sharam hai {

       }
        jao padhai karo;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - else-if ladder without if condition first , should throw an exception",
    input: `
        idhar aao
        nahi to (sahi) {
        }
        jao padhai karo;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - else-if ladder with multiple levels without if condition first , should throw an exception",
    input: `
        idhar aao
        nahi to (sahi) {
        } nahi to (sahi) {
        }
        jao padhai karo;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - nothing after else-if ladder , should throw an exception",
    input: `
        idhar aao
        agar sharam hai (sahi) {

        } nahi to (sahi)
        jao padhai karo;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - nothing after else-if ladder with multiple levels , should throw an exception",
    input: `
        idhar aao
        agar sharam hai (sahi) {

        } nahi to (sahi) {

        } nahi to (sahi)
        jao padhai karo;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - else-if without a condition , should throw an exception",
    input: `
        idhar aao
        agar sharam hai (sahi) {

        } nahi to
        jao padhai karo;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - else-if without a condition, multple levels , should throw an exception",
    input: `
        idhar aao
        agar sharam hai (sahi) {

        } nahi to (sahi) {

        } nahi to
        jao padhai karo;
      `,
    output: SyntaxError,
  }
];

export const ContinueStatementNegativeTests = [
  {
    name: "Continue statement test - continue outside a loop, should throw an exception",
    input: `
        idhar aao
          agla dekh
        jao padhai karo
      `,
    output: SyntaxError,
  },
]