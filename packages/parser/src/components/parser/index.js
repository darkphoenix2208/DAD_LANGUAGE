"use strict";
exports.__esModule = true;
exports.Parser = void 0;
var Parser = /** @class */ (function () {
    function Parser(tokenizer, program, tokenExecutor) {
        this._tokenizer = tokenizer;
        this._program = program;
        this._tokenExecutor = tokenExecutor;
        this._stringToTokenize = "";
    }
    Parser.prototype.parse = function (stringToTokenize) {
        this._stringToTokenize = stringToTokenize;
        this._tokenizer.initTokenizer(this._stringToTokenize);
        // initliaze look ahead
        this._tokenExecutor.setLookahead(this._tokenizer.getNextToken());
        return this._program.getProgram();
    };
    return Parser;
}());
exports.Parser = Parser;
