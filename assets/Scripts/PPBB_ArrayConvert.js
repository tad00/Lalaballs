{
    const e = require;

    function i(e) {
        if (Array.isArray(e)) {
            for (var t = 0, o = Array(e.length); t < e.length; t++) o[t] = e[t];
            return o
        }
        return Array.from(e)
    }
    Object.defineProperties(Array.prototype, function (e, t, o) {
        return t in e ? Object.defineProperty(e, t, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = o, e
    }({
        clear: {
            writable: !1,
            enumerable: !1,
            configurable: !0,
            value: function () {
                this.splice(0, this.length)
            }
        },
        clone: {
            writable: !1,
            enumerable: !1,
            configurable: !0,
            value: function () {
                return this.slice()
            }
        },
        getRandomOne: {
            writable: !1,
            enumerable: !1,
            configurable: !0,
            value: function () {
                return this[Math.getRandomInt(0, this.length)]
            }
        },
        getRandomCount: {
            writable: !1,
            enumerable: !1,
            configurable: !0,
            value: function (e) {
                if (e > this.length) return console.log("\u8d85\u51fa\u6570\u7ec4\u957f\u5ea6"), this;
                for (var t = this.slice(0), o = this.length, i = o - e, n = void 0, a = void 0; o-- > i;) n = t[a = Math.floor((o + 1) * Math.random())], t[a] = t[o], t[o] = n;
                return t.slice(i)
            }
        },
        getRandomCountDiff: {
            writable: !1,
            enumerable: !1,
            configurable: !0,
            value: function (e) {
                for (var t = this.slice(0), o = [], i = t.length, n = 0; n < i; n++) {
                    var a = Math.floor(Math.random() * t.length);
                    if (o.indexOf(t[a]) < 0 && (o.push(t[a]), o.length === e)) return o;
                    t.splice(a, 1)
                }
                return console.log("\u672a\u627e\u5230\u8db3\u591f\u6570\u91cf\u7684\u5143\u7d20"), o
            }
        },
        getRandomExcept: {
            writable: !1,
            enumerable: !1,
            configurable: !0,
            value: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                Array.isArray(e) || (e = [e]);
                var o = this.filter(function (t) {
                    return e.indexOf(t) < 0
                });
                return 1 === t ? o.getRandomOne() : o.getRandomCount(t)
            }
        },
        getRanomExceptIdx: {
            writable: !1,
            enumerable: !1,
            configurable: !0,
            value: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                Array.isArray(exceptId) || (exceptId = [exceptId]);
                var o = this.filter(function (e, t) {
                    return exceptId.indexOf(t) < 0
                });
                return 1 === t ? o.getRandomOne() : o.getRandomCount(t)
            }
        },
        addRange: {
            writable: !1,
            enumerable: !1,
            configurable: !0,
            value: function (e) {
                this.concat(e)
            }
        },
        insert: {
            writable: !1,
            enumerable: !1,
            configurable: !0,
            value: function (e, t) {
                this.splice(e, 0, t)
            }
        },
        removeAt: {
            writable: !1,
            enumerable: !1,
            configurable: !0,
            value: function (e) {
                return this.splice(e, 1)
            }
        },
        remove: {
            writable: !1,
            enumerable: !1,
            configurable: !0,
            value: function () {
                for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                var i = !0,
                    n = !1,
                    a = void 0;
                try {
                    for (var s, r = t[Symbol.iterator](); !(i = (s = r.next()).done); i = !0) {
                        var c = s.value,
                            l = this.indexOf(c);
                        l > -1 && this.removeAt(l)
                    }
                } catch (e) {
                    n = !0, a = e
                } finally {
                    try {
                        !i && r.return && r.return()
                    } finally {
                        if (n) throw a
                    }
                }
            }
        },
        removeRange: {
            writable: !1,
            enumerable: !1,
            configurable: !0,
            value: function (e, t) {
                return this.splice(e, t)
            }
        },
        removeByMatch: {
            writable: !1,
            enumerable: !1,
            configurable: !0,
            value: function (e, t) {
                for (var o = this.filter(match), i = 0; i < o.length; i++) this.remove(o[i]);
                return o
            }
        },
        contains: {
            writable: !1,
            enumerable: !1,
            configurable: !0,
            value: function (e) {
                return this.indexOf(e) > -1
            }
        },
        distinct: {
            writable: !1,
            enumerable: !1,
            configurable: !0,
            value: function () {
                return [].concat(i(new Set(this)))
            }
        },
        sum: {
            writable: !1,
            enumerable: !1,
            configurable: !0,
            value: function () {
                for (var e = 0, t = 0; t < this.length; t++) "number" == typeof this[t] ? e += this[t] : console.log("Tips: [" + this[t] + "] isn\\'t Number!");
                return e
            }
        },
        upset: {
            writable: !1,
            enumerable: !1,
            configurable: !0,
            value: function () {
                for (var e = this.length, t = 0; t < e - 1; t++) {
                    var o = Math.floor(Math.random() * (e - t)),
                        i = this[o];
                    this[o] = this[e - t - 1], this[e - t - 1] = i
                }
                return this
            }
        },
        getMax: {
            writable: !1,
            enumerable: !1,
            configurable: !0,
            value: function () {
                return Math.max.apply(null, this)
            }
        }
    }, "getMax", {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: function () {
            return Math.min.apply(null, this)
        }
    }));
    Array.getUnion = function () {
        for (var e = [], t = arguments.length, o = Array(t), n = 0; n < t; n++) o[n] = arguments[n];
        return o.forEach(function (t) {
            e = [].concat(i(e), i(t))
        }), [].concat(i(new Set(e)))
    };
    Array.getIntersect = function () {
        for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) t[o] = arguments[o];
        return t.reduce(function (e, t) {
            return e.filter(function (e) {
                return t.indexOf(e) >= 0
            })
        })
    };
    Array.shuffle = function (e) {
        for (var t = e.slice(), o = t.length, i = 0; i < o - 1; i++) {
            var n = Math.floor(Math.random() * (o - i)),
                a = t[n];
            t[n] = t[o - i - 1], t[o - i - 1] = a
        }
        return t
    };
}