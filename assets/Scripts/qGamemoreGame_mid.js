const e = require;
cc.Class({
    extends: cc.Component,
    properties: {
        iconPrefab: cc.Prefab,
        fNode: cc.Node,
        type: 2
    },
    onLoad: function () {
        1 != lieyou_moreGame_type && 2 != lieyou_moreGame_type || this.loadSprite(cc.find("bg", this.node), "SDK/module/qgameMoreGame/textture_" + lieyou_moreGame_type + "/bg_mid")
    },
    loadSprite: function (e, t) {
        e && (e.active = !1, cc.loader.loadRes(t, function (t, o) {
            !t && e.isValid && (e.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(o), e.active = !0)
        }))
    },
    onDestroy: function () {
        SdkManager.showMoreGameIcon()
    },
    start: function () {
        SdkManager.hideMoreGameIcon()
    },
    setData: function (e, t, o) {
        for (var i = e.length, n = 2 == this.type ? 8 : lieyou_showMoreGameNum, a = e.length; a < n; a++) e.push(e[a % i]);
        this.touchType = 4, 2 == this.type && (this.touchType = 5), this._obj = e, this._childNode = [], this._childNodeTag = [], this._showData = [];
        for (var s = 0; s < e.length && s < n; s++) {
            var r = cc.instantiate(this.iconPrefab);
            this._childNode[s] = r, this._childNodeTag[s] = s, this._showData[s] = !0, this.fNode.addChild(r), r.getComponent("qGamemoreGame_icon").setData(e[s], this.touchType), 2 == this.type || (r.x = 140 * s - 210, e.length >= 5 && t && this.myMove(r, cc.v2(-350, 0), cc.v2(140 * (n - 1) - 210, 0)))
        }
        for (var c = 8; c < e.length; c++) this._showData[c] = !1;
        2 == this.type && this.schedule(this.refreshData, o)
    },
    refreshData: function () {
        for (var e = parseInt(Math.random() * this._childNode.length), t = (e + (parseInt(Math.random() * (this._childNode.length - 2)) + 1)) % this._childNode.length, o = this._childNode[e], i = this._childNode[t], n = -1, a = -1, s = 0; s < this._showData.length; s++)
            if (0 == this._showData[s])
                if (-1 == n) n = s;
                else if (-1 == a) {
            a = s;
            break
        }
        if (-1 != n) o.getComponent("qGamemoreGame_icon").setData(this._obj[n], this.touchType), this._showData[this._childNodeTag[e]] = !1, this._showData[n] = !0, this._childNodeTag[e] = n, -1 != a && (i.getComponent("qGamemoreGame_icon").setData(this._obj[a], this.touchType), this._showData[this._childNodeTag[t]] = !1, this._showData[a] = !0, this._childNodeTag[t] = a);
        else {
            o.getComponent("qGamemoreGame_icon").setData(this._obj[this._childNodeTag[t]], this.touchType), i.getComponent("qGamemoreGame_icon").setData(this._obj[this._childNodeTag[e]], this.touchType);
            var r = this._childNodeTag[t];
            this._childNodeTag[t] = this._childNodeTag[e], this._childNodeTag[e] = r
        }
    },
    myMove: function (e, t, o) {
        var i = this,
            n = e.getPosition().sub(t).mag() / 50;
        e.runAction(cc.sequence(cc.moveTo(n, t), cc.callFunc(function () {
            e.position = o, i.myMove(e, t, o)
        })))
    }
});