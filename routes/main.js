(self["webpackChunkbuzova"] = self["webpackChunkbuzova"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/map/map.component */ 1006);
/* harmony import */ var _angular_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/elements */ 2565);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _components_route_info_route_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/route-info/route-info.component */ 2375);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);






class AppModule {
    constructor(injector) {
        const custom = (0,_angular_elements__WEBPACK_IMPORTED_MODULE_2__.createCustomElement)(_components_map_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent, { injector });
        customElements.define('buzova-routes', custom);
    }
    ngDoBootstrap(args) {
    }
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector)); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_components_map_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent,
        _components_route_info_route_info_component__WEBPACK_IMPORTED_MODULE_1__.RouteInfoComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule] }); })();


/***/ }),

/***/ 1006:
/*!*************************************************!*\
  !*** ./src/app/components/map/map.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapComponent": () => (/* binding */ MapComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _map_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.store */ 5968);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3466);
/* harmony import */ var _routes_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../routes.json */ 5648);
/* harmony import */ var _route_info_route_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../route-info/route-info.component */ 2375);







const _c0 = ["map"];
class MapComponent {
    constructor(store) {
        this.store = store;
    }
    set routeList(list) {
        this.store.initRouteList(list);
    }
    ngOnInit() {
        this.routeList = _routes_json__WEBPACK_IMPORTED_MODULE_1__;
        this.store.lmap$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1))
            .subscribe(map => {
        });
    }
    ngAfterViewInit() {
        this.store.mapInit(this.map.nativeElement);
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_map_store__WEBPACK_IMPORTED_MODULE_0__.MapStore)); };
MapComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["bzv-map"]], viewQuery: function MapComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.map = _t.first);
    } }, inputs: { routeList: "routeList" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_map_store__WEBPACK_IMPORTED_MODULE_0__.MapStore])], decls: 3, vars: 0, consts: [[1, "l-map"], ["map", ""]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "bzv-route-info");
    } }, directives: [_route_info_route_info_component__WEBPACK_IMPORTED_MODULE_2__.RouteInfoComponent], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: block;\n  position: relative;\n}\n[_nghost-%COMP%]     .leaflet-div-icon {\n  background-color: transparent;\n  border: none;\n}\n.l-map[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n.bzv-route-info[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  padding: 12px 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQUY7QUFKQTtFQVFNLDZCQUFBO0VBQ0EsWUFBQTtBQUROO0FBS0E7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBSEY7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFKRiIsImZpbGUiOiJtYXAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbjpob3N0e1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIDo6bmctZGVlcHtcbiAgICAubGVhZmxldC1kaXYtaWNvbntcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbiAgfVxufVxuLmwtbWFwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5ienYtcm91dGUtaW5mb3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDI7XG4gIHBhZGRpbmc6IDEycHggMjRweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 5968:
/*!*********************************************!*\
  !*** ./src/app/components/map/map.store.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapStore": () => (/* binding */ MapStore)
/* harmony export */ });
/* harmony import */ var _ngrx_component_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/component-store */ 8569);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ 685);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1486);
/* harmony import */ var _utils_route_layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/route-layer */ 555);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);







