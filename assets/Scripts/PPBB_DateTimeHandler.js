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
    var i = e("PPBB_DataHandler"),
        n = e("PPBB_PP"),
        a = e("PPBB_EventCenter"),
        s = {
            dateSign: {
                default: -1,
                saveServer: !0
            }
        },
        r = new(function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(t, e), t.prototype.onInit = function () {
                this.serverKey = "dateTimerData", this.initStorageData(s)
            }, t.prototype.onServerLoadOver = function () {}, t.prototype.checkRefreshDateData = function (e) {
                -1 !== this.dateSign && n.default.isSameDay(this.dateSign, e) || (console.log("\u5237\u65b0\u6bcf\u65e5\u6570\u636e"), this.dateSign = e, a.default.post(a.PPBB_EventMsg.REFRESH_DAY_DATA, e))
            }, t
        }(i.default));
    o.default = r
}