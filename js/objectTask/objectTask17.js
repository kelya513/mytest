'use strict';


function hasOwnPropertyMyFun(obj, prop) {

    if((typeof obj === typeof {})){
        return obj.hasOwnProperty(prop);
    }else{
        return 'это не объект';
    }
}

function objectTask17() {
    let library =
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    };

    console.log(hasOwnPropertyMyFun(library, 'title'));
}
