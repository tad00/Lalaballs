const e = require;
cc.Class({
    extends: cc.Component,
    properties: {},
    onLoad: function () {
        this.upSpriteTexture()
    },
    start: function () {},
    upSpriteTexture: function () {
        if (!lieyou.Language_ch) {
            var e = this;
            cc.loader.loadRes("en/en", cc.SpriteAtlas, function (t, o) {
                var i = e.node.getComponent(cc.Sprite).spriteFrame._name,
                    n = o.getSpriteFrame(i);
                e.node.getComponent(cc.Sprite).spriteFrame = n
            })
        }
    }
});