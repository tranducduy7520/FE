function History (historyID, userID, bookID, borrowDate, returnDate, duration) {
    this.userID = userID;
    this.bookID = bookID;
    this.borrowDate = new Date(borrowDate);
    this.returnDate = new Date(returnDate);
    this.duration = duration;
}

module.exports = History;