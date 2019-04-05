// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('react_native_web.react');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('clojure.string');
react_native_web.react.adapt_class = (function react_native_web$react$adapt_class(class$){
if(cljs.core.truth_(class$)){
return reagent.core.adapt_react_class(class$);
} else {
return null;
}
});
react_native_web.react.get_web_class = (function react_native_web$react$get_web_class(name){
return react_native_web.react.adapt_class(goog.object.get(ReactNativeWeb,name));
});
react_native_web.react.view_class = (function react_native_web$react$view_class(){
return react_native_web.react.get_web_class("View");
});
react_native_web.react.text_class = (function react_native_web$react$text_class(){
return react_native_web.react.get_web_class("Text");
});
react_native_web.react.image = (function react_native_web$react$image(){
return react_native_web.react.get_web_class("Image");
});
react_native_web.react.touchable_highlight = (function react_native_web$react$touchable_highlight(){
return react_native_web.react.get_web_class("TouchableOpacity");
});
react_native_web.react.scroll_view = (function react_native_web$react$scroll_view(){
return react_native_web.react.get_web_class("ScrollView");
});
react_native_web.react.text_input_class = (function react_native_web$react$text_input_class(){
return react_native_web.react.get_web_class("TextInput");
});
react_native_web.react.activity_indicator = (function react_native_web$react$activity_indicator(){
return react_native_web.react.get_web_class("ActivityIndicator");
});
react_native_web.react.check_box = (function react_native_web$react$check_box(){
return react_native_web.react.get_web_class("CheckBox");
});
react_native_web.react.qr_code = (function react_native_web$react$qr_code(){
return react_native_web.react.adapt_class(QRCode);
});
react_native_web.react.view = (function react_native_web$react$view(var_args){
var args__4736__auto__ = [];
var len__4730__auto___1232 = arguments.length;
var i__4731__auto___1233 = (0);
while(true){
if((i__4731__auto___1233 < len__4730__auto___1232)){
args__4736__auto__.push((arguments[i__4731__auto___1233]));

var G__1234 = (i__4731__auto___1233 + (1));
i__4731__auto___1233 = G__1234;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return react_native_web.react.view.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

react_native_web.react.view.cljs$core$IFn$_invoke$arity$variadic = (function (props){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view_class()], null),(function (){var G__1231 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,props);
if(((cljs.core.map_QMARK_(cljs.core.first(props))) && ((!(cljs.core.contains_QMARK_(cljs.core.first(props),cljs.core.cst$kw$style)))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__1231,(0),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.first(props)], null));
} else {
return G__1231;
}
})()));
});

react_native_web.react.view.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
react_native_web.react.view.cljs$lang$applyTo = (function (seq1230){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1230));
});

react_native_web.react.add_font_style = (function react_native_web$react$add_font_style(style_key,p__1235){
var map__1236 = p__1235;
var map__1236__$1 = (((((!((map__1236 == null))))?(((((map__1236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1236):map__1236);
var opts = map__1236__$1;
var font = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__1236__$1,cljs.core.cst$kw$font,cljs.core.cst$kw$default);
var font__$1 = null;
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,style_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$font),style_key,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style,font__$1], 0)));
});
react_native_web.react.transform_to_uppercase = (function react_native_web$react$transform_to_uppercase(p__1238,ts){
var map__1239 = p__1238;
var map__1239__$1 = (((((!((map__1239 == null))))?(((((map__1239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1239):map__1239);
var opts = map__1239__$1;
var uppercase_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1239__$1,cljs.core.cst$kw$uppercase_QMARK_);
var force_uppercase_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1239__$1,cljs.core.cst$kw$force_DASH_uppercase_QMARK_);
if(cljs.core.truth_(force_uppercase_QMARK_)){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.upper_case,ts));
} else {
return ts;
}
});
react_native_web.react.text = (function react_native_web$react$text(var_args){
var G__1245 = arguments.length;
switch (G__1245) {
case 1:
return react_native_web.react.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___1247 = arguments.length;
var i__4731__auto___1248 = (0);
while(true){
if((i__4731__auto___1248 < len__4730__auto___1247)){
args_arr__4751__auto__.push((arguments[i__4731__auto___1248]));

var G__1249 = (i__4731__auto___1248 + (1));
i__4731__auto___1248 = G__1249;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return react_native_web.react.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

react_native_web.react.text.cljs$core$IFn$_invoke$arity$1 = (function (t){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text_class(),t], null);
});

react_native_web.react.text.cljs$core$IFn$_invoke$arity$variadic = (function (opts,t,ts){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text_class(),react_native_web.react.add_font_style(cljs.core.cst$kw$style,opts)], null),react_native_web.react.transform_to_uppercase(opts,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ts,t))));
});

/** @this {Function} */
react_native_web.react.text.cljs$lang$applyTo = (function (seq1242){
var G__1243 = cljs.core.first(seq1242);
var seq1242__$1 = cljs.core.next(seq1242);
var G__1244 = cljs.core.first(seq1242__$1);
var seq1242__$2 = cljs.core.next(seq1242__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1243,G__1244,seq1242__$2);
});

react_native_web.react.text.cljs$lang$maxFixedArity = (2);

react_native_web.react.text_input = (function react_native_web$react$text_input(p__1250,text){
var map__1251 = p__1250;
var map__1251__$1 = (((((!((map__1251 == null))))?(((((map__1251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1251):map__1251);
var opts = map__1251__$1;
var font = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__1251__$1,cljs.core.cst$kw$font,cljs.core.cst$kw$default);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1251__$1,cljs.core.cst$kw$style);
var font__$1 = null;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text_input_class(),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$underline_DASH_color_DASH_android,cljs.core.cst$kw$transparent,cljs.core.cst$kw$value,text], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$font),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style,font__$1], 0)))], 0))], null);
});
