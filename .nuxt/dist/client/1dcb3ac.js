(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{194:function(t,e,r){"use strict";r.d(e,"d",(function(){return c})),r.d(e,"f",(function(){return o})),r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return f})),r.d(e,"c",(function(){return v})),r.d(e,"e",(function(){return d}));var n=r(62),c=function(t){return Object(n.b)({url:"/api/articles",method:"get",params:t})},o=function(t){return Object(n.b)({url:"/api/articles/feed",method:"get",params:t})},l=function(t){return Object(n.b)({url:"/api/articles/".concat(t,"/favorite"),method:"post"})},f=function(t){return Object(n.b)({url:"/api/articles/".concat(t,"/favorite"),method:"delete"})},v=function(t){return Object(n.b)({url:"/api/articles/".concat(t),method:"get"})},d=function(t){return Object(n.b)({url:"/api/articles/".concat(t,"/comments"),method:"get"})}},198:function(t,e,r){var n=r(3),c=r(32),o=r(9),l=r(199),f="["+l+"]",v=RegExp("^"+f+f+"*"),d=RegExp(f+f+"*$"),m=function(t,e,r){var c={},f=o((function(){return!!l[t]()||"​"!="​"[t]()})),v=c[t]=f?e(_):l[t];r&&(c[r]=v),n(n.P+n.F*f,"String",c)},_=m.trim=function(t,e){return t=String(c(t)),1&e&&(t=t.replace(v,"")),2&e&&(t=t.replace(d,"")),t};t.exports=m},199:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},208:function(t,e,r){var n=r(3),c=r(209);n(n.S+n.F*(Number.parseInt!=c),"Number",{parseInt:c})},209:function(t,e,r){var n=r(5).parseInt,c=r(198).trim,o=r(199),l=/^[-+]?0[xX]/;t.exports=8!==n(o+"08")||22!==n(o+"0x16")?function(t,e){var r=c(String(t),3);return n(r,e>>>0||(l.test(r)?16:10))}:n},210:function(t,e,r){"use strict";var n=r(5),c=r(25),o=r(26),l=r(129),f=r(63),v=r(9),d=r(51).f,m=r(52).f,_=r(11).f,h=r(198).trim,C="Number",O=n.Number,y=O,x=O.prototype,k=o(r(83)(x))==C,j="trim"in String.prototype,I=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var r,n,c,o=(e=j?e.trim():h(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+e}for(var code,l=e.slice(2),i=0,v=l.length;i<v;i++)if((code=l.charCodeAt(i))<48||code>c)return NaN;return parseInt(l,n)}}return+e};if(!O(" 0o1")||!O("0b1")||O("+0x1")){O=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof O&&(k?v((function(){x.valueOf.call(r)})):o(r)!=C)?l(new y(I(e)),r,O):I(e)};for(var N,w=r(7)?d(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;w.length>E;E++)c(y,N=w[E])&&!c(O,N)&&_(O,N,m(y,N));O.prototype=x,x.constructor=O,r(13)(n,C,O)}},269:function(t,e,r){"use strict";r.r(e);var n=r(21),c=r(10),o=r(4),l=(r(36),r(208),r(210),r(38),r(14),r(39),r(37),r(23),r(24),r(49),r(50),r(48)),f=r(194),v=r(62);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={name:"HomeIndex",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,d,m,_,h,C,O,y,x,k,j,I,N;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,n=t.store,o=Number.parseInt(r.page||1),l=Number.parseInt(r.limit||10),d=r.tag,m=r.tab,_=void 0===m?"global_feed":m,h=n.state.user&&"your_feed"===d?f.f:f.d,e.next=7,Promise.all([h({limit:l,offset:(o-1)*l,tag:d}),Object(v.b)({url:"/api/tags",method:"get"})]);case 7:return C=e.sent,O=Object(c.a)(C,2),y=O[0],x=O[1],k=y.data,j=k.articles,I=k.articlesCount,N=x.data.tags,j.forEach((function(article){return article.favoriteDisabled=!1})),e.abrupt("return",{limit:l,page:o,articles:j,articlesCount:I,tags:N,tag:d,tab:_});case 15:case"end":return e.stop()}}),e)})))()},computed:m(m({},Object(l.b)(["user"])),{},{totalPage:function(){return Math.ceil(this.articlesCount/this.limit)}}),watchQuery:["page","tag","tab"],methods:{onFavorite:function(article){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(article.favoriteDisabled=!0,!article.favorited){t.next=8;break}return t.next=4,Object(f.b)(article.slug);case 4:article.favorited=!1,article.favoritesCount-=1,t.next=12;break;case 8:return t.next=10,Object(f.a)(article.slug);case 10:article.favorited=!0,article.favoritesCount+=1;case 12:article.favoriteDisabled=!1;case 13:case"end":return t.stop()}}),t)})))()}}},h=r(30),component=Object(h.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home-page"},[t._m(0),t._v(" "),r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-9"},[r("div",{staticClass:"feed-toggle"},[r("ul",{staticClass:"nav nav-pills outline-active"},[t.user?r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"your_feed"===t.tab},attrs:{to:{name:"home",query:{tab:"your_feed"}},exact:""}},[t._v("Your Feed")])],1):t._e(),t._v(" "),r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"global_feed"===t.tab},attrs:{exact:"",to:{name:"home",query:{tab:"global_feed"}}}},[t._v("Global Feed")])],1),t._v(" "),t.tag?r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"tag"===t.tab},attrs:{exact:"",to:{name:"home",query:{tab:"tag",tag:t.tag}}}},[t._v("#"+t._s(t.tag))])],1):t._e()])]),t._v(" "),t._l(t.articles,(function(article){return r("div",{key:article.slug,staticClass:"article-preview"},[r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:{name:"profile",params:{username:article.author.username}}}},[r("img",{attrs:{src:article.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{staticClass:"author",attrs:{to:{name:"profile",params:{username:article.author.username}}}},[t._v(t._s(article.author.username))]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(article.createdAt,"MMM DD,YYYY")))])],1),t._v(" "),r("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right",class:{active:article.favorited},attrs:{disabled:article.favoriteDisabled},on:{click:function(e){return t.onFavorite(article)}}},[r("i",{staticClass:"ion-heart"}),t._v(" "+t._s(article.favoritesCount)+"\n            ")])],1),t._v(" "),r("nuxt-link",{staticClass:"preview-link",attrs:{to:{name:"article",params:{slug:article.slug}}}},[r("h1",[t._v(t._s(article.title))]),t._v(" "),r("p",[t._v(t._s(article.description))]),t._v(" "),r("span",[t._v("Read more...")])])],1)})),t._v(" "),r("nav",[r("ul",{staticClass:"pagination"},t._l(t.totalPage,(function(e){return r("li",{key:e,staticClass:"page-item",class:{active:e===t.page}},[r("nuxt-link",{staticClass:"page-link",attrs:{to:{name:"home",query:{page:e,tag:t.$route.query.tag,tab:t.tab}}}},[t._v(t._s(e))])],1)})),0)])],2),t._v(" "),r("div",{staticClass:"col-md-3"},[r("div",{staticClass:"sidebar"},[r("p",[t._v("Popular Tags")]),t._v(" "),r("div",{staticClass:"tag-list"},t._l(t.tags,(function(e){return r("nuxt-link",{key:e,staticClass:"tag-pill tag-default",attrs:{to:{name:"home",query:{tab:"tag",tag:e}}}},[t._v(t._s(e))])})),1)])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"banner"},[r("div",{staticClass:"container"},[r("h1",{staticClass:"logo-font"},[t._v("conduit")]),t._v(" "),r("p",[t._v("A place to share your knowledge.")])])])}],!1,null,null,null);e.default=component.exports}}]);