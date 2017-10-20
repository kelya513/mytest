'use strict';

function arrayTask21(){
    console.log(arrFlatten([1, [2], [3, [[4]]],[5,6]]));
    console.log(arrFlatten([1, [2], [3, [[4]]],[5,6]], true));
}

function arrFlatten(arr, one) {
    var result = [];

    if (one){
        // for(let val of arr){
        //     if (Array.isArray(val)){
        //         for(let val2 of val){
        //             result.push(val2);
        //         }
        //     }else {
        //         result.push(val);
        //     }
        // }
        // return result;
        return result.concat(...arr);
    }else {
       return arr.toString().split(",").map(function (num) { return +num });
    }



}