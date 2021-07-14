//function sum(a,b,c) => sum(a)(b)(c) this is currying

function sum(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}



console.log(sum(2)(3)(5));

