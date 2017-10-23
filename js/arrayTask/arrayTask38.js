'use strict';

function arrayTask38(){

    console.log(`moveElementArray([10, 20, 30, 40, 50], 0, 2): ${moveElementArray([10, 20, 30, 40, 50], 0, 2)}`);
    console.log(`moveElementArray([10, 20, 30, 40, 50], -1, -2): ${moveElementArray([10, 20, 30, 40, 50], -1, -2)}`);
}

function moveElementArray(arr, from, moveTo){
    var elem = arr.splice(from, 1)[0]; 
    moveTo = (moveTo < 0) ? ++moveTo : moveTo;
    arr.splice(moveTo, 0, elem);
    return arr;
}
