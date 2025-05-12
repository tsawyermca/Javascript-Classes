//Define a class named "car" that represents a vehicle

class Car{
    constructor(){
        make: this.make
        model: this.model
        speed: this.speed
    }

    details(){
        console.log(`This Car's make is ${this.make}, and its model is ${this.model}`)
    }

    accelerate(mph){
        this.speed += mph;
        console.log(`This car is going ${this.speed} mph`);
    }

    brake(mph){
        this.speed -= mph;
        console.log(`This car is going ${this.speed} mph`)
    }
}

let firstCar = new Car();

firstCar.make = "Chevrolet";
firstCar.model = "Impala";
firstCar.speed = 0;
firstCar.details();
firstCar.accelerate(15);
firstCar.brake(10);
//You can provide new constructor values
//firstCar.tires = 0;

console.log(firstCar);

let secondCar = new Car();

secondCar.make = "Ford"
secondCar.make = "Taurus"
console.log(secondCar);


class Employee{
    //The constructor method initializes the properties "name", "title", and "catchphrase"
    constructor(name, title, catchPhrase){
        this.name = name;
        this.title = title;
        this.catchPhrase = catchPhrase;
    }

    introduce(){
        console.log(`Hi, I am ${this.name}, I am a ${this.title}, ${this.catchPhrase}`);
    }
}

let spongebob = new Employee("Spongebob", "Fry Cook", "I'm Ready")
spongebob.introduce();
let squidward = new Employee("Squidward", "Cashier", "I hate everyone")
squidward.introduce();
console.log(spongebob);
console.log(squidward);