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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set,(function (db,p__2215){
var vec__2216 = p__2215;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2216,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2216,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2216,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k,v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_in,(function (db,p__2219){
var vec__2220 = p__2219;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2220,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2220,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2220,(2),null);
return cljs.core.assoc_in(db,path,v);
}));
pluto.playground.fx.update_extension_errors = (function pluto$playground$fx$update_extension_errors(p__2223,p__2224){
var map__2225 = p__2223;
var map__2225__$1 = (((((!((map__2225 == null))))?(((((map__2225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2225):map__2225);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2225__$1,cljs.core.cst$kw$db);
var vec__2226 = p__2224;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2226,(0),null);
var errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2226,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$errors,errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_errors,pluto.playground.fx.update_extension_errors);
pluto.playground.fx.clear_errors = (function pluto$playground$fx$clear_errors(p__2230,_){
var map__2231 = p__2230;
var map__2231__$1 = (((((!((map__2231 == null))))?(((((map__2231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2231):map__2231);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2231__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_clear_DASH_errors,pluto.playground.fx.clear_errors);
pluto.playground.fx.update_extension_parsed = (function pluto$playground$fx$update_extension_parsed(p__2233,p__2234){
var map__2235 = p__2233;
var map__2235__$1 = (((((!((map__2235 == null))))?(((((map__2235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2235):map__2235);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2235__$1,cljs.core.cst$kw$db);
var vec__2236 = p__2234;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2236,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2236,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$parsed,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,pluto.playground.fx.update_extension_parsed);
var G__2240_2250 = cljs.core.cst$kw$extension_SLASH_parse;
var G__2241_2251 = ((function (G__2240_2250){
return (function (p__2242){
var vec__2243 = p__2242;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2243,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2243,(1),null);
var map__2246 = pluto.core.parse(ctx,data);
var map__2246__$1 = (((((!((map__2246 == null))))?(((((map__2246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2246):map__2246);
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2246__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2246__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__2248 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2248) : re_frame.core.dispatch.call(null,G__2248));
} else {
var G__2249 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,data__$1], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2249) : re_frame.core.dispatch.call(null,G__2249));
}
});})(G__2240_2250))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2240_2250,G__2241_2251) : re_frame.core.reg_fx.call(null,G__2240_2250,G__2241_2251));
pluto.playground.fx.update_extension_data = (function pluto$playground$fx$update_extension_data(p__2252,p__2253){
var map__2254 = p__2252;
var map__2254__$1 = (((((!((map__2254 == null))))?(((((map__2254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2254):map__2254);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2254__$1,cljs.core.cst$kw$db);
var vec__2255 = p__2253;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2255,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2255,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2255,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$data,data),cljs.core.cst$kw$extension_SLASH_parse,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_data,pluto.playground.fx.update_extension_data);
var G__2259_2270 = cljs.core.cst$kw$extension_SLASH_read;
var G__2260_2271 = ((function (G__2259_2270){
return (function (p__2261){
var vec__2262 = p__2261;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2262,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2262,(1),null);
var G__2265_2272 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_clear_DASH_errors], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2265_2272) : re_frame.core.dispatch.call(null,G__2265_2272));

var map__2266 = pluto.core.read(source);
var map__2266__$1 = (((((!((map__2266 == null))))?(((((map__2266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2266):map__2266);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2266__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2266__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__2268 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2268) : re_frame.core.dispatch.call(null,G__2268));
} else {
var G__2269 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_data,ctx,data], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2269) : re_frame.core.dispatch.call(null,G__2269));
}
});})(G__2259_2270))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2259_2270,G__2260_2271) : re_frame.core.reg_fx.call(null,G__2259_2270,G__2260_2271));
pluto.playground.fx.update_extension_source = (function pluto$playground$fx$update_extension_source(p__2273,p__2274){
var map__2275 = p__2273;
var map__2275__$1 = (((((!((map__2275 == null))))?(((((map__2275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2275):map__2275);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2275__$1,cljs.core.cst$kw$db);
var vec__2276 = p__2274;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2276,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2276,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2276,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$source,data),cljs.core.cst$kw$extension_SLASH_read,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_source,pluto.playground.fx.update_extension_source);
var G__2280_2286 = cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value;
var G__2281_2287 = ((function (G__2280_2286){
return (function (p__2282){
var vec__2283 = p__2282;
var cm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2283,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2283,(1),null);
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
});})(G__2280_2286))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2280_2286,G__2281_2287) : re_frame.core.reg_fx.call(null,G__2280_2286,G__2281_2287));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_editor,(function (p__2288,p__2289){
var map__2290 = p__2288;
var map__2290__$1 = (((((!((map__2290 == null))))?(((((map__2290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2290):map__2290);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2290__$1,cljs.core.cst$kw$db);
var vec__2291 = p__2289;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2291,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2291,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code_DASH_mirror.cljs$core$IFn$_invoke$arity$1(db),data], null)], null);
}));
pluto.playground.fx.append_log = (function pluto$playground$fx$append_log(p__2295,p__2296){
var map__2297 = p__2295;
var map__2297__$1 = (((((!((map__2297 == null))))?(((((map__2297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2297):map__2297);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2297__$1,cljs.core.cst$kw$db);
var vec__2298 = p__2296;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2298,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2298,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$logs,cljs.core.conj,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_append_DASH_log,pluto.playground.fx.append_log);
pluto.playground.fx.switch_filter_logs = (function pluto$playground$fx$switch_filter_logs(p__2302,p__2303){
var map__2304 = p__2302;
var map__2304__$1 = (((((!((map__2304 == null))))?(((((map__2304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2304):map__2304);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2304__$1,cljs.core.cst$kw$db);
var vec__2305 = p__2303;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2305,(0),null);
var checked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2305,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$filtered_DASH_logs,checked)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_filter_DASH_logs,pluto.playground.fx.switch_filter_logs);
pluto.playground.fx.clear_logs = (function pluto$playground$fx$clear_logs(p__2309,_){
var map__2310 = p__2309;
var map__2310__$1 = (((((!((map__2310 == null))))?(((((map__2310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2310):map__2310);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2310__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$logs)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_clear_DASH_logs,pluto.playground.fx.clear_logs);
pluto.playground.fx.set_selected = (function pluto$playground$fx$set_selected(p__2312,p__2313){
var map__2314 = p__2312;
var map__2314__$1 = (((((!((map__2314 == null))))?(((((map__2314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2314):map__2314);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2314__$1,cljs.core.cst$kw$db);
var vec__2315 = p__2313;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2315,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2315,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selected,path)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_selected,pluto.playground.fx.set_selected);
pluto.playground.fx.switch_preview = (function pluto$playground$fx$switch_preview(p__2319,p__2320){
var map__2321 = p__2319;
var map__2321__$1 = (((((!((map__2321 == null))))?(((((map__2321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2321):map__2321);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2321__$1,cljs.core.cst$kw$db);
var vec__2322 = p__2320;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2322,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$preview,cljs.core.not)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_preview,pluto.playground.fx.switch_preview);
var G__2326_2328 = cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs;
var G__2327_2329 = ((function (G__2326_2328){
return (function (value){
return pluto.playground.ipfs.save(value);
});})(G__2326_2328))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2326_2328,G__2327_2329) : re_frame.core.reg_fx.call(null,G__2326_2328,G__2327_2329));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_publish,(function (p__2330,_){
var map__2331 = p__2330;
var map__2331__$1 = (((((!((map__2331 == null))))?(((((map__2331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2331):map__2331);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2331__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$publish,cljs.core.cst$kw$in_DASH_progress_QMARK_], null),true),cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs,cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db)], null);
}));
var G__2334_2337 = cljs.core.cst$kw$fetch_DASH_extension_DASH_fx;
var G__2335_2338 = ((function (G__2334_2337){
return (function (){
var hash = (new URL(document.location)).searchParams.get("hash");
var uri = (cljs.core.truth_(hash)?["ipfs@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''):"url@assets/extensions/command/");
return pluto.storages.fetch(uri,((function (hash,uri,G__2334_2337){
return (function (p1__2333_SHARP_){
var G__2336 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_editor,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__2333_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value,cljs.core.cst$kw$content], null))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2336) : re_frame.core.dispatch.call(null,G__2336));
});})(hash,uri,G__2334_2337))
);
});})(G__2334_2337))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2334_2337,G__2335_2338) : re_frame.core.reg_fx.call(null,G__2334_2337,G__2335_2338));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fetch_DASH_extension,(function (p__2339,_){
var map__2340 = p__2339;
var map__2340__$1 = (((((!((map__2340 == null))))?(((((map__2340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2340):map__2340);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2340__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fetch_DASH_extension_DASH_fx,null,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$store_SLASH_clear_DASH_all], null)], null);
}));
var G__2342_2344 = cljs.core.cst$kw$set_DASH_url_DASH_fx;
var G__2343_2345 = ((function (G__2342_2344){
return (function (hash){
return pluto.playground.ipfs.set_url(hash);
});})(G__2342_2344))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2342_2344,G__2343_2345) : re_frame.core.reg_fx.call(null,G__2342_2344,G__2343_2345));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$open_DASH_example,(function (p__2346,p__2347){
var map__2348 = p__2346;
var map__2348__$1 = (((((!((map__2348 == null))))?(((((map__2348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2348):map__2348);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2348__$1,cljs.core.cst$kw$db);
var vec__2349 = p__2347;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2349,(0),null);
var hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2349,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$examples),cljs.core.cst$kw$set_DASH_url_DASH_fx,hash,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fetch_DASH_extension], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_properties,(function (p__2353,p__2354){
var map__2355 = p__2353;
var map__2355__$1 = (((((!((map__2355 == null))))?(((((map__2355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2355):map__2355);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2355__$1,cljs.core.cst$kw$db);
var vec__2356 = p__2354;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2356,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2356,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2356,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_properties,id], null),m)], null);
}));
