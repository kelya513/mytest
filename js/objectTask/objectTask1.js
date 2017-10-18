'use strict';

function objectTask1() {
    var defaultObj={
        name : "David Rayy",
        sclass : "VI",
        rollno : 12 };

    alert('for..in => '+printPropertyObject1(defaultObj));
    alert('Object.getOwnPropertyNames => '+printPropertyObject2(defaultObj));

}

function printPropertyObject1(obj) {
    var result='';

    if((typeof obj === typeof {})){
        for (var key in obj) {
            result+= key + "; ";
        }
    }else{
        return 'это не объект';
    }

    return result;
}

function printPropertyObject2(obj) {
    var result='';

    if((typeof obj === typeof {})){
        result = Object.getOwnPropertyNames(obj);

    }else{
        return 'это не объект';
    }

    return result;
}
