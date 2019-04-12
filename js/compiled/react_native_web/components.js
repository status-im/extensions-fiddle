// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('react_native_web.components');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('react_native_web.react');
goog.require('re_frame.core');
goog.require('status_im.colors');
react_native_web.components.input = (function react_native_web$components$input(p__1301){
var map__1302 = p__1301;
var map__1302__$1 = (((((!((map__1302 == null))))?(((((map__1302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1302):map__1302);
var keyboard_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1302__$1,cljs.core.cst$kw$keyboard_DASH_type);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1302__$1,cljs.core.cst$kw$style);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1302__$1,cljs.core.cst$kw$on_DASH_change);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1302__$1,cljs.core.cst$kw$placeholder);
var placeholder_text_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1302__$1,cljs.core.cst$kw$placeholder_DASH_text_DASH_color);
var auto_focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1302__$1,cljs.core.cst$kw$auto_DASH_focus);
var on_submit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1302__$1,cljs.core.cst$kw$on_DASH_submit);
var default_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1302__$1,cljs.core.cst$kw$default_DASH_value);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text_input,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$placeholder,placeholder], null),(cljs.core.truth_(placeholder_text_color)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$placeholder_DASH_text_DASH_color,placeholder_text_color], null):null),(cljs.core.truth_(style)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,style], null):null),(cljs.core.truth_(keyboard_type)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyboard_DASH_type,keyboard_type], null):null),(cljs.core.truth_(auto_focus)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$auto_DASH_focus,auto_focus], null):null),(cljs.core.truth_(default_value)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default_DASH_value,default_value], null):null),(cljs.core.truth_(on_change)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_change_DASH_text,((function (map__1302,map__1302__$1,keyboard_type,style,on_change,placeholder,placeholder_text_color,auto_focus,on_submit,default_value){
return (function (p1__1300_SHARP_){
var G__1304 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,p1__1300_SHARP_], null);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__1304) : on_change.call(null,G__1304));
});})(map__1302,map__1302__$1,keyboard_type,style,on_change,placeholder,placeholder_text_color,auto_focus,on_submit,default_value))
], null):null),(cljs.core.truth_(on_submit)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_submit_DASH_editing,((function (map__1302,map__1302__$1,keyboard_type,style,on_change,placeholder,placeholder_text_color,auto_focus,on_submit,default_value){
return (function (){
var G__1305 = cljs.core.PersistentArrayMap.EMPTY;
return (on_submit.cljs$core$IFn$_invoke$arity$1 ? on_submit.cljs$core$IFn$_invoke$arity$1(G__1305) : on_submit.call(null,G__1305));
});})(map__1302,map__1302__$1,keyboard_type,style,on_change,placeholder,placeholder_text_color,auto_focus,on_submit,default_value))
], null):null)], 0))], null);
});
react_native_web.components.touchable_opacity = (function react_native_web$components$touchable_opacity(var_args){
var args__4736__auto__ = [];
var len__4730__auto___1312 = arguments.length;
var i__4731__auto___1313 = (0);
while(true){
if((i__4731__auto___1313 < len__4730__auto___1312)){
args__4736__auto__.push((arguments[i__4731__auto___1313]));

var G__1314 = (i__4731__auto___1313 + (1));
i__4731__auto___1313 = G__1314;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return react_native_web.components.touchable_opacity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

react_native_web.components.touchable_opacity.cljs$core$IFn$_invoke$arity$variadic = (function (p__1308,children){
var map__1309 = p__1308;
var map__1309__$1 = (((((!((map__1309 == null))))?(((((map__1309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1309):map__1309);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1309__$1,cljs.core.cst$kw$style);
var on_press = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1309__$1,cljs.core.cst$kw$on_DASH_press);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.touchable_highlight(),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(on_press)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_press,((function (map__1309,map__1309__$1,style,on_press){
return (function (){
var G__1311 = cljs.core.PersistentArrayMap.EMPTY;
return (on_press.cljs$core$IFn$_invoke$arity$1 ? on_press.cljs$core$IFn$_invoke$arity$1(G__1311) : on_press.call(null,G__1311));
});})(map__1309,map__1309__$1,style,on_press))
], null):null),(cljs.core.truth_(style)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,style], null):null)], 0))], null),children);
});

react_native_web.components.touchable_opacity.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
react_native_web.components.touchable_opacity.cljs$lang$applyTo = (function (seq1306){
var G__1307 = cljs.core.first(seq1306);
var seq1306__$1 = cljs.core.next(seq1306);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1307,seq1306__$1);
});

