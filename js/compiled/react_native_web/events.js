// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('react_native_web.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('clojure.string');
goog.require('ajax.core');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions_SLASH_identity_DASH_event,(function (_,p__5974){
var vec__5975 = p__5974;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5975,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5975,(1),null);
var map__5978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5975,(2),null);
var map__5978__$1 = (((((!((map__5978 == null))))?(((((map__5978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5978):map__5978);
var cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5978__$1,cljs.core.cst$kw$cb);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,(function (){var G__5980 = cljs.core.PersistentArrayMap.EMPTY;
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__5980) : cb.call(null,G__5980));
})()], null);
}));
var G__5981_5983 = cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_alert;
var G__5982_5984 = ((function (G__5981_5983){
return (function (value){
return alert(value);
});})(G__5981_5983))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__5981_5983,G__5982_5984) : re_frame.core.reg_fx.call(null,G__5981_5983,G__5982_5984));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$alert,(function (_,p__5985){
var vec__5986 = p__5985;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5986,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5986,(1),null);
var map__5989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5986,(2),null);
var map__5989__$1 = (((((!((map__5989 == null))))?(((((map__5989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5989):map__5989);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5989__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_alert,value], null);
}));
var G__5991_5993 = cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_log;
var G__5992_5994 = ((function (G__5991_5993){
return (function (value){
return console.log(value);
});})(G__5991_5993))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__5991_5993,G__5992_5994) : re_frame.core.reg_fx.call(null,G__5991_5993,G__5992_5994));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$log,(function (_,p__5995){
var vec__5996 = p__5995;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5996,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5996,(1),null);
var map__5999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5996,(2),null);
var map__5999__$1 = (((((!((map__5999 == null))))?(((((map__5999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5999):map__5999);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5999__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_log,value], null);
}));
var G__6001_6008 = cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_schedule_DASH_start;
var G__6002_6009 = ((function (G__6001_6008){
return (function (p__6003){
var map__6004 = p__6003;
var map__6004__$1 = (((((!((map__6004 == null))))?(((((map__6004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6004):map__6004);
var interval = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6004__$1,cljs.core.cst$kw$interval);
var on_created = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6004__$1,cljs.core.cst$kw$on_DASH_created);
var on_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6004__$1,cljs.core.cst$kw$on_DASH_result);
var id = setInterval(((function (map__6004,map__6004__$1,interval,on_created,on_result,G__6001_6008){
return (function (){
var G__6006 = cljs.core.PersistentArrayMap.EMPTY;
return (on_result.cljs$core$IFn$_invoke$arity$1 ? on_result.cljs$core$IFn$_invoke$arity$1(G__6006) : on_result.call(null,G__6006));
});})(map__6004,map__6004__$1,interval,on_created,on_result,G__6001_6008))
,interval);
var G__6007 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,id], null);
return (on_created.cljs$core$IFn$_invoke$arity$1 ? on_created.cljs$core$IFn$_invoke$arity$1(G__6007) : on_created.call(null,G__6007));
});})(G__6001_6008))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__6001_6008,G__6002_6009) : re_frame.core.reg_fx.call(null,G__6001_6008,G__6002_6009));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions_SLASH_schedule_DASH_start,(function (_,p__6010){
var vec__6011 = p__6010;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6011,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6011,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6011,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_schedule_DASH_start,m], null);
}));
var G__6014_6019 = cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_schedule_DASH_cancel;
var G__6015_6020 = ((function (G__6014_6019){
return (function (p__6016){
var map__6017 = p__6016;
var map__6017__$1 = (((((!((map__6017 == null))))?(((((map__6017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6017):map__6017);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6017__$1,cljs.core.cst$kw$value);
return clearInterval(value);
});})(G__6014_6019))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__6014_6019,G__6015_6020) : re_frame.core.reg_fx.call(null,G__6014_6019,G__6015_6020));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions_SLASH_schedule_DASH_cancel,(function (_,p__6021){
var vec__6022 = p__6021;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6022,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6022,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6022,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_schedule_DASH_cancel,m], null);
}));
react_native_web.events.empty_value_QMARK_ = (function react_native_web$events$empty_value_QMARK_(o){
if(cljs.core.seqable_QMARK_(o)){
return cljs.core.empty_QMARK_(o);
} else {
return (o == null);

}
});
react_native_web.events.put_or_dissoc = (function react_native_web$events$put_or_dissoc(db,id,key,value){
if(react_native_web.events.empty_value_QMARK_(value)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_store,id], null),cljs.core.dissoc,key);
} else {
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_store,id,key], null),value);
}
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$store_SLASH_put,(function (p__6025,p__6026){
var map__6027 = p__6025;
var map__6027__$1 = (((((!((map__6027 == null))))?(((((map__6027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6027):map__6027);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6027__$1,cljs.core.cst$kw$db);
var vec__6028 = p__6026;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6028,(0),null);
var map__6031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6028,(1),null);
var map__6031__$1 = (((((!((map__6031 == null))))?(((((map__6031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6031):map__6031);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6031__$1,cljs.core.cst$kw$hook_DASH_id);
var map__6032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6028,(2),null);
var map__6032__$1 = (((((!((map__6032 == null))))?(((((map__6032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6032):map__6032);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6032__$1,cljs.core.cst$kw$key);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6032__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,react_native_web.events.put_or_dissoc(db,id,key,value)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$store_SLASH_puts,(function (p__6038,p__6039){
var map__6040 = p__6038;
var map__6040__$1 = (((((!((map__6040 == null))))?(((((map__6040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6040):map__6040);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6040__$1,cljs.core.cst$kw$db);
var vec__6041 = p__6039;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6041,(0),null);
var map__6044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6041,(1),null);
var map__6044__$1 = (((((!((map__6044 == null))))?(((((map__6044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6044):map__6044);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6044__$1,cljs.core.cst$kw$id);
var map__6045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6041,(2),null);
var map__6045__$1 = (((((!((map__6045 == null))))?(((((map__6045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6045):map__6045);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6045__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__6040,map__6040__$1,db,vec__6041,_,map__6044,map__6044__$1,id,map__6045,map__6045__$1,value){
return (function (p1__6036_SHARP_,p2__6037_SHARP_){
return react_native_web.events.put_or_dissoc(p1__6036_SHARP_,id,cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(p2__6037_SHARP_),cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(p2__6037_SHARP_));
});})(map__6040,map__6040__$1,db,vec__6041,_,map__6044,map__6044__$1,id,map__6045,map__6045__$1,value))
,db,value)], null);
}));
react_native_web.events.append = (function react_native_web$events$append(acc,k,v){
var o = cljs.core.get.cljs$core$IFn$_invoke$arity$2(acc,k);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((cljs.core.vector_QMARK_(o))?o:(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[o],null))),v));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$store_SLASH_append,(function (p__6049,p__6050){
var map__6051 = p__6049;
var map__6051__$1 = (((((!((map__6051 == null))))?(((((map__6051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6051):map__6051);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6051__$1,cljs.core.cst$kw$db);
var vec__6052 = p__6050;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6052,(0),null);
var map__6055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6052,(1),null);
var map__6055__$1 = (((((!((map__6055 == null))))?(((((map__6055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6055):map__6055);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6055__$1,cljs.core.cst$kw$id);
var map__6056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6052,(2),null);
var map__6056__$1 = (((((!((map__6056 == null))))?(((((map__6056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6056):map__6056);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6056__$1,cljs.core.cst$kw$key);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6056__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_store,id], null),react_native_web.events.append,key,value)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$store_SLASH_clear,(function (p__6060,p__6061){
var map__6062 = p__6060;
var map__6062__$1 = (((((!((map__6062 == null))))?(((((map__6062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6062):map__6062);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6062__$1,cljs.core.cst$kw$db);
var vec__6063 = p__6061;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6063,(0),null);
var map__6066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6063,(1),null);
var map__6066__$1 = (((((!((map__6066 == null))))?(((((map__6066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6066):map__6066);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6066__$1,cljs.core.cst$kw$id);
var map__6067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6063,(2),null);
var map__6067__$1 = (((((!((map__6067 == null))))?(((((map__6067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6067):map__6067);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6067__$1,cljs.core.cst$kw$key);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_store,id], null),cljs.core.dissoc,key)], null);
}));
react_native_web.events.json_QMARK_ = (function react_native_web$events$json_QMARK_(res){
var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(res,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"content-type"], null));
if(cljs.core.truth_(temp__5720__auto__)){
var type = temp__5720__auto__;
return clojure.string.starts_with_QMARK_(type,"application/json");
} else {
return null;
}
});
react_native_web.events.parse_json = (function react_native_web$events$parse_json(o){
if(cljs.core.truth_(o)){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(o),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
} else {
return null;
}
});
var G__6071_6077 = cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_json_DASH_parse;
var G__6072_6078 = ((function (G__6071_6077){
return (function (p__6073){
var map__6074 = p__6073;
var map__6074__$1 = (((((!((map__6074 == null))))?(((((map__6074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6074):map__6074);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6074__$1,cljs.core.cst$kw$value);
var on_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6074__$1,cljs.core.cst$kw$on_DASH_result);
var G__6076 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,react_native_web.events.parse_json(value)], null);
return (on_result.cljs$core$IFn$_invoke$arity$1 ? on_result.cljs$core$IFn$_invoke$arity$1(G__6076) : on_result.call(null,G__6076));
});})(G__6071_6077))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__6071_6077,G__6072_6078) : re_frame.core.reg_fx.call(null,G__6071_6077,G__6072_6078));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions_SLASH_json_DASH_parse,(function (_,p__6079){
var vec__6080 = p__6079;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6080,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6080,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6080,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_json_DASH_parse,m], null);
}));
var G__6083_6086 = cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_json_DASH_stringify;
var G__6084_6087 = ((function (G__6083_6086){
return (function (value,on_result){
var G__6085 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,JSON.stringify(cljs.core.clj__GT_js(value))], null);
return (on_result.cljs$core$IFn$_invoke$arity$1 ? on_result.cljs$core$IFn$_invoke$arity$1(G__6085) : on_result.call(null,G__6085));
});})(G__6083_6086))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__6083_6086,G__6084_6087) : re_frame.core.reg_fx.call(null,G__6083_6086,G__6084_6087));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions_SLASH_json_DASH_stringify,(function (_,p__6088){
var vec__6089 = p__6088;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6089,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6089,(1),null);
var map__6092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6089,(2),null);
var map__6092__$1 = (((((!((map__6092 == null))))?(((((map__6092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6092):map__6092);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6092__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_json_DASH_stringify,value], null);
}));
react_native_web.events.parse_result = (function react_native_web$events$parse_result(result,on_success){
var res = (function (){try{return react_native_web.events.parse_json(result);
}catch (e6094){if((e6094 instanceof Error)){
var _ = e6094;
return null;
} else {
throw e6094;

}
}})();
var G__6095 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$body,(function (){var or__4131__auto__ = res;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return result;
}
})()], null);
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(G__6095) : on_success.call(null,G__6095));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$http_SLASH_get,(function (_,p__6097){
var vec__6098 = p__6097;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6098,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6098,(1),null);
var map__6101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6098,(2),null);
var map__6101__$1 = (((((!((map__6101 == null))))?(((((map__6101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6101):map__6101);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6101__$1,cljs.core.cst$kw$url);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6101__$1,cljs.core.cst$kw$on_DASH_success);
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6101__$1,cljs.core.cst$kw$on_DASH_failure);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6101__$1,cljs.core.cst$kw$timeout);
ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false,cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$text,cljs.core.cst$kw$handler,((function (vec__6098,___$1,___$2,map__6101,map__6101__$1,url,on_success,on_failure,timeout){
return (function (p1__6096_SHARP_){
if(cljs.core.truth_(on_success)){
return react_native_web.events.parse_result(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__6096_SHARP_),on_success);
} else {
return null;
}
});})(vec__6098,___$1,___$2,map__6101,map__6101__$1,url,on_success,on_failure,timeout))
,cljs.core.cst$kw$error_DASH_handler,on_failure], null)], 0));

return null;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ipfs_SLASH_cat,(function (_,p__6103){
var vec__6104 = p__6103;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6104,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6104,(1),null);
var map__6107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6104,(2),null);
var map__6107__$1 = (((((!((map__6107 == null))))?(((((map__6107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6107):map__6107);
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6107__$1,cljs.core.cst$kw$hash);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6107__$1,cljs.core.cst$kw$on_DASH_success);
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6107__$1,cljs.core.cst$kw$on_DASH_failure);
return null;
}));
react_native_web.events.parse_ipfs_add_response = (function react_native_web$events$parse_ipfs_add_response(res){
var map__6109 = react_native_web.events.parse_json(res);
var map__6109__$1 = (((((!((map__6109 == null))))?(((((map__6109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6109):map__6109);
var Name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6109__$1,cljs.core.cst$kw$Name);
var Hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6109__$1,cljs.core.cst$kw$Hash);
var Size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6109__$1,cljs.core.cst$kw$Size);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,Name,cljs.core.cst$kw$hash,Hash,cljs.core.cst$kw$size,Size], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ipfs_SLASH_add,(function (_,p__6111){
var vec__6112 = p__6111;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6112,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6112,(1),null);
var map__6115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6112,(2),null);
var map__6115__$1 = (((((!((map__6115 == null))))?(((((map__6115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6115):map__6115);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6115__$1,cljs.core.cst$kw$value);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6115__$1,cljs.core.cst$kw$on_DASH_success);
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6115__$1,cljs.core.cst$kw$on_DASH_failure);
return null;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$http_SLASH_post,(function (_,p__6118){
var vec__6119 = p__6118;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6119,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6119,(1),null);
var map__6122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6119,(2),null);
var map__6122__$1 = (((((!((map__6122 == null))))?(((((map__6122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6122):map__6122);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6122__$1,cljs.core.cst$kw$url);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6122__$1,cljs.core.cst$kw$body);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6122__$1,cljs.core.cst$kw$on_DASH_success);
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6122__$1,cljs.core.cst$kw$on_DASH_failure);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6122__$1,cljs.core.cst$kw$timeout);
return null;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions$chat$command_SLASH_set_DASH_parameter,(function (_,p__6124){
var vec__6125 = p__6124;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6125,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6125,(1),null);
var map__6128 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6125,(2),null);
var map__6128__$1 = (((((!((map__6128 == null))))?(((((map__6128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6128):map__6128);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6128__$1,cljs.core.cst$kw$value);
return null;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions$chat$command_SLASH_set_DASH_custom_DASH_parameter,(function (p__6130,p__6131){
var map__6132 = p__6130;
var map__6132__$1 = (((((!((map__6132 == null))))?(((((map__6132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6132):map__6132);
var map__6133 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6132__$1,cljs.core.cst$kw$db);
var map__6133__$1 = (((((!((map__6133 == null))))?(((((map__6133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6133):map__6133);
var db = map__6133__$1;
var current_chat_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6133__$1,cljs.core.cst$kw$current_DASH_chat_DASH_id);
var vec__6134 = p__6131;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6134,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6134,(1),null);
var map__6137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6134,(2),null);
var map__6137__$1 = (((((!((map__6137 == null))))?(((((map__6137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6137):map__6137);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6137__$1,cljs.core.cst$kw$key);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6137__$1,cljs.core.cst$kw$value);
return null;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions$chat$command_SLASH_set_DASH_parameter_DASH_with_DASH_custom_DASH_params,(function (p__6141,p__6142){
var map__6143 = p__6141;
var map__6143__$1 = (((((!((map__6143 == null))))?(((((map__6143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6143):map__6143);
var map__6144 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6143__$1,cljs.core.cst$kw$db);
var map__6144__$1 = (((((!((map__6144 == null))))?(((((map__6144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6144):map__6144);
var db = map__6144__$1;
var current_chat_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6144__$1,cljs.core.cst$kw$current_DASH_chat_DASH_id);
var vec__6145 = p__6142;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6145,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6145,(1),null);
var map__6148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6145,(2),null);
var map__6148__$1 = (((((!((map__6148 == null))))?(((((map__6148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6148):map__6148);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6148__$1,cljs.core.cst$kw$value);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6148__$1,cljs.core.cst$kw$params);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$params], null),cljs.core.merge,params),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$suggestion_DASH_id], null),null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions$chat$command_SLASH_send_DASH_plain_DASH_text_DASH_message,(function (_,p__6152){
var vec__6153 = p__6152;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6153,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6153,(1),null);
var map__6156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6153,(2),null);
var map__6156__$1 = (((((!((map__6156 == null))))?(((((map__6156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6156):map__6156);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6156__$1,cljs.core.cst$kw$value);
return null;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions$chat$command_SLASH_send_DASH_message,(function (p__6159,p__6160){
var map__6161 = p__6159;
var map__6161__$1 = (((((!((map__6161 == null))))?(((((map__6161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6161):map__6161);
var cofx = map__6161__$1;
var map__6162 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6161__$1,cljs.core.cst$kw$db);
var map__6162__$1 = (((((!((map__6162 == null))))?(((((map__6162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6162):map__6162);
var db = map__6162__$1;
var current_chat_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6162__$1,cljs.core.cst$kw$current_DASH_chat_DASH_id);
var vec__6163 = p__6160;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6163,(0),null);
var map__6166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6163,(1),null);
var map__6166__$1 = (((((!((map__6166 == null))))?(((((map__6166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6166):map__6166);
var hook_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6166__$1,cljs.core.cst$kw$hook_DASH_id);
var map__6167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6163,(2),null);
var map__6167__$1 = (((((!((map__6167 == null))))?(((((map__6167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6167):map__6167);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6167__$1,cljs.core.cst$kw$params);
return null;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions_SLASH_show_DASH_selection_DASH_screen,(function (cofx,p__6173){
var vec__6174 = p__6173;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6174,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6174,(1),null);
var map__6177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6174,(2),null);
var map__6177__$1 = (((((!((map__6177 == null))))?(((((map__6177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6177):map__6177);
var params = map__6177__$1;
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6177__$1,cljs.core.cst$kw$on_DASH_select);
return null;
}));
react_native_web.events.operation__GT_fn = (function react_native_web$events$operation__GT_fn(k){
var G__6179 = k;
var G__6179__$1 = (((G__6179 instanceof cljs.core.Keyword))?G__6179.fqn:null);
switch (G__6179__$1) {
case "plus":
return cljs.core._PLUS_;

break;
case "minus":
return cljs.core._;

break;
case "times":
return cljs.core._STAR_;

break;
case "divide":
return cljs.core._SLASH_;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__6179__$1)].join('')));

}
});
var G__6181_6187 = cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_arithmetic;
var G__6182_6188 = ((function (G__6181_6187){
return (function (p__6183){
var map__6184 = p__6183;
var map__6184__$1 = (((((!((map__6184 == null))))?(((((map__6184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6184):map__6184);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6184__$1,cljs.core.cst$kw$operation);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6184__$1,cljs.core.cst$kw$values);
var on_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6184__$1,cljs.core.cst$kw$on_DASH_result);
var G__6186 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(react_native_web.events.operation__GT_fn(operation),values)], null);
return (on_result.cljs$core$IFn$_invoke$arity$1 ? on_result.cljs$core$IFn$_invoke$arity$1(G__6186) : on_result.call(null,G__6186));
});})(G__6181_6187))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__6181_6187,G__6182_6188) : re_frame.core.reg_fx.call(null,G__6181_6187,G__6182_6188));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions_SLASH_arithmetic,(function (_,p__6189){
var vec__6190 = p__6189;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6190,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6190,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6190,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_arithmetic,m], null);
}));
react_native_web.events.all = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$ethereum$erc721_SLASH_get_DASH_approved,cljs.core.cst$sym$ipfs_SLASH_cat,cljs.core.cst$sym$ethereum_SLASH_create_DASH_address,cljs.core.cst$sym$ethereum_SLASH_await_DASH_transaction_DASH_receipt,cljs.core.cst$sym$ethereum_SLASH_sign,cljs.core.cst$sym$store_SLASH_puts,cljs.core.cst$sym$ethereum$erc20_SLASH_allowance,cljs.core.cst$sym$chat$command_SLASH_open_DASH_public_DASH_chat,cljs.core.cst$sym$ethereum$erc721_SLASH_set_DASH_approval_DASH_for_DASH_all,cljs.core.cst$sym$ethereum_SLASH_shh_DASH_get_DASH_messages,cljs.core.cst$sym$store_SLASH_clear_DASH_all,cljs.core.cst$sym$schedule_SLASH_start,cljs.core.cst$sym$ethereum_SLASH_call,cljs.core.cst$sym$browser_SLASH_open_DASH_url,cljs.core.cst$sym$ethereum_SLASH_shh_DASH_get_DASH_filter_DASH_changes,cljs.core.cst$sym$ipfs_SLASH_add,cljs.core.cst$sym$ethereum_SLASH_shh_DASH_new_DASH_group,cljs.core.cst$sym$chat$command_SLASH_set_DASH_parameter_DASH_with_DASH_custom_DASH_params,cljs.core.cst$sym$log,cljs.core.cst$sym$identity,cljs.core.cst$sym$ethereum$erc20_SLASH_transfer_DASH_from,cljs.core.cst$sym$ethereum_SLASH_shh_new_DASH_filter,cljs.core.cst$sym$ethereum_SLASH_transaction_DASH_receipt,cljs.core.cst$sym$ethereum_SLASH_shh_DASH_new_DASH_identity,cljs.core.cst$sym$ethereum_SLASH_shh_DASH_add_DASH_to_DASH_group,cljs.core.cst$sym$ethereum_SLASH_logs,cljs.core.cst$sym$ethereum_SLASH_shh_DASH_uninstall_DASH_filter,cljs.core.cst$sym$camera_SLASH_picture,cljs.core.cst$sym$store_SLASH_append,cljs.core.cst$sym$ethereum_SLASH_send_DASH_transaction,cljs.core.cst$sym$camera_SLASH_qr_DASH_code,cljs.core.cst$sym$ethereum$erc721_SLASH_safe_DASH_transfer_DASH_from,cljs.core.cst$sym$ethereum$ens_SLASH_resolve,cljs.core.cst$sym$ethereum$erc721_SLASH_owner_DASH_of,cljs.core.cst$sym$chat$command_SLASH_send_DASH_message,cljs.core.cst$sym$chat$command_SLASH_send_DASH_plain_DASH_text_DASH_message,cljs.core.cst$sym$json_SLASH_parse,cljs.core.cst$sym$json_SLASH_stringify,cljs.core.cst$sym$store_SLASH_put,cljs.core.cst$sym$schedule_SLASH_cancel,cljs.core.cst$sym$ethereum_SLASH_shh_DASH_has_DASH_identity,cljs.core.cst$sym$ethereum_SLASH_shh_post,cljs.core.cst$sym$store_SLASH_clear,cljs.core.cst$sym$ethereum_SLASH_cancel_DASH_filter,cljs.core.cst$sym$ethereum$erc20_SLASH_transfer,cljs.core.cst$sym$ethereum$erc20_SLASH_balance_DASH_of,cljs.core.cst$sym$selection_DASH_screen,cljs.core.cst$sym$http_SLASH_post,cljs.core.cst$sym$arithmetic,cljs.core.cst$sym$ethereum$erc721_SLASH_is_DASH_approved_DASH_for_DASH_all,cljs.core.cst$sym$ethereum$erc20_SLASH_total_DASH_supply,cljs.core.cst$sym$chat$command_SLASH_set_DASH_parameter,cljs.core.cst$sym$ethereum_SLASH_create_DASH_filter,cljs.core.cst$sym$alert,cljs.core.cst$sym$chat$command_SLASH_set_DASH_custom_DASH_parameter,cljs.core.cst$sym$ethereum$erc20_SLASH_approve,cljs.core.cst$sym$http_SLASH_get,cljs.core.cst$sym$ethereum_SLASH_logs_DASH_changes],[new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc721_DASH_get_DASH_approved,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$token_DASH_id,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$ipfs_SLASH_cat,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$hash,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_create_DASH_address,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_result,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_await_DASH_transaction_DASH_receipt,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$value,cljs.core.cst$kw$string,cljs.core.cst$kw$interval,cljs.core.cst$kw$number,cljs.core.cst$kw$topics_DASH_hints,cljs.core.cst$kw$vector,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_sign,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$message_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$data_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$store_SLASH_puts,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$vector], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc20_DASH_allowance,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$token_DASH_owner,cljs.core.cst$kw$string,cljs.core.cst$kw$spender,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$value,cljs.core.cst$kw$extensions$chat$command_SLASH_open_DASH_public_DASH_chat,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$topic,cljs.core.cst$kw$string,cljs.core.cst$kw$navigate_DASH_to,cljs.core.cst$kw$boolean], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc721_DASH_set_DASH_approval_DASH_for_DASH_all,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$operator,cljs.core.cst$kw$string,cljs.core.cst$kw$approved,cljs.core.cst$kw$boolean,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_shh_DASH_get_DASH_messages,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$store_SLASH_clear_DASH_all], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_schedule_DASH_start,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$interval,cljs.core.cst$kw$number,cljs.core.cst$kw$on_DASH_created,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_result,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_call,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$to,cljs.core.cst$kw$string,cljs.core.cst$kw$method,cljs.core.cst$kw$string,cljs.core.cst$kw$params_QMARK_,cljs.core.cst$kw$vector,cljs.core.cst$kw$outputs_QMARK_,cljs.core.cst$kw$vector,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$value,cljs.core.cst$kw$extensions_SLASH_open_DASH_url,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_shh_DASH_get_DASH_filter_DASH_changes,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$ipfs_SLASH_add,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_shh_DASH_new_DASH_group,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions$chat$command_SLASH_set_DASH_parameter_DASH_with_DASH_custom_DASH_params,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.cst$kw$string,cljs.core.cst$kw$params,cljs.core.cst$kw$map], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$log,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_identity_DASH_event,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cb,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc20_DASH_transfer_DASH_from,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$from,cljs.core.cst$kw$string,cljs.core.cst$kw$to,cljs.core.cst$kw$string,cljs.core.cst$kw$value,cljs.core.cst$kw$number,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_shh_DASH_new_DASH_filter,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$to_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$topics,cljs.core.cst$kw$vector,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_transaction_DASH_receipt,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$value,cljs.core.cst$kw$string,cljs.core.cst$kw$topics_DASH_hints,cljs.core.cst$kw$vector,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_shh_DASH_new_DASH_identity,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_shh_DASH_add_DASH_to_DASH_group,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$address,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_logs,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$from_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$to_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$address_QMARK_,cljs.core.cst$kw$vector,cljs.core.cst$kw$topics_QMARK_,cljs.core.cst$kw$vector,cljs.core.cst$kw$block_DASH_hash_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_shh_DASH_uninstall_DASH_filter,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$value,cljs.core.cst$kw$extensions_SLASH_camera_DASH_picture,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$store_SLASH_append,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,cljs.core.cst$kw$string,cljs.core.cst$kw$value,cljs.core.cst$kw$any], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_send_DASH_transaction,cljs.core.cst$kw$arguments,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$gas_QMARK_,cljs.core.cst$kw$value_QMARK_,cljs.core.cst$kw$gas_DASH_price_QMARK_,cljs.core.cst$kw$params_QMARK_,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$on_DASH_success_QMARK_,cljs.core.cst$kw$nonce_QMARK_,cljs.core.cst$kw$method_QMARK_,cljs.core.cst$kw$to],[cljs.core.cst$kw$string,cljs.core.cst$kw$string,cljs.core.cst$kw$string,cljs.core.cst$kw$vector,cljs.core.cst$kw$event,cljs.core.cst$kw$event,cljs.core.cst$kw$string,cljs.core.cst$kw$string,cljs.core.cst$kw$string])], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$value,cljs.core.cst$kw$extensions_SLASH_camera_DASH_qr_DASH_code,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc721_DASH_safe_DASH_transfer_DASH_from,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$from,cljs.core.cst$kw$string,cljs.core.cst$kw$to,cljs.core.cst$kw$string,cljs.core.cst$kw$token_DASH_id,cljs.core.cst$kw$string,cljs.core.cst$kw$data_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_resolve_DASH_ens,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc721_DASH_owner_DASH_of,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$token_DASH_id,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions$chat$command_SLASH_send_DASH_message,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,cljs.core.cst$kw$map], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions$chat$command_SLASH_send_DASH_plain_DASH_text_DASH_message,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_json_DASH_parse,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_result,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_json_DASH_stringify,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_result,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$store_SLASH_put,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,cljs.core.cst$kw$string,cljs.core.cst$kw$value,cljs.core.cst$kw$any], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_schedule_DASH_cancel,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$number], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$value,cljs.core.cst$kw$extensions_SLASH_shh_DASH_has_DASH_identity,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$address,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_shh_DASH_post,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$from_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$to_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$topics,cljs.core.cst$kw$vector,cljs.core.cst$kw$payload,cljs.core.cst$kw$string,cljs.core.cst$kw$priority,cljs.core.cst$kw$string,cljs.core.cst$kw$ttl,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$store_SLASH_clear,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_cancel_DASH_filter,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc20_DASH_transfer,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$to,cljs.core.cst$kw$string,cljs.core.cst$kw$value,cljs.core.cst$kw$number,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc20_DASH_balance_DASH_of,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$token_DASH_owner,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_show_DASH_selection_DASH_screen,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$items,cljs.core.cst$kw$vector,cljs.core.cst$kw$on_DASH_select,cljs.core.cst$kw$event,cljs.core.cst$kw$render,cljs.core.cst$kw$view,cljs.core.cst$kw$title,cljs.core.cst$kw$string,cljs.core.cst$kw$extractor_DASH_key,cljs.core.cst$kw$keyword], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$http_SLASH_post,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$url,cljs.core.cst$kw$string,cljs.core.cst$kw$body,cljs.core.cst$kw$string,cljs.core.cst$kw$timeout_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_arithmetic,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$values,cljs.core.cst$kw$vector,cljs.core.cst$kw$operation,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$one_DASH_of,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$divide,null,cljs.core.cst$kw$times,null,cljs.core.cst$kw$minus,null,cljs.core.cst$kw$plus,null], null), null)], null),cljs.core.cst$kw$on_DASH_result,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc721_DASH_is_DASH_approved_DASH_for_DASH_all,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$owner,cljs.core.cst$kw$string,cljs.core.cst$kw$operator,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc20_DASH_total_DASH_supply,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions$chat$command_SLASH_set_DASH_parameter,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$any], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_create_DASH_filter,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$type,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$one_DASH_of,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$block,null,cljs.core.cst$kw$filter,null,cljs.core.cst$kw$pending_DASH_transaction,null], null), null)], null),cljs.core.cst$kw$from_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$to_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$address_QMARK_,cljs.core.cst$kw$vector,cljs.core.cst$kw$topics_QMARK_,cljs.core.cst$kw$vector,cljs.core.cst$kw$block_DASH_hash_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$alert,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions$chat$command_SLASH_set_DASH_custom_DASH_parameter,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,cljs.core.cst$kw$keyword,cljs.core.cst$kw$value,cljs.core.cst$kw$any], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc20_DASH_approve,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$spender,cljs.core.cst$kw$string,cljs.core.cst$kw$value,cljs.core.cst$kw$number,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$http_SLASH_get,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$url,cljs.core.cst$kw$string,cljs.core.cst$kw$timeout_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_logs_DASH_changes,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$string,cljs.core.cst$kw$topics_DASH_hints,cljs.core.cst$kw$vector], null)], null)]);
