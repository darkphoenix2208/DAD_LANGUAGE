"use strict";
exports.__esModule = true;
var StringLiteral = /** @class */ (function () {
    function StringLiteral() {
    }
    StringLiteral.prototype.visitNode = function (node) {
        return node.value;
    };
    return StringLiteral;
}());
exports["default"] = StringLiteral;
