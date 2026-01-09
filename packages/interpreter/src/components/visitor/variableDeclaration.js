"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dad_lang_parser_1 = require("dad-lang-parser");
var invalidStateException_1 = __importDefault(require("../../exceptions/invalidStateException"));
var interpreterModule_1 = __importDefault(require("../../module/interpreterModule"));
var VariableDeclaration = /** @class */ (function () {
    function VariableDeclaration() {
    }
    VariableDeclaration.prototype.visitNode = function (node) {
        if (!node.id || !node.init) {
            throw new invalidStateException_1["default"]("id or init not found for ".concat(node.type));
        }
        var identifier = node.id.name;
        var value;
        if (node.init.type === dad_lang_parser_1.NodeType.NullLiteral)
            value = null;
        else if (node.init.type === dad_lang_parser_1.NodeType.BooleanLiteral)
            value = node.init.value === "sahi" ? true : false;
        else
            value = interpreterModule_1["default"].getVisitor(node.init.type).visitNode(node.init);
        var currentScope = interpreterModule_1["default"].getCurrentScope();
        if (identifier) {
            var mode = interpreterModule_1["default"].getMode();
            currentScope.declare(identifier, value, node.kind === "const", mode === "daddy");
        }
    };
    return VariableDeclaration;
}());
exports["default"] = VariableDeclaration;
