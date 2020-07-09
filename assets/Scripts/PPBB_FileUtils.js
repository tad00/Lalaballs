{const o=exports;
const e=require;
Object.defineProperty(o,"__esModule",{value:!0});var i=function(){function e(){}return e.resetResourceData=function(){this.ResourcesData={Config:{},Texture:{},Sound:{},Prefab:{},Font:{},Others:{}}},e.getLoadUrl=function(e,t){var o=this._getRealUrl(e,t,!1);return o?this._getUrlWithoutAsp(o):null},e.getSpriteFrameAsync=function(e,t,o){var i=this.getLoadUrl(e,"image");this.getResAsync(i,cc.SpriteFrame,t,o)},e.getSoundAsync=function(e,t,o){var i=this.getLoadUrl(e,"sound");this.getResAsync(i,cc.AudioClip,t,o)},e.getConfigAsync=function(e,t,o){var i=this.getLoadUrl(e,"config");this.getResAsync(i,cc.JsonAsset,t,o)},e.getPrefabAsync=function(e,t,o){var i=this.getLoadUrl(e,"prefab");this.getResAsync(i,cc.Prefab,t,o)},e.getSkeAsync=function(e,t,o,i){var n=this.getLoadUrl(e,"ske"),a=this.getLoadUrl(t,"ske"),s=null,r=null,c=function(){s&&r&&o&&o([s,r])};this.getResAsync(n,dragonBones.DragonBonesAsset,function(e){s=e,c()},i),this.getResAsync(a,dragonBones.DragonBonesAtlasAsset,function(e){r=e,c()},i)},e.getResOthersAsync=function(e,t,o,i){this.getResAsync(e,t,o,i)},e.getResAsync=function(e,t,o,i){var n,a,s=this._getSimpleUrlWithoutAsp(e);switch(t){case cc.SpriteFrame:n=this.getTextureByName(s),a="Texture";break;case cc.AudioClip:n=this.getSoundByName(s),a="Sound";break;case cc.JsonAsset:n=this.getConfigByName(s),a="Config";break;case cc.Prefab:n=this.getPrefabByName(s),a="Prefab";break;default:n=this.getResourceByName(s),a="Others"}if(null===n){var r=this;this.loadResourceAsync(e,t,function(e){r.ResourcesData[a][s]=e,o&&o(e)},i)}else o&&o(n)},e.getSpriteFramePromise=function(e){var t=this,o=this.getLoadUrl(e,"image");return new Promise(function(e,i){t.getResAsync(o,cc.SpriteFrame,function(t){e(t)},function(e){i(e)})})},e.getSoundPromise=function(e){var t=this,o=this.getLoadUrl(e,"sound");return new Promise(function(e,i){t.getResAsync(o,cc.AudioClip,function(t){e(t)},function(e){i(e)})})},e.getConfigPromise=function(e){var t=this,o=this.getLoadUrl(e,"config");return new Promise(function(e,i){t.getResAsync(o,cc.TextAsset,function(t){e(t)},function(e){i(e)})})},e.getPrefabPromise=function(e){var t=this,o=this.getLoadUrl(e,"prefab");return new Promise(function(e,i){t.getResAsync(o,cc.Prefab,function(t){e(t)},function(e){i(e)})})},e.getTextureByName=function(e){return this.ResourcesData.Texture[e]?this.ResourcesData.Texture[e]:null},e.getConfigByName=function(e){return this.ResourcesData.Config[e]?this.ResourcesData.Config[e]:null},e.getSoundByName=function(e){return this.ResourcesData.Sound[e]?this.ResourcesData.Sound[e]:null},e.getPrefabByName=function(e){return this.ResourcesData.Prefab[e]?this.ResourcesData.Prefab[e]:null},e.getResourceByName=function(e){return this.ResourcesData[e]?this.ResourcesData[e]:null},e.loadResourceAsync=function(e,t,o,i){cc.loader.loadRes(e,t,function(t,n){if(t)return cc.error(t),void(i&&i(t));n?o&&o(n):(cc.error("asset not exist\uff1a",e),i&&i())})},e._getRealUrl=function(e,t,o){return e&&""!==e?(e.indexOf("/"+t)<0&&(e=t+"/"+e),o&&e.indexOf("resources")<0&&(e="resources/"+e),e):null},e.getSimpleUrlWithoutAsp=function(e){return this._getSimpleUrlWithoutAsp(e)},e.getUrlWithoutAsp=function(e){return this._getUrlWithoutAsp(e)},e.getSimpleUrl=function(e){return this._getSimpleUrl(e)},e._getSimpleUrl=function(e){return e.split("/").pop()},e._getSimpleUrlWithoutAsp=function(e){var t=this._getSimpleUrl(e);return this._getUrlWithoutAsp(t)},e._getUrlWithoutAsp=function(e){var t=e.lastIndexOf(".");return t>=0?e.substring(0,t):e},e.ResourcesData={Config:{},Texture:{},Sound:{},Prefab:{},Font:{},Others:{}},e}();o.default=i,window.PPBB_FileUtils=i}