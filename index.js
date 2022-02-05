import myXHR from "./lib/xhr/myXHR.js"; // Using For Making a HTTP Request

const url = "https://jsonplaceholder.typicode.com/users";

const request = new myXHR("GET", url); // Creating HTTP Request Object

request.setHeader("Content-Type", "application/json;charset=UTF-8");
request.setHeader("Access-Control-Allow-Origin", "*");

request.fetchResponse() // Fetching HTTP Response On Promise
    .then((data) => {
        console.log(data); // JSON Data
    })
    .catch((err) => {
        console.log(err); // JSON Error
    });