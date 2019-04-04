// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.playground.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('pluto.core');
goog.require('reagent.core');
goog.require('react_native_web.hooks');
goog.require('pluto.playground.ipfs');
goog.require('pluto.storages');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set,(function (db,p__2226){
var vec__2227 = p__2226;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2227,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2227,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2227,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k,v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_in,(function (db,p__2230){
var vec__2231 = p__2230;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2231,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2231,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2231,(2),null);
return cljs.core.assoc_in(db,path,v);
}));
pluto.playground.fx.update_extension_errors = (function pluto$playground$fx$update_extension_errors(p__2234,p__2235){
var map__2236 = p__2234;
var map__2236__$1 = (((((!((map__2236 == null))))?(((((map__2236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2236):map__2236);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2236__$1,cljs.core.cst$kw$db);
var vec__2237 = p__2235;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2237,(0),null);
var errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2237,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$errors,errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_errors,pluto.playground.fx.update_extension_errors);
pluto.playground.fx.clear_errors = (function pluto$playground$fx$clear_errors(p__2241,_){
var map__2242 = p__2241;
var map__2242__$1 = (((((!((map__2242 == null))))?(((((map__2242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2242):map__2242);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2242__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_clear_DASH_errors,pluto.playground.fx.clear_errors);
pluto.playground.fx.update_extension_parsed = (function pluto$playground$fx$update_extension_parsed(p__2244,p__2245){
var map__2246 = p__2244;
var map__2246__$1 = (((((!((map__2246 == null))))?(((((map__2246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2246):map__2246);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2246__$1,cljs.core.cst$kw$db);
var vec__2247 = p__2245;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2247,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2247,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$parsed,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,pluto.playground.fx.update_extension_parsed);
var G__2251_2261 = cljs.core.cst$kw$extension_SLASH_parse;
var G__2252_2262 = ((function (G__2251_2261){
return (function (p__2253){
var vec__2254 = p__2253;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2254,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2254,(1),null);
var map__2257 = pluto.core.parse(ctx,data);
var map__2257__$1 = (((((!((map__2257 == null))))?(((((map__2257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2257):map__2257);
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2257__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2257__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__2259 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2259) : re_frame.core.dispatch.call(null,G__2259));
} else {
var G__2260 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,data__$1], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2260) : re_frame.core.dispatch.call(null,G__2260));
}
});})(G__2251_2261))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2251_2261,G__2252_2262) : re_frame.core.reg_fx.call(null,G__2251_2261,G__2252_2262));
pluto.playground.fx.update_extension_data = (function pluto$playground$fx$update_extension_data(p__2263,p__2264){
var map__2265 = p__2263;
var map__2265__$1 = (((((!((map__2265 == null))))?(((((map__2265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2265):map__2265);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2265__$1,cljs.core.cst$kw$db);
var vec__2266 = p__2264;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2266,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2266,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2266,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$data,data),cljs.core.cst$kw$extension_SLASH_parse,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_data,pluto.playground.fx.update_extension_data);
var G__2270_2281 = cljs.core.cst$kw$extension_SLASH_read;
var G__2271_2282 = ((function (G__2270_2281){
return (function (p__2272){
var vec__2273 = p__2272;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2273,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2273,(1),null);
var G__2276_2283 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_clear_DASH_errors], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2276_2283) : re_frame.core.dispatch.call(null,G__2276_2283));

var map__2277 = pluto.core.read(source);
var map__2277__$1 = (((((!((map__2277 == null))))?(((((map__2277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2277):map__2277);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2277__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2277__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__2279 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2279) : re_frame.core.dispatch.call(null,G__2279));
} else {
var G__2280 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_data,ctx,data], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2280) : re_frame.core.dispatch.call(null,G__2280));
}
});})(G__2270_2281))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2270_2281,G__2271_2282) : re_frame.core.reg_fx.call(null,G__2270_2281,G__2271_2282));
pluto.playground.fx.update_extension_source = (function pluto$playground$fx$update_extension_source(p__2284,p__2285){
var map__2286 = p__2284;
var map__2286__$1 = (((((!((map__2286 == null))))?(((((map__2286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2286):map__2286);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2286__$1,cljs.core.cst$kw$db);
var vec__2287 = p__2285;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2287,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2287,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2287,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$source,data),cljs.core.cst$kw$extension_SLASH_read,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_source,pluto.playground.fx.update_extension_source);
var G__2291_2297 = cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value;
var G__2292_2298 = ((function (G__2291_2297){
return (function (p__2293){
var vec__2294 = p__2293;
var cm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2294,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2294,(1),null);
if(cljs.core.truth_((function (){var and__4120__auto__ = cm;
if(cljs.core.truth_(and__4120__auto__)){
return source;
} else {
return and__4120__auto__;
}
})())){
return cm.setValue(source);
} else {
return null;
}
});})(G__2291_2297))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2291_2297,G__2292_2298) : re_frame.core.reg_fx.call(null,G__2291_2297,G__2292_2298));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_editor,(function (p__2299,p__2300){
var map__2301 = p__2299;
var map__2301__$1 = (((((!((map__2301 == null))))?(((((map__2301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2301):map__2301);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2301__$1,cljs.core.cst$kw$db);
var vec__2302 = p__2300;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2302,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2302,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code_DASH_mirror.cljs$core$IFn$_invoke$arity$1(db),data], null)], null);
}));
pluto.playground.fx.append_log = (function pluto$playground$fx$append_log(p__2306,p__2307){
var map__2308 = p__2306;
var map__2308__$1 = (((((!((map__2308 == null))))?(((((map__2308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2308):map__2308);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2308__$1,cljs.core.cst$kw$db);
var vec__2309 = p__2307;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2309,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2309,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$logs,cljs.core.conj,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_append_DASH_log,pluto.playground.fx.append_log);
pluto.playground.fx.switch_filter_logs = (function pluto$playground$fx$switch_filter_logs(p__2313,p__2314){
var map__2315 = p__2313;
var map__2315__$1 = (((((!((map__2315 == null))))?(((((map__2315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2315):map__2315);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2315__$1,cljs.core.cst$kw$db);
var vec__2316 = p__2314;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2316,(0),null);
var checked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2316,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$filtered_DASH_logs,checked)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_filter_DASH_logs,pluto.playground.fx.switch_filter_logs);
pluto.playground.fx.clear_logs = (function pluto$playground$fx$clear_logs(p__2320,_){
var map__2321 = p__2320;
var map__2321__$1 = (((((!((map__2321 == null))))?(((((map__2321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2321):map__2321);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2321__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$logs)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_clear_DASH_logs,pluto.playground.fx.clear_logs);
pluto.playground.fx.set_selected = (function pluto$playground$fx$set_selected(p__2323,p__2324){
var map__2325 = p__2323;
var map__2325__$1 = (((((!((map__2325 == null))))?(((((map__2325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2325):map__2325);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2325__$1,cljs.core.cst$kw$db);
var vec__2326 = p__2324;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2326,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2326,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selected,path)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_selected,pluto.playground.fx.set_selected);
pluto.playground.fx.switch_preview = (function pluto$playground$fx$switch_preview(p__2330,p__2331){
var map__2332 = p__2330;
var map__2332__$1 = (((((!((map__2332 == null))))?(((((map__2332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2332):map__2332);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2332__$1,cljs.core.cst$kw$db);
var vec__2333 = p__2331;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2333,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$preview,cljs.core.not)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_preview,pluto.playground.fx.switch_preview);
var G__2337_2339 = cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs;
var G__2338_2340 = ((function (G__2337_2339){
return (function (value){
return pluto.playground.ipfs.save(value);
});})(G__2337_2339))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2337_2339,G__2338_2340) : re_frame.core.reg_fx.call(null,G__2337_2339,G__2338_2340));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_publish,(function (p__2341,_){
var map__2342 = p__2341;
var map__2342__$1 = (((((!((map__2342 == null))))?(((((map__2342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2342):map__2342);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2342__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$publish,cljs.core.cst$kw$in_DASH_progress_QMARK_], null),true),cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs,cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db)], null);
}));
var G__2345_2348 = cljs.core.cst$kw$fetch_DASH_extension_DASH_fx;
var G__2346_2349 = ((function (G__2345_2348){
return (function (){
var hash = (new URL(document.location)).searchParams.get("hash");
var uri = (cljs.core.truth_(hash)?["ipfs@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''):"url@assets/extensions/command/");
return pluto.storages.fetch(uri,((function (hash,uri,G__2345_2348){
return (function (p1__2344_SHARP_){
var G__2347 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_editor,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__2344_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value,cljs.core.cst$kw$content], null))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2347) : re_frame.core.dispatch.call(null,G__2347));
});})(hash,uri,G__2345_2348))
);
});})(G__2345_2348))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2345_2348,G__2346_2349) : re_frame.core.reg_fx.call(null,G__2345_2348,G__2346_2349));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fetch_DASH_extension,(function (p__2350,_){
var map__2351 = p__2350;
var map__2351__$1 = (((((!((map__2351 == null))))?(((((map__2351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2351):map__2351);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2351__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fetch_DASH_extension_DASH_fx,null,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$store_SLASH_clear_DASH_all], null)], null);
}));
var G__2353_2355 = cljs.core.cst$kw$set_DASH_url_DASH_fx;
var G__2354_2356 = ((function (G__2353_2355){
return (function (hash){
return pluto.playground.ipfs.set_url(hash);
});})(G__2353_2355))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2353_2355,G__2354_2356) : re_frame.core.reg_fx.call(null,G__2353_2355,G__2354_2356));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$open_DASH_example,(function (p__2357,p__2358){
var map__2359 = p__2357;
var map__2359__$1 = (((((!((map__2359 == null))))?(((((map__2359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2359):map__2359);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2359__$1,cljs.core.cst$kw$db);
var vec__2360 = p__2358;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2360,(0),null);
var hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2360,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$examples),cljs.core.cst$kw$set_DASH_url_DASH_fx,hash,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fetch_DASH_extension], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_properties,(function (p__2364,p__2365){
var map__2366 = p__2364;
var map__2366__$1 = (((((!((map__2366 == null))))?(((((map__2366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2366):map__2366);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2366__$1,cljs.core.cst$kw$db);
var vec__2367 = p__2365;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2367,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2367,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2367,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_properties,id], null),m)], null);
}));
