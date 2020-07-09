{
    const o = exports;
    const e = require;
    Object.defineProperty(o, "__esModule", {
        value: !0
    });
    var i, n = cc._decorator,
        a = n.ccclass,
        s = n.property;
    (function (e) {
        e[e.MIDDLE_ONE = 0] = "MIDDLE_ONE", e[e.MIDDLE_TWO = 1] = "MIDDLE_TWO", e[e.ICON = 2] = "ICON"
    })(i || (i = {}));
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
    var r = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._lineNum = i.MIDDLE_ONE, t
        }
        return __extends(t, e), Object.defineProperty(t.prototype, "lineNum", {
            get: function () {
                return this._lineNum
            },
            set: function (e) {
                this._lineNum = e, e === i.MIDDLE_ONE ? (this.node.width = 586, this.node.height = 166) : e === i.MIDDLE_TWO ? (this.node.width = 586, this.node.height = 306) : e === i.ICON && (this.node.width = 130, this.node.height = 130)
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.onLoad = function () {
            var e = (.5 - this.node.anchorX) * this.node.width,
                t = (.5 - this.node.anchorY) * this.node.height;
            if (this.node.getComponent(cc.Sprite) && (this.node.getComponent(cc.Sprite).spriteFrame = null), this._lineNum === i.MIDDLE_ONE) {
                this.node.active = true
                var o = SdkManager.showMoreGameMiddle_one({
                    node: this.node,
                    x: e,
                    y: t
                });
                //this.node.active = o
            } else if (this._lineNum === i.MIDDLE_TWO) {
                o = SdkManager.showMoreGameMiddle_two({
                    node: this.node,
                    x: e,
                    y: t
                });
                this.node.active = o
            } else this._lineNum === i.ICON && (this.node.scale = .8, SdkManager.showMoreGameByIcon({
                node: this.node,
                x: e,
                y: t
            }))
        }, __decorate([s({
            type: cc.Enum(i)
        })], t.prototype, "_lineNum", void 0), __decorate([s({
            type: cc.Enum(i)
        })], t.prototype, "lineNum", null), t = __decorate([a], t)
    }(cc.Component);
    o.default = r
}