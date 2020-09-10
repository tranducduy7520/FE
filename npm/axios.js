var axios = require('axios');
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios.get(url)
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (err) {
    console.log(err.reason);
  })

fetch(url).then(function(response) {
    return response.json();
  }).then(function(json) {
    document.write(JSON.stringify(json));
  }).catch(function(err) {
    console.log(err);
  })