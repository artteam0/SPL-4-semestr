var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//1//
function number(nums) {
    return "(".concat(nums.slice(0, 3).join(''), ") ").concat(nums.slice(3, 6).join(''), "-").concat(nums.slice(6).join(''));
}
console.log(number([4, 4, 5, 5, 3, 8, 8, 9, 5, 0]));
//2//
var Challenge = /** @class */ (function () {
    function Challenge() {
    }
    Challenge.solution = function (number) {
        if (number < 0) {
            return 0;
        }
        var sum = 0;
        for (var i = 1; i < number; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                sum = sum + i;
            }
        }
        return sum;
    };
    return Challenge;
}());
console.log(Challenge.solution(10000));
//3//
function rotate(nums2, step) {
    var len = nums2.length;
    if (len == 0) {
        return;
    }
    if (step < 0) {
        return;
    }
    for (var i = 0; i < step; i++) {
        nums2.unshift(nums2.pop());
    }
}
var nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
rotate(nums2, 3);
console.log(nums2);
//4//
function mediana(numbers1, numbers2) {
    var merge = __spreadArray(__spreadArray([], numbers1, true), numbers2, true).sort(function (a, b) { return a - b; });
    var length = merge.length;
    var mid = Math.floor(length / 2);
    return length % 2 == 0 ? (merge[mid - 1] + merge[mid]) / 2 : merge[mid];
}
console.log(mediana([1, 3], [2]));
console.log(mediana([1, 2], [3, 4]));
