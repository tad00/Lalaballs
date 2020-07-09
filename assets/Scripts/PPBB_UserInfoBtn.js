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
    var i = e("PPBB_WxBtn"),
        n = e("PPBB_PPSDK"),
        a = cc._decorator,
        s = a.ccclass,
        r = a.property,
        c = a.menu,
        l = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.showOnLoad = !0, t.successFunc = null, t.failFunc = null, t._normalCallback = null, t
            }
            return __extends(t, e), t.prototype.setNormalMode = function (e) {
                this._normalCallback = e, e ? this._wxBtn && this._wxBtn.hide() : this._wxBtn && this._wxBtn.show()
            }, t.prototype.showWxBtn = function () {
                this._normalCallback || (this._wxBtn && this._wxBtn.show(), this.resizeButton())
            }, t.prototype.onLoad = function () {
                this.node.on("touchend", this.onClick, this), e.prototype.onLoad.call(this)
            }, t.prototype.onDestroy = function () {
                this.node.off("touchend", this.onClick, this), e.prototype.onDestroy.call(this)
            }, t.prototype.onEnable = function () {
                this._normalCallback || e.prototype.onEnable.call(this)
            }, t.prototype.onClick = function () {
                var e = this;
                this._normalCallback ? this._normalCallback() : this._wxBtn || this._getUserInfo(function (t) {
                    e.successFunc && e.successFunc(t)
                }, function (t) {
                    e.failFunc && e.failFunc(t)
                })
            }, t.prototype._getUserInfo = function (e, t) {
                console.log("\u4f7f\u7528getUserInfo\u83b7\u53d6\u7528\u6237\u4fe1\u606f"), n.default.getUserInfo(function (t) {
                    console.log("getUserInfo\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u6210\u529f, res:", t), e && e(t)
                }, function (e) {
                    console.log("getUserInfo\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u5931\u8d25, res:", e), t && t(e)
                })
            }, t.prototype._createWxBtn = function () {
                var e = this;
                "undefined" != typeof wx && "function" == typeof wx.createUserInfoButton && (this._wxBtn = wx.createUserInfoButton({
                    type: "text",
                    text: " ",
                    style: {
                        backgroundColor: "#00000001",
                        color: "#00000001",
                        fontSize: 1
                    },
                    withCredentials: !0,
                    lang: "zh_CN"
                }), this._tapCallback = function (t) {
                    console.log("\u4f7f\u7528UserInfoButton\u83b7\u53d6\u7528\u6237\u4fe1\u606f: ", t), t.errMsg.indexOf("auth deny") > -1 || t.errMsg.indexOf("auth denied") > -1 ? (console.log("\u4f7f\u7528UserInfoButton\u83b7\u53d6\u7528\u6237\u4fe1\u606f, \u6388\u6743\u5931\u8d25!"), e.failFunc && e.failFunc(t)) : (console.log("\u4f7f\u7528UserInfoButton\u83b7\u53d6\u7528\u6237\u4fe1\u606f, \u6388\u6743\u6210\u529f!"), e.successFunc && e.successFunc(t))
                }, this._wxBtn && (this.showOnLoad ? this.showWxBtn() : this._wxBtn.hide()))
            }, __decorate([r], t.prototype, "showOnLoad", void 0), t = __decorate([s, c("\u81ea\u5b9a\u4e49\u7ec4\u4ef6/WxBtn/UserInfoBtn")], t)
        }(i.default);
    o.default = l
}