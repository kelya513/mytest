'use strict';

function arrayTask37(){

    console.log(`массив с определенными данными(string)`);
    console.log(`createFieldArray(5, 'str'): ${createFieldArray(5, 'str')}`);
    console.log(`createFieldArray(3, 'test'): ${createFieldArray(3, 'test')}`);
}

function createFieldArray(cnt, str){
    var arr = new Array(cnt);
    return arr.fill(str);
}

/*
 2й способ:
 for(var i=0; i<cnt; i++){
 arr.push(str);
 }
 */