// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.playground.components.dialogs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.edn');
goog.require('fipp.edn');
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
var keys1590 = (function (){var G__1591 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$publish], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__1591) : re_frame.core.subscribe.call(null,G__1591));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (keys1590){
return (function (){
var map__1592 = cljs.core.deref(keys1590);
var map__1592__$1 = (((((!((map__1592 == null))))?(((((map__1592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1592):map__1592);
var publish = map__1592__$1;
var in_progress_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1592__$1,cljs.core.cst$kw$in_DASH_progress_QMARK_);
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1592__$1,cljs.core.cst$kw$hash);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.dialogs.Dialog,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$open,(!((publish == null))),cljs.core.cst$kw$on_DASH_close,((function (map__1592,map__1592__$1,publish,in_progress_QMARK_,hash,keys1590){
return (function (){
var G__1594 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$publish,null], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1594) : re_frame.core.dispatch.call(null,G__1594));
});})(map__1592,map__1592__$1,publish,in_progress_QMARK_,hash,keys1590))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.dialogs.DialogTitle,"Publish extension"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,(20)], null)], null),(cljs.core.truth_(in_progress_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.dialogs.CircularProgress], null):(function (){var ext_url = ["https://get.status.im/extension/ipfs@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash),"/"].join('');
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_vertical,(5),cljs.core.cst$kw$font_DASH_weight,cljs.core.cst$kw$bold], null)], null),"Scan QR to install extension"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Open Status -> Press (+) -> Scan QR "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$center], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$margin,(20)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.qr_code(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,ext_url], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_vertical,(5),cljs.core.cst$kw$font_DASH_weight,cljs.core.cst$kw$bold], null)], null),"OR"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_vertical,(5)], null)], null),"share extension",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,(10)], null),cljs.core.cst$kw$href,ext_url], null),"URL"], null)], null)], null)], null);
})())], null)], null);
});})(keys1590))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$publish)], null)], 0)));
});
pluto.playground.components.dialogs.examples_data = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$header,"General"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Components",cljs.core.cst$kw$hash,"QmadX7aF2tBaLJjEnNP4Bewc9JZbT5CGjZgKX71MCpvaDS"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Queries",cljs.core.cst$kw$hash,"QmRyL2JJ7HoGQKQfHruWuECUp1bAkbxYjprQgFQGsmns1v"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Events",cljs.core.cst$kw$hash,"QmU9rAboLD23SdCbAxtjtfwwzhbVNcq4tNBe1bGhWHYoZN"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$header,"Chat commands"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Hello world",cljs.core.cst$kw$hash,"QmV8JsEA2fBnjstH3MJzK5SgF9F7qNSyKLo2LapYia5pX4"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Ethereum logs tests",cljs.core.cst$kw$hash,"QmaKKKUgDsJKQJ5Q9BJg8V1SRDhhiKbyyQycoExF3eehUZ"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Status Principles",cljs.core.cst$kw$hash,"QmSvd5iehhrkSCQR12hEyJtJzCjEQo1ax8936BnkBhQi5a"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Gfycat",cljs.core.cst$kw$hash,"QmZCf2WJhSm3wfSLK9Mf4mYY4pmxvyE6RhqmsG1SNhNQfq"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Weasel (one of EthSingapore winner)",cljs.core.cst$kw$hash,"QmZaUniGLGfjy4ggdK3Jhk3xq5b2T126zCYLjk5CTc7yiL"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Aragon integration (one of EthSingapore winner)",cljs.core.cst$kw$hash,"QmeEGtHHBn8p11gjCWPh1EzNaojNtDzLqWCdN2XE3auJDV"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$header,"Wallet settings"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Hello world",cljs.core.cst$kw$hash,"QmTgi12UgbAdQgxwCaSJgWcHvtwtaTpoazi5SWRhChKQhK"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Kyber exchange (WIP)",cljs.core.cst$kw$hash,"QmeqDrXwwwesgb6Dj9UurtgX1VoS4h6tApxLTLU1BSD7Vo"], null)], null);
pluto.playground.components.dialogs.example_item = (function pluto$playground$components$dialogs$example_item(p__1597){
var map__1598 = p__1597;
var map__1598__$1 = (((((!((map__1598 == null))))?(((((map__1598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1598):map__1598);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1598__$1,cljs.core.cst$kw$name);
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1598__$1,cljs.core.cst$kw$hash);
var header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1598__$1,cljs.core.cst$kw$header);
if(cljs.core.truth_(header)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$font_DASH_size,(16),cljs.core.cst$kw$font_DASH_weight,cljs.core.cst$kw$bold,cljs.core.cst$kw$padding_DASH_bottom,(10),cljs.core.cst$kw$padding_DASH_top,(10)], null)], null),header], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding,(5),cljs.core.cst$kw$cursor,cljs.core.cst$kw$pointer], null),cljs.core.cst$kw$on_DASH_click,((function (map__1598,map__1598__$1,name,hash,header){
return (function (){
var G__1600 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$open_DASH_example,hash], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1600) : re_frame.core.dispatch.call(null,G__1600));
});})(map__1598,map__1598__$1,name,hash,header))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,(15)], null)], null),name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_size,(12),cljs.core.cst$kw$color,status_im.colors.gray], null)], null),hash], null)], null);
}
});
if(cljs.core.truth_(cljs.core.find_ns(cljs.core.cst$sym$re_DASH_frame$core))){
} else {
goog.require('re_frame.core');
}

