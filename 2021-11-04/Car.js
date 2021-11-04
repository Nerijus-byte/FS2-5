class Car {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getIntroduction() {
        return `${this.make} ${this.model}`;
    }
    getAge() {
        let carAge = (new Date).getFullYear() - this.year;
        return carAge <= 10 ? '10 metų arba naujesnis' : '11 metų arba senesnis';
    }
}

