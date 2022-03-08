 //Classes
//Syntax

class MyFirstClass {
    //Constructor is executed when there's a new instance
   constructor(parameters){

   } 
   method1(){

   }
   method2(){

   }
}
console.log(typeof MyFirstClass);

console.dir(MyFirstClass);

class CarModel {
    //constructor is executed as soon as there's a new instance
    constructor(engine) {
    console.log('constructor is executed!');
    this.engine = engine;
    }
    startEngine() {
        console.log('Engine is started');
    }
    stopEngine() {
        console.log('Engine is stoped');
    }
    autoParking() {
        console.log('The car is parked');
    }
}
const myFirstCar = new CarModel('3000cc');  //Instance 
//Instances are totally independent for each others and the class

myFirstCar.startEngine();
myFirstCar.autoParking();
myFirstCar.stopEngine();

console.dir(myFirstCar);
console.dir(CarModel);

class CourseCreator {
    constructor(companyName) {
        this.companyName = companyName;
    }
    createCourse() {

    }
    getCompanyName() {
        console.dir(this.companyName);
    }
    updateCompanyName(newCompanyName) {
        this.companyName = newCompanyName;
    }
    showMeThis() {
        console.dir(this);
    }
    printRoles() {
        console.dir(this.roles);
    }
    
}
const essence = new CourseCreator('Essence');

console.dir(essence);

essence.getCompanyName();

console.dir(CourseCreator);

const testCompany = new CourseCreator('Anne & Co')

console.dir(testCompany);

testCompany.updateCompanyName('DCI');

console.log(testCompany);

//show me this
console.log('this keyword');
essence.showMeThis();
testCompany.showMeThis();

/////////

testCompany.printRoles();
console.dir(testCompany.roles);

//////
//Prototype of the Classes
//Only methods places on the prototype of the class.
//Properties doesn't stay on the prototype.Directly places on the instances.
//Prototype of classes get deeply cloned to all individual instances.

console.log(CourseCreator.prototype);

///Extending Classes

class MyGenerator extends CourseCreator {
    crossCheck(){
        console.log(true);
    }
}
const theNextGen = new MyGenerator();
theNextGen.printRoles

//////

console.dir();