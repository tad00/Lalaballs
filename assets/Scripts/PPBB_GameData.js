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
        n = e("PPBB_StorageUtils"),
        a = e("PPBB_EventCenter"),
        s = {
            vit: 10,
            lastRecoverTime: -1,
            totalBalls: 0,
            unlockLevel: 1,
            ballSkinUnlockId: [0],
            ballSkinId: 0,
            carSkinUnlockId: [0],
            carSkinId: 0,
            newBallUnlockList: [],
            newCarUnlockList: []
        },
        r = new(function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isDoubleStart = !1, t.maxLevel = 500, t.showLevel = 500, t
            }
            return __extends(t, e), t.prototype.onInit = function () {
                this.initStorageData(s)
            }, t.prototype.checkOverMaxLevel = function (e) {
                return e > this.maxLevel
            }, t.prototype.checkUnlockNewLevel = function (e) {
                e === this.unlockLevel && this.unlockLevel++
            }, t.prototype.checkResultStar = function (e, t) {
                var o = "star_" + e,
                    i = n.default.getData(o, 0);
                t > Number(i) && n.default.setData(o, t)
            }, t.prototype.getLevelStar = function (e) {
                var t = "star_" + e,
                    o = n.default.getData(t, 0);
                return Number(o)
            }, t.prototype.getUnlockBallsSkinList = function () {
                return this.ballSkinUnlockId
            }, t.prototype.getUnlockCarsSkinList = function () {
                return this.carSkinUnlockId
            }, t.prototype.unlockNewBallSkin = function (e) {
                e = Number(e), this.ballSkinUnlockId.indexOf(e) < 0 && (this.ballSkinUnlockId.push(e), this.ballSkinUnlockId = this.ballSkinUnlockId, this.newBallUnlockList.indexOf(e) < 0 && (this.newBallUnlockList.push(e), this.newBallUnlockList = this.newBallUnlockList))
            }, t.prototype.removeBallUnlockList = function (e) {
                this.newBallUnlockList.remove(e), this.newBallUnlockList = this.newBallUnlockList
            }, t.prototype.unlockNewCarSkin = function (e) {
                e = Number(e), this.carSkinUnlockId.indexOf(e) < 0 && (this.carSkinUnlockId.push(e), this.carSkinUnlockId = this.carSkinUnlockId, this.newCarUnlockList.indexOf(e) < 0 && (this.newCarUnlockList.push(e), this.newCarUnlockList = this.newCarUnlockList))
            }, t.prototype.removeCarUnlockList = function (e) {
                this.newCarUnlockList.remove(e), this.newCarUnlockList = this.newCarUnlockList
            }, t.prototype.checkBallSkinUnlocked = function (e) {
                return this.ballSkinUnlockId.indexOf(e) >= 0
            }, t.prototype.checkCarSkinUnlocked = function (e) {
                return this.carSkinUnlockId.indexOf(e) >= 0
            }, t.prototype.useBallSkin = function (e) {
                this.ballSkinId = e
            }, t.prototype.useCarSkin = function (e) {
                this.carSkinId = e, a.default.post(a.PPBB_EventMsg.ON_CAR_SKIN_CHANGE, e)
            }, t.prototype.getBallVideoTimes = function (e) {
                var t = "ballVideo_" + e,
                    o = n.default.getData(t, 0);
                return Number(o)
            }, t.prototype.getCarVideoTimes = function (e) {
                var t = "carVideo_" + e,
                    o = n.default.getData(t, 0);
                return Number(o)
            }, t.prototype.addBallVideoTimes = function (e) {
                var t = "ballVideo_" + e,
                    o = n.default.getData(t, 0);
                n.default.setData(t, Number(o) + 1)
            }, t.prototype.addCarVideoTimes = function (e) {
                var t = "carVideo_" + e,
                    o = n.default.getData(t, 0);
                n.default.setData(t, Number(o) + 1)
            }, t
        }(i.default));
    o.default = r
}