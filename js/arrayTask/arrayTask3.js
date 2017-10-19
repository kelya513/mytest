'use strict';

function arrayTask3() {
    var arr=[], size;
    size = Math.floor(Math.random() * 9) + 5;
    for (var i = 0; i < size; i++) {
        var rand = Math.round(Math.random() * 30);
        arr.push(rand);
    }

    var n = +document.getElementById("task_1").value;
    if (n >= 0){
        console.log(`исходный массив ${arr}`);
        console.log(`копия n элементов массива ${copyPartArr(arr, n)}`);
    } else {
        alert('Введите число');
    }
}

function copyPartArr(arr,n) {
    if( Array.isArray(arr) && (n >= 0)){
        return arr.slice(0, n);
    }else{
        return 'it`s not array or error n';
    }
}
