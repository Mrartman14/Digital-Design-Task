var reverseAndReverseInPlace = function () {
    return {
        reverseArray: function reverseArray(a) {
            var newArr = [];
            for (var i = 0; i < a.length; i++) {
                newArr[i] = a[a.length - i - 1];
            }
            return newArr;
        },
        reverseArrayInPlace: function reverseArrayInPlace(a) {
            var newArr = [];
            for (var i = 0; i < a.length; i++) {
                newArr[i] = a[a.length - i - 1];
            }
            for (var b = 0; b < a.length; b++) {
                a[b] = newArr[b];
            }
            return a;
        }
    };
}();

console.log(reverseAndReverseInPlace.reverseArray(["A", "B", "C"]));
var arrayValue = [1, 2, 3, 4, 5];
console.log(reverseAndReverseInPlace.reverseArrayInPlace(arrayValue));