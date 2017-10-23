'use strict';

function arrayTask35(){

    var arr=[], size;
    size = Math.floor(Math.random() * 9) + 5;
    for (let i = 0; i < size; i++) {
        let rand = Math.floor(- 5.5 + Math.random() * 26);
        arr.push(rand);
    }

    console.log(`исходный массив ${arr}`);
    console.log(`random element: ${randomItemArray(arr)}`);
}

function randomItemArray(arr){
    return arr[Math.floor(Math.random()*arr.length)];
}


