(self.webpackChunkbuzova=self.webpackChunkbuzova||[]).push([["main"],{8255:m=>{function p(r){return Promise.resolve().then(()=>{var u=new Error("Cannot find module '"+r+"'");throw u.code="MODULE_NOT_FOUND",u})}p.keys=()=>[],p.resolve=p,p.id=8255,m.exports=p},4145:(m,p,r)=>{"use strict";var u=r(9075),e=r(4693),b=r(5635),h=r(4216),x=r(5435),d=r(8002),y=r(6782),O=r(3342),k=r(9112);class B{constructor(s,t,o){this.id=s,this.name=t,this.lmap=o,this.circles=[],this.isShown=!1}setLatLng(s){return this.remove(),this.circles.length=0,this.latLng=s,this.setCircles(),this.setPolygon(),this}draw(){return this.isShown||(this.polygon.addTo(this.lmap),this.circles.forEach(s=>{s.addTo(this.lmap)}),this.isShown=!0),this}highlight(){this.polygon.setStyle({opacity:1}),this.circles.forEach(a=>{a.setStyle({opacity:1})});const s=Math.min(...this.latLng.map(a=>a.lat)),t=Math.max(...this.latLng.map(a=>a.lat)),o=Math.max(...this.latLng.map(a=>a.lng)),i=Math.min(...this.latLng.map(a=>a.lng)),l=h.latLngBounds([[s,i],[t,o]]);this.lmap.fitBounds(l)}deHighlight(){this.polygon.setStyle({opacity:.4}),this.circles.forEach(s=>{s.setStyle({opacity:.5})})}remove(){return this.isShown?(this.circles.forEach(s=>{this.lmap.removeLayer(s)}),this.polygon&&this.lmap.removeLayer(this.polygon),this.isShown=!1,this):this}setCircles(){return this.latLng.forEach(s=>{this.circles.push(this.getCircle(s))}),this}setPolygon(){return this.polygon=h.polygon([...this.latLng],{color:"red",opacity:.4,fillColor:"#f03",fillOpacity:.02}),this}getCircle(s){return h.circle(s,{color:"red",opacity:.5,fillColor:"#f03",fillOpacity:.1,radius:1e3})}}const S={activeRouteId:-1,routes:[],lmap:null,selected:[]},C="routes";let L=(()=>{class n extends b.m1{constructor(){super(S),this.routes=[],this.updateRoutes=this.updater((t,o)=>Object.assign(Object.assign({},t),{routes:o})),this.lmap$=this.select(({lmap:t})=>t).pipe((0,x.h)(Boolean)),this.routes$=this.select(this.lmap$,this.state$,(t,o)=>o.routes),this.selected$=this.select(({selected:t})=>t),this.mapInit=this.updater((t,o)=>{const i=h.map(o).setView([50.4113,29.9358],10);return h.tileLayer("https://c.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery \xa9',maxZoom:18,tileSize:256}).addTo(i),Object.assign(Object.assign({},t),{lmap:i})}),this.onHoverRoute=this.updater((t,o)=>Object.assign(Object.assign({},t),{activeRouteId:o})),this.setChecked=this.updater((t,o)=>{const i=[...t.selected],l=i.indexOf(o.id);return o.checked?i.includes(o.id)||i.push(o.id):-1<l&&i.splice(l,1),localStorage.setItem(C,JSON.stringify(i)),Object.assign(Object.assign({},t),{selected:i})}),this.activeRouteId$=this.select(({activeRouteId:t})=>t),this.initFlightArea=this.effect(t=>(0,k.aj)([t,this.lmap$]).pipe((0,d.U)(([o,i])=>{let l;const a=c=>c>1e3?"#800026":c>500?"#BD0026":c>200?"#E31A1C":c>100?"#b8dffc":c>50?"#cafdb8":c>20?"#FEB24C":c>10?"#FED976":"#bbfff3",F=c=>{const v=c.target;v.setStyle({weight:5,color:"#e22718",dashArray:"",fillOpacity:.1}),!h.Browser.ie&&!h.Browser.opera&&!h.Browser.edge&&v.bringToFront()},N=c=>{l.resetStyle(c.target)};return l=h.geoJSON(o,{style:c=>({weight:2,opacity:1,color:"#b25632",dashArray:"3",fillOpacity:.3,fillColor:a(c.properties.density)}),onEachFeature:(c,v)=>{v.on({mouseover:F,mouseout:N})}}).addTo(i),!0}))),this.initRouteList=this.effect(t=>(0,k.aj)([t,this.lmap$]).pipe((0,d.U)(([o,i])=>(i.zoomControl.setPosition("bottomright"),o))).pipe((0,d.U)(o=>this.updateRoutes(o)))),this.activeRouteId$.pipe((0,y.R)(this.destroy$)).subscribe(t=>{this.routes.forEach(o=>{o.id===t?o.isShown&&o.highlight():o.deHighlight()})}),this.selected$.pipe((0,y.R)(this.destroy$)).subscribe(t=>{this.routes.forEach(o=>{t.includes(o.id)?o.draw().highlight():o.remove()})}),this.routes$.pipe((0,y.R)(this.destroy$)).pipe((0,O.b)(()=>{this.routes.forEach(t=>t.remove()),this.routes.length=0})).subscribe(t=>{t.forEach(i=>{const l=[],a=new B(i.id,i.name,this.get().lmap);this.routes.push(a),i.points.forEach(g=>{l.push(new h.LatLng(g.latLng[0],g.latLng[1]))}),a.setLatLng(l)}),this.getSelectedFromLocalStorage().forEach(i=>{this.setChecked({id:i,checked:!0})})})}isChecked$(t){return this.selected$.pipe((0,d.U)(o=>o.includes(t)))}getSelectedFromLocalStorage(){let t=[];try{t=JSON.parse(localStorage.getItem(C))||[1]}catch(o){t=[]}return t}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})();const _=JSON.parse('[{"name":"Andreevka Osovcy 100\u043a\u043c ","id":1,"points":[{"name":"Buzove","latLng":[50.39862,30.06]},{"name":"Andreevka","latLng":[50.5523,29.828]},{"name":"Osovsi","latLng":[50.3335,29.4717]}]},{"name":"Migalki Kocherov 134km","id":2,"points":[{"name":"000Buzovakta","latLng":[50.39862,30.06]},{"name":"075Migalki","latLng":[50.66445,29.54695]},{"name":"049Kocherov","latLng":[50.36445,29.345]}]},{"name":"Hluhiv Bilyi bereg 152km","id":3,"points":[{"name":"Buzovakta","latLng":[50.39862,30.06]},{"name":"Hluhiv","latLng":[50.53445,29.19917]},{"name":"Bilyi Bereh","latLng":[50.76,29.48195]}]},{"name":"Nedashki2 Kocherov 202km","id":4,"points":[{"name":"Buzovakta","latLng":[50.39862,30.06]},{"name":"Nedashki2","latLng":[50.97112,29.29388]},{"name":"Kocherov","latLng":[50.36445,29.345]}]},{"name":"Narodichi, Luginy Bilyi Bereh 301km","id":5,"points":[{"name":"Buzovakta","latLng":[50.39862,30.06]},{"name":"Narodichi","latLng":[51.20138,29.06972]},{"name":"Luginy","latLng":[51.09305,28.41945]},{"name":"Bilyi Bereh","latLng":[50.76,29.48195]}]},{"name":"Obykhody Volodarsk Novezhyttia 302 km","id":6,"points":[{"name":"Buzovakta","latLng":[50.39862,30.06]},{"name":"164Obykhody","latLng":[51.01612,28.97028]},{"name":"133Volodarsk","latLng":[50.6075,28.46667]},{"name":"152Novezhyttia","latLng":[50.86,29.395]}]},{"name":"Broniki, Kocherov 324km","id":7,"points":[{"name":"Buzovakta","latLng":[50.39862,30.06]},{"name":"Broniki","latLng":[50.55,27.8]},{"name":"Kocherov","latLng":[50.36445,29.345]}]},{"name":"Bilyi Bereh, Usovo, Broniki, Gorodnyavka2, Dovbysh, Osovcy 510km","id":8,"points":[{"name":"Buzovakta","latLng":[50.39862,30.06]},{"name":"Bilyi Bereh","latLng":[50.76,29.48195]},{"name":"Usovo","latLng":[51.37555,28.11388]},{"name":"Broniki","latLng":[50.55,27.8]},{"name":"Gorodnyavka2","latLng":[50.26222,27.34638]},{"name":"Dovbysh","latLng":[50.36862,28.01055]},{"name":"Osovsi","latLng":[50.3335,29.4717]}]},{"name":"Broniki Hmelnik Chernorud Kocherov 467km","id":9,"points":[{"name":"Buzovakta","latLng":[50.39862,30.06]},{"name":"Broniki","latLng":[50.55,27.8]},{"name":"Hmelnik","latLng":[49.56667,27.97638]},{"name":"Chernorud","latLng":[49.85,29.05833]},{"name":"Kocherov","latLng":[50.36445,29.345]}]},{"name":"Samostrel Bagrynivci Lozna Chernorud Kocherov 601km","id":10,"points":[{"name":"Buzovakta","latLng":[50.39862,30.06]},{"name":"Samostrel","latLng":[50.59917,26.92945]},{"name":"Bagrynivci","latLng":[49.30695,27.93778]},{"name":"Lozna","latLng":[49.61667,28.23333]},{"name":"Chernorud","latLng":[49.85,29.05833]},{"name":"Kocherov","latLng":[50.36445,29.345]}]},{"name":"Nevirkov Krygopol 763km","id":11,"points":[{"name":"Buzovakta","latLng":[50.39862,30.06]},{"name":"Nevirkov","latLng":[50.7,26.83333]},{"name":"Krygopol","latLng":[48.41112,28.9]}]},{"name":"Manevichi2 Bochkivcy Dyakov 1008km","id":12,"points":[{"name":"Buzovakta","latLng":[50.39862,30.06]},{"name":"Manevichi2","latLng":[51.19945,25.4275]},{"name":"Bochkivcy","latLng":[48.43333,26.16667]},{"name":"Dyakov","latLng":[49.385,27.92778]}]}]'),w=JSON.parse('{"type":"FeatureCollection","features":[{"type":"Feature","id":"01","properties":{"name":"UKT284B","density":51},"geometry":{"type":"Polygon","coordinates":[[[30.075384,50.377086],[30.205654,50.425358],[30.183055,50.456563],[30.066342,50.52117],[29.914068,50.542],[29.915503,50.34658]]]}},{"type":"Feature","id":"01","properties":{"name":"ukt824\u0410","density":10},"geometry":{"type":"Polygon","coordinates":[[[29.804435,50.364818],[29.826933,50.552594],[29.914068,50.542],[29.915503,50.34658]]]}}]}');var M=r(8573),f=r(8583);function z(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"li",3),e.NdJ("mouseover",function(){const l=e.CHM(t).$implicit;return e.oxw(2).onHover(l.id)})("click",function(i){const a=e.CHM(t).$implicit;return e.oxw(2).onItemClick(i,a.id)}),e.TgZ(1,"input",4),e.NdJ("change",function(i){const a=e.CHM(t).$implicit;return e.oxw(2).onValueChange(i,a.id)}),e.ALo(2,"async"),e.qZA(),e._uU(3),e.qZA()}if(2&n){const t=s.$implicit,o=s.index,i=e.oxw(2);e.xp6(1),e.Q6J("checked",e.lcZ(2,3,i.isChecked(t.id))),e.xp6(2),e.AsE(" ",o+1," ",t.name," ")}}function A(n,s){if(1&n&&(e.TgZ(0,"div"),e.TgZ(1,"ul"),e.YNc(2,z,4,5,"li",2),e.ALo(3,"async"),e.qZA(),e.qZA()),2&n){const t=e.oxw();e.xp6(2),e.Q6J("ngForOf",e.lcZ(3,1,t.routes$))}}let R=(()=>{class n{constructor(t){this.store=t,this.cssClass="bzv-route-info",this.routes$=this.store.routes$,this.isShown=!0}ngOnInit(){}onHover(t){this.store.onHoverRoute(t)}onValueChange(t,o){this.store.setChecked({id:o,checked:t.target.checked})}onItemClick(t,o){t.stopPropagation(),this.store.isChecked$(o).pipe((0,M.q)(1)).subscribe(i=>{this.store.setChecked({id:o,checked:!i})})}isChecked(t){return this.store.isChecked$(t)}onShow(){this.isShown=!this.isShown}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(L))},n.\u0275cmp=e.Xpm({type:n,selectors:[["bzv-route-info"]],hostVars:2,hostBindings:function(t,o){2&t&&e.Tol(o.cssClass)},decls:4,vars:2,consts:[[3,"click"],[4,"ngIf"],[3,"mouseover","click",4,"ngFor","ngForOf"],[3,"mouseover","click"],["type","checkbox",3,"checked","change"]],template:function(t,o){1&t&&(e.TgZ(0,"div"),e.TgZ(1,"button",0),e.NdJ("click",function(){return o.onShow()}),e._uU(2),e.qZA(),e.qZA(),e.YNc(3,A,4,3,"div",1)),2&t&&(e.xp6(2),e.hij(" ",o.isShown?"Hide list of routes":"Show list of routes"," "),e.xp6(1),e.Q6J("ngIf",o.isShown))},directives:[f.O5,f.sg],pipes:[f.Ov],styles:["[_nghost-%COMP%]{display:block;width:600px}li[_ngcontent-%COMP%]{cursor:pointer;padding:6px 12px;background-color:#ffffff8a}li[_ngcontent-%COMP%]:hover{background-color:#fff}button[_ngcontent-%COMP%]{width:100%;padding:6px 12px}@media (max-width: 600px){[_nghost-%COMP%]{width:100%}}"],changeDetection:0}),n})();const I=["map"];let $=(()=>{class n{constructor(t){this.store=t}set routeList(t){this.store.initRouteList(t)}set flightArea(t){this.store.initFlightArea(t)}ngOnInit(){this.routeList=_,this.flightArea=w}ngAfterViewInit(){this.store.mapInit(this.map.nativeElement)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(L))},n.\u0275cmp=e.Xpm({type:n,selectors:[["bzv-map"]],viewQuery:function(t,o){if(1&t&&e.Gf(I,5,e.SBq),2&t){let i;e.iGM(i=e.CRH())&&(o.map=i.first)}},inputs:{routeList:"routeList",flightArea:"flightArea"},features:[e._Bn([L])],decls:3,vars:0,consts:[[1,"l-map"],["map",""]],template:function(t,o){1&t&&(e._UZ(0,"div",0,1),e._UZ(2,"bzv-route-info"))},directives:[R],styles:["[_nghost-%COMP%]{height:100%;width:100%;display:block;position:relative}[_nghost-%COMP%]     .leaflet-div-icon{background-color:transparent;border:none}.l-map[_ngcontent-%COMP%]{position:absolute;left:0;top:0;width:100%;height:100%;z-index:1}.bzv-route-info[_ngcontent-%COMP%]{position:absolute;top:0;left:0;z-index:2;padding:12px 24px}"]}),n})();var E=r(290);let T=(()=>{class n{constructor(t){const o=(0,E.iD)($,{injector:t});customElements.define("buzova-routes",o)}ngDoBootstrap(t){}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(e.zs3))},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[],imports:[[f.ez,u.b2]]}),n})();(0,e.G48)(),u.q6().bootstrapModule(T).catch(n=>console.error(n))}},m=>{m.O(0,["vendor"],()=>m(m.s=4145)),m.O()}]);