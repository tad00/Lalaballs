const e = require;
cc.Class({
    extends: cc.Component,
    properties: {
        whiteBegSF: cc.SpriteFrame,
        whiteEndSF: cc.SpriteFrame
    },
    start: function () {
        this.bNode = cc.find("luPingBegin", this.node), this.eNode = cc.find("luPingEnd", this.node), this.luPing = !1, cc.find("luPingEnd/luPingEnd2", this.node).runAction(cc.repeatForever(cc.sequence(cc.fadeOut(.4), cc.fadeIn(.4))))
    },
    setColor: function () {
        "white" == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "black") && (cc.find("luPingBegin", this.node).getComponent(cc.Sprite).spriteFrame = this.whiteBegSF, cc.find("luPingEnd", this.node).getComponent(cc.Sprite).spriteFrame = this.whiteEndSF)
    },
    setData: function (e) {
        this._callBack = e
    },
    callBack: function () {
        var e = this;
        this.luPing = !this.luPing, this.luPing ? (SdkManager.beginLuPing(30, function (t) {
            e._callBack && e._callBack(t)
        }), this.bNode.active = !1, this.eNode.active = !0) : (SdkManager.stopLuPing(), this.bNode.active = !0, this.eNode.active = !1)
    },
    stop: function () {
        this.luPing = !1, this.bNode.active = !0, this.eNode.active = !1
    }
});