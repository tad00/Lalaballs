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
                return t.speed = 30, t
            }
            return __extends(t, e), t.prototype.start = function () {}, t.prototype.update = function (e) {
                this.node.x += this.speed * e, this.node.x > cc.winSize.width / 2 + this.node.width && (this.node.x = Math.getRandom(-cc.winSize.width / 2 - cc.winSize.width, -cc.winSize.width / 2 - this.node.width), this.speed = Math.getRandom(30, 50))
            }, t = __decorate([n], t)
        }(cc.Component));
    o.default = a
}