const defaultState = {
    activeRouteId: -1,
    routes: [],
    lmap: null,
    selected: []
};
const LOCAL_STORAGE_ROUTES = 'routes';
class MapStore extends _ngrx_component_store__WEBPACK_IMPORTED_MODULE_2__.ComponentStore {
    constructor() {
        super(defaultState);
        this.routes = [];
        this.updateRoutes = this.updater((state, routes) => {
            return Object.assign(Object.assign({}, state), { routes });
        });
        this.lmap$ = this.select(({ lmap }) => {
            return lmap;
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(Boolean));
        this.routes$ = this.select(({ routes }) => routes);
        this.selected$ = this.select(({ selected }) => selected);
        this.mapInit = this.updater((state, el) => {
            const lmap = leaflet__WEBPACK_IMPORTED_MODULE_0__.map(el).setView([50.4113, 29.9358], 10);
            const tileLayer = leaflet__WEBPACK_IMPORTED_MODULE_0__.tileLayer('https://c.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery ©',
                maxZoom: 18,
                tileSize: 256
            });
            tileLayer.addTo(lmap);
            return Object.assign(Object.assign({}, state), { lmap });
        });
        this.onHoverRoute = this.updater((store, id) => {
            return Object.assign(Object.assign({}, store), { activeRouteId: id });
        });
        this.setChecked = this.updater((state, params) => {
            const selected = [...state.selected];
            const i = selected.indexOf(params.id);
            if (params.checked) {
                if (!selected.includes(params.id)) {
                    selected.push(params.id);
                }
            }
            else if (-1 < i) {
                selected.splice(i, 1);
            }
            localStorage.setItem(LOCAL_STORAGE_ROUTES, JSON.stringify(selected));
            return Object.assign(Object.assign({}, state), { selected });
        });
        this.activeRouteId$ = this.select(({ activeRouteId }) => activeRouteId);
        this.initRouteList = this.effect((routes$) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)([routes$, this.lmap$])
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(([routes, lmap]) => {
                lmap.zoomControl.setPosition('bottomright');
                return routes;
            }))
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => {
                this.routes
                    .forEach(r => r.remove());
                this.routes.length = 0;
            }))
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((routes) => {
                routes.forEach(route => {
                    const latLngList = [];
                    const routeLayer = new _utils_route_layer__WEBPACK_IMPORTED_MODULE_1__.RouteLayer(route.id, route.name, this.get().lmap);
                    this.routes.push(routeLayer);
                    route.points
                        .forEach(p => {
                        latLngList.push(new leaflet__WEBPACK_IMPORTED_MODULE_0__.LatLng(p.latLng[0], p.latLng[1]));
                    });
                    routeLayer.setLatLng(latLngList);
                });
                const selected = this.getSelectedFromLocalStorage();
                selected.forEach(id => {
                    this.setChecked({ id, checked: true });
                });
                this.updateRoutes(routes);
                return;
            }));
        });
        this.activeRouteId$
            .subscribe(d => {
            this.routes
                .forEach(route => {
                if (route.id === d) {
                    if (route.isShown) {
                        route.highlight();
                    }
                }
                else {
                    route.deHighlight();
                }
            });
        });
        this.selected$
            .subscribe(selected => {
            this.routes.forEach(r => {
                if (selected.includes(r.id)) {
                    r.draw().highlight();
                }
                else {
                    r.remove();
                }
            });
        });
    }
    isChecked$(id) {
        return this.selected$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((r) => {
            return r.includes(id);
        }));
    }
    getSelectedFromLocalStorage() {
        let selected = [];
        try {
            selected = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ROUTES)) || [1];
        }
        catch (e) {
            selected = [];
        }
        return selected;
    }
}
MapStore.ɵfac = function MapStore_Factory(t) { return new (t || MapStore)(); };
MapStore.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: MapStore, factory: MapStore.ɵfac });


/***/ }),

/***/ 2375:
/*!***************************************************************!*\
  !*** ./src/app/components/route-info/route-info.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouteInfoComponent": () => (/* binding */ RouteInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _map_map_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../map/map.store */ 5968);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);



