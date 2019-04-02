// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('react_native_web.components');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('react_native_web.react');
goog.require('re_frame.core');
goog.require('status_im.colors');
react_native_web.components.input = (function react_native_web$components$input(p__1256){
var map__1257 = p__1256;
var map__1257__$1 = (((((!((map__1257 == null))))?(((((map__1257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1257):map__1257);
var keyboard_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1257__$1,cljs.core.cst$kw$keyboard_DASH_type);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1257__$1,cljs.core.cst$kw$style);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1257__$1,cljs.core.cst$kw$on_DASH_change);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1257__$1,cljs.core.cst$kw$placeholder);
var placeholder_text_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1257__$1,cljs.core.cst$kw$placeholder_DASH_text_DASH_color);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text_input,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$placeholder,placeholder], null),(cljs.core.truth_(placeholder_text_color)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$placeholder_DASH_text_DASH_color,placeholder_text_color], null):null),(cljs.core.truth_(style)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,style], null):null),(cljs.core.truth_(keyboard_type)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyboard_DASH_type,keyboard_type], null):null),(cljs.core.truth_(on_change)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_change_DASH_text,((function (map__1257,map__1257__$1,keyboard_type,style,on_change,placeholder,placeholder_text_color){
return (function (p1__1255_SHARP_){
var G__1259 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,p1__1255_SHARP_], null);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__1259) : on_change.call(null,G__1259));
});})(map__1257,map__1257__$1,keyboard_type,style,on_change,placeholder,placeholder_text_color))
], null):null)], 0))], null);
});
react_native_web.components.touchable_opacity = (function react_native_web$components$touchable_opacity(var_args){
var args__4736__auto__ = [];
var len__4730__auto___1266 = arguments.length;
var i__4731__auto___1267 = (0);
while(true){
if((i__4731__auto___1267 < len__4730__auto___1266)){
args__4736__auto__.push((arguments[i__4731__auto___1267]));

var G__1268 = (i__4731__auto___1267 + (1));
i__4731__auto___1267 = G__1268;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return react_native_web.components.touchable_opacity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

react_native_web.components.touchable_opacity.cljs$core$IFn$_invoke$arity$variadic = (function (p__1262,children){
var map__1263 = p__1262;
var map__1263__$1 = (((((!((map__1263 == null))))?(((((map__1263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1263):map__1263);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1263__$1,cljs.core.cst$kw$style);
var on_press = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1263__$1,cljs.core.cst$kw$on_DASH_press);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.touchable_highlight(),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(on_press)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_press,((function (map__1263,map__1263__$1,style,on_press){
return (function (){
var G__1265 = cljs.core.PersistentArrayMap.EMPTY;
return (on_press.cljs$core$IFn$_invoke$arity$1 ? on_press.cljs$core$IFn$_invoke$arity$1(G__1265) : on_press.call(null,G__1265));
});})(map__1263,map__1263__$1,style,on_press))
], null):null),(cljs.core.truth_(style)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,style], null):null)], 0))], null),children);
});

react_native_web.components.touchable_opacity.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
react_native_web.components.touchable_opacity.cljs$lang$applyTo = (function (seq1260){
var G__1261 = cljs.core.first(seq1260);
var seq1260__$1 = cljs.core.next(seq1260);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1261,seq1260__$1);
});

