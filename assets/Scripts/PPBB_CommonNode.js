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
    var i = e("PPBB_SwitchNode"),
        n = cc._decorator,
        a = n.ccclass,
        s = n.property,
        r = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.switchLayer = null, t.fakeADS = null, t.drawCallsLabel = null, t
            }
            var o;
            return __extends(t, e), o = t, t.prototype.onLoad = function () {
                var e = this;
                console.log("common node onLoad"), cc.game.isPersistRootNode(this.node) || cc.game.addPersistRootNode(this.node), o.Instant = this, this.node.zIndex = 999, this.fakeADS && (this.fakeADS.zIndex = 999), setInterval(function () {
                    e.runUpdate()
                }, 20), this.init()
            }, t.prototype.init = function () {
                this.switchLayer && (this.switchLayer.node.active = !1), this.drawCallsLabel && (this.drawCallsLabel.node.active = DEBUG)
            }, t.prototype.loadScene = function (e, t, o) {
                this.switchLayer && this.switchLayer.loadScene(e, t, o)
            }, t.prototype.showFakeADS = function () {
                DEBUG && this.fakeADS && (this.fakeADS.opacity = 255)
            }, t.prototype.hideFakeADS = function () {
                DEBUG && this.fakeADS && (this.fakeADS.opacity = 0)
            }, t.prototype.buttonCallback = function (e, t) {
                t
            }, t.prototype.runUpdate = function () {
                this.drawCallsLabel && this.drawCallsLabel.node.active && (this.drawCallsLabel.string = cc.renderer.drawCalls + "")
            }, t.Instant = null, __decorate([s(i.default)], t.prototype, "switchLayer", void 0), __decorate([s(cc.Node)], t.prototype, "fakeADS", void 0), __decorate([s(cc.Label)], t.prototype, "drawCallsLabel", void 0), t = o = __decorate([a], t)
        }(cc.Component);
    o.default = r
}