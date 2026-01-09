"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var interpreterModule_1 = __importDefault(require("../../module/interpreterModule"));
var InitStatement = /** @class */ (function () {
    function InitStatement() {
    }
    InitStatement.prototype.visitNode = function (node) {
        if (Array.isArray(node.body)) {
            node.body.forEach(function (statement) {
                interpreterModule_1["default"].getVisitor(statement.type).visitNode(statement);
            });
        }
    };
    return InitStatement;
}());
exports["default"] = InitStatement;
