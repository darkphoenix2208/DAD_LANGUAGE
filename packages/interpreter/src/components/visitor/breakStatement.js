"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var runtimeException_1 = __importDefault(require("../../exceptions/runtimeException"));
var interpreterModule_1 = __importDefault(require("../../module/interpreterModule"));
var BreakStatement = /** @class */ (function () {
    function BreakStatement() {
    }
    BreakStatement.prototype.visitNode = function () {
        if (interpreterModule_1["default"].getCurrentScope().isLoop()) {
            interpreterModule_1["default"].getCurrentScope().setBreakStatement(true);
        }
        else {
            throw new runtimeException_1["default"]("Kya \"bas kar bhai\"?? Loop kahan hai?");
        }
    };
    return BreakStatement;
}());
exports["default"] = BreakStatement;
