(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"2SVd":function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},"5oMp":function(e,t,r){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},"9eSz":function(e,t,r){"use strict";var a=r("TqRt");t.__esModule=!0,t.default=void 0;var n,i=a(r("PJYZ")),o=a(r("VbXa")),s=a(r("8OQS")),c=a(r("pVnL")),u=a(r("q1tI")),l=a(r("17x9")),d=function(e){var t=(0,c.default)({},e),r=t.resolutions,a=t.sizes,n=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed,a=m(t||r||[]);return a&&a.src},m=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},h=Object.create({}),g=function(e){var t=d(e),r=p(t);return h[r]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,x=new WeakMap;function S(e){return e.map((function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return u.default.createElement(u.default.Fragment,{key:t},a&&u.default.createElement("source",{type:"image/webp",media:n,srcSet:a,sizes:i}),r&&u.default.createElement("source",{media:n,srcSet:r,sizes:i}))}))}function w(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function E(e){return e.map((function(e){var t=e.src,r=e.media,a=e.tracedSVG;return u.default.createElement("source",{key:t,media:r,srcSet:a})}))}function R(e){return e.map((function(e){var t=e.src,r=e.media,a=e.base64;return u.default.createElement("source",{key:t,media:r,srcSet:a})}))}function L(e,t){var r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?a:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var N=function(e,t){var r=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(x.has(e.target)){var t=x.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),x.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return r&&(r.observe(e),x.set(e,t)),function(){r.unobserve(e),x.delete(e)}},C=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",u=e.loading?'loading="'+e.loading+'" ':"",l=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+u+o+s+r+a+t+i+n+c+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},j=u.default.forwardRef((function(e,t){var r=e.src,a=e.imageVariants,n=e.generateSources,i=e.spreadProps,o=e.ariaHidden,s=u.default.createElement(O,(0,c.default)({ref:t,src:r},i,{ariaHidden:o}));return a.length>1?u.default.createElement("picture",null,n(a),s):s})),O=u.default.forwardRef((function(e,t){var r=e.sizes,a=e.srcSet,n=e.src,i=e.style,o=e.onLoad,l=e.onError,d=e.loading,f=e.draggable,p=e.ariaHidden,m=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return u.default.createElement("img",(0,c.default)({"aria-hidden":p,sizes:r,srcSet:a,src:n},m,{onLoad:o,onError:l,ref:t,loading:d,draggable:f,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));O.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var T=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=v&&g(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!b&&y&&!r.isCritical&&!r.seenBefore;var a=r.isCritical||v&&(b||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=u.default.createRef(),r.placeholderRef=t.placeholderRef||u.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=N(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=d(e),(r=p(t))&&(h[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=d(this.props),t=e.title,r=e.alt,a=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,l=e.placeholderStyle,f=void 0===l?{}:l,p=e.placeholderClassName,h=e.fluid,g=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,x=e.itemProp,w=e.loading,L=e.draggable,N=h||g;if(!N)return null;var T=!1===this.state.fadeIn||this.state.imgLoaded,k=!0===this.state.fadeIn&&!this.state.imgCached,B=(0,c.default)({opacity:T?1:0,transition:k?"opacity "+v+"ms":"none"},s),I="boolean"==typeof b?"lightgray":b,U={transitionDelay:v+"ms"},z=(0,c.default)({opacity:this.state.imgLoaded?0:1},k&&U,s,f),A={title:t,alt:this.state.isVisible?"":r,style:z,className:p,itemProp:x},P=this.state.isHydrated?m(N):N[0];if(h)return u.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden",maxWidth:P.maxWidth?P.maxWidth+"px":null,maxHeight:P.maxHeight?P.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},u.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),I&&u.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:I,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},k&&U)}),P.base64&&u.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:A,imageVariants:N,generateSources:R}),P.tracedSVG&&u.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:A,imageVariants:N,generateSources:E}),this.state.isVisible&&u.default.createElement("picture",null,S(N),u.default.createElement(O,{alt:r,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:B,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x,loading:w,draggable:L})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,c.default)({alt:r,title:t,loading:w},P,{imageVariants:N}))}}));if(g){var V=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},i);return"inherit"===i.display&&delete V.display,u.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:V,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},I&&u.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:I,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},k&&U)}),P.base64&&u.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:A,imageVariants:N,generateSources:R}),P.tracedSVG&&u.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:A,imageVariants:N,generateSources:E}),this.state.isVisible&&u.default.createElement("picture",null,S(N),u.default.createElement(O,{alt:r,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:B,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x,loading:w,draggable:L})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,c.default)({alt:r,title:t,loading:w},P,{imageVariants:N}))}}))}return null},t}(u.default.Component);T.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var k=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string}),B=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string,maxWidth:l.default.number,maxHeight:l.default.number});function I(e){return function(t,r,a){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+a+"`, but their values are both `undefined`.");l.default.checkPropTypes(((n={})[r]=e,n),t,"prop",a)}}T.propTypes={resolutions:k,sizes:B,fixed:I(l.default.oneOfType([k,l.default.arrayOf(k)])),fluid:I(l.default.oneOfType([B,l.default.arrayOf(B)])),fadeIn:l.default.bool,durationFadeIn:l.default.number,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,crossOrigin:l.default.oneOfType([l.default.string,l.default.bool]),style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string,loading:l.default.oneOf(["auto","lazy","eager"]),draggable:l.default.bool};var U=T;t.default=U},"9rSQ":function(e,t,r){"use strict";var a=r("xTJ+");function n(){this.handlers=[]}n.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},n.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},n.prototype.forEach=function(e){a.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=n},CgaS:function(e,t,r){"use strict";var a=r("xTJ+"),n=r("MLWZ"),i=r("9rSQ"),o=r("UnBK"),s=r("SntB");function c(e){this.defaults=e,this.interceptors={request:new i,response:new i}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[o,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},c.prototype.getUri=function(e){return e=s(this.defaults,e),n(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},a.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,r){return this.request(s(r||{},{method:e,url:t,data:(r||{}).data}))}})),a.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,r,a){return this.request(s(a||{},{method:e,url:t,data:r}))}})),e.exports=c},DfZB:function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},H3Je:function(e,t,r){"use strict";var a=r("q1tI"),n=r.n(a),i=r("Wbzz"),o=r("tkMC"),s=r.n(o);r("ZMKu");t.a=function(e){var t=Object(i.useStaticQuery)("3840340844").allFile.nodes,r=[{id:1,name:"Javascript",icon:t[14].publicURL,color:"invert(85%) sepia(92%) saturate(5503%) hue-rotate(339deg) brightness(101%) contrast(94%)"},{id:2,name:"HTML5",icon:t[11].publicURL,color:"invert(40%) sepia(91%) saturate(3148%) hue-rotate(350deg) brightness(94%) contrast(88%)"},{id:3,name:"CSS3",icon:t[3].publicURL,color:"invert(30%) sepia(53%) saturate(4114%) hue-rotate(189deg) brightness(86%) contrast(83%)"},{id:4,name:"ReactJS",icon:t[16].publicURL,color:"invert(84%) sepia(9%) saturate(5802%) hue-rotate(164deg) brightness(103%) contrast(97%)"},{id:5,name:"Gatsby",icon:t[5].publicURL,color:"invert(21%) sepia(20%) saturate(7282%) hue-rotate(256deg) brightness(89%) contrast(87%)"},{id:10,name:"NodeJS",icon:t[15].publicURL,color:"invert(57%) sepia(11%) saturate(3178%) hue-rotate(71deg) brightness(82%) contrast(78%)"},{id:11,name:"Express",icon:t[0].publicURL,color:"invert(100%) sepia(100%) saturate(2%) hue-rotate(284deg) brightness(109%) contrast(101%)"},{id:12,name:"PostgreSQL",icon:t[18].publicURL,color:"invert(35%) sepia(16%) saturate(1807%) hue-rotate(165deg) brightness(96%) contrast(87%)"},{id:7,name:"Sass",icon:t[19].publicURL,color:"invert(68%) sepia(24%) saturate(1937%) hue-rotate(291deg) brightness(83%) contrast(90%)"},{id:13,name:"Postman",icon:t[23].publicURL,color:"invert(61%) sepia(48%) saturate(5075%) hue-rotate(337deg) brightness(105%) contrast(105%)"},{id:14,name:"Git",icon:t[6].publicURL,color:"invert(42%) sepia(51%) saturate(4130%) hue-rotate(343deg) brightness(98%) contrast(92%)"},{id:15,name:"Github",icon:t[7].publicURL,color:"invert(33%) sepia(17%) saturate(5651%) hue-rotate(239deg) brightness(85%) contrast(94%)"},{id:6,name:"Redux",icon:t[20].publicURL,color:"invert(29%) sepia(59%) saturate(1613%) hue-rotate(239deg) brightness(92%) contrast(85%)"},{id:8,name:"React Router",icon:t[17].publicURL,color:"invert(32%) sepia(35%) saturate(1520%) hue-rotate(315deg) brightness(105%) contrast(100%"}].map((function(e){return n.a.createElement("div",{className:s.a.skillBox,key:e.id},n.a.createElement("object",{style:{filter:""+e.color},className:e.name,data:e.icon}),n.a.createElement("h3",{className:s.a.title},e.name))}));return n.a.createElement("div",{name:"skills",id:"skills",className:s.a.skillsView},n.a.createElement("span",{className:s.a.leftBox},r),n.a.createElement("div",{className:s.a.rightBox},n.a.createElement("h1",null,"And more..."),n.a.createElement("a",{target:"_blank",rel:"noreferrer",href:"https://docs.google.com/document/d/1PYtd-zC6tS1CFLWXfxJGD-zNNNW7mYyXOVsuOF_yGZ8/edit?usp=sharing",type:"button"},n.a.createElement("button",null,"My Resume"))))}},HSsa:function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),a=0;a<r.length;a++)r[a]=arguments[a];return e.apply(t,r)}}},JEQr:function(e,t,r){"use strict";(function(t){var a=r("xTJ+"),n=r("yK9s"),i={"Content-Type":"application/x-www-form-urlencoded"};function o(e,t){!a.isUndefined(e)&&a.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,c={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==t&&"[object process]"===Object.prototype.toString.call(t))&&(s=r("tQ2B")),s),transformRequest:[function(e,t){return n(t,"Accept"),n(t,"Content-Type"),a.isFormData(e)||a.isArrayBuffer(e)||a.isBuffer(e)||a.isStream(e)||a.isFile(e)||a.isBlob(e)?e:a.isArrayBufferView(e)?e.buffer:a.isURLSearchParams(e)?(o(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):a.isObject(e)?(o(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},a.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),a.forEach(["post","put","patch"],(function(e){c.headers[e]=a.merge(i)})),e.exports=c}).call(this,r("8oxB"))},LYNF:function(e,t,r){"use strict";var a=r("OH9c");e.exports=function(e,t,r,n,i){var o=new Error(e);return a(o,t,r,n,i)}},Lmem:function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},MEjR:function(e,t,r){e.exports={contactView:"contact-module--contactView--24yMw",formContainer:"contact-module--formContainer--30D2k",form:"contact-module--form--2yzss",formGroup:"contact-module--formGroup--3Nc8d",buttonBox:"contact-module--buttonBox--1nR24",submitButton:"contact-module--submitButton--WsnUu",line:"contact-module--line--J4QmD",photo:"contact-module--photo--26xzb"}},MLWZ:function(e,t,r){"use strict";var a=r("xTJ+");function n(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var i;if(r)i=r(t);else if(a.isURLSearchParams(t))i=t.toString();else{var o=[];a.forEach(t,(function(e,t){null!=e&&(a.isArray(e)?t+="[]":e=[e],a.forEach(e,(function(e){a.isDate(e)?e=e.toISOString():a.isObject(e)&&(e=JSON.stringify(e)),o.push(n(t)+"="+n(e))})))})),i=o.join("&")}if(i){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},OH9c:function(e,t,r){"use strict";e.exports=function(e,t,r,a,n){return e.config=t,r&&(e.code=r),e.request=a,e.response=n,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},OTTw:function(e,t,r){"use strict";var a=r("xTJ+");e.exports=a.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function n(e){var a=e;return t&&(r.setAttribute("href",a),a=r.href),r.setAttribute("href",a),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=n(window.location.href),function(t){var r=a.isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},"Rn+g":function(e,t,r){"use strict";var a=r("LYNF");e.exports=function(e,t,r){var n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(a("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},SntB:function(e,t,r){"use strict";var a=r("xTJ+");e.exports=function(e,t){t=t||{};var r={},n=["url","method","data"],i=["headers","auth","proxy","params"],o=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function c(e,t){return a.isPlainObject(e)&&a.isPlainObject(t)?a.merge(e,t):a.isPlainObject(t)?a.merge({},t):a.isArray(t)?t.slice():t}function u(n){a.isUndefined(t[n])?a.isUndefined(e[n])||(r[n]=c(void 0,e[n])):r[n]=c(e[n],t[n])}a.forEach(n,(function(e){a.isUndefined(t[e])||(r[e]=c(void 0,t[e]))})),a.forEach(i,u),a.forEach(o,(function(n){a.isUndefined(t[n])?a.isUndefined(e[n])||(r[n]=c(void 0,e[n])):r[n]=c(void 0,t[n])})),a.forEach(s,(function(a){a in t?r[a]=c(e[a],t[a]):a in e&&(r[a]=c(void 0,e[a]))}));var l=n.concat(i).concat(o).concat(s),d=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===l.indexOf(e)}));return a.forEach(d,u),r}},UnBK:function(e,t,r){"use strict";var a=r("xTJ+"),n=r("xAGQ"),i=r("Lmem"),o=r("JEQr");function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return s(e),e.headers=e.headers||{},e.data=n(e.data,e.headers,e.transformRequest),e.headers=a.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),a.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||o.adapter)(e).then((function(t){return s(e),t.data=n(t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(s(e),t&&t.response&&(t.response.data=n(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},XwJu:function(e,t,r){"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},aFm5:function(e,t,r){"use strict";var a=r("q1tI"),n=r.n(a),i=r("vDqi"),o=r.n(i),s=r("9eSz"),c=r.n(s),u=r("MEjR"),l=r.n(u),d=r("Wbzz");t.a=function(){var e=Object(d.useStaticQuery)("3022082986"),t=Object(a.useState)({submitting:!1,status:null}),r=t[0],i=t[1],s=function(e,t,r){i({submitting:!1,status:{ok:e,msg:t}}),e&&r.reset()};return n.a.createElement("div",{className:l.a.contactView},n.a.createElement("div",{className:l.a.formContainer},n.a.createElement("h1",null,"Contact Me"),n.a.createElement("p",null,"Im interested in any opportunities, big or small, in the music or web development field.",n.a.createElement("br",null),"The more creative and ambitious the better.",n.a.createElement("br",null),"If you have any questions, comments, or just want to say 'Hey', please don't hesitate to reach out."),n.a.createElement("form",{className:l.a.form,action:"https://getform.io/f/383bfd94-a853-46a9-b8d0-d05f6efc5522",onSubmit:function(e){e.preventDefault();var t=e.target;i({submitting:!0}),o()({method:"post",url:"https://getform.io/f/383bfd94-a853-46a9-b8d0-d05f6efc5522",data:new FormData(t)}).then((function(e){s(!0,"Thank you! I will get back to you as soon as i can.",t)})).catch((function(e){s(!1,e.response.data.error,t)}))}},n.a.createElement("div",{className:l.a.formGroup},n.a.createElement("input",{type:"text",name:"name",className:"form-control",id:"exampleInputName",placeholder:"name",required:"required"}),n.a.createElement("input",{type:"email",name:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"email"})),n.a.createElement("div",{className:l.a.formGroup},n.a.createElement("textarea",{name:"message",id:"exampleFormControlMessage",required:"required",placeholder:"Message",rows:10})),n.a.createElement("span",{className:l.a.buttonBox},n.a.createElement("button",{type:"submit",className:l.a.submitButton,disabled:r.submitting},"send")),r.status&&n.a.createElement("p",{className:r.status.ok?l.a.confirm:l.a.error},r.status.msg))),n.a.createElement("div",{className:l.a.line}),n.a.createElement(c.a,{className:l.a.photo,fixed:e.allFile.edges[0].node.childImageSharp.fixed}))}},endd:function(e,t,r){"use strict";function a(e){this.message=e}a.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},a.prototype.__CANCEL__=!0,e.exports=a},eqyj:function(e,t,r){"use strict";var a=r("xTJ+");e.exports=a.isStandardBrowserEnv()?{write:function(e,t,r,n,i,o){var s=[];s.push(e+"="+encodeURIComponent(t)),a.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),a.isString(n)&&s.push("path="+n),a.isString(i)&&s.push("domain="+i),!0===o&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},g7np:function(e,t,r){"use strict";var a=r("2SVd"),n=r("5oMp");e.exports=function(e,t){return e&&!a(t)?n(e,t):t}},"gZ+G":function(e,t,r){"use strict";var a=r("Wbzz"),n=r("q1tI"),i=r.n(n),o=r("h+VU"),s=r.n(o),c=r("9eSz"),u=r.n(c);t.a=function(e){var t=Object(a.useStaticQuery)("2687118694").allFile.edges;console.log(t);var r=[{id:1,primaryImage:t[0].node.childImageSharp.fixed,title:"Colab",summary:"My first full-stack web application. Colab provides music production teams with all of the tools necessary to stay organized and productive in a day when working together can be hard. Utilizing Colab, users can create projects, build production teams, share song versions, and stay in constant communication throughout the production process. **To view full application functionality use this login information: Email: guest@email.com Password: hireme . Or feel free to create a new account!",tech:"React | Redux | CSS | Axios | Framer-Motion | Moment.js | Wavesurfer.js | Amazon S3 | NodeJS | Express | PostgreSQL ",github:"https://github.com/natew8/colab-app-2.git",site:"http://143.110.157.56:5555/#/"},{id:2,primaryImage:t[1].node.childImageSharp.fixed,title:"Savvy Travels",summary:"My first team application. Savvy Travels is a flight finding web application built for the last minute adventurer. A user is able to give the application a trip budget and Savvy Travels will return all of the flights in that price range. Utilizing the users ip address Savvy Travels can also make suggestions based on the users closest airport. ",tech:"React | Redux | React Context |  SCSS | Amazon S3 | Mapbox API | Skyscanner API | Moment.js  | Axios | NodeJs | Nodemailer | Express | PostgreSQL",github:"https://github.com/savvy-travels/ssavvy-travels-app",site:"https://savvytravels.netlify.app/#/"}].map((function(e){return i.a.createElement("div",{key:e.id,className:s.a.projectContainer},i.a.createElement(u.a,{className:s.a.photo,fixed:e.primaryImage,alt:"Project"}),i.a.createElement("span",{className:s.a.infoBox},i.a.createElement("h1",null,e.title),i.a.createElement("p",null,e.summary),i.a.createElement("p",{className:s.a.techUsed},e.tech),i.a.createElement("span",null,i.a.createElement("a",{target:"_blank",rel:"noreferrer",href:e.github},i.a.createElement("button",null,"View Code")),i.a.createElement("a",{target:"_blank",rel:"noreferrer",href:e.site},i.a.createElement("button",null,"visit Site"))),i.a.createElement("h6",null,"Note: Responsive design still under construction.")))}));return i.a.createElement("div",{className:s.a.projectView},i.a.createElement("div",{className:s.a.projects},r))}},"h+VU":function(e,t,r){e.exports={projectView:"projects-module--projectView--2ArYF",projectContainer:"projects-module--projectContainer--KIl7O",photo:"projects-module--photo--2uCtR",infoBox:"projects-module--infoBox--sf3tb",techUsed:"projects-module--techUsed--2YMye",line:"projects-module--line--3I88w"}},"jfS+":function(e,t,r){"use strict";var a=r("endd");function n(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new a(e),t(r.reason))}))}n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var e;return{token:new n((function(t){e=t})),cancel:e}},e.exports=n},tQ2B:function(e,t,r){"use strict";var a=r("xTJ+"),n=r("Rn+g"),i=r("eqyj"),o=r("MLWZ"),s=r("g7np"),c=r("w0Vi"),u=r("OTTw"),l=r("LYNF");e.exports=function(e){return new Promise((function(t,r){var d=e.data,f=e.headers;a.isFormData(d)&&delete f["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var m=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";f.Authorization="Basic "+btoa(m+":"+h)}var g=s(e.baseURL,e.url);if(p.open(e.method.toUpperCase(),o(g,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var a="getAllResponseHeaders"in p?c(p.getAllResponseHeaders()):null,i={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:a,config:e,request:p};n(t,r,i),p=null}},p.onabort=function(){p&&(r(l("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){r(l("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(l(t,e,"ECONNABORTED",p)),p=null},a.isStandardBrowserEnv()){var b=(e.withCredentials||u(g))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;b&&(f[e.xsrfHeaderName]=b)}if("setRequestHeader"in p&&a.forEach(f,(function(e,t){void 0===d&&"content-type"===t.toLowerCase()?delete f[t]:p.setRequestHeader(t,e)})),a.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),e.responseType)try{p.responseType=e.responseType}catch(v){if("json"!==e.responseType)throw v}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),r(e),p=null)})),d||(d=null),p.send(d)}))}},tkMC:function(e,t,r){e.exports={skillsView:"skills-module--skillsView--38tLR",leftBox:"skills-module--leftBox--2AoO5",skillBox:"skills-module--skillBox--2xSGh",title:"skills-module--title--2IfMt",rightBox:"skills-module--rightBox--39hzJ",arrow:"skills-module--arrow--2VyI8"}},vDqi:function(e,t,r){e.exports=r("zuR4")},w0Vi:function(e,t,r){"use strict";var a=r("xTJ+"),n=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,i,o={};return e?(a.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=a.trim(e.substr(0,i)).toLowerCase(),r=a.trim(e.substr(i+1)),t){if(o[t]&&n.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([r]):o[t]?o[t]+", "+r:r}})),o):o}},xAGQ:function(e,t,r){"use strict";var a=r("xTJ+");e.exports=function(e,t,r){return a.forEach(r,(function(r){e=r(e,t)})),e}},"xTJ+":function(e,t,r){"use strict";var a=r("HSsa"),n=Object.prototype.toString;function i(e){return"[object Array]"===n.call(e)}function o(e){return void 0===e}function s(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==n.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function u(e){return"[object Function]"===n.call(e)}function l(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var r=0,a=e.length;r<a;r++)t.call(null,e[r],r,e);else for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.call(null,e[n],n,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===n.call(e)},isBuffer:function(e){return null!==e&&!o(e)&&null!==e.constructor&&!o(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isPlainObject:c,isUndefined:o,isDate:function(e){return"[object Date]"===n.call(e)},isFile:function(e){return"[object File]"===n.call(e)},isBlob:function(e){return"[object Blob]"===n.call(e)},isFunction:u,isStream:function(e){return s(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:l,merge:function e(){var t={};function r(r,a){c(t[a])&&c(r)?t[a]=e(t[a],r):c(r)?t[a]=e({},r):i(r)?t[a]=r.slice():t[a]=r}for(var a=0,n=arguments.length;a<n;a++)l(arguments[a],r);return t},extend:function(e,t,r){return l(t,(function(t,n){e[n]=r&&"function"==typeof t?a(t,r):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},yK9s:function(e,t,r){"use strict";var a=r("xTJ+");e.exports=function(e,t){a.forEach(e,(function(r,a){a!==t&&a.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[a])}))}},zuR4:function(e,t,r){"use strict";var a=r("xTJ+"),n=r("HSsa"),i=r("CgaS"),o=r("SntB");function s(e){var t=new i(e),r=n(i.prototype.request,t);return a.extend(r,i.prototype,t),a.extend(r,t),r}var c=s(r("JEQr"));c.Axios=i,c.create=function(e){return s(o(c.defaults,e))},c.Cancel=r("endd"),c.CancelToken=r("jfS+"),c.isCancel=r("Lmem"),c.all=function(e){return Promise.all(e)},c.spread=r("DfZB"),c.isAxiosError=r("XwJu"),e.exports=c,e.exports.default=c}}]);
//# sourceMappingURL=f651cd236536b0861ca655e6586c162b9e32d15e-55b2509582dcdf1d7926.js.map