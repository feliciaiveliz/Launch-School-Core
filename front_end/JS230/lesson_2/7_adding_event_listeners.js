{/* <html>
  <head>
    <title>Test Page</title>
  </head>
  <body>
    <textarea id="message"></textarea>
    <button id="alert">Alert</button>
  </body>
</html>
 */}

function displayAlert(event) {
  let message = document.getElementById('message').value;
  alert(message);
}

document.addEventListener('DOMContentLoaded', () => {
  let button = document.getElementById('alert');
  button.addEventListener('click', displayAlert);
});