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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set,(function (db,p__2200){
var vec__2201 = p__2200;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2201,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2201,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2201,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k,v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_in,(function (db,p__2204){
var vec__2205 = p__2204;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2205,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2205,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2205,(2),null);
return cljs.core.assoc_in(db,path,v);
}));
pluto.playground.fx.update_extension_errors = (function pluto$playground$fx$update_extension_errors(p__2208,p__2209){
var map__2210 = p__2208;
var map__2210__$1 = (((((!((map__2210 == null))))?(((((map__2210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2210):map__2210);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2210__$1,cljs.core.cst$kw$db);
var vec__2211 = p__2209;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2211,(0),null);
var errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2211,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$errors,errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_errors,pluto.playground.fx.update_extension_errors);
pluto.playground.fx.clear_errors = (function pluto$playground$fx$clear_errors(p__2215,_){
var map__2216 = p__2215;
var map__2216__$1 = (((((!((map__2216 == null))))?(((((map__2216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2216):map__2216);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2216__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_clear_DASH_errors,pluto.playground.fx.clear_errors);
pluto.playground.fx.update_extension_parsed = (function pluto$playground$fx$update_extension_parsed(p__2218,p__2219){
var map__2220 = p__2218;
var map__2220__$1 = (((((!((map__2220 == null))))?(((((map__2220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2220):map__2220);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2220__$1,cljs.core.cst$kw$db);
var vec__2221 = p__2219;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2221,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2221,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$parsed,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,pluto.playground.fx.update_extension_parsed);
var G__2225_2237 = cljs.core.cst$kw$extension_SLASH_parse;
var G__2226_2238 = ((function (G__2225_2237){
return (function (p__2227){
var vec__2228 = p__2227;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2228,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2228,(1),null);
var map__2231 = pluto.core.parse(ctx,data);
var map__2231__$1 = (((((!((map__2231 == null))))?(((((map__2231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2231):map__2231);
var m = map__2231__$1;
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2231__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2231__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__2233 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2233) : re_frame.core.dispatch.call(null,G__2233));
} else {
var G__2234_2239 = react_native_web.hooks.hook_in(cljs.core.first(cljs.core.cst$kw$hooks.cljs$core$IFn$_invoke$arity$1(data__$1)));
var G__2235_2240 = document.getElementById("extension");
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__2234_2239,G__2235_2240) : reagent.core.render_component.call(null,G__2234_2239,G__2235_2240));

var G__2236 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,data__$1], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2236) : re_frame.core.dispatch.call(null,G__2236));
}
});})(G__2225_2237))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2225_2237,G__2226_2238) : re_frame.core.reg_fx.call(null,G__2225_2237,G__2226_2238));
pluto.playground.fx.update_extension_data = (function pluto$playground$fx$update_extension_data(p__2241,p__2242){
var map__2243 = p__2241;
var map__2243__$1 = (((((!((map__2243 == null))))?(((((map__2243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2243):map__2243);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2243__$1,cljs.core.cst$kw$db);
var vec__2244 = p__2242;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2244,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2244,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2244,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$data,data),cljs.core.cst$kw$extension_SLASH_parse,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_data,pluto.playground.fx.update_extension_data);
var G__2248_2259 = cljs.core.cst$kw$extension_SLASH_read;
var G__2249_2260 = ((function (G__2248_2259){
return (function (p__2250){
var vec__2251 = p__2250;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2251,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2251,(1),null);
var G__2254_2261 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_clear_DASH_errors], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2254_2261) : re_frame.core.dispatch.call(null,G__2254_2261));

var map__2255 = pluto.core.read(source);
var map__2255__$1 = (((((!((map__2255 == null))))?(((((map__2255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2255):map__2255);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2255__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2255__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__2257 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2257) : re_frame.core.dispatch.call(null,G__2257));
} else {
var G__2258 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_data,ctx,data], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2258) : re_frame.core.dispatch.call(null,G__2258));
}
});})(G__2248_2259))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2248_2259,G__2249_2260) : re_frame.core.reg_fx.call(null,G__2248_2259,G__2249_2260));
pluto.playground.fx.update_extension_source = (function pluto$playground$fx$update_extension_source(p__2262,p__2263){
var map__2264 = p__2262;
var map__2264__$1 = (((((!((map__2264 == null))))?(((((map__2264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2264):map__2264);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2264__$1,cljs.core.cst$kw$db);
var vec__2265 = p__2263;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2265,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2265,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2265,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$source,data),cljs.core.cst$kw$extension_SLASH_read,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_source,pluto.playground.fx.update_extension_source);
var G__2269_2275 = cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value;
var G__2270_2276 = ((function (G__2269_2275){
return (function (p__2271){
var vec__2272 = p__2271;
var cm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2272,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2272,(1),null);
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
});})(G__2269_2275))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2269_2275,G__2270_2276) : re_frame.core.reg_fx.call(null,G__2269_2275,G__2270_2276));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_editor,(function (p__2277,p__2278){
var map__2279 = p__2277;
var map__2279__$1 = (((((!((map__2279 == null))))?(((((map__2279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2279):map__2279);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2279__$1,cljs.core.cst$kw$db);
var vec__2280 = p__2278;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2280,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2280,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code_DASH_mirror.cljs$core$IFn$_invoke$arity$1(db),data], null)], null);
}));
pluto.playground.fx.append_log = (function pluto$playground$fx$append_log(p__2284,p__2285){
var map__2286 = p__2284;
var map__2286__$1 = (((((!((map__2286 == null))))?(((((map__2286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2286):map__2286);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2286__$1,cljs.core.cst$kw$db);
var vec__2287 = p__2285;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2287,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2287,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$logs,cljs.core.conj,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_append_DASH_log,pluto.playground.fx.append_log);
pluto.playground.fx.set_selected = (function pluto$playground$fx$set_selected(p__2291,p__2292){
var map__2293 = p__2291;
var map__2293__$1 = (((((!((map__2293 == null))))?(((((map__2293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2293):map__2293);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2293__$1,cljs.core.cst$kw$db);
var vec__2294 = p__2292;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2294,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2294,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selected,path)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_selected,pluto.playground.fx.set_selected);
pluto.playground.fx.switch_preview = (function pluto$playground$fx$switch_preview(p__2298,p__2299){
var map__2300 = p__2298;
var map__2300__$1 = (((((!((map__2300 == null))))?(((((map__2300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2300):map__2300);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2300__$1,cljs.core.cst$kw$db);
var vec__2301 = p__2299;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2301,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$preview,cljs.core.not)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_preview,pluto.playground.fx.switch_preview);
var G__2305_2307 = cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs;
var G__2306_2308 = ((function (G__2305_2307){
return (function (value){
return pluto.playground.ipfs.save(value);
});})(G__2305_2307))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2305_2307,G__2306_2308) : re_frame.core.reg_fx.call(null,G__2305_2307,G__2306_2308));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_publish,(function (p__2309,_){
var map__2310 = p__2309;
var map__2310__$1 = (((((!((map__2310 == null))))?(((((map__2310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2310):map__2310);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2310__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$publish,cljs.core.cst$kw$in_DASH_progress_QMARK_], null),true),cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs,cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db)], null);
}));
var G__2313_2316 = cljs.core.cst$kw$fetch_DASH_extension_DASH_fx;
var G__2314_2317 = ((function (G__2313_2316){
return (function (){
var hash = (new URL(document.location)).searchParams.get("hash");
var uri = (cljs.core.truth_(hash)?["ipfs@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''):"url@assets/extensions/command/");
return pluto.storages.fetch(uri,((function (hash,uri,G__2313_2316){
return (function (p1__2312_SHARP_){
var G__2315 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_editor,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__2312_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value,cljs.core.cst$kw$content], null))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2315) : re_frame.core.dispatch.call(null,G__2315));
});})(hash,uri,G__2313_2316))
);
});})(G__2313_2316))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2313_2316,G__2314_2317) : re_frame.core.reg_fx.call(null,G__2313_2316,G__2314_2317));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fetch_DASH_extension,(function (p__2318,_){
var map__2319 = p__2318;
var map__2319__$1 = (((((!((map__2319 == null))))?(((((map__2319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2319):map__2319);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2319__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fetch_DASH_extension_DASH_fx,null], null);
}));
