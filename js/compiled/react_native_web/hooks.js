// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('react_native_web.hooks');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('react_native_web.react');
goog.require('status_im.colors');
goog.require('re_frame.core');
goog.require('pluto.core');
goog.require('clojure.string');
react_native_web.hooks.wallet_settings_hook = (function react_native_web$hooks$wallet_settings_hook(id,p__3535,props){
var map__3536 = p__3535;
var map__3536__$1 = (((((!((map__3536 == null))))?(((((map__3536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3536):map__3536);
var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3536__$1,cljs.core.cst$kw$view);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,props], null)], null);
});
react_native_web.hooks.profile_settings_hook = (function react_native_web$hooks$profile_settings_hook(id,p__3538,props){
var map__3539 = p__3538;
var map__3539__$1 = (((((!((map__3539 == null))))?(((((map__3539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3539):map__3539);
var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3539__$1,cljs.core.cst$kw$view);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,props], null)], null);
});
react_native_web.hooks.message_container = (function react_native_web$hooks$message_container(preview,outgoing){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$margin_DASH_top,(20),cljs.core.cst$kw$flex_DASH_direction,(cljs.core.truth_(outgoing)?cljs.core.cst$kw$row_DASH_reverse:cljs.core.cst$kw$row),cljs.core.cst$kw$align_DASH_self,(cljs.core.truth_(outgoing)?cljs.core.cst$kw$flex_DASH_end:cljs.core.cst$kw$flex_DASH_start),cljs.core.cst$kw$align_DASH_items,(cljs.core.truth_(outgoing)?cljs.core.cst$kw$flex_DASH_end:cljs.core.cst$kw$flex_DASH_start)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(outgoing)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,(64)], null):new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_right,(64)], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column,cljs.core.cst$kw$padding_DASH_left,(8),cljs.core.cst$kw$padding_DASH_right,(8),cljs.core.cst$kw$align_DASH_items,(cljs.core.truth_(outgoing)?cljs.core.cst$kw$flex_DASH_end:cljs.core.cst$kw$flex_DASH_start)], null)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex_DASH_direction,(cljs.core.truth_(outgoing)?cljs.core.cst$kw$row_DASH_reverse:cljs.core.cst$kw$row)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$padding_DASH_vertical,(6),cljs.core.cst$kw$padding_DASH_horizontal,(12),cljs.core.cst$kw$border_DASH_radius,(8),cljs.core.cst$kw$padding_DASH_top,(12),cljs.core.cst$kw$padding_DASH_bottom,(10),cljs.core.cst$kw$background_DASH_color,(cljs.core.truth_(outgoing)?status_im.colors.blue:status_im.colors.blue_light)], null)], null),preview], null)], null)], null)], null)], null);
});
react_native_web.hooks.input_container = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$row,cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$flex_DASH_end,cljs.core.cst$kw$padding_DASH_left,(14)], null);
react_native_web.hooks.send_message_container = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$margin_DASH_left,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$padding,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$margin_DASH_bottom,cljs.core.cst$kw$height,cljs.core.cst$kw$margin],[cljs.core.cst$kw$center,(8),status_im.colors.blue,(30),(4),cljs.core.cst$kw$center,(15),(11),(30),(10)]);
react_native_web.hooks.send_message_icon = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$height,(22),cljs.core.cst$kw$width,(22)], null);
react_native_web.hooks.input_root = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$padding_DASH_top,(8),cljs.core.cst$kw$padding_DASH_bottom,(8),cljs.core.cst$kw$flex,(1)], null);
react_native_web.hooks.input_animated = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$row,cljs.core.cst$kw$flex_DASH_grow,(1),cljs.core.cst$kw$min_DASH_height,(36)], null);
react_native_web.hooks.rand_str = (function react_native_web$hooks$rand_str(len){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take.cljs$core$IFn$_invoke$arity$2(len,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.char$((cljs.core.rand.cljs$core$IFn$_invoke$arity$1((26)) + (65)));
}))));
});
if(cljs.core.truth_(cljs.core.find_ns(cljs.core.cst$sym$re_DASH_frame$core))){
} else {
goog.require('re_frame.core');
}

