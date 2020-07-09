{
    const e = require;
    window.canExperienceGame = 0;
    window.wxServerVersion = 0;
    window.wxJumpBtnHaveMove = 1;
    window.wxShareFailTips = "\u901a\u8baf\u5931\u8d25";
    window.wxJumpShowBannerDelayTime = 1.5;
    window.videoFailJumpShare = 1;
    window.canShowBanner = 1;
    var i = cc.Class({
        extends: e("BaseManager"),
        properties: {
            already: !1,
            haveGetAuthorize: !1,
            banner: null,
            gameClubButton: null,
            bannerTimeOut: -1,
            shareOnShow: !1,
            isOnceShare: !0,
            shareCallBack: null,
            shareBegTime: 0,
            _shareQuery: ""
        },
        isOpen: function (e) {
            return e == KEY_IS_SHENHE && !getCanShare()
        },
        setOnlineData: function (e) {
            
        },
        initOnlineData: function () {
            
        },
        getSystemInfo: function () {
            
        },
        init: function (e) {
            
        },
        vibrateShort: function () {
            //wx.vibrateShort()
        },
        vibrateLong: function () {
           // wx.vibrateLong()
        },
        getHaveVideo: function () {
            return "" != wxVideoId || !this.isOpen(KEY_IS_SHENHE)
        },
        getSysPlatform_string: function () {
            return "wx"
        },
        getSysPlatform: function () {
            return 0
        },
        getJumpBtnHaveMove: function () {
            return getCanShare() && "" != wxBannerId ? wxJumpBtnHaveMove : 0
        },
        getOnlineData: function () {
            
        },
        returnHomeJumpGame: function () {
            
        },
        getParamByOnline: function (e, t) {
            return wxData.params && wxData.params[e] ? wxData.params[e] : t
        },
        setSpotData: function (e) {
            //if (e.interval && (pauseSpotInterval = e.interval, resultSpotInterval = e.interval), e.intervalTime && (pauseSpotTime = e.intervalTime, resultSpotTime = e.intervalTime), e.startInterval && (pauseSpotStartIndex = e.startInterval, resultSpotStartIndex = e.startInterval), e.items)
                //for (var t = 0; t < e.items.length; t++) e.items[t].type && "pause" == e.items[t].type && (e.items[t].interval && (pauseSpotInterval = e.items[t].interval), e.items[t].intervalTime && (pauseSpotTime = e.items[t].intervalTime), e.items[t].startInterval && (pauseSpotStartIndex = e.items[t].startInterval)), e.items[t].type && "result" == e.items[t].type && (e.items[t].interval && (resultSpotInterval = e.items[t].interval), e.items[t].intervalTime && (resultSpotTime = e.items[t].intervalTime), e.items[t].startInterval && (resultSpotStartIndex = e.items[t].startInterval))
        },
        onHide: function (e) {
            //wx.onHide(e)
        },
        onShow: function (e) {
           // wx.onShow(e)
        },
        jumpRefreshBanner: function (e) {
            
        },
        showBanner: function (e) {
            
        },
        showBannerCustom: function (e) {
            
        },
        refreshBanner: function (e) {
            
        },
        showBannerByBottom: function (e) {
           
        },
        showBannerByTop: function (e) {
            
        },
        hideBanner: function () {
            //this.banner && (clearInterval(this.bannerTimeOut), this.banner.destroy(), this.banner = null)
        },
        showRewardedVideoAd: function (e, t) {
            
        },
        closeForum: function () {
            //this.getSDKVersionCanUse("2.0.3") && this.gameClubButton && this.gameClubButton.hide()
        },
        getAuthorize: function () {
            
        },
        login: function () {
            // var e = this;
            // wx.login({
            //     success: function (t) {
            //         e.getOpenId(t.code)
            //     }
            // })
        },
        getOpenId: function (e) {
            
        },
        setShareData: function () {
            // this.setDataForHttp(wxData.shareUrl, function (e) {
            //     wxData.shareData = JSON.parse(e)
            // })
        },
        setMoreGameData: function () {
            
        },
        showAllRankingLayer: function (e) {},
        showFailRankingLayer: function (e) {},
        showSpotByBegin: function (e, t) {
           // this.showMySpot()
        },
        showSpotByPause: function (e, t) {
            //this.showMySpot()
        },
        showSpotByFinish: function (e, t) {
           // this.showMySpot()
        },
        showMySpot: function () {
            
        },
        setRankingData: function (e, t) {
            
        },
        shareHelpSuccess: function (e) {
            
        },
        shareHelp: function (e) {
            
        },
        helpFriendSuccess: function (e) {
            // var t = serverUrl + "lieyou/wxdata/addHelpRecord?wxGameId=" + wxAppId + "&gamerId=" + helpOpenId + "&level=" + e + "&icon=" + uinfo.icon + "&name=" + uinfo.nick;
            // this.setDataForHttp(t)
        },
        getIsHaveFriendHelpMe: function (e, t) {
            // var o = serverUrl + "lieyou/wxdata/getClickInfo/" + wxAppId + "/" + openid + "/" + e;
            // this.setDataForHttp(o, function (o) {
            //     var i = JSON.parse(o);
            //     i.name && "" != i.name && t({
            //         level: e,
            //         name: i.name,
            //         icon: i.icon
            //     })
            // })
        },
        share: function (e) {
            // this.shareAndVideoAllNum++, this.shareOnShow = !0, this.shareBegTime = getTime() / 1e3, e.success ? this.shareCallBack = e.success : this.shareCallBack = null;
            // !e.getGroupId || e.getGroupId;
            // if (wxData.shareData.length <= 0 || !getCanShare()) {
            //     var t = wxData.putShareDataUrl + "?dsadsa=dsdsd&appId=" + wxData.appId + "&gamerId=" + openid + "&itemId=" + -1 + "&source=" + e.source;
            //     return e.inviteFriend && (t += "&inviteFriend=" + e.inviteFriend), this._shareQuery = t, void wx.aldShareAppMessage({
            //         title: "\u597d\u73a9\u7684\u6e38\u620f\uff0c\u5feb\u6765\u4e00\u8d77\u73a9\u5427",
            //         imageUrl: "https://res.igame58.com/wxxyx/commom/shareIcon.png",
            //         query: t
            //     })
            // }
            // for (var o = 0, i = "", n = "", a = 0; a < wxData.shareData.length; a++)
            //     if (wxData.shareData[a].mode == e.name) {
            //         var s = wxData.shareData[a].item,
            //             r = parseInt(Math.random() * s.length);
            //         o = s[r].id, i = s[r].title, n = s[r].img
            //     } t = wxData.putShareDataUrl + "?dsadsa=dsdsd&appId=" + wxData.appId + "&gamerId=" + openid + "&itemId=" + o + "&source=" + e.source;
            // e.inviteFriend && (t += "&inviteFriend=" + e.inviteFriend), this._shareQuery = t, wx.aldShareAppMessage({
            //     title: i,
            //     imageUrl: n,
            //     query: t
            // })
        },
        checkResurrNum_2: function () {
            // if (canGetNetCardNum) return canGetNetCardNum = !1, setTimeout(function () {
            //     canGetNetCardNum = !0
            // }, getNetCardTime), this.checkResurrNum();
            // var e = Userdefault.getIntForKey(localCardKey, 0);
            // return e + netCardNum > 5 ? 5 : e + netCardNum
        },
        checkResurrNum: function () {
            // this.setDataForHttp(wxData.checkResurrDataUrl + "?appId=" + wxData.appId + "&gamerId=" + openid, function (e) {
            //     netCardNum = parseInt(e)
            // });
            // var e = Userdefault.getIntForKey(localCardKey, 0);
            // return e + netCardNum > 5 ? 5 : e + netCardNum
        },
        useResurr: function () {
            // var e = Userdefault.getIntForKey(localCardKey, 0);
            // if (e > 0) {
            //     var t = e + netCardNum,
            //         o = 1;
            //     return t >= 5 && (o = t - 4), void Userdefault.setDataForKey(localCardKey, e - o)
            // }
            // netCardNum--;
            // var i = wxData.useResurrDataUrl + "?appId=" + wxData.appId + "&gamerId=" + openid;
            // this.setDataForHttp(i)
        },
        addLocalResurr: function () {
            // var e = Userdefault.getIntForKey(localCardKey, 0);
            // Userdefault.setDataForKey(localCardKey, e + 1)
        },
        getHelpLevel: function () {
            var e = wx.getLaunchOptionsSync().query;
            return e.level && 8 == e.source ? (helpOpenId = e.gamerId, parseInt(e.level)) : -1
        },
        openShare: function () {
            // var e = this;
            // if (!this.haveGetAuthorize) {
            //     var t = wx.getLaunchOptionsSync().query;
            //     if (t.source) {
            //         var o = wxData.putTouchShareDataUrl + "?appId=" + t.appId + "&principal_gamerId=" + t.gamerId + "&assistant_gamerId=" + openid + "&itemId=" + t.itemId + "&source=" + t.source;
            //         this.setDataForHttp(o), Userdefault.getBoolForKey(t.gamerId, !1) || (canGetLocalCard = !0, getLocalCareId = "" + t.gamerId)
            //     }
            // }
            // wx.showShareMenu({
            //     withShareTicket: !0
            // }), wx.aldOnShareAppMessage(function () {
            //     e.shareOnShow = !0, e.shareBegTime = getTime() / 1e3, e.shareCallBack = null;
            //     for (var t = -1, o = "\u597d\u73a9\u7684\u6e38\u620f\uff0c\u5feb\u6765\u4e00\u8d77\u73a9\u5427", i = "https://res.igame58.com/wxxyx/commom/shareIcon.png", n = 0; n < wxData.shareData.length; n++)
            //         if (wxData.shareData[n].mode == GameName) {
            //             var a = wxData.shareData[n].item,
            //                 s = parseInt(Math.random() * a.length);
            //             t = a[s].id, o = a[s].title, i = a[s].img
            //         } var r = wxData.putShareDataUrl + "?sdsdsds=dsds&appId=" + wxData.appId + "&gamerId=" + openid + "&itemId=" + t + "&source=1";
            //     return e._shareQuery = r, {
            //         title: o,
            //         imageUrl: i,
            //         query: r
            //     }
            // })
        },
        jumpApp: function (e, t, o, i) {
            // var n = this;
            // this.getSDKVersionCanUse("2.2.0") ? wx.navigateToMiniProgram({
            //     appId: e.appId,
            //     path: e.path,
            //     fail: function (a) {
            //         var s = e.appId,
            //             r = serverUrl + "lieyou/wxdata/addGamePromotion?page=" + o + "&appid=" + wxAppId + "&s_number=" + i + "&forward_appid=" + s + "&openid=" + openid + "&status=0";
            //         n.setDataForHttp(r), "navigateToMiniProgram:fail cancel" != a.errMsg && wx.previewImage({
            //             current: t[0],
            //             urls: t,
            //             success: function () {}
            //         })
            //     },
            //     success: function (t) {
            //         var a = e.appId,
            //             s = serverUrl + "lieyou/wxdata/addGamePromotion?page=" + o + "&appid=" + wxAppId + "&s_number=" + i + "&forward_appid=" + a + "&openid=" + openid + "&status=1";
            //         n.setDataForHttp(s)
            //     }
            // }) : wx.previewImage({
            //     current: t[0],
            //     urls: t,
            //     success: function () {}
            // })
        },
        setDataForHttp: function (e, t) {
            // var o = new XMLHttpRequest;
            // o.onreadystatechange = function () {
            //     if (4 == o.readyState && o.status >= 200 && o.status < 400) {
            //         var e = o.responseText;
            //         "-1" == e || "-2" == e || t && t(e)
            //     }
            // }, o.open("GET", e, !0), o.send()
        },
        addToast: function (e, t, o) {},
        shareDialog: function (e) {},
        addGetLocakCardDialog: function (e) {},
        modifyInviteFriend: function (e) {
            // var t = serverUrl + "lieyou/wxdata/modifyFlag/" + wxAppId + "/" + openid + "/" + e;
            // this.setDataForHttp(t)
        },
        deleteInviteFriend: function (e) {
            // var t = serverUrl + "lieyou/wxdata/delFriendInfo/" + e;
            // this.setDataForHttp(t)
        },
        getInviteFriendData: function (e, t) {
            // var o = serverUrl + "lieyou/wxdata/getFriendInfo/" + wxAppId + "/" + openid + "/" + e;
            // this.setDataForHttp(o, function (e) {
            //     var o = JSON.parse(e);
            //     t(o)
            // })
        },
        showInviteFriend: function (e, t) {},
        showInviteFriendFailure: function (e) {},
        getOnlineSpriteFrame: function (e, t) {
            // if ("" != e) {
            //     var o = {
            //         url: e,
            //         type: "image"
            //     };
            //     cc.loader.load(o, function (e, o) {
            //         e || t(new cc.SpriteFrame(o))
            //     })
            // }
        },
        getSDKVersionCanUse: function (e) {
            // for (var t = wx.getSystemInfoSync().SDKVersion, o = e.split("."), i = t.split("."), n = 0; n < 3; n++) {
            //     if (parseInt(i[n]) < parseInt(o[n])) return !1;
            //     if (parseInt(i[n]) > parseInt(o[n])) break
            // }
            return !0
        },
        showGameRecommend: function () {
            // var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            // if (canExperienceGame)
            //     if (this.isOpen(KEY_IS_SHENHE)) e && e(!1);
            //     else {
            //         var t = Userdefault.getIntForKey("SKD_showRecommendDialogTime", 0),
            //             o = parseInt(getTime() / 1e3);
            //         if (o - t < 10) e && e(!1);
            //         else {
            //             Userdefault.setDataForKey("SKD_showRecommendDialogTime", o);
            //             cc.loader.loadRes("SDK/module/RecommendGame/Recommend_playVD", function (t, o) {
            //                 var i = cc.instantiate(o);
            //                 cc.find("Canvas").addChild(i, 999), i.getComponent("RecommendGame_playVD").setData(e)
            //             })
            //         }
            //     }
            // else e && e(!1)
        },
        getShareOrViedo: function () {
            if (this.isOpen(KEY_IS_SHENHE)) return 0;
            var e = this.shareAndVideoAllNum,
                t = 0;
            if (1 == this.shareOrVideoType) t = 0;
            else if (2 == this.shareOrVideoType) t = 1;
            else if (3 == this.shareOrVideoType) t = 2;
            else if (4 == this.shareOrVideoType) t = e % 2 == 0 ? 1 : 2;
            else if (5 == this.shareOrVideoType) t = e % 2 == 0 ? 2 : 1;
            else if (6 == this.shareOrVideoType) {
                var o = (new Date).getHours();
                o >= 0 && o < 10 && (t = 2), t = e % 2 == 0 ? 2 : 1
            }
            return 2 == t ? "" == wxVideoId && (t = this.isOpen(KEY_IS_SHENHE) ? 0 : 1) : 1 == t && this.isOpen(KEY_IS_SHENHE) && (t = "" != wxVideoId ? 2 : 0), t
        },
        setWorldRankData: function (e, t) {
            // var o = serverUrl + "lieyou/wxdata/addRankList?wxGameId=" + wxAppId + "&gamerId=" + openid + "&nikeName=" + uinfo.nick + "&headImagePath=" + uinfo.icon + "&score=" + t + "&rankKey=" + e;
            // this.setDataForHttp(o)
        },
        newJumpApp: function (e) {
            // this.getSDKVersionCanUse("2.2.0") ? wx.navigateToMiniProgram({
            //     appId: e.data.appId,
            //     path: e.data.path,
            //     fail: function (e) {
            //         e.errMsg
            //     },
            //     success: function (t) {
            //         e.getGold && (this.jumpOtherGameTime = getTime() / 1e3, this.jumpOtherGameOnShowGetGold = !0)
            //     }.bind(this)
            // }) : wkCommonScript.addToast({
            //     str: "\u7248\u672c\u4e0d\u652f\u6301"
            // })
        },
        jniLevel: function (e, t, o) {
        //     try {
        //         var i = t + "";
        //         0 == o ? wx.aldStage.onStart({
        //             stageId: i,
        //             stageName: e
        //         }) : 1 == o ? wx.aldStage.onEnd({
        //             stageId: i,
        //             stageName: e,
        //             event: "complete"
        //         }) : 2 == o && wx.aldStage.onEnd({
        //             stageId: i,
        //             stageName: e,
        //             event: "fail"
        //         })
        //     } catch (e) {
        //         lieyou_showLog("wxlog------error  initOnlineData + " + JSON.stringify(e))
        //     }
        }
    });
    module.exports = i;
}