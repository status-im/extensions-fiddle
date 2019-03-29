// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('react_native_web.components');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('react_native_web.react');
goog.require('re_frame.core');
goog.require('status_im.colors');
react_native_web.components.input = (function react_native_web$components$input(p__5276){
var map__5277 = p__5276;
var map__5277__$1 = (((((!((map__5277 == null))))?(((((map__5277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5277):map__5277);
var keyboard_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5277__$1,cljs.core.cst$kw$keyboard_DASH_type);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5277__$1,cljs.core.cst$kw$style);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5277__$1,cljs.core.cst$kw$on_DASH_change);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5277__$1,cljs.core.cst$kw$placeholder);
var placeholder_text_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5277__$1,cljs.core.cst$kw$placeholder_DASH_text_DASH_color);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text_input,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$placeholder,placeholder], null),(cljs.core.truth_(placeholder_text_color)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$placeholder_DASH_text_DASH_color,placeholder_text_color], null):null),(cljs.core.truth_(style)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,style], null):null),(cljs.core.truth_(keyboard_type)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyboard_DASH_type,keyboard_type], null):null),(cljs.core.truth_(on_change)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_change_DASH_text,((function (map__5277,map__5277__$1,keyboard_type,style,on_change,placeholder,placeholder_text_color){
return (function (p1__5275_SHARP_){
var G__5279 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,p1__5275_SHARP_], null);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__5279) : on_change.call(null,G__5279));
});})(map__5277,map__5277__$1,keyboard_type,style,on_change,placeholder,placeholder_text_color))
], null):null)], 0))], null);
});
react_native_web.components.touchable_opacity = (function react_native_web$components$touchable_opacity(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5286 = arguments.length;
var i__4731__auto___5287 = (0);
while(true){
if((i__4731__auto___5287 < len__4730__auto___5286)){
args__4736__auto__.push((arguments[i__4731__auto___5287]));

var G__5288 = (i__4731__auto___5287 + (1));
i__4731__auto___5287 = G__5288;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return react_native_web.components.touchable_opacity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

react_native_web.components.touchable_opacity.cljs$core$IFn$_invoke$arity$variadic = (function (p__5282,children){
var map__5283 = p__5282;
var map__5283__$1 = (((((!((map__5283 == null))))?(((((map__5283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5283):map__5283);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5283__$1,cljs.core.cst$kw$style);
var on_press = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5283__$1,cljs.core.cst$kw$on_DASH_press);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.touchable_highlight(),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(on_press)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_press,((function (map__5283,map__5283__$1,style,on_press){
return (function (){
var G__5285 = cljs.core.PersistentArrayMap.EMPTY;
return (on_press.cljs$core$IFn$_invoke$arity$1 ? on_press.cljs$core$IFn$_invoke$arity$1(G__5285) : on_press.call(null,G__5285));
});})(map__5283,map__5283__$1,style,on_press))
], null):null),(cljs.core.truth_(style)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,style], null):null)], 0))], null),children);
});

react_native_web.components.touchable_opacity.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
react_native_web.components.touchable_opacity.cljs$lang$applyTo = (function (seq5280){
var G__5281 = cljs.core.first(seq5280);
var seq5280__$1 = cljs.core.next(seq5280);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5281,seq5280__$1);
});