react_native_web.hooks.chat_view = (function react_native_web$hooks$chat_view(preview,parameters,command_id,props,on_send,on_send_sync){
var keys3543 = (function (){var G__3544 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$extension_DASH_props], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__3544) : re_frame.core.subscribe.call(null,G__3544));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (keys3543){
return (function (preview__$1,parameters__$1,command_id__$1,props__$1,on_send__$1,on_send_sync__$1){
var map__3545 = cljs.core.deref(keys3543);
var map__3545__$1 = (((((!((map__3545 == null))))?(((((map__3545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3545):map__3545);
var messages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3545__$1,cljs.core.cst$kw$messages);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3545__$1,cljs.core.cst$kw$params);
var suggestion_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3545__$1,cljs.core.cst$kw$suggestion_DASH_id);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,(1)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.scroll_view(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$flex,(1),cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$white], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,(function (){var iter__4523__auto__ = ((function (map__3545,map__3545__$1,messages,params,suggestion_id,keys3543){
return (function react_native_web$hooks$chat_view_$_iter__3547(s__3548){
return (new cljs.core.LazySeq(null,((function (map__3545,map__3545__$1,messages,params,suggestion_id,keys3543){
return (function (){
var s__3548__$1 = s__3548;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__3548__$1);
if(temp__5457__auto__){
var s__3548__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__3548__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__3548__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__3550 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__3549 = (0);
while(true){
if((i__3549 < size__4522__auto__)){
var map__3551 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__3549);
var map__3551__$1 = (((((!((map__3551 == null))))?(((((map__3551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3551):map__3551);
var message = map__3551__$1;
var plain_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3551__$1,cljs.core.cst$kw$plain_DASH_message);
cljs.core.chunk_append(b__3550,(cljs.core.truth_(plain_message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.hooks.message_container,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$max_DASH_width,(200),cljs.core.cst$kw$color,cljs.core.cst$kw$white], null)], null),plain_message], null),true], null):(function (){var m = ((function (i__3549,map__3551,map__3551__$1,message,plain_message,c__4521__auto__,size__4522__auto__,b__3550,s__3548__$2,temp__5457__auto__,map__3545,map__3545__$1,messages,params,suggestion_id,keys3543){
return (function (out_QMARK_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$outgoing,out_QMARK_], null),message,props__$1], 0));
});})(i__3549,map__3551,map__3551__$1,message,plain_message,c__4521__auto__,size__4522__auto__,b__3550,s__3548__$2,temp__5457__auto__,map__3545,map__3545__$1,messages,params,suggestion_id,keys3543))
;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.hooks.message_container,(cljs.core.truth_(preview__$1)?(function (){var G__3553 = m(false);
return (preview__$1.cljs$core$IFn$_invoke$arity$1 ? preview__$1.cljs$core$IFn$_invoke$arity$1(G__3553) : preview__$1.call(null,G__3553));
})():null),false], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.hooks.message_container,(cljs.core.truth_(preview__$1)?(function (){var G__3554 = m(true);
return (preview__$1.cljs$core$IFn$_invoke$arity$1 ? preview__$1.cljs$core$IFn$_invoke$arity$1(G__3554) : preview__$1.call(null,G__3554));
})():null),true], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),cljs.core.str.cljs$core$IFn$_invoke$arity$1(react_native_web.hooks.rand_str((10)))].join('')], null));
})()));

var G__3580 = (i__3549 + (1));
i__3549 = G__3580;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__3550),react_native_web$hooks$chat_view_$_iter__3547(cljs.core.chunk_rest(s__3548__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__3550),null);
}
} else {
var map__3555 = cljs.core.first(s__3548__$2);
var map__3555__$1 = (((((!((map__3555 == null))))?(((((map__3555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3555):map__3555);
var message = map__3555__$1;
var plain_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3555__$1,cljs.core.cst$kw$plain_DASH_message);
return cljs.core.cons((cljs.core.truth_(plain_message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.hooks.message_container,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$max_DASH_width,(200),cljs.core.cst$kw$color,cljs.core.cst$kw$white], null)], null),plain_message], null),true], null):(function (){var m = ((function (map__3555,map__3555__$1,message,plain_message,s__3548__$2,temp__5457__auto__,map__3545,map__3545__$1,messages,params,suggestion_id,keys3543){
return (function (out_QMARK_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$outgoing,out_QMARK_], null),message,props__$1], 0));
});})(map__3555,map__3555__$1,message,plain_message,s__3548__$2,temp__5457__auto__,map__3545,map__3545__$1,messages,params,suggestion_id,keys3543))
;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.hooks.message_container,(cljs.core.truth_(preview__$1)?(function (){var G__3557 = m(false);
return (preview__$1.cljs$core$IFn$_invoke$arity$1 ? preview__$1.cljs$core$IFn$_invoke$arity$1(G__3557) : preview__$1.call(null,G__3557));
})():null),false], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.hooks.message_container,(cljs.core.truth_(preview__$1)?(function (){var G__3558 = m(true);
return (preview__$1.cljs$core$IFn$_invoke$arity$1 ? preview__$1.cljs$core$IFn$_invoke$arity$1(G__3558) : preview__$1.call(null,G__3558));
})():null),true], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),cljs.core.str.cljs$core$IFn$_invoke$arity$1(react_native_web.hooks.rand_str((10)))].join('')], null));
})()),react_native_web$hooks$chat_view_$_iter__3547(cljs.core.rest(s__3548__$2)));
}
} else {
return null;
}
break;
}
});})(map__3545,map__3545__$1,messages,params,suggestion_id,keys3543))
,null,null));
});})(map__3545,map__3545__$1,messages,params,suggestion_id,keys3543))
;
return iter__4523__auto__(messages);
})()], null)], null),(function (){var temp__5457__auto__ = cljs.core.some(((function (map__3545,map__3545__$1,messages,params,suggestion_id,keys3543){
return (function (p1__3541_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__3541_SHARP_))){
return cljs.core.cst$kw$suggestions.cljs$core$IFn$_invoke$arity$1(p1__3541_SHARP_);
} else {
return null;
}
});})(map__3545,map__3545__$1,messages,params,suggestion_id,keys3543))
,parameters__$1);
if(cljs.core.truth_(temp__5457__auto__)){
var suggestion = temp__5457__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_height,(300)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [suggestion], null)], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,react_native_web.hooks.input_container], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,react_native_web.hooks.input_root], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,react_native_web.hooks.input_animated], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$border_DASH_width,(1),cljs.core.cst$kw$border_DASH_color,cljs.core.cst$kw$red], null)], null),["/",cljs.core.name(command_id__$1)," "].join('')], null),(function (){var iter__4523__auto__ = ((function (map__3545,map__3545__$1,messages,params,suggestion_id,keys3543){
return (function react_native_web$hooks$chat_view_$_iter__3559(s__3560){
return (new cljs.core.LazySeq(null,((function (map__3545,map__3545__$1,messages,params,suggestion_id,keys3543){
return (function (){
var s__3560__$1 = s__3560;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__3560__$1);
if(temp__5457__auto__){
var s__3560__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__3560__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__3560__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__3562 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__3561 = (0);
while(true){
if((i__3561 < size__4522__auto__)){
var map__3563 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__3561);
var map__3563__$1 = (((((!((map__3563 == null))))?(((((map__3563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3563):map__3563);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3563__$1,cljs.core.cst$kw$placeholder);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3563__$1,cljs.core.cst$kw$id);
cljs.core.chunk_append(b__3562,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text_input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$placeholder,placeholder,cljs.core.cst$kw$value,(function (){var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,id);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})(),cljs.core.cst$kw$on_DASH_change_DASH_text,((function (i__3561,map__3563,map__3563__$1,placeholder,id,c__4521__auto__,size__4522__auto__,b__3562,s__3560__$2,temp__5457__auto__,map__3545,map__3545__$1,messages,params,suggestion_id,keys3543){
return (function (p1__3542_SHARP_){
var G__3565 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$params,id], null),p1__3542_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__3565) : re_frame.core.dispatch.call(null,G__3565));
});})(i__3561,map__3563,map__3563__$1,placeholder,id,c__4521__auto__,size__4522__auto__,b__3562,s__3560__$2,temp__5457__auto__,map__3545,map__3545__$1,messages,params,suggestion_id,keys3543))
,cljs.core.cst$kw$on_DASH_focus,((function (i__3561,map__3563,map__3563__$1,placeholder,id,c__4521__auto__,size__4522__auto__,b__3562,s__3560__$2,temp__5457__auto__,map__3545,map__3545__$1,messages,params,suggestion_id,keys3543){
return (function (){
var G__3566 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$suggestion_DASH_id], null),id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__3566) : re_frame.core.dispatch.call(null,G__3566));
});})(i__3561,map__3563,map__3563__$1,placeholder,id,c__4521__auto__,size__4522__auto__,b__3562,s__3560__$2,temp__5457__auto__,map__3545,map__3545__$1,messages,params,suggestion_id,keys3543))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_right,(5),cljs.core.cst$kw$width,(50)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(placeholder)].join('')], null)));

var G__3581 = (i__3561 + (1));
i__3561 = G__3581;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__3562),react_native_web$hooks$chat_view_$_iter__3559(cljs.core.chunk_rest(s__3560__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__3562),null);
}
} else {
var map__3567 = cljs.core.first(s__3560__$2);
var map__3567__$1 = (((((!((map__3567 == null))))?(((((map__3567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3567):map__3567);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3567__$1,cljs.core.cst$kw$placeholder);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3567__$1,cljs.core.cst$kw$id);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text_input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$placeholder,placeholder,cljs.core.cst$kw$value,(function (){var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,id);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})(),cljs.core.cst$kw$on_DASH_change_DASH_text,((function (map__3567,map__3567__$1,placeholder,id,s__3560__$2,temp__5457__auto__,map__3545,map__3545__$1,messages,params,suggestion_id,keys3543){
return (function (p1__3542_SHARP_){
var G__3569 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$params,id], null),p1__3542_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__3569) : re_frame.core.dispatch.call(null,G__3569));
});})(map__3567,map__3567__$1,placeholder,id,s__3560__$2,temp__5457__auto__,map__3545,map__3545__$1,messages,params,suggestion_id,keys3543))
,cljs.core.cst$kw$on_DASH_focus,((function (map__3567,map__3567__$1,placeholder,id,s__3560__$2,temp__5457__auto__,map__3545,map__3545__$1,messages,params,suggestion_id,keys3543){
return (function (){
var G__3570 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$suggestion_DASH_id], null),id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__3570) : re_frame.core.dispatch.call(null,G__3570));
});})(map__3567,map__3567__$1,placeholder,id,s__3560__$2,temp__5457__auto__,map__3545,map__3545__$1,messages,params,suggestion_id,keys3543))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_right,(5),cljs.core.cst$kw$width,(50)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(placeholder)].join('')], null)),react_native_web$hooks$chat_view_$_iter__3559(cljs.core.rest(s__3560__$2)));
}
} else {
return null;
}
break;
}
});})(map__3545,map__3545__$1,messages,params,suggestion_id,keys3543))
,null,null));
});})(map__3545,map__3545__$1,messages,params,suggestion_id,keys3543))
;
return iter__4523__auto__(parameters__$1);
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.touchable_highlight(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_press,((function (map__3545,map__3545__$1,messages,params,suggestion_id,keys3543){
return (function (){
if(cljs.core.truth_(on_send_sync__$1)){
var G__3571_3582 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$content,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,params], null)], null);
(on_send_sync__$1.cljs$core$IFn$_invoke$arity$1 ? on_send_sync__$1.cljs$core$IFn$_invoke$arity$1(G__3571_3582) : on_send_sync__$1.call(null,G__3571_3582));

var G__3572_3583 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$suggestion_DASH_id], null),null], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__3572_3583) : re_frame.core.dispatch.call(null,G__3572_3583));

