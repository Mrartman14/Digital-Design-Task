(function chessDeck(columns) {
    for (var col = 0; col < columns; col++) {
        var str = "";
        for (var row = 0; row < columns; row++) {
            if (col % 2 == row % 2) {
                str += " ";
            } else str += "#";
        }
        console.log(str);
    }
})(8);