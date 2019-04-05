// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.playground.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
var G__1409_1415 = cljs.core.cst$kw$get;
var G__1410_1416 = ((function (G__1409_1415){
return (function (db,p__1411){
var vec__1412 = p__1411;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1412,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1412,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,k);
});})(G__1409_1415))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1409_1415,G__1410_1416) : re_frame.core.reg_sub.call(null,G__1409_1415,G__1410_1416));
var G__1417_1423 = cljs.core.cst$kw$get_DASH_in;
var G__1418_1424 = ((function (G__1417_1423){
return (function (db,p__1419){
var vec__1420 = p__1419;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1420,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1420,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path);
});})(G__1417_1423))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1417_1423,G__1418_1424) : re_frame.core.reg_sub.call(null,G__1417_1423,G__1418_1424));
pluto.playground.subs.extension_parsed = (function pluto$playground$subs$extension_parsed(db,v){
return cljs.core.cst$kw$parsed.cljs$core$IFn$_invoke$arity$1(db);
});
var G__1425_1427 = cljs.core.cst$kw$extension_SLASH_parsed;
var G__1426_1428 = pluto.playground.subs.extension_parsed;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1425_1427,G__1426_1428) : re_frame.core.reg_sub.call(null,G__1425_1427,G__1426_1428));
pluto.playground.subs.extension_data = (function pluto$playground$subs$extension_data(db,v){
return cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(db);
});
var G__1429_1431 = cljs.core.cst$kw$extension_SLASH_data;
var G__1430_1432 = pluto.playground.subs.extension_data;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1429_1431,G__1430_1432) : re_frame.core.reg_sub.call(null,G__1429_1431,G__1430_1432));
pluto.playground.subs.extension_source = (function pluto$playground$subs$extension_source(db,v){
return cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db);
});
var G__1433_1435 = cljs.core.cst$kw$extension_SLASH_source;
var G__1434_1436 = pluto.playground.subs.extension_source;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1433_1435,G__1434_1436) : re_frame.core.reg_sub.call(null,G__1433_1435,G__1434_1436));
var G__1437_1439 = cljs.core.cst$kw$extension_SLASH_logs;
var G__1438_1440 = cljs.core.cst$kw$logs;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1437_1439,G__1438_1440) : re_frame.core.reg_sub.call(null,G__1437_1439,G__1438_1440));
var G__1441_1443 = cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs_QMARK_;
var G__1442_1444 = cljs.core.cst$kw$filtered_DASH_logs;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1441_1443,G__1442_1444) : re_frame.core.reg_sub.call(null,G__1441_1443,G__1442_1444));
var G__1446_1456 = cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs;
var G__1447_1457 = cljs.core.cst$kw$_LT__DASH_;
var G__1448_1458 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_logs], null);
var G__1449_1459 = cljs.core.cst$kw$_LT__DASH_;
var G__1450_1460 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs_QMARK_], null);
var G__1451_1461 = ((function (G__1446_1456,G__1447_1457,G__1448_1458,G__1449_1459,G__1450_1460){
return (function (p__1452){
var vec__1453 = p__1452;
var logs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1453,(0),null);
var filtered_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1453,(1),null);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__1453,logs,filtered_QMARK_,G__1446_1456,G__1447_1457,G__1448_1458,G__1449_1459,G__1450_1460){
return (function (p1__1445_SHARP_){
if(filtered_QMARK_ === true){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$category.cljs$core$IFn$_invoke$arity$1(p1__1445_SHARP_),cljs.core.cst$kw$pluto$log_SLASH_trace);
} else {
return true;
}
});})(vec__1453,logs,filtered_QMARK_,G__1446_1456,G__1447_1457,G__1448_1458,G__1449_1459,G__1450_1460))
,logs);
});})(G__1446_1456,G__1447_1457,G__1448_1458,G__1449_1459,G__1450_1460))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__1446_1456,G__1447_1457,G__1448_1458,G__1449_1459,G__1450_1460,G__1451_1461) : re_frame.core.reg_sub.call(null,G__1446_1456,G__1447_1457,G__1448_1458,G__1449_1459,G__1450_1460,G__1451_1461));
var G__1462_1464 = cljs.core.cst$kw$extension_SLASH_errors;
var G__1463_1465 = cljs.core.cst$kw$errors;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1462_1464,G__1463_1465) : re_frame.core.reg_sub.call(null,G__1462_1464,G__1463_1465));
pluto.playground.subs.selected = (function pluto$playground$subs$selected(db,v){
return cljs.core.cst$kw$selected.cljs$core$IFn$_invoke$arity$1(db);
});
var G__1466_1468 = cljs.core.cst$kw$extension_SLASH_selected;
var G__1467_1469 = pluto.playground.subs.selected;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1466_1468,G__1467_1469) : re_frame.core.reg_sub.call(null,G__1466_1468,G__1467_1469));
pluto.playground.subs.preview = (function pluto$playground$subs$preview(db,v){
var or__4131__auto__ = cljs.core.cst$kw$preview.cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return false;
}
});
var G__1470_1472 = cljs.core.cst$kw$extension_SLASH_preview;
var G__1471_1473 = pluto.playground.subs.preview;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1470_1472,G__1471_1473) : re_frame.core.reg_sub.call(null,G__1470_1472,G__1471_1473));
var G__1474_1480 = cljs.core.cst$kw$extension_SLASH_properties;
var G__1475_1481 = ((function (G__1474_1480){
return (function (db,p__1476){
var vec__1477 = p__1476;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1477,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1477,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1477,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_properties,id], null));
});})(G__1474_1480))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1474_1480,G__1475_1481) : re_frame.core.reg_sub.call(null,G__1474_1480,G__1475_1481));
var G__1484_1491 = cljs.core.cst$kw$extension_DASH_keys;
var G__1485_1492 = cljs.core.cst$kw$_LT__DASH_;
var G__1486_1493 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_parsed], null);
var G__1487_1494 = ((function (G__1484_1491,G__1485_1492,G__1486_1493){
return (function (p__1488){
var map__1489 = p__1488;
var map__1489__$1 = (((((!((map__1489 == null))))?(((((map__1489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1489):map__1489);
var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1489__$1,cljs.core.cst$kw$views);
var hooks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1489__$1,cljs.core.cst$kw$hooks);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__1489,map__1489__$1,views,hooks,G__1484_1491,G__1485_1492,G__1486_1493){
return (function (p1__1482_SHARP_){
return ["hooks/",cljs.core.name(p1__1482_SHARP_)].join('');
});})(map__1489,map__1489__$1,views,hooks,G__1484_1491,G__1485_1492,G__1486_1493))
,cljs.core.keys(hooks)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__1489,map__1489__$1,views,hooks,G__1484_1491,G__1485_1492,G__1486_1493){
return (function (p1__1483_SHARP_){
return ["views/",cljs.core.name(p1__1483_SHARP_)].join('');
});})(map__1489,map__1489__$1,views,hooks,G__1484_1491,G__1485_1492,G__1486_1493))
,cljs.core.keys(views)));
});})(G__1484_1491,G__1485_1492,G__1486_1493))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__1484_1491,G__1485_1492,G__1486_1493,G__1487_1494) : re_frame.core.reg_sub.call(null,G__1484_1491,G__1485_1492,G__1486_1493,G__1487_1494));
var G__1495_1505 = cljs.core.cst$kw$extension_DASH_selection;
var G__1496_1506 = cljs.core.cst$kw$_LT__DASH_;
var G__1497_1507 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$extension_DASH_selection], null);
var G__1498_1508 = cljs.core.cst$kw$_LT__DASH_;
var G__1499_1509 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_keys], null);
var G__1500_1510 = ((function (G__1495_1505,G__1496_1506,G__1497_1507,G__1498_1508,G__1499_1509){
return (function (p__1501){
var vec__1502 = p__1501;
var extension_selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1502,(0),null);
var extension_keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1502,(1),null);
if(cljs.core.truth_(extension_selection)){
return extension_selection;
} else {
return cljs.core.first(extension_keys);
}
});})(G__1495_1505,G__1496_1506,G__1497_1507,G__1498_1508,G__1499_1509))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__1495_1505,G__1496_1506,G__1497_1507,G__1498_1508,G__1499_1509,G__1500_1510) : re_frame.core.reg_sub.call(null,G__1495_1505,G__1496_1506,G__1497_1507,G__1498_1508,G__1499_1509,G__1500_1510));
var G__1511_1521 = cljs.core.cst$kw$extension_SLASH_selected_DASH_properties;
var G__1512_1522 = cljs.core.cst$kw$_LT__DASH_;
var G__1513_1523 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$extensions_SLASH_properties], null);
var G__1514_1524 = cljs.core.cst$kw$_LT__DASH_;
var G__1515_1525 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_selection], null);
var G__1516_1526 = ((function (G__1511_1521,G__1512_1522,G__1513_1523,G__1514_1524,G__1515_1525){
return (function (p__1517){
var vec__1518 = p__1517;
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1518,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1518,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,id);
});})(G__1511_1521,G__1512_1522,G__1513_1523,G__1514_1524,G__1515_1525))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__1511_1521,G__1512_1522,G__1513_1523,G__1514_1524,G__1515_1525,G__1516_1526) : re_frame.core.reg_sub.call(null,G__1511_1521,G__1512_1522,G__1513_1523,G__1514_1524,G__1515_1525,G__1516_1526));
var G__1527_1529 = cljs.core.cst$kw$store_SLASH_all;
var G__1528_1530 = ((function (G__1527_1529){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_store,"Extension ID"], null));
});})(G__1527_1529))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1527_1529,G__1528_1530) : re_frame.core.reg_sub.call(null,G__1527_1529,G__1528_1530));
