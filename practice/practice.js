// // // CREATING A PROMISE 
// // let promise = new Promise ((resolve , reject )=>{
// //     console.log("this is a promise");
// //     resolve(123)
// // })

// function getPromise (){
//     return new Promise ((resolve , reject)=>{
//             console.log("i am a promise");
//             //  
//             reject("some error occured")
//          })
// }

// let promise = getPromise()

// // in case of resolving  following is printed 
// promise.then((res)=>{
//     console.log("the promise was resolved" , res);
// })

// // in case of rejection following is printed 
// promise.catch((err)=>{
//     console.log("the promise was rejected" , err);
// })

// const async1 = ()=>{
//     return new Promise ((resolve , reject)=>{
//         setTimeout(()=>{
//             console.log("data1"); //jab tak setTimeout does not print hello , untill then the promise state is pending 
//             resolve("success") // once hello is printed after 4 sec, the promise state changes to fulfilled with the rsult "success"
//         }, 4000)
//     })
// }//this func acts as an API which does the work of fetching data

// const async2 = ()=>{
//     return new Promise ((resolve , reject)=>{
//         setTimeout(()=>{
//             console.log("data2"); //jab tak setTimeout does not print hello , untill then the promise state is pending 
//             resolve("success") // once hello is printed after 4 sec, the promise state changes to fulfilled with the rsult "success"
//         }, 4000)
//     })
// }



// console.log("fetching data 1....");
// let p1 = async1()
// p1.then((res)=>{
//     console.log(res);
// })


// console.log("fetching data 2....");
// let p2 = async2()
// p2.then((res)=>{
//     console.log(res);
// })


// ----------------------------------------------------------------------------------------------------------------

// PROMISE CHAINING

//same asnyc1 and async2 with chaining of promise

// const async1 = ()=>{
//     return new Promise ((resolve , reject)=>{
//         setTimeout(()=>{
//             console.log("data1"); //jab tak setTimeout does not print hello , untill then the promise state is pending 
//             resolve("success") // once hello is printed after 4 sec, the promise state changes to fulfilled with the rsult "success"
//         }, 4000)
//     })
// }//this func acts as an API which does the work of fetching data

// const async2 = ()=>{
//     return new Promise ((resolve , reject)=>{
//         setTimeout(()=>{
//             console.log("data2"); //jab tak setTimeout does not print hello , untill then the promise state is pending 
//             resolve("success") // once hello is printed after 4 sec, the promise state changes to fulfilled with the rsult "success"
//         }, 4000)
//     })
// }

// console.log("fetching data1 ....");
// let p1 = async1()
// p1.then((res)=>{
//     console.log("fetching data2 ....");
//     let p2 = async2()
//     p2.then((res)=>{})
// })
//this is chaining of promises where .then()of one promise is written inside of another one.


// ----------------------------------------------------------------------------------------------------------------

// ASYNC - AWAIT

function getData(data){
    return new Promise ((resolve , reject)=>{
        setTimeout(()=>{
            console.log(`data ${data} is fetched`);
            resolve("success");
        } , 3000)
    })
}

async function getAllData(){
    console.log("fetching data 1 ...");//we get this after0s
    await getData(1);// we get this after 3s
    console.log("fetching data 2 ..."); // we get this after 3s
    await getData(2);//we get this after 6s
    console.log("fetching data 3 ...");//we get this after 6s
    await getData(3);//we get this after 9s
}

getAllData();

// in this way all three data ie 1,2,3 will be called from the getData function, now that await is used, untill and unless await getData(1) is not finished next line will not be executed


