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
goog.require('pluto.playground.components.material_ui');
goog.require('clojure.string');
pluto.playground.components.dialogs.examples_data = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$header,"General"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Components",cljs.core.cst$kw$hash,"QmadX7aF2tBaLJjEnNP4Bewc9JZbT5CGjZgKX71MCpvaDS"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Queries",cljs.core.cst$kw$hash,"QmRyL2JJ7HoGQKQfHruWuECUp1bAkbxYjprQgFQGsmns1v"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Events",cljs.core.cst$kw$hash,"QmU9rAboLD23SdCbAxtjtfwwzhbVNcq4tNBe1bGhWHYoZN"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$header,"Chat commands"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Hello world",cljs.core.cst$kw$hash,"QmV8JsEA2fBnjstH3MJzK5SgF9F7qNSyKLo2LapYia5pX4"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Ethereum logs tests",cljs.core.cst$kw$hash,"QmaKKKUgDsJKQJ5Q9BJg8V1SRDhhiKbyyQycoExF3eehUZ"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Status Principles",cljs.core.cst$kw$hash,"QmSvd5iehhrkSCQR12hEyJtJzCjEQo1ax8936BnkBhQi5a"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Gfycat",cljs.core.cst$kw$hash,"QmZCf2WJhSm3wfSLK9Mf4mYY4pmxvyE6RhqmsG1SNhNQfq"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Weasel (one of EthSingapore winner)",cljs.core.cst$kw$hash,"QmZaUniGLGfjy4ggdK3Jhk3xq5b2T126zCYLjk5CTc7yiL"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Aragon integration (one of EthSingapore winner)",cljs.core.cst$kw$hash,"QmeEGtHHBn8p11gjCWPh1EzNaojNtDzLqWCdN2XE3auJDV"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$header,"Wallet settings"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Hello world",cljs.core.cst$kw$hash,"QmTgi12UgbAdQgxwCaSJgWcHvtwtaTpoazi5SWRhChKQhK"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Kyber exchange (WIP)",cljs.core.cst$kw$hash,"QmeqDrXwwwesgb6Dj9UurtgX1VoS4h6tApxLTLU1BSD7Vo"], null)], null);
if(cljs.core.truth_(cljs.core.find_ns(cljs.core.cst$sym$re_DASH_frame$core))){
} else {
goog.require('re_frame.core');
}

pluto.playground.components.dialogs.publish = (function pluto$playground$components$dialogs$publish(){
var keys2540 = (function (){var G__2541 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$publish], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2541) : re_frame.core.subscribe.call(null,G__2541));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (keys2540){
return (function (){
var map__2542 = cljs.core.deref(keys2540);
var map__2542__$1 = (((((!((map__2542 == null))))?(((((map__2542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2542):map__2542);
var publish = map__2542__$1;
var in_progress_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2542__$1,cljs.core.cst$kw$in_DASH_progress_QMARK_);
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2542__$1,cljs.core.cst$kw$hash);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.material_ui.Dialog,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$open,(!((publish == null))),cljs.core.cst$kw$on_DASH_close,((function (map__2542,map__2542__$1,publish,in_progress_QMARK_,hash,keys2540){
return (function (){
var G__2544 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$publish,null], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2544) : re_frame.core.dispatch.call(null,G__2544));
});})(map__2542,map__2542__$1,publish,in_progress_QMARK_,hash,keys2540))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.material_ui.DialogTitle,"Publish extension"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,(20)], null)], null),(cljs.core.truth_(in_progress_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.material_ui.CircularProgress], null):(function (){var ext_url = ["https://get.status.im/extension/ipfs@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash),"/"].join('');
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_vertical,(5),cljs.core.cst$kw$font_DASH_weight,cljs.core.cst$kw$bold], null)], null),"Scan QR to install extension"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Open Status -> Press (+) -> Scan QR "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$center], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$margin,(20)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.qr_code(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,ext_url], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_vertical,(5),cljs.core.cst$kw$font_DASH_weight,cljs.core.cst$kw$bold], null)], null),"OR"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_vertical,(5)], null)], null),"share extension",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,(10)], null),cljs.core.cst$kw$href,ext_url], null),"URL"], null)], null)], null)], null);
})())], null)], null);
});})(keys2540))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$publish)], null)], 0)));
});
pluto.playground.components.dialogs.example_item = (function pluto$playground$components$dialogs$example_item(p__2547){
var map__2548 = p__2547;
var map__2548__$1 = (((((!((map__2548 == null))))?(((((map__2548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2548):map__2548);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2548__$1,cljs.core.cst$kw$name);
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2548__$1,cljs.core.cst$kw$hash);
var header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2548__$1,cljs.core.cst$kw$header);
if(cljs.core.truth_(header)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$font_DASH_size,(16),cljs.core.cst$kw$font_DASH_weight,cljs.core.cst$kw$bold,cljs.core.cst$kw$padding_DASH_bottom,(10),cljs.core.cst$kw$padding_DASH_top,(10)], null)], null),header], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding,(5),cljs.core.cst$kw$cursor,cljs.core.cst$kw$pointer], null),cljs.core.cst$kw$on_DASH_click,((function (map__2548,map__2548__$1,name,hash,header){
return (function (){
var G__2550 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$open_DASH_example,hash], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2550) : re_frame.core.dispatch.call(null,G__2550));
});})(map__2548,map__2548__$1,name,hash,header))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,(15)], null)], null),name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_size,(12),cljs.core.cst$kw$color,status_im.colors.gray], null)], null),hash], null)], null);
}
});
if(cljs.core.truth_(cljs.core.find_ns(cljs.core.cst$sym$re_DASH_frame$core))){
} else {
goog.require('re_frame.core');
}

