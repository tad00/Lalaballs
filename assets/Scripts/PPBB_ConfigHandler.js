{
    const o = exports;
    const e = require;
    Object.defineProperty(o, "__esModule", {
        value: !0
    });
    var i = e("PPBB_FileUtils"),
        n = function () {
            function e() {
                this._configURLList = [], this._config = null
            }
            return e.prototype.onInit = function () {}, e.prototype.loadConfig = function () {
                if (this._configURLList.length > 0) {
                    for (var e = {}, t = 0, o = this._configURLList; t < o.length; t++) {
                        var n = o[t],
                            a = i.default.getConfigByName(n);
                        e[n] = a
                    }
                    this._config = e, this.onLoadConfig(e)
                } else this.onLoadConfig(null)
            }, e.prototype.onLoadConfig = function (e) {}, e.prototype.onLoadOver = function () {}, e.prototype.getConfig = function () {
                return this._config
            }, e.prototype.getConfigByKey = function (e) {
                return this._config[e]
            }, e
        }();
    o.default = n
}