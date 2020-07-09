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
    var i = cc._decorator,
        n = i.ccclass,
        a = i.property,
        s = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.ico = null, t.time = 0, t
            }
            return __extends(t, e), t.prototype.start = function () {
                cc.find("label", this.node).getComponent(cc.Label).string = "Loading", this.schedule(function () {
                    this.ico.rotation += 30, this.time++;
                    var e = "Loading";
                    lieyou.Language_ch || (e = "Loading");
                    cc.find("label", this.node).getComponent(cc.Label).string = "Loading" + ["", ".", "..", "..."][this.time % 4]
                }.bind(this), .15)
            }, __decorate([a(cc.Node)], t.prototype, "ico", void 0), t = __decorate([n], t)
        }(cc.Component);
    o.default = s
} 