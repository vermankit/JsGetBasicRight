//Every function while executing has a ref to its executing context called this.
//this is defined at runtime and it depends on how the function is called.


function checkThis(){
    console.log(this);
}

checkThis();//this refer to the global object


var obj = {
    data : "junk",
    check : checkThis
}

obj.check();//this refer to the obj object



///use strict
function strict(){
    'use strict';
    console.log(this); // this is undefined in strict mode.
}


strict()


//Class context
class Radio{

    constructor(){
      var proto = Object.getPrototypeOf(this);
      console.log(Object.getOwnPropertyNames(proto));
    }

    getName(){
      //this will be added to prototype the current class
    }

    getPrice(){

        //this will be added to prototype the current class
    }

    static getType(){
        //static will be not added to prototype the current class
    }
}

var radioObj = new Radio();

////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//bind can be used to reuse the function from other object

const radio = {
    channel : '98',
    playRadio : function(){
        console.log(`${this.channel}`);
    }
}

const mobile = {
    channel : '105'
}

var play = radio.playRadio.bind(mobile) // here bind return a new method with mobile binded to this so it can play
                                        //Fm as well (play method is resued.)
play();


// apply and call
//

const person = { 
      printName : function(){
          console.log(this.firstName);
          console.log(this.lastName);
      }
}

let person1 = {
    firstName : "John",
    lastName  : "moree"
}

let person2 = {
    firstName : "sam",
    lastName  : "andy"
}

person.printName.call(person1);  //we are setting this as person1
person.printName.call(person2);  //we are setting this as person2

person.printName.apply(person1);  //we are setting this as person1
person.printName.apply(person2);  //we are setting this as person2


//Diff between call and apply is call take argument seperated by , but apply takes in form of array