var G__3573 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$params], null),null], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__3573) : re_frame.core.dispatch.call(null,G__3573));
} else {
if(cljs.core.truth_(on_send__$1)){
var G__3574_3584 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$content,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,params], null)], null);
(on_send__$1.cljs$core$IFn$_invoke$arity$1 ? on_send__$1.cljs$core$IFn$_invoke$arity$1(G__3574_3584) : on_send__$1.call(null,G__3574_3584));
} else {
}

var G__3575_3585 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$suggestion_DASH_id], null),null], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__3575_3585) : re_frame.core.dispatch.call(null,G__3575_3585));

var G__3576_3586 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$params], null),null], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__3576_3586) : re_frame.core.dispatch.call(null,G__3576_3586));

var G__3577 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$messages], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(messages,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$content,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,params], null)], null))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__3577) : re_frame.core.dispatch.call(null,G__3577));
}
});})(map__3545,map__3545__$1,messages,params,suggestion_id,keys3543))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,react_native_web.hooks.send_message_container], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$white], null)], null),">"], null)], null)], null)], null)], null);
});})(keys3543))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$chat_DASH_view)], null)], 0)));
});
react_native_web.hooks.command_hook = (function react_native_web$hooks$command_hook(id,p__3587,props){
var map__3588 = p__3587;
var map__3588__$1 = (((((!((map__3588 == null))))?(((((map__3588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3588):map__3588);
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3588__$1,cljs.core.cst$kw$parameters);
var preview = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3588__$1,cljs.core.cst$kw$preview);
var on_send = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3588__$1,cljs.core.cst$kw$on_DASH_send);
var on_send_sync = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3588__$1,cljs.core.cst$kw$on_DASH_send_DASH_sync);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.hooks.chat_view,preview,parameters,id,props,on_send,on_send_sync], null);
});
react_native_web.hooks.hook_in = (function react_native_web$hooks$hook_in(id,parsed,p__3590,props){
var map__3591 = p__3590;
var map__3591__$1 = (((((!((map__3591 == null))))?(((((map__3591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3591):map__3591);
var on_installation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3591__$1,cljs.core.cst$kw$on_DASH_installation);
if(cljs.core.truth_(id)){
var hook_id = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(id),/\./));
var type = pluto.core.hook_type(id);
if(cljs.core.truth_(on_installation)){
(on_installation.cljs$core$IFn$_invoke$arity$0 ? on_installation.cljs$core$IFn$_invoke$arity$0() : on_installation.call(null));
} else {
}

var G__3593 = type;
switch (G__3593) {
case "chat.command":
return react_native_web.hooks.command_hook(hook_id,parsed,props);

break;
case "wallet.settings":
return react_native_web.hooks.wallet_settings_hook(hook_id,parsed,props);

break;
case "profile.settings":
return react_native_web.hooks.profile_settings_hook(hook_id,parsed,props);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,["Unknown hook type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')], null);

}
} else {
return null;
}
});
