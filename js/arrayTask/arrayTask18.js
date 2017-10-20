'use strict';

function arrayTask18() {
    var arr=[], size;
    size = Math.floor(Math.random() * 9) + 7;
    for (var i = 0; i < size; i++) {
        var rand = Math.floor(- 5.5 + Math.random() * 26);
        arr.push(rand);
    }
    arr.sort((a,b)=>{return a-b});
    var  n =  Math.floor(- 5.5 + Math.random() * 26);
    console.log(`исходный массив ${arr}`);
    console.log(`ищем ${n}: индекс ${arrayBinarySearch(arr, n)}`); // данные для проверки работы функции случайные

}

function arrayBinarySearch(arr, n) {
    //Проверка: есть ли смысл искать:
    if ((arr.length == 0) || ( n < arr[0]) || (n > arr[arr.length - 1])){
        return null;
    }

    // 1й эл-нт
    var first = 0;
    // последний+1 эл-нт
    var last = arr.length;

    // пока в рассматривоемом участке есть эл-ты
    while (first < last)
    {
        var mid = parseInt(first + (last - first) / 2); //индекс среднего эл-та , нужно целое значение

        if (n <= arr[mid]){ //выбераем нужную сторону для перебора
            last = mid;
        } else{
            first = mid + 1;
        }
    }

    // Теперь last может указывать на искомый элемент массива.
    if (arr[last] == n)
        return last;
    else
        return null;

}
