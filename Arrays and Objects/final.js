//Methods
//Syntax & Concept

const test = false;

const myObject = {
    drink:'coke',
    getDrink:function (){
        if (test) {
       const preferedDrink = prompt(`What would you like to drink?`)
       alert(`Here you're your ${preferedDrink}`)
    }else {
        console.log(this.drink);
        //console.log(this === window);//true in arrow func,false in function keyword
        //drink is not defined
        //this.drink is undefined if the method defined as arrow function
        //this.drink works just if method defined with function keyword
    }
    }
}
console.log(myObject.drink);
console.log(myObject.getDrink);

//getDrink(); is not defined
myObject.getDrink();

//Parent scope variables are reachable from methods
//*this* keyword in general is called as context
