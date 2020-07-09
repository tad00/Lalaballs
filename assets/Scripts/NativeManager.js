{
    const e = require;
    window.ACTION_SHARE = 1100;
    window.ACTION_SHARE_SUCCESS = 1101;
    window.ACTION_SHARE_FAIL = 1102;
    window.ACTION_RATE = 1201;
    window.ACTION_RATE_SYS = 1202;
    window.ACTION_EXIT = 1301;
    window.ACTION_EXIT_BACK = 1302;
    window.ACTION_AD_PAUSE = 2e3;
    window.ACTION_AD_RESULT = 2001;
    window.ACTION_MORE = 2002;
    window.ACTION_AD_WATCH = 2200;
    window.ACTION_RANKS = 3e3;
    window.ACTION_RANKS_LOGIN = 3001;
    window.ACTION_RANKS_SUBMIT = 3002;
    window.ACTION_RANKS_SUBMIT_ByName = 3003;
    window.ACTION_TO_APP = 2003;
    window.ACTION_TO_APP_RANDOM = 2008;
    window.ACTION_TO_WECHAT = 2004;
    window.ACTION_TO_WECHAT_AUTO = 2005;
    window.ACTION_ATTENTION_WECHAT = 2006;
    window.ACTION_EXCHANGE_CODE = 2007;
    window.KEY_EXCHANGE = "exchange_code";
    window.KEY_OPEN_VIDEO = "isOpenVideo";
    window.KEY_OPEN_FREE_GOLD = "show_free";
    window.KEY_OPEN_MOREGAME = "moreGame_code";
    window.KEY_OPEN_ABOUT = "about_code";
    window.KEY_IS_SHENHE = "isAudit";
    window.KEY_IS_OPENPAY = "isOpenPay";
    window.ACTION_BANNER_SHOW = 2102;
    window.ACTION_BANNER_HIDE = 2103;
    window.ACTION_RATE_COINS = 1997;
    window.ACTION_FEEDBACK = 1110;
    window.STATE_PAUSE = 10;
    window.STATE_RESUME = 20;
    window.cpp_CallByLost = function (e) {
        4001 == e ? addGold(2999) : 4002 == e ? addGold(6999) : 4003 == e ? addGold(14999) : 4004 == e ? addGold(23999) : 4005 == e ? addGold(35999) : 4006 == e ? addGold(49999) : 4007 == e ? addGold(129999) : 4008 == e ? addGold(13999) : 4009 == e ? addGold(51999) : 4010 == e && addGold(2999)
    };
    window.cpp_Calljs = function (e, t) {
        t ? (SdkManager.instance.payCallBack && SdkManager.instance.payCallBack(), SdkManager.instance.playVDCallBack && SdkManager.instance.playVDCallBack(1)) : SdkManager.instance.playVDCallBack && SdkManager.instance.playVDCallBack(0), SdkManager.instance.payCallBack = null, SdkManager.instance.playVDCallBack = null
    };
    var i = cc.Class({
        extends: e("BaseManager"),
        properties: {
            payCallBack: null,
            playVDCallBack: null
        },
        getHaveVideo: function () {
            return !!this.isOpen(KEY_OPEN_VIDEO)
        },
        getSysPlatform_string: function () {
            return "native"
        },
        getSysPlatform: function () {
            return 1
        },
        init: function (e) {},
        showNativeBanner: function (e) {
            lieyou_showLog("========native  show Native Banner =  top:" + e), cc.sys.os == cc.sys.OS_IOS ? jsb.reflection.callStaticMethod("MyManager", "showNativeView:", e) : cc.sys.os == cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod("com/util/JsUtil", "showNativeView", "(F)V", e)
        },
        hideNativeBanner: function () {
            lieyou_showLog("========native  hide Native Banner = "), cc.sys.os == cc.sys.OS_IOS ? jsb.reflection.callStaticMethod("MyManager", "closeNativeView:", 0) : cc.sys.os == cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod("com/util/JsUtil", "closeNativeView", "()V")
        },
        showPauseAd: function (e, t) {
            lieyou_showLog("========native  show Native showPauseAd = isHaveNative:" + e + " top:" + t), cc.sys.os == cc.sys.OS_IOS ? jsb.reflection.callStaticMethod("MyManager", "showPauseAd:showPos:", e, t) : cc.sys.os == cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod("com/util/JsUtil", "showPauseAd", "(ZF)V", e, t)
        },
        showResultAd: function (e, t) {
            lieyou_showLog("========native  show Native showResultAd = isHaveNative:" + e + " top:" + t), this.showPraise() ? cc.sys.os == cc.sys.OS_IOS ? jsb.reflection.callStaticMethod("MyManager", "showResultAd:showPos:", !1, t) : cc.sys.os == cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod("com/util/JsUtil", "showResultAd", "(ZF)V", !1, t) : cc.sys.os == cc.sys.OS_IOS ? jsb.reflection.callStaticMethod("MyManager", "showResultAd:showPos:", e, t) : cc.sys.os == cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod("com/util/JsUtil", "showResultAd", "(ZF)V", e, t)
        },
        showSpotByBegin: function (e, t) {
            lieyou_showLog("========native begin spot = ")
        },
        showSpotByPause: function (e, t) {
            this.showPauseAd(e, t)
        },
        showSpotByFinish: function (e, t) {
            this.showResultAd(e, t)
        },
        callPay: function (e, t) {
            lieyou_showLog("======== native callPay action = " + e), this.payCallBack = t, cc.sys.os == cc.sys.OS_IOS ? jsb.reflection.callStaticMethod("MyManager", "callPay:", e) : cc.sys.os == cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod("com/util/JsUtil", "callPay", "(I)V", e)
        },
        callAndroid: function (e) {
            lieyou_showLog("======== native callAndroid action = " + e), cc.sys.os == cc.sys.OS_IOS ? jsb.reflection.callStaticMethod("MyManager", "callAndroid:", e) : cc.sys.os == cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod("com/util/JsUtil", "callAndroid", "(I)V", e)
        },
        callAndroid_2: function (e, t) {
            lieyou_showLog("======== native callAndroid_2 action = " + e), this.playVDCallBack = t, cc.sys.os == cc.sys.OS_IOS ? jsb.reflection.callStaticMethod("MyManager", "callPay:", e) : cc.sys.os == cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod("com/util/JsUtil", "callPay", "(I)V", e)
        },
        isOpen: function (e) {
            lieyou_showLog("======== native isopen key = " + e);
            var t = 0;
            return cc.sys.os == cc.sys.OS_IOS ? t = jsb.reflection.callStaticMethod("MyManager", "getValue2:", e) : cc.sys.os == cc.sys.OS_ANDROID && (t = jsb.reflection.callStaticMethod("com/util/JsUtil", "getValue2", "(Ljava/lang/String;)I", e)), 1 == (t = parseInt(t))
        },
        isOpenInt: function (e) {
            lieyou_showLog("======== native isopen key = " + e);
            var t = 0;
            return cc.sys.os == cc.sys.OS_IOS ? t = jsb.reflection.callStaticMethod("MyManager", "getValue2:", e) : cc.sys.os == cc.sys.OS_ANDROID && (t = jsb.reflection.callStaticMethod("com/util/JsUtil", "getValue2", "(Ljava/lang/String;)I", e)), t = parseInt(t)
        },
        backHome: function () {
            cc.eventManager.removeListeners(cc.EventListener.KEYBOARD), wkCommonScript.addLoadingTip(), setTimeout(function () {
                cc.audioEngine.stopAll(), mainScneeFromSmallGame = !0;
                var e = ["assets/"];
                lieyou_showLog("---------------\x3esearchPaths" + JSON.stringify(e)), jsb.fileUtils.setSearchPaths(e), window.require("main.js")
            }, 200)
        },
        share: function (e) {
            this.callAndroid(ACTION_SHARE)
        },
        showRewardedVideoAd: function (e, t) {
            this.callAndroid_2(ACTION_AD_WATCH, t)
        },
        showBannerCustom: function (e) {
            this.callAndroid(ACTION_BANNER_SHOW)
        },
        showBannerByBottom: function (e) {
            this.callAndroid(ACTION_BANNER_SHOW)
        },
        showBannerByTop: function (e) {
            this.callAndroid(ACTION_BANNER_SHOW)
        },
        hideBanner: function () {
            this.callAndroid(ACTION_BANNER_HIDE)
        },
        showRate: function () {
            this.callAndroid(ACTION_RATE)
        },
        showPraise: function () {
            if (Userdefault.getIntForKey("SDKShowPraiseNum", 0) > 5) return !1;
            if (Userdefault.getBoolForKey("alreadyPraise", !1)) return !1;
            if (!this.isOpen("isShowRate")) return !1;
            var e = this.isOpenInt("rate_interval");
            e = e > 0 ? e : 3;
            var t = this.isOpenInt("rate_index");
            t = t > 0 ? t : 3;
            var o = Userdefault.getIntForKey("praise_game", 0);
            if (Userdefault.setDataForKey("praise_game", o + 1), o >= t - 1 && (o - t - 1) % e == 0) {
                var i = Userdefault.getIntForKey("SDKShowPraiseNum", 0);
                return Userdefault.setDataForKey("SDKShowPraiseNum", i + 1), cc.loader.loadRes("SDK/module/praise/praiseDialog", function (e, t) {
                    var o = cc.find("Canvas"),
                        i = cc.instantiate(t);
                    o.addChild(i, 999999)
                }), !0
            }
            return !1
        },
        gotoSmallGame: function (e) {
            var t = this;
            cc.eventManager.removeListeners(cc.EventListener.KEYBOARD), wkCommonScript.addLoadingTip(), setTimeout(function () {
                cc.audioEngine.stopAll(), window.mainGameScene = cc.director.getScene().name, cc.sys.localStorage.setItem("ly_LoadingScene", cc.director.getScene().name), lieyou_showLog("========native gameScene = " + e), t.gameAction(e);
                var o = ["SmallGame/" + e + "/"];
                lieyou_showLog("---------------\x3esearchPaths" + JSON.stringify(o)), jsb.fileUtils.setSearchPaths(o), lieyou_showLog(jsb.fileUtils.getSearchPaths()), window.require("main.js")
            }, 200)
        },
        gameAction: function (e) {
            lieyou_showLog("========native gameName = " + e), cc.sys.os == cc.sys.OS_IOS ? jsb.reflection.callStaticMethod("MyManager", "gameAction:", e) : cc.sys.os == cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod("com/util/JsUtil", "gameAction", "(Ljava/lang/String;)V", e)
        },
        jniLevel: function (e, t, o) {
            lieyou_showLog("========native jniLevel =  mode = " + e + " level = " + t + " action = " + o), cc.sys.os == cc.sys.OS_IOS ? jsb.reflection.callStaticMethod("MyManager", "callLevel:level:action:", e, t, o) : cc.sys.os == cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod("com/util/JsUtil", "callLevel", "(Ljava/lang/String;II)V", e, t, o)
        }
    });
    module.exports = i;
}