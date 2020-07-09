{
    const e = require;
    var i = cc.Enum({
        Horizontal: 0,
        Vertical: 1
    });
    var n = cc.Enum({
        None: 0,
        Up: 1,
        Down: 2,
        Left: 3,
        Rigth: 4
    });
    var a = cc.Enum({
        LEFT_TO_RIGHT__TOP_TO_BOTTOM: 0,
        TOP_TO_BOTTOM__LEFT_TO_RIGHT: 1
    });
    var s = cc.Enum({
        Scroll: 0,
        Flip: 1
    });
    var r = cc.Class({
        extends: cc.ScrollView,
        editor: !1,
        properties: {
            _data: null,
            _minCellIndex: 0,
            _maxCellIndex: 0,
            _paramCount: 0,
            _count: 0,
            _cellCount: 0,
            _showCellCount: 0,
            _groupCellCount: null,
            _scrollDirection: n.None,
            _cellPool: null,
            _page: 0,
            _pageTotal: 0,
            _touchLayer: cc.Node,
            _loadSuccess: !1,
            _initSuccess: !1,
            _scheduleInit: !1,
            cell: {
                default: null,
                type: cc.Prefab,
                notify: function (e) {}
            },
            ScrollModel: {
                default: 0,
                type: i,
                notify: function (e) {
                    this.ScrollModel === i.Horizontal ? (this.horizontal = !0, this.vertical = !1, this.verticalScrollBar = null) : (this.vertical = !0, this.horizontal = !1, this.horizontalScrollBar = null)
                },
                tooltip: "\u6a2a\u5411\u7eb5\u5411\u6ed1\u52a8"
            },
            ViewType: {
                default: 0,
                type: s,
                notify: function (e) {
                    this.ViewType === s.Flip ? this.inertia = !1 : this.inertia = !0
                },
                tooltip: "\u4e3aScroll\u65f6,\u4e0d\u505a\u89e3\u91ca\n\u4e3aFlipw\u65f6\uff0c\u5728Scroll\u7684\u57fa\u7840\u4e0a\u589e\u52a0\u7ffb\u9875\u7684\u884c\u4e3a"
            },
            isFill: {
                default: !1,
                tooltip: "\u5f53\u8282\u70b9\u4e0d\u80fd\u94fa\u6ee1\u4e00\u9875\u65f6\uff0c\u9009\u62e9isFill\u4e3atrue\u4f1a\u586b\u5145\u8282\u70b9\u94fa\u6ee1\u6574\u4e2aview"
            },
            Direction: {
                default: 0,
                type: a,
                tooltip: "\u89c4\u5b9acell\u7684\u6392\u5217\u65b9\u5411"
            },
            pageChangeEvents: {
                default: [],
                type: cc.Component.EventHandler,
                tooltip: "\u4ec5\u5f53ViewType\u4e3apageView\u65f6\u6709\u6548\uff0c\u521d\u59cb\u5316\u6216\u7ffb\u9875\u65f6\u89e6\u53d1\u56de\u8c03\uff0c\u5411\u56de\u8c03\u4f20\u5165\u4e24\u4e2a\u53c2\u6570\uff0c\u53c2\u6570\u4e00\u4e3a\u5f53\u524d\u5904\u4e8e\u54ea\u4e00\u9875\uff0c\u53c2\u6570\u4e8c\u4e3a\u4e00\u5171\u591a\u5c11\u9875"
            }
        },
        statics: {
            _cellPoolCache: {}
        },
        onLoad: function () {
            var e = this;
            r._tableView.push(this);
            var t = this.node.destroy;
            this.node.destroy = function () {
                e.clear(), t.call(e.node)
            };
            var o = this.node._onPreDestroy;
            this.node._onPreDestroy = function () {
                e.clear(), o.call(e.node)
            }
        },
        onDestroy: function () {
            for (var e in this._cellPool && this._cellPool.clear(), r._tableView)
                if (r._tableView[e] === this) return void r._tableView.splice(e)
        },
        _addListenerToTouchLayer: function () {
            this._touchLayer = new cc.Node;
            var e = this._touchLayer.addComponent(cc.Widget);
            e.isAlignTop = !0, e.isAlignBottom = !0, e.isAlignLeft = !0, e.isAlignRight = !0, e.top = 0, e.bottom = 0, e.left = 0, e.right = 0, e.alignMode = cc.Widget.AlignMode, this._touchLayer.parent = this._view
        },
        _setStopPropagation: function () {
            this.node.on("touchstart", function (e) {}), this.node.on("touchmove", function (e) {}), this.node.on("touchend", function (e) {}), this.node.on("touchcancel", function (e) {})
        },
        _initCell: function (e, t) {
            if (this.ScrollModel === i.Horizontal && this.Direction === a.TOP_TO_BOTTOM__LEFT_TO_RIGHT || this.ScrollModel === i.Vertical && this.Direction === a.LEFT_TO_RIGHT__TOP_TO_BOTTOM)
                for (var o = parseInt(e.name) * e.childrenCount, n = 0; n < e.childrenCount; ++n) {
                    var r = e.children[n].getComponent("PPBB_viewCell");
                    r && (r._cellInit_(this), r.init(o + n, this._data, t, [o, n]))
                } else if (this.ViewType === s.Flip)
                    for (var c = Math.floor(parseInt(e.name) / this._showCellCount), l = c * this._showCellCount * e.childrenCount, h = 0; h < e.childrenCount; ++h) {
                        var d = e.children[h].getComponent("PPBB_viewCell");
                        d && (d._cellInit_(this), d.init(this._showCellCount * h + c % this._showCellCount + l, this._data, t, [h + c * e.childrenCount, h]))
                    } else
                        for (var u = 0; u < e.childrenCount; ++u) {
                            var p = e.children[u].getComponent("PPBB_viewCell");
                            p && (p._cellInit_(this), p.init(u * this._count + parseInt(e.name), this._data, t, [u, u]))
                        }
        },
        _setCellPosition: function (e, t) {
            this.ScrollModel === i.Horizontal ? (e.x = 0 === t ? -this.content.width * this.content.anchorX + e.width * e.anchorX : this.content.getChildByName(String(t - 1)).x + e.width, e.y = (e.anchorY - this.content.anchorY) * e.height) : (e.y = 0 === t ? this.content.height * (1 - this.content.anchorY) - e.height * (1 - e.anchorY) : this.content.getChildByName(String(t - 1)).y - e.height, e.x = (e.anchorX - this.content.anchorX) * e.width)
        },
        _addCell: function (e) {
            var t = this._getCell();
            this._setCellAttr(t, e), this._setCellPosition(t, e), t.parent = this.content, this._initCell(t)
        },
        _setCellAttr: function (e, t) {
            e.setSiblingIndex(t >= parseInt(e.name) ? this._cellCount : 0), e.name = t.toString()
        },
        _addCellsToView: function () {
            for (var e = 0; e <= this._maxCellIndex; ++e) this._addCell(e)
        },
        _getCell: function () {
            if (0 === this._cellPool.size()) {
                var e = cc.instantiate(this.cell),
                    t = new cc.Node;
                t.anchorX = .5, t.anchorY = .5;
                var o = 0;
                if (this.ScrollModel === i.Horizontal) {
                    t.width = e.width;
                    var n = Math.floor(this.content.height / e.height);
                    t.height = this.content.height;
                    for (var a = 0; a < n; ++a) e || (e = cc.instantiate(this.cell)), e.x = (e.anchorX - .5) * e.width, e.y = t.height / 2 - e.height * (1 - e.anchorY) - o, o += e.height, e.parent = t, e = null
                } else {
                    t.height = e.height;
                    var s = Math.floor(this.content.width / e.width);
                    t.width = this.content.width;
                    for (var r = 0; r < s; ++r) e || (e = cc.instantiate(this.cell)), e.y = (e.anchorY - .5) * e.height, e.x = -t.width / 2 + e.width * e.anchorX + o, o += e.width, e.parent = t, e = null
                }
                this._cellPool.put(t)
            }
            return this._cellPool.get()
        },
        _getCellSize: function () {
            var e = this._getCell(),
                t = e.getContentSize();
            return this._cellPool.put(e), t
        },
        _getGroupCellCount: function () {
            var e = this._getCell(),
                t = e.childrenCount;
            return this._cellPool.put(e), t
        },
        clear: function () {
            if (this.content) {
                for (var e = this.content.childrenCount - 1; e >= 0; --e) this._cellPool.put(this.content.children[e]);
                this._cellCount = 0, this._showCellCount = 0
            }
        },
        reload: function (e) {
            void 0 !== e && (this._data = e);
            for (var t = this.content.childrenCount - 1; t >= 0; --t) this._initCell(this.content.children[t], !0)
        },
        _getCellPoolCacheName: function () {
            return this.ScrollModel === i.Horizontal ? this.cell.name + "h" + this.content.height : this.cell.name + "w" + this.content.width
        },
        _initTableView: function () {
            this._scheduleInit = !1, this._cellPool && this.clear();
            var e = this._getCellPoolCacheName();
            r._cellPoolCache[e] || (r._cellPoolCache[e] = new cc.NodePool("PPBB_viewCell")), this._cellPool = r._cellPoolCache[e], this._cellSize = this._getCellSize(), this._groupCellCount = this._getGroupCellCount(), this._count = Math.ceil(this._paramCount / this._groupCellCount), this.ScrollModel === i.Horizontal ? (this._view.width = this.node.width, this._view.x = (this._view.anchorX - this.node.anchorX) * this._view.width, this._cellCount = Math.ceil(this._view.width / this._cellSize.width) + 1, this.ViewType === s.Flip ? this._cellCount > this._count ? (this.isFill ? this._cellCount = Math.floor(this._view.width / this._cellSize.width) : this._cellCount = this._count, this._showCellCount = this._cellCount, this._pageTotal = 1) : (this._pageTotal = Math.ceil(this._count / (this._cellCount - 1)), this._count = this._pageTotal * (this._cellCount - 1), this._showCellCount = this._cellCount - 1) : this._cellCount > this._count ? (this.isFill ? this._cellCount = Math.floor(this._view.width / this._cellSize.width) : this._cellCount = this._count, this._showCellCount = this._cellCount) : this._showCellCount = this._cellCount - 1, this.content.width = this._count * this._cellSize.width, this.stopAutoScroll(), this.scrollToLeft()) : (this._view.height = this.node.height, this._view.y = (this._view.anchorY - this.node.anchorY) * this._view.height, this._cellCount = Math.ceil(this._view.height / this._cellSize.height) + 1, this.ViewType === s.Flip ? this._cellCount > this._count ? (this.isFill ? this._cellCount = Math.floor(this._view.height / this._cellSize.height) : this._cellCount = this._count, this._showCellCount = this._cellCount, this._pageTotal = 1) : (this._pageTotal = Math.ceil(this._count / (this._cellCount - 1)), this._count = this._pageTotal * (this._cellCount - 1), this._showCellCount = this._cellCount - 1) : this._cellCount > this._count ? (this.isFill ? this._cellCount = Math.floor(this._view.height / this._cellSize.height) : this._cellCount = this._count, this._showCellCount = this._cellCount) : this._showCellCount = this._cellCount - 1, this.content.height = this._count * this._cellSize.height, this.stopAutoScroll(), this.scrollToTop()), this._changePageNum(1 - this._page), this._lastOffset = this.getScrollOffset(), this._minCellIndex = 0, this._maxCellIndex = this._cellCount - 1, this._addCellsToView(), this._initSuccess = !0
        },
        initTableView: function (e, t) {
            this._paramCount = e, this._data = t, this._loadSuccess ? this._scheduleInit || this._initTableView() : (this.ScrollModel === i.Horizontal ? (this.horizontal = !0, this.vertical = !1) : (this.vertical = !0, this.horizontal = !1), this.verticalScrollBar && this.verticalScrollBar.node.on("size-changed", function () {
                this._updateScrollBar(this._getHowMuchOutOfBoundary())
            }, this), this.horizontalScrollBar && this.horizontalScrollBar.node.on("size-changed", function () {
                this._updateScrollBar(this._getHowMuchOutOfBoundary())
            }, this), this._addListenerToTouchLayer(), this._setStopPropagation(), this.node.getComponent(cc.Widget) || this._view.getComponent(cc.Widget) || this.content.getComponent(cc.Widget) ? (this.scheduleOnce(this._initTableView), this._scheduleInit = !0) : this._initTableView(), this._loadSuccess = !0)
        },
        stopAutoScroll: function () {
            this._scheduleInit ? this.scheduleOnce(function () {
                this.stopAutoScroll()
            }) : (this._scrollDirection = n.None, cc.ScrollView.prototype.stopAutoScroll.call(this))
        },
        scrollToBottom: function (e, t) {
            this._scheduleInit ? this.scheduleOnce(function () {
                this.scrollToBottom(e, t)
            }) : (this._scrollDirection = n.Up, cc.ScrollView.prototype.scrollToBottom.call(this, e, t))
        },
        scrollToTop: function (e, t) {
            this._scheduleInit ? this.scheduleOnce(function () {
                this.scrollToTop(e, t)
            }) : (this._scrollDirection = n.Down, cc.ScrollView.prototype.scrollToTop.call(this, e, t))
        },
        scrollToLeft: function (e, t) {
            this._scheduleInit ? this.scheduleOnce(function () {
                this.scrollToLeft(e, t)
            }) : (this._scrollDirection = n.Rigth, cc.ScrollView.prototype.scrollToLeft.call(this, e, t))
        },
        scrollToRight: function (e, t) {
            this._scheduleInit ? this.scheduleOnce(function () {
                this.scrollToRight(e, t)
            }) : (this._scrollDirection = n.Left, cc.ScrollView.prototype.scrollToRight.call(this, e, t))
        },
        scrollToOffset: function (e, t, o) {
            if (this._scheduleInit) this.scheduleOnce(function () {
                this.scrollToOffset(e, t, o)
            });
            else {
                var a = this.getScrollOffset(),
                    s = e.sub(a);
                this.ScrollModel === i.Horizontal ? s.x > 0 ? this._scrollDirection = n.Left : s.x < 0 && (this._scrollDirection = n.Rigth) : s.y > 0 ? this._scrollDirection = n.Up : s.y < 0 && (this._scrollDirection = n.Down), cc.ScrollView.prototype.scrollToOffset.call(this, e, t, o)
            }
        },
        scrollToCell: function (e, t, o) {
            var i = this._cellSize,
                n = i.height * e - this.content.parent.height / 2 + i.height / 2;
            this.scrollToOffset(cc.v2(0, n), t, o)
        },
        addScrollEvent: function (e, t, o) {
            var i = new cc.Component.EventHandler;
            i.target = e, i.component = t, i.handler = o, this.scrollEvents.push(i)
        },
        removeScrollEvent: function (e) {
            for (var t in this.scrollEvents) {
                if (this.scrollEvents[t].target === e) return void this.scrollEvents.splice(t, 1)
            }
        },
        clearScrollEvent: function () {
            this.scrollEvents = []
        },
        addPageEvent: function (e, t, o) {
            var i = new cc.Component.EventHandler;
            i.target = e, i.component = t, i.handler = o, this.pageChangeEvents.push(i)
        },
        removePageEvent: function (e) {
            for (var t in this.pageChangeEvents) {
                if (this.pageChangeEvents[t].target === e) return void this.pageChangeEvents.splice(t, 1)
            }
        },
        clearPageEvent: function () {
            this.pageChangeEvents = []
        },
        scrollToNextPage: function () {
            this.scrollToPage(this._page + 1)
        },
        scrollToLastPage: function () {
            this.scrollToPage(this._page - 1)
        },
        scrollToPage: function (e) {
            if (this.ViewType === s.Flip && e !== this._page && !(e < 1 || e > this._pageTotal)) {
                var t = .3 * Math.abs(e - this._page);
                if (this._changePageNum(e - this._page), this._initSuccess) {
                    var o = this._view.width,
                        i = this._view.height;
                    o = (this._page - 1) * o, i = (this._page - 1) * i, this.scrollToOffset({
                        x: o,
                        y: i
                    }, t)
                } else this.scheduleOnce(function () {
                    var e = this._view.width,
                        o = this._view.height;
                    e = (this._page - 1) * e, o = (this._page - 1) * o, this.scrollToOffset({
                        x: e,
                        y: o
                    }, t)
                })
            }
        },
        getCells: function (e) {
            var t = this,
                o = function () {
                    var o = [],
                        i = function e(t, o) {
                            if (t.length <= 1) return t;
                            for (var i = Math.floor(t.length / 2), n = t[i], a = [], s = [], r = 0; r < t.length; r++) r !== i && (o ? o(t[r], n) ? a.push(t[r]) : s.push(t[r]) : t[r] <= n ? a.push(t[r]) : s.push(t[r]));
                            return e(a, o).concat([n], e(s, o))
                        }(t.content.children, function (e, t) {
                            return parseInt(e.name) < parseInt(t.name)
                        });
                    for (var n in i) {
                        var a = i[n];
                        for (var s in a.children) o.push(a.children[s])
                    }
                    e(o)
                };
            this._initSuccess ? o() : this.scheduleOnce(o)
        },
        getData: function () {
            return this._data
        },
        getGroupsRange: function (e) {
            var t = this,
                o = function () {
                    for (var o = [], i = t._minCellIndex; i <= t._maxCellIndex; i++) o.push(i);
                    e(o)
                };
            this._initSuccess ? o() : this.scheduleOnce(o)
        },
        _changePageNum: function (e) {
            this._page += e, this._page <= 0 ? this._page = 1 : this._page > this._pageTotal && (this._page = this._pageTotal);
            var t = !0,
                o = !1,
                i = void 0;
            try {
                for (var n, a = this.pageChangeEvents[Symbol.iterator](); !(t = (n = a.next()).done); t = !0) {
                    n.value.emit([this._page, this._pageTotal])
                }
            } catch (e) {
                o = !0, i = e
            } finally {
                try {
                    !t && a.return && a.return()
                } finally {
                    if (o) throw i
                }
            }
        },
        _touchstart: function (e) {
            this.ScrollModel === i.Horizontal ? this.horizontal = !1 : this.vertical = !1
        },
        _touchmove: function (e) {
            if (this.horizontal === this.vertical) {
                var t = e.getStartLocation(),
                    o = e.getLocation();
                if (this.ScrollModel === i.Horizontal) {
                    if (Math.abs(o.x - t.x) <= 7) return
                } else if (Math.abs(o.y - t.y) <= 7) return;
                this.ScrollModel === i.Horizontal ? this.horizontal = !0 : this.vertical = !0
            }
        },
        _touchend: function (e) {
            this.ScrollModel === i.Horizontal ? this.horizontal = !0 : this.vertical = !0, this.ViewType === s.Flip && this._pageTotal > 1 && this._pageMove(e)
        },
        _pageMove: function (e) {
            var t = this._view.width,
                o = this._view.height;
            if (this.ViewType === s.Flip) {
                var a = this.getScrollOffset(),
                    r = this.getMaxScrollOffset();
                if (this.ScrollModel === i.Horizontal) {
                    if (a.x >= 0 || a.x <= -r.x) return;
                    if (o = 0, Math.abs(e.getLocation().x - e.getStartLocation().x) > this._view.width / 4)
                        if (this._scrollDirection === n.Left) {
                            if (!(this._page < this._pageTotal)) return;
                            this._changePageNum(1)
                        } else if (this._scrollDirection === n.Rigth) {
                        if (!(this._page > 1)) return;
                        this._changePageNum(-1)
                    }
                } else {
                    if (a.y >= r.y || a.y <= 0) return;
                    if (t = 0, Math.abs(e.getLocation().y - e.getStartLocation().y) > this._view.height / 4)
                        if (this._scrollDirection === n.Up) {
                            if (!(this._page < this._pageTotal)) return;
                            this._changePageNum(1)
                        } else if (this._scrollDirection === n.Down) {
                        if (!(this._page > 1)) return;
                        this._changePageNum(-1)
                    }
                }
                t = (this._page - 1) * t, o = (this._page - 1) * o, this.scrollToOffset({
                    x: t,
                    y: o
                }, .3)
            }
        },
        _getBoundingBoxToWorld: function (e) {
            var t = e.convertToWorldSpaceAR(cc.v2(0, 0)),
                o = this.node.convertToNodeSpaceAR(t);
            return cc.rect(o.x, o.y, e.width, e.height)
        },
        _updateCells: function () {
            if (this.ScrollModel === i.Horizontal) {
                if (this._scrollDirection === n.Left) {
                    if (this._maxCellIndex < this._count - 1) {
                        var e = this._getBoundingBoxToWorld(this._view);
                        do {
                            var t = this.content.getChildByName(String(this._minCellIndex)),
                                o = this._getBoundingBoxToWorld(t);
                            if (!(o.xMax <= e.xMin)) break;
                            t.x = this.content.getChildByName(String(this._maxCellIndex)).x + t.width, this._minCellIndex++, this._maxCellIndex++, this._setCellAttr(t, this._maxCellIndex), o.xMax + (this._maxCellIndex - this._minCellIndex + 1) * t.width > e.xMin && this._initCell(t)
                        } while (this._maxCellIndex !== this._count - 1)
                    }
                } else if (this._scrollDirection === n.Rigth && this._minCellIndex > 0) {
                    var a = this._getBoundingBoxToWorld(this._view);
                    do {
                        var s = this.content.getChildByName(String(this._maxCellIndex)),
                            r = this._getBoundingBoxToWorld(s);
                        if (!(r.xMin >= a.xMax)) break;
                        s.x = this.content.getChildByName(String(this._minCellIndex)).x - s.width, this._minCellIndex--, this._maxCellIndex--, this._setCellAttr(s, this._minCellIndex), r.xMin - (this._maxCellIndex - this._minCellIndex + 1) * s.width < a.xMax && this._initCell(s)
                    } while (0 !== this._minCellIndex)
                }
            } else if (this._scrollDirection === n.Up) {
                if (this._maxCellIndex < this._count - 1) {
                    var c = this._getBoundingBoxToWorld(this._view);
                    do {
                        var l = this.content.getChildByName(String(this._minCellIndex)),
                            h = this._getBoundingBoxToWorld(l);
                        if (!(h.yMin >= c.yMax)) break;
                        l.y = this.content.getChildByName(String(this._maxCellIndex)).y - l.height, this._minCellIndex++, this._maxCellIndex++, this._setCellAttr(l, this._maxCellIndex), h.yMin - (this._maxCellIndex - this._minCellIndex + 1) * l.height < c.yMax && this._initCell(l)
                    } while (this._maxCellIndex !== this._count - 1)
                }
            } else if (this._scrollDirection === n.Down && this._minCellIndex > 0) {
                var d = this._getBoundingBoxToWorld(this._view);
                do {
                    var u = this.content.getChildByName(String(this._maxCellIndex)),
                        p = this._getBoundingBoxToWorld(u);
                    if (!(p.yMax <= d.yMin)) break;
                    u.y = this.content.getChildByName(String(this._minCellIndex)).y + u.height, this._minCellIndex--, this._maxCellIndex--, this._setCellAttr(u, this._minCellIndex), p.yMax + (this._maxCellIndex - this._minCellIndex + 1) * u.width > d.yMin && this._initCell(u)
                } while (0 !== this._minCellIndex)
            }
        },
        _getScrollDirection: function () {
            var e = this.getScrollOffset(),
                t = this._lastOffset;
            this._lastOffset = e, e = e.sub(t), this.ScrollModel === i.Horizontal ? e.x > 0 ? this._scrollDirection = n.Rigth : e.x < 0 ? this._scrollDirection = n.Left : this._scrollDirection = n.None : e.y < 0 ? this._scrollDirection = n.Down : e.y > 0 ? this._scrollDirection = n.Up : this._scrollDirection = n.None
        },
        update: function (e) {
            cc.ScrollView.prototype.update.call(this, e), this._initSuccess && this._cellCount !== this._showCellCount && 1 !== this._pageTotal && (this._getScrollDirection(), this._updateCells())
        }
    });
    r._tableView = [];
    r.reload = function () {
        for (var e in r._tableView) r._tableView[e].reload()
    };
    r.clear = function () {
        for (var e in r._tableView) r._tableView[e].clear()
    };
    r.default = r;
    cc.tableView = window.tableView = module.export = r;
}