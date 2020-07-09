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
        a = e("PPBB_Obstacle2"),
        s = cc._decorator,
        r = s.ccclass,
        c = (s.property, function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(t, e), t.prototype.onCollisionEnter = function (e, t) {
                if (e.tag === i.UnitTag.COLOR_BALL) {
                    console.log("boomForce");
                    var o = t.node.position;
                    e.node.position.sub(o).normalize();
                    e.getComponent(n.default).physicsObj.applyForceToCenter(cc.v2(0, 1).mul(i.PPBB_GameOption.BOOM_FORCE))
                } else if (e.tag === i.UnitTag.OBSTACLE) {
                    var s = e.node.getComponent(a.default);
                    if (s && s.checkWithBoom) {
                        e.node.removeComponent(cc.PhysicsCollider), e.node.removeComponent(cc.RigidBody), e.node.removeComponent(cc.Collider);
                        var r = Math.getRandom(-50, 50);
                        e.node.runAction(cc.sequence(cc.spawn(cc.rotateBy(1, Math.getRandom(-400, 400)), cc.bezierBy(1, [cc.v2(), cc.v2(r, 200), cc.v2(2 * r, -cc.winSize.height)])), cc.fadeOut(.1), cc.callFunc(function (e) {
                            e.destroy()
                        })))
                    }
                }
            }, t = __decorate([r], t)
        }(cc.Component));
    o.default = c
}