pluto.playground.components.dialogs.examples = (function pluto$playground$components$dialogs$examples(){
var show_QMARK_2551 = (function (){var G__2552 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$examples], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2552) : re_frame.core.subscribe.call(null,G__2552));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (show_QMARK_2551){
return (function (){
var show_QMARK_ = cljs.core.deref(show_QMARK_2551);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.material_ui.Dialog,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$open,cljs.core.boolean$(show_QMARK_),cljs.core.cst$kw$on_DASH_close,((function (show_QMARK_,show_QMARK_2551){
return (function (){
var G__2553 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$examples,null], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2553) : re_frame.core.dispatch.call(null,G__2553));
});})(show_QMARK_,show_QMARK_2551))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.material_ui.DialogTitle,"Extensions examples"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding,(20),cljs.core.cst$kw$overflow,cljs.core.cst$kw$auto], null)], null),(function (){var iter__4523__auto__ = ((function (show_QMARK_,show_QMARK_2551){
return (function pluto$playground$components$dialogs$examples_$_iter__2554(s__2555){
return (new cljs.core.LazySeq(null,((function (show_QMARK_,show_QMARK_2551){
return (function (){
var s__2555__$1 = s__2555;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__2555__$1);
if(temp__5457__auto__){
var s__2555__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__2555__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__2555__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__2557 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__2556 = (0);
while(true){
if((i__2556 < size__4522__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__2556);
cljs.core.chunk_append(b__2557,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.dialogs.example_item,item], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,item], null)));

var G__2560 = (i__2556 + (1));
i__2556 = G__2560;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__2557),pluto$playground$components$dialogs$examples_$_iter__2554(cljs.core.chunk_rest(s__2555__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__2557),null);
}
} else {
var item = cljs.core.first(s__2555__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.dialogs.example_item,item], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,item], null)),pluto$playground$components$dialogs$examples_$_iter__2554(cljs.core.rest(s__2555__$2)));
}
} else {
return null;
}
break;
}
});})(show_QMARK_,show_QMARK_2551))
,null,null));
});})(show_QMARK_,show_QMARK_2551))
;
return iter__4523__auto__(pluto.playground.components.dialogs.examples_data);
})()], null)], null);
});})(show_QMARK_2551))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$examples)], null)], 0)));
});
if(cljs.core.truth_(cljs.core.find_ns(cljs.core.cst$sym$re_DASH_frame$core))){
} else {
goog.require('re_frame.core');
}

