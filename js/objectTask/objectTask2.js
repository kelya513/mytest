'use strict';

function objectTask2() {
    var defaultObj={
        name : "David Rayy",
        sclass : "VI",
        rollno : 12 };

    deletePropertyObject(defaultObj, 'rollno');
}

function deletePropertyObject(obj, prop) {
    if((typeof obj === typeof {})){
        console.log(obj);
        delete obj[prop];
        console.log(obj);
    }else{
        console.log('это не объект');
    }
}

