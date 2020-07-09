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
    var i, n = cc._decorator,
        a = n.ccclass,
        s = n.property;
    (function (e) {
        e[e.NONE = 0] = "NONE", e[e.FADEIN = 1] = "FADEIN", e[e.FADEOUT = 2] = "FADEOUT", e[e.CIRCLE = 3] = "CIRCLE", e[e.SCALE = 4] = "SCALE", e[e.LANDSCAPE = 5] = "LANDSCAPE", e[e.PORTRAIT = 6] = "PORTRAIT", e[e.FLIP = 7] = "FLIP"
    })(i = o.PPBB_SwitchEffect || (o.PPBB_SwitchEffect = {}));
    var r = [
            ["normalShowIn", "normalShowOut"],
            ["fadeInShowIn", "fadeInShowOut"],
            ["fadeOutShowIn", "fadeOutShowOut"],
            ["circleShowIn", "circleShowOut"],
            ["scaleShowIn", "scaleShowOut"],
            ["landscapeShowIn", "landscapeShowOut"],
            ["portraitShowIn", "portraitShowOut"],
            ["flipShowIn", "flipShowOut"]
        ],
        c = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.switchEffect = i.FADEIN, t.effectTime = .5, t.effectSpriteFrame = null, t._sceneName = null, t._effectNode = null, t._openUpdate = !1, t._curTime = 0, t._curCallback = null, t._curEndCallback = null, t
            }
            return __extends(t, e), t.prototype.loadScene = function (e, t, o) {
                this.node.zIndex = 10, this._sceneName = e, this._callback = t, o && (this.switchEffect = o), this.node.active = !0, this.showIn()
            }, t.prototype.showIn = function () {
                this[r[this.switchEffect][0]]()
            }, t.prototype.showOut = function () {
                this[r[this.switchEffect][1]]()
            }, t.prototype._showInOver = function () {
                var e = this;
                cc.director.loadScene(this._sceneName, function () {
                    e.showOut(), e._callback && e._callback()
                })
            }, t.prototype._showOutOver = function () {
                this.node.active = !1, this._sceneName = null, this._callback = null, this._effectNode && (this._effectNode.removeFromParent(!0), this._effectNode.destroy(), this._effectNode = null)
            }, t.prototype.normalShowIn = function () {
                this._showInOver()
            }, t.prototype.normalShowOut = function () {
                this._showOutOver()
            }, t.prototype._createFullSceneBg = function () {
                var e = new cc.Node("bg"),
                    t = e.addComponent(cc.Sprite);
                t.spriteFrame = this.effectSpriteFrame, t.sizeMode = cc.Sprite.SizeMode.CUSTOM, e.zIndex = 15, this.node.addChild(e);
                var o = cc.winSize;
                return e.width = o.width + 5, e.height = o.height + 5, e.color = cc.color(0, 0, 0), this._effectNode = e, e
            }, t.prototype.fadeInShowIn = function () {
                var e = this;
                this._createFullSceneBg(), this._effectNode.opacity = 0, this._effectNode.runAction(cc.sequence(cc.fadeIn(this.effectTime), cc.callFunc(function (t) {
                    e._effectNode.opacity = 255, e._showInOver()
                })))
            }, t.prototype.fadeInShowOut = function () {
                var e = this;
                this._effectNode.runAction(cc.sequence(cc.fadeOut(this.effectTime), cc.callFunc(function (t) {
                    e._effectNode.opacity = 0, e._showOutOver()
                })))
            }, t.prototype.fadeOutShowIn = function () {
                var e = this,
                    t = cc.find("Canvas");
                t.runAction(cc.sequence(cc.fadeOut(this.effectTime), cc.callFunc(function (o) {
                    t.opacity = 0, e._showInOver()
                })))
            }, t.prototype.fadeOutShowOut = function () {
                var e = this,
                    t = cc.find("Canvas");
                t.opacity = 0, t.runAction(cc.sequence(cc.fadeIn(this.effectTime), cc.callFunc(function (o) {
                    t.opacity = 255, e._showOutOver()
                })))
            }, t.prototype._createMaskLayer = function () {
                var e = new cc.Node("mask"),
                    t = e.addComponent(cc.Mask);
                this.node.addChild(e), t.inverted = !0, t.segements = 100, this._effectNode = e;
                var o = new cc.Node("showNode"),
                    i = o.addComponent(cc.Sprite);
                i.spriteFrame = this.effectSpriteFrame, i.sizeMode = cc.Sprite.SizeMode.CUSTOM, e.addChild(o);
                var n = cc.winSize;
                return o.width = n.width + 5, o.height = n.height + 5, o.color = cc.color(0, 0, 0), t
            }, t.prototype.circleShowIn = function () {
                var e = this;
                this._createMaskLayer().type = 1;
                var t = 2 * Math.sqrt(this.node.width / 2 * this.node.width / 2 + this.node.height / 2 * this.node.height / 2);
                this._effectNode.width = this._effectNode.height = t, this._runUpdateAction(function () {
                    var o = 1 - e._curTime / e.effectTime,
                        i = (o < 0 ? 0 : o) * t;
                    e._effectNode.width = e._effectNode.height = i
                }, function () {
                    e._effectNode.width = e._effectNode.height = 0, e._showInOver()
                })
            }, t.prototype.circleShowOut = function () {
                var e = this,
                    t = 2 * Math.sqrt(this.node.width / 2 * this.node.width / 2 + this.node.height / 2 * this.node.height / 2);
                this._effectNode.width = this._effectNode.height = 0, this._runUpdateAction(function () {
                    var o = e._curTime / e.effectTime;
                    e._effectNode.width = e._effectNode.height = o * t
                }, function () {
                    e._effectNode.width = e._effectNode.height = t, e._showOutOver()
                })
            }, t.prototype.scaleShowIn = function () {
                var e = this,
                    t = cc.find("Canvas");
                t.runAction(cc.sequence(cc.scaleTo(this.effectTime, 0).easing(cc.easeBackIn()), cc.callFunc(function (o) {
                    t.scale = 0, e._showInOver()
                })))
            }, t.prototype.scaleShowOut = function () {
                var e = this,
                    t = cc.find("Canvas");
                t.scale = 0, t.runAction(cc.sequence(cc.scaleTo(this.effectTime, 1).easing(cc.easeBackOut()), cc.callFunc(function (o) {
                    t.scale = 1, e._showOutOver()
                })))
            }, t.prototype.landscapeShowIn = function () {
                var e = this;
                this._createMaskLayer().type = 0;
                var t = this.node.height;
                this._effectNode.width = this.node.width, this._effectNode.height = t, this._runUpdateAction(function () {
                    var o = 1 - e._curTime / e.effectTime,
                        i = (o < 0 ? 0 : o) * t;
                    e._effectNode.height = i
                }, function () {
                    e._effectNode.height = 0, e._showInOver()
                })
            }, t.prototype.landscapeShowOut = function () {
                var e = this,
                    t = this.node.height;
                this._effectNode.height = 0, this._runUpdateAction(function () {
                    var o = e._curTime / e.effectTime,
                        i = (o < 0 ? 0 : o) * t;
                    e._effectNode.height = i
                }, function () {
                    e._effectNode.height = t, e._showOutOver()
                })
            }, t.prototype.portraitShowIn = function () {
                var e = this;
                this._createMaskLayer().type = 0;
                var t = this.node.width;
                this._effectNode.width = t, this._effectNode.height = this.node.height, this._runUpdateAction(function () {
                    var o = 1 - e._curTime / e.effectTime,
                        i = (o < 0 ? 0 : o) * t;
                    e._effectNode.width = i
                }, function () {
                    e._effectNode.width = 0, e._showInOver()
                })
            }, t.prototype.portraitShowOut = function () {
                var e = this,
                    t = this.node.width;
                this._effectNode.width = 0, this._runUpdateAction(function () {
                    var o = e._curTime / e.effectTime,
                        i = (o < 0 ? 0 : o) * t;
                    e._effectNode.width = i
                }, function () {
                    e._effectNode.width = t, e._showOutOver()
                })
            }, t.prototype.flipShowIn = function () {
                var e = this,
                    t = cc.find("Canvas");
                t.runAction(cc.sequence(cc.scaleTo(this.effectTime, 0, 1).easing(cc.easeIn(.5)), cc.callFunc(function (o) {
                    t.scaleX = 0, e._showInOver()
                })))
            }, t.prototype.flipShowOut = function () {
                var e = this,
                    t = cc.find("Canvas");
                t.scaleX = 0, t.runAction(cc.sequence(cc.scaleTo(this.effectTime, 1, 1).easing(cc.easeOut(.5)), cc.callFunc(function (o) {
                    t.scale = 1, e._showOutOver()
                })))
            }, t.prototype._runUpdateAction = function (e, t) {
                this._curCallback = e, this._curEndCallback = t, this._openUpdate = !0
            }, t.prototype.update = function (e) {
                this._openUpdate && (this._curTime > this.effectTime ? (this._curTime = 0, this._openUpdate = !1, this._curEndCallback()) : (this._curTime += e, this._curCallback()))
            }, __decorate([s({
                type: cc.Enum(i),
                tooltip: "\u5207\u6362\u6548\u679c"
            })], t.prototype, "switchEffect", void 0), __decorate([s({
                tooltip: "\u52a8\u753b\u65f6\u95f4"
            })], t.prototype, "effectTime", void 0), __decorate([s({
                type: cc.SpriteFrame,
                tooltip: "\u52a8\u753b\u56fe\u7247"
            })], t.prototype, "effectSpriteFrame", void 0), t = __decorate([a], t)
        }(cc.Component);
    o.default = c
}