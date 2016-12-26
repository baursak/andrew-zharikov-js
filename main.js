window.onload = function () {
    var divTime = document.getElementById('time');

    function fShow() {
        divTime.style.visibility = 'visible';
    }

    function fTick() {
        var date = new Date();
        var t = date.getHours() + ':'
            + date.getMinutes() + ':'
            + date.getSeconds();
        divTime.innerHTML = t;
    }

    setTimeout(fShow, 2000);
    setInterval(fTick, 1000);
};

