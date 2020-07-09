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
            return "magic"
        },
        getSysPlatform: function () {
            return 13
        },
        init: function (e) {
            
        },
        hideBanner: function () {},
        showBanner: function (e) {},
        showBannerCustom: function (e) {
            
        },
        showBannerByTop: function (e) {
            
        },
        showBannerByBottom: function (e) {
            
        },
        initPlayVdCallBack: function () {
            
        },
        showRewardedVideoAd: function (e, t) {
            
        },
        showSpot: function () {},
        showSpotByPause: function (e, t) {
            //this.showSpot(!0)
        },
        showSpotByBegin: function (e, t) {
           // this.showSpot()
        },
        showSpotByFinish: function (e, t) {
           // this.showSpot()
        }
    });
    module.exports = i;
}