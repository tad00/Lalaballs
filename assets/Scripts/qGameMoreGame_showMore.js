const e = require;
cc.Class({
    extends: cc.Component,
    properties: {},
    onLoad: function () {
        1 == lieyou_moreGame_type ? (cc.find("dragon", this.node).active = !1, cc.find("dragon_1", this.node).active = !0) : 2 == lieyou_moreGame_type && (cc.find("dragon", this.node).active = !1, cc.find("dragon_2", this.node).active = !0)
    },
    start: function () {
        this.node.runAction(cc.repeatForever(cc.sequence(cc.rotateBy(.03, -15), cc.rotateBy(.03, 0), cc.rotateBy(.03, 15), cc.rotateBy(.03, 0), cc.rotateBy(.03, -10), cc.rotateBy(.03, 0), cc.rotateBy(.03, 10), cc.rotateBy(.03, 0), cc.rotateBy(.03, -5), cc.rotateBy(.03, 0), cc.rotateBy(.03, 5), cc.rotateBy(.03, 0), cc.delayTime(2 + 1 * Math.random()))))
    },
    setData: function (e) {
        this._callBack = e
    },
    callBack: function () {
        cc.find("red", this.node).active = !1, this._callBack && this._callBack()
    }
});