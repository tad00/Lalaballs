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
    var i = e("PPBB_PPNodePoolExtend"),
        n = e("PPBB_FileUtils"),
        a = cc._decorator,
        s = a.ccclass,
        r = a.property,
        c = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.ballPrefab = null, t.zhakaiPrefab = null, t.yanwuPrefab = null, t.caidaiPrefab = null, t.zhakai2Prefab = null, t.poolMap = {}, t
            }
            return __extends(t, e), t.prototype.onLoad = function () {
                this.initPool()
            }, t.prototype.initPool = function () {
                this.create("ball", this.ballPrefab, 50), this.create("zhakai", this.zhakaiPrefab, 0), this.create("yanwu", this.yanwuPrefab, 0), this.create("caidai", this.caidaiPrefab, 0), this.create("zhakai2", this.zhakai2Prefab, 0)
            }, t.prototype.onDestroy = function () {
                for (var e in this.poolMap) this.clear(e)
            }, t.prototype.create = function (e, t, o, n) {
                e in this.poolMap == !1 && (this.poolMap[e] = new i.default(0, n)), this.poolMap[e].create(t, o)
            }, t.prototype.load = function (e, t, o) {
                var i = this;
                return new Promise(function (a, s) {
                    return e in i.poolMap ? a(i.get(e)) : n.default.getPrefabPromise(t).then(function (t) {
                        return i.create(e, t, 1, o), a(i.get(e))
                    }).catch(function (e) {
                        console.log(e), s()
                    })
                })
            }, t.prototype.get = function (e) {
                return this.poolMap[e].get()
            }, t.prototype.put = function (e, t) {
                this.poolMap[e].put(t)
            }, t.prototype.size = function (e) {
                return this.poolMap[e].size()
            }, t.prototype.clear = function (e) {
                this.poolMap[e].clear()
            }, __decorate([r(cc.Prefab)], t.prototype, "ballPrefab", void 0), __decorate([r(cc.Prefab)], t.prototype, "zhakaiPrefab", void 0), __decorate([r(cc.Prefab)], t.prototype, "yanwuPrefab", void 0), __decorate([r(cc.Prefab)], t.prototype, "caidaiPrefab", void 0), __decorate([r(cc.Prefab)], t.prototype, "zhakai2Prefab", void 0), t = __decorate([s], t)
        }(cc.Component);
    o.default = c
}