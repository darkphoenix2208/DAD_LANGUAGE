import Prism, { languages } from "prismjs";


export const dadLangSyntax = languages.extend("clike", {
  comment: [
    {
      pattern: /(^|[^\\:])\/\/.*/,
      lookbehind: true,
      greedy: true,
    },
    {
      pattern: /\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/,
      lookbehind: true,
      greedy: true,
    },
  ],
  string: {
    pattern: /(["'])((?:\\\1|(?:(?!\1)).)*)(\1)/,
    greedy: true,
  },
  keyword: /\b(?:hi bhai|bye bhai|bol bhai|bhai ye hai|nalla|agar bhai|nahi to bhai|warna bhai|jab tak bhai|bas kar bhai|agla dekh bhai|chugli:|^chugli:|khandaan|ka_khoon_hai|avtaar|khud|sanskar|rishtedaar_aaye|muh_dikhai|bache_kuche|dheere_dheere|ruko_zara)\b/,
  boolean: /\b(?:sahi|galat)\b/,
  number: /(?:(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
  operator:
    /[*/%^!=]=?|~|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
});

Prism.languages.dadLang = dadLangSyntax;
