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
    var i = e("PPBB_StorageUtils"),
        n = e("PPBB_ConfigHandler"),
        a = e("Base64");
    i.default.setKeyCode("$$P_P_B_B");
    var s = function (e) {
        function t() {
            var o = e.call(this) || this;
            return o._tableData = null, o._tableCopy = null, o._storageData = null, o._storageCopy = null, o.serverKeyList = [], o.serverKey = null, t.HandlerList.push(o), o.onInit(), o
        }
        return __extends(t, e), 
        t.prototype.onServerLoadOver = function () {}, 
        t.prototype.initTableData = function (e) {
            if (e) {
                this._tableCopy = e;
                var t = {};
                for (var o in e) {
                    var i = e[o];
                    "object" == typeof i && void 0 !== i.default ? void 0 !== i.secretType ? (t[o] = a.encode(i.default.toString()), i.saveServer && this.serverKeyList.push("_" + o)) : (t[o] = i.default, i.saveServer && this.serverKeyList.push(o)) : t[o] = i
                }
                this._tableData = this._initTableData(this._tableKey, t), this.mergeTableProp()
            }
        }, 
        t.prototype.mergeTableProp = function () {
            var e = function (e) {
                    var o, i = t._tableCopy[e];
                    if ("object" == typeof i && void 0 !== i.secretType) {
                        var n = i.secretType,
                            a = "_" + e;
                        Object.defineProperties(t, ((o = {})[a] = {
                            get: function () {
                                return this._tableData[e]
                            },
                            set: function (t) {
                                this._tableData[e] = t
                            }
                        }, o[e] = {
                            get: function () {
                                return "number" === n ? this._getSecretNumber(this[a]) : "string" === n ? this._getSecretString(this[a]) : "boolean" === n ? this._getSecretBool(this[a]) : "object" === n ? this._getSecretObject(this[a]) : void 0
                            },
                            set: function (e) {
                                this[a] = "object" !== n ? this._setSecret(e) : this._setSecretObject(e)
                            }
                        }, o))
                    } else Object.defineProperty(t, e, {
                        get: function () {
                            return this._tableData[e]
                        },
                        set: function (t) {
                            this._tableData[e] = t
                        }
                    })
                },
                t = this;
                for (var o in this._tableData) e(o)
        }, t.prototype.getTable = function () {
            return this._tableData
        }, t.prototype.saveTableData = function () {
            this._tableKey && this._tableData && i.default.setDataAsync(this._tableKey, this._tableData)
        }, t.prototype.removeTableData = function () {
            this._tableKey && this._tableData && (i.default.removeData(this._tableKey), this._tableData = null)
        }, t.prototype.removeStorageData = function () {
            if (this._storageData) {
                for (var e in this._storageData) i.default.removeData(e);
                this._storageData = null
            }
        }, t.prototype.initStorageData = function (e, t) {
            if (void 0 === t && (t = !0), e)
                for (var o in this._storageCopy = e, this._storageData = {}, e) {
                    var i = e[o],
                        n = void 0;
                    "object" == typeof i && void 0 !== i.default ? void 0 !== i.secretType ? (n = a.encode(i.default.toString()), i.saveServer && this.serverKeyList.push("_" + o)) : (n = i.default, i.saveServer && this.serverKeyList.push(o)) : n = i;
                    var s = this._initStorage(o, n);
                    this._storageData[o] = s, this.mergeStorageProp(o, t)
                }
        }, t.prototype.mergeStorageProp = function (e, t) {
            var o;
            if (e) {
                var i = this._storageCopy[e];
                if ("object" == typeof i && void 0 !== i.secretType) {
                    var n = i.secretType,
                        a = "_" + name;
                    Object.defineProperties(this, ((o = {})[a] = {
                        get: function () {
                            return this._storageData[a]
                        },
                        set: function (e) {
                            this.setStorageData(a, e, t)
                        }
                    }, o[name] = {
                        get: function () {
                            return "number" === n ? this._getSecretNumber(this[a]) : "string" === n ? this._getSecretString(this[a]) : "boolean" === n ? this._getSecretBool(this[a]) : "object" === n ? this._getSecretObject(this[a]) : void 0
                        },
                        set: function (e) {
                            this[a] = "object" !== n ? this._setSecret(e) : this._setSecretObject(e)
                        }
                    }, o))
                } else Object.defineProperty(this, e, {
                    get: function () {
                        return this._storageData[e]
                    },
                    set: function (o) {
                        this.setStorageData(e, o, t)
                    }
                })
            }
        }, t.prototype.setStorageData = function (e, t, o) {
            void 0 === o && (o = !0), this._storageData[e] = t, o && i.default.setDataAsync(e, t)
        }, t.prototype._initStorage = function (e, t) {
            return null === i.default.getData(e) ? (i.default.setData(e, t), t) : i.default.getData(e)
        }, t.prototype._initTableData = function (e, t) {
            if (null === i.default.getData(e)) return i.default.setData(e, t), t;
            var o = i.default.getData(e);
            for (var n in t) - 1 === Object.keys(o).indexOf(n) && (o[n] = t[n]);
            for (var n in o) - 1 === Object.keys(t).indexOf(n) && delete o[n];
            return i.default.setData(e, o), o
        }, t.prototype._getSecretNumber = function (e) {
            if ("number" == typeof e) return e;
            if ("" === e) return 0;
            var t = Number(a.decode(e.toString()));
            return isNaN(t) ? 0 : t
        }, t.prototype._getSecretString = function (e) {
            return "" === e ? "" : String(a.decode(e.toString()))
        }, t.prototype._getSecretBool = function (e) {
            return "boolean" == typeof e ? e : "" !== e && Boolean(a.decode(e.toString()))
        }, t.prototype._getSecretObject = function (e) {
            return "object" == typeof e ? e : "" === e ? null : JSON.parse(a.decode(e.toString()))
        }, t.prototype._setSecret = function (e) {
            return a.encode(e.toString())
        }, t.prototype._setSecretObject = function (e) {
            return a.encode(JSON.stringify(e))
        }, t.prototype.initSecretList = function (e) {
            var t = function (t) {
                    var i = e[t],
                        n = i.key;
                    Object.defineProperty(o, t, {
                        get: function () {
                            return "number" === i.type ? this._getSecretNumber(this[n]) : "string" === i.type ? this._getSecretString(this[n]) : "boolean" === i.type ? this._getSecretBool(this[n]) : "object" === i.type ? this._getSecretObject(this[n]) : void 0
                        },
                        set: function (e) {
                            "object" !== i.type ? this[n] = this._setSecret(e) : this[n] = this._setSecretObject(e)
                        }
                    })
                },
                o = this;
            for (var i in e) t(i)
        }, t.HandlerList = [], t
    }(n.default);
    o.default = s
}