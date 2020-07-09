{
    const o = exports;
    const e = require;
    Object.defineProperty(o, "__esModule", {
        value: !0
    });
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var i = cc._decorator,
        n = i.ccclass,
        a = i.property,
        s = function () {
            function e() {
                this.sprite = null,
                    this.spriteFrameList = []
            }
            return Object.defineProperty(e.prototype, "node", {
                    get: function () {
                        return this.sprite ? this.sprite.node : null
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                e.prototype.turn = function (e) {
                    e >= this.spriteFrameList.length || !this.sprite || (
                        this.idx = e, this.sprite.spriteFrame = null,
                        null !== this.spriteFrameList[e] && (this.sprite.spriteFrame = this.spriteFrameList[e]))
                },
                e.prototype.add = function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    for (var o = 0, i = e[0] instanceof Array ? e[0] : e; o < i.length; o++) {
                        var n = i[o];
                        this.spriteFrameList.push(n)
                    }
                },
                __decorate([a(cc.Sprite)], e.prototype, "sprite", void 0),
                __decorate([a({
                    visible: !1
                })], e.prototype, "node", null),
                __decorate([a([cc.SpriteFrame])], e.prototype, "spriteFrameList", void 0),
                e = __decorate([n("PPBB_SpriteToggle")],
                    e)
        }();
    o.PPBB_SpriteToggle = s;
    var r = function () {
        function e() {
            this.label = null, this.stringList = []
        }
        return Object.defineProperty(e.prototype, "node", {
                get: function () {
                    return this.label ? this.label.node : null
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.turn = function (e, t) {
                if (void 0 === t && (t = !1), !(e >= this.stringList.length) && this.label) {
                    var o = this.stringList[e];
                    this.label.string = o
                }
            },
            e.prototype.add = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                for (var o = 0, i = e[0] instanceof Array ? e[0] : e; o < i.length; o++) {
                    var n = i[o];
                    this.stringList.push(n)
                }
            },
            __decorate([a(cc.Label)], e.prototype, "label", void 0),
            __decorate([a([cc.String])], e.prototype, "stringList", void 0),
            __decorate([a({
                visible: !1
            })], e.prototype, "node", null),
            e = __decorate([n("PPBB_LabelToggle")], e)
    }();
    o.PPBB_LabelToggle = r;
    var c = function () {
        function e() {
            this.nodeList = [], this.curNode = null
        }
        return Object.defineProperty(e.prototype, "node", {
                get: function () {
                    return this.curNode
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.turn = function (e) {
                for (var t = 0; t < this.nodeList.length; t++) {
                    var o = this.nodeList[t];
                    t === e ? (o.active = !0, this.curNode = o) : o.active = !1
                }
            },
            e.prototype.add = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                for (var o = 0, i = e[0] instanceof Array ? e[0] : e; o < i.length; o++) {
                    var n = i[o];
                    this.nodeList.push(n)
                }
            },
            __decorate([a([cc.Node])], e.prototype, "nodeList", void 0),
            e = __decorate([n("PPBB_NodeToggle")], e)
    }();
    o.PPBB_NodeToggle = c;
    var l = function () {
        function e() {
            this.sprite = null, this.label = null
        }
        return e.prototype.turn = function (e) {
                this.sprite.node.active = 1 === e, this.label.node.active = 1 === e
            },
            __decorate([a(cc.Sprite)], e.prototype, "sprite", void 0),
            __decorate([a(cc.Label)], e.prototype, "label", void 0),
            e = __decorate([n("PPBB_FontToggle")], e)
    }();
    o.PPBB_FontToggle = l
}