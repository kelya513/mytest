'use strict';

function arrayTask26(){

    console.log(`исходный данные [10,20,10,40,50,60,70]50`);//${arr}
    console.log(`result: ${twoSum([10,20,10,40,50,60,70],50)}`);
}

function twoSum(arr,target) {
    var result = [];

    for(var i = 0; i < arr.length; i++){
        for(var j = i; j < arr.length; j++){
            if (arr[i]+arr[j] == target){
                result.push(i, j);
                return result;
            }
        }
    }

}
