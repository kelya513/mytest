'use strict';

function arrayTask30(){
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
    console.log(`result: ${newArrayNotDuplicate30(arr1, arr2)}`);
}


function newArrayNotDuplicate30(arr1, arr2) {
    var res =[];
    var temp = [].concat(...arr2, ...arr1);
    var temp_obj ={};

    for(var i=0; i < temp.length; i++){
        if (!temp_obj[temp[i]]){
            res.push(temp[i]);
            temp_obj[temp[i]] = 1;
        }
    }


    return res;
}
