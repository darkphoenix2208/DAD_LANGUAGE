"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dadLangSpec_1 = require("../../../constants/dadLangSpec");
var dadLangModule_1 = __importDefault(require("../../../module/dadLangModule"));
var Statement = /** @class */ (function () {
    function Statement(tokenExecutor) {
        this._tokenExecutor = tokenExecutor;
    }
    Statement.getStatementImpl = function (lookahead) {
        switch (lookahead.type) {
            case dadLangSpec_1.TokenTypes.BOL_BHAI_TYPE:
                return dadLangModule_1["default"].getPrintStatement();
            case dadLangSpec_1.TokenTypes.SEMI_COLON_TYPE:
                return dadLangModule_1["default"].getEmptyStatement();
            case dadLangSpec_1.TokenTypes.OPEN_CURLY_BRACE_TYPE:
                return dadLangModule_1["default"].getBlockStatement();
            case dadLangSpec_1.TokenTypes.BHAI_YE_HAI_TYPE:
            case dadLangSpec_1.TokenTypes.PARAMPARA:
                return dadLangModule_1["default"].getVariableStatement();
            case dadLangSpec_1.TokenTypes.AGAR_BHAI:
                return dadLangModule_1["default"].getIfStatement();
            case dadLangSpec_1.TokenTypes.JAB_TAK_BHAI:
                return dadLangModule_1["default"].getWhileStatement();
            case dadLangSpec_1.TokenTypes.BAS_KAR_BHAI:
                return dadLangModule_1["default"].getBreakStatement();
            case dadLangSpec_1.TokenTypes.AGLA_DEKH_BHAI:
                return dadLangModule_1["default"].getContinueStatement();
            case dadLangSpec_1.TokenTypes.SLEEP:
                return dadLangModule_1["default"].getSleepStatement();
            case dadLangSpec_1.TokenTypes.TRY:
                return dadLangModule_1["default"].getTryCatchStatement();
            case dadLangSpec_1.TokenTypes.CLASS:
                return dadLangModule_1["default"].getClassDeclaration();
            case dadLangSpec_1.TokenTypes.SWITCH:
                return dadLangModule_1["default"].getSwitchStatement();
            default:
                return dadLangModule_1["default"].getExpressionStatement();
        }
    };
    return Statement;
}());
exports["default"] = Statement;
