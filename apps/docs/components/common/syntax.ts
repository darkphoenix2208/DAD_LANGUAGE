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
  keyword: /\b(?:idhar aao|jao padhai karo|jawab de|ye sambhal|nalla|agar sharam hai|nahi to bhai|warna belt|jab tak main na bolu|bas kar bhai|agla dekh bhai|chugli:|^chugli:|khandaan|ka_khoon_hai|avtaar|khud|sanskar|rishtedaar_aaye|muh_dikhai|bache_kuche|dheere_dheere|ruko_zara|parampara)\b/,
  boolean: /\b(?:sahi|galat)\b/,
  number: /(?:(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
  operator:
    /[*/%^!=]=?|~|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
});

Prism.languages.dadLang = dadLangSyntax;
