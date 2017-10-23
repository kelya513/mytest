'use strict';

function arrayTask39(){

    console.log(`результат [58, '', 'abcd', true, null, false, 0].filter(notFalse),  где notFalse - нужная функция`);
    console.log([58, '', 'abcd', true, null, false, 0].filter(valNotFalse));
}

function valNotFalse(value) {
    return Boolean(value);
}
