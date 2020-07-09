{
    const o = exports;
    const e = require;
    Object.defineProperty(o, "__esModule", {
        value: !0
    });
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({
                        __proto__: []
                    }
                    instanceof Array && function (d, b) {
                        d.__proto__ = b;
                    }) ||
                function (d, b) {
                    for (var p in b)
                        if (b.hasOwnProperty(p)) d[p] = b[p];
                };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);

            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var i = e("PPBB_PopLayerBase"),
        n = e("PPBB_GameData"),
        a = e("PPBB_SkinData"),
        r = e("PPBB_FileUtils"),
        c = e("PPBB_PP"),
        l = e("PPBB_Common"),
        h = e("PPBB_PPSDK"),
        d = e("PPBB_SoundUtils"),
        u = e("PPBB_Manager"),
        fb = e("FbTool"),
        lv= e("ListViewCtrl"),
        p = cc._decorator,
        f = p.ccclass,
        _ = p.property,
        g = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.flyBall = null,
                t.lb = null,
                t.myrank = null, 
                t.ballFlyPos = null, 
                t.ballEndPos = null, 
                t.titleWait = null, 
                t.labelCoin = null, 
                t.labelLv = null, 
                t.labelCollection = null, 
                t.labelProgress = null, 
                t.useNode = null, 
                t.carBar = null, 
                t.carSprite = null, 
                t.carParticle = null, 
                t.videoButton = null, 
                t.progressLabelNode = null, 
                t.continueButton = null, t.homeButton = null, t.againButton = null, t._full = !1, t._ballUnlock = !1, t._unlockMap = [], t._unlockPoped = !1, t
            }
            return __extends(t, e), t.prototype.onLoad = function () {
                    e.prototype.onLoad && e.prototype.onLoad.call(this),  
                    this.labelCoin.string = n.default.totalBalls + "", 
                    d.default.playSFX("effect_crown"), SdkManager.showBannerByBottom(), cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.back, this)
                    
                }, t.prototype.back = function (e) {
                    var t = this;
                    switch (e.keyCode) {
                        case cc.macro.KEY.back:
                        case 27:
                            console.log("back"), u.default.popMenu().then(function () {
                                t.close()
                            })
                    }
                }, t.prototype.onDestroy = function () {
                    e.prototype.onDestroy && e.prototype.onDestroy.call(this), cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.back, this)
                }, t.prototype.init = function (e, t, o) {
                    var i = this;
                    this.lv = e, this.labelLv.string = e + "", 
                    this.labelCollection.string = t + "", 
                    this.baseCollection = n.default.totalBalls, 
                    this.curCollection = t, 
                    this.totalCollection = n.default.totalBalls + t, 
                    this.myrank.string = t + "",
                    this.useNode.active = !1, this.continueButton.active = !1, this.homeButton.active = !1, this.videoButton.active = !1, this.againButton.active = !1;
                    var c = a.default.getNextCarId(),
                        l = a.default.getMaxUnlockCarId();
                    this.nextCarId = c, this.nextBallId = a.default.getNextBallId(), null !== c ? (this.lastNeed = a.default.getCarSkin(l).unlockTerm.need, this.need = a.default.getCarSkin(c).unlockTerm.need, this.titleWait.active = !1, this.carBar.node.active = !0, this.progressLabelNode.active = !0, r.default.getSpriteFrameAsync(a.default.getCarIcon(c), function (e) {
                        i.carBar.getComponent(cc.Sprite).spriteFrame = e, i.carBar.barSprite.spriteFrame = e
                    }), this.refreshProgress()) : (this.titleWait.active = !0, this.carBar.node.active = !1, this.progressLabelNode.active = !1), n.default.checkUnlockNewLevel(e), n.default.checkResultStar(e, o)
                }, t.prototype.refreshProgress = function () {
                    if (this.checkUnlockBall(), !this._full) {
                        var e = (Math.max(n.default.totalBalls, this.baseCollection) - this.lastNeed) / (this.need - this.lastNeed);
                        if (e >= 1) {
                            this._full = !0, this.carBar.barSprite.node.color = cc.Color.WHITE, this.useNode.active = !0, this.progressLabelNode.active = !1, n.default.unlockNewCarSkin(this.nextCarId), this.carParticle.active = !0, d.default.playSFX("effect_winning"), this.popUnlockCar();
                            var t = this.carBar.node.y;
                            this.carBar.node.runAction(cc.speed(cc.sequence(cc.moveTo(.15, 0, this.carBar.node.y + 20), cc.rotateTo(.2, -20), cc.rotateTo(.4, 15), cc.spawn(cc.rotateTo(.2, 0), cc.moveTo(.1, 0, t)), cc.delayTime(3)).repeatForever(), 1.6))
                        } else this.carBar.node.stopAllActions(), this.carBar.node.scaleY = 1, this.carBar.node.runAction(cc.sequence(cc.scaleTo(.1, 1, .9), cc.scaleTo(.1, 1, 1))), this.carBar.progress = Math.min(e, 1), l.default.jumpLabel(this.labelProgress, (100 * e).toFixed(1) + "%")
                    }
                }, t.prototype.checkUnlockBall = function () {
                    this._ballUnlock || null !== this.nextBallId && Math.max(n.default.totalBalls, this.baseCollection) > a.default.getBallSkin(this.nextBallId).unlockTerm.need && (n.default.unlockNewBallSkin(this.nextBallId), this._ballUnlock = !0, this.popUnlockBall())
                }, t.prototype.popUnlockCar = function () {
                    var e = this;
                    this._unlockPoped || this.popUnlock(a.default.getCarIcon(this.nextCarId), function () {
                        e._ballUnlock && (e._ballUnlock = !1, e.scheduleOnce(function () {
                            e.popUnlockBall()
                        }))
                    })
                }, t.prototype.popUnlockBall = function () {
                    var e = this;
                    this._unlockPoped || this.popUnlock(a.default.getBallIcon(this.nextBallId), function () {
                        e._full && (e._full = !1, e.scheduleOnce(function () {
                            e.popUnlockCar()
                        }))
                    })
                }, t.prototype.popUnlock = function (e, t) {
                    var o = this;
                    this._unlockPoped = !0, u.default.popUnlock(e).then(function (e) {
                        e.setCustomCloseCallback(function () {
                            o._unlockPoped = !1, t && t()
                        })
                    })
                }, t.prototype.start = function () {}, t.prototype.onShow = function () {
                    var e = this;
                    this.scheduleOnce(function () {
                        e.playAni()
                    }, .2);
                    lv.getInstance().addScores(e.totalCollection);
                    this.myrank.string = e.totalCollection;
                    console.log("diem : " + e.totalCollection);
                    console.log("level : " + this.lv);
                    fb.getInstance().preoloadInAD();
                    
                    cc.debug.setDisplayStats(false)
                }, t.prototype.playAni = function () {
                    var e = this;
                    this.flyBalls(this.ballFlyPos, this.ballEndPos, 10, function () {
                        e.baseCollection += e.curCollection / 10, e.refreshLabelCoin(Math.floor(e.baseCollection)), e.refreshProgress()
                    }, function () {
                        n.default.totalBalls = e.totalCollection, e.baseCollection = e.totalCollection, e.refreshLabelCoin(e.totalCollection), e.refreshProgress(), e.showButtons()
                    })
                }, t.prototype.showButtons = function () {
                    var e = this;
                    h.default.showSpotBanner(h.default.SpotType.FINISH);
                    var t = cc.scaleTo(.5, 1).easing(cc.easeBackOut());
                    this.homeButton.scale = 0, this.homeButton.active = !0, this.homeButton.runAction(t.clone());
                    var o = function () {
                        e.continueButton.active || (e.continueButton.scale = 0, e.continueButton.active = !0, e.continueButton.runAction(t.clone())), e.againButton.active || (e.againButton.scale = 0, e.againButton.active = !0, e.againButton.runAction(t.clone()))
                    };
                    if (this.titleWait.active) return console.log("unshowViedo"), void o();
                    h.default.getShareOrViedo();
                    this.videoButton.scale = 0, this.videoButton.active = !0, console.log("showVideo:", this.videoButton), this.videoButton.runAction(t.clone()), o()
                },
                
                t.prototype.getVideoReward = function () {
                    var e = this,
                        t = function () {
                            e.videoButton.active = !1, e.flyBalls(e.videoButton, e.ballEndPos, 15, function () {
                                e.baseCollection += 100 / 15, e.refreshLabelCoin(Math.floor(e.baseCollection)), e.refreshProgress()
                            }, function () {
                                n.default.totalBalls = e.totalCollection + 100, e.totalCollection = n.default.totalBalls, e.refreshLabelCoin(n.default.totalBalls), e.refreshProgress(),
                                console.log("So co : " + n.default.totalBalls);
                                e.myrank.string = n.default.totalBalls;
                                lv.getInstance().addScores(n.default.totalBalls);
                            })
                            
                        }
                        
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
                                t && t()
                              });
                        }
                    // console.log("nhan thuong xong nhe !");
                    //     o = h.default.getShareOrViedo();
                    // 0 === o ? h.default.showToast("No video!") : 1 === o ? h.default.SDKSahre({
                    //     name: window.GameName,
                    //     source: 5,
                    //     success: function (e) {
                    //         console.log("shareRes:", e), 0 === e ? h.default.showToast("Share failed, please try again") : t && t()
                    //     }
                    // }) : 
                    // 2 === o && h.default.showRewardedVideoAd(function () {
                    // t && t()
                    // }, function () {
                    //     h.default.showToast("Not finished watching the video!")
                    // })
                    // lv.getInstance().addScores(n.default.totalBalls);
                    // this.myrank.string = n.default.totalBalls;
                    // //console.log("So co : " + n.default.totalBalls);
                }, t.prototype.flyBalls = function (e, t, o, i, n) {
                    var a = this;
                    void 0 === o && (o = 10);
                    for (var s = 0, r = 0, l = function (l) {
                            var u = cc.instantiate(h.flyBall),
                                p = c.default.getNodePos(e, h.node),
                                f = c.default.getNodePos(t, h.node);
                            u.position = p;
                            var _ = f.add(p).mul(.5);
                            h.scheduleOnce(function () {
                                u.active = !0, a.node.addChild(u), u.scale = 0, u.runAction(cc.sequence(cc.spawn(cc.sequence(cc.scaleTo(.2, 1), cc.delayTime(.4), cc.scaleTo(.2, 0)), cc.bezierTo(.7, [u.position, cc.v2(_.x + Math.getRandom(-200, 200), _.y + Math.getRandom(-50, 50)), f])), cc.callFunc(function (e) {
                                    if (s++, e.destroy(), s === o) return console.log("completed"), d.default.playSFX("collection"), void(n && n());
                                    i && i()
                                })))
                            }, r), r += Math.getRandom(.05, .15)
                        }, h = this, u = 0; u < o; u++) l()
                }, t.prototype.refreshLabelCoin = function (e) {
                    l.default.jumpLabel(this.labelCoin, e)
                }, t.prototype.buttonCallback = function (e, t) {
                    var o = this;
                    switch (t) {
                        case "home":
                            u.default.popMenu().then(function () {
                                o.close()
                            });
                            break;
                        case "video":
                            this.getVideoReward();  
                            break;
                        case "continue":
                            
                            if (n.default.checkOverMaxLevel(this.lv + 1)) return void h.default.showToast("Follow-up levels, stay tuned");
                            u.default.popGame(this.lv + 1).then(function () {
                                o.close()
                            });
                            if( this.lv % 2 == 0){
                                fb.getInstance().showInAD();
                            }
                            break;
                        case "useSkin":
                            n.default.useCarSkin(this.nextCarId), this.useNode.active = !1, h.default.showToast("Vehicle replaced successfully");
                            break;
                        case "again":
                            u.default.popGame(this.lv).then(function () {
                                o.close()
                            })
                            break;
                        case "moregame":
                            FBInstant.switchGameAsync('187597259167029').catch(function (e) {
                                // Handle game change failure
                            })
                            break;
                        case "LB":
                            this.lb.active = true;
                            break;
                        case "Friends":
                            fb.getInstance().inviteFriend();

                    }
                    
                }, __decorate([_(cc.Node)], t.prototype, "flyBall", void 0), 
                __decorate([_(cc.Node)], t.prototype, "ballFlyPos", void 0), 
                __decorate([_(cc.Node)], t.prototype, "ballEndPos", void 0), 
                __decorate([_(cc.Node)], t.prototype, "titleWait", void 0), 
                __decorate([_(cc.Label)], t.prototype, "labelCoin", void 0), 
                __decorate([_(cc.Label)], t.prototype, "labelLv", void 0), 
                __decorate([_(cc.Label)], t.prototype, "labelCollection", void 0), 
                __decorate([_(cc.Label)], t.prototype, "labelProgress", void 0), 
                __decorate([_(cc.Node)], t.prototype, "useNode", void 0), 
                __decorate([_(cc.ProgressBar)], t.prototype, "carBar", void 0), 
                __decorate([_(cc.Sprite)], t.prototype, "carSprite", void 0), 
                __decorate([_(cc.Node)], t.prototype, "carParticle", void 0), 
                __decorate([_(cc.Node)], t.prototype, "videoButton", void 0), 
                __decorate([_(cc.Node)], t.prototype, "progressLabelNode", void 0), 
                __decorate([_(cc.Node)], t.prototype, "continueButton", void 0),
                __decorate([_(cc.Node)], t.prototype, "homeButton", void 0), 
                __decorate([_(cc.Node)], t.prototype, "againButton", void 0), 
                __decorate([_(cc.Node)], t.prototype, "lb", void 0),
                __decorate([_(cc.Label)], t.prototype, "myrank", void 0),
                t = __decorate([f], t)
        }(i.default);
    o.default = g
}