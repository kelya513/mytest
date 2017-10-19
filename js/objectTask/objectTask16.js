'use strict';


function reversPropValCopyObj(obj) {

    if((typeof obj === typeof {})){
        var newObj= {};
        for (var key in obj){
            newObj[obj[key]] = key;
        }
        return newObj;
    }else{
        return 'это не объект';
    }
}

function objectTask16() {
    let library =
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    };

    console.log(reversPropValCopyObj(library));
}
