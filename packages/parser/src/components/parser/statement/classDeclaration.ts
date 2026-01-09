import Statement from ".";
import { TokenTypes } from "../../../constants/dadLangSpec";
import { NodeType } from "../../../constants/constants";
import { ASTNode } from "../types/nodeTypes";
import Expression from "./expression";
import DadLangModule from "../../../module/dadLangModule";

export default class ClassDeclaration extends Statement {
    getStatement(): ASTNode {
        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.CLASS);
        const id = Expression.getExpressionImpl(NodeType.IdentifierExpression).getExpression();

        let superClass = null;
        if (this._tokenExecutor.getLookahead()?.type === TokenTypes.EXTENDS) {
            this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.EXTENDS);
            superClass = Expression.getExpressionImpl(NodeType.IdentifierExpression).getExpression();
        }

        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.OPEN_CURLY_BRACE_TYPE);

        const body: ASTNode[] = [];
        while (this._tokenExecutor.getLookahead()?.type !== TokenTypes.CLOSED_CURLY_BRACE_TYPE) {
            // Methods: Identifier(params) { body }

            let methodName;
            let kind = "method";
            if (this._tokenExecutor.getLookahead()?.type === TokenTypes.CONSTRUCTOR) {
                this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.CONSTRUCTOR);
                methodName = { type: NodeType.IdentifierExpression, name: "constructor" };
                kind = "constructor";
            } else {
                methodName = Expression.getExpressionImpl(NodeType.IdentifierExpression).getExpression();
            }

            this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.OPEN_PARENTHESIS_TYPE);
            const params = this._getParamsList();
            this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.CLOSED_PARENTHESIS_TYPE);

            const block = DadLangModule.getBlockStatement().getStatement();

            body.push({
                type: "MethodDefinition",
                key: methodName,
                value: {
                    type: "FunctionExpression",
                    params,
                    body: block
                },
                kind
            });
        }

        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.CLOSED_CURLY_BRACE_TYPE);

        return {
            type: NodeType.ClassDeclaration,
            id,
            superClass,
            body: {
                type: "ClassBody",
                body
            }
        };
    }

    private _getParamsList() {
        const params: ASTNode[] = [];
        if (this._tokenExecutor.getLookahead()?.type !== TokenTypes.CLOSED_PARENTHESIS_TYPE) {
            do {
                params.push(Expression.getExpressionImpl(NodeType.IdentifierExpression).getExpression());
            } while (
                this._tokenExecutor.getLookahead()?.type === TokenTypes.COMMA_TYPE &&
                this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.COMMA_TYPE)
            );
        }
        return params;
    }
}
