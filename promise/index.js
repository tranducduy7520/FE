var fs = require('fs');
var co = require('co');

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

// readFilePromise('./data.txt')
//     .then(function (response) {
//         console.log('Content: ' + response);
//     })
//     .catch(function (err) {
//         console.log(err);
//     })


// // Promise all

// Promise.all([
//     readFilePromise('./data1.txt'),
//     readFilePromise('./data2.txt'),
//     readFilePromise('./data3.txt')
// ]).then(function (response) {
//     console.log(response);
// }).catch(function (err) {
//     console.log(err);
// })


// // co

// co(function* () {
//     var values = yield [
//         readFilePromise('./data1.txt'),
//         readFilePromise('./data2.txt'),
//         readFilePromise('./data3.txt')
//     ];
//     return values;
// }).then(function (response) {
//     console.log(response);
// }).catch(function (err) {
//     console.log(err);
// })


// // co wrap

// var readFiles = co.wrap(function* (files) {
//     var values = yield files.map(function (file) {
//         return readFilePromise(file);
//     });
//     return values;
// })

// readFiles([
//     'data1.txt',
//     'data2.txt',
//     'data3.txt'
// ]).then(function (response) {
//     console.log(response);
// }).catch(function (err) {
//     console.log(err);
// })


//async await
async function run() {
    var values = await Promise.all([
        //await each promise
        readFilePromise('./data1.txt'),
        readFilePromise('./data2.txt'),
        readFilePromise('./data3.txt')
    ]);
    return values;
}
run().then(function (response) {
    console.log(response);
}).catch(function (err) {
    console.log(err);
})