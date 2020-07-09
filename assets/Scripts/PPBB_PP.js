{
    const o = exports;
    const e = require;
    Object.defineProperty(o, "__esModule", {
        value: !0
    });
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var i, n = e("PPBB_PPNodePool"),
        a = e("PPBB_PPNodePoolExtend");
    (function (e) {
        var t = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(t, e), t
        }(n.default);
        e.NodePool = t;
        var o, i = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(t, e), t
        }(a.default);

        function s(e, t) {
            return void 0 === t && (t = 2), (Array(t).join("0") + e).slice(-t)
        }
        e.NodePoolExtend = i,
            function (e) {
                e[e.UP = 0] = "UP", e[e.DOWN = 1] = "DOWN", e[e.LEFT = 2] = "LEFT", e[e.RIGHT = 3] = "RIGHT"
            }(o = e.DIR || (e.DIR = {})), e.DIR_VEC2 = {
                UP: cc.v2(0, 1),
                DOWN: cc.v2(0, -1),
                LEFT: cc.v2(-1, 0),
                RIGHT: cc.v2(1, 0)
            }, e.getDitByIdx = function (e) {
                return "number" == typeof e ? this.DIR_VEC2[o[e]] : "string" == typeof e ? this.DIR_VEC2[e] : void 0
            }, e.isFloatEqual = function (e, t) {
                return Math.abs(e - t) > .01
            }, e.formatTime = function (e, t) {
                void 0 === t && (t = !1);
                var o = e / 1e3,
                    i = 0,
                    n = 0;
                o > 60 && (i = o / 60, o %= 60, i > 60 && t && (n = i / 60, i %= 60));
                var a = "";
                return t && (a += s(Math.floor(n)) + ":"), a += s(Math.floor(i)) + ":" + s(Math.floor(o))
            }, e.getNodePos = function (e, t) {
                var o = e.parent.convertToWorldSpaceAR(e.position);
                return t.convertToNodeSpaceAR(o)
            }, e.getTargetPos = function (e, t, o) {
                var i = t.convertToWorldSpaceAR(e);
                return o.convertToNodeSpaceAR(i)
            }, e.setChildrenGreyState = function (e, t, o) {
                (function e(i) {
                    var n = i.getComponent(cc.Sprite);
                    n && n.setState(t);
                    var a = i.getComponent(cc.Label);
                    a && (a.node.color = o);
                    var s = i.children;
                    if (0 !== s.length)
                        for (var r = 0, c = s; r < c.length; r++) e(c[r])
                })(e)
            }, e.shallowCopy = function (e) {
                var t = {};
                for (var o in e) t[o] = e[o];
                return t
            }, e.deepCopy = function (e) {
                if ("object" != typeof e) return e;
                var t = {};
                for (var o in e) t[o] = this.deepCopy(e[o]);
                return t
            }, e.checkPropertiesList = function (e) {
                for (var t = [], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
                for (var i = e, n = 0, a = t; n < a.length; n++) {
                    var s = a[n];
                    if (void 0 === i[s]) return null;
                    i = i[s]
                }
                return i
            }, e.getRandomStr = function () {
                return Math.random().toString(36).substr(2)
            }, e.getChanceByRateTable = function (e) {
                var t = 0;
                for (var o in e) t += e[o];
                var i = 0,
                    n = Math.getRandom(0, t);
                for (var o in e)
                    if (n < (i += e[o])) return o;
                return null
            }, e.doNFunc = function (e, t) {
                for (var o = 0; o < e; o++) t(o)
            }, e.formateNum = function (e) {
                return (e = e).replace(/(?=(?!\b)(\d{3})+$)/g, ",")
            }, e.padding = s, e.getIntervalDaysDir = function (e, t) {
                var o = new Date(e).toDateString(),
                    i = new Date(t).toDateString(),
                    n = new Date(o).getTime();
                return (new Date(i).getTime() - n) / 864e5
            }, e.getIntervalDays = function (e, t) {
                return Math.abs(this.getIntervalDaysDir(e, t))
            }, e.isSameDay = function (e, t) {
                return 0 === this.getIntervalDays(e, t)
            }, e.getInterVal = function (e, t) {
                return "string" == typeof e ? e = new Date(e).getTime() : e instanceof Date && (e = e.getTime()), void 0 === t ? t = (new Date).getTime() : "string" == typeof t ? t = new Date(e).getTime() : t instanceof Date && (t = t.getTime()), Math.abs(e - t)
            }, e.queue = function (e) {
                return __awaiter(this, void 0, void 0, function () {
                    var t, o, i;
                    return __generator(this, function (n) {
                        switch (n.label) {
                            case 0:
                                t = null, o = 0, i = e, n.label = 1;
                            case 1:
                                return o < i.length ? [4, (0, i[o])(t)] : [3, 4];
                            case 2:
                                t = n.sent(), n.label = 3;
                            case 3:
                                return o++, [3, 1];
                            case 4:
                                return [4, t];
                            case 5:
                                return [2, n.sent()]
                        }
                    })
                })
            }, e.extendTwo = function (e, t) {
                var o = {};
                for (var i in e) o[i] = e[i];
                for (var i in t) o.hasOwnProperty(i) || (o[i] = t[i]);
                return o
            }, e.assign = function (e, t) {
                var o = e;
                for (var i in t) o.hasOwnProperty(i) || (o[i] = t[i]);
                return o
            }
    })(i || (i = {})), o.default = i, window.PPBB_PP = i
}