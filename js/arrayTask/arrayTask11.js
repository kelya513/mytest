'use strict';

function arrayTask11() {
    var arr=[], size;
    size = Math.floor(Math.random() * 9) + 5;
    for (var i = 0; i < size; i++) {
        var rand = Math.random() * 20;
        rand = Math.floor(rand);
        arr.push(rand);
    }

    console.log(`исходный массив ${arr}`);
    console.log(`сума квадратов: ${sumOfSquares(arr)}`);

}

function sumOfSquares(arr) {
    return arr.reduce( (sum,a)=>{return sum += a*a});

}
