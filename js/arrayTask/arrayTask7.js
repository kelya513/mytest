'use strict';

function arrayTask7() {
    var arr=[], size;
    size = Math.floor(Math.random() * 9) + 5;
    var min=-15,max=30;
    for (var i = 0; i < size; i++) {
        var rand = min - 0.5 + Math.random() * (max - min + 1)
        rand = Math.round(rand);
        arr.push(rand);
    }

    console.log(`исходный массив ${arr}`);
    console.log(`отсортированный ${sortArrayMy(arr)}`);

}

function sortArrayMy(arr) {
    return arr.sort((a,b)=>{return a-b;}); //самое простое решение

}
