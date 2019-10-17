var arrays = [[1, 2, 3], [4, 5], [6]];

var reduceAndConcat = function reduceAndConcat(arr) {
    var result = arrays.reduce(function (sum, current) {
        return sum.concat(current);
    });
    return result;
};
console.log(reduceAndConcat(arrays));