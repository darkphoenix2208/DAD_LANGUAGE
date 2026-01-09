import Visitor from ".";
import { ASTNode } from "dad-lang-parser";
export default class NewExpression implements Visitor {
    visitNode(node: ASTNode): import("../runtime/dadRuntime").DadInstance;
}
//# sourceMappingURL=newExpression.d.ts.map