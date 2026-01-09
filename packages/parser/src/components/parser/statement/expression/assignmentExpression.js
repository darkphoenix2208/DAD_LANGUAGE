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
var AssignmentExpression = /** @class */ (function (_super) {
    __extends(AssignmentExpression, _super);
    function AssignmentExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._logicalORExpression = _1["default"].getExpressionImpl(constants_1.NodeType.LogicalORExpression);
        return _this;
    }
    AssignmentExpression.prototype.getExpression = function () {
        var _a;
        var left = this._logicalORExpression.getExpression();
        // case if there is no AssignmentOperator but only normal additive expression => x + y
        if (!this._isAssignmentOperator((_a = this._tokenExecutor.getLookahead()) === null || _a === void 0 ? void 0 : _a.type)) {
            return left;
        }
        return {
            type: constants_1.NodeType.AssignmentExpression,
            operator: this._getAssignmentOperator().value,
            left: this._checkValidAssignmentTarget(left),
            right: this.getExpression()
        };
    };
    /**
     * Whether it is a assignmnet operator
     * @returns
     */
    AssignmentExpression.prototype._isAssignmentOperator = function (tokenType) {
        return (tokenType &&
            (tokenType === dadLangSpec_1.TokenTypes.SIMPLE_ASSIGN_TYPE ||
                tokenType === dadLangSpec_1.TokenTypes.COMPLEX_ASSIGN_TYPE));
    };
    AssignmentExpression.prototype._getAssignmentOperator = function () {
        var lookahead = this._tokenExecutor.getLookahead();
        if (!lookahead || lookahead.type === dadLangSpec_1.TokenTypes.SIMPLE_ASSIGN_TYPE)
            return this._tokenExecutor.eatTokenAndForwardLookahead(dadLangSpec_1.TokenTypes.SIMPLE_ASSIGN_TYPE);
        return this._tokenExecutor.eatTokenAndForwardLookahead(dadLangSpec_1.TokenTypes.COMPLEX_ASSIGN_TYPE);
    };
    /**
     * Extra check whether it's valid assignment target
     * @param {*} node
     */
    AssignmentExpression.prototype._checkValidAssignmentTarget = function (node) {
        if (node.type === constants_1.NodeType.IdentifierExpression)
            return node;
        throw new SyntaxError("Invalid left hand side in assignment expression");
    };
    return AssignmentExpression;
}(_1["default"]));
exports["default"] = AssignmentExpression;
