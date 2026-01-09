import Expression from ".";

import { TokenTypes } from "../../../../constants/dadLangSpec";
import { NodeType } from "../../../../constants/constants";
import { ASTNode } from "../../types/nodeTypes";

export default class MultiplicativeExpression extends Expression {
  getExpression(): ASTNode {
    return this.getBinaryExpression(
      NodeType.MemberExpression,
      TokenTypes.MULTIPLICATIVE_OPERATOR_TYPE
    );
  }
}
