{
    const e = require;
    var i = cc.Class({
        extends: e("BaseManager"),
        properties: {
            bannerAd: null
        },
        getHaveVideo: function () {
            return "" != qqVideoId
        },
        getSysPlatform_string: function () {
            return "qq"
        },
        getSysPlatform: function () {
            return 11
        },
        onShow: function (e) {
            // qq.onShow(e)
        },
        onHide: function (e) {
            // qq.onHide(e)
        },
        getSystemInfo: function () {
            // var e = qq.getSystemInfoSync();
            // this.platformVersionCode = e.SDKVersion
        },
        setOnlineData: function (e) {
            // if (e.qq) {
            //     e.qq.closeShortcut || this.installShortcut();
            //     var t = {};
            //     e.qq.theme && (t.theme = e.qq.theme), e.qq.crossSwitch && (t.crossSwitch = e.qq.crossSwitch), e.qq.bizData && (t.bizData = e.qq.bizData), e.qq.ad_datas && (t.ad_datas = e.qq.ad_datas), e.qq.switch && (t.switch = e.qq.switch), this.setAdData(t), void 0 != e.qq.spotShowAppBox && (this.spotShowAppBox = e.qq.spotShowAppBox)
            // } else this.installShortcut()
        },
        initOnlineData: function () {
            // if ("" == oppoGetOnlineDataId) return wkCommonScript.addToast({
            //     str: "\u6ca1\u6709\u586b\u5199qgID"
            // }), void this.installShortcut();
            // var e = this,
            //     t = Userdefault.getIntForKey("sdk_oppo_online_version", 0),
            //     o = Userdefault.getIntForKey("sdk_oppo_online_time", 0),
            //     i = Userdefault.getIntForKey("sdk_oppo_online_sp", 0),
            //     n = getTime() / 1e3;
            // if (n - o < i) {
            //     var a = Userdefault.getStringForKey("sdk_oppo_online_data", ""),
            //         s = JSON.parse(a);
            //     e.setOnlineData(s)
            // } else {
            //     this.dataVersion = t;
            //     var r = this.getLoginUrl();
            //     this.setDataForHttp(r, function (o) {
            //         if ("" != o) try {
            //             var i = JSON.parse(o);
            //             if (i.server_data_version && Userdefault.setDataForKey("sdk_oppo_online_version", i.server_data_version), void 0 != i.isMoreInfo && (e.isMoreInfo = i.isMoreInfo), i.sp && Userdefault.setDataForKey("sdk_oppo_online_sp", i.sp), Userdefault.setDataForKey("sdk_oppo_online_time", n), i.server_data_version == t) {
            //                 o = Userdefault.getStringForKey("sdk_oppo_online_data", "");
            //                 var a = JSON.parse(o);
            //                 return void e.setOnlineData(a)
            //             }
            //             if (!(a = JSON.parse(o).data)) return;
            //             e.setOnlineData(a), Userdefault.setDataForKey("sdk_oppo_online_data", JSON.stringify(a))
            //         } catch (t) {
            //             e.installShortcut(), lieyou_showLog("oppolog------error  initOnlineData + " + t)
            //         } else e.installShortcut()
            //     })
            // }
        },
        init: function (e) {
            // var t = this;
            // this.spotShowAppBox = !1, this.getSystemInfo(), this.openShare(), this.setShareData(), this.initAD(), setTimeout(function () {
            //     t.initOnlineData()
            // }, 1e3)
        },
        initAD: function () {
            // var e = this;
            // if ("" != qqVideoId) {
            //     var t = qq.createRewardedVideoAd({
            //         adUnitId: qqVideoId
            //     });
            //     this.videoAd = t, t.onLoad(function () {
            //         lieyou_showLog("qq---------- vd success")
            //     }), t.onClose(function (t) {
            //         lieyou_showLog("qq------------ vd playSuccess"), t.isEnded ? e.vdCallBack && e.vdCallBack(!0) : e.vdCallBack && e.vdCallBack(!1)
            //     }), t.onError(function (t) {
            //         lieyou_showLog("qq----------- vd fail" + JSON.stringify(t)), e.vdCallBack && e.vdCallBack(!1)
            //     })
            // }
        },
        setShareData: function () {
            // this.setDataForHttp(wxData.shareUrl, function (e) {
            //     wxData.shareData = JSON.parse(e)
            // })
        },
        login: function () {
            // qq.login({
            //     success: function (e) {}
            // })
        },
        openShare: function () {
            // qq.showShareMenu({
            //     showShareItems: ["qq", "qzone", "wechatFriends", "wechatMoment"]
            // }), qq.onShareAppMessage(function () {
            //     var e = "\u597d\u73a9\u7684\u6e38\u620f\uff0c\u5feb\u6765\u4e00\u8d77\u73a9\u5427",
            //         t = "https://res.igame58.com/wxxyx/commom/shareIcon.png";
            //     if (wxData.shareData.length > 0) {
            //         var o = parseInt(Math.random() * wxData.shareData.length),
            //             i = wxData.shareData[o].item,
            //             n = parseInt(Math.random() * i.length);
            //         i[n].id, e = i[n].title, t = i[n].img
            //     }
            //     return {
            //         title: e,
            //         imageUrl: t
            //     }
            // })
        },
        share: function (e) {
            // var t = "\u597d\u73a9\u7684\u6e38\u620f\uff0c\u5feb\u6765\u4e00\u8d77\u73a9\u5427",
            //     o = "https://res.igame58.com/wxxyx/commom/shareIcon.png";
            // if (wxData.shareData.length > 0) {
            //     var i = parseInt(Math.random() * wxData.shareData.length),
            //         n = wxData.shareData[i].item,
            //         a = parseInt(Math.random() * n.length);
            //     n[a].id, t = n[a].title, o = n[a].img
            // }
            // qq.shareAppMessage({
            //     title: t,
            //     imageUrl: o
            // })
        },
        showAppBox2: function () {
            // if ("" != qqAppBoxADId) {
            //     var e = qq.createAppBox({
            //         adUnitId: qqAppBoxADId
            //     });
            //     e.load().then(function () {
            //         e.show()
            //     })
            // }
        },
        showAppBox: function (e) {
            // if ("" != qqAppBoxADId) {
            //     var t = this,
            //         o = e.node ? e.node : cc.director.getScene(),
            //         i = e.x ? e.x : 0,
            //         n = e.y ? e.y : 0;
            //     cc.loader.loadRes("SDK/module/qqAppBox/appBox", function (e, a) {
            //         if (!e && o && o.isValid) {
            //             var s = cc.instantiate(a);
            //             o.addChild(s), s.x = i, s.y = n, s.on(cc.Node.EventType.TOUCH_START, function (e) {
            //                 t.showAppBox2()
            //             })
            //         }
            //     })
            // }
        },
        hideBanner: function () {
            // this.bannerAd && (this.bannerAd.destroy(), this.bannerAd = null)
        },
        showBanner: function (e) {
            // if ("" != qqBannerId) {
            //     var t = this,
            //         o = cc.view.getFrameSize();
            //     lieyou_showLog("size  " + o);
            //     var i = o.height - 90;
            //     this.bannerAd || (this.bannerAd = qq.createBannerAd({
            //         adUnitId: qqBannerId,
            //         style: {
            //             left: 0,
            //             top: i,
            //             width: o.width,
            //             height: 90
            //         }
            //     })), this.bannerAd.show(), this.bannerAd.onLoad(function () {
            //         t.bannerAd.offLoad(function () {}), t.bannerAd.offError(function () {}), lieyou_showLog("qq--------------  banner show success")
            //     }), this.bannerAd.onError(function (e) {
            //         t.bannerAd.offLoad(function () {}), t.bannerAd.offError(function () {}), lieyou_showLog("qq--------------  banner show fail" + JSON.stringify(e))
            //     })
            // }
        },
        showBannerCustom: function (e) {
            // this.showBanner(e)
        },
        showBannerByTop: function (e) {
            // this.showBanner({})
        },
        showBannerByBottom: function (e) {
            this.showBanner({})
        },
        showRewardedVideoAd: function (e, t) {
            // "" != qqVideoId ? (this.vdCallBack = t, this.videoAd && this.videoAd.show()) : t(!1)
        },
        installShortcut: function () {},
        showSpot: function () {
            // "" != qqSpotADId || this.spotShowAppBox && this.showAppBox2()
        },
        showSpotByPause: function (e, t) {
            // this.showSpot()
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