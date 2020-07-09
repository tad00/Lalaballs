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
    var i = cc._decorator,
        n = i.ccclass,
        a = i.property,
        s = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.loadingPanel = null, t.loading = null, t.label = null, t.mask = !0, t.delayTime = 0, t.str = "Loading...", t._blockInput = null, t
            }
            var o;
            return __extends(t, e), o = t, t.create = function (e, t) {
                o.Instance ? t && t({
                    errMsg: "\u5b9e\u4f8b\u5df2\u5b58\u5728"
                }) : cc.loader.loadRes("prefab/module/loading/loadingNode", cc.Prefab, function (i, n) {
                    if (i) return console.log("load toast err", i), t && t({
                        errMsg: "\u8d44\u6e90\u52a0\u8f7d\u5931\u8d25"
                    });
                    var a = cc.instantiate(n),
                        s = a.getComponent(o);
                    return o.Instance = s, cc.director.getScene().addChild(a, 999), cc.game.isPersistRootNode(a) || cc.game.addPersistRootNode(a), e && e(s)
                })
            }, t.getLoading = function (e, t) {
                o.Instance || this.isMake ? e && e(o.Instance) : (this.isMake = !0, o.create(e, t))
            }, t.showLoading = function (e) {
                var t = this,
                    i = e.title,
                    n = void 0 === i ? null : i,
                    a = e.mask,
                    s = void 0 === a || a,
                    r = e.delayTime,
                    c = void 0 === r ? 0 : r,
                    l = e.success,
                    h = void 0 === l ? null : l,
                    d = e.fail,
                    u = void 0 === d ? null : d,
                    p = e.complete,
                    f = void 0 === p ? null : p;
                this.isShow = !0, o.getLoading(function (e) {
                    e && (t.isShow ? (e.showLoading(n, s, c), h && h(e), f && f()) : (e.hideLoading(), t._hideCallback && t._hideCallback()))
                }, function (e) {
                    u && u(e), f && f()
                })
            }, t.hideLoading = function (e) {
                var t = e.success,
                    i = void 0 === t ? null : t;
                this.isShow = !1, this._hideCallback = i, o.Instance && o.Instance.hideLoading(i)
            }, t.prototype.showLoading = function (e, t, o) {
                void 0 === t && (t = this.mask), void 0 === o && (o = this.delayTime), this.node.active = !0, this.loading.active = !1, this.loadingPanel.active = !1, this.showBlockInput(t);
                var i = this;

                function n() {
                    i.loadingPanel.active = !0, i._showLoading(), i.label.string = e
                }
                o > 0 ? (this.node.stopAllActions(), this.node.runAction(cc.sequence(cc.delayTime(o), cc.callFunc(function (e) {
                    n()
                })))) : n()
            }, t.prototype.showBlockInput = function (e) {
                e ? this._blockInput ? this._blockInput.enabled = !0 : this._blockInput = this.addComponent(cc.BlockInputEvents) : this._blockInput && (this._blockInput.enabled = !1)
            }, t.prototype.hideLoading = function (e) {
                this.node.active && (this.node.stopAllActions(), this.node.active = !1, e && e())
            }, t.prototype._showLoading = function () {
                this.loading.active = !0, this.loading.stopAllActions(), this.loading.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(function (e) {
                    e.degrees -= 36
                })).repeatForever())
            }, t.prototype.onDestroy = function () {
                cc.game.isPersistRootNode(this.node) && cc.game.removePersistRootNode(this.node)
            }, t.Instance = null, t.isShow = !1, t.isMake = !1, __decorate([a(cc.Node)], t.prototype, "loadingPanel", void 0), __decorate([a(cc.Node)], t.prototype, "loading", void 0), __decorate([a(cc.Label)], t.prototype, "label", void 0), __decorate([a], t.prototype, "mask", void 0), __decorate([a], t.prototype, "delayTime", void 0), __decorate([a], t.prototype, "str", void 0), t = o = __decorate([n], t)
        }(cc.Component);
    o.default = s, window.PPBB_LoadingNodeBase = s
}