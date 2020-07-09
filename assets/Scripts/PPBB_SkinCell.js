{
    const o = exports;
    const e = require;
    Object.defineProperty(
        o, "__esModule", {
            value: !0
        });
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
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
    var i = e("PPBB_ClassModule"),
        n = cc._decorator,
        a = n.ccclass,
        s = n.property,
        r = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.ballIcon = null,
                    t.boxNode = null,
                    t.boxST = new i.PPBB_SpriteToggle,
                    t.descLabel = null,
                    t.cellDb = new i.PPBB_SpriteToggle, t
            }
            return __extends(t, e),
                t.prototype.onLoad = function () {
                    this.node.on("touchend", this.onTouch, this), this.maxWidth = this.ballIcon.node.width, this.maxHeight = this.ballIcon.node.height
                },
                t.prototype.onDestroy = function () {
                    this.node.off("touchend", this.onTouch, this)
                },
                t.prototype.init = function (e, t) {
                    var o = this,
                        i = t.touchCallback,
                        n = t.unlocked,
                        a = t.desc,
                        s = t.using,
                        r = t.url,

                        c = t.newUnlock;
                    n ? c ? (
                            this.ballIcon.node.active = !1,
                            this.boxNode.active = !0,
                            this.boxST.turn(1)) :
                        (this.ballIcon.node.active = !0, this.boxNode.active = !1, this.ballIcon.setURL(r, function () {
                            o.ballIcon.uniformScale(o.maxWidth, o.maxHeight)
                        })) :
                        (this.boxNode.stopAllActions(), this.boxNode.active = !0, this.ballIcon.node.active = !1, this.boxST.turn(0)), this.cellDb.turn(s ? 1 : 0),
                        this.descLabel.string = a,
                        this.touchCallback = function () {
                            if (i(n), !n) {
                                o.boxNode.stopAllActions(),
                                    o.boxNode.rotation = 0;
                                o.boxNode.runAction(cc.sequence(cc.rotateBy(.05, -10),
                                    cc.rotateBy(.1, 20),
                                    cc.rotateBy(.1, -20),
                                    cc.rotateBy(.1, 20),
                                    cc.rotateBy(.1, -20),
                                    cc.rotateBy(.1, 10)))
                            }
                        }
                },
                t.prototype.playUnlock = function () {
                    console.log("playUnlock")
                },
                t.prototype.onTouch = function () {
                    this.touchCallback && this.touchCallback()
                },
                __decorate([s(cc.Sprite)], t.prototype, "ballIcon", void 0),
                __decorate([s(cc.Node)], t.prototype, "boxNode", void 0),
                __decorate([s({
                    type: i.PPBB_SpriteToggle
                })], t.prototype, "boxST", void 0),
                __decorate([s(cc.Label)], t.prototype, "descLabel", void 0),
                __decorate([s({
                    type: i.PPBB_SpriteToggle
                })], t.prototype, "cellDb", void 0),
                t = __decorate([a], t)
        }(cc.Component);
    o.default = r
}