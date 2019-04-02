// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.playground.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
var G__1613_1619 = cljs.core.cst$kw$get;
var G__1614_1620 = ((function (G__1613_1619){
return (function (db,p__1615){
var vec__1616 = p__1615;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1616,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1616,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,k);
});})(G__1613_1619))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1613_1619,G__1614_1620) : re_frame.core.reg_sub.call(null,G__1613_1619,G__1614_1620));
var G__1621_1627 = cljs.core.cst$kw$get_DASH_in;
var G__1622_1628 = ((function (G__1621_1627){
return (function (db,p__1623){
var vec__1624 = p__1623;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1624,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1624,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path);
});})(G__1621_1627))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1621_1627,G__1622_1628) : re_frame.core.reg_sub.call(null,G__1621_1627,G__1622_1628));
pluto.playground.subs.extension_parsed = (function pluto$playground$subs$extension_parsed(db,v){
return cljs.core.cst$kw$parsed.cljs$core$IFn$_invoke$arity$1(db);
});
var G__1629_1631 = cljs.core.cst$kw$extension_SLASH_parsed;
var G__1630_1632 = pluto.playground.subs.extension_parsed;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1629_1631,G__1630_1632) : re_frame.core.reg_sub.call(null,G__1629_1631,G__1630_1632));
pluto.playground.subs.extension_data = (function pluto$playground$subs$extension_data(db,v){
return cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(db);
});
var G__1633_1635 = cljs.core.cst$kw$extension_SLASH_data;
var G__1634_1636 = pluto.playground.subs.extension_data;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1633_1635,G__1634_1636) : re_frame.core.reg_sub.call(null,G__1633_1635,G__1634_1636));
pluto.playground.subs.extension_source = (function pluto$playground$subs$extension_source(db,v){
return cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db);
});
var G__1637_1639 = cljs.core.cst$kw$extension_SLASH_source;
var G__1638_1640 = pluto.playground.subs.extension_source;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1637_1639,G__1638_1640) : re_frame.core.reg_sub.call(null,G__1637_1639,G__1638_1640));
var G__1641_1643 = cljs.core.cst$kw$extension_SLASH_logs;
var G__1642_1644 = cljs.core.cst$kw$logs;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1641_1643,G__1642_1644) : re_frame.core.reg_sub.call(null,G__1641_1643,G__1642_1644));
var G__1645_1647 = cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs_QMARK_;
var G__1646_1648 = cljs.core.cst$kw$filtered_DASH_logs;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1645_1647,G__1646_1648) : re_frame.core.reg_sub.call(null,G__1645_1647,G__1646_1648));
var G__1650_1660 = cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs;
var G__1651_1661 = cljs.core.cst$kw$_LT__DASH_;
var G__1652_1662 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_logs], null);
var G__1653_1663 = cljs.core.cst$kw$_LT__DASH_;
var G__1654_1664 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs_QMARK_], null);
var G__1655_1665 = ((function (G__1650_1660,G__1651_1661,G__1652_1662,G__1653_1663,G__1654_1664){
return (function (p__1656){
var vec__1657 = p__1656;
var logs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1657,(0),null);
var filtered_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1657,(1),null);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__1657,logs,filtered_QMARK_,G__1650_1660,G__1651_1661,G__1652_1662,G__1653_1663,G__1654_1664){
return (function (p1__1649_SHARP_){
if(filtered_QMARK_ === true){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$category.cljs$core$IFn$_invoke$arity$1(p1__1649_SHARP_),cljs.core.cst$kw$pluto$log_SLASH_trace);
} else {
return true;
}
});})(vec__1657,logs,filtered_QMARK_,G__1650_1660,G__1651_1661,G__1652_1662,G__1653_1663,G__1654_1664))
,logs);
});})(G__1650_1660,G__1651_1661,G__1652_1662,G__1653_1663,G__1654_1664))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__1650_1660,G__1651_1661,G__1652_1662,G__1653_1663,G__1654_1664,G__1655_1665) : re_frame.core.reg_sub.call(null,G__1650_1660,G__1651_1661,G__1652_1662,G__1653_1663,G__1654_1664,G__1655_1665));
var G__1666_1668 = cljs.core.cst$kw$extension_SLASH_errors;
var G__1667_1669 = cljs.core.cst$kw$errors;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1666_1668,G__1667_1669) : re_frame.core.reg_sub.call(null,G__1666_1668,G__1667_1669));
pluto.playground.subs.selected = (function pluto$playground$subs$selected(db,v){
return cljs.core.cst$kw$selected.cljs$core$IFn$_invoke$arity$1(db);
});
var G__1670_1672 = cljs.core.cst$kw$extension_SLASH_selected;
var G__1671_1673 = pluto.playground.subs.selected;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1670_1672,G__1671_1673) : re_frame.core.reg_sub.call(null,G__1670_1672,G__1671_1673));
pluto.playground.subs.preview = (function pluto$playground$subs$preview(db,v){
var or__4131__auto__ = cljs.core.cst$kw$preview.cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return false;
}
});
var G__1674_1676 = cljs.core.cst$kw$extension_SLASH_preview;
var G__1675_1677 = pluto.playground.subs.preview;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1674_1676,G__1675_1677) : re_frame.core.reg_sub.call(null,G__1674_1676,G__1675_1677));
