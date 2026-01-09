import Statement from ".";
import { TokenTypes } from "../../../constants/dadLangSpec";
import { NodeType } from "../../../constants/constants";
import { ASTNode } from "../types/nodeTypes";
import StatementList from "../statementList";
import TokenExecutor from "../tokenExecutor";

export default class TryCatchStatement extends Statement {
    private _statementList: StatementList;

    constructor(tokenExecutor: TokenExecutor, statementList: StatementList) {
        super(tokenExecutor);
        this._statementList = statementList;
    }

    getStatement(): ASTNode {
        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.TRY);

        this._tokenExecutor.eatTokenAndForwardLookahead(
            TokenTypes.OPEN_CURLY_BRACE_TYPE
        );

        const tryBlock = this._statementList.getStatementList(
            TokenTypes.CLOSED_CURLY_BRACE_TYPE
        );

        this._tokenExecutor.eatTokenAndForwardLookahead(
            TokenTypes.CLOSED_CURLY_BRACE_TYPE
        );

        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.CATCH);

        this._tokenExecutor.eatTokenAndForwardLookahead(
            TokenTypes.OPEN_CURLY_BRACE_TYPE
        );

        const catchBlock = this._statementList.getStatementList(
            TokenTypes.CLOSED_CURLY_BRACE_TYPE
        );

        this._tokenExecutor.eatTokenAndForwardLookahead(
            TokenTypes.CLOSED_CURLY_BRACE_TYPE
        );

        return {
            type: NodeType.TryCatchStatement,
            tryBlock,
            catchBlock,
        };
    }
}
