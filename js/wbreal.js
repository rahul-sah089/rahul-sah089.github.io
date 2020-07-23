!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : ((e = e || self).ftreal = t());
})(this, function () {
    "use strict";
    var r = {
            set: function (e, t, i, r) {
                var n = "",
                    o = "";
                if (i) {
                    var a = new Date();
                    a.setTime(a.getTime() + 60 * i * 1e3), (n = "; expires=" + a.toGMTString());
                }
                r && (o = "; domain=" + r), (document.cookie = e + "=" + escape(t) + n + o + "; path=/");
            },
            get: function (e) {
                var t,
                    i,
                    r = e + "=",
                    n = document.cookie.split(";");
                for (t = 0; t < n.length; t++) {
                    for (i = n[t]; " " === i.charAt(0); ) i = i.substring(1, i.length);
                    if (0 === i.indexOf(r)) return unescape(i.substring(r.length, i.length));
                }
                return null;
            },
        },
        e = "localhost:1337",
        u = {
            urlPrefix: "",
            formSubmitUrl: e + "/forms/answer",
            visitsUrl: e + "/ftreal_events",
            eventsUrl: e + "/ftreal_events",
            page: null,
            platform: "web",
            useBeacon: !0,
            startOnReady: !0,
            trackVisits: !0,
            cookies: !0,
            cookieDomain: null,
            headers: {},
            visitParams: {},
            withCredentials: !1,
        },
        l = window.ftreal || window.FTReal || {},
        t = 0;
    setInterval(function () {
        (t = (t = _("idletime")) || 0), (t = parseInt(t, 10)), 4 < (t += 1) && (l.reloadVisit(), (t = 0)), v("idletime", t);
    }, 6e4);
    function d() {
        var e = new Date();
        return 60 * (23 - e.getHours()) + (59 - e.getMinutes());
    }
    (l.reloadVisit = function () {
        v("ftreal_visit", x(), d());
    }),
        (l.configure = function (e) {
            for (var t in e) e.hasOwnProperty(t) && (u[t] = e[t]);
        }),
        l.configure(l);
    var m,
        i,
        o = window.jQuery || window.Zepto || window.$,
        f = 1051200,
        g = !1,
        n = [],
        a = !0,
        s = [];
    function c() {
        return (
            u.useBeacon &&
            (function (e) {
                return 0 === Object.keys(e).length;
            })(u.headers) &&
            a &&
            void 0 !== window.navigator.sendBeacon &&
            !u.withCredentials
        );
    }
    function p(e) {
        _("ftreal_debug") && window.console.log(e);
    }
    function v(e, t, i) {
        r.set(e, t, i, u.cookieDomain || u.domain);
    }
    function _(e) {
        return r.get(e);
    }
    function h(e) {
        r.set(e, "", -1);
    }
    function w() {
        for (var e; (e = n.shift()); ) e();
        g = !0;
    }
    function k(e) {
        g ? e() : n.push(e);
    }
    function b(e, t, i) {
        document.addEventListener(e, function (e) {
            !(function (e, t) {
                var i = e.matches || e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector;
                return i ? i.apply(e, [t]) : (p("Unable to match"), !1);
            })(e.target, t) || i(e);
        });
    }
    function x() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
            var t = (16 * Math.random()) | 0;
            return ("x" === e ? t : (3 & t) | 8).toString(16);
        });
    }
    function y() {
        u.cookies && a && v("ftreal_events", JSON.stringify(s), 1);
    }
    function S() {
        var e = document.querySelector("meta[name=csrf-token]");
        return e && e.content;
    }
    function T(e) {
        var t = S();
        t && e.setRequestHeader("X-CSRF-Token", t);
    }
    function O(e, t, i) {
        if (((t.group_id = l.getGroupId()), o))
            o.ajax({ type: "POST", url: e, data: JSON.stringify(t), contentType: "application/json; charset=utf-8", dataType: "json", beforeSend: T, success: i, headers: u.headers, xhrFields: { withCredentials: u.withCredentials } });
        else {
            var r = new XMLHttpRequest();
            for (var n in (r.open("POST", e, !0), (r.withCredentials = u.withCredentials), r.setRequestHeader("Content-Type", "application/json"), u.headers)) u.headers.hasOwnProperty(n) && r.setRequestHeader(n, u.headers[n]);
            (r.onload = function () {
                200 === r.status && i(r.responseText);
            }),
                T(r),
                r.send(JSON.stringify(t));
        }
    }
    function U(e) {
        var t = {
            is_mobile_browser: (function () {
                var e,
                    t = !1;
                return (
                    (e = navigator.userAgent || navigator.vendor || window.opera),
                    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
                        e
                    ) ||
                        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                            e.substr(0, 4)
                        )) &&
                        (t = !0),
                    t
                );
            })(),
            events: [e],
            events_json: [e],
            platform: u.platform,
            landing_page: window.location.href,
            screen_width: window.screen.width,
            screen_height: window.screen.height,
            url: window.location.href,
            js: !0,
            group_id: l.getGroupId(),
        };
        if (u.cookies) {
            (t.visit_token = l.getVisitToken()), (t.visitor_token = l.getVisitorToken());
            var i = null;
            void 0 !== e.contact_id && (i = Number(e.contact_id)), (t.contact_id = i);
        }
        return (e.group_id = l.getGroupId()), delete e.visit_token, delete e.visitor_token, t;
    }
    function C(t) {
        k(function () {
            O(u.urlPrefix + u.eventsUrl, U(t), function () {
                for (var e = 0; e < s.length; e++)
                    if (s[e].id == t.id) {
                        s.splice(e, 1);
                        break;
                    }
                y();
            });
        });
    }
    function I(r) {
        k(function () {
            var e = U(r),
                t = (function () {
                    var e = document.querySelector("meta[name=csrf-param]");
                    return e && e.content;
                })(),
                i = S();
            t && i && (e[t] = i), (e.events_json = e.events), delete e.events, window.navigator.sendBeacon(u.urlPrefix + u.eventsUrl, JSON.stringify(e));
        });
    }
    function j() {
        return u.page || window.location.pathname;
    }
    function M(e) {
        var t = e.target;
        return (function (e) {
            for (var t in e) e.hasOwnProperty(t) && null === e[t] && delete e[t];
            return e;
        })({
            tag: t.tagName.toLowerCase(),
            id: t.id && 0 < t.id.length ? t.id : null,
            class: t.className && 0 < t.className.length ? t.className : null,
            page: j(),
            section: (function (e) {
                for (; e && e !== document; e = e.parentNode) if (e.hasAttribute("data-section")) return e.getAttribute("data-section");
                return null;
            })(t),
        });
    }
    function V() {
        g = !1;
        var e = l.getVisitorId(),
            t = l.getVisitId();
        if (((m = _("ftreal_track")), !1 === u.cookies || !1 === u.trackVisits)) p("Visit tracking disabled"), w();
        else if (t && e && !m) p("Active visit"), w();
        else if ((t || v("ftreal_visit", (t = x()), d()), _("ftreal_visit"))) {
            e || v("ftreal_visitor", (e = x()), f);
            var i = {
                visit_token: t,
                visitor_token: e,
                platform: u.platform,
                landing_page: window.location.href,
                screen_width: window.screen.width,
                screen_height: window.screen.height,
                js: !0,
                group_id: l.getGroupId(),
                activity: "$visit",
            };
            for (var r in (0 < document.referrer.length && (i.referrer = document.referrer), u.visitParams)) u.visitParams.hasOwnProperty(r) && (i[r] = u.visitParams[r]);
            var n = { url: window.location.href, title: document.title, page: j() },
                o = _("utm_source");
            if ((console.log("Source is ->" + o), !o || "" == o || " " == o)) {
                var a = document.referrer;
                (a = (a = a.replace("http://", "").replace("https://", "")).split("/")[0]), (o = "direct"), console.log(a), 1 < a.length && (o = a);
            }
            v("utm_source", o), (n.utm_source = o), (n.utm_medium = _("utm_medium")), (n.utm_campaign = _("utm_campaign")), (n.group_id = l.getGroupId()), console.log("tracking first visit"), console.log(n);
            var s = { name: "$visit", properties: n, time: new Date().getTime() / 1e3, id: x(), js: !0 },
                c = l.getUser();
            null != c && 0 != c && (s.properties.email = c),
                O(u.urlPrefix + u.visitsUrl, U(s), function () {
                    h("ftreal_track"), w();
                });
        } else p("Cookies disabled"), w();
    }
    (l.getVisitId = l.getVisitToken = function () {
        var e = _("ftreal_visit");
        return e || (v("ftreal_visit", x(), d()), (e = _("ftreal_visit"))), e;
    }),
        (l.getVisitorId = l.getVisitorToken = function () {
            return _("ftreal_visitor");
        }),
        (l.getContactId = function () {
            return _("ftreal_cid");
        }),
        (l.reset = function () {
            return h("ftreal_visit"), h("ftreal_visitor"), h("ftreal_events"), h("ftreal_track"), h("ftreal_cid"), !0;
        }),
        (l.debug = function (e) {
            return !1 === e && h("ftreal_debug"), !0;
        }),
        (l.track = function (e, t) {
            var i = { name: e, properties: t || {}, time: new Date().getTime() / 1e3, id: x(), js: !0 },
                r = l.getUser();
            return (
                null != r && 0 != r && (i.properties.email = r),
                k(function () {
                    u.cookies && !l.getVisitId() && V(),
                        k(function () {
                            p(i),
                                (i.visit_token = l.getVisitId()),
                                (i.visitor_token = l.getVisitorId()),
                                (i.contact_id = l.getContactId()),
                                (i.group_id = l.getGroupId()),
                                c()
                                    ? I(i)
                                    : (s.push(i),
                                      y(),
                                      setTimeout(function () {
                                          C(i);
                                      }, 1e3));
                        });
                }),
                !0
            );
        }),
        (l.formSubmission = function () {
            O(u.urlPrefix + u.formSubmitUrl, {}, function (e) {
                try {
                    v("ftreal_cid", JSON.parse(e).contact_id, f);
                } catch (e) {}
            });
        }),
        (l.trackView = function (e) {
            var t = { url: window.location.href, title: document.title, page: j() };
            if (e) for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            var r = _("utm_source");
            if (!r || "" == r || " " == r) {
                var n = document.referrer;
                if (((r = "direct"), 1 < (n = (n = n.replace("http://", "").replace("https://", "")).split("/")[0]).length))
                    if (0 <= n.indexOf("google.com")) console.log("Source is from google.."), (r = new URLSearchParams(window.location.search).get("gclid") ? "Google AD" : "Google Search");
                    else console.log("Non google referrer"), (r = n);
                else r = n;
            }
            v("utm_source", r), (t.utm_source = r), (t.group_id = l.getGroupId()), l.track("$visit", t);
        }),
        (l.trackClicks = function () {
            b("click", "a, button, input[type=submit]", function (e) {
                var t = e.target,
                    i = M(e);
                (i.text = "input" == i.tag ? t.value : (t.textContent || t.innerText || t.innerHTML).replace(/[\s\r\n]+/g, " ").trim()), (i.href = t.href), l.track("$click", i);
            });
        }),
        (l.trackSubmits = function () {
            b("submit", "form", function (e) {
                var t = M(e);
                l.track("$submit", t);
            });
        }),
        (l.trackChanges = function () {
            b("change", "input, textarea, select", function (e) {
                var t = M(e);
                l.track("$change", t);
            });
        }),
        (l.init = function (e) {
            v("ftreal_group_id", e), l.trackAll();
        }),
        (l.getGroupId = function () {
            return _("ftreal_group_id");
        }),
        (l.identify = function (e, t) {
            var i = _("utm_source");
            (i && "" != i && " " != i) || (i = "direct"), l.track("$identify", { email: e, properties: t, utm_source: i, utm_medium: _("utm_medium"), utm_campaign: _("utm_campaign") }), l.setUser(e);
        }),
        (l.getUser = function () {
            var e = _("ftreal_user");
            return null != e && null != e && atob(e);
        }),
        (l.setUser = function (e) {
            null != e && v("ftreal_user", btoa(e), f);
        }),
        (l.addToCart = function (e) {
            var t = e.cart,
                i = e.product,
                r = { product_id: i.id, cart_id: t.token, title: i.title, price: i.price, url: i.featured_image, email: l.userEmail };
            l.track("$cart_added", r);
        }),
        (l.removeFromCart = function (e) {
            l.track("$cart_removed", e);
        }),
        (l.trackAll = function () {
            l.debug(!0), console.log("Saving UTM Source"), l.saveUTMSource(), console.log("UTM Source save completed"), l.trackView(), l.trackClicks(), l.trackSubmits(), l.trackChanges();
        });
    try {
        s = JSON.parse(_("ftreal_events") || "[]");
    } catch (e) {}
    for (var P = 0; P < s.length; P++) C(s[P]);
    return (
        (l.start = function () {
            V(), (l.start = function () {});
        }),
        (l.receiveMessage = function (e) {
            if ("FTREAL_FORM_LOADED" == e.data) {
                var t = document.getElementById("ftrealForm").contentWindow,
                    i = {
                        ftreal_group_id: _("ftreal_group_id"),
                        ftreal_visit: _("ftreal_visit"),
                        ftreal_visitor: _("ftreal_visitor"),
                        ftreal_source: _("ftreal_visitor"),
                        utm_source: _("utm_source"),
                        utm_campaign: _("utm_campaign"),
                        utm_medium: _("utm_medium"),
                    };
                t.postMessage(JSON.stringify({ payload: i }), "*");
            }
        }),
        (l.getJsonFromUrl = function (e) {
            var t = (e = e || location.href).indexOf("?"),
                i = e.indexOf("#");
            if (-1 == i && -1 == t) return {};
            -1 == i && (i = e.length);
            var r = -1 == t || i == t + 1 ? e.substring(i) : e.substring(t + 1, i),
                s = {};
            return (
                r.split("&").forEach(function (e) {
                    if (e) {
                        var t = (e = e.split("+").join(" ")).indexOf("="),
                            i = -1 < t ? e.substr(0, t) : e,
                            r = -1 < t ? decodeURIComponent(e.substr(t + 1)) : "",
                            n = i.indexOf("[");
                        if (-1 == n) s[decodeURIComponent(i)] = r;
                        else {
                            var o = i.indexOf("]", n),
                                a = decodeURIComponent(i.substring(n + 1, o));
                            (i = decodeURIComponent(i.substring(0, n))), s[i] || (s[i] = []), a ? (s[i][a] = r) : s[i].push(r);
                        }
                    }
                }),
                s
            );
        }),
        (l.saveUTMSource = function () {
            var e = l.getJsonFromUrl();
            !_("utm_source") && "utm_source" in e && (console.log("source -> " + e.utm_source), v("utm_source", e.utm_source)),
                !_("utm_medium") && "utm_medium" in e && (console.log("medium -> " + e.utm_medium), v("utm_medium", e.utm_medium)),
                !_("utm_campaign") && "utm_campaign" in e && (console.log("camp -> " + e.utm_campaign), v("utm_campaign", e.utm_campaign));
        }),
        (i = function () {
            setTimeout(function () {
                u.startOnReady && (l.saveUTMSource(), l.start(), v("idletime", 0), window.addEventListener("message", l.receiveMessage, !1));
            }, 500);
        }),
        "interactive" === document.readyState || "complete" === document.readyState ? i() : document.addEventListener("DOMContentLoaded", i),
        l
    );
});
