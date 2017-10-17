/*
 проверка на совершенное число:

 1.найти делители аналогично, как при проверке на простое число

 2. проверить найденные числа аналогично этому: 28 = 1 + 2 + 4 + 7 + 14
 (сложить и если равны данному )

 */
'use strict';

function functionTask12() {
    var n = +document.getElementById("task_12").value;
    if (Math.abs(n) >= 0){
        alert('это число ' + (itNumPrefect(n) ? 'совершенное' : 'не является совершенным'));
    } else {
        alert('Введите число');
    }
}

function itNumPrefect(n){
    n = Math.abs(n);
    var arrDiv = [1];
    if (n < 6 ){ // 6 это первое совершенное число
        return false;
    }

    //sumArr = 1;
    for (var i = 2; i < n; i++) {
        if (n % i == 0){
            arrDiv.push(i);
            //sumArr += i
        }
    }

    var sumArr = arrDiv.reduce(function(sum, current) {
        return sum + current;
    }, 0);

    if (n === sumArr){
        return true;
    }
    else {
        return false;
    }

}