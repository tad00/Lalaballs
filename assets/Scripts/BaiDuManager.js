{
    const e = require;
    var i = cc.Class({
        extends: e("BaseManager"),
        properties: {
            bannerAd: null
        },
        getHaveVideo: function () {
            //return "" != baiduVideoId
        },
        getSysPlatform_string: function () {
            //return "baidu"
        },
        getSysPlatform: function () {
           // return 10
        },
        init: function (e) {},
        showNativeBanner: function (e) {
            //"" != baiduNativeId || this.showSpot()
        },
        hideNativeBanner: function () {},
        hideBanner: function () {
            //this.bannerAd && (this.bannerAd.destroy(), this.bannerAd = null)
        },
        showBanner: function (e) {
            
        },
        showBannerCustom: function (e) {
            //this.showBanner(e)
        },
        showBannerByTop: function (e) {
            //this.showBanner({})
        },
        showBannerByBottom: function (e) {
            //this.showBanner({})
        },
        showRewardedVideoAd: function (e, t) {
            
        },
        showSpot: function () {
            //baiduSpotADId
        },
        showSpotByPause: function () {
            //this.showNativeBanner()
        },
        showSpotByBegin: function () {},
        showSpotByFinish: function () {
            //this.showNativeBanner()
        }
    });
    module.exports = i;
}