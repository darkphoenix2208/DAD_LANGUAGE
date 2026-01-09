import Visitor from ".";
import { ASTNode } from "dad-lang-parser";
import InterpreterModule from "../../module/interpreterModule";

export default class TryCatchStatement implements Visitor {
    visitNode(node: ASTNode) {
        try {
            if (node.tryBlock) {
                node.tryBlock.every((statement: ASTNode) => {
                    InterpreterModule.getVisitor(statement.type).visitNode(statement);
                    return true;
                });
            }
        } catch (e) {
            if (node.catchBlock) {
                node.catchBlock.every((statement: ASTNode) => {
                    InterpreterModule.getVisitor(statement.type).visitNode(statement);
                    return true;
                });
            }
        }
    }
}
