"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var runtimeException_1 = __importDefault(require("../exceptions/runtimeException"));
var chalk_1 = __importDefault(require("chalk"));
var Scope = /** @class */ (function () {
    function Scope(parentScope) {
        this._variables = new Map();
        this._isLoop = false;
        this._isBreakStatement = false;
        this._isContinueStatement = false;
        this._parentScope = parentScope;
        if (parentScope === null) {
            Scope.activeVariableCount = 0;
        }
    }
    Scope.prototype.isLoop = function () {
        return this._isLoop;
    };
    Scope.prototype.setLoop = function (isLoop) {
        this._isLoop = isLoop;
    };
    Scope.prototype.setBreakStatement = function (isBreakStatement) {
        this._isBreakStatement = isBreakStatement;
    };
    Scope.prototype.setContinueStatement = function (isContinueStatement) {
        this._isContinueStatement = isContinueStatement;
    };
    Scope.prototype.isBreakStatement = function () {
        return this._isBreakStatement;
    };
    Scope.prototype.isContinueStatement = function () {
        return this._isContinueStatement;
    };
    Scope.prototype.get = function (identifier) {
        if (this._variables.has(identifier)) {
            var variable = this._variables.get(identifier);
            variable.accessed = true;
            return variable.value;
        }
        if (this._parentScope !== null) {
            return this._parentScope.get(identifier);
        }
        throw new runtimeException_1["default"]("Variable \"".concat(identifier, "\" bana to le pehle."));
    };
    Scope.prototype.assign = function (identifier, value) {
        if (this._variables.has(identifier)) {
            // Keep existing accessed status or mark accessed? 
            // Usually assignment counts as usage, but the prompt says "declared but never accessed".
            // If I just assign and never read, it might be unused. 
            // But typically LHS is not 'access' in the "unused variable" sense (which implies read).
            // I will leave accessed as is, or initialized.
            var variable = this._variables.get(identifier);
            if (variable.isConst) {
                throw new runtimeException_1["default"]("Sanskaro ki dhajjiya uda di! (Assignment to constant variable)");
            }
            variable.value = value;
            return;
        }
        if (this._parentScope !== null) {
            this._parentScope.assign(identifier, value);
            return;
        }
        throw new runtimeException_1["default"]("Variable \"".concat(identifier, "\" bana to le pehle fir assign karna."));
    };
    Scope.prototype.declare = function (identifier, value, isConst, shouldCrashOnLimit) {
        if (isConst === void 0) { isConst = false; }
        if (shouldCrashOnLimit === void 0) { shouldCrashOnLimit = true; }
        if (this._variables.has(identifier)) {
            throw new runtimeException_1["default"]("Variable \"".concat(identifier, "\" pehle se exist karta hai bhai. Check karle."));
        }
        // High BP Check
        Scope.activeVariableCount++;
        if (Scope.activeVariableCount > 15) {
            if (shouldCrashOnLimit) {
                throw new runtimeException_1["default"]("Mera BP badha diya tune! Itna raita kyu failaya hai? (Variable Limit Exceeded)");
            }
            else {
                console.warn(chalk_1["default"].yellow("Beta, dimaag par itna zor mat daal (Warning: High Memory Usage)"));
            }
        }
        this._variables.set(identifier, { value: value, accessed: false, isConst: isConst });
    };
    Scope.prototype.checkUnusedVariables = function () {
        this._variables.forEach(function (variable, identifier) {
            if (!variable.accessed) {
                console.warn(chalk_1["default"].yellow("Ye '".concat(identifier, "' kyu paida kiya jab iska koi kaam hi nahi tha?")));
            }
        });
    };
    Scope.prototype.createChildScope = function () {
        return new Scope(this);
    };
    Scope.activeVariableCount = 0;
    return Scope;
}());
exports["default"] = Scope;
