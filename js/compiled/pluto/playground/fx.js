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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set,(function (db,p__1645){
var vec__1646 = p__1645;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1646,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1646,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1646,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k,v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_in,(function (db,p__1649){
var vec__1650 = p__1649;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1650,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1650,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1650,(2),null);
return cljs.core.assoc_in(db,path,v);
}));
pluto.playground.fx.update_extension_errors = (function pluto$playground$fx$update_extension_errors(p__1653,p__1654){
var map__1655 = p__1653;
var map__1655__$1 = (((((!((map__1655 == null))))?(((((map__1655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1655):map__1655);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1655__$1,cljs.core.cst$kw$db);
var vec__1656 = p__1654;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1656,(0),null);
var errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1656,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$errors,errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_errors,pluto.playground.fx.update_extension_errors);
pluto.playground.fx.clear_errors = (function pluto$playground$fx$clear_errors(p__1660,_){
var map__1661 = p__1660;
var map__1661__$1 = (((((!((map__1661 == null))))?(((((map__1661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1661):map__1661);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1661__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_clear_DASH_errors,pluto.playground.fx.clear_errors);
pluto.playground.fx.update_extension_parsed = (function pluto$playground$fx$update_extension_parsed(p__1663,p__1664){
var map__1665 = p__1663;
var map__1665__$1 = (((((!((map__1665 == null))))?(((((map__1665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1665):map__1665);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1665__$1,cljs.core.cst$kw$db);
var vec__1666 = p__1664;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1666,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1666,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$parsed,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,pluto.playground.fx.update_extension_parsed);
var G__1670_1680 = cljs.core.cst$kw$extension_SLASH_parse;
var G__1671_1681 = ((function (G__1670_1680){
return (function (p__1672){
var vec__1673 = p__1672;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1673,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1673,(1),null);
var map__1676 = pluto.core.parse(ctx,data);
var map__1676__$1 = (((((!((map__1676 == null))))?(((((map__1676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1676):map__1676);
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1676__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1676__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__1678 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1678) : re_frame.core.dispatch.call(null,G__1678));
} else {
var G__1679 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,data__$1], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1679) : re_frame.core.dispatch.call(null,G__1679));
}
});})(G__1670_1680))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1670_1680,G__1671_1681) : re_frame.core.reg_fx.call(null,G__1670_1680,G__1671_1681));
pluto.playground.fx.update_extension_data = (function pluto$playground$fx$update_extension_data(p__1682,p__1683){
var map__1684 = p__1682;
var map__1684__$1 = (((((!((map__1684 == null))))?(((((map__1684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1684):map__1684);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1684__$1,cljs.core.cst$kw$db);
var vec__1685 = p__1683;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1685,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1685,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1685,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$data,data),cljs.core.cst$kw$extension_SLASH_parse,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_data,pluto.playground.fx.update_extension_data);
var G__1689_1700 = cljs.core.cst$kw$extension_SLASH_read;
var G__1690_1701 = ((function (G__1689_1700){
return (function (p__1691){
var vec__1692 = p__1691;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1692,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1692,(1),null);
var G__1695_1702 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_clear_DASH_errors], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1695_1702) : re_frame.core.dispatch.call(null,G__1695_1702));

var map__1696 = pluto.core.read(source);
var map__1696__$1 = (((((!((map__1696 == null))))?(((((map__1696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1696):map__1696);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1696__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1696__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__1698 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1698) : re_frame.core.dispatch.call(null,G__1698));
} else {
var G__1699 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_data,ctx,data], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1699) : re_frame.core.dispatch.call(null,G__1699));
}
});})(G__1689_1700))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1689_1700,G__1690_1701) : re_frame.core.reg_fx.call(null,G__1689_1700,G__1690_1701));
pluto.playground.fx.update_extension_source = (function pluto$playground$fx$update_extension_source(p__1703,p__1704){
var map__1705 = p__1703;
var map__1705__$1 = (((((!((map__1705 == null))))?(((((map__1705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1705):map__1705);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1705__$1,cljs.core.cst$kw$db);
var vec__1706 = p__1704;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1706,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1706,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1706,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$source,data),cljs.core.cst$kw$extension_SLASH_read,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_source,pluto.playground.fx.update_extension_source);
var G__1710_1716 = cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value;
var G__1711_1717 = ((function (G__1710_1716){
return (function (p__1712){
var vec__1713 = p__1712;
var cm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1713,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1713,(1),null);
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
});})(G__1710_1716))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1710_1716,G__1711_1717) : re_frame.core.reg_fx.call(null,G__1710_1716,G__1711_1717));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_editor,(function (p__1718,p__1719){
var map__1720 = p__1718;
var map__1720__$1 = (((((!((map__1720 == null))))?(((((map__1720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1720):map__1720);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1720__$1,cljs.core.cst$kw$db);
var vec__1721 = p__1719;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1721,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1721,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code_DASH_mirror.cljs$core$IFn$_invoke$arity$1(db),data], null)], null);
}));
pluto.playground.fx.append_log = (function pluto$playground$fx$append_log(p__1725,p__1726){
var map__1727 = p__1725;
var map__1727__$1 = (((((!((map__1727 == null))))?(((((map__1727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1727):map__1727);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1727__$1,cljs.core.cst$kw$db);
var vec__1728 = p__1726;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1728,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1728,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$logs,cljs.core.conj,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_append_DASH_log,pluto.playground.fx.append_log);
pluto.playground.fx.switch_filter_logs = (function pluto$playground$fx$switch_filter_logs(p__1732,p__1733){
var map__1734 = p__1732;
var map__1734__$1 = (((((!((map__1734 == null))))?(((((map__1734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1734):map__1734);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1734__$1,cljs.core.cst$kw$db);
var vec__1735 = p__1733;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1735,(0),null);
var checked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1735,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$filtered_DASH_logs,checked)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_filter_DASH_logs,pluto.playground.fx.switch_filter_logs);
pluto.playground.fx.clear_logs = (function pluto$playground$fx$clear_logs(p__1739,_){
var map__1740 = p__1739;
var map__1740__$1 = (((((!((map__1740 == null))))?(((((map__1740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1740):map__1740);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1740__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$logs)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_clear_DASH_logs,pluto.playground.fx.clear_logs);
pluto.playground.fx.set_selected = (function pluto$playground$fx$set_selected(p__1742,p__1743){
var map__1744 = p__1742;
var map__1744__$1 = (((((!((map__1744 == null))))?(((((map__1744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1744):map__1744);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1744__$1,cljs.core.cst$kw$db);
var vec__1745 = p__1743;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1745,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1745,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selected,path)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_selected,pluto.playground.fx.set_selected);
pluto.playground.fx.switch_preview = (function pluto$playground$fx$switch_preview(p__1749,p__1750){
var map__1751 = p__1749;
var map__1751__$1 = (((((!((map__1751 == null))))?(((((map__1751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1751):map__1751);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1751__$1,cljs.core.cst$kw$db);
var vec__1752 = p__1750;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1752,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$preview,cljs.core.not)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_preview,pluto.playground.fx.switch_preview);
var G__1756_1758 = cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs;
var G__1757_1759 = ((function (G__1756_1758){
return (function (value){
return pluto.playground.ipfs.save(value);
});})(G__1756_1758))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1756_1758,G__1757_1759) : re_frame.core.reg_fx.call(null,G__1756_1758,G__1757_1759));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_publish,(function (p__1760,_){
var map__1761 = p__1760;
var map__1761__$1 = (((((!((map__1761 == null))))?(((((map__1761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1761):map__1761);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1761__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$publish,cljs.core.cst$kw$in_DASH_progress_QMARK_], null),true),cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs,cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db)], null);
}));
var G__1764_1767 = cljs.core.cst$kw$fetch_DASH_extension_DASH_fx;
var G__1765_1768 = ((function (G__1764_1767){
return (function (){
var hash = (new URL(document.location)).searchParams.get("hash");
var uri = (cljs.core.truth_(hash)?["ipfs@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''):"url@assets/extensions/command/");
return pluto.storages.fetch(uri,((function (hash,uri,G__1764_1767){
return (function (p1__1763_SHARP_){
var G__1766 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_editor,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__1763_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value,cljs.core.cst$kw$content], null))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1766) : re_frame.core.dispatch.call(null,G__1766));
});})(hash,uri,G__1764_1767))
);
});})(G__1764_1767))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1764_1767,G__1765_1768) : re_frame.core.reg_fx.call(null,G__1764_1767,G__1765_1768));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fetch_DASH_extension,(function (p__1769,_){
var map__1770 = p__1769;
var map__1770__$1 = (((((!((map__1770 == null))))?(((((map__1770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1770):map__1770);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1770__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fetch_DASH_extension_DASH_fx,null,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$store_SLASH_clear_DASH_all], null)], null);
}));
var G__1772_1774 = cljs.core.cst$kw$set_DASH_url_DASH_fx;
var G__1773_1775 = ((function (G__1772_1774){
return (function (hash){
return pluto.playground.ipfs.set_url(hash);
});})(G__1772_1774))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1772_1774,G__1773_1775) : re_frame.core.reg_fx.call(null,G__1772_1774,G__1773_1775));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$open_DASH_example,(function (p__1776,p__1777){
var map__1778 = p__1776;
var map__1778__$1 = (((((!((map__1778 == null))))?(((((map__1778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1778):map__1778);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1778__$1,cljs.core.cst$kw$db);
var vec__1779 = p__1777;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1779,(0),null);
var hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1779,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$examples,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$extensions_SLASH_properties,cljs.core.cst$kw$extension_DASH_selection,cljs.core.cst$kw$extensions_SLASH_store,cljs.core.cst$kw$extension_DASH_props], 0)),cljs.core.cst$kw$set_DASH_url_DASH_fx,hash,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fetch_DASH_extension], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_properties,(function (p__1783,p__1784){
var map__1785 = p__1783;
var map__1785__$1 = (((((!((map__1785 == null))))?(((((map__1785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1785):map__1785);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1785__$1,cljs.core.cst$kw$db);
var vec__1786 = p__1784;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1786,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1786,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1786,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_properties,id], null),m)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_app_DASH_db,(function (p__1790,p__1791){
var map__1792 = p__1790;
var map__1792__$1 = (((((!((map__1792 == null))))?(((((map__1792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1792):map__1792);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1792__$1,cljs.core.cst$kw$db);
var vec__1793 = p__1791;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1793,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1793,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_store,"Extension ID"], null),m)], null);
}));
