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
    var i = e("PPBB_PopLayerBase"),
        n = e("PPBB_tableView"),
        a = e("PPBB_GameData"),
        s = e("PPBB_PPSDK"),
        r = e("PPBB_Manager"),
        c = cc._decorator,
        l = c.ccclass,
        h = c.property,
        d = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.tableView = null, t
            }
            return __extends(t, e), t.prototype.start = function () {
                var e = this;
                s.default.showBannerByBottom();
                for (var t = [], o = 0; o < a.default.showLevel; o++) t.push(o + 1);
                this.tableView.initTableView(t.length, {
                    list: t,
                    touchCallback: function (t, o) {
                        3 !== o ? 2 === o && t > a.default.maxLevel ? s.default.showToast("Follow-up levels, stay tuned") : r.default.popGame(t).then(function () {
                            e.close()
                        }) : s.default.showToast("Unlock the previous level first")
                    }
                }), this.scheduleOnce(function () {
                    var o = a.default.unlockLevel - 1,
                        i = 1 - Math.floor(o / 4) / Math.floor((t.length - 1) / 4);
                    e.tableView.scrollToPercentVertical(i, 1)
                }, .1), cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.back, this)
            }, t.prototype.onDestroy = function () {
                e.prototype.onDestroy && e.prototype.onDestroy.call(this), cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.back, this)
            }, t.prototype.back = function () {
                var e = this;
                r.default.popMenu().then(function () {
                    e.close()
                })
            }, t.prototype.buttonCallback = function (e, t) {
                var o = this;
                switch (t) {
                    case "home":
                        r.default.popMenu().then(function () {
                            o.close()
                        })
                }
            }, __decorate([h({
                type: n.default
            })], t.prototype, "tableView", void 0), t = __decorate([l], t)
        }(i.default);
    o.default = d
}