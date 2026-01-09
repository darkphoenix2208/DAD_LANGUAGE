"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.DadClass = exports.DadInstance = void 0;
var interpreterModule_1 = __importDefault(require("../../module/interpreterModule"));
var runtimeException_1 = __importDefault(require("../../exceptions/runtimeException"));
var DadInstance = /** @class */ (function () {
    function DadInstance(klass) {
        this.klass = klass;
        this.fields = new Map();
    }
    DadInstance.prototype.get = function (name) {
        var _this = this;
        if (this.fields.has(name)) {
            return this.fields.get(name);
        }
        var method = this.klass.findMethod(name);
        if (method) {
            // Bind method to this instance
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _this.klass._callMethod(method, _this, args);
            };
        }
        throw new runtimeException_1["default"]("Kya dhoond raha hai? Undefined property '".concat(name, "'."));
    };
    DadInstance.prototype.set = function (name, value) {
        this.fields.set(name, value);
    };
    return DadInstance;
}());
exports.DadInstance = DadInstance;
var DadClass = /** @class */ (function () {
    function DadClass(name, methods, superClass) {
        this.name = name;
        this.methods = methods;
        this.superClass = superClass;
    }
    DadClass.prototype.findMethod = function (name) {
        if (this.methods.has(name)) {
            return this.methods.get(name);
        }
        if (this.superClass) {
            return this.superClass.findMethod(name);
        }
        return undefined;
    };
    DadClass.prototype.instantiate = function (args) {
        var instance = new DadInstance(this);
        var initializer = this.findMethod("constructor");
        if (initializer) {
            this._callMethod(initializer, instance, args);
        }
        return instance;
    };
    DadClass.prototype._callMethod = function (methodNode, instance, args) {
        var parentScope = interpreterModule_1["default"].getCurrentScope();
        var methodScope = parentScope.createChildScope();
        interpreterModule_1["default"].setCurrentScope(methodScope);
        methodScope.declare("khud", instance, true);
        // Explicitly cast ASTNode to access params
        var params = methodNode.value.params || [];
        params.forEach(function (param, index) {
            var argValue = args[index];
            methodScope.declare(param.name, argValue);
        });
        try {
            // Explicitly cast ASTNode to access body
            interpreterModule_1["default"].getVisitor(methodNode.value.body.type).visitNode(methodNode.value.body);
        }
        finally {
            interpreterModule_1["default"].setCurrentScope(parentScope);
        }
    };
    return DadClass;
}());
exports.DadClass = DadClass;
