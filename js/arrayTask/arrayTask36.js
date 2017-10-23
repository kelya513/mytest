'use strict';

function arrayTask36(){

    console.log(`массив с определенными данными`);
    console.log(`createFieldArray(5, 11): ${createFieldArray(5, 11)}`);
    console.log(`createFieldArray(3, 0): ${createFieldArray(3, 0)}`);
}

function createFieldArray(cnt, val){
   var arr = new Array(cnt);
   return arr.fill(val);
}

/*
2й способ:
for(var i=0; i<cnt; i++){
    arr.push(val);
}
 */