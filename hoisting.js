//Function a put in to memory during compile phase.

startSpeaker();

function startSpeaker(){
    console.log("Speker started.")
}

///During the complile time this function will override the above function due to 
// top down compile.                            
function startSpeaker(){   
    console.log("Speaker 2")
}


/////////////////////////////////////////
//var hositing
//var declaration are hoisted not the value
console.log(a);
console.log(b);
var a = 2; //  at compile time a and b are put into memory but not the value value is assigned at runtime.
var b = 3;
console.log(a);
console.log(b);


//Why hoiting
//Recusvie call will not work if hoisting is not there

fa();

function fa()
{
    return fb();
}

function fb(){
    return fc();
}

function fc(){
    return 1;
}

