"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PalindromeChecker = void 0;
var PalindromeChecker = /** @class */ (function () {
    function PalindromeChecker() {
    }
    PalindromeChecker.prototype.getReversedString = function (str) {
        return str
            .split('')
            .reverse()
            .join('');
    };
    PalindromeChecker.prototype.stripSpaces = function (str) {
        return str.split(' ').join('');
    };
    PalindromeChecker.prototype.isPalindrome = function (str) {
        var reversed = this.getReversedString(str);
        return (this.stripSpaces(str).toLowerCase() ===
            this.stripSpaces(reversed).toLowerCase());
    };
    return PalindromeChecker;
}());
exports.PalindromeChecker = PalindromeChecker;
