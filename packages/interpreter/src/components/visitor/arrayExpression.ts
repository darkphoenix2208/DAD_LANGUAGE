import Visitor from ".";
import { ASTNode } from "dad-lang-parser";
import InterpreterModule from "../../module/interpreterModule";

export default class ArrayExpression implements Visitor {
    visitNode(node: ASTNode) {
        if (!node.elements) return [];
        return node.elements.map(element =>
            InterpreterModule.getVisitor(element.type).visitNode(element)
        );
    }
}
