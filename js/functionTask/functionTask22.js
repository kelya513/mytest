'use strict';
function functionTask22() {
    var str = document.getElementById("task_22_srt").value;
    var ch = document.getElementById("task_22_ch").value;
    if (str == "" || ch == ""){
        alert('Введите данные');
    } else {

        for(var i = 0; i < ch.length; i++){
            alert('Количество вхождений '+ ch.charAt(i) +': ' + cntCharFun(str, ch.charAt(i)) ); // только по одному символу
        }

    }
}

function cntCharFun(str, ch) {
    return str.split("").filter( (val) => {return val === ch }).length;

}
/*
есть еще способ через цикл: проверять каждый символ и при совпадении cnt++
 */