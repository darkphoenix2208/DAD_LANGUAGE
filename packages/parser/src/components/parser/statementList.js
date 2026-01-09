"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dadLangSpec_1 = require("../../constants/dadLangSpec");
var dadLangModule_1 = __importDefault(require("../../module/dadLangModule"));
var statement_1 = __importDefault(require("./statement"));
var StatementList = /** @class */ (function () {
    function StatementList(tokenExecutor) {
        this._tokenExecutor = tokenExecutor;
    }
    StatementList.prototype.getInitialStatementList = function () {
        for (var lookahead = this._tokenExecutor.getLookahead(); lookahead !== null && lookahead.type !== dadLangSpec_1.TokenTypes.HI_BHAI_TYPE; lookahead = this._tokenExecutor.getLookahead()) {
            this._tokenExecutor.eatTokenAndForwardLookahead(lookahead.type);
        }
        return dadLangModule_1["default"].getInitStatement().getStatement();
    };
    StatementList.prototype.getStatementList = function (stopLookaheadType) {
        var statementlist = [];
        for (var lookahead = this._tokenExecutor.getLookahead(); lookahead !== null && lookahead.type !== stopLookaheadType; lookahead = this._tokenExecutor.getLookahead()) {
            // Statement.getStatementImpl(lookahead) -> this will get the Statement
            // implementation according to look ahead
            // and we will get the statement by calling getStatement() function
            statementlist.push(statement_1["default"].getStatementImpl(lookahead).getStatement());
        }
        return statementlist;
    };
    return StatementList;
}());
exports["default"] = StatementList;
