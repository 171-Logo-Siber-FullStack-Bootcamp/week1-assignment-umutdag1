import myXHR from "./lib/xhr/myXHR.js"; // Using For Making a HTTP Request

const url = "https://jsonplaceholder.typicode.com/users";

const request = new myXHR("GET", url); // Creating HTTP Request Object

request.setHeader("Content-Type", "application/json;charset=UTF-8"); // Setting Request Header
request.setHeader("Access-Control-Allow-Origin", "*"); // Setting Request Header

request.fetchResponse() // Making a HTTP Request and Fetching HTTP Response On Promise
    .then((data) => { // If Request is Done Successfully
        console.log(data); // JSON with NotNull Data
    })
    .catch((err) => { // If Request is Either Down or Done Unsuccessfully
        console.log(err); // JSON with NotNull Error
    });