function functionTask9() {

    alert('тип агрумента {} это ' + myTypeOf({}));
    alert('тип агрумента [1,2] это ' + myTypeOf([1,2]));
    alert('тип агрумента true это ' + myTypeOf(true));
    alert('тип агрумента function(){} это ' + myTypeOf(function(){}));
    alert('тип агрумента 45 это ' + myTypeOf(45));
    alert('тип агрумента \'test string\' это ' + myTypeOf('test string'));
    alert('тип агрумента undefined это ' + myTypeOf(undefined));

}

function myTypeOf(type){
    var rusType='неопределенно';

    var typeArr = {
        'object':'объект',
        'boolean':'логический тип',
        'function':'Функция',
        'number':'цифра',
        'string':'строка',
        'undefined':'значение не присвоено'};

    for (var key in typeArr) {
        if ((typeof type) === key){
            rusType = typeArr[key];
        }
    }

    return rusType;

}