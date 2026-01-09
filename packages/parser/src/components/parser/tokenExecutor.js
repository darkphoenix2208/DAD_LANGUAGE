"use strict";
exports.__esModule = true;
var dadLangSpec_1 = require("../../constants/dadLangSpec");
var TokenExecutor = /** @class */ (function () {
    function TokenExecutor(tokenizer) {
        this._lookahead = null;
        this._tokenizer = tokenizer;
    }
    TokenExecutor.prototype.eatTokenAndForwardLookahead = function (tokenType) {
        var token = this._lookahead;
        if (token == null) {
            throw new SyntaxError("Unexpected end of input, expected : \"".concat(tokenType, "\""));
        }
        if (token.type !== tokenType) {
            throw new SyntaxError("kya kar rha hai tu??...Unexpected token: \"".concat(token.value, "\", expected : \"").concat(tokenType, "\""));
        }
        this.setLookahead(this._tokenizer.getNextToken());
        return token;
    };
    TokenExecutor.prototype.eatOptionalSemiColonToken = function () {
        var _a;
        if (((_a = this.getLookahead()) === null || _a === void 0 ? void 0 : _a.type) == dadLangSpec_1.TokenTypes.SEMI_COLON_TYPE)
            this.eatTokenAndForwardLookahead(dadLangSpec_1.TokenTypes.SEMI_COLON_TYPE);
    };
    TokenExecutor.prototype.getLookahead = function () {
        return this._lookahead;
    };
    TokenExecutor.prototype.setLookahead = function (lookahead) {
        this._lookahead = lookahead;
    };
    return TokenExecutor;
}());
exports["default"] = TokenExecutor;
