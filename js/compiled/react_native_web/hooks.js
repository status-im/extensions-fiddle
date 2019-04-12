// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('react_native_web.hooks');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('react_native_web.react');
goog.require('status_im.colors');
goog.require('re_frame.core');
goog.require('pluto.core');
goog.require('clojure.string');
react_native_web.hooks.wallet_settings_hook = (function react_native_web$hooks$wallet_settings_hook(id,p__2290,props){
var map__2291 = p__2290;
var map__2291__$1 = (((((!((map__2291 == null))))?(((((map__2291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2291):map__2291);
var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2291__$1,cljs.core.cst$kw$view);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,props], null)], null);
});
react_native_web.hooks.profile_settings_hook = (function react_native_web$hooks$profile_settings_hook(id,p__2293,props){
var map__2294 = p__2293;
var map__2294__$1 = (((((!((map__2294 == null))))?(((((map__2294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2294):map__2294);
var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2294__$1,cljs.core.cst$kw$view);
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
var keys2298 = (function (){var G__2299 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$extension_DASH_props], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2299) : re_frame.core.subscribe.call(null,G__2299));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (keys2298){
return (function (preview__$1,parameters__$1,command_id__$1,props__$1,on_send__$1,on_send_sync__$1){
var map__2300 = cljs.core.deref(keys2298);
var map__2300__$1 = (((((!((map__2300 == null))))?(((((map__2300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2300):map__2300);
var messages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2300__$1,cljs.core.cst$kw$messages);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2300__$1,cljs.core.cst$kw$params);
var suggestion_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2300__$1,cljs.core.cst$kw$suggestion_DASH_id);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,(1)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.scroll_view(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$flex,(1),cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$white], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,(function (){var iter__4523__auto__ = ((function (map__2300,map__2300__$1,messages,params,suggestion_id,keys2298){
return (function react_native_web$hooks$chat_view_$_iter__2302(s__2303){
return (new cljs.core.LazySeq(null,((function (map__2300,map__2300__$1,messages,params,suggestion_id,keys2298){
return (function (){
var s__2303__$1 = s__2303;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__2303__$1);
if(temp__5720__auto__){
var s__2303__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__2303__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__2303__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__2305 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__2304 = (0);
while(true){
if((i__2304 < size__4522__auto__)){
var map__2306 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__2304);
var map__2306__$1 = (((((!((map__2306 == null))))?(((((map__2306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2306):map__2306);
var message = map__2306__$1;
var plain_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2306__$1,cljs.core.cst$kw$plain_DASH_message);
cljs.core.chunk_append(b__2305,(cljs.core.truth_(plain_message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.hooks.message_container,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$max_DASH_width,(200),cljs.core.cst$kw$color,cljs.core.cst$kw$white], null)], null),plain_message], null),true], null):(function (){var m = ((function (i__2304,map__2306,map__2306__$1,message,plain_message,c__4521__auto__,size__4522__auto__,b__2305,s__2303__$2,temp__5720__auto__,map__2300,map__2300__$1,messages,params,suggestion_id,keys2298){
return (function (out_QMARK_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$outgoing,out_QMARK_], null),message,props__$1], 0));
});})(i__2304,map__2306,map__2306__$1,message,plain_message,c__4521__auto__,size__4522__auto__,b__2305,s__2303__$2,temp__5720__auto__,map__2300,map__2300__$1,messages,params,suggestion_id,keys2298))
;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.hooks.message_container,(cljs.core.truth_(preview__$1)?(function (){var G__2308 = m(false);
return (preview__$1.cljs$core$IFn$_invoke$arity$1 ? preview__$1.cljs$core$IFn$_invoke$arity$1(G__2308) : preview__$1.call(null,G__2308));
})():null),false], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.hooks.message_container,(cljs.core.truth_(preview__$1)?(function (){var G__2309 = m(true);
return (preview__$1.cljs$core$IFn$_invoke$arity$1 ? preview__$1.cljs$core$IFn$_invoke$arity$1(G__2309) : preview__$1.call(null,G__2309));
})():null),true], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),cljs.core.str.cljs$core$IFn$_invoke$arity$1(react_native_web.hooks.rand_str((10)))].join('')], null));
})()));

var G__2335 = (i__2304 + (1));
i__2304 = G__2335;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__2305),react_native_web$hooks$chat_view_$_iter__2302(cljs.core.chunk_rest(s__2303__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__2305),null);
}
} else {
var map__2310 = cljs.core.first(s__2303__$2);
var map__2310__$1 = (((((!((map__2310 == null))))?(((((map__2310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2310):map__2310);
var message = map__2310__$1;
var plain_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2310__$1,cljs.core.cst$kw$plain_DASH_message);
return cljs.core.cons((cljs.core.truth_(plain_message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.hooks.message_container,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$max_DASH_width,(200),cljs.core.cst$kw$color,cljs.core.cst$kw$white], null)], null),plain_message], null),true], null):(function (){var m = ((function (map__2310,map__2310__$1,message,plain_message,s__2303__$2,temp__5720__auto__,map__2300,map__2300__$1,messages,params,suggestion_id,keys2298){
return (function (out_QMARK_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$outgoing,out_QMARK_], null),message,props__$1], 0));
});})(map__2310,map__2310__$1,message,plain_message,s__2303__$2,temp__5720__auto__,map__2300,map__2300__$1,messages,params,suggestion_id,keys2298))
;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.hooks.message_container,(cljs.core.truth_(preview__$1)?(function (){var G__2312 = m(false);
return (preview__$1.cljs$core$IFn$_invoke$arity$1 ? preview__$1.cljs$core$IFn$_invoke$arity$1(G__2312) : preview__$1.call(null,G__2312));
})():null),false], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.hooks.message_container,(cljs.core.truth_(preview__$1)?(function (){var G__2313 = m(true);
return (preview__$1.cljs$core$IFn$_invoke$arity$1 ? preview__$1.cljs$core$IFn$_invoke$arity$1(G__2313) : preview__$1.call(null,G__2313));
})():null),true], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),cljs.core.str.cljs$core$IFn$_invoke$arity$1(react_native_web.hooks.rand_str((10)))].join('')], null));
})()),react_native_web$hooks$chat_view_$_iter__2302(cljs.core.rest(s__2303__$2)));
}
} else {
return null;
}
break;
}
});})(map__2300,map__2300__$1,messages,params,suggestion_id,keys2298))
,null,null));
});})(map__2300,map__2300__$1,messages,params,suggestion_id,keys2298))
;
return iter__4523__auto__(messages);
})()], null)], null),(function (){var temp__5720__auto__ = cljs.core.some(((function (map__2300,map__2300__$1,messages,params,suggestion_id,keys2298){
return (function (p1__2296_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__2296_SHARP_))){
return cljs.core.cst$kw$suggestions.cljs$core$IFn$_invoke$arity$1(p1__2296_SHARP_);
} else {
return null;
}
});})(map__2300,map__2300__$1,messages,params,suggestion_id,keys2298))
,parameters__$1);
if(cljs.core.truth_(temp__5720__auto__)){
var suggestion = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_height,(300)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [suggestion], null)], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,react_native_web.hooks.input_container], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,react_native_web.hooks.input_root], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,react_native_web.hooks.input_animated], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$border_DASH_width,(1),cljs.core.cst$kw$border_DASH_color,cljs.core.cst$kw$red], null)], null),["/",cljs.core.name(command_id__$1)," "].join('')], null),(function (){var iter__4523__auto__ = ((function (map__2300,map__2300__$1,messages,params,suggestion_id,keys2298){
return (function react_native_web$hooks$chat_view_$_iter__2314(s__2315){
return (new cljs.core.LazySeq(null,((function (map__2300,map__2300__$1,messages,params,suggestion_id,keys2298){
return (function (){
var s__2315__$1 = s__2315;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__2315__$1);
if(temp__5720__auto__){
var s__2315__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__2315__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__2315__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__2317 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__2316 = (0);
while(true){
if((i__2316 < size__4522__auto__)){
var map__2318 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__2316);
var map__2318__$1 = (((((!((map__2318 == null))))?(((((map__2318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2318):map__2318);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2318__$1,cljs.core.cst$kw$placeholder);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2318__$1,cljs.core.cst$kw$id);
cljs.core.chunk_append(b__2317,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text_input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$placeholder,placeholder,cljs.core.cst$kw$value,(function (){var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,id);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})(),cljs.core.cst$kw$on_DASH_change_DASH_text,((function (i__2316,map__2318,map__2318__$1,placeholder,id,c__4521__auto__,size__4522__auto__,b__2317,s__2315__$2,temp__5720__auto__,map__2300,map__2300__$1,messages,params,suggestion_id,keys2298){
return (function (p1__2297_SHARP_){
var G__2320 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$params,id], null),p1__2297_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2320) : re_frame.core.dispatch.call(null,G__2320));
});})(i__2316,map__2318,map__2318__$1,placeholder,id,c__4521__auto__,size__4522__auto__,b__2317,s__2315__$2,temp__5720__auto__,map__2300,map__2300__$1,messages,params,suggestion_id,keys2298))
,cljs.core.cst$kw$on_DASH_focus,((function (i__2316,map__2318,map__2318__$1,placeholder,id,c__4521__auto__,size__4522__auto__,b__2317,s__2315__$2,temp__5720__auto__,map__2300,map__2300__$1,messages,params,suggestion_id,keys2298){
return (function (){
var G__2321 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$suggestion_DASH_id], null),id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2321) : re_frame.core.dispatch.call(null,G__2321));
});})(i__2316,map__2318,map__2318__$1,placeholder,id,c__4521__auto__,size__4522__auto__,b__2317,s__2315__$2,temp__5720__auto__,map__2300,map__2300__$1,messages,params,suggestion_id,keys2298))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_right,(5),cljs.core.cst$kw$width,(50)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(placeholder)].join('')], null)));

var G__2336 = (i__2316 + (1));
i__2316 = G__2336;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__2317),react_native_web$hooks$chat_view_$_iter__2314(cljs.core.chunk_rest(s__2315__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__2317),null);
}
} else {
var map__2322 = cljs.core.first(s__2315__$2);
var map__2322__$1 = (((((!((map__2322 == null))))?(((((map__2322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2322):map__2322);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2322__$1,cljs.core.cst$kw$placeholder);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2322__$1,cljs.core.cst$kw$id);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text_input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$placeholder,placeholder,cljs.core.cst$kw$value,(function (){var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,id);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})(),cljs.core.cst$kw$on_DASH_change_DASH_text,((function (map__2322,map__2322__$1,placeholder,id,s__2315__$2,temp__5720__auto__,map__2300,map__2300__$1,messages,params,suggestion_id,keys2298){
return (function (p1__2297_SHARP_){
var G__2324 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$params,id], null),p1__2297_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2324) : re_frame.core.dispatch.call(null,G__2324));
});})(map__2322,map__2322__$1,placeholder,id,s__2315__$2,temp__5720__auto__,map__2300,map__2300__$1,messages,params,suggestion_id,keys2298))
,cljs.core.cst$kw$on_DASH_focus,((function (map__2322,map__2322__$1,placeholder,id,s__2315__$2,temp__5720__auto__,map__2300,map__2300__$1,messages,params,suggestion_id,keys2298){
return (function (){
var G__2325 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$suggestion_DASH_id], null),id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2325) : re_frame.core.dispatch.call(null,G__2325));
});})(map__2322,map__2322__$1,placeholder,id,s__2315__$2,temp__5720__auto__,map__2300,map__2300__$1,messages,params,suggestion_id,keys2298))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_right,(5),cljs.core.cst$kw$width,(50)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(placeholder)].join('')], null)),react_native_web$hooks$chat_view_$_iter__2314(cljs.core.rest(s__2315__$2)));
}
} else {
return null;
}
break;
}
});})(map__2300,map__2300__$1,messages,params,suggestion_id,keys2298))
,null,null));
});})(map__2300,map__2300__$1,messages,params,suggestion_id,keys2298))
;
return iter__4523__auto__(parameters__$1);
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.touchable_highlight(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_press,((function (map__2300,map__2300__$1,messages,params,suggestion_id,keys2298){
return (function (){
if(cljs.core.truth_(on_send_sync__$1)){
var G__2326_2337 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$content,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,params], null)], null);
(on_send_sync__$1.cljs$core$IFn$_invoke$arity$1 ? on_send_sync__$1.cljs$core$IFn$_invoke$arity$1(G__2326_2337) : on_send_sync__$1.call(null,G__2326_2337));

var G__2327_2338 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$suggestion_DASH_id], null),null], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2327_2338) : re_frame.core.dispatch.call(null,G__2327_2338));

