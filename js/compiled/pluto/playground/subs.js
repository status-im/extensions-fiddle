// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.playground.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
var G__1605_1611 = cljs.core.cst$kw$get;
var G__1606_1612 = ((function (G__1605_1611){
return (function (db,p__1607){
var vec__1608 = p__1607;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1608,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1608,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,k);
});})(G__1605_1611))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1605_1611,G__1606_1612) : re_frame.core.reg_sub.call(null,G__1605_1611,G__1606_1612));
var G__1613_1619 = cljs.core.cst$kw$get_DASH_in;
var G__1614_1620 = ((function (G__1613_1619){
return (function (db,p__1615){
var vec__1616 = p__1615;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1616,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1616,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path);
});})(G__1613_1619))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1613_1619,G__1614_1620) : re_frame.core.reg_sub.call(null,G__1613_1619,G__1614_1620));
pluto.playground.subs.extension_parsed = (function pluto$playground$subs$extension_parsed(db,v){
return cljs.core.cst$kw$parsed.cljs$core$IFn$_invoke$arity$1(db);
});
var G__1621_1623 = cljs.core.cst$kw$extension_SLASH_parsed;
var G__1622_1624 = pluto.playground.subs.extension_parsed;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1621_1623,G__1622_1624) : re_frame.core.reg_sub.call(null,G__1621_1623,G__1622_1624));
pluto.playground.subs.extension_data = (function pluto$playground$subs$extension_data(db,v){
return cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(db);
});
var G__1625_1627 = cljs.core.cst$kw$extension_SLASH_data;
var G__1626_1628 = pluto.playground.subs.extension_data;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1625_1627,G__1626_1628) : re_frame.core.reg_sub.call(null,G__1625_1627,G__1626_1628));
pluto.playground.subs.extension_source = (function pluto$playground$subs$extension_source(db,v){
return cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db);
});
var G__1629_1631 = cljs.core.cst$kw$extension_SLASH_source;
var G__1630_1632 = pluto.playground.subs.extension_source;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1629_1631,G__1630_1632) : re_frame.core.reg_sub.call(null,G__1629_1631,G__1630_1632));
var G__1633_1635 = cljs.core.cst$kw$extension_SLASH_logs;
var G__1634_1636 = cljs.core.cst$kw$logs;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1633_1635,G__1634_1636) : re_frame.core.reg_sub.call(null,G__1633_1635,G__1634_1636));
var G__1637_1639 = cljs.core.cst$kw$extension_SLASH_errors;
var G__1638_1640 = cljs.core.cst$kw$errors;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1637_1639,G__1638_1640) : re_frame.core.reg_sub.call(null,G__1637_1639,G__1638_1640));
pluto.playground.subs.selected = (function pluto$playground$subs$selected(db,v){
return cljs.core.cst$kw$selected.cljs$core$IFn$_invoke$arity$1(db);
});
var G__1641_1643 = cljs.core.cst$kw$extension_SLASH_selected;
var G__1642_1644 = pluto.playground.subs.selected;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1641_1643,G__1642_1644) : re_frame.core.reg_sub.call(null,G__1641_1643,G__1642_1644));
pluto.playground.subs.preview = (function pluto$playground$subs$preview(db,v){
var or__4131__auto__ = cljs.core.cst$kw$preview.cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return false;
}
});
var G__1645_1647 = cljs.core.cst$kw$extension_SLASH_preview;
var G__1646_1648 = pluto.playground.subs.preview;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1645_1647,G__1646_1648) : re_frame.core.reg_sub.call(null,G__1645_1647,G__1646_1648));