pluto.playground.components.dialogs.app_db_browser = (function pluto$playground$components$dialogs$app_db_browser(){
var browse2562 = (function (){var G__2564 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$browse_DASH_app_DASH_db], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2564) : re_frame.core.subscribe.call(null,G__2564));
})();
var m2563 = (function (){var G__2565 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$store_SLASH_all], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2565) : re_frame.core.subscribe.call(null,G__2565));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (browse2562,m2563){
return (function (){
var browse = cljs.core.deref(browse2562);
var m = cljs.core.deref(m2563);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.material_ui.Dialog,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$open,cljs.core.boolean$(browse),cljs.core.cst$kw$on_DASH_close,((function (browse,m,browse2562,m2563){
return (function (){
var G__2566 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$browse_DASH_app_DASH_db,false], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2566) : re_frame.core.dispatch.call(null,G__2566));
});})(browse,m,browse2562,m2563))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.material_ui.DialogTitle,"Edit local app-db"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$padding,(20),cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$min_DASH_width,(500),cljs.core.cst$kw$height,"80vh"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.source.editor2,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$content,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__2567_2574 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__2568_2575 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__2569_2576 = true;
var _STAR_print_fn_STAR__temp_val__2570_2577 = ((function (_STAR_print_newline_STAR__orig_val__2567_2574,_STAR_print_fn_STAR__orig_val__2568_2575,_STAR_print_newline_STAR__temp_val__2569_2576,sb__4661__auto__,browse,m,browse2562,m2563){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__2567_2574,_STAR_print_fn_STAR__orig_val__2568_2575,_STAR_print_newline_STAR__temp_val__2569_2576,sb__4661__auto__,browse,m,browse2562,m2563))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__2569_2576;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__2570_2577;

try{fipp.edn.pprint.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = m;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__2568_2575;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__2567_2574;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})(),cljs.core.cst$kw$on_DASH_change,((function (browse,m,browse2562,m2563){
return (function (p1__2561_SHARP_){
var G__2571 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_set_DASH_app_DASH_db,clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(p1__2561_SHARP_)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2571) : re_frame.core.dispatch.call(null,G__2571));
});})(browse,m,browse2562,m2563))
], null)], null)], null)], null);
});})(browse2562,m2563))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$app_DASH_db_DASH_browser)], null)], 0)));
});
if(cljs.core.truth_(cljs.core.find_ns(cljs.core.cst$sym$re_DASH_frame$core))){
} else {
goog.require('re_frame.core');
}

pluto.playground.components.dialogs.add_edn_item = (function pluto$playground$components$dialogs$add_edn_item(){
var keys2581 = (function (){var G__2582 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$add_DASH_edn_DASH_item], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2582) : re_frame.core.subscribe.call(null,G__2582));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (keys2581){
return (function (){
var map__2583 = cljs.core.deref(keys2581);
var map__2583__$1 = (((((!((map__2583 == null))))?(((((map__2583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2583):map__2583);
var item = map__2583__$1;
var item_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2583__$1,cljs.core.cst$kw$item_DASH_name);
var item_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2583__$1,cljs.core.cst$kw$item_DASH_type);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.material_ui.Dialog,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$open,cljs.core.boolean$(item),cljs.core.cst$kw$on_DASH_close,((function (map__2583,map__2583__$1,item,item_name,item_type,keys2581){
return (function (){
var G__2585 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$add_DASH_edn_DASH_item,null], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2585) : re_frame.core.dispatch.call(null,G__2585));
});})(map__2583,map__2583__$1,item,item_name,item_type,keys2581))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.material_ui.DialogTitle,"Add item"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$padding,(20),cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$min_DASH_width,(500),cljs.core.cst$kw$height,"80vh",cljs.core.cst$kw$flex,(1),cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$row,cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_right,(10)], null)], null),"Name"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.material_ui.Input,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_change,((function (map__2583,map__2583__$1,item,item_name,item_type,keys2581){
return (function (p1__2578_SHARP_){
var G__2586 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$add_DASH_edn_DASH_item,cljs.core.cst$kw$item_DASH_name], null),p1__2578_SHARP_.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2586) : re_frame.core.dispatch.call(null,G__2586));
});})(map__2583,map__2583__$1,item,item_name,item_type,keys2581))
], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$row,cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center,cljs.core.cst$kw$margin_DASH_top,(10)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_right,(10)], null)], null),"Type"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.material_ui.select,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_change,((function (map__2583,map__2583__$1,item,item_name,item_type,keys2581){
return (function (p1__2580_SHARP_,p2__2579_SHARP_){
var G__2587 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$add_DASH_edn_DASH_item,cljs.core.cst$kw$item_DASH_type], null),p2__2579_SHARP_.key], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2587) : re_frame.core.dispatch.call(null,G__2587));
});})(map__2583,map__2583__$1,item,item_name,item_type,keys2581))
,cljs.core.cst$kw$selected,item_type,cljs.core.cst$kw$options,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,"views/",cljs.core.cst$kw$label,"view"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,"views/chat",cljs.core.cst$kw$label,"chat command view"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,"events/",cljs.core.cst$kw$label,"event"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,"hooks/chat.command.",cljs.core.cst$kw$label,"chat command hook"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,"hooks/wallet.settings.",cljs.core.cst$kw$label,"wallet settings hook"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,"hooks/profile.settings.",cljs.core.cst$kw$label,"profile settings hook"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$row,cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$flex_DASH_end,cljs.core.cst$kw$margin_DASH_top,(20)], null)], null),(cljs.core.truth_((function (){var and__4120__auto__ = item_name;
if(cljs.core.truth_(and__4120__auto__)){
return (!(clojure.string.blank_QMARK_(item_name)));
} else {
return and__4120__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.material_ui.button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,"primary",cljs.core.cst$kw$variant,"contained",cljs.core.cst$kw$on_DASH_click,((function (map__2583,map__2583__$1,item,item_name,item_type,keys2581){
return (function (){
var G__2588 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_add_DASH_edn_DASH_item], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2588) : re_frame.core.dispatch.call(null,G__2588));
});})(map__2583,map__2583__$1,item,item_name,item_type,keys2581))
], null),"Add"], null):null)], null)], null)], null);
});})(keys2581))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$add_DASH_edn_DASH_item)], null)], 0)));
});
pluto.playground.components.dialogs.set_properties = (function pluto$playground$components$dialogs$set_properties(id,s){
try{var G__2592 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_set_DASH_properties,id,clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(s)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2592) : re_frame.core.dispatch.call(null,G__2592));
}catch (e2591){if((e2591 instanceof Error)){
var _ = e2591;
return null;
} else {
throw e2591;

}
}});
if(cljs.core.truth_(cljs.core.find_ns(cljs.core.cst$sym$re_DASH_frame$core))){
} else {
goog.require('re_frame.core');
}

