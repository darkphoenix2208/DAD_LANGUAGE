"use strict";
exports.__esModule = true;
var NullLiteral = /** @class */ (function () {
    function NullLiteral() {
    }
    NullLiteral.prototype.visitNode = function (node) {
        return node.value;
    };
    return NullLiteral;
}());
exports["default"] = NullLiteral;
