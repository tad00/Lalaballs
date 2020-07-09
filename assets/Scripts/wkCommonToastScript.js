const e = require;
cc.Class({
    extends: cc.Component,
    properties: {
        bgNode: cc.Node,
        strLabel: cc.Node
    },
    start: function () {
        this.node.runAction(cc.sequence(cc.moveBy(2, 0, 200), cc.removeSelf()))
    },
    setString: function (e, t) {
        this.strLabel.getComponent(cc.Label).string = e, this.strLabel.color = t
    }
});