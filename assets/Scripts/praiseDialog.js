const e = require;
cc.Class({
    extends: cc.Component,
    properties: {
        titleLabel: cc.Label
    },
    start: function () {
        this.cantouch = !0, this.addGoldNum = 5 * lieyou.Props_Base_Gold, this.titleLabel.string = "\u559c\u6b22\u8fd9\u6b3e\u6e38\u620f\u5417\uff1f\u53bb\u7ed9\u6211\u4eec\u7559\u8a00\u5427\uff01\u4e94\u661f\u597d\u8bc4\u9001" + this.addGoldNum + "\u91d1\u5e01\u54e6\uff01"
    },
    closeCallBack: function () {
        this.cantouch && this.node.destroy()
    },
    praiseCallBack: function () {
        if (this.cantouch) {
            this.cantouch = !1;
            var e = this;
            Userdefault.setBoolForKey("alreadyPraise", !0), SdkManager.callAndroid(ACTION_RATE), this.node.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(function () {
                wkCommonScript.addToast({
                    str: e.addGoldNum
                });
                var t = Userdefault.getIntForKey(lieyou.Key_Gold) + e.addGoldNum;
                Userdefault.setDataForKey(lieyou.Key_Gold, t), e.node.destroy()
            })))
        }
    }
});