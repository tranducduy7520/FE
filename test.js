function newString(str, n) {
    // viết code ở đây.
    var arr = str.split('');
    arr.splice(n, arr.length - 2 * n);
    return arr.join('');
}