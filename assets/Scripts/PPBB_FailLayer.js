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
    n = e("PPBB_PPSDK"),
    a = e("PPBB_GameData"),
    s = cc._decorator,
    r = s.ccclass,
    c = s.property,
    l = function (e) {
      function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.videoTitle = null, t.videoButton = null, t;
      }
      return __extends(t, e), 
      t.prototype.onLoad = function () {
        e.prototype.onLoad && e.prototype.onLoad.call(this), 
        n.default.getShareOrViedo() > 0 ? (this.videoTitle.active = !0, this.videoButton.active = !0) : (this.videoTitle.active = !0, this.videoButton.active = !0);
      }, t.prototype.onShow = function () {
        SdkManager.showSpotByPause();
      }, t.prototype.buttonCallback = function (e, t) {
        var o = this;
        switch (t) {
          case "reset":
            this.close();
            break;
          case "video":
            var i = function i() {
              a.default.isDoubleStart = !0, o.close();
            }
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
                            i();
                          });
                    }
          console.log("them bong xong nhe !");
            //   s = n.default.getShareOrViedo();
            // 0 === s ? n.default.showToast("No video!") : 1 === s ? n.default.SDKSahre({
            //   name: window.GameName,
            //   source: 5,
            //   success: function success(e) {
            //     console.log("shareRes:", e), 0 === e ? n.default.showToast("Share failed, please try again") : i();
            //   }
            // }) : 2 === s && n.default.showRewardedVideoAd(function () {
              // i();
            // }, function () {
            //   n.default.showToast("Not finished watching the video!");
            // });
        }
      }, __decorate([c(cc.Node)], t.prototype, "videoTitle", void 0), __decorate([c(cc.Node)], t.prototype, "videoButton", void 0), t = __decorate([r], t);
    }(i.default);
  o.default = l;
}