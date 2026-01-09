"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.getOperationValue = exports.checkNumberAndStringOperands = exports.checkStringOperands = exports.checkNumberOperands = void 0;
var invalidStateException_1 = __importDefault(require("../exceptions/invalidStateException"));
var runtimeException_1 = __importDefault(require("../exceptions/runtimeException"));
function checkNumberOperands(operands) {
    return (typeof operands.left === "number" && typeof operands.right === "number");
}
exports.checkNumberOperands = checkNumberOperands;
function checkStringOperands(operands) {
    return (typeof operands.left === "string" && typeof operands.right === "string");
}
exports.checkStringOperands = checkStringOperands;
function checkNumberAndStringOperands(operands) {
    return ((typeof operands.left === "string" && typeof operands.right === "number") || (typeof operands.right === "string" && typeof operands.left === "number"));
}
exports.checkNumberAndStringOperands = checkNumberAndStringOperands;
function getOperationValue(operands, operator) {
    var exception = new runtimeException_1["default"]("Ye kya kar raha hai: \"".concat(operator, "\" ke sath \"").concat(typeof operands.left, "\" aur \"").concat(typeof operands.right, "\" nahi jamte."));
    switch (operator) {
        case "=":
            return operands.right;
        case "+=":
        case "+":
            if (checkNumberOperands(operands)) {
                return operands.left + operands.right;
            }
            if (checkStringOperands(operands)) {
                return operands.left + operands.right;
            }
            if (checkNumberAndStringOperands(operands)) {
                return operands.left.toString() + operands.right.toString();
            }
            throw exception;
        case "-=":
        case "-":
            if (checkNumberOperands(operands)) {
                return operands.left - operands.right;
            }
            throw exception;
        case "*=":
        case "*":
            if (checkNumberOperands(operands)) {
                return operands.left * operands.right;
            }
            throw exception;
        case "/=":
        case "/":
            if (operands.right === 0) {
                throw new runtimeException_1["default"]("Kya kar rha hai tu??...zero se divide ni karte");
            }
            if (checkNumberOperands(operands)) {
                return operands.left / operands.right;
            }
            throw exception;
        case "%=":
        case "%":
            if (checkNumberOperands(operands)) {
                return operands.left % operands.right;
            }
            throw exception;
        case "==":
            return operands.left === operands.right;
        case "!=":
            return operands.left !== operands.right;
        case ">":
            if (checkNumberOperands(operands)) {
                return operands.left > operands.right;
            }
            throw exception;
        case "<":
            if (checkNumberOperands(operands)) {
                return operands.left < operands.right;
            }
            throw exception;
        case ">=":
            if (checkNumberOperands(operands)) {
                return operands.left >= operands.right;
            }
            throw exception;
        case "<=":
            if (checkNumberOperands(operands)) {
                return operands.left <= operands.right;
            }
            throw exception;
        case "&&":
            return operands.left && operands.right;
        case "||":
            return operands.left || operands.right;
        default:
            throw new invalidStateException_1["default"]("Unsupported operator: ".concat(operator));
    }
}
exports.getOperationValue = getOperationValue;
