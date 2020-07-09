{
    const o = exports;
    const e = require;
    Object.defineProperty(o, "__esModule", {
        value: !0
    });
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var i = e("PPBB_PopLayerBase"),
        n = e("PPBB_ClassModule"),
        a = e("PPBB_SkinData"),
        s = e("PPBB_SkinCell"),
        r = e("PPBB_GameData"),
        c = e("PPBB_PPSDK"),
        l = e("PPBB_EventCenter"),
        fb =e("FbTool"),
        h = cc._decorator,
        d = h.ccclass,
        u = h.property,
        p = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.ballST = new n.PPBB_SpriteToggle,
                    t.carST = new n.PPBB_SpriteToggle,
                    t.coinLabel = null,
                    t.skinCellPrefab = null,
                    t.cellLayout = null,
                    t.itemIdx = -1,
                    t.ballsMap = {},
                    t.carsMap = {},
                    t
            }
            return __extends(t, e),
                t.prototype.start = function () {
                    var e = this;
                    this.setItem(0),
                        l.default.register(l.PPBB_EventMsg.ON_SKIN_VIDEO_CHANGE, this, function (t) {
                            var o = t.type,
                                i = t.id;
                            0 === o ? e.refreshBallCell(i) : 1 === o && e.refreshCarCell(i)
                        }),
                        this.coinLabel.string = r.default.totalBalls + "";
                        cc.debug.setDisplayStats(false)
                },
                // t.prototype.onLoad = function(){
                //         fb.getInstance().preloadRewarded();
                // },
                t.prototype.setItem = function (e) {
                    e !== this.itemIdx && (this.itemIdx = e, this.cellLayout.removeAllChildren(),
                        this.ballsMap = {},
                        this.carsMap = {}, 0 === e ? (this.initBalls(),
                            this.ballST.turn(0),
                            this.carST.turn(1)) : 1 === e && (this.initCars(),
                            this.ballST.turn(1),
                            this.carST.turn(0)))
                },
                t.prototype.initBalls = function () {
                    var e = a.default.BallColorsMap;
                    for (var t in e) {
                        var o = cc.instantiate(this.skinCellPrefab);
                        this.cellLayout.addChild(o);
                        var i = o.getComponent(s.default);
                        this.ballsMap[t] = i, this.refreshBallCell(t);
                        console.log("theanh :...." + t)
                    }
                },
                t.prototype.refreshBallCell = function (e) {
                    var t = this,
                        o = this.ballsMap[e];
                    if (o && cc.isValid(o)) {
                        var i = a.default.BallColorsMap[e],
                            n = Number(e),
                            s = r.default.newBallUnlockList.indexOf(n) >= 0,
                            l = r.default.checkBallSkinUnlocked(n);
                        if (0 === i.unlockTerm.id && !l && r.default.totalBalls >= i.unlockTerm.need)
                            return r.default.unlockNewBallSkin(n),
                                void this.refreshBallCell(e);
                        var h;
                        h = Number(r.default.ballSkinId) === n;
                        var d = null;
                        if (2 === i.unlockTerm.id) {
                            d = r.default.getBallVideoTimes(n);
                            //var u = c.default.getShareOrViedo();
                            o.node.active = true;
                            console.log("")
                        }
                        var p = this._getDesc(l, s, h, i.unlockTerm, d);
                        o.init(n, {
                            unlocked: l,
                            desc: p,
                            url: a.default.getBallIcon(n),
                            using: h,
                            newUnlock: s,
                            touchCallback: function () {
                                if (l)
                                    if (s) r.default.removeBallUnlockList(n),
                                        t.refreshBallCell(n);
                                    else {
                                        var e = r.default.ballSkinId;
                                        e !== n && (r.default.useBallSkin(n),
                                            t.refreshBallCell(e),
                                            t.refreshBallCell(n))
                                    }
                                else {
                                    if (2 === i.unlockTerm.id){
                                        return void t.playVideo(0, n);
                                    }
                                    c.default.showToast("Not unlocked yet")
                                }
                            }
                        })
                    }
                },
                t.prototype.initCars = function () {
                    var e = a.default.CarsMap;
                    for (var t in e) {
                        var o = cc.instantiate(this.skinCellPrefab);
                        this.cellLayout.addChild(o);
                        var i = o.getComponent(s.default);
                        this.carsMap[t] = i, this.refreshCarCell(t)
                    }
                },
                t.prototype.refreshCarCell = function (e) {
                    var t = this,
                        o = this.carsMap[e];
                    if (o && cc.isValid(o)) {
                        var i = a.default.CarsMap[e],
                            n = Number(e),
                            s = r.default.newCarUnlockList.indexOf(n) >= 0,
                            l = r.default.checkCarSkinUnlocked(n);
                        if (0 === i.unlockTerm.id && !l && r.default.totalBalls >= i.unlockTerm.need)
                            return r.default.unlockNewCarSkin(n),
                                void this.refreshCarCell(e);
                        var h;
                        h = Number(r.default.carSkinId) === n;
                        var d = null;
                        if (2 === i.unlockTerm.id) {
                            d = r.default.getCarVideoTimes(n);
                            // var u = c.default.getShareOrViedo();
                            o.node.active = true
                        }
                        var p = this._getDesc(l, s, h, i.unlockTerm, d);
                        o.init(n, {
                            unlocked: l,
                            desc: p,
                            url: a.default.getCarIcon(n),
                            using: h,
                            newUnlock: s,
                            touchCallback: function () {
                                if (l)
                                    if (s) console.log("car unlock"),
                                        r.default.removeCarUnlockList(n),
                                        t.refreshCarCell(n);
                                    else {
                                        var e = r.default.carSkinId;
                                        e !== n && (r.default.useCarSkin(n),
                                            t.refreshCarCell(e),
                                            t.refreshCarCell(n))
                                    }
                                else {
                                    if (2 === i.unlockTerm.id)
                                        return void t.playVideo(1, n);
                                    c.default.showToast("Not unlocked yet")
                                }
                            }
                        })
                    }
                },
                t.prototype.playVideo = function (e, t) {
                    var o = function () {
                            0 === e ? (r.default.addBallVideoTimes(t),
                                    a.default.checkUnlockNewBall(),
                                    l.default.post(l.PPBB_EventMsg.ON_SKIN_VIDEO_CHANGE, {
                                        type: e,
                                        id: t
                                    })
                                ) : 1 === e && (r.default.addCarVideoTimes(t),
                                    a.default.checkUnlockNewCar(),
                                    l.default.post(l.PPBB_EventMsg.ON_SKIN_VIDEO_CHANGE, {
                                        type: e,
                                        id: t
                                    })
                                ),
                                c.default.showToast("Earn rewards!")
                        }
                        // i = c.default.getShareOrViedo();
                    // 0 === i ? c.default.showToast("No video!") 
                    // : 
                    // 1 === i ? c.default.SDKSahre({
                    //     name: window.GameName,
                    //     source: 5,
                    //     success: function (e) {
                    //         console.log("shareRes:", e),
                    //             0 === e ? c.default.showToast("Share failed, please try again") : o && o()
                    //     }
                    // }) : 
                    // 2 === i && 
                    console.log("bat dau nhan thuong !");
                    var preloadedRewardedVideo = null;
                    var supportedAPIs = FBInstant.getSupportedAPIs();
                    if (supportedAPIs.includes('getRewardedVideoAsync')) {
                        FBInstant.getRewardedVideoAsync(
                            '205133970830643_217146472962726',
                          ).then(function(rewardedVideo) {
                            preloadedRewardedVideo = rewardedVideo;
                            return preloadedRewardedVideo.loadAsync();
                          }.bind(this)).then(function() {
                            // Ad loaded
                            return preloadedRewardedVideo.showAsync();
                          }).then(function() {
                            o && o();
                          });
                    }
                    console.log("nhan thuong xong nhe !")
                    // o && o();
                           
                },
                t.prototype._getDesc = function (e, t, o, i, n) {
                    var a = "";
                    return e ? a = t ? "Unlockable" : o ? "Using" : "Usable" : 0 === i.id ? a = "Collect\n" + i.need + " Balls\nto unlock" : 1 === i.id ? a = "Sign in to get" : 2 === i.id && (a = "Watch the video\n to unlock\n(" + n + "/" + i.need + ")"), a
                },
                t.prototype.buttonCallback = function (e, t) {
                    switch (t) {
                        case "ball":
                            this.setItem(0);
                            break;
                        case "car":
                            this.setItem(1);
                            break;
                        case "home":
                            this.close()
                    }
                },
                __decorate([u({
                        type: n.PPBB_SpriteToggle
                    })],
                    t.prototype, "ballST", void 0),
                __decorate([u({
                        type: n.PPBB_SpriteToggle
                    })],
                    t.prototype, "carST", void 0),
                __decorate([u(cc.Label)],
                    t.prototype, "coinLabel", void 0),
                __decorate([u(cc.Prefab)],
                    t.prototype, "skinCellPrefab", void 0),
                __decorate([u(cc.Node)],
                    t.prototype, "cellLayout", void 0),
                t = __decorate([d], t)
        }(i.default);
    o.default = p
}