'use strict';

function arrayTask22(){
    var arr1=[],arr2=[], size1, size2;
    size1 = Math.floor(Math.random() * 9) + 7;
    size2 = Math.floor(Math.random() * 9) + 7;
    for (let i = 0; i < size1; i++) {
        let rand = Math.floor(- 5.5 + Math.random() * 26);
        arr1.push(rand);
    }
    for (let i = 0; i < size2; i++) {
        let rand = Math.floor(- 5.5 + Math.random() * 26);
        arr2.push(rand);
    }

    console.log(`исходный массив1 ${arr1}`);
    console.log(`исходный массив2 ${arr2}`);
    console.log(`result_1: ${createNewArrayNotDuplicate(arr1, arr2)}`);
    console.log(`result_2: ${createNewArrayNotDuplicate2(arr1, arr2)}`);
}

function createNewArrayNotDuplicate(arr1, arr2) {
    var res  = [].concat(...arr1, ...arr2);
    return res.filter((value, index, self)=>{ return self.indexOf(value) === index;});

}

//второй способ
function createNewArrayNotDuplicate2(arr1, arr2) {
    var res =[];
    var temp = [].concat(...arr1, ...arr2);
    for(let val of temp){
        if(res.indexOf(val) === -1){
            res.push(val);
        }
    }

    return res;
}
