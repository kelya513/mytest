'use strict';

var arrFun18=[], sizeFun18, arrFun18_copy;
sizeFun18 = Math.floor(Math.random() * 9) + 5;
for (var i = 0; i < sizeFun18; i++) {
    var rand = Math.round(Math.random() * 30);
       if (arrFun18.indexOf(rand) == -1){
            arrFun18.push(rand);
        }
}
arrFun18.sort((a,b)=>{return a-b;}); //бинарный поиск осуществляется в отсортированом массиве
arrFun18_copy = arrFun18.slice();
document.getElementById("task_18_div").innerHTML = arrFun18.join(", ");


function functionTask18() {
    var n = +document.getElementById("task_18").value;
    if ( Math.abs(n) >= 0){
        alert('Индекс ' + funArrBinary(n, arrFun18_copy) );
    } else {
        alert('Некорректные данные');
    }
}

function funArrBinary(n, arr) {

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