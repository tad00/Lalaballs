{
    const e = require;
    String.prototype.equals = function (e) {
        return this === e
    };
    String.prototype.repeatify = function (e) {
        for (var t = "", o = 0; o < e; o++) t += this;
        return t
    };
    String.prototype.firstUpperCase = function () {
        return this.substring(0, 1).toUpperCase() + this.substring(1)
    };
    String.prototype.format = function () {
        for (var e = arguments.length, t = void 0, o = this, i = 0; i < e; i++) t = new RegExp("\\{" + i + "\\}", "g"), o = o.replace(t, arguments[i]);
        return o
    };
    String.prototype.getStrLength = function () {
        for (var e = 0, t = 0; t < this.length; t++) {
            var o = this.charCodeAt(t);
            o >= 1 && o <= 126 || 65376 <= o && o <= 65439 ? e++ : e += 2
        }
        return e
    };
    String.prototype.getLengthStr = function () {
        for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, t = arguments[1], o = 0, i = "", n = 0; n < this.length; n++) {
            var a = this.charCodeAt(n);
            if (a >= 1 && a <= 126 || 65376 <= a && a <= 65439 ? o++ : o += 2, o >= e) {
                if (!(o <= t)) break;
                i += this[n]
            }
        }
        return i
    };
    String.GetStrLength = function (e) {
        for (var t = 0, o = 0; o < e.length; o++) {
            var i = e.charCodeAt(o);
            i >= 1 && i <= 126 || 65376 <= i && i <= 65439 ? t++ : t += 2
        }
        return t
    };
    String.GetLengthStr = function (e, t, o) {
        for (var i = 0, n = "", a = 0; a < e.length; a++) {
            var s = e.charCodeAt(a);
            if (s >= 1 && s <= 126 || 65376 <= s && s <= 65439 ? i++ : i += 2, i >= t) {
                if (!(i <= o)) break;
                n += e[a]
            }
        }
        return n
    };
    String.hashCode = function (e) {
        var t, o = 0;
        if (0 === e.length) return o;
        for (t = 0; t < e.length; t++) o = (o << 5) - o + e.charCodeAt(t), o |= 0;
        return o
    };
    String.Format = function () {
        var e = arguments[0];
        if ("string" == typeof e)
            for (var t = void 0, o = arguments.length, i = 1; i < o; i++) t = new RegExp("\\{" + (i - 1) + "\\}", "g"), e = e.replace(t, arguments[i]);
        else e = "";
        return e
    };
    String.isNullOrEmpty = function (e) {
        return !e || "" === e
    };
    String.getClassName = function (e) {
        return cc.js.getClassName(e)
    };
}