"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var invalidStateException_1 = __importDefault(require("../../exceptions/invalidStateException"));
var TokenizerImpl = /** @class */ (function () {
    function TokenizerImpl(spec) {
        this._string = undefined;
        this._spec = spec;
        this._cursor = 0;
    }
    TokenizerImpl.prototype.initTokenizer = function (stringToTokenize) {
        this._string = stringToTokenize;
        this._cursor = 0;
    };
    TokenizerImpl.prototype.isEOF = function () {
        if (!this._string)
            return true;
        return this._cursor === this._string.length;
    };
    TokenizerImpl.prototype.hasMoreTokens = function () {
        if (!this._string)
            return false;
        return this._cursor < this._string.length;
    };
    TokenizerImpl.prototype.getNextToken = function () {
        if (!this._string)
            throw new invalidStateException_1["default"]("Tokenizer is not initialized with string. " +
                "Please call initTokenizer method first.");
        if (!this.hasMoreTokens()) {
            return null;
        }
        var string = this._string.slice(this._cursor);
        for (var _i = 0, _a = this._spec; _i < _a.length; _i++) {
            var _b = _a[_i], regex = _b.regex, tokenType = _b.tokenType;
            var tokenValue = this._matched(regex, string);
            if (tokenValue === null) {
                continue;
            }
            if (tokenType === null) {
                return this.getNextToken();
            }
            return {
                type: tokenType,
                value: tokenValue
            };
        }
        throw new SyntaxError("Kya kar rha hai tu??...Unexpected token: \"".concat(string[0], "\""));
    };
    TokenizerImpl.prototype._matched = function (regex, string) {
        var matched = regex.exec(string);
        if (matched === null) {
            return null;
        }
        this._cursor += matched[0].length;
        return matched[0];
    };
    return TokenizerImpl;
}());
exports["default"] = TokenizerImpl;
