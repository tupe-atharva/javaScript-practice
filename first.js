
// Q. PRINT ALL THE EVEN NUMBERS FROM 1-100.

// console.log();
// for(let i=0; i<=100; i++ ){
//     if(i%2===0){
//         console.log(i);
//     }
    
// }

// --------------------------------------------------------------------------------------------------

//Q. NUMBER GUESSING GAME.

// let num=25;

// let guess=prompt("guess a number");

// while (guess!=num){
//    guess=  prompt("guess again")
// }
// console.log("congrats");

// --------------------------------------------------------------------------------------------------

// Q.CREATE A USERNAME BY THE NAME ENTERED BY USER IN THE PROMPT.

// name=prompt("enter your full name");
// length=name.length;
// username= "@" + name + length;
// console.log(username);


// --------------------------------------------------------------------------------------------------

// Q. FROM A GIVEN ARRAY OF MARKS, CALCULATE THE AVERAGE.

// let marks = [85,97,44,37,76,60]
// sum=0;
// for(i=0 ; i<marks.length ; i++){
//     sum=sum+(marks[i])
// }
// let avg=sum/marks.length;
// console.log(marks.length);
// console.log("The average marks are ",avg);

// --------------------------------------------------------------------------------------------------

// Q. FROM A GIVEN ARRAY OF PRICES, APPLY A 10% DISCOUNT AND RETURN THE UPDATED PRICES.

// let price = [250, 645, 300, 900, 50]
// console.log(`Orignal Price : ${price}`);
// for(let i=0 ; i<price.length ; i++){
//     price[i]=price[i]*0.9;
//     // console.log(`The price of item ${i+1} = ${price[i]}`);
// }
// console.log(`The price of items after 10% discount is : ${price}`);


// --------------------------------------------------------------------------------------------------

// ARRAY METHODS.

// demo=[12, 23, 34, 45];
// demo.push(44);
// console.log(demo);
// demo.pop();
// console.log(demo);
// console.log(demo.toString());
// demo1=["atharva","avinash","tupe"]
// console.log(demo.concat(demo1));


// let companies = ["IBM" , "Microsoft" , "Google" ,"Bloomberg" , "Uber"]
// console.log(companies.shift());
// console.log(companies);
// companies.splice(3,1,"ola");
// console.log(companies);
// companies.push("amazon");
// console.log(companies);

// --------------------------------------------------------------------------------------------------

// ARROW FUNCTIONS.
// const mul =(a,b)=>{
//     return a*b;
// }
// console.log(mul(2,5));

// --------------------------------------------------------------------------------------------------

// VOWEL CHECKING IN ENTERED STRING.


// function vowelCheck(str){
//     let count=0;
    
//     for (let i of str ){
        
//         if(i==='a' ||i==='e' ||i==='i' ||i==='o' ||i==='u'  ){
//             count ++;
//         }
//     }
    // console.log(`There are ${count} vowels in the entered string`);  
// }

// let string=prompt("Enter a string");
// vowelCheck(string);


// (str)=>{

//     let count=0;
    
//     for (let i of str ){
        
//         if(i==='a' ||i==='e' ||i==='i' ||i==='o' ||i==='u'  ){
//             count ++;
//         }
//     }
//     console.log(`There are ${count} vowels in the entered string`);

// }
// let string=prompt("Enter a string");
// vowelCheck(string);

// --------------------------------------------------------------------------------------------------

// Q. FROM A GIVEN ARRAY OF NUMBERS, PRINT THE SQUARE OF EACH NUMBER USING THE 'FOR EACH FUNCTION'.

// let arr= [1,2,3,4,5];
// arr.forEach((val, idx) =>
//     {
//     console.log(`The square of ${val} at index ${idx} is ${val*val}`);
// })

// using call back function
// let array = [1,2,3,4,5];

// let calcSquare = (arr)=>{
//     console.log(`The square of ${arr} is ${arr*arr}`);
// }

// array.forEach(calcSquare);

// --------------------------------------------------------------------------------------------------

// Q. FROM A GIVEN ARRAY OF STUDENT'S MARKS, FILTER OUT THE MARKS GREATER THAN 90 USING FILTER METHOD OF ARRAY

// marks = [100,97,40,67,98];

// let highMarks = marks.filter((val)=>{
//     return val>90;
// })

// console.log(highMarks);


//Q. Take a number n as input from user. Create an aaray from 1-n. Calculate sum and product of 1-n using the reduce method.

// let n = prompt("enter a number");
// let arr =[];

// for (let i=0 ; i<n ; i++){
//     arr[i] = i+1;
// }
// console.log(arr);

