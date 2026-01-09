"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var interpreterModule_1 = __importDefault(require("../../module/interpreterModule"));
var dadRuntime_1 = require("../runtime/dadRuntime");
var ClassDeclaration = /** @class */ (function () {
    function ClassDeclaration() {
    }
    ClassDeclaration.prototype.visitNode = function (node) {
        var className = node.id.name;
        var superClassNode = node.superClass;
        var superClass = null;
        if (superClassNode) {
            // Resolve super class
            superClass = interpreterModule_1["default"].getCurrentScope().get(superClassNode.name);
        }
        var methods = new Map();
        if (node.body && node.body.body) { // ClassBody
            var classBody = node.body.body;
            var bodyList = Array.isArray(classBody) ? classBody : [classBody];
            bodyList.forEach(function (method) {
                if (method.key && method.key.name) {
                    methods.set(method.key.name, method);
                }
            });
        }
        var klass = new dadRuntime_1.DadClass(className, methods, superClass);
        interpreterModule_1["default"].getCurrentScope().declare(className, klass, true);
    };
    return ClassDeclaration;
}());
exports["default"] = ClassDeclaration;
