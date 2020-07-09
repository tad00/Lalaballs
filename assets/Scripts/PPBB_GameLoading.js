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
    var i = e("PPBB_LoaderUtils"),
        n = e("PPBB_PPSDK"),
        a = e("PPBB_SoundUtils"),
        s = e("PPBB_EventCenter"),
        r = e("PPBB_Common"),
        c = e("PPBB_DataHandler"),
        l = e("PPBB_Manager"),
        h = e("PPBB_FileUtils");
    window && window.optConfig && window.optConfig.disableBatchGLCommandsToNative();
    var d = cc._decorator,
        u = d.ccclass,
        p = d.property;
    i.default.loadProgress = {
        doNothing: {
            progress: 0,
            desc: "Loading"
        },
        loadSubPackage: {
            progress: 0,
            desc: "\u52a0\u8f7d\u5206\u5305\u8d44\u6e90"
        },
        loadConfig: {
            progress: 0,
            desc: "\u52a0\u8f7d\u914d\u7f6e"
        },
        loadTexture: {
            progress: 0,
            desc: "\u52a0\u8f7d\u56fe\u7247\u8d44\u6e90"
        },
        loadSound: {
            progress: 0,
            desc: "\u52a0\u8f7d\u58f0\u97f3\u8d44\u6e90"
        },
        loadPrefab: {
            progress: 20,
            desc: "\u52a0\u8f7d\u9884\u5236\u8d44\u6e90"
        },
        loadServer: {
            progress: 0,
            desc: "\u8fde\u63a5\u670d\u52a1\u5668"
        },
        loadScene: {
            progress: 20,
            desc: "\u52a0\u8f7d\u6e38\u620f\u573a\u666f"
        },
        loadSub: {
            progress: 10,
            desc: "\u52a0\u8f7d\u5206\u5305"
        },
        loadUnit: {
            progress: 20,
            desc: "\u52a0\u8f7d\u5355\u4f4d"
        }
    };
    var f = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.loadingLabel = null, t.progressBar = null, t.dotList = [], t.versionNode = null, t._curProgress = 0, t._totalProgress = 0, t._oldProgress = 0, t._descStrList = [], t._descIdx = 0, t._sysLoadOver = !1, t._aniLoadOver = !0, t
        }
        return __extends(t, e), t.prototype.onLoad = function () {
            SdkManager.init({}), this.versionNode.active = n.default.getSysPlatform() === n.default.SDKPlatform.NATIVE, cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.quit, this)
        }, t.prototype.quit = function (e) {
            switch (console.log(e.keyCode), e.keyCode) {
                case cc.macro.KEY.back:
                case 27:
                    return void SdkManager.callAndroid(window.ACTION_EXIT_BACK)
            }
        }, t.prototype.start = function () {
            var e = this;
            for (var t in a.default.initLocalSetting(), cc.game.on(cc.game.EVENT_SHOW, function () {
                    console.log("\u91cd\u65b0\u8fd4\u56de\u6e38\u620f"), n.default.getSysPlatform() !== n.default.SDKPlatform.VIVO ? n.default.getSysPlatform() === n.default.SDKPlatform.WECHAT && a.default.playSFX("ButtonClick", !1, 0) : n.default.videoState || (cc.audioEngine.stopAllEffects(), a.default.resumeMusic())
                }), s.default.register("load_over", this, this.onResLoadOver), s.default.register("percent_change", this, this._onPercentChange), this.loadingLabel && (this.loadingLabel.string = "Loading..." + Math.floor(0) + "%"), r.default.init(), this._curProgress = 0, this._descIdx = 0, i.default.loadProgress) {
                var o = i.default.loadProgress[t].progress;
                o > 0 && (this._totalProgress += o, this._descStrList.push([this._totalProgress, i.default.loadProgress[t].desc]))
            }
            this._descStrList.forEach(function (t) {
                t[0] = t[0] / e._totalProgress
            }), this.startLoad(),
            
            cc.debug.setDisplayStats(false)
        }, t.prototype.startLoad = function () {
            var e = i.default.loadProgress.doNothing;
            i.default.initBasePercent(e.progress), this.loadServer()
        }, t.prototype.loadServer = function () {
            var e = i.default.loadProgress.loadServer;
            i.default.initBasePercent(e.progress), this.loadSub()
        }, t.prototype.loadSub = function () {
            var e = this;
            console.log("\u52a0\u8f7d\u5206\u5305");
            var t = i.default.loadProgress.loadSub;
            i.default.initBasePercent(t.progress);
            var o = function () {
                e.loadRes()
            };
            o()
        }, t.prototype.loadRes = function () {
            i.default.startLoad()
        }, t.prototype._onPercentChange = function (e) {
            this._curProgress = e, this._refreshProgressLabel()
        }, t.prototype._refreshProgressLabel = function () {
            var e = this;
            if (this._curProgress !== this._oldProgress) {
                var t = Math.round(this._curProgress / this._totalProgress * 100),
                    o = .01 * Math.abs(t - this._oldProgress);
                o = Math.max(.2, o);
                var i = this._oldProgress;
                this.node.stopAllActions(), this.node.runAction(cc.sequence(cc.floatTo(o, i, t, function (t) {
                    var o = t / 100;
                    e._oldProgress = t;
                    for (var i = e._descStrList[e._descIdx]; o > i[0];) e._descIdx++, i = e._descStrList[e._descIdx];
                    i[1], Math.floor(t);
                    e.loadingLabel && (e.loadingLabel.string = "Loading..." + Math.floor(t) + "%"), e.progressBar && (e.progressBar.progress = t / 100)
                }), cc.callFunc(function (o) {
                    t >= 100 && e.scheduleOnce(function (t) {
                        e.onLoadEnd()
                    }, .01)
                })))
            }
        }, t.prototype.onLoadEnd = function () {
            this.checkLoadOver()
        }, t.prototype.onResLoadOver = function () {
            this.reloadConfig(), this.loadUnit()
        }, t.prototype.loadUnit = function () {
            var e = this,
                t = i.default.loadProgress.loadUnit;
            i.default.initBasePercent(t.progress);
            for (var o = ["ding", "ob1", "ob2", "ob3", "ob4", "ob5", "ob6", "ob7", "ob8", "ob9", "transmit1", "transmit2", "ob11", "ob12", "toggle", "ob13", "ob14", "ob15", "ob16", "bigBall"], n = 0, a = function (t) {
                    var i = "unit/" + o[t];
                    h.default.getPrefabAsync(i, function () {
                        (function (t) {
                            n++, console.log(t + "\u5df2\u52a0\u8f7d"), n === o.length && (console.log("unit\u52a0\u8f7d\u5b8c\u6bd5"), e.preloadScene())
                        })(i)
                    })
                }, s = 0; s < o.length; s++) a(s)
        }, t.prototype.reloadConfig = function () {
            for (var e = 0, t = c.default.HandlerList; e < t.length; e++) {
                t[e].loadConfig()
            }
            for (var o = 0, i = c.default.HandlerList; o < i.length; o++) {
                i[o].onLoadOver()
            }
        }, t.prototype.preloadScene = function () {
            var e = this,
                t = i.default.loadProgress.loadScene;
            i.default.initBasePercent(t.progress), l.default.popMenu().then(function () {
                console.log("menu\u52a0\u8f7d\u5b8c\u6bd5"), e._sysLoadOver = !0, e.checkLoadOver()
            })
        }, t.prototype.checkLoadOver = function () {
            var e = this;
            this._sysLoadOver && this._aniLoadOver && this._oldProgress >= 100 && this.scheduleOnce(function () {
                e.node.destroy()
            }, .1)
        }, t.prototype.onDestroy = function () {
            a.default.playMusic("bgm", !0, .6), cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.quit, this)
        }, __decorate([p(cc.Label)], t.prototype, "loadingLabel", void 0), __decorate([p(cc.ProgressBar)], t.prototype, "progressBar", void 0), __decorate([p([cc.Node])], t.prototype, "dotList", void 0), __decorate([p(cc.Node)], t.prototype, "versionNode", void 0), t = __decorate([u], t)
    }(cc.Component);
    o.default = f
}