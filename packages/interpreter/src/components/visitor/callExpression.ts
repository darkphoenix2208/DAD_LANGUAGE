import Visitor from ".";
import { ASTNode } from "dad-lang-parser";
import InterpreterModule from "../../module/interpreterModule";
import RuntimeException from "../../exceptions/runtimeException";

export default class CallExpression implements Visitor {
    visitNode(node: ASTNode) {
        const callee = InterpreterModule.getVisitor(node.callee!.type).visitNode(node.callee!);

        const args = node.arguments ? node.arguments.map(a => InterpreterModule.getVisitor(a.type).visitNode(a)) : [];

        if (typeof callee !== "function") {
            throw new RuntimeException("Ye kya call kar raha hai? Function nahi hai ye! (Type Error)");
        }

        return callee(...args);
    }
}
