'use strict';

function arrayTask12() {
    var arr=[], size;
    size = Math.floor(Math.random() * 9) + 5;
    for (var i = 0; i < size; i++) {
        var rand = Math.random() * 20;
        rand = Math.floor(rand);
        arr.push(rand);
    }

    var temp = new ClassForTask12(arr);

    console.log(`исходный массив ${arr}`);
    console.log(`сума: ${temp.sum()}`);
    console.log(`умножение: ${temp.product()}`);

}

class ClassForTask12 {

    constructor(arr) {
        this.arr = arr;
    }

    sum() {
        return this.arr.reduce((sum, a) => {return sum += a});
    }

    product(){
        return this.arr.reduce((pow, a) => {return pow *= a},1);
    }
}
