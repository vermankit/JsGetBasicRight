
//Type 1
var tv = new Object();
tv.screentype = "hd";
tv.manufacturer = "onida";
tv.price = 200;
console.log(tv);

//Type 2
var radio = {
    brand : "onida",
    price : 200
}

console.log(radio);

//Object Constructor
function Course(name,duration){
    this.name = name;
    this.duration = duration;
}

console.log(new Course("Learns JS",5))