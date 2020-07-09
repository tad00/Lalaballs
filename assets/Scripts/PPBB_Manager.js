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
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var i = e("PPBB_EventCenter"),
        n = e("PPBB_SceneBase"),
        a = e("PPBB_GameData"),
        s = e("PPBB_PoolManager"),
        r = cc._decorator,
        c = r.ccclass,
        l = r.property,
        h = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.poolManager = null, t
            }
            var o;
            return __extends(t, e), o = t, t.prototype.onLoad = function () {
                e.prototype.onLoad && e.prototype.onLoad.call(this), o.Instance = this
            }, t.popVideo = function () {
                return new Promise(function (e, t) {
                    i.default.post(i.PPBB_EventMsg.POP_LAYER, {
                        name: "layer/videoLayer",
                        showLoading: !0,
                        callback: function (t) {
                            e(t)
                        }
                    })
                })
            }, t.popFail = function () {
                return new Promise(function (e, t) {
                    i.default.post(i.PPBB_EventMsg.POP_LAYER, {
                        name: "layer/failLayer",
                        showLoading: !0,
                        callback: function (t) {
                            e(t)
                        }
                    })
                })
            }, t.popUnlock = function (e) {
                return new Promise(function (t, o) {
                    i.default.post(i.PPBB_EventMsg.POP_LAYER, {
                        name: "layer/unlockLayer",
                        showLoading: !0,
                        callback: function (o) {
                            o.init(e), t(o)
                        }
                    })
                })
            }, t.popResult = function () {
                return new Promise(function (e, t) {
                    i.default.post(i.PPBB_EventMsg.POP_LAYER, {
                        name: "layer/resultLayer",
                        showLoading: !0,
                        callback: function (t) {
                            e(t)
                        }
                    })
                })
            }, t.popLevel = function () {
                return new Promise(function (e, t) {
                    i.default.post(i.PPBB_EventMsg.POP_LAYER, {
                        name: "layer/levelLayer",
                        showLoading: !0,
                        callback: function (t) {
                            e(t)
                        }
                    })
                })
            }, t.popMenu = function () {
                return new Promise(function (e, t) {
                    i.default.post(i.PPBB_EventMsg.POP_LAYER, {
                        name: "layer/mainLayer",
                        showLoading: !0,
                        callback: function (t) {
                            e(t)
                        }
                    })
                })
            }, t.popGame = function (e) {
                return a.default.curLevel = e, new Promise(function (e, t) {
                    i.default.post(i.PPBB_EventMsg.POP_LAYER, {
                        name: "layer/gameLayer",
                        showLoading: !0,
                        callback: function (t) {
                            e(t)
                        }
                    })
                })
            }, t.popSkin = function () {
                return new Promise(function (e, t) {
                    i.default.post(i.PPBB_EventMsg.POP_LAYER, {
                        name: "layer/skinLayer",
                        showLoading: !0,
                        callback: function (t) {
                            e(t)
                        }
                    })
                })
            }, t.Instance = null, __decorate([l(s.default)], t.prototype, "poolManager", void 0), t = o = __decorate([c], t)
        }(n.default);
    o.default = h
}