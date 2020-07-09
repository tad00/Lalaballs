{
    const e = require;
    var i = cc.Class({
        extends: e("BaseManager"),
        properties: {
            bannerAd: null
        },
        getHaveVideo: function () {
            return "" != xiaomi_VideoId
        },
        getSysPlatform_string: function () {
            return "xiaomi"
        },
        getSysPlatform: function () {
            return 9
        },
        init: function (e) {},
        showRewardedVideoAd: function (e, t) {
            
        },
        hideBanner: function () {
            
        },
        showBanner: function () {
           
        },
        showBannerByBottom: function (e) {
            this.showBanner({})
        },
        showSpot: function () {
            
        },
        showSpotByPause: function (e, t) {
            this.showSpot(!0)
        },
        showSpotByBegin: function (e, t) {
            this.showSpot()
        },
        showSpotByFinish: function (e, t) {
            this.showSpot()
        }
    });
    module.exports = i;
}