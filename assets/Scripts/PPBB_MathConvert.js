{const e=require;
Math.getRandom=function(){for(var e=0,t=0,o=arguments.length,i=Array(o),n=0;n<o;n++)i[n]=arguments[n];return 1===i.length&&Array.isArray(i[0])?(e=i[0][0],t=i[0][1]):2===i.length&&(e=i[0],t=i[1]),Math.random()*(t-e)+e};Math.getRandomInt=function(){return Math.floor(Math.getRandom.apply(Math,arguments))};Math.getRandomBool=function(){return Math.getRandom(0,1)>.5};Math.getPointLength=function(e){return Math.sqrt(e.x*e.x+e.y*e.y)};Math.dirMin=function(e,t){var o=Math.abs(e);return e/o*Math.min(o,t)};Math.dirMax=function(e,t){var o=Math.abs(e);return e/o*Math.max(o,t)};Math.clamp=function(e,t,o){return e<t?t:e>o?o:e};Math.clamp0_1=function(e){return Math.clamp(e,0,1)};Math.getNormalValue=function(e){return e?e/Math.abs(e):0};Math.addZero=function(e){return e<10?"0"+e:e};Math.getArithmeticSub=function(e,t){return t*e+t*(t-1)*(arguments.length>2&&void 0!==arguments[2]?arguments[2]:1)/2};Math.generateUUID=function(){for(var e=[],t=0;t<256;t++)e[t]=(t<16?"0":"")+t.toString(16);return function(){var t=4294967295*Math.random()|0,o=4294967295*Math.random()|0,i=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(e[255&t]+e[t>>8&255]+e[t>>16&255]+e[t>>24&255]+"-"+e[255&o]+e[o>>8&255]+"-"+e[o>>16&15|64]+e[o>>24&255]+"-"+e[63&i|128]+e[i>>8&255]+"-"+e[i>>16&255]+e[i>>24&255]+e[255&n]+e[n>>8&255]+e[n>>16&255]+e[n>>24&255]).toUpperCase()}}();}