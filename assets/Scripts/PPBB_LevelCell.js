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
    var i = e("PPBB_viewCell"),
        n = e("PPBB_GameData"),
        a = cc._decorator,
        s = a.ccclass,
        r = a.property,
        c = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.lvLabel = null, t.starNode = null, t.starSpFrames = [], t.btn1 = null, t.btn2 = null, t.btn3 = null, t.starSpList = [], t
            }
            return __extends(t, e), t.prototype.onLoad = function () {
                e.prototype.onLoad && e.prototype.onLoad.call(this);
                for (var t = 0; t < this.starNode.children.length; t++) {
                    var o = this.starNode.children[t].getComponent(cc.Sprite);
                    this.starSpList.push(o)
                }
                this.originLabelY = this.lvLabel.node.y
            }, t.prototype.start = function () {
                this.btn1.on("touchend", this._onTouchend, this), this.btn2.on("touchend", this._onTouchend, this), this.btn3.on("touchend", this._onTouchend, this);
                var e = this;
                this.btn1.getComponent(cc.Button)._updateSpriteTransition = function (t) {
                    var o = this._getStateSprite(t);
                    this._sprite && o && (this._sprite.spriteFrame = o), e.lvLabel.node.active && (0 === t ? e.lvLabel.node.y = e.originLabelY : 2 === t && (e.lvLabel.node.y = e.originLabelY - 5))
                }, this.btn2.getComponent(cc.Button)._updateSpriteTransition = function (t) {
                    var o = this._getStateSprite(t);
                    this._sprite && o && (this._sprite.spriteFrame = o), e.lvLabel.node.active && (0 === t || 1 === t ? e.lvLabel.node.y = e.originLabelY : 2 === t && (e.lvLabel.node.y = e.originLabelY - 5))
                }
            }, t.prototype.onDestroy = function () {}, t.prototype.init = function (e, t) {
                var o = t.list,
                    i = t.touchCallback;
                if (this.touchCallback = i, e >= o.length) this.node.active = !1;
                else {
                    this.node.active = !0;
                    var a = o[e];
                    this.lv = a;
                    var s = n.default.unlockLevel;
                    if (a === s) this.showBtn2(a);
                    else if (a < s) {
                        var r = n.default.getLevelStar(a);
                        this.showBtn1(a, r)
                    } else this.showBtn3()
                }
            }, t.prototype.showBtn1 = function (e, t) {
                this.unlockState = 1, this.btn1.active = !0, this.btn2.active = !1, this.btn3.active = !1, this.starNode.active = !0, this.lvLabel.node.active = !0, this.lvLabel.string = e;
                for (var o = 0; o < this.starSpList.length; o++) this.starSpList[o].spriteFrame = o < t ? this.starSpFrames[0] : this.starSpFrames[1]
            }, t.prototype.showBtn2 = function (e) {
                this.unlockState = 2, this.btn1.active = !1, this.btn2.active = !0, this.btn3.active = !1, this.starNode.active = !1, this.lvLabel.node.active = !0, this.lvLabel.string = e
            }, t.prototype.showBtn3 = function () {
                this.unlockState = 3, this.btn1.active = !1, this.btn2.active = !1, this.btn3.active = !0, this.starNode.active = !1, this.lvLabel.node.active = !1
            }, t.prototype._onTouchend = function () {
                this.touchCallback && this.touchCallback(this.lv, this.unlockState)
            }, __decorate([r(cc.Label)], t.prototype, "lvLabel", void 0), __decorate([r(cc.Node)], t.prototype, "starNode", void 0), __decorate([r([cc.SpriteFrame])], t.prototype, "starSpFrames", void 0), __decorate([r(cc.Node)], t.prototype, "btn1", void 0), __decorate([r(cc.Node)], t.prototype, "btn2", void 0), __decorate([r(cc.Node)], t.prototype, "btn3", void 0), t = __decorate([s], t)
        }(i.default);
    o.default = c
}