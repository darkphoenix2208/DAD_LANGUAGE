"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var interpreterModule_1 = __importDefault(require("../../module/interpreterModule"));
var chalk_1 = __importDefault(require("chalk"));
var SleepStatement = /** @class */ (function () {
    function SleepStatement() {
    }
    SleepStatement.prototype.visitNode = function (node) {
        // 10% chance to ignore sleep
        if (Math.random() < 0.1) {
            console.log(chalk_1["default"].yellow("Bahut ho gaya, uth abhi! (Sleep ignored)"));
            return;
        }
        if (!node.duration) {
            throw new Error("Duration bahana chahiye!");
        }
        var duration = interpreterModule_1["default"].getVisitor(node.duration.type).visitNode(node.duration);
        var start = Date.now();
        while (Date.now() - start < duration) {
            // Busy wait to pause execution
        }
    };
    return SleepStatement;
}());
exports["default"] = SleepStatement;
