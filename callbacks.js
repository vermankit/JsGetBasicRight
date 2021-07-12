//Callback
//The main purpose of callback function is to execute when some operation is done like api call or any other operation
//these function are passed as argument to function 
//In the below example the after the make call function completes execution call back function is called to logs.


function logOnConsole(data){
    console.log(data);
}

function makeCall(){
    return 100;
}

function getData(callback){

  var result = makeCall(); 
  callback(result);
}

getData(logOnConsole);