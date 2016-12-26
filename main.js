// пользовательская функция print_r()
function print_r(obj) {
    var s = '<h1>' + obj + '</h1>';
    s += '<ol>';

    for (p in obj)
        s += '<li><b>' + p + '</b> : ' + obj[p] + '</li>';

    s += '</ol>';
    window.document.body.innerHTML = s;
}
// вызов функции print_r()
var divZero = document.body.children[0];
var spanTwo = divZero.children[1];
print_r(spanTwo);