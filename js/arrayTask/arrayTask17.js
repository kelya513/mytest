'use strict';

function arrayTask17() {
    var arr=[], size;
    size = Math.floor(Math.random() * 9) + 7;
    var min=-15,max=30;
    for (var i = 0; i < size; i++) {
        var rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.floor(rand);
        arr.push(rand);
    }
    arr.sort((a,b)=>{return a-b});

    console.log(`исходный массив ${arr}`);
    console.log(`перемешанынй ${randomArrayIndex(arr)}`);

}

function randomArrayIndex(arr) {
    return arr.sort(() => Math.random() - 0.5);
}
