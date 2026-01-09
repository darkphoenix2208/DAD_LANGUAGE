import Visitor from ".";
import { ASTNode } from "dad-lang-parser";

export default class EmptyStatement implements Visitor {
  visitNode(_: ASTNode) {
    return;
  }
}
