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
    var i = e("PPBB_PopLayerBase"),
        n = e("PPBB_SoundUtils"),
        a = cc._decorator,
        s = a.ccclass,
        r = a.property,
        c = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.box = null, t.icon = null, t.okButton = null, t.spURL = null, t
            }
            return __extends(t, e), t.prototype.onLoad = function () {
                var t = this;
                e.prototype.onLoad.call(this), this.icon.node.opacity = 0, this.okButton.active = !1, this.box.on("stop", function () {
                    n.default.playSFX("get_chest"), t.icon.node.opacity = 255;
                    var e = cc.scaleTo(.5, 1).easing(cc.easeBackOut());
                    t.okButton.scale = 0, t.okButton.active = !0, t.okButton.runAction(e.clone())
                }, this)
            }, t.prototype.init = function (e) {
                var t = this;
                this.spURL = e;
                var o = this.icon.node.width,
                    i = this.icon.node.height;
                console.log(e), this.icon.setURL(e, function (e) {
                    t.icon.uniformScale(o, i)
                })
            }, t.prototype.onShow = function () {
                this.box.play()
            }, t.prototype.buttonCallback = function (e, t) {
                switch (t) {
                    case "ok":
                        this.close()
                }
            }, __decorate([r(cc.Animation)], t.prototype, "box", void 0), __decorate([r(cc.Sprite)], t.prototype, "icon", void 0), __decorate([r(cc.Node)], t.prototype, "okButton", void 0), t = __decorate([s], t)
        }(i.default);
    o.default = c
}