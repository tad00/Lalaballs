{
    const e = require;
    var i = cc.Class({
        extends: e("BaseManager"),
        properties: {
            bannerAd: null
        },
        getHaveVideo: function () {
            return !("" == vivoVideoId || !this._canShowAD || this.platformVersionCode < 1041)
        },
        getSysPlatform_string: function () {
            return "vivo"
        },
        getSysPlatform: function () {
            return 3
        },
        onShow: function (e) {
            //qg.onShow(e)
        },
        onHide: function (e) {
            //qg.onHide(e)
        },
        setOnlineData: function (e) {
            // if (e.vivo) {
            //     e.vivo.closeShortcut || this.installShortcut();
            //     var t = {};
            //     if (e.vivo.theme && (t.theme = e.vivo.theme), e.vivo.crossSwitch && (t.crossSwitch = e.vivo.crossSwitch), e.vivo.bizData && (t.bizData = e.vivo.bizData), e.vivo.ad_datas && (t.ad_datas = e.vivo.ad_datas), e.vivo.switch && (t.switch = e.vivo.switch), this.platformVersionCode, void 0 != e.vivo.serverVersion) Number(e.vivo.serverVersion) >= vivoGameVersion ? this.base_IsShenHe = !1 : this.base_IsShenHe = !0;
            //     e.vivo.id_config && 1 != e.vivo.is_local_pos_id && (void 0 != e.vivo.id_config.appid && (vivoId_SDK = e.vivo.id_config.appid), void 0 != e.vivo.id_config.bid && (vivoBannerId = e.vivo.id_config.bid), void 0 != e.vivo.id_config.spoid && (vivoSpotADId = e.vivo.id_config.spoid), void 0 != e.vivo.id_config.awardid && (vivoVideoId = e.vivo.id_config.awardid), void 0 != e.vivo.id_config.nativeAd && (vivoNativeId = e.vivo.id_config.nativeAd)), void 0 != e.vivo.banner_close_but_size && (this.banner_close_but_size = Number(e.vivo.banner_close_but_size)), void 0 != e.vivo.banner_close_but_range && (this.banner_close_but_range = Number(e.vivo.banner_close_but_range)), void 0 != e.vivo.spot_close_but_alpha && (this.spot_close_but_alpha = Number(e.vivo.spot_close_but_alpha)), void 0 != e.vivo.spot_close_but_size && (this.spot_close_but_size = Number(e.vivo.spot_close_but_size)), void 0 != e.vivo.banner_show_height && (this.banner_show_height = Number(e.vivo.banner_show_height)), void 0 != e.vivo.spot_close_but_range && (this.spot_close_but_range = Number(e.vivo.spot_close_but_range)), void 0 != e.vivo.banner_close_but_alpha && (this.banner_close_but_alpha = Number(e.vivo.banner_close_but_alpha)), void 0 != e.vivo.banner_close_but_show && (this.banner_close_but_show = e.vivo.banner_close_but_show), void 0 != e.vivo.spot_click_close && (this.spot_click_close = e.vivo.spot_click_close), void 0 != e.vivo.spot_first_ad && (this.spot_first_ad = e.vivo.spot_first_ad), void 0 != e.vivo.banner_first_ad && (this.banner_first_ad = e.vivo.banner_first_ad), void 0 != e.vivo.nativeDelayShowTime && (this.nativeDelayShowTime = Number(e.vivo.nativeDelayShowTime)), void 0 != e.vivo.nativeDelayDestroyTime && (this.nativeDelayDestroyTime = Number(e.vivo.nativeDelayDestroyTime))
            // } else this.installShortcut()
        },
        initOnlineData: function () {
            // if ("" == oppoGetOnlineDataId) return wkCommonScript.addToast({
            //     str: "\u6ca1\u6709\u586b\u5199qgID"
            // }), void this.installShortcut();
            // var e = this,
            //     t = Userdefault.getIntForKey("sdk_vivo_online_version", 0),
            //     o = Userdefault.getIntForKey("sdk_vivo_online_time", 0),
            //     i = Userdefault.getIntForKey("sdk_vivo_online_sp", 0),
            //     n = getTime() / 1e3;
            // if (n - o < i) {
            //     var a = Userdefault.getStringForKey("sdk_vivo_online_data", ""),
            //         s = JSON.parse(a);
            //     e.setOnlineData(s)
            // } else {
            //     this.dataVersion = t;
            //     var r = this.getLoginUrl();
            //     this.setDataForHttp(r, function (o) {
            //         if ("" != o) try {
            //             var i = JSON.parse(o);
            //             if (void 0 != i.isMoreInfo && (e.isMoreInfo = i.isMoreInfo), i.sp && Userdefault.setDataForKey("sdk_vivo_online_sp", i.sp), Userdefault.setDataForKey("sdk_vivo_online_time", n), i.server_data_version == t) {
            //                 o = Userdefault.getStringForKey("sdk_vivo_online_data", "");
            //                 var a = JSON.parse(o);
            //                 return void e.setOnlineData(a)
            //             }
            //             if (!(a = JSON.parse(o).data)) return;
            //             e.setOnlineData(a), i.server_data_version && Userdefault.setDataForKey("sdk_vivo_online_version", i.server_data_version), Userdefault.setDataForKey("sdk_vivo_online_data", JSON.stringify(a))
            //         } catch (t) {
            //             e.installShortcut(), lieyou_showLog("vivolog------error  initOnlineData + " + t)
            //         } else e.installShortcut()
            //     })
            // }
        },
        getSystemInfo: function () {
            // var e = this,
            //     t = qg.getSystemInfoSync();
            // this.platformVersionCode = t.platformVersionCode, this.androidVersion = t.osVersionName, this.model = t.model, openid = t.product, this.region = t.region, qg.getNetworkType({
            //     success: function (t) {
            //         e.networkType = t.type
            //     }
            // })
        },
        init: function (e) {
            // var t = this;
            // this.getSystemInfo(), this._canShowAD = !0, this.platformVersionCode < 1031 && (this._canShowAD = !1), lieyou_showLog("vivo-------------- init   " + this._canShowAD), this._videoAd = null, this._canShowVideoAd = !0, this._canShowBannerAd = !0, this._canShowSpotAd = !0, this._canShowNativeAd = !0, this.spot_first_ad = "native", this.banner_first_ad = "native", this.nativeDelayShowTime = .8, this.nativeDelayDestroyTime = .1, this.spot_close_but_alpha = 180, this.spot_close_but_size = 55, this.spot_close_but_range = 65, this.spot_click_close = !0, this.refreshBannerTime = 15, this.banner_close_but_alpha = 180, this.banner_close_but_size = 35, this.banner_close_but_range = 40, this.banner_show_height = 115, this.banner_close_but_show = !0, setTimeout(function () {
            //     t.initOnlineData()
            // }, 1e3)
        },
        vibrateShort: function () {
           // qg.vibrateShort()
        },
        vibrateLong: function () {
            //qg.vibrateLong()
        },
        hideBanner: function () {
            //this._canShowBanner = !1, this._haveBannerAd = !1, clearInterval(this.bannerTimeOut), this.bannerAd && (this.bannerAd.destroy(), this.bannerAd = null), this._BannerNativeADNode && this._BannerNativeADNode.isValid && (this._BannerNativeADNode.destroy(), this._BannerNativeADNode = null)
        },
        showBanner: function (e) {
            //this._canShowBanner = !0, clearInterval(this.bannerTimeOut);
            //var t = this.refreshBannerTime;
            //"native" == this.banner_first_ad ? (this.showBannerNative(), this.bannerTimeOut = setInterval(this.showBannerNative.bind(this), 1e3 * t)) : (this.showBannerSys(), this.bannerTimeOut = setInterval(this.showBannerSys.bind(this), 1e3 * t))
        },
        showBannerSys: function (e) {
            // var t = this;
            // if (lieyou_showLog("vivolog--------------  banner show + " + t._canShowBanner + "   " + this._haveBannerAd), t._canShowBanner && !this._haveBannerAd) {
            //     if ("" == vivoBannerId || !this._canShowAD || !this._canShowBannerAd) return this._canShowBannerAd || lieyou_showLog("vivolog----------- load banner fail \u95f4\u9694\u672a\u523010s\u949f"), void(e || t.showBannerNative(!0));
            //     setTimeout(function () {
            //         t._canShowBannerAd = !0
            //     }, 1e4), t._canShowBannerAd = !1;
            //     var o = qg.createBannerAd({
            //         posId: vivoBannerId,
            //         style: {}
            //     });
            //     o && o.onLoad(function () {
            //         o && o.show(), t._canShowBanner ? (t._haveBannerAd = !0, t._BannerNativeADNode && t._BannerNativeADNode.isValid && (t._BannerNativeADNode.destroy(), t._BannerNativeADNode = null), t.bannerAd && t.bannerAd != o && t.bannerAd.destroy(), t.bannerAd = o, lieyou_showLog("vivolog--------------  banner show success")) : o.destroy()
            //     }), o && o.onError(function (o) {
            //         t._haveBannerAd = !1, e || t.showBannerNative(!0), lieyou_showLog("vivolog--------------  banner show fail" + JSON.stringify(o))
            //     }), o.onClose(function () {
            //         t._haveBannerAd = !1
            //     })
            // }
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
            // lieyou_showLog("vivolog---------- showRewardedVideoAd");
            // var o = this;
            // if (o.playVideoCallBack = t, this.platformVersionCode < 1041 || "" == vivoVideoId || !this._canShowVideoAd) return this._canShowVideoAd || lieyou_showLog("vivolog---------- load video fail \u95f4\u9694\u672a\u5230\u4e00\u5206\u949f"), void(o.playVideoCallBack && (o.playVideoCallBack(!1), o.playVideoCallBack = null));
            // if (setTimeout(function () {
            //         o._canShowVideoAd = !0
            //     }, 6e4), o._canShowVideoAd = !1, this._videoAd) this._videoAd.load();
            // else {
            //     var i = qg.createRewardedVideoAd({
            //         posId: vivoVideoId
            //     });
            //     this._videoAd = i, i && i.onLoad(function () {
            //         lieyou_showLog("vivolog---------- load video success"), i && i.show(), cc.audioEngine.stopAllEffects(), cc.game.pause()
            //     }), i && i.onClose(function (e) {
            //         o.playVideoCallBack && (lieyou_showLog("vivolog---------- load video close"), cc.game.resume(), window.vivoPlayVDCallBack && window.vivoPlayVDCallBack(), e.isEnded ? o.playVideoCallBack(!0) : o.playVideoCallBack(!1), o.playVideoCallBack = null)
            //     }), i && i.onError(function (e) {
            //         lieyou_showLog("vivolog---------- load video fail" + JSON.stringify(e)), o.playVideoCallBack && (o.playVideoCallBack(!1), o.playVideoCallBack = null)
            //     })
            // }
        },
        showSpot: function (e) {
            // var t = this;
            // if (lieyou_showLog("vivolog--------------  showSpot"), "" == vivoSpotADId || !this._canShowAD || !this._canShowSpotAd) return this._canShowBannerAd || lieyou_showLog("vivolog----------- load spot fail \u95f4\u9694\u672a\u523010s\u949f"), void(e || t.showNativeBanner(!0));
            // setTimeout(function () {
            //     t._canShowSpotAd = !0
            // }, 1e4), t._canShowSpotAd = !1;
            // var o = qg.createInterstitialAd({
            //     posId: vivoSpotADId
            // });
            // o && o.onLoad(function () {
            //     setTimeout(function () {
            //         o && o.show()
            //     }, 1e3 * t.nativeDelayShowTime), lieyou_showLog("vivolog--------------  spot load success")
            // }), o && o.onError(function (o) {
            //     e || t.showNativeBanner(!0), lieyou_showLog("vivolog--------------  spot show fail" + JSON.stringify(o))
            // })
        },
        custClickNative: function (e) {
            // e && e.isValid && (e.CallBack ? e.CallBack() : wkCommonScript.addToast({
            //     str: "\u6682\u4e0d\u53ef\u7528"
            // }))
        },
        addNativeAd: function (e) {
            // var t = this;
            // if (!e.isRun) {
            //     e.isRun = !0;
            //     var o = cc.repeatForever(cc.sequence(cc.delayTime(11), cc.callFunc(function () {
            //         t.addNativeAd(e)
            //     })));
            //     o.setTag(5697846), e.runAction(o)
            // }
            // if ("" == vivoNativeId || this.platformVersionCode < 1053 || !this._canShowNativeAd) this._canShowNativeAd || lieyou_showLog("vivolog----------- load play native fail \u95f4\u9694\u672a\u523010s\u949f");
            // else {
            //     setTimeout(function () {
            //         t._canShowNativeAd = !0
            //     }, 1e4), t._canShowNativeAd = !1;
            //     var i = qg.createNativeAd({
            //         posId: vivoNativeId
            //     });
            //     i.load(), i.onLoad(function (o) {
            //         if (o && o.adList && o.adList.length > 0) try {
            //             var n = parseInt(Math.random() * o.adList.length),
            //                 a = o.adList[n].adId,
            //                 s = (o.adList[n].title, o.adList[n].desc, o.adList[n].clickBtnTxt, []);
            //             o.adList[n].icon && "" != o.adList[n].icon && s.push(o.adList[n].icon);
            //             var r = o.adList[n].imgUrlList;
            //             r = [];
            //             var c = o.adList[n].logoUrl;
            //             i.reportAdShow({
            //                 adId: a
            //             }), lieyou_showLog("vivolog-------- show play native success ");
            //             var l = e;
            //             if (!l || !l.isValid) return void lieyou_showLog("vivolog nativeNode null");
            //             if (l.stopActionByTag(5697846), l.CallBack = function () {
            //                     i.reportAdClick({
            //                         adId: a
            //                     }), l.isRun = !1, t.addNativeAd(l)
            //                 }, l && l.isValid && l.getComponent(cc.Sprite)) {
            //                 if (l.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM, !l.haveTouchOn && (l.haveTouchOn = !0, l.on(cc.Node.EventType.TOUCH_START, function (e) {
            //                         e.target.CallBack()
            //                     }), "" != c)) {
            //                     var h = new cc.Node;
            //                     h.scale = .5, l.addChild(h), h.x = l.width / 2, h.y = l.height / 2 * -1, h.anchorX = 1, h.anchorY = 0, h.addComponent(cc.Sprite), cc.loader.load(c, function (e, t) {
            //                         h && h.isValid && (h.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(t))
            //                     })
            //                 }
            //                 var d = "";
            //                 l.width / l.height >= 1.5 ? r.length > 0 ? d = r[parseInt(Math.random() * r.length)] : s.length > 0 && (d = s[parseInt(Math.random() * s.length)]) : s.length > 0 ? d = s[parseInt(Math.random() * s.length)] : r.length > 0 && (d = r[parseInt(Math.random() * r.length)]), "" != d && cc.loader.load(d, function (e, t) {
            //                     l && l.isValid && (l.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(t))
            //                 })
            //             }
            //         } catch (e) {
            //             lieyou_showLog("vivolog-- showplayNativeFail   " + e)
            //         } else lieyou_showLog("vivolog-------------- play native fail 1   " + JSON.stringify(o))
            //     }), i.onError(function (e) {
            //         lieyou_showLog("vivolog-------- show play native fail    " + JSON.stringify(e))
            //     })
            // }
        },
        showBannerNative: function (e) {
            // var t = this,
            //     o = this;
            // if (!this._haveBannerAd) {
            //     if ("" == vivoNativeId || this.platformVersionCode < 1053 || !this._canShowNativeAd) return this._canShowNativeAd || lieyou_showLog("vivolog----------- load banner native fail \u95f4\u9694\u672a\u523010s\u949f"), void(e || o.showBannerSys(!0));
            //     setTimeout(function () {
            //         o._canShowNativeAd = !0
            //     }, 1e4), o._canShowNativeAd = !1;
            //     var i = qg.createNativeAd({
            //         posId: vivoNativeId
            //     });
            //     i.load(), i.onLoad(function (n) {
            //         if (!(n && n.adList && n.adList.length > 0)) return lieyou_showLog("vivolog-------------- banner native fail 1   " + JSON.stringify(n)), void(e || o.showBannerSys(!0));
            //         try {
            //             var a = parseInt(Math.random() * n.adList.length),
            //                 s = n.adList[a].adId,
            //                 r = n.adList[a].title,
            //                 c = n.adList[a].desc,
            //                 l = n.adList[a].clickBtnTxt,
            //                 h = [];
            //             n.adList[a].icon && "" != n.adList[a].icon && h.push(n.adList[a].icon);
            //             var d = n.adList[a].imgUrlList;
            //             d = [];
            //             var u = n.adList[a].logoUrl;
            //             i.reportAdShow({
            //                 adId: s
            //             }), lieyou_showLog("vivolog-------- show banner native success "), cc.loader.loadRes("SDK/module/qGameNativeAd/bannerNativeAd", function (e, t) {
            //                 if (o._canShowBanner) try {
            //                     var n = cc.director.getRunningScene(),
            //                         a = cc.instantiate(t);
            //                     o._BannerNativeADNode && o._BannerNativeADNode.isValid && (o._BannerNativeADNode.destroy(), o._BannerNativeADNode = null), o._BannerNativeADNode = a, a.x = cc.winSize.width / 2, n.addChild(a, 999), cc.game.addPersistRootNode(a), a.getComponent("oppoNativeAdSdk").setData({
            //                         touchCallBack: function () {
            //                             i.reportAdClick({
            //                                 adId: s
            //                             })
            //                         }.bind(this),
            //                         closeCallBack: function () {}.bind(this),
            //                         title: r,
            //                         desc: c,
            //                         clickBtnTxt: l,
            //                         iconUrlList: h,
            //                         imgUrlList: d,
            //                         logoUrl: u,
            //                         closeAlpha: o.banner_close_but_alpha,
            //                         closeSize: o.banner_close_but_size,
            //                         closeRange: o.banner_close_but_range,
            //                         closeShow: o.banner_close_but_show,
            //                         bannerHeight: o.banner_show_height
            //                     })
            //                 } catch (e) {
            //                     lieyou_showLog("vivolog-- showbannerNativeFail   " + e)
            //                 }
            //             }.bind(t))
            //         } catch (e) {
            //             lieyou_showLog("vivolog-- showbannerNativeFail   " + e)
            //         }
            //     }), i.onError(function (t) {
            //         e || o.showBannerSys(!0), lieyou_showLog("vivolog-------- show banner native fail    " + JSON.stringify(t))
            //     })
            // }
        },
        showNativeBanner: function (e) {
            // var t = this,
            //     o = this;
            // if ("" == vivoNativeId || this.platformVersionCode < 1053 || !this._canShowNativeAd) return this._canShowNativeAd || lieyou_showLog("vivolog----------- load native fail \u95f4\u9694\u672a\u523010s\u949f"), void(e || o.showSpot(!0));
            // setTimeout(function () {
            //     o._canShowNativeAd = !0
            // }, 1e4), o._canShowNativeAd = !1;
            // var i = qg.createNativeAd({
            //     posId: vivoNativeId
            // });
            // i.load(), i.onLoad(function (n) {
            //     if (!(n && n.adList && n.adList.length > 0)) return lieyou_showLog("vivolog--------------  native fail 1   " + JSON.stringify(n)), void(e || o.showSpot(!0));
            //     try {
            //         var a = parseInt(Math.random() * n.adList.length),
            //             s = n.adList[a].adId,
            //             r = n.adList[a].title,
            //             c = n.adList[a].desc,
            //             l = n.adList[a].clickBtnTxt,
            //             h = [];
            //         n.adList[a].icon && "" != n.adList[a].icon && h.push(n.adList[a].icon);
            //         var d = n.adList[a].imgUrlList,
            //             u = n.adList[a].logoUrl;
            //         i.reportAdShow({
            //             adId: s
            //         }), lieyou_showLog("vivolog-------- show native success "), cc.loader.loadRes("SDK/module/qGameNativeAd/nativeAd", function (e, t) {
            //             try {
            //                 var n = cc.director.getRunningScene(),
            //                     a = cc.instantiate(t);
            //                 a.scale = 0, setTimeout(function () {
            //                     a.scale = 1
            //                 }, 1e3 * this.nativeDelayShowTime), n.addChild(a, 999), cc.game.addPersistRootNode(a), a.x = cc.winSize.width / 2, a.y = cc.winSize.height / 2, a.getComponent("oppoNativeAdSdk").setData({
            //                     touchCallBack: function () {
            //                         i.reportAdClick({
            //                             adId: s
            //                         }), setTimeout(function () {
            //                             a.destroy()
            //                         }, 1e3 * this.nativeDelayDestroyTime)
            //                     }.bind(this),
            //                     closeCallBack: function () {}.bind(this),
            //                     title: r,
            //                     desc: c,
            //                     clickBtnTxt: l,
            //                     iconUrlList: h,
            //                     imgUrlList: d,
            //                     logoUrl: u,
            //                     closeAlpha: o.spot_close_but_alpha,
            //                     closeSize: o.spot_close_but_size,
            //                     closeRange: o.spot_close_but_range,
            //                     closeShow: o.spot_click_close
            //                 })
            //             } catch (e) {
            //                 lieyou_showLog("vivolog-- showNativeFail   " + e)
            //             }
            //         }.bind(t))
            //     } catch (e) {
            //         lieyou_showLog("vivolog-- showNativeFail   " + e)
            //     }
            // }), i.onError(function (t) {
            //     e || o.showSpot(!0), lieyou_showLog("vivolog-------- show native fail    " + JSON.stringify(t))
            // })
        },
        showSpotByPause: function (e, t) {
            //this.addShowSpotNum()
        },
        showSpotByBegin: function (e, t) {
            //this.addShowSpotNum()
        },
        showSpotByFinish: function (e, t) {
            //this.addShowSpotNum()
        },
        addShowSpotNum: function () {
            // var e = Userdefault.getIntForKey("vivo_showNativeNum", 0);
            // Userdefault.setDataForKey("vivo_showNativeNum", e + 1), "native" == this.spot_first_ad ? this.showNativeBanner(!1) : this.showSpot(!1)
        },
        installShortcut: function () {
        //     if (!(this.platformVersionCode < 1041)) {
        //         var e = this;
        //         qg.hasShortcutInstalled({
        //             success: function (t) {
        //                 0 == t && qg.installShortcut({
        //                     success: function () {
        //                         e.setOperTrack({
        //                             type: 1,
        //                             state: 1
        //                         })
        //                     },
        //                     fail: function () {
        //                         e.setOperTrack({
        //                             type: 1,
        //                             state: 0
        //                         })
        //                     }
        //                 })
        //             }
        //         })
        //     }
        }
    });
    module.exports = i;
}