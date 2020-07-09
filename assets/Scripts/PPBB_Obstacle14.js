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
        n = e("PPBB_Ball"),
        a = e("PPBB_EventCenter"),
        s = e("PPBB_SoundUtils"),
        r = cc._decorator,
        c = r.ccclass,
        l = (r.property, function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(t, e), t.prototype.onLoad = function () {}, t.prototype.onCollisionEnter = function (e, t) {
                if (e.tag === i.UnitTag.COLOR_BALL || e.tag === i.UnitTag.BIG_BALL) {
                    var o = e.node.getComponent(n.default);
                    o.beControl = !0, a.default.post(a.PPBB_EventMsg.ON_BALL_REMOVE, o), s.default.playSFX("ballci"), a.default.post(a.PPBB_EventMsg.PLAY_EFFECT, {
                        name: "zhakai2",
                        pos: e.node.position
                    })
                }
            }, t = __decorate([c], t)
        }(cc.Component));
    o.default = l
}