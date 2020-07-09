{
    const o = exports;
    const e = require;
    Object.defineProperty(o, "__esModule", {
        value: !0
    });
    var i, n = e("PPBB_UnitBase"),
        a = cc._decorator,
        s = a.ccclass,
        r = a.property;
    (function (e) {
        e[e.NONE = 0] = "NONE", e[e.SCALE = 1] = "SCALE", e[e.DOWN = 2] = "DOWN", e[e.FADE = 3] = "FADE", e[e.ROTATE = 4] = "ROTATE", e[e.LEFT_RIGHT = 5] = "LEFT_RIGHT", e[e.SCALE_FADE = 6] = "SCALE_FADE", e[e.SLIDE_IN_RIGHT = 7] = "SLIDE_IN_RIGHT", e[e.SLIDE_IN_BOTTOM = 8] = "SLIDE_IN_BOTTOM", e[e.FLIP_HORIZONTAL = 9] = "FLIP_HORIZONTAL", e[e.FLIP_VERTICAL = 10] = "FLIP_VERTICAL", e[e.JELLY = 11] = "JELLY", e[e.SLIDE_IN_LEFT = 12] = "SLIDE_IN_LEFT", e[e.SLIDE_IN_TOP = 13] = "SLIDE_IN_TOP", e[e.LEFT_IN = 14] = "LEFT_IN", e[e.RIGHT_IN = 15] = "RIGHT_IN", e[e.BOTTOM_IN = 16] = "BOTTOM_IN", e[e.TOP_IN = 17] = "TOP_IN"
    })(i = o.PopType || (o.PopType = {}));
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
    var c = [
            ["_normalShow", "_normalClose"],
            ["_scaleShow", "_scaleClose"],
            ["_downShow", "_downClose"],
            ["_fadeShow", "_fadeClose"],
            ["_rotateShow", "_rotateClose"],
            ["_leftRightShow", "_leftRightClose"],
            ["_scaleFadeShow", "_scaleFadeClose"],
            ["_slideInRightShow", "_slideInRightClose"],
            ["_slideInBottomShow", "_slideInBottomClose"],
            ["_flipHorizontalShow", "_flipHorizontalClose"],
            ["_flipVerticalShow", "_flipVerticalClose"],
            ["_jellyShow", "_fadeClose"],
            ["_slideInLeftShow", "_slideInLeftClose"],
            ["_slideInTopShow", "_slideInTopClose"],
            ["_leftInShow", "_sideInClose"],
            ["_rightInShow", "_sideInClose"],
            ["_bottomInShow", "_sideInClose"],
            ["_topInShow", "_sideInClose"]
        ],
        l = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.bg = null, t.bgOpacity = 200, t.zValue = 10, t.window = null, t.popType = i.SCALE, t.showTime = .2, t.closeTime = .2, t.blockInput = !0, t.needCloseEventButtons = [], t._buttonEventMap = new Map, t._closeData = null, t.closeCallbacks = [], t._customCloseCallbacks = [], t._isShow = !1, t._isClose = !1, t._isShowOver = !1, t._isCloseOver = !1, t._onShowFunc = null, t._onHideFunc = null, t._onCloseFunc = null, t.needInputLayer = !0, t._inputLayer = null, t.touchBgClose = !1, t.needCleanAfterClose = !0, t.autoResize = !0, t._windowX = 0, t._windowY = 0, t._windowScale = 0, t._windowOpacity = 0, t
            }
            return __extends(t, e), t.prototype.onLoad = function () {
                e.prototype.onLoad.call(this), this.node.zIndex = this.zValue, this.autoResize && (this.window.scale *= Math.min(n.default.sceneWidthRatio, n.default.sceneHeightRatio)), this._windowX = this.window.x, this._windowY = this.window.y, this._windowScale = this.window.scale, this._windowOpacity = this.window.opacity, this.blockInput && this._addBlockInput(), this.needInputLayer && this._addInputLayer(), this.touchBgClose && this._addTouchCloseEvent(), this._pushCloseEvent(), this.getComponent(cc.Widget) && this.getComponent(cc.Widget).updateAlignment(), this.window.getComponent(cc.Widget) && (this.window.getComponent(cc.Widget).updateAlignment(), this.window.getComponent(cc.Widget).enabled = !1), this.show()
            }, t.prototype.onDestroy = function () {
                this._inputLayer && (this._inputLayer = null), this.touchBgClose && this._removeTouchCloseEvent(), e.prototype.onDestroy.call(this)
            }, t.prototype.onEnable = function () {
                e.prototype.onEnable.call(this), this.onListener()
            }, t.prototype.onDisable = function () {
                this.offListener(), e.prototype.onDisable.call(this)
            }, t.prototype.onListener = function () {
                this.window.on("position-changed", this.onPositionChange, this), this.window.on("scale-changed", this.onScaleChange, this), this.window.on("rotation-changed", this.onRotationChange, this), this.window.on("size-changed", this.onSizeChange, this)
            }, t.prototype.offListener = function () {
                this.window.off("position-changed", this.onPositionChange, this), this.window.off("scale-changed", this.onScaleChange, this), this.window.off("rotation-changed", this.onRotationChange, this), this.window.off("size-changed", this.onSizeChange, this)
            }, t.prototype.onPositionChange = function (e) {}, t.prototype.onScaleChange = function (e) {}, t.prototype.onRotationChange = function (e) {}, t.prototype.onSizeChange = function (e) {}, t.prototype.show = function () {
                this._isShow || this._isShowOver || (this._isShow = !0, this._isClose = !1, this._isShowOver = !1, this._isCloseOver = !1, this.node.active = !0, this.bg && (this.bg.opacity = 0, this.bg.runAction(cc.fadeTo(this.showTime, this.bgOpacity))), this.window ? this[c[this.popType][0]]() : this._showOver())
            }, t.prototype._showOver = function () {
                this._isShow = !1, this._isShowOver = !0, this.onShow(), this._onShowFunc && this._onShowFunc(), this._inputLayer && (this._inputLayer.active = !1)
            }, t.prototype.close = function (e, t) {
                if (!this._isClose && !this._isCloseOver) {
                    if (this._closeData = t, this.onHide(), this._onHideFunc && this._onHideFunc(), this._inputLayer && (this._inputLayer.active = !0), this.bg && this.closeTime > 0 && this.bg.runAction(cc.fadeOut(this.closeTime)), this.window) this[c[this.popType][1]]();
                    else this._closeOver();
                    this._isClose = !0
                }
            }, t.prototype._closeOver = function () {
                if (this._isClose = !1, this._isCloseOver = !0, this.onClose(), this._onCloseFunc && this._onCloseFunc(), this._closeData) {
                    var e = this._buttonEventMap.get(this._closeData);
                    cc.Component.EventHandler.emitEvents(e, this)
                }
                if (this.closeCallbacks.length > 0 && cc.Component.EventHandler.emitEvents(this.closeCallbacks, this), this._customCloseCallbacks.length > 0)
                    for (var t = 0, o = this._customCloseCallbacks; t < o.length; t++) {
                        var i = o[t];
                        i.callback.call(i.target)
                    }
                this.bg && this.bg.stopAllActions(), this._isShow = !1, this._isShowOver = !1, this.needCleanAfterClose ? (this.node.removeFromParent(!0), this.node.destroy()) : this.node.active = !1
            }, t.prototype.setCustomCloseCallback = function (e, t) {
                this._customCloseCallbacks.push({
                    callback: e,
                    target: t
                })
            }, t.prototype.setOnShowFunc = function (e) {
                this._onShowFunc = e
            }, t.prototype.setOnHideFnuc = function (e) {
                this._onHideFunc = e
            }, t.prototype.setOnCloseFunc = function (e) {
                this._onCloseFunc = e
            }, t.prototype.onClose = function () {}, t.prototype.onShow = function () {}, t.prototype.onHide = function () {}, t.prototype.showInputLayer = function () {
                this._inputLayer ? this._inputLayer.active = !0 : this._addInputLayer()
            }, t.prototype.hideInputLayer = function () {
                this._inputLayer && (this._inputLayer.active = !1)
            }, t.prototype._addBlockInput = function () {
                this.getComponent(cc.BlockInputEvents) || this.addComponent(cc.BlockInputEvents)
            }, t.prototype._addInputLayer = function () {
                var e = new cc.Node("input");
                e.position = cc.v2(0, 0), e.width = this.node.width, e.height = this.node.height, e.addComponent(cc.BlockInputEvents), this.node.addChild(e, 100), this._inputLayer = e
            }, t.prototype._pushCloseEvent = function () {
                for (var e = 0, t = 0, o = this.needCloseEventButtons; t < o.length; t++) {
                    var i = o[t],
                        n = new cc.Component.EventHandler;
                    n.target = this.node, n.component = "PPBB_PopLayerBase", n.handler = "close", n.customEventData = "close" + e, this._buttonEventMap.set(n.customEventData, i.clickEvents.slice()), i.clickEvents = [], i.clickEvents.push(n), e++
                }
            }, t.prototype._addTouchCloseEvent = function () {
                this.bg && this.bg.on("touchend", this.close, this), this.window && this.window.on("touchend", function () {})
            }, t.prototype._removeTouchCloseEvent = function () {
                this.bg && this.bg.off("touchend", this.close, this), this.window && this.window.off("touchend")
            }, t.prototype._normalShow = function () {
                this._showOver()
            }, t.prototype._normalClose = function () {
                this._closeOver()
            }, t.prototype._scaleShow = function () {
                var e = this;
                this.window.scale = 0, this.window.opacity = this._windowOpacity;
                var t = this.showTime;
                this.window.runAction(cc.sequence(cc.scaleTo(t, this._windowScale).easing(cc.easeBackOut()), cc.callFunc(function (t) {
                    e.window.scale = e._windowScale, e._showOver()
                })))
            }, t.prototype._scaleClose = function () {
                var e = this,
                    t = this.closeTime;
                this.window.runAction(cc.sequence(cc.spawn(cc.scaleTo(t, 0).easing(cc.easeBackIn()), cc.fadeOut(this.closeTime)), cc.callFunc(function (t) {
                    e.window.scale = 0, e._closeOver()
                })))
            }, t.prototype._downShow = function () {
                var e = this,
                    t = this.showTime;
                this.window.y = this.node.height / 2 + this.window.height / 2 + 50, this.window.runAction(cc.sequence(cc.moveTo(t, 0, this._windowY).easing(cc.easeElasticOut(.8)), cc.callFunc(function (t) {
                    e.window.y = e._windowY, e._showOver()
                })))
            }, t.prototype._downClose = function () {
                var e = this,
                    t = this.node.height / 2 + this.window.height / 2 + 50;
                this.window.runAction(cc.sequence(cc.moveTo(this.closeTime, 0, t).easing(cc.easeElasticIn(.8)), cc.callFunc(function (o) {
                    e.window.y = t, e._closeOver()
                })))
            }, t.prototype._fadeShow = function () {
                var e = this,
                    t = this.showTime;
                this.window.opacity = 0, this.window.runAction(cc.sequence(cc.fadeIn(t), cc.callFunc(function (t) {
                    e.window.opacity = 255, e._showOver()
                })))
            }, t.prototype._fadeClose = function () {
                var e = this;
                this.window.runAction(cc.sequence(cc.fadeOut(this.closeTime), cc.callFunc(function (t) {
                    e.window.opacity = 0, e._closeOver()
                })))
            }, t.prototype._rotateShow = function () {
                var e = this,
                    t = this.window.height,
                    o = -this.node.height / 2,
                    i = -(this._windowY - t / 2 - o) / t;
                this.window.anchorY = i, this.window.y = o, this.window.degrees = -145, this.window.runAction(cc.sequence(cc.rotateTo(this.showTime, 0), cc.callFunc(function (t) {
                    e.window.degrees = 0, e._showOver()
                })))
            }, t.prototype._rotateClose = function () {
                var e = this;
                this.window.runAction(cc.sequence(cc.rotateTo(this.closeTime, 145), cc.callFunc(function (t) {
                    e.window.degrees = 145, e._closeOver()
                })))
            }, t.prototype._leftRightShow = function () {
                var e = this,
                    t = -this.node.width / 2 - this.window.width / 2 - 50;
                this.window.x = t, this.window.runAction(cc.sequence(cc.moveTo(this.showTime, this._windowX, this._windowY).easing(cc.easeElasticOut(.8)), cc.callFunc(function (t) {
                    e.window.x = e._windowX, e._showOver()
                })))
            }, t.prototype._leftRightClose = function () {
                var e = this,
                    t = this.node.width / 2 + this.window.width / 2 + 50;
                this.window.runAction(cc.sequence(cc.moveTo(this.closeTime, t, this._windowY).easing(cc.easeElasticIn(.8)), cc.callFunc(function (o) {
                    e.window.x = t, e._closeOver()
                })))
            }, t.prototype._scaleFadeShow = function () {
                var e = this;
                this.window.opacity = 0, this.window.scale = 5, this.window.runAction(cc.sequence(cc.spawn(cc.scaleTo(this.showTime, this._windowScale), cc.fadeIn(this.showTime)), cc.callFunc(function (t) {
                    e.window.scale = e._windowScale, e.window.opacity = 255, e._showOver()
                })))
            }, t.prototype._scaleFadeClose = function () {
                var e = this;
                this.window.runAction(cc.sequence(cc.spawn(cc.scaleTo(this.closeTime, 5), cc.fadeOut(this.closeTime)), cc.callFunc(function (t) {
                    e.window.scale = 5, e.window.opacity = 0, e._closeOver()
                })))
            }, t.prototype._slideInRightShow = function () {
                this._slideShow(cc.v2(1, 0))
            }, t.prototype._slideInRightClose = function () {
                this._slideClose(cc.v2(1, 0))
            }, t.prototype._slideInBottomShow = function () {
                this._slideShow(cc.v2(0, -1))
            }, t.prototype._slideInBottomClose = function () {
                this._slideClose(cc.v2(0, -1))
            }, t.prototype._slideInLeftShow = function () {
                this._slideShow(cc.v2(-1, 0))
            }, t.prototype._slideInLeftClose = function () {
                this._slideClose(cc.v2(-1, 0))
            }, t.prototype._slideInTopShow = function () {
                this._slideShow(cc.v2(0, 1))
            }, t.prototype._slideInTopClose = function () {
                this._slideClose(cc.v2(0, 1))
            }, t.prototype._flipHorizontalShow = function () {
                var e = this;
                this.window.opacity = 0, this.window.scaleY = 0, this.window.runAction(cc.sequence(cc.spawn(cc.scaleTo(this.showTime, 1, 1), cc.fadeIn(this.showTime)), cc.callFunc(function (t) {
                    e.window.scaleY = 1, e.window.opacity = 255, e._showOver()
                })))
            }, t.prototype._flipHorizontalClose = function () {
                var e = this;
                this.window.runAction(cc.sequence(cc.spawn(cc.scaleTo(this.closeTime, 1, 0), cc.fadeOut(this.closeTime)), cc.callFunc(function (t) {
                    e.window.opacity = 0, e.window.scaleY = 0, e._closeOver()
                })))
            }, t.prototype._flipVerticalShow = function () {
                var e = this;
                this.window.opacity = 0, this.window.scaleX = 0, this.window.runAction(cc.sequence(cc.spawn(cc.scaleTo(this.showTime, 1, 1), cc.fadeIn(this.showTime - .1)), cc.callFunc(function (t) {
                    e.window.scaleX = 1, e.window.opacity = 255, e._showOver()
                })))
            }, t.prototype._flipVerticalClose = function () {
                var e = this;
                this.window.runAction(cc.sequence(cc.spawn(cc.scaleTo(this.closeTime, 0, 1), cc.fadeOut(this.closeTime - .1)), cc.callFunc(function (t) {
                    e.window.opacity = 0, e.window.scaleX = 0, e._closeOver()
                })))
            }, t.prototype._jellyShow = function () {
                var e = this,
                    t = this.showTime - .5;
                t = t < .1 ? .1 : t, this.window.scaleX = this.window.scaleY = 0, this.window.runAction(cc.sequence(cc.scaleTo(t, 1), cc.scaleTo(.1, 1.05, .95), cc.scaleTo(.1, .95, 1.05), cc.scaleTo(.11, 1.02, .98), cc.scaleTo(.11, .98, 1.02), cc.scaleTo(.12, 1), cc.callFunc(function (t) {
                    t.scaleX = t.scaleY = 1, e._showOver()
                })))
            }, t.prototype._leftInShow = function () {
                this._sideInShow(cc.v2(-1, 0))
            }, t.prototype._rightInShow = function () {
                this._sideInShow(cc.v2(1, 0))
            }, t.prototype._bottomInShow = function () {
                this._sideInShow(cc.v2(0, -1))
            }, t.prototype._topInShow = function () {
                this._sideInShow(cc.v2(0, 1))
            }, t.prototype._sideInShow = function (e) {
                var t = this;
                0 !== e.x && (this.window.x = (this.window.width + cc.winSize.width / 2) * e.x - this.window.anchorX * this.window.width), 0 !== e.y && (this.window.y = (this.window.height + cc.winSize.height / 2) * e.y - this.window.anchorY * this.window.height), this._sideX = this.window.x, this._sideY = this.window.y, this.window.runAction(cc.sequence(cc.moveTo(this.showTime, this._windowX, this._windowY).easing(cc.easeSineOut()), cc.callFunc(function (e) {
                    t.window.x = t._windowX, t.window.y = t._windowY, t._showOver()
                })))
            }, t.prototype._sideInClose = function () {
                var e = this;
                this.window.runAction(cc.sequence(cc.moveTo(this.closeTime, this._sideX, this._sideY).easing(cc.easeSineIn()), cc.callFunc(function (t) {
                    e._closeOver()
                })))
            }, t.prototype._slideShow = function (e) {
                var t = this;
                this.window.opacity = 0, this.window.x = this._windowX + 50 * e.x, this.window.y = this._windowY + 50 * e.y, this.window.runAction(cc.sequence(cc.spawn(cc.moveTo(this.showTime, this._windowX, this._windowY), cc.fadeIn(this.showTime - .1)), cc.callFunc(function (e) {
                    t.window.x = t._windowX, t.window.opacity = 255, t._showOver()
                })))
            }, t.prototype._slideClose = function (e) {
                var t = this;
                this.window.runAction(cc.sequence(cc.spawn(cc.moveTo(this.closeTime, this._windowX + 50 * e.x, this._windowY + 50 * e.y), cc.fadeOut(this.closeTime - .1)), cc.callFunc(function (e) {
                    t.window.opacity = 0, t._closeOver()
                })))
            }, __decorate([r({
                type: cc.Node,
                tooltip: "\u5f39\u7a97\u80cc\u666f"
            })], t.prototype, "bg", void 0), __decorate([r({
                tooltip: "\u80cc\u666f\u900f\u660e\u5ea6"
            })], t.prototype, "bgOpacity", void 0), __decorate([r], t.prototype, "zValue", void 0), __decorate([r({
                type: cc.Node,
                tooltip: "\u5f39\u7a97\u7a97\u4f53"
            })], t.prototype, "window", void 0), __decorate([r({
                type: cc.Enum(i),
                tooltip: "\u5f39\u7a97\u7c7b\u578b"
            })], t.prototype, "popType", void 0), __decorate([r({
                tooltip: "\u5f39\u51fa\u65f6\u95f4"
            })], t.prototype, "showTime", void 0), __decorate([r({
                tooltip: "\u5173\u95ed\u65f6\u95f4"
            })], t.prototype, "closeTime", void 0), __decorate([r({
                tooltip: "\u662f\u5426\u541e\u566c\u4e0b\u5c42\u4e8b\u4ef6"
            })], t.prototype, "blockInput", void 0), __decorate([r({
                type: [cc.Button],
                tooltip: "\u94ae\u5217\u8868\uff0c\u52a0\u5165\u5217\u8868\u7684\u6309\u94ae\u5728\u70b9\u51fb\u540e\u4f1a\u81ea\u52a8\u5173\u95ed,\u5e76\u5728\u6267\u884c\u5b8c\u5173\u95ed\u52a8\u753b\u540e\u6267\u884c\u6309\u94ae\u5173\u8054\u7684\u4e8b\u4ef6"
            })], t.prototype, "needCloseEventButtons", void 0), __decorate([r({
                type: [cc.Component.EventHandler],
                tooltip: "\u5f39\u7a97\u5173\u95ed\u540e\u6267\u884c\u7684\u4e8b\u4ef6\u5217\u8868"
            })], t.prototype, "closeCallbacks", void 0), __decorate([r({
                tooltip: "\u662f\u5426\u542f\u7528\u9876\u5c42\u906e\u7f69"
            })], t.prototype, "needInputLayer", void 0), __decorate([r({
                tooltip: "\u70b9\u51fb\u80cc\u666f\u5173\u95ed\u7a97\u53e3\u6a21\u5f0f"
            })], t.prototype, "touchBgClose", void 0), __decorate([r({
                tooltip: "\u662f\u5426\u9700\u8981\u518d\u5173\u95ed\u540e\u5f7b\u5e95\u79fb\u9664"
            })], t.prototype, "needCleanAfterClose", void 0), __decorate([r({
                tooltip: "\u81ea\u9002\u5e94\u7f29\u653e"
            })], t.prototype, "autoResize", void 0), t = __decorate([s], t)
        }(n.default);
    o.default = l
}