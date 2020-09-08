var axios = require('axios');
Promise.all([
    axios.get('https://jsonplaceholder.typicode.com/todos/1'),
    axios.get('https://jsonplaceholder.typicode.com/todos/2'),
    axios.get('https://jsonplaceholder.typicode.com/todos/3F')
]).then(function (response) {
    console.log(response);
}).catch(function (err) {
    console.log(err);
})