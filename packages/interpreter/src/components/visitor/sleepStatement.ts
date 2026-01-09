import Visitor from ".";
import { ASTNode } from "dad-lang-parser";
import InterpreterModule from "../../module/interpreterModule";
import chalk from "chalk";

export default class SleepStatement implements Visitor {
    visitNode(node: ASTNode) {
        // 10% chance to ignore sleep
        if (Math.random() < 0.1) {
            console.log(chalk.yellow("Bahut ho gaya, uth abhi! (Sleep ignored)"));
            return;
        }

        if (!node.duration) {
            throw new Error("Duration bahana chahiye!");
        }

        const duration = InterpreterModule.getVisitor(
            node.duration.type
        ).visitNode(node.duration) as number;

        const start = Date.now();
        while (Date.now() - start < duration) {
            // Busy wait to pause execution
        }
    }
}
