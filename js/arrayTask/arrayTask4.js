'use strict';

function arrayTask4() {
    var arr=[], size;
    size = Math.floor(Math.random() * 9) + 5;
    for (var i = 0; i < size; i++) {
        var rand = Math.round(Math.random() * 30);
        arr.push(rand);
    }

    var n = +document.getElementById("task_4").value;
    if (n >= 0){
        console.log(`исходный массив ${arr}`);
        console.log(`копия n элементов массива с конца ${copyPartArrRight(arr, n)}`);
    } else {
        alert('Введите число');
    }
}

function copyPartArrRight(arr,n) {
    n =  n>=0 ? n : 1;
    if( Array.isArray(arr)){
        if (arr.length === 0){return 'array is empty'}
        return arr.slice(-n);
    }else{
        return 'it`s not array';
    }
}
