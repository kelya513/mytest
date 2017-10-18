//'use strict'; вывод имени функции не работает в режиме use strict

function callOtherFunction(nameFunct)
{
    nameFunct();
}

function printFuncName(){
    console.log( arguments.callee.name);
    alert( arguments.callee.name);
}
