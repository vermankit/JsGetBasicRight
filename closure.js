var clo =  function(){
    var data = 20;
    return function(b){
        return  b + data;
    }
}

var fn = closure();

console.log(fn(20));  // here output will be 40 
//
// So as we can see function returned by clo funciton is executing outside the lexical scope of 
// clo but remember the value of data variable .
// This behaviour is called closure.