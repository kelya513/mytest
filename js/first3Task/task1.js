/*1.Напиши функцию создания генератора sequence(start, step).
    Она при вызове возвращает другую функцию-генератор, которая при каждом вызове дает число на 1 больше, и так до бесконечности.
    Начальное число, с которого начинать отсчет, и шаг, задается при создании генератора. 
    Шаг можно не указывать, тогда он будет равен одному. Начальное значение по умолчанию равно 0.
    Генераторов можно создать сколько угодно.
    var generator = sequence(10, 3);
    var generator2 = sequence(7, 1);
    console.log(generator()); // 10
    console.log(generator()); // 13
*/
var example1 = sequence(10,3);
var example2 = sequence();

console.log('var example1 = sequence(10,3);');
console.log(example1());
console.log(example1());

console.log('var example2 = sequence();');
console.log(example2());
console.log(example2());


function sequence(start,step) {
    //Проверка начальных значений и установка заданных/дефолтных значений
    var mStart = (+start >=0 ) ? start : 0;
    var mStep = (+step >=0 ) ? step : 1;

    //Откат на один шаг, что бы в первый раз вывело начальное значение, согласно условию
    mStart -=mStep;

    // Возвращаемая ф-ция, что делает число на значение шага больше
    return function counterGenerator() {
        return mStart += mStep;
    };
}