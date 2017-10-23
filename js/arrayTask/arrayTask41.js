'use strict';

function arrayTask41(){

    console.log(`массив с определенными данными`);
    console.log(`generateIncrementBetweenArray(4, 7): ${generateIncrementBetweenArray(4, 7)}`);
    console.log(`generateIncrementBetweenArray(-4, 7): ${generateIncrementBetweenArray(-4, 7)}`);
}

function generateIncrementBetweenArray(start, end) {
    if (end - start < 0){
        return false;
    }

    var arr = [];

    for(start; start <= end; start++){
        arr.push(start);
    }

    return arr;
}

