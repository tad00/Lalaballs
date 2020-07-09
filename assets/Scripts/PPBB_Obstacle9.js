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
    var i = e("PPBB_Define"),
        n = e("PPBB_EventCenter"),
        a = e("PPBB_SoundUtils"),
        s = cc._decorator,
        r = s.ccclass,
        c = s.property,
        l = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.boomState = !1, t.boomList = null, t.boomEffect = null, t.boomSpFrame = null, t
            }
            return __extends(t, e), t.prototype.onLoad = function () {}, t.prototype.playBoom = function () {
                var e = this;
                this.boomState || (this.boomState = !0, this.node.getComponent(cc.Sprite).spriteFrame = this.boomSpFrame, this.node.runAction(cc.sequence(cc.scaleTo(1, 1.05 * this.node.scaleX / Math.abs(this.node.scaleX), 1.05), cc.callFunc(function () {
                    e.node.removeComponent(cc.PhysicsCollider), e.node.removeComponent(cc.RigidBody), e.getComponent(cc.Animation).play()
                }))))
            }, t.prototype.doBoom = function () {
                console.log("doBoom"), this.boomEffect.active = !0, a.default.playSFX("boom"), n.default.post(n.PPBB_EventMsg.SCENE_SHAKE, this.node.position)
            }, t.prototype.boomOver = function () {
                this.node.destroy()
            }, t.prototype.onCollisionEnter = function (e, t) {
                this.boomState || e.tag !== i.UnitTag.COLOR_BALL && e.tag !== i.UnitTag.BIG_BALL || this.playBoom()
            }, t.prototype.onCollisionStay = function (e, t) {
                this.boomState || e.tag !== i.UnitTag.COLOR_BALL && e.tag !== i.UnitTag.BIG_BALL || this.playBoom()
            }, __decorate([c(cc.Node)], t.prototype, "boomEffect", void 0), __decorate([c(cc.SpriteFrame)], t.prototype, "boomSpFrame", void 0), t = __decorate([r], t)
        }(cc.Component);
    o.default = l
}