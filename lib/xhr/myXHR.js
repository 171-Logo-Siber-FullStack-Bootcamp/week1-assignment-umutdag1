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

        return new Promise((resolve, reject) => {

            // Handling HTTP After Request Is Done
            classThis.#xhr.onload = function () {
                if (classThis.#xhr.readyState === classThis.#xhr.DONE) {
                    const status = classThis.#xhr.status;
                    const responseText = classThis.#xhr.responseText;
                    const response = JSON.parse(responseText);

                    if (status >= 200 && status < 300) {
                        classThis.#response.status = status;
                        classThis.#response.data = response;
                        classThis.#response.error = null;
                        resolve(classThis.#response); // Successful Response Resolve : { status, data, error }
                    } else {
                        classThis.#response.status = status;
                        classThis.#response.data = null;
                        classThis.#response.error = httpStatus[`${status}_NAME`];
                        reject(classThis.#response); // UnSuccessful Response Reject : { status, data, error }
                    }
                }
            }

            // Handling non-HTTP error
            classThis.#xhr.onerror = function () {
                classThis.#response.status = 500;
                classThis.#response.data = null;
                classThis.#response.error = httpStatus[`500_NAME`];
                reject(classThis.#response); // UnSuccessful Request Reject  : { status, data, error }
            }

            // Make a Request
            classThis.#xhr.send(classThis.#data);
        })
    }
}

export default myXHR;
