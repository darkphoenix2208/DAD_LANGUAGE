import Visitor from ".";
import { ASTNode } from "dad-lang-parser";
export default class NullLiteral implements Visitor {
    visitNode(node: ASTNode): string | number | boolean | ASTNode | null | undefined;
}
//# sourceMappingURL=nullLiteral.d.ts.map