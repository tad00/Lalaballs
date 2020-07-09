{
    const e = require;
    window.oppo_nativeArea = 1;
    window.oppo_waitT = 300;
    var i = cc.Class({
        extends: e("BaseManager"),
        properties: {
            bannerAd: null
        },
        getHaveVideo: function () {
            return !(oppoVideoId.length <= 0)
        },
        getSysPlatform_string: function () {
            return "oppo"
        },
        getSysPlatform: function () {
            return 4
        },
        onShow: function (e) {
           // qg.onShow(e)
        },
        onHide: function (e) {
           // qg.onHide(e)
        },
        setOnlineData: function (e) {
            
        },
        initOnlineData: function () {
            
        },
        login: function () {
           
        },
        getSystemInfo: function () {
            
        },
        init: function (e) {
            
        },
        vibrateShort: function () {
            //qg.vibrateShort()
        },
        vibrateLong: function () {
            //qg.vibrateLong()
        },
        clearNativeAd: function () {
            
        },
        custClickNative: function (e) {
            
        },
        addNativeAd: function (e) {
            
        },
        showNativeBanner: function (e, t) {
            
        },
        hideNativeBanner: function () {},
        hideBanner: function () {
            
        },
        showBanner: function (e) {
            
        },
        showBannerNativeAD: function () {
            
        },
        showBanner2: function () {
            
        },
        showBannerCustom: function (e) {
            //this.showBanner(e)
        },
        showBannerByTop: function (e) {
           // this.showBanner({})
        },
        showBannerByBottom: function (e) {
            //this.showBanner({})
        },
        showRewardedVideoAd: function (e, t) {
            
        },
        showSpot: function (e, t) {
            
        },
        addShowSpotNum: function () {
            
        },
        showSpotByPause: function () {
            //this.addShowSpotNum()
        },
        showSpotByBegin: function () {},
        showSpotByFinish: function () {
            //this.addShowSpotNum()
        },
        newJumpApp: function (e) {
            
        },
        installShortcut: function () {
            
        }
    });
    module.exports = i;
}