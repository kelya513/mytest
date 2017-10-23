'use strict';

function arrayTask40(){

    console.log(`массив с определенными данными`);
    console.log(`generateIncrementArray(1, 4): ${generateIncrementArray(1, 4)}`);
    console.log(`generateIncrementArray(-6, 4): ${generateIncrementArray(-6, 4)}`);
}

function generateIncrementArray(start, length) {
    var arr = [];

    for(var i=0; i<length; i++){
        arr.push(start);
        start += 1;
    }

    return arr;
}

