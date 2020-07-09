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
    var i, n = e("PPBB_DataHandler"),
        a = e("PPBB_EventCenter");
    e("SdkData"),
        function (e) {
            e[e.CN = 0] = "CN", e[e.EN = 1] = "EN"
        }(i = o.LanguageType || (o.LanguageType = {}));
    var s = {
            vibrateState: {
                default: !0,
                saveServer: !1
            },
            language: {
                default: i.CN,
                saveServer: !1
            },
            autoSwitchState: {
                default: !0,
                saveServer: !1
            },
            themeType: {
                default: 0,
                saveServer: !1
            }
        },
        r = {
            playGuide: {
                default: !1,
                saveServer: !1
            }
        },
        c = new(function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(t, e), Object.defineProperty(t.prototype, "musicState", {
                get: function () {
                    return this._musicState
                },
                set: function (e) {
                    this._musicState = e, cc.sys.localStorage.setItem(lieyou.Key_Music, e)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "sfxState", {
                get: function () {
                    return this._sfxState
                },
                set: function (e) {
                    this._sfxState = e, cc.sys.localStorage.setItem(lieyou.Key_Sound, e)
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.onInit = function () {
                this._tableKey = "settingLocal";
                var e = cc.sys.localStorage.getItem(lieyou.Key_Music);
                null === e || "" === e ? (cc.sys.localStorage.setItem(lieyou.Key_Music, !0), this._musicState = !0) : this._musicState = "true" === e || !0 === e;
                var t = cc.sys.localStorage.getItem(lieyou.Key_Sound);
                null === t || "" === e ? (cc.sys.localStorage.setItem(lieyou.Key_Sound, !0), this._sfxState = !0) : this._sfxState = "true" === t || !0 === e, this.initTableData(s), this.initStorageData(r)
            }, t.prototype.onLoadConfig = function (e) {}, t.prototype.turnSound = function (e, t) {
                void 0 === t && (t = !0), this.turnMusic(e), this.turnSFX(e)
            }, t.prototype.turnMusic = function (e, t) {
                void 0 === t && (t = !0), this.musicState = e, a.default.post(a.PPBB_EventMsg.SOUND_STATE_CHANGE, {
                    type: "musicState",
                    value: e
                })
            }, t.prototype.turnSFX = function (e, t) {
                void 0 === t && (t = !0), this.sfxState = e, a.default.post(a.PPBB_EventMsg.SOUND_STATE_CHANGE, {
                    type: "sfxState",
                    value: e
                })
            }, t.prototype.turnVibrate = function (e, t) {
                void 0 === t && (t = !0), this.vibrateState = e, t && this.saveTableData()
            }, t.prototype.turnAutoSwitch = function (e, t) {
                void 0 === t && (t = !0), this.autoSwitchState = e, t && this.saveTableData()
            }, t.prototype.turnTheme = function (e) {
                this.themeType = e, a.default.post(a.PPBB_EventMsg.THEME_CHANGE, this.themeType), this.saveTableData()
            }, t
        }(n.default));
    o.default = c
}