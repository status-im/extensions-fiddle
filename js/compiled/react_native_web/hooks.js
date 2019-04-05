// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('react_native_web.hooks');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('react_native_web.react');
goog.require('status_im.colors');
goog.require('re_frame.core');
goog.require('pluto.core');
goog.require('clojure.string');
react_native_web.hooks.settings_hook = (function react_native_web$hooks$settings_hook(id,p__1927,props){
var map__1928 = p__1927;
var map__1928__$1 = (((((!((map__1928 == null))))?(((((map__1928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1928):map__1928);
var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1928__$1,cljs.core.cst$kw$view);
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

react_native_web.hooks.chat_view = (function react_native_web$hooks$chat_view(preview,parameters,command_id,props,on_send){
var keys1932 = (function (){var G__1933 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$extension_DASH_props], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__1933) : re_frame.core.subscribe.call(null,G__1933));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (keys1932){
return (function (preview__$1,parameters__$1,command_id__$1,props__$1,on_send__$1){
var map__1934 = cljs.core.deref(keys1932);
var map__1934__$1 = (((((!((map__1934 == null))))?(((((map__1934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1934):map__1934);
var messages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1934__$1,cljs.core.cst$kw$messages);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1934__$1,cljs.core.cst$kw$params);
var suggestion_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1934__$1,cljs.core.cst$kw$suggestion_DASH_id);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,(1)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.scroll_view(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$flex,(1),cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$white], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,(function (){var iter__4523__auto__ = ((function (map__1934,map__1934__$1,messages,params,suggestion_id,keys1932){
return (function react_native_web$hooks$chat_view_$_iter__1936(s__1937){
return (new cljs.core.LazySeq(null,((function (map__1934,map__1934__$1,messages,params,suggestion_id,keys1932){
return (function (){
var s__1937__$1 = s__1937;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__1937__$1);
if(temp__5457__auto__){
var s__1937__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1937__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__1937__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__1939 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__1938 = (0);
while(true){
if((i__1938 < size__4522__auto__)){
var message = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__1938);
cljs.core.chunk_append(b__1939,(function (){var m = ((function (i__1938,message,c__4521__auto__,size__4522__auto__,b__1939,s__1937__$2,temp__5457__auto__,map__1934,map__1934__$1,messages,params,suggestion_id,keys1932){
return (function (out_QMARK_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$outgoing,out_QMARK_], null),message,props__$1], 0));
});})(i__1938,message,c__4521__auto__,size__4522__auto__,b__1939,s__1937__$2,temp__5457__auto__,map__1934,map__1934__$1,messages,params,suggestion_id,keys1932))
;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.hooks.message_container,(cljs.core.truth_(preview__$1)?(function (){var G__1940 = m(false);
return (preview__$1.cljs$core$IFn$_invoke$arity$1 ? preview__$1.cljs$core$IFn$_invoke$arity$1(G__1940) : preview__$1.call(null,G__1940));
})():null),false], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.hooks.message_container,(cljs.core.truth_(preview__$1)?(function (){var G__1941 = m(true);
return (preview__$1.cljs$core$IFn$_invoke$arity$1 ? preview__$1.cljs$core$IFn$_invoke$arity$1(G__1941) : preview__$1.call(null,G__1941));
})():null),true], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),cljs.core.str.cljs$core$IFn$_invoke$arity$1(react_native_web.hooks.rand_str((10)))].join('')], null));
})());

var G__1960 = (i__1938 + (1));
i__1938 = G__1960;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1939),react_native_web$hooks$chat_view_$_iter__1936(cljs.core.chunk_rest(s__1937__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1939),null);
}
} else {
var message = cljs.core.first(s__1937__$2);
return cljs.core.cons((function (){var m = ((function (message,s__1937__$2,temp__5457__auto__,map__1934,map__1934__$1,messages,params,suggestion_id,keys1932){
return (function (out_QMARK_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$outgoing,out_QMARK_], null),message,props__$1], 0));
});})(message,s__1937__$2,temp__5457__auto__,map__1934,map__1934__$1,messages,params,suggestion_id,keys1932))
;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.hooks.message_container,(cljs.core.truth_(preview__$1)?(function (){var G__1942 = m(false);
return (preview__$1.cljs$core$IFn$_invoke$arity$1 ? preview__$1.cljs$core$IFn$_invoke$arity$1(G__1942) : preview__$1.call(null,G__1942));
})():null),false], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.hooks.message_container,(cljs.core.truth_(preview__$1)?(function (){var G__1943 = m(true);
return (preview__$1.cljs$core$IFn$_invoke$arity$1 ? preview__$1.cljs$core$IFn$_invoke$arity$1(G__1943) : preview__$1.call(null,G__1943));
})():null),true], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),cljs.core.str.cljs$core$IFn$_invoke$arity$1(react_native_web.hooks.rand_str((10)))].join('')], null));
})(),react_native_web$hooks$chat_view_$_iter__1936(cljs.core.rest(s__1937__$2)));
}
} else {
return null;
}
break;
}
});})(map__1934,map__1934__$1,messages,params,suggestion_id,keys1932))
,null,null));
});})(map__1934,map__1934__$1,messages,params,suggestion_id,keys1932))
;
return iter__4523__auto__(messages);
})()], null)], null),(function (){var temp__5457__auto__ = cljs.core.some(((function (map__1934,map__1934__$1,messages,params,suggestion_id,keys1932){
return (function (p1__1930_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__1930_SHARP_))){
return cljs.core.cst$kw$suggestions.cljs$core$IFn$_invoke$arity$1(p1__1930_SHARP_);
} else {
return null;
}
});})(map__1934,map__1934__$1,messages,params,suggestion_id,keys1932))
,parameters__$1);
if(cljs.core.truth_(temp__5457__auto__)){
var suggestion = temp__5457__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_height,(300)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [suggestion], null)], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,react_native_web.hooks.input_container], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,react_native_web.hooks.input_root], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,react_native_web.hooks.input_animated], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$border_DASH_width,(1),cljs.core.cst$kw$border_DASH_color,cljs.core.cst$kw$red], null)], null),["/",cljs.core.name(command_id__$1)," "].join('')], null),(function (){var iter__4523__auto__ = ((function (map__1934,map__1934__$1,messages,params,suggestion_id,keys1932){
return (function react_native_web$hooks$chat_view_$_iter__1944(s__1945){
return (new cljs.core.LazySeq(null,((function (map__1934,map__1934__$1,messages,params,suggestion_id,keys1932){
return (function (){
var s__1945__$1 = s__1945;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__1945__$1);
if(temp__5457__auto__){
var s__1945__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1945__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__1945__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__1947 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__1946 = (0);
while(true){
if((i__1946 < size__4522__auto__)){
var map__1948 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__1946);
var map__1948__$1 = (((((!((map__1948 == null))))?(((((map__1948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1948):map__1948);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1948__$1,cljs.core.cst$kw$placeholder);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1948__$1,cljs.core.cst$kw$id);
cljs.core.chunk_append(b__1947,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$placeholder,placeholder,cljs.core.cst$kw$on_DASH_change_DASH_text,((function (i__1946,map__1948,map__1948__$1,placeholder,id,c__4521__auto__,size__4522__auto__,b__1947,s__1945__$2,temp__5457__auto__,map__1934,map__1934__$1,messages,params,suggestion_id,keys1932){
return (function (p1__1931_SHARP_){
var G__1950 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$params,id], null),p1__1931_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1950) : re_frame.core.dispatch.call(null,G__1950));
});})(i__1946,map__1948,map__1948__$1,placeholder,id,c__4521__auto__,size__4522__auto__,b__1947,s__1945__$2,temp__5457__auto__,map__1934,map__1934__$1,messages,params,suggestion_id,keys1932))
,cljs.core.cst$kw$on_DASH_focus,((function (i__1946,map__1948,map__1948__$1,placeholder,id,c__4521__auto__,size__4522__auto__,b__1947,s__1945__$2,temp__5457__auto__,map__1934,map__1934__$1,messages,params,suggestion_id,keys1932){
return (function (){
var G__1951 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$suggestion_DASH_id], null),id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1951) : re_frame.core.dispatch.call(null,G__1951));
});})(i__1946,map__1948,map__1948__$1,placeholder,id,c__4521__auto__,size__4522__auto__,b__1947,s__1945__$2,temp__5457__auto__,map__1934,map__1934__$1,messages,params,suggestion_id,keys1932))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_right,(5),cljs.core.cst$kw$width,(50)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null)));

var G__1961 = (i__1946 + (1));
i__1946 = G__1961;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1947),react_native_web$hooks$chat_view_$_iter__1944(cljs.core.chunk_rest(s__1945__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1947),null);
}
} else {
var map__1952 = cljs.core.first(s__1945__$2);
var map__1952__$1 = (((((!((map__1952 == null))))?(((((map__1952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1952):map__1952);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1952__$1,cljs.core.cst$kw$placeholder);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1952__$1,cljs.core.cst$kw$id);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$placeholder,placeholder,cljs.core.cst$kw$on_DASH_change_DASH_text,((function (map__1952,map__1952__$1,placeholder,id,s__1945__$2,temp__5457__auto__,map__1934,map__1934__$1,messages,params,suggestion_id,keys1932){
return (function (p1__1931_SHARP_){
var G__1954 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$params,id], null),p1__1931_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1954) : re_frame.core.dispatch.call(null,G__1954));
});})(map__1952,map__1952__$1,placeholder,id,s__1945__$2,temp__5457__auto__,map__1934,map__1934__$1,messages,params,suggestion_id,keys1932))
,cljs.core.cst$kw$on_DASH_focus,((function (map__1952,map__1952__$1,placeholder,id,s__1945__$2,temp__5457__auto__,map__1934,map__1934__$1,messages,params,suggestion_id,keys1932){
return (function (){
var G__1955 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$suggestion_DASH_id], null),id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1955) : re_frame.core.dispatch.call(null,G__1955));
});})(map__1952,map__1952__$1,placeholder,id,s__1945__$2,temp__5457__auto__,map__1934,map__1934__$1,messages,params,suggestion_id,keys1932))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_right,(5),cljs.core.cst$kw$width,(50)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null)),react_native_web$hooks$chat_view_$_iter__1944(cljs.core.rest(s__1945__$2)));
}
} else {
return null;
}
break;
}
});})(map__1934,map__1934__$1,messages,params,suggestion_id,keys1932))
,null,null));
});})(map__1934,map__1934__$1,messages,params,suggestion_id,keys1932))
;
return iter__4523__auto__(parameters__$1);
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.touchable_highlight(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_press,((function (map__1934,map__1934__$1,messages,params,suggestion_id,keys1932){
return (function (){
if(cljs.core.truth_(on_send__$1)){
(on_send__$1.cljs$core$IFn$_invoke$arity$0 ? on_send__$1.cljs$core$IFn$_invoke$arity$0() : on_send__$1.call(null));
} else {
}

var G__1956_1962 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$suggestion_DASH_id], null),null], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1956_1962) : re_frame.core.dispatch.call(null,G__1956_1962));

var G__1957 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$messages], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(messages,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$content,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,params], null)], null))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1957) : re_frame.core.dispatch.call(null,G__1957));
});})(map__1934,map__1934__$1,messages,params,suggestion_id,keys1932))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,react_native_web.hooks.send_message_container], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$white], null)], null),">"], null)], null)], null)], null)], null);
});})(keys1932))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$chat_DASH_view)], null)], 0)));
});
react_native_web.hooks.command_hook = (function react_native_web$hooks$command_hook(id,p__1963,props){
var map__1964 = p__1963;
var map__1964__$1 = (((((!((map__1964 == null))))?(((((map__1964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1964):map__1964);
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1964__$1,cljs.core.cst$kw$parameters);
var preview = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1964__$1,cljs.core.cst$kw$preview);
var on_send = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1964__$1,cljs.core.cst$kw$on_DASH_send);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.hooks.chat_view,preview,parameters,id,props,on_send], null);
});
react_native_web.hooks.hook_in = (function react_native_web$hooks$hook_in(p__1966,props){
var vec__1967 = p__1966;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1967,(0),null);
var parsed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1967,(1),null);
if(cljs.core.truth_(id)){
var hook_id = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(id),/\./));
var type = pluto.core.hook_type(id);
var G__1970 = type;
switch (G__1970) {
case "chat.command":
return react_native_web.hooks.command_hook(hook_id,parsed,props);

break;
case "wallet.settings":
return react_native_web.hooks.settings_hook(hook_id,parsed,props);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,["Unknown hook type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')], null);

}
} else {
return null;
}
});