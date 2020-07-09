{
    const o = exports;
    const e = require;
    Object.defineProperty(o, "__esModule", {
        value: !0
    });
    var i = function () {
        function e() {}
        return e.setKeyCode = function (e) {
            this._keyCode = e
        }, e._getGameKey = function (e) {
            return this._keyCode + e
        }, e._getEncryptValue = function (e) {
            return e
        }, e._getDecryptValue = function (e) {
            return e
        }, e.setItem = function (e, t) {
            e = this._getGameKey(e), t = this._getEncryptValue(t), this._setSync(e, t)
        }, e.setItemAsync = function (e, t, o, i) {
            void 0 === o && (o = null), void 0 === i && (i = null), e = this._getGameKey(e), t = this._getEncryptValue(t), this._setAsync(e, t, o, i)
        }, e.getItem = function (e, t) {
            void 0 === t && (t = null), e = this._getGameKey(e);
            var o = this._getSync(e);
            return o ? this._getDecryptValue(o) : t
        }, e.getItemAsync = function (e, t, o, i) {
            var n = this;
            void 0 === t && (t = null), void 0 === o && (o = null), void 0 === i && (i = null), e = this._getGameKey(e), this._getAsync(e, function (e) {
                e ? (e = n._getDecryptValue(e), o && o(e)) : o(t)
            }, i)
        }, e.setData = function (e, t) {
            var o = JSON.stringify(t);
            this.setItem(e, o)
        }, e.setDataAsync = function (e, t, o, i) {
            void 0 === o && (o = null), void 0 === i && (i = null);
            var n = JSON.stringify(t);
            this.setItemAsync(e, n, o, i)
        }, e.getData = function (e, t) {
            void 0 === t && (t = null);
            var o = this.getItem(e);
            if (void 0 !== o && null !== o && "" !== o) try {
                return JSON.parse(o)
            } catch (e) {
                return console.error("getDataErr:", e), t
            }
            return t
        }, e.getDataAsync = function (e, t, o, i) {
            void 0 === o && (o = null), void 0 === i && (i = null), this.getItemAsync(e, t, function (e) {
                o && o(e)
            }, i)
        }, e.getItemInt = function (e, t) {
            void 0 === t && (t = 0);
            var o = this.getItem(e);
            return void 0 !== o && null !== o && "" !== o ? parseInt(o) : t
        }, e.getItemIntAsync = function (e, t, o, i) {
            void 0 === o && (o = null), void 0 === i && (i = null), this.getItemAsync(e, t, function (e) {
                o && o(e)
            }, i)
        }, e.removeData = function (e) {
            e = this._getGameKey(e), this._removeSync(e)
        }, e.clearDatas = function () {
            this._cleanSync()
        }, e._setSync = function (e, t) {
            "string" == typeof e && cc.sys.localStorage.setItem(e, t)
        }, e._getSync = function (e) {
            return cc.sys.localStorage.getItem(e)
        }, e._removeSync = function (e) {
            return cc.sys.localStorage.removeItem(e)
        }, e._cleanSync = function () {
            return cc.sys.localStorage.clear()
        }, e._setAsync = function (e, t, o, i, n) {
            void 0 === o && (o = null), void 0 === i && (i = null), void 0 === n && (n = null), "string" == typeof e && (cc.sys.localStorage.setItem(e, t), o && o())
        }, e._getAsync = function (e, t, o, i) {
            void 0 === t && (t = null), void 0 === o && (o = null), void 0 === i && (i = null), cc.sys.localStorage.getItem(e), t && t()
        }, e._removeAsync = function (e, t, o, i) {
            void 0 === t && (t = null), void 0 === o && (o = null), void 0 === i && (i = null), cc.sys.localStorage.removeItem(e), t && t()
        }, e._cleanAsync = function (e, t, o) {
            void 0 === e && (e = null), void 0 === t && (t = null), void 0 === o && (o = null), cc.sys.localStorage.clear(), e && e()
        }, e._keyCode = "", e
    }();
    o.default = i
}