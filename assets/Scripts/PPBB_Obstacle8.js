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
    var i = e("PPBB_FileUtils"),
        n = cc._decorator,
        a = n.ccclass,
        s = (n.property, function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(t, e), t.prototype.onLoad = function () {
                var e = this;
                i.default.getPrefabAsync("unit/ding", function (t) {
                    var o = cc.instantiate(t);
                    o.parent = e.node.parent, o.position = e.node.position;
                    var i = o.getComponent(cc.Joint);
                    i.connectedBody = e.getComponent(cc.RigidBody), i.anchor = cc.v2(0, 0), i.connectedAnchor = cc.v2(0, 0)
                })
            }, t = __decorate([a], t)
        }(cc.Component));
    o.default = s
}