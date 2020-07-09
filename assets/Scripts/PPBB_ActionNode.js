const e = require;
var i = cc.Enum({
    NONE: 0,
    SCALE: 1,
    VIBRATE: 2,
    JELLY: 3,
    FLIP_X: 4,
    FLIP_Y: 5,
    FADE: 6,
    JUMP: 7,
    FLOAT_Y: 8,
    SHAKE_X: 9,
    MOVE_X: 10,
    ROTATION: 11
});
var n = ["_noneAction", "_scaleAction", "_vibrateAction", "_jellyAction", "_flipXAction", "_flipYAction", "_fadeAction", "_jumpAction", "_floatYAction", "_shakeXAction", "_moveXAction", "_rotationAction"];
cc.Class({
    extends: cc.Component,
    editor: !1,
    properties: {
        nodeActionType: {
            default: i.NONE,
            type: i,
            notify: function () {
                0
            },
            displayName: "Action type",
            tooltip: "SCALE: \u547c\u5438\u7f29\u653e\n\n                VIBRATE: \u5de6\u53f3\u6296\u52a8\n\n                JELLY: \u679c\u51bb\u6296\u52a8\n\n                FLIP_X: x\u8f74\u7ffb\u8f6c\n\n                FLIP_Y: y\u8f74\u7ffb\u8f6c\n\n                FADE: \u547c\u5438\u663e\u9690\n\n                JUMP: \u8df3\u52a8\u6548\u679c\n\n                FLOAT_Y: \u4e0a\u4e0b\u6d6e\u52a8\n\n                SHAKE_X: \u5de6\u53f3\u6643\u52a8\n\n                MOVE_X:\u5de6\u53f3\u79fb\u52a8\n\n                ROTATION:\u65cb\u8f6c"
        },
        loop: {
            default: -1,
            displayName: "Cycles",
            tooltip: "-1\u8868\u793a\u5faa\u73af\u64ad\u653e\uff0c0\u8868\u793a\u5355\u6b21\u64ad\u653e\uff0c>0\u8868\u793a\u64ad\u653e\u6b21\u6570"
        },
        delayTime: {
            default: 0,
            displayName: "delay",
            tooltip: "\u5ef6\u8fdf\u6301\u6267\u884c\u7684\u65f6\u95f4,\u5355\u4f4d\u79d2"
        },
        spaceTime: {
            default: 0,
            displayName: "Action interval",
            tooltip: "\u4e24\u6b21\u52a8\u4f5c\u4e4b\u95f4\u7684\u65f6\u95f4\u95f4\u9694,\u5355\u4f4d\u79d2"
        },
        rangeScale: {
            default: 1,
            displayName: "Range of motion",
            tooltip: "\u52a8\u4f5c\u5e45\u5ea6\u63a7\u5236"
        },
        speed: {
            default: 1,
            displayName: "Action rate",
            tooltip: "\u63a7\u5236\u52a8\u4f5c\u6574\u4f53\u901f\u7387"
        },
        playOnLoad: {
            default: !0,
            displayName: "Play on creation",
            tooltip: "\u662f\u5426\u521b\u5efa\u65f6\u5c31\u64ad\u653e\u52a8\u753b"
        },
        callbacks: {
            default: [],
            type: cc.Component.EventHandler,
            tooltip: "\u52a8\u4f5c\u7ed3\u675f\u56de\u8c03"
        },
        _isPreview: !1,
        preview: {
            default: 0,
            notify: function () {
                0
            }
        },
        reset: {
            default: 0,
            notify: function () {
                0
            }
        },
        _overCallbacks: [],
        _action: null,
        _recordData: null
    },
    _record: function () {
        this._recordData = {
            x: this.node.x,
            y: this.node.y,
            opacity: this.node.opacity,
            active: this.node.active,
            scale: this.node.scale,
            degrees: this.node.degrees,
            width: this.node.width,
            height: this.node.height
        }
    },
    _recover: function () {
        this.node.stopAllActions(), this._recordData && (this.node.x = this._recordData.x, this.node.y = this._recordData.y, this.node.opacity = this._recordData.opacity, this.node.active = this._recordData.active, this.node.scale = this._recordData.scale, this.node.degrees = this._recordData.degrees, this.node.width = this._recordData.width, this.node.height = this._recordData.height)
    },
    onFocusInEditor: function () {
        0
    },
    onLostFocusInEditor: function () {
        0
    },
    onLoad: function () {
        this.node.getComponent(cc.Widget) && this.node.getComponent(cc.Widget).updateAlignment()
    },
    onDestroy: function () {
        0
    },
    doRecord: function () {
        this._isPreview || this._record()
    },
    start: function () {
        this._record(), this.playOnLoad && this.playAction()
    },
    playAction: function (e) {
        var t = this;
        if (e && (void 0 !== e.actionType && (this.nodeActionType = e.actionType), void 0 !== e.loop && (this.loop = e.loop), void 0 !== e.spaceTime && (this.spaceTime = e.spaceTime), void 0 !== e.rangeScale && (this.rangeScale = e.rangeScale), void 0 !== e.speed && (this.speed = e.speed), void 0 !== e.delayTime && (this.delayTime = e.delayTime)), this.rangeScale = Math.max(this.rangeScale, 0), this.spaceTime = Math.max(this.spaceTime, 0), this.speed = Math.max(this.speed, 0), this.delayTime = Math.max(this.delayTime, 0), this.stopAction(), this.nodeActionType !== i.NONE) {
            var o = this[n[this.nodeActionType]](),
                a = cc.sequence([].concat(function (e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, o = Array(e.length); t < e.length; t++) o[t] = e[t];
                        return o
                    }
                    return Array.from(e)
                }(o), [cc.delayTime(this.spaceTime)])),
                s = void 0;
            if (-1 === this.loop) s = cc.speed(a.repeatForever(), this.speed);
            else if (0 === this.loop) {
                var r = cc.sequence(a, cc.callFunc(function (e) {
                    t._actionOver()
                }));
                s = cc.speed(r, this.speed)
            } else if (this.loop > 0) {
                var c = cc.sequence(a.repeat(this.loop), cc.callFunc(function (e) {
                    t._actionOver()
                }));
                s = cc.speed(c, this.speed)
            }
            if (this.delayTime > 0) {
                var l = this.delayTime,
                    h = s.clone();
                s = cc.sequence(cc.delayTime(l), cc.callFunc(function (e) {
                    e.runAction(h)
                }))
            }
            this.node.runAction(s), this._action = s
        }
    },
    setActionOverCallback: function (e, t) {
        this._overCallbacks.push({
            callback: e,
            target: t
        })
    },
    stopAction: function () {
        !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0] ? this._recover() : this.node.stopAllActions()
    },
    _actionOver: function () {
        if (this.callbacks.length > 0 && cc.Component.EventHandler.emitEvents(this.callbacks, this), this._overCallbacks.length > 0) {
            var e = !0,
                t = !1,
                o = void 0;
            try {
                for (var i, n = this._overCallbacks[Symbol.iterator](); !(e = (i = n.next()).done); e = !0) {
                    var a = i.value;
                    a.target ? a.callback.call(a.target) : a.callback()
                }
            } catch (e) {
                t = !0, o = e
            } finally {
                try {
                    !e && n.return && n.return()
                } finally {
                    if (t) throw o
                }
            }
        }
    },
    _noneAction: function () {},
    _scaleAction: function () {
        var e = this.rangeScale,
            t = this._recordData.scale;
        return [cc.scaleTo(.2, t + .06 * t * e), cc.scaleTo(.2, t), cc.scaleTo(.2, t - .06 * t * e), cc.scaleTo(.2, t)]
    },
    _vibrateAction: function () {
        var e = -15 * this.rangeScale;
        return [cc.rotateBy(.05, -e), cc.rotateBy(.1, 2 * e), cc.rotateBy(.1, -2 * e), cc.rotateBy(.1, 2 * e), cc.rotateBy(.1, -2 * e), cc.rotateBy(.1, e)]
    },
    _jellyAction: function () {
        var e = this.rangeScale,
            t = this._recordData.scale;
        return [cc.scaleTo(.1, t + .2 * t * e, t - .2 * t * e), cc.scaleTo(.1, t - .2 * t * e, t + .2 * t * e), cc.scaleTo(.15, t + .1 * t * e, t - .1 * t * e), cc.scaleTo(.15, t - .1 * t * e, t + .1 * t * e), cc.scaleTo(.18, t + .05 * t * e, t - .05 * t * e), cc.scaleTo(.18, t - .05 * t * e, t + .05 * t * e), cc.scaleTo(.19, t + .02 * t * e, t - .02 * t * e), cc.scaleTo(.19, t - .02 * t * e, t + .02 * t * e), cc.scaleTo(.2, t, t)]
    },
    _flipXAction: function () {
        var e = this._recordData.scale;
        return [cc.scaleTo(.2, -e, e), cc.scaleTo(.2, e, e)]
    },
    _flipYAction: function () {
        var e = this._recordData.scale;
        return [cc.scaleTo(.2, e, -e), cc.scaleTo(.2, e, e)]
    },
    _fadeAction: function () {
        return [cc.fadeTo(1, 0), cc.fadeTo(1, 255)]
    },
    _jumpAction: function () {
        return [cc.jumpBy(.5, cc.v2(0, 0), 100 * this.rangeScale, 1)]
    },
    _floatYAction: function () {
        var e = this.rangeScale,
            t = this._recordData.x,
            o = this._recordData.y;
        return [cc.moveTo(1, t, o + 100 * e), cc.moveTo(2, t, o - 100 * e), cc.moveTo(1, t, o)]
    },
    _shakeXAction: function () {
        var e = this.rangeScale,
            t = this._recordData.x,
            o = this._recordData.y;
        return [cc.moveTo(.05, t - 10 * e, o), cc.moveTo(.1, t + 10 * e, o), cc.moveTo(.1, t - 10 * e, o), cc.moveTo(.1, t + 10 * e, o), cc.moveTo(.05, t, o)]
    },
    _moveXAction: function () {
        var e = this.rangeScale,
            t = this._recordData.x,
            o = this._recordData.y;
        return [cc.moveTo(.5, t - 50 * e, o), cc.moveTo(1, t + 50 * e, o), cc.moveTo(.5, t, o)]
    },
    _rotationAction: function () {
        var e = this.rangeScale;
        this._recordData.degrees;
        return [cc.rotateBy(1, 10 * e)]
    }
});