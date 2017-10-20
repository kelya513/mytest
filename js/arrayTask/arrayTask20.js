'use strict';

function arrayTask20() {
    var arr=[], size;
    size = Math.floor(Math.random() * 9) + 7;
    for (var i = 0; i < size; i++) {
        var rand = Math.floor(- 5.5 + Math.random() * 26);
        arr.push(rand);
    }
    arr.push(arr[Math.floor(size/2)]);

    console.log(`исходный массив ${arr}`);
    console.log(`дубликаты ${findDuplicate(arr)}`);

}


function findDuplicate(arr) {
    return arr.filter( (value, index, self)=>{ return self.indexOf(value) !== index;});
}


