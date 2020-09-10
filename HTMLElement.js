// $0 -> focus element
$0.children();
var element = document.createElement('p');
element.textContent = 'Hello';
$0.append(element);
$0.remove(element);

$0.innerHTML = '<a href="https://google.com/">Google</a>'

var elements = document.getElementsByClassName('foo');
for(var element of elements) {
    element.append('  https://coders-x.com/');
}
