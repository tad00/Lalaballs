{
    const e = require;

    function i(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            o = cc.sys.localStorage.getItem(e);
        return null === o || "" === o ? t + "" : o
    }
    e("SdkAdConfigData");
    window.spotData = [];
    window.pauseSpotInterval = 3;
    window.resultSpotInterval = 3;
    window.pauseSpotStartIndex = 3;
    window.resultSpotStartIndex = 3;
    window.pauseSpotTime = 10;
    window.resultSpotTime = 10;
    window.helpOpenId = "";
    window.onHideHaveLoadScene = !0;
    window.openid = "";
    window.openid_uuid = "";
    //window.wsurl || (window.wsurl = "wss://battle.igame58.com/battle/v2/726f6f6d?uid=" + openid);
    // window.uinfo || (window.uinfo = {
    //     gameid: 100001,
    //     uid: openid,
    //     nick: "\u597d\u53cb",
    //     icon: "",
    //     sex: 0,
    //     city: "",
    //     country: "",
    //     province: "",
    //     from: "wechat"
    // });
    window.matchinfo = {
        // nick: "\u597d\u53cb",
        // icon: "",
        // sex: 0,
        // city: "",
        // country: "",
        // province: "",
        // from: "wechat"
    };
    window.serverUrl = "https://app.igame58.com/";
    window.mainScneeFromSmallGame = !1;
    window.mainGameScene = "";
    window.localCardKey = "localCardNum";
    window.netCardNum = 0;
    window.canGetNetCardNum = !0;
    window.getNetCardTime = 1e4;
    window.canGetLocalCard = !1;
    window.getLocalCareId = "";
    window.wxData = {
        // WXforward: "",
        // session_key: "",
        // appId: wxAppId,
        // appSecret: wxAppSecret,
        // bannerID: "",
        // params: null,
        // checkShareSuccessNumIntervalTime: 10,
        // getOpenIdUrl: serverUrl + "lieyou/wxdata/requstWxAPI",
        // moreGameUrl: serverUrl + "lieyou/wxdata/moreGame?appName=" + GameName,
        // shareUrl: serverUrl + "lieyou/wxdata/getShareImgText?appName=" + GameName,
        // putShareDataUrl: serverUrl + "lieyou/wxdata/gamerShare",
        // putTouchShareDataUrl: serverUrl + "lieyou/wxdata/userClickImgText",
        // checkResurrDataUrl: serverUrl + "lieyou/wxdata/selReviveCard",
        // useResurrDataUrl: serverUrl + "lieyou/wxdata/useReviveCard",
        // putPlayerData: serverUrl + "lieyou/wxdata/addGamerLogin/" + GameName + "/" + wxAppId + "/",
        // getOnlineData: serverUrl + "lieyou/wxdata/getGameParam/" + wxAppId,
        // shareOnlineData: "",
        // bannerOnlindDelayTime: 50,
        // shareData: [],
        // moreGameData: []
    };
    window.quickGame = {
        // awardGoldDouble: 1,
        // awardGoldTime: 30,
        // RecommendIconData: [],
        // RecommendBannerData: [],
        // awardGoldData: [],
        // adBaseUrl: ""
    };
    window.PI = 3.141592654;
    window.lieyou = module.exports = {
        // Props_Base_Gold: 800,
        // Key_OncePlayerTime: "begingGameTime",
        // Key_OncePlayerTimeDay: "begingGameTimeDay",
        // Key_NewPlayer: "isNewPlayer",
        // Key_Gold: "Key_Gold",
        // Key_Music: "Key_BgMusic",
        // Key_Sound: "Key_Sound",
        // _SceneScale: 1,
        // _offsetX: 0,
        // _offsetY: 0,
        // Language_ch: !0
    };
    window.language = "ch";
    cc.sys.language != cc.sys.LANGUAGE_CHINESE && (lieyou.Language_ch = !1, language = "en");
    window.Userdefault = module.exports = {
        getBoolForKey: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "false";
            return "false" == t || (t = t ? "true" : "false"), "true" == i(e, t)
        },
        getIntForKey: function (e) {
            var t = i(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0);
            return parseInt(t)
        },
        getStringForKey: function (e) {
            return i(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "")
        },
        getFloatForKey: function (e) {
            var t = i(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0);
            return parseFloat(t)
        },
        setDataForKey: function (e, t) {
            cc.sys.localStorage.setItem(e, t)
        },
        setBoolForKey: function (e, t) {
            t = t ? "true" : "false", cc.sys.localStorage.setItem(e, t)
        }
    };
    window.getRandom = function (e, t) {
        var o = t - e,
            i = parseInt(Math.random() * o);
        return i += e
    };
    window.getCanShare = function () {
        return cc.sys.platform === cc.sys.WECHAT_GAME && wxServerVersion >= wxGameVersion
    };
    window.getTime = function () {
        return (new Date).getTime()
    };
    window.getTimeDay = function () {
        var e = new Date;
        return 1e4 * (e.getYear() + 1900) + 100 * (e.getMonth() + 1) + e.getDate()
    };
}