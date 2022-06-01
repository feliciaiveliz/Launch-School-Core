// document.addEventListener('DOMContentLoaded', () => {
//   let request = new XMLHttpRequest();
//   request.open('GET', 'https://ls-230-web-store-demo.herokuapp.com/products');
//   request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
//   request.send();

//   request.addEventListener('load', event => {
//     let response = request.response;
//     console.log(response.status);
//     console.log(response.statusText);
//   });
// });


let request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/repos/rails/rails');
request.responseType = 'json';

request.addEventListener('load', event => {
  // request.response is the result of parsing the JSON response body
  // the browser RECIEVED JSON DATA from the server
  // it needs to parse it into Javascript so that we can use JAVASCRIPT with it
});