var G__2328 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$params], null),null], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2328) : re_frame.core.dispatch.call(null,G__2328));
} else {
if(cljs.core.truth_(on_send__$1)){
var G__2329_2339 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$content,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,params], null)], null);
(on_send__$1.cljs$core$IFn$_invoke$arity$1 ? on_send__$1.cljs$core$IFn$_invoke$arity$1(G__2329_2339) : on_send__$1.call(null,G__2329_2339));
} else {
}

var G__2330_2340 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$suggestion_DASH_id], null),null], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2330_2340) : re_frame.core.dispatch.call(null,G__2330_2340));

var G__2331_2341 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$params], null),null], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2331_2341) : re_frame.core.dispatch.call(null,G__2331_2341));

var G__2332 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$messages], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(messages,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$content,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,params], null)], null))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2332) : re_frame.core.dispatch.call(null,G__2332));
}
});})(map__2300,map__2300__$1,messages,params,suggestion_id,keys2298))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,react_native_web.hooks.send_message_container], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$white], null)], null),">"], null)], null)], null)], null)], null);
});})(keys2298))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$chat_DASH_view)], null)], 0)));
});
react_native_web.hooks.command_hook = (function react_native_web$hooks$command_hook(id,p__2342,props){
var map__2343 = p__2342;
var map__2343__$1 = (((((!((map__2343 == null))))?(((((map__2343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2343):map__2343);
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2343__$1,cljs.core.cst$kw$parameters);
var preview = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2343__$1,cljs.core.cst$kw$preview);
var on_send = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2343__$1,cljs.core.cst$kw$on_DASH_send);
var on_send_sync = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2343__$1,cljs.core.cst$kw$on_DASH_send_DASH_sync);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.hooks.chat_view,preview,parameters,id,props,on_send,on_send_sync], null);
});
react_native_web.hooks.hook_in = (function react_native_web$hooks$hook_in(id,parsed,p__2345,props){
var map__2346 = p__2345;
var map__2346__$1 = (((((!((map__2346 == null))))?(((((map__2346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2346):map__2346);
var on_installation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2346__$1,cljs.core.cst$kw$on_DASH_installation);
if(cljs.core.truth_(id)){
var hook_id = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(id),/\./));
var type = pluto.core.hook_type(id);
if(cljs.core.truth_(on_installation)){
(on_installation.cljs$core$IFn$_invoke$arity$0 ? on_installation.cljs$core$IFn$_invoke$arity$0() : on_installation.call(null));
} else {
}

var G__2348 = type;
switch (G__2348) {
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
