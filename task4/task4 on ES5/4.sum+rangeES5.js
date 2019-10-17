var sumAndRange = function () {
    return {
        range: function range(start, end) {
            var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

            var rangeArray = [];
            if (end - start < 0) {
                for (var i = 0; i * Math.abs(step) < -(end - start) + 1; i++) {
                    rangeArray[i] = start - i * Math.abs(step);
                }
            } else {
                for (var a = 0; a * Math.abs(step) < end - start + 1; a++) {
                    rangeArray[a] = start + a * Math.abs(step);
                }
            }
            return rangeArray;
        },
        sum: function sum(array) {
            var amount = 0;
            for (var i = 0; i < array.length; i++) {
                amount += array[i];
            }
            return amount;
        }
    };
}();
console.log(sumAndRange.sum(sumAndRange.range(1, 10)));
console.log(sumAndRange.range(5, 2, -1));