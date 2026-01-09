"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var interpreterModule_1 = __importDefault(require("../../module/interpreterModule"));
var ThisExpression = /** @class */ (function () {
    function ThisExpression() {
    }
    ThisExpression.prototype.visitNode = function (node) {
        return interpreterModule_1["default"].getCurrentScope().get("khud");
    };
    return ThisExpression;
}());
exports["default"] = ThisExpression;
