const pie = 3.14;
const array = [1,2,3,4];
try {
    pie = 333; 
} catch (error) {
    console.log(error);
}

try {
     array.push(5);   
     console.log(array);
} catch (error) {
    console.log(error);
}




