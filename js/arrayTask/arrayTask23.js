'use strict';

function arrayTask23(){
    var arr1=[],arr2=[], size1, size2;
    size1 = Math.floor(Math.random() * 9) + 7;
    size2 = Math.floor(Math.random() * 9) + 7;
    for (let i = 0; i < size1; i++) {
        let rand = Math.floor(- 5.5 + Math.random() * 26);
        arr1.push(rand);
    }
    for (let i = 0; i < size2; i++) {
        let rand = Math.floor(- 5.5 + Math.random() * 26);
        arr2.push(rand);
    }

    console.log(`исходный массив1 ${arr1}`);
    console.log(`исходный массив2 ${arr2}`);
    console.log(`result: ${notDuplicateArr(arr1, arr2)}`);
}

function notDuplicateArr(arr1, arr2) {
    var res =[],temp=[];

    for(let val of arr1){
        if (arr2.indexOf(val) == -1){
            temp.push(val);
        }
    }
    for(let val of arr2){
        if (arr1.indexOf(val) == -1){
            temp.push(val);
        }
    }
    for(let val of temp){
        if(temp.indexOf(val) === temp.lastIndexOf(val)){
            res.push(val);
        }
    }

    return res;
}

