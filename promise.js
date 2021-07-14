//Promise have 3 state pending fulfilled rejected.
//it is just a promise of sucess or failure.

const promise = new Promise((res,rej) => {     
   setTimeout(() => res(100),20000);
});

//This is a non blocking code as here this will run in background by web workers as this is promise which will be
// resolved as some point later.
promise.then((data) => { console.log(data); return 10;},() => {})
.then((data) => {console.log(data)},() => {})
.catch(() => { console.log("error")})
.finally(() => { console.log("finally")})

console.log(promise); // here we can check the state of promise it is pending
console.log("No blocked"); // 


//////////////////////////////////////////
//Wait for all promise to resolve


const promise1 = new Promise((res,rej) => {     
    setTimeout(() => res(100),20000);
 });

 
 const promise2 = new Promise((res,rej) => {     
    setTimeout(() => res(200),5000);
 });

 
 const promise3 = new Promise((res,rej) => {     
    setTimeout(() => res(300),10000);
 });
 
//all of them should be resolved
Promise.all([promise1,promise2,promise3]).then((data) => console.log(data));

 //any of them should be resolved
 Promise.any([promise1,promise2,promise3]).then((data) => console.log(data));

//Get the fastest promise to be resolved.
 Promise.race([promise1,promise2,promise3]).then((data) => console.log(data));


const promise4 = Promise.resolve(3);
const promise5 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise4, promise5];

//This provide access to whole object
Promise.allSettled(promises).
  then((results) => results.forEach((result) => console.log(result.status)));