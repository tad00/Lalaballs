{
    const e = require;
    var i = cc.Class({
        extends: e("BaseManager"),
        properties: {
            bannerAd: null
        },
        getHaveVideo: function () {
            return !0
        },
        getSysPlatform_string: function () {
            return "qutoutiao"
        },
        getSysPlatform: function () {
            return 12
        },
        init: function (e) {},
        hideBanner: function () {
            //this._haveShowBanner = !1, qttGame.hideBanner()
        },
        showBanner: function (e) {
            //this._haveShowBanner || (this._haveShowBanner = !0, qttGame.showBanner())
        },
        showBannerCustom: function (e) {
           // this.showBanner(e)
        },
        showBannerByTop: function (e) {
           // this.showBanner({})
        },
        showBannerByBottom: function (e) {
            //this.showBanner({})
        },
        showRewardedVideoAd: function (e, t) {
            // var o = {};
            // o.gametype = parseInt(3 * Math.random()) + 1, o.rewardtype = 1, o.data = {}, o.data.title = "\u6e38\u620f\u5956\u52b1", o.data.url = "//newidea4-gamecenter-frontend.1sapp.com/game/prod/fkxxl_img/1.png", cc.audioEngine.stopAllEffects(), cc.game.pause(), qttGame.showVideo(function (e) {
            //     cc.game.resume(), window.QTTPlayVDCallBack && window.QTTPlayVDCallBack(), lieyou_showLog("qutoutiao--- showvideo " + e), t(1 == e)
            // }, o)
        },
        showSpot: function () {
            // arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            // var e = {};
            // e.gametype = parseInt(3 * Math.random()) + 1, e.rewardtype = 1, qttGame.showHDReward(e)
        },
        showSpotByPause: function (e, t) {
            //this.showSpot(!0)
        },
        showSpotByBegin: function (e, t) {
            //this.showSpot()
        },
        showSpotByFinish: function (e, t) {
            //this.showSpot()
        }
    });
    module.exports = i;
}