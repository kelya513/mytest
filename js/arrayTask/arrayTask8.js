'use strict';

function arrayTask8() {
    var arr=[], size;
    size = Math.floor(Math.random() * 9) + 7;
    var min=-15,max=30;
    for (var i = 0; i < size; i++) {
        var rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.floor(rand);
        arr.push(rand);
    }
    var tempSlice = Math.floor(size/2);
    arr.push(arr[tempSlice],arr[tempSlice],arr[tempSlice]);

    console.log(`исходный массив ${arr}`);
    console.log(`найбольшее вхождение ${cntBigFreqArrayMy(arr)}`);

}

function cntBigFreqArrayMy(arr) {
    var objHelp={};

    //arr.foreach(val => objHelp[val] = isNaN(objHelp[val]) ? 1 : (objHelp[val] += 1)) ;
    for (let key in arr) {
        objHelp[arr[key]] = isNaN(objHelp[arr[key]]) ? 1 : (objHelp[arr[key]] += 1);
    }
    console.log(objHelp);

    var result = arr[0];
    for(let key in objHelp){
        if (objHelp[key] > objHelp[result]) {result = key}
    }

    return `${result} повторяется ${objHelp[result]} раз`;

}
