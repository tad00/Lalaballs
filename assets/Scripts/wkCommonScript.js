{
    const e = require;
    window.wkCommonScript = {
        addToast: function (e) {
            cc.loader.loadRes("wkCommon/toastWord/wkCommonToastNode", function (t, o) {
                var i = cc.instantiate(o),
                    n = e.color ? e.color : cc.color(255, 255, 255);
                i.getComponent("wkCommonToastScript").setString(e.str, n), cc.find("Canvas").addChild(i, 9999), i.x = e.x ? e.x : 0, i.y = e.y ? e.y : 0
            })
        },
        myLoadScene: function (e) {
            wkCommonScript.addLoadingTip(), cc.director.preloadScene(e, function () {
                cc.director.loadScene(e)
            })
        },
        addLoadingTip: function () {
            var e = cc.find("Canvas");
            cc.loader.loadRes("wkCommon/loadNode/wkLoadScene", function (t, o) {
                if (e && e.isValid) {
                    var i = cc.instantiate(o);
                    cc.find("Canvas").addChild(i, 9999)
                }
            })
        },
        myAddPrefab: function (e) {
            cc.loader.loadRes("wkCommon/loadNode/wkLoadScene", function (t, o) {
                var i = cc.instantiate(o);
                cc.find("Canvas").addChild(i, 9999), cc.loader.loadRes(e.url, function (t, o) {
                    i.destroy();
                    var n = cc.instantiate(o),
                        a = e.node ? e.node : cc.find("Canvas");
                    a && a.isValid && (a.addChild(n), n.x = e.x ? e.x : 0, n.y = e.y ? e.y : 0, e.zIndex && (n.zIndex = e.zIndex))
                })
            })
        }
    };
}