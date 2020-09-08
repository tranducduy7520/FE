var library = [
    {
        bookID: 1
    },
    {
        bookID: 2
    },
    {
        bookID: 3
    },
    {
        bookID: 4
    },
    {
        bookID: 5
    }
]
var users = [
    {
        userID: 1,
        daysOverdue: function () {
            var array = history.filter(function (value) {
                return value.userID === userID;
            })
            return array.reduce(function (a, b) {
                return a.daysOverdue + b.daysOverdue;
            }, 0);
    }
]
var history = [
    {
        userID: 1,
        bookID: 1,
        borrowDate: new Date('2020-21-10'),
        returnDate: new Date('2020-21-10'),
        duration: 3,
        daysOverdue: function () {
            var countDays = (this.borrowDate - this.returnDate) / 86400000 - this.duration;
            if (countDays > 0) return countDays;
            else return 0;
        }
    }
]