react_native_web.components.image = (function react_native_web$components$image(p__5289){
var map__5290 = p__5289;
var map__5290__$1 = (((((!((map__5290 == null))))?(((((map__5290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5290):map__5290);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5290__$1,cljs.core.cst$kw$uri);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5290__$1,cljs.core.cst$kw$style);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.image(),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(100),cljs.core.cst$kw$height,(100)], null),style], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$source,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$uri,uri], null)], null)], 0))], null);
});
react_native_web.components.link = (function react_native_web$components$link(p__5292){
var map__5293 = p__5292;
var map__5293__$1 = (((((!((map__5293 == null))))?(((((map__5293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5293):map__5293);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5293__$1,cljs.core.cst$kw$uri);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,status_im.colors.white,cljs.core.cst$kw$text_DASH_decoration_DASH_line,cljs.core.cst$kw$underline], null),cljs.core.cst$kw$on_DASH_press,((function (map__5293,map__5293__$1,uri){
return (function (){
var G__5295 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$browser$ui_SLASH_message_DASH_link_DASH_pressed,uri], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__5295) : re_frame.core.dispatch.call(null,G__5295));
});})(map__5293,map__5293__$1,uri))
], null),uri], null);
});
react_native_web.components.activity_indicator_size = (function react_native_web$components$activity_indicator_size(k){
var pred__5296 = cljs.core._EQ_;
var expr__5297 = k;
if(cljs.core.truth_((function (){var G__5299 = cljs.core.cst$kw$small;
var G__5300 = expr__5297;
return (pred__5296.cljs$core$IFn$_invoke$arity$2 ? pred__5296.cljs$core$IFn$_invoke$arity$2(G__5299,G__5300) : pred__5296.call(null,G__5299,G__5300));
})())){
return "small";
} else {
if(cljs.core.truth_((function (){var G__5301 = cljs.core.cst$kw$large;
var G__5302 = expr__5297;
return (pred__5296.cljs$core$IFn$_invoke$arity$2 ? pred__5296.cljs$core$IFn$_invoke$arity$2(G__5301,G__5302) : pred__5296.call(null,G__5301,G__5302));
})())){
return "large";
} else {
return null;
}
}
});
react_native_web.components.activity_indicator = (function react_native_web$components$activity_indicator(p__5303){
var map__5304 = p__5303;
var map__5304__$1 = (((((!((map__5304 == null))))?(((((map__5304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5304):map__5304);
var animating = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5304__$1,cljs.core.cst$kw$animating);
var hides_when_stopped = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5304__$1,cljs.core.cst$kw$hides_DASH_when_DASH_stopped);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5304__$1,cljs.core.cst$kw$color);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5304__$1,cljs.core.cst$kw$size);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.activity_indicator(),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(animating)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$animating,animating], null):null),(cljs.core.truth_(hides_when_stopped)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hidesWhenStopped,hides_when_stopped], null):null),(cljs.core.truth_(color)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,color], null):null),(function (){var temp__5457__auto__ = react_native_web.components.activity_indicator_size(size);
if(cljs.core.truth_(temp__5457__auto__)){
var size_SINGLEQUOTE_ = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,size_SINGLEQUOTE_], null);
} else {
return null;
}
})()], 0))], null);
});
react_native_web.components.text = (function react_native_web$components$text(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5308 = arguments.length;
var i__4731__auto___5309 = (0);
while(true){
if((i__4731__auto___5309 < len__4730__auto___5308)){
args__4736__auto__.push((arguments[i__4731__auto___5309]));

var G__5310 = (i__4731__auto___5309 + (1));
i__4731__auto___5309 = G__5310;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return react_native_web.components.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

react_native_web.components.text.cljs$core$IFn$_invoke$arity$variadic = (function (o,children){
if(cljs.core.map_QMARK_(o)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text,o,children], null);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text,cljs.core.PersistentArrayMap.EMPTY,o], null),children);
}
});

react_native_web.components.text.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
react_native_web.components.text.cljs$lang$applyTo = (function (seq5306){
var G__5307 = cljs.core.first(seq5306);
var seq5306__$1 = cljs.core.next(seq5306);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5307,seq5306__$1);
});

