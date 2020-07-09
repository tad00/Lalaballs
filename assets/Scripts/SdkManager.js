{
    const e = require;
    var i = e("WxManager");
    var n = e("FaceBookManager");
    var a = e("NativeManager");
    var s = e("OppoH5Manager");
    var r = e("OppoManager");
    var c = e("VivoManager");
    var l = e("XiaoMiManagerH5");
    var h = e("XiaoMiManager");
    var d = e("JinRiTouTiaoManager");
    var u = e("HuaweiManager");
    var p = e("BaiDuManager");
    var f = e("QQManager");
    var _ = e("QuTouTiaoManagerH5");
    var g = e("MagicManagerH5");
    var v = e("BaseManager");
    window._SDKVersion = "2020.1.10.0";
    window._SDKVersionCode = 1;
    window.SdkManager = module.exports = {
        instance: null,
        platform: "",
        init: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            lieyou_showLog("\u7248\u672c\uff1a" + _SDKVersion), this.platform = releasePlatform, this.instance || (lieyou.Props_Base_Gold = lieyou_Props_Base_Gold, this.setOpenId_uuid(), this.showBossKeyNode(), lieyou_showLog(">>>>>>>>>>>>         init sdk"), this.setNewPlayerData(), this.initGameData(), "oppoH5" == this.platform ? (this.instance = new s, this.instance.init(e)) : cc.sys.platform == cc.sys.OPPO_GAME ? (this.instance = new r, this.instance.init(e)) : cc.sys.platform == cc.sys.VIVO_GAME ? (this.instance = new c, this.instance.init(e)) : "qq" == this.platform ? (this.instance = new f, this.instance.init(e)) : cc.sys.platform == cc.sys.BAIDU_GAME ? (this.instance = new p, this.instance.init(e)) : cc.sys.platform == cc.sys.HUAWEI_GAME ? (this.instance = new u, this.instance.init(e)) : "xiaoMiH5" == this.platform ? (this.instance = new l, this.instance.init(e)) : "QuTouTiaoH5" == this.platform ? (this.instance = new _, this.instance.init(e)) : "MagicH5" == this.platform ? (this.instance = new g, this.instance.init(e)) : cc.sys.platform == cc.sys.XIAOMI_GAME ? (this.instance = new h, this.instance.init(e)) : "jinRiTouTiao" == this.platform ? (this.instance = new d, this.instance.init(e)) : cc.sys.platform === cc.sys.WECHAT_GAME ? (this.instance = new i, this.instance.init(e)) : cc.sys.isNative ? (this.instance = new a, this.instance.init(e)) : window.FBInstant && FBInstant.getPlatform() ? (this.instance = new n, this.instance.init(e)) : (this.instance = new v, this.instance.init(e)))
        },
        vibrateShort: function () {
            this.instance && this.instance.vibrateShort()
        },
        vibrateLong: function () {
            this.instance && this.instance.vibrateLong()
        },
        getHaveVideo: function () {
            return !!this.instance && this.instance.getHaveVideo()
        },
        getSysPlatform: function () {
            return this.instance ? this.instance.getSysPlatform() : -1
        },
        setOpenId_uuid: function () {
            if ("" == Userdefault.getStringForKey("lieyou_sdk_openid_uuid", "")) {
                for (var e = "", t = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "G", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "g", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], o = 0; o < 32; o++) e += t[parseInt(62 * Math.random())];
                openid_uuid = e, Userdefault.setDataForKey("lieyou_sdk_openid_uuid", e)
            } else openid_uuid = Userdefault.getStringForKey("lieyou_sdk_openid_uuid", "")
        },
        initGameData: function () {
            var e = cc.winSize,
                t = .5625 * e.height;
            e.width < t && (lieyou._SceneScale = e.width / t, lieyou._offsetY = e.height * (1 - e.width / t) / 2, lieyou._offsetX = e.width * (1 - e.width / t) / 2)
        },
        onHide: function (e) {
            this.instance && this.instance.onHide(e)
        },
        onShow: function (e) {
            this.instance && this.instance.onShow(e)
        },
        showMoreGameLoading: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            this.instance ? this.instance.showMoreGameLoading(e) : e()
        },
        getHelpLevel: function () {
            return this.instance ? this.instance.getHelpLevel() : -1
        },
        showBossKeyNode: function () {
            cc.loader.loadRes("SDK/module/BossKey/bossKey", function (e, t) {
                if (!e) {
                    var o = cc.winSize,
                        i = cc.instantiate(t);
                    cc.director.getScene().addChild(i), i.x = o.width / 2, i.y = o.height / 2, cc.game.addPersistRootNode(i)
                }
            })
        },
        showBanner: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.instance && this.instance.showBanner(e)
        },
        showBannerCustom: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.instance && this.instance.showBannerCustom(e)
        },
        showBannerByBottom: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            this.instance && this.instance.showBannerByBottom(e)
        },
        showBannerByTop: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            this.instance && this.instance.showBannerByTop(e)
        },
        hideBanner: function () {
            this.instance && this.instance.hideBanner()
        },
        addNativeAd: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            this.instance && this.instance.addNativeAd(e)
        },
        custClickNative: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            this.instance && this.instance.custClickNative(e)
        },
        showRewardedVideoAd: function (e, t) {
            this.instance && this.instance.showRewardedVideoAd(e, t)
        },
        getAuthorize: function () {
            this.instance && this.instance.getAuthorize()
        },
        login: function () {
            this.instance && this.instance.login()
        },
        addLocalResurr: function () {
            this.instance && this.instance.addLocalResurr()
        },
        useResurr: function () {
            this.instance && this.instance.useResurr()
        },
        deleteInviteFriend: function (e) {
            this.instance && this.instance.deleteInviteFriend(e)
        },
        modifyInviteFriend: function (e) {
            this.instance && this.instance.modifyInviteFriend(e)
        },
        getInviteFriendData: function (e, t) {
            this.instance && this.instance.getInviteFriendData(e, t)
        },
        showInviteFriend: function (e, t) {
            this.instance && this.instance.showInviteFriend(e, t)
        },
        showInviteFriendFailure: function (e) {
            this.instance && this.instance.showInviteFriendFailure(e)
        },
        checkResurrNum: function () {
            return this.instance ? this.instance.checkResurrNum() : 0
        },
        checkResurrNum_2: function () {
            return this.instance ? this.instance.checkResurrNum_2() : 0
        },
        share: function (e) {
            this.instance && this.instance.share(e)
        },
        shareHelp: function (e) {
            this.instance && this.instance.shareHelp(e)
        },
        shareHelpSuccess: function (e) {
            this.instance && this.instance.shareHelpSuccess(e)
        },
        helpFriendSuccess: function (e) {
            this.instance && this.instance.helpFriendSuccess(e)
        },
        getIsHaveFriendHelpMe: function (e, t) {
            this.instance && this.instance.getIsHaveFriendHelpMe(e, t)
        },
        showAllRankingLayer: function (e) {
            this.instance && this.instance.showAllRankingLayer(e)
        },
        showFailRankingLayer: function (e) {
            this.instance && this.instance.showFailRankingLayer(e)
        },
        setRankingData: function (e, t) {
            this.instance && this.instance.setRankingData(e, t)
        },
        showForum: function (e) {
            this.instance && this.instance.showForum(e)
        },
        closeForum: function () {
            this.instance && this.instance.closeForum()
        },
        jumpApp: function (e, t, o, i) {
            this.instance && this.instance.jumpApp(e, t, o, i)
        },
        newJumpApp: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.instance && this.instance.newJumpApp(e)
        },
        showSpotByBegin: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            this.instance && this.instance.showSpotByBegin(e, t)
        },
        showSpotByPause: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            this.instance && this.instance.showSpotByPause(e, t)
        },
        showSpotByFinish: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            this.instance && this.instance.showSpotByFinish(e, t)
        },
        getSDKVersionCanUse: function (e) {
            return !this.instance || this.instance.getSDKVersionCanUse(e)
        },
        setNewPlayerData: function () {
            var e = Userdefault.getIntForKey("comeGameNum", 0);
            if (Userdefault.setDataForKey("comeGameNum", e + 1), Userdefault.getBoolForKey(lieyou.Key_NewPlayer, !0)) {
                var t = parseInt(getTime() / 1e3);
                Userdefault.setDataForKey(lieyou.Key_OncePlayerTime, t), Userdefault.setBoolForKey(lieyou.Key_NewPlayer, !1);
                var o = getTimeDay();
                Userdefault.setDataForKey(lieyou.Key_OncePlayerTimeDay, o)
            }
        },
        parseData: function (e, t) {
            for (var o = e.split(","), i = 0; i < o.length; i++)
                if (o[i].split("wait:").length > 1) {
                    if (o[i].split("wait:")[1] == t) return !0
                } else if (o[i].split("waitL").length > 1) {
                var n = o[i].split("waitL")[1].split(":"),
                    a = Userdefault.getIntForKey("SDKGameMaxLevel", 0);
                if (n[1] == t && a > parseInt(n[0])) return !0
            } else if (o[i].split("waitS").length > 1) {
                n = o[i].split("waitS")[1].split(":");
                var s = Userdefault.getIntForKey("SDKGameMaxScore", 0);
                if (n[1] == t && s > parseInt(n[0])) return !0
            } else if (o[i].split("waitT").length > 1) {
                n = o[i].split("waitT")[1].split(":");
                var r = Userdefault.getIntForKey(lieyou.Key_OncePlayerTime, 0),
                    c = parseInt(getTime() / 1e3);
                if (n[1] == t && c - r > parseInt(n[0])) return !0
            } else if (o[i].split("waitE").length > 1) {
                n = o[i].split("waitE")[1].split(":");
                var l = Userdefault.getIntForKey("comeGameNum", 0);
                if (n[1] == t && l > parseInt(n[0])) return !0
            } else if (o[i].split("waitD").length > 1) {
                n = o[i].split("waitD")[1].split(":"), r = Userdefault.getIntForKey(lieyou.Key_OncePlayerTimeDay, 0), c = getTimeDay();
                if (n[1] == t && c - r > parseInt(n[0])) return !0
            }
            return !1
        },
        gameBeginLevel: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "level",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
            lieyou_showLog("\u6a21\u5f0f   mode =====  " + e + "   \u6e38\u620f\u5f00\u59cb level = " + t), this.instance && this.instance.jniLevel(e, t, 0)
        },
        gameFailLevel: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "level",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
            lieyou_showLog("\u6a21\u5f0f   mode =====  " + e + "   \u6e38\u620f\u5931\u8d25 level = " + t), this.instance && this.instance.jniLevel(e, t, 2)
        },
        gameFinishLevel: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "level",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
            lieyou_showLog("\u6a21\u5f0f   mode =====  " + e + "   \u6e38\u620f\u8fc7\u5173 level = " + t), t > Userdefault.getIntForKey("SDKGameMaxLevel" + e, 0) && Userdefault.setDataForKey("SDKGameMaxLevel" + e, t), this.instance && this.instance.jniLevel(e, t, 1)
        },
        gameScore: function (e, t) {
            lieyou_showLog("\u6a21\u5f0f   mode =====  " + e + "   \u5206\u6570 score = " + t), t > Userdefault.getIntForKey("SDKGameMaxScore" + e, 0) && Userdefault.setDataForKey("SDKGameMaxScore" + e, t)
        },
        addToast: function (e, t, o) {
            this.instance && this.instance.addToast(e, t, o)
        },
        shareDialog: function (e) {
            this.instance && this.instance.shareDialog(e)
        },
        addGetLocakCardDialog: function (e) {
            this.instance && this.instance.addGetLocakCardDialog(e)
        },
        getParamByOnline: function (e, t) {
            if (this.instance) return this.instance.getParamByOnline(e, t)
        },
        getOnlineSpriteFrame: function (e, t) {
            this.instance && this.instance.getOnlineSpriteFrame(e, t)
        },
        showGuessYouLickOne: function (e) {
            this.instance && this.instance.showGuessYouLickOne(e)
        },
        showGuessYouLickTow: function (e) {
            this.instance && this.instance.showGuessYouLickTow(e)
        },
        returnHomeJumpGame: function () {
            this.instance && this.instance.returnHomeJumpGame()
        },
        shareToCrowd: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
            this.instance && this.instance.share({
                name: GameName,
                source: 5,
                success: function (n, a) {
                    if (1 == n)
                        if (a) {
                            var s = "ShareToCrowd" + a + i + "_" + o + t,
                                r = Userdefault.getStringForKey(s, "0,0").split(","),
                                c = parseInt(r[0]),
                                l = parseInt(r[1]),
                                h = Math.floor((new Date).getTime() / 36e5);
                            h >= l + o ? (c = 1, l = h) : c++, Userdefault.setDataForKey(s, c + "," + l), e(c <= i ? 1 : -1)
                        } else e(1);
                    else e(0)
                }
            })
        },
        callAndroid: function (e) {
            this.instance && this.instance.callAndroid(e)
        },
        callAndroid_2: function (e, t) {
            this.instance && this.instance.callAndroid_2(e, t)
        },
        callPay: function (e, t) {
            this.instance && this.instance.callPay(e, t)
        },
        isOpen: function (e) {
            if (this.instance) return this.instance.isOpen(e)
        },
        getIsNative: function () {
            return 1 == this.getSysPlatform()
        },
        backHome: function () {
            if (this.instance) return this.instance.backHome()
        },
        addSmallGameReturnBtn: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.instance && this.instance.addSmallGameReturnBtn(e)
        },
        gotoSmallGame: function (e) {
            if (this.instance) return this.instance.gotoSmallGame(e)
        },
        gameAction: function (e) {
            if (this.instance) return this.instance.gameAction(e)
        },
        initPhysics: function (e) {
            var t = e;
            cc.game.config.groupList = t["group-list"], cc.game.config.collisionMatrix = t["collision-matrix"], cc.game._initConfig(cc.game.config)
        },
        showPraise: function () {
            this.instance && this.instance.showPraise()
        },
        showNativeBanner: function (e) {
            this.instance && this.instance.showNativeBanner(e)
        },
        hideNativeBanner: function () {
            this.instance && this.instance.hideNativeBanner()
        },
        showRedPack: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.instance && this.instance.showRedPack(e)
        },
        showRedIcon: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.instance && this.instance.showRedIcon(e)
        },
        showRecommendIcon: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.instance && this.instance.showRecommendIcon(e)
        },
        showGameRecommend: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            this.instance && this.instance.showGameRecommend(e)
        },
        showGameRecommendDialog: function () {},
        getShareOrViedo: function () {
            return this.instance ? this.instance.getShareOrViedo() : 0
        },
        getJumpBtnHaveMove: function () {
            return this.instance ? this.instance.getJumpBtnHaveMove() : 0
        },
        showGuessYouLike_3: function (e) {
            this.instance && this.instance.showGuessYouLike_3(e)
        },
        jumpRefreshBanner: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.instance && this.instance.jumpRefreshBanner(e)
        },
        setWorldRankData: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RankingKey;
            this.instance && this.instance.setWorldRankData(t, e)
        },
        getBaseData: function () {
            return this.instance && this.instance.getBaseData(), {}
        },
        reload: function () {
            this.instance && this.instance.reload()
        },
        addLuPingBtn: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.instance && this.instance.addLuPingBtn(e)
        },
        shareVd: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            this.instance && this.instance.shareVd(e)
        },
        beginLuPing: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            this.instance && this.instance.beginLuPing(e, t)
        },
        pauseLuPing: function () {
            this.instance && this.instance.pauseLuPing()
        },
        resumeLuPing: function () {
            this.instance && this.instance.resumeLuPing()
        },
        stopLuPing: function () {
            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            this.instance && this.instance.stopLuPing(e)
        },
        hasInstalled: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            this.instance && this.instance.hasInstalled(e)
        },
        install: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.instance && this.instance.install(e)
        },
        showRecommendBegin: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.instance ? this.instance.showRecommendBegin(e) : e.callBack && e.callBack()
        },
        showRecommendFinish: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.instance ? this.instance.showRecommendFinish(e) : e.callBack && e.callBack()
        },
        showArardGoldGrid: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.instance ? this.instance.showArardGoldGrid(e) : e.callBack && e.callBack()
        },
        showArardGoldStrip: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.instance ? this.instance.showArardGoldStrip(e) : e.callBack && e.callBack()
        },
        addInstallShortcut: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.instance && this.instance.addInstallShortcut(e)
        },
        showRecommendAwardIcon: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.instance && this.instance.showRecommendAwardIcon(e)
        },
        setDataForHttp: function (e, t) {
            this.instance && this.instance.setDataForHttp(e, t)
        },
        showMoreGameByIcon: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.instance && this.instance.showMoreGameByIcon(e)
        },
        showMoreGameIcon: function () {
            this.instance && this.instance.showMoreGameIcon()
        },
        hideMoreGameIcon: function () {
            this.instance && this.instance.hideMoreGameIcon()
        },
        showMoreGameByBanner: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.instance && this.instance.showMoreGameByBanner(e)
        },
        showMoreGame: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.instance && this.instance.showMoreGame(e)
        },
        showMoreGameSide: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.instance && this.instance.showMoreGameSide(e)
        },
        showMoreGameMiddle_one: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return !!this.instance && this.instance.showMoreGameMiddle_one(e)
        },
        showMoreGameMiddle_two: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return !!this.instance && this.instance.showMoreGameMiddle_two(e)
        },
        setadtrack: function (e, t) {
            this.instance && this.instance.setadtrack(e, t)
        },
        showAppBox: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.instance && this.instance.showAppBox(e)
        }
    };
    window.lieyou_showLog = function (e) {
        lieyou_showDebug && console.log(e)
    };
}