react_native_web.components.image = (function react_native_web$components$image(p__1315){
var map__1316 = p__1315;
var map__1316__$1 = (((((!((map__1316 == null))))?(((((map__1316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1316):map__1316);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1316__$1,cljs.core.cst$kw$uri);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1316__$1,cljs.core.cst$kw$style);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.image(),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(100),cljs.core.cst$kw$height,(100)], null),style], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$source,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$uri,uri], null)], null)], 0))], null);
});
react_native_web.components.link = (function react_native_web$components$link(p__1318){
var map__1319 = p__1318;
var map__1319__$1 = (((((!((map__1319 == null))))?(((((map__1319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1319):map__1319);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1319__$1,cljs.core.cst$kw$uri);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,status_im.colors.white,cljs.core.cst$kw$text_DASH_decoration_DASH_line,cljs.core.cst$kw$underline], null),cljs.core.cst$kw$on_DASH_press,((function (map__1319,map__1319__$1,uri){
return (function (){
var G__1321 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$browser$ui_SLASH_message_DASH_link_DASH_pressed,uri], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1321) : re_frame.core.dispatch.call(null,G__1321));
});})(map__1319,map__1319__$1,uri))
], null),uri], null);
});
react_native_web.components.activity_indicator_size = (function react_native_web$components$activity_indicator_size(k){
var pred__1322 = cljs.core._EQ_;
var expr__1323 = k;
if(cljs.core.truth_((function (){var G__1325 = cljs.core.cst$kw$small;
var G__1326 = expr__1323;
return (pred__1322.cljs$core$IFn$_invoke$arity$2 ? pred__1322.cljs$core$IFn$_invoke$arity$2(G__1325,G__1326) : pred__1322.call(null,G__1325,G__1326));
})())){
return "small";
} else {
if(cljs.core.truth_((function (){var G__1327 = cljs.core.cst$kw$large;
var G__1328 = expr__1323;
return (pred__1322.cljs$core$IFn$_invoke$arity$2 ? pred__1322.cljs$core$IFn$_invoke$arity$2(G__1327,G__1328) : pred__1322.call(null,G__1327,G__1328));
})())){
return "large";
} else {
return null;
}
}
});
react_native_web.components.activity_indicator = (function react_native_web$components$activity_indicator(p__1329){
var map__1330 = p__1329;
var map__1330__$1 = (((((!((map__1330 == null))))?(((((map__1330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1330):map__1330);
var animating = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1330__$1,cljs.core.cst$kw$animating);
var hides_when_stopped = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1330__$1,cljs.core.cst$kw$hides_DASH_when_DASH_stopped);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1330__$1,cljs.core.cst$kw$color);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1330__$1,cljs.core.cst$kw$size);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.activity_indicator(),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(animating)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$animating,animating], null):null),(cljs.core.truth_(hides_when_stopped)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hidesWhenStopped,hides_when_stopped], null):null),(cljs.core.truth_(color)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,color], null):null),(function (){var temp__5457__auto__ = react_native_web.components.activity_indicator_size(size);
if(cljs.core.truth_(temp__5457__auto__)){
var size_SINGLEQUOTE_ = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,size_SINGLEQUOTE_], null);
} else {
return null;
}
})()], 0))], null);
});
react_native_web.components.wrap_text_child = (function react_native_web$components$wrap_text_child(o){
if(cljs.core.ifn_QMARK_(o)){
return o;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(o);
}
});
react_native_web.components.text = (function react_native_web$components$text(var_args){
var args__4736__auto__ = [];
var len__4730__auto___1334 = arguments.length;
var i__4731__auto___1335 = (0);
while(true){
if((i__4731__auto___1335 < len__4730__auto___1334)){
args__4736__auto__.push((arguments[i__4731__auto___1335]));

var G__1336 = (i__4731__auto___1335 + (1));
i__4731__auto___1335 = G__1336;
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text,o], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(react_native_web.components.wrap_text_child,children));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text,cljs.core.PersistentArrayMap.EMPTY,o], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(react_native_web.components.wrap_text_child,children));
}
});

