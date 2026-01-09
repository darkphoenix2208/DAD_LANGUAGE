"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var RuntimeException = /** @class */ (function (_super) {
    __extends(RuntimeException, _super);
    function RuntimeException(errorMessage) {
        var _this = this;
        var errorName = "RuntimeException";
        errorMessage = errorName + ": " + errorMessage;
        _this = _super.call(this, errorMessage) || this;
        _this.name = errorName;
        _this.message = "".concat(errorMessage);
        return _this;
    }
    return RuntimeException;
}(Error));
exports["default"] = RuntimeException;
