'use strict';

function functionTask14() {
    var sum = +document.getElementById("task_14").value;
    //var coins = [25,5,1];
   // var coins = [25,10,2];
   var coins = [25,10,5,2,1];

    if ( sum && coins.length > 0){
        alert('результат: [' + amountToСoins(sum, coins) + ']' );
    } else {
        alert('Введите целое положительное число');
    }
}

function amountToСoins(sum, coins){
    let arrRes = [];
    let leftSum = sum;

    for (var i = 0; i < coins.length; i++) { //цикл для поиска количества монет определенного достоинства для поиска суммы
        if (leftSum < 0){
            break;
        }
        var cnt = Math.floor(leftSum/coins[i]);
        for (var j = 0; j < cnt; j++){
            arrRes.push(coins[i]);
        }
        leftSum -= cnt*coins[i];
    }

    if (leftSum != 0){ //откат на один шаг для частного случая (если остача и поледняя выбранная монета непарная, а в массиве монет последняя монета 2)
        var temp = leftSum + arrRes[arrRes.length - 1];
        if (temp % coins[coins.length - 1] == 0 ){
            arrRes.pop();
            cnt = Math.floor(temp/coins[coins.length - 1]);
            for (var j = 0; j < cnt; j++){
                arrRes.push(coins[coins.length - 1]);
            }
        }else {
            arrRes.push('нераспределенная сумма: ' + leftSum);
        }
    }

    return arrRes;

}