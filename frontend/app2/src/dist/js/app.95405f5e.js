(function(t){function e(e){for(var a,o,i=e[0],s=e[1],l=e[2],p=0,d=[];p<i.length;p++)o=i[p],r[o]&&d.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);u&&u(e);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(a=!1)}a&&(c.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},c=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=s;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("1d50")},1073:function(t,e,n){"use strict";var a=n("dcc5"),r=n.n(a);r.a},"1d50":function(t,e,n){"use strict";n.r(e);n("646a"),n("4757"),n("2026"),n("4989"),n("f9e3"),n("2dd8");var a=n("209a"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-3 col-md-3"},[n("c_ListRequest",{on:{categorySelected:t.categorySelectedHandler}})],1),n("div",{staticClass:"col-sm-9 col-md-9"},[n("c_Map")],1)])])])},c=[],o=n("bc3a"),i=n.n(o),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel panel-default"},[t._m(0),n("div",{staticClass:"list-group"},t._l(t.list,function(e){return n("a",{key:e.CatID,staticClass:"list-group-item",class:{active:t.selected===e.CatID},attrs:{href:"javascript:;"},on:{click:function(n){t.categoryClicked(e.CatID,e.CatName)}}},[t._v(t._s(e.CatName))])}))])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel-heading"},[n("h3",{staticClass:"panel-title"},[t._v("List request")])])}],u={name:"c_ListRequest",data:function(){return{list:[{CatID:1,CatName:"Laptop"},{CatID:2,CatName:"Tablet"}],selected:-1}},methods:{categoryClicked:function(t,e){var n=this;n.selected=t;var a={CatID:t,CatName:e};n.$emit("categorySelected",a)}}},p=u,d=(n("3940"),n("435b")),f=Object(d["a"])(p,s,l,!1,null,"14333eee",null);f.options.__file="c_ListRequest.vue";var m=f.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("GmapMap",{staticStyle:{width:"500px",height:"300px"},attrs:{center:{lat:10,lng:10},zoom:7,"map-type-id":"terrain"}},t._l(t.markers,function(e,a){return n("GmapMarker",{key:a,attrs:{position:e.position,clickable:!0,draggable:!0},on:{click:function(n){t.center=e.position}}})}))},h=[],b={mounted:function(){this.$refs.mapRef.$mapPromise.then(function(t){t.panTo({lat:1.38,lng:103.8})})}},_=b,g=(n("1073"),Object(d["a"])(_,v,h,!1,null,"611c84be",null));g.options.__file="c_Map.vue";var y=g.exports,C={name:"App",components:{c_ListRequest:m,c_Map:y},data:function(){return{selectedCategoryName:"",productList:[]}},methods:{categorySelectedHandler:function(t){var e=this;e.selectedCategoryName=t.CatName,i.a.get("http://localhost:3000/categories/".concat(t.CatID,"/products")).then(function(t){e.productList=t.data.products}).catch(function(t){console.log(t)})}}},k=C,x=(n("e5cd"),Object(d["a"])(k,r,c,!1,null,null,null));x.options.__file="App.vue";var j=x.exports,w=n("755e"),O=n("3a5b"),S=n("f429"),M=n("7b38"),N=n("ae0d");a["a"].use(w,{load:{key:"AIzaSyC0ynsTMNrW9Y3ZrzsxCDxiAZPdzHNYQbE",libraries:"places"}}),a["a"].use(M["b"]),a["a"].use(M["a"]),a["a"].use(N["a"]),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(j)}}).$mount("#app"),a["a"].component("my-component",{components:{"b-modal":O["a"]},directives:{"b-modal":S["a"]}})},3940:function(t,e,n){"use strict";var a=n("68d7"),r=n.n(a);r.a},4608:function(t,e,n){},"68d7":function(t,e,n){},dcc5:function(t,e,n){},e5cd:function(t,e,n){"use strict";var a=n("4608"),r=n.n(a);r.a}});
//# sourceMappingURL=app.95405f5e.js.map