'use strict';

function arrayTask32(){
    var arr=[], size;
    size = Math.floor(Math.random() * 9) + 5;
    for (let i = 0; i < size; i++) {
        let rand = Math.floor(- 5.5 + Math.random() * 26);
        arr.push(rand);
    }

    var searchElem = Math.floor(- 5.5 + Math.random() * 26);
    var searchElem2 = arr[Math.floor(size/2)];
    console.log(`исходный массив ${arr}`);
    console.log(`result поиск ${searchElem}: ${findElementArray(arr, searchElem)}`);
    console.log(`result поиск ${searchElem2}: ${findElementArray(arr, searchElem2)}`);
}


function findElementArray(arr, value) {
    for(let val_arr of arr){
        if (val_arr == value){
            return true;
        }
    }
    
    return false;
}

/*
 второй способ:
 var index = arr.indexOf(value);
 */
