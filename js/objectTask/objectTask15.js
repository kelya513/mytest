'use strict';


function printValuesPairArray(obj) {

    if((typeof obj === typeof {})){
        var array = [];
        for (var key in obj){
            array.push([key,obj[key]]);
        }
        return array;
    }else{
        return 'это не объект';
    }
}

function objectTask15() {
    let library =
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    };

    console.log(printValuesPairArray(library));
}
