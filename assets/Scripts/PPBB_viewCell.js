{
    const e = require;
    var i = cc.Class({
        extends: cc.Component,
        properties: {
            tableView: {
                default: null,
                visible: !1
            },
            _realWidth: 0,
            _realHeight: 0,
            _isCellInit_: !1,
            _longClicked_: !1
        },
        _cellAddMethodToNode_: function () {
            this.node.clicked = this.clicked.bind(this)
        },
        _cellAddTouch_: function () {},
        _cellInit_: function (e) {
            this.tableView = e
        },
        _longClicked: function () {
            this._longClicked_ = !1, this.node.emit(cc.Node.EventType.TOUCH_CANCEL), this.longClicked()
        },
        longClicked: function () {},
        clicked: function () {},
        init: function (e, t, o, i) {}
    });
    i.default = i;
    cc.viewCell = window.viewCell = module.exports = i;
}