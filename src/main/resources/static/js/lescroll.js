var leScroll = function (e) {
    "use strict";
    var t = 0, o = document.querySelectorAll("section").length - 1, n = document.getElementById("mask").offsetHeight,
        i = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? !0 : !1;
    return e.scrolling = !1, e.move = function () {
        document.getElementById("container").style.top = i ? "-" + t * n + "px" : "-" + t * window.innerHeight + "px"
    }, e.moveUp = function () {
        0 !== t && (t--, e.move())
    }, e.moveDown = function () {
        t !== o && (t++, e.move())
    }, e.moveTo = function (o) {
        t = o, e.move()
    }, e.addEvent = function (t, o) {
        document.querySelector(t).addEventListener("click", function () {
            e.moveTo(o)
        })
    }, e.setScrollTimeout = function (t) {
        setTimeout(function () {
            e.scrolling = !1
        }, t)
    }, e
}(leScroll || {});
!function (e, t, o) {
    "use strict";
    for (var n = t.getElementsByTagName("li"), i = {up: 38, down: 40}, l = function (t) {
        var o = 0, n = t || e.event;
        n.wheelDelta ? o = (e.opera ? -1 : 1) * n.wheelDelta / 120 : n.detail && (o = -n.detail / 3), o && c(o)
    },
             c = function (e) {
        o.scrolling || (e > 0 ? (o.scrolling = !0, o.moveUp(), o.setScrollTimeout(1500)) : 0 >= e && (o.scrolling = !0, o.moveDown(), o.setScrollTimeout(1500)))
    }, r = function () {
        o.moveTo(event.target.getAttribute("data-section"))
    }, u = 0; u < n.length; u++) n[u].getAttribute("data-section") && n[u].addEventListener("click", r);
    e.addEventListener("keydown", function (e) {
        e.keyCode === i.up ? o.moveUp() : e.keyCode === i.down && o.moveDown()
    }), e.addEventListener("resize", function () {
        o.move()
    }), e.addEventListener("DOMMouseScroll", l, !1), e.onmousewheel = t.onmousewheel = l
}(window, document, leScroll);