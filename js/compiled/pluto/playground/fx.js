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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set,(function (db,p__2214){
var vec__2215 = p__2214;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2215,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2215,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2215,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k,v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_in,(function (db,p__2218){
var vec__2219 = p__2218;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2219,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2219,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2219,(2),null);
return cljs.core.assoc_in(db,path,v);
}));
pluto.playground.fx.update_extension_errors = (function pluto$playground$fx$update_extension_errors(p__2222,p__2223){
var map__2224 = p__2222;
var map__2224__$1 = (((((!((map__2224 == null))))?(((((map__2224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2224):map__2224);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2224__$1,cljs.core.cst$kw$db);
var vec__2225 = p__2223;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2225,(0),null);
var errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2225,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$errors,errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_errors,pluto.playground.fx.update_extension_errors);
pluto.playground.fx.clear_errors = (function pluto$playground$fx$clear_errors(p__2229,_){
var map__2230 = p__2229;
var map__2230__$1 = (((((!((map__2230 == null))))?(((((map__2230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2230):map__2230);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2230__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_clear_DASH_errors,pluto.playground.fx.clear_errors);
pluto.playground.fx.update_extension_parsed = (function pluto$playground$fx$update_extension_parsed(p__2232,p__2233){
var map__2234 = p__2232;
var map__2234__$1 = (((((!((map__2234 == null))))?(((((map__2234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2234):map__2234);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2234__$1,cljs.core.cst$kw$db);
var vec__2235 = p__2233;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2235,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2235,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$parsed,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,pluto.playground.fx.update_extension_parsed);
var G__2239_2249 = cljs.core.cst$kw$extension_SLASH_parse;
var G__2240_2250 = ((function (G__2239_2249){
return (function (p__2241){
var vec__2242 = p__2241;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2242,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2242,(1),null);
var map__2245 = pluto.core.parse(ctx,data);
var map__2245__$1 = (((((!((map__2245 == null))))?(((((map__2245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2245):map__2245);
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2245__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2245__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__2247 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2247) : re_frame.core.dispatch.call(null,G__2247));
} else {
var G__2248 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,data__$1], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2248) : re_frame.core.dispatch.call(null,G__2248));
}
});})(G__2239_2249))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2239_2249,G__2240_2250) : re_frame.core.reg_fx.call(null,G__2239_2249,G__2240_2250));
pluto.playground.fx.update_extension_data = (function pluto$playground$fx$update_extension_data(p__2251,p__2252){
var map__2253 = p__2251;
var map__2253__$1 = (((((!((map__2253 == null))))?(((((map__2253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2253):map__2253);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2253__$1,cljs.core.cst$kw$db);
var vec__2254 = p__2252;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2254,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2254,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2254,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$data,data),cljs.core.cst$kw$extension_SLASH_parse,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_data,pluto.playground.fx.update_extension_data);
var G__2258_2269 = cljs.core.cst$kw$extension_SLASH_read;
var G__2259_2270 = ((function (G__2258_2269){
return (function (p__2260){
var vec__2261 = p__2260;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2261,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2261,(1),null);
var G__2264_2271 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_clear_DASH_errors], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2264_2271) : re_frame.core.dispatch.call(null,G__2264_2271));

var map__2265 = pluto.core.read(source);
var map__2265__$1 = (((((!((map__2265 == null))))?(((((map__2265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2265):map__2265);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2265__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2265__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__2267 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2267) : re_frame.core.dispatch.call(null,G__2267));
} else {
var G__2268 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_data,ctx,data], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2268) : re_frame.core.dispatch.call(null,G__2268));
}
});})(G__2258_2269))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2258_2269,G__2259_2270) : re_frame.core.reg_fx.call(null,G__2258_2269,G__2259_2270));
pluto.playground.fx.update_extension_source = (function pluto$playground$fx$update_extension_source(p__2272,p__2273){
var map__2274 = p__2272;
var map__2274__$1 = (((((!((map__2274 == null))))?(((((map__2274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2274):map__2274);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2274__$1,cljs.core.cst$kw$db);
var vec__2275 = p__2273;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2275,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2275,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2275,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$source,data),cljs.core.cst$kw$extension_SLASH_read,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_source,pluto.playground.fx.update_extension_source);
var G__2279_2285 = cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value;
var G__2280_2286 = ((function (G__2279_2285){
return (function (p__2281){
var vec__2282 = p__2281;
var cm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2282,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2282,(1),null);
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
});})(G__2279_2285))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2279_2285,G__2280_2286) : re_frame.core.reg_fx.call(null,G__2279_2285,G__2280_2286));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_editor,(function (p__2287,p__2288){
var map__2289 = p__2287;
var map__2289__$1 = (((((!((map__2289 == null))))?(((((map__2289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2289):map__2289);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2289__$1,cljs.core.cst$kw$db);
var vec__2290 = p__2288;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2290,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2290,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code_DASH_mirror.cljs$core$IFn$_invoke$arity$1(db),data], null)], null);
}));
pluto.playground.fx.append_log = (function pluto$playground$fx$append_log(p__2294,p__2295){
var map__2296 = p__2294;
var map__2296__$1 = (((((!((map__2296 == null))))?(((((map__2296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2296):map__2296);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2296__$1,cljs.core.cst$kw$db);
var vec__2297 = p__2295;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2297,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2297,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$logs,cljs.core.conj,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_append_DASH_log,pluto.playground.fx.append_log);
pluto.playground.fx.switch_filter_logs = (function pluto$playground$fx$switch_filter_logs(p__2301,p__2302){
var map__2303 = p__2301;
var map__2303__$1 = (((((!((map__2303 == null))))?(((((map__2303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2303):map__2303);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2303__$1,cljs.core.cst$kw$db);
var vec__2304 = p__2302;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2304,(0),null);
var checked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2304,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$filtered_DASH_logs,checked)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_filter_DASH_logs,pluto.playground.fx.switch_filter_logs);
pluto.playground.fx.clear_logs = (function pluto$playground$fx$clear_logs(p__2308,_){
var map__2309 = p__2308;
var map__2309__$1 = (((((!((map__2309 == null))))?(((((map__2309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2309):map__2309);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2309__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$logs)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_clear_DASH_logs,pluto.playground.fx.clear_logs);
pluto.playground.fx.set_selected = (function pluto$playground$fx$set_selected(p__2311,p__2312){
var map__2313 = p__2311;
var map__2313__$1 = (((((!((map__2313 == null))))?(((((map__2313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2313):map__2313);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2313__$1,cljs.core.cst$kw$db);
var vec__2314 = p__2312;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2314,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2314,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selected,path)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_selected,pluto.playground.fx.set_selected);
pluto.playground.fx.switch_preview = (function pluto$playground$fx$switch_preview(p__2318,p__2319){
var map__2320 = p__2318;
var map__2320__$1 = (((((!((map__2320 == null))))?(((((map__2320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2320):map__2320);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2320__$1,cljs.core.cst$kw$db);
var vec__2321 = p__2319;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2321,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$preview,cljs.core.not)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_preview,pluto.playground.fx.switch_preview);
var G__2325_2327 = cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs;
var G__2326_2328 = ((function (G__2325_2327){
return (function (value){
return pluto.playground.ipfs.save(value);
});})(G__2325_2327))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2325_2327,G__2326_2328) : re_frame.core.reg_fx.call(null,G__2325_2327,G__2326_2328));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_publish,(function (p__2329,_){
var map__2330 = p__2329;
var map__2330__$1 = (((((!((map__2330 == null))))?(((((map__2330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2330):map__2330);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2330__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$publish,cljs.core.cst$kw$in_DASH_progress_QMARK_], null),true),cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs,cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db)], null);
}));
var G__2333_2336 = cljs.core.cst$kw$fetch_DASH_extension_DASH_fx;
var G__2334_2337 = ((function (G__2333_2336){
return (function (){
var hash = (new URL(document.location)).searchParams.get("hash");
var uri = (cljs.core.truth_(hash)?["ipfs@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''):"url@assets/extensions/command/");
return pluto.storages.fetch(uri,((function (hash,uri,G__2333_2336){
return (function (p1__2332_SHARP_){
var G__2335 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_editor,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__2332_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value,cljs.core.cst$kw$content], null))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2335) : re_frame.core.dispatch.call(null,G__2335));
});})(hash,uri,G__2333_2336))
);
});})(G__2333_2336))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2333_2336,G__2334_2337) : re_frame.core.reg_fx.call(null,G__2333_2336,G__2334_2337));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fetch_DASH_extension,(function (p__2338,_){
var map__2339 = p__2338;
var map__2339__$1 = (((((!((map__2339 == null))))?(((((map__2339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2339):map__2339);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2339__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fetch_DASH_extension_DASH_fx,null,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$store_SLASH_clear_DASH_all], null)], null);
}));
var G__2341_2343 = cljs.core.cst$kw$set_DASH_url_DASH_fx;
var G__2342_2344 = ((function (G__2341_2343){
return (function (hash){
return pluto.playground.ipfs.set_url(hash);
});})(G__2341_2343))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2341_2343,G__2342_2344) : re_frame.core.reg_fx.call(null,G__2341_2343,G__2342_2344));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$open_DASH_example,(function (p__2345,p__2346){
var map__2347 = p__2345;
var map__2347__$1 = (((((!((map__2347 == null))))?(((((map__2347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2347):map__2347);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2347__$1,cljs.core.cst$kw$db);
var vec__2348 = p__2346;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2348,(0),null);
var hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2348,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$examples,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$extensions_SLASH_properties,cljs.core.cst$kw$extension_DASH_selection,cljs.core.cst$kw$extensions_SLASH_store,cljs.core.cst$kw$extension_DASH_props], 0)),cljs.core.cst$kw$set_DASH_url_DASH_fx,hash,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fetch_DASH_extension], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_properties,(function (p__2352,p__2353){
var map__2354 = p__2352;
var map__2354__$1 = (((((!((map__2354 == null))))?(((((map__2354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2354):map__2354);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2354__$1,cljs.core.cst$kw$db);
var vec__2355 = p__2353;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2355,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2355,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2355,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_properties,id], null),m)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_app_DASH_db,(function (p__2359,p__2360){
var map__2361 = p__2359;
var map__2361__$1 = (((((!((map__2361 == null))))?(((((map__2361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2361):map__2361);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2361__$1,cljs.core.cst$kw$db);
var vec__2362 = p__2360;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2362,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2362,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_store,"Extension ID"], null),m)], null);
}));
