var axios = require('axios');

function AxiosPromise(path) {
    return new Promise(function (resolve, reject) {
        axios.get(path)
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (err) {
                reject(err.reason);
            })
    })
}

Promise.all([
    AxiosPromise('https://jsonplaceholder.typicode.com/todos/1'),
    AxiosPromise('https://jsonplaceholder.typicode.com/todos/2'),
    AxiosPromise('https://jsonplaceholder.typicode.com/todos/3')
]).then(function (response) {
    console.log(response);
}).catch(function (err) {
    console.log(err);
})