// let arrSum = arr.reduce((sum, curr) =>{
//     return sum + curr;
// })

// console.log(`The sum of array elements is ${arrSum}`);

// let arrMul = arr.reduce(( mul, curr) =>{
//     return mul * curr;
// })

// console.log(`The product of array elements is ${arrMul}`);


// --------------------------------------------------------------------------------------------------


// Q. create a h2 tag in html and append it using javascript
// first access the element using querySelector and the append it using the innerText property


// let h2 = document.querySelector("h2");
// console.dir(h2);
// console.log(h2);
// h2.innerText = h2.innerText + " " + "from atharva tupe";


// --------------------------------------------------------------------------------------------------

// Q.Create 3 divs with common class ie box and add some unique text in them using JS
// first access the divs using querySelector and then add the innerText by accesing individual elements of the nodelist by using indices as done in arrays then using innerText property set a unique text for each div

// let box = document.querySelectorAll(".box");
// console.log(box);
// box[0].innerText = "hello";
// box[1].innerText = "hey";
// box[2].innerText = "hi";

// same thing can be done using for of loop too, by accessing individual element of the nodelist and changing them

// --------------------------------------------------------------------------------------------------

// Q. Create a new element 'button'- click me using DOM of JS and red background color with white text

// let newButton = document.createElement("button")
// newButton.innerText = "click me ";
// newButton.style.backgroundColor= "red";
// newButton.style.color = "white";
// let div = document.querySelector("div");
// div.after(newButton);

// --------------------------------------------------------------------------------------------------

// Q. Create a paragraph tag in html and give it some class and styling. Next create a new class in CSS and append it to the paragraph tag

// let p = document.querySelector("p")
// console.log(p.classList);
// classList gives a list of all the classes attached to a particular element
// use classList.add("class name") - to add a new class to the list of existing classes
// use classList.remove("class name") - to remove an existing class from the list of existing classes
// p.classList.add("new")


// --------------------------------------------------------------------------------------------------

// Handling event using JS

// access element first
// let btn = document.querySelector("button")

// use node.event = ()=>{
    // func to perform when event is triggered}
// btn.onclick = ()=>{
//     console.log("the button was clicked");
// }


// let box = document.querySelector("div")
// box.onmouseover = ()=>{
//     console.log("the box is hovered");
// }


// --------------------------------------------------------------------------------------------------

// Creating an event object and accesing it's different properties

// let btn = document.querySelector("button")
// btn.onclick = (e)=>{
//     console.log("the button was clicked");
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX , e.clientY);

//  }

// --------------------------------------------------------------------------------------------------

// EVENT LISTENERS - 3RD WAY TO HANDLE EVENTS

// let btn = document.querySelector("button")
// // ADDING EVENT LISTENERS
// let handler = ()=>{
//     console.log("the button was clicked");
// }
// btn.addEventListener("click" ,handler )
// MANY SUCH FUNCTIONS CAN BE ADDED USING EVENT LISTENER AND ALL WILL WORK WITHOUT THE LATEST ONE OVERIDING THE OTHER

// --------------------------------------------------------------------------------------------------

// DELETING EVENT LISTERNERS

// btn.removeEventListener("click",handler)

// here fucntion wont be removed as when we pass the definition of the function which has to be deleted, the compiler treats it as a new function
// so in such cases save the function is a variable, and refer to that variable while creation and deletion as well

// --------------------------------------------------------------------------------------------------
// Q. Create a button to change the mode to light and dark

// let body = document.querySelector("body")

// let lightMode = () =>{
//     body.style.backgroundColor = "white";
//     btn.innerText = "Light Mode" ;
//     }

// let darkMode = () =>{
//     body.style.backgroundColor = "black";
//     btn.innerText = "Dark Mode" ;
//     }

// let btn = document.querySelector("button")
// btn.addEventListener("dblclick", lightMode)
// btn.addEventListener("click", darkMode)

// USING IF-ELSE LOOP

// let btn = document.querySelector("button")
// let currMode = "light";

// btn.addEventListener("click" , ()=>{
//     if(currMode==="light"){
//         currMode="dark"
//         document.querySelector("body").style.backgroundColor = "Black";
        
//     }
//     else{
        
//         currMode="light";
//         document.querySelector("body").style.backgroundColor = "White";
//     }

// })

// currMode is simply a variable, change its value in both if and else blocks to execute the one that matches on next click
let btn = document.querySelector("button")
let hover = ()=>{
    console.log("hovered over button");
//    btn.style.display = "none";
}
btn.addEventListener("mouseover" , hover)
// hello


