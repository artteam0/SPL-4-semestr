//1//
function number(nums: number[]): string {
    return `(${nums.slice(0, 3).join('')}) ${nums.slice(3, 6).join('')}-${nums.slice(6).join('')}`;
}
console.log(number([4, 4, 5, 5, 3, 8, 8, 9, 5, 0]));
//2//
class Challenge {
    static solution(number: number) {
        if (number < 0) {
            return 0;
        }

        let sum: number = 0;
        for (let i = 1; i < number; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                sum = sum + i;
            }
        }
        return sum;
    }
}
console.log(Challenge.solution(10000));
//3//
function rotate(nums2: number[], step: number): void {
    const len = nums2.length;
    if (len == 0) {
        return;
    }
    if (step < 0) {
        return;
    }

    for (let i = 0; i < step; i++) {
        nums2.unshift(nums2.pop()!);
    }
}
const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
rotate(nums2, 3);
console.log(nums2);
//4//
function mediana(numbers1: number[], numbers2: number[]): number {
    const merge = [...numbers1, ...numbers2].sort((a, b) => a - b);
    const length = merge.length;
    const mid = Math.floor(length / 2);
    return length % 2 == 0 ? (merge[mid - 1] + merge[mid]) / 2 : merge[mid];
}
console.log(mediana([1, 3], [2]));
console.log(mediana([1, 2], [3, 4]));