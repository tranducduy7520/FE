var fs = require('fs');

function readFilePromise(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, { encoding: 'utf8' }, function (err, data) {
            console.log('Read file \'' + path + '\' completed!')
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        })
    })
}

readFilePromise('./data.txt')
    .then(function (response) {
        console.log('Content: ' + response);
    })
    .catch(function (err) {
        console.log(err);
    })


Promise.all([
    readFilePromise('./data1.txt'),
    readFilePromise('./data2.txt'),
    readFilePromise('./data3.txt')
]).then(function (response) {
    console.log(response);
}).catch(function (err) {
    console.log(err);
})

