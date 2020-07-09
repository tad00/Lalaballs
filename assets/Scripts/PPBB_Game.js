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
    var i = e("PPBB_Define"),
        n = e("PPBB_Ball"),
        a = e("PPBB_Brush"),
        s = e("PPBB_MapData"),
        r = e("PPBB_PP"),
        c = e("PPBB_GameData"),
        l = e("PPBB_Common"),
        h = e("PPBB_Car"),
        d = e("PPBB_FileUtils"),
        u = e("PPBB_EventCenter"),
        p = e("PPBB_Transmit1"),
        f = e("PPBB_Obstacle2"),
        _ = e("PPBB_PopLayerBase"),
        g = e("PPBB_Manager"),
        v = e("PPBB_Toggle"),
        m = e("PPBB_Obstacle15"),
        y = e("PPBB_SoundUtils"),
        w = e("PPBB_PPSDK"),
        B = e("PPBB_Obstacle17"),
        P = cc._decorator,
        S = P.ccclass,
        b = P.property,
        C = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.mapNode = null, t.maskNode = null, t.spriteMaskNode = null, t.ballsNode = null, t.colliderNode = null, t.obstacleNode = null, t.leftSide = null, t.rightSide = null, t.bottomNode = null, t.gameCamera = null, t.carPosNode = null, t.backgroudPosNode = null, t.uiNode = null, t.levelLabel = null, t.totalLabel = null, t.targetLabel = null, t.needLabel = null, t.completeNode = null, t.skipButton = null, t.guideFinger = null, t.black = null, t.mapData = null, t.car = null, t.resultCheckDuration = -1, t.ballList = [], t.colorBallsList = [], t.boxBallList = [], t.videoBoxList = [], t.obstacleList = [], t.brush = null, t.changeFlag = !1, t.frameIdx = 0, t.poolManager = null, t.camreraStop = !1, t
            }
            var o;
            return __extends(t, e), o = t, t.getNodeInGameView = function (e) {
                if (this.Instance) {
                    var t = r.default.getNodePos(e, this.Instance.node).y,
                        o = this.Instance.gameCamera.node.y;
                    return Math.abs(t - o) <= cc.winSize.height / 2 + e.height * e.scaleY
                }
            }, t.playSFX = function (e, t, o) {
                void 0 === t && (t = .02), void 0 === o && (o = 1), this.sfxMap[e] ? this.sfxMap[e].time >= t && (y.default.playSFX(e, !1, o), this.sfxMap[e].time = 0) : this.sfxMap[e] = {
                    time: t
                }
            }, t.prototype.onLoad = function () {
                e.prototype.onLoad && e.prototype.onLoad.call(this), SdkManager.gameBeginLevel("level", c.default.curLevel), this.poolManager = g.default.Instance.poolManager, o.Instance = this, cc.director.getPhysicsManager().enabled = !0, cc.director.getCollisionManager().enabled = !0, i.PPBB_GameOption.DEBUG && (cc.director.getPhysicsManager().debugDrawFlags = 0, cc.director.getPhysicsManager()._debugDrawer && (cc.director.getPhysicsManager()._debugDrawer.lineWidth = 1, cc.director.getPhysicsManager()._debugDrawer.node.group = "game")), this.node.on("touchstart", this.onTouchStart, this), this.node.on("touchmove", this.onTouchMove, this), this.node.on("touchend", this.onTouchEnd, this), this.node.on("touchcancel", this.onTouchEnd, this), u.default.register(u.PPBB_EventMsg.ON_BALL_IN, this, this.onBallsIn), u.default.register(u.PPBB_EventMsg.SCENE_SHAKE, this, this.sceneShake), u.default.register(u.PPBB_EventMsg.ON_BALL_REMOVE, this, this.onBallRemove), u.default.register(u.PPBB_EventMsg.PLAY_EFFECT, this, this.onPlayEffect), SdkManager.hideBanner(), console.log("hideBanner"), this.black.active = !0, this.black.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function (e) {
                    e.active = !1
                }))), cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.back, this)
            }, t.prototype.back = function (e) {
                var t = this;
                switch (e.keyCode) {
                    case cc.macro.KEY.back:
                    case 27:
                        console.log("back"), g.default.popMenu().then(function () {
                            t.close()
                        })
                }
            }, t.prototype.start = function () {
                var e = this;
                this.maskEraser = this.maskNode.getComponent(cc.Mask), this.maskEraser.clearDraw(!0), this.brush = new a.default, this.scheduleOnce(function () {
                    e.initMap()
                }), console.log("getShareOrVideo()", w.default.getShareOrViedo()), this.skipButton.active = w.default.getShareOrViedo() > 0,
                cc.debug.setDisplayStats(false)
            }, t.prototype.onDestroy = function () {
                cc.director.getPhysicsManager().enabled = !1, cc.director.getCollisionManager().enabled = !1, cc.director.getCollisionManager().enabledDebugDraw = !1, cc.director.getPhysicsManager().debugDrawFlags = 0, this.node.off("touchstart", this.onTouchStart, this), this.node.off("touchmove", this.onTouchMove, this), this.node.off("touchend", this.onTouchEnd, this), this.node.off("touchcancel", this.onTouchEnd, this), cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.back, this), u.default.removeRegister(this), e.prototype.onDestroy && e.prototype.onDestroy.call(this)
            }, t.prototype.update = function (e) {
                for (var t in o.sfxMap) {
                    o.sfxMap[t].time += e
                }
                this.checkCameraMove(e), this.updateCheckResult(e), this.updateDrawMask(e)
            }, t.prototype.sceneShake = function (e) {
                this.brush.apply(), this.makeEraser(e, 150), this.brush.apply()
            }, t.prototype.checkCameraMove = function (e) {
                if (!this.camreraStop) {
                    if (this.gameCamera.node.y <= this.cameraBottom) return this.camreraStop = !0, console.log("showBanner"), void SdkManager.showBannerByBottom();
                    var t = this.getMinYBall();
                    if (t) {
                        var o = r.default.getNodePos(t.node, this.node).y,
                            n = (o = Math.clamp(o, this.cameraBottom, this.cameraTop)) - this.gameCamera.node.y,
                            a = Math.abs(n),
                            s = n / a;
                        if (s < 0) {
                            var c, l = i.PPBB_GameOption;
                            c = ((Math.clamp(a, l.CAMERA_MIN_DIS, l.CAMERA_MAX_DIS) - l.CAMERA_MIN_DIS) / (l.CAMERA_MAX_DIS - l.CAMERA_MIN_DIS) * (l.CAMERA_MAX_SPEED - l.CAMERA_MIN_SPEED) + l.CAMERA_MIN_SPEED) * e, this.gameCamera.node.y += c * s
                        }
                    }
                }
            }, t.prototype.onBallsIn = function () {
                this.resultCheckDuration = 0
            }, t.prototype.onBallRemove = function (e) {
                this.colorBallsList.remove(e), e.node.destroy()
            }, t.prototype.checkBallsResult = function () {
                var e = this;
                console.log("check");
                for (var t = 0; t < this.boxBallList.length; t++) {
                    var o = this.boxBallList[t];
                    o.node.removeComponent(cc.PhysicsCollider), o.node.removeComponent(cc.RigidBody);
                    var i = r.default.getNodePos(o.node, this.car.node);
                    o.node.parent = this.car.node, o.node.position = i
                }
                this.boxBallList.length >= this.mapData.needBalls ? (this.refreshNeedBallsLabel(this.mapData.needBalls - this.boxBallList.length, !1), cc.find("Canvas/failLayer") && cc.find("Canvas/failLayer").destroy(), this.car.move(function () {
                    e.gameOver(!0)
                })) : (console.log("fail"), this.refreshNeedBallsLabel(this.mapData.needBalls - this.boxBallList.length, !0), this.scheduleOnce(function () {
                    g.default.popFail().then(function (t) {
                        t.setCustomCloseCallback(function () {
                            e.node.name = "xxx", e.setCustomCloseCallback(function () {
                                SdkManager.gameFailLevel("level", c.default.curLevel), console.log("callback"), setTimeout(function () {
                                    g.default.popGame(c.default.curLevel)
                                }, 20)
                            }), e.close()
                        })
                    })
                }, 1))
            }, t.prototype.updateCheckResult = function (e) {
                if (!(this.resultCheckDuration < 0)) {
                    for (var t = this.car.boxCollider.world.aabb, o = [], n = 0; n < this.colorBallsList.length; n++) {
                        if (!((c = this.colorBallsList[n]).node.y > this.mapBottom)) {
                            var a = c.collider.world.position;
                            t.contains(a) && o.push(c)
                        }
                    }
                    for (var s = 0, r = o; s < r.length; s++) {
                        var c = r[s];
                        this.colorBallsList.remove(c), this.boxBallList.indexOf(c) < 0 && this.boxBallList.push(c)
                    }
                    for (var l = [], h = 0, d = this.boxBallList; h < d.length; h++) {
                        (c = d[h]).node.y <= this.backgroudPosNode.y && l.push(c)
                    }
                    for (var u = 0, p = l; u < p.length; u++) {
                        c = p[u];
                        this.boxBallList.remove(c), this.colorBallsList.push(c)
                    }
                    if (this.boxBallList.length > i.PPBB_GameOption.CAR_MAX_BALL)
                        for (n = 0; n < this.boxBallList.length - i.PPBB_GameOption.CAR_MAX_BALL; n++) this.boxBallList[n].node.active = !1;
                    this.refreshNeedBallsLabel(Math.max(this.mapData.needBalls - this.boxBallList.length, 0)), this.resultCheckDuration >= i.PPBB_GameOption.RESULT_CHECK_DELAY ? (this.checkBallsResult(), this.resultCheckDuration = -1) : this.resultCheckDuration += e
                }
            }, t.prototype.gameOver = function (e) {
                var t = this;
                SdkManager.gameFinishLevel("level", c.default.curLevel), this.removeAll();
                var o = this.checkStar();
                g.default.popResult().then(function (e) {
                    e.init(c.default.curLevel, t.boxBallList.length, o), t.close()
                })
            }, t.prototype.initUI = function () {
                this.levelLabel.string = c.default.curLevel + "", this.targetLabel.string = "aims:" + this.mapData.needBalls, this.refreshNeedBallsLabel(this.mapData.needBalls), this.totalLabel.string = "\u603b\u5171:" + c.default.totalBalls
            }, t.prototype.refreshNeedBallsLabel = function (e, t) {
                if (void 0 === t && (t = !1), t = !1, e > 0) this.completeNode.active = !1, this.needLabel.node.active = !0, l.default.jumpLabel(this.needLabel, e);
                else {
                    this.needLabel.node.active = !1, this.completeNode.active = !0;
                    for (var o = this.checkStar(), i = 0; i < this.completeNode.children.length; i++) {
                        var n = this.completeNode.children[i];
                        if (o > i && !n.active) {
                            n.active = !0;
                            var a = n.scale;
                            n.opacity = 0, n.scale = 0, n.runAction(cc.spawn(cc.fadeIn(.3), cc.scaleTo(.5, a).easing(cc.easeBackOut()))), y.default.playSFX("catch_star0" + (i + 1))
                        }
                    }
                }
            }, t.prototype.checkStar = function () {
                var e = this.mapData.totalBalls,
                    t = this.mapData.needBalls,
                    o = e - t,
                    i = this.boxBallList.length - t;
                if (0 === o && i > 0) return 3;
                var n = i / o;
                return n >= .6 ? 3 : n >= .3 ? 2 : 1
            }, t.prototype.refreshTotalBallsLabel = function () {
                l.default.jumpLabel(this.totalLabel, "Total:" + c.default.totalBalls)
            }, t.prototype.initCar = function () {
                var e = this,
                    t = c.default.carSkinId;
                d.default.getPrefabAsync("unit/car" + t, function (t) {
                    var o = cc.instantiate(t);
                    e.mapNode.addChild(o), o.position = e.carPosNode.position;
                    var i = o.getComponent(h.default);
                    e.car = i
                })
            }, t.prototype.initPhysics = function () {
                for (var e = this.colliderNode.width, t = this.colliderNode.width * -this.colliderNode.anchorX, o = this.colliderNode.height * (1 - this.colliderNode.anchorY), n = this.colliderNode.height * -this.colliderNode.anchorY, a = Math.ceil(e / i.PPBB_GameOption.COLLIDER_SPACE), s = 0; s < a; s++) {
                    var r = this.colliderNode.addComponent(cc.PhysicsChainCollider);
                    r.density = 10, r.restitution = 0, r.points = [cc.v2(t + s * i.PPBB_GameOption.COLLIDER_SPACE, o), cc.v2(t + s * i.PPBB_GameOption.COLLIDER_SPACE, n)], r.apply()
                }
                var c = this.leftSide.points[0].x;
                this.leftSide.points = [cc.v2(c, this.mapNode.height * (1 - this.mapNode.anchorY)), cc.v2(c, this.mapNode.height * -this.mapNode.anchorY)], this.leftSide.apply();
                var l = this.rightSide.points[0].x;
                this.rightSide.points = [cc.v2(l, this.mapNode.height * (1 - this.mapNode.anchorY)), cc.v2(l, this.mapNode.height * -this.mapNode.anchorY)], this.rightSide.apply()
            }, t.prototype.initMap = function () {
                var e = this;
                this.mapData = new s.default, this.maskEraser.clearDraw(!0), this.mapData.loadLevelConfig(c.default.curLevel).then(function () {
                    e.setMapSize(e.mapData.height * i.default.SCALE_RATIO), e.maskEraser.clearDraw(!0), e.initTop(), e.scheduleOnce(function () {
                        e.initCar(), e.initPhysics(), e.scheduleOnce(function () {
                            e.initOriginHoles(e.mapData.originHoles), e.initMapHoles(e.mapData.holes), e.initMapLines(e.mapData.lines), e.initObstacles(e.mapData.obstacles), e.initStaticBalls(e.mapData.staticBalls), e.initBigBalls(e.mapData.bigBalls), e.initUI()
                        })
                    })
                })
            }, t.prototype.initPixelsMap = function () {
                var e = [];
                this.mapWidth = Math.ceil(this.spriteMaskNode.width), this.mapHeight = Math.ceil(this.spriteMaskNode.height), e.length = this.mapWidth * this.mapHeight, e.fill(255), this.pixelsMap = new Uint8Array(e), this.spriteMask = this.spriteMaskNode.getComponent(cc.Mask), this.drawPixelsMask()
            }, t.prototype.drawPixelsMask = function () {
                this.spriteMask.spriteFrame && (this.spriteMask.spriteFrame.getTexture() && this.spriteMask.spriteFrame.getTexture().destroy(), this.spriteMask.spriteFrame.destroy());
                var e = new cc.RenderTexture;
                e.initWithData(this.pixelsMap, 16, this.spriteMaskNode.width, this.spriteMaskNode.height), this.spriteMask.spriteFrame = new cc.SpriteFrame(e)
            }, t.prototype.changePixles = function (e) {}, t.prototype.drawMaskCircle = function (e, t) {}, t.prototype.drawArrayPixels = function (e) {
                for (var t = !1, o = 0; o < e.length; o++) {
                    this.changePixles(e[o]) && (t = !0)
                }
                t && (this.changeFlag = !0)
            }, t.prototype.updateDrawMask = function (e) {
                this.changeFlag && (this.frameIdx % i.PPBB_GameOption.DRAW_MASK_FRAME_RATE == 0 ? (this.drawPixelsMask(), this.changeFlag = !1) : this.frameIdx++)
            }, t.prototype.initTop = function () {
                var e = this.mapNode.y,
                    t = (cc.winSize.height / 2 + 50 - e) / 2 / i.default.SCALE_RATIO,
                    o = t;
                this.brush.draw({
                    graphics: this.maskEraser.getGraphics(),
                    x: -cc.winSize.width / 2,
                    y: o,
                    radius: t + 2
                }), this.brush.draw({
                    graphics: this.maskEraser.getGraphics(),
                    x: cc.winSize.width / 2,
                    y: o,
                    radius: t + 2
                }), this.brush.apply()
            }, t.prototype.setMapSize = function (e) {
                this.mapNode.height = e, this.mapNode.getComponent(cc.Widget).updateAlignment();
                var t = this.mapNode,
                    o = function (e) {
                        var t = e.children;
                        if (t.length > 0)
                            for (var i = 0, n = t; i < n.length; i++) {
                                var a = n[i],
                                    s = a.getComponent(cc.Widget);
                                s && (s.updateAlignment(), s.enabled = !1, o(a))
                            }
                    };
                o(t);
                var i = w.default.getSysPlatform(),
                    n = w.default.SDKPlatform;
                i === n.QQ ? this.bottomNode.height = 480 : i === n.WECHAT ? this.bottomNode.height = 510 : this.bottomNode.height = 430;
                var a = r.default.getNodePos(this.bottomNode, this.node).y + this.bottomNode.height * -this.bottomNode.anchorY + cc.winSize.height / 2;
                this.cameraTop = 0, this.cameraBottom = a, this.gameCamera.node.y = this.cameraTop + 50, this.mapBottom = -this.mapNode.anchorY * this.mapNode.height
            }, t.prototype.initOriginHoles = function (e) {
                for (var t = this, o = c.default.isDoubleStart ? 2 : 1, a = function (e) {
                        var a = e.x * i.default.SCALE_RATIO,
                            r = e.num * o,
                            c = e.radius * i.default.SCALE_RATIO;
                        s.brush.apply(), s.makeEraser(cc.v2(a, 0), c || i.PPBB_GameOption.ORIGIN_HOLE_RADIUS), s.scheduleOnce(function () {
                            for (var e = 0; e < r; e++) t.scheduleOnce(function () {
                                var e = t.poolManager.get("ball");
                                e.position = cc.v2(a, 0).add(cc.v2(Math.getRandom(-20, 20), 0)), e.parent = t.ballsNode;
                                var o = e.getComponent(n.default);
                                o.ballColor = 999, t.colorBallsList.push(o), t.ballList.push(e)
                            }, .02 * e)
                        }, .3)
                    }, s = this, r = 0, l = e; r < l.length; r++) {
                    a(l[r])
                }
                this.brush.apply(), c.default.isDoubleStart = !1
            }, t.prototype.initMapHoles = function (e) {
                for (var t = this, o = function (e) {
                        var o = cc.v2(e.pos).mul(i.default.SCALE_RATIO),
                            s = e.num,
                            r = e.radius * i.default.SCALE_RATIO;
                        a.brush.apply(), a.makeEraser(o, r), s > 0 && a.scheduleOnce(function () {
                            for (var e = 0; e < s; e++) t.scheduleOnce(function () {
                                var e = t.poolManager.get("ball");
                                e.position = o.add(cc.v2(Math.getRandom(-20, 20), 0)), e.parent = t.ballsNode, t.ballList.push(e);
                                var a = e.getComponent(n.default);
                                a.ballColor = -1, a.onRunning = function () {
                                    y.default.playSFX("color_turn"), t.colorBallsList.push(a)
                                }, t.scheduleOnce(function () {
                                    a.running || (a.physicsObj.type = 0)
                                }, i.PPBB_GameOption.STATIC_DELAY)
                            }, .02 * e)
                        }, .3)
                    }, a = this, s = 0, r = e; s < r.length; s++) {
                    o(r[s])
                }
                this.brush.apply()
            }, t.prototype.initMapLines = function (e) {
                for (var t = 0, o = e; t < o.length; t++) {
                    var n = o[t];
                    this.brush.apply();
                    for (var a = 0, s = n; a < s.length; a++) {
                        var r = s[a],
                            c = r.pos,
                            l = r.radius;
                        c = cc.v2(c).mul(i.default.SCALE_RATIO), l *= i.default.SCALE_RATIO, this.makeEraser(c, l || i.PPBB_GameOption.LINE_ERASER_RADIUS, !0)
                    }
                }
                this.brush.apply()
            }, t.prototype.initStaticBalls = function (e) {
                for (var t = this, o = function (e) {
                        var o = e.num,
                            s = e.pos,
                            r = cc.v2(s).mul(i.default.SCALE_RATIO);
                        o > 0 && a.scheduleOnce(function () {
                            for (var e = 0; e < o; e++) t.scheduleOnce(function () {
                                var e = t.poolManager.get("ball");
                                e.position = r.add(cc.v2(Math.getRandom(-20, 20), 0)), e.parent = t.ballsNode, t.ballList.push(e);
                                var o = e.getComponent(n.default);
                                o.ballColor = -1, o.onRunning = function () {
                                    y.default.playSFX("color_turn"), t.colorBallsList.push(o)
                                }, t.scheduleOnce(function () {
                                    o.running || (o.physicsObj.type = 0)
                                }, i.PPBB_GameOption.STATIC_DELAY)
                            }, .02 * e)
                        }, .3)
                    }, a = this, s = 0, r = e; s < r.length; s++) {
                    o(r[s])
                }
            }, t.prototype.initBigBalls = function (e) {
                for (var t = this, o = function (e) {
                        var o = e.num,
                            s = e.pos,
                            r = cc.v2(s).mul(i.default.SCALE_RATIO);
                        if (o > 0) {
                            var c = a.poolManager.get("ball");
                            c.position = r, c.parent = a.ballsNode, a.ballList.push(c);
                            var l = c.getComponent(n.default);
                            l.turnBig(o, e.static, function (e) {
                                c.destroy(), t.ballList.remove(c), t.colorBallsList.remove(l), t.onPlayEffect({
                                    name: "zhakai",
                                    pos: c.position
                                });
                                for (var o = 0; o < e; o++) {
                                    var i = t.poolManager.get("ball");
                                    i.position = cc.v2(c.position).add(cc.v2(Math.getRandom(-5, 5), Math.getRandom(-5, 5))), i.parent = t.ballsNode, t.ballList.push(i);
                                    var a = i.getComponent(n.default);
                                    a.ballColor = 999, t.colorBallsList.push(a)
                                }
                            }), e.static ? (l.ballColor = -1, l.onRunning = function () {
                                y.default.playSFX("color_turn"), t.colorBallsList.push(l)
                            }, a.scheduleOnce(function () {
                                l.running || (l.physicsObj.type = 0)
                            }, i.PPBB_GameOption.STATIC_DELAY)) : (a.colorBallsList.push(l), l.ballColor = 999)
                        }
                    }, a = this, s = 0, r = e; s < r.length; s++) {
                    o(r[s])
                }
            }, t.prototype.onPlayEffect = function (e) {
                var t = this,
                    o = e.name,
                    i = e.pos,
                    n = this.poolManager.get(o);
                n && (this.mapNode.addChild(n), n.position = i, n.getComponent(cc.ParticleSystem).resetSystem(), n.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function () {
                    t.poolManager.put(o, n)
                }))))
            }, t.prototype.initObstacles = function (e) {
                for (var t = this, o = function (e) {
                        var o = e.id;
                        if (10 === Number(o)) {
                            var s = cc.v2(e.posIn).mul(i.default.SCALE_RATIO),
                                r = cc.v2(e.posOut).mul(i.default.SCALE_RATIO);
                            return a.makeEraser(s.sub(cc.v2(0, -10).mul(i.default.SCALE_RATIO)), 70), a.brush.apply(), a.makeEraser(s.add(cc.v2(0, 70).mul(i.default.SCALE_RATIO)), 85), a.brush.apply(), a.makeEraser(r.add(cc.v2(0, -45).mul(i.default.SCALE_RATIO)), 60), a.makeEraser(r.add(cc.v2(0, 45).mul(i.default.SCALE_RATIO)), 60), a.brush.apply(), a.makeEraser(r.add(cc.v2(0, -100).mul(i.default.SCALE_RATIO)), 85), a.brush.apply(), d.default.getPrefabAsync("unit/transmit1", function (e) {
                                var o = cc.instantiate(e);
                                o.position = s, t.colliderNode.addChild(o), o.getComponent(p.default).outPos = r
                            }), d.default.getPrefabAsync("unit/transmit2", function (e) {
                                var o = cc.instantiate(e);
                                o.position = r, t.obstacleNode.addChild(o)
                            }), "continue"
                        }
                        if (13 === Number(o)) {
                            var c, l, h, u = e.position,
                                _ = e.boardPos,
                                g = e.boardLength,
                                P = function () {
                                    c && l && h && (c.leftBoard = l, c.rightBoard = h)
                                };
                            return d.default.getPrefabAsync("unit/toggle", function (e) {
                                var o = cc.instantiate(e);
                                o.position = cc.v2(u).mul(i.default.SCALE_RATIO), t.obstacleNode.addChild(o), c = o.getComponent(v.default), P()
                            }), d.default.getPrefabAsync("unit/ob2", function (e) {
                                var o = cc.instantiate(e),
                                    n = cc.instantiate(e);
                                t.obstacleNode.addChild(o), t.obstacleNode.addChild(n), o.getComponent(f.default).checkWithBoom = !1, n.getComponent(f.default).checkWithBoom = !1, _ = cc.v2(0, _.y).mul(i.default.SCALE_RATIO);
                                var a = g / 2;
                                o.width = a, n.width = a, o.position = cc.v2(_.x - (1 - o.anchorX) * o.width, _.y), n.position = cc.v2(_.x + o.anchorX * o.width, _.y), l = o, h = n, t.brush.apply(), t.makeEraser(cc.v2(_.x - a, _.y), o.height / 2, !0), t.makeEraser(cc.v2(_.x + a, _.y), n.height / 2, !0), t.brush.apply(), P()
                            }), "continue"
                        }
                        if (17 === Number(o) && 0 === w.default.getShareOrViedo()) return "continue";
                        d.default.getPrefabAsync("unit/ob" + o, function (a) {
                            var s = cc.instantiate(a);
                            if ("number" == typeof e.width && (s.width = e.width), "number" == typeof e.height && (s.height = e.height), "number" == typeof e.scaleX && (s.scaleX = e.scaleX), "number" == typeof e.scaleY && (s.scaleY = e.scaleY), "number" == typeof e.rotation && (s.rotation = e.rotation), s.scaleX *= i.default.SCALE_RATIO, s.scaleY *= i.default.SCALE_RATIO, s.position = cc.v2(e.position).mul(i.default.SCALE_RATIO), 2 === Number(o) && (s.getComponent(f.default).checkWithBoom = e.checkWithBoom), 15 === Number(o)) {
                                var r = s.getComponent(m.default);
                                r.clockwise = e.clockwise, r.speed = e.speed
                            }
                            if (17 === Number(o)) {
                                var c = s.getComponent(B.default);
                                t.videoBoxList.push(c);
                                var l = s.position;
                                c.onOpen = function () {
                                    t.videoBoxList.remove(c), t.brush.apply(), t.makeEraser(s.position, 80), t.scheduleOnce(function () {
                                        for (var e = 0; e < 15; e++) t.scheduleOnce(function () {
                                            var e = t.poolManager.get("ball");
                                            e.position = l.add(cc.v2(Math.getRandom(-20, 20), 0)), e.parent = t.ballsNode, t.ballList.push(e);
                                            var o = e.getComponent(n.default);
                                            o.ballColor = 999, t.colorBallsList.push(o), o.onRunning = function () {
                                                y.default.playSFX("color_turn"), t.colorBallsList.push(o)
                                            }, t.scheduleOnce(function () {
                                                o.running || (o.physicsObj.type = 0)
                                            }, i.PPBB_GameOption.STATIC_DELAY)
                                        }, .02 * e)
                                    }, .3)
                                }
                            }
                            9 === Number(o) ? t.scheduleOnce(function () {
                                t.obstacleNode.addChild(s)
                            }, .1) : 12 === Number(o) ? t.colliderNode.addChild(s) : t.obstacleNode.addChild(s)
                        })
                    }, a = this, s = 0, r = e; s < r.length; s++) {
                    o(r[s])
                }
            }, t.prototype.onTouchStart = function (e) {
                if (!(e.getTouches().length > 1)) {
                    this.guideFinger.active && (this.guideFinger.active = !1), this.brush.apply();
                    var t = e.getLocation(),
                        o = this.mapNode.convertToNodeSpaceAR(t);
                    o.y += this.gameCamera.node.y, this.makeEraser(o)
                }
            }, t.prototype.onTouchMove = function (e) {
                if (!(e.getTouches().length > 1)) {
                    var t = e.getLocation(),
                        o = this.mapNode.convertToNodeSpaceAR(t);
                    o.y += this.gameCamera.node.y, this.makeEraser(o)
                }
            }, t.prototype.onTouchEnd = function (e) {
                e.getTouches().length > 1 || this.brush.apply()
            }, t.prototype.checkInMaskView = function (e) {
                return !(e.x < this.maskNode.width * -this.maskNode.anchorX || e.x > this.maskNode.width * (1 - this.maskNode.anchorX) || e.y < this.maskNode.height * -this.maskNode.anchorY || e.y > this.maskNode.height * (1 - this.maskNode.anchorY))
            }, t.prototype.makeEraser = function (e, t, o) {
                if (void 0 === t && (t = i.PPBB_GameOption.ERASER_RADIUS), void 0 === o && (o = !1), o || this.checkInMaskView(e)) {
                    if (this.videoBoxList.length > 0)
                        for (var n = 0; n < this.videoBoxList.length; n++) {
                            var a = this.videoBoxList[n],
                                s = a.node.getBoundingBox(),
                                r = [cc.v2(s.xMin, s.yMin), cc.v2(s.xMin, s.yMax), cc.v2(s.xMax, s.yMax), cc.v2(s.xMax, s.yMin)];
                            cc.Intersection.pointInPolygon(e, r) && a.open()
                        }
                    var c = e,
                        l = this.brush.draw({
                            graphics: this.maskEraser.getGraphics(),
                            x: c.x,
                            y: c.y,
                            radius: t
                        });
                    for (n = 0; n < l.length; n++) this.eraserLine(l[n], t)
                }
            }, t.prototype.eraserLine = function (e, t) {
                var o = this.colliderNode.getComponents(cc.PhysicsChainCollider),
                    i = this.colliderNode;
                if (o && o.length > 0)
                    for (var n = 0; n < o.length; n++) {
                        var a = o[n];
                        if (a.points.length > 0) {
                            var s = a.points[0],
                                r = a.points[1];
                            if (cc.Intersection.pointLineDistance(e, s, r, !0) <= t) {
                                if (s.x > i.width * (1 - i.anchorX) || s.x < i.width * -i.anchorX) return;
                                if (1 == cc.Intersection.lineCircle(s, r, e, t)) a.points = [], a.apply();
                                else if (2 == cc.Intersection.lineCircle(s, r, e, t)) {
                                    var c = Math.sqrt(t * t - (s.x - e.x) * (s.x - e.x)),
                                        l = cc.Intersection.pointInLine(cc.v2(s.x, c + e.y), s, r),
                                        h = cc.Intersection.pointInLine(cc.v2(s.x, -c + e.y), s, r);
                                    if (l && h) {
                                        var d = i.addComponent(cc.PhysicsChainCollider);
                                        d.points = [s, cc.v2(s.x, c + e.y)], d.apply(), a.points = [cc.v2(r.x, -c + e.y), r], a.apply()
                                    } else !l && h ? (a.points = [cc.v2(r.x, -c + e.y), r], a.apply()) : l && !h && (a.points = [cc.v2(s), cc.v2(s.x, c + e.y)], a.apply())
                                }
                            }
                        }
                    }
            }, t.prototype.getMinYBall = function () {
                for (var e = null, t = this.colorBallsList.concat(this.boxBallList), o = 0; o < t.length; o++) {
                    var i = t[o];
                    (null === e || i.node.y < e.node.y) && (e = i)
                }
                return e
            }, t.prototype.buttonCallback = function (e, t) {
                var o = this;
                switch (t) {
                    case "reset":
                        SdkManager.gameFailLevel("level", c.default.curLevel), this.node.name = "xxx", this.setCustomCloseCallback(function () {
                            console.log("callback"), setTimeout(function () {
                                g.default.popGame(c.default.curLevel)
                            }, 20)
                        }), this.close();
                        break;
                    case "setting":
                        break;
                    case "home":
                        SdkManager.gameFailLevel("level", c.default.curLevel), this.removeAll(), g.default.popMenu().then(function () {
                            o.close()
                        });
                        break;
                    case "skip":
                        this.skipLevel()
                }
            }, t.prototype.skipLevel = function () {
                var e = this,
                    t = function () {
                        e.removeAll(), g.default.popResult().then(function (t) {
                            t.init(c.default.curLevel, e.mapData.needBalls, 0), e.close()
                        })
                    },
                    o = w.default.getShareOrViedo();
                0 === o ? w.default.showToast("No video!") : 1 === o ? w.default.SDKSahre({
                    name: window.GameName,
                    source: 5,
                    success: function (e) {
                        console.log("shareRes:", e), 0 === e ? w.default.showToast("Share failed, please try again") : t && t()
                    }
                }) : 2 === o && w.default.showRewardedVideoAd(function () {
                    t && t()
                }, function () {
                    w.default.showToast("Not finished watching the video!")
                })
            }, t.prototype.removeAll = function () {}, t.Instance = null, t.sfxMap = {}, __decorate([b(cc.Node)], t.prototype, "mapNode", void 0), __decorate([b(cc.Node)], t.prototype, "maskNode", void 0), __decorate([b(cc.Node)], t.prototype, "spriteMaskNode", void 0), __decorate([b(cc.Node)], t.prototype, "ballsNode", void 0), __decorate([b(cc.Node)], t.prototype, "colliderNode", void 0), __decorate([b(cc.Node)], t.prototype, "obstacleNode", void 0), __decorate([b(cc.PhysicsChainCollider)], t.prototype, "leftSide", void 0), __decorate([b(cc.PhysicsChainCollider)], t.prototype, "rightSide", void 0), __decorate([b(cc.Node)], t.prototype, "bottomNode", void 0), __decorate([b(cc.Camera)], t.prototype, "gameCamera", void 0), __decorate([b(cc.Node)], t.prototype, "carPosNode", void 0), __decorate([b(cc.Node)], t.prototype, "backgroudPosNode", void 0), __decorate([b(cc.Node)], t.prototype, "uiNode", void 0), __decorate([b(cc.Label)], t.prototype, "levelLabel", void 0), __decorate([b(cc.Label)], t.prototype, "totalLabel", void 0), __decorate([b(cc.Label)], t.prototype, "targetLabel", void 0), __decorate([b(cc.Label)], t.prototype, "needLabel", void 0), __decorate([b(cc.Node)], t.prototype, "completeNode", void 0), __decorate([b(cc.Node)], t.prototype, "skipButton", void 0), __decorate([b(cc.Node)], t.prototype, "guideFinger", void 0), __decorate([b(cc.Node)], t.prototype, "black", void 0), t = o = __decorate([S], t)
        }(_.default);
    o.default = C
}