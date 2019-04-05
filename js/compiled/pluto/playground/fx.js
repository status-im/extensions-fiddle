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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set,(function (db,p__1665){
var vec__1666 = p__1665;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1666,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1666,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1666,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k,v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_in,(function (db,p__1669){
var vec__1670 = p__1669;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1670,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1670,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1670,(2),null);
return cljs.core.assoc_in(db,path,v);
}));
pluto.playground.fx.update_extension_errors = (function pluto$playground$fx$update_extension_errors(p__1673,p__1674){
var map__1675 = p__1673;
var map__1675__$1 = (((((!((map__1675 == null))))?(((((map__1675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1675):map__1675);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1675__$1,cljs.core.cst$kw$db);
var vec__1676 = p__1674;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1676,(0),null);
var errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1676,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$errors,errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_errors,pluto.playground.fx.update_extension_errors);
pluto.playground.fx.clear_errors = (function pluto$playground$fx$clear_errors(p__1680,_){
var map__1681 = p__1680;
var map__1681__$1 = (((((!((map__1681 == null))))?(((((map__1681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1681):map__1681);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1681__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_clear_DASH_errors,pluto.playground.fx.clear_errors);
pluto.playground.fx.update_extension_parsed = (function pluto$playground$fx$update_extension_parsed(p__1683,p__1684){
var map__1685 = p__1683;
var map__1685__$1 = (((((!((map__1685 == null))))?(((((map__1685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1685):map__1685);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1685__$1,cljs.core.cst$kw$db);
var vec__1686 = p__1684;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1686,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1686,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$parsed,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,pluto.playground.fx.update_extension_parsed);
var G__1690_1700 = cljs.core.cst$kw$extension_SLASH_parse;
var G__1691_1701 = ((function (G__1690_1700){
return (function (p__1692){
var vec__1693 = p__1692;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1693,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1693,(1),null);
var map__1696 = pluto.core.parse(ctx,data);
var map__1696__$1 = (((((!((map__1696 == null))))?(((((map__1696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1696):map__1696);
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1696__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1696__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__1698 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1698) : re_frame.core.dispatch.call(null,G__1698));
} else {
var G__1699 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,data__$1], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1699) : re_frame.core.dispatch.call(null,G__1699));
}
});})(G__1690_1700))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1690_1700,G__1691_1701) : re_frame.core.reg_fx.call(null,G__1690_1700,G__1691_1701));
pluto.playground.fx.update_extension_data = (function pluto$playground$fx$update_extension_data(p__1702,p__1703){
var map__1704 = p__1702;
var map__1704__$1 = (((((!((map__1704 == null))))?(((((map__1704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1704):map__1704);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1704__$1,cljs.core.cst$kw$db);
var vec__1705 = p__1703;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1705,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1705,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1705,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$data,data),cljs.core.cst$kw$extension_SLASH_parse,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_data,pluto.playground.fx.update_extension_data);
var G__1709_1720 = cljs.core.cst$kw$extension_SLASH_read;
var G__1710_1721 = ((function (G__1709_1720){
return (function (p__1711){
var vec__1712 = p__1711;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1712,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1712,(1),null);
var G__1715_1722 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_clear_DASH_errors], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1715_1722) : re_frame.core.dispatch.call(null,G__1715_1722));

var map__1716 = pluto.core.read(source);
var map__1716__$1 = (((((!((map__1716 == null))))?(((((map__1716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1716):map__1716);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1716__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1716__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__1718 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1718) : re_frame.core.dispatch.call(null,G__1718));
} else {
var G__1719 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_data,ctx,data], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1719) : re_frame.core.dispatch.call(null,G__1719));
}
});})(G__1709_1720))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1709_1720,G__1710_1721) : re_frame.core.reg_fx.call(null,G__1709_1720,G__1710_1721));
pluto.playground.fx.update_extension_source = (function pluto$playground$fx$update_extension_source(p__1723,p__1724){
var map__1725 = p__1723;
var map__1725__$1 = (((((!((map__1725 == null))))?(((((map__1725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1725):map__1725);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1725__$1,cljs.core.cst$kw$db);
var vec__1726 = p__1724;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1726,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1726,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1726,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$source,data),cljs.core.cst$kw$extension_SLASH_read,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_source,pluto.playground.fx.update_extension_source);
var G__1730_1736 = cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value;
var G__1731_1737 = ((function (G__1730_1736){
return (function (p__1732){
var vec__1733 = p__1732;
var cm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1733,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1733,(1),null);
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
});})(G__1730_1736))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1730_1736,G__1731_1737) : re_frame.core.reg_fx.call(null,G__1730_1736,G__1731_1737));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_editor,(function (p__1738,p__1739){
var map__1740 = p__1738;
var map__1740__$1 = (((((!((map__1740 == null))))?(((((map__1740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1740):map__1740);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1740__$1,cljs.core.cst$kw$db);
var vec__1741 = p__1739;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1741,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1741,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code_DASH_mirror.cljs$core$IFn$_invoke$arity$1(db),data], null)], null);
}));
pluto.playground.fx.append_log = (function pluto$playground$fx$append_log(p__1745,p__1746){
var map__1747 = p__1745;
var map__1747__$1 = (((((!((map__1747 == null))))?(((((map__1747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1747):map__1747);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1747__$1,cljs.core.cst$kw$db);
var vec__1748 = p__1746;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1748,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1748,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$logs,cljs.core.conj,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_append_DASH_log,pluto.playground.fx.append_log);
pluto.playground.fx.switch_filter_logs = (function pluto$playground$fx$switch_filter_logs(p__1752,p__1753){
var map__1754 = p__1752;
var map__1754__$1 = (((((!((map__1754 == null))))?(((((map__1754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1754):map__1754);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1754__$1,cljs.core.cst$kw$db);
var vec__1755 = p__1753;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1755,(0),null);
var checked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1755,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$filtered_DASH_logs,checked)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_filter_DASH_logs,pluto.playground.fx.switch_filter_logs);
pluto.playground.fx.clear_logs = (function pluto$playground$fx$clear_logs(p__1759,_){
var map__1760 = p__1759;
var map__1760__$1 = (((((!((map__1760 == null))))?(((((map__1760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1760):map__1760);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1760__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$logs)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_clear_DASH_logs,pluto.playground.fx.clear_logs);
pluto.playground.fx.set_selected = (function pluto$playground$fx$set_selected(p__1762,p__1763){
var map__1764 = p__1762;
var map__1764__$1 = (((((!((map__1764 == null))))?(((((map__1764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1764):map__1764);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1764__$1,cljs.core.cst$kw$db);
var vec__1765 = p__1763;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1765,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1765,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selected,path)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_selected,pluto.playground.fx.set_selected);
pluto.playground.fx.switch_preview = (function pluto$playground$fx$switch_preview(p__1769,p__1770){
var map__1771 = p__1769;
var map__1771__$1 = (((((!((map__1771 == null))))?(((((map__1771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1771):map__1771);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1771__$1,cljs.core.cst$kw$db);
var vec__1772 = p__1770;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1772,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$preview,cljs.core.not)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_preview,pluto.playground.fx.switch_preview);
var G__1776_1778 = cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs;
var G__1777_1779 = ((function (G__1776_1778){
return (function (value){
return pluto.playground.ipfs.save(value);
});})(G__1776_1778))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1776_1778,G__1777_1779) : re_frame.core.reg_fx.call(null,G__1776_1778,G__1777_1779));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_publish,(function (p__1780,_){
var map__1781 = p__1780;
var map__1781__$1 = (((((!((map__1781 == null))))?(((((map__1781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1781):map__1781);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1781__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$publish,cljs.core.cst$kw$in_DASH_progress_QMARK_], null),true),cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs,cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db)], null);
}));
var G__1784_1787 = cljs.core.cst$kw$fetch_DASH_extension_DASH_fx;
var G__1785_1788 = ((function (G__1784_1787){
return (function (){
var hash = (new URL(document.location)).searchParams.get("hash");
var uri = (cljs.core.truth_(hash)?["ipfs@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''):"url@assets/extensions/command/");
return pluto.storages.fetch(uri,((function (hash,uri,G__1784_1787){
return (function (p1__1783_SHARP_){
var G__1786 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_editor,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__1783_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value,cljs.core.cst$kw$content], null))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1786) : re_frame.core.dispatch.call(null,G__1786));
});})(hash,uri,G__1784_1787))
);
});})(G__1784_1787))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1784_1787,G__1785_1788) : re_frame.core.reg_fx.call(null,G__1784_1787,G__1785_1788));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fetch_DASH_extension,(function (p__1789,_){
var map__1790 = p__1789;
var map__1790__$1 = (((((!((map__1790 == null))))?(((((map__1790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1790):map__1790);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1790__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fetch_DASH_extension_DASH_fx,null,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$store_SLASH_clear_DASH_all], null)], null);
}));
var G__1792_1794 = cljs.core.cst$kw$set_DASH_url_DASH_fx;
var G__1793_1795 = ((function (G__1792_1794){
return (function (hash){
return pluto.playground.ipfs.set_url(hash);
});})(G__1792_1794))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1792_1794,G__1793_1795) : re_frame.core.reg_fx.call(null,G__1792_1794,G__1793_1795));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$open_DASH_example,(function (p__1796,p__1797){
var map__1798 = p__1796;
var map__1798__$1 = (((((!((map__1798 == null))))?(((((map__1798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1798):map__1798);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1798__$1,cljs.core.cst$kw$db);
var vec__1799 = p__1797;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1799,(0),null);
var hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1799,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$examples,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$extensions_SLASH_properties,cljs.core.cst$kw$extensions_SLASH_properties,cljs.core.cst$kw$extension_DASH_selection,cljs.core.cst$kw$extensions_SLASH_store], 0)),cljs.core.cst$kw$set_DASH_url_DASH_fx,hash,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fetch_DASH_extension], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_properties,(function (p__1803,p__1804){
var map__1805 = p__1803;
var map__1805__$1 = (((((!((map__1805 == null))))?(((((map__1805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1805):map__1805);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1805__$1,cljs.core.cst$kw$db);
var vec__1806 = p__1804;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1806,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1806,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1806,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_properties,id], null),m)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_app_DASH_db,(function (p__1810,p__1811){
var map__1812 = p__1810;
var map__1812__$1 = (((((!((map__1812 == null))))?(((((map__1812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1812):map__1812);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1812__$1,cljs.core.cst$kw$db);
var vec__1813 = p__1811;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1813,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1813,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_store,"Extension ID"], null),m)], null);
}));
