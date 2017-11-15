class Car {
    constructor(make, model, color, convertible, speed){
        this.make = make;
        this.model = model;
        this.color = color;
        this.convertible = convertible;
        this.speed = speed;
    }
    accelerate(extraSpeed){
        return this.speed += extraSpeed;
    }
    decelerate(lessSpeed){
        return this.speed -= lessSpeed;
    }
    toString(){
        return "This car's color is " + this.color + ', the make is ' + this.make + ', the model is ' + this.model
            + ', the speed is ' + this.speed;
    }
}

module.exports = Car;