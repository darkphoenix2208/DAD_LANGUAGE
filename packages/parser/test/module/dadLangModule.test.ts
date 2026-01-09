import { Parser } from "../../src/components/parser";
import Program from "../../src/components/parser/program";
import TokenExecutor from "../../src/components/parser/tokenExecutor";
import Tokenizer from "../../src/components/tokenizer";
import DadLangModule from "../../src/module/dadLangModule";

test("DadLangModule should return instances of internal modules", () => {
  expect(DadLangModule.getTokenizer()).toBeInstanceOf(Tokenizer);
  expect(DadLangModule.getTokenExecutor()).toBeInstanceOf(TokenExecutor);
  expect(DadLangModule.getProgram()).toBeInstanceOf(Program);
  expect(DadLangModule.getParser()).toBeInstanceOf(Parser);
});
