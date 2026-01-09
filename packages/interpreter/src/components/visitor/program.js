"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var invalidStateException_1 = __importDefault(require("../../exceptions/invalidStateException"));
var interpreterModule_1 = __importDefault(require("../../module/interpreterModule"));
var Program = /** @class */ (function () {
    function Program() {
    }
    Program.prototype.visitNode = function (node) {
        if (Array.isArray(node.body) || !node.body)
            throw new invalidStateException_1["default"]("Invalid node body for : ".concat(node.type));
        interpreterModule_1["default"].getVisitor(node.body.type).visitNode(node.body);
    };
    return Program;
}());
exports["default"] = Program;
