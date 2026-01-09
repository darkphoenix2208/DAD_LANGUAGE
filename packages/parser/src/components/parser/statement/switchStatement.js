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
var SwitchStatement = /** @class */ (function (_super) {
    __extends(SwitchStatement, _super);
    function SwitchStatement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SwitchStatement.prototype.getStatement = function () {
        var _a, _b, _c, _d, _e, _f, _g;
        this._tokenExecutor.eatTokenAndForwardLookahead(dadLangSpec_1.TokenTypes.SWITCH);
        this._tokenExecutor.eatTokenAndForwardLookahead(dadLangSpec_1.TokenTypes.OPEN_PARENTHESIS_TYPE);
        var discriminant = expression_1["default"].getExpressionImpl(constants_1.NodeType.AssignmentExpression).getExpression();
        this._tokenExecutor.eatTokenAndForwardLookahead(dadLangSpec_1.TokenTypes.CLOSED_PARENTHESIS_TYPE);
        this._tokenExecutor.eatTokenAndForwardLookahead(dadLangSpec_1.TokenTypes.OPEN_CURLY_BRACE_TYPE);
        var cases = [];
        while (((_a = this._tokenExecutor.getLookahead()) === null || _a === void 0 ? void 0 : _a.type) !== dadLangSpec_1.TokenTypes.CLOSED_CURLY_BRACE_TYPE) {
            if (((_b = this._tokenExecutor.getLookahead()) === null || _b === void 0 ? void 0 : _b.type) === dadLangSpec_1.TokenTypes.CASE) {
                this._tokenExecutor.eatTokenAndForwardLookahead(dadLangSpec_1.TokenTypes.CASE);
                var test_1 = expression_1["default"].getExpressionImpl(constants_1.NodeType.AssignmentExpression).getExpression();
                this._tokenExecutor.eatTokenAndForwardLookahead(dadLangSpec_1.TokenTypes.COLON_TYPE);
                var consequent = [];
                while (((_c = this._tokenExecutor.getLookahead()) === null || _c === void 0 ? void 0 : _c.type) !== dadLangSpec_1.TokenTypes.CASE &&
                    ((_d = this._tokenExecutor.getLookahead()) === null || _d === void 0 ? void 0 : _d.type) !== dadLangSpec_1.TokenTypes.DEFAULT &&
                    ((_e = this._tokenExecutor.getLookahead()) === null || _e === void 0 ? void 0 : _e.type) !== dadLangSpec_1.TokenTypes.CLOSED_CURLY_BRACE_TYPE) {
                    // Manually call Statement.getStatementImpl
                    var stmt = _1["default"].getStatementImpl(this._tokenExecutor.getLookahead()).getStatement();
                    consequent.push(stmt);
                }
                cases.push({
                    type: constants_1.NodeType.SwitchCase,
                    test: test_1,
                    consequent: consequent
                });
            }
            else if (((_f = this._tokenExecutor.getLookahead()) === null || _f === void 0 ? void 0 : _f.type) === dadLangSpec_1.TokenTypes.DEFAULT) {
                this._tokenExecutor.eatTokenAndForwardLookahead(dadLangSpec_1.TokenTypes.DEFAULT);
                this._tokenExecutor.eatTokenAndForwardLookahead(dadLangSpec_1.TokenTypes.COLON_TYPE);
                var consequent = [];
                while (((_g = this._tokenExecutor.getLookahead()) === null || _g === void 0 ? void 0 : _g.type) !== dadLangSpec_1.TokenTypes.CLOSED_CURLY_BRACE_TYPE) {
                    var stmt = _1["default"].getStatementImpl(this._tokenExecutor.getLookahead()).getStatement();
                    consequent.push(stmt);
                }
                cases.push({
                    type: constants_1.NodeType.SwitchCase,
                    test: null,
                    consequent: consequent
                });
            }
        }
        this._tokenExecutor.eatTokenAndForwardLookahead(dadLangSpec_1.TokenTypes.CLOSED_CURLY_BRACE_TYPE);
        return {
            type: constants_1.NodeType.SwitchStatement,
            discriminant: discriminant,
            cases: cases
        };
    };
    return SwitchStatement;
}(_1["default"]));
exports["default"] = SwitchStatement;
