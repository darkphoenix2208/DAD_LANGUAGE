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
var ArrayExpression = /** @class */ (function (_super) {
    __extends(ArrayExpression, _super);
    function ArrayExpression() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArrayExpression.prototype.getExpression = function () {
        var _a, _b;
        this._tokenExecutor.eatTokenAndForwardLookahead(dadLangSpec_1.TokenTypes.OPEN_SQUARE_BRACKET);
        var elements = [];
        if (((_a = this._tokenExecutor.getLookahead()) === null || _a === void 0 ? void 0 : _a.type) !== dadLangSpec_1.TokenTypes.CLOSED_SQUARE_BRACKET) {
            do {
                elements.push(_1["default"].getExpressionImpl(constants_1.NodeType.AssignmentExpression).getExpression());
            } while (((_b = this._tokenExecutor.getLookahead()) === null || _b === void 0 ? void 0 : _b.type) === dadLangSpec_1.TokenTypes.COMMA_TYPE &&
                this._tokenExecutor.eatTokenAndForwardLookahead(dadLangSpec_1.TokenTypes.COMMA_TYPE));
        }
        this._tokenExecutor.eatTokenAndForwardLookahead(dadLangSpec_1.TokenTypes.CLOSED_SQUARE_BRACKET);
        return {
            type: constants_1.NodeType.ArrayExpression,
            elements: elements
        };
    };
    return ArrayExpression;
}(_1["default"]));
exports["default"] = ArrayExpression;
