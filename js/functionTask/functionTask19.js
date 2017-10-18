'use strict';

var arrFun19=[], sizeFun19, arrFun19_copy;
sizeFun19 = Math.floor(Math.random() * 9) + 5;
for (var i = 0; i < sizeFun19; i++) {
    var rand = Math.round(Math.random() * 30);
    arrFun19.push(rand);
}

arrFun19_copy = arrFun19.slice();
document.getElementById("task_19_div").innerHTML = arrFun19.join(", ");

function functionTask19() {
    var n = +document.getElementById("task_19").value;
    if ( Math.abs(n) >= 0){
        alert('Элементы больше числа ' + n + ': ' + funFindArrElem2(n, arrFun19_copy) );
    } else {
        alert('Некорректные данные');
    }
}

//1й способ, если не важен порядок
function funFindArrElem1(n, arr) {
    arr.sort((a,b)=>{return a-b;});
    var result =[];
    for (var i=0; i < arr.length; i++){
        if (arr[i] > n){
            result = arr.slice(i);
            break;
        }
    }

    return result;
}

//2й способ, если важен порядок
function funFindArrElem2(n, arr) {
    var result =[];
    for (var i=0; i < arr.length; i++){
        if (arr[i] > n){
            result.push(arr[i]);
        }
    }

    return result;
}

//3й способ
function functionTask19_1(){
    var n = +document.getElementById("task_19").value;
    if ( isNaN(n)){
        alert('Некорректные данные');
    }else {
        // //результат, n найдется, так как она инициализирована выше
        // var result = arrFun19.filter((value)=>{ return (value > n)});//function(value, index, array)

        var result = arrFun19.filter(funFindArrElem3(n));//function(value, index, array)
        alert('Элементы больше числа ' + n + ': ' + result );
    }

    function funFindArrElem3(n) {
        return (value)=>{ return (value > n)};
    }

}
