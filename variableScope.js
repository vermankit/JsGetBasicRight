function printScope() {
  b = 1; //This is global scope
  var a = 2; //This is funtion scope
  let c = 3;  //This is block scope 
  return function innerPrint() {
    let a = 1;   //This is block scope 
    let c = 4;   //This is block scope 
  }

}
printScope()();

console.log(typeof (a));//Undefined
console.log(b);//1
console.log(typeof (c));//undefined


////Example 2 

var radio = "boat";

function changeRadio() {
  var radio = "onido"; //This radio has scopo of changeRadio only excluding the scope of changeRadio2
  function changeRadio2(radio) {//this radio has scopc of changeradio2 only
    radio = "nokia";
    tv = "mi"; // this has a global scope as there is no such vairable in scope of changeRadio2 ,ChangeRadio function 
    console.log(radio);
  }
  console.log(radio);
  changeRadio2();
}

changeRadio();

try {
  changeRadio2();
} catch (error) {
  console.log(error.message);
}



console.log(radio); // this will print boat
console.log(tv); // this will print mi
console.log(error);// this will throw error as catch scope is block