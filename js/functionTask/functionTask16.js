'use strict';

function functionTask16() {
    var str = document.getElementById("task_16").value;
    if (str == ""){
        alert('Введите строку');
    } else {
        alert('уникальные символы: ' + selectSymbol(str));
    }
};

function selectSymbol(str) {
    var result='';

    for (var i = 0; i < str.length; i++){
        if(result.indexOf(str.charAt(i))==-1){
            result += str[i];
        }
    }
    return result;
};