import DadLangModule from "./module/dadLangModule";

export { NodeType } from "./constants/constants";
export type { ASTNode } from "./components/parser/types/nodeTypes";
export default DadLangModule.getParser();
