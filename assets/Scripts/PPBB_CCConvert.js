{
    const e = require;
    var i = a(e("PPBB_FileUtils"));
    var n = a(e("PPBB_SoundUtils"));

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperties(cc.Node.prototype, {
        xy: {
            get: function () {
                return this.position
            },
            set: function (e) {
                this.position = e
            },
            configurable: !0
        },
        realWidth: {
            get: function () {
                return Math.abs(this.width * this.scaleX)
            },
            configurable: !0
        },
        realHeight: {
            get: function () {
                return Math.abs(this.height * this.scaleY)
            },
            configurable: !0
        },
        maxX: {
            get: function () {
                return this.x + this.width * this.scaleX * (1 - this.anchorX)
            },
            set: function (e) {
                this.x = e - this.width * this.scaleX * (1 - this.anchorX)
            },
            configurable: !0
        },
        minX: {
            get: function () {
                return this.x - this.width * this.scaleX * this.anchorX
            },
            set: function (e) {
                this.x = e + this.width * this.scaleX * this.anchorX
            },
            configurable: !0
        },
        maxY: {
            get: function () {
                return this.y + this.height * (1 - this.anchorY) * this.scaleY
            },
            set: function (e) {
                this.y = e - this.height * (1 - this.anchorY) * this.scaleY
            },
            configurable: !0
        },
        minY: {
            get: function () {
                return this.y - this.height * this.scaleY * this.anchorY
            },
            set: function (e) {
                this.y = e + this.height * this.scaleY * this.anchorY
            },
            configurable: !0
        },
        centerX: {
            get: function () {
                return this.x + (.5 - this.anchorX) * this.width * this.scaleX
            },
            set: function (e) {
                this.x = e - (.5 - this.anchorX) * this.width * this.scaleX
            },
            configurable: !0
        },
        centerY: {
            get: function () {
                return this.y + (.5 - this.anchorY) * this.height * this.scaleY
            },
            set: function (e) {
                this.y = e - (.5 - this.anchorY) * this.height * this.scaleY
            },
            configurable: !0
        },
        top: {
            get: function () {
                if (!this.parent) return null;
                var e = this.maxY,
                    t = this.parent;
                return (1 - t.anchorY) * t.height * t.scaleY - e
            },
            set: function (e) {
                if (this.parent) {
                    var t = this.parent,
                        o = (1 - t.anchorY) * t.height * t.scaleY;
                    this.maxY = o - e
                }
            },
            configurable: !0
        },
        bottom: {
            get: function () {
                if (!this.parent) return null;
                var e = this.minY,
                    t = this.parent;
                return e - -t.anchorY * t.height * t.scaleY
            },
            set: function (e) {
                if (this.parent) {
                    var t = this.parent,
                        o = -t.anchorY * t.height * t.scaleY;
                    this.minY = o + e
                }
            },
            configurable: !0
        },
        left: {
            get: function () {
                if (!this.parent) return null;
                var e = this.minX,
                    t = this.parent;
                return e - -t.anchorX * t.width * t.scaleX
            },
            set: function (e) {
                if (this.parent) {
                    var t = this.parent,
                        o = -t.anchorX * t.width * t.scaleX;
                    this.minX = o + e
                }
            },
            configurable: !0
        },
        right: {
            get: function () {
                if (!this.parent) return null;
                var e = this.parent,
                    t = this.maxX;
                return (1 - e.anchorX) * e.width * e.scaleX - t
            },
            set: function (e) {
                if (this.parent) {
                    var t = this.parent,
                        o = (1 - t.anchorX) * t.width * t.scaleX;
                    this.maxX = o - e
                }
            },
            configurable: !0
        },
        degrees: {
            get: function () {
                return -this.rotation
            },
            set: function (e) {
                this.rotation = -e
            },
            configurable: !0
        }
    });
    cc.Node.prototype.pauseSelf = function (e) {
        if (this.active) {
            this.getNumberOfRunningActions() > 0 && (e ? this.pauseAllActions() : this.resumeAllActions());
            var t = this.getComponent(cc.Animation);
            t && (e ? t.pause() : t.resume()), e ? this.pauseSystemEvents(!0) : this.resumeSystemEvents(!0)
        }
    };
    cc.Node.prototype.removeSelf = function () {
        this.parent && this.removeFromParent(), this.destroy()
    };
    cc.Node.prototype.checkHit = function (e, t) {
        return this._hitTest(e, t)
    };
    cc.Node.prototype.setSwallowTouches = function (e) {
        this._touchListener && this._touchListener.setSwallowTouches(e)
    };
    cc.Sprite.prototype.setURL = function (e, t) {
        var o = this;
        this._url = e, null !== e ? i.default.getSpriteFrameAsync(e, function (e) {
            o.spriteFrame = e, t && t(e, o)
        }) : this.spriteFrame = null
    };
    cc.Sprite.prototype._url = null;
    Object.defineProperties(cc.Sprite.prototype, {
        url: {
            get: function () {
                return this._url
            },
            set: function (e) {
                null !== e ? this.setURL(e.url, e.callback) : this.setURL(null)
            },
            configurable: !0
        }
    });
    cc.Sprite.prototype.uniformScale = function (e, t) {
        var o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            i = this.spriteFrame,
            n = this.node;
        if (i && n) {
            this.sizeMode = cc.Sprite.SizeMode.CUSTOM;
            var a = i.getRect().width,
                s = i.getRect().height,
                r = a / e,
                c = s / t;
            if (!o && (r > 1 || c > 1)) return n.width = a, void(n.height = s);
            r >= c ? (n.width = a / r, n.height = s / r) : (n.width = a / c, n.height = s / c)
        }
    };
    cc.Sprite.prototype.uniformScale2 = function (e, t) {
        var o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            i = this.spriteFrame,
            n = this.node;
        if (i && n) {
            var a = e / i.getRect().width,
                s = t / i.getRect().height;
            if (!o && (a > 1 || s > 1)) return;
            n.scale = a >= s ? s : a
        }
    };
    cc.Sprite.prototype.geometricScale = function (e, t) {
        var o = this.spriteFrame,
            i = this.node;
        if (o && i) {
            var n = e / o.getRect().width,
                a = t / o.getRect().height;
            n >= a ? (i.scaleX = a, i.scaleY = a) : (i.scaleX = n, i.scaleY = n)
        }
    };
    cc.Button.prototype._onTouchBegan = function (e) {
        this.interactable && this.enabledInHierarchy && (this._pressed = !0, this._updateState(), e.stopPropagation(), n.default.playSFX("ButtonClick"))
    };
    cc.Mask.prototype.getGraphics = function () {
        return this._graphics
    };
    cc.Mask.prototype.drawRect = function (e, t, o, i) {
        var n = this._graphics;
        n.rect(e, t, o, i), n.fill()
    };
    cc.Mask.prototype.drawRoundRect = function (e, t, o, i, n) {
        var a = this._graphics;
        a.roundRect(e, t, o, i, n), a.fill()
    };
    var s = [];
    cc.Mask.prototype.drawCircle = function (e, t, o) {
        for (var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 64, n = this._graphics, a = function (e, t, o) {
                s.length = 0;
                for (var i = 2 * Math.PI / o, n = 0; n < o; ++n) {
                    var a = cc.v2(t.x * Math.cos(i * n) + e.x, t.y * Math.sin(i * n) + e.y);
                    s.push(a)
                }
                return s
            }(cc.v2(e, t), o, i), r = 0; r < a.length; ++r) {
            var c = a[r];
            0 === r ? n.moveTo(c.x, c.y) : n.lineTo(c.x, c.y)
        }
        n.close(), n.fill()
    };
    cc.Mask.prototype.clearDraw = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._graphics && this._graphics.clear(e)
    };
    cc.Mask.prototype.drawPolygon = function (e) {
        var t = this._graphics;
        t.moveTo(e[0].x, e[0].y);
        for (var o = 1; o < e.length; ++o) {
            var i = e[o];
            t.lineTo(i.x, i.y)
        }
        t.close(), t.fill()
    };
    cc.Intersection.pointInCircle = function (e, t, o) {
        return e.sub(t).magSqr() < o * o
    };
    cc.Intersection.lineCircle = function (e, t, o, i) {
        var n = this.pointInCircle(e, o, i),
            a = this.pointInCircle(t, o, i);
        return n && a ? 1 : !n && a ? 2 : n && !a ? 2 : this.pointLineDistance(o, e, t, !0) <= i ? 2 : 0
    };
    cc.Intersection.pointInLine = function (e, t, o) {
        return t.sub(e).mag() + o.sub(e).mag() <= t.sub(o).mag() + 1
    };
}