pluto.playground.components.dialogs.examples = (function pluto$playground$components$dialogs$examples(){
var show_QMARK_1601 = (function (){var G__1602 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$examples], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__1602) : re_frame.core.subscribe.call(null,G__1602));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (show_QMARK_1601){
return (function (){
var show_QMARK_ = cljs.core.deref(show_QMARK_1601);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.dialogs.Dialog,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$open,cljs.core.boolean$(show_QMARK_),cljs.core.cst$kw$on_DASH_close,((function (show_QMARK_,show_QMARK_1601){
return (function (){
var G__1603 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$examples,null], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1603) : re_frame.core.dispatch.call(null,G__1603));
});})(show_QMARK_,show_QMARK_1601))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.dialogs.DialogTitle,"Extensions examples"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding,(20),cljs.core.cst$kw$overflow,cljs.core.cst$kw$auto], null)], null),(function (){var iter__4523__auto__ = ((function (show_QMARK_,show_QMARK_1601){
return (function pluto$playground$components$dialogs$examples_$_iter__1604(s__1605){
return (new cljs.core.LazySeq(null,((function (show_QMARK_,show_QMARK_1601){
return (function (){
var s__1605__$1 = s__1605;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__1605__$1);
if(temp__5720__auto__){
var s__1605__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1605__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__1605__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__1607 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__1606 = (0);
while(true){
if((i__1606 < size__4522__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__1606);
cljs.core.chunk_append(b__1607,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.dialogs.example_item,item], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,item], null)));

var G__1610 = (i__1606 + (1));
i__1606 = G__1610;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1607),pluto$playground$components$dialogs$examples_$_iter__1604(cljs.core.chunk_rest(s__1605__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1607),null);
}
} else {
var item = cljs.core.first(s__1605__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.dialogs.example_item,item], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,item], null)),pluto$playground$components$dialogs$examples_$_iter__1604(cljs.core.rest(s__1605__$2)));
}
} else {
return null;
}
break;
}
});})(show_QMARK_,show_QMARK_1601))
,null,null));
});})(show_QMARK_,show_QMARK_1601))
;
return iter__4523__auto__(pluto.playground.components.dialogs.examples_data);
})()], null)], null);
});})(show_QMARK_1601))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$examples)], null)], 0)));
});
if(cljs.core.truth_(cljs.core.find_ns(cljs.core.cst$sym$re_DASH_frame$core))){
} else {
goog.require('re_frame.core');
}

