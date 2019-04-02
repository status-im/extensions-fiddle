// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.playground.components.dialogs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('react_native_web.react');
goog.require('pluto.playground.components.source');
goog.require('status_im.colors');
pluto.playground.components.dialogs.Dialog = (MaterialUI["Dialog"]);
pluto.playground.components.dialogs.DialogTitle = (MaterialUI["DialogTitle"]);
pluto.playground.components.dialogs.CircularProgress = (MaterialUI["CircularProgress"]);
if(cljs.core.truth_(cljs.core.find_ns(cljs.core.cst$sym$re_DASH_frame$core))){
} else {
goog.require('re_frame.core');
}

pluto.playground.components.dialogs.publish = (function pluto$playground$components$dialogs$publish(){
var keys1630 = (function (){var G__1631 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$publish], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__1631) : re_frame.core.subscribe.call(null,G__1631));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (keys1630){
return (function (){
var map__1632 = cljs.core.deref(keys1630);
var map__1632__$1 = (((((!((map__1632 == null))))?(((((map__1632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1632):map__1632);
var publish = map__1632__$1;
var in_progress_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1632__$1,cljs.core.cst$kw$in_DASH_progress_QMARK_);
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1632__$1,cljs.core.cst$kw$hash);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.dialogs.Dialog,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$open,(!((publish == null))),cljs.core.cst$kw$on_DASH_close,((function (map__1632,map__1632__$1,publish,in_progress_QMARK_,hash,keys1630){
return (function (){
var G__1634 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$publish,null], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1634) : re_frame.core.dispatch.call(null,G__1634));
});})(map__1632,map__1632__$1,publish,in_progress_QMARK_,hash,keys1630))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.dialogs.DialogTitle,"Publish extension"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,(20)], null)], null),(cljs.core.truth_(in_progress_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.dialogs.CircularProgress], null):(function (){var ext_url = ["https://get.status.im/extension/ipfs@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash),"/"].join('');
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_vertical,(5),cljs.core.cst$kw$font_DASH_weight,cljs.core.cst$kw$bold], null)], null),"Scan QR to install extension"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Open Status -> Press (+) -> Scan QR "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$center], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$margin,(20)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.qr_code(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,ext_url], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_vertical,(5),cljs.core.cst$kw$font_DASH_weight,cljs.core.cst$kw$bold], null)], null),"OR share extension URL"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,ext_url], null)], null)], null);
})())], null)], null);
});})(keys1630))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$publish)], null)], 0)));
});
pluto.playground.components.dialogs.examples_data = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$header,"General"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Components",cljs.core.cst$kw$hash,"QmadX7aF2tBaLJjEnNP4Bewc9JZbT5CGjZgKX71MCpvaDS"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Queries",cljs.core.cst$kw$hash,"QmRyL2JJ7HoGQKQfHruWuECUp1bAkbxYjprQgFQGsmns1v"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Events",cljs.core.cst$kw$hash,"QmUYEKhnXibFhSQ7rDWcPfBUwFr6A379N7dFtbW6PQZaee"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$header,"Chat commands"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Hello world",cljs.core.cst$kw$hash,"QmV8JsEA2fBnjstH3MJzK5SgF9F7qNSyKLo2LapYia5pX4"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Ethereum logs tests",cljs.core.cst$kw$hash,"QmaKKKUgDsJKQJ5Q9BJg8V1SRDhhiKbyyQycoExF3eehUZ"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Status Principles",cljs.core.cst$kw$hash,"QmSvd5iehhrkSCQR12hEyJtJzCjEQo1ax8936BnkBhQi5a"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Gfycat",cljs.core.cst$kw$hash,"QmZCf2WJhSm3wfSLK9Mf4mYY4pmxvyE6RhqmsG1SNhNQfq"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Weasel (one of EthSingapore winner)",cljs.core.cst$kw$hash,"QmZaUniGLGfjy4ggdK3Jhk3xq5b2T126zCYLjk5CTc7yiL"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Aragon integration (one of EthSingapore winner)",cljs.core.cst$kw$hash,"QmeEGtHHBn8p11gjCWPh1EzNaojNtDzLqWCdN2XE3auJDV"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$header,"Wallet settings"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Hello world",cljs.core.cst$kw$hash,"QmTgi12UgbAdQgxwCaSJgWcHvtwtaTpoazi5SWRhChKQhK"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Kyber exchange (WIP)",cljs.core.cst$kw$hash,"QmeqDrXwwwesgb6Dj9UurtgX1VoS4h6tApxLTLU1BSD7Vo"], null)], null);
pluto.playground.components.dialogs.example_item = (function pluto$playground$components$dialogs$example_item(p__1637){
var map__1638 = p__1637;
var map__1638__$1 = (((((!((map__1638 == null))))?(((((map__1638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1638):map__1638);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1638__$1,cljs.core.cst$kw$name);
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1638__$1,cljs.core.cst$kw$hash);
var header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1638__$1,cljs.core.cst$kw$header);
if(cljs.core.truth_(header)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$font_DASH_size,(16),cljs.core.cst$kw$font_DASH_weight,cljs.core.cst$kw$bold,cljs.core.cst$kw$padding_DASH_bottom,(10),cljs.core.cst$kw$padding_DASH_top,(10)], null)], null),header], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding,(5),cljs.core.cst$kw$cursor,cljs.core.cst$kw$pointer], null),cljs.core.cst$kw$on_DASH_click,((function (map__1638,map__1638__$1,name,hash,header){
return (function (){
var G__1640 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$open_DASH_example,hash], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1640) : re_frame.core.dispatch.call(null,G__1640));
});})(map__1638,map__1638__$1,name,hash,header))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,(15)], null)], null),name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_size,(12),cljs.core.cst$kw$color,status_im.colors.gray], null)], null),hash], null)], null);
}
});
if(cljs.core.truth_(cljs.core.find_ns(cljs.core.cst$sym$re_DASH_frame$core))){
} else {
goog.require('re_frame.core');
}

