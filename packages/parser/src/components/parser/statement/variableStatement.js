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
var VariableStatement = /** @class */ (function (_super) {
    __extends(VariableStatement, _super);
    function VariableStatement(tokenExecutor, nullLiteral) {
        var _this = _super.call(this, tokenExecutor) || this;
        _this._nullLiteral = nullLiteral;
        return _this;
    }
    VariableStatement.prototype.getStatement = function () {
        var _a;
        var isParampara = ((_a = this._tokenExecutor.getLookahead()) === null || _a === void 0 ? void 0 : _a.type) === dadLangSpec_1.TokenTypes.PARAMPARA;
        if (isParampara) {
            this._tokenExecutor.eatTokenAndForwardLookahead(dadLangSpec_1.TokenTypes.PARAMPARA);
        }
        else {
            this._tokenExecutor.eatTokenAndForwardLookahead(dadLangSpec_1.TokenTypes.BHAI_YE_HAI_TYPE);
        }
        var declarations = this._getVariableDeclarationList(isParampara ? "const" : "var");
        this._tokenExecutor.eatTokenAndForwardLookahead(dadLangSpec_1.TokenTypes.SEMI_COLON_TYPE);
        return {
            type: constants_1.NodeType.VariableStatement,
            declarations: declarations
        };
    };
    VariableStatement.prototype._getVariableDeclarationList = function (kind) {
        var _a;
        var declarations = [];
        do {
            declarations.push(this._getVariableDeclaration(kind));
        } while (((_a = this._tokenExecutor.getLookahead()) === null || _a === void 0 ? void 0 : _a.type) === dadLangSpec_1.TokenTypes.COMMA_TYPE &&
            this._tokenExecutor.eatTokenAndForwardLookahead(dadLangSpec_1.TokenTypes.COMMA_TYPE));
        return declarations;
    };
    VariableStatement.prototype._getVariableDeclaration = function (kind) {
        var _a, _b;
        var id = expression_1["default"].getExpressionImpl(constants_1.NodeType.IdentifierExpression).getExpression();
        // Optional VariableInitializer
        var init = ((_a = this._tokenExecutor.getLookahead()) === null || _a === void 0 ? void 0 : _a.type) !== dadLangSpec_1.TokenTypes.SEMI_COLON_TYPE &&
            ((_b = this._tokenExecutor.getLookahead()) === null || _b === void 0 ? void 0 : _b.type) !== dadLangSpec_1.TokenTypes.COMMA_TYPE
            ? this._getVariableInitializer()
            : this._nullLiteral.getLiteral();
        return {
            type: constants_1.NodeType.VariableDeclaration,
            id: id,
            init: init,
            kind: kind
        };
    };
    VariableStatement.prototype._getVariableInitializer = function () {
        this._tokenExecutor.eatTokenAndForwardLookahead(dadLangSpec_1.TokenTypes.SIMPLE_ASSIGN_TYPE);
        return expression_1["default"].getExpressionImpl(constants_1.NodeType.AssignmentExpression).getExpression();
    };
    return VariableStatement;
}(_1["default"]));
exports["default"] = VariableStatement;
