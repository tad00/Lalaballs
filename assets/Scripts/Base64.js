{
    var i = {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        encode: function (e) {
            var t, o, n, a, s, r, c, l = "",
                h = 0;
            for (e = i._utf8_encode(e); h < e.length;) a = (t = e.charCodeAt(h++)) >> 2, s = (3 & t) << 4 | (o = e.charCodeAt(h++)) >> 4, r = (15 & o) << 2 | (n = e.charCodeAt(h++)) >> 6, c = 63 & n, isNaN(o) ? r = c = 64 : isNaN(n) && (c = 64), l = l + this._keyStr.charAt(a) + this._keyStr.charAt(s) + this._keyStr.charAt(r) + this._keyStr.charAt(c);
            return l
        },
        decode: function (e) {
            var t, o, n, a, s, r, c = "",
                l = 0;
            for (e = e.replace(/[^A-Za-z0-9+/=]/g, ""); l < e.length;) t = this._keyStr.indexOf(e.charAt(l++)) << 2 | (a = this._keyStr.indexOf(e.charAt(l++))) >> 4, o = (15 & a) << 4 | (s = this._keyStr.indexOf(e.charAt(l++))) >> 2, n = (3 & s) << 6 | (r = this._keyStr.indexOf(e.charAt(l++))), c += String.fromCharCode(t), 64 != s && (c += String.fromCharCode(o)), 64 != r && (c += String.fromCharCode(n));
            return c = i._utf8_decode(c)
        },
        _utf8_encode: function (e) {
            e = e.replace(/rn/g, "n");
            for (var t = "", o = 0; o < e.length; o++) {
                var i = e.charCodeAt(o);
                i < 128 ? t += String.fromCharCode(i) : i > 127 && i < 2048 ? (t += String.fromCharCode(i >> 6 | 192), t += String.fromCharCode(63 & i | 128)) : (t += String.fromCharCode(i >> 12 | 224), t += String.fromCharCode(i >> 6 & 63 | 128), t += String.fromCharCode(63 & i | 128))
            }
            return t
        },
        _utf8_decode: function (e) {
            for (var t, o = "", i = 0, n = 0, a = 0; i < e.length;)(n = e.charCodeAt(i)) < 128 ? (o += String.fromCharCode(n), i++) : n > 191 && n < 224 ? (a = e.charCodeAt(i + 1), o += String.fromCharCode((31 & n) << 6 | 63 & a), i += 2) : (a = e.charCodeAt(i + 1), t = e.charCodeAt(i + 2), o += String.fromCharCode((15 & n) << 12 | (63 & a) << 6 | 63 & t), i += 3);
            return o
        }
    };
    window.Base64 = module.exports = i;
}