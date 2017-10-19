'use strict';


function printValuesPropertyObj(obj) {

    if((typeof obj === typeof {}) || (typeof obj === typeof (function () {}))){
        var values = [];
        for (var key in obj){
            values.push(obj[key]);
        } 
        return values;
    }else{
        return 'это не объект';
    }
}

function objectTask14() {
    let library =
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    };

    console.log(printValuesPropertyObj(library));
}
