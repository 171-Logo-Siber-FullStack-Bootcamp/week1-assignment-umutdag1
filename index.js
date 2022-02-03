import myXHR from "./lib/xhr/myXHR.js"; // Using For Making a HTTP Request

const url = "https://jsonplaceholder.typicode.cOm/users";

const request = new myXHR("GET", url); // Creating HTTP Request Object

request.setHeader("Content-type", "application/json"); 
request.setHeader("Access-Control-Allow-Origin", "*");

request.fetchResponse() // Fetching HTTP Response On Promise
    .then((data) => {
        console.log(data); // JSON Data
    })
    .catch((err) => {
        console.log(err); // JSON Error
    });