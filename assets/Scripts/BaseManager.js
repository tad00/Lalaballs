{
    const e = require;
    window.lieyou_showDebug = !0;
    window.lieyou_moreGame_type = 0;
    window.lieyou_showMoreGameNum = 7;
    var i = cc.Class({
        properties: {
            qGMoreGameData: [],
            qGMore_isRun: !0,
            qGMore_refreshTime: 3,
            qGMore_mainSwitch: 1,
            qGMore_floatPlay: 1,
            qGMore_bannerPlay: 1,
            qGMore_morePlay: 1,
            qGMore_dialogPlay: 1,
            qGMore_dialogPlay2: 1,
            qGMore_iconPlay: 1,
            qGMore_biz_floatPlay: [],
            qGMore_biz_bannerPlay: [],
            qGMore_biz_morePlay: [],
            qGMore_biz_dialogPlay: [],
            qGMore_biz_dialogPlay2: [],
            qGMore_biz_iconPlay: [],
            dataVersion: 0,
            platformVersionCode: 0,
            androidVersion: "",
            model: "",
            networkType: "none",
            region: "",
            isMoreInfo: !0,
            moreGameIconArr: [],
            base_IsShenHe: !1
        },
        init: function (e) {},
        showAppBox: function (e) {},
        getSysPlatform: function () {
            return -2
        },
        vibrateShort: function () {},
        vibrateLong: function () {},
        hasInstalled: function (e) {},
        install: function (e) {},
        getBaseData: function () {
            return {}
        },
        reload: function () {},
        showMoreGameLoading: function (e) {
            e()
        },
        showRedPack: function (e) {},
        showRedIcon: function (e) {},
        showRecommendIcon: function (e) {},
        showGameRecommend: function (e) {},
        onHide: function (e) {},
        onShow: function (e) {},
        getHelpLevel: function () {
            return -1
        },
        showBanner: function (e) {},
        showBannerCustom: function (e) {},
        showBannerByBottom: function (e) {},
        showBannerByTop: function (e) {},
        hideBanner: function () {},
        showRewardedVideoAd: function (e, t) {
            t(!1)
        },
        addNativeAd: function (e) {},
        custClickNative: function (e) {},
        getAuthorize: function () {},
        login: function () {},
        addLocalResurr: function () {},
        useResurr: function () {},
        modifyInviteFriend: function (e) {},
        deleteInviteFriend: function (e) {},
        getInviteFriendData: function (e, t) {},
        showInviteFriend: function (e, t) {},
        showInviteFriendFailure: function (e) {},
        checkResurrNum: function () {
            return 0
        },
        checkResurrNum_2: function () {
            return 0
        },
        share: function (e) {},
        shareHelp: function (e) {},
        shareHelpSuccess: function (e) {},
        helpFriendSuccess: function (e) {},
        getIsHaveFriendHelpMe: function (e, t) {},
        showAllRankingLayer: function (e) {},
        showFailRankingLayer: function (e) {},
        setRankingData: function (e, t) {},
        setWorldRankData: function (e, t) {},
        showForum: function (e) {},
        closeForum: function () {},
        jumpApp: function (e, t, o, i) {},
        newJumpApp: function (e) {},
        showSpotByBegin: function (e, t) {},
        showSpotByPause: function (e, t) {},
        showSpotByFinish: function (e, t) {},
        showPraise: function () {},
        getParamByOnline: function (e, t) {
            return null
        },
        getSDKVersionCanUse: function (e) {
            return !0
        },
        addToast: function (e, t, o) {},
        shareDialog: function (e) {},
        addGetLocakCardDialog: function (e) {},
        getOnlineSpriteFrame: function (e, t) {
            if ("" != e) {
                var o = {
                    url: e,
                    type: "image"
                };
                cc.loader.load(o, function (e, o) {
                    e || t(new cc.SpriteFrame(o))
                })
            }
        },
        showGuessYouLickOne: function (e) {},
        showGuessYouLickTow: function (e) {},
        showGuessYouLike_3: function (e) {},
        jumpRefreshBanner: function (e) {},
        returnHomeJumpGame: function () {},
        isOpen: function (e) {
            return !1
        },
        showNativeBanner: function (e) {},
        hideNativeBanner: function () {},
        callAndroid: function (e) {},
        callAndroid_2: function (e, t) {},
        callPay: function (e, t) {},
        backHome: function () {},
        showRate: function () {},
        gotoSmallGame: function (e) {},
        gameAction: function (e) {},
        jniLevel: function (e, t, o) {},
        getHaveVideo: function () {
            return !1
        },
        getShareOrViedo: function () {
            return this.getHaveVideo() ? 2 : 0
        },
        getJumpBtnHaveMove: function () {
            return 0
        },
        addLuPingBtn: function (e) {},
        beginLuPing: function (e, t) {},
        pauseLuPing: function () {},
        resumeLuPing: function () {},
        stopLuPing: function (e) {},
        shareVd: function (e) {},
        addSmallGameReturnBtn: function (e) {},
        showRecommendBegin: function (e) {
            e.callBack && e.callBack()
        },
        showRecommendFinish: function (e) {
            e.callBack && e.callBack()
        },
        showArardGoldGrid: function (e) {
            e.callBack && e.callBack()
        },
        showArardGoldStrip: function (e) {
            e.callBack && e.callBack()
        },
        addInstallShortcut: function (e) {},
        showRecommendAwardIcon: function (e) {},
        setDataForHttp: function (e, t) {
            var o = new XMLHttpRequest;
            o.onreadystatechange = function () {
                if (4 == o.readyState && o.status >= 200 && o.status < 400) {
                    var e = o.responseText;
                    "-1" == e || "-2" == e || t && t(e)
                }
            }, o.open("GET", e, !0), o.timeout = 5e3, o.send()
        },
        shuffle: function (e) {
            for (var t = [], o = 0; o < e.length; o++) t.push(e[o]);
            for (o = 0; o < t.length; o++) {
                var i = parseInt(Math.random() * t.length),
                    n = t[i];
                t[i] = t[o], t[o] = n
            }
            return t
        },
        getAdData: function (e) {
            for (var t = [], o = [], i = [], n = [], a = this.qGMoreGameData, s = 0; s < a.length; s++) {
                var r = a[s];
                if (Userdefault.getBoolForKey("ag_moreGame_isTouch_" + r.id, !1)) n.push(r);
                else {
                    for (var c = !1, l = 0; l < e.length; l++)
                        if (e[l] == r.id) {
                            o.push(r), c = !0;
                            break
                        } 0 == c && i.push(r)
                }
            }
            o = this.shuffle(o), i = this.shuffle(i), n = this.shuffle(n);
            for (s = 0; s < o.length; s++) t.push(o[s]);
            for (s = 0; s < i.length; s++) t.push(i[s]);
            for (s = 0; s < n.length; s++) t.push(n[s]);
            return t
        },
        hideMoreGameIcon: function () {
            for (var e = 0; e < this.moreGameIconArr.length; e++) this.moreGameIconArr[e] && this.moreGameIconArr[e].isValid && (this.moreGameIconArr[e].active = !1)
        },
        showMoreGameIcon: function () {
            for (var e = 0; e < this.moreGameIconArr.length; e++) this.moreGameIconArr[e] && this.moreGameIconArr[e].isValid && (this.moreGameIconArr[e].active = !0)
        },
        showMoreGameByIcon: function (e) {
            var t = this;
            if (lieyou_showLog("baseManager-------------- showMoreGameByIcon " + this.qGMoreGameData.length), 0 != this.qGMoreGameData.length && this.qGMore_mainSwitch && this.qGMore_iconPlay) {
                void 0 == e.runType && (e.runType = 1);
                var o = e.node ? e.node : cc.director.getScene(),
                    i = void 0 != e.x ? e.x : 0,
                    n = void 0 != e.y ? e.y : 0;
                this.myLoadRes("SDK/module/qgameMoreGame/moreGame_icon", function (a) {
                    if (o && o.isValid) {
                        for (var s = cc.instantiate(a), r = !1, c = 0; c < t.moreGameIconArr.length; c++)
                            if (!t.moreGameIconArr[c].isValid) {
                                t.moreGameIconArr[c] = s, r = !0;
                                break
                            } r || t.moreGameIconArr.push(s), e.side && (s.width = e.side, s.height = e.side), o.addChild(s), s.x = i, s.y = n;
                        var l = t.qGMoreGameData;
                        if (!t.isOneShowMoreGameIcon) {
                            t.isOneShowMoreGameIcon = !0, t.showMoreGameIconIndex = parseInt(Math.random() * l.length);
                            var h = !1;
                            for (c = 0; c < l.length; c++) {
                                for (var d = 0; d < t.qGMore_biz_iconPlay.length; d++)
                                    if (l[c].id == t.qGMore_biz_iconPlay[d]) {
                                        t.showMoreGameIconIndex = c, h = !0;
                                        break
                                    } if (h) break
                            }
                        }
                        t.showMoreGameIconIndex = t.showMoreGameIconIndex % l.length, s.getComponent("qGamemoreGame_icon").setData(l[t.showMoreGameIconIndex], 2), t.showMoreGameIconIndex++, s.runAction(cc.repeatForever(cc.sequence(cc.delayTime(t.qGMore_refreshTime), cc.callFunc(function () {
                            t.showMoreGameIconIndex = t.showMoreGameIconIndex % l.length, s.getComponent("qGamemoreGame_icon").setData(l[t.showMoreGameIconIndex], 2), t.showMoreGameIconIndex++
                        })))), 1 == e.runType && s.runAction(cc.repeatForever(cc.sequence(cc.rotateTo(.03, -15), cc.rotateTo(.03, 0), cc.rotateTo(.03, 15), cc.rotateTo(.03, 0), cc.rotateTo(.03, -10), cc.rotateTo(.03, 0), cc.rotateTo(.03, 10), cc.rotateTo(.03, 0), cc.rotateTo(.03, -5), cc.rotateTo(.03, 0), cc.rotateTo(.03, 5), cc.rotateTo(.03, 0), cc.delayTime(2 + 1 * Math.random()))))
                    }
                })
            }
        },
        showMoreGameByBanner: function (e) {
            var t = this;
            if (lieyou_showLog("baseManager-------------- showMoreGameByBanner " + this.qGMoreGameData.length), !this.base_IsShenHe && 0 != this.qGMoreGameData.length && this.qGMore_mainSwitch && this.qGMore_bannerPlay) {
                this.hideBanner();
                var o = e.node ? e.node : cc.director.getScene(),
                    i = void 0 != e.x ? e.x : cc.winSize.width / 2,
                    n = void 0 != e.y ? e.y : 0;
                this.myLoadRes("SDK/module/qgameMoreGame/moreGame_banner", function (e) {
                    if (o && o.isValid) {
                        var a = cc.instantiate(e);
                        t.moreGameBanner = a, o.addChild(a), a.x = i, a.y = n;
                        var s = t.getAdData(t.qGMore_biz_bannerPlay);
                        a.getComponent("qGamemoreGame_more").setData(s, t.qGMore_isRun)
                    }
                })
            } else this.showBannerByBottom()
        },
        showMoreGame: function (e) {
            var t = this;
            if (lieyou_showLog("baseManager-------------- showMoreGame " + this.qGMoreGameData.length), 0 != this.qGMoreGameData.length && this.qGMore_mainSwitch && this.qGMore_morePlay) {
                var o = e.node ? e.node : cc.director.getScene(),
                    i = void 0 != e.x ? e.x : 0,
                    n = void 0 != e.y ? e.y : 0;
                this.myLoadRes("SDK/module/qgameMoreGame/moreGame_btn", function (e) {
                    if (o && o.isValid) {
                        var a = cc.instantiate(e);
                        o.addChild(a), a.x = i, a.y = n, a.getComponent("qGameMoreGame_showMore").setData(function () {
                            var e = this;
                            "tt" != this.getSysPlatform_string() ? this.myLoadRes("SDK/module/qgameMoreGame/moreGame_more", function (t) {
                                var o = cc.instantiate(t);
                                o.x = cc.winSize.width / 2, o.y = cc.winSize.height / 2, cc.director.getScene().addChild(o);
                                var i = e.getAdData(e.qGMore_biz_morePlay);
                                o.getComponent("qGamemoreGame_more").setData(i, e.qGMore_isRun)
                            }) : this.newJumpApp()
                        }.bind(t))
                    }
                })
            }
        },
        showMoreGameSide: function (e) {
            var t = this;
            if (lieyou_showLog("baseManager-------------- showMoreGameSide " + this.qGMoreGameData.length), 0 != this.qGMoreGameData.length && this.qGMore_mainSwitch && this.qGMore_floatPlay && !this._haveMoreGameSide) {
                var o;
                o = !!e.parentNode, e.isPersist && !o && (this._haveMoreGameSide = !0);
                var i = e.parentNode ? e.parentNode : cc.director.getScene(),
                    n = void 0 != e.sideType_right && e.sideType_right,
                    a = void 0 != e.y ? e.y : 0;
                this.myLoadRes("SDK/module/qgameMoreGame/moreGame_side", function (s) {
                    if (i && i.isValid) {
                        var r = cc.instantiate(s);
                        i.addChild(r), e.isPersist && !o && cc.game.addPersistRootNode(r), r.y = o ? 0 : cc.winSize.height / 2;
                        var c = t.getAdData(t.qGMore_biz_floatPlay);
                        r.getComponent("qGamemoreGame_more").setData(c, t.qGMore_isRun, n, a)
                    }
                })
            }
        },
        showMoreGameMiddle_two: function (e) {
            return lieyou_showLog("baseManager-------------- showMoreGameMiddle_two " + this.qGMoreGameData.length), !(0 == this.qGMoreGameData.length || !this.qGMore_mainSwitch || !this.qGMore_dialogPlay2) && this.showMoreGameMiddle(e, this.qGMore_biz_dialogPlay2)
        },
        showMoreGameMiddle_one: function (e) {
            return lieyou_showLog("baseManager-------------- showMoreGameMiddle_one " + this.qGMoreGameData.length), !(0 == this.qGMoreGameData.length || !this.qGMore_mainSwitch || !this.qGMore_dialogPlay) && (e.type = 1, this.showMoreGameMiddle(e, this.qGMore_biz_dialogPlay), !0)
        },
        showMoreGameMiddle: function (e, t) {
            var o = this,
                i = e.node ? e.node : cc.director.getScene(),
                n = void 0 != e.x ? e.x : 0,
                a = void 0 != e.y ? e.y : 0,
                s = "SDK/module/qgameMoreGame/moreGame_mid_two";
            return e.type && 2 != e.type && (s = "SDK/module/qgameMoreGame/moreGame_mid_one"), this.myLoadRes(s, function (e) {
                if (i && i.isValid) {
                    var s = cc.instantiate(e);
                    i.addChild(s), s.x = n, s.y = a;
                    var r = o.getAdData(t);
                    s.getComponent("qGamemoreGame_mid").setData(r, o.qGMore_isRun, o.qGMore_refreshTime)
                }
            }), !0
        },
        setAdData: function (e) {
            if (e.theme && (lieyou_moreGame_type = parseInt(e.theme)), e.switch && (this.switchSetHttpData = e.switch), e.ad_datas) {
                void 0 != e.ad_datas.isRun && (this.qGMore_isRun = e.ad_datas.isRun);
                var t = "";
                if (void 0 != e.ad_datas.baseUrl && (t = e.ad_datas.baseUrl), void 0 != e.ad_datas.dataPlay) {
                    this.qGMoreGameData = e.ad_datas.dataPlay;
                    for (var o = 0; o < this.qGMoreGameData.length; o++) !this.qGMoreGameData[o].url && this.qGMoreGameData[o].uri && (this.qGMoreGameData[o].url = t + this.qGMoreGameData[o].uri)
                }
            }
            lieyou_showMoreGameNum = this.qGMoreGameData.length, lieyou_showMoreGameNum < 7 && (lieyou_showMoreGameNum = 7), e.crossSwitch && (void 0 != e.crossSwitch.showGameNum && (lieyou_showMoreGameNum = Number(e.crossSwitch.showGameNum), lieyou_showMoreGameNum > this.qGMoreGameData.length && (lieyou_showMoreGameNum = this.qGMoreGameData.length), lieyou_showMoreGameNum < 7 && (lieyou_showMoreGameNum = 7)), void 0 != e.crossSwitch.refreshTime && (this.qGMore_refreshTime = Number(e.crossSwitch.refreshTime)), void 0 != e.crossSwitch.mainSwitch && (this.qGMore_mainSwitch = e.crossSwitch.mainSwitch), void 0 != e.crossSwitch.floatPlay && (this.qGMore_floatPlay = e.crossSwitch.floatPlay), void 0 != e.crossSwitch.bannerPlay && (this.qGMore_bannerPlay = e.crossSwitch.bannerPlay), void 0 != e.crossSwitch.morePlay && (this.qGMore_morePlay = e.crossSwitch.morePlay), void 0 != e.crossSwitch.dialogPlay && (this.qGMore_dialogPlay = e.crossSwitch.dialogPlay), void 0 != e.crossSwitch.dialogPlay2 && (this.qGMore_dialogPlay2 = e.crossSwitch.dialogPlay2), void 0 != e.crossSwitch.iconPlay && (this.qGMore_iconPlay = e.crossSwitch.iconPlay)), e.bizData && (void 0 != e.bizData.floatPlay && (this.qGMore_biz_floatPlay = e.bizData.floatPlay), void 0 != e.bizData.bannerPlay && (this.qGMore_biz_bannerPlay = e.bizData.bannerPlay), void 0 != e.bizData.morePlay && (this.qGMore_biz_morePlay = e.bizData.morePlay), void 0 != e.bizData.dialogPlay && (this.qGMore_biz_dialogPlay = e.bizData.dialogPlay), void 0 != e.bizData.dialogPlay2 && (this.qGMore_biz_dialogPlay2 = e.bizData.dialogPlay2), void 0 != e.bizData.iconPlay && (this.qGMore_biz_iconPlay = e.bizData.iconPlay))
        },
        myLoadRes: function (e, t) {
            cc.loader.loadRes(e, function (e, o) {
                e || t(o)
            })
        },
        getSysPlatform_string: function () {
            return ""
        },
        getLoginUrl: function () {
            var e = {};
            e.uid = openid, e.sdkVersion = _SDKVersionCode, e.platformVersion = this.platformVersionCode, e.androidVersion = this.androidVersion, e.model = this.model, e.networkType = this.networkType, e.uuid = openid_uuid;
            var t = this.dataVersion,
                o = this.getSysPlatform_string(),
                i = "https://app.igame58.com/lieyou/client/login?umid=" + oppoGetOnlineDataId + "&client_data_version=" + t + "&channel=" + o + "&json=" + encodeURI(JSON.stringify(e));
            return console.log("baseManager--------------getLoginUrl = " + i), i
        },
        setadtrack: function (e, t) {
            if (!this.switchSetHttpData || this.switchSetHttpData.adtrack) try {
                var o = {};
                o.uid = openid, this.isMoreInfo && (o.sdkVersion = _SDKVersionCode, o.platformVersion = this.platformVersionCode, o.androidVersion = this.androidVersion, o.model = this.model, o.networkType = this.networkType, o.uuid = openid_uuid);
                var i = this.getSysPlatform_string(),
                    n = "https://app.igame58.com/lieyou/client/adtrack?umid=" + oppoGetOnlineDataId + "&channel=" + i + "&adid=" + e + "&location=" + t + "&json=" + encodeURI(JSON.stringify(o));
                lieyou_showLog("baseManager--------------setadtrack = " + n), this.setDataForHttp(n)
            } catch (e) {
                lieyou_showLog("baseManager--------setadtrack error= " + JSON.stringify(e))
            }
        },
        setOperTrack: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (!this.switchSetHttpData || this.switchSetHttpData.operTrack) try {
                e.uid = openid, e.uuid = openid_uuid;
                var t = this.getSysPlatform_string(),
                    o = "https://app.igame58.com/lieyou/client/operTrack?umid=" + oppoGetOnlineDataId + "&channel=" + t + "&json=" + encodeURI(JSON.stringify(e));
                console.log("baseManager--------------setOperTrack = " + o), this.setDataForHttp(o)
            } catch (e) {
                console.log("baseManager--------setOperTrack error= " + JSON.stringify(e))
            }
        }
    });
    module.exports = i;
}