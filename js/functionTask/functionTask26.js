'use strict';
function functionTask26() {
    var str = document.getElementById("task_26").value;
    if (str == ""){
        alert('Введите данные');
    } else {
        alert(`Результат ${longSubstringNotRepeatingChar(str)}` );
    }
}

function longSubstringNotRepeatingChar(str) {
    let result = '';
    let temp = '';
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            if (temp.indexOf(str[j]) !== -1) {
                i = str.indexOf(str[j],i) + 1;
                temp = '';
            } else {
                temp = str.slice(i, j+1);
                if (temp.length > result.length) {
                    result = temp;
                }
            }
        }
    }
    return result;
}