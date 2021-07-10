//We can access the property of object by two ways

var laptop = {
    name : "Dell",
    price : 200
}


//Way 1  . notation
console.log(`Name - ${laptop.name}  Price - ${laptop.price}`);

//Way 2 [] brackets
console.log(`Name - ${laptop["name"]}  Price - ${laptop["price"]}`)
