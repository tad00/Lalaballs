{
    const o = exports;
    const e = require;
    Object.defineProperty(o, "__esModule", {
        value: !0
    });
    var i, n, a = e("PPGP_ModalNode"),
        s = e("PPGP_ToastBase"),
        r = e("PPGP_LoadingNodeBase"),
        c = e("PPBB_SettingHandler"),
        l = e("SdkManager"),
        h = e("PPBB_SoundUtils");
    e("SdkData"),
        function (e) {
            e[e.WECHAT = 0] = "WECHAT", e[e.NATIVE = 1] = "NATIVE", e[e.FACEBOOK = 2] = "FACEBOOK", e[e.VIVO = 3] = "VIVO", e[e.OPPO = 4] = "OPPO", e[e.OPPOH5 = 5] = "OPPOH5", e[e.HUAWEI = 6] = "HUAWEI", e[e.XIAOMIH5 = 7] = "XIAOMIH5", e[e.TOUTIAO = 8] = "TOUTIAO", e[e.XIAOMI = 9] = "XIAOMI", e[e.BAIDU = 10] = "BAIDU", e[e.QQ = 11] = "QQ"
        }(i || (i = {})),
        function (e) {
            e[e.BEGIN = 0] = "BEGIN", e[e.PAUSE = 1] = "PAUSE", e[e.FINISH = 2] = "FINISH"
        }(n || (n = {}));
    var d = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
        },
        u = function () {
            function e() {}
            return e.getMoreGameBannerExist = function () {
                return this._moreGameBanner && !0 === this._moreGameBanner.active
            }, e.showMoreGameByBanner = function (t) {
                if (void 0 === t && (t = cc.director.getScene()), console.log("showMoreGameByBanner++++++"), e.getSysPlatform() === e.SDKPlatform.OPPO) {
                    if (!this._moreGameBanner) {
                        var o = new cc.Node("moreGameBanner");
                        o.parent = t, o.x = cc.winSize.width / 2, o.y = 0, this._moreGameBanner = o
                    }
                    this._moreGameBanner.removeAllChildren(), l.showMoreGameByBanner({
                        node: this._moreGameBanner,
                        x: 0,
                        y: 0
                    }), this._moreGameBanner.active = !0, this.moreGameBannerShowed = !0
                } else l.showMoreGameByBanner({})
            }, e.hideMoreGameByBanner = function () {
                this._moreGameBanner && (this._moreGameBanner.active = !1), this.moreGameBannerShowed = !1
            }, Object.defineProperty(e, "wxExist", {
                get: function () {
                    return this._checkWx()
                },
                enumerable: !0,
                configurable: !0
            }), e.morethanVersion = function (e, t) {
                var o = e.split("."),
                    i = t.split(".");
                return 1e4 * parseInt(o[0]) + 100 * parseInt(o[1]) + parseInt(o[2]) >= 1e4 * parseInt(i[0]) + 100 * parseInt(i[1]) + parseInt(i[2])
            }, e.init = function (e) {
                this.sys = this.wxExist && wx.getSystemInfoSync ? wx.getSystemInfoSync() : {}, this._onShowList = [], this._checkWx() && (wx && wx.offShow(this._runOnShowCallback), wx && wx.onShow(this._runOnShowCallback))
            }, e.enablePullConfigOnShow = function () {
                this.offShow("sdk"), this.onShow("sdk", function (e) {}, 0)
            }, e.getShareOrViedo = function () {
                return l.getHaveVideo() ? 2 : 0
            }, e.convertNodeRect = function (e) {
                var t = e.parent.convertToWorldSpaceAR(e.position),
                    o = cc.view.getVisibleSize(),
                    i = cc.view.getCanvasSize(),
                    n = t.x - e.width * e.anchorX * e.scaleX,
                    a = o.height - t.y - e.height * (1 - e.anchorY) * e.scaleY,
                    s = i.width / o.width,
                    r = i.height / o.height;
                return {
                    left: n * s,
                    top: a * r,
                    width: e.width * e.scaleX * s,
                    height: e.height * e.scaleY * r
                }
            }, e.getNamespace = function () {
                var e, t = this.getSysPlatform();
                return t === i.WECHAT ? e = "wx" : t === i.QQ ? e = "qq" : t === i.TOUTIAO ? e = "tt" : t === i.VIVO ? e = "qg" : t === i.OPPO && (e = "qg"), window[e]
            }, e.checkQQIOS = function () {
                return this.getSysPlatform() === this.SDKPlatform.QQ && cc.sys.os === cc.sys.OS_IOS
            }, e.getSysPlatform = function () {
                return l.getSysPlatform()
            }, e.initSDK = function (e) {
                void 0 === e && (e = {}), l.init(e)
            }, e.showBannerByBottom = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                console.log("showBanner"), this.checkPlatform(e, function () {
                    l.showBannerByBottom()
                })
            }, e.showSpotByFinish = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return l.showSpotByFinish.apply(l, e)
            }, e.hideBanner = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                console.log("hideBanner"), this.checkPlatform(e, function () {
                    l.hideBanner()
                })
            }, e.hasVideo = function () {
                return l.getHaveVideo()
            }, e.hasShare = function () {
                return [i.WECHAT].indexOf(this.getSysPlatform()) >= 0
            }, e.showRewardedVideoAd = function (e, t) {
                var o = this;
                h.default.stopMusic(), this.videoState = !0, l.showRewardedVideoAd(null, function (i) {
                    i ? e && e() : t && t(), h.default.resumeMusic(), o.videoState = !1
                })
            }, e.shareOrVideo = function (t) {
                var o = e.getShareOrViedo();
                0 === o ? (e.showToast("Video is currently not supported in the current version"), t.onUnExsist && t.onUnExsist()) : 1 === o ? e.SDKSahre({
                    source: t.shareSource,
                    success: function (o) {
                        0 === o ? (e.showToast("Share failed, please try again"), t.fail && t.fail()) : t.success && t.success()
                    }
                }) : 2 === o && e.showRewardedVideoAd(function () {
                    t.success && t.success()
                }, function () {
                    e.showToast("I didn't finish watching the video!"), t.fail && t.fail()
                })
            }, e.checkLongPhone = function () {
                var e = cc.view.getVisibleSize(),
                    t = e.height / e.width;
                return console.log("HWRate:", t), t >= 2
            }, e.showSpotBanner = function (e, t, o, i) {
                void 0 === t && (t = []);
                this.checkPlatform(t, function () {
                    switch (e) {
                        case n.BEGIN:
                            l.showSpotByBegin(o, i);
                            break;
                        case n.PAUSE:
                            l.showSpotByPause(o, i);
                            break;
                        case n.FINISH:
                            l.showSpotByFinish(o, i)
                    }
                })
            }, e.checkPlatform = function (e, t) {
                void 0 === e && (e = []), 0 !== e.length ? e.indexOf(l.getSysPlatform()) >= 0 && t && t() : t && t()
            }, e.onShow = function (e, t, o, i) {
                void 0 === o && (o = 0), void 0 === i && (i = !1);
                var n = this._onShowList.findIndex(function (t) {
                    return t.name == e
                });
                if (-1 !== n) {
                    var a = this._onShowList[n];
                    a.callback = t, a.order = o
                } else this._onShowList.push({
                    name: e,
                    callback: t,
                    order: o
                });
                i && "undefined" != typeof wx && t && t(wx.getLaunchOptionsSync())
            }, e.offShow = function (e) {
                var t = this._onShowList.findIndex(function (t) {
                    return t.name == e
                });
                return t >= 0 && this._onShowList.splice(t, 1), t >= 0
            }, e.getUserInfo = function (e, t, o, i) {
                void 0 === o && (o = null), void 0 === i && (i = !1), d("SDK.getUserInfo"), this._checkWx(t, o) && wx.getUserInfo({
                    withCredentials: i,
                    openIdList: [],
                    lang: "zh_CN",
                    success: e,
                    fail: t,
                    complete: o
                })
            }, e.getUserInfoSetting = function (e, t, o) {
                d("SDK.getUserInfoSetting"), this._checkWx(t, o) && wx.getSetting({
                    success: function (o) {
                        o && o.authSetting && (!0 === o.authSetting["scope.userInfo"] ? e && e() : t && t())
                    },
                    fail: t,
                    complete: o
                })
            }, e.enableShare = function (e, t, o) {
                var i = this;
                void 0 === e && (e = null), void 0 === t && (t = null), void 0 === o && (o = null), d("SDK.enableShare"), this._checkWx(t, o, "showShareMenu") && (this._shareEnabled || wx.showShareMenu({
                    withShareTicket: !0,
                    success: function (t) {
                        i._shareEnabled = !0, e && e(t)
                    },
                    fail: function (e) {
                        t && t(e), o && o(e)
                    },
                    complete: o
                }))
            }, e.showImage = function (e, t, o, i) {
                void 0 === t && (t = null), void 0 === o && (o = null), void 0 === i && (i = null), d("SDK.showImage"), this._checkWx(o, i) && wx.previewImage({
                    current: e,
                    urls: [e],
                    success: function (e) {
                        t && t(e)
                    },
                    fail: o,
                    complete: i
                })
            }, e.showToast = function (e, t, o, i, n, a) {
                void 0 === t && (t = 1500), void 0 === o && (o = null), void 0 === i && (i = null), void 0 === n && (n = null), void 0 === a && (a = null), d("SDK.showToast"), s.default.showToast({
                    title: e,
                    duration: t / 1e3,
                    success: o,
                    fail: i,
                    complete: n
                })
            }, e.showLoading = function (e, t, o, i, n) {
                void 0 === e && (e = "Loading..."), void 0 === t && (t = !0), void 0 === o && (o = null), void 0 === i && (i = null), void 0 === n && (n = null), d("SDK.showLoading"), this._checkWx(i, n, "showLoading") ? wx.showLoading({
                    title: e,
                    mask: t,
                    success: o,
                    fail: i,
                    complete: n
                }) : r.default.showLoading({
                    title: e,
                    mask: t,
                    success: o,
                    fail: i,
                    complete: n,
                    delayTime: 0
                })
            }, e.hideLoading = function (e, t, o) {
                void 0 === e && (e = null), void 0 === t && (t = null), void 0 === o && (o = null), d("SDK.hideLoading"), this._checkWx(t, o, "hideLoading") ? wx.hideLoading({
                    success: e,
                    fail: t,
                    complete: o
                }) : r.default.hideLoading({
                    success: e
                })
            }, e.showModal = function (e) {
                var t = e.title,
                    o = void 0 === t ? "" : t,
                    i = e.content,
                    n = void 0 === i ? "" : i,
                    s = e.showCancel,
                    r = void 0 === s || s,
                    c = e.cancelText,
                    l = void 0 === c ? "\u53d6\u6d88" : c,
                    h = e.confirmText,
                    u = void 0 === h ? "\u786e\u5b9a" : h,
                    p = e.confirm,
                    f = void 0 === p ? null : p,
                    _ = e.cancel,
                    g = void 0 === _ ? null : _,
                    v = e.success,
                    m = void 0 === v ? null : v,
                    y = e.fail,
                    w = void 0 === y ? null : y,
                    B = e.complete,
                    P = void 0 === B ? null : B;
                d("SDK.showModal"), this._checkWx(w, P) ? wx.showModal({
                    title: o,
                    content: n,
                    showCancel: r,
                    cancelText: l,
                    confirmText: u,
                    success: function (e) {
                        e.confirm ? f && f() : e.cancel && g && g(), m && m(e)
                    },
                    fail: w,
                    complete: P
                }) : a.default.showModal({
                    title: o,
                    content: n,
                    showCancel: r,
                    cancelText: l,
                    confirmText: u,
                    success: m,
                    fail: w,
                    complete: P,
                    confirm: f,
                    cancel: g
                })
            }, e.vibrate = function (e) {
                if (c.default.vibrateState) switch (this.getSysPlatform()) {
                    case i.WECHAT:
                        e ? wx.vibrateLong({
                            success: null,
                            fail: null,
                            complete: null
                        }) : wx.vibrateShort({
                            success: null,
                            fail: null,
                            complete: null
                        });
                        break;
                    case i.VIVO:
                    case i.OPPO:
                        e ? qg.vibrateLong() : qg.vibrateShort();
                        break;
                    case i.QQ:
                        e ? qq.vibrateLong() : qq.vibrateShort();
                        break;
                    case i.TOUTIAO:
                        e ? tt.vibrateLong() : tt.vibrateShort()
                }
            }, e.getHasVibrateAPI = function () {
                switch (this.getSysPlatform()) {
                    case i.WECHAT:
                        return void 0 !== wx.vibrateLong;
                    case i.VIVO:
                    case i.OPPO:
                        return void 0 !== qg.vibrateLong;
                    case i.QQ:
                        return void 0 !== qq.vibrateLong;
                    case i.TOUTIAO:
                        return void 0 !== tt.vibrateLong
                }
                return !1
            }, e.onMenuShare = function (e) {
                var t = e.title,
                    o = void 0 === t ? "@\u6211 \u5927\u5bb6\u4e00\u8d77\u6765\u73a9\u628a!" : t,
                    n = e.imageUrl,
                    a = void 0 === n ? "sdk-res/share.png" : n,
                    s = e.query,
                    r = void 0 === s ? "" : s;
                this.getSysPlatform() === i.WECHAT && (console.log("shareMenu"), wx.showShareMenu({
                    withShareTicket: !0,
                    success: function () {
                        wx.onShareAppMessage(function () {
                            return {
                                title: o,
                                imageUrl: a,
                                query: r
                            }
                        })
                    },
                    fail: null,
                    complete: null
                }))
            }, e.SDKSahre = function (e) {
                var t = e.name,
                    o = void 0 === t ? "" : t,
                    i = e.source,
                    n = void 0 === i ? 1 : i,
                    a = e.success,
                    s = void 0 === a ? null : a;
                l.share({
                    name: o,
                    source: n,
                    success: function (e) {
                        s && s(e)
                    }
                })
            }, e.share = function (e) {
                var t = e.title,
                    o = void 0 === t ? "" : t,
                    n = e.imageUrl,
                    a = void 0 === n ? 'https://res.igame58.com/wxxyx/commom/shareIcon.png"' : n,
                    s = e.query,
                    r = void 0 === s ? "" : s;
                this.getSysPlatform() === i.WECHAT && wx.shareAppMessage({
                    title: o,
                    imageUrl: a,
                    query: r
                })
            }, e.compareVersion = function (e, t) {
                "string" != typeof e && (e = e.toString ? e.toString() : "0"), "string" != typeof t && (t = t.toString ? t.toString() : "0");
                for (var o = e.split("."), i = t.split("."), n = Math.max(o.length, i.length), a = 0, s = 0; s < n && 0 == (a = (parseInt(o[s]) || 0) - (parseInt(i[s]) || 0)); ++s);
                return a
            }, e.checkWxVersion = function (e) {
                return this._checkWx() ? this.compareVersion(this.sys.version, e) : -1
            }, e.checkWxSdkVersion = function (e) {
                return this._checkWx() ? this.compareVersion(this.sys.SDKVersion || "1.0.1", e) : -1
            }, e.subMsg = function (e, t) {
                void 0 === t && (t = null), d("SDK.subMsg"), this._checkWx(t, null, "getOpenDataContext") && wx.getOpenDataContext().postMessage(e)
            }, e.updateScore = function (e, t, o, i) {
                if (void 0 === t && (t = null), void 0 === o && (o = null), void 0 === i && (i = null), d("SDK.updateScore " + JSON.stringify(e)), this._checkWx(o, i, "setUserCloudStorage")) {
                    var n = this._objectToKVArray(e);
                    d("kv array " + JSON.stringify(n)), wx.setUserCloudStorage({
                        KVDataList: n,
                        success: t,
                        fail: o,
                        complete: i
                    })
                }
            }, e.openService = function (t, o) {
                void 0 === o && (o = function () {
                    e.showToast("\u5ba2\u670d\u8fd8\u6ca1\u51c6\u5907\u597d\u54e6!")
                }), this._checkWx(o, null, "openCustomerServiceConversation") && wx.openCustomerServiceConversation({
                    sessionFrom: "",
                    showMessageCard: !1,
                    sendMessageTitle: "",
                    sendMessagePath: "",
                    sendMessageImg: "sdk-res/share1.jpg",
                    success: function (e) {
                        d("\u8fdb\u5165\u5ba2\u670d\u6210\u529f!"), t && t()
                    },
                    fail: function (e) {
                        d("\u8fdb\u5165\u5ba2\u670d\u5931\u8d25!", e), o && o()
                    }
                })
            }, e.isIos = function () {
                return !!this._checkWx() && ("ios" == this.sys.platform || this.sys.system.indexOf("iOS") >= 0)
            }, e.isAndroid = function () {
                return !!this._checkWx() && ("android" == this.sys.platform || this.sys.system.indexOf("Android") >= 0)
            }, e.isIphoneX = function () {
                return !!this._checkWx() && !!this.sys.model.match("iPhone X")
            }, e.getPlatform = function () {
                if (!this._checkWx(null, null, "getSystemInfoSync")) return "";
                var e = wx.getSystemInfoSync();
                if (e && e.platform && "string" == typeof e.platform) {
                    var t = e.platform.toLowerCase();
                    return "android" !== t && "ios" !== t && (t = ""), t
                }
                return ""
            }, e.request = function (e) {
                if (e.dataType = e.dataType || "json", "undefined" != typeof wx) wx.request({
                    url: e.url,
                    header: e.header || {
                        "Content-Type": "application/x-www-form-urlencoded",
                        Accept: "application/json"
                    },
                    responseType: "text",
                    method: e.method || "POST",
                    dataType: e.dataType || "json",
                    data: e.data || {},
                    success: e.success,
                    fail: e.fail
                });
                else {
                    var t = cc.loader.getXMLHttpRequest();
                    if (t.open(e.method || "POST", e.url, !0), e.header)
                        for (var o in e.header) t.setRequestHeader(o, e.header[o]);
                    else t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), t.setRequestHeader("Accept", "application/json");
                    t.responseType = e.responseType || "text", t.onreadystatechange = function () {
                        if (4 === t.readyState)
                            if (t.status >= 200 && t.status < 400) {
                                var o = t.responseText,
                                    i = {
                                        data: "json" === e.dataType ? JSON.parse(o) : o,
                                        statusCode: t.status,
                                        header: {
                                            Date: t.getResponseHeader("date")
                                        }
                                    };
                                e.success && e.success(i)
                            } else e.fail && e.fail()
                    };
                    var i = [];
                    for (var o in e.data) i.push(o + "=" + e.data[o]);
                    var n = i.join("&");
                    t.send(n)
                }
            }, e._objectToKVArray = function (e) {
                var t = [];
                if (e instanceof Object)
                    for (var o in e) t.push({
                        key: o,
                        value: e[o] + ""
                    });
                else e instanceof Array && (t = e);
                return t
            }, e._checkWx = function (e, t, o) {
                return void 0 === e && (e = null), void 0 === t && (t = null), void 0 === o && (o = null), "undefined" == typeof wx ? (e && e(), t && t(), !1) : !o || void 0 != wx[o] || (e && e({
                    code: 999,
                    errMsg: "\u8bf7\u5347\u7ea7\u4f60\u7684\u5fae\u4fe1\u7248\u672c!"
                }), t && t(), !1)
            }, e._runOnShowCallback = function (t) {
                e._onShowList.length > 0 && (e._onShowList.sort(function (e, t) {
                    return t.order - e.order
                }), e._onShowList.slice(0).forEach(function (e) {
                    e && e.callback && e.callback(t)
                }))
            }, e.version = "1.0.0", e.gameVersion = "3.0.0", e.SDKPlatform = i, e.SpotType = n, e.sys = {}, e._onShowList = [], e.moreGameBannerShowed = !1, e._moreGameBanner = null, e.videoState = !1, e._shareEnabled = !1, e
        }();
    o.default = u, window.PPBB_PPSDK = u
}