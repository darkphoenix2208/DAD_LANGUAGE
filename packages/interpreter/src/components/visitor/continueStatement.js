"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var runtimeException_1 = __importDefault(require("../../exceptions/runtimeException"));
var interpreterModule_1 = __importDefault(require("../../module/interpreterModule"));
var ContinueStatement = /** @class */ (function () {
    function ContinueStatement() {
    }
    ContinueStatement.prototype.visitNode = function () {
        if (interpreterModule_1["default"].getCurrentScope().isLoop()) {
            interpreterModule_1["default"].getCurrentScope().setContinueStatement(true);
        }
        else {
            throw new runtimeException_1["default"]("Kha \"agla dekh bhai\"?? Loop kidhar hai?");
        }
    };
    return ContinueStatement;
}());
exports["default"] = ContinueStatement;
