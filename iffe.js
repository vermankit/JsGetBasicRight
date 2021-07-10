//immediatly invoked functon expression
var radio = "radio";

(function (){
    console.log(this);
    console.log(radio);
})();

//Iffe pattern can be used for modular pattern in order to mak public private members.

var musicPlayer = (function(){
    let volume; //Private properties
    let track;
    let power;   
     
    function increaseVolume(){
        volume++;
    }

    function changeTrack(){
        console.log("volumeChanges")
    }

    function turnOn(){
        power = true;
    }
    
    return {
        turnOn : turnOn,//Public methods
        changeTrack : changeTrack       
    }

})();

console.log(musicPlayer.changeTrack());