(()=>{"use strict";var e={373:(e,t,i)=>{var r;i.r(t),i.d(t,{URI:()=>s,Utils:()=>n}),(()=>{var e={470:e=>{function t(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function i(e,t){for(var i,r="",s=0,n=-1,o=0,a=0;a<=e.length;++a){if(a<e.length)i=e.charCodeAt(a);else{if(47===i)break;i=47}if(47===i){if(n===a-1||1===o);else if(n!==a-1&&2===o){if(r.length<2||2!==s||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2))if(r.length>2){var h=r.lastIndexOf("/");if(h!==r.length-1){-1===h?(r="",s=0):s=(r=r.slice(0,h)).length-1-r.lastIndexOf("/"),n=a,o=0;continue}}else if(2===r.length||1===r.length){r="",s=0,n=a,o=0;continue}t&&(r.length>0?r+="/..":r="..",s=2)}else r.length>0?r+="/"+e.slice(n+1,a):r=e.slice(n+1,a),s=a-n-1;n=a,o=0}else 46===i&&-1!==o?++o:o=-1}return r}var r={resolve:function(){for(var e,r="",s=!1,n=arguments.length-1;n>=-1&&!s;n--){var o;n>=0?o=arguments[n]:(void 0===e&&(e=process.cwd()),o=e),t(o),0!==o.length&&(r=o+"/"+r,s=47===o.charCodeAt(0))}return r=i(r,!s),s?r.length>0?"/"+r:"/":r.length>0?r:"."},normalize:function(e){if(t(e),0===e.length)return".";var r=47===e.charCodeAt(0),s=47===e.charCodeAt(e.length-1);return 0!==(e=i(e,!r)).length||r||(e="."),e.length>0&&s&&(e+="/"),r?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,i=0;i<arguments.length;++i){var s=arguments[i];t(s),s.length>0&&(void 0===e?e=s:e+="/"+s)}return void 0===e?".":r.normalize(e)},relative:function(e,i){if(t(e),t(i),e===i)return"";if((e=r.resolve(e))===(i=r.resolve(i)))return"";for(var s=1;s<e.length&&47===e.charCodeAt(s);++s);for(var n=e.length,o=n-s,a=1;a<i.length&&47===i.charCodeAt(a);++a);for(var h=i.length-a,c=o<h?o:h,u=-1,l=0;l<=c;++l){if(l===c){if(h>c){if(47===i.charCodeAt(a+l))return i.slice(a+l+1);if(0===l)return i.slice(a+l)}else o>c&&(47===e.charCodeAt(s+l)?u=l:0===l&&(u=0));break}var d=e.charCodeAt(s+l);if(d!==i.charCodeAt(a+l))break;47===d&&(u=l)}var p="";for(l=s+u+1;l<=n;++l)l!==n&&47!==e.charCodeAt(l)||(0===p.length?p+="..":p+="/..");return p.length>0?p+i.slice(a+u):(a+=u,47===i.charCodeAt(a)&&++a,i.slice(a))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var i=e.charCodeAt(0),r=47===i,s=-1,n=!0,o=e.length-1;o>=1;--o)if(47===(i=e.charCodeAt(o))){if(!n){s=o;break}}else n=!1;return-1===s?r?"/":".":r&&1===s?"//":e.slice(0,s)},basename:function(e,i){if(void 0!==i&&"string"!=typeof i)throw new TypeError('"ext" argument must be a string');t(e);var r,s=0,n=-1,o=!0;if(void 0!==i&&i.length>0&&i.length<=e.length){if(i.length===e.length&&i===e)return"";var a=i.length-1,h=-1;for(r=e.length-1;r>=0;--r){var c=e.charCodeAt(r);if(47===c){if(!o){s=r+1;break}}else-1===h&&(o=!1,h=r+1),a>=0&&(c===i.charCodeAt(a)?-1==--a&&(n=r):(a=-1,n=h))}return s===n?n=h:-1===n&&(n=e.length),e.slice(s,n)}for(r=e.length-1;r>=0;--r)if(47===e.charCodeAt(r)){if(!o){s=r+1;break}}else-1===n&&(o=!1,n=r+1);return-1===n?"":e.slice(s,n)},extname:function(e){t(e);for(var i=-1,r=0,s=-1,n=!0,o=0,a=e.length-1;a>=0;--a){var h=e.charCodeAt(a);if(47!==h)-1===s&&(n=!1,s=a+1),46===h?-1===i?i=a:1!==o&&(o=1):-1!==i&&(o=-1);else if(!n){r=a+1;break}}return-1===i||-1===s||0===o||1===o&&i===s-1&&i===r+1?"":e.slice(i,s)},format:function(e){if(null===e||"object"!=typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var i=t.dir||t.root,r=t.base||(t.name||"")+(t.ext||"");return i?i===t.root?i+r:i+"/"+r:r}(0,e)},parse:function(e){t(e);var i={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return i;var r,s=e.charCodeAt(0),n=47===s;n?(i.root="/",r=1):r=0;for(var o=-1,a=0,h=-1,c=!0,u=e.length-1,l=0;u>=r;--u)if(47!==(s=e.charCodeAt(u)))-1===h&&(c=!1,h=u+1),46===s?-1===o?o=u:1!==l&&(l=1):-1!==o&&(l=-1);else if(!c){a=u+1;break}return-1===o||-1===h||0===l||1===l&&o===h-1&&o===a+1?-1!==h&&(i.base=i.name=0===a&&n?e.slice(1,h):e.slice(a,h)):(0===a&&n?(i.name=e.slice(1,o),i.base=e.slice(1,h)):(i.name=e.slice(a,o),i.base=e.slice(a,h)),i.ext=e.slice(o,h)),a>0?i.dir=e.slice(0,a-1):n&&(i.dir="/"),i},sep:"/",delimiter:":",win32:null,posix:null};r.posix=r,e.exports=r}},t={};function i(r){var s=t[r];if(void 0!==s)return s.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,i),n.exports}i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};(()=>{var e;if(i.r(s),i.d(s,{URI:()=>p,Utils:()=>C}),"object"==typeof process)e=!1;else if("object"==typeof navigator){var t=navigator.userAgent;e=t.indexOf("Windows")>=0}var r,n,o=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function i(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),a=/^\w[\w\d+.-]*$/,h=/^\//,c=/^\/\//,u="",l="/",d=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,p=function(){function t(e,t,i,r,s,n){void 0===n&&(n=!1),"object"==typeof e?(this.scheme=e.scheme||u,this.authority=e.authority||u,this.path=e.path||u,this.query=e.query||u,this.fragment=e.fragment||u):(this.scheme=function(e,t){return e||t?e:"file"}(e,n),this.authority=t||u,this.path=function(e,t){switch(e){case"https":case"http":case"file":t?t[0]!==l&&(t=l+t):t=l}return t}(this.scheme,i||u),this.query=r||u,this.fragment=s||u,function(e,t){if(!e.scheme&&t)throw new Error('[UriError]: Scheme is missing: {scheme: "", authority: "'.concat(e.authority,'", path: "').concat(e.path,'", query: "').concat(e.query,'", fragment: "').concat(e.fragment,'"}'));if(e.scheme&&!a.test(e.scheme))throw new Error("[UriError]: Scheme contains illegal characters.");if(e.path)if(e.authority){if(!h.test(e.path))throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(c.test(e.path))throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}(this,n))}return t.isUri=function(e){return e instanceof t||!!e&&"string"==typeof e.authority&&"string"==typeof e.fragment&&"string"==typeof e.path&&"string"==typeof e.query&&"string"==typeof e.scheme&&"string"==typeof e.fsPath&&"function"==typeof e.with&&"function"==typeof e.toString},Object.defineProperty(t.prototype,"fsPath",{get:function(){return y(this,!1)},enumerable:!1,configurable:!0}),t.prototype.with=function(e){if(!e)return this;var t=e.scheme,i=e.authority,r=e.path,s=e.query,n=e.fragment;return void 0===t?t=this.scheme:null===t&&(t=u),void 0===i?i=this.authority:null===i&&(i=u),void 0===r?r=this.path:null===r&&(r=u),void 0===s?s=this.query:null===s&&(s=u),void 0===n?n=this.fragment:null===n&&(n=u),t===this.scheme&&i===this.authority&&r===this.path&&s===this.query&&n===this.fragment?this:new v(t,i,r,s,n)},t.parse=function(e,t){void 0===t&&(t=!1);var i=d.exec(e);return i?new v(i[2]||u,S(i[4]||u),S(i[5]||u),S(i[7]||u),S(i[9]||u),t):new v(u,u,u,u,u)},t.file=function(t){var i=u;if(e&&(t=t.replace(/\\/g,l)),t[0]===l&&t[1]===l){var r=t.indexOf(l,2);-1===r?(i=t.substring(2),t=l):(i=t.substring(2,r),t=t.substring(r)||l)}return new v("file",i,t,u,u)},t.from=function(e){return new v(e.scheme,e.authority,e.path,e.query,e.fragment)},t.prototype.toString=function(e){return void 0===e&&(e=!1),b(this,e)},t.prototype.toJSON=function(){return this},t.revive=function(e){if(e){if(e instanceof t)return e;var i=new v(e);return i._formatted=e.external,i._fsPath=e._sep===f?e.fsPath:null,i}return e},t}(),f=e?1:void 0,v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._formatted=null,t._fsPath=null,t}return o(t,e),Object.defineProperty(t.prototype,"fsPath",{get:function(){return this._fsPath||(this._fsPath=y(this,!1)),this._fsPath},enumerable:!1,configurable:!0}),t.prototype.toString=function(e){return void 0===e&&(e=!1),e?b(this,!0):(this._formatted||(this._formatted=b(this,!1)),this._formatted)},t.prototype.toJSON=function(){var e={$mid:1};return this._fsPath&&(e.fsPath=this._fsPath,e._sep=f),this._formatted&&(e.external=this._formatted),this.path&&(e.path=this.path),this.scheme&&(e.scheme=this.scheme),this.authority&&(e.authority=this.authority),this.query&&(e.query=this.query),this.fragment&&(e.fragment=this.fragment),e},t}(p),g=((n={})[58]="%3A",n[47]="%2F",n[63]="%3F",n[35]="%23",n[91]="%5B",n[93]="%5D",n[64]="%40",n[33]="%21",n[36]="%24",n[38]="%26",n[39]="%27",n[40]="%28",n[41]="%29",n[42]="%2A",n[43]="%2B",n[44]="%2C",n[59]="%3B",n[61]="%3D",n[32]="%20",n);function m(e,t){for(var i=void 0,r=-1,s=0;s<e.length;s++){var n=e.charCodeAt(s);if(n>=97&&n<=122||n>=65&&n<=90||n>=48&&n<=57||45===n||46===n||95===n||126===n||t&&47===n)-1!==r&&(i+=encodeURIComponent(e.substring(r,s)),r=-1),void 0!==i&&(i+=e.charAt(s));else{void 0===i&&(i=e.substr(0,s));var o=g[n];void 0!==o?(-1!==r&&(i+=encodeURIComponent(e.substring(r,s)),r=-1),i+=o):-1===r&&(r=s)}}return-1!==r&&(i+=encodeURIComponent(e.substring(r))),void 0!==i?i:e}function w(e){for(var t=void 0,i=0;i<e.length;i++){var r=e.charCodeAt(i);35===r||63===r?(void 0===t&&(t=e.substr(0,i)),t+=g[r]):void 0!==t&&(t+=e[i])}return void 0!==t?t:e}function y(t,i){var r;return r=t.authority&&t.path.length>1&&"file"===t.scheme?"//".concat(t.authority).concat(t.path):47===t.path.charCodeAt(0)&&(t.path.charCodeAt(1)>=65&&t.path.charCodeAt(1)<=90||t.path.charCodeAt(1)>=97&&t.path.charCodeAt(1)<=122)&&58===t.path.charCodeAt(2)?i?t.path.substr(1):t.path[1].toLowerCase()+t.path.substr(2):t.path,e&&(r=r.replace(/\//g,"\\")),r}function b(e,t){var i=t?w:m,r="",s=e.scheme,n=e.authority,o=e.path,a=e.query,h=e.fragment;if(s&&(r+=s,r+=":"),(n||"file"===s)&&(r+=l,r+=l),n){var c=n.indexOf("@");if(-1!==c){var u=n.substr(0,c);n=n.substr(c+1),-1===(c=u.indexOf(":"))?r+=i(u,!1):(r+=i(u.substr(0,c),!1),r+=":",r+=i(u.substr(c+1),!1)),r+="@"}-1===(c=(n=n.toLowerCase()).indexOf(":"))?r+=i(n,!1):(r+=i(n.substr(0,c),!1),r+=n.substr(c))}if(o){if(o.length>=3&&47===o.charCodeAt(0)&&58===o.charCodeAt(2))(d=o.charCodeAt(1))>=65&&d<=90&&(o="/".concat(String.fromCharCode(d+32),":").concat(o.substr(3)));else if(o.length>=2&&58===o.charCodeAt(1)){var d;(d=o.charCodeAt(0))>=65&&d<=90&&(o="".concat(String.fromCharCode(d+32),":").concat(o.substr(2)))}r+=i(o,!0)}return a&&(r+="?",r+=i(a,!1)),h&&(r+="#",r+=t?h:m(h,!1)),r}function A(e){try{return decodeURIComponent(e)}catch(t){return e.length>3?e.substr(0,3)+A(e.substr(3)):e}}var P=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function S(e){return e.match(P)?e.replace(P,(function(e){return A(e)})):e}var C,x=i(470),O=function(e,t,i){if(i||2===arguments.length)for(var r,s=0,n=t.length;s<n;s++)!r&&s in t||(r||(r=Array.prototype.slice.call(t,0,s)),r[s]=t[s]);return e.concat(r||Array.prototype.slice.call(t))},_=x.posix||x,B="/";!function(e){e.joinPath=function(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];return e.with({path:_.join.apply(_,O([e.path],t,!1))})},e.resolvePath=function(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];var r=e.path,s=!1;r[0]!==B&&(r=B+r,s=!0);var n=_.resolve.apply(_,O([r],t,!1));return s&&n[0]===B&&!e.authority&&(n=n.substring(1)),e.with({path:n})},e.dirname=function(e){if(0===e.path.length||e.path===B)return e;var t=_.dirname(e.path);return 1===t.length&&46===t.charCodeAt(0)&&(t=""),e.with({path:t})},e.basename=function(e){return _.basename(e.path)},e.extname=function(e){return _.extname(e.path)}}(C||(C={}))})(),r=s})();const{URI:s,Utils:n}=r},907:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.registerAudioPreviewSupport=void 0;const r=i(496),s=i(836),n=i(559);class o{constructor(e,t){this.a=e,this.b=t}async openCustomDocument(e){return{uri:e,dispose:()=>{}}}async resolveCustomEditor(e,t){new a(this.a,e.uri,t,this.b)}}o.viewType="vscode.audioPreview";class a extends s.MediaPreview{constructor(e,t,i,r){super(e,t,i,r),this.o=e,this.c(i.webview.onDidReceiveMessage((e=>{switch(e.type){case"reopen-as-text":(0,s.reopenAsText)(t,i.viewColumn)}}))),this.k(),this.l(),this.n()}async m(){const e=Date.now().toString(),t={src:await this.q(this.i,this.h,e)},i=(0,n.getNonce)(),s=this.i.webview.cspSource;return`<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\n\t\x3c!-- Disable pinch zooming --\x3e\n\t<meta name="viewport"\n\t\tcontent="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">\n\n\t<title>Audio Preview</title>\n\n\t<link rel="stylesheet" href="${(0,n.escapeAttribute)(this.r("media","audioPreview.css"))}" type="text/css" media="screen" nonce="${i}">\n\n\t<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src data: ${s}; media-src ${s}; script-src 'nonce-${i}'; style-src ${s} 'nonce-${i}';">\n\t<meta id="settings" data-settings="${(0,n.escapeAttribute)(JSON.stringify(t))}">\n</head>\n<body class="container loading" data-vscode-context='{ "preventDefaultContextMenuItems": true }'>\n\t<div class="loading-indicator"></div>\n\t<div class="loading-error">\n\t\t<p>${r.l10n.t("An error occurred while loading the audio file.")}</p>\n\t\t<a href="#" class="open-file-link">${r.l10n.t("Open file using VS Code's standard text/binary editor?")}</a>\n\t</div>\n\t<script src="${(0,n.escapeAttribute)(this.r("media","audioPreview.js"))}" nonce="${i}"><\/script>\n</body>\n</html>`}async q(e,t,i){return"git"===t.scheme&&0===(await r.workspace.fs.stat(t)).size?null:t.query?e.webview.asWebviewUri(t).toString():e.webview.asWebviewUri(t).with({query:`version=${i}`}).toString()}r(...e){return this.i.webview.asWebviewUri(r.Uri.joinPath(this.o,...e))}}t.registerAudioPreviewSupport=function(e,t){const i=new o(e.extensionUri,t);return r.window.registerCustomEditorProvider(o.viewType,i,{supportsMultipleEditorsPerDocument:!0,webviewOptions:{retainContextWhenHidden:!0}})}},759:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BinarySizeStatusBarEntry=void 0;const r=i(496),s=i(223);class n{static formatSize(e){return e<n.KB?r.l10n.t("{0}B",e):e<n.MB?r.l10n.t("{0}KB",(e/n.KB).toFixed(2)):e<n.GB?r.l10n.t("{0}MB",(e/n.MB).toFixed(2)):e<n.TB?r.l10n.t("{0}GB",(e/n.GB).toFixed(2)):r.l10n.t("{0}TB",(e/n.TB).toFixed(2))}}n.KB=1024,n.MB=n.KB*n.KB,n.GB=n.MB*n.KB,n.TB=n.GB*n.KB;class o extends s.PreviewStatusBarEntry{constructor(){super("status.imagePreview.binarySize",r.l10n.t("Image Binary Size"),r.StatusBarAlignment.Right,100)}show(e,t){"number"==typeof t?super.g(e,n.formatSize(t)):this.hide(e)}}t.BinarySizeStatusBarEntry=o},228:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.registerImagePreviewSupport=t.PreviewManager=void 0;const r=i(496),s=i(836),n=i(559),o=i(396),a=i(197);class h{constructor(e,t,i,r){this.c=e,this.d=t,this.f=i,this.g=r,this.a=new Set}async openCustomDocument(e){return{uri:e,dispose:()=>{}}}async resolveCustomEditor(e,t){const i=new c(this.c,e.uri,t,this.d,this.f,this.g);this.a.add(i),this.h(i),t.onDidDispose((()=>{this.a.delete(i)})),t.onDidChangeViewState((()=>{t.active?this.h(i):this.b!==i||t.active||this.h(void 0)}))}get activePreview(){return this.b}h(e){this.b=e}}h.viewType="imagePreview.previewEditor",t.PreviewManager=h;class c extends s.MediaPreview{constructor(e,t,i,r,n,o){super(e,t,i,n),this.r=e,this.s=r,this.u=o,this.q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAEElEQVR42gEFAPr/AP///wAI/AL+Sr4t6gAAAABJRU5ErkJggg==",this.c(i.webview.onDidReceiveMessage((e=>{switch(e.type){case"size":this.o=e.value,this.n();break;case"zoom":this.p=e.value,this.n();break;case"reopen-as-text":(0,s.reopenAsText)(t,i.viewColumn)}}))),this.c(o.onDidChangeScale((e=>{2===this.f&&this.i.webview.postMessage({type:"setScale",scale:e.scale})}))),this.c(i.onDidChangeViewState((()=>{this.i.webview.postMessage({type:"setActive",value:this.i.active})}))),this.c(i.onDidDispose((()=>{2===this.f&&(this.s.hide(this),this.u.hide(this)),this.f=0}))),this.k(),this.l(),this.n(),this.i.webview.postMessage({type:"setActive",value:this.i.active})}dispose(){super.dispose(),this.s.hide(this),this.u.hide(this)}zoomIn(){2===this.f&&this.i.webview.postMessage({type:"zoomIn"})}zoomOut(){2===this.f&&this.i.webview.postMessage({type:"zoomOut"})}copyImage(){2===this.f&&(this.i.reveal(),this.i.webview.postMessage({type:"copyImage"}))}n(){super.n(),0!==this.f&&(this.i.active?(this.s.show(this,this.o||""),this.u.show(this,this.p||"fit")):(this.s.hide(this),this.u.hide(this)))}async m(){const e=Date.now().toString(),t={src:await this.x(this.i,this.h,e)},i=(0,n.getNonce)(),s=this.i.webview.cspSource;return`<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\n\t\x3c!-- Disable pinch zooming --\x3e\n\t<meta name="viewport"\n\t\tcontent="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">\n\n\t<title>Image Preview</title>\n\n\t<link rel="stylesheet" href="${(0,n.escapeAttribute)(this.y("media","imagePreview.css"))}" type="text/css" media="screen" nonce="${i}">\n\n\t<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src data: ${s}; connect-src ${s}; script-src 'nonce-${i}'; style-src ${s} 'nonce-${i}';">\n\t<meta id="image-preview-settings" data-settings="${(0,n.escapeAttribute)(JSON.stringify(t))}">\n</head>\n<body class="container image scale-to-fit loading" data-vscode-context='{ "preventDefaultContextMenuItems": true }'>\n\t<div class="loading-indicator"></div>\n\t<div class="image-load-error">\n\t\t<p>${r.l10n.t("An error occurred while loading the image.")}</p>\n\t\t<a href="#" class="open-file-link">${r.l10n.t("Open file using VS Code's standard text/binary editor?")}</a>\n\t</div>\n\t<script src="${(0,n.escapeAttribute)(this.y("media","imagePreview.js"))}" nonce="${i}"><\/script>\n</body>\n</html>`}async x(e,t,i){return"git"===t.scheme&&0===(await r.workspace.fs.stat(t)).size?this.q:t.query?e.webview.asWebviewUri(t).toString():e.webview.asWebviewUri(t).with({query:`version=${i}`}).toString()}y(...e){return this.i.webview.asWebviewUri(r.Uri.joinPath(this.r,...e))}}t.registerImagePreviewSupport=function(e,t){const i=[],s=new o.SizeStatusBarEntry;i.push(s);const n=new a.ZoomStatusBarEntry;i.push(n);const c=new h(e.extensionUri,s,t,n);return i.push(r.window.registerCustomEditorProvider(h.viewType,c,{supportsMultipleEditorsPerDocument:!0})),i.push(r.commands.registerCommand("imagePreview.zoomIn",(()=>{c.activePreview?.zoomIn()}))),i.push(r.commands.registerCommand("imagePreview.zoomOut",(()=>{c.activePreview?.zoomOut()}))),i.push(r.commands.registerCommand("imagePreview.copyImage",(()=>{c.activePreview?.copyImage()}))),r.Disposable.from(...i)}},396:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SizeStatusBarEntry=void 0;const r=i(496),s=i(223);class n extends s.PreviewStatusBarEntry{constructor(){super("status.imagePreview.size",r.l10n.t("Image Size"),r.StatusBarAlignment.Right,101)}show(e,t){this.g(e,t)}}t.SizeStatusBarEntry=n},197:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ZoomStatusBarEntry=void 0;const r=i(496),s=i(223),n="_imagePreview.selectZoomLevel";class o extends s.PreviewStatusBarEntry{constructor(){super("status.imagePreview.zoom",r.l10n.t("Image Zoom"),r.StatusBarAlignment.Right,102),this.h=this.c(new r.EventEmitter),this.onDidChangeScale=this.h.event,this.c(r.commands.registerCommand(n,(async()=>{const e=[10,5,2,1,.5,.2,"fit"].map((e=>({label:this.i(e),scale:e}))),t=await r.window.showQuickPick(e,{placeHolder:r.l10n.t("Select zoom level")});t&&this.h.fire({scale:t.scale})}))),this.f.command=n}show(e,t){this.g(e,this.i(t))}i(e){return"fit"===e?r.l10n.t("Whole Image"):`${Math.round(100*e)}%`}}t.ZoomStatusBarEntry=o},836:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MediaPreview=t.reopenAsText=void 0;const r=i(496),s=i(373),n=i(153);t.reopenAsText=function(e,t){r.commands.executeCommand("vscode.openWith",e,"default",t)};class o extends n.Disposable{constructor(e,t,i,n){super(),this.h=t,this.i=i,this.j=n,this.f=1,i.webview.options={enableScripts:!0,enableForms:!1,localResourceRoots:[s.Utils.dirname(t),e]},this.c(i.onDidChangeViewState((()=>{this.n()}))),this.c(i.onDidDispose((()=>{this.f=0,this.dispose()})));const o=this.c(r.workspace.createFileSystemWatcher(new r.RelativePattern(t,"*")));this.c(o.onDidChange((e=>{e.toString()===this.h.toString()&&(this.k(),this.l())}))),this.c(o.onDidDelete((e=>{e.toString()===this.h.toString()&&this.i.dispose()})))}dispose(){super.dispose(),this.j.hide(this)}k(){r.workspace.fs.stat(this.h).then((({size:e})=>{this.g=e,this.n()}))}async l(){if(0===this.f)return;const e=await this.m();0!==this.f&&(this.i.webview.html=e)}n(){0!==this.f&&(this.i.active?(this.f=2,this.j.show(this,this.g)):(this.j.hide(this),this.f=1))}}t.MediaPreview=o},223:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PreviewStatusBarEntry=void 0;const r=i(496),s=i(153);class n extends s.Disposable{constructor(e,t,i,s){super(),this.f=this.c(r.window.createStatusBarItem(e,i,s)),this.f.name=t}g(e,t){this.e=e,this.f.text=t,this.f.show()}hide(e){e===this.e&&(this.f.hide(),this.e=void 0)}}t.PreviewStatusBarEntry=n},153:(e,t)=>{function i(e){for(;e.length;){const t=e.pop();t&&t.dispose()}}Object.defineProperty(t,"__esModule",{value:!0}),t.Disposable=t.disposeAll=void 0,t.disposeAll=i,t.Disposable=class{constructor(){this.a=!1,this.b=[]}dispose(){this.a||(this.a=!0,i(this.b))}c(e){return this.a?e.dispose():this.b.push(e),e}get d(){return this.a}}},559:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getNonce=t.escapeAttribute=void 0,t.escapeAttribute=function(e){return e.toString().replace(/"/g,"&quot;")},t.getNonce=function(){let e="";const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let i=0;i<64;i++)e+=t.charAt(Math.floor(Math.random()*t.length));return e}},787:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.registerVideoPreviewSupport=void 0;const r=i(496),s=i(836),n=i(559);class o{constructor(e,t){this.a=e,this.b=t}async openCustomDocument(e){return{uri:e,dispose:()=>{}}}async resolveCustomEditor(e,t){new a(this.a,e.uri,t,this.b)}}o.viewType="vscode.videoPreview";class a extends s.MediaPreview{constructor(e,t,i,r){super(e,t,i,r),this.o=e,this.c(i.webview.onDidReceiveMessage((e=>{switch(e.type){case"reopen-as-text":(0,s.reopenAsText)(t,i.viewColumn)}}))),this.k(),this.l(),this.n()}async m(){const e=Date.now().toString(),t={src:await this.q(this.i,this.h,e)},i=(0,n.getNonce)(),s=this.i.webview.cspSource;return`<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\n\t\x3c!-- Disable pinch zooming --\x3e\n\t<meta name="viewport"\n\t\tcontent="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">\n\n\t<title>Video Preview</title>\n\n\t<link rel="stylesheet" href="${(0,n.escapeAttribute)(this.r("media","videoPreview.css"))}" type="text/css" media="screen" nonce="${i}">\n\n\t<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src data: ${s}; media-src ${s}; script-src 'nonce-${i}'; style-src ${s} 'nonce-${i}';">\n\t<meta id="settings" data-settings="${(0,n.escapeAttribute)(JSON.stringify(t))}">\n</head>\n<body class="loading" data-vscode-context='{ "preventDefaultContextMenuItems": true }'>\n\t<div class="loading-indicator"></div>\n\t<div class="loading-error">\n\t\t<p>${r.l10n.t("An error occurred while loading the video file.")}</p>\n\t\t<a href="#" class="open-file-link">${r.l10n.t("Open file using VS Code's standard text/binary editor?")}</a>\n\t</div>\n\t<script src="${(0,n.escapeAttribute)(this.r("media","videoPreview.js"))}" nonce="${i}"><\/script>\n</body>\n</html>`}async q(e,t,i){return"git"===t.scheme&&0===(await r.workspace.fs.stat(t)).size?null:t.query?e.webview.asWebviewUri(t).toString():e.webview.asWebviewUri(t).with({query:`version=${i}`}).toString()}r(...e){return this.i.webview.asWebviewUri(r.Uri.joinPath(this.o,...e))}}t.registerVideoPreviewSupport=function(e,t){const i=new o(e.extensionUri,t);return r.window.registerCustomEditorProvider(o.viewType,i,{supportsMultipleEditorsPerDocument:!0,webviewOptions:{retainContextWhenHidden:!0}})}},496:e=>{e.exports=require("vscode")}},t={};function i(r){var s=t[r];if(void 0!==s)return s.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,i),n.exports}i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{var e=r;Object.defineProperty(e,"__esModule",{value:!0}),e.activate=void 0;const t=i(907),s=i(759),n=i(228),o=i(787);e.activate=function(e){const i=new s.BinarySizeStatusBarEntry;e.subscriptions.push(i),e.subscriptions.push((0,n.registerImagePreviewSupport)(e,i)),e.subscriptions.push((0,t.registerAudioPreviewSupport)(e,i)),e.subscriptions.push((0,o.registerVideoPreviewSupport)(e,i))}})();var s=exports;for(var n in r)s[n]=r[n];r.__esModule&&Object.defineProperty(s,"__esModule",{value:!0})})();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/b19017cea80b6157aa8214c984a70022e77526f2/extensions/media-preview/dist/browser/extension.js.map