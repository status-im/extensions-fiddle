// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.playground.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
var G__1689_1695 = cljs.core.cst$kw$get;
var G__1690_1696 = ((function (G__1689_1695){
return (function (db,p__1691){
var vec__1692 = p__1691;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1692,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1692,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,k);
});})(G__1689_1695))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1689_1695,G__1690_1696) : re_frame.core.reg_sub.call(null,G__1689_1695,G__1690_1696));
var G__1697_1703 = cljs.core.cst$kw$get_DASH_in;
var G__1698_1704 = ((function (G__1697_1703){
return (function (db,p__1699){
var vec__1700 = p__1699;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1700,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1700,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path);
});})(G__1697_1703))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1697_1703,G__1698_1704) : re_frame.core.reg_sub.call(null,G__1697_1703,G__1698_1704));
pluto.playground.subs.extension_parsed = (function pluto$playground$subs$extension_parsed(db,v){
return cljs.core.cst$kw$parsed.cljs$core$IFn$_invoke$arity$1(db);
});
var G__1705_1707 = cljs.core.cst$kw$extension_SLASH_parsed;
var G__1706_1708 = pluto.playground.subs.extension_parsed;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1705_1707,G__1706_1708) : re_frame.core.reg_sub.call(null,G__1705_1707,G__1706_1708));
pluto.playground.subs.extension_data = (function pluto$playground$subs$extension_data(db,v){
return cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(db);
});
var G__1709_1711 = cljs.core.cst$kw$extension_SLASH_data;
var G__1710_1712 = pluto.playground.subs.extension_data;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1709_1711,G__1710_1712) : re_frame.core.reg_sub.call(null,G__1709_1711,G__1710_1712));
pluto.playground.subs.extension_source = (function pluto$playground$subs$extension_source(db,v){
return cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db);
});
var G__1713_1715 = cljs.core.cst$kw$extension_SLASH_source;
var G__1714_1716 = pluto.playground.subs.extension_source;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1713_1715,G__1714_1716) : re_frame.core.reg_sub.call(null,G__1713_1715,G__1714_1716));
var G__1717_1719 = cljs.core.cst$kw$extension_SLASH_logs;
var G__1718_1720 = cljs.core.cst$kw$logs;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1717_1719,G__1718_1720) : re_frame.core.reg_sub.call(null,G__1717_1719,G__1718_1720));
var G__1721_1723 = cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs_QMARK_;
var G__1722_1724 = cljs.core.cst$kw$filtered_DASH_logs;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1721_1723,G__1722_1724) : re_frame.core.reg_sub.call(null,G__1721_1723,G__1722_1724));
var G__1726_1736 = cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs;
var G__1727_1737 = cljs.core.cst$kw$_LT__DASH_;
var G__1728_1738 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_logs], null);
var G__1729_1739 = cljs.core.cst$kw$_LT__DASH_;
var G__1730_1740 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs_QMARK_], null);
var G__1731_1741 = ((function (G__1726_1736,G__1727_1737,G__1728_1738,G__1729_1739,G__1730_1740){
return (function (p__1732){
var vec__1733 = p__1732;
var logs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1733,(0),null);
var filtered_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1733,(1),null);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__1733,logs,filtered_QMARK_,G__1726_1736,G__1727_1737,G__1728_1738,G__1729_1739,G__1730_1740){
return (function (p1__1725_SHARP_){
if(filtered_QMARK_ === true){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$category.cljs$core$IFn$_invoke$arity$1(p1__1725_SHARP_),cljs.core.cst$kw$pluto$log_SLASH_trace);
} else {
return true;
}
});})(vec__1733,logs,filtered_QMARK_,G__1726_1736,G__1727_1737,G__1728_1738,G__1729_1739,G__1730_1740))
,logs);
});})(G__1726_1736,G__1727_1737,G__1728_1738,G__1729_1739,G__1730_1740))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__1726_1736,G__1727_1737,G__1728_1738,G__1729_1739,G__1730_1740,G__1731_1741) : re_frame.core.reg_sub.call(null,G__1726_1736,G__1727_1737,G__1728_1738,G__1729_1739,G__1730_1740,G__1731_1741));
var G__1742_1744 = cljs.core.cst$kw$extension_SLASH_errors;
var G__1743_1745 = cljs.core.cst$kw$errors;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1742_1744,G__1743_1745) : re_frame.core.reg_sub.call(null,G__1742_1744,G__1743_1745));
pluto.playground.subs.selected = (function pluto$playground$subs$selected(db,v){
return cljs.core.cst$kw$selected.cljs$core$IFn$_invoke$arity$1(db);
});
var G__1746_1748 = cljs.core.cst$kw$extension_SLASH_selected;
var G__1747_1749 = pluto.playground.subs.selected;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1746_1748,G__1747_1749) : re_frame.core.reg_sub.call(null,G__1746_1748,G__1747_1749));
pluto.playground.subs.preview = (function pluto$playground$subs$preview(db,v){
var or__4131__auto__ = cljs.core.cst$kw$preview.cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return false;
}
});
var G__1750_1752 = cljs.core.cst$kw$extension_SLASH_preview;
var G__1751_1753 = pluto.playground.subs.preview;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1750_1752,G__1751_1753) : re_frame.core.reg_sub.call(null,G__1750_1752,G__1751_1753));
