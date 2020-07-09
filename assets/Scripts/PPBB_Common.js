{
    const o = exports;
    const e = require;
    Object.defineProperty(o, "__esModule", {
        value: !0
    });
    var i = e("PPBB_CommonNode"),
        n = e("PPGP_LoadingNodeBase"),
        a = e("PPGP_ToastBase"),
        s = e("PPGP_ModalNode");
    window.DEBUG = !1;
    var r = {};
    window.timeStart = function (e) {
        r[e] = Date.now()
    }, window.timeEnd = function (e) {
        if (r[e]) {
            var t = Date.now() - r[e];
            console.log(e + " use: " + t + "ms"), r[e] = null, delete r[e]
        } else console.log("time key:" + e + " is not exsist!")
    };
    var c = {
        init: function () {},
        showModal: function (e) {
            var t = e.title,
                o = void 0 === t ? "" : t,
                i = e.content,
                n = void 0 === i ? "" : i,
                a = e.showCancel,
                r = void 0 === a || a,
                c = e.cancelText,
                l = void 0 === c ? "\u53d6\u6d88" : c,
                h = e.confirmText,
                d = void 0 === h ? "\u786e\u5b9a" : h,
                u = e.sure,
                p = void 0 === u ? null : u,
                f = e.cancel,
                _ = void 0 === f ? null : f,
                g = e.success,
                v = void 0 === g ? null : g,
                m = e.fail,
                y = void 0 === m ? null : m,
                w = e.complete,
                B = void 0 === w ? null : w;
            s.default.showModal({
                title: o,
                content: n,
                showCancel: r,
                cancelText: l,
                confirmText: d,
                success: v,
                fail: y,
                complete: B,
                confirm: p,
                cancel: _
            })
        },
        showToast: function (e, t, o) {
            a.default.showToast({
                title: e,
                duration: t,
                type: o
            })
        },
        toastDev: function () {
            this.toast("\u656c\u8bf7\u671f\u5f85!")
        },
        delayToast: function (e, t) {
            var o = this;
            setTimeout(function (t) {
                o.toast(e)
            }, 1e3 * t)
        },
        showLoading: function (e, t, o, i, a, s) {
            n.default.showLoading({
                title: e,
                mask: t,
                delayTime: o,
                success: i,
                fail: a,
                complete: s
            })
        },
        hideLoading: function (e) {
            n.default.hideLoading({
                success: e
            })
        },
        loadScene: function (e, t, o) {
            i.default.Instant.loadScene(e, t, o)
        },
        createTypeNode: function (e, t) {
            var o = new cc.Node;
            return e && e.addChild(o), o.addComponent(t)
        },
        jumpLabel: function (e, t, o) {
            void 0 === o && (o = !0), e.node && t.toString() !== e.string && (e.string = String(t), e.node.stopAllActions(), e.node.scale = 1, o && e.node.runAction(cc.sequence(cc.scaleTo(.1, 1.2), cc.scaleTo(.1, 1))))
        },
        getDateTime: function () {
            return (new Date).getTime()
        },
        getDateTimeTest: function () {
            return (new Date).getTime()
        },
        shallowCopy: function (e) {
            var t = {};
            for (var o in e) t[o] = e[o];
            return t
        }
    };
    o.default = c, window.PPBB_Common = c
}