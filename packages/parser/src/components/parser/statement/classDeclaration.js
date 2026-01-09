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
var dadLangModule_1 = __importDefault(require("../../../module/dadLangModule"));
var ClassDeclaration = /** @class */ (function (_super) {
    __extends(ClassDeclaration, _super);
    function ClassDeclaration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClassDeclaration.prototype.getStatement = function () {
        var _a, _b, _c;
        this._tokenExecutor.eatTokenAndForwardLookahead(dadLangSpec_1.TokenTypes.CLASS);
        var id = expression_1["default"].getExpressionImpl(constants_1.NodeType.IdentifierExpression).getExpression();
        var superClass = null;
        if (((_a = this._tokenExecutor.getLookahead()) === null || _a === void 0 ? void 0 : _a.type) === dadLangSpec_1.TokenTypes.EXTENDS) {
            this._tokenExecutor.eatTokenAndForwardLookahead(dadLangSpec_1.TokenTypes.EXTENDS);
            superClass = expression_1["default"].getExpressionImpl(constants_1.NodeType.IdentifierExpression).getExpression();
        }
        this._tokenExecutor.eatTokenAndForwardLookahead(dadLangSpec_1.TokenTypes.OPEN_CURLY_BRACE_TYPE);
        var body = [];
        while (((_b = this._tokenExecutor.getLookahead()) === null || _b === void 0 ? void 0 : _b.type) !== dadLangSpec_1.TokenTypes.CLOSED_CURLY_BRACE_TYPE) {
            // Methods: Identifier(params) { body }
            var methodName = void 0;
            var kind = "method";
            if (((_c = this._tokenExecutor.getLookahead()) === null || _c === void 0 ? void 0 : _c.type) === dadLangSpec_1.TokenTypes.CONSTRUCTOR) {
                this._tokenExecutor.eatTokenAndForwardLookahead(dadLangSpec_1.TokenTypes.CONSTRUCTOR);
                methodName = { type: constants_1.NodeType.IdentifierExpression, name: "constructor" };
                kind = "constructor";
            }
            else {
                methodName = expression_1["default"].getExpressionImpl(constants_1.NodeType.IdentifierExpression).getExpression();
            }
            this._tokenExecutor.eatTokenAndForwardLookahead(dadLangSpec_1.TokenTypes.OPEN_PARENTHESIS_TYPE);
            var params = this._getParamsList();
            this._tokenExecutor.eatTokenAndForwardLookahead(dadLangSpec_1.TokenTypes.CLOSED_PARENTHESIS_TYPE);
            var block = dadLangModule_1["default"].getBlockStatement().getStatement();
            body.push({
                type: "MethodDefinition",
                key: methodName,
                value: {
                    type: "FunctionExpression",
                    params: params,
                    body: block
                },
                kind: kind
            });
        }
        this._tokenExecutor.eatTokenAndForwardLookahead(dadLangSpec_1.TokenTypes.CLOSED_CURLY_BRACE_TYPE);
        return {
            type: constants_1.NodeType.ClassDeclaration,
            id: id,
            superClass: superClass,
            body: {
                type: "ClassBody",
                body: body
            }
        };
    };
    ClassDeclaration.prototype._getParamsList = function () {
        var _a, _b;
        var params = [];
        if (((_a = this._tokenExecutor.getLookahead()) === null || _a === void 0 ? void 0 : _a.type) !== dadLangSpec_1.TokenTypes.CLOSED_PARENTHESIS_TYPE) {
            do {
                params.push(expression_1["default"].getExpressionImpl(constants_1.NodeType.IdentifierExpression).getExpression());
            } while (((_b = this._tokenExecutor.getLookahead()) === null || _b === void 0 ? void 0 : _b.type) === dadLangSpec_1.TokenTypes.COMMA_TYPE &&
                this._tokenExecutor.eatTokenAndForwardLookahead(dadLangSpec_1.TokenTypes.COMMA_TYPE));
        }
        return params;
    };
    return ClassDeclaration;
}(_1["default"]));
exports["default"] = ClassDeclaration;
