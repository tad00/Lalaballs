const e = require;
cc.Class({
    extends: cc.Component,
    properties: {
        iconPrefab: cc.Prefab,
        fNode: cc.Node,
        type: 0
    },
    onLoad: function () {
        2 == this.type && 1 == lieyou_moreGame_type ? (cc.find("bg_2_side/dragon", this.node).active = !1, cc.find("bg_2_side/dragon_1", this.node).active = !0) : 2 == this.type && 2 == lieyou_moreGame_type && (cc.find("bg_2_side/dragon", this.node).active = !1, cc.find("bg_2_side/dragon_2", this.node).active = !0), 2 == this.type ? 1 != lieyou_moreGame_type && 2 != lieyou_moreGame_type || (this.loadSprite(cc.find("bg_2_side/bg_2_side", this.node), "SDK/module/qgameMoreGame/textture_" + lieyou_moreGame_type + "/bg_2_side"), this.loadSprite(cc.find("myNode_side/bg_side", this.node), "SDK/module/qgameMoreGame/textture_" + lieyou_moreGame_type + "/bg_side"), this.loadSprite(cc.find("myNode_side/bg_side/title_side", this.node), "SDK/module/qgameMoreGame/textture_" + lieyou_moreGame_type + "/title_side"), this.loadSprite(cc.find("myNode_side/bg_arrow_side", this.node), "SDK/module/qgameMoreGame/textture_" + lieyou_moreGame_type + "/arrow")) : 0 == this.type ? 1 != lieyou_moreGame_type && 2 != lieyou_moreGame_type || (this.loadSprite(cc.find("myNode/bg_more", this.node), "SDK/module/qgameMoreGame/textture_" + lieyou_moreGame_type + "/bg_more"), this.loadSprite(cc.find("myNode/title_more", this.node), "SDK/module/qgameMoreGame/textture_" + lieyou_moreGame_type + "/title_more"), this.loadSprite(cc.find("myNode/close", this.node), "SDK/module/qgameMoreGame/textture_" + lieyou_moreGame_type + "/close"), 2 == lieyou_moreGame_type && (cc.find("myNode/close", this.node).x = -250)) : 1 == this.type && (1 != lieyou_moreGame_type && 2 != lieyou_moreGame_type || (this.loadSprite(cc.find("myNode/bg_banner", this.node), "SDK/module/qgameMoreGame/textture_" + lieyou_moreGame_type + "/bg_banner"), this.loadSprite(cc.find("myNode/bg_banner/title_banner/title_banner", this.node), "SDK/module/qgameMoreGame/textture_" + lieyou_moreGame_type + "/title_banner")))
    },
    loadSprite: function (e, t) {
        e && (e.active = !1, cc.loader.loadRes(t, function (t, o) {
            !t && e.isValid && (e.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(o), e.active = !0)
        }))
    },
    start: function () {
        var e = cc.winSize,
            t = e.height > e.width ? e.width : e.height;
        cc.find("myNode", this.node) && (cc.find("myNode", this.node).scale = t / 720), cc.find("bg_2_side", this.node) && (cc.find("bg_2_side", this.node).scale = t / 720), cc.find("myNode_side", this.node) && (cc.find("myNode_side", this.node).scale = t / 720)
    },
    closeCallBack: function () {
        this.node.destroy()
    },
    bannerCloseCallBack: function () {
        setTimeout(function () {
            SdkManager.showBannerByBottom()
        }, 100), this.node.destroy()
    },
    callBackShowSide: function () {
        cc.find("bg_2_side/red", this.node).active = !1;
        var e = cc.find("myNode_side", this.node);
        e.stopAllActions(), e.runAction(cc.moveTo(.2, 227 * e.scale, 0))
    },
    callBackHideSide: function () {
        var e = cc.find("myNode_side", this.node);
        e.stopAllActions(), e.runAction(cc.moveTo(.2, 0, 0))
    },
    setData: function (e, t, o, i) {
        var n = e.length,
            a = 6;
        1 == this.type ? (a = 3, n = lieyou_showMoreGameNum) : 2 == this.type && (a = 1, n = lieyou_showMoreGameNum, this.initSide(o, i));
        var s = e.length;
        if (1 == this.type || 2 == this.type)
            for (var r = e.length; r < n; r++) e.push(e[r % s]);
        t || n--;
        for (var c = 0; c < e.length && c < n; c++) {
            var l = cc.instantiate(this.iconPrefab);
            this.fNode.addChild(l), l.getComponent("qGamemoreGame_icon").setData(e[c], a), 1 == this.type ? (l.x = 75 + 160 * c, e.length >= n && t && this.myMove(l, cc.v2(-85, 0), cc.v2(75 + 160 * (n - 1), 0))) : 2 == this.type && (l.y = -80 - 145 * c, e.length >= n && t && this.myMove(l, cc.v2(0, 65), cc.v2(0, -80 - 145 * (n - 1))))
        }
        t || n++, 1 == this.type ? this.fNode.width = 160 * (n - 1) : 2 == this.type && (this.fNode.height = 145 * (n - 1) + 15)
    },
    myMove: function (e, t, o) {
        var i = this,
            n = e.getPosition().sub(t).mag() / 50;
        e.runAction(cc.sequence(cc.moveTo(n, t), cc.callFunc(function () {
            e.position = o, i.myMove(e, t, o)
        })))
    },
    hideDragon: function () {
        var e = this,
            t = cc.find("bg_2_side", this.node);
        t.stopAllActions(), t.runAction(cc.sequence(cc.delayTime(5), cc.callFunc(function () {
            t.x = -60 * t.scale, 1 == lieyou_moreGame_type ? cc.find("bg_2_side/dragon_1", e.node).getComponent(dragonBones.ArmatureDisplay).playAnimation("sleep") : 2 == lieyou_moreGame_type ? cc.find("bg_2_side/dragon_2", e.node).getComponent(dragonBones.ArmatureDisplay).playAnimation("newAnimation_1") : cc.find("bg_2_side/dragon", e.node).getComponent(dragonBones.ArmatureDisplay).playAnimation("anim_2")
        })))
    },
    initSide: function (e, t) {
        e = Userdefault.getBoolForKey("qgGame_sdk_sdie_is_right", e), t = Userdefault.getIntForKey("qgGame_sdk_sdie_node_posY", t), this.setSideIsRigth(e);
        var o = cc.find("bg_2_side", this.node);
        this.hideDragon(), o.y = t, o.on(cc.Node.EventType.TOUCH_START, function (e) {
            this.touchBeginPos = e.getLocation(), 1 == lieyou_moreGame_type ? cc.find("bg_2_side/dragon_1", this.node).getComponent(dragonBones.ArmatureDisplay).playAnimation("stand") : 2 == lieyou_moreGame_type ? cc.find("bg_2_side/dragon_2", this.node).getComponent(dragonBones.ArmatureDisplay).playAnimation("newAnimation") : cc.find("bg_2_side/dragon", this.node).getComponent(dragonBones.ArmatureDisplay).playAnimation("anim_1"), o.stopAllActions(), o.x = 0
        }.bind(this)), o.on(cc.Node.EventType.TOUCH_MOVE, function (e) {
            o.x += e.getDelta().x * this.node.scaleX, o.y += e.getDelta().y
        }.bind(this)), o.on(cc.Node.EventType.TOUCH_END, this.sideNodeTouchEnd.bind(this)), o.on(cc.Node.EventType.TOUCH_CANCEL, this.sideNodeTouchEnd.bind(this))
    },
    sideNodeTouchEnd: function (e) {
        this.hideDragon();
        var t = cc.find("bg_2_side", this.node),
            o = cc.winSize.height / 2,
            i = cc.winSize.width;
        t.y > .65 * o ? t.y = .65 * o : t.y < .65 * o * -1 && (t.y = .65 * o * -1);
        var n = !1;
        t.convertToWorldSpaceAR(cc.v2(55, 0)).x > i / 2 && (n = !0), t.x = 0, Userdefault.setDataForKey("qgGame_sdk_sdie_node_posY", t.y), Userdefault.setBoolForKey("qgGame_sdk_sdie_is_right", n), this.setSideIsRigth(n), this.touchBeginPos.sub(e.getLocation()).mag() < 10 && this.callBackShowSide()
    },
    setSideIsRigth: function (e) {
        e ? (this.node.scaleX = -1, this.node.x = cc.winSize.width, cc.find("myNode_side/bg_side/title_side", this.node).scaleX = -1) : (this.node.scaleX = 1, this.node.x = 0, cc.find("myNode_side/bg_side/title_side", this.node).scaleX = 1)
    }
});