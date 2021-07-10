function constantScope(arg){
    const pie = 3.14;
    if(arg){
        try {
            const pie = 3.1444;
            pie = arg;  //Reassigment of constant is not possible
        } catch (error) {
            console.log(error.message);
        }      
    }
    console.log(pie);
}

constantScope(2); // This will print error message then value of pie.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const array = [1,2,3,4];

function reassignArray(arr){
    try {
        array = arr;  //This will throw error as reassigment is not possible
   } catch (error) {
       console.log(error);
   } 
}

reassignArray([5,6,7,8]);

function pushArray(item){
    try {
        array.push(item); // this is possible as we are adding content not reassigning array
        array[1] = 200;   // this is possible as we are adding content not reassigning array
        console.log(array);
   } catch (error) {
       console.log(error);
   } 
}

pushArray(5);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

///////////////////////////////////Example 3/////////////////////////////////////////////////
const radio = {
    name : "boat"
}

try {
    radio.name = "carvaan";  
    radio.price = 300;
    //This is also possible as we are not reassigning to radio object
    console.log(radio);
} catch (error) {
    console.log(error);
}