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


  HI_BHAI_TYPE: "idhar aao",

  BYE_BHAI_TYPE: "jao padhai karo",

  BOL_BHAI_TYPE: "jawab de",

  BHAI_YE_HAI_TYPE: "ye sambhal",

  AGAR_BHAI: "agar sharam hai",

  WARNA_BHAI: "warna belt",

  PARAMPARA: "parampara",

  NAHI_TO_BHAI: "nahi to bhai", // Assuming this one wasn't explicitly asked to change, but best to keep it consistent or leave as is if no instruction. User didn't specify 'nahi to bhai'. I will leave it or infer 'nahi to belt'? User said "Else Condition: warna belt". But 'nahi to bhai' is 'else if'. I will check the user prompt again. User provided: "Else Condition: warna belt". "If Condition: agar sharam hai". User missed "else if". I will leave "Else If" as "nahi to bhai" for now to avoid breaking unrequested parts, OR I can make a guess 'nahi to belt'. Given instructions are specific, I will stick to what was asked. BUT wait, 'warna bhai' is typically 'else'. 'nahi to bhai' is 'else if'. I'll stick to 'nahi to bhai' as to not overstep, or maybe change 'bhai' to something else? The user didn't ask for it. I will leave the keys as is but change values where requested.

  JAB_TAK_BHAI: "jab tak main na bolu",

  BAS_KAR_BHAI: "bas kar bhai", // User didn't specify break

  AGLA_DEKH_BHAI: "agla dekh bhai", // User didn't specify continue

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
  { regex: /^\bidhar aao\b/, tokenType: TokenTypes.HI_BHAI_TYPE },
  { regex: /^\bjao padhai karo\b/, tokenType: TokenTypes.BYE_BHAI_TYPE },
  { regex: /^\bjawab de\b/, tokenType: TokenTypes.BOL_BHAI_TYPE },
  { regex: /^\bye sambhal\b/, tokenType: TokenTypes.BHAI_YE_HAI_TYPE },
  { regex: /^\bagar sharam hai\b/, tokenType: TokenTypes.AGAR_BHAI },
  { regex: /^\bnahi to bhai\b/, tokenType: TokenTypes.NAHI_TO_BHAI },
  { regex: /^\bwarna belt\b/, tokenType: TokenTypes.WARNA_BHAI },
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
  { regex: /^\bkhaali_dimaag\b/, tokenType: TokenTypes.NALLA_TYPE },
  { regex: /^\bjab tak main na bolu\b/, tokenType: TokenTypes.JAB_TAK_BHAI },
  { regex: /^\bbas kar bhai\b/, tokenType: TokenTypes.BAS_KAR_BHAI },
  { regex: /^\bagla dekh bhai\b/, tokenType: TokenTypes.AGLA_DEKH_BHAI },
  { regex: /^\bchori chuppe\b/, tokenType: TokenTypes.TRY },
  { regex: /^\bpakde gaye toh\b/, tokenType: TokenTypes.CATCH },
  { regex: /^\bbas paanch minute\b/, tokenType: TokenTypes.SLEEP },

  // Number
  { regex: /^[+-]?([\d]*[.])?[\d]+/, tokenType: TokenTypes.NUMBER_TYPE },

  // Boolean
  { regex: /^\bsharmaji_ka_beta\b/, tokenType: TokenTypes.BOOLEAN_TYPE },
  { regex: /^\bnalayak\b/, tokenType: TokenTypes.BOOLEAN_TYPE },

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