react_native_web.components.text.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
react_native_web.components.text.cljs$lang$applyTo = (function (seq1332){
var G__1333 = cljs.core.first(seq1332);
var seq1332__$1 = cljs.core.next(seq1332);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1333,seq1332__$1);
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
var len__4730__auto___1340 = arguments.length;
var i__4731__auto___1341 = (0);
while(true){
if((i__4731__auto___1341 < len__4730__auto___1340)){
args__4736__auto__.push((arguments[i__4731__auto___1341]));

var G__1342 = (i__4731__auto___1341 + (1));
i__4731__auto___1341 = G__1342;
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
react_native_web.components.abstract_view.cljs$lang$applyTo = (function (seq1337){
var G__1338 = cljs.core.first(seq1337);
var seq1337__$1 = cljs.core.next(seq1337);
var G__1339 = cljs.core.first(seq1337__$1);
var seq1337__$2 = cljs.core.next(seq1337__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1338,G__1339,seq1337__$2);
});

react_native_web.components.view = (function react_native_web$components$view(var_args){
var args__4736__auto__ = [];
var len__4730__auto___1345 = arguments.length;
var i__4731__auto___1346 = (0);
while(true){
if((i__4731__auto___1346 < len__4730__auto___1345)){
args__4736__auto__.push((arguments[i__4731__auto___1346]));

var G__1347 = (i__4731__auto___1346 + (1));
i__4731__auto___1346 = G__1347;
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
react_native_web.components.view.cljs$lang$applyTo = (function (seq1343){
var G__1344 = cljs.core.first(seq1343);
var seq1343__$1 = cljs.core.next(seq1343);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1344,seq1343__$1);
});

react_native_web.components.scroll_view = (function react_native_web$components$scroll_view(var_args){
var args__4736__auto__ = [];
var len__4730__auto___1350 = arguments.length;
var i__4731__auto___1351 = (0);
while(true){
if((i__4731__auto___1351 < len__4730__auto___1350)){
args__4736__auto__.push((arguments[i__4731__auto___1351]));

var G__1352 = (i__4731__auto___1351 + (1));
i__4731__auto___1351 = G__1352;
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
react_native_web.components.scroll_view.cljs$lang$applyTo = (function (seq1348){
var G__1349 = cljs.core.first(seq1348);
var seq1348__$1 = cljs.core.next(seq1348);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1349,seq1348__$1);
});

react_native_web.components.flat_list = (function react_native_web$components$flat_list(p__1353){
var map__1354 = p__1353;
var map__1354__$1 = (((((!((map__1354 == null))))?(((((map__1354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1354):map__1354);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1354__$1,cljs.core.cst$kw$key);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1354__$1,cljs.core.cst$kw$data);
var item_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1354__$1,cljs.core.cst$kw$item_DASH_view);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.scroll_view(),(function (){var iter__4523__auto__ = ((function (map__1354,map__1354__$1,key,data,item_view){
return (function react_native_web$components$flat_list_$_iter__1356(s__1357){
return (new cljs.core.LazySeq(null,((function (map__1354,map__1354__$1,key,data,item_view){
return (function (){
var s__1357__$1 = s__1357;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__1357__$1);
if(temp__5457__auto__){
var s__1357__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1357__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__1357__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__1359 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__1358 = (0);
while(true){
if((i__1358 < size__4522__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__1358);
cljs.core.chunk_append(b__1359,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_view,item], null));

var G__1360 = (i__1358 + (1));
i__1358 = G__1360;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1359),react_native_web$components$flat_list_$_iter__1356(cljs.core.chunk_rest(s__1357__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1359),null);
}
} else {
var item = cljs.core.first(s__1357__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_view,item], null),react_native_web$components$flat_list_$_iter__1356(cljs.core.rest(s__1357__$2)));
}
} else {
return null;
}
break;
}
});})(map__1354,map__1354__$1,key,data,item_view))
,null,null));
});})(map__1354,map__1354__$1,key,data,item_view))
;
return iter__4523__auto__(data);
})()], null);
});
react_native_web.components.button = (function react_native_web$components$button(p__1361,label){
var map__1362 = p__1361;
var map__1362__$1 = (((((!((map__1362 == null))))?(((((map__1362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1362):map__1362);
var m = map__1362__$1;
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1362__$1,cljs.core.cst$kw$on_DASH_click);
var enabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1362__$1,cljs.core.cst$kw$enabled);
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1362__$1,cljs.core.cst$kw$disabled);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.components.touchable_opacity,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_press,(cljs.core.truth_(on_click)?on_click:null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$background_DASH_color,status_im.colors.blue_light,cljs.core.cst$kw$border_DASH_radius,(4),cljs.core.cst$kw$padding,(5),cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text,label], null)], null)], null);
});
react_native_web.components.checkbox = (function react_native_web$components$checkbox(p__1365){
var map__1366 = p__1365;
var map__1366__$1 = (((((!((map__1366 == null))))?(((((map__1366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1366):map__1366);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1366__$1,cljs.core.cst$kw$on_DASH_change);
var checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1366__$1,cljs.core.cst$kw$checked);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,status_im.colors.white], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.check_box(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,checked,cljs.core.cst$kw$on_DASH_value_DASH_change,((function (map__1366,map__1366__$1,on_change,checked){
return (function (p1__1364_SHARP_){
var G__1368 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,p1__1364_SHARP_], null);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__1368) : on_change.call(null,G__1368));
});})(map__1366,map__1366__$1,on_change,checked))
], null)], null)], null);
});
react_native_web.components.component = (function react_native_web$components$component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.components.text,"Not supported yet"], null);
});
react_native_web.components.all = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$touchable_DASH_opacity,cljs.core.cst$sym$text,cljs.core.cst$sym$map_DASH_link,cljs.core.cst$sym$view,cljs.core.cst$sym$link,cljs.core.cst$sym$transaction_DASH_status,cljs.core.cst$sym$activity_DASH_indicator,cljs.core.cst$sym$keyboard_DASH_avoiding_DASH_view,cljs.core.cst$sym$image,cljs.core.cst$sym$nft_DASH_token_DASH_viewer,cljs.core.cst$sym$picker,cljs.core.cst$sym$map,cljs.core.cst$sym$input,cljs.core.cst$sym$scroll_DASH_view,cljs.core.cst$sym$checkbox,cljs.core.cst$sym$list,cljs.core.cst$sym$button,cljs.core.cst$sym$icon],[new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.touchable_opacity,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_press,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,react_native_web.components.text], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.component,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,cljs.core.cst$kw$string,cljs.core.cst$kw$lng,cljs.core.cst$kw$any,cljs.core.cst$kw$lat,cljs.core.cst$kw$any], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,react_native_web.components.view], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.link,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$uri,cljs.core.cst$kw$string,cljs.core.cst$kw$text_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$open_DASH_in_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$one_DASH_of,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$status,null,cljs.core.cst$kw$device,null], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.component,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$outgoing,cljs.core.cst$kw$string,cljs.core.cst$kw$tx_DASH_hash,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.activity_indicator,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$animating,cljs.core.cst$kw$boolean,cljs.core.cst$kw$color,cljs.core.cst$kw$string,cljs.core.cst$kw$size,cljs.core.cst$kw$keyword,cljs.core.cst$kw$hides_DASH_when_DASH_stopped,cljs.core.cst$kw$boolean], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,react_native_web.components.view], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.image,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$uri,cljs.core.cst$kw$string,cljs.core.cst$kw$source,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.component,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$token,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.component,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$event,cljs.core.cst$kw$selected,cljs.core.cst$kw$string,cljs.core.cst$kw$enabled,cljs.core.cst$kw$boolean,cljs.core.cst$kw$data,cljs.core.cst$kw$vector], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.component,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$marker,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$lng,cljs.core.cst$kw$number,cljs.core.cst$kw$lat,cljs.core.cst$kw$number,cljs.core.cst$kw$boundingbox,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$lng1,cljs.core.cst$kw$number,cljs.core.cst$kw$lat1,cljs.core.cst$kw$number,cljs.core.cst$kw$lng2,cljs.core.cst$kw$number,cljs.core.cst$kw$lat2,cljs.core.cst$kw$number], null)], null),cljs.core.cst$kw$fly_QMARK_,cljs.core.cst$kw$boolean,cljs.core.cst$kw$interactive_QMARK_,cljs.core.cst$kw$boolean,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.input,cljs.core.cst$kw$properties,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$auto_DASH_focus_QMARK_,cljs.core.cst$kw$placeholder,cljs.core.cst$kw$default_DASH_value,cljs.core.cst$kw$selection_DASH_color,cljs.core.cst$kw$change_DASH_delay_QMARK_,cljs.core.cst$kw$placeholder_DASH_text_DASH_color,cljs.core.cst$kw$on_DASH_submit,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$keyboard_DASH_type],[cljs.core.cst$kw$boolean,cljs.core.cst$kw$string,cljs.core.cst$kw$any,cljs.core.cst$kw$any,cljs.core.cst$kw$number,cljs.core.cst$kw$any,cljs.core.cst$kw$event,cljs.core.cst$kw$event,cljs.core.cst$kw$keyword])], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.scroll_view,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keyboard_DASH_should_DASH_persist_DASH_taps,cljs.core.cst$kw$keyword,cljs.core.cst$kw$content_DASH_container_DASH_style,cljs.core.cst$kw$map], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.checkbox,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$event,cljs.core.cst$kw$checked,cljs.core.cst$kw$boolean], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.flat_list,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$data,cljs.core.cst$kw$vector,cljs.core.cst$kw$item_DASH_view,cljs.core.cst$kw$view,cljs.core.cst$kw$key_QMARK_,cljs.core.cst$kw$keyword], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.button,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$enabled,cljs.core.cst$kw$boolean,cljs.core.cst$kw$disabled,cljs.core.cst$kw$boolean,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.view,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,cljs.core.cst$kw$keyword,cljs.core.cst$kw$color,cljs.core.cst$kw$any], null)], null)]);
