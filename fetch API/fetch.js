const URL = "https://cat-fact.herokuapp.com/facts";

let getFacts = (async()=>{
    let response = await fetch(URL);
    // console.log(response);
    let data = await response.json();//.json method returns a promise so use the keyword 'await'
    console.log(data[3].text);//this fact returned by the API can be displayed on the website 
})();
