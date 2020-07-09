const e = require;
cc.Class({
    extends: cc.Component,
    properties: {
        image: cc.Node,
        redNode: cc.Node
    },
    onLoad: function () {
        1 != lieyou_moreGame_type && 2 != lieyou_moreGame_type || this.loadSprite(cc.find("bg_icon", this.node), "SDK/module/qgameMoreGame/textture_" + lieyou_moreGame_type + "/bg_icon")
    },
    loadSprite: function (e, t) {
        e && (e.active = !1, cc.loader.loadRes(t, function (t, o) {
            !t && e.isValid && (e.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(o), e.active = !0)
        }))
    },
    start: function () {},
    setData: function (e, t) {
        this._touchType = t, this.jumpData = e.jumpData, this._id = e.id, e.url ? this.loadSpriteFrame(e.url, this.image) : lieyou_showLog("qgame more game url null"), Userdefault.getBoolForKey("ag_moreGame_isTouch_" + this._id, !1) ? this.redNode.active = !1 : this.redNode.active = !0
    },
    loadSpriteFrame: function (e, t) {
        var o = {
            url: e,
            type: "image"
        };
        cc.loader.load(o, function (e, o) {
            e || t && t.isValid && (t.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(o))
        })
    },
    callBackTouch: function () {
        Userdefault.setBoolForKey("ag_moreGame_isTouch_" + this._id, !0), this.redNode.active = !1, SdkManager.newJumpApp({
            data: this.jumpData,
            success: this.clickAdSuccessCallBack.bind(this)
        })
    },
    clickAdSuccessCallBack: function () {
        try {
            SdkManager.setadtrack(this._id, this._touchType)
        } catch (e) {
            lieyou_showLog("jump game fail + " + JSON.stringify(e))
        }
    },
    setDataForHttp: function (e) {
        var t = new XMLHttpRequest;
        t.onreadystatechange = function () {
            if (4 == t.readyState && t.status >= 200 && t.status < 400) t.responseText
        }, t.open("GET", e, !0), t.send()
    }
});