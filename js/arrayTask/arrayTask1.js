'use strict';

function arrayTask1() {
    console.log(`isArrayMy([]) - ${isArrayMy([])}`);
    console.log(`isArrayMy('sdfsdfs') - ${isArrayMy('sdfsdfs')}`);
    console.log(`isArrayMy({}) - ${isArrayMy({})}`);
}

function isArrayMy(arr) {
    if( Array.isArray(arr)){
        return true;
    }else{
        return false;
    }
}

