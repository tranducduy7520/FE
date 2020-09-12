var txtInput = document.getElementById('text-input');
var list = document.getElementById('list');
var items = [
    '<li>Row 1</li>'
];
var btnAdd = document.getElementById('button-add');
var btnReset = document.getElementById('button-reset');

//add first date
list.innerHTML = items.join('');
//trigger a event after click button
btnAdd.addEventListener('click', addItem);
btnReset.addEventListener('click', function () {
    //retVal is return value
    var retVal = confirm('Are you sure you want to DELETE all items?');
    if (retVal) {
        clearList();
    }
});

function addItem() {
    var item = txtInput.value;
    if (item !== '') {
        items.push('<li>' + item + '</li>');
        localStorage.setItem('list', JSON.stringify(items));
        list.innerHTML = JSON.parse(localStorage.getItem('list')).join('');
        // the same with sessionStorage        
        txtInput.value = '';
    }
}
function clearList() {
    items = [];
    list.innerHTML = items;
}

var ageFilter = document.getElementById('age-filter');
var studentTable = document.getElementById('student-table');

var students = [
    {
        name: 'John',
        age: 18
    },
    {
        name: 'Peter',
        age: 20
    },
    {
        name: 'Marry',
        age: 17
    },
    {
        name: 'Jack',
        age: 19
    },
    {
        name: 'Michael',
        age: 18
    }
];
render(students);

function render(students) {
    var out = students.map(function (student) {
        return '<tr><td>' + student.name + '</td><td>' + student.age + '</td></tr>';
    })
    console.log(out);
    studentTable.innerHTML = out.join('');
}

ageFilter.addEventListener("change", function () {
    var valueSelected = ageFilter.value;
    if (valueSelected === '--') {
        render(students);
        return;
    }
    var out = students.filter(function (student) {
        return student.age === parseInt(valueSelected);
    });
    render(out);
})
