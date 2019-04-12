// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.playground.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('pluto.core');
goog.require('pluto.playground.ipfs');
goog.require('pluto.storages');
goog.require('clojure.string');
goog.require('cljs.pprint');
pluto.playground.fx.get_source_from_sources = (function pluto$playground$fx$get_source_from_sources(sources){
var meta = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__1440){
var vec__1441 = p__1440;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1441,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1441,(1),null);
return (clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(key,"meta") === (0));
}),sources);
var life = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (meta){
return (function (p__1444){
var vec__1445 = p__1444;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1445,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1445,(1),null);
return (clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(key,"lifecycle") === (0));
});})(meta))
,sources);
var events = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (meta,life){
return (function (p__1448){
var vec__1449 = p__1448;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1449,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1449,(1),null);
return (clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(key,"events/") === (0));
});})(meta,life))
,sources);
var views = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (meta,life,events){
return (function (p__1452){
var vec__1453 = p__1452;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1453,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1453,(1),null);
return (clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(key,"views/") === (0));
});})(meta,life,events))
,sources);
var hooks = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (meta,life,events,views){
return (function (p__1456){
var vec__1457 = p__1456;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1457,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1457,(1),null);
return (clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(key,"hooks/") === (0));
});})(meta,life,events,views))
,sources);
return ["{\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (meta,life,events,views,hooks){
return (function (p__1464){
var vec__1465 = p__1464;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1465,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1465,(1),null);
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(value,/\n/,"\n "))].join('');
});})(meta,life,events,views,hooks))
,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(meta,life,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([events,views,hooks], 0))))),"\n}"].join('');
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set,(function (db,p__1468){
var vec__1469 = p__1468;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1469,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1469,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1469,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k,v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_in,(function (db,p__1472){
var vec__1473 = p__1472;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1473,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1473,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1473,(2),null);
return cljs.core.assoc_in(db,path,v);
}));
pluto.playground.fx.update_extension_errors = (function pluto$playground$fx$update_extension_errors(p__1476,p__1477){
var map__1478 = p__1476;
var map__1478__$1 = (((((!((map__1478 == null))))?(((((map__1478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1478):map__1478);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1478__$1,cljs.core.cst$kw$db);
var vec__1479 = p__1477;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1479,(0),null);
var errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1479,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$errors,errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_errors,pluto.playground.fx.update_extension_errors);
pluto.playground.fx.clear_errors = (function pluto$playground$fx$clear_errors(p__1483,_){
var map__1484 = p__1483;
var map__1484__$1 = (((((!((map__1484 == null))))?(((((map__1484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1484):map__1484);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1484__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_clear_DASH_errors,pluto.playground.fx.clear_errors);
pluto.playground.fx.update_extension_parsed = (function pluto$playground$fx$update_extension_parsed(p__1486,p__1487){
var map__1488 = p__1486;
var map__1488__$1 = (((((!((map__1488 == null))))?(((((map__1488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1488):map__1488);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1488__$1,cljs.core.cst$kw$db);
var vec__1489 = p__1487;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1489,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1489,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$parsed,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,pluto.playground.fx.update_extension_parsed);
var G__1493_1503 = cljs.core.cst$kw$extension_SLASH_parse;
var G__1494_1504 = ((function (G__1493_1503){
return (function (p__1495){
var vec__1496 = p__1495;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1496,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1496,(1),null);
var map__1499 = pluto.core.parse(ctx,data);
var map__1499__$1 = (((((!((map__1499 == null))))?(((((map__1499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1499):map__1499);
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1499__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1499__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__1501 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1501) : re_frame.core.dispatch.call(null,G__1501));
} else {
var G__1502 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,data__$1], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1502) : re_frame.core.dispatch.call(null,G__1502));
}
});})(G__1493_1503))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1493_1503,G__1494_1504) : re_frame.core.reg_fx.call(null,G__1493_1503,G__1494_1504));
pluto.playground.fx.update_extension_data = (function pluto$playground$fx$update_extension_data(p__1505,p__1506){
var map__1507 = p__1505;
var map__1507__$1 = (((((!((map__1507 == null))))?(((((map__1507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1507):map__1507);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1507__$1,cljs.core.cst$kw$db);
var vec__1508 = p__1506;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1508,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1508,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1508,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$data,data),cljs.core.cst$kw$extension_SLASH_parse,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_data,pluto.playground.fx.update_extension_data);
var G__1512_1523 = cljs.core.cst$kw$extension_SLASH_read;
var G__1513_1524 = ((function (G__1512_1523){
return (function (p__1514){
var vec__1515 = p__1514;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1515,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1515,(1),null);
var G__1518_1525 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_clear_DASH_errors], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1518_1525) : re_frame.core.dispatch.call(null,G__1518_1525));

var map__1519 = pluto.core.read(source);
var map__1519__$1 = (((((!((map__1519 == null))))?(((((map__1519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1519):map__1519);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1519__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1519__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__1521 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1521) : re_frame.core.dispatch.call(null,G__1521));
} else {
var G__1522 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_data,ctx,data], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1522) : re_frame.core.dispatch.call(null,G__1522));
}
});})(G__1512_1523))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1512_1523,G__1513_1524) : re_frame.core.reg_fx.call(null,G__1512_1523,G__1513_1524));
pluto.playground.fx.update_extension_source = (function pluto$playground$fx$update_extension_source(p__1526,p__1527){
var map__1528 = p__1526;
var map__1528__$1 = (((((!((map__1528 == null))))?(((((map__1528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1528):map__1528);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1528__$1,cljs.core.cst$kw$db);
var vec__1529 = p__1527;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1529,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1529,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1529,(2),null);
if(cljs.core.truth_(cljs.core.cst$kw$simple_DASH_mode_QMARK_.cljs$core$IFn$_invoke$arity$1(db))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$simple_DASH_sources,cljs.core.cst$kw$simple_DASH_item.cljs$core$IFn$_invoke$arity$1(db)], null),data)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$source,data)], null);
}
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_source,pluto.playground.fx.update_extension_source);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_read,(function (p__1533,p__1534){
var map__1535 = p__1533;
var map__1535__$1 = (((((!((map__1535 == null))))?(((((map__1535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1535):map__1535);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1535__$1,cljs.core.cst$kw$db);
var vec__1536 = p__1534;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1536,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1536,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extension_SLASH_read,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$source)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_run,(function (p__1540,p__1541){
var map__1542 = p__1540;
var map__1542__$1 = (((((!((map__1542 == null))))?(((((map__1542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1542):map__1542);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1542__$1,cljs.core.cst$kw$db);
var vec__1543 = p__1541;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1543,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1543,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$simple_DASH_mode_QMARK_.cljs$core$IFn$_invoke$arity$1(db))){
var source = pluto.playground.fx.get_source_from_sources(cljs.core.cst$kw$simple_DASH_sources.cljs$core$IFn$_invoke$arity$1(db));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$source,source),cljs.core.cst$kw$extension_SLASH_read,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,source], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extension_SLASH_read,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$source)], null)], null);
}
}));
var G__1547_1553 = cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value;
var G__1548_1554 = ((function (G__1547_1553){
return (function (p__1549){
var vec__1550 = p__1549;
var cm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1550,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1550,(1),null);
if(cljs.core.truth_(source)){
return cm.setValue(source);
} else {
return null;
}
});})(G__1547_1553))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1547_1553,G__1548_1554) : re_frame.core.reg_fx.call(null,G__1547_1553,G__1548_1554));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_editor,(function (p__1555,p__1556){
var map__1557 = p__1555;
var map__1557__$1 = (((((!((map__1557 == null))))?(((((map__1557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1557):map__1557);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1557__$1,cljs.core.cst$kw$db);
var vec__1558 = p__1556;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1558,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1558,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code_DASH_mirror.cljs$core$IFn$_invoke$arity$1(db),data], null)], null);
}));
pluto.playground.fx.append_log = (function pluto$playground$fx$append_log(p__1562,p__1563){
var map__1564 = p__1562;
var map__1564__$1 = (((((!((map__1564 == null))))?(((((map__1564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1564):map__1564);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1564__$1,cljs.core.cst$kw$db);
var vec__1565 = p__1563;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1565,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1565,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$logs,cljs.core.conj,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_append_DASH_log,pluto.playground.fx.append_log);
pluto.playground.fx.switch_filter_logs = (function pluto$playground$fx$switch_filter_logs(p__1569,p__1570){
var map__1571 = p__1569;
var map__1571__$1 = (((((!((map__1571 == null))))?(((((map__1571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1571):map__1571);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1571__$1,cljs.core.cst$kw$db);
var vec__1572 = p__1570;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1572,(0),null);
var checked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1572,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$filtered_DASH_logs,checked)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_filter_DASH_logs,pluto.playground.fx.switch_filter_logs);
pluto.playground.fx.clear_logs = (function pluto$playground$fx$clear_logs(p__1576,_){
var map__1577 = p__1576;
var map__1577__$1 = (((((!((map__1577 == null))))?(((((map__1577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1577):map__1577);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1577__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$logs)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_clear_DASH_logs,pluto.playground.fx.clear_logs);
pluto.playground.fx.set_selected = (function pluto$playground$fx$set_selected(p__1579,p__1580){
var map__1581 = p__1579;
var map__1581__$1 = (((((!((map__1581 == null))))?(((((map__1581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1581):map__1581);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1581__$1,cljs.core.cst$kw$db);
var vec__1582 = p__1580;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1582,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1582,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selected,path)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_selected,pluto.playground.fx.set_selected);
pluto.playground.fx.switch_preview = (function pluto$playground$fx$switch_preview(p__1586,p__1587){
var map__1588 = p__1586;
var map__1588__$1 = (((((!((map__1588 == null))))?(((((map__1588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1588):map__1588);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1588__$1,cljs.core.cst$kw$db);
var vec__1589 = p__1587;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1589,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$preview,cljs.core.not)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_preview,pluto.playground.fx.switch_preview);
var G__1593_1595 = cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs;
var G__1594_1596 = ((function (G__1593_1595){
return (function (value){
return pluto.playground.ipfs.save(value);
});})(G__1593_1595))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1593_1595,G__1594_1596) : re_frame.core.reg_fx.call(null,G__1593_1595,G__1594_1596));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_publish,(function (p__1597,_){
var map__1598 = p__1597;
var map__1598__$1 = (((((!((map__1598 == null))))?(((((map__1598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1598):map__1598);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1598__$1,cljs.core.cst$kw$db);
if(cljs.core.truth_(cljs.core.cst$kw$simple_DASH_mode_QMARK_.cljs$core$IFn$_invoke$arity$1(db))){
var source = pluto.playground.fx.get_source_from_sources(cljs.core.cst$kw$simple_DASH_sources.cljs$core$IFn$_invoke$arity$1(db));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$publish,cljs.core.cst$kw$in_DASH_progress_QMARK_], null),true),cljs.core.cst$kw$source,source),cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs,source], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$publish,cljs.core.cst$kw$in_DASH_progress_QMARK_], null),true),cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs,cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db)], null);
}
}));
var G__1601_1604 = cljs.core.cst$kw$fetch_DASH_extension_DASH_fx;
var G__1602_1605 = ((function (G__1601_1604){
return (function (){
var hash = (new URL(document.location)).searchParams.get("hash");
var uri = (cljs.core.truth_(hash)?["ipfs@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''):"url@assets/extensions/command/");
return pluto.storages.fetch(uri,((function (hash,uri,G__1601_1604){
return (function (p1__1600_SHARP_){
var G__1603 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_editor,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__1600_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value,cljs.core.cst$kw$content], null))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1603) : re_frame.core.dispatch.call(null,G__1603));
});})(hash,uri,G__1601_1604))
);
});})(G__1601_1604))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1601_1604,G__1602_1605) : re_frame.core.reg_fx.call(null,G__1601_1604,G__1602_1605));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fetch_DASH_extension,(function (p__1606,_){
var map__1607 = p__1606;
var map__1607__$1 = (((((!((map__1607 == null))))?(((((map__1607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1607):map__1607);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1607__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fetch_DASH_extension_DASH_fx,null,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$store_SLASH_clear_DASH_all], null)], null);
}));
var G__1609_1611 = cljs.core.cst$kw$set_DASH_url_DASH_fx;
var G__1610_1612 = ((function (G__1609_1611){
return (function (hash){
return pluto.playground.ipfs.set_url(hash);
});})(G__1609_1611))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1609_1611,G__1610_1612) : re_frame.core.reg_fx.call(null,G__1609_1611,G__1610_1612));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$open_DASH_example,(function (p__1613,p__1614){
var map__1615 = p__1613;
var map__1615__$1 = (((((!((map__1615 == null))))?(((((map__1615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1615):map__1615);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1615__$1,cljs.core.cst$kw$db);
var vec__1616 = p__1614;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1616,(0),null);
var hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1616,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$simple_DASH_mode_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$examples,cljs.core.cst$kw$extensions_SLASH_properties,cljs.core.cst$kw$extension_DASH_selection,cljs.core.cst$kw$extensions_SLASH_store,cljs.core.cst$kw$extension_DASH_props], 0)),cljs.core.cst$kw$set_DASH_url_DASH_fx,hash,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fetch_DASH_extension], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_properties,(function (p__1620,p__1621){
var map__1622 = p__1620;
var map__1622__$1 = (((((!((map__1622 == null))))?(((((map__1622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1622):map__1622);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1622__$1,cljs.core.cst$kw$db);
var vec__1623 = p__1621;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1623,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1623,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1623,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_properties,id], null),m)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_app_DASH_db,(function (p__1627,p__1628){
var map__1629 = p__1627;
var map__1629__$1 = (((((!((map__1629 == null))))?(((((map__1629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1629):map__1629);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1629__$1,cljs.core.cst$kw$db);
var vec__1630 = p__1628;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1630,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1630,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_store,"Extension ID"], null),m)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_mode,(function (p__1634,p__1635){
var map__1636 = p__1634;
var map__1636__$1 = (((((!((map__1636 == null))))?(((((map__1636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1636):map__1636);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1636__$1,cljs.core.cst$kw$db);
var vec__1637 = p__1635;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1637,(0),null);
var simple_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1637,(1),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$simple_DASH_mode_QMARK_,simple_QMARK_)], null),(cljs.core.truth_(simple_QMARK_)?(function (){var map__1641 = pluto.core.read(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db));
var map__1641__$1 = (((((!((map__1641 == null))))?(((((map__1641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1641):map__1641);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1641__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1641__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
return null;
} else {
var simple_items = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__1641,map__1641__$1,data,errors,map__1636,map__1636__$1,db,vec__1637,_,simple_QMARK_){
return (function (p__1646){
var vec__1647 = p__1646;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1647,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1647,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1654_1658 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1655_1659 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1656_1660 = true;
var _STAR_print_fn_STAR__temp_val__1657_1661 = ((function (_STAR_print_newline_STAR__orig_val__1654_1658,_STAR_print_fn_STAR__orig_val__1655_1659,_STAR_print_newline_STAR__temp_val__1656_1660,sb__4661__auto__,vec__1647,key,value,map__1641,map__1641__$1,data,errors,map__1636,map__1636__$1,db,vec__1637,_,simple_QMARK_){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__1654_1658,_STAR_print_fn_STAR__orig_val__1655_1659,_STAR_print_newline_STAR__temp_val__1656_1660,sb__4661__auto__,vec__1647,key,value,map__1641,map__1641__$1,data,errors,map__1636,map__1636__$1,db,vec__1637,_,simple_QMARK_))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1656_1660;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1657_1661;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(value);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1655_1659;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1654_1658;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})()]);
});})(map__1641,map__1641__$1,data,errors,map__1636,map__1636__$1,db,vec__1637,_,simple_QMARK_))
,data));
var vec__1643 = cljs.core.first(simple_items);
var first_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1643,(0),null);
var first_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1643,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$simple_DASH_mode_QMARK_,simple_QMARK_),cljs.core.cst$kw$simple_DASH_sources,simple_items),cljs.core.cst$kw$simple_DASH_item,first_key),cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code_DASH_mirror.cljs$core$IFn$_invoke$arity$1(db),first_value], null)], null);
}
})():(function (){var source = pluto.playground.fx.get_source_from_sources(cljs.core.cst$kw$simple_DASH_sources.cljs$core$IFn$_invoke$arity$1(db));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$source,source),cljs.core.cst$kw$simple_DASH_mode_QMARK_,simple_QMARK_),cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code_DASH_mirror.cljs$core$IFn$_invoke$arity$1(db),source], null)], null);
})())], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_select_DASH_simple_DASH_item,(function (p__1662,p__1663){
var map__1664 = p__1662;
var map__1664__$1 = (((((!((map__1664 == null))))?(((((map__1664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1664):map__1664);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1664__$1,cljs.core.cst$kw$db);
var vec__1665 = p__1663;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1665,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1665,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$simple_DASH_item,item),cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code_DASH_mirror.cljs$core$IFn$_invoke$arity$1(db),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$simple_DASH_sources,item], null))], null)], null);
}));
pluto.playground.fx.get_full_name = (function pluto$playground$fx$get_full_name(item_type,item_name){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__1670 = item_type;
switch (G__1670) {
case "views/chat":
return "views/";

break;
default:
return item_type;

}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(clojure.string.replace(clojure.string.trim(item_name),/ /,"-")))].join('');
});
pluto.playground.fx.get_new_source = (function pluto$playground$fx$get_new_source(item_type){
var G__1672 = item_type;
switch (G__1672) {
case "views/":
return "[view]";

break;
case "views/chat":
return "(let [{{{id :id} :params} :content} properties] \n [view \n [text id]])";

break;
case "events/":
return "[]";

break;
case "hooks/chat.command.":
return "{:description   \"\"\n :scope         #{:personal-chats :public-chats}\n :preview       [preview]\n :short-preview [short-preview]\n :parameters    [{:id          :id\n                  :type        :text\n                  :placeholder \"My placeholder\"\n                  :suggestions [suggestions-view]}]}";

break;
case "hooks/wallet.settings.":
return "{:label   \"\"\n :view    [my-view]}";

break;
case "hooks/profile.settings.":
return "{:label   \"\"\n :view    [my-view]}";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1672)].join('')));

}
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_add_DASH_edn_DASH_item,(function (p__1674,_){
var map__1675 = p__1674;
var map__1675__$1 = (((((!((map__1675 == null))))?(((((map__1675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1675):map__1675);
var map__1676 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1675__$1,cljs.core.cst$kw$db);
var map__1676__$1 = (((((!((map__1676 == null))))?(((((map__1676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1676):map__1676);
var db = map__1676__$1;
var add_edn_item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1676__$1,cljs.core.cst$kw$add_DASH_edn_DASH_item);
var map__1679 = add_edn_item;
var map__1679__$1 = (((((!((map__1679 == null))))?(((((map__1679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1679):map__1679);
var item_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1679__$1,cljs.core.cst$kw$item_DASH_name);
var item_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1679__$1,cljs.core.cst$kw$item_DASH_type);
var full_name = pluto.playground.fx.get_full_name(item_type,item_name);
var new_source = pluto.playground.fx.get_new_source(item_type);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$add_DASH_edn_DASH_item),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$simple_DASH_sources,full_name], null),new_source),cljs.core.cst$kw$simple_DASH_item,full_name),cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code_DASH_mirror.cljs$core$IFn$_invoke$arity$1(db),new_source], null)], null);
}));
