{const o=exports;
const e=require;
Object.defineProperty(o,"__esModule",{value:!0});var i={LOAD_ENDED:"LOAD_ENDED",REFRESH_DAY_DATA:"REFRESH_DAY_DATA",POP_LAYER:"POP_LAYER",SOUND_STATE_CHANGE:"SOUND_STATE_CHANGE",ON_BALL_IN:"ON_BALL_IN",VIT_CHANGE:"VIT_CHANGE",SCENE_SHAKE:"SCENE_SHAKE",ON_BALL_REMOVE:"ON_BALL_REMOVE",ON_SKIN_VIDEO_CHANGE:"ON_SKIN_VIDEO_CHANGE",ON_CAR_SKIN_CHANGE:"ON_CAR_SKIN_CHANGE",PLAY_EFFECT:"PLAY_EFFECT"};o.PPBB_EventMsg=i,window.PPBB_EventMsg=i;var n=function(){function e(){}return e.post=function(e,t,o){if(void 0===o&&(o=!1),null===e)throw"Post:name";if(o){if(this._postNotificationNames.indexOf(e)>=0)return;this._postNotificationNames.push(e)}this._getDelegates(e).forEach(function(e,o){e.forEach(function(e){e.call(o,t)})})},e.register=function(e,t,o,i){if(void 0===i&&(i=!1),null==e)throw"Register:name";if(null==o)throw"Register:method";if(null==t)throw"Register:target";this._addValue(e,t,o),i&&o.call(t)},e.removeRegister=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];"string"==typeof e[0]?this._removeRegister1.apply(this,e):this._removeRegister2.apply(this,e)},e.clear=function(){this._postNotificationNames=[],this._dic.forEach(function(e,t){var o=e;e.size>0?o.forEach(function(e,t){cc.log(t)}):cc.log(t+"----------- 0\u4e2a ---------")})},e._getDelegates=function(e){var t=this._valueOrDefault(this._dic,e);return null!=t?t:[]},e._addValue=function(e,t,o){var i=this._valueOrDefault(this._dic,e);if(null==i&&(i=new Map,this._dic.set(e,i)),null==this._valueOrDefault(i,t))i.set(t,[o]);else{var n=i.get(t);n.push(o),i.set(t,n)}},e._valueOrDefault=function(e,t){return null==e?null:e.has(t)?e.get(t):null},e._removeRegister1=function(e,t,o){if(void 0===t&&(t=null),void 0===o&&(o=null),null===e)throw"RemoveRegister:name";return null!=o?this._removeValue(e,t,o):null!=t?this._removeKey(e,t):this._removeKey(e)},e._removeRegister2=function(e){var t=this;return void 0===e&&(e=null),null!=e&&(this._dic.forEach(function(o,i){var n=o;null!==t._valueOrDefault(n,e)&&n.delete(e)}),!0)},e._removeValue=function(e,t,o){var i=this._valueOrDefault(this._dic,e);if(null==i)return!1;if(null==this._valueOrDefault(i,t))return!1;var n=i.get(t);return n.remove(o),i.set(t,n),!0},e._removeKey1=function(e){return this._dic.delete(e)},e._removeKey2=function(e,t){return null!=this._valueOrDefault(this._dic,e)&&this._dic.delete(t)},e._removeKey=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];1===e.length?this._removeKey1(e[0]):this._removeKey2(e[0],e[1])},e._postNotificationNames=[],e._dic=new Map,e}();o.default=n,window.PPBB_EventCenter=n}