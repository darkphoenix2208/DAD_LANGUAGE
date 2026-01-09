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
var dadLangSpec_1 = require("../../../../constants/dadLangSpec");
var constants_1 = require("../../../../constants/constants");
var literals_1 = __importDefault(require("./literals"));
var PrimaryExpression = /** @class */ (function (_super) {
    __extends(PrimaryExpression, _super);
    function PrimaryExpression() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PrimaryExpression.prototype.getExpression = function () {
        var token = this._tokenExecutor.getLookahead();
        switch (token === null || token === void 0 ? void 0 : token.type) {
            case dadLangSpec_1.TokenTypes.OPEN_SQUARE_BRACKET:
                return _1["default"].getExpressionImpl(constants_1.NodeType.ArrayExpression).getExpression();
            case dadLangSpec_1.TokenTypes.OPEN_PARENTHESIS_TYPE:
                return _1["default"].getExpressionImpl(constants_1.NodeType.ParanthesizedExpression).getExpression();
            case dadLangSpec_1.TokenTypes.STRING_TYPE:
            case dadLangSpec_1.TokenTypes.NUMBER_TYPE:
            case dadLangSpec_1.TokenTypes.BOOLEAN_TYPE:
                return literals_1["default"].getLiteralImpl(token.type).getLiteral();
            case dadLangSpec_1.TokenTypes.NALLA_TYPE:
                return this._getNallaLiteral();
            case dadLangSpec_1.TokenTypes.NEW:
                return _1["default"].getExpressionImpl(constants_1.NodeType.NewExpression).getExpression();
            case dadLangSpec_1.TokenTypes.THIS:
                return _1["default"].getExpressionImpl(constants_1.NodeType.ThisExpression).getExpression();
            default:
                return this._getLeftHandSideExpression();
        }
    };
    PrimaryExpression.prototype._getNallaLiteral = function () {
        this._tokenExecutor.eatTokenAndForwardLookahead(dadLangSpec_1.TokenTypes.NALLA_TYPE);
        return literals_1["default"].getLiteralImpl(dadLangSpec_1.TokenTypes.NALLA_TYPE).getLiteral();
    };
    PrimaryExpression.prototype._getLeftHandSideExpression = function () {
        return _1["default"].getExpressionImpl(constants_1.NodeType.IdentifierExpression).getExpression();
    };
    return PrimaryExpression;
}(_1["default"]));
exports["default"] = PrimaryExpression;
