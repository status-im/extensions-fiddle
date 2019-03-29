// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('react_native_web.hooks');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('react_native_web.react');
goog.require('status_im.colors');
goog.require('re_frame.core');
goog.require('pluto.core');
goog.require('clojure.string');
react_native_web.hooks.settings_hook = (function react_native_web$hooks$settings_hook(id,p__8066){
var map__8067 = p__8066;
var map__8067__$1 = (((((!((map__8067 == null))))?(((((map__8067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8067):map__8067);
var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8067__$1,cljs.core.cst$kw$view);
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
var keys8071 = (function (){var G__8072 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$extension_DASH_props], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__8072) : re_frame.core.subscribe.call(null,G__8072));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (keys8071){
return (function (preview__$1,parameters__$1,command_id__$1){
var map__8073 = cljs.core.deref(keys8071);
var map__8073__$1 = (((((!((map__8073 == null))))?(((((map__8073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8073):map__8073);
var messages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8073__$1,cljs.core.cst$kw$messages);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8073__$1,cljs.core.cst$kw$params);
var suggestion_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8073__$1,cljs.core.cst$kw$suggestion_DASH_id);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,(1)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.scroll_view(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$flex,(1),cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$white], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,(function (){var iter__4523__auto__ = ((function (map__8073,map__8073__$1,messages,params,suggestion_id,keys8071){
return (function react_native_web$hooks$chat_view_$_iter__8075(s__8076){
return (new cljs.core.LazySeq(null,((function (map__8073,map__8073__$1,messages,params,suggestion_id,keys8071){
return (function (){
var s__8076__$1 = s__8076;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__8076__$1);
if(temp__5720__auto__){
var s__8076__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8076__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__8076__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__8078 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__8077 = (0);
while(true){
if((i__8077 < size__4522__auto__)){
var message = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__8077);
cljs.core.chunk_append(b__8078,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.hooks.message_container,(cljs.core.truth_(preview__$1)?(function (){var G__8079 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$outgoing,false], null),message], 0));
return (preview__$1.cljs$core$IFn$_invoke$arity$1 ? preview__$1.cljs$core$IFn$_invoke$arity$1(G__8079) : preview__$1.call(null,G__8079));
})():null),false], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.hooks.message_container,(cljs.core.truth_(preview__$1)?(function (){var G__8080 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$outgoing,true], null),message], 0));
return (preview__$1.cljs$core$IFn$_invoke$arity$1 ? preview__$1.cljs$core$IFn$_invoke$arity$1(G__8080) : preview__$1.call(null,G__8080));
})():null),true], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),cljs.core.str.cljs$core$IFn$_invoke$arity$1(react_native_web.hooks.rand_str((10)))].join('')], null)));

var G__8099 = (i__8077 + (1));
i__8077 = G__8099;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8078),react_native_web$hooks$chat_view_$_iter__8075(cljs.core.chunk_rest(s__8076__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8078),null);
}
} else {
var message = cljs.core.first(s__8076__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.hooks.message_container,(cljs.core.truth_(preview__$1)?(function (){var G__8081 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$outgoing,false], null),message], 0));
return (preview__$1.cljs$core$IFn$_invoke$arity$1 ? preview__$1.cljs$core$IFn$_invoke$arity$1(G__8081) : preview__$1.call(null,G__8081));
})():null),false], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.hooks.message_container,(cljs.core.truth_(preview__$1)?(function (){var G__8082 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$outgoing,true], null),message], 0));
return (preview__$1.cljs$core$IFn$_invoke$arity$1 ? preview__$1.cljs$core$IFn$_invoke$arity$1(G__8082) : preview__$1.call(null,G__8082));
})():null),true], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),cljs.core.str.cljs$core$IFn$_invoke$arity$1(react_native_web.hooks.rand_str((10)))].join('')], null)),react_native_web$hooks$chat_view_$_iter__8075(cljs.core.rest(s__8076__$2)));
}
} else {
return null;
}
break;
}
});})(map__8073,map__8073__$1,messages,params,suggestion_id,keys8071))
,null,null));
});})(map__8073,map__8073__$1,messages,params,suggestion_id,keys8071))
;
return iter__4523__auto__(messages);
})()], null)], null),(function (){var temp__5720__auto__ = cljs.core.some(((function (map__8073,map__8073__$1,messages,params,suggestion_id,keys8071){
return (function (p1__8069_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__8069_SHARP_))){
return cljs.core.cst$kw$suggestions.cljs$core$IFn$_invoke$arity$1(p1__8069_SHARP_);
} else {
return null;
}
});})(map__8073,map__8073__$1,messages,params,suggestion_id,keys8071))
,parameters__$1);
if(cljs.core.truth_(temp__5720__auto__)){
var suggestion = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [suggestion], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,react_native_web.hooks.input_container], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,react_native_web.hooks.input_root], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,react_native_web.hooks.input_animated], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$border_DASH_width,(1),cljs.core.cst$kw$border_DASH_color,cljs.core.cst$kw$red], null)], null),["/",cljs.core.name(command_id__$1)," "].join('')], null),(function (){var iter__4523__auto__ = ((function (map__8073,map__8073__$1,messages,params,suggestion_id,keys8071){
return (function react_native_web$hooks$chat_view_$_iter__8083(s__8084){
return (new cljs.core.LazySeq(null,((function (map__8073,map__8073__$1,messages,params,suggestion_id,keys8071){
return (function (){
var s__8084__$1 = s__8084;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__8084__$1);
if(temp__5720__auto__){
var s__8084__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8084__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__8084__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__8086 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__8085 = (0);
while(true){
if((i__8085 < size__4522__auto__)){
var map__8087 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__8085);
var map__8087__$1 = (((((!((map__8087 == null))))?(((((map__8087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8087):map__8087);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8087__$1,cljs.core.cst$kw$placeholder);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8087__$1,cljs.core.cst$kw$id);
cljs.core.chunk_append(b__8086,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$placeholder,placeholder,cljs.core.cst$kw$on_DASH_change_DASH_text,((function (i__8085,map__8087,map__8087__$1,placeholder,id,c__4521__auto__,size__4522__auto__,b__8086,s__8084__$2,temp__5720__auto__,map__8073,map__8073__$1,messages,params,suggestion_id,keys8071){
return (function (p1__8070_SHARP_){
var G__8089 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$params,id], null),p1__8070_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__8089) : re_frame.core.dispatch.call(null,G__8089));
});})(i__8085,map__8087,map__8087__$1,placeholder,id,c__4521__auto__,size__4522__auto__,b__8086,s__8084__$2,temp__5720__auto__,map__8073,map__8073__$1,messages,params,suggestion_id,keys8071))
,cljs.core.cst$kw$on_DASH_focus,((function (i__8085,map__8087,map__8087__$1,placeholder,id,c__4521__auto__,size__4522__auto__,b__8086,s__8084__$2,temp__5720__auto__,map__8073,map__8073__$1,messages,params,suggestion_id,keys8071){
return (function (){
var G__8090 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$suggestion_DASH_id], null),id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__8090) : re_frame.core.dispatch.call(null,G__8090));
});})(i__8085,map__8087,map__8087__$1,placeholder,id,c__4521__auto__,size__4522__auto__,b__8086,s__8084__$2,temp__5720__auto__,map__8073,map__8073__$1,messages,params,suggestion_id,keys8071))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_right,(5),cljs.core.cst$kw$width,(50)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null)));

var G__8100 = (i__8085 + (1));
i__8085 = G__8100;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8086),react_native_web$hooks$chat_view_$_iter__8083(cljs.core.chunk_rest(s__8084__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8086),null);
}
} else {
var map__8091 = cljs.core.first(s__8084__$2);
var map__8091__$1 = (((((!((map__8091 == null))))?(((((map__8091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8091):map__8091);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8091__$1,cljs.core.cst$kw$placeholder);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8091__$1,cljs.core.cst$kw$id);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$placeholder,placeholder,cljs.core.cst$kw$on_DASH_change_DASH_text,((function (map__8091,map__8091__$1,placeholder,id,s__8084__$2,temp__5720__auto__,map__8073,map__8073__$1,messages,params,suggestion_id,keys8071){
return (function (p1__8070_SHARP_){
var G__8093 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$params,id], null),p1__8070_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__8093) : re_frame.core.dispatch.call(null,G__8093));
});})(map__8091,map__8091__$1,placeholder,id,s__8084__$2,temp__5720__auto__,map__8073,map__8073__$1,messages,params,suggestion_id,keys8071))
,cljs.core.cst$kw$on_DASH_focus,((function (map__8091,map__8091__$1,placeholder,id,s__8084__$2,temp__5720__auto__,map__8073,map__8073__$1,messages,params,suggestion_id,keys8071){
return (function (){
var G__8094 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$suggestion_DASH_id], null),id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__8094) : re_frame.core.dispatch.call(null,G__8094));
});})(map__8091,map__8091__$1,placeholder,id,s__8084__$2,temp__5720__auto__,map__8073,map__8073__$1,messages,params,suggestion_id,keys8071))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_right,(5),cljs.core.cst$kw$width,(50)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null)),react_native_web$hooks$chat_view_$_iter__8083(cljs.core.rest(s__8084__$2)));
}
} else {
return null;
}
break;
}
});})(map__8073,map__8073__$1,messages,params,suggestion_id,keys8071))
,null,null));
});})(map__8073,map__8073__$1,messages,params,suggestion_id,keys8071))
;
return iter__4523__auto__(parameters__$1);
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.touchable_highlight(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_press,((function (map__8073,map__8073__$1,messages,params,suggestion_id,keys8071){
return (function (){
var G__8095_8101 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$suggestion_DASH_id], null),null], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__8095_8101) : re_frame.core.dispatch.call(null,G__8095_8101));

var G__8096 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_props,cljs.core.cst$kw$messages], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(messages,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$content,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,params], null)], null))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__8096) : re_frame.core.dispatch.call(null,G__8096));
});})(map__8073,map__8073__$1,messages,params,suggestion_id,keys8071))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,react_native_web.hooks.send_message_container], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$white], null)], null),">"], null)], null)], null)], null)], null);
});})(keys8071))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$chat_DASH_view)], null)], 0)));
});
react_native_web.hooks.command_hook = (function react_native_web$hooks$command_hook(id,p__8102){
var map__8103 = p__8102;
var map__8103__$1 = (((((!((map__8103 == null))))?(((((map__8103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8103):map__8103);
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8103__$1,cljs.core.cst$kw$parameters);
var preview = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8103__$1,cljs.core.cst$kw$preview);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.hooks.chat_view,preview,parameters,id], null);
});
react_native_web.hooks.hook_in = (function react_native_web$hooks$hook_in(p__8105){
var vec__8106 = p__8105;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8106,(0),null);
var parsed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8106,(1),null);
if(cljs.core.truth_(id)){
var hook_id = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(id),/\./));
var type = pluto.core.hook_type(id);
var G__8109 = type;
switch (G__8109) {
case "chat.command":
return react_native_web.hooks.command_hook(hook_id,parsed);

break;
case "wallet.settings":
return react_native_web.hooks.settings_hook(hook_id,parsed);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8109)].join('')));

}
} else {
return null;
}
});
