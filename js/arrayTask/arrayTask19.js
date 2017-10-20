'use strict';

function arrayTask19() {
    var arr1=[],arr2=[], size1, size2;
    size1 = Math.floor(Math.random() * 9) + 7;
    size2 = Math.floor(Math.random() * 9) + 7;
    for (let i = 0; i < size1; i++) {
        var rand = Math.floor(- 5.5 + Math.random() * 26);
        arr1.push(rand);
    }
    for (let i = 0; i < size2; i++) {
        var rand = Math.floor(- 5.5 + Math.random() * 26);
        arr2.push(rand);
    }

    console.log(`исходный массив1 ${arr1}`);
    console.log(`исходный массив2 ${arr2}`);
    console.log(`result: ${createArraySum(arr1, arr2)}`);

}

function createArraySum(arr1, arr2) {
    var cnt = arr1.length < arr2.length ? arr1.length : arr2.length;
    var forSlice = arr1.length > arr2.length ? arr1 : arr2;
   var result = [];

    var i;
    for(i = 0; i < cnt; i++){
        result.push((arr1[i]+arr2[i]));
    }
    result.push(forSlice.slice(i));

    return result;
}
