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
        n = e("PPBB_SoundUtils"),
        a = cc._decorator,
        s = a.ccclass,
        r = a.property,
        c = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.carSmoke = null, t.boxCollider = null, t.carSprite = null, t
            }
            return __extends(t, e), t.prototype.onLoad = function () {
                this.carSprite.node.zIndex = 5
            }, t.prototype.playAni = function () {
                this.carSprite.node.stopAllActions(), this.carSprite.node.scaleY = 1, this.carSprite.node.runAction(cc.sequence(cc.scaleTo(.1, 1, .9), cc.scaleTo(.1, 1, 1)))
            }, t.prototype.move = function (e) {
                this.boxCollider.enabled = !1, this.carSmoke.node.active = !0, this.carSmoke.resetSystem(), n.default.playSFX("caraway"), this.node.stopAllActions(), this.node.runAction(cc.sequence(cc.moveTo(1, cc.winSize.width / 2 + this.node.width + 100, this.node.y).easing(cc.easeBackIn()), cc.callFunc(function (t) {
                    e && e()
                })))
            }, t.prototype.onCollisionEnter = function () {
                this.playAni(), n.default.playSFX("ballcar"), i.default.post(i.PPBB_EventMsg.ON_BALL_IN)
            }, __decorate([r(cc.ParticleSystem)], t.prototype, "carSmoke", void 0), __decorate([r(cc.BoxCollider)], t.prototype, "boxCollider", void 0), __decorate([r(cc.Sprite)], t.prototype, "carSprite", void 0), t = __decorate([s], t)
        }(cc.Component);
    o.default = c
}