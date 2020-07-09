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
    var i = cc._decorator,
        n = i.ccclass,
        a = (i.property, function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._wxBtn = null, t._tapCallback = null, t
            }
            var o;
            return __extends(t, e), o = t, t.convertToWxRect = function (e) {
                var t = e.convertToWorldSpaceAR(cc.v2(0, 0)),
                    o = cc.view.getVisibleSize(),
                    i = t.x - e.width * e.anchorX,
                    n = o.height - t.y - e.height * (1 - e.anchorY),
                    a = wx.getSystemInfoSync(),
                    s = a.screenWidth,
                    r = a.screenHeight;
                return console.log(t, e.width, e.height, i, n), {
                    left: i / o.width * s,
                    top: n / o.height * r,
                    width: e.width / o.width * s,
                    height: e.height / o.height * r
                }
            }, t.prototype.onLoad = function () {
                this.getComponent(cc.Widget) && this.getComponent(cc.Widget).updateAlignment(), this.node.on("position-changed", this.resizeButton, this), this.node.on("size-changed", this.resizeButton, this)
            }, t.prototype.start = function () {
                var e = this;
                this.scheduleOnce(function () {
                    e._createWxBtn(), e._addBtnCallback()
                })
            }, t.prototype.onDestroy = function () {
                this.node.off("position-changed", this.resizeButton, this), this.node.off("size-changed", this.resizeButton, this), this._wxBtn && (this._wxBtn.destroy(), this._wxBtn = null)
            }, t.prototype.onEnable = function () {
                this.show()
            }, t.prototype.onDisable = function () {
                this.hide()
            }, t.prototype.show = function () {
                this._wxBtn && this._wxBtn.show()
            }, t.prototype.hide = function () {
                this._wxBtn && this._wxBtn.hide()
            }, t.prototype.resizeButton = function () {
                if (this._wxBtn) {
                    var e = this._wxBtn,
                        t = o.convertToWxRect(this.node),
                        i = t.left,
                        n = t.top,
                        a = t.width,
                        s = t.height;
                    e.style.left = i, e.style.top = n, e.style.width = a, e.style.height = s
                }
            }, t.prototype._createWxBtn = function () {}, t.prototype._addBtnCallback = function () {
                var e = this;
                this._wxBtn && "function" == typeof this._wxBtn.onTap && this._wxBtn.onTap(function (t) {
                    e._tapCallback && e._tapCallback(t)
                })
            }, t = o = __decorate([n], t)
        }(cc.Component));
    o.default = a
}