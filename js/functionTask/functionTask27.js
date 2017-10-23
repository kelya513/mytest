'use strict';
function functionTask27() {
    var str = document.getElementById("task_27").value;
    if (str == ""){
        alert('Введите данные');
    } else {
        alert(`Самый длинный палиндром ${findLongPalindrom(str)}` );
    }
}

function findLongPalindrom(str) {
    var res = '';
    var temp = '';
    var len = str.length;

    if (len < 3){
        return 'short str'
    }

    for(var i = 0; i < len; i++){
        for(var j = len; j >= 0; j--){
            if (str.charAt(i) == str.charAt(j)){
                temp = str.substring(i,j+1);
                if (temp.split("").reverse().join("") == temp && temp.length > 2){
                    if (temp.length > res.length){
                        res = temp;
                    }
                }
            }

        }
    }

    return res;

}