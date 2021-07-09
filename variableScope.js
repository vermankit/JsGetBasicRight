function printScope(){ 
     b = 1; //This is global scope
     var a = 2; //This is funtion scope
     let c = 3;  //This is block scope 
    return function innerPrint(){
      let a = 1;   //This is block scope 
      let c = 4;   //This is block scope 
    }    
    
}
printScope()();

console.log(typeof(a));//Undefined
console.log(b);//1
console.log(typeof(c));//undefined
