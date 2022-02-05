[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=6902368&assignment_repo_type=AssignmentRepo)
# week1-assignment

- XMLHttpRequest araştırılacak ve jsonplaceholder kullanılarak içerisindeki userlar console’a yazdırılacak.

## XMLHttpRequest Assignment - Week 1 (XMLHttpRequest Ödevi - Hafta 1)

This homework is done by umutdag1 for 171-Logo-Cyber-FullStack-Bootcamp - week 1's assignment.

(Bu ödev umutdag1 tarafından 171-Logo-Siber-FullStack-Bootcamp - hafta 1 ödevi için yapılmıştır.)

## Installation (Yükleme)

Use the git clone command to clone the project to local.

(Projeyi bilgisayara klonlamak için git clone komutunu kullanın.)

```bash
git clone https://github.com/171-Logo-Siber-FullStack-Bootcamp/week1-assignment-umutdag1
```

## Usage (Kullanım)

```bash
cd week1-assignment-umutdag1
npm i
npm start
```

## Example Code (Örnek Kod)
```js
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
```

## License
[MIT](https://github.com/171-Logo-Siber-FullStack-Bootcamp/week1-assignment-umutdag1/blob/main/LICENSE)