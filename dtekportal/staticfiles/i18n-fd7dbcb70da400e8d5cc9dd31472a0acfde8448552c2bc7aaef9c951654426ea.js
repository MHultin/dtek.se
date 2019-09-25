!function(e,t){"function"==typeof define&&define.amd?define("i18n",function(){return t(e)}):"object"==typeof module&&module.exports?module.exports=t(e):e.I18n=t(e)}(this,function(e){"use strict";var t=e&&e.I18n||{},r=Array.prototype.slice,n=function(e){return("0"+e.toString()).substr(-2)},i=function(e,t){return f("round",e,-t).toFixed(t)},a=function(e){var t=typeof e;return"function"===t||"object"===t},o=function(e){return"function"==typeof e},l=function(e){return void 0!==e&&null!==e},u=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)},s=function(e){return"string"==typeof value||"[object String]"===Object.prototype.toString.call(e)},c=function(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)},p=function(e){return!0===e||!1===e},f=function(e,t,r){return void 0===r||0==+r?Math[e](t):(t=+t,r=+r,isNaN(t)||"number"!=typeof r||r%1!=0?NaN:(t=t.toString().split("e"),t=Math[e](+(t[0]+"e"+(t[1]?+t[1]-r:-r))),t=t.toString().split("e"),+(t[0]+"e"+(t[1]?+t[1]+r:r))))},h=function(e,t){return o(e)?e(t):e},d=function(e,t){var r,n;for(r in t)t.hasOwnProperty(r)&&(n=t[r],s(n)||c(n)||p(n)?e[r]=n:(null==e[r]&&(e[r]={}),d(e[r],n)));return e},m={day_names:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],abbr_day_names:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],month_names:[null,"January","February","March","April","May","June","July","August","September","October","November","December"],abbr_month_names:[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],meridian:["AM","PM"]},g={precision:3,separator:".",delimiter:",",strip_insignificant_zeros:!1},b={unit:"$",precision:2,format:"%u%n",sign_first:!0,delimiter:",",separator:"."},y={unit:"%",precision:3,format:"%n%u",separator:".",delimiter:""},v=[null,"kb","mb","gb","tb"],S={defaultLocale:"en",locale:"en",defaultSeparator:".",placeholder:/(?:\{\{|%\{)(.*?)(?:\}\}?)/gm,fallbacks:!1,translations:{},missingBehaviour:"message",missingTranslationPrefix:""};return t.reset=function(){var e;for(e in S)this[e]=S[e]},t.initializeOptions=function(){var e;for(e in S)l(this[e])||(this[e]=S[e])},t.initializeOptions(),t.locales={},t.locales.get=function(e){var r=this[e]||this[t.locale]||this["default"];return o(r)&&(r=r(e)),!1===u(r)&&(r=[r]),r},t.locales["default"]=function(e){var r=[],n=[];return e&&r.push(e),!e&&t.locale&&r.push(t.locale),t.fallbacks&&t.defaultLocale&&r.push(t.defaultLocale),r.forEach(function(e){var r=e.split("-"),i=null,a=null;3===r.length?(i=r[0],a=[r[0],r[1]].join("-")):2===r.length&&(i=r[0]),-1===n.indexOf(e)&&n.push(e),t.fallbacks&&[i,a].forEach(function(t){void 0!==t&&null!==t&&t!==e&&-1===n.indexOf(t)&&n.push(t)})}),r.length||r.push("en"),n},t.pluralization={},t.pluralization.get=function(e){return this[e]||this[t.locale]||this["default"]},t.pluralization["default"]=function(e){switch(e){case 0:return["zero","other"];case 1:return["one"];default:return["other"]}},t.currentLocale=function(){return this.locale||this.defaultLocale},t.isSet=l,t.lookup=function(e,t){t=t||{};var r,n,i,a,o=this.locales.get(t.locale).slice();o[0];for(i=this.getFullScope(e,t);o.length;)if(r=o.shift(),n=i.split(this.defaultSeparator),a=this.translations[r]){for(;n.length&&(a=a[n.shift()])!==undefined&&null!==a;);if(a!==undefined&&null!==a)return a}if(l(t.defaultValue))return h(t.defaultValue,e)},t.pluralizationLookupWithoutFallback=function(e,t,r){var n,i,o=this.pluralization.get(t),u=o(e);if(a(r))for(;u.length;)if(n=u.shift(),l(r[n])){i=r[n];break}return i},t.pluralizationLookup=function(e,t,r){r=r||{};var n,i,o,u,s=this.locales.get(r.locale).slice();s[0];for(t=this.getFullScope(t,r);s.length;)if(n=s.shift(),i=t.split(this.defaultSeparator),o=this.translations[n]){for(;i.length&&(o=o[i.shift()],a(o));)0==i.length&&(u=this.pluralizationLookupWithoutFallback(e,n,o));if(null!=u&&u!=undefined)break}return null!=u&&u!=undefined||l(r.defaultValue)&&(u=a(r.defaultValue)?this.pluralizationLookupWithoutFallback(e,r.locale,r.defaultValue):r.defaultValue,o=r.defaultValue),{message:u,translations:o}},t.meridian=function(){var e=this.lookup("time"),t=this.lookup("date");return e&&e.am&&e.pm?[e.am,e.pm]:t&&t.meridian?t.meridian:m.meridian},t.prepareOptions=function(){for(var e,t=r.call(arguments),n={};t.length;)if("object"==typeof(e=t.shift()))for(var i in e)e.hasOwnProperty(i)&&(l(n[i])||(n[i]=e[i]));return n},t.createTranslationOptions=function(e,t){var r=[{scope:e}];return l(t.defaults)&&(r=r.concat(t.defaults)),l(t.defaultValue)&&r.push({message:t.defaultValue}),r},t.translate=function(e,t){t=t||{};var r,n=this.createTranslationOptions(e,t),i=this.prepareOptions(t);return delete i.defaultValue,n.some(function(t){if(l(t.scope)?r=this.lookup(t.scope,i):l(t.message)&&(r=h(t.message,e)),r!==undefined&&null!==r)return!0},this)?("string"==typeof r?r=this.interpolate(r,t):a(r)&&l(t.count)&&(r=this.pluralize(t.count,e,t)),r):this.missingTranslation(e,t)},t.interpolate=function(e,t){t=t||{};var r,n,i,a,o=e.match(this.placeholder);if(!o)return e;for(var n;o.length;)r=o.shift(),i=r.replace(this.placeholder,"$1"),n=l(t[i])?t[i].toString().replace(/\$/gm,"_#$#_"):i in t?this.nullPlaceholder(r,e,t):this.missingPlaceholder(r,e,t),a=new RegExp(r.replace(/\{/gm,"\\{").replace(/\}/gm,"\\}")),e=e.replace(a,n);return e.replace(/_#\$#_/g,"$")},t.pluralize=function(e,t,r){r=this.prepareOptions({count:String(e)},r);var n,i;return i=this.pluralizationLookup(e,t,r),i.translations==undefined||null==i.translations?this.missingTranslation(t,r):i.message!=undefined&&null!=i.message?this.interpolate(i.message,r):(n=this.pluralization.get(r.locale),this.missingTranslation(t+"."+n(e)[0],r))},t.missingTranslation=function(e,t){if("guess"==this.missingBehaviour){var r=e.split(".").slice(-1)[0];return(this.missingTranslationPrefix.length>0?this.missingTranslationPrefix:"")+r.replace("_"," ").replace(/([a-z])([A-Z])/g,function(e,t,r){return t+" "+r.toLowerCase()})}return'[missing "'+[null!=t&&null!=t.locale?t.locale:this.currentLocale(),this.getFullScope(e,t)].join(this.defaultSeparator)+'" translation]'},t.missingPlaceholder=function(e){return"[missing "+e+" value]"},t.nullPlaceholder=function(){return t.missingPlaceholder.apply(t,arguments)},t.toNumber=function(e,t){t=this.prepareOptions(t,this.lookup("number.format"),g);var r,n,a=e<0,o=i(Math.abs(e),t.precision).toString(),l=o.split("."),u=[],s=t.format||"%n",c=a?"-":"";for(e=l[0],r=l[1];e.length>0;)u.unshift(e.substr(Math.max(0,e.length-3),3)),e=e.substr(0,e.length-3);return n=u.join(t.delimiter),t.strip_insignificant_zeros&&r&&(r=r.replace(/0+$/,"")),t.precision>0&&r&&(n+=t.separator+r),s=t.sign_first?"%s"+s:s.replace("%n","%s%n"),n=s.replace("%u",t.unit).replace("%n",n).replace("%s",c)},t.toCurrency=function(e,t){return t=this.prepareOptions(t,this.lookup("number.currency.format"),this.lookup("number.format"),b),this.toNumber(e,t)},t.localize=function(e,t,r){switch(r||(r={}),e){case"currency":return this.toCurrency(t);case"number":return e=this.lookup("number.format"),this.toNumber(t,e);case"percentage":return this.toPercentage(t);default:var n;return n=e.match(/^(date|time)/)?this.toTime(e,t):t.toString(),this.interpolate(n,r)}},t.parseDate=function(e){var t,r,n;if("object"==typeof e)return e;if(t=e.toString().match(/(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2}):(\d{2})([\.,]\d{1,3})?)?(Z|\+00:?00)?/)){for(var i=1;i<=6;i++)t[i]=parseInt(t[i],10)||0;t[2]-=1,n=t[7]?1e3*("0"+t[7]):null,r=t[8]?new Date(Date.UTC(t[1],t[2],t[3],t[4],t[5],t[6],n)):new Date(t[1],t[2],t[3],t[4],t[5],t[6],n)}else"number"==typeof e?(r=new Date,r.setTime(e)):e.match(/([A-Z][a-z]{2}) ([A-Z][a-z]{2}) (\d+) (\d+:\d+:\d+) ([+-]\d+) (\d+)/)?(r=new Date,r.setTime(Date.parse([RegExp.$1,RegExp.$2,RegExp.$3,RegExp.$6,RegExp.$4,RegExp.$5].join(" ")))):(e.match(/\d+ \d+:\d+:\d+ [+-]\d+ \d+/),r=new Date,r.setTime(Date.parse(e)));return r},t.strftime=function(e,r){var i=this.lookup("date"),a=t.meridian();if(i||(i={}),i=this.prepareOptions(i,m),isNaN(e.getTime()))throw new Error("I18n.strftime() requires a valid date object, but received an invalid date.");var o=e.getDay(),l=e.getDate(),u=e.getFullYear(),s=e.getMonth()+1,c=e.getHours(),p=c,f=c>11?1:0,h=e.getSeconds(),d=e.getMinutes(),g=e.getTimezoneOffset(),b=Math.floor(Math.abs(g/60)),y=Math.abs(g)-60*b,v=(g>0?"-":"+")+(b.toString().length<2?"0"+b:b)+(y.toString().length<2?"0"+y:y);return p>12?p-=12:0===p&&(p=12),r=r.replace("%a",i.abbr_day_names[o]),r=r.replace("%A",i.day_names[o]),r=r.replace("%b",i.abbr_month_names[s]),r=r.replace("%B",i.month_names[s]),r=r.replace("%d",n(l)),r=r.replace("%e",l),r=r.replace("%-d",l),r=r.replace("%H",n(c)),r=r.replace("%-H",c),r=r.replace("%I",n(p)),r=r.replace("%-I",p),r=r.replace("%m",n(s)),r=r.replace("%-m",s),r=r.replace("%M",n(d)),r=r.replace("%-M",d),r=r.replace("%p",a[f]),r=r.replace("%S",n(h)),r=r.replace("%-S",h),r=r.replace("%w",o),r=r.replace("%y",n(u)),r=r.replace("%-y",n(u).replace(/^0+/,"")),r=r.replace("%Y",u),r=r.replace("%z",v)},t.toTime=function(e,t){var r=this.parseDate(t),n=this.lookup(e);return r.toString().match(/invalid/i)?r.toString():n?this.strftime(r,n):r.toString()},t.toPercentage=function(e,t){return t=this.prepareOptions(t,this.lookup("number.percentage.format"),this.lookup("number.format"),y),this.toNumber(e,t)},t.toHumanSize=function(e,t){for(var r,n,i=1024,a=e,o=0;a>=i&&o<4;)a/=i,o+=1;return 0===o?(r=this.t("number.human.storage_units.units.byte",{count:a}),n=0):(r=this.t("number.human.storage_units.units."+v[o]),n=a-Math.floor(a)==0?0:1),t=this.prepareOptions(t,{unit:r,precision:n,format:"%n%u",delimiter:""}),this.toNumber(a,t)},t.getFullScope=function(e,t){return t=t||{},u(e)&&(e=e.join(this.defaultSeparator)),t.scope&&(e=[t.scope,e].join(this.defaultSeparator)),e},t.extend=function(e,t){return void 0===e&&void 0===t?{}:d(e,t)},t.t=t.translate,t.l=t.localize,t.p=t.pluralize,t});