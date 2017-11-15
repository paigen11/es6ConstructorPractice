const Car = require('./car.js');

var hyundai = new Car("Hyundai", "Sonata", "Dark Grey", false, 35);
var lexus = new Car("Lexus", "IS350 F Sport", "White", true, 80);

lexus.accelerate(15);
hyundai.decelerate(5);

console.log(hyundai);
console.log(lexus);

console.log(lexus.toString());
console.log(hyundai.toString());