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
                return t.bg = null, t.window = null, t.labelNode = null, t.titleLabel = null, t.contentLabel = null, t.buttonNode = null, t.cancelButton = null, t.confirmLabel = null, t.cancelLabel = null, t
            }
            var o;
            return __extends(t, e), o = t, t.prototype.onLoad = function () {
                var e = Math.min(cc.winSize.width / cc.view.getDesignResolutionSize().width, 1),
                    t = Math.min(cc.winSize.height / cc.view.getDesignResolutionSize().height, 1);
                this.node.scale = Math.min(e, t)
            }, t.prototype.show = function (e) {
                var t = this,
                    o = e.title,
                    i = void 0 === o ? "" : o,
                    n = e.content,
                    a = void 0 === n ? "" : n,
                    s = e.showCancel,
                    r = void 0 === s || s,
                    c = e.cancelText,
                    l = void 0 === c ? "\u53d6\u6d88" : c,
                    h = e.confirmText,
                    d = void 0 === h ? "\u786e\u8ba4" : h,
                    u = e.confirm,
                    p = e.cancel;
                "" === i && (this.titleLabel.node.active = !1), this.cancelButton.active = r, this.titleLabel.string = i, this.contentLabel.string = a, this.cancelLabel.string = l, this.confirmLabel.string = d, this._cancelEvent = p, this._confirmEvent = u, this.bg.opacity = 0, this.bg.runAction(cc.fadeTo(.2, 100)), this.window.opacity = 0, this.window.runAction(cc.sequence(cc.delayTime(.05), cc.fadeIn(.05))), this.scheduleOnce(function () {
                    t.buttonNode.width = Math.max(t.labelNode.width, 500)
                }, .05)
            }, t.prototype.hide = function () {
                o.modalPool.put(this.node)
            }, t.prototype.buttonCallback = function (e, t) {
                switch (t) {
                    case "confirm":
                        this._confirmEvent && this._confirmEvent(), this.hide();
                        break;
                    case "cancel":
                        this._cancelEvent && this._cancelEvent(), this.hide()
                }
            }, t.prototype.onDestroy = function () {
                cc.game.isPersistRootNode(this.node) && cc.game.removePersistRootNode(this.node)
            }, t.modalPrefabTemp = null, t.modalPool = new cc.NodePool, t.getModal = function (e, t) {
                var i, n = o;
                return n.modalPool.size() > 0 ? (i = n.modalPool.get(), e && e(i)) : n.modalPrefabTemp ? (i = cc.instantiate(n.modalPrefabTemp), e && e(i)) : void cc.loader.loadRes("prefab/module/modal/modalNode", cc.Prefab, function (o, a) {
                    return o ? (console.log("load modal err", o), t && t({
                        errMsg: "\u8d44\u6e90\u52a0\u8f7d\u5931\u8d25"
                    })) : (n.modalPrefabTemp = a, i = cc.instantiate(a), e && e(i))
                })
            }, t.showModal = function (e) {
                var t = e.title,
                    i = void 0 === t ? "" : t,
                    n = e.content,
                    a = void 0 === n ? "" : n,
                    s = e.showCancel,
                    r = void 0 === s || s,
                    c = e.cancelText,
                    l = void 0 === c ? "\u53d6\u6d88" : c,
                    h = e.confirmText,
                    d = void 0 === h ? "\u786e\u8ba4" : h,
                    u = e.confirm,
                    p = void 0 === u ? null : u,
                    f = e.cancel,
                    _ = void 0 === f ? null : f,
                    g = e.success,
                    v = void 0 === g ? null : g,
                    m = e.fail,
                    y = void 0 === m ? null : m,
                    w = e.complete,
                    B = void 0 === w ? null : w;
                o.getModal(function (e) {
                    var t = e.getComponent(o);
                    t.show({
                        title: i,
                        content: a,
                        showCancel: r,
                        cancelText: l,
                        confirmText: d,
                        confirm: p,
                        cancel: _
                    }), cc.director.getScene().addChild(e, 999), cc.game.isPersistRootNode(e) || cc.game.addPersistRootNode(e), v && v(t), B && B()
                }, function (e) {
                    y && y(e), B && B()
                })
            }, __decorate([a(cc.Node)], t.prototype, "bg", void 0), __decorate([a(cc.Node)], t.prototype, "window", void 0), __decorate([a(cc.Node)], t.prototype, "labelNode", void 0), __decorate([a(cc.Label)], t.prototype, "titleLabel", void 0), __decorate([a(cc.Label)], t.prototype, "contentLabel", void 0), __decorate([a(cc.Node)], t.prototype, "buttonNode", void 0), __decorate([a(cc.Node)], t.prototype, "cancelButton", void 0), __decorate([a(cc.Label)], t.prototype, "confirmLabel", void 0), __decorate([a(cc.Label)], t.prototype, "cancelLabel", void 0), t = o = __decorate([n], t)
        }(cc.Component);
    o.default = s, window.PPBB_ModalNode = s
}