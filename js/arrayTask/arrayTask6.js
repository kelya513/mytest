'use strict';

function arrayTask6() {
    var n = document.getElementById("task_6").value;
    if (+n >= 0){
        console.log(`число с -: ${dashNumPair(n)}`);
    } else {
        alert('Введите число');
    }
}

function dashNumPair(n) {
    n = String(n);
    let temp = n.split('');
    let res = [temp[0]];
     for(var i = 0; i < temp.length; i++){
        if ((temp[i] % 2 == 0) && (temp[i+1] % 2 == 0)){
            res.push('-',temp[i+1]);
        }else {
            res.push(temp[i+1])
        }
     }
    return res.join('');
}
