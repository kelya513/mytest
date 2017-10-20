'use strict';

function arrayTask10() {
    var arrEx = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
 console.log(`массив для примера: [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]`);
 printMultiArray(arrEx);

}

function printMultiArray(arr) {
 for(let i=0; i < arr.length; i++){
     console.log(`row ${i+1}`);
     //let row='';
    for(let val of arr[i]){
        console.log(val);
        //row += val + ' ';
    }
    //console.log(row); // ряд в одну строчку
 }
};