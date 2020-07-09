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
        a = e("PPBB_Ball"),
        s = e("PPBB_SoundUtils"),
        r = cc._decorator,
        c = r.ccclass,
        l = r.property,
        h = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.fengshan = null, t.sfxId = null, t.sfxPlay = !1, t
            }
            return __extends(t, e), t.prototype.onLoad = function () {
                this.fengshan.runAction(cc.rotateBy(.6, 360).repeatForever())
            }, t.prototype.onCollisionEnter = function (e, t) {
                if (e.tag === i.UnitTag.COLOR_BALL || e.tag === i.UnitTag.BIG_BALL) {
                    var o = e.node.getComponent(a.default);
                    o.beControl = !0, e.node.runAction(cc.sequence(cc.spawn(cc.scaleTo(.4, 0), cc.moveTo(.4, this.node.x + Math.getRandom(-10, 10), this.node.y + Math.getRandom(-10, 10))), cc.callFunc(function (t) {
                        s.default.playSFX("ballfeng"), n.default.post(n.PPBB_EventMsg.PLAY_EFFECT, {
                            name: "yanwu",
                            pos: e.node.position
                        }), n.default.post(n.PPBB_EventMsg.ON_BALL_REMOVE, o)
                    })))
                }
            }, t.prototype.update = function (e) {}, __decorate([l(cc.Node)], t.prototype, "fengshan", void 0), t = __decorate([c], t)
        }(cc.Component);
    o.default = h
}