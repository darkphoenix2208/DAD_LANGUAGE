"use strict";
exports.__esModule = true;
exports.WithOutputPositiveTests = exports.NoOutputPositiveTests = void 0;
exports.NoOutputPositiveTests = [
    // init statement tests
    {
        name: "interpreter empty init statement test, should success",
        input: "\n      idhar aao\n      jao padhai karo\n    "
    },
    {
        name: "interpreter empty init statement test with random charaters initially, should success",
        input: "\n      some random characters\n      random random random\n      idhar aao\n      jao padhai karo\n    "
    },
    // empty statement tests
    {
        name: "interpreter empty statement test, should success",
        input: "\n      idhar aao\n      ;\n      jao padhai karo\n    "
    },
    {
        name: "interpreter multiple empty statements test, should success",
        input: "\n      idhar aao\n      ;\n      ;\n      ;;\n      jao padhai karo\n    "
    },
    // block statement tests
    {
        name: "interpreter block statement test with empty block, should success",
        input: "\n      idhar aao\n      {};\n      jao padhai karo\n    "
    },
    {
        name: "interpreter block statement test with variable statement inside, should success",
        input: "\n      idhar aao\n      {\n        ye sambhal a = 4;\n      }\n      jao padhai karo\n    "
    },
    // variable statement test
    {
        name: "interpreter variable statement test with basic variable declaration, should success",
        input: "\n      idhar aao\n      ye sambhal a, b, c;\n      jao padhai karo\n    "
    },
    {
        name: "interpreter variable statement test with basic variable declaration and initialisation, should success",
        input: "\n      idhar aao\n      ye sambhal a = 10, b = \"crap\";\n      jao padhai karo\n    "
    },
    {
        name: "interpreter variable statement test with multiple variable initialisation, should success",
        input: "\n      idhar aao\n      ye sambhal a = 10, b = 5;\n      jao padhai karo\n    "
    },
    {
        name: "interpreter variable statement test with variable initialisation with some expression, should success",
        input: "\n      idhar aao\n      ye sambhal a = 7 + 90;\n      jao padhai karo\n    "
    },
    // assignment expression tests
    {
        name: "simple assignment expression test with only one identifer, should success",
        input: "\n      idhar aao\n      ye sambhal a = sahi;\n      a = 4;\n      jao padhai karo\n    "
    },
    {
        name: "complex assignment expression test with only one identifer, should success",
        input: "\n      idhar aao\n      ye sambhal a = 2;\n      a *= 4;\n      jao padhai karo\n    "
    },
    // paranthesized expression tests
    {
        name: "paranthesized expression test with one parenthesis and simple expression, should success",
        input: "\n      idhar aao\n      ye sambhal a = 2;\n      (a + 4);\n      jao padhai karo\n    "
    },
    {
        name: "paranthesized expression test with one parenthesis and complex expression, should success",
        input: "\n      idhar aao\n      ye sambhal a = 2;\n      (a + 4) * 10 + (5 - 4);\n      jao padhai karo\n    "
    },
    {
        name: "paranthesized expression test with multiple parenthesis, should success",
        input: "\n      idhar aao\n      ye sambhal a = 2;\n      (a * (4 + 8) + 10);\n      jao padhai karo\n    "
    },
    // if statement test
    {
        name: "paranthesized expression test with multiple parenthesis, should success",
        input: "\n    idhar aao\n    ye sambhal x = 9;\n    agar sharam hai (x != 9) {\n      x = 5;\n      jawab de x;\n    } warna belt (x >= 9);\n    jao padhai karo;\n    "
    },
];
exports.WithOutputPositiveTests = [
    {
        name: "variable assignment test with multiple variables, should success",
        input: "\n      idhar aao;\n      ye sambhal a , b;\n      a = b = 60;\n      jawab de a, b;\n      jao padhai karo\n    ",
        output: "60 60"
    },
    {
        name: "binaryExpression print test with nalla and \"==\", should success",
        input: "\n      idhar aao;\n      ye sambhal a;\n      agar sharam hai (a == nalla) {\n        jawab de a;\n      }\n      jao padhai karo\n    ",
        output: "nalla"
    },
    {
        name: "binaryExpression print test with nalla without any operator, should success",
        input: "\n      idhar aao;\n      ye sambhal a;\n      agar sharam hai (a) {\n        jawab de a;\n      } warna belt {\n        jawab de \"not nalla\";\n      }\n      jao padhai karo\n    ",
        output: "not nalla"
    },
    {
        name: "binaryExpression print test - comparing nalla with nalla \"==\", should success",
        input: "\n      idhar aao;\n      agar sharam hai (nalla == nalla) {\n        jawab de \"hai nalla\";\n      }\n      jao padhai karo\n    ",
        output: "hai nalla"
    },
    {
        name: "binaryExpression print test with comparing nalla with var \"a\", should success",
        input: "\n      idhar aao;\n      ye sambhal a;\n      agar sharam hai (nalla == a) {\n        jawab de \"hai nalla\";\n      }\n      jao padhai karo\n    ",
        output: "hai nalla"
    },
    {
        name: "binaryExpression print test with comparing nalla with var \"a\" explicit initialization, should success",
        input: "\n      idhar aao;\n      ye sambhal a = nalla;\n      agar sharam hai (nalla == a) {\n        jawab de \"hai nalla\";\n      }\n      jao padhai karo\n    ",
        output: "hai nalla"
    },
    {
        name: "binaryExpression print test with comparing nalla with string nalla, should success",
        input: "\n      idhar aao;\n      ye sambhal a = nalla;\n      agar sharam hai (\"nalla\" == a) {\n        jawab de \"hai nalla\";\n      } warna belt {\n        jawab de \"not nalla\";\n      }\n      jao padhai karo\n    ",
        output: "not nalla"
    },
    {
        name: "binaryExpression print test with comparing nalla with string nalla, should success",
        input: "\n      idhar aao;\n      ye sambhal a = \"nalla\";\n      agar sharam hai (nalla == a) {\n        jawab de \"hai nalla\";\n      } warna belt {\n        jawab de \"not nalla\";\n      }\n      jao padhai karo\n    ",
        output: "not nalla"
    },
    {
        name: "binaryExpression print test with comparing nalla with string null, should success",
        input: "\n      idhar aao;\n      ye sambhal a = \"null\";\n      agar sharam hai (nalla == a) {\n        jawab de \"hai nalla\";\n      } warna belt {\n        jawab de \"not nalla\";\n      }\n      jao padhai karo\n    ",
        output: "not nalla"
    },
    {
        name: "binaryExpression print test with nalla var \"a\" & \"b\" - 0, should success",
        input: "\n      idhar aao;\n      ye sambhal a;\n      ye sambhal b;\n      agar sharam hai (a == b) {\n        jawab de \"hai nalla\";\n      } warna belt {\n        jawab de \"nahi nalla\";\n      }\n      jao padhai karo\n    ",
        output: "hai nalla"
    },
    {
        name: "binaryExpression print test with nalla var \"a\" & \"b\" - 1, should success",
        input: "\n      idhar aao;\n      ye sambhal a;\n      ye sambhal b = nalla;\n      agar sharam hai (a == b) {\n        jawab de \"hai nalla\";\n      } warna belt {\n        jawab de \"nahi nalla\";\n      }\n      jao padhai karo\n    ",
        output: "hai nalla"
    },
    {
        name: "binaryExpression print test with nalla var \"a\" & \"b\" -2, should success",
        input: "\n      idhar aao;\n      ye sambhal a;\n      ye sambhal b = \"nalla\";\n      agar sharam hai (a == b) {\n        jawab de \"hai nalla\";\n      } warna belt {\n        jawab de \"nahi nalla\";\n      }\n      jao padhai karo\n    ",
        output: "nahi nalla"
    },
    // Boolean test
    {
        name: "binaryExpression print test with boolean expression - sahi, should success",
        input: "\n      idhar aao;\n      ye sambhal a = sahi;\n      agar sharam hai (sahi == a) {\n        jawab de \"hai sahi\";\n      } warna belt {\n        jawab de \"nahi sahi\";\n      }\n      jao padhai karo\n    ",
        output: "hai sahi"
    },
    {
        name: "binaryExpression print test with boolean expression - galat, should success",
        input: "\n      idhar aao;\n      ye sambhal a = galat;\n      agar sharam hai (galat == a) {\n        jawab de \"hai galat\";\n      } warna belt {\n        jawab de \"nahi galat\";\n      }\n      jao padhai karo\n    ",
        output: "hai galat"
    },
    {
        name: "binaryExpression print test with boolean expression - sahi with string sahi, should success",
        input: "\n      idhar aao;\n      ye sambhal a = \"sahi\";\n      agar sharam hai (sahi == a) {\n        jawab de \"hai sahi\";\n      } warna belt {\n        jawab de \"nahi sahi\";\n      }\n      jao padhai karo\n    ",
        output: "nahi sahi"
    },
    {
        name: "binaryExpression print test with boolean expression - sahi expression, should success",
        input: "\n      idhar aao;\n      ye sambhal a = 7;\n      agar sharam hai (sahi == (a > 5)) {\n        jawab de \"hai sahi\";\n      } warna belt {\n        jawab de \"nahi sahi\";\n      }\n      jao padhai karo\n    ",
        output: "hai sahi"
    },
    {
        name: "binaryExpression print test with boolean expression - sahi expression & string \"sahi\", should success",
        input: "\n      idhar aao;\n      ye sambhal a = 7;\n      agar sharam hai (\"sahi\" == (a > 5)) {\n        jawab de \"hai sahi\";\n      } warna belt {\n        jawab de \"nahi sahi\";\n      }\n      jao padhai karo\n    ",
        output: "nahi sahi"
    },
    {
        name: "binaryExpression print test with boolean expression - sahi expression & two expressions, should success",
        input: "\n      idhar aao;\n      ye sambhal a = sahi;\n      agar sharam hai (\"sahi\" == (a == sahi)) {\n        jawab de \"hai sahi\";\n      } warna belt {\n        jawab de \"nahi sahi\";\n      }\n      jao padhai karo\n    ",
        output: "nahi sahi"
    },
    {
        name: "binaryExpression print test with boolean expression - sahi expression -3, should success",
        input: "\n      idhar aao;\n      ye sambhal a = sahi;\n      agar sharam hai ((a == sahi) == (a == sahi)) {\n        jawab de \"hai sahi\";\n      } warna belt {\n        jawab de \"nahi sahi\";\n      }\n      jao padhai karo\n    ",
        output: "hai sahi"
    },
    {
        name: "binaryExpression print test with boolean expression - sahi expression - 4, should success",
        input: "\n      idhar aao;\n      ye sambhal a;\n      agar sharam hai ((a == nalla) == (a == sahi)) {\n        jawab de \"hai sahi\";\n      } warna belt {\n        jawab de \"nahi sahi\";\n      }\n      jao padhai karo\n    ",
        output: "nahi sahi"
    },
    {
        name: "binaryExpression print test with boolean expression - sahi expression - 5, should success",
        input: "\n      idhar aao;\n      ye sambhal a;\n      agar sharam hai ((a == nalla) == (a == sahi)) {\n        jawab de \"hai sahi\";\n      } warna belt {\n        jawab de \"nahi sahi\";\n      }\n      jao padhai karo\n    ",
        output: "nahi sahi"
    },
    {
        name: "binaryExpression print test with boolean expression - sahi expression - 5, should success",
        input: "\n      idhar aao;\n      ye sambhal a;\n      ye sambhal b = galat;\n      agar sharam hai (a == b) {\n        jawab de \"hai sahi\";\n      } warna belt {\n        jawab de \"nahi sahi\";\n      }\n      jao padhai karo\n    ",
        output: "nahi sahi"
    },
    {
        name: "binaryExpression print test with boolean expression - galat variables comparison, should success",
        input: "\n      idhar aao;\n      ye sambhal a = galat;\n      ye sambhal b = galat;\n      agar sharam hai (a == b) {\n        jawab de \"hai galat\";\n      } warna belt {\n        jawab de \"nahi galat\";\n      }\n      jao padhai karo\n    ",
        output: "hai galat"
    },
    {
        name: "binaryExpression print test with boolean expression - galat variables comparison with string galat, should success",
        input: "\n      idhar aao;\n      ye sambhal a = \"galat\";\n      ye sambhal b = galat;\n      agar sharam hai (a == b) {\n        jawab de \"hai galat\";\n      } warna belt {\n        jawab de \"nahi galat\";\n      }\n      jao padhai karo\n    ",
        output: "nahi galat"
    },
    {
        name: "float value addition with integer value test, should success",
        input: "\n      idhar aao\n      ye sambhal a = 1.2, b = 2;\n      jawab de a + b;\n      jao padhai karo\n    ",
        output: "3.2"
    },
    {
        name: "float value addition with float value value test, should success",
        input: "\n      idhar aao\n      ye sambhal a = 1.2, b = 2.3;\n      jawab de a + b;\n      jao padhai karo\n    ",
        output: "3.5"
    },
    {
        name: "printStatement test with multiple expressions, should success",
        input: "\n      idhar aao;\n      ye sambhal a = 2, b = 60;\n      jawab de (a * (4 + 8) + 10), b;\n      jao padhai karo\n    ",
        output: "34 60"
    },
    {
        name: "printStatement test with multiple expressions and re assigning value of one variable, should success",
        input: "\n      idhar aao;\n      ye sambhal a = 2, b = 60;\n\n      a = b + 3;\n      jawab de a, b;\n      jao padhai karo\n    ",
        output: "63 60"
    },
    {
        name: "printStatement test with multiple expressions & without any variables, should success",
        input: "\n      idhar aao;\n      jawab de \"hello\", sahi, galat;\n      jao padhai karo\n    ",
        output: "hello sahi galat"
    },
    {
        name: "printStatement test with nalla, should success",
        input: "\n      idhar aao;\n      jawab de nalla;\n      jao padhai karo;\n    ",
        output: "nalla"
    },
    {
        name: "printStatement test with nalla as second parameter, should success",
        input: "\n      idhar aao;\n      jawab de 10, nalla;\n      jao padhai karo;\n    ",
        output: "10 nalla"
    },
    {
        name: "printStatement test with string concatenation, should success",
        input: "\n      idhar aao;\n      jawab de \"hello\" + \"crap\";\n      jao padhai karo;\n    ",
        output: "hellocrap"
    },
    {
        name: "printStatement test with multiple expresions including nalla, should success",
        input: "\n      idhar aao;\n      ye sambhal a = 70;\n      jawab de 6*5, nalla, \"jamtara\", a;\n      jao padhai karo;\n    ",
        output: "30 nalla jamtara 70"
    },
    {
        name: "printStatement test with nalla variable, should success",
        input: "\n      idhar aao;\n      ye sambhal a;\n      jawab de a;\n      jao padhai karo;\n    ",
        output: "nalla"
    },
    {
        name: "printStatement test with string \"undefined\", should success",
        input: "\n      idhar aao;\n      jawab de \"undefined\";\n      jao padhai karo;\n    ",
        output: "undefined"
    },
    {
        name: "printStatement test with nalla variable, should success",
        input: "\n      idhar aao;\n      ye sambhal a;\n      jawab de a;\n      jao padhai karo;\n    ",
        output: "nalla"
    },
    {
        name: "printStatement test with sahi variable, should success",
        input: "\n      idhar aao;\n      ye sambhal a = sahi;\n      jawab de a;\n      jao padhai karo;\n    ",
        output: "sahi"
    },
    {
        name: "printStatement test with galat variable, should success",
        input: "\n      idhar aao;\n      ye sambhal a = galat;\n      jawab de a;\n      jao padhai karo;\n    ",
        output: "galat"
    },
    {
        name: "printStatement test with assignment expression, should success",
        input: "\n      idhar aao;\n      ye sambhal a;\n      jawab de a = 90;\n      jao padhai karo;\n    ",
        output: "90"
    },
    {
        name: "printStatement test with logical AND, should success",
        input: "\n      idhar aao;\n      jawab de 9 && 10;\n      jao padhai karo;\n    ",
        output: "10"
    },
    {
        name: "printStatement test with logical OR, should success",
        input: "\n      idhar aao;\n      jawab de 9 || 10;\n      jao padhai karo;\n    ",
        output: "9"
    },
    {
        name: "printStatement test with logical - 1, should success",
        input: "\n      idhar aao;\n      jawab de galat && sahi;\n      jao padhai karo;\n    ",
        output: "galat"
    },
    {
        name: "printStatement test with logical - 2, should success",
        input: "\n    idhar aao;\n    ye sambhal a = sahi;\n    jawab de a && galat;\n    jao padhai karo;\n    ",
        output: "galat"
    },
    {
        name: "printStatement test with logical - 3, should success",
        input: "\n    idhar aao;\n    ye sambhal a = sahi;\n    jawab de a && sahi;\n    jao padhai karo;\n    ",
        output: "sahi"
    },
    {
        name: "printStatement test with equality, should success",
        input: "\n      idhar aao;\n      jawab de 9 == 10;\n      jao padhai karo;\n    ",
        output: "galat"
    },
    {
        name: "printStatement test with inequality, should success",
        input: "\n      idhar aao;\n      jawab de 9 != 10;\n      jao padhai karo;\n    ",
        output: "sahi"
    },
    {
        name: "printStatement test with logical OR, should success",
        input: "\n      idhar aao;\n      jawab de 9 || 10;\n      jao padhai karo;\n    ",
        output: "9"
    },
    {
        name: "printStatement test with logical OR - 2, should success",
        input: "\n      idhar aao;\n      jawab de galat || sahi;\n      jao padhai karo;\n    ",
        output: "sahi"
    },
    {
        name: "printStatement test with boolean sahi galat and logical, should success",
        input: "\n      idhar aao;\n      jawab de sahi != 10;\n      jao padhai karo;\n    ",
        output: "sahi"
    },
    {
        name: "printStatement test with boolean sahi and string \"sahi\", should success",
        input: "\n      idhar aao;\n      jawab de \"sahi\" == sahi;\n      jao padhai karo;\n    ",
        output: "galat"
    },
    // while statement / loop tests
    {
        name: "whileStatement test with 1 time loop, should success",
        input: "\n      idhar aao;\n      ye sambhal a = 0;\n      jb tak main na bolu (a < 1) {\n        jawab de \"bhai\";\n        a += 1;\n      }\n      jao padhai karo;\n    ",
        output: "bhai"
    },
    {
        name: "whileStatement test with single break statement, should success",
        input: "\n      idhar aao;\n      jb tak main na bolu (sahi) \n        bas kar bhai;\n      jawab de \"end\";\n      jao padhai karo;\n    ",
        output: "end"
    },
    {
        name: "whileStatement test with nested loops, should success",
        input: "\n      idhar aao;\n      ye sambhal a = 0;\n      jb tak main na bolu (a < 2) {\n        jb tak main na bolu (sahi)\n          bas kar bhai;\n        jawab de \"hello\";\n        agar sharam hai (sahi)\n          bas kar bhai;\n      }\n      jao padhai karo;\n    ",
        output: "hello"
    },
    {
        name: "whileStatement with multiple breaks, should success",
        input: "\n      idhar aao;\n      ye sambhal a = 0;\n      jb tak main na bolu (a < 2) {\n        jawab de \"hello\";\n        agar sharam hai (sahi)\n          bas kar bhai;\n        bas kar bhai;\n        bas kar bhai;\n      }\n      jao padhai karo;\n    ",
        output: "hello"
    },
    // if statement tests
    {
        name: "if statement success test - 1: only if, should success",
        input: "\n    idhar aao\n    agar sharam hai (sahi) {\n      jawab de \"bhai\";\n    }\n    jao padhai karo;\n    ",
        output: "bhai"
    },
    {
        name: "if statement success test - 2: if else both, should success",
        input: "\n    idhar aao\n    agar sharam hai (sahi) {\n      jawab de \"sahi\";\n    } warna belt {\n      jawab de \"galat\";\n    }\n    jao padhai karo;\n    ",
        output: "sahi"
    },
    {
        name: "if statement success test - 3: if only with comarison condn, should success",
        input: "\n    idhar aao\n    ye sambhal x = 9;\n    agar sharam hai (x >= 9) {\n      x = 5;\n      jawab de x;\n    } \n    jao padhai karo;\n    ",
        output: "5"
    },
    // else-if statement tests
    {
        name: "else-if statement success test - 1: if with one else-if, should success",
        input: "\n    idhar aao\n    agar sharam hai (galat) {\n      jawab de \"galat\";\n    } nahi to bhai (sahi) {\n      jawab de \"sahi\";\n    }\n    jao padhai karo;\n    ",
        output: "sahi"
    },
    {
        name: "else-if statement success test - 2: if with multiple else-ifs, should success",
        input: "\n    idhar aao\n    ye sambhal x = 10;\n    agar sharam hai (x < 5) {\n      jawab de \"x < 5\";\n    } nahi to bhai (x < 8) {\n      jawab de \"x < 8\";\n    } nahi to bhai (x < 12) {\n      jawab de \"x < 12\";\n    } nahi to bhai (x < 15) {\n      jawab de \"x < 15\";\n    }\n    jao padhai karo;\n    ",
        output: "x < 12"
    },
    {
        name: "else-if statement success test - 3: nested if-else-if ladder, should success",
        input: "\n    idhar aao\n    ye sambhal a = 15;\n    agar sharam hai (a < 0) {\n      jawab de \"a < 0\";\n    } nahi to bhai (a > 0) {\n      agar sharam hai (a < 10) {\n        jawab de \"a < 10\";\n      } nahi to bhai (a < 20) {\n        jawab de \"a < 20\";\n      }\n    }\n    jao padhai karo\n    ",
        output: "a < 20"
    },
    {
        name: "else-if statement success test - 4: if-else-if ladder evaluating to else, should success",
        input: "\n    idhar aao\n    ye sambhal x = 15;\n    agar sharam hai (x < 5) {\n      jawab de \"x < 5\";\n    } nahi to bhai (x < 8) {\n      jawab de \"x < 8\";\n    } nahi to bhai (x < 12) {\n      jawab de \"x < 12\";\n    } warna belt {\n      jawab de \"x > 12\";\n    }\n    jao padhai karo;\n    ",
        output: "x > 12"
    },
    // logical expression test
    {
        name: "logical \"&&\" test with sahi galat, should success",
        input: "\n        idhar aao\n        agar sharam hai (sahi && galat) {\n          jawab de \"sahi\";\n        } warna belt {\n          jawab de \"galat\";\n        }\n        jao padhai karo;\n      ",
        output: "galat"
    },
    // modulus operator test
    {
        name: "modulus operator \"%\" test, should success",
        input: "\n        idhar aao\n        jawab de 90 % 9;\n        jao padhai karo;\n      ",
        output: "0"
    },
    {
        name: "modulus operator \"%\" test - 2, should success",
        input: "\n        idhar aao\n        jawab de 27 % 5;\n        jao padhai karo;\n      ",
        output: "2"
    },
    {
        name: "modulus operator \"%\" test - 2, should success",
        input: "\n        idhar aao\n        jawab de 5 % 20;\n        jao padhai karo;\n      ",
        output: "5"
    },
    {
        name: "whileStatement test with single continue statement, should success",
        input: "\n      idhar aao;\n      ye sambhal a = 5;\n      ye sambhal step = 0;\n      jb tak main na bolu (a > 0) {\n        step += 1;\n        agar sharam hai (a % 2 != 0){\n          a -= 2;\n          agla dekh bhai;\n        }\n        a -= 1;\n      }\n      jawab de step;\n      jao padhai karo;\n    ",
        output: "3"
    },
    {
        name: "whileStatement test with multiple continue statement, should success",
        input: "\n      idhar aao;\n      ye sambhal a = 5;\n      ye sambhal step = 0;\n      jb tak main na bolu (a > 0) {\n        step += 1;\n        agar sharam hai (a % 2 == 0){\n          a -= 2;\n          agla dekh bhai;\n        }\n        a -= 1;\n        agla dekh bhai;\n        jawab de \"oye oye oye.. yha tk nhi aana tha bhai\";\n      }\n      jawab de step;\n      jao padhai karo;\n    ",
        output: "3"
    },
    {
        // step:  1 => 2
        // a: 10 => 7 => 6 => 3 => 2 => -1
        name: "whileStatement test with single continue statement without block, should success",
        input: "\n      idhar aao;\n      ye sambhal a = 10;\n      ye sambhal step = 0;\n      jb tak main na bolu (a > 0) {\n        agar sharam hai (a % 2 == 0){\n          a -= 3;\n          agla dekh bhai;\n        }\n        a -= 1;\n        agar sharam hai (step == 1) agla dekh bhai\n        step += 1;\n      }\n      jawab de step;\n      jao padhai karo;\n    ",
        output: "1"
    },
];
