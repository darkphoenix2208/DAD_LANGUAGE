import Visitor from ".";
import { ASTNode } from "dad-lang-parser";
import InterpreterModule from "../../module/interpreterModule";
import { DadClass } from "../runtime/dadRuntime";
import RuntimeException from "../../exceptions/runtimeException";

export default class NewExpression implements Visitor {
    visitNode(node: ASTNode) {
        // 1. Evaluate callee to get the class
        // Note: node.callee is IdentifierExpression. Visitor for IdentifierExpression returns the value from scope.
        const klass = InterpreterModule.getVisitor(node.callee!.type).visitNode(node.callee!);

        if (!(klass instanceof DadClass)) {
            throw new RuntimeException("Ye avtaar nahi hai! (Not a class)");
        }

        // 2. Evaluate arguments
        const args = node.arguments ? node.arguments.map(arg => InterpreterModule.getVisitor(arg.type).visitNode(arg)) : [];

        // 3. Instantiate
        return klass.instantiate(args);
    }
}
