'use strict';


class ClockT8 {

    constructor() {
        this.cur_date = new Date();
        this.hours = this.cur_date.getHours();
        this.minutes = this.cur_date.getMinutes();
        this.seconds = this.cur_date.getSeconds();
    }

    run() {
        setInterval(this.update.bind(this), 1000);
    }

    update(){
        this.seconds+= 1;
        if (this.seconds >= 60)
        {
            this.minutes++;
            this.seconds= 0;
        }
        if (this.minutes >= 60)
        {
            this.hours++;
            this.minutes=0;
        }
        if (this.hours >= 24)
        {
            this.hours = 0;
        }
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }

}

function objectTask8() {
    //создаем новый объект
    let clock = new ClockT8();
    clock.run();

}