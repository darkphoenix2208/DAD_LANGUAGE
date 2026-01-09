"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var constants_1 = require("../../../../constants/constants");
var dadLangModule_1 = __importDefault(require("../../../../module/dadLangModule"));
var Expression = /** @class */ (function () {
    function Expression(tokenExecutor) {
        this._tokenExecutor = tokenExecutor;
    }
    Expression.getExpressionImpl = function (expressionType) {
        switch (expressionType) {
            case constants_1.NodeType.AdditiveExpression:
                return dadLangModule_1["default"].getAdditiveExpression();
            case constants_1.NodeType.MultiplicativeExpression:
                return dadLangModule_1["default"].getMultiplicativeExpression();
            case constants_1.NodeType.PrimaryExpression:
                return dadLangModule_1["default"].getPrimaryExpression();
            case constants_1.NodeType.ParanthesizedExpression:
                return dadLangModule_1["default"].getParanthesizedExpression();
            case constants_1.NodeType.AssignmentExpression:
                return dadLangModule_1["default"].getAssignmentExpression();
            case constants_1.NodeType.EqualityExpression:
                return dadLangModule_1["default"].getEqualityExpression();
            case constants_1.NodeType.LogicalANDExpression:
                return dadLangModule_1["default"].getLogicalANDExpression();
            case constants_1.NodeType.LogicalORExpression:
                return dadLangModule_1["default"].getLogicalORExpression();
            case constants_1.NodeType.RelationalExpression:
                return dadLangModule_1["default"].getRelationalExpression();
            case constants_1.NodeType.ArrayExpression:
                return dadLangModule_1["default"].getArrayExpression();
            case constants_1.NodeType.MemberExpression:
                return dadLangModule_1["default"].getMemberExpression();
            case constants_1.NodeType.CallExpression:
                return dadLangModule_1["default"].getMemberExpression();
            default:
                return dadLangModule_1["default"].getIndentifierExpression();
        }
    };
    Expression.prototype.getBinaryExpression = function (downstreamExpressionType, operatorToken) {
        return this._getExpression(downstreamExpressionType, operatorToken, constants_1.NodeType.BinaryExpression);
    };
    Expression.prototype.getLogicalExpression = function (downstreamExpressionType, operatorToken) {
        return this._getExpression(downstreamExpressionType, operatorToken, constants_1.NodeType.LogicalExpression);
    };
    Expression.prototype._getExpression = function (downstreamExpressionType, operatorToken, expressionType) {
        var _a;
        var left = Expression.getExpressionImpl(downstreamExpressionType).getExpression();
        while (((_a = this._tokenExecutor.getLookahead()) === null || _a === void 0 ? void 0 : _a.type) === operatorToken) {
            var operator = this._tokenExecutor.eatTokenAndForwardLookahead(operatorToken);
            var right = Expression.getExpressionImpl(downstreamExpressionType).getExpression();
            left = {
                type: expressionType,
                operator: operator.value,
                left: left,
                right: right
            };
        }
        return left;
    };
    return Expression;
}());
exports["default"] = Expression;
