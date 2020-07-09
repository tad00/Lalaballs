{
    const e = require;
    var i = function (e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(e("PPBB_SoundUtils"));
    var n = cc.Enum({
        SPRITE_CHANGE: 0,
        SPRITE_CHECK_MARK: 1,
        LABEL: 2,
        DOUBLE_SWITCH: 3
    });
    var a = cc.Class({
        extends: cc.Button,
        editor: !1,
        properties: {
            toggleType: {
                default: n.SPRITE_CHANGE,
                type: n,
                displayName: "\u5f00\u5173\u7c7b\u578b",
                tooltip: "\n            SPRITE_CHANGE\uff1a\u4e00\u5f20\u56fe\u7247\u5207\u6362spriteFrame\u8868\u793a\u5f00\u5173,\n            SPRITE_CHECK_MARK:\u590d\u9009\u6a21\u5f0f\uff0c\u663e\u9690\u56fe\u7247\u8868\u73b0\u5f00\u5173,\n            LABEL:\u6587\u5b57\u8868\u73b0\u5f00\u5173\n            DOUBLE_SWITCH:\u4e24\u5f20\u56fe\u7247\u5207\u6362\u8868\u793a\u5f00\u5173\n            "
            },
            sprite: {
                default: null,
                type: cc.Sprite,
                displayName: "\u5f00\u5173\u56fe\u7247"
            },
            onSpriteFrame: {
                default: null,
                type: cc.SpriteFrame,
                displayName: "\u56fe\u7247-\u5f00",
                tooltip: "\u5f00\u5173\u5f00\u65f6\u663e\u793a\u7684\u56fe\u7247"
            },
            offSpriteFrame: {
                default: null,
                type: cc.SpriteFrame,
                displayName: "\u56fe\u7247-\u5173",
                tooltip: "\u5f00\u5173\u5173\u65f6\u663e\u793a\u7684\u56fe\u7247"
            },
            label: {
                default: null,
                type: cc.Label,
                displayName: "\u5f00\u5173\u6587\u5b57"
            },
            onText: {
                default: "\u5f00",
                displayName: "\u6587\u5b57-\u5f00"
            },
            offText: {
                default: "\u5173",
                displayName: "\u6587\u5b57-\u5173"
            },
            checkMark: {
                default: null,
                type: cc.Sprite,
                displayName: "\u590d\u9009\u56fe\u7247"
            },
            onNode: {
                default: null,
                type: cc.Node,
                displayName: "\u8282\u70b9-\u5f00"
            },
            offNode: {
                default: null,
                type: cc.Node,
                displayName: "\u8282\u70b9-\u5173"
            },
            isCheck: {
                default: !1,
                notify: function (e) {
                    this.checkEvents()
                }
            },
            zoomScale: {
                override: !0,
                default: 1.1
            },
            playSFX: {
                default: !0,
                displayName: "\u64ad\u653e\u97f3\u6548"
            },
            sfxUrl: {
                default: "ButtonClick",
                displayName: "\u97f3\u6548\u540d\u79f0"
            }
        },
        start: function () {
            this.checkEvents()
        },
        onDestroy: function () {},
        _onTouchBegan: function (e) {
            this.interactable && this.enabledInHierarchy && (this._pressed = !0, this._updateState(), e.stopPropagation(), this.playSFX && i.default.playSFX(this.sfxUrl))
        },
        _onTouchEnded: function (e) {
            this.interactable && this.enabledInHierarchy && this._pressed && (this.isCheck = !this.isCheck, this._pressed = !1, this._updateState(), cc.Component.EventHandler.emitEvents(this.clickEvents, this), this.node.emit("click", this), e.stopPropagation())
        },
        checkEvents: function () {
            var e = this.isCheck;
            this.toggleType === n.SPRITE_CHANGE && this.sprite ? this.sprite.spriteFrame = e ? this.onSpriteFrame : this.offSpriteFrame : this.toggleType === n.SPRITE_CHECK_MARK && this.checkMark ? this.checkMark.node.active = e : this.toggleType === n.LABEL && this.label ? this.label.string = e ? this.onText : this.offText : this.toggleType === n.DOUBLE_SWITCH && (this.onNode && (this.onNode.active = e), this.offNode && (this.offNode.active = !e))
        }
    });
    a.default = a;
    window.PPBB_ToggleCustom = module.export = a;
}