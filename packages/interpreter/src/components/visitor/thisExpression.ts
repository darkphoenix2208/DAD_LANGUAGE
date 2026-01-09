import Visitor from ".";
import { ASTNode } from "dad-lang-parser";
import InterpreterModule from "../../module/interpreterModule";

export default class ThisExpression implements Visitor {
    visitNode(node: ASTNode) {
        return InterpreterModule.getCurrentScope().get("khud");
    }
}
