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
var MemberExpression = /** @class */ (function (_super) {
    __extends(MemberExpression, _super);
    function MemberExpression() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MemberExpression.prototype.getExpression = function () {
        var _a, _b, _c, _d, _e, _f, _g;
        var object = _1["default"].getExpressionImpl(constants_1.NodeType.PrimaryExpression).getExpression();
        while (((_a = this._tokenExecutor.getLookahead()) === null || _a === void 0 ? void 0 : _a.type) ===
            dadLangSpec_1.TokenTypes.OPEN_SQUARE_BRACKET ||
            ((_b = this._tokenExecutor.getLookahead()) === null || _b === void 0 ? void 0 : _b.type) === dadLangSpec_1.TokenTypes.DOT ||
            ((_c = this._tokenExecutor.getLookahead()) === null || _c === void 0 ? void 0 : _c.type) === dadLangSpec_1.TokenTypes.OPEN_PARENTHESIS_TYPE) {
            if (((_d = this._tokenExecutor.getLookahead()) === null || _d === void 0 ? void 0 : _d.type) ===
                dadLangSpec_1.TokenTypes.OPEN_SQUARE_BRACKET) {
                this._tokenExecutor.eatTokenAndForwardLookahead(dadLangSpec_1.TokenTypes.OPEN_SQUARE_BRACKET);
                var property = _1["default"].getExpressionImpl(constants_1.NodeType.AssignmentExpression).getExpression();
                this._tokenExecutor.eatTokenAndForwardLookahead(dadLangSpec_1.TokenTypes.CLOSED_SQUARE_BRACKET);
                object = {
                    type: constants_1.NodeType.MemberExpression,
                    object: object,
                    property: property,
                    computed: true
                };
            }
            else if (((_e = this._tokenExecutor.getLookahead()) === null || _e === void 0 ? void 0 : _e.type) === dadLangSpec_1.TokenTypes.DOT) {
                this._tokenExecutor.eatTokenAndForwardLookahead(dadLangSpec_1.TokenTypes.DOT);
                var property = _1["default"].getExpressionImpl(constants_1.NodeType.IdentifierExpression).getExpression();
                object = {
                    type: constants_1.NodeType.MemberExpression,
                    object: object,
                    property: property,
                    computed: false
                };
            }
            else {
                // Call Expression
                this._tokenExecutor.eatTokenAndForwardLookahead(dadLangSpec_1.TokenTypes.OPEN_PARENTHESIS_TYPE);
                var args = [];
                if (((_f = this._tokenExecutor.getLookahead()) === null || _f === void 0 ? void 0 : _f.type) !== dadLangSpec_1.TokenTypes.CLOSED_PARENTHESIS_TYPE) {
                    do {
                        args.push(_1["default"].getExpressionImpl(constants_1.NodeType.AssignmentExpression).getExpression());
                    } while (((_g = this._tokenExecutor.getLookahead()) === null || _g === void 0 ? void 0 : _g.type) === dadLangSpec_1.TokenTypes.COMMA_TYPE &&
                        this._tokenExecutor.eatTokenAndForwardLookahead(dadLangSpec_1.TokenTypes.COMMA_TYPE));
                }
                this._tokenExecutor.eatTokenAndForwardLookahead(dadLangSpec_1.TokenTypes.CLOSED_PARENTHESIS_TYPE);
                object = {
                    type: constants_1.NodeType.CallExpression,
                    callee: object,
                    arguments: args
                };
            }
        }
        return object;
    };
    return MemberExpression;
}(_1["default"]));
exports["default"] = MemberExpression;
