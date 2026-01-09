import Visitor from ".";
import { ASTNode } from "dad-lang-parser";
import InterpreterModule from "../../module/interpreterModule";
import { DadClass } from "../runtime/dadRuntime";

export default class ClassDeclaration implements Visitor {
    visitNode(node: ASTNode) {
        const className = node.id!.name!;
        const superClassNode = node.superClass;
        let superClass: DadClass | null = null;

        if (superClassNode && superClassNode.name) {
            // Resolve super class
            superClass = InterpreterModule.getCurrentScope().get(superClassNode.name) as DadClass;
        }

        const methods = new Map<string, ASTNode>();
        if (node.body && (node.body as any).body) { // ClassBody
            const classBody = (node.body as any).body;
            const bodyList = Array.isArray(classBody) ? classBody : [classBody];
            bodyList.forEach((method: ASTNode) => {
                if (method.key && method.key.name) {
                    methods.set(method.key.name, method);
                }
            });
        }

        const klass = new DadClass(className, methods, superClass);
        InterpreterModule.getCurrentScope().declare(className, klass, true);
    }
}
