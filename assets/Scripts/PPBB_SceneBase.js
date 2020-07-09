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
        n = e("PPBB_FileUtils"),
        a = e("PPBB_PopLayerBase"),
        s = e("PPBB_PPSDK"),
        r = e("PPBB_UnitBase"),
        c = cc._decorator,
        l = c.ccclass,
        h = (c.property, function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(t, e), t.prototype.onLoad = function () {
                e.prototype.onLoad.call(this), i.default.register(i.PPBB_EventMsg.POP_LAYER, this, this._onPopLayer)
            }, t.prototype.onDestroy = function () {
                e.prototype.onDestroy.call(this), i.default.removeRegister(this)
            }, t.prototype._onPopLayer = function (e) {
                var t = e.name,
                    o = e.callback,
                    i = e.manager,
                    n = e.onError,
                    a = e.showLoading;
                this.popLayer(t, o, i, n, a)
            }, t.prototype.popLayer = function (e, t, o, i, a) {
                void 0 === a && (a = !0);
                var r = null,
                    c = n.default.getSimpleUrlWithoutAsp(e);
                if (this.node.getChildByName(c)) r = this.node.getChildByName(c), this._handleComponent(r, !0, o, t);
                else if (this[c])(r = cc.instantiate(this[c])).name = c, this._handleComponent(r, !1, o, t);
                else {
                    var l = this;
                    a && s.default.showLoading();
                    var h = function () {
                        n.default.getPrefabAsync(e, function (e) {
                            if (a && s.default.hideLoading(), !l.node.getChildByName(c)) {
                                var i = cc.instantiate(e);
                                i.name = c, l._handleComponent(i, !1, o, t)
                            }
                        }, function (e) {
                            a && s.default.hideLoading(), i && i(), l.scheduleOnce(function (e) {
                                l.showModal(function (e) {
                                    e.config && h()
                                })
                            }, 1.5)
                        })
                    };
                    h()
                }
            }, t.prototype._handleComponent = function (e, t, o, i) {
                var n = e.getComponent(a.default);
                n && void 0 !== n.mamager && (n.manager = o || this), t ? n.show && n.show() : e.parent = this.node, i && i(n)
            }, t.prototype.showModal = function (e, t, o) {
                s.default.showModal({
                    title: "\u52a0\u8f7d\u5931\u8d25",
                    content: "\u7f51\u7edc\u5f00\u5c0f\u5dee\u4e86\uff0c\u8bf7\u91cd\u8bd5!",
                    showCancel: !1,
                    cancelText: "\u53d6\u6d88",
                    confirmText: "\u786e\u8ba4",
                    success: e,
                    fail: t,
                    complete: o
                })
            }, t = __decorate([l], t)
        }(r.default));
    o.default = h
}