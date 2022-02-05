import { XMLHttpRequest } from "xmlhttprequest"; // Using For Creating a HTTP Request Object
import httpStatus from "http-status"; // Using For Getting HTTP Status Features

const myXHR = class XHR {
    #xhr = null; // Private
    #data = null; // Private
    #response = null; // Private

    // Public
    constructor(method, url) {
        this.#xhr = new XMLHttpRequest(); // Creating XMLHttpRequest Object
        this.#response = {}; // Creating Response Object

        this.#setOptions(method.toUpperCase(), url); // Setting XHR Options
    }

    // Private
    #setOptions(method, url) {
        this.#xhr.open(method, url, true); // Opening Asynchoronous Request
        this.#xhr.withCredentials = true; // Enable CORS-Policy
    }

    // Public
    setHeader = (key, val) => {
        this.#xhr.setRequestHeader(key, val); // Setting Headers
    }

    // Public
    setData = (data) => {
        this.#data = data; // Setting Post Data
    }

    // Public
    fetchResponse = () => {
        const classThis = this; // Pointing Class Object

        return new Promise((resolve, reject) => { // Handling Asynchoronous Processes  

            // Handling HTTP After Request Is Done
            classThis.#xhr.onload = function () {
                if (classThis.#xhr.readyState === classThis.#xhr.DONE) { // If Request is Done
                    const status = classThis.#xhr.status; // HTTP Response Status Code
                    const responseText = classThis.#xhr.responseText; // HTTP Response Text
                    const response = JSON.parse(responseText); // Parsing HTTP Response Text to JSON

                    if (status >= 200 && status < 300) { // If HTTP Response Status is in Success Situation
                        classThis.#response.status = status; // Setting Response Status
                        classThis.#response.data = response; // Setting Response Data
                        classThis.#response.error = null; // Setting Response Error Data

                        resolve(classThis.#response); // Successful Response Resolve : { status, data, error }
                    } else {
                        classThis.#response.status = status; // Setting Response Status
                        classThis.#response.data = null; // Setting Response Data
                        classThis.#response.error = httpStatus[`${status}_NAME`]; // Setting Response Error Data
                        reject(classThis.#response); // UnSuccessful Response Reject : { status, data, error }
                    }
                }
            }

            // Handling Non-HTTP Error When Request is Either Down or Undone
            classThis.#xhr.onerror = function () {
                classThis.#response.status = 500; // Setting Response Status
                classThis.#response.data = null; // Setting Response Data
                classThis.#response.error = httpStatus[`500_NAME`]; // Setting Response Error Data

                reject(classThis.#response); // UnSuccessful Request Reject  : { status, data, error }
            }

            // Make a HTTP Request
            classThis.#xhr.send(classThis.#data);
        })
    }
}

export default myXHR; // Opening myXHR Class to Outside Environment
