'use strict';

class ClassForTask13 {

    constructor() {
        this.arr = [];
    }

    add(val) {
        return this.arr.push(val);
    }
    getAll(){
        return this.arr;
    }
}


var arrayForTask13= new ClassForTask13();

function arrayTask13_add(val) {
    arrayForTask13.add(val);
    document.getElementById("task_13_disp").style.display = 'none';
}

function arrayTask13_display() {
    var str = '';
    var arr= arrayForTask13.getAll();
    for (var i = 0; i < arr.length; i++)
    {
        str += `Element ${i}  =  ${arr[i]}<br/>`;
    }
    document.getElementById("task_13_disp").innerHTML = str;
    document.getElementById("task_13_disp").style.display = 'block';
}
