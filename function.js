//function expression

var getSpeaker = function speaker(){
    console.log("Mi");
}

try{
    speaker(); //This will throw  error as scope is in getSpeaker container.
}
catch(error){
    console.log(error.message)
}

getSpeaker()

console.log(error);//this will throw error as catch scope is block