function RouteInfoComponent_div_3_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseover", function RouteInfoComponent_div_3_li_2_Template_li_mouseover_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const item_r2 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r4.onHover(item_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RouteInfoComponent_div_3_li_2_Template_input_change_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const item_r2 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r6.onValueChange($event, item_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", i_r3 + 1, " ", item_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, ctx_r1.isChecked(item_r2.id)));
} }
function RouteInfoComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RouteInfoComponent_div_3_li_2_Template, 4, 5, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, ctx_r0.routes$));
} }
class RouteInfoComponent {
    constructor(store) {
        this.store = store;
        this.cssClass = 'bzv-route-info';
        this.routes$ = this.store.routes$;
        this.isShown = true;
    }
    ngOnInit() {
    }
    onHover(id) {
        this.store.onHoverRoute(id);
    }
    onValueChange(e, id) {
        this.store.setChecked({
            id,
            checked: e.target.checked
        });
    }
    isChecked(id) {
        return this.store.isChecked$(id);
    }
    onShow() {
        this.isShown = !this.isShown;
    }
}
RouteInfoComponent.ɵfac = function RouteInfoComponent_Factory(t) { return new (t || RouteInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_map_map_store__WEBPACK_IMPORTED_MODULE_0__.MapStore)); };
RouteInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RouteInfoComponent, selectors: [["bzv-route-info"]], hostVars: 2, hostBindings: function RouteInfoComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.cssClass);
    } }, decls: 4, vars: 2, consts: [[3, "click"], [4, "ngIf"], [3, "mouseover", 4, "ngFor", "ngForOf"], [3, "mouseover"], ["type", "checkbox", 3, "checked", "change"]], template: function RouteInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RouteInfoComponent_Template_button_click_1_listener() { return ctx.onShow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RouteInfoComponent_div_3_Template, 4, 3, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.isShown ? "Hide list routes" : "Show list routes", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isShown);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 400px;\n}\nli[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 6px 12px;\n  background-color: rgba(255, 255, 255, 0.54);\n}\nli[_ngcontent-%COMP%]:hover {\n  background-color: white;\n}\nbutton[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 6px 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlLWluZm8uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQUNGO0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQ0FBQTtBQUFGO0FBQ0U7RUFDRSx1QkFBQTtBQUNKO0FBRUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUFBRiIsImZpbGUiOiJyb3V0ZS1pbmZvLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNDAwcHg7XG59XG5cbmxpe1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTQpO1xuICAmOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG59XG5idXR0b257XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA2cHggMTJweDtcbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 555:
/*!**************************************!*\
  !*** ./src/app/utils/route-layer.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouteLayer": () => (/* binding */ RouteLayer)
/* harmony export */ });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ 685);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);

