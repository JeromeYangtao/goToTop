window.onload = function() {
    var btn = document.getElementById("btn");
    var timer = null;
    var pagelookheight = window.innerHeight;
    // 滚动超过一屏后出现按钮
    window.onscroll = function() {
        var backtop = document.body.scrollTop;
        // console.log(backtop);
        if (backtop >= pagelookheight) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    }

    // 回到顶部功能
    btn.onclick = function() {

        timer = setInterval(function() {
            var backtop = document.body.scrollTop;
            var speed = backtop / 5;
            document.body.scrollTop -= speed;
            if (backtop == 0) {
                clearInterval(timer);
            }
        }, 30);
    }
}