'use strict';
function functionTask23() {
    var str = document.getElementById("task_23").value;
    if (str == ""){
        alert('Введите данные');
    } else {
        alert('Первый уникальный символ '+ uniqueCharFun(str) );
    }
}

function uniqueCharFun(str) {
    for(var i=0; i < str.length; i++){
        //если символ один то его индекс будет одним и тем же, что с конца, что с начала строки
        if (str.indexOf(str.charAt(i)) === str.lastIndexOf(str.charAt(i))){
            return str.charAt(i); //найден первый уникальный символ, возращаем результат
        }
    }
}