
!function(a) {
    "use strict";
    a.fn.swipeSlide = function(b, c) {
        function u(a, b) {
            a.css({
                "-webkit-transition": "all " + b + "s " + q.transitionType,
                transition: "all " + b + "s " + q.transitionType
            })
        }
        function v(a, b) {
            q.axisX ? a.css({
                "-webkit-transform": "translate3d(" + b + "px,0,0)",
                transform: "translate3d(" + b + "px,0,0)"
            }) : a.css({
                "-webkit-transform": "translate3d(0," + b + "px,0)",
                transform: "translate3d(0," + b + "px,0)"
            })
        }
        function w(a) {
            if (q.lazyLoad) {
                var b = q.ul.find("[data-src]");
                if (b.length > 0) {
                    var c = b.eq(a);
                    c.data("src") && (c.is("img") ? c.attr("src", c.data("src")).data("src", "") : c.css({
                        "background-image": "url(" + c.data("src") + ")"
                    }).data("src", ""))
                }
            }
        }
        function x(a) {
            a.touches || (a.touches = a.originalEvent.touches)
        }
        function y(a) {
            e = a.touches[0].pageX;
                f = a.touches[0].pageY
        }
        function z(a) {
            if (a.preventDefault(),
                q.autoSwipe && clearInterval(l),
                    j = a.touches[0].pageX,
                    k = a.touches[0].pageY,
                    g = j - e,
                    h = k - f,
                    u(q.ul, 0),
                    q.axisX) {
                if (!q.continuousScroll) {
                    if (0 == d && g > 0)
                        return g = 0;
                            F();
                    if (d + 1 >= t && 0 > g)
                        return g = 0;
                            F()
                }
                v(q.ul, -(r * parseInt(d) - g))
            } else {
                if (!q.continuousScroll) {
                    if (0 == d && h > 0)
                        return h = 0;
                            F();
                    if (d + 1 >= t && 0 > h)
                        return h = 0;
                            F()
                }
                v(q.ul, -(s * parseInt(d) - h))
            }
        }
        function A() {
            i = q.axisX ? g : h,
                Math.abs(i) <= m ? B(.3) : i > m ? (E(),
                    F()) : -m > i && (D(),
                    F()),
                g = 0,
                h = 0
        }
        function B(a) {
            u(q.ul, a),
                q.axisX ? v(q.ul, -d * r) : v(q.ul, -d * s)
        }
        function C() {
            q.continuousScroll ? d >= t ? (B(.3),
                d = 0,
                setTimeout(function() {
                    B(0)
                }, 300)) : 0 > d ? (B(.3),
                d = t - 1,
                setTimeout(function() {
                    B(0)
                }, 300)) : B(.3) : (d >= t ? d = 0 : 0 > d && (d = t - 1),
                B(.3)),
                c(d)
        }
        function D() {
            d++,
                C(),
            q.lazyLoad && (q.continuousScroll ? w(d + 2) : w(d + 1))
        }
        function E() {
            if (d--,
                    C(),
                o && q.lazyLoad) {
                var a = t - 1;
                for (a; t + 1 >= a; a++)
                    w(a);
                return o = !1,
                    void 0
            }
            !o && q.lazyLoad && w(d)
        }
        function F() {
            q.autoSwipe && (l = setInterval(function() {
                D()
            }, q.speed))
        }
        var l, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, m = 50, n = 0, o = !0, p = a(this), q = a.extend({}, {
                ul: p.children("ul"),
                li: p.children().children("li"),
                continuousScroll: !1,
                autoSwipe: !0,
                speed: 4e3,
                axisX: !0,
                transitionType: "ease",
                lazyLoad: !1
            }, b || {}), r = q.li.width(), s = q.li.height(), t = q.li.length, c = c || function() {}
            ;
        !function() {
            if (q.continuousScroll && (q.ul.prepend(q.li.last().clone()).append(q.li.first().clone()),
                    q.axisX ? (v(q.ul.children().first(), -1 * r),
                        v(q.ul.children().last(), r * t)) : (v(q.ul.children().first(), -1 * s),
                        v(q.ul.children().last(), s * t))),
                    q.lazyLoad) {
                var b = 0;
                for (n = q.continuousScroll ? 3 : 2,
                         b; n > b; b++)
                    w(b)
            }
            q.axisX ? q.li.each(function(b) {
                v(a(this), r * b)
            }) : q.li.each(function(b) {
                v(a(this), s * b)
            }),
                F(),
                c(d),
                p.on("touchstart", function(a) {
                    x(a),
                        y(a)
                }),
                p.on("touchmove", function(a) {
                    x(a),
                        z(a)
                }),
                p.on("touchend", function() {
                    A()
                })
        }()
    }
}(window.Zepto || window.jQuery);
