{
    const e = require;
    var i = cc.Class({
        extends: e("BaseManager"),
        properties: {
            videoID: null
        },
        init: function (e) {
            this.loadVideo()
        },
        getHaveVideo: function () {
            return "" != FBVideoId
        },
        getSysPlatform_string: function () {
            return "faceBook"
        },
        getSysPlatform: function () {
            return 2
        },
        shareHelp: function () {},
        share: function (e) {
            FBInstant.shareAsync({
                intent: "SHARE",
                image: this.getImgBase64(),
                text: FBInstant.player.getName() + "is asking for your help!",
                data: {
                    myReplayData: "..."
                }
            }).then(function () {
                e && e.success && e.success(1)
            })
        },
        getImgBase64: function () {
            var e = cc.find("Canvas"),
                t = new cc.RenderTexture(960, 1280);
            t.begin(), e._sgNode.visit(), t.end();
            var o = document.createElement("canvas"),
                i = o.getContext("2d");
            if (o.width = 960, o.height = 1280, cc._renderType === cc.game.RENDER_TYPE_CANVAS) {
                var n = t.getSprite().getTexture().getHtmlElementObj();
                i.drawImage(n, 0, 0)
            } else if (cc._renderType === cc.game.RENDER_TYPE_WEBGL) {
                var a = gl.createFramebuffer();
                gl.bindFramebuffer(gl.FRAMEBUFFER, a);
                var s = t.getSprite().getTexture()._glID;
                gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, s, 0);
                var r = new Uint8Array(4915200);
                gl.readPixels(0, 0, 960, 1280, gl.RGBA, gl.UNSIGNED_BYTE, r), gl.bindFramebuffer(gl.FRAMEBUFFER, null);
                for (var c = 0; c < 1280; c++) {
                    var l = 1279 - c,
                        h = new Uint8ClampedArray(r.buffer, 960 * l * 4, 3840),
                        d = new ImageData(h, 960, 1);
                    i.putImageData(d, 0, c)
                }
            }
            return o.toDataURL("image/png")
        },
        loadVideo: function () {
            var e = this;
            FBInstant.getRewardedVideoAsync(FBVideoId).then(function (t) {
                return e.videoID = t, e.videoID.loadAsync()
            })
        },
        showRewardedVideoAd: function (e, t) {
            var o = this;
            if (this.videoID) {
                e = this.videoID;
                this.videoID = null, e.showAsync().then(function () {
                    t(!0), o.loadVideo()
                })
            } else o.loadVideo()
        },
        showSpotByBegin: function (e, t) {
            this.showMySpot()
        },
        showSpotByPause: function (e, t) {
            this.showMySpot()
        },
        showSpotByFinish: function (e, t) {
            this.showMySpot()
        },
        showMySpot: function () {
            var e = this;
            if (this.videoID) {
                var t = this.videoID;
                this.videoID = null, t.showAsync().then(function () {
                    e.loadVideo()
                })
            } else e.loadVideo()
        }
    });
    module.exports = i;
}