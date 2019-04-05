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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set,(function (db,p__1355){
var vec__1356 = p__1355;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1356,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1356,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1356,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k,v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_in,(function (db,p__1359){
var vec__1360 = p__1359;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1360,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1360,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1360,(2),null);
return cljs.core.assoc_in(db,path,v);
}));
pluto.playground.fx.update_extension_errors = (function pluto$playground$fx$update_extension_errors(p__1363,p__1364){
var map__1365 = p__1363;
var map__1365__$1 = (((((!((map__1365 == null))))?(((((map__1365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1365):map__1365);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1365__$1,cljs.core.cst$kw$db);
var vec__1366 = p__1364;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1366,(0),null);
var errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1366,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$errors,errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_errors,pluto.playground.fx.update_extension_errors);
pluto.playground.fx.clear_errors = (function pluto$playground$fx$clear_errors(p__1370,_){
var map__1371 = p__1370;
var map__1371__$1 = (((((!((map__1371 == null))))?(((((map__1371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1371):map__1371);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1371__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_clear_DASH_errors,pluto.playground.fx.clear_errors);
pluto.playground.fx.update_extension_parsed = (function pluto$playground$fx$update_extension_parsed(p__1373,p__1374){
var map__1375 = p__1373;
var map__1375__$1 = (((((!((map__1375 == null))))?(((((map__1375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1375):map__1375);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1375__$1,cljs.core.cst$kw$db);
var vec__1376 = p__1374;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1376,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1376,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$parsed,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,pluto.playground.fx.update_extension_parsed);
var G__1380_1390 = cljs.core.cst$kw$extension_SLASH_parse;
var G__1381_1391 = ((function (G__1380_1390){
return (function (p__1382){
var vec__1383 = p__1382;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1383,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1383,(1),null);
var map__1386 = pluto.core.parse(ctx,data);
var map__1386__$1 = (((((!((map__1386 == null))))?(((((map__1386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1386):map__1386);
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1386__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1386__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__1388 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1388) : re_frame.core.dispatch.call(null,G__1388));
} else {
var G__1389 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,data__$1], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1389) : re_frame.core.dispatch.call(null,G__1389));
}
});})(G__1380_1390))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1380_1390,G__1381_1391) : re_frame.core.reg_fx.call(null,G__1380_1390,G__1381_1391));
pluto.playground.fx.update_extension_data = (function pluto$playground$fx$update_extension_data(p__1392,p__1393){
var map__1394 = p__1392;
var map__1394__$1 = (((((!((map__1394 == null))))?(((((map__1394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1394):map__1394);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1394__$1,cljs.core.cst$kw$db);
var vec__1395 = p__1393;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1395,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1395,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1395,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$data,data),cljs.core.cst$kw$extension_SLASH_parse,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_data,pluto.playground.fx.update_extension_data);
var G__1399_1410 = cljs.core.cst$kw$extension_SLASH_read;
var G__1400_1411 = ((function (G__1399_1410){
return (function (p__1401){
var vec__1402 = p__1401;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1402,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1402,(1),null);
var G__1405_1412 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_clear_DASH_errors], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1405_1412) : re_frame.core.dispatch.call(null,G__1405_1412));

var map__1406 = pluto.core.read(source);
var map__1406__$1 = (((((!((map__1406 == null))))?(((((map__1406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1406):map__1406);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1406__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1406__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__1408 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1408) : re_frame.core.dispatch.call(null,G__1408));
} else {
var G__1409 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_data,ctx,data], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1409) : re_frame.core.dispatch.call(null,G__1409));
}
});})(G__1399_1410))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1399_1410,G__1400_1411) : re_frame.core.reg_fx.call(null,G__1399_1410,G__1400_1411));
pluto.playground.fx.update_extension_source = (function pluto$playground$fx$update_extension_source(p__1413,p__1414){
var map__1415 = p__1413;
var map__1415__$1 = (((((!((map__1415 == null))))?(((((map__1415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1415):map__1415);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1415__$1,cljs.core.cst$kw$db);
var vec__1416 = p__1414;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1416,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1416,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1416,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$source,data),cljs.core.cst$kw$extension_SLASH_read,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_source,pluto.playground.fx.update_extension_source);
var G__1420_1426 = cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value;
var G__1421_1427 = ((function (G__1420_1426){
return (function (p__1422){
var vec__1423 = p__1422;
var cm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1423,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1423,(1),null);
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
});})(G__1420_1426))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1420_1426,G__1421_1427) : re_frame.core.reg_fx.call(null,G__1420_1426,G__1421_1427));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_editor,(function (p__1428,p__1429){
var map__1430 = p__1428;
var map__1430__$1 = (((((!((map__1430 == null))))?(((((map__1430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1430):map__1430);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1430__$1,cljs.core.cst$kw$db);
var vec__1431 = p__1429;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1431,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1431,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code_DASH_mirror.cljs$core$IFn$_invoke$arity$1(db),data], null)], null);
}));
pluto.playground.fx.append_log = (function pluto$playground$fx$append_log(p__1435,p__1436){
var map__1437 = p__1435;
var map__1437__$1 = (((((!((map__1437 == null))))?(((((map__1437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1437):map__1437);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1437__$1,cljs.core.cst$kw$db);
var vec__1438 = p__1436;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1438,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1438,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$logs,cljs.core.conj,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_append_DASH_log,pluto.playground.fx.append_log);
pluto.playground.fx.switch_filter_logs = (function pluto$playground$fx$switch_filter_logs(p__1442,p__1443){
var map__1444 = p__1442;
var map__1444__$1 = (((((!((map__1444 == null))))?(((((map__1444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1444):map__1444);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1444__$1,cljs.core.cst$kw$db);
var vec__1445 = p__1443;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1445,(0),null);
var checked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1445,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$filtered_DASH_logs,checked)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_filter_DASH_logs,pluto.playground.fx.switch_filter_logs);
pluto.playground.fx.clear_logs = (function pluto$playground$fx$clear_logs(p__1449,_){
var map__1450 = p__1449;
var map__1450__$1 = (((((!((map__1450 == null))))?(((((map__1450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1450):map__1450);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1450__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$logs)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_clear_DASH_logs,pluto.playground.fx.clear_logs);
pluto.playground.fx.set_selected = (function pluto$playground$fx$set_selected(p__1452,p__1453){
var map__1454 = p__1452;
var map__1454__$1 = (((((!((map__1454 == null))))?(((((map__1454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1454):map__1454);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1454__$1,cljs.core.cst$kw$db);
var vec__1455 = p__1453;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1455,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1455,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selected,path)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_selected,pluto.playground.fx.set_selected);
pluto.playground.fx.switch_preview = (function pluto$playground$fx$switch_preview(p__1459,p__1460){
var map__1461 = p__1459;
var map__1461__$1 = (((((!((map__1461 == null))))?(((((map__1461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1461):map__1461);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1461__$1,cljs.core.cst$kw$db);
var vec__1462 = p__1460;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1462,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$preview,cljs.core.not)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_preview,pluto.playground.fx.switch_preview);
var G__1466_1468 = cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs;
var G__1467_1469 = ((function (G__1466_1468){
return (function (value){
return pluto.playground.ipfs.save(value);
});})(G__1466_1468))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1466_1468,G__1467_1469) : re_frame.core.reg_fx.call(null,G__1466_1468,G__1467_1469));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_publish,(function (p__1470,_){
var map__1471 = p__1470;
var map__1471__$1 = (((((!((map__1471 == null))))?(((((map__1471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1471):map__1471);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1471__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$publish,cljs.core.cst$kw$in_DASH_progress_QMARK_], null),true),cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs,cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db)], null);
}));
var G__1474_1477 = cljs.core.cst$kw$fetch_DASH_extension_DASH_fx;
var G__1475_1478 = ((function (G__1474_1477){
return (function (){
var hash = (new URL(document.location)).searchParams.get("hash");
var uri = (cljs.core.truth_(hash)?["ipfs@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''):"url@assets/extensions/command/");
return pluto.storages.fetch(uri,((function (hash,uri,G__1474_1477){
return (function (p1__1473_SHARP_){
var G__1476 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_editor,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__1473_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value,cljs.core.cst$kw$content], null))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1476) : re_frame.core.dispatch.call(null,G__1476));
});})(hash,uri,G__1474_1477))
);
});})(G__1474_1477))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1474_1477,G__1475_1478) : re_frame.core.reg_fx.call(null,G__1474_1477,G__1475_1478));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fetch_DASH_extension,(function (p__1479,_){
var map__1480 = p__1479;
var map__1480__$1 = (((((!((map__1480 == null))))?(((((map__1480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1480):map__1480);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1480__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fetch_DASH_extension_DASH_fx,null,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$store_SLASH_clear_DASH_all], null)], null);
}));
var G__1482_1484 = cljs.core.cst$kw$set_DASH_url_DASH_fx;
var G__1483_1485 = ((function (G__1482_1484){
return (function (hash){
return pluto.playground.ipfs.set_url(hash);
});})(G__1482_1484))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1482_1484,G__1483_1485) : re_frame.core.reg_fx.call(null,G__1482_1484,G__1483_1485));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$open_DASH_example,(function (p__1486,p__1487){
var map__1488 = p__1486;
var map__1488__$1 = (((((!((map__1488 == null))))?(((((map__1488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1488):map__1488);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1488__$1,cljs.core.cst$kw$db);
var vec__1489 = p__1487;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1489,(0),null);
var hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1489,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$examples,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$extensions_SLASH_properties,cljs.core.cst$kw$extensions_SLASH_properties,cljs.core.cst$kw$extension_DASH_selection,cljs.core.cst$kw$extensions_SLASH_store], 0)),cljs.core.cst$kw$set_DASH_url_DASH_fx,hash,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fetch_DASH_extension], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_properties,(function (p__1493,p__1494){
var map__1495 = p__1493;
var map__1495__$1 = (((((!((map__1495 == null))))?(((((map__1495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1495):map__1495);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1495__$1,cljs.core.cst$kw$db);
var vec__1496 = p__1494;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1496,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1496,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1496,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_properties,id], null),m)], null);
}));
