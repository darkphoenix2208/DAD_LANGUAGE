export const TokenTypes = {
  NULL_TYPE: null,

  CHUGLI: "chugli",

  CLASS: "khandaan",
  EXTENDS: "ka_khoon_hai",
  NEW: "avtaar",
  THIS: "khud",
  CONSTRUCTOR: "sanskar",
  SWITCH: "rishtedaar_aaye",
  CASE: "muh_dikhai",
  DEFAULT: "bache_kuche",
  ASYNC: "dheere_dheere",
  AWAIT: "ruko_zara",


  PROGRAM_START: "idhar aao",

  PROGRAM_END: "jao padhai karo",

  PRINT: "jawab de",

  VARIABLE_DECLARATION: "ye sambhal",

  IF_CONDITION: "agar sharam hai",

  ELSE_IF_CONDITION: "nahi to bhai",

  ELSE_CONDITION: "warna belt",

  PARAMPARA: "parampara",

  NAHI_TO_BHAI: "nahi to bhai",

  WHILE_LOOP: "jab tak main na bolu",

  BREAK_STATEMENT: "bas kar bhai",

  CONTINUE_STATEMENT: "agla dekh bhai",

  NALLA_TYPE: "NALLA",

  SEMI_COLON_TYPE: ";",

  OPEN_CURLY_BRACE_TYPE: "{",

  CLOSED_CURLY_BRACE_TYPE: "}",

  OPEN_PARENTHESIS_TYPE: "(",

  CLOSED_PARENTHESIS_TYPE: ")",

  COMMA_TYPE: ",",

  OPEN_SQUARE_BRACKET: "[",

  CLOSED_SQUARE_BRACKET: "]",

  DOT: ".",

  COLON_TYPE: ":",


  NUMBER_TYPE: "NUMBER",

  IDENTIFIER_TYPE: "IDENTIFIER",

  SIMPLE_ASSIGN_TYPE: "SIMPLE_ASSIGN",

  COMPLEX_ASSIGN_TYPE: "COMPLEX_ASSIGN",

  ADDITIVE_OPERATOR_TYPE: "ADDITIVE_OPERATOR",

  MULTIPLICATIVE_OPERATOR_TYPE: "MULTIPLICATIVE_OPERATOR",

  RELATIONAL_OPERATOR: "RELATIONAL_OPERATOR",

  EQUALITY_OPERATOR: "EQUALITY_OPERATOR",

  STRING_TYPE: "STRING",

  BOOLEAN_TYPE: "BOOLEAN",

  LOGICAL_AND: "LOGICAL_AND",

  LOGICAL_OR: "LOGICAL_OR",

  TRY: "chori chuppe",

  CATCH: "pakde gaye toh",

  SLEEP: "bas paanch minute"
};

