{const o=exports;
const e=require;
Object.defineProperty(o,"__esModule",{value:!0}),cc.macro.ENABLE_WEBGL_ANTIALIAS=!0;var i=function(){function e(){this.x=null,this.y=null,this.radius=0,this.graphics=null}return Object.defineProperty(e.prototype,"xy",{get:function(){return null===this.x||null===this.y?null:cc.v2(this.x,this.y)},set:function(e){this.x=e.x,this.y=e.y},enumerable:!0,configurable:!0}),e.prototype.draw=function(e){var t=!1;null!==this.x&&null!==this.y||(this.x=e.x,this.y=e.y,t=!0),this.radius=e.radius||this.radius;var o=this.x,i=this.y,n=this.x,a=this.y;return"number"==typeof e.x&&(n=e.x),"number"==typeof e.y&&(a=e.y),this.graphics=e.graphics,this.drawLine(e.graphics,o,i,n,a,t)},e.prototype.drawLine=function(e,t,o,i,n,a){var s=cc.v2(i,n).sub(cc.v2(t,o)),r=s.magSqr(),c=this.radius/5,l=[];if(r>=c*c){var h=Math.sqrt(r),d=Math.ceil(h/c);if(d>0)for(var u=s.normalize(),p=cc.v2(t,o),f=0;f<d;f++)this.drawCirclePoint(e,p.x,p.y,this.radius),this.x=p.x,this.y=p.y,l.push(cc.v2(p.x,p.y)),p=p.add(u.mul(c))}return a&&(this.drawCirclePoint(e,t,o,this.radius),l.push(cc.v2(t,o))),l},e.prototype.drawCirclePoint=function(e,t,o,i){for(var n=function(e,t,o){for(var i=[],n=2*Math.PI/o,a=0;a<o;++a){var s=cc.v2(t.x*Math.cos(n*a)+e.x,t.y*Math.sin(n*a)+e.y);i.push(s)}return i}(cc.v2(t,o),cc.v2(i,i),32),a=0;a<n.length;++a){var s=n[a];0===a?e.moveTo(s.x,s.y):e.lineTo(s.x,s.y)}e.lineCap=cc.Graphics.LineCap.ROUND,e.lineJoin=cc.Graphics.LineJoin.ROUND,e.close(),e.fill(),e.stroke()},e.prototype.apply=function(){this.x=null,this.y=null},e.prototype.clear=function(){this.graphics&&this.graphics.clear()},e}();o.default=i}