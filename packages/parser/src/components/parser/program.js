"use strict";
exports.__esModule = true;
var constants_1 = require("../../constants/constants");
var Program = /** @class */ (function () {
    function Program(statementList) {
        this._statementList = statementList;
    }
    Program.prototype.getProgram = function () {
        return {
            type: constants_1.NodeType.Program,
            body: this._statementList.getInitialStatementList()
        };
    };
    return Program;
}());
exports["default"] = Program;
