'use strict';

function arrayTask31(){
    var arr=[], size;
    size = Math.floor(Math.random() * 9) + 2;
    for (let i = 0; i < size; i++) {
        let rand = Math.floor(- 5.5 + Math.random() * 26);
        arr.push(rand);
    }

    var delElem = arr[ Math.floor(size/3)];
    console.log(`исходный массив ${arr}`);
    console.log(`result удаление ${delElem}: ${removeElementArray(arr, delElem)}`);
}


function removeElementArray(arr, value) {
    var index = arr.indexOf(value);
    arr.splice(index, 1);
    return arr;
}

/*
второй способ:
1. найти индекс удаляемого елемента
2. через цикл сдвинуть все значение на 1 присвов начиная с удаляемого элемента (a[i]= a[i+1])
3. удалить через pop последний элемент
 */