react_native_web.components.wrap_view_child = (function react_native_web$components$wrap_view_child(child){
if(cljs.core.vector_QMARK_(child)){
return child;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.components.text,cljs.core.PersistentArrayMap.EMPTY,child], null);
}
});
react_native_web.components.abstract_view = (function react_native_web$components$abstract_view(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5314 = arguments.length;
var i__4731__auto___5315 = (0);
while(true){
if((i__4731__auto___5315 < len__4730__auto___5314)){
args__4736__auto__.push((arguments[i__4731__auto___5315]));

var G__5316 = (i__4731__auto___5315 + (1));
i__4731__auto___5315 = G__5316;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return react_native_web.components.abstract_view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

react_native_web.components.abstract_view.cljs$core$IFn$_invoke$arity$variadic = (function (type,o,children){
if(cljs.core.map_QMARK_(o)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,o], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(react_native_web.components.wrap_view_child,children));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.PersistentArrayMap.EMPTY,react_native_web.components.wrap_view_child(o)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(react_native_web.components.wrap_view_child,children));
}
});

react_native_web.components.abstract_view.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
react_native_web.components.abstract_view.cljs$lang$applyTo = (function (seq5311){
var G__5312 = cljs.core.first(seq5311);
var seq5311__$1 = cljs.core.next(seq5311);
var G__5313 = cljs.core.first(seq5311__$1);
var seq5311__$2 = cljs.core.next(seq5311__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5312,G__5313,seq5311__$2);
});

react_native_web.components.view = (function react_native_web$components$view(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5319 = arguments.length;
var i__4731__auto___5320 = (0);
while(true){
if((i__4731__auto___5320 < len__4730__auto___5319)){
args__4736__auto__.push((arguments[i__4731__auto___5320]));

var G__5321 = (i__4731__auto___5320 + (1));
i__4731__auto___5320 = G__5321;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return react_native_web.components.view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

react_native_web.components.view.cljs$core$IFn$_invoke$arity$variadic = (function (o,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(react_native_web.components.abstract_view,react_native_web.react.view,o,children);
});

react_native_web.components.view.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
react_native_web.components.view.cljs$lang$applyTo = (function (seq5317){
var G__5318 = cljs.core.first(seq5317);
var seq5317__$1 = cljs.core.next(seq5317);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5318,seq5317__$1);
});

react_native_web.components.scroll_view = (function react_native_web$components$scroll_view(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5324 = arguments.length;
var i__4731__auto___5325 = (0);
while(true){
if((i__4731__auto___5325 < len__4730__auto___5324)){
args__4736__auto__.push((arguments[i__4731__auto___5325]));

var G__5326 = (i__4731__auto___5325 + (1));
i__4731__auto___5325 = G__5326;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return react_native_web.components.scroll_view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

react_native_web.components.scroll_view.cljs$core$IFn$_invoke$arity$variadic = (function (o,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(react_native_web.components.abstract_view,react_native_web.react.scroll_view(),o,children);
});

react_native_web.components.scroll_view.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
react_native_web.components.scroll_view.cljs$lang$applyTo = (function (seq5322){
var G__5323 = cljs.core.first(seq5322);
var seq5322__$1 = cljs.core.next(seq5322);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5323,seq5322__$1);
});

react_native_web.components.component = (function react_native_web$components$component(){
return null;
});
react_native_web.components.button = (function react_native_web$components$button(p__5327,label){
var map__5328 = p__5327;
var map__5328__$1 = (((((!((map__5328 == null))))?(((((map__5328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5328):map__5328);
var m = map__5328__$1;
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5328__$1,cljs.core.cst$kw$on_DASH_click);
var enabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5328__$1,cljs.core.cst$kw$enabled);
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5328__$1,cljs.core.cst$kw$disabled);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text,"not supported yet"], null)], null);
});
react_native_web.components.checkbox = (function react_native_web$components$checkbox(p__5331){
var map__5332 = p__5331;
var map__5332__$1 = (((((!((map__5332 == null))))?(((((map__5332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5332):map__5332);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5332__$1,cljs.core.cst$kw$on_DASH_change);
var checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5332__$1,cljs.core.cst$kw$checked);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,status_im.colors.white], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text,"Not supported yet"], null)], null);
});
react_native_web.components.all = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$touchable_DASH_opacity,cljs.core.cst$sym$text,cljs.core.cst$sym$map_DASH_link,cljs.core.cst$sym$view,cljs.core.cst$sym$link,cljs.core.cst$sym$transaction_DASH_status,cljs.core.cst$sym$activity_DASH_indicator,cljs.core.cst$sym$keyboard_DASH_avoiding_DASH_view,cljs.core.cst$sym$image,cljs.core.cst$sym$nft_DASH_token_DASH_viewer,cljs.core.cst$sym$picker,cljs.core.cst$sym$map,cljs.core.cst$sym$input,cljs.core.cst$sym$scroll_DASH_view,cljs.core.cst$sym$checkbox,cljs.core.cst$sym$list,cljs.core.cst$sym$button,cljs.core.cst$sym$icon],[new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.touchable_opacity,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_press,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,react_native_web.components.text], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.component,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,cljs.core.cst$kw$string,cljs.core.cst$kw$lng,cljs.core.cst$kw$any,cljs.core.cst$kw$lat,cljs.core.cst$kw$any], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,react_native_web.components.view], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.link,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$uri,cljs.core.cst$kw$string,cljs.core.cst$kw$text_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$open_DASH_in_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$one_DASH_of,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$status,null,cljs.core.cst$kw$device,null], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.component,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$outgoing,cljs.core.cst$kw$string,cljs.core.cst$kw$tx_DASH_hash,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.activity_indicator,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$animating,cljs.core.cst$kw$boolean,cljs.core.cst$kw$color,cljs.core.cst$kw$string,cljs.core.cst$kw$size,cljs.core.cst$kw$keyword,cljs.core.cst$kw$hides_DASH_when_DASH_stopped,cljs.core.cst$kw$boolean], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,react_native_web.components.view], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.image,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$uri,cljs.core.cst$kw$string,cljs.core.cst$kw$source,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.component,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$token,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.component,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$event,cljs.core.cst$kw$selected,cljs.core.cst$kw$string,cljs.core.cst$kw$enabled,cljs.core.cst$kw$boolean,cljs.core.cst$kw$data,cljs.core.cst$kw$vector], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.component,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$marker,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$lng,cljs.core.cst$kw$number,cljs.core.cst$kw$lat,cljs.core.cst$kw$number,cljs.core.cst$kw$boundingbox,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$lng1,cljs.core.cst$kw$number,cljs.core.cst$kw$lat1,cljs.core.cst$kw$number,cljs.core.cst$kw$lng2,cljs.core.cst$kw$number,cljs.core.cst$kw$lat2,cljs.core.cst$kw$number], null)], null),cljs.core.cst$kw$fly_QMARK_,cljs.core.cst$kw$boolean,cljs.core.cst$kw$interactive_QMARK_,cljs.core.cst$kw$boolean,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.input,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$event,cljs.core.cst$kw$placeholder,cljs.core.cst$kw$string,cljs.core.cst$kw$keyboard_DASH_type,cljs.core.cst$kw$keyword,cljs.core.cst$kw$change_DASH_delay_QMARK_,cljs.core.cst$kw$number,cljs.core.cst$kw$placeholder_DASH_text_DASH_color,cljs.core.cst$kw$any,cljs.core.cst$kw$selection_DASH_color,cljs.core.cst$kw$any], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.scroll_view,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keyboard_DASH_should_DASH_persist_DASH_taps,cljs.core.cst$kw$keyword,cljs.core.cst$kw$content_DASH_container_DASH_style,cljs.core.cst$kw$map], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.checkbox,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$event,cljs.core.cst$kw$checked,cljs.core.cst$kw$boolean], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,cljs.core.list,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$data,cljs.core.cst$kw$vector,cljs.core.cst$kw$item_DASH_view,cljs.core.cst$kw$view,cljs.core.cst$kw$key_QMARK_,cljs.core.cst$kw$keyword], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.button,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$enabled,cljs.core.cst$kw$boolean,cljs.core.cst$kw$disabled,cljs.core.cst$kw$boolean,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.component,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,cljs.core.cst$kw$keyword,cljs.core.cst$kw$color,cljs.core.cst$kw$any], null)], null)]);
