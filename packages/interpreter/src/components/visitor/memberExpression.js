"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var interpreterModule_1 = __importDefault(require("../../module/interpreterModule"));
var runtimeException_1 = __importDefault(require("../../exceptions/runtimeException"));
var MemberExpression = /** @class */ (function () {
    function MemberExpression() {
    }
    MemberExpression.prototype.visitNode = function (node) {
        var object = interpreterModule_1["default"].getVisitor(node.object.type).visitNode(node.object);
        var property;
        if (node.computed) {
            property = interpreterModule_1["default"].getVisitor(node.property.type).visitNode(node.property);
        }
        else {
            property = node.property.name;
        }
        // Handle Array properties/methods
        if (Array.isArray(object)) {
            if (property === "aukaat")
                return object.length;
            if (property === "thoos_de")
                return object.push.bind(object);
            if (property === "nikal_fek")
                return object.pop.bind(object);
        }
        // Handle DadInstance
        // We need to import DadInstance or check shape. 
        // Since recursive dependency might occur if we import DadInstance at top level?
        // Let's use 'get' method check or lazy import if strict.
        // Actually runtime imports are fine.
        if (object && typeof object.get === 'function' && object.fields instanceof Map) {
            return object.get(property);
        }
        // Generic access
        if (object === undefined || object === null) {
            throw new runtimeException_1["default"]("Cannot read property '".concat(property, "' of ").concat(object));
        }
        var val = object[property];
        if (typeof val === 'function') {
            return val.bind(object);
        }
        return val;
    };
    return MemberExpression;
}());
exports["default"] = MemberExpression;