pluto.playground.components.dialogs.app_db_browser = (function pluto$playground$components$dialogs$app_db_browser(){
var browse1612 = (function (){var G__1614 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$browse_DASH_app_DASH_db], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__1614) : re_frame.core.subscribe.call(null,G__1614));
})();
var m1613 = (function (){var G__1615 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$store_SLASH_all], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__1615) : re_frame.core.subscribe.call(null,G__1615));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (browse1612,m1613){
return (function (){
var browse = cljs.core.deref(browse1612);
var m = cljs.core.deref(m1613);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.dialogs.Dialog,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$open,cljs.core.boolean$(browse),cljs.core.cst$kw$on_DASH_close,((function (browse,m,browse1612,m1613){
return (function (){
var G__1616 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$browse_DASH_app_DASH_db,false], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1616) : re_frame.core.dispatch.call(null,G__1616));
});})(browse,m,browse1612,m1613))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.dialogs.DialogTitle,"Edit local app-db"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$padding,(20),cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$min_DASH_width,(500),cljs.core.cst$kw$height,"80vh"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.source.editor2,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$content,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1617_1624 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1618_1625 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1619_1626 = true;
var _STAR_print_fn_STAR__temp_val__1620_1627 = ((function (_STAR_print_newline_STAR__orig_val__1617_1624,_STAR_print_fn_STAR__orig_val__1618_1625,_STAR_print_newline_STAR__temp_val__1619_1626,sb__4661__auto__,browse,m,browse1612,m1613){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__1617_1624,_STAR_print_fn_STAR__orig_val__1618_1625,_STAR_print_newline_STAR__temp_val__1619_1626,sb__4661__auto__,browse,m,browse1612,m1613))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1619_1626;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1620_1627;

try{fipp.edn.pprint.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = m;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1618_1625;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1617_1624;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})(),cljs.core.cst$kw$on_DASH_change,((function (browse,m,browse1612,m1613){
return (function (p1__1611_SHARP_){
var G__1621 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_set_DASH_app_DASH_db,clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(p1__1611_SHARP_)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1621) : re_frame.core.dispatch.call(null,G__1621));
});})(browse,m,browse1612,m1613))
], null)], null)], null)], null);
});})(browse1612,m1613))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$app_DASH_db_DASH_browser)], null)], 0)));
});
pluto.playground.components.dialogs.set_properties = (function pluto$playground$components$dialogs$set_properties(id,s){
try{var G__1629 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_set_DASH_properties,id,clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(s)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1629) : re_frame.core.dispatch.call(null,G__1629));
}catch (e1628){if((e1628 instanceof Error)){
var _ = e1628;
return null;
} else {
throw e1628;

}
}});
if(cljs.core.truth_(cljs.core.find_ns(cljs.core.cst$sym$re_DASH_frame$core))){
} else {
goog.require('re_frame.core');
}

pluto.playground.components.dialogs.properties_browser = (function pluto$playground$components$dialogs$properties_browser(){
var browse1631 = (function (){var G__1633 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$browse_DASH_properties], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__1633) : re_frame.core.subscribe.call(null,G__1633));
})();
var selection1632 = (function (){var G__1634 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_selection], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__1634) : re_frame.core.subscribe.call(null,G__1634));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (browse1631,selection1632){
return (function (){
var browse = cljs.core.deref(browse1631);
var selection = cljs.core.deref(selection1632);
var m = cljs.core.deref((function (){var G__1635 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_properties,selection], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__1635) : re_frame.core.subscribe.call(null,G__1635));
})());
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.dialogs.Dialog,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$open,cljs.core.boolean$(browse),cljs.core.cst$kw$on_DASH_close,((function (m,browse,selection,browse1631,selection1632){
return (function (){
var G__1636 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$browse_DASH_properties,false], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1636) : re_frame.core.dispatch.call(null,G__1636));
});})(m,browse,selection,browse1631,selection1632))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.dialogs.DialogTitle,"Edit properties"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$padding,(20),cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$min_DASH_width,(500),cljs.core.cst$kw$height,"80vh"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.source.editor2,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$content,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1637_1643 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1638_1644 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1639_1645 = true;
var _STAR_print_fn_STAR__temp_val__1640_1646 = ((function (_STAR_print_newline_STAR__orig_val__1637_1643,_STAR_print_fn_STAR__orig_val__1638_1644,_STAR_print_newline_STAR__temp_val__1639_1645,sb__4661__auto__,m,browse,selection,browse1631,selection1632){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__1637_1643,_STAR_print_fn_STAR__orig_val__1638_1644,_STAR_print_newline_STAR__temp_val__1639_1645,sb__4661__auto__,m,browse,selection,browse1631,selection1632))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1639_1645;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1640_1646;

try{fipp.edn.pprint.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = m;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1638_1644;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1637_1643;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})(),cljs.core.cst$kw$on_DASH_change,((function (m,browse,selection,browse1631,selection1632){
return (function (p1__1630_SHARP_){
return pluto.playground.components.dialogs.set_properties(selection,p1__1630_SHARP_);
});})(m,browse,selection,browse1631,selection1632))
], null)], null)], null)], null);
});})(browse1631,selection1632))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$properties_DASH_browser)], null)], 0)));
});
if(cljs.core.truth_(cljs.core.find_ns(cljs.core.cst$sym$re_DASH_frame$core))){
} else {
goog.require('re_frame.core');
}

