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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var _1 = __importDefault(require("."));
var dadLangSpec_1 = require("../../../constants/dadLangSpec");
var constants_1 = require("../../../constants/constants");
var expression_1 = __importDefault(require("./expression"));
var PrintStatement = /** @class */ (function (_super) {
    __extends(PrintStatement, _super);
    function PrintStatement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PrintStatement.prototype.getStatement = function () {
        this._tokenExecutor.eatTokenAndForwardLookahead(dadLangSpec_1.TokenTypes.BOL_BHAI_TYPE);
        var expressions = this._getExpressionList();
        this._tokenExecutor.eatTokenAndForwardLookahead(dadLangSpec_1.TokenTypes.SEMI_COLON_TYPE);
        return {
            type: constants_1.NodeType.PrintStatement,
            expressions: expressions
        };
    };
    PrintStatement.prototype._getExpressionList = function () {
        var _a;
        var expressions = [];
        do {
            expressions.push(this._getExpression());
        } while (((_a = this._tokenExecutor.getLookahead()) === null || _a === void 0 ? void 0 : _a.type) === dadLangSpec_1.TokenTypes.COMMA_TYPE &&
            this._tokenExecutor.eatTokenAndForwardLookahead(dadLangSpec_1.TokenTypes.COMMA_TYPE));
        return expressions;
    };
    PrintStatement.prototype._getExpression = function () {
        return expression_1["default"].getExpressionImpl(constants_1.NodeType.AssignmentExpression).getExpression();
    };
    return PrintStatement;
}(_1["default"]));
exports["default"] = PrintStatement;
