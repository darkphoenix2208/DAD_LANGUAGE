import Visitor from ".";
import { ASTNode } from "dad-lang-parser";
export default class BooleanLiteral implements Visitor {
    visitNode(node: ASTNode): string | number | boolean | ASTNode | null | undefined;
}
//# sourceMappingURL=booleanLiteral.d.ts.map