pluto.playground.components.dialogs.properties_browser = (function pluto$playground$components$dialogs$properties_browser(){
var browse2594 = (function (){var G__2596 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$browse_DASH_properties], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2596) : re_frame.core.subscribe.call(null,G__2596));
})();
var selection2595 = (function (){var G__2597 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_selection], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2597) : re_frame.core.subscribe.call(null,G__2597));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (browse2594,selection2595){
return (function (){
var browse = cljs.core.deref(browse2594);
var selection = cljs.core.deref(selection2595);
var m = cljs.core.deref((function (){var G__2598 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_properties,selection], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2598) : re_frame.core.subscribe.call(null,G__2598));
})());
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.material_ui.Dialog,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$open,cljs.core.boolean$(browse),cljs.core.cst$kw$on_DASH_close,((function (m,browse,selection,browse2594,selection2595){
return (function (){
var G__2599 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$browse_DASH_properties,false], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2599) : re_frame.core.dispatch.call(null,G__2599));
});})(m,browse,selection,browse2594,selection2595))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.material_ui.DialogTitle,"Edit properties"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$padding,(20),cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$min_DASH_width,(500),cljs.core.cst$kw$height,"80vh"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.source.editor2,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$content,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__2600_2606 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__2601_2607 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__2602_2608 = true;
var _STAR_print_fn_STAR__temp_val__2603_2609 = ((function (_STAR_print_newline_STAR__orig_val__2600_2606,_STAR_print_fn_STAR__orig_val__2601_2607,_STAR_print_newline_STAR__temp_val__2602_2608,sb__4661__auto__,m,browse,selection,browse2594,selection2595){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__2600_2606,_STAR_print_fn_STAR__orig_val__2601_2607,_STAR_print_newline_STAR__temp_val__2602_2608,sb__4661__auto__,m,browse,selection,browse2594,selection2595))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__2602_2608;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__2603_2609;

try{fipp.edn.pprint.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = m;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__2601_2607;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__2600_2606;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})(),cljs.core.cst$kw$on_DASH_change,((function (m,browse,selection,browse2594,selection2595){
return (function (p1__2593_SHARP_){
return pluto.playground.components.dialogs.set_properties(selection,p1__2593_SHARP_);
});})(m,browse,selection,browse2594,selection2595))
], null)], null)], null)], null);
});})(browse2594,selection2595))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$properties_DASH_browser)], null)], 0)));
});
if(cljs.core.truth_(cljs.core.find_ns(cljs.core.cst$sym$re_DASH_frame$core))){
} else {
goog.require('re_frame.core');
}

