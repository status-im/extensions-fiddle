// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('react_native_web.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('clojure.string');
goog.require('ajax.core');
react_native_web.events.ipfs_add_url = "https://ipfs.infura.io:5001/api/v0/add";
react_native_web.events.ipfs_add_param_name = "extension.event.edn";
react_native_web.events.ipfs_cat_url = "https://ipfs.infura.io/ipfs/";
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions_SLASH_identity_DASH_event,(function (_,p__1301){
var vec__1302 = p__1301;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1302,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1302,(1),null);
var map__1305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1302,(2),null);
var map__1305__$1 = (((((!((map__1305 == null))))?(((((map__1305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1305):map__1305);
var cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1305__$1,cljs.core.cst$kw$cb);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,(function (){var G__1307 = cljs.core.PersistentArrayMap.EMPTY;
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__1307) : cb.call(null,G__1307));
})()], null);
}));
var G__1308_1310 = cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_alert;
var G__1309_1311 = ((function (G__1308_1310){
return (function (value){
return alert(value);
});})(G__1308_1310))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1308_1310,G__1309_1311) : re_frame.core.reg_fx.call(null,G__1308_1310,G__1309_1311));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$alert,(function (_,p__1312){
var vec__1313 = p__1312;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1313,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1313,(1),null);
var map__1316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1313,(2),null);
var map__1316__$1 = (((((!((map__1316 == null))))?(((((map__1316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1316):map__1316);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1316__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_alert,value], null);
}));
var G__1318_1320 = cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_log;
var G__1319_1321 = ((function (G__1318_1320){
return (function (value){
return console.log(value);
});})(G__1318_1320))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1318_1320,G__1319_1321) : re_frame.core.reg_fx.call(null,G__1318_1320,G__1319_1321));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$log,(function (_,p__1322){
var vec__1323 = p__1322;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1323,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1323,(1),null);
var map__1326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1323,(2),null);
var map__1326__$1 = (((((!((map__1326 == null))))?(((((map__1326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1326):map__1326);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1326__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_log,value], null);
}));
var G__1328_1335 = cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_schedule_DASH_start;
var G__1329_1336 = ((function (G__1328_1335){
return (function (p__1330){
var map__1331 = p__1330;
var map__1331__$1 = (((((!((map__1331 == null))))?(((((map__1331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1331):map__1331);
var interval = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1331__$1,cljs.core.cst$kw$interval);
var on_created = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1331__$1,cljs.core.cst$kw$on_DASH_created);
var on_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1331__$1,cljs.core.cst$kw$on_DASH_result);
var id = setInterval(((function (map__1331,map__1331__$1,interval,on_created,on_result,G__1328_1335){
return (function (){
var G__1333 = cljs.core.PersistentArrayMap.EMPTY;
return (on_result.cljs$core$IFn$_invoke$arity$1 ? on_result.cljs$core$IFn$_invoke$arity$1(G__1333) : on_result.call(null,G__1333));
});})(map__1331,map__1331__$1,interval,on_created,on_result,G__1328_1335))
,interval);
var G__1334 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,id], null);
return (on_created.cljs$core$IFn$_invoke$arity$1 ? on_created.cljs$core$IFn$_invoke$arity$1(G__1334) : on_created.call(null,G__1334));
});})(G__1328_1335))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1328_1335,G__1329_1336) : re_frame.core.reg_fx.call(null,G__1328_1335,G__1329_1336));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions_SLASH_schedule_DASH_start,(function (_,p__1337){
var vec__1338 = p__1337;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1338,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1338,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1338,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_schedule_DASH_start,m], null);
}));
var G__1341_1346 = cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_schedule_DASH_cancel;
var G__1342_1347 = ((function (G__1341_1346){
return (function (p__1343){
var map__1344 = p__1343;
var map__1344__$1 = (((((!((map__1344 == null))))?(((((map__1344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1344):map__1344);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1344__$1,cljs.core.cst$kw$value);
return clearInterval(value);
});})(G__1341_1346))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1341_1346,G__1342_1347) : re_frame.core.reg_fx.call(null,G__1341_1346,G__1342_1347));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions_SLASH_schedule_DASH_cancel,(function (_,p__1348){
var vec__1349 = p__1348;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1349,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1349,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1349,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_schedule_DASH_cancel,m], null);
}));
react_native_web.events.empty_value_QMARK_ = (function react_native_web$events$empty_value_QMARK_(o){
if(cljs.core.seqable_QMARK_(o)){
return cljs.core.empty_QMARK_(o);
} else {
return (o == null);

}
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fiddle_SLASH_set_DASH_app_DASH_db,(function (p__1352,p__1353){
var map__1354 = p__1352;
var map__1354__$1 = (((((!((map__1354 == null))))?(((((map__1354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1354):map__1354);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1354__$1,cljs.core.cst$kw$db);
var vec__1355 = p__1353;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1355,(0),null);
var map__1358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1355,(1),null);
var map__1358__$1 = (((((!((map__1358 == null))))?(((((map__1358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1358):map__1358);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1358__$1,cljs.core.cst$kw$hook_DASH_id);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1355,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_store,id], null),m)], null);
}));
react_native_web.events.put_or_dissoc = (function react_native_web$events$put_or_dissoc(db,id,key,value){
if(react_native_web.events.empty_value_QMARK_(value)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_store,id], null),cljs.core.dissoc,key);
} else {
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_store,id,key], null),value);
}
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$store_SLASH_put,(function (p__1361,p__1362){
var map__1363 = p__1361;
var map__1363__$1 = (((((!((map__1363 == null))))?(((((map__1363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1363):map__1363);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1363__$1,cljs.core.cst$kw$db);
var vec__1364 = p__1362;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1364,(0),null);
var map__1367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1364,(1),null);
var map__1367__$1 = (((((!((map__1367 == null))))?(((((map__1367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1367):map__1367);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1367__$1,cljs.core.cst$kw$hook_DASH_id);
var map__1368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1364,(2),null);
var map__1368__$1 = (((((!((map__1368 == null))))?(((((map__1368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1368):map__1368);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1368__$1,cljs.core.cst$kw$key);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1368__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,react_native_web.events.put_or_dissoc(db,id,key,value)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$store_SLASH_puts,(function (p__1374,p__1375){
var map__1376 = p__1374;
var map__1376__$1 = (((((!((map__1376 == null))))?(((((map__1376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1376):map__1376);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1376__$1,cljs.core.cst$kw$db);
var vec__1377 = p__1375;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1377,(0),null);
var map__1380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1377,(1),null);
var map__1380__$1 = (((((!((map__1380 == null))))?(((((map__1380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1380):map__1380);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1380__$1,cljs.core.cst$kw$id);
var map__1381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1377,(2),null);
var map__1381__$1 = (((((!((map__1381 == null))))?(((((map__1381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1381):map__1381);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1381__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__1376,map__1376__$1,db,vec__1377,_,map__1380,map__1380__$1,id,map__1381,map__1381__$1,value){
return (function (p1__1372_SHARP_,p2__1373_SHARP_){
return react_native_web.events.put_or_dissoc(p1__1372_SHARP_,id,cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(p2__1373_SHARP_),cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(p2__1373_SHARP_));
});})(map__1376,map__1376__$1,db,vec__1377,_,map__1380,map__1380__$1,id,map__1381,map__1381__$1,value))
,db,value)], null);
}));
react_native_web.events.append = (function react_native_web$events$append(acc,k,v){
var o = cljs.core.get.cljs$core$IFn$_invoke$arity$2(acc,k);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((cljs.core.vector_QMARK_(o))?o:(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[o],null))),v));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$store_SLASH_append,(function (p__1385,p__1386){
var map__1387 = p__1385;
var map__1387__$1 = (((((!((map__1387 == null))))?(((((map__1387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1387):map__1387);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1387__$1,cljs.core.cst$kw$db);
var vec__1388 = p__1386;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1388,(0),null);
var map__1391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1388,(1),null);
var map__1391__$1 = (((((!((map__1391 == null))))?(((((map__1391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1391):map__1391);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1391__$1,cljs.core.cst$kw$id);
var map__1392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1388,(2),null);
var map__1392__$1 = (((((!((map__1392 == null))))?(((((map__1392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1392):map__1392);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1392__$1,cljs.core.cst$kw$key);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1392__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_store,id], null),react_native_web.events.append,key,value)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$store_SLASH_clear,(function (p__1396,p__1397){
var map__1398 = p__1396;
var map__1398__$1 = (((((!((map__1398 == null))))?(((((map__1398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1398):map__1398);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1398__$1,cljs.core.cst$kw$db);
var vec__1399 = p__1397;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1399,(0),null);
var map__1402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1399,(1),null);
var map__1402__$1 = (((((!((map__1402 == null))))?(((((map__1402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1402):map__1402);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1402__$1,cljs.core.cst$kw$id);
var map__1403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1399,(2),null);
var map__1403__$1 = (((((!((map__1403 == null))))?(((((map__1403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1403):map__1403);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1403__$1,cljs.core.cst$kw$key);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_store,id], null),cljs.core.dissoc,key)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$store_SLASH_clear_DASH_all,(function (p__1407,p__1408){
var map__1409 = p__1407;
var map__1409__$1 = (((((!((map__1409 == null))))?(((((map__1409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1409):map__1409);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1409__$1,cljs.core.cst$kw$db);
var vec__1410 = p__1408;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1410,(0),null);
var map__1413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1410,(1),null);
var map__1413__$1 = (((((!((map__1413 == null))))?(((((map__1413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1413):map__1413);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1413__$1,cljs.core.cst$kw$id);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1410,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$extensions_SLASH_store,cljs.core.dissoc,id)], null);
}));
react_native_web.events.json_QMARK_ = (function react_native_web$events$json_QMARK_(res){
var temp__5457__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(res,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"content-type"], null));
if(cljs.core.truth_(temp__5457__auto__)){
var type = temp__5457__auto__;
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
var G__1416_1422 = cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_json_DASH_parse;
var G__1417_1423 = ((function (G__1416_1422){
return (function (p__1418){
var map__1419 = p__1418;
var map__1419__$1 = (((((!((map__1419 == null))))?(((((map__1419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1419):map__1419);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1419__$1,cljs.core.cst$kw$value);
var on_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1419__$1,cljs.core.cst$kw$on_DASH_result);
var G__1421 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,react_native_web.events.parse_json(value)], null);
return (on_result.cljs$core$IFn$_invoke$arity$1 ? on_result.cljs$core$IFn$_invoke$arity$1(G__1421) : on_result.call(null,G__1421));
});})(G__1416_1422))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1416_1422,G__1417_1423) : re_frame.core.reg_fx.call(null,G__1416_1422,G__1417_1423));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions_SLASH_json_DASH_parse,(function (_,p__1424){
var vec__1425 = p__1424;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1425,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1425,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1425,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_json_DASH_parse,m], null);
}));
var G__1428_1431 = cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_json_DASH_stringify;
var G__1429_1432 = ((function (G__1428_1431){
return (function (value,on_result){
var G__1430 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,JSON.stringify(cljs.core.clj__GT_js(value))], null);
return (on_result.cljs$core$IFn$_invoke$arity$1 ? on_result.cljs$core$IFn$_invoke$arity$1(G__1430) : on_result.call(null,G__1430));
});})(G__1428_1431))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1428_1431,G__1429_1432) : re_frame.core.reg_fx.call(null,G__1428_1431,G__1429_1432));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions_SLASH_json_DASH_stringify,(function (_,p__1433){
var vec__1434 = p__1433;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1434,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1434,(1),null);
var map__1437 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1434,(2),null);
var map__1437__$1 = (((((!((map__1437 == null))))?(((((map__1437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1437):map__1437);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1437__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_json_DASH_stringify,value], null);
}));
react_native_web.events.parse_result = (function react_native_web$events$parse_result(result,on_success){
var res = (function (){try{return react_native_web.events.parse_json(result);
}catch (e1439){if((e1439 instanceof Error)){
var _ = e1439;
return null;
} else {
throw e1439;

}
}})();
var G__1440 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$body,(function (){var or__4131__auto__ = res;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return result;
}
})()], null);
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(G__1440) : on_success.call(null,G__1440));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$http_SLASH_get,(function (_,p__1442){
var vec__1443 = p__1442;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1443,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1443,(1),null);
var map__1446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1443,(2),null);
var map__1446__$1 = (((((!((map__1446 == null))))?(((((map__1446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1446):map__1446);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1446__$1,cljs.core.cst$kw$url);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1446__$1,cljs.core.cst$kw$on_DASH_success);
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1446__$1,cljs.core.cst$kw$on_DASH_failure);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1446__$1,cljs.core.cst$kw$timeout);
ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false,cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$text,cljs.core.cst$kw$handler,((function (vec__1443,___$1,___$2,map__1446,map__1446__$1,url,on_success,on_failure,timeout){
return (function (p1__1441_SHARP_){
if(cljs.core.truth_(on_success)){
return react_native_web.events.parse_result(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__1441_SHARP_),on_success);
} else {
return null;
}
});})(vec__1443,___$1,___$2,map__1446,map__1446__$1,url,on_success,on_failure,timeout))
,cljs.core.cst$kw$error_DASH_handler,on_failure], null)], 0));

return null;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$http_SLASH_post,(function (_,p__1449){
var vec__1450 = p__1449;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1450,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1450,(1),null);
var map__1453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1450,(2),null);
var map__1453__$1 = (((((!((map__1453 == null))))?(((((map__1453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1453):map__1453);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1453__$1,cljs.core.cst$kw$url);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1453__$1,cljs.core.cst$kw$body);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1453__$1,cljs.core.cst$kw$on_DASH_success);
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1453__$1,cljs.core.cst$kw$on_DASH_failure);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1453__$1,cljs.core.cst$kw$timeout);
ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false,cljs.core.cst$kw$body,cljs.core.clj__GT_js(body),cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$text,cljs.core.cst$kw$handler,((function (vec__1450,___$1,___$2,map__1453,map__1453__$1,url,body,on_success,on_failure,timeout){
return (function (p1__1448_SHARP_){
if(cljs.core.truth_(on_success)){
return react_native_web.events.parse_result(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__1448_SHARP_),on_success);
} else {
return null;
}
});})(vec__1450,___$1,___$2,map__1453,map__1453__$1,url,body,on_success,on_failure,timeout))
,cljs.core.cst$kw$error_DASH_handler,on_failure], null)], 0));

return null;
}));
react_native_web.events.parse_ipfs_add_response = (function react_native_web$events$parse_ipfs_add_response(res){
var map__1455 = react_native_web.events.parse_json(res);
var map__1455__$1 = (((((!((map__1455 == null))))?(((((map__1455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1455):map__1455);
var Name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1455__$1,cljs.core.cst$kw$Name);
var Hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1455__$1,cljs.core.cst$kw$Hash);
var Size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1455__$1,cljs.core.cst$kw$Size);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,Name,cljs.core.cst$kw$hash,Hash,cljs.core.cst$kw$size,Size], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ipfs_SLASH_add,(function (_,p__1458){
var vec__1459 = p__1458;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1459,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1459,(1),null);
var map__1462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1459,(2),null);
var map__1462__$1 = (((((!((map__1462 == null))))?(((((map__1462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1462):map__1462);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1462__$1,cljs.core.cst$kw$value);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1462__$1,cljs.core.cst$kw$on_DASH_success);
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1462__$1,cljs.core.cst$kw$on_DASH_failure);
var formdata_1466 = (function (){var G__1464 = (new FormData());
G__1464.append("extension.event.edn",value);

return G__1464;
})();
ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic("https://ipfs.infura.io:5001/api/v0/add",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false,cljs.core.cst$kw$body,formdata_1466,cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$text,cljs.core.cst$kw$handler,((function (formdata_1466,vec__1459,___$1,___$2,map__1462,map__1462__$1,value,on_success,on_failure){
return (function (p1__1457_SHARP_){
var G__1465 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,react_native_web.events.parse_ipfs_add_response(p1__1457_SHARP_)], null);
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(G__1465) : on_success.call(null,G__1465));
});})(formdata_1466,vec__1459,___$1,___$2,map__1462,map__1462__$1,value,on_success,on_failure))
,cljs.core.cst$kw$error_DASH_handler,on_failure], null)], 0));

return null;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ipfs_SLASH_cat,(function (_,p__1468){
var vec__1469 = p__1468;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1469,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1469,(1),null);
var map__1472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1469,(2),null);
var map__1472__$1 = (((((!((map__1472 == null))))?(((((map__1472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1472):map__1472);
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1472__$1,cljs.core.cst$kw$hash);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1472__$1,cljs.core.cst$kw$on_DASH_success);
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1472__$1,cljs.core.cst$kw$on_DASH_failure);
ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(["https://ipfs.infura.io/ipfs/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false,cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$text,cljs.core.cst$kw$handler,((function (vec__1469,___$1,___$2,map__1472,map__1472__$1,hash,on_success,on_failure){
return (function (p1__1467_SHARP_){
var G__1474 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,p1__1467_SHARP_], null);
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(G__1474) : on_success.call(null,G__1474));
});})(vec__1469,___$1,___$2,map__1472,map__1472__$1,hash,on_success,on_failure))
,cljs.core.cst$kw$error_DASH_handler,on_failure], null)], 0));

return null;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions$chat$command_SLASH_set_DASH_parameter,(function (_,p__1475){
var vec__1476 = p__1475;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1476,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1476,(1),null);
var map__1479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1476,(2),null);
var map__1479__$1 = (((((!((map__1479 == null))))?(((((map__1479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1479):map__1479);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1479__$1,cljs.core.cst$kw$value);
return null;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions$chat$command_SLASH_set_DASH_custom_DASH_parameter,(function (p__1481,p__1482){
var map__1483 = p__1481;
var map__1483__$1 = (((((!((map__1483 == null))))?(((((map__1483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1483):map__1483);
var map__1484 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1483__$1,cljs.core.cst$kw$db);
var map__1484__$1 = (((((!((map__1484 == null))))?(((((map__1484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1484):map__1484);
var db = map__1484__$1;
var current_chat_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1484__$1,cljs.core.cst$kw$current_DASH_chat_DASH_id);
var vec__1485 = p__1482;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1485,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1485,(1),null);
var map__1488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1485,(2),null);
var map__1488__$1 = (((((!((map__1488 == null))))?(((((map__1488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1488):map__1488);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1488__$1,cljs.core.cst$kw$key);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1488__$1,cljs.core.cst$kw$value);
return null;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions$chat$command_SLASH_set_DASH_parameter_DASH_with_DASH_custom_DASH_params,(function (p__1492,p__1493){
var map__1494 = p__1492;
var map__1494__$1 = (((((!((map__1494 == null))))?(((((map__1494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1494):map__1494);
var map__1495 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1494__$1,cljs.core.cst$kw$db);
var map__1495__$1 = (((((!((map__1495 == null))))?(((((map__1495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1495):map__1495);
var db = map__1495__$1;
var current_chat_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1495__$1,cljs.core.cst$kw$current_DASH_chat_DASH_id);
var vec__1496 = p__1493;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1496,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1496,(1),null);
var map__1499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1496,(2),null);
var map__1499__$1 = (((((!((map__1499 == null))))?(((((map__1499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1499):map__1499);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1499__$1,cljs.core.cst$kw$value);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1499__$1,cljs.core.cst$kw$params);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$params], null),cljs.core.merge,params),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$suggestion_DASH_id], null),null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions$chat$command_SLASH_send_DASH_plain_DASH_text_DASH_message,(function (_,p__1503){
var vec__1504 = p__1503;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1504,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1504,(1),null);
var map__1507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1504,(2),null);
var map__1507__$1 = (((((!((map__1507 == null))))?(((((map__1507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1507):map__1507);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1507__$1,cljs.core.cst$kw$value);
return null;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions$chat$command_SLASH_send_DASH_message,(function (p__1510,p__1511){
var map__1512 = p__1510;
var map__1512__$1 = (((((!((map__1512 == null))))?(((((map__1512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1512):map__1512);
var cofx = map__1512__$1;
var map__1513 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1512__$1,cljs.core.cst$kw$db);
var map__1513__$1 = (((((!((map__1513 == null))))?(((((map__1513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1513):map__1513);
var db = map__1513__$1;
var current_chat_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1513__$1,cljs.core.cst$kw$current_DASH_chat_DASH_id);
var vec__1514 = p__1511;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1514,(0),null);
var map__1517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1514,(1),null);
var map__1517__$1 = (((((!((map__1517 == null))))?(((((map__1517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1517):map__1517);
var hook_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1517__$1,cljs.core.cst$kw$hook_DASH_id);
var map__1518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1514,(2),null);
var map__1518__$1 = (((((!((map__1518 == null))))?(((((map__1518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1518):map__1518);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1518__$1,cljs.core.cst$kw$params);
return null;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions_SLASH_show_DASH_selection_DASH_screen,(function (cofx,p__1524){
var vec__1525 = p__1524;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1525,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1525,(1),null);
var map__1528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1525,(2),null);
var map__1528__$1 = (((((!((map__1528 == null))))?(((((map__1528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1528):map__1528);
var params = map__1528__$1;
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1528__$1,cljs.core.cst$kw$on_DASH_select);
return null;
}));
react_native_web.events.operation__GT_fn = (function react_native_web$events$operation__GT_fn(k){
var G__1530 = k;
var G__1530__$1 = (((G__1530 instanceof cljs.core.Keyword))?G__1530.fqn:null);
switch (G__1530__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1530__$1)].join('')));

}
});
var G__1532_1538 = cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_arithmetic;
var G__1533_1539 = ((function (G__1532_1538){
return (function (p__1534){
var map__1535 = p__1534;
var map__1535__$1 = (((((!((map__1535 == null))))?(((((map__1535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1535):map__1535);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1535__$1,cljs.core.cst$kw$operation);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1535__$1,cljs.core.cst$kw$values);
var on_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1535__$1,cljs.core.cst$kw$on_DASH_result);
var G__1537 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(react_native_web.events.operation__GT_fn(operation),values)], null);
return (on_result.cljs$core$IFn$_invoke$arity$1 ? on_result.cljs$core$IFn$_invoke$arity$1(G__1537) : on_result.call(null,G__1537));
});})(G__1532_1538))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1532_1538,G__1533_1539) : re_frame.core.reg_fx.call(null,G__1532_1538,G__1533_1539));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions_SLASH_arithmetic,(function (_,p__1540){
var vec__1541 = p__1540;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1541,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1541,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1541,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_arithmetic,m], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions_SLASH_open_DASH_url,(function (cofx,p__1544){
var vec__1545 = p__1544;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1545,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1545,(1),null);
var map__1548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1545,(2),null);
var map__1548__$1 = (((((!((map__1548 == null))))?(((((map__1548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1548):map__1548);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1548__$1,cljs.core.cst$kw$url);
window.open(url,"_blank");

return null;
}));
react_native_web.events.all = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$ethereum$erc721_SLASH_get_DASH_approved,cljs.core.cst$sym$ipfs_SLASH_cat,cljs.core.cst$sym$ethereum_SLASH_create_DASH_address,cljs.core.cst$sym$ethereum_SLASH_await_DASH_transaction_DASH_receipt,cljs.core.cst$sym$ethereum_SLASH_sign,cljs.core.cst$sym$store_SLASH_puts,cljs.core.cst$sym$ethereum$erc20_SLASH_allowance,cljs.core.cst$sym$chat$command_SLASH_open_DASH_public_DASH_chat,cljs.core.cst$sym$ethereum$erc721_SLASH_set_DASH_approval_DASH_for_DASH_all,cljs.core.cst$sym$ethereum_SLASH_shh_DASH_get_DASH_messages,cljs.core.cst$sym$store_SLASH_clear_DASH_all,cljs.core.cst$sym$schedule_SLASH_start,cljs.core.cst$sym$ethereum_SLASH_call,cljs.core.cst$sym$browser_SLASH_open_DASH_url,cljs.core.cst$sym$ethereum_SLASH_shh_DASH_get_DASH_filter_DASH_changes,cljs.core.cst$sym$ipfs_SLASH_add,cljs.core.cst$sym$ethereum_SLASH_shh_DASH_new_DASH_group,cljs.core.cst$sym$chat$command_SLASH_set_DASH_parameter_DASH_with_DASH_custom_DASH_params,cljs.core.cst$sym$log,cljs.core.cst$sym$identity,cljs.core.cst$sym$ethereum$erc20_SLASH_transfer_DASH_from,cljs.core.cst$sym$ethereum_SLASH_shh_new_DASH_filter,cljs.core.cst$sym$ethereum_SLASH_transaction_DASH_receipt,cljs.core.cst$sym$ethereum_SLASH_shh_DASH_new_DASH_identity,cljs.core.cst$sym$ethereum_SLASH_shh_DASH_add_DASH_to_DASH_group,cljs.core.cst$sym$ethereum_SLASH_logs,cljs.core.cst$sym$ethereum_SLASH_shh_DASH_uninstall_DASH_filter,cljs.core.cst$sym$camera_SLASH_picture,cljs.core.cst$sym$store_SLASH_append,cljs.core.cst$sym$ethereum_SLASH_send_DASH_transaction,cljs.core.cst$sym$camera_SLASH_qr_DASH_code,cljs.core.cst$sym$ethereum$erc721_SLASH_safe_DASH_transfer_DASH_from,cljs.core.cst$sym$ethereum$ens_SLASH_resolve,cljs.core.cst$sym$ethereum$erc721_SLASH_owner_DASH_of,cljs.core.cst$sym$chat$command_SLASH_send_DASH_message,cljs.core.cst$sym$chat$command_SLASH_send_DASH_plain_DASH_text_DASH_message,cljs.core.cst$sym$json_SLASH_parse,cljs.core.cst$sym$json_SLASH_stringify,cljs.core.cst$sym$store_SLASH_put,cljs.core.cst$sym$schedule_SLASH_cancel,cljs.core.cst$sym$ethereum_SLASH_shh_DASH_has_DASH_identity,cljs.core.cst$sym$ethereum_SLASH_shh_post,cljs.core.cst$sym$store_SLASH_clear,cljs.core.cst$sym$ethereum_SLASH_cancel_DASH_filter,cljs.core.cst$sym$ethereum$erc20_SLASH_transfer,cljs.core.cst$sym$ethereum$erc20_SLASH_balance_DASH_of,cljs.core.cst$sym$selection_DASH_screen,cljs.core.cst$sym$http_SLASH_post,cljs.core.cst$sym$arithmetic,cljs.core.cst$sym$ethereum$erc721_SLASH_is_DASH_approved_DASH_for_DASH_all,cljs.core.cst$sym$ethereum$erc20_SLASH_total_DASH_supply,cljs.core.cst$sym$chat$command_SLASH_set_DASH_parameter,cljs.core.cst$sym$ethereum_SLASH_create_DASH_filter,cljs.core.cst$sym$alert,cljs.core.cst$sym$chat$command_SLASH_set_DASH_custom_DASH_parameter,cljs.core.cst$sym$ethereum$erc20_SLASH_approve,cljs.core.cst$sym$http_SLASH_get,cljs.core.cst$sym$ethereum_SLASH_logs_DASH_changes],[new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc721_DASH_get_DASH_approved,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$token_DASH_id,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$ipfs_SLASH_cat,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$hash,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_create_DASH_address,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_result,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_await_DASH_transaction_DASH_receipt,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$value,cljs.core.cst$kw$string,cljs.core.cst$kw$interval,cljs.core.cst$kw$number,cljs.core.cst$kw$topics_DASH_hints,cljs.core.cst$kw$vector,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_sign,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$message_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$data_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$store_SLASH_puts,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$vector], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc20_DASH_allowance,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$token_DASH_owner,cljs.core.cst$kw$string,cljs.core.cst$kw$spender,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$value,cljs.core.cst$kw$extensions$chat$command_SLASH_open_DASH_public_DASH_chat,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$topic,cljs.core.cst$kw$string,cljs.core.cst$kw$navigate_DASH_to,cljs.core.cst$kw$boolean], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc721_DASH_set_DASH_approval_DASH_for_DASH_all,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$operator,cljs.core.cst$kw$string,cljs.core.cst$kw$approved,cljs.core.cst$kw$boolean,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_shh_DASH_get_DASH_messages,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$store_SLASH_clear_DASH_all], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_schedule_DASH_start,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$interval,cljs.core.cst$kw$number,cljs.core.cst$kw$on_DASH_created,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_result,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_call,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$to,cljs.core.cst$kw$string,cljs.core.cst$kw$method,cljs.core.cst$kw$string,cljs.core.cst$kw$params_QMARK_,cljs.core.cst$kw$vector,cljs.core.cst$kw$outputs_QMARK_,cljs.core.cst$kw$vector,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_open_DASH_url,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_shh_DASH_get_DASH_filter_DASH_changes,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$ipfs_SLASH_add,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_shh_DASH_new_DASH_group,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions$chat$command_SLASH_set_DASH_parameter_DASH_with_DASH_custom_DASH_params,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.cst$kw$string,cljs.core.cst$kw$params,cljs.core.cst$kw$map], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$log,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_identity_DASH_event,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cb,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc20_DASH_transfer_DASH_from,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$from,cljs.core.cst$kw$string,cljs.core.cst$kw$to,cljs.core.cst$kw$string,cljs.core.cst$kw$value,cljs.core.cst$kw$number,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_shh_DASH_new_DASH_filter,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$to_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$topics,cljs.core.cst$kw$vector,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_transaction_DASH_receipt,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$value,cljs.core.cst$kw$string,cljs.core.cst$kw$topics_DASH_hints,cljs.core.cst$kw$vector,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_shh_DASH_new_DASH_identity,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_shh_DASH_add_DASH_to_DASH_group,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$address,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_logs,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$from_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$to_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$address_QMARK_,cljs.core.cst$kw$vector,cljs.core.cst$kw$topics_QMARK_,cljs.core.cst$kw$vector,cljs.core.cst$kw$block_DASH_hash_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_shh_DASH_uninstall_DASH_filter,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$value,cljs.core.cst$kw$extensions_SLASH_camera_DASH_picture,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$store_SLASH_append,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,cljs.core.cst$kw$string,cljs.core.cst$kw$value,cljs.core.cst$kw$any], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_send_DASH_transaction,cljs.core.cst$kw$arguments,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$gas_QMARK_,cljs.core.cst$kw$value_QMARK_,cljs.core.cst$kw$gas_DASH_price_QMARK_,cljs.core.cst$kw$params_QMARK_,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$on_DASH_success_QMARK_,cljs.core.cst$kw$nonce_QMARK_,cljs.core.cst$kw$method_QMARK_,cljs.core.cst$kw$to],[cljs.core.cst$kw$string,cljs.core.cst$kw$string,cljs.core.cst$kw$string,cljs.core.cst$kw$vector,cljs.core.cst$kw$event,cljs.core.cst$kw$event,cljs.core.cst$kw$string,cljs.core.cst$kw$string,cljs.core.cst$kw$string])], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$value,cljs.core.cst$kw$extensions_SLASH_camera_DASH_qr_DASH_code,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc721_DASH_safe_DASH_transfer_DASH_from,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$from,cljs.core.cst$kw$string,cljs.core.cst$kw$to,cljs.core.cst$kw$string,cljs.core.cst$kw$token_DASH_id,cljs.core.cst$kw$string,cljs.core.cst$kw$data_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_resolve_DASH_ens,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc721_DASH_owner_DASH_of,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$token_DASH_id,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions$chat$command_SLASH_send_DASH_message,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,cljs.core.cst$kw$map], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions$chat$command_SLASH_send_DASH_plain_DASH_text_DASH_message,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_json_DASH_parse,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_result,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_json_DASH_stringify,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_result,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$store_SLASH_put,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,cljs.core.cst$kw$string,cljs.core.cst$kw$value,cljs.core.cst$kw$any], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_schedule_DASH_cancel,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$number], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$value,cljs.core.cst$kw$extensions_SLASH_shh_DASH_has_DASH_identity,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$address,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_shh_DASH_post,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$from_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$to_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$topics,cljs.core.cst$kw$vector,cljs.core.cst$kw$payload,cljs.core.cst$kw$string,cljs.core.cst$kw$priority,cljs.core.cst$kw$string,cljs.core.cst$kw$ttl,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$store_SLASH_clear,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_cancel_DASH_filter,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc20_DASH_transfer,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$to,cljs.core.cst$kw$string,cljs.core.cst$kw$value,cljs.core.cst$kw$number,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc20_DASH_balance_DASH_of,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$token_DASH_owner,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_show_DASH_selection_DASH_screen,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$items,cljs.core.cst$kw$vector,cljs.core.cst$kw$on_DASH_select,cljs.core.cst$kw$event,cljs.core.cst$kw$render,cljs.core.cst$kw$view,cljs.core.cst$kw$title,cljs.core.cst$kw$string,cljs.core.cst$kw$extractor_DASH_key,cljs.core.cst$kw$keyword], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$http_SLASH_post,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$url,cljs.core.cst$kw$string,cljs.core.cst$kw$body,cljs.core.cst$kw$string,cljs.core.cst$kw$timeout_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_arithmetic,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$values,cljs.core.cst$kw$vector,cljs.core.cst$kw$operation,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$one_DASH_of,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$divide,null,cljs.core.cst$kw$times,null,cljs.core.cst$kw$minus,null,cljs.core.cst$kw$plus,null], null), null)], null),cljs.core.cst$kw$on_DASH_result,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc721_DASH_is_DASH_approved_DASH_for_DASH_all,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$owner,cljs.core.cst$kw$string,cljs.core.cst$kw$operator,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc20_DASH_total_DASH_supply,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions$chat$command_SLASH_set_DASH_parameter,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$any], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_create_DASH_filter,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$type,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$one_DASH_of,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$block,null,cljs.core.cst$kw$filter,null,cljs.core.cst$kw$pending_DASH_transaction,null], null), null)], null),cljs.core.cst$kw$from_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$to_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$address_QMARK_,cljs.core.cst$kw$vector,cljs.core.cst$kw$topics_QMARK_,cljs.core.cst$kw$vector,cljs.core.cst$kw$block_DASH_hash_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$alert,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions$chat$command_SLASH_set_DASH_custom_DASH_parameter,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,cljs.core.cst$kw$keyword,cljs.core.cst$kw$value,cljs.core.cst$kw$any], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc20_DASH_approve,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$spender,cljs.core.cst$kw$string,cljs.core.cst$kw$value,cljs.core.cst$kw$number,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$http_SLASH_get,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$url,cljs.core.cst$kw$string,cljs.core.cst$kw$timeout_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_logs_DASH_changes,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$string,cljs.core.cst$kw$topics_DASH_hints,cljs.core.cst$kw$vector], null)], null)]);
