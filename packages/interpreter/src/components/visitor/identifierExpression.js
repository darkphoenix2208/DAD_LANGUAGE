"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var invalidStateException_1 = __importDefault(require("../../exceptions/invalidStateException"));
var interpreterModule_1 = __importDefault(require("../../module/interpreterModule"));
var IdentifierExpression = /** @class */ (function () {
    function IdentifierExpression() {
    }
    IdentifierExpression.prototype.visitNode = function (node) {
        if (!node.name) {
            throw new invalidStateException_1["default"]("Invalid node name for: ".concat(node.type));
        }
        var value = interpreterModule_1["default"].getCurrentScope().get(node.name);
        if (value === null)
            value = "nalla";
        else if (value === true)
            value = "sahi";
        else if (value === false)
            value = "galat";
        return value;
    };
    return IdentifierExpression;
}());
exports["default"] = IdentifierExpression;
