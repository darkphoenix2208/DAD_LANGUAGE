"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dad_lang_parser_1 = require("dad-lang-parser");
var invalidStateException_1 = __importDefault(require("../../exceptions/invalidStateException"));
var nallaPointerException_1 = __importDefault(require("../../exceptions/nallaPointerException"));
var runtimeException_1 = __importDefault(require("../../exceptions/runtimeException"));
var helpers_1 = require("../../helpers");
var interpreterModule_1 = __importDefault(require("../../module/interpreterModule"));
var BinaryExpression = /** @class */ (function () {
    function BinaryExpression() {
    }
    BinaryExpression.prototype.visitNode = function (node) {
        if (!node.left || !node.right || !node.operator) {
            throw new invalidStateException_1["default"]("Left , right or operator not found for: ".concat(node.type));
        }
        var left, right;
        // handling logical & binary both at the same place as both operate on two operands
        if (node.type == dad_lang_parser_1.NodeType.BinaryExpression) {
            if (node.operator !== "==" && node.operator !== "!=") {
                this._checkNalla(node);
                this._checkBoolean(node);
            }
            left = this._getNodeValue(node.left);
            right = this._getNodeValue(node.right);
        }
        else if (node.type == dad_lang_parser_1.NodeType.LogicalExpression) {
            this._checkNalla(node);
            left = node.left.type == dad_lang_parser_1.NodeType.BooleanLiteral ? (node.left.value == "sahi" ? true : false) : interpreterModule_1["default"].getVisitor(node.left.type).visitNode(node.left);
            right = node.right.type == dad_lang_parser_1.NodeType.BooleanLiteral ? (node.right.value == "sahi" ? true : false) : interpreterModule_1["default"].getVisitor(node.right.type).visitNode(node.right);
        }
        return (0, helpers_1.getOperationValue)({ left: left, right: right }, node.operator);
    };
    BinaryExpression.prototype._checkNalla = function (node) {
        if (!node.left || !node.right || !node.operator) {
            throw new invalidStateException_1["default"]("Left , right or operator not found for: ".concat(node.type));
        }
        var nallaException = new nallaPointerException_1["default"]("Nalla operand ni jamta \"".concat(node.operator, "\" ke sath"));
        if (node.left.type === dad_lang_parser_1.NodeType.NullLiteral ||
            node.right.type === dad_lang_parser_1.NodeType.NullLiteral)
            throw nallaException;
        if (node.left.type === dad_lang_parser_1.NodeType.IdentifierExpression && node.left.name) {
            var value = interpreterModule_1["default"].getCurrentScope().get(node.left.name);
            if (value === null)
                throw nallaException;
        }
        if (node.right.type === dad_lang_parser_1.NodeType.IdentifierExpression && node.right.name) {
            var value = interpreterModule_1["default"].getCurrentScope().get(node.right.name);
            if (value === null)
                throw nallaException;
        }
    };
    BinaryExpression.prototype._checkBoolean = function (node) {
        if (!node.left || !node.right || !node.operator) {
            throw new invalidStateException_1["default"]("Left , right or operator not found for: ".concat(node.type));
        }
        var runtimeException = new runtimeException_1["default"]("Kya kar rha hai tu??..Boolean operand ni jamta \"".concat(node.operator, "\" ke sath"));
        if (node.left.type === dad_lang_parser_1.NodeType.BooleanLiteral ||
            node.right.type === dad_lang_parser_1.NodeType.BooleanLiteral)
            throw runtimeException;
        if (node.left.type === dad_lang_parser_1.NodeType.IdentifierExpression && node.left.name) {
            var value = interpreterModule_1["default"].getCurrentScope().get(node.left.name);
            if (value === true || value === false)
                throw runtimeException;
        }
        if (node.right.type === dad_lang_parser_1.NodeType.IdentifierExpression && node.right.name) {
            var value = interpreterModule_1["default"].getCurrentScope().get(node.right.name);
            if (value === true || value === false)
                throw runtimeException;
        }
    };
    BinaryExpression.prototype._getNodeValue = function (node) {
        if (node.type === dad_lang_parser_1.NodeType.NullLiteral)
            return null;
        if (node.type === dad_lang_parser_1.NodeType.BooleanLiteral) {
            return node.value === "sahi" ? true : false;
        }
        if (node.type === dad_lang_parser_1.NodeType.IdentifierExpression && node.name)
            return interpreterModule_1["default"].getCurrentScope().get(node.name);
        return interpreterModule_1["default"].getVisitor(node.type).visitNode(node);
    };
    return BinaryExpression;
}());
exports["default"] = BinaryExpression;
