const e = require;
cc.Class({
    extends: cc.Component,
    properties: {},
    onLoad: function () {
        1 == lieyou_moreGame_type ? (cc.find("dragon", this.node).active = !1, cc.find("dragon_1", this.node).active = !0) : 2 == lieyou_moreGame_type && (cc.find("dragon", this.node).active = !1, cc.find("dragon_2", this.node).active = !0)
    },
    start: function () {}
});