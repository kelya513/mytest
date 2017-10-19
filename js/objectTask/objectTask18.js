'use strict';


function checkIsDOM(obj) {
    //Node.nodeType возвращает беззнаковое короткое целочисленное значение, представляющее тип узла.
    return !!(obj && obj.nodeType === 1);//ELEMENT_NODE	== 1
}

function objectTask18() {
    console.log(checkIsDOM(document.getElementsByClassName('block_object')[0]));
}
