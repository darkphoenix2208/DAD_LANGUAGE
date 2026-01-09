export const NoOutputPositiveTests = [
  // init statement tests
  {
    name: "interpreter empty init statement test, should success",
    input: `
      idhar aao
      jao padhai karo
    `,
  },
  {
    name: "interpreter empty init statement test with random charaters initially, should success",
    input: `
      some random characters
      random random random
      idhar aao
      jao padhai karo
    `,
  },
  // empty statement tests
  {
    name: "interpreter empty statement test, should success",
    input: `
      idhar aao
      ;
      jao padhai karo
    `,
  },
  {
    name: "interpreter multiple empty statements test, should success",
    input: `
      idhar aao
      ;
      ;
      ;;
      jao padhai karo
    `,
  },
  // block statement tests
  {
    name: "interpreter block statement test with empty block, should success",
    input: `
      idhar aao
      {};
      jao padhai karo
    `,
  },
  {
    name: "interpreter block statement test with variable statement inside, should success",
    input: `
      idhar aao
      {
        ye sambhal a = 4;
      }
      jao padhai karo
    `,
  },
  // variable statement test
  {
    name: "interpreter variable statement test with basic variable declaration, should success",
    input: `
      idhar aao
      ye sambhal a, b, c;
      jao padhai karo
    `,
  },
  {
    name: "interpreter variable statement test with basic variable declaration and initialisation, should success",
    input: `
      idhar aao
      ye sambhal a = 10, b = "crap";
      jao padhai karo
    `,
  },
  {
    name: "interpreter variable statement test with multiple variable initialisation, should success",
    input: `
      idhar aao
      ye sambhal a = 10, b = 5;
      jao padhai karo
    `,
  },
  {
    name: "interpreter variable statement test with variable initialisation with some expression, should success",
    input: `
      idhar aao
      ye sambhal a = 7 + 90;
      jao padhai karo
    `,
  },
  // assignment expression tests
  {
    name: "simple assignment expression test with only one identifer, should success",
    input: `
      idhar aao
      ye sambhal a = sahi;
      a = 4;
      jao padhai karo
    `,
  },
  {
    name: "complex assignment expression test with only one identifer, should success",
    input: `
      idhar aao
      ye sambhal a = 2;
      a *= 4;
      jao padhai karo
    `,
  },
  // paranthesized expression tests
  {
    name: "paranthesized expression test with one parenthesis and simple expression, should success",
    input: `
      idhar aao
      ye sambhal a = 2;
      (a + 4);
      jao padhai karo
    `,
  },
  {
    name: "paranthesized expression test with one parenthesis and complex expression, should success",
    input: `
      idhar aao
      ye sambhal a = 2;
      (a + 4) * 10 + (5 - 4);
      jao padhai karo
    `,
  },
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
      idhar aao
      ye sambhal a = 2;
      (a * (4 + 8) + 10);
      jao padhai karo
    `,
  },
  // if statement test
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
    idhar aao
    ye sambhal x = 9;
    agar sharam hai (x != 9) {
      x = 5;
      jawab de x;
    } warna belt (x >= 9);
    jao padhai karo;
    `,
  },
];

