// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('react_native_web.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('clojure.string');
goog.require('ajax.core');
goog.require('react_native_web.ethereum');
goog.require('react_native_web.ethereum.logs');
react_native_web.events.ipfs_add_url = "https://ipfs.infura.io:5001/api/v0/add";
react_native_web.events.ipfs_add_param_name = "extension.event.edn";
react_native_web.events.ipfs_cat_url = "https://ipfs.infura.io/ipfs/";
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions_SLASH_identity_DASH_event,(function (_,p__1558){
var vec__1559 = p__1558;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1559,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1559,(1),null);
var map__1562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1559,(2),null);
var map__1562__$1 = (((((!((map__1562 == null))))?(((((map__1562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1562):map__1562);
var cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1562__$1,cljs.core.cst$kw$cb);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,(function (){var G__1564 = cljs.core.PersistentArrayMap.EMPTY;
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__1564) : cb.call(null,G__1564));
})()], null);
}));
var G__1565_1567 = cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_alert;
var G__1566_1568 = ((function (G__1565_1567){
return (function (value){
return alert(value);
});})(G__1565_1567))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1565_1567,G__1566_1568) : re_frame.core.reg_fx.call(null,G__1565_1567,G__1566_1568));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$alert,(function (_,p__1569){
var vec__1570 = p__1569;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1570,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1570,(1),null);
var map__1573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1570,(2),null);
var map__1573__$1 = (((((!((map__1573 == null))))?(((((map__1573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1573):map__1573);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1573__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_alert,value], null);
}));
var G__1575_1577 = cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_log;
var G__1576_1578 = ((function (G__1575_1577){
return (function (value){
return console.log(value);
});})(G__1575_1577))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1575_1577,G__1576_1578) : re_frame.core.reg_fx.call(null,G__1575_1577,G__1576_1578));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$log,(function (_,p__1579){
var vec__1580 = p__1579;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1580,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1580,(1),null);
var map__1583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1580,(2),null);
var map__1583__$1 = (((((!((map__1583 == null))))?(((((map__1583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1583):map__1583);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1583__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_log,value], null);
}));
var G__1585_1592 = cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_schedule_DASH_start;
var G__1586_1593 = ((function (G__1585_1592){
return (function (p__1587){
var map__1588 = p__1587;
var map__1588__$1 = (((((!((map__1588 == null))))?(((((map__1588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1588):map__1588);
var interval = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1588__$1,cljs.core.cst$kw$interval);
var on_created = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1588__$1,cljs.core.cst$kw$on_DASH_created);
var on_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1588__$1,cljs.core.cst$kw$on_DASH_result);
var id = setInterval(((function (map__1588,map__1588__$1,interval,on_created,on_result,G__1585_1592){
return (function (){
var G__1590 = cljs.core.PersistentArrayMap.EMPTY;
return (on_result.cljs$core$IFn$_invoke$arity$1 ? on_result.cljs$core$IFn$_invoke$arity$1(G__1590) : on_result.call(null,G__1590));
});})(map__1588,map__1588__$1,interval,on_created,on_result,G__1585_1592))
,interval);
var G__1591 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,id], null);
return (on_created.cljs$core$IFn$_invoke$arity$1 ? on_created.cljs$core$IFn$_invoke$arity$1(G__1591) : on_created.call(null,G__1591));
});})(G__1585_1592))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1585_1592,G__1586_1593) : re_frame.core.reg_fx.call(null,G__1585_1592,G__1586_1593));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions_SLASH_schedule_DASH_start,(function (_,p__1594){
var vec__1595 = p__1594;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1595,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1595,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1595,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_schedule_DASH_start,m], null);
}));
var G__1598_1603 = cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_schedule_DASH_cancel;
var G__1599_1604 = ((function (G__1598_1603){
return (function (p__1600){
var map__1601 = p__1600;
var map__1601__$1 = (((((!((map__1601 == null))))?(((((map__1601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1601):map__1601);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1601__$1,cljs.core.cst$kw$value);
return clearInterval(value);
});})(G__1598_1603))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1598_1603,G__1599_1604) : re_frame.core.reg_fx.call(null,G__1598_1603,G__1599_1604));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions_SLASH_schedule_DASH_cancel,(function (_,p__1605){
var vec__1606 = p__1605;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1606,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1606,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1606,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_schedule_DASH_cancel,m], null);
}));
react_native_web.events.empty_value_QMARK_ = (function react_native_web$events$empty_value_QMARK_(o){
if(cljs.core.seqable_QMARK_(o)){
return cljs.core.empty_QMARK_(o);
} else {
return (o == null);

}
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_app_DASH_db,(function (p__1609,p__1610){
var map__1611 = p__1609;
var map__1611__$1 = (((((!((map__1611 == null))))?(((((map__1611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1611):map__1611);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1611__$1,cljs.core.cst$kw$db);
var vec__1612 = p__1610;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1612,(0),null);
var map__1615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1612,(1),null);
var map__1615__$1 = (((((!((map__1615 == null))))?(((((map__1615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1615):map__1615);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1615__$1,cljs.core.cst$kw$hook_DASH_id);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1612,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_store,id], null),m)], null);
}));
react_native_web.events.put_or_dissoc = (function react_native_web$events$put_or_dissoc(db,id,key,value){
if(react_native_web.events.empty_value_QMARK_(value)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_store,id], null),cljs.core.dissoc,key);
} else {
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_store,id,key], null),value);
}
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$store_SLASH_put,(function (p__1618,p__1619){
var map__1620 = p__1618;
var map__1620__$1 = (((((!((map__1620 == null))))?(((((map__1620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1620):map__1620);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1620__$1,cljs.core.cst$kw$db);
var vec__1621 = p__1619;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1621,(0),null);
var map__1624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1621,(1),null);
var map__1624__$1 = (((((!((map__1624 == null))))?(((((map__1624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1624):map__1624);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1624__$1,cljs.core.cst$kw$id);
var map__1625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1621,(2),null);
var map__1625__$1 = (((((!((map__1625 == null))))?(((((map__1625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1625):map__1625);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1625__$1,cljs.core.cst$kw$key);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1625__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,react_native_web.events.put_or_dissoc(db,id,key,value)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$store_SLASH_puts,(function (p__1631,p__1632){
var map__1633 = p__1631;
var map__1633__$1 = (((((!((map__1633 == null))))?(((((map__1633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1633):map__1633);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1633__$1,cljs.core.cst$kw$db);
var vec__1634 = p__1632;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1634,(0),null);
var map__1637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1634,(1),null);
var map__1637__$1 = (((((!((map__1637 == null))))?(((((map__1637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1637):map__1637);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1637__$1,cljs.core.cst$kw$id);
var map__1638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1634,(2),null);
var map__1638__$1 = (((((!((map__1638 == null))))?(((((map__1638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1638):map__1638);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1638__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__1633,map__1633__$1,db,vec__1634,_,map__1637,map__1637__$1,id,map__1638,map__1638__$1,value){
return (function (p1__1629_SHARP_,p2__1630_SHARP_){
return react_native_web.events.put_or_dissoc(p1__1629_SHARP_,id,cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(p2__1630_SHARP_),cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(p2__1630_SHARP_));
});})(map__1633,map__1633__$1,db,vec__1634,_,map__1637,map__1637__$1,id,map__1638,map__1638__$1,value))
,db,value)], null);
}));
react_native_web.events.append = (function react_native_web$events$append(acc,k,v){
var o = cljs.core.get.cljs$core$IFn$_invoke$arity$2(acc,k);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((cljs.core.vector_QMARK_(o))?o:(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[o],null))),v));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$store_SLASH_append,(function (p__1642,p__1643){
var map__1644 = p__1642;
var map__1644__$1 = (((((!((map__1644 == null))))?(((((map__1644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1644):map__1644);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1644__$1,cljs.core.cst$kw$db);
var vec__1645 = p__1643;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1645,(0),null);
var map__1648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1645,(1),null);
var map__1648__$1 = (((((!((map__1648 == null))))?(((((map__1648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1648):map__1648);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1648__$1,cljs.core.cst$kw$id);
var map__1649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1645,(2),null);
var map__1649__$1 = (((((!((map__1649 == null))))?(((((map__1649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1649):map__1649);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1649__$1,cljs.core.cst$kw$key);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1649__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_store,id], null),react_native_web.events.append,key,value)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$store_SLASH_clear,(function (p__1653,p__1654){
var map__1655 = p__1653;
var map__1655__$1 = (((((!((map__1655 == null))))?(((((map__1655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1655):map__1655);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1655__$1,cljs.core.cst$kw$db);
var vec__1656 = p__1654;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1656,(0),null);
var map__1659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1656,(1),null);
var map__1659__$1 = (((((!((map__1659 == null))))?(((((map__1659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1659):map__1659);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1659__$1,cljs.core.cst$kw$id);
var map__1660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1656,(2),null);
var map__1660__$1 = (((((!((map__1660 == null))))?(((((map__1660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1660):map__1660);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1660__$1,cljs.core.cst$kw$key);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_store,id], null),cljs.core.dissoc,key)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$store_SLASH_clear_DASH_all,(function (p__1664,p__1665){
var map__1666 = p__1664;
var map__1666__$1 = (((((!((map__1666 == null))))?(((((map__1666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1666):map__1666);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1666__$1,cljs.core.cst$kw$db);
var vec__1667 = p__1665;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1667,(0),null);
var map__1670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1667,(1),null);
var map__1670__$1 = (((((!((map__1670 == null))))?(((((map__1670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1670):map__1670);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1670__$1,cljs.core.cst$kw$id);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1667,(2),null);
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
var G__1673_1679 = cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_json_DASH_parse;
var G__1674_1680 = ((function (G__1673_1679){
return (function (p__1675){
var map__1676 = p__1675;
var map__1676__$1 = (((((!((map__1676 == null))))?(((((map__1676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1676):map__1676);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1676__$1,cljs.core.cst$kw$value);
var on_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1676__$1,cljs.core.cst$kw$on_DASH_result);
var G__1678 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,react_native_web.events.parse_json(value)], null);
return (on_result.cljs$core$IFn$_invoke$arity$1 ? on_result.cljs$core$IFn$_invoke$arity$1(G__1678) : on_result.call(null,G__1678));
});})(G__1673_1679))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1673_1679,G__1674_1680) : re_frame.core.reg_fx.call(null,G__1673_1679,G__1674_1680));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions_SLASH_json_DASH_parse,(function (_,p__1681){
var vec__1682 = p__1681;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1682,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1682,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1682,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_json_DASH_parse,m], null);
}));
var G__1685_1688 = cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_json_DASH_stringify;
var G__1686_1689 = ((function (G__1685_1688){
return (function (value,on_result){
var G__1687 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,JSON.stringify(cljs.core.clj__GT_js(value))], null);
return (on_result.cljs$core$IFn$_invoke$arity$1 ? on_result.cljs$core$IFn$_invoke$arity$1(G__1687) : on_result.call(null,G__1687));
});})(G__1685_1688))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1685_1688,G__1686_1689) : re_frame.core.reg_fx.call(null,G__1685_1688,G__1686_1689));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions_SLASH_json_DASH_stringify,(function (_,p__1690){
var vec__1691 = p__1690;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1691,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1691,(1),null);
var map__1694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1691,(2),null);
var map__1694__$1 = (((((!((map__1694 == null))))?(((((map__1694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1694):map__1694);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1694__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_json_DASH_stringify,value], null);
}));
react_native_web.events.parse_result = (function react_native_web$events$parse_result(result,on_success){
var res = (function (){try{return react_native_web.events.parse_json(result);
}catch (e1696){if((e1696 instanceof Error)){
var _ = e1696;
return null;
} else {
throw e1696;

}
}})();
var G__1697 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$body,(function (){var or__4131__auto__ = res;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return result;
}
})()], null);
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(G__1697) : on_success.call(null,G__1697));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$http_SLASH_get,(function (_,p__1699){
var vec__1700 = p__1699;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1700,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1700,(1),null);
var map__1703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1700,(2),null);
var map__1703__$1 = (((((!((map__1703 == null))))?(((((map__1703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1703):map__1703);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1703__$1,cljs.core.cst$kw$url);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1703__$1,cljs.core.cst$kw$on_DASH_success);
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1703__$1,cljs.core.cst$kw$on_DASH_failure);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1703__$1,cljs.core.cst$kw$timeout);
ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false,cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$text,cljs.core.cst$kw$handler,((function (vec__1700,___$1,___$2,map__1703,map__1703__$1,url,on_success,on_failure,timeout){
return (function (p1__1698_SHARP_){
if(cljs.core.truth_(on_success)){
return react_native_web.events.parse_result(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__1698_SHARP_),on_success);
} else {
return null;
}
});})(vec__1700,___$1,___$2,map__1703,map__1703__$1,url,on_success,on_failure,timeout))
,cljs.core.cst$kw$error_DASH_handler,on_failure], null)], 0));

return null;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$http_SLASH_post,(function (_,p__1706){
var vec__1707 = p__1706;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1707,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1707,(1),null);
var map__1710 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1707,(2),null);
var map__1710__$1 = (((((!((map__1710 == null))))?(((((map__1710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1710):map__1710);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1710__$1,cljs.core.cst$kw$url);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1710__$1,cljs.core.cst$kw$body);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1710__$1,cljs.core.cst$kw$on_DASH_success);
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1710__$1,cljs.core.cst$kw$on_DASH_failure);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1710__$1,cljs.core.cst$kw$timeout);
ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false,cljs.core.cst$kw$body,cljs.core.clj__GT_js(body),cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$text,cljs.core.cst$kw$handler,((function (vec__1707,___$1,___$2,map__1710,map__1710__$1,url,body,on_success,on_failure,timeout){
return (function (p1__1705_SHARP_){
if(cljs.core.truth_(on_success)){
return react_native_web.events.parse_result(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__1705_SHARP_),on_success);
} else {
return null;
}
});})(vec__1707,___$1,___$2,map__1710,map__1710__$1,url,body,on_success,on_failure,timeout))
,cljs.core.cst$kw$error_DASH_handler,on_failure], null)], 0));

return null;
}));
react_native_web.events.parse_ipfs_add_response = (function react_native_web$events$parse_ipfs_add_response(res){
var map__1712 = react_native_web.events.parse_json(res);
var map__1712__$1 = (((((!((map__1712 == null))))?(((((map__1712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1712):map__1712);
var Name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1712__$1,cljs.core.cst$kw$Name);
var Hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1712__$1,cljs.core.cst$kw$Hash);
var Size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1712__$1,cljs.core.cst$kw$Size);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,Name,cljs.core.cst$kw$hash,Hash,cljs.core.cst$kw$size,Size], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ipfs_SLASH_add,(function (_,p__1715){
var vec__1716 = p__1715;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1716,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1716,(1),null);
var map__1719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1716,(2),null);
var map__1719__$1 = (((((!((map__1719 == null))))?(((((map__1719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1719):map__1719);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1719__$1,cljs.core.cst$kw$value);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1719__$1,cljs.core.cst$kw$on_DASH_success);
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1719__$1,cljs.core.cst$kw$on_DASH_failure);
var formdata_1723 = (function (){var G__1721 = (new FormData());
G__1721.append("extension.event.edn",value);

return G__1721;
})();
ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic("https://ipfs.infura.io:5001/api/v0/add",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false,cljs.core.cst$kw$body,formdata_1723,cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$text,cljs.core.cst$kw$handler,((function (formdata_1723,vec__1716,___$1,___$2,map__1719,map__1719__$1,value,on_success,on_failure){
return (function (p1__1714_SHARP_){
var G__1722 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,react_native_web.events.parse_ipfs_add_response(p1__1714_SHARP_)], null);
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(G__1722) : on_success.call(null,G__1722));
});})(formdata_1723,vec__1716,___$1,___$2,map__1719,map__1719__$1,value,on_success,on_failure))
,cljs.core.cst$kw$error_DASH_handler,on_failure], null)], 0));

return null;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ipfs_SLASH_cat,(function (_,p__1725){
var vec__1726 = p__1725;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1726,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1726,(1),null);
var map__1729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1726,(2),null);
var map__1729__$1 = (((((!((map__1729 == null))))?(((((map__1729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1729):map__1729);
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1729__$1,cljs.core.cst$kw$hash);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1729__$1,cljs.core.cst$kw$on_DASH_success);
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1729__$1,cljs.core.cst$kw$on_DASH_failure);
ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(["https://ipfs.infura.io/ipfs/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false,cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$text,cljs.core.cst$kw$handler,((function (vec__1726,___$1,___$2,map__1729,map__1729__$1,hash,on_success,on_failure){
return (function (p1__1724_SHARP_){
var G__1731 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,p1__1724_SHARP_], null);
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(G__1731) : on_success.call(null,G__1731));
});})(vec__1726,___$1,___$2,map__1729,map__1729__$1,hash,on_success,on_failure))
,cljs.core.cst$kw$error_DASH_handler,on_failure], null)], 0));

return null;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions$chat$command_SLASH_set_DASH_parameter,(function (_,p__1732){
var vec__1733 = p__1732;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1733,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1733,(1),null);
var map__1736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1733,(2),null);
var map__1736__$1 = (((((!((map__1736 == null))))?(((((map__1736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1736):map__1736);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1736__$1,cljs.core.cst$kw$value);
return null;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions$chat$command_SLASH_set_DASH_custom_DASH_parameter,(function (p__1738,p__1739){
var map__1740 = p__1738;
var map__1740__$1 = (((((!((map__1740 == null))))?(((((map__1740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1740):map__1740);
var map__1741 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1740__$1,cljs.core.cst$kw$db);
var map__1741__$1 = (((((!((map__1741 == null))))?(((((map__1741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1741):map__1741);
var db = map__1741__$1;
var current_chat_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1741__$1,cljs.core.cst$kw$current_DASH_chat_DASH_id);
var vec__1742 = p__1739;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1742,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1742,(1),null);
var map__1745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1742,(2),null);
var map__1745__$1 = (((((!((map__1745 == null))))?(((((map__1745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1745):map__1745);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1745__$1,cljs.core.cst$kw$key);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1745__$1,cljs.core.cst$kw$value);
return null;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions$chat$command_SLASH_set_DASH_parameter_DASH_with_DASH_custom_DASH_params,(function (p__1749,p__1750){
var map__1751 = p__1749;
var map__1751__$1 = (((((!((map__1751 == null))))?(((((map__1751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1751):map__1751);
var map__1752 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1751__$1,cljs.core.cst$kw$db);
var map__1752__$1 = (((((!((map__1752 == null))))?(((((map__1752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1752):map__1752);
var db = map__1752__$1;
var current_chat_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1752__$1,cljs.core.cst$kw$current_DASH_chat_DASH_id);
var vec__1753 = p__1750;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1753,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1753,(1),null);
var map__1756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1753,(2),null);
var map__1756__$1 = (((((!((map__1756 == null))))?(((((map__1756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1756):map__1756);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1756__$1,cljs.core.cst$kw$value);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1756__$1,cljs.core.cst$kw$params);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$params], null),cljs.core.merge,params),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$suggestion_DASH_id], null),null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions$chat$command_SLASH_send_DASH_plain_DASH_text_DASH_message,(function (_,p__1760){
var vec__1761 = p__1760;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1761,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1761,(1),null);
var map__1764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1761,(2),null);
var map__1764__$1 = (((((!((map__1764 == null))))?(((((map__1764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1764):map__1764);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1764__$1,cljs.core.cst$kw$value);
return null;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions$chat$command_SLASH_send_DASH_message,(function (p__1767,p__1768){
var map__1769 = p__1767;
var map__1769__$1 = (((((!((map__1769 == null))))?(((((map__1769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1769):map__1769);
var cofx = map__1769__$1;
var map__1770 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1769__$1,cljs.core.cst$kw$db);
var map__1770__$1 = (((((!((map__1770 == null))))?(((((map__1770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1770):map__1770);
var db = map__1770__$1;
var current_chat_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1770__$1,cljs.core.cst$kw$current_DASH_chat_DASH_id);
var vec__1771 = p__1768;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1771,(0),null);
var map__1774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1771,(1),null);
var map__1774__$1 = (((((!((map__1774 == null))))?(((((map__1774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1774):map__1774);
var hook_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1774__$1,cljs.core.cst$kw$hook_DASH_id);
var map__1775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1771,(2),null);
var map__1775__$1 = (((((!((map__1775 == null))))?(((((map__1775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1775):map__1775);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1775__$1,cljs.core.cst$kw$params);
return null;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions_SLASH_show_DASH_selection_DASH_screen,(function (p__1780,p__1781){
var map__1782 = p__1780;
var map__1782__$1 = (((((!((map__1782 == null))))?(((((map__1782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1782):map__1782);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1782__$1,cljs.core.cst$kw$db);
var vec__1783 = p__1781;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1783,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1783,(1),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1783,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selection_DASH_screen,params)], null);
}));
react_native_web.events.operation__GT_fn = (function react_native_web$events$operation__GT_fn(k){
var G__1787 = k;
var G__1787__$1 = (((G__1787 instanceof cljs.core.Keyword))?G__1787.fqn:null);
switch (G__1787__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1787__$1)].join('')));

}
});
var G__1789_1795 = cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_arithmetic;
var G__1790_1796 = ((function (G__1789_1795){
return (function (p__1791){
var map__1792 = p__1791;
var map__1792__$1 = (((((!((map__1792 == null))))?(((((map__1792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1792):map__1792);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1792__$1,cljs.core.cst$kw$operation);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1792__$1,cljs.core.cst$kw$values);
var on_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1792__$1,cljs.core.cst$kw$on_DASH_result);
var G__1794 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(react_native_web.events.operation__GT_fn(operation),values)], null);
return (on_result.cljs$core$IFn$_invoke$arity$1 ? on_result.cljs$core$IFn$_invoke$arity$1(G__1794) : on_result.call(null,G__1794));
});})(G__1789_1795))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1789_1795,G__1790_1796) : re_frame.core.reg_fx.call(null,G__1789_1795,G__1790_1796));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions_SLASH_arithmetic,(function (_,p__1797){
var vec__1798 = p__1797;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1798,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1798,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1798,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_arithmetic,m], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions_SLASH_open_DASH_url,(function (cofx,p__1801){
var vec__1802 = p__1801;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1802,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1802,(1),null);
var map__1805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1802,(2),null);
var map__1805__$1 = (((((!((map__1805 == null))))?(((((map__1805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1805):map__1805);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1805__$1,cljs.core.cst$kw$url);
window.open(url,"_blank");

return null;
}));
react_native_web.events.all = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$ethereum$erc721_SLASH_get_DASH_approved,cljs.core.cst$sym$ipfs_SLASH_cat,cljs.core.cst$sym$ethereum_SLASH_create_DASH_address,cljs.core.cst$sym$ethereum_SLASH_await_DASH_transaction_DASH_receipt,cljs.core.cst$sym$ethereum_SLASH_sign,cljs.core.cst$sym$store_SLASH_puts,cljs.core.cst$sym$ethereum$erc20_SLASH_allowance,cljs.core.cst$sym$chat$command_SLASH_open_DASH_public_DASH_chat,cljs.core.cst$sym$ethereum$erc721_SLASH_set_DASH_approval_DASH_for_DASH_all,cljs.core.cst$sym$ethereum_SLASH_shh_DASH_get_DASH_messages,cljs.core.cst$sym$store_SLASH_clear_DASH_all,cljs.core.cst$sym$schedule_SLASH_start,cljs.core.cst$sym$ethereum_SLASH_call,cljs.core.cst$sym$browser_SLASH_open_DASH_url,cljs.core.cst$sym$ethereum_SLASH_shh_DASH_get_DASH_filter_DASH_changes,cljs.core.cst$sym$ipfs_SLASH_add,cljs.core.cst$sym$ethereum_SLASH_shh_DASH_new_DASH_group,cljs.core.cst$sym$chat$command_SLASH_set_DASH_parameter_DASH_with_DASH_custom_DASH_params,cljs.core.cst$sym$log,cljs.core.cst$sym$identity,cljs.core.cst$sym$ethereum$erc20_SLASH_transfer_DASH_from,cljs.core.cst$sym$ethereum_SLASH_shh_new_DASH_filter,cljs.core.cst$sym$ethereum_SLASH_transaction_DASH_receipt,cljs.core.cst$sym$ethereum_SLASH_shh_DASH_new_DASH_identity,cljs.core.cst$sym$ethereum_SLASH_shh_DASH_add_DASH_to_DASH_group,cljs.core.cst$sym$ethereum_SLASH_logs,cljs.core.cst$sym$ethereum_SLASH_shh_DASH_uninstall_DASH_filter,cljs.core.cst$sym$camera_SLASH_picture,cljs.core.cst$sym$store_SLASH_append,cljs.core.cst$sym$ethereum_SLASH_send_DASH_transaction,cljs.core.cst$sym$camera_SLASH_qr_DASH_code,cljs.core.cst$sym$ethereum$erc721_SLASH_safe_DASH_transfer_DASH_from,cljs.core.cst$sym$ethereum$ens_SLASH_resolve,cljs.core.cst$sym$ethereum$erc721_SLASH_owner_DASH_of,cljs.core.cst$sym$chat$command_SLASH_send_DASH_message,cljs.core.cst$sym$chat$command_SLASH_send_DASH_plain_DASH_text_DASH_message,cljs.core.cst$sym$json_SLASH_parse,cljs.core.cst$sym$json_SLASH_stringify,cljs.core.cst$sym$store_SLASH_put,cljs.core.cst$sym$schedule_SLASH_cancel,cljs.core.cst$sym$ethereum_SLASH_shh_DASH_has_DASH_identity,cljs.core.cst$sym$ethereum_SLASH_shh_post,cljs.core.cst$sym$store_SLASH_clear,cljs.core.cst$sym$ethereum_SLASH_cancel_DASH_filter,cljs.core.cst$sym$ethereum$erc20_SLASH_transfer,cljs.core.cst$sym$ethereum$erc20_SLASH_balance_DASH_of,cljs.core.cst$sym$selection_DASH_screen,cljs.core.cst$sym$http_SLASH_post,cljs.core.cst$sym$arithmetic,cljs.core.cst$sym$ethereum$erc721_SLASH_is_DASH_approved_DASH_for_DASH_all,cljs.core.cst$sym$ethereum$erc20_SLASH_total_DASH_supply,cljs.core.cst$sym$chat$command_SLASH_set_DASH_parameter,cljs.core.cst$sym$ethereum_SLASH_create_DASH_filter,cljs.core.cst$sym$alert,cljs.core.cst$sym$chat$command_SLASH_set_DASH_custom_DASH_parameter,cljs.core.cst$sym$ethereum$erc20_SLASH_approve,cljs.core.cst$sym$http_SLASH_get,cljs.core.cst$sym$ethereum_SLASH_logs_DASH_changes],[new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc721_DASH_get_DASH_approved,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$token_DASH_id,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$ipfs_SLASH_cat,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$hash,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_create_DASH_address,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_result,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_await_DASH_transaction_DASH_receipt,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$value,cljs.core.cst$kw$string,cljs.core.cst$kw$interval,cljs.core.cst$kw$number,cljs.core.cst$kw$topics_DASH_hints,cljs.core.cst$kw$vector,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_sign,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$message_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$data_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$store_SLASH_puts,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$vector], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc20_DASH_allowance,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$token_DASH_owner,cljs.core.cst$kw$string,cljs.core.cst$kw$spender,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$value,cljs.core.cst$kw$extensions$chat$command_SLASH_open_DASH_public_DASH_chat,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$topic,cljs.core.cst$kw$string,cljs.core.cst$kw$navigate_DASH_to,cljs.core.cst$kw$boolean], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc721_DASH_set_DASH_approval_DASH_for_DASH_all,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$operator,cljs.core.cst$kw$string,cljs.core.cst$kw$approved,cljs.core.cst$kw$boolean,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_shh_DASH_get_DASH_messages,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$store_SLASH_clear_DASH_all], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_schedule_DASH_start,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$interval,cljs.core.cst$kw$number,cljs.core.cst$kw$on_DASH_created,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_result,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_call,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$to,cljs.core.cst$kw$string,cljs.core.cst$kw$method,cljs.core.cst$kw$string,cljs.core.cst$kw$params_QMARK_,cljs.core.cst$kw$vector,cljs.core.cst$kw$outputs_QMARK_,cljs.core.cst$kw$vector,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_open_DASH_url,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_shh_DASH_get_DASH_filter_DASH_changes,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$ipfs_SLASH_add,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_shh_DASH_new_DASH_group,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions$chat$command_SLASH_set_DASH_parameter_DASH_with_DASH_custom_DASH_params,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.cst$kw$string,cljs.core.cst$kw$params,cljs.core.cst$kw$map], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$log,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_identity_DASH_event,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cb,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc20_DASH_transfer_DASH_from,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$from,cljs.core.cst$kw$string,cljs.core.cst$kw$to,cljs.core.cst$kw$string,cljs.core.cst$kw$value,cljs.core.cst$kw$number,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_shh_DASH_new_DASH_filter,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$to_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$topics,cljs.core.cst$kw$vector,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_transaction_DASH_receipt,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$value,cljs.core.cst$kw$string,cljs.core.cst$kw$topics_DASH_hints,cljs.core.cst$kw$vector,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_shh_DASH_new_DASH_identity,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_shh_DASH_add_DASH_to_DASH_group,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$address,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_logs,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$from_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$to_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$address_QMARK_,cljs.core.cst$kw$vector,cljs.core.cst$kw$topics_QMARK_,cljs.core.cst$kw$vector,cljs.core.cst$kw$block_DASH_hash_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_shh_DASH_uninstall_DASH_filter,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$value,cljs.core.cst$kw$extensions_SLASH_camera_DASH_picture,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$store_SLASH_append,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,cljs.core.cst$kw$string,cljs.core.cst$kw$value,cljs.core.cst$kw$any], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_send_DASH_transaction,cljs.core.cst$kw$arguments,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$gas_QMARK_,cljs.core.cst$kw$value_QMARK_,cljs.core.cst$kw$gas_DASH_price_QMARK_,cljs.core.cst$kw$params_QMARK_,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$on_DASH_success_QMARK_,cljs.core.cst$kw$nonce_QMARK_,cljs.core.cst$kw$method_QMARK_,cljs.core.cst$kw$to],[cljs.core.cst$kw$string,cljs.core.cst$kw$string,cljs.core.cst$kw$string,cljs.core.cst$kw$vector,cljs.core.cst$kw$event,cljs.core.cst$kw$event,cljs.core.cst$kw$string,cljs.core.cst$kw$string,cljs.core.cst$kw$string])], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$value,cljs.core.cst$kw$extensions_SLASH_camera_DASH_qr_DASH_code,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc721_DASH_safe_DASH_transfer_DASH_from,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$from,cljs.core.cst$kw$string,cljs.core.cst$kw$to,cljs.core.cst$kw$string,cljs.core.cst$kw$token_DASH_id,cljs.core.cst$kw$string,cljs.core.cst$kw$data_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_resolve_DASH_ens,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc721_DASH_owner_DASH_of,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$token_DASH_id,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions$chat$command_SLASH_send_DASH_message,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,cljs.core.cst$kw$map], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions$chat$command_SLASH_send_DASH_plain_DASH_text_DASH_message,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_json_DASH_parse,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_result,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_json_DASH_stringify,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_result,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$store_SLASH_put,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,cljs.core.cst$kw$string,cljs.core.cst$kw$value,cljs.core.cst$kw$any], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_schedule_DASH_cancel,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$number], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$value,cljs.core.cst$kw$extensions_SLASH_shh_DASH_has_DASH_identity,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$address,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_shh_DASH_post,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$from_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$to_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$topics,cljs.core.cst$kw$vector,cljs.core.cst$kw$payload,cljs.core.cst$kw$string,cljs.core.cst$kw$priority,cljs.core.cst$kw$string,cljs.core.cst$kw$ttl,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$store_SLASH_clear,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_cancel_DASH_filter,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc20_DASH_transfer,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$to,cljs.core.cst$kw$string,cljs.core.cst$kw$value,cljs.core.cst$kw$number,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc20_DASH_balance_DASH_of,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$token_DASH_owner,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_show_DASH_selection_DASH_screen,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$items,cljs.core.cst$kw$vector,cljs.core.cst$kw$on_DASH_select,cljs.core.cst$kw$event,cljs.core.cst$kw$render,cljs.core.cst$kw$view,cljs.core.cst$kw$title,cljs.core.cst$kw$string,cljs.core.cst$kw$extractor_DASH_key,cljs.core.cst$kw$keyword], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$http_SLASH_post,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$url,cljs.core.cst$kw$string,cljs.core.cst$kw$body,cljs.core.cst$kw$string,cljs.core.cst$kw$timeout_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_arithmetic,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$values,cljs.core.cst$kw$vector,cljs.core.cst$kw$operation,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$one_DASH_of,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$divide,null,cljs.core.cst$kw$times,null,cljs.core.cst$kw$minus,null,cljs.core.cst$kw$plus,null], null), null)], null),cljs.core.cst$kw$on_DASH_result,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc721_DASH_is_DASH_approved_DASH_for_DASH_all,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$owner,cljs.core.cst$kw$string,cljs.core.cst$kw$operator,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc20_DASH_total_DASH_supply,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions$chat$command_SLASH_set_DASH_parameter,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$any], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_create_DASH_filter,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$type,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$one_DASH_of,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$block,null,cljs.core.cst$kw$filter,null,cljs.core.cst$kw$pending_DASH_transaction,null], null), null)], null),cljs.core.cst$kw$from_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$to_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$address_QMARK_,cljs.core.cst$kw$vector,cljs.core.cst$kw$topics_QMARK_,cljs.core.cst$kw$vector,cljs.core.cst$kw$block_DASH_hash_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$alert,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions$chat$command_SLASH_set_DASH_custom_DASH_parameter,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,cljs.core.cst$kw$keyword,cljs.core.cst$kw$value,cljs.core.cst$kw$any], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc20_DASH_approve,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$spender,cljs.core.cst$kw$string,cljs.core.cst$kw$value,cljs.core.cst$kw$number,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$http_SLASH_get,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$url,cljs.core.cst$kw$string,cljs.core.cst$kw$timeout_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_logs_DASH_changes,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$string,cljs.core.cst$kw$topics_DASH_hints,cljs.core.cst$kw$vector], null)], null)]);
