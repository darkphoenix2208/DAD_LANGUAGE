import Visitor from ".";
import { ASTNode } from "dad-lang-parser";
export default class StringLiteral implements Visitor {
    visitNode(node: ASTNode): string | number | boolean | ASTNode | null | undefined;
}
//# sourceMappingURL=stringLiteral.d.ts.map