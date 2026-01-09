"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dadLangSpec_1 = require("../../../../../constants/dadLangSpec");
var unsupportedTypeException_1 = __importDefault(require("../../../../../exceptions/unsupportedTypeException"));
var dadLangModule_1 = __importDefault(require("../../../../../module/dadLangModule"));
var Literal = /** @class */ (function () {
    function Literal(tokenExecutor) {
        this._tokenExecutor = tokenExecutor;
    }
    Literal.getLiteralImpl = function (tokenType) {
        switch (tokenType) {
            case dadLangSpec_1.TokenTypes.NUMBER_TYPE:
                return dadLangModule_1["default"].getNumericLiteral();
            case dadLangSpec_1.TokenTypes.BOOLEAN_TYPE:
                return dadLangModule_1["default"].getBooleanLiteral();
            case dadLangSpec_1.TokenTypes.STRING_TYPE:
                return dadLangModule_1["default"].getStringLiteral();
            case dadLangSpec_1.TokenTypes.NALLA_TYPE:
                return dadLangModule_1["default"].getNullLiteral();
            default:
                throw new unsupportedTypeException_1["default"]("Token type not supproted for literal: ".concat(tokenType));
        }
    };
    return Literal;
}());
exports["default"] = Literal;