pluto.playground.components.dialogs.selection_screen = (function pluto$playground$components$dialogs$selection_screen(){
var keys2610 = (function (){var G__2611 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$selection_DASH_screen], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2611) : re_frame.core.subscribe.call(null,G__2611));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (keys2610){
return (function (){
var map__2612 = cljs.core.deref(keys2610);
var map__2612__$1 = (((((!((map__2612 == null))))?(((((map__2612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2612):map__2612);
var params = map__2612__$1;
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2612__$1,cljs.core.cst$kw$items);
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2612__$1,cljs.core.cst$kw$render);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2612__$1,cljs.core.cst$kw$title);
var extractor_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2612__$1,cljs.core.cst$kw$extractor_DASH_key);
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2612__$1,cljs.core.cst$kw$on_DASH_select);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.material_ui.Dialog,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$open,(!((params == null))),cljs.core.cst$kw$on_DASH_close,((function (map__2612,map__2612__$1,params,items,render,title,extractor_key,on_select,keys2610){
return (function (){
var G__2614 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$selection_DASH_screen,null], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2614) : re_frame.core.dispatch.call(null,G__2614));
});})(map__2612,map__2612__$1,params,items,render,title,extractor_key,on_select,keys2610))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.material_ui.DialogTitle,title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding,(20),cljs.core.cst$kw$overflow,cljs.core.cst$kw$auto], null)], null),(function (){var iter__4523__auto__ = ((function (map__2612,map__2612__$1,params,items,render,title,extractor_key,on_select,keys2610){
return (function pluto$playground$components$dialogs$selection_screen_$_iter__2615(s__2616){
return (new cljs.core.LazySeq(null,((function (map__2612,map__2612__$1,params,items,render,title,extractor_key,on_select,keys2610){
return (function (){
var s__2616__$1 = s__2616;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__2616__$1);
if(temp__5457__auto__){
var s__2616__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__2616__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__2616__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__2618 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__2617 = (0);
while(true){
if((i__2617 < size__4522__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__2617);
cljs.core.chunk_append(b__2618,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding,(5),cljs.core.cst$kw$cursor,cljs.core.cst$kw$pointer], null),cljs.core.cst$kw$on_DASH_click,((function (i__2617,item,c__4521__auto__,size__4522__auto__,b__2618,s__2616__$2,temp__5457__auto__,map__2612,map__2612__$1,params,items,render,title,extractor_key,on_select,keys2610){
return (function (){
var G__2619_2623 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$selection_DASH_screen,null], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2619_2623) : re_frame.core.dispatch.call(null,G__2619_2623));

return (on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(item) : on_select.call(null,item));
});})(i__2617,item,c__4521__auto__,size__4522__auto__,b__2618,s__2616__$2,temp__5457__auto__,map__2612,map__2612__$1,params,items,render,title,extractor_key,on_select,keys2610))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [render,item], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,item], null)));

var G__2624 = (i__2617 + (1));
i__2617 = G__2624;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__2618),pluto$playground$components$dialogs$selection_screen_$_iter__2615(cljs.core.chunk_rest(s__2616__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__2618),null);
}
} else {
var item = cljs.core.first(s__2616__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding,(5),cljs.core.cst$kw$cursor,cljs.core.cst$kw$pointer], null),cljs.core.cst$kw$on_DASH_click,((function (item,s__2616__$2,temp__5457__auto__,map__2612,map__2612__$1,params,items,render,title,extractor_key,on_select,keys2610){
return (function (){
var G__2620_2625 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$selection_DASH_screen,null], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2620_2625) : re_frame.core.dispatch.call(null,G__2620_2625));

return (on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(item) : on_select.call(null,item));
});})(item,s__2616__$2,temp__5457__auto__,map__2612,map__2612__$1,params,items,render,title,extractor_key,on_select,keys2610))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [render,item], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,item], null)),pluto$playground$components$dialogs$selection_screen_$_iter__2615(cljs.core.rest(s__2616__$2)));
}
} else {
return null;
}
break;
}
});})(map__2612,map__2612__$1,params,items,render,title,extractor_key,on_select,keys2610))
,null,null));
});})(map__2612,map__2612__$1,params,items,render,title,extractor_key,on_select,keys2610))
;
return iter__4523__auto__(items);
})()], null)], null);
});})(keys2610))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$selection_DASH_screen)], null)], 0)));
});
pluto.playground.components.dialogs.dialogs = (function pluto$playground$components$dialogs$dialogs(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.dialogs.publish], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.dialogs.examples], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.dialogs.app_db_browser], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.dialogs.properties_browser], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.dialogs.selection_screen], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.dialogs.add_edn_item], null)], null);
});