export const WithOutputPositiveTests = [
  {
    name: "variable assignment test with multiple variables, should success",
    input: `
      idhar aao;
      ye sambhal a , b;
      a = b = 60;
      jawab de a, b;
      jao padhai karo
    `,
    output: "60 60",
  },
  {
    name: `binaryExpression print test with nalla and "==", should success`,
    input: `
      idhar aao;
      ye sambhal a;
      agar sharam hai (a == nalla) {
        jawab de a;
      }
      jao padhai karo
    `,
    output: "nalla",
  },
  {
    name: `binaryExpression print test with nalla without any operator, should success`,
    input: `
      idhar aao;
      ye sambhal a;
      agar sharam hai (a) {
        jawab de a;
      } warna belt {
        jawab de "not nalla";
      }
      jao padhai karo
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test - comparing nalla with nalla "==", should success`,
    input: `
      idhar aao;
      agar sharam hai (nalla == nalla) {
        jawab de "hai nalla";
      }
      jao padhai karo
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with var "a", should success`,
    input: `
      idhar aao;
      ye sambhal a;
      agar sharam hai (nalla == a) {
        jawab de "hai nalla";
      }
      jao padhai karo
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with var "a" explicit initialization, should success`,
    input: `
      idhar aao;
      ye sambhal a = nalla;
      agar sharam hai (nalla == a) {
        jawab de "hai nalla";
      }
      jao padhai karo
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with string nalla, should success`,
    input: `
      idhar aao;
      ye sambhal a = nalla;
      agar sharam hai ("nalla" == a) {
        jawab de "hai nalla";
      } warna belt {
        jawab de "not nalla";
      }
      jao padhai karo
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with string nalla, should success`,
    input: `
      idhar aao;
      ye sambhal a = "nalla";
      agar sharam hai (nalla == a) {
        jawab de "hai nalla";
      } warna belt {
        jawab de "not nalla";
      }
      jao padhai karo
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with string null, should success`,
    input: `
      idhar aao;
      ye sambhal a = "null";
      agar sharam hai (nalla == a) {
        jawab de "hai nalla";
      } warna belt {
        jawab de "not nalla";
      }
      jao padhai karo
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test with nalla var "a" & "b" - 0, should success`,
    input: `
      idhar aao;
      ye sambhal a;
      ye sambhal b;
      agar sharam hai (a == b) {
        jawab de "hai nalla";
      } warna belt {
        jawab de "nahi nalla";
      }
      jao padhai karo
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with nalla var "a" & "b" - 1, should success`,
    input: `
      idhar aao;
      ye sambhal a;
      ye sambhal b = nalla;
      agar sharam hai (a == b) {
        jawab de "hai nalla";
      } warna belt {
        jawab de "nahi nalla";
      }
      jao padhai karo
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with nalla var "a" & "b" -2, should success`,
    input: `
      idhar aao;
      ye sambhal a;
      ye sambhal b = "nalla";
      agar sharam hai (a == b) {
        jawab de "hai nalla";
      } warna belt {
        jawab de "nahi nalla";
      }
      jao padhai karo
    `,
    output: "nahi nalla",
  },
  // Boolean test
  {
    name: `binaryExpression print test with boolean expression - sahi, should success`,
    input: `
      idhar aao;
      ye sambhal a = sahi;
      agar sharam hai (sahi == a) {
        jawab de "hai sahi";
      } warna belt {
        jawab de "nahi sahi";
      }
      jao padhai karo
    `,
    output: "hai sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - galat, should success`,
    input: `
      idhar aao;
      ye sambhal a = galat;
      agar sharam hai (galat == a) {
        jawab de "hai galat";
      } warna belt {
        jawab de "nahi galat";
      }
      jao padhai karo
    `,
    output: "hai galat",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi with string sahi, should success`,
    input: `
      idhar aao;
      ye sambhal a = "sahi";
      agar sharam hai (sahi == a) {
        jawab de "hai sahi";
      } warna belt {
        jawab de "nahi sahi";
      }
      jao padhai karo
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression, should success`,
    input: `
      idhar aao;
      ye sambhal a = 7;
      agar sharam hai (sahi == (a > 5)) {
        jawab de "hai sahi";
      } warna belt {
        jawab de "nahi sahi";
      }
      jao padhai karo
    `,
    output: "hai sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression & string "sahi", should success`,
    input: `
      idhar aao;
      ye sambhal a = 7;
      agar sharam hai ("sahi" == (a > 5)) {
        jawab de "hai sahi";
      } warna belt {
        jawab de "nahi sahi";
      }
      jao padhai karo
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression & two expressions, should success`,
    input: `
      idhar aao;
      ye sambhal a = sahi;
      agar sharam hai ("sahi" == (a == sahi)) {
        jawab de "hai sahi";
      } warna belt {
        jawab de "nahi sahi";
      }
      jao padhai karo
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression -3, should success`,
    input: `
      idhar aao;
      ye sambhal a = sahi;
      agar sharam hai ((a == sahi) == (a == sahi)) {
        jawab de "hai sahi";
      } warna belt {
        jawab de "nahi sahi";
      }
      jao padhai karo
    `,
    output: "hai sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression - 4, should success`,
    input: `
      idhar aao;
      ye sambhal a;
      agar sharam hai ((a == nalla) == (a == sahi)) {
        jawab de "hai sahi";
      } warna belt {
        jawab de "nahi sahi";
      }
      jao padhai karo
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression - 5, should success`,
    input: `
      idhar aao;
      ye sambhal a;
      agar sharam hai ((a == nalla) == (a == sahi)) {
        jawab de "hai sahi";
      } warna belt {
        jawab de "nahi sahi";
      }
      jao padhai karo
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression - 5, should success`,
    input: `
      idhar aao;
      ye sambhal a;
      ye sambhal b = galat;
      agar sharam hai (a == b) {
        jawab de "hai sahi";
      } warna belt {
        jawab de "nahi sahi";
      }
      jao padhai karo
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - galat variables comparison, should success`,
    input: `
      idhar aao;
      ye sambhal a = galat;
      ye sambhal b = galat;
      agar sharam hai (a == b) {
        jawab de "hai galat";
      } warna belt {
        jawab de "nahi galat";
      }
      jao padhai karo
    `,
    output: "hai galat",
  },
  {
    name: `binaryExpression print test with boolean expression - galat variables comparison with string galat, should success`,
    input: `
      idhar aao;
      ye sambhal a = "galat";
      ye sambhal b = galat;
      agar sharam hai (a == b) {
        jawab de "hai galat";
      } warna belt {
        jawab de "nahi galat";
      }
      jao padhai karo
    `,
    output: "nahi galat",
  },
  {
    name: "float value addition with integer value test, should success",
    input: `
      idhar aao
      ye sambhal a = 1.2, b = 2;
      jawab de a + b;
      jao padhai karo
    `,
    output: "3.2"
  },
  {
    name: "float value addition with float value value test, should success",
    input: `
      idhar aao
      ye sambhal a = 1.2, b = 2.3;
      jawab de a + b;
      jao padhai karo
    `,
    output: "3.5"
  },
  {
    name: "printStatement test with multiple expressions, should success",
    input: `
      idhar aao;
      ye sambhal a = 2, b = 60;
      jawab de (a * (4 + 8) + 10), b;
      jao padhai karo
    `,
    output: "34 60",
  },
  {
    name: "printStatement test with multiple expressions and re assigning value of one variable, should success",
    input: `
      idhar aao;
      ye sambhal a = 2, b = 60;

      a = b + 3;
      jawab de a, b;
      jao padhai karo
    `,
    output: "63 60",
  },
  {
    name: "printStatement test with multiple expressions & without any variables, should success",
    input: `
      idhar aao;
      jawab de "hello", sahi, galat;
      jao padhai karo
    `,
    output: "hello sahi galat",
  },
  {
    name: "printStatement test with nalla, should success",
    input: `
      idhar aao;
      jawab de nalla;
      jao padhai karo;
    `,
    output: "nalla",
  },
  {
    name: "printStatement test with nalla as second parameter, should success",
    input: `
      idhar aao;
      jawab de 10, nalla;
      jao padhai karo;
    `,
    output: "10 nalla",
  },
  {
    name: "printStatement test with string concatenation, should success",
    input: `
      idhar aao;
      jawab de "hello" + "crap";
      jao padhai karo;
    `,
    output: "hellocrap",
  },
  {
    name: "printStatement test with multiple expresions including nalla, should success",
    input: `
      idhar aao;
      ye sambhal a = 70;
      jawab de 6*5, nalla, "jamtara", a;
      jao padhai karo;
    `,
    output: "30 nalla jamtara 70",
  },
  {
    name: "printStatement test with nalla variable, should success",
    input: `
      idhar aao;
      ye sambhal a;
      jawab de a;
      jao padhai karo;
    `,
    output: "nalla",
  },
  {
    name: `printStatement test with string "undefined", should success`,
    input: `
      idhar aao;
      jawab de "undefined";
      jao padhai karo;
    `,
    output: "undefined",
  },
  {
    name: `printStatement test with nalla variable, should success`,
    input: `
      idhar aao;
      ye sambhal a;
      jawab de a;
      jao padhai karo;
    `,
    output: "nalla",
  },
  {
    name: `printStatement test with sahi variable, should success`,
    input: `
      idhar aao;
      ye sambhal a = sahi;
      jawab de a;
      jao padhai karo;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with galat variable, should success`,
    input: `
      idhar aao;
      ye sambhal a = galat;
      jawab de a;
      jao padhai karo;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with assignment expression, should success`,
    input: `
      idhar aao;
      ye sambhal a;
      jawab de a = 90;
      jao padhai karo;
    `,
    output: "90",
  },
  {
    name: `printStatement test with logical AND, should success`,
    input: `
      idhar aao;
      jawab de 9 && 10;
      jao padhai karo;
    `,
    output: "10",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      idhar aao;
      jawab de 9 || 10;
      jao padhai karo;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical - 1, should success`,
    input: `
      idhar aao;
      jawab de galat && sahi;
      jao padhai karo;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with logical - 2, should success`,
    input: `
    idhar aao;
    ye sambhal a = sahi;
    jawab de a && galat;
    jao padhai karo;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with logical - 3, should success`,
    input: `
    idhar aao;
    ye sambhal a = sahi;
    jawab de a && sahi;
    jao padhai karo;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with equality, should success`,
    input: `
      idhar aao;
      jawab de 9 == 10;
      jao padhai karo;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with inequality, should success`,
    input: `
      idhar aao;
      jawab de 9 != 10;
      jao padhai karo;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      idhar aao;
      jawab de 9 || 10;
      jao padhai karo;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical OR - 2, should success`,
    input: `
      idhar aao;
      jawab de galat || sahi;
      jao padhai karo;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with boolean sahi galat and logical, should success`,
    input: `
      idhar aao;
      jawab de sahi != 10;
      jao padhai karo;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with boolean sahi and string "sahi", should success`,
    input: `
      idhar aao;
      jawab de "sahi" == sahi;
      jao padhai karo;
    `,
    output: "galat",
  },
  // while statement / loop tests
  {
    name: `whileStatement test with 1 time loop, should success`,
    input: `
      idhar aao;
      ye sambhal a = 0;
      jb tak main na bolu (a < 1) {
        jawab de "bhai";
        a += 1;
      }
      jao padhai karo;
    `,
    output: "bhai",
  },
  {
    name: `whileStatement test with single break statement, should success`,
    input: `
      idhar aao;
      jb tak main na bolu (sahi) 
        bas kar bhai;
      jawab de "end";
      jao padhai karo;
    `,
    output: "end",
  },
  {
    name: `whileStatement test with nested loops, should success`,
    input: `
      idhar aao;
      ye sambhal a = 0;
      jb tak main na bolu (a < 2) {
        jb tak main na bolu (sahi)
          bas kar bhai;
        jawab de "hello";
        agar sharam hai (sahi)
          bas kar bhai;
      }
      jao padhai karo;
    `,
    output: "hello",
  },
  {
    name: `whileStatement with multiple breaks, should success`,
    input: `
      idhar aao;
      ye sambhal a = 0;
      jb tak main na bolu (a < 2) {
        jawab de "hello";
        agar sharam hai (sahi)
          bas kar bhai;
        bas kar bhai;
        bas kar bhai;
      }
      jao padhai karo;
    `,
    output: "hello",
  },
  // if statement tests
  {
    name: `if statement success test - 1: only if, should success`,
    input: `
    idhar aao
    agar sharam hai (sahi) {
      jawab de "bhai";
    }
    jao padhai karo;
    `,
    output: "bhai",
  },
  {
    name: `if statement success test - 2: if else both, should success`,
    input: `
    idhar aao
    agar sharam hai (sahi) {
      jawab de "sahi";
    } warna belt {
      jawab de "galat";
    }
    jao padhai karo;
    `,
    output: "sahi",
  },
  {
    name: `if statement success test - 3: if only with comarison condn, should success`,
    input: `
    idhar aao
    ye sambhal x = 9;
    agar sharam hai (x >= 9) {
      x = 5;
      jawab de x;
    } 
    jao padhai karo;
    `,
    output: "5",
  },
  // else-if statement tests
  {
    name: `else-if statement success test - 1: if with one else-if, should success`,
    input: `
    idhar aao
    agar sharam hai (galat) {
      jawab de "galat";
    } nahi to bhai (sahi) {
      jawab de "sahi";
    }
    jao padhai karo;
    `,
    output: "sahi",
  },
  {
    name: `else-if statement success test - 2: if with multiple else-ifs, should success`,
    input: `
    idhar aao
    ye sambhal x = 10;
    agar sharam hai (x < 5) {
      jawab de "x < 5";
    } nahi to bhai (x < 8) {
      jawab de "x < 8";
    } nahi to bhai (x < 12) {
      jawab de "x < 12";
    } nahi to bhai (x < 15) {
      jawab de "x < 15";
    }
    jao padhai karo;
    `,
    output: "x < 12",
  },
  {
    name: `else-if statement success test - 3: nested if-else-if ladder, should success`,
    input: `
    idhar aao
    ye sambhal a = 15;
    agar sharam hai (a < 0) {
      jawab de "a < 0";
    } nahi to bhai (a > 0) {
      agar sharam hai (a < 10) {
        jawab de "a < 10";
      } nahi to bhai (a < 20) {
        jawab de "a < 20";
      }
    }
    jao padhai karo
    `,
    output: "a < 20",
  },
  {
    name: `else-if statement success test - 4: if-else-if ladder evaluating to else, should success`,
    input: `
    idhar aao
    ye sambhal x = 15;
    agar sharam hai (x < 5) {
      jawab de "x < 5";
    } nahi to bhai (x < 8) {
      jawab de "x < 8";
    } nahi to bhai (x < 12) {
      jawab de "x < 12";
    } warna belt {
      jawab de "x > 12";
    }
    jao padhai karo;
    `,
    output: "x > 12",
  },
  // logical expression test
  {
    name: `logical "&&" test with sahi galat, should success`,
    input: `
        idhar aao
        agar sharam hai (sahi && galat) {
          jawab de "sahi";
        } warna belt {
          jawab de "galat";
        }
        jao padhai karo;
      `,
    output: `galat`,
  },
  // modulus operator test
  {
    name: `modulus operator "%" test, should success`,
    input: `
        idhar aao
        jawab de 90 % 9;
        jao padhai karo;
      `,
    output: `0`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        idhar aao
        jawab de 27 % 5;
        jao padhai karo;
      `,
    output: `2`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        idhar aao
        jawab de 5 % 20;
        jao padhai karo;
      `,
    output: `5`,
  },
  {
    name: `whileStatement test with single continue statement, should success`,
    input: `
      idhar aao;
      ye sambhal a = 5;
      ye sambhal step = 0;
      jb tak main na bolu (a > 0) {
        step += 1;
        agar sharam hai (a % 2 != 0){
          a -= 2;
          agla dekh bhai;
        }
        a -= 1;
      }
      jawab de step;
      jao padhai karo;
    `,
    output: "3",
  },
  {
    name: `whileStatement test with multiple continue statement, should success`,
    input: `
      idhar aao;
      ye sambhal a = 5;
      ye sambhal step = 0;
      jb tak main na bolu (a > 0) {
        step += 1;
        agar sharam hai (a % 2 == 0){
          a -= 2;
          agla dekh bhai;
        }
        a -= 1;
        agla dekh bhai;
        jawab de "oye oye oye.. yha tk nhi aana tha bhai";
      }
      jawab de step;
      jao padhai karo;
    `,
    output: "3",
  },
  {
    // step:  1 => 2
    // a: 10 => 7 => 6 => 3 => 2 => -1
    name: `whileStatement test with single continue statement without block, should success`,
    input: `
      idhar aao;
      ye sambhal a = 10;
      ye sambhal step = 0;
      jb tak main na bolu (a > 0) {
        agar sharam hai (a % 2 == 0){
          a -= 3;
          agla dekh bhai;
        }
        a -= 1;
        agar sharam hai (step == 1) agla dekh bhai
        step += 1;
      }
      jawab de step;
      jao padhai karo;
    `,
    output: "1",
  },
];