{
    const e = require;
    var i = cc.Class({
        extends: e("BaseManager"),
        properties: {},
        getHaveVideo: function () {
            return "" != jinRiTouTiao_VideoId
        },
        getSysPlatform_string: function () {
            return "tt"
        },
        getSysPlatform: function () {
            return 8
        },
        antidirt: function () {
            var e = this;
            this.setDataForHttp(serverUrl + "token?ai=" + jinRiTouTiao_AppId + "&sct=" + jinRiTouTiao_AppKey + "&gt=client_credential", function (t) {
                var o = JSON.parse(t);
                lieyou_showLog("------  jinritoutiao  ------ access_token = " + o), e.setDataForHttp(serverUrl + "antidirt?at=" + o.access_token)
            })
        },
        setOnlineData: function (e) {
            if (e.tt) {
                e.tt.closeShortcut || this.installShortcut();
                var t = {};
                e.tt.theme && (t.theme = e.tt.theme), e.tt.crossSwitch && (t.crossSwitch = e.tt.crossSwitch), e.tt.bizData && (t.bizData = e.tt.bizData), e.tt.ad_datas && (t.ad_datas = e.tt.ad_datas), e.tt.switch && (t.switch = e.tt.switch), this.getSDKVersionCanUse("1.33.0") && "ios" != this.platformSys && this.setAdData(t)
            } else this.installShortcut()
        },
        initOnlineData: function () {
            
        },
        getSystemInfo: function () {
            var e = this,
                t = tt.getSystemInfoSync();
            this.platformVersionCode = t.SDKVersion, this.platformSys = t.platform, this.androidVersion = t.system, this.model = t.model, tt.getNetworkType({
                success: function (t) {
                    e.networkType = t.networkType
                }
            })
        },
        init: function (e) {
            var t = this;
            this.getSystemInfo(), this.stopCanShare = !0;
            this.openShare(), this.setShareData(), setTimeout(function () {
                t.initOnlineData()
            }, 1e3)
        },
        setShareData: function () {
            this.setDataForHttp(wxData.shareUrl, function (e) {
                wxData.shareData = JSON.parse(e)
            })
        },
        login: function () {
            tt.login({
                success: function (e) {
                    lieyou_showLog("------  jinritoutiao  ------ login success"), self.setDataForHttp(serverUrl + "login?ai=" + jinRiTouTiao_AppId + "&sct=" + jinRiTouTiao_AppKey + "&code=" + e.code)
                },
                fail: function (e) {
                    lieyou_showLog("------  jinritoutiao  ------ login fail " + e)
                }
            }), this.antidirt()
        },
        openShare: function () {
            
        },
        share: function (e) {
            tt.shareAppMessage({})
        },
        hideBanner: function () {
            this.bannerAd && this.bannerAd.hide()
        },
        showBanner: function (e) {
            
        },
        showBannerCustom: function (e) {
            this.showBanner(e)
        },
        showBannerByTop: function (e) {
            this.showBanner({})
        },
        showBannerByBottom: function (e) {
            this.showBanner({})
        },
        showRewardedVideoAd: function (e, t) {
            
        },
        showSpot: function () {},
        showSpotByPause: function () {
            this.showSpot()
        },
        showSpotByBegin: function () {},
        showSpotByFinish: function () {
            this.showSpot()
        },
        beginLuPing: function (e, t) {
            var o = this;
            this.stopCanShare = !0, this.shareCallBack = t;
            var i = this;
            this.recorderVD ? this.recorderVD.start({
                duration: e
            }) : (this.recorderVD = tt.getGameRecorderManager(), this.recorderVD.start({
                duration: e
            }), this.recorderVD.onError(function (e) {
                lieyou_showLog("------  jinritoutiao  ------ luping fail  " + e.errMsg)
            }), this.recorderVD.onInterruptionBegin(function () {
                lieyou_showLog("------  jinritoutiao  ------ begin luping   ")
            }), this.recorderVD.onInterruptionEnd(function () {
                lieyou_showLog("------  jinritoutiao  ------ end luping   ")
            }), this.recorderVD.onStop(function (e) {
                o.luPingNode && o.luPingNode.isValid && o.luPingNode.getComponent("tt_luPing").stop();
                try {
                    lieyou_showLog("------  jinritoutiao  ------ mp4 path   " + e.videoPath + "   " + o.stopCanShare), i.vdPath = e.videoPath, o.stopCanShare && i.shareVd(i.shareCallBack, !1)
                } catch (e) {}
            }))
        },
        shareVd: function (e) {
            
        },
        pauseLuPing: function () {
            tt.getGameRecorderManager().pause()
        },
        resumeLuPing: function () {
            tt.getGameRecorderManager().resume()
        },
        stopLuPing: function (e) {
            this.stopCanShare = e;
            try {
                tt.getGameRecorderManager().stop()
            } catch (e) {}
        },
        addLuPingBtn: function (e) {
            var t = this,
                o = e.node ? e.node : cc.find("Canvas");
            cc.loader.loadRes("SDK/module/tt_luPing/lipingBtn", function (i, n) {
                if (o && o.isValid) {
                    var a = cc.instantiate(n);
                    t.luPingNode = a, a.x = e.x ? e.x : 0, a.y = e.y ? e.y : 0, e.color && a.getComponent("tt_luPing").setColor(e.color), e.callBack && a.getComponent("tt_luPing").setData(e.callBack), o.addChild(a)
                }
            })
        },
        installShortcut: function () {},
        setDataForHttp: function (e, t) {
            
        },
        newJumpApp: function (e) {
            this.getSDKVersionCanUse("1.33.0") && tt.showMoreGamesModal({
                appLaunchOptions: [],
                success: function (e) {
                    lieyou_showLog("toutiao---   success", e.errMsg)
                },
                fail: function (e) {
                    lieyou_showLog("toutiao---   fail", e.errMsg)
                }
            })
        },
        getSDKVersionCanUse: function (e) {
            for (var t = this.platformVersionCode, o = e.split("."), i = t.split("."), n = 0; n < 3; n++) {
                if (i[n] < o[n]) return !1;
                if (i[n] > o[n]) break
            }
            return !0
        }
    });
    module.exports = i;
}