pluto.playground.components.dialogs.examples = (function pluto$playground$components$dialogs$examples(){
var show_QMARK_1641 = (function (){var G__1642 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$examples], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__1642) : re_frame.core.subscribe.call(null,G__1642));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (show_QMARK_1641){
return (function (){
var show_QMARK_ = cljs.core.deref(show_QMARK_1641);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.dialogs.Dialog,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$open,show_QMARK_,cljs.core.cst$kw$on_DASH_close,((function (show_QMARK_,show_QMARK_1641){
return (function (){
var G__1643 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$examples,null], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1643) : re_frame.core.dispatch.call(null,G__1643));
});})(show_QMARK_,show_QMARK_1641))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.dialogs.DialogTitle,"Extensions examples"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding,(20),cljs.core.cst$kw$overflow,cljs.core.cst$kw$auto], null)], null),(function (){var iter__4523__auto__ = ((function (show_QMARK_,show_QMARK_1641){
return (function pluto$playground$components$dialogs$examples_$_iter__1644(s__1645){
return (new cljs.core.LazySeq(null,((function (show_QMARK_,show_QMARK_1641){
return (function (){
var s__1645__$1 = s__1645;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__1645__$1);
if(temp__5457__auto__){
var s__1645__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1645__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__1645__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__1647 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__1646 = (0);
while(true){
if((i__1646 < size__4522__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__1646);
cljs.core.chunk_append(b__1647,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.dialogs.example_item,item], null));

var G__1650 = (i__1646 + (1));
i__1646 = G__1650;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1647),pluto$playground$components$dialogs$examples_$_iter__1644(cljs.core.chunk_rest(s__1645__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1647),null);
}
} else {
var item = cljs.core.first(s__1645__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.dialogs.example_item,item], null),pluto$playground$components$dialogs$examples_$_iter__1644(cljs.core.rest(s__1645__$2)));
}
} else {
return null;
}
break;
}
});})(show_QMARK_,show_QMARK_1641))
,null,null));
});})(show_QMARK_,show_QMARK_1641))
;
return iter__4523__auto__(pluto.playground.components.dialogs.examples_data);
})()], null)], null);
});})(show_QMARK_1641))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$examples)], null)], 0)));
});
pluto.playground.components.dialogs.app_db_browser = (function pluto$playground$components$dialogs$app_db_browser(){
var browse = cljs.core.deref((function (){var G__1652 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$browse_DASH_app_DASH_db], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__1652) : re_frame.core.subscribe.call(null,G__1652));
})());
var m = cljs.core.deref((function (){var G__1653 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$store_SLASH_all], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__1653) : re_frame.core.subscribe.call(null,G__1653));
})());
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.dialogs.Dialog,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$open,browse,cljs.core.cst$kw$on_DASH_close,((function (browse,m){
return (function (){
var G__1654 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$browse_DASH_app_DASH_db,false], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1654) : re_frame.core.dispatch.call(null,G__1654));
});})(browse,m))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.dialogs.DialogTitle,"Edit local app-db"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$padding,(20),cljs.core.cst$kw$width,"50vw",cljs.core.cst$kw$height,"80vh"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.source.editor2,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$content,cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = m;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),cljs.core.cst$kw$on_DASH_change,((function (browse,m){
return (function (p1__1651_SHARP_){
var G__1655 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fiddle_SLASH_set_DASH_app_DASH_db,p1__1651_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1655) : re_frame.core.dispatch.call(null,G__1655));
});})(browse,m))
], null)], null)], null)], null);
});
pluto.playground.components.dialogs.dialogs = (function pluto$playground$components$dialogs$dialogs(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.dialogs.publish], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.dialogs.examples], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.dialogs.app_db_browser], null)], null);
});
