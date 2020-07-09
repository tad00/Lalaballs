const e = require;
cc.Class({
    extends: cc.Component,
    properties: {
        loading: cc.Label
    },
    start: function () {
        this.time = 0, this.schedule(this.updateLabel, .5)
    },
    updateLabel: function () {
        this.time++, this.loading.string = ["loading", "loading.", "loading..", "loading..."][this.time % 4]
    }
});