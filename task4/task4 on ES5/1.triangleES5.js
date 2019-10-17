(function triangle() {
    for (var colNum = 0; colNum < 7; colNum++) {
        var string = "";
        for (var row = 0; row <= colNum; row++) {
            string += "#";
        }
        console.log(string);
    }
}())



