{
    const o = exports;
    const e = require;
    Object.defineProperty(o, "__esModule", {
        value: !0
    });
    var i = e("PPBB_EventCenter"),
        n = e("PPBB_SettingHandler"),
        a = e("PPBB_FileUtils"),
        s = function () {
            function e() {}
            return e.init = function () {
                i.default.register("SOUND_STATE_CHANGE", this, this.checkLocalSetting)
            }, e.initLocalSetting = function () {
                var e = n.default.musicState,
                    t = n.default.sfxState;
                this.musicState = e, this.sfxState = t
            }, e.checkLocalSetting = function (e) {
                var t = e.type,
                    o = e.value;
                this[t] = o, "musicState" === t && this._checkBGM()
            }, e._checkBGM = function () {
                this.musicState ? (this.bgmID, this.bgmName && this.playMusic(this.bgmName)) : null !== this.bgmID && this.pauseMusic()
            }, e.getAudioClip = function (e, t) {
                a.default.getSoundAsync(e, t)
            }, e.playMusic = function (e, t, o) {
                var i = this;
                void 0 === t && (t = !0), this.bgmName = e, this.musicState && this.getAudioClip(e, function (n) {
                    if (null != n) {
                        var a = cc.audioEngine.playMusic(n, t);
                        cc.audioEngine.setMusicVolume(o), i.bgmID = a, i.audioMap.bgm[e] = a
                    }
                })
            }, e.stopMusic = function () {
                cc.audioEngine.stopMusic()
            }, e.pauseMusic = function () {
                cc.audioEngine.stopMusic()
            }, e.resumeMusic = function () {
                this.musicState ? this._checkBGM() : cc.audioEngine.stopMusic()
            }, e.playSFX = function (e, t, o, i) {
                var n = this;
                void 0 === t && (t = !1), this.sfxState && this.getAudioClip(e, function (o) {
                    if (null != o) {
                        var a = cc.audioEngine.playEffect(o, t);
                        n.audioMap.sfx[e] = a, i && i(a)
                    }
                })
            }, e.stopSFXByName = function (e) {
                this.audioMap.sfx[e] && this.stopSFX(this.audioMap.sfx[e])
            }, e.playSFXLoopOnce = function (e) {
                this.sfxState && (this.isSfxPlaying(e) || this.playSFX(e, !0))
            }, e.isSfxPlaying = function (e) {
                return !!this.audioMap.sfx[e] && cc.audioEngine.getState(this.audioMap.sfx[e]) === cc.audioEngine.AudioState.PLAYING
            }, e.pauseSFX = function (e) {
                this.sfxState && cc.audioEngine.pauseEffect(e)
            }, e.pauseAllSFXs = function () {
                this.sfxState && cc.audioEngine.pauseAllEffects()
            }, e.resumeSFX = function (e) {
                this.sfxState && cc.audioEngine.resumeEffect(e)
            }, e.stopSFX = function (e) {
                cc.audioEngine.stopEffect(e)
            }, e.stopAllSFXs = function () {
                cc.audioEngine.stopAllEffects()
            }, e.play = function (e, t, o, i) {
                void 0 === o && (o = 1), this.getAudioClip(e, function (e) {
                    if (null !== e) {
                        var n = cc.audioEngine.play(e, t, o);
                        i && i(n)
                    }
                })
            }, e.setLoop = function (e, t) {
                cc.audioEngine.setLoop(e, t)
            }, e.isLoop = function (e) {
                return cc.audioEngine.isLoop(e)
            }, e.pauseAll = function () {
                cc.audioEngine.pauseAll()
            }, e.resumeAll = function () {
                cc.audioEngine.resumeAll()
            }, e.stopAll = function () {
                cc.audioEngine.stopAll()
            }, e.pause = function (e) {
                cc.audioEngine.pause(e)
            }, e.resume = function (e) {
                cc.audioEngine.resume(e)
            }, e.stop = function (e) {
                cc.audioEngine.stop(e)
            }, e.musicState = !1, e.sfxState = !1, e.bgmID = null, e.bgmName = null, e.audioMap = {
                bgm: {},
                sfx: {}
            }, e
        }();
    o.default = s, s.init()
}