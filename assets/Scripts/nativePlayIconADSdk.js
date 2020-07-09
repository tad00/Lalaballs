const e = require;
cc.Class({
    extends: cc.Component,
    properties: {},
    refreshData: function (e) {},
    setData: function (e) {
        try {
            cc.find("myNode", this.node).active = !0, this._callBack = e.callBack, this.loadSpriteFrame(e.url, cc.find("myNode/imageBg/image/image", this.node)), cc.find("myNode/wordBg/name", this.node).getComponent(cc.Label).string = this.getName(e.title)
        } catch (e) {}
    },
    getName: function (e) {
        if (e.length <= 5) return e;
        for (var t = "", o = 0; o < 5; o++) t += e[o];
        return t += "..."
    },
    loadSpriteFrame: function (e, t) {
        if ("" != e) {
            var o = {
                url: e,
                type: "image"
            };
            cc.loader.load(o, function (e, o) {
                e || t && t.isValid && (t.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(o))
            })
        }
    },
    start: function () {
        this.refreshData(), this.node.runAction(cc.repeatForever(cc.sequence(cc.rotateBy(.03, -15), cc.rotateBy(.03, 0), cc.rotateBy(.03, 15), cc.rotateBy(.03, 0), cc.rotateBy(.03, -10), cc.rotateBy(.03, 0), cc.rotateBy(.03, 10), cc.rotateBy(.03, 0), cc.rotateBy(.03, -5), cc.rotateBy(.03, 0), cc.rotateBy(.03, 5), cc.rotateBy(.03, 0), cc.delayTime(2 + 1 * Math.random())))), this.schedule(this.refreshData, 5)
    },
    callBack: function () {
        this._callBack()
    }
});