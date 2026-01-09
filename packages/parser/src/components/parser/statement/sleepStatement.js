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
var SleepStatement = /** @class */ (function (_super) {
    __extends(SleepStatement, _super);
    function SleepStatement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SleepStatement.prototype.getStatement = function () {
        this._tokenExecutor.eatTokenAndForwardLookahead(dadLangSpec_1.TokenTypes.SLEEP);
        var duration = expression_1["default"].getExpressionImpl(constants_1.NodeType.AssignmentExpression).getExpression();
        this._tokenExecutor.eatTokenAndForwardLookahead(dadLangSpec_1.TokenTypes.SEMI_COLON_TYPE);
        return {
            type: constants_1.NodeType.SleepStatement,
            duration: duration
        };
    };
    return SleepStatement;
}(_1["default"]));
exports["default"] = SleepStatement;
