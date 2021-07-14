//prototype 
//Every object is build by a function call and each contructor call makes a object linked to its own prototype.

class Radio {
    constructor(){

    }

    play(){

    }

    changeBand(){

    }

    search(){

    }

    power(){

    }
}

//new function are added to exsisting class with prototype
Radio.prototype.playGame = function(){

}

var obj = new Radio();

//////////////////////////////////////////////////////
//Object the create will create the prototype linkage

var a = {a: 1};
// a ---> Object.prototype ---> null

var b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (inherited)

var c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

var d = Object.create(null);
// d ---> null
console.log(d.hasOwnProperty);
// undefined, because d doesn't inherit from Object.prototype


////////////////////////////////////////////////////////////////////
// Inheritance in javascript via prototype.

function tv(){
    this.screen = "led"
}

tv.prototype = {
    playChannel : function(){
          console.log("Played")
    }
}


function SmartTv(){    
    this.musicPlayer = "boss"
}  
/// here we are assigning the prototype property from tv object
SmartTv.prototype = new tv();

SmartTv.prototype.playMusic = function(){
   console.log("music played");
}



var sma = new SmartTv();
sma.playMusic();
sma.playChannel();








