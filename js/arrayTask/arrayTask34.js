'use strict';

function arrayTask34(){
    console.log(`исходный массив ([43, 56, 23, 89, 88, 90, 99, 652], 4)`);
    console.log(`result: ${findLargeNTN([43, 56, 23, 89, 88, 90, 99, 652], 4)}`);
}

//без сортировки массива
function findLargeNTN(arr, n) {
    var copyArr =  arr.slice();
    if (n > copyArr.length || n <0){return false}

    for(var i = 0; i < n; i++){
        var  max= 0;
        for(let value of copyArr){
            max = (max < value) ? value : max;
        }
        if (n-1 == i){
            return max;
        }else {
            let index = copyArr.indexOf(max);
            copyArr.splice(index, 1);
        }
    }

    return false;
}

/*
с сортировкой массива:
arr.sort(...);
return arr[n-1];
 */