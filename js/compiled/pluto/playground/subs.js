// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.playground.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
var G__1418_1424 = cljs.core.cst$kw$get;
var G__1419_1425 = ((function (G__1418_1424){
return (function (db,p__1420){
var vec__1421 = p__1420;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1421,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1421,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,k);
});})(G__1418_1424))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1418_1424,G__1419_1425) : re_frame.core.reg_sub.call(null,G__1418_1424,G__1419_1425));
var G__1426_1432 = cljs.core.cst$kw$get_DASH_in;
var G__1427_1433 = ((function (G__1426_1432){
return (function (db,p__1428){
var vec__1429 = p__1428;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1429,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1429,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path);
});})(G__1426_1432))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1426_1432,G__1427_1433) : re_frame.core.reg_sub.call(null,G__1426_1432,G__1427_1433));
pluto.playground.subs.extension_parsed = (function pluto$playground$subs$extension_parsed(db,v){
return cljs.core.cst$kw$parsed.cljs$core$IFn$_invoke$arity$1(db);
});
var G__1434_1436 = cljs.core.cst$kw$extension_SLASH_parsed;
var G__1435_1437 = pluto.playground.subs.extension_parsed;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1434_1436,G__1435_1437) : re_frame.core.reg_sub.call(null,G__1434_1436,G__1435_1437));
pluto.playground.subs.extension_data = (function pluto$playground$subs$extension_data(db,v){
return cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(db);
});
var G__1438_1440 = cljs.core.cst$kw$extension_SLASH_data;
var G__1439_1441 = pluto.playground.subs.extension_data;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1438_1440,G__1439_1441) : re_frame.core.reg_sub.call(null,G__1438_1440,G__1439_1441));
pluto.playground.subs.extension_source = (function pluto$playground$subs$extension_source(db,v){
return cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db);
});
var G__1442_1444 = cljs.core.cst$kw$extension_SLASH_source;
var G__1443_1445 = pluto.playground.subs.extension_source;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1442_1444,G__1443_1445) : re_frame.core.reg_sub.call(null,G__1442_1444,G__1443_1445));
var G__1446_1448 = cljs.core.cst$kw$extension_SLASH_logs;
var G__1447_1449 = cljs.core.cst$kw$logs;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1446_1448,G__1447_1449) : re_frame.core.reg_sub.call(null,G__1446_1448,G__1447_1449));
var G__1450_1452 = cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs_QMARK_;
var G__1451_1453 = cljs.core.cst$kw$filtered_DASH_logs;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1450_1452,G__1451_1453) : re_frame.core.reg_sub.call(null,G__1450_1452,G__1451_1453));
var G__1455_1465 = cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs;
var G__1456_1466 = cljs.core.cst$kw$_LT__DASH_;
var G__1457_1467 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_logs], null);
var G__1458_1468 = cljs.core.cst$kw$_LT__DASH_;
var G__1459_1469 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs_QMARK_], null);
var G__1460_1470 = ((function (G__1455_1465,G__1456_1466,G__1457_1467,G__1458_1468,G__1459_1469){
return (function (p__1461){
var vec__1462 = p__1461;
var logs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1462,(0),null);
var filtered_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1462,(1),null);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__1462,logs,filtered_QMARK_,G__1455_1465,G__1456_1466,G__1457_1467,G__1458_1468,G__1459_1469){
return (function (p1__1454_SHARP_){
if(filtered_QMARK_ === true){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$category.cljs$core$IFn$_invoke$arity$1(p1__1454_SHARP_),cljs.core.cst$kw$pluto$log_SLASH_trace);
} else {
return true;
}
});})(vec__1462,logs,filtered_QMARK_,G__1455_1465,G__1456_1466,G__1457_1467,G__1458_1468,G__1459_1469))
,logs);
});})(G__1455_1465,G__1456_1466,G__1457_1467,G__1458_1468,G__1459_1469))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__1455_1465,G__1456_1466,G__1457_1467,G__1458_1468,G__1459_1469,G__1460_1470) : re_frame.core.reg_sub.call(null,G__1455_1465,G__1456_1466,G__1457_1467,G__1458_1468,G__1459_1469,G__1460_1470));
var G__1471_1473 = cljs.core.cst$kw$extension_SLASH_errors;
var G__1472_1474 = cljs.core.cst$kw$errors;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1471_1473,G__1472_1474) : re_frame.core.reg_sub.call(null,G__1471_1473,G__1472_1474));
pluto.playground.subs.selected = (function pluto$playground$subs$selected(db,v){
return cljs.core.cst$kw$selected.cljs$core$IFn$_invoke$arity$1(db);
});
var G__1475_1477 = cljs.core.cst$kw$extension_SLASH_selected;
var G__1476_1478 = pluto.playground.subs.selected;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1475_1477,G__1476_1478) : re_frame.core.reg_sub.call(null,G__1475_1477,G__1476_1478));
pluto.playground.subs.preview = (function pluto$playground$subs$preview(db,v){
var or__4131__auto__ = cljs.core.cst$kw$preview.cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return false;
}
});
var G__1479_1481 = cljs.core.cst$kw$extension_SLASH_preview;
var G__1480_1482 = pluto.playground.subs.preview;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1479_1481,G__1480_1482) : re_frame.core.reg_sub.call(null,G__1479_1481,G__1480_1482));
var G__1483_1489 = cljs.core.cst$kw$extension_SLASH_properties;
var G__1484_1490 = ((function (G__1483_1489){
return (function (db,p__1485){
var vec__1486 = p__1485;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1486,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1486,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1486,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_properties,id], null));
});})(G__1483_1489))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1483_1489,G__1484_1490) : re_frame.core.reg_sub.call(null,G__1483_1489,G__1484_1490));
var G__1493_1500 = cljs.core.cst$kw$extension_DASH_keys;
var G__1494_1501 = cljs.core.cst$kw$_LT__DASH_;
var G__1495_1502 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_parsed], null);
var G__1496_1503 = ((function (G__1493_1500,G__1494_1501,G__1495_1502){
return (function (p__1497){
var map__1498 = p__1497;
var map__1498__$1 = (((((!((map__1498 == null))))?(((((map__1498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1498):map__1498);
var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1498__$1,cljs.core.cst$kw$views);
var hooks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1498__$1,cljs.core.cst$kw$hooks);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__1498,map__1498__$1,views,hooks,G__1493_1500,G__1494_1501,G__1495_1502){
return (function (p1__1491_SHARP_){
return ["hooks/",cljs.core.name(p1__1491_SHARP_)].join('');
});})(map__1498,map__1498__$1,views,hooks,G__1493_1500,G__1494_1501,G__1495_1502))
,cljs.core.keys(hooks)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__1498,map__1498__$1,views,hooks,G__1493_1500,G__1494_1501,G__1495_1502){
return (function (p1__1492_SHARP_){
return ["views/",cljs.core.name(p1__1492_SHARP_)].join('');
});})(map__1498,map__1498__$1,views,hooks,G__1493_1500,G__1494_1501,G__1495_1502))
,cljs.core.keys(views)));
});})(G__1493_1500,G__1494_1501,G__1495_1502))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__1493_1500,G__1494_1501,G__1495_1502,G__1496_1503) : re_frame.core.reg_sub.call(null,G__1493_1500,G__1494_1501,G__1495_1502,G__1496_1503));
var G__1504_1514 = cljs.core.cst$kw$extension_DASH_selection;
var G__1505_1515 = cljs.core.cst$kw$_LT__DASH_;
var G__1506_1516 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$extension_DASH_selection], null);
var G__1507_1517 = cljs.core.cst$kw$_LT__DASH_;
var G__1508_1518 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_keys], null);
var G__1509_1519 = ((function (G__1504_1514,G__1505_1515,G__1506_1516,G__1507_1517,G__1508_1518){
return (function (p__1510){
var vec__1511 = p__1510;
var extension_selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1511,(0),null);
var extension_keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1511,(1),null);
if(cljs.core.truth_(extension_selection)){
return extension_selection;
} else {
return cljs.core.first(extension_keys);
}
});})(G__1504_1514,G__1505_1515,G__1506_1516,G__1507_1517,G__1508_1518))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__1504_1514,G__1505_1515,G__1506_1516,G__1507_1517,G__1508_1518,G__1509_1519) : re_frame.core.reg_sub.call(null,G__1504_1514,G__1505_1515,G__1506_1516,G__1507_1517,G__1508_1518,G__1509_1519));
var G__1520_1530 = cljs.core.cst$kw$extension_SLASH_selected_DASH_properties;
var G__1521_1531 = cljs.core.cst$kw$_LT__DASH_;
var G__1522_1532 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$extensions_SLASH_properties], null);
var G__1523_1533 = cljs.core.cst$kw$_LT__DASH_;
var G__1524_1534 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_selection], null);
var G__1525_1535 = ((function (G__1520_1530,G__1521_1531,G__1522_1532,G__1523_1533,G__1524_1534){
return (function (p__1526){
var vec__1527 = p__1526;
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1527,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1527,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,id);
});})(G__1520_1530,G__1521_1531,G__1522_1532,G__1523_1533,G__1524_1534))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__1520_1530,G__1521_1531,G__1522_1532,G__1523_1533,G__1524_1534,G__1525_1535) : re_frame.core.reg_sub.call(null,G__1520_1530,G__1521_1531,G__1522_1532,G__1523_1533,G__1524_1534,G__1525_1535));
var G__1536_1538 = cljs.core.cst$kw$store_SLASH_all;
var G__1537_1539 = ((function (G__1536_1538){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_store,"Extension ID"], null));
});})(G__1536_1538))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1536_1538,G__1537_1539) : re_frame.core.reg_sub.call(null,G__1536_1538,G__1537_1539));
