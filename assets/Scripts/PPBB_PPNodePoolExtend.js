{const o=exports;
const e=require;
Object.defineProperty(o,"__esModule",{value:!0});var i=e("PPBB_PPNodePool"),n=function(){function e(e,t){void 0===e&&(e=0),this.myPrefab=null,this.type=0,this.parent=null,this.component=t,this.type=e,this.myPool=0===e?new cc.NodePool(t):new i.default(t)}return e.prototype.create=function(e,t,o){var i;void 0===t&&(t=0),this.myPrefab=e;for(var n=0;n<t;n++)i=cc.instantiate(e),1===this.type&&o&&(i.parent=o,this.parent=o),this.myPool.put(i)},e.prototype.size=function(){return this.myPool.size()},e.prototype.get=function(){if(this.myPool.size()<=0){var e=cc.instantiate(this.myPrefab);return this.parent&&(e.parent=this.parent),e}return this.myPool.get()},e.prototype.getWithComponent=function(){return this.component?(this.component,this.get().getComponent(this.component)):null},e.prototype.put=function(e){this.myPool.put(e)},e.prototype.clear=function(){this.myPool.clear()},e}();o.default=n}