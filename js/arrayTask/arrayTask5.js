'use strict';

function arrayTask5() {
    var arr=[], size;
    size = Math.floor(Math.random() * 9) + 5;
    for (var i = 0; i < size; i++) {
        var rand = Math.round(Math.random() * 30);
        arr.push(rand);
    }

    console.log(`исходный массив ${arr}`);
    console.log(`строка с сепаратором +: ${myJoinArr(arr, '+')}`);

}

function myJoinArr(arr,separator) {
    separator =  separator ? separator : ', ';
    if( Array.isArray(arr)){
        return arr.join(separator);
    }else{
        return 'it`s not array';
    }
}
