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
                return t.checkWithBoom = !1, t
            }
            return __extends(t, e), t.prototype.onLoad = function () {
                var e = this.getComponent(cc.PhysicsPolygonCollider),
                    t = this.getComponent(cc.PolygonCollider),
                    o = this.node.width * -this.node.anchorX,
                    i = this.node.width * (1 - this.node.anchorX),
                    n = this.node.height * (1 - this.node.anchorY),
                    a = this.node.height * -this.node.anchorY,
                    s = [cc.v2(o, a), cc.v2(o, n), cc.v2(i, n), cc.v2(i, a)];
                e.offset = cc.v2(), e.points = s.slice(), t.offset = cc.v2(), t.points = s.slice()
            }, __decorate([a], t.prototype, "checkWithBoom", void 0), t = __decorate([n], t)
        }(cc.Component);
    o.default = s
}