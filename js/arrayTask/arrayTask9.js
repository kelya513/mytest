'use strict';

function arrayTask9() {
    var str = document.getElementById("task_9").value;
    if (str !== ''){
        console.log(`переделанная строка: ${reverseCharStr(str)}`);
    } else {
        alert('Введите строку');
    }
}

function reverseCharStr(str) {
   var result = '';
    for(var ch of str){
        result += (ch === ch.toUpperCase()) ? ch.toLowerCase() : ch.toUpperCase();
    }

    // for(let i=0; i < str.length; i++){
    //     result += (str.charAt(i) === str.charAt(i).toUpperCase()) ? str.charAt(i).toLowerCase() : str.charAt(i).toUpperCase();
    // }

    return result;
};