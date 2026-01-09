"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var _1 = __importDefault(require("."));
var dadLangSpec_1 = require("../../../constants/dadLangSpec");
var constants_1 = require("../../../constants/constants");
var expression_1 = __importDefault(require("./expression"));
var HANDLED_LOOP_TOKEN_TYPES = [dadLangSpec_1.TokenTypes.WARNA_BHAI, dadLangSpec_1.TokenTypes.NAHI_TO_BHAI];
var IfStatement = /** @class */ (function (_super) {
    __extends(IfStatement, _super);
    function IfStatement(tokenExecutor) {
        return _super.call(this, tokenExecutor) || this;
    }
    IfStatement.prototype.getConditionalStatement = function (tokenType) {
        this._tokenExecutor.eatTokenAndForwardLookahead(tokenType);
        this._tokenExecutor.eatTokenAndForwardLookahead(dadLangSpec_1.TokenTypes.OPEN_PARENTHESIS_TYPE);
        var test = expression_1["default"].getExpressionImpl(constants_1.NodeType.AssignmentExpression).getExpression();
        this._tokenExecutor.eatTokenAndForwardLookahead(dadLangSpec_1.TokenTypes.CLOSED_PARENTHESIS_TYPE);
        if (this._tokenExecutor.getLookahead() == null) {
            throw new SyntaxError("Unexpected end of \"".concat(tokenType, "\" statement"));
        }
        var consequent = _1["default"].getStatementImpl(this._tokenExecutor.getLookahead()).getStatement();
        return {
            type: constants_1.NodeType.IfStatement,
            test: test,
            consequent: consequent
        };
    };
    IfStatement.prototype.getStatement = function () {
        var ifStatement = this.getConditionalStatement(dadLangSpec_1.TokenTypes.AGAR_BHAI);
        var alternates = [];
        // Loop until we keep getting "nahi to bhai" or "warna bhai"
        // Break as soon as we get the first "warna bhai" instance
        for (var lookahead = this._tokenExecutor.getLookahead(); lookahead !== null && HANDLED_LOOP_TOKEN_TYPES.includes(lookahead.type); lookahead = this._tokenExecutor.getLookahead()) {
            if (lookahead.type === dadLangSpec_1.TokenTypes.WARNA_BHAI) {
                alternates.push(this._tokenExecutor.eatTokenAndForwardLookahead(lookahead.type) && _1["default"].getStatementImpl(this._tokenExecutor.getLookahead()).getStatement());
                break;
            }
            else if (lookahead.type === dadLangSpec_1.TokenTypes.NAHI_TO_BHAI) {
                alternates.push(this.getConditionalStatement(dadLangSpec_1.TokenTypes.NAHI_TO_BHAI));
            }
        }
        return __assign(__assign({}, ifStatement), { alternates: alternates });
    };
    return IfStatement;
}(_1["default"]));
exports["default"] = IfStatement;
