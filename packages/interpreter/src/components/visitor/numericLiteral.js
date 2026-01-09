"use strict";
exports.__esModule = true;
var NumericLiteral = /** @class */ (function () {
    function NumericLiteral() {
    }
    NumericLiteral.prototype.visitNode = function (node) {
        return node.value;
    };
    return NumericLiteral;
}());
exports["default"] = NumericLiteral;
