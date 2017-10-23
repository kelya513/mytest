'use strict';

function arrayTask33(){
    var arr=[], size;
    size = Math.floor(Math.random() * 9) + 5;
    for (let i = 0; i < size; i++) {
        let rand = Math.floor(- 5.5 + Math.random() * 26);
        arr.push(rand);
    }

    console.log(`исходный массив ${arr}`);
    delAllElemArray(arr);
    console.log(`result удаление массива: ${arr} (array empty)`);
}


function delAllElemArray(arr) { // сама переменная остается, но значения елементов теряются.
  arr.length = 0;
  // arr.splice(0);
}
