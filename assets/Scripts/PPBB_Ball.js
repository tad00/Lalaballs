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
        n = e("PPBB_SkinData"),
        a = cc._decorator,
        s = a.ccclass,
        r = a.property,
        c = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.sprite = null, t.physicsObj = null, t.physicsCollider = null, t.collider = null, t.beControl = !1, t.onRunning = null, t._collisionToggle = !1, t.running = !1, t.isBig = !1, t.isStatic = !1, t
            }
            var o;
            return __extends(t, e), o = t, Object.defineProperty(t.prototype, "collisionToggle", {
                get: function () {
                    return this._collisionToggle
                },
                set: function (e) {
                    this._collisionToggle = e, this.physicsCollider && (this.physicsCollider.enabled = e), this.collider && (this.collider.enabled = e)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "ballColor", {
                get: function () {
                    return this._ballColor
                },
                set: function (e) {
                    -1 === e ? (this._ballColor = -1, this.sprite.setURL(n.default.getBallGray()), this.isBig || (this.collider && (this.collider.tag = i.UnitTag.GRAY_BALL), this.physicsCollider && (this.physicsCollider.tag = i.UnitTag.GRAY_BALL)), this.running = !1) : (this._ballColor = e, this.sprite.setURL(n.default.getBallColor()), this.isBig || (this.collider && (this.collider.tag = i.UnitTag.COLOR_BALL), this.physicsCollider && (this.physicsCollider.tag = i.UnitTag.COLOR_BALL)), this.running = !0)
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.onLoad = function () {
                this.physicsObj = this.getComponent(cc.RigidBody), this.physicsCollider = this.getComponent(cc.PhysicsCircleCollider), this.collider = this.getComponent(cc.CircleCollider), this.node.scale = Math.getRandom(.1, .18), this.originScale = this.node.scale
            }, t.prototype.turnBig = function (e, t, o) {
                this.node.scale = .6, this.isBig = !0, this.isStatic = t, this.bigNumber = e, this.onBigBroke = o, this.originScale = this.node.scale, this.collider && (this.collider.tag = i.UnitTag.BIG_BALL), this.physicsCollider && (this.physicsCollider.tag = i.UnitTag.BIG_BALL)
            }, t.prototype.bigBroke = function () {
                this.onBigBroke && this.onBigBroke(this.bigNumber)
            }, t.prototype.onBeginContact = function (e, t, o) {}, t.prototype.onCollisionEnter = function (e, t) {
                this && !this.running && (e.tag !== i.UnitTag.COLOR_BALL && e.tag !== i.UnitTag.BIG_BALL || e.getComponent(o).running && (this.ballColor = 999, this.physicsObj.type = 2, this.node.stopAllActions(), this.onRunning && this.onRunning()))
            }, t.prototype.onCollisionStay = function (e, t) {
                this && !this.running && (e.tag !== i.UnitTag.COLOR_BALL && e.tag !== i.UnitTag.BIG_BALL || e.getComponent(o).running && (this.ballColor = 999, this.physicsObj.type = 2, this.node.stopAllActions(), this.onRunning && this.onRunning()))
            }, t.prototype.update = function (e) {
                this.beControl && (this.physicsObj.linearVelocity = cc.v2())
            }, __decorate([r(cc.Sprite)], t.prototype, "sprite", void 0), t = o = __decorate([s], t)
        }(cc.Component);
    o.default = c
}