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
        n = cc._decorator,
        a = n.ccclass,
        s = n.property,
        r = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.leftBoard = null, t.rightBoard = null, t.tgNode = null, t.originY = 7, t.onY = -23, t.isOn = !1, t
            }
            return __extends(t, e), t.prototype.onLoad = function () {}, t.prototype.turn = function () {
                this.isOn || (this.isOn = !0, this.tgNode.y = this.isOn ? this.onY : this.originY, this.leftBoard.removeComponent(cc.PhysicsCollider), this.leftBoard.runAction(cc.sequence(cc.moveTo(.6, this.leftBoard.x - this.leftBoard.width, this.leftBoard.y), cc.callFunc(function (e) {
                    e.destroy()
                }))), this.rightBoard.removeComponent(cc.PhysicsCollider), this.rightBoard.runAction(cc.sequence(cc.moveTo(.6, this.rightBoard.x + this.leftBoard.width, this.rightBoard.y), cc.callFunc(function (e) {
                    e.destroy()
                }))))
            }, t.prototype.onCollisionEnter = function (e, t) {
                e.tag !== i.UnitTag.COLOR_BALL && e.tag !== i.UnitTag.BIG_BALL || this.turn()
            }, __decorate([s(cc.Node)], t.prototype, "tgNode", void 0), t = __decorate([a], t)
        }(cc.Component);
    o.default = r
}