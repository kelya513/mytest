'use strict';


function allKeysPropertyObj(obj) {

    if((typeof obj === typeof {}) || (typeof obj === typeof (function () {}))){
        var keys = [];
        for (var key in obj){
            keys.push(key);
        }
        return keys;
    }else{
        return 'это не объект';
    }
}

function objectTask13() {
    function Student(name) {
        this.name = name;
    }
    Student.prototype.rollno = true;
    console.log(allKeysPropertyObj(new Student('Sara')));
}
