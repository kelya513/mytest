'use strict';

function arrayTask15() {
    const color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
    const o = ["th","st","nd","rd"];

    console.log(`исходный массив color ${color}`);
    // console.log(`исходный массив o ${o}`);

    printOrdinalColor(color, o);

}

function printOrdinalColor(colorArr, oArr) {
    for(let i=0; i < colorArr.length; i++){
        if( i < 3 ){ //if(i % 100 < 3){
            console.log(`The ${i + oArr[i+1]} choice is ${colorArr[i]}`);
        }else {
            console.log(`The ${i + oArr[0]} choice is ${colorArr[i]}`);
        }
    }
}
