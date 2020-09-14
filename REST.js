var url = 'localhost:3000/students';
var item = {
    name: 'Poo',
    age: 13
}

//GET - lấy dữ liệu từ url
axios.get(url).then(function (res) {
    console.log(res.data);
}).catch(function (err) {
    console.log(err.reason);
})

//POST - gửi dữ liệu lên server

axios.post(url, item).then(function (res) {      //automatic generate next id 
    console.log(res.data);
}).catch(function (err) {
    console.log(err);
})

//PUT - thay thế object 
axios.put(url + '/1', item).then(function (res) {
    console.log(res.data);
}).catch(function (err) {
    console.log(err);
})

//DELETE - xóa object
axios.delete(url + '/2').then(function (res) {
    console.log(res.data);
}).catch(function (err) {
    console.log(err);
})

//PATCH - cập nhật object
axios.patch(url + '/3', item).then(function (res) {
    console.log(res.data);
}).catch(function (err) {
    console.log(err);
})
