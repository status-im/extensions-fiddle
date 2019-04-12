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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions_SLASH_identity_DASH_event,(function (_,p__1654){
var vec__1655 = p__1654;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1655,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1655,(1),null);
var map__1658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1655,(2),null);
var map__1658__$1 = (((((!((map__1658 == null))))?(((((map__1658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1658):map__1658);
var cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1658__$1,cljs.core.cst$kw$cb);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,(function (){var G__1660 = cljs.core.PersistentArrayMap.EMPTY;
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__1660) : cb.call(null,G__1660));
})()], null);
}));
var G__1661_1663 = cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_alert;
var G__1662_1664 = ((function (G__1661_1663){
return (function (value){
return alert(value);
});})(G__1661_1663))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1661_1663,G__1662_1664) : re_frame.core.reg_fx.call(null,G__1661_1663,G__1662_1664));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$alert,(function (_,p__1665){
var vec__1666 = p__1665;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1666,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1666,(1),null);
var map__1669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1666,(2),null);
var map__1669__$1 = (((((!((map__1669 == null))))?(((((map__1669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1669):map__1669);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1669__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_alert,value], null);
}));
var G__1671_1673 = cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_log;
var G__1672_1674 = ((function (G__1671_1673){
return (function (value){
return console.log(value);
});})(G__1671_1673))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1671_1673,G__1672_1674) : re_frame.core.reg_fx.call(null,G__1671_1673,G__1672_1674));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$log,(function (_,p__1675){
var vec__1676 = p__1675;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1676,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1676,(1),null);
var map__1679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1676,(2),null);
var map__1679__$1 = (((((!((map__1679 == null))))?(((((map__1679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1679):map__1679);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1679__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_log,value], null);
}));
var G__1681_1688 = cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_schedule_DASH_start;
var G__1682_1689 = ((function (G__1681_1688){
return (function (p__1683){
var map__1684 = p__1683;
var map__1684__$1 = (((((!((map__1684 == null))))?(((((map__1684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1684):map__1684);
var interval = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1684__$1,cljs.core.cst$kw$interval);
var on_created = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1684__$1,cljs.core.cst$kw$on_DASH_created);
var on_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1684__$1,cljs.core.cst$kw$on_DASH_result);
var id = setInterval(((function (map__1684,map__1684__$1,interval,on_created,on_result,G__1681_1688){
return (function (){
var G__1686 = cljs.core.PersistentArrayMap.EMPTY;
return (on_result.cljs$core$IFn$_invoke$arity$1 ? on_result.cljs$core$IFn$_invoke$arity$1(G__1686) : on_result.call(null,G__1686));
});})(map__1684,map__1684__$1,interval,on_created,on_result,G__1681_1688))
,interval);
var G__1687 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,id], null);
return (on_created.cljs$core$IFn$_invoke$arity$1 ? on_created.cljs$core$IFn$_invoke$arity$1(G__1687) : on_created.call(null,G__1687));
});})(G__1681_1688))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1681_1688,G__1682_1689) : re_frame.core.reg_fx.call(null,G__1681_1688,G__1682_1689));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions_SLASH_schedule_DASH_start,(function (_,p__1690){
var vec__1691 = p__1690;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1691,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1691,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1691,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_schedule_DASH_start,m], null);
}));
var G__1694_1699 = cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_schedule_DASH_cancel;
var G__1695_1700 = ((function (G__1694_1699){
return (function (p__1696){
var map__1697 = p__1696;
var map__1697__$1 = (((((!((map__1697 == null))))?(((((map__1697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1697):map__1697);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1697__$1,cljs.core.cst$kw$value);
return clearInterval(value);
});})(G__1694_1699))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1694_1699,G__1695_1700) : re_frame.core.reg_fx.call(null,G__1694_1699,G__1695_1700));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions_SLASH_schedule_DASH_cancel,(function (_,p__1701){
var vec__1702 = p__1701;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1702,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1702,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1702,(2),null);
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$store_SLASH_put,(function (p__1705,p__1706){
var map__1707 = p__1705;
var map__1707__$1 = (((((!((map__1707 == null))))?(((((map__1707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1707):map__1707);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1707__$1,cljs.core.cst$kw$db);
var vec__1708 = p__1706;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1708,(0),null);
var map__1711 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1708,(1),null);
var map__1711__$1 = (((((!((map__1711 == null))))?(((((map__1711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1711):map__1711);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1711__$1,cljs.core.cst$kw$id);
var map__1712 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1708,(2),null);
var map__1712__$1 = (((((!((map__1712 == null))))?(((((map__1712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1712):map__1712);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1712__$1,cljs.core.cst$kw$key);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1712__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,react_native_web.events.put_or_dissoc(db,id,key,value)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$store_SLASH_put_DASH_in,(function (p__1716,p__1717){
var map__1718 = p__1716;
var map__1718__$1 = (((((!((map__1718 == null))))?(((((map__1718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1718):map__1718);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1718__$1,cljs.core.cst$kw$db);
var vec__1719 = p__1717;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1719,(0),null);
var map__1722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1719,(1),null);
var map__1722__$1 = (((((!((map__1722 == null))))?(((((map__1722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1722):map__1722);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1722__$1,cljs.core.cst$kw$id);
var map__1723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1719,(2),null);
var map__1723__$1 = (((((!((map__1723 == null))))?(((((map__1723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1723):map__1723);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1723__$1,cljs.core.cst$kw$keys);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1723__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_store,id], null),keys)),value)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$store_SLASH_puts,(function (p__1729,p__1730){
var map__1731 = p__1729;
var map__1731__$1 = (((((!((map__1731 == null))))?(((((map__1731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1731):map__1731);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1731__$1,cljs.core.cst$kw$db);
var vec__1732 = p__1730;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1732,(0),null);
var map__1735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1732,(1),null);
var map__1735__$1 = (((((!((map__1735 == null))))?(((((map__1735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1735):map__1735);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1735__$1,cljs.core.cst$kw$id);
var map__1736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1732,(2),null);
var map__1736__$1 = (((((!((map__1736 == null))))?(((((map__1736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1736):map__1736);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1736__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__1731,map__1731__$1,db,vec__1732,_,map__1735,map__1735__$1,id,map__1736,map__1736__$1,value){
return (function (p1__1727_SHARP_,p2__1728_SHARP_){
return react_native_web.events.put_or_dissoc(p1__1727_SHARP_,id,cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(p2__1728_SHARP_),cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(p2__1728_SHARP_));
});})(map__1731,map__1731__$1,db,vec__1732,_,map__1735,map__1735__$1,id,map__1736,map__1736__$1,value))
,db,value)], null);
}));
react_native_web.events.append = (function react_native_web$events$append(acc,k,v){
var o = cljs.core.get.cljs$core$IFn$_invoke$arity$2(acc,k);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((cljs.core.vector_QMARK_(o))?o:(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[o],null))),v));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$store_SLASH_append,(function (p__1740,p__1741){
var map__1742 = p__1740;
var map__1742__$1 = (((((!((map__1742 == null))))?(((((map__1742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1742):map__1742);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1742__$1,cljs.core.cst$kw$db);
var vec__1743 = p__1741;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1743,(0),null);
var map__1746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1743,(1),null);
var map__1746__$1 = (((((!((map__1746 == null))))?(((((map__1746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1746):map__1746);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1746__$1,cljs.core.cst$kw$id);
var map__1747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1743,(2),null);
var map__1747__$1 = (((((!((map__1747 == null))))?(((((map__1747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1747):map__1747);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1747__$1,cljs.core.cst$kw$key);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1747__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_store,id], null),react_native_web.events.append,key,value)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$store_SLASH_clear,(function (p__1751,p__1752){
var map__1753 = p__1751;
var map__1753__$1 = (((((!((map__1753 == null))))?(((((map__1753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1753):map__1753);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1753__$1,cljs.core.cst$kw$db);
var vec__1754 = p__1752;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1754,(0),null);
var map__1757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1754,(1),null);
var map__1757__$1 = (((((!((map__1757 == null))))?(((((map__1757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1757):map__1757);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1757__$1,cljs.core.cst$kw$id);
var map__1758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1754,(2),null);
var map__1758__$1 = (((((!((map__1758 == null))))?(((((map__1758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1758):map__1758);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1758__$1,cljs.core.cst$kw$key);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_store,id], null),cljs.core.dissoc,key)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$store_SLASH_clear_DASH_all,(function (p__1762,p__1763){
var map__1764 = p__1762;
var map__1764__$1 = (((((!((map__1764 == null))))?(((((map__1764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1764):map__1764);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1764__$1,cljs.core.cst$kw$db);
var vec__1765 = p__1763;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1765,(0),null);
var map__1768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1765,(1),null);
var map__1768__$1 = (((((!((map__1768 == null))))?(((((map__1768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1768):map__1768);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1768__$1,cljs.core.cst$kw$id);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1765,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$extensions_SLASH_store,cljs.core.dissoc,id)], null);
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
var G__1771_1777 = cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_json_DASH_parse;
var G__1772_1778 = ((function (G__1771_1777){
return (function (p__1773){
var map__1774 = p__1773;
var map__1774__$1 = (((((!((map__1774 == null))))?(((((map__1774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1774):map__1774);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1774__$1,cljs.core.cst$kw$value);
var on_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1774__$1,cljs.core.cst$kw$on_DASH_result);
var G__1776 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,react_native_web.events.parse_json(value)], null);
return (on_result.cljs$core$IFn$_invoke$arity$1 ? on_result.cljs$core$IFn$_invoke$arity$1(G__1776) : on_result.call(null,G__1776));
});})(G__1771_1777))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1771_1777,G__1772_1778) : re_frame.core.reg_fx.call(null,G__1771_1777,G__1772_1778));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions_SLASH_json_DASH_parse,(function (_,p__1779){
var vec__1780 = p__1779;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1780,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1780,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1780,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_json_DASH_parse,m], null);
}));
var G__1783_1786 = cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_json_DASH_stringify;
var G__1784_1787 = ((function (G__1783_1786){
return (function (value,on_result){
var G__1785 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,JSON.stringify(cljs.core.clj__GT_js(value))], null);
return (on_result.cljs$core$IFn$_invoke$arity$1 ? on_result.cljs$core$IFn$_invoke$arity$1(G__1785) : on_result.call(null,G__1785));
});})(G__1783_1786))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1783_1786,G__1784_1787) : re_frame.core.reg_fx.call(null,G__1783_1786,G__1784_1787));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions_SLASH_json_DASH_stringify,(function (_,p__1788){
var vec__1789 = p__1788;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1789,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1789,(1),null);
var map__1792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1789,(2),null);
var map__1792__$1 = (((((!((map__1792 == null))))?(((((map__1792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1792):map__1792);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1792__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_json_DASH_stringify,value], null);
}));
react_native_web.events.parse_result = (function react_native_web$events$parse_result(result,on_success){
var res = (function (){try{return react_native_web.events.parse_json(result);
}catch (e1794){if((e1794 instanceof Error)){
var _ = e1794;
return null;
} else {
throw e1794;

}
}})();
var G__1795 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$body,(function (){var or__4131__auto__ = res;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return result;
}
})()], null);
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(G__1795) : on_success.call(null,G__1795));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$http_SLASH_get,(function (_,p__1797){
var vec__1798 = p__1797;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1798,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1798,(1),null);
var map__1801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1798,(2),null);
var map__1801__$1 = (((((!((map__1801 == null))))?(((((map__1801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1801):map__1801);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1801__$1,cljs.core.cst$kw$url);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1801__$1,cljs.core.cst$kw$on_DASH_success);
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1801__$1,cljs.core.cst$kw$on_DASH_failure);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1801__$1,cljs.core.cst$kw$timeout);
ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false,cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$text,cljs.core.cst$kw$handler,((function (vec__1798,___$1,___$2,map__1801,map__1801__$1,url,on_success,on_failure,timeout){
return (function (p1__1796_SHARP_){
if(cljs.core.truth_(on_success)){
return react_native_web.events.parse_result(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__1796_SHARP_),on_success);
} else {
return null;
}
});})(vec__1798,___$1,___$2,map__1801,map__1801__$1,url,on_success,on_failure,timeout))
,cljs.core.cst$kw$error_DASH_handler,on_failure], null)], 0));

return null;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$http_SLASH_post,(function (_,p__1804){
var vec__1805 = p__1804;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1805,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1805,(1),null);
var map__1808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1805,(2),null);
var map__1808__$1 = (((((!((map__1808 == null))))?(((((map__1808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1808):map__1808);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1808__$1,cljs.core.cst$kw$url);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1808__$1,cljs.core.cst$kw$body);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1808__$1,cljs.core.cst$kw$on_DASH_success);
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1808__$1,cljs.core.cst$kw$on_DASH_failure);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1808__$1,cljs.core.cst$kw$timeout);
ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false,cljs.core.cst$kw$body,cljs.core.clj__GT_js(body),cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$text,cljs.core.cst$kw$handler,((function (vec__1805,___$1,___$2,map__1808,map__1808__$1,url,body,on_success,on_failure,timeout){
return (function (p1__1803_SHARP_){
if(cljs.core.truth_(on_success)){
return react_native_web.events.parse_result(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__1803_SHARP_),on_success);
} else {
return null;
}
});})(vec__1805,___$1,___$2,map__1808,map__1808__$1,url,body,on_success,on_failure,timeout))
,cljs.core.cst$kw$error_DASH_handler,on_failure], null)], 0));

return null;
}));
react_native_web.events.parse_ipfs_add_response = (function react_native_web$events$parse_ipfs_add_response(res){
var map__1810 = react_native_web.events.parse_json(res);
var map__1810__$1 = (((((!((map__1810 == null))))?(((((map__1810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1810):map__1810);
var Name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1810__$1,cljs.core.cst$kw$Name);
var Hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1810__$1,cljs.core.cst$kw$Hash);
var Size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1810__$1,cljs.core.cst$kw$Size);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,Name,cljs.core.cst$kw$hash,Hash,cljs.core.cst$kw$size,Size], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ipfs_SLASH_add,(function (_,p__1813){
var vec__1814 = p__1813;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1814,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1814,(1),null);
var map__1817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1814,(2),null);
var map__1817__$1 = (((((!((map__1817 == null))))?(((((map__1817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1817):map__1817);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1817__$1,cljs.core.cst$kw$value);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1817__$1,cljs.core.cst$kw$on_DASH_success);
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1817__$1,cljs.core.cst$kw$on_DASH_failure);
var formdata_1821 = (function (){var G__1819 = (new FormData());
G__1819.append("extension.event.edn",value);

return G__1819;
})();
ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic("https://ipfs.infura.io:5001/api/v0/add",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false,cljs.core.cst$kw$body,formdata_1821,cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$text,cljs.core.cst$kw$handler,((function (formdata_1821,vec__1814,___$1,___$2,map__1817,map__1817__$1,value,on_success,on_failure){
return (function (p1__1812_SHARP_){
var G__1820 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,react_native_web.events.parse_ipfs_add_response(p1__1812_SHARP_)], null);
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(G__1820) : on_success.call(null,G__1820));
});})(formdata_1821,vec__1814,___$1,___$2,map__1817,map__1817__$1,value,on_success,on_failure))
,cljs.core.cst$kw$error_DASH_handler,on_failure], null)], 0));

return null;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ipfs_SLASH_cat,(function (_,p__1823){
var vec__1824 = p__1823;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1824,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1824,(1),null);
var map__1827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1824,(2),null);
var map__1827__$1 = (((((!((map__1827 == null))))?(((((map__1827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1827):map__1827);
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1827__$1,cljs.core.cst$kw$hash);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1827__$1,cljs.core.cst$kw$on_DASH_success);
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1827__$1,cljs.core.cst$kw$on_DASH_failure);
ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(["https://ipfs.infura.io/ipfs/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false,cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$text,cljs.core.cst$kw$handler,((function (vec__1824,___$1,___$2,map__1827,map__1827__$1,hash,on_success,on_failure){
return (function (p1__1822_SHARP_){
var G__1829 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,p1__1822_SHARP_], null);
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(G__1829) : on_success.call(null,G__1829));
});})(vec__1824,___$1,___$2,map__1827,map__1827__$1,hash,on_success,on_failure))
,cljs.core.cst$kw$error_DASH_handler,on_failure], null)], 0));

return null;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions$chat$command_SLASH_set_DASH_parameter,(function (p__1830,p__1831){
var map__1832 = p__1830;
var map__1832__$1 = (((((!((map__1832 == null))))?(((((map__1832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1832):map__1832);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1832__$1,cljs.core.cst$kw$db);
var vec__1833 = p__1831;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1833,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1833,(1),null);
var map__1836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1833,(2),null);
var map__1836__$1 = (((((!((map__1836 == null))))?(((((map__1836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1836):map__1836);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1836__$1,cljs.core.cst$kw$value);
var param_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$suggestion_DASH_id], null));
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$params], null),cljs.core.merge,cljs.core.PersistentArrayMap.createAsIfByAssoc([param_id,value]))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions$chat$command_SLASH_set_DASH_custom_DASH_parameter,(function (p__1839,p__1840){
var map__1841 = p__1839;
var map__1841__$1 = (((((!((map__1841 == null))))?(((((map__1841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1841):map__1841);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1841__$1,cljs.core.cst$kw$db);
var vec__1842 = p__1840;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1842,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1842,(1),null);
var map__1845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1842,(2),null);
var map__1845__$1 = (((((!((map__1845 == null))))?(((((map__1845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1845):map__1845);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1845__$1,cljs.core.cst$kw$key);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1845__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$params], null),cljs.core.merge,cljs.core.PersistentArrayMap.createAsIfByAssoc([key,value]))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions$chat$command_SLASH_set_DASH_parameter_DASH_with_DASH_custom_DASH_params,(function (p__1848,p__1849){
var map__1850 = p__1848;
var map__1850__$1 = (((((!((map__1850 == null))))?(((((map__1850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1850):map__1850);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1850__$1,cljs.core.cst$kw$db);
var vec__1851 = p__1849;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1851,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1851,(1),null);
var map__1854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1851,(2),null);
var map__1854__$1 = (((((!((map__1854 == null))))?(((((map__1854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1854):map__1854);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1854__$1,cljs.core.cst$kw$value);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1854__$1,cljs.core.cst$kw$params);
var param_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$suggestion_DASH_id], null));
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$params], null),cljs.core.merge,params,cljs.core.PersistentArrayMap.createAsIfByAssoc([param_id,value])),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$suggestion_DASH_id], null),null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions$chat$command_SLASH_send_DASH_plain_DASH_text_DASH_message,(function (p__1857,p__1858){
var map__1859 = p__1857;
var map__1859__$1 = (((((!((map__1859 == null))))?(((((map__1859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1859):map__1859);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1859__$1,cljs.core.cst$kw$db);
var vec__1860 = p__1858;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1860,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1860,(1),null);
var map__1863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1860,(2),null);
var map__1863__$1 = (((((!((map__1863 == null))))?(((((map__1863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1863):map__1863);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1863__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$messages], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$plain_DASH_message,value], null))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions$chat$command_SLASH_send_DASH_message,(function (p__1866,p__1867){
var map__1868 = p__1866;
var map__1868__$1 = (((((!((map__1868 == null))))?(((((map__1868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1868):map__1868);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1868__$1,cljs.core.cst$kw$db);
var vec__1869 = p__1867;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1869,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1869,(1),null);
var map__1872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1869,(2),null);
var map__1872__$1 = (((((!((map__1872 == null))))?(((((map__1872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1872):map__1872);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1872__$1,cljs.core.cst$kw$params);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$messages], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$content,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,params], null)], null))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions_SLASH_show_DASH_selection_DASH_screen,(function (p__1875,p__1876){
var map__1877 = p__1875;
var map__1877__$1 = (((((!((map__1877 == null))))?(((((map__1877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1877):map__1877);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1877__$1,cljs.core.cst$kw$db);
var vec__1878 = p__1876;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1878,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1878,(1),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1878,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selection_DASH_screen,params)], null);
}));
react_native_web.events.operation__GT_fn = (function react_native_web$events$operation__GT_fn(k){
var G__1882 = k;
var G__1882__$1 = (((G__1882 instanceof cljs.core.Keyword))?G__1882.fqn:null);
switch (G__1882__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1882__$1)].join('')));

}
});
var G__1884_1890 = cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_arithmetic;
var G__1885_1891 = ((function (G__1884_1890){
return (function (p__1886){
var map__1887 = p__1886;
var map__1887__$1 = (((((!((map__1887 == null))))?(((((map__1887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1887):map__1887);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1887__$1,cljs.core.cst$kw$operation);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1887__$1,cljs.core.cst$kw$values);
var on_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1887__$1,cljs.core.cst$kw$on_DASH_result);
var G__1889 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(react_native_web.events.operation__GT_fn(operation),values)], null);
return (on_result.cljs$core$IFn$_invoke$arity$1 ? on_result.cljs$core$IFn$_invoke$arity$1(G__1889) : on_result.call(null,G__1889));
});})(G__1884_1890))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1884_1890,G__1885_1891) : re_frame.core.reg_fx.call(null,G__1884_1890,G__1885_1891));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions_SLASH_arithmetic,(function (_,p__1892){
var vec__1893 = p__1892;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1893,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1893,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1893,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$react_DASH_native_DASH_web$events_SLASH_arithmetic,m], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions_SLASH_open_DASH_url,(function (cofx,p__1896){
var vec__1897 = p__1896;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1897,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1897,(1),null);
var map__1900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1897,(2),null);
var map__1900__$1 = (((((!((map__1900 == null))))?(((((map__1900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1900):map__1900);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1900__$1,cljs.core.cst$kw$url);
window.open(url,"_blank");

return null;
}));
react_native_web.events.all = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$ethereum$erc721_SLASH_get_DASH_approved,cljs.core.cst$sym$ipfs_SLASH_cat,cljs.core.cst$sym$ethereum_SLASH_create_DASH_address,cljs.core.cst$sym$ethereum_SLASH_await_DASH_transaction_DASH_receipt,cljs.core.cst$sym$ethereum_SLASH_sign,cljs.core.cst$sym$store_SLASH_puts,cljs.core.cst$sym$ethereum$erc20_SLASH_allowance,cljs.core.cst$sym$chat$command_SLASH_open_DASH_public_DASH_chat,cljs.core.cst$sym$ethereum$erc721_SLASH_set_DASH_approval_DASH_for_DASH_all,cljs.core.cst$sym$ethereum_SLASH_shh_DASH_get_DASH_messages,cljs.core.cst$sym$store_SLASH_clear_DASH_all,cljs.core.cst$sym$schedule_SLASH_start,cljs.core.cst$sym$ethereum_SLASH_call,cljs.core.cst$sym$browser_SLASH_open_DASH_url,cljs.core.cst$sym$ethereum_SLASH_shh_DASH_get_DASH_filter_DASH_changes,cljs.core.cst$sym$ipfs_SLASH_add,cljs.core.cst$sym$ethereum_SLASH_shh_DASH_new_DASH_group,cljs.core.cst$sym$chat$command_SLASH_set_DASH_parameter_DASH_with_DASH_custom_DASH_params,cljs.core.cst$sym$log,cljs.core.cst$sym$identity,cljs.core.cst$sym$ethereum$erc20_SLASH_transfer_DASH_from,cljs.core.cst$sym$ethereum_SLASH_shh_new_DASH_filter,cljs.core.cst$sym$store_SLASH_put_DASH_in,cljs.core.cst$sym$ethereum_SLASH_transaction_DASH_receipt,cljs.core.cst$sym$ethereum_SLASH_shh_DASH_new_DASH_identity,cljs.core.cst$sym$ethereum_SLASH_shh_DASH_add_DASH_to_DASH_group,cljs.core.cst$sym$ethereum_SLASH_logs,cljs.core.cst$sym$ethereum_SLASH_shh_DASH_uninstall_DASH_filter,cljs.core.cst$sym$camera_SLASH_picture,cljs.core.cst$sym$store_SLASH_append,cljs.core.cst$sym$ethereum_SLASH_send_DASH_transaction,cljs.core.cst$sym$camera_SLASH_qr_DASH_code,cljs.core.cst$sym$ethereum$erc721_SLASH_safe_DASH_transfer_DASH_from,cljs.core.cst$sym$ethereum$ens_SLASH_resolve,cljs.core.cst$sym$ethereum$erc721_SLASH_owner_DASH_of,cljs.core.cst$sym$chat$command_SLASH_send_DASH_message,cljs.core.cst$sym$chat$command_SLASH_send_DASH_plain_DASH_text_DASH_message,cljs.core.cst$sym$json_SLASH_parse,cljs.core.cst$sym$json_SLASH_stringify,cljs.core.cst$sym$store_SLASH_put,cljs.core.cst$sym$schedule_SLASH_cancel,cljs.core.cst$sym$ethereum_SLASH_shh_DASH_has_DASH_identity,cljs.core.cst$sym$ethereum_SLASH_shh_post,cljs.core.cst$sym$store_SLASH_clear,cljs.core.cst$sym$ethereum_SLASH_cancel_DASH_filter,cljs.core.cst$sym$ethereum$erc20_SLASH_transfer,cljs.core.cst$sym$ethereum$erc20_SLASH_balance_DASH_of,cljs.core.cst$sym$selection_DASH_screen,cljs.core.cst$sym$http_SLASH_post,cljs.core.cst$sym$arithmetic,cljs.core.cst$sym$ethereum$erc721_SLASH_is_DASH_approved_DASH_for_DASH_all,cljs.core.cst$sym$ethereum$erc20_SLASH_total_DASH_supply,cljs.core.cst$sym$chat$command_SLASH_set_DASH_parameter,cljs.core.cst$sym$ethereum_SLASH_create_DASH_filter,cljs.core.cst$sym$alert,cljs.core.cst$sym$chat$command_SLASH_set_DASH_custom_DASH_parameter,cljs.core.cst$sym$ethereum$erc20_SLASH_approve,cljs.core.cst$sym$http_SLASH_get,cljs.core.cst$sym$ethereum_SLASH_logs_DASH_changes],[new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc721_DASH_get_DASH_approved,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$token_DASH_id,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$ipfs_SLASH_cat,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$hash,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_create_DASH_address,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_result,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_await_DASH_transaction_DASH_receipt,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$value,cljs.core.cst$kw$string,cljs.core.cst$kw$interval,cljs.core.cst$kw$number,cljs.core.cst$kw$topics_DASH_hints,cljs.core.cst$kw$vector,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_sign,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$message_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$data_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$store_SLASH_puts,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$vector], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc20_DASH_allowance,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$token_DASH_owner,cljs.core.cst$kw$string,cljs.core.cst$kw$spender,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$value,cljs.core.cst$kw$extensions$chat$command_SLASH_open_DASH_public_DASH_chat,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$topic,cljs.core.cst$kw$string,cljs.core.cst$kw$navigate_DASH_to,cljs.core.cst$kw$boolean], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc721_DASH_set_DASH_approval_DASH_for_DASH_all,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$operator,cljs.core.cst$kw$string,cljs.core.cst$kw$approved,cljs.core.cst$kw$boolean,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_shh_DASH_get_DASH_messages,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$store_SLASH_clear_DASH_all], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_schedule_DASH_start,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$interval,cljs.core.cst$kw$number,cljs.core.cst$kw$on_DASH_created,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_result,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_call,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$to,cljs.core.cst$kw$string,cljs.core.cst$kw$method,cljs.core.cst$kw$string,cljs.core.cst$kw$params_QMARK_,cljs.core.cst$kw$vector,cljs.core.cst$kw$outputs_QMARK_,cljs.core.cst$kw$vector,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_open_DASH_url,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_shh_DASH_get_DASH_filter_DASH_changes,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$ipfs_SLASH_add,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_shh_DASH_new_DASH_group,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions$chat$command_SLASH_set_DASH_parameter_DASH_with_DASH_custom_DASH_params,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.cst$kw$string,cljs.core.cst$kw$params,cljs.core.cst$kw$map], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$log,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_identity_DASH_event,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cb,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc20_DASH_transfer_DASH_from,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$from,cljs.core.cst$kw$string,cljs.core.cst$kw$to,cljs.core.cst$kw$string,cljs.core.cst$kw$value,cljs.core.cst$kw$number,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_shh_DASH_new_DASH_filter,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$to_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$topics,cljs.core.cst$kw$vector,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$store_SLASH_put_DASH_in,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keys,cljs.core.cst$kw$vector,cljs.core.cst$kw$value,cljs.core.cst$kw$any], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_transaction_DASH_receipt,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$value,cljs.core.cst$kw$string,cljs.core.cst$kw$topics_DASH_hints,cljs.core.cst$kw$vector,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_shh_DASH_new_DASH_identity,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_shh_DASH_add_DASH_to_DASH_group,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$address,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_logs,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$from_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$to_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$address_QMARK_,cljs.core.cst$kw$vector,cljs.core.cst$kw$topics_QMARK_,cljs.core.cst$kw$vector,cljs.core.cst$kw$block_DASH_hash_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_shh_DASH_uninstall_DASH_filter,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$value,cljs.core.cst$kw$extensions_SLASH_camera_DASH_picture,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$store_SLASH_append,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,cljs.core.cst$kw$string,cljs.core.cst$kw$value,cljs.core.cst$kw$any], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_send_DASH_transaction,cljs.core.cst$kw$arguments,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$gas_QMARK_,cljs.core.cst$kw$value_QMARK_,cljs.core.cst$kw$gas_DASH_price_QMARK_,cljs.core.cst$kw$params_QMARK_,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$on_DASH_success_QMARK_,cljs.core.cst$kw$nonce_QMARK_,cljs.core.cst$kw$method_QMARK_,cljs.core.cst$kw$to],[cljs.core.cst$kw$string,cljs.core.cst$kw$string,cljs.core.cst$kw$string,cljs.core.cst$kw$vector,cljs.core.cst$kw$event,cljs.core.cst$kw$event,cljs.core.cst$kw$string,cljs.core.cst$kw$string,cljs.core.cst$kw$string])], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$value,cljs.core.cst$kw$extensions_SLASH_camera_DASH_qr_DASH_code,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc721_DASH_safe_DASH_transfer_DASH_from,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$from,cljs.core.cst$kw$string,cljs.core.cst$kw$to,cljs.core.cst$kw$string,cljs.core.cst$kw$token_DASH_id,cljs.core.cst$kw$string,cljs.core.cst$kw$data_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_resolve_DASH_ens,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc721_DASH_owner_DASH_of,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$token_DASH_id,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions$chat$command_SLASH_send_DASH_message,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,cljs.core.cst$kw$map], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions$chat$command_SLASH_send_DASH_plain_DASH_text_DASH_message,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_json_DASH_parse,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_result,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_json_DASH_stringify,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_result,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$store_SLASH_put,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,cljs.core.cst$kw$string,cljs.core.cst$kw$value,cljs.core.cst$kw$any], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_schedule_DASH_cancel,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$number], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$value,cljs.core.cst$kw$extensions_SLASH_shh_DASH_has_DASH_identity,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$address,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_shh_DASH_post,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$from_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$to_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$topics,cljs.core.cst$kw$vector,cljs.core.cst$kw$payload,cljs.core.cst$kw$string,cljs.core.cst$kw$priority,cljs.core.cst$kw$string,cljs.core.cst$kw$ttl,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$store_SLASH_clear,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_cancel_DASH_filter,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc20_DASH_transfer,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$to,cljs.core.cst$kw$string,cljs.core.cst$kw$value,cljs.core.cst$kw$number,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc20_DASH_balance_DASH_of,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$token_DASH_owner,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_show_DASH_selection_DASH_screen,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$items,cljs.core.cst$kw$vector,cljs.core.cst$kw$on_DASH_select,cljs.core.cst$kw$event,cljs.core.cst$kw$render,cljs.core.cst$kw$view,cljs.core.cst$kw$title,cljs.core.cst$kw$string,cljs.core.cst$kw$extractor_DASH_key,cljs.core.cst$kw$keyword], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$http_SLASH_post,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$url,cljs.core.cst$kw$string,cljs.core.cst$kw$body,cljs.core.cst$kw$string,cljs.core.cst$kw$timeout_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_arithmetic,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$values,cljs.core.cst$kw$vector,cljs.core.cst$kw$operation,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$one_DASH_of,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$divide,null,cljs.core.cst$kw$times,null,cljs.core.cst$kw$minus,null,cljs.core.cst$kw$plus,null], null), null)], null),cljs.core.cst$kw$on_DASH_result,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc721_DASH_is_DASH_approved_DASH_for_DASH_all,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$owner,cljs.core.cst$kw$string,cljs.core.cst$kw$operator,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc20_DASH_total_DASH_supply,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions$chat$command_SLASH_set_DASH_parameter,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$any], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_create_DASH_filter,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$type,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$one_DASH_of,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$block,null,cljs.core.cst$kw$filter,null,cljs.core.cst$kw$pending_DASH_transaction,null], null), null)], null),cljs.core.cst$kw$from_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$to_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$address_QMARK_,cljs.core.cst$kw$vector,cljs.core.cst$kw$topics_QMARK_,cljs.core.cst$kw$vector,cljs.core.cst$kw$block_DASH_hash_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$alert,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions$chat$command_SLASH_set_DASH_custom_DASH_parameter,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,cljs.core.cst$kw$keyword,cljs.core.cst$kw$value,cljs.core.cst$kw$any], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_erc20_DASH_approve,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$contract,cljs.core.cst$kw$string,cljs.core.cst$kw$spender,cljs.core.cst$kw$string,cljs.core.cst$kw$value,cljs.core.cst$kw$number,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$http_SLASH_get,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$url,cljs.core.cst$kw$string,cljs.core.cst$kw$timeout_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_failure_QMARK_,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$data,cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_logs_DASH_changes,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$string,cljs.core.cst$kw$topics_DASH_hints,cljs.core.cst$kw$vector], null)], null)]);
