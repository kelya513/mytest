'use strict';

function arrayTask14() {
    var arr=[], size;
    size = Math.floor(Math.random() * 9) + 7;
    var min=-15,max=30;
    for (var i = 0; i < size; i++) {
        var rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.floor(rand);
        arr.push(rand);
    }
    var tempSlice = Math.floor(size/2);
    arr.push(arr[tempSlice]);

    console.log(`исходный массив ${arr}`);
    console.log(`удаление дубликатов ${deleteDuplicate(arr)}`);

}

function deleteDuplicate(arr) {
    var objHelp={};

    arr.forEach(val => objHelp[val] = 0);

    var result = [];
    for(let key in objHelp){
        key = isNaN(objHelp[key]) ? key : (+key);
        result.push(key);
    }

    return result;

}