react_native_web.components.image = (function react_native_web$components$image(p__1269){
var map__1270 = p__1269;
var map__1270__$1 = (((((!((map__1270 == null))))?(((((map__1270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1270):map__1270);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1270__$1,cljs.core.cst$kw$uri);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1270__$1,cljs.core.cst$kw$style);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.image(),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(100),cljs.core.cst$kw$height,(100)], null),style], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$source,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$uri,uri], null)], null)], 0))], null);
});
react_native_web.components.link = (function react_native_web$components$link(p__1272){
var map__1273 = p__1272;
var map__1273__$1 = (((((!((map__1273 == null))))?(((((map__1273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1273):map__1273);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1273__$1,cljs.core.cst$kw$uri);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,status_im.colors.white,cljs.core.cst$kw$text_DASH_decoration_DASH_line,cljs.core.cst$kw$underline], null),cljs.core.cst$kw$on_DASH_press,((function (map__1273,map__1273__$1,uri){
return (function (){
var G__1275 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$browser$ui_SLASH_message_DASH_link_DASH_pressed,uri], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1275) : re_frame.core.dispatch.call(null,G__1275));
});})(map__1273,map__1273__$1,uri))
], null),uri], null);
});
react_native_web.components.activity_indicator_size = (function react_native_web$components$activity_indicator_size(k){
var pred__1276 = cljs.core._EQ_;
var expr__1277 = k;
if(cljs.core.truth_((function (){var G__1279 = cljs.core.cst$kw$small;
var G__1280 = expr__1277;
return (pred__1276.cljs$core$IFn$_invoke$arity$2 ? pred__1276.cljs$core$IFn$_invoke$arity$2(G__1279,G__1280) : pred__1276.call(null,G__1279,G__1280));
})())){
return "small";
} else {
if(cljs.core.truth_((function (){var G__1281 = cljs.core.cst$kw$large;
var G__1282 = expr__1277;
return (pred__1276.cljs$core$IFn$_invoke$arity$2 ? pred__1276.cljs$core$IFn$_invoke$arity$2(G__1281,G__1282) : pred__1276.call(null,G__1281,G__1282));
})())){
return "large";
} else {
return null;
}
}
});
react_native_web.components.activity_indicator = (function react_native_web$components$activity_indicator(p__1283){
var map__1284 = p__1283;
var map__1284__$1 = (((((!((map__1284 == null))))?(((((map__1284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1284):map__1284);
var animating = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1284__$1,cljs.core.cst$kw$animating);
var hides_when_stopped = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1284__$1,cljs.core.cst$kw$hides_DASH_when_DASH_stopped);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1284__$1,cljs.core.cst$kw$color);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1284__$1,cljs.core.cst$kw$size);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.activity_indicator(),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(animating)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$animating,animating], null):null),(cljs.core.truth_(hides_when_stopped)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hidesWhenStopped,hides_when_stopped], null):null),(cljs.core.truth_(color)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,color], null):null),(function (){var temp__5720__auto__ = react_native_web.components.activity_indicator_size(size);
if(cljs.core.truth_(temp__5720__auto__)){
var size_SINGLEQUOTE_ = temp__5720__auto__;
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
var len__4730__auto___1288 = arguments.length;
var i__4731__auto___1289 = (0);
while(true){
if((i__4731__auto___1289 < len__4730__auto___1288)){
args__4736__auto__.push((arguments[i__4731__auto___1289]));

var G__1290 = (i__4731__auto___1289 + (1));
i__4731__auto___1289 = G__1290;
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
react_native_web.components.text.cljs$lang$applyTo = (function (seq1286){
var G__1287 = cljs.core.first(seq1286);
var seq1286__$1 = cljs.core.next(seq1286);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1287,seq1286__$1);
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
var len__4730__auto___1294 = arguments.length;
var i__4731__auto___1295 = (0);
while(true){
if((i__4731__auto___1295 < len__4730__auto___1294)){
args__4736__auto__.push((arguments[i__4731__auto___1295]));

var G__1296 = (i__4731__auto___1295 + (1));
i__4731__auto___1295 = G__1296;
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
react_native_web.components.abstract_view.cljs$lang$applyTo = (function (seq1291){
var G__1292 = cljs.core.first(seq1291);
var seq1291__$1 = cljs.core.next(seq1291);
var G__1293 = cljs.core.first(seq1291__$1);
var seq1291__$2 = cljs.core.next(seq1291__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1292,G__1293,seq1291__$2);
});

react_native_web.components.view = (function react_native_web$components$view(var_args){
var args__4736__auto__ = [];
var len__4730__auto___1299 = arguments.length;
var i__4731__auto___1300 = (0);
while(true){
if((i__4731__auto___1300 < len__4730__auto___1299)){
args__4736__auto__.push((arguments[i__4731__auto___1300]));

var G__1301 = (i__4731__auto___1300 + (1));
i__4731__auto___1300 = G__1301;
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
react_native_web.components.view.cljs$lang$applyTo = (function (seq1297){
var G__1298 = cljs.core.first(seq1297);
var seq1297__$1 = cljs.core.next(seq1297);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1298,seq1297__$1);
});

react_native_web.components.scroll_view = (function react_native_web$components$scroll_view(var_args){
var args__4736__auto__ = [];
var len__4730__auto___1304 = arguments.length;
var i__4731__auto___1305 = (0);
while(true){
if((i__4731__auto___1305 < len__4730__auto___1304)){
args__4736__auto__.push((arguments[i__4731__auto___1305]));

var G__1306 = (i__4731__auto___1305 + (1));
i__4731__auto___1305 = G__1306;
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
react_native_web.components.scroll_view.cljs$lang$applyTo = (function (seq1302){
var G__1303 = cljs.core.first(seq1302);
var seq1302__$1 = cljs.core.next(seq1302);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1303,seq1302__$1);
});

react_native_web.components.flat_list = (function react_native_web$components$flat_list(p__1307){
var map__1308 = p__1307;
var map__1308__$1 = (((((!((map__1308 == null))))?(((((map__1308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1308):map__1308);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1308__$1,cljs.core.cst$kw$key);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1308__$1,cljs.core.cst$kw$data);
var item_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1308__$1,cljs.core.cst$kw$item_DASH_view);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.scroll_view(),(function (){var iter__4523__auto__ = ((function (map__1308,map__1308__$1,key,data,item_view){
return (function react_native_web$components$flat_list_$_iter__1310(s__1311){
return (new cljs.core.LazySeq(null,((function (map__1308,map__1308__$1,key,data,item_view){
return (function (){
var s__1311__$1 = s__1311;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__1311__$1);
if(temp__5720__auto__){
var s__1311__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1311__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__1311__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__1313 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__1312 = (0);
while(true){
if((i__1312 < size__4522__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__1312);
cljs.core.chunk_append(b__1313,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_view,item], null));

var G__1314 = (i__1312 + (1));
i__1312 = G__1314;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1313),react_native_web$components$flat_list_$_iter__1310(cljs.core.chunk_rest(s__1311__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1313),null);
}
} else {
var item = cljs.core.first(s__1311__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_view,item], null),react_native_web$components$flat_list_$_iter__1310(cljs.core.rest(s__1311__$2)));
}
} else {
return null;
}
break;
}
});})(map__1308,map__1308__$1,key,data,item_view))
,null,null));
});})(map__1308,map__1308__$1,key,data,item_view))
;
return iter__4523__auto__(data);
})()], null);
});
react_native_web.components.button = (function react_native_web$components$button(p__1315,label){
var map__1316 = p__1315;
var map__1316__$1 = (((((!((map__1316 == null))))?(((((map__1316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1316):map__1316);
var m = map__1316__$1;
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1316__$1,cljs.core.cst$kw$on_DASH_click);
var enabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1316__$1,cljs.core.cst$kw$enabled);
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1316__$1,cljs.core.cst$kw$disabled);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.components.touchable_opacity,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_press,(cljs.core.truth_(on_click)?on_click:null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$background_DASH_color,status_im.colors.blue_light,cljs.core.cst$kw$border_DASH_radius,(4),cljs.core.cst$kw$padding,(5),cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text,label], null)], null)], null);
});
react_native_web.components.checkbox = (function react_native_web$components$checkbox(p__1319){
var map__1320 = p__1319;
var map__1320__$1 = (((((!((map__1320 == null))))?(((((map__1320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1320):map__1320);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1320__$1,cljs.core.cst$kw$on_DASH_change);
var checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1320__$1,cljs.core.cst$kw$checked);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,status_im.colors.white], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.check_box(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,checked,cljs.core.cst$kw$on_DASH_value_DASH_change,((function (map__1320,map__1320__$1,on_change,checked){
return (function (p1__1318_SHARP_){
var G__1322 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,p1__1318_SHARP_], null);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__1322) : on_change.call(null,G__1322));
});})(map__1320,map__1320__$1,on_change,checked))
], null)], null)], null);
});
react_native_web.components.component = (function react_native_web$components$component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.components.text,"Not supported yet"], null);
});
react_native_web.components.all = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$touchable_DASH_opacity,cljs.core.cst$sym$text,cljs.core.cst$sym$map_DASH_link,cljs.core.cst$sym$view,cljs.core.cst$sym$link,cljs.core.cst$sym$transaction_DASH_status,cljs.core.cst$sym$activity_DASH_indicator,cljs.core.cst$sym$keyboard_DASH_avoiding_DASH_view,cljs.core.cst$sym$image,cljs.core.cst$sym$nft_DASH_token_DASH_viewer,cljs.core.cst$sym$picker,cljs.core.cst$sym$map,cljs.core.cst$sym$input,cljs.core.cst$sym$scroll_DASH_view,cljs.core.cst$sym$checkbox,cljs.core.cst$sym$list,cljs.core.cst$sym$button,cljs.core.cst$sym$icon],[new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.touchable_opacity,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_press,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,react_native_web.components.text], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.component,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,cljs.core.cst$kw$string,cljs.core.cst$kw$lng,cljs.core.cst$kw$any,cljs.core.cst$kw$lat,cljs.core.cst$kw$any], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,react_native_web.components.view], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.link,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$uri,cljs.core.cst$kw$string,cljs.core.cst$kw$text_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$open_DASH_in_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$one_DASH_of,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$status,null,cljs.core.cst$kw$device,null], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.component,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$outgoing,cljs.core.cst$kw$string,cljs.core.cst$kw$tx_DASH_hash,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.activity_indicator,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$animating,cljs.core.cst$kw$boolean,cljs.core.cst$kw$color,cljs.core.cst$kw$string,cljs.core.cst$kw$size,cljs.core.cst$kw$keyword,cljs.core.cst$kw$hides_DASH_when_DASH_stopped,cljs.core.cst$kw$boolean], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,react_native_web.components.view], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.image,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$uri,cljs.core.cst$kw$string,cljs.core.cst$kw$source,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.component,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$token,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.component,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$event,cljs.core.cst$kw$selected,cljs.core.cst$kw$string,cljs.core.cst$kw$enabled,cljs.core.cst$kw$boolean,cljs.core.cst$kw$data,cljs.core.cst$kw$vector], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.component,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$marker,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$lng,cljs.core.cst$kw$number,cljs.core.cst$kw$lat,cljs.core.cst$kw$number,cljs.core.cst$kw$boundingbox,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$lng1,cljs.core.cst$kw$number,cljs.core.cst$kw$lat1,cljs.core.cst$kw$number,cljs.core.cst$kw$lng2,cljs.core.cst$kw$number,cljs.core.cst$kw$lat2,cljs.core.cst$kw$number], null)], null),cljs.core.cst$kw$fly_QMARK_,cljs.core.cst$kw$boolean,cljs.core.cst$kw$interactive_QMARK_,cljs.core.cst$kw$boolean,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.input,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$event,cljs.core.cst$kw$placeholder,cljs.core.cst$kw$string,cljs.core.cst$kw$keyboard_DASH_type,cljs.core.cst$kw$keyword,cljs.core.cst$kw$change_DASH_delay_QMARK_,cljs.core.cst$kw$number,cljs.core.cst$kw$placeholder_DASH_text_DASH_color,cljs.core.cst$kw$any,cljs.core.cst$kw$selection_DASH_color,cljs.core.cst$kw$any], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.scroll_view,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keyboard_DASH_should_DASH_persist_DASH_taps,cljs.core.cst$kw$keyword,cljs.core.cst$kw$content_DASH_container_DASH_style,cljs.core.cst$kw$map], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.checkbox,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$event,cljs.core.cst$kw$checked,cljs.core.cst$kw$boolean], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.flat_list,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$data,cljs.core.cst$kw$vector,cljs.core.cst$kw$item_DASH_view,cljs.core.cst$kw$view,cljs.core.cst$kw$key_QMARK_,cljs.core.cst$kw$keyword], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.button,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$enabled,cljs.core.cst$kw$boolean,cljs.core.cst$kw$disabled,cljs.core.cst$kw$boolean,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.component,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,cljs.core.cst$kw$keyword,cljs.core.cst$kw$color,cljs.core.cst$kw$any], null)], null)]);
