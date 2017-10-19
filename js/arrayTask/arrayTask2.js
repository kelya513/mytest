'use strict';

function arrayTask2() {
    var arr=[], size;
    size = Math.floor(Math.random() * 9) + 5;
    for (var i = 0; i < size; i++) {
        var rand = Math.round(Math.random() * 30);
        arr.push(rand);
    }

    console.log(`исходный массив ${arr}`);
    console.log(`копия массива ${copyArr(arr)}`);

}

function copyArr(arr) {
    if( Array.isArray(arr)){
        return arr.slice();
    }else{
        return 'it`s not array';
    }
}

