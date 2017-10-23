'use strict';

function arrayTask28(){
    var str1 = document.getElementById("task_28_1").value;
    var str2 = document.getElementById("task_28_2").value;
    if (str1 !== '' && str1 !== ''){
        console.log(`результат: ${findLongSubstring([str2, str1])}`);
    } else {
        alert('Введите строки');
    }
}

function findLongSubstring(arr) {
    arr.sort((a,b)=>{return a.length < b.length});
    let i = 0;

    while(arr[0].charAt(i) == arr[1].charAt(i) && i < arr[0].length){
        i++;
    }

    return arr[1].substring(0,i);

}
