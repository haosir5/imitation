(function(t){function e(e){for(var a,s,r=e[0],l=e[1],c=e[2],d=0,u=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&u.push(i[s][0]),i[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(e);while(u.length)u.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var r=n[s];0!==i[r]&&(a=!1)}a&&(o.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},s={app:0},i={app:0},o=[];function r(t){return l.p+"js/"+({Custody:"Custody","Eip-1559":"Eip-1559",Faq:"Faq",Faqs:"Faqs",Flask:"Flask",Index:"Index",Institutions:"Institutions",Test:"Test"}[t]||t)+"."+{Custody:"8b958ff8","Eip-1559":"97448284",Faq:"bc073042",Faqs:"3825ca74",Flask:"37625dcc",Index:"b19c03e8",Institutions:"75dfde55",Test:"eb0c0990"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={Custody:1,"Eip-1559":1,Faq:1,Faqs:1,Flask:1,Index:1,Institutions:1,Test:1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=new Promise((function(e,n){for(var a="css/"+({Custody:"Custody","Eip-1559":"Eip-1559",Faq:"Faq",Faqs:"Faqs",Flask:"Flask",Index:"Index",Institutions:"Institutions",Test:"Test"}[t]||t)+"."+{Custody:"23d13845","Eip-1559":"dd907f5e",Faq:"dc79c864",Faqs:"d70dab3f",Flask:"a73e2bda",Index:"581ce1d1",Institutions:"7441cb38",Test:"1210465b"}[t]+".css",i=l.p+a,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var c=o[r],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===a||d===i))return e()}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){c=u[r],d=c.getAttribute("data-href");if(d===a||d===i)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete s[t],p.parentNode.removeChild(p),n(o)},p.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){s[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=o);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=r(t);var u=new Error;c=function(e){d.onerror=d.onload=null,clearTimeout(p);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",u.name="ChunkLoadError",u.type=a,u.request=s,n[1](u)}i[t]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var p=d;o.push([0,"404"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"253f":function(t,e,n){t.exports=n.p+"img/icon-144x144.d3390d82.png"},"276a":function(t,e,n){t.exports=n.p+"img/user_img.14069681.png"},"49e5":function(t,e,n){},"549e":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var a=n("b77d"),s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("navbar"),e("div"),e("transition",{attrs:{name:"fade"}},[e("router-view")],1),e("bottom")],1)},i=[],o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"bottom"},[e("div",{staticClass:"container"},[e("div",{staticClass:"center"},[e("img",{staticStyle:{width:"2rem","border-radius":"20px"},attrs:{src:t.img,alt:""}}),e("span",{staticStyle:{color:"black","font-weight":"800"}},[t._v("个人项目展示")])]),e("div",{staticClass:"row"},[t._m(0),t._m(1),e("div",{staticClass:"col-md-3"},[e("ul",[e("li",{staticClass:"title"},[t._v("合法")]),e("li",[e("a",{staticStyle:{display:"inline-block","text-decoration":"none",height:"20px","line-height":"20px"},attrs:{target:"_blank",href:"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=35052402000343"}},[e("img",{staticStyle:{float:"left"},attrs:{src:t.one}}),e("p",{staticStyle:{float:"left",height:"20px","line-height":"20px",margin:"0px 0px 0px 5px",color:"#939393"}},[t._v(" 闽公网安备 35052402000343号 ")])])])])]),t._m(2)]),e("div",{attrs:{id:"footer"}},[t._v("@2022 MetaMask·A ConsenSys Formation")])])])},r=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-md-3"},[e("ul",[e("li",{staticClass:"title"},[t._v("了解更多")]),e("li",{staticClass:"dj"},[t._v("About")]),e("li",{staticClass:"dj"},[t._v("Developers Docs")]),e("li",{staticClass:"dj"},[t._v("Download")]),e("li",{staticClass:"dj"},[t._v("Documentation")]),e("li",{staticClass:"dj"},[t._v("MetaMask Institutional")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-md-3"},[e("ul",[e("li",{staticClass:"title"},[t._v("参与进来")]),e("li",{staticClass:"dj"},[t._v("GitHub")]),e("li",{staticClass:"dj"},[t._v("Gitcoin")]),e("li",{staticClass:"dj"},[t._v("Open Positions")]),e("li",{staticClass:"dj"},[t._v("Swag Shop")]),e("li",{staticClass:"dj"},[t._v("Press & Partnerships")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-md-3"},[e("ul",[e("li",{staticClass:"title"},[t._v("联系")]),e("li",{staticClass:"dj"},[t._v("FAQs")]),e("li",{staticClass:"dj"},[t._v("Support")]),e("li",{staticClass:"dj"},[t._v("Blog")]),e("li",{staticClass:"dj"},[t._v(" Twitter")])])])}],l={name:"Bottom",data(){return{img:n("276a"),one:n("d6fa")}},watch:{},methods:{go(){}},mounted(){}},c=l,d=(n("b0a2"),n("1805")),u=Object(d["a"])(c,o,r,!1,null,"5046f218",null),p=u.exports,h=function(){var t=this,e=t._self._c;return e("div",{staticClass:"navbar"},[e("div",{staticClass:"navbar2"},[e("div",[e("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"light",fixed:"top"}},[e("b-navbar-brand",{staticStyle:{width:"45%",cursor:"pointer"},on:{click:function(e){return t.goindex()}}},[e("img",{staticClass:"d-inline-block align-top",staticStyle:{width:"2rem",height:"2rem","margin-left":"52%","border-radius":"20px"},attrs:{src:t.img_user,alt:"Kitten"}}),e("span",{staticStyle:{cursor:"pointer","margin-left":"1rem","font-weight":"700"}},[t._v("个人项目")])]),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",[e("b-nav-item-dropdown",{staticStyle:{"font-weight":"700",padding:"15px"},attrs:{text:"特征",right:""}},[e("b-dropdown-item",{on:{click:function(e){return t.go(1)}}},[t._v("Swaps")]),e("b-dropdown-item",{on:{click:function(e){return t.go(2)}}},[t._v("EIP-1559")])],1),e("b-nav-item-dropdown",{staticStyle:{"font-weight":"700",padding:"15px"},attrs:{text:"支持",right:""}},[e("b-dropdown-item",{on:{click:function(e){return t.go(3)}}},[t._v("FAQs")])],1),e("b-nav-item-dropdown",{staticStyle:{"font-weight":"700",padding:"15px"},attrs:{text:"关于",right:""}},[e("b-dropdown-item",{on:{click:function(e){return t.go(6)}}},[t._v("Team")])],1),e("b-nav-item-dropdown",{staticStyle:{"font-weight":"700",padding:"15px"},attrs:{text:"开发",right:""}},[e("b-dropdown-item",{on:{click:function(e){return t.go(10)}}},[t._v("Institutions")]),e("b-dropdown-item",{on:{click:function(e){return t.go(11)}}},[t._v("Flask")])],1)],1),e("b-button",{staticStyle:{padding:"0.5rem 1.5rem 0.5rem 1.5rem"},attrs:{pill:"",variant:"primary"},on:{click:function(e){return t.goo()}}},[t._v("Download")]),e("div",{staticStyle:{"margin-top":"1rem"}},[e("van-switch",{staticStyle:{"margin-left":"20px"},attrs:{"active-color":"#121212","inactive-color":"white",size:"24px"},on:{click:t.modelBrn},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}})],1)],1)],1)],1)])])},m=[],f=(n("9805"),{name:"Navbar",data(){return{name:"BootstrapVue",img:n("253f"),checked:!0,img_user:n("276a"),dark:!1}},watch:{show(t){console.log("Alert is now "+(t?"visible":"hidden"))}},methods:{modelBrn(){this.dark=!this.dark,this.dark?window.document.documentElement.setAttribute("data-theme","dark"):window.document.documentElement.setAttribute("data-theme","light")},goindex(){this.$router.push("/")},c(){console.log("1")},toggle(){console.log("Toggle button clicked"),this.show=!this.show},dismissed(){console.log("Alert dismissed")},go(t){switch(t){case 1:this.$router.push("/swaps");break;case 2:this.$router.push("/eip-1559");break;case 3:this.$router.push("/faqs");break;case 4:this.$router.push("/4");break;case 5:this.$router.push("/5");break;case 6:this.$router.push("/team");break;case 7:this.$router.push("/7");break;case 8:this.$router.push("/8");break;case 9:this.$router.push("/9");break;case 10:this.$router.push("/institutions");break;case 11:this.$router.push("/flask");break}},goo(){this.$router.push("/download")}},created(){},mounted(){window.document.documentElement.setAttribute("data-theme","light")}}),b=f,v=(n("7d82"),Object(d["a"])(b,h,m,!1,null,"7023ddae",null)),g=v.exports,w={components:{Navbar:g,Bottom:p},data(){return{}},methods:{},mounted(){},created(){}},y=w,_=(n("eb85"),Object(d["a"])(y,s,i,!1,null,null,null)),k=_.exports,x=n("f191");a["default"].use(x["a"]);const C=[{path:"/",name:"Index",component:()=>n.e("Index").then(n.bind(null,"d504"))},{path:"/download",name:"Download",component:()=>n.e("404").then(n.bind(null,"3971"))},{path:"/team",name:"Team",component:()=>n.e("404").then(n.bind(null,"0767"))},{path:"/faqs",name:"Faqs",component:()=>n.e("Faqs").then(n.bind(null,"4b57"))},{path:"/eip-1559",name:"Eip-1559",component:()=>n.e("Eip-1559").then(n.bind(null,"230f"))},{path:"/swaps",name:"Swaps",component:()=>n.e("Faq").then(n.bind(null,"5f9d"))},{path:"/institutions",name:"Institutions",component:()=>n.e("Institutions").then(n.bind(null,"b074"))},{path:"/flask",name:"Flask",component:()=>n.e("Flask").then(n.bind(null,"9e57"))},{path:"/faq",name:"Faq",component:()=>n.e("Faq").then(n.bind(null,"10c2"))},{path:"/custody",name:"Custody",component:()=>n.e("Custody").then(n.bind(null,"6055"))},{path:"/test",name:"Test",component:()=>n.e("Test").then(n.bind(null,"78c1"))},{path:"/test2",name:"Test2",component:()=>n.e("Test").then(n.bind(null,"fb6d"))},{path:"*",name:"404",component:()=>n.e("404").then(n.bind(null,"8cdb")),meta:{title:1}}],F=new x["a"]({base:"",routes:C}),S=x["a"].prototype.push;x["a"].prototype.push=function(t){return S.call(this,t).catch(t=>t)};var j=F,E=n("f0a4");a["default"].use(E["a"]);var q=new E["a"].Store({state:{},mutations:{},actions:{},modules:{}}),T=n("e1b9"),I=n("70e5"),O=n("62a6"),A=(n("c60d"),n("f2b1")),P=n("d715"),$=n.n(P);n("f9e3"),n("ed72");a["default"].use(A["a"]),a["default"].use($.a),a["default"].use(O["a"]),a["default"].use(T["a"]),a["default"].use(I["a"]),a["default"].config.productionTip=!1,new a["default"]({router:j,store:q,render:t=>t(k),mounted(){document.dispatchEvent(new Event("render-event"))}}).$mount("#app"),j.afterEach((t,e,n)=>{window.scrollTo(0,0)})},"7d82":function(t,e,n){"use strict";n("49e5")},"8ee1":function(t,e,n){},b0a2:function(t,e,n){"use strict";n("549e")},d6fa:function(t,e,n){t.exports=n.p+"img/备案图标.d0289dc0.png"},eb85:function(t,e,n){"use strict";n("8ee1")}});
//# sourceMappingURL=app.952e12e4.js.map