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
var RelationalExpression = /** @class */ (function (_super) {
    __extends(RelationalExpression, _super);
    function RelationalExpression() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RelationalExpression.prototype.getExpression = function () {
        return this.getBinaryExpression(constants_1.NodeType.AdditiveExpression, dadLangSpec_1.TokenTypes.RELATIONAL_OPERATOR);
    };
    return RelationalExpression;
}(_1["default"]));
exports["default"] = RelationalExpression;
