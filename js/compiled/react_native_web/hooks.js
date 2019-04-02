// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('react_native_web.hooks');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('react_native_web.react');
goog.require('status_im.colors');
goog.require('re_frame.core');
goog.require('pluto.core');
goog.require('clojure.string');
react_native_web.hooks.settings_hook = (function react_native_web$hooks$settings_hook(id,p__1721){
var map__1722 = p__1721;
var map__1722__$1 = (((((!((map__1722 == null))))?(((((map__1722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1722):map__1722);
var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1722__$1,cljs.core.cst$kw$view);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [view], null)], null);
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

react_native_web.hooks.chat_view = (function react_native_web$hooks$chat_view(preview,parameters,command_id){
var keys1726 = (function (){var G__1727 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$extension_DASH_props], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__1727) : re_frame.core.subscribe.call(null,G__1727));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (keys1726){
return (function (preview__$1,parameters__$1,command_id__$1){
var map__1728 = cljs.core.deref(keys1726);
var map__1728__$1 = (((((!((map__1728 == null))))?(((((map__1728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1728):map__1728);
var messages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1728__$1,cljs.core.cst$kw$messages);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1728__$1,cljs.core.cst$kw$params);
var suggestion_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1728__$1,cljs.core.cst$kw$suggestion_DASH_id);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,(1)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.scroll_view(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$flex,(1),cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$white], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,(function (){var iter__4523__auto__ = ((function (map__1728,map__1728__$1,messages,params,suggestion_id,keys1726){
return (function react_native_web$hooks$chat_view_$_iter__1730(s__1731){
return (new cljs.core.LazySeq(null,((function (map__1728,map__1728__$1,messages,params,suggestion_id,keys1726){
return (function (){
var s__1731__$1 = s__1731;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__1731__$1);
if(temp__5457__auto__){
var s__1731__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1731__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__1731__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__1733 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__1732 = (0);
while(true){
if((i__1732 < size__4522__auto__)){
var message = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__1732);
cljs.core.chunk_append(b__1733,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.hooks.message_container,(cljs.core.truth_(preview__$1)?(function (){var G__1734 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$outgoing,false], null),message], 0));
return (preview__$1.cljs$core$IFn$_invoke$arity$1 ? preview__$1.cljs$core$IFn$_invoke$arity$1(G__1734) : preview__$1.call(null,G__1734));
})():null),false], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.hooks.message_container,(cljs.core.truth_(preview__$1)?(function (){var G__1735 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$outgoing,true], null),message], 0));
return (preview__$1.cljs$core$IFn$_invoke$arity$1 ? preview__$1.cljs$core$IFn$_invoke$arity$1(G__1735) : preview__$1.call(null,G__1735));
})():null),true], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),cljs.core.str.cljs$core$IFn$_invoke$arity$1(react_native_web.hooks.rand_str((10)))].join('')], null)));

var G__1754 = (i__1732 + (1));
i__1732 = G__1754;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1733),react_native_web$hooks$chat_view_$_iter__1730(cljs.core.chunk_rest(s__1731__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1733),null);
}
} else {
var message = cljs.core.first(s__1731__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.hooks.message_container,(cljs.core.truth_(preview__$1)?(function (){var G__1736 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$outgoing,false], null),message], 0));
return (preview__$1.cljs$core$IFn$_invoke$arity$1 ? preview__$1.cljs$core$IFn$_invoke$arity$1(G__1736) : preview__$1.call(null,G__1736));
})():null),false], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.hooks.message_container,(cljs.core.truth_(preview__$1)?(function (){var G__1737 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$outgoing,true], null),message], 0));
return (preview__$1.cljs$core$IFn$_invoke$arity$1 ? preview__$1.cljs$core$IFn$_invoke$arity$1(G__1737) : preview__$1.call(null,G__1737));
})():null),true], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),cljs.core.str.cljs$core$IFn$_invoke$arity$1(react_native_web.hooks.rand_str((10)))].join('')], null)),react_native_web$hooks$chat_view_$_iter__1730(cljs.core.rest(s__1731__$2)));
}
} else {
return null;
}
break;
}
});})(map__1728,map__1728__$1,messages,params,suggestion_id,keys1726))
,null,null));
});})(map__1728,map__1728__$1,messages,params,suggestion_id,keys1726))
;
return iter__4523__auto__(messages);
})()], null)], null),(function (){var temp__5457__auto__ = cljs.core.some(((function (map__1728,map__1728__$1,messages,params,suggestion_id,keys1726){
return (function (p1__1724_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__1724_SHARP_))){
return cljs.core.cst$kw$suggestions.cljs$core$IFn$_invoke$arity$1(p1__1724_SHARP_);
} else {
return null;
}
});})(map__1728,map__1728__$1,messages,params,suggestion_id,keys1726))
,parameters__$1);
if(cljs.core.truth_(temp__5457__auto__)){
var suggestion = temp__5457__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [suggestion], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,react_native_web.hooks.input_container], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,react_native_web.hooks.input_root], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,react_native_web.hooks.input_animated], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$border_DASH_width,(1),cljs.core.cst$kw$border_DASH_color,cljs.core.cst$kw$red], null)], null),["/",cljs.core.name(command_id__$1)," "].join('')], null),(function (){var iter__4523__auto__ = ((function (map__1728,map__1728__$1,messages,params,suggestion_id,keys1726){
return (function react_native_web$hooks$chat_view_$_iter__1738(s__1739){
return (new cljs.core.LazySeq(null,((function (map__1728,map__1728__$1,messages,params,suggestion_id,keys1726){
return (function (){
var s__1739__$1 = s__1739;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__1739__$1);
if(temp__5457__auto__){
var s__1739__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1739__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__1739__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__1741 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__1740 = (0);
while(true){
if((i__1740 < size__4522__auto__)){
var map__1742 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__1740);
var map__1742__$1 = (((((!((map__1742 == null))))?(((((map__1742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1742):map__1742);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1742__$1,cljs.core.cst$kw$placeholder);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1742__$1,cljs.core.cst$kw$id);
cljs.core.chunk_append(b__1741,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$placeholder,placeholder,cljs.core.cst$kw$on_DASH_change_DASH_text,((function (i__1740,map__1742,map__1742__$1,placeholder,id,c__4521__auto__,size__4522__auto__,b__1741,s__1739__$2,temp__5457__auto__,map__1728,map__1728__$1,messages,params,suggestion_id,keys1726){
return (function (p1__1725_SHARP_){
var G__1744 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$params,id], null),p1__1725_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1744) : re_frame.core.dispatch.call(null,G__1744));
});})(i__1740,map__1742,map__1742__$1,placeholder,id,c__4521__auto__,size__4522__auto__,b__1741,s__1739__$2,temp__5457__auto__,map__1728,map__1728__$1,messages,params,suggestion_id,keys1726))
,cljs.core.cst$kw$on_DASH_focus,((function (i__1740,map__1742,map__1742__$1,placeholder,id,c__4521__auto__,size__4522__auto__,b__1741,s__1739__$2,temp__5457__auto__,map__1728,map__1728__$1,messages,params,suggestion_id,keys1726){
return (function (){
var G__1745 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$suggestion_DASH_id], null),id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1745) : re_frame.core.dispatch.call(null,G__1745));
});})(i__1740,map__1742,map__1742__$1,placeholder,id,c__4521__auto__,size__4522__auto__,b__1741,s__1739__$2,temp__5457__auto__,map__1728,map__1728__$1,messages,params,suggestion_id,keys1726))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_right,(5),cljs.core.cst$kw$width,(50)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null)));

var G__1755 = (i__1740 + (1));
i__1740 = G__1755;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1741),react_native_web$hooks$chat_view_$_iter__1738(cljs.core.chunk_rest(s__1739__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1741),null);
}
} else {
var map__1746 = cljs.core.first(s__1739__$2);
var map__1746__$1 = (((((!((map__1746 == null))))?(((((map__1746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1746):map__1746);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1746__$1,cljs.core.cst$kw$placeholder);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1746__$1,cljs.core.cst$kw$id);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$placeholder,placeholder,cljs.core.cst$kw$on_DASH_change_DASH_text,((function (map__1746,map__1746__$1,placeholder,id,s__1739__$2,temp__5457__auto__,map__1728,map__1728__$1,messages,params,suggestion_id,keys1726){
return (function (p1__1725_SHARP_){
var G__1748 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$params,id], null),p1__1725_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1748) : re_frame.core.dispatch.call(null,G__1748));
});})(map__1746,map__1746__$1,placeholder,id,s__1739__$2,temp__5457__auto__,map__1728,map__1728__$1,messages,params,suggestion_id,keys1726))
,cljs.core.cst$kw$on_DASH_focus,((function (map__1746,map__1746__$1,placeholder,id,s__1739__$2,temp__5457__auto__,map__1728,map__1728__$1,messages,params,suggestion_id,keys1726){
return (function (){
var G__1749 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$suggestion_DASH_id], null),id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1749) : re_frame.core.dispatch.call(null,G__1749));
});})(map__1746,map__1746__$1,placeholder,id,s__1739__$2,temp__5457__auto__,map__1728,map__1728__$1,messages,params,suggestion_id,keys1726))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_right,(5),cljs.core.cst$kw$width,(50)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null)),react_native_web$hooks$chat_view_$_iter__1738(cljs.core.rest(s__1739__$2)));
}
} else {
return null;
}
break;
}
});})(map__1728,map__1728__$1,messages,params,suggestion_id,keys1726))
,null,null));
});})(map__1728,map__1728__$1,messages,params,suggestion_id,keys1726))
;
return iter__4523__auto__(parameters__$1);
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.touchable_highlight(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_press,((function (map__1728,map__1728__$1,messages,params,suggestion_id,keys1726){
return (function (){
var G__1750_1756 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$suggestion_DASH_id], null),null], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1750_1756) : re_frame.core.dispatch.call(null,G__1750_1756));

var G__1751 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$messages], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(messages,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$content,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,params], null)], null))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1751) : re_frame.core.dispatch.call(null,G__1751));
});})(map__1728,map__1728__$1,messages,params,suggestion_id,keys1726))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,react_native_web.hooks.send_message_container], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$white], null)], null),">"], null)], null)], null)], null)], null);
});})(keys1726))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$chat_DASH_view)], null)], 0)));
});
react_native_web.hooks.command_hook = (function react_native_web$hooks$command_hook(id,p__1757){
var map__1758 = p__1757;
var map__1758__$1 = (((((!((map__1758 == null))))?(((((map__1758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1758):map__1758);
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1758__$1,cljs.core.cst$kw$parameters);
var preview = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1758__$1,cljs.core.cst$kw$preview);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.hooks.chat_view,preview,parameters,id], null);
});
react_native_web.hooks.hook_in = (function react_native_web$hooks$hook_in(p__1760){
var vec__1761 = p__1760;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1761,(0),null);
var parsed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1761,(1),null);
if(cljs.core.truth_(id)){
var hook_id = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(id),/\./));
var type = pluto.core.hook_type(id);
var G__1764 = type;
switch (G__1764) {
case "chat.command":
return react_native_web.hooks.command_hook(hook_id,parsed);

break;
case "wallet.settings":
return react_native_web.hooks.settings_hook(hook_id,parsed);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1764)].join('')));

}
} else {
return null;
}
});
