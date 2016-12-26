// калькулятор
window.onload = function () {
    var inpX = document.getElementById('inpX');
    var inpY = document.getElementById('inpY');
    var btn = document.getElementById('btnRun');
    var spn = document.getElementById('spnResult');
    btn.onclick = function () {
        var x = inpX.value;
        var y = inpY.value;
        var res = parseFloat(x) + parseFloat(y);
        spn.innerHTML = res;
        btn.disabled = true;
    };
    inpX.onkeydown = function () {
        btn.disabled = false;
    };
    inpY.onkeydown = function () {
        btn.disabled = false;
    };
};