pluto.playground.components.dialogs.selection_screen = (function pluto$playground$components$dialogs$selection_screen(){
var keys1647 = (function (){var G__1648 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$selection_DASH_screen], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__1648) : re_frame.core.subscribe.call(null,G__1648));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (keys1647){
return (function (){
var map__1649 = cljs.core.deref(keys1647);
var map__1649__$1 = (((((!((map__1649 == null))))?(((((map__1649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1649):map__1649);
var params = map__1649__$1;
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1649__$1,cljs.core.cst$kw$items);
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1649__$1,cljs.core.cst$kw$render);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1649__$1,cljs.core.cst$kw$title);
var extractor_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1649__$1,cljs.core.cst$kw$extractor_DASH_key);
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1649__$1,cljs.core.cst$kw$on_DASH_select);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.dialogs.Dialog,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$open,(!((params == null))),cljs.core.cst$kw$on_DASH_close,((function (map__1649,map__1649__$1,params,items,render,title,extractor_key,on_select,keys1647){
return (function (){
var G__1651 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$selection_DASH_screen,null], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1651) : re_frame.core.dispatch.call(null,G__1651));
});})(map__1649,map__1649__$1,params,items,render,title,extractor_key,on_select,keys1647))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.dialogs.DialogTitle,title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding,(20),cljs.core.cst$kw$overflow,cljs.core.cst$kw$auto], null)], null),(function (){var iter__4523__auto__ = ((function (map__1649,map__1649__$1,params,items,render,title,extractor_key,on_select,keys1647){
return (function pluto$playground$components$dialogs$selection_screen_$_iter__1652(s__1653){
return (new cljs.core.LazySeq(null,((function (map__1649,map__1649__$1,params,items,render,title,extractor_key,on_select,keys1647){
return (function (){
var s__1653__$1 = s__1653;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__1653__$1);
if(temp__5720__auto__){
var s__1653__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1653__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__1653__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__1655 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__1654 = (0);
while(true){
if((i__1654 < size__4522__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__1654);
cljs.core.chunk_append(b__1655,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding,(5),cljs.core.cst$kw$cursor,cljs.core.cst$kw$pointer], null),cljs.core.cst$kw$on_DASH_click,((function (i__1654,item,c__4521__auto__,size__4522__auto__,b__1655,s__1653__$2,temp__5720__auto__,map__1649,map__1649__$1,params,items,render,title,extractor_key,on_select,keys1647){
return (function (){
var G__1656_1660 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$selection_DASH_screen,null], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1656_1660) : re_frame.core.dispatch.call(null,G__1656_1660));

return (on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(item) : on_select.call(null,item));
});})(i__1654,item,c__4521__auto__,size__4522__auto__,b__1655,s__1653__$2,temp__5720__auto__,map__1649,map__1649__$1,params,items,render,title,extractor_key,on_select,keys1647))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [render,item], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,item], null)));

var G__1661 = (i__1654 + (1));
i__1654 = G__1661;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1655),pluto$playground$components$dialogs$selection_screen_$_iter__1652(cljs.core.chunk_rest(s__1653__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1655),null);
}
} else {
var item = cljs.core.first(s__1653__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding,(5),cljs.core.cst$kw$cursor,cljs.core.cst$kw$pointer], null),cljs.core.cst$kw$on_DASH_click,((function (item,s__1653__$2,temp__5720__auto__,map__1649,map__1649__$1,params,items,render,title,extractor_key,on_select,keys1647){
return (function (){
var G__1657_1662 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$selection_DASH_screen,null], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1657_1662) : re_frame.core.dispatch.call(null,G__1657_1662));

return (on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(item) : on_select.call(null,item));
});})(item,s__1653__$2,temp__5720__auto__,map__1649,map__1649__$1,params,items,render,title,extractor_key,on_select,keys1647))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [render,item], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,item], null)),pluto$playground$components$dialogs$selection_screen_$_iter__1652(cljs.core.rest(s__1653__$2)));
}
} else {
return null;
}
break;
}
});})(map__1649,map__1649__$1,params,items,render,title,extractor_key,on_select,keys1647))
,null,null));
});})(map__1649,map__1649__$1,params,items,render,title,extractor_key,on_select,keys1647))
;
return iter__4523__auto__(items);
})()], null)], null);
});})(keys1647))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$selection_DASH_screen)], null)], 0)));
});
pluto.playground.components.dialogs.dialogs = (function pluto$playground$components$dialogs$dialogs(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.dialogs.publish], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.dialogs.examples], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.dialogs.app_db_browser], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.dialogs.properties_browser], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.dialogs.selection_screen], null)], null);
});
