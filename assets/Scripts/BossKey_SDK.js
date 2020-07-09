const e = require;
cc.Class({
    extends: cc.Component,
    properties: {
        bossNode: cc.Node
    },
    onLoad: function () {
        cc.winSize;
        this.bossNode.x = -.5 * cc.winSize.width, this.bossNode.y = .5 * cc.winSize.height
    },
    start: function () {
        this.touchNum = 0, this.time = parseInt(getTime() / 1e3), this.bossNode.on(cc.Node.EventType.TOUCH_START, function (e) {
            this.bossNode._touchListener && this.bossNode._touchListener.setSwallowTouches(!1), this.touchNum++;
            var t = parseInt(getTime() / 1e3);
            t - this.time < 10 ? this.touchNum >= 7 && (lieyou_showDebug = !0, wkCommonScript.addToast({
                str: "\u7248\u672c\uff1a" + _SDKVersion
            }), this.touchNum = 0, this.time = t) : (this.touchNum = 0, this.time = t)
        }.bind(this))
    }
});