async function makeCall(){
    return new Promise((resolve) => {
        setTimeout(function(){
          resolve(1);
        },1000);
    })
}



async function makeCall2(){
    return new Promise((resolve) => {
        setTimeout(function(){
          resolve(2);
        },2000);
    })
}


async function sequentialStart(){
    let result1 = await makeCall();// wait for the result and then move to next
    console.log(result1);
    let result2 = await makeCall2();
    console.log(result2); 
}

sequentialStart();
console.log("N0t waiting");




async function concorrentStart(){
    const result1 = makeCall();// dont wait for the result  move to next
    console.log(result1);
    const result2 = makeCall2();
    console.log(result2); 
    console.log(await result1)// waith here;
    console.log(await result2)
}

concorrentStart();



//wait for the parallel async function to complete.
async function  parallelWait(){
       
    await Promise.all([(async () => console.log(await makeCall()))(),(async () => console.log(await makeCall2()))() ]);
}

parallelWait();



