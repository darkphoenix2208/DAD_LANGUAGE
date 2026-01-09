import Statement from "../../src/components/parser/statement";
import BlockStatement from "../../src/components/parser/statement/blockStatement";
import { TokenTypes } from "../../src/constants/dadLangSpec";
import DadLangModule from "../../src/module/dadLangModule";

jest.mock("../../src/module/dadLangModule");

const blockStatementMock = new (<any>(
  BlockStatement
))() as jest.Mocked<BlockStatement>;

afterEach(() => {
  jest.clearAllMocks();
});

test("test getStatementImpl of statement class with should success", () => {
  const lookahead = {
    type: TokenTypes.OPEN_CURLY_BRACE_TYPE,
    value: "{",
  };

  DadLangModule.getBlockStatement = jest
    .fn()
    .mockReturnValue(blockStatementMock);

  expect(Statement.getStatementImpl(lookahead)).toStrictEqual(
    blockStatementMock
  );

  expect(DadLangModule.getBlockStatement).toHaveBeenCalledTimes(1);
});
