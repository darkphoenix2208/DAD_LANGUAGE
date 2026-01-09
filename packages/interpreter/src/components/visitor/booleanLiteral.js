"use strict";
exports.__esModule = true;
var BooleanLiteral = /** @class */ (function () {
    function BooleanLiteral() {
    }
    BooleanLiteral.prototype.visitNode = function (node) {
        return node.value;
    };
    return BooleanLiteral;
}());
exports["default"] = BooleanLiteral;
