'use strict';

//конструктор для цилиндра
// function Cylinder(height, radius) {
//     this.height = height;
//     this.radius = radius;
//     this.volume= function() { //метод для вычисления объема
//         return (Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(4);
//     }
// };

class Cylinder {

    constructor(height, radius) {
        this.height = height;
        this.radius = radius;
    }

    volume() { //метод для вычисления объема
        return (Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(4);
    }

}

function objectTask5() {
    //создаем новый объект
    let cylinder = new Cylinder(10, 5);
    alert(`объем цилиндра: ${cylinder.volume()}`);
}