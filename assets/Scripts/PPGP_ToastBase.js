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
    var i, n = cc._decorator,
        a = n.ccclass,
        s = n.property;
    (function (e) {
        e[e.NONE = 0] = "NONE", e[e.SCALE = 1] = "SCALE", e[e.FADE_UP = 2] = "FADE_UP", e[e.SCALE_FADE_UP = 3] = "SCALE_FADE_UP", e[e.UP_ADD = 4] = "UP_ADD"
    })(i = o.PPBB_ToastType || (o.PPBB_ToastType = {}));
    var r = [
            ["_noneShow"],
            ["_scaleShow"],
            ["_fadeUpShow"],
            ["_scaleFadeUpShow"]
        ],
        c = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.toastType = i.SCALE, t.waitTime = 1, t.toastLabel = null, t._toastType = null, t._waitTime = 0, t._callback = null, t
            }
            var o;
            return __extends(t, e), o = t, t.getToast = function (e, t) {
                var i, n = o;
                return n.toastPool.size() > 0 ? (i = n.toastPool.get(), e && e(i)) : n.toastPrefabTemp ? (i = cc.instantiate(n.toastPrefabTemp), e && e(i)) : void cc.loader.loadRes("prefab/module/toast/toastNode", cc.Prefab, function (o, a) {
                    return o ? (console.log("load toast err", o), t && t({
                        errMsg: "\u8d44\u6e90\u52a0\u8f7d\u5931\u8d25"
                    })) : (n.toastPrefabTemp = a, i = cc.instantiate(a), e && e(i))
                })
            }, t.showToast = function (e) {
                var t = e.title,
                    i = void 0 === t ? null : t,
                    n = e.duration,
                    a = void 0 === n ? 1.5 : n,
                    s = e.type,
                    r = void 0 === s ? null : s,
                    c = e.callback,
                    l = void 0 === c ? null : c,
                    h = e.success,
                    d = void 0 === h ? null : h,
                    u = e.fail,
                    p = void 0 === u ? null : u,
                    f = e.complete,
                    _ = void 0 === f ? null : f;
                o.getToast(function (e) {
                    var t = e.getComponent(o);
                    cc.director.getScene().addChild(e, 999), t.show(i, a, r, l), cc.game.isPersistRootNode(e) || cc.game.addPersistRootNode(e), d && d(), _ && _()
                }, function () {
                    p && p(), _ && _()
                })
            }, t.prototype.onLoad = function () {
                var e = Math.min(cc.winSize.width / cc.view.getDesignResolutionSize().width, 1),
                    t = Math.min(cc.winSize.height / cc.view.getDesignResolutionSize().height, 1);
                this.node.scale = Math.min(e, t)
            }, t.prototype.getNodeScale = function () {
                var e = Math.min(cc.winSize.width / cc.view.getDesignResolutionSize().width, 1),
                    t = Math.min(cc.winSize.height / cc.view.getDesignResolutionSize().height, 1);
                return Math.min(e, t)
            }, t.prototype.show = function (e, t, o, i) {
                this._waitTime = t || this.waitTime, this._toastType = o || this.toastType, this.node.active = !0, this.toastLabel.string = e + "", this.node.stopAllActions(), this.showAction(), this._callback = i
            }, t.prototype.hide = function (e) {
                this.node.active = !1, e && (this._callback = e), this._callback && this._callback()
            }, t.prototype.showAction = function () {
                this.node.stopAllActions(), this[r[this._toastType][0]]()
            }, t.prototype._noneShow = function () {
                var e = this;
                this.node.opacity = 255, this.node.runAction(cc.sequence(cc.delayTime(this._waitTime), cc.fadeOut(.4), cc.callFunc(function (t) {
                    t.active = !1, e._callback && e._callback()
                })))
            }, t.prototype._scaleShow = function () {
                var e = this;
                this.node.opacity = 255, this.node.scale = 0, this.node.runAction(cc.sequence(cc.scaleTo(.25, this.getNodeScale()).easing(cc.easeElasticOut(.6)), cc.delayTime(this._waitTime), cc.fadeOut(.4), cc.callFunc(function (t) {
                    t.active = !1, e._callback && e._callback()
                })))
            }, t.prototype._fadeUpShow = function () {
                var e = this;
                this.node.opacity = 255;
                var t = this.node.parent.convertToNodeSpaceAR(cc.v2(cc.winSize.width / 2, cc.winSize.height / 2));
                this.node.y = t.y;
                var o = Math.max(this._waitTime - 1.29, 0);
                this.node.runAction(cc.sequence(cc.delayTime(o), cc.moveBy(.86, 0, 250), cc.spawn(cc.moveBy(.43, 0, 125), cc.fadeOut(.43)), cc.callFunc(function (t) {
                    t.active = !1, e._callback && e._callback()
                })))
            }, t.prototype._scaleFadeUpShow = function () {
                var e = this;
                this.node.opacity = 255, this.node.scale = 0;
                var t = this.node.parent.convertToNodeSpaceAR(cc.v2(cc.winSize.width / 2, cc.winSize.height / 2));
                this.node.y = t.y - 50, this.toastLabel.node.color = cc.Color.WHITE, this.node.runAction(cc.sequence(cc.scaleTo(.2, this.getNodeScale()).easing(cc.easeBackOut()), cc.callFunc(function (t) {
                    e.toastLabel.node.color = cc.Color.YELLOW
                }), cc.delayTime(.6), cc.spawn(cc.moveBy(.2, 0, 40), cc.fadeOut(.2)), cc.callFunc(function (t) {
                    t.active = !1, e._callback && e._callback()
                })))
            }, t.prototype.onDestroy = function () {
                cc.game.isPersistRootNode(this.node) && cc.game.removePersistRootNode(this.node)
            }, t.toastPrefabTemp = null, t.toastPool = new cc.NodePool, __decorate([s({
                type: cc.Enum(i),
                tooltip: "\u5f39\u51fa\u7c7b\u578b"
            })], t.prototype, "toastType", void 0), __decorate([s({
                tooltip: "\u52a8\u753b\u65f6\u95f4"
            })], t.prototype, "waitTime", void 0), __decorate([s(cc.Label)], t.prototype, "toastLabel", void 0), t = o = __decorate([a], t)
        }(cc.Component);
    o.default = c, window.PPBB_ToastBase = c
}