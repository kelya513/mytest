'use strict';

function arrayTask24(){
    var arr=[NaN, 0, 15, false, -22, '', undefined, 47, null] ;

    console.log(`исходный массив ${arr}`);
    console.log(`result: ${deleteFalseValue(arr)}`);
}

function deleteFalseValue(arr) {
    var res =[];

    for(let val of arr){
        if (val) {
            res.push(val);
        }
    }

    return res;
    //return res.filter((item)=>{return Boolean(item)})
}

