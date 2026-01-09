import Visitor from ".";
import { ASTNode } from "dad-lang-parser";
import InterpreterModule from "../../module/interpreterModule";

export default class SwitchStatement implements Visitor {
    visitNode(node: ASTNode) {
        const discriminant = InterpreterModule.getVisitor(node.discriminant!.type).visitNode(node.discriminant!);

        let matched = false;

        // Evaluate cases
        // node.cases is array of SwitchCase
        for (const switchCase of node.cases || []) {
            if (!matched) {
                if (!switchCase.test) {
                    // Default case - matches if no previous case matched? 
                    // Standard switch behavior: default matches if no other case matched. 
                    // But here we are iterating in order. Default usually comes last.
                    matched = true;
                } else {
                    const testVal = InterpreterModule.getVisitor(switchCase.test.type).visitNode(switchCase.test);
                    if (testVal === discriminant) {
                        matched = true;
                    }
                }
            }

            if (matched) {
                // Execute consequent
                const consequent = (switchCase.consequent as ASTNode[]) || [];
                // It's a list of statements.
                // We need to execute them.
                // Check for break? Scope?
                // Usually switch blocks share scope, or have block scope.
                // DadLang parser put StatementList in consequent.

                // We need to handle 'break' (bas_ho_gaya).
                // If break is encountered, we stop execution of switch.
                // We can check InterpreterModule.getCurrentScope().isBreakStatement()

                for (const stmt of consequent) {
                    InterpreterModule.getVisitor(stmt.type).visitNode(stmt);
                    if (InterpreterModule.getCurrentScope().isBreakStatement()) {
                        InterpreterModule.getCurrentScope().setBreakStatement(false); // Consume break
                        return;
                    }
                    if (InterpreterModule.getCurrentScope().isContinueStatement()) {
                        // Continue usually doesn't apply to switch unless inside a loop.
                        // If inside loop, it should bubble up.
                        return;
                    }
                }
            }
        }
    }
}
