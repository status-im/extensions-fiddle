// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.playground.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
var G__1673_1679 = cljs.core.cst$kw$get;
var G__1674_1680 = ((function (G__1673_1679){
return (function (db,p__1675){
var vec__1676 = p__1675;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1676,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1676,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,k);
});})(G__1673_1679))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1673_1679,G__1674_1680) : re_frame.core.reg_sub.call(null,G__1673_1679,G__1674_1680));
var G__1681_1687 = cljs.core.cst$kw$get_DASH_in;
var G__1682_1688 = ((function (G__1681_1687){
return (function (db,p__1683){
var vec__1684 = p__1683;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1684,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1684,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path);
});})(G__1681_1687))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1681_1687,G__1682_1688) : re_frame.core.reg_sub.call(null,G__1681_1687,G__1682_1688));
pluto.playground.subs.extension_parsed = (function pluto$playground$subs$extension_parsed(db,v){
return cljs.core.cst$kw$parsed.cljs$core$IFn$_invoke$arity$1(db);
});
var G__1689_1691 = cljs.core.cst$kw$extension_SLASH_parsed;
var G__1690_1692 = pluto.playground.subs.extension_parsed;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1689_1691,G__1690_1692) : re_frame.core.reg_sub.call(null,G__1689_1691,G__1690_1692));
pluto.playground.subs.extension_data = (function pluto$playground$subs$extension_data(db,v){
return cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(db);
});
var G__1693_1695 = cljs.core.cst$kw$extension_SLASH_data;
var G__1694_1696 = pluto.playground.subs.extension_data;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1693_1695,G__1694_1696) : re_frame.core.reg_sub.call(null,G__1693_1695,G__1694_1696));
pluto.playground.subs.extension_source = (function pluto$playground$subs$extension_source(db,v){
return cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db);
});
var G__1697_1699 = cljs.core.cst$kw$extension_SLASH_source;
var G__1698_1700 = pluto.playground.subs.extension_source;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1697_1699,G__1698_1700) : re_frame.core.reg_sub.call(null,G__1697_1699,G__1698_1700));
var G__1701_1703 = cljs.core.cst$kw$extension_SLASH_logs;
var G__1702_1704 = cljs.core.cst$kw$logs;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1701_1703,G__1702_1704) : re_frame.core.reg_sub.call(null,G__1701_1703,G__1702_1704));
var G__1705_1707 = cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs_QMARK_;
var G__1706_1708 = cljs.core.cst$kw$filtered_DASH_logs;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1705_1707,G__1706_1708) : re_frame.core.reg_sub.call(null,G__1705_1707,G__1706_1708));
var G__1710_1720 = cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs;
var G__1711_1721 = cljs.core.cst$kw$_LT__DASH_;
var G__1712_1722 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_logs], null);
var G__1713_1723 = cljs.core.cst$kw$_LT__DASH_;
var G__1714_1724 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs_QMARK_], null);
var G__1715_1725 = ((function (G__1710_1720,G__1711_1721,G__1712_1722,G__1713_1723,G__1714_1724){
return (function (p__1716){
var vec__1717 = p__1716;
var logs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1717,(0),null);
var filtered_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1717,(1),null);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__1717,logs,filtered_QMARK_,G__1710_1720,G__1711_1721,G__1712_1722,G__1713_1723,G__1714_1724){
return (function (p1__1709_SHARP_){
if(filtered_QMARK_ === true){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$category.cljs$core$IFn$_invoke$arity$1(p1__1709_SHARP_),cljs.core.cst$kw$pluto$log_SLASH_trace);
} else {
return true;
}
});})(vec__1717,logs,filtered_QMARK_,G__1710_1720,G__1711_1721,G__1712_1722,G__1713_1723,G__1714_1724))
,logs);
});})(G__1710_1720,G__1711_1721,G__1712_1722,G__1713_1723,G__1714_1724))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__1710_1720,G__1711_1721,G__1712_1722,G__1713_1723,G__1714_1724,G__1715_1725) : re_frame.core.reg_sub.call(null,G__1710_1720,G__1711_1721,G__1712_1722,G__1713_1723,G__1714_1724,G__1715_1725));
var G__1726_1728 = cljs.core.cst$kw$extension_SLASH_errors;
var G__1727_1729 = cljs.core.cst$kw$errors;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1726_1728,G__1727_1729) : re_frame.core.reg_sub.call(null,G__1726_1728,G__1727_1729));
pluto.playground.subs.selected = (function pluto$playground$subs$selected(db,v){
return cljs.core.cst$kw$selected.cljs$core$IFn$_invoke$arity$1(db);
});
var G__1730_1732 = cljs.core.cst$kw$extension_SLASH_selected;
var G__1731_1733 = pluto.playground.subs.selected;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1730_1732,G__1731_1733) : re_frame.core.reg_sub.call(null,G__1730_1732,G__1731_1733));
pluto.playground.subs.preview = (function pluto$playground$subs$preview(db,v){
var or__4131__auto__ = cljs.core.cst$kw$preview.cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return false;
}
});
var G__1734_1736 = cljs.core.cst$kw$extension_SLASH_preview;
var G__1735_1737 = pluto.playground.subs.preview;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1734_1736,G__1735_1737) : re_frame.core.reg_sub.call(null,G__1734_1736,G__1735_1737));
