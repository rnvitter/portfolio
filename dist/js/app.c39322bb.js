(function(t){function e(e){for(var a,r,o=e[0],l=e[1],c=e[2],m=0,p=[];m<o.length;m++)r=o[m],s[r]&&p.push(s[r][0]),s[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],a=!0,o=1;o<i.length;o++){var l=i[o];0!==s[l]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=i[0]))}return t}var a={},s={app:0},n=[];function r(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=a,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(i,a,function(e){return t[e]}.bind(null,a));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var a=i("1356"),s=i.n(a);s.a},"0c97":function(t,e,i){t.exports=i.p+"img/coming-soon-min.a8ed1271.png"},1:function(t,e){},"10ee":function(t,e,i){t.exports=i.p+"img/human_development_and_terrorism.7da9699b.png"},"11fc":function(t,e,i){},1356:function(t,e,i){},"139b":function(t,e,i){},"1b52":function(t,e,i){},"1c61":function(t,e,i){"use strict";var a=i("62be"),s=i.n(a);s.a},2442:function(t,e,i){},2564:function(t,e,i){t.exports=i.p+"img/statify-min.0e796d11.png"},"269b":function(t,e,i){t.exports=i.p+"img/tx_likely_voters.62690dcb.png"},3396:function(t,e,i){t.exports=i.p+"img/west_indies_reference.4002a838.png"},3568:function(t,e,i){t.exports=i.p+"img/forecasting-min.8555b936.png"},"37a0":function(t,e,i){var a={"./coming-soon-min.png":"0c97","./election-results-min.png":"e158","./forecasting-min.png":"3568","./statify-min.png":"2564"};function s(t){var e=n(t);return i(e)}function n(t){var e=a[t];if(!(e+1)){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}return e}s.keys=function(){return Object.keys(a)},s.resolve=n,t.exports=s,s.id="37a0"},"512e":function(t,e,i){var a={"./0ptimus_poster.png":"eb54","./gdp_vs_spi.png":"f7b7","./google_trends_political_issues.png":"e6f4","./human_development_and_terrorism.png":"10ee","./tx_likely_voters.png":"269b","./west_indies_reference.png":"3396"};function s(t){var e=n(t);return i(e)}function n(t){var e=a[t];if(!(e+1)){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}return e}s.keys=function(){return Object.keys(a)},s.resolve=n,t.exports=s,s.id="512e"},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("097d"),i("db43");var a=i("2b0e"),s=i("28dd"),n=i("bb71");i("da64");a["a"].use(n["a"],{iconfont:"md"});var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("div",{staticClass:"app-wrapper"},[i("navbar"),i("div",{attrs:{id:"portfolio-wrapper"}},[i("splash-page"),i("portfolio")],1)],1)])},o=[],l=i("be94"),c=i("2f62"),u=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"navbar"}},[i("div",{staticClass:"navbar-content"},[i("div",{staticClass:"header-title"},[t._v("Ryan Vitter")]),i("div",{staticClass:"nav-menu"},[i("span",{staticClass:"nav-menu-line"}),i("span",{staticClass:"nav-menu-line",staticStyle:{"margin-top":"5px"}}),i("span",{staticClass:"nav-menu-line",staticStyle:{"margin-top":"5px"}})])])])}],p={headerStyle:function(){var t=document.getElementById("navbar"),e=document.getElementsByClassName("header-title")[0],i=document.getElementsByClassName("nav-menu-line"),a=window.scrollY;if(a>10&&!t.classList.contains("fixed-navbar")){t.classList.add("fixed-navbar"),e.style.color="#fff";for(var s=0,n=i.length;s<n;s++)i[s].classList.add("dark")}if(a<10&&t.classList.contains("fixed-navbar")){t.classList.remove("fixed-navbar"),e.style.color="#333";for(s=0,n=i.length;s<n;s++)i[s].classList.remove("dark")}}},d={name:"navbar",methods:p,mounted:function(){var t=this;this.headerStyle(),window.addEventListener("scroll",function(){return t.headerStyle()})},beforeDestroy:function(){var t=this;window.removeEventListener("scroll",function(){return t.headerStyle()})}},f=d,v=(i("e667"),i("2877")),g=Object(v["a"])(f,u,m,!1,null,null,null);g.options.__file="Navbar.vue";var h=g.exports,_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"portfolio"},[i("projects"),i("maps"),i("photos")],1)},b=[],y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"section-title"},[t.mobile?t._e():i("span",[t._v("Featured ")]),t._v("Maps")]),i("v-divider",{staticClass:"mb-5"}),i("v-layout",{staticClass:"app-container",attrs:{row:"",wrap:""}},[t._l(t.featuredMaps,function(e){return i("v-flex",{key:e.title,attrs:{xs12:""}},[i("map-card",{attrs:{item:e,src:t.getSrc(e.imageName)}})],1)}),i("v-flex",{staticStyle:{display:"flex","align-items":"center"},attrs:{xs12:""}},[i("div",{staticClass:"more-title"},[t._v("More Maps")]),i("v-divider",{staticClass:"ml-4"})],1),t._l(t.moreMaps,function(e){return i("v-flex",{key:e.title,attrs:{xs12:"",sm6:""}},[i("app-card-preview",{attrs:{item:e,src:t.getSrc(e.imageName),hideTags:!0}})],1)})],2)],1)},x=[],w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item-card"},[t.mobile?i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("div",[i("div",{staticClass:"item-name-wrapper"},[i("h2",{staticClass:"item-name"},[t._v("\n            "+t._s(t.item.title)+"\n          ")])]),i("div",{staticClass:"item-tagline"},[t._v(t._s(t.item.tagline))])]),i("div",{staticClass:"item-tags"},t._l(t.item.tags,function(e,a){return i("v-chip",{key:a,staticClass:"item-tag",style:""+t.tagStyle(e),attrs:{small:""}},[t._v("\n          "+t._s(e)+"\n        ")])})),i("div",{staticStyle:{display:"flex","justify-content":"center"}},[i("a",{staticClass:"item-link mr-3",attrs:{href:t.item.link,target:"_blank"}},[t._v("Explore")]),t.item.github?i("a",{staticClass:"item-link",attrs:{href:t.item.github,target:"_blank"}},[t._v("Github")]):t._e()])]),i("v-flex",{attrs:{xs12:""}},[i("a",{staticStyle:{"text-decoration":"none"},attrs:{href:t.item.link,target:"”_blank”"}},[i("img",{staticClass:"item-image",attrs:{src:t.getSrc(),width:"100%",height:"auto"}})])])],1):i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:"",sm6:""}},[i("a",{staticStyle:{"text-decoration":"none"},attrs:{href:t.item.link,target:"”_blank”"}},[i("img",{staticClass:"item-image",attrs:{src:t.getSrc(),width:"100%",height:"auto"}})])]),i("v-flex",{staticStyle:{padding:"20px"},attrs:{xs12:"",sm6:""}},[i("div",[i("div",{staticClass:"item-name-wrapper"},[i("h2",{staticClass:"item-name"},[t._v("\n            "+t._s(t.item.title)+"\n          ")])]),i("div",{staticClass:"item-tagline"},[t._v(t._s(t.item.tagline))]),i("div",{staticClass:"item-tags"},t._l(t.item.tags,function(e,a){return i("v-chip",{key:a,staticClass:"item-tag",style:""+t.tagStyle(e),attrs:{small:""}},[t._v("\n            "+t._s(e)+"\n          ")])}))]),i("div",{staticClass:"item-description",staticStyle:{"margin-top":"0px"}},[t._v(t._s(t.item.description))]),i("a",{staticClass:"item-link mr-3",attrs:{href:t.item.link,target:"_blank"}},[t._v("Explore")]),t.item.github?i("a",{staticClass:"item-link",attrs:{href:t.item.github,target:"_blank"}},[t._v("Github")]):t._e()])],1)],1)},C=[],k=(i("7f7f"),i("7514"),{item:{type:Object,required:!0},src:{type:String,required:!1}}),S=Object(l["a"])({},Object(c["c"])({mobile:"ux/mobile"})),j={getSrc:function(){return i("37a0")("./"+this.item.imageName+"-min.png")},tagStyle:function(t){var e=this.tagColors.find(function(e){return e.name===t});return"background-color: ".concat(e.color,"; color: ").concat(e.text,";")}},E={props:k,computed:S,methods:j,data:function(){return{tagColors:[{name:"personal",color:"#2196F3",text:"#fff"},{name:"work",color:"#FA3138",text:"#fff"},{name:"vue",color:"#40b784",text:"#fff"},{name:"node",color:"#323333",text:"#fff"},{name:"d3",color:"#f69b4f",text:"#fff"},{name:"python",color:"#fce571",text:"#333"}]}}},O=E,N=(i("c177"),i("6544")),P=i.n(N),A=i("cc20"),L=i("0e8f"),M=i("a722"),T=Object(v["a"])(O,w,C,!1,null,null,null);T.options.__file="AppCard.vue";var D=T.exports;P()(T,{VChip:A["a"],VFlex:L["a"],VLayout:M["a"]});var V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item-card-preview"},[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("div",[i("h2",{staticClass:"item-name-preview"},[t._v("\n          "+t._s(t.item.title)+"\n        ")]),i("div",{staticClass:"item-tagline-preview"},[t._v(t._s(t.item.tagline))]),t.hideTags?t._e():i("div",{staticClass:"item-tags"},t._l(t.item.tags,function(e,a){return i("v-chip",{key:a,staticClass:"item-tag",style:""+t.tagStyle(e),attrs:{small:""}},[t._v("\n            "+t._s(e)+"\n          ")])}))]),i("div",{staticClass:"item-btns",staticStyle:{display:"flex"}},[i("a",{staticClass:"item-link mr-3",attrs:{href:t.item.link,target:"_blank"}},[t._v("Explore")]),i("div",{staticClass:"item-link",on:{click:function(t){}}},[t._v("Details")]),t.item.github?i("a",{staticClass:"item-link ml-3",attrs:{href:t.item.github,target:"_blank"}},[t._v("Github")]):t._e()])])],1),t.item.link?i("a",{staticStyle:{"text-decoration":"none"},attrs:{href:t.item.link,target:"”_blank”"}},[i("img",{staticClass:"item-image",attrs:{src:t.getSrc(),width:"100%",height:"auto"}})]):i("img",{staticClass:"item-image",attrs:{src:t.getSrc(),width:t.width,height:t.height}})],1)},F=[],I={item:{type:Object,required:!0},hideTags:{type:Boolean,default:!1,require:!1},src:{type:String,required:!1},width:{type:String,required:!1,default:"100%"},height:{type:String,required:!1,default:"auto"}},W={getSrc:function(){return this.src?this.src:i("37a0")("./"+this.item.imageName+"-min.png")},tagStyle:function(t){var e=this.tagColors.find(function(e){return e.name===t});return"background-color: ".concat(e.color,"; color: ").concat(e.text,";")}},$={props:I,methods:W,data:function(){return{tagColors:[{name:"personal",color:"#2196F3",text:"#fff"},{name:"work",color:"#FA3138",text:"#fff"},{name:"vue",color:"#40b784",text:"#fff"},{name:"node",color:"#323333",text:"#fff"},{name:"d3",color:"#f69b4f",text:"#fff"},{name:"python",color:"#fce571",text:"#333"}]}}},q=$,B=(i("1c61"),Object(v["a"])(q,V,F,!1,null,null,null));B.options.__file="AppCardPreview.vue";var z=B.exports;P()(B,{VChip:A["a"],VFlex:L["a"],VLayout:M["a"]});var U=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item-card"},[t.mobile?i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("div",[i("div",{staticClass:"item-name-wrapper"},[i("h2",{staticClass:"item-name"},[t._v("\n            "+t._s(t.item.title)+"\n          ")])]),i("div",{staticClass:"item-tagline"},[t._v(t._s(t.item.tagline))]),i("div",{staticClass:"item-btns",staticStyle:{display:"flex"}},[i("a",{staticClass:"item-link mr-3",attrs:{href:t.item.link,target:"_blank"}},[t._v("View PDF")]),i("div",{staticClass:"item-link mr-3",on:{click:function(t){}}},[t._v("Details")])])])]),i("v-flex",{attrs:{xs12:""}},[i("a",{staticStyle:{"text-decoration":"none"},attrs:{href:t.item.link,target:"”_blank”"}},[i("img",{staticClass:"item-image",attrs:{src:t.getSrc(),width:"100%",height:"auto"}})])])],1):i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:"",sm6:""}},[i("a",{staticStyle:{"text-decoration":"none"},attrs:{href:t.item.link,target:"”_blank”"}},[i("img",{staticClass:"item-image",attrs:{src:t.getSrc(),width:"100%",height:"auto"}})])]),i("v-flex",{staticStyle:{padding:"20px"},attrs:{xs12:"",sm6:""}},[i("div",[i("div",{staticClass:"item-name-wrapper"},[i("h2",{staticClass:"item-name"},[t._v("\n            "+t._s(t.item.title)+"\n          ")])]),i("div",{staticClass:"item-tagline"},[t._v(t._s(t.item.tagline))])]),i("div",{staticClass:"item-description",staticStyle:{"margin-top":"0px"}},[t._v(t._s(t.item.description))]),i("a",{staticClass:"item-link mr-3",attrs:{href:t.item.link,target:"_blank"}},[t._v("View PDF")])])],1)],1)},G=[],R={item:{type:Object,required:!0},src:{type:String,required:!1}},H=Object(l["a"])({},Object(c["c"])({mobile:"ux/mobile"})),J={getSrc:function(){return this.src}},K={props:R,computed:H,methods:J},Y=K,X=Object(v["a"])(Y,U,G,!1,null,null,null);X.options.__file="MapCard.vue";var Q=X.exports;P()(X,{VFlex:L["a"],VLayout:M["a"]});var Z={AppCardPreview:z,MapCard:Q},tt=Object(l["a"])({},Object(c["c"])({mobile:"ux/mobile"})),et={getSrc:function(t){return i("512e")("./".concat(t,".png"))}},it={name:"maps",components:Z,computed:tt,methods:et,data:function(){return{featuredMaps:[{title:"0ptimus Poster",link:"",imageName:"0ptimus_poster",tags:["work","qgis","illustrator"],tagline:"Visualizing the poltical and advertising landscape of the U.S.",description:"A map I made for 0ptimus clients during the 2016 presidential campaign depicting designated market areas, congressional districts, and major cities. CDs are labled and DMAs are color coded in the key at the bottom, along with a graph of the top 30 DMAs. There are several insets for the major U.S. cities."},{title:"HDI and Terrorism",link:"",imageName:"human_development_and_terrorism",tags:["school","arcgis","illustrator"],tagline:"Is the HDI Index correlated with terrorism?",description:"I developed this poster for a group project my senior year. We looked at the correlation between the human development index of countries and prevalence of terrorism. I designed the poster by making the map the central part and using it to visually split it up by the regions we looked at."}],moreMaps:[{title:"GDP vs SPI",link:"",imageName:"gdp_vs_spi",tags:["school","arcgis","illustrator"],tagline:"Measuring the Success of Countries",description:""},{title:"The West Indies",link:"",imageName:"west_indies_reference",tags:["school","arcgis","illustrator"],tagline:"A reference map for the west indies region",description:""},{title:"Google Trends & Political Issues",link:"",imageName:"google_trends_political_issues",tags:["school","arcgis","illustrator"],tagline:"Can Google Trends Predict the Political Leanings of Geographies?",description:""},{title:"Texas Likely Voters",link:"",imageName:"tx_likely_voters",tags:["work","qgis","illustrator"],tagline:"Finding Likely Voters By Congressional District",description:""}]}}},at=it,st=i("ce7e"),nt=Object(v["a"])(at,y,x,!1,null,null,null);nt.options.__file="Maps.vue";var rt=nt.exports;P()(nt,{VDivider:st["a"],VFlex:L["a"],VLayout:M["a"]});var ot=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"section-title"},[t.mobile?t._e():i("span",[t._v("Featured ")]),t._v("Photos")]),i("v-divider",{staticClass:"mb-5"}),i("div",{staticClass:"app-container mb-5"},[t._l(t.allCategories,function(e,a){return[i("carousel",{attrs:{index:a,navColor:"white"}},[t._l(e.category,function(t){return[i("img",{staticClass:"photos",staticStyle:{height:"25vh","vertical-align":"middle"},attrs:{src:t.src}})]})],2)]})],2)],1)},lt=[],ct=(i("ac6a"),i("6762"),i("2fdb"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"carousel_"+t.index,staticClass:"carousel-wrapper",on:{mouseover:t.showArrows,mouseleave:t.hideArrows}},[i("div",{staticClass:"carousel"},[t._t("default")],2),t.hideNavArrows?t._e():i("div",{staticClass:"left-arrow-btn",on:{click:t.scrollLeft}},[i("icon",{staticClass:"nav-arrows",staticStyle:{left:"15px"},attrs:{name:"angle-left",color:t.navColor}})],1),t.hideNavArrows?t._e():i("div",{staticClass:"right-arrow-btn",on:{click:t.scrollRight}},[i("icon",{staticClass:"nav-arrows",staticStyle:{right:"15px"},attrs:{name:"angle-right",color:t.navColor}})],1)])}),ut=[],mt=(i("ca13"),i("43e8"),i("0874")),pt="Carousel",dt={index:{required:!1,default:0},navColor:{required:!1,default:"#d3d3d3"},hideNavArrows:{required:!1,default:!1}},ft={Icon:mt["a"]},vt={showArrows:function(){if(!this.hideNavArrows){var t=this.$refs[this.name];t.getElementsByClassName("left-arrow-btn")[0].style.opacity=.8,t.getElementsByClassName("right-arrow-btn")[0].style.opacity=.8,this.fullscreen&&(t.getElementsByClassName("fullscreen-btn")[0].style.opacity=.8)}},hideArrows:function(){if(!this.hideNavArrows){var t=this.$refs[this.name];t.getElementsByClassName("left-arrow-btn")[0].style.opacity=0,t.getElementsByClassName("right-arrow-btn")[0].style.opacity=0,this.fullscreen&&(t.getElementsByClassName("fullscreen-btn")[0].style.opacity=0)}},scrollRight:function(){this.hideNavArrows||(this.$refs[this.name].getElementsByClassName("carousel")[0].scrollLeft+=window.innerWidth)},scrollLeft:function(){this.hideNavArrows||(this.$refs[this.name].getElementsByClassName("carousel")[0].scrollLeft-=window.innerWidth)}},gt={name:pt,props:dt,components:ft,methods:vt,data:function(){return{name:"carousel_"+this.index}}},ht=gt,_t=(i("ea34"),Object(v["a"])(ht,ct,ut,!1,null,"6dec6ba6",null));_t.options.__file="Carousel.vue";var bt=_t.exports,yt="Photos",xt={Carousel:bt},wt=Object(l["a"])({},Object(c["c"])({mobile:"ux/mobile"}),{allCategories:function(){var t=this,e=[],i=["nature","animal","people","misc"];return i.forEach(function(i){var a=t.photoset.filter(function(t){return t.tags.includes(i)}).reverse();e.push({name:i,category:a})}),e}}),Ct={name:yt,components:xt,computed:wt,data:function(){return{photoset:[]}},created:function(){var t=this,e="df70b27de9fe83fd5502d6289af1c2d9",i="72157688736926945",a="52039563%40N07",s="https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=".concat(e,"&photoset_id=").concat(i,"&user_id=").concat(a,"&extras=tags&format=json");this.$http.jsonp(s,{jsonpCallback:"jsonFlickrApi"}).then(function(e){var i=e.data.photoset.photo;i.forEach(function(e){var i="https://farm"+e.farm+".staticflickr.com/"+e.server+"/"+e.id+"_"+e.secret+".jpg",a={src:i,tags:e.tags};t.photoset.push(a)})},function(t){console.log(t)})}},kt=Ct,St=(i("c521"),Object(v["a"])(kt,ot,lt,!1,null,"e0eda8c0",null));St.options.__file="Photos.vue";var jt=St.exports;P()(St,{VDivider:st["a"]});var Et=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"section-title"},[t.mobile?t._e():i("span",[t._v("Featured ")]),t._v("Projects")]),i("v-divider"),i("v-layout",{staticClass:"app-container",attrs:{row:"",wrap:""}},[t._l(t.featuredApps,function(t){return i("v-flex",{key:t.title,attrs:{xs12:""}},[i("app-card",{attrs:{item:t}})],1)}),i("v-flex",{staticStyle:{display:"flex","align-items":"center"},attrs:{xs12:""}},[i("div",{staticClass:"more-title"},[t._v("More Projects")]),i("v-divider",{staticClass:"ml-4"})],1),t._l(t.moreApps,function(t){return i("v-flex",{key:t.title,attrs:{xs12:"",sm6:""}},[i("app-card-preview",{attrs:{item:t}})],1)})],2)],1)},Ot=[],Nt={AppCard:D,AppCardPreview:z},Pt=Object(l["a"])({},Object(c["c"])({mobile:"ux/mobile"})),At={name:"projects",components:Nt,computed:Pt,data:function(){return{featuredApps:[{title:"Election Results",link:"https://results.decisiondeskhq.com/",imageName:"election-results",tags:["work","vue","d3","python"],tagline:"2018 Live Election Night Dashboard",description:"I developed this app while working at 0ptimus with one other person. I worked on the UI/UX design, frontend code, and developed all the maps and charts from scratch with d3. We had upwards of 1,500 people on the site at a time during election night."},{title:"Statify",link:"http://my-statify.ryanvitter.com/",github:"https://github.com/rnvitter/my-statify",imageName:"statify",tags:["personal","vue","node"],tagline:"Tool For Discovering Your Music Trends",description:"App for discovering your top music over time and sharing it with friends. I created the entirety of this app as a personal project using vue, node, and the spotify and bitly apis."}],moreApps:[{title:"Election Forecasting",link:"https://0ptimus.decisiondeskhq.com/",imageName:"forecasting",tags:["work","vue","d3","python"],tagline:"Election Forecasting for the 2018 Elections"},{title:"Bucketlist",link:null,imageName:"coming-soon",tags:["personal","vue","node"],tagline:"Manage your travel bucket list and plan trips"}]}}},Lt=At,Mt=Object(v["a"])(Lt,Et,Ot,!1,null,null,null);Mt.options.__file="Projects.vue";var Tt=Mt.exports;P()(Mt,{VDivider:st["a"],VFlex:L["a"],VLayout:M["a"]});var Dt={Maps:rt,Projects:Tt,Photos:jt},Vt={components:Dt},Ft=Vt,It=(i("a208"),Object(v["a"])(Ft,_,b,!1,null,null,null));It.options.__file="Portfolio.vue";var Wt=It.exports,$t=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},qt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"splash-tagline"},[i("div",{staticClass:"tagline-title"},[t._v("K.I.S.S.")]),i("div",{staticClass:"tagline-description"},[t._v("Keep it simple stupid")])]),i("div",{staticClass:"splash-wrapper"},[i("ul",{staticClass:"splash-image"},[i("li",[i("span")]),i("li",[i("span")]),i("li",[i("span")]),i("li",[i("span")]),i("li",[i("span")]),i("li",[i("span")])])])])}],Bt={name:"splash-page"},zt=Bt,Ut=(i("c903"),Object(v["a"])(zt,$t,qt,!1,null,null,null));Ut.options.__file="SplashPage.vue";var Gt=Ut.exports,Rt={Navbar:h,Portfolio:Wt,SplashPage:Gt},Ht=Object(l["a"])({},Object(c["c"])({mobile:"ux/mobile"})),Jt=Object(l["a"])({},Object(c["b"])({setScreenWidth:"ux/setWidth"}),{getWindowSize:function(){var t=this;null!==this.resizeTimeout&&clearTimeout(this.resizeTimeout),setTimeout(function(){t.setScreenWidth(document.documentElement.clientWidth),t.resizeTimeout=null},200)}}),Kt={name:"App",components:Rt,computed:Ht,methods:Jt,mounted:function(){this.getWindowSize(),window.addEventListener("resize",this.getWindowSize)},beforeDestroy:function(){window.removeEventListener("resize",this.getWindowSize)}},Yt=Kt,Xt=(i("034f"),i("7496")),Qt=Object(v["a"])(Yt,r,o,!1,null,null,null);Qt.options.__file="App.vue";var Zt=Qt.exports;P()(Qt,{VApp:Xt["a"]});var te,ee=i("ade3"),ie="SET_SCREEN_WIDTH",ae="SET_MOBILE",se="SET_MOBILE_PHONE",ne=!0,re={screenWidth:0,mobile:!1,mobilePhone:!1},oe=(te={},Object(ee["a"])(te,ie,function(t,e){t.screenWidth=e}),Object(ee["a"])(te,ae,function(t,e){t.mobile=e}),Object(ee["a"])(te,se,function(t,e){t.mobilePhone=e}),te),le={setWidth:function(t,e){var i=t.commit;i(ie,e),i(ae,e<960),i(se,e<420)}},ce={screenWidth:function(t){return t.screenWidth},mobile:function(t){return t.mobile},mobilePhone:function(t){return t.mobilePhone}},ue={namespaced:ne,state:re,mutations:oe,actions:le,getters:ce},me={ux:ue};a["a"].use(c["a"]);var pe=!1,de=new c["a"].Store({modules:me,strict:pe}),fe=de;a["a"].use(s["a"]),a["a"].config.productionTip=!1,new a["a"]({store:fe,render:function(t){return t(Zt)}}).$mount("#app")},"62be":function(t,e,i){},6945:function(t,e,i){},"69d5":function(t,e,i){},a208:function(t,e,i){"use strict";var a=i("2442"),s=i.n(a);s.a},c177:function(t,e,i){"use strict";var a=i("69d5"),s=i.n(a);s.a},c521:function(t,e,i){"use strict";var a=i("139b"),s=i.n(a);s.a},c903:function(t,e,i){"use strict";var a=i("11fc"),s=i.n(a);s.a},db43:function(t,e,i){},e158:function(t,e,i){t.exports=i.p+"img/election-results-min.97cba019.png"},e667:function(t,e,i){"use strict";var a=i("6945"),s=i.n(a);s.a},e6f4:function(t,e,i){t.exports=i.p+"img/google_trends_political_issues.24c0190b.png"},ea34:function(t,e,i){"use strict";var a=i("1b52"),s=i.n(a);s.a},eb54:function(t,e,i){t.exports=i.p+"img/0ptimus_poster.cb931581.png"},f7b7:function(t,e,i){t.exports=i.p+"img/gdp_vs_spi.1ceab91d.png"}});
//# sourceMappingURL=app.c39322bb.js.map