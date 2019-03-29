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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set,(function (db,p__1410){
var vec__1411 = p__1410;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1411,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1411,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1411,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k,v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_in,(function (db,p__1414){
var vec__1415 = p__1414;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1415,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1415,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1415,(2),null);
return cljs.core.assoc_in(db,path,v);
}));
pluto.playground.fx.update_extension_errors = (function pluto$playground$fx$update_extension_errors(p__1418,p__1419){
var map__1420 = p__1418;
var map__1420__$1 = (((((!((map__1420 == null))))?(((((map__1420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1420):map__1420);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1420__$1,cljs.core.cst$kw$db);
var vec__1421 = p__1419;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1421,(0),null);
var errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1421,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$errors,errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_errors,pluto.playground.fx.update_extension_errors);
pluto.playground.fx.clear_errors = (function pluto$playground$fx$clear_errors(p__1425,_){
var map__1426 = p__1425;
var map__1426__$1 = (((((!((map__1426 == null))))?(((((map__1426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1426):map__1426);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1426__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_clear_DASH_errors,pluto.playground.fx.clear_errors);
pluto.playground.fx.update_extension_parsed = (function pluto$playground$fx$update_extension_parsed(p__1428,p__1429){
var map__1430 = p__1428;
var map__1430__$1 = (((((!((map__1430 == null))))?(((((map__1430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1430):map__1430);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1430__$1,cljs.core.cst$kw$db);
var vec__1431 = p__1429;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1431,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1431,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$parsed,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,pluto.playground.fx.update_extension_parsed);
var G__1435_1447 = cljs.core.cst$kw$extension_SLASH_parse;
var G__1436_1448 = ((function (G__1435_1447){
return (function (p__1437){
var vec__1438 = p__1437;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1438,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1438,(1),null);
var map__1441 = pluto.core.parse(ctx,data);
var map__1441__$1 = (((((!((map__1441 == null))))?(((((map__1441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1441):map__1441);
var m = map__1441__$1;
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1441__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1441__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__1443 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1443) : re_frame.core.dispatch.call(null,G__1443));
} else {
var G__1444_1449 = react_native_web.hooks.hook_in(cljs.core.first(cljs.core.cst$kw$hooks.cljs$core$IFn$_invoke$arity$1(data__$1)));
var G__1445_1450 = document.getElementById("extension");
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__1444_1449,G__1445_1450) : reagent.core.render_component.call(null,G__1444_1449,G__1445_1450));

var G__1446 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,data__$1], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1446) : re_frame.core.dispatch.call(null,G__1446));
}
});})(G__1435_1447))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1435_1447,G__1436_1448) : re_frame.core.reg_fx.call(null,G__1435_1447,G__1436_1448));
pluto.playground.fx.update_extension_data = (function pluto$playground$fx$update_extension_data(p__1451,p__1452){
var map__1453 = p__1451;
var map__1453__$1 = (((((!((map__1453 == null))))?(((((map__1453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1453):map__1453);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1453__$1,cljs.core.cst$kw$db);
var vec__1454 = p__1452;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1454,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1454,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1454,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$data,data),cljs.core.cst$kw$extension_SLASH_parse,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_data,pluto.playground.fx.update_extension_data);
var G__1458_1469 = cljs.core.cst$kw$extension_SLASH_read;
var G__1459_1470 = ((function (G__1458_1469){
return (function (p__1460){
var vec__1461 = p__1460;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1461,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1461,(1),null);
var G__1464_1471 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_clear_DASH_errors], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1464_1471) : re_frame.core.dispatch.call(null,G__1464_1471));

var map__1465 = pluto.core.read(source);
var map__1465__$1 = (((((!((map__1465 == null))))?(((((map__1465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1465):map__1465);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1465__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1465__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__1467 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1467) : re_frame.core.dispatch.call(null,G__1467));
} else {
var G__1468 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_data,ctx,data], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1468) : re_frame.core.dispatch.call(null,G__1468));
}
});})(G__1458_1469))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1458_1469,G__1459_1470) : re_frame.core.reg_fx.call(null,G__1458_1469,G__1459_1470));
pluto.playground.fx.update_extension_source = (function pluto$playground$fx$update_extension_source(p__1472,p__1473){
var map__1474 = p__1472;
var map__1474__$1 = (((((!((map__1474 == null))))?(((((map__1474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1474):map__1474);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1474__$1,cljs.core.cst$kw$db);
var vec__1475 = p__1473;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1475,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1475,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1475,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$source,data),cljs.core.cst$kw$extension_SLASH_read,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_source,pluto.playground.fx.update_extension_source);
var G__1479_1485 = cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value;
var G__1480_1486 = ((function (G__1479_1485){
return (function (p__1481){
var vec__1482 = p__1481;
var cm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1482,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1482,(1),null);
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
});})(G__1479_1485))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1479_1485,G__1480_1486) : re_frame.core.reg_fx.call(null,G__1479_1485,G__1480_1486));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_editor,(function (p__1487,p__1488){
var map__1489 = p__1487;
var map__1489__$1 = (((((!((map__1489 == null))))?(((((map__1489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1489):map__1489);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1489__$1,cljs.core.cst$kw$db);
var vec__1490 = p__1488;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1490,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1490,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code_DASH_mirror.cljs$core$IFn$_invoke$arity$1(db),data], null)], null);
}));
pluto.playground.fx.append_log = (function pluto$playground$fx$append_log(p__1494,p__1495){
var map__1496 = p__1494;
var map__1496__$1 = (((((!((map__1496 == null))))?(((((map__1496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1496):map__1496);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1496__$1,cljs.core.cst$kw$db);
var vec__1497 = p__1495;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1497,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1497,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$logs,cljs.core.conj,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_append_DASH_log,pluto.playground.fx.append_log);
pluto.playground.fx.set_selected = (function pluto$playground$fx$set_selected(p__1501,p__1502){
var map__1503 = p__1501;
var map__1503__$1 = (((((!((map__1503 == null))))?(((((map__1503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1503):map__1503);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1503__$1,cljs.core.cst$kw$db);
var vec__1504 = p__1502;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1504,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1504,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selected,path)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_selected,pluto.playground.fx.set_selected);
pluto.playground.fx.switch_preview = (function pluto$playground$fx$switch_preview(p__1508,p__1509){
var map__1510 = p__1508;
var map__1510__$1 = (((((!((map__1510 == null))))?(((((map__1510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1510):map__1510);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1510__$1,cljs.core.cst$kw$db);
var vec__1511 = p__1509;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1511,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$preview,cljs.core.not)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_preview,pluto.playground.fx.switch_preview);
var G__1515_1517 = cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs;
var G__1516_1518 = ((function (G__1515_1517){
return (function (value){
return pluto.playground.ipfs.save(value);
});})(G__1515_1517))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1515_1517,G__1516_1518) : re_frame.core.reg_fx.call(null,G__1515_1517,G__1516_1518));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_publish,(function (p__1519,_){
var map__1520 = p__1519;
var map__1520__$1 = (((((!((map__1520 == null))))?(((((map__1520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1520):map__1520);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1520__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$publish,cljs.core.cst$kw$in_DASH_progress_QMARK_], null),true),cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs,cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db)], null);
}));
var G__1523_1526 = cljs.core.cst$kw$fetch_DASH_extension_DASH_fx;
var G__1524_1527 = ((function (G__1523_1526){
return (function (){
var hash = (new URL(document.location)).searchParams.get("hash");
var uri = (cljs.core.truth_(hash)?["ipfs@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''):"url@assets/extensions/command/");
return pluto.storages.fetch(uri,((function (hash,uri,G__1523_1526){
return (function (p1__1522_SHARP_){
var G__1525 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_editor,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__1522_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value,cljs.core.cst$kw$content], null))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1525) : re_frame.core.dispatch.call(null,G__1525));
});})(hash,uri,G__1523_1526))
);
});})(G__1523_1526))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1523_1526,G__1524_1527) : re_frame.core.reg_fx.call(null,G__1523_1526,G__1524_1527));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fetch_DASH_extension,(function (p__1528,_){
var map__1529 = p__1528;
var map__1529__$1 = (((((!((map__1529 == null))))?(((((map__1529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1529):map__1529);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1529__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fetch_DASH_extension_DASH_fx,null], null);
}));