class RouteLayer {
    constructor(id, name, lmap) {
        this.id = id;
        this.name = name;
        this.lmap = lmap;
        this.circles = [];
        this.isShown = false;
    }
    setLatLng(latLng) {
        this.remove();
        this.circles.length = 0;
        this.latLng = latLng;
        this.setCircles();
        this.setPolygon();
        return this;
    }
    draw() {
        if (this.isShown) {
            return this;
        }
        this.polygon.addTo(this.lmap);
        this.circles.forEach(c => {
            c.addTo(this.lmap);
        });
        this.isShown = true;
        return this;
    }
    highlight() {
        this.polygon.setStyle({
            opacity: 1,
        });
        this.circles.forEach(c => {
            c.setStyle({
                opacity: 1
            });
        });
        const latMin = Math.min(...this.latLng.map(ll => ll.lat));
        const latMax = Math.max(...this.latLng.map(ll => ll.lat));
        const lngMax = Math.max(...this.latLng.map(ll => ll.lng));
        const lngMin = Math.min(...this.latLng.map(ll => ll.lng));
        const b = leaflet__WEBPACK_IMPORTED_MODULE_0__.latLngBounds([
            [latMin, lngMin],
            [latMax, lngMax]
        ]);
        this.lmap.fitBounds(b);
    }
    deHighlight() {
        this.polygon.setStyle({
            opacity: 0.4,
        });
        this.circles.forEach(c => {
            c.setStyle({
                opacity: 0.5
            });
        });
    }
    remove() {
        if (!this.isShown) {
            return this;
        }
        this.circles.forEach(c => {
            this.lmap.removeLayer(c);
        });
        if (this.polygon) {
            this.lmap.removeLayer(this.polygon);
        }
        this.isShown = false;
        return this;
    }
    setCircles() {
        this.latLng.forEach(_latLng => {
            this.circles.push(this.getCircle(_latLng));
        });
        return this;
    }
    setPolygon() {
        this.polygon = leaflet__WEBPACK_IMPORTED_MODULE_0__.polygon([
            ...this.latLng
        ], {
            color: 'red',
            opacity: 0.4,
            fillColor: '#f03',
            fillOpacity: 0.02,
        });
        return this;
    }
    getCircle(latLng) {
        return leaflet__WEBPACK_IMPORTED_MODULE_0__.circle(latLng, {
            color: 'red',
            opacity: 0.5,
            fillColor: '#f03',
            fillOpacity: 0.1,
            radius: 1000
        });
    }
}


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 5648:
/*!*****************************!*\
  !*** ./src/app/routes.json ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"name":"Andreevka Osovcy 100км ","id":1,"points":[{"name":"Buzove","latLng":[50.39862,30.06]},{"name":"Andreevka","latLng":[50.5523,29.828]},{"name":"Osovsi","latLng":[50.3335,29.4717]}]},{"name":"Migalki Kocherov 134 km,","id":2,"points":[{"name":"000Buzovakta","latLng":[50.39862,30.06]},{"name":"075Migalki","latLng":[50.66445,29.54695]},{"name":"049Kocherov","latLng":[50.36445,29.345]}]},{"name":"Hluhiv Bilyi bereg 152 km","id":3,"points":[{"name":"Buzovakta","latLng":[50.39862,30.06]},{"name":"Hluhiv","latLng":[50.53445,29.19917]},{"name":"Bilyi Bereh","latLng":[50.76,29.48195]}]},{"name":"Nedashki2 Kocherov 202 km","id":4,"points":[{"name":"Buzovakta","latLng":[50.39862,30.06]},{"name":"Nedashki2","latLng":[50.97112,29.29388]},{"name":"Kocherov","latLng":[50.36445,29.345]}]},{"name":"Narodichi Luginy Bilyi Bereh 301 km km","id":5,"points":[{"name":"Buzovakta","latLng":[50.39862,30.06]},{"name":"Narodichi","latLng":[51.20138,29.06972]},{"name":"Luginy","latLng":[51.09305,28.41945]}]},{"name":"Obykhody Volodarsk Novezhyttia 302 km","id":6,"points":[{"name":"Buzovakta","latLng":[50.39862,30.06]},{"name":"164Obykhody","latLng":[51.01612,28.97028]},{"name":"133Volodarsk","latLng":[50.6075,28.46667]},{"name":"152Novezhyttia","latLng":[50.86,29.395]}]},{"name":"Broniki Kocherov.tsk 324 km","id":7,"points":[{"name":"Buzovakta","latLng":[50.39862,30.06]},{"name":"Broniki","latLng":[50.55,27.8]},{"name":"Kocherov","latLng":[50.36445,29.345]}]},{"name":"Bilyi Bereh Usovo Broniki Gorodnyavka2 Dovbysh Osovcy 510 km","id":8,"points":[{"name":"Buzovakta","latLng":[50.39862,30.06]},{"name":"Bilyi Bereh","latLng":[50.76,29.48195]},{"name":"Usovo","latLng":[51.37555,28.11388]},{"name":"Broniki","latLng":[50.55,27.8]},{"name":"Gorodnyavka2","latLng":[50.26222,27.34638]},{"name":"Dovbysh","latLng":[50.36862,28.01055]},{"name":"Osovsi","latLng":[50.3335,29.4717]}]},{"name":"467 km, Broniki Hmelnik Chernorud Kocherov.tsk","id":9,"points":[{"name":"Buzovakta","latLng":[50.39862,30.06]},{"name":"Broniki","latLng":[50.55,27.8]},{"name":"Hmelnik","latLng":[49.56667,27.97638]},{"name":"Chernorud","latLng":[49.85,29.05833]},{"name":"Kocherov","latLng":[50.36445,29.345]}]},{"name":"601 km, Samostrel Bagrynivci Lozna Chernorud Kocherov.tsk","id":10,"points":[{"name":"Buzovakta","latLng":[50.39862,30.06]},{"name":"Samostrel","latLng":[50.59917,26.92945]},{"name":"Bagrynivci","latLng":[49.30695,27.93778]},{"name":"Lozna","latLng":[49.61667,28.23333]},{"name":"Chernorud","latLng":[49.85,29.05833]},{"name":"Kocherov","latLng":[50.36445,29.345]}]},{"name":"763 km, Nevirkov Krygopol","id":11,"points":[{"name":"Buzovakta","latLng":[50.39862,30.06]},{"name":"Nevirkov","latLng":[50.7,26.83333]},{"name":"Krygopol","latLng":[48.41112,28.9]}]},{"name":"1008 km, Manevichi2 Bochkivcy Dyakov","id":12,"points":[{"name":"Buzovakta","latLng":[50.39862,30.06]},{"name":"Manevichi2","latLng":[51.19945,25.4275]},{"name":"Bochkivcy","latLng":[48.43333,26.16667]},{"name":"Dyakov","latLng":[49.385,27.92778]}]}]');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map