import Visitor from ".";
import { ASTNode } from "dad-lang-parser";
export default class NumericLiteral implements Visitor {
    visitNode(node: ASTNode): string | number | boolean | ASTNode | null | undefined;
}
//# sourceMappingURL=numericLiteral.d.ts.map