export const SPEC = [
  // Whitespcaes
  { regex: /^\s+/, tokenType: TokenTypes.NULL_TYPE },

  // singke line Comments
  { regex: /^\/\/.*/, tokenType: TokenTypes.NULL_TYPE },
  { regex: /^\bchugli:.*/, tokenType: TokenTypes.NULL_TYPE },

  // multi line comments
  { regex: /^\/\*[\s\S]*?\*\//, tokenType: TokenTypes.NULL_TYPE },

  // Symbols, delimiters
  { regex: /^;/, tokenType: TokenTypes.SEMI_COLON_TYPE },
  { regex: /^\{/, tokenType: TokenTypes.OPEN_CURLY_BRACE_TYPE },
  { regex: /^\}/, tokenType: TokenTypes.CLOSED_CURLY_BRACE_TYPE },
  { regex: /^\(/, tokenType: TokenTypes.OPEN_PARENTHESIS_TYPE },
  { regex: /^\)/, tokenType: TokenTypes.CLOSED_PARENTHESIS_TYPE },
  { regex: /^,/, tokenType: TokenTypes.COMMA_TYPE },
  { regex: /^\[/, tokenType: TokenTypes.OPEN_SQUARE_BRACKET },
  { regex: /^\]/, tokenType: TokenTypes.CLOSED_SQUARE_BRACKET },
  { regex: /^\./, tokenType: TokenTypes.DOT },
  { regex: /^:/, tokenType: TokenTypes.COLON_TYPE },

  //Keywords
  { regex: /^\bidhar aao\b/, tokenType: TokenTypes.PROGRAM_START },
  { regex: /^\bjao padhai karo\b/, tokenType: TokenTypes.PROGRAM_END },
  { regex: /^\bjawab de\b/, tokenType: TokenTypes.PRINT },
  { regex: /^\bye sambhal\b/, tokenType: TokenTypes.VARIABLE_DECLARATION },
  { regex: /^\bagar sharam hai\b/, tokenType: TokenTypes.IF_CONDITION },
  { regex: /^\bnahi to bhai\b/, tokenType: TokenTypes.ELSE_IF_CONDITION },
  { regex: /^\bwarna belt\b/, tokenType: TokenTypes.ELSE_CONDITION },
  { regex: /^\bparampara\b/, tokenType: TokenTypes.PARAMPARA },
  { regex: /^\bkhandaan\b/, tokenType: TokenTypes.CLASS },
  { regex: /^\bka_khoon_hai\b/, tokenType: TokenTypes.EXTENDS },
  { regex: /^\bavtaar\b/, tokenType: TokenTypes.NEW },
  { regex: /^\bkhud\b/, tokenType: TokenTypes.THIS },
  { regex: /^\bsanskar\b/, tokenType: TokenTypes.CONSTRUCTOR },
  { regex: /^\brishtedaar_aaye\b/, tokenType: TokenTypes.SWITCH },
  { regex: /^\bmuh_dikhai\b/, tokenType: TokenTypes.CASE },
  { regex: /^\bbache_kuche\b/, tokenType: TokenTypes.DEFAULT },
  { regex: /^\bdheere_dheere\b/, tokenType: TokenTypes.ASYNC },
  { regex: /^\bruko_zara\b/, tokenType: TokenTypes.AWAIT },
  { regex: /^\bnalla\b/, tokenType: TokenTypes.NALLA_TYPE },
  { regex: /^\bjab tak main na bolu\b/, tokenType: TokenTypes.WHILE_LOOP },
  { regex: /^\bbas kar bhai\b/, tokenType: TokenTypes.BREAK_STATEMENT },
  { regex: /^\bagla dekh bhai\b/, tokenType: TokenTypes.CONTINUE_STATEMENT },
  { regex: /^\bchori chuppe\b/, tokenType: TokenTypes.TRY },
  { regex: /^\bpakde gaye toh\b/, tokenType: TokenTypes.CATCH },
  { regex: /^\bbas paanch minute\b/, tokenType: TokenTypes.SLEEP },

  // Number
  { regex: /^[+-]?([\d]*[.])?[\d]+/, tokenType: TokenTypes.NUMBER_TYPE },

  // Boolean
  { regex: /^\bsahi\b/, tokenType: TokenTypes.BOOLEAN_TYPE },
  { regex: /^\bgalat\b/, tokenType: TokenTypes.BOOLEAN_TYPE },

  // Identifier
  { regex: /^\w+/, tokenType: TokenTypes.IDENTIFIER_TYPE },

  // Equality operator: ==, !=
  { regex: /^[=!]=/, tokenType: TokenTypes.EQUALITY_OPERATOR },

  // Assignment operators: =, *=, /=, +=, -=
  { regex: /^=/, tokenType: TokenTypes.SIMPLE_ASSIGN_TYPE },
  { regex: /^[\*\%\/\+\-]=/, tokenType: TokenTypes.COMPLEX_ASSIGN_TYPE },

  // operator
  { regex: /^[+\-]/, tokenType: TokenTypes.ADDITIVE_OPERATOR_TYPE },
  { regex: /^[*\/\%]/, tokenType: TokenTypes.MULTIPLICATIVE_OPERATOR_TYPE },
  { regex: /^[><]=?/, tokenType: TokenTypes.RELATIONAL_OPERATOR },

  // logical operators: &&, ||
  { regex: /^&&/, tokenType: TokenTypes.LOGICAL_AND },
  { regex: /^\|\|/, tokenType: TokenTypes.LOGICAL_OR },

  // String
  { regex: /^"[^"]*"/, tokenType: TokenTypes.STRING_TYPE },
  { regex: /^'[^']*'/, tokenType: TokenTypes.STRING_TYPE },
];

export type Spec = typeof SPEC;
