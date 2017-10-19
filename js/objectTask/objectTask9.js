'use strict';

//конструктор для цилиндра
// function Circle(height, radius) {
//     this.height = height;
//     this.radius = radius;
//     this.volume= function() { //метод для вычисления объема
//         return (Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(4);
//     }
// };

class Circle {

    constructor(radius) {
        this.radius = radius;
    }

    area() {
        return (Math.PI * this.radius * this.radius).toFixed(5);
    }

    perimeter() {
        return (2*Math.PI*this.radius).toFixed(5);
    }

}

function objectTask9() {
    //создаем новый объект
    let circle = new Circle(5);
    alert(`площадь круга: ${circle.area()}`);
    alert(`периметр круга: ${circle.perimeter()}`);
}