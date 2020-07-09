{
    const o = exports;
    const e = require;
    Object.defineProperty(o, "__esModule", {
        value: !0
    });
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
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var i = e("PPBB_SettingHandler"),
        n = e("PPBB_ToggleCustom"),
        a = e("PPBB_PopLayerBase"),
        s = e("PPBB_Manager"),
        r = e("PPBB_ClassModule"),
        c = e("PPBB_SkinData"),
        l = e("PPBB_EventCenter"),
        h = e("PPBB_GameData"),
        d = e("PPBB_SoundUtils"),
        u = e("PPBB_PPSDK"),
        lv= e("ListViewCtrl"),
        fr = e("FbTool"),
        p = cc._decorator,
        f = p.ccclass,
        _ = p.property,
        g = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.musicTg = null,
                    t.soundTg = null,
                    t.coinLabel = null,
                    t.car = null,
                    t.skinTg = new r.PPBB_SpriteToggle,
                    t.versionNode = null,
                    t.qqboxNode = null,
                    t.lb = null,
                    t.myrank = null,
                    t
            }
            return __extends(t, e),
                t.prototype.onLoad = function () {
                    e.prototype.onLoad && e.prototype.onLoad.call(this),
                        this.playAni(),
                        this.node.on("touchend", this.onTouch, this),
                        l.default.register(l.PPBB_EventMsg.ON_CAR_SKIN_CHANGE, this, this.onCarSkinChange),
                        u.default.getSysPlatform() === u.default.SDKPlatform.NATIVE ? (this.versionNode.active = !0, SdkManager.hideBanner()) : (this.versionNode.active = !1, u.default.showMoreGameByBanner(), SdkManager.showMoreGameSide({
                            sideType_right: !1
                        })),
                        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.quit, this),
                        SdkManager.showAppBox({
                            node: this.qqboxNode
                        }),
                        fr.getInstance().createShortcutAsync();
                        
                        cc.debug.setDisplayStats(false)
                },
                t.prototype.quit = function (e) {
                    switch (e.keyCode) {
                        case cc.macro.KEY.back:
                        case 27:
                            return void SdkManager.callAndroid(window.ACTION_EXIT_BACK)
                    }
                },
                t.prototype.onDestroy = function () {
                    u.default.hideMoreGameByBanner(),
                        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.quit, this),
                        this.node.off("touchend", this.onTouch, this), e.prototype.onDestroy && e.prototype.onDestroy.call(this)
                },
                t.prototype.start = function () {
                    this.musicTg.isCheck = i.default.musicState,
                        this.soundTg.isCheck = i.default.sfxState,
                        this.coinLabel.string = h.default.totalBalls + ""
                    console.log("tien : " + h.default.totalBalls);
                    lv.getInstance().addScores(h.default.totalBalls);
                    this.myrank.string=h.default.totalBalls;
                },
                t.prototype.onCarSkinChange = function () {
                    this.car.getComponent(cc.Sprite).setURL(c.default.getCarIcon())
                },
                t.prototype.playAni = function () {
                    var e = this;
                    this.car.getComponent(cc.Sprite).setURL(c.default.getCarIcon());
                    var t = this.car.x;
                    this.car.x = -cc.winSize.width / 2 - this.car.width,
                        this.scheduleOnce(function () {
                            e.car.runAction(cc.moveTo(1, t, e.car.y).easing(cc.easeBackOut()))
                        }, 1)
                },
                t.prototype.onTouch = function () {
                    var e = this;
                    d.default.playSFX("ButtonClick"),
                        s.default.popLevel().then(function () {
                            e.close()
                        })
                },
                t.prototype.buttonCallback = function (e, t) {
                    var o = this;
                    switch (t) {
                        case "musicTg":
                            var n = e.isCheck;
                            i.default.turnMusic(n);
                            break;
                        case "sfxTg":
                            n = e.isCheck;
                            i.default.turnSFX(n);
                            break;
                        case "skin":
                            1 !== this.skinTg.idx && (d.default.playSFX("get_chest"),
                                this.skinTg.turn(1),
                                this.scheduleOnce(function () {
                                    s.default.popSkin().then(function (e) {
                                        e.setCustomCloseCallback(function () {
                                            o.skinTg.turn(0)
                                        })
                                    })
                                }, .2))
                            break;
                        case "LB":
                            this.lb.active = true;
                            break;
                        case "Friends" :
                            fr.getInstance().inviteFriend();
                    }
                },
                __decorate([_({
                    type: n.default
                })], t.prototype, "musicTg", void 0),
                __decorate([_({
                    type: n.default
                })], t.prototype, "soundTg", void 0),
                __decorate([_(cc.Label)], t.prototype, "coinLabel", void 0),
                __decorate([_(cc.Node)], t.prototype, "car", void 0),
                __decorate([_(r.PPBB_SpriteToggle)], t.prototype, "skinTg", void 0),
                __decorate([_(cc.Node)], t.prototype, "versionNode", void 0),
                __decorate([_(cc.Node)], t.prototype, "qqboxNode", void 0),
                __decorate([_(cc.Node)], t.prototype, "lb", void 0),
                __decorate([_(cc.Label)], t.prototype, "myrank", void 0),
                t = __decorate([f], t)
        }(a.default);
    o.default = g
}