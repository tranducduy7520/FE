var User = require('./User.js');
var Book = require('./Book.js');
var History = require('./History.js');

var books = [];
var users = [];
var history = [];

User.prototype.totalDaysOverdue = function () {
    var userID = this.userID;
    var array = history.filter(function (value) {
        return value.userID === userID;
    })
    var total = 0;
    array.forEach(function (value) {
        total += value.daysOverdue();
    })
    return total;
}

History.prototype.daysOverdue = function () {
    var countDays = Math.round((this.returnDate - this.borrowDate) / 86400000) - this.duration;
    if (countDays > 0) return countDays;
    else return 0;
}


books.push(new Book(1));
books.push(new Book(2));
books.push(new Book(3));
books.push(new Book(4));

users.push(new User(1));
users.push(new User(2));
users.push(new User(3));

history.push(new History(1, 1, 2, '2020-5-7', '2020-9-8', 45));
history.push(new History(2, 1, 1, '2020-3-1', '2020-5-2', 20));
history.push(new History(3, 1, 4, '2020-1-1', '2020-2-1', 30));
history.push(new History(4, 1, 3, '2020-8-2', '2020-12-26', 14));

console.log(users[0].totalDaysOverdue());
