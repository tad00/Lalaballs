{
    const e = require;
    var i = cc.Class({
        extends: e("BaseManager"),
        properties: {
            bannerAd: null
        },
        getHaveVideo: function () {
            return !1
        },
        getSysPlatform_string: function () {
            return "xiaomih5"
        },
        getSysPlatform: function () {
            return 7
        },
        init: function (e) {
            
        },
        getBaseData: function () {
            return hy_dj_sdk.getBaseData()
        },
        reload: function () {
            
        }
    });
    module.exports = i;
}