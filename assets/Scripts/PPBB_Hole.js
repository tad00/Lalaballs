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
        e[e.ORIGIN = 0] = "ORIGIN", e[e.GRAY = 1] = "GRAY"
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
            return t.holeType = i.ORIGIN, t
        }
        return __extends(t, e), Object.defineProperty(t.prototype, "num", {
            get: function () {
                return this.node.getChildByName("label").getComponent(cc.Label).string
            },
            set: function (e) {
                this.node.getChildByName("label").getComponent(cc.Label).string = e + ""
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "holeRadius", {
            get: function () {
                return this.node.width / 2
            },
            set: function (e) {
                this.node.width = this.node.height = 2 * e
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.start = function () {}, __decorate([s({
            type: cc.Enum(i)
        })], t.prototype, "holeType", void 0), __decorate([s()], t.prototype, "num", null), __decorate([s], t.prototype, "holeRadius", null), t = __decorate([a], t)
    }(cc.Component);
    o.default = r
}