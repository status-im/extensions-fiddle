// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('react_native_web.react');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('status_im.typography');
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
var len__4730__auto___1289 = arguments.length;
var i__4731__auto___1290 = (0);
while(true){
if((i__4731__auto___1290 < len__4730__auto___1289)){
args__4736__auto__.push((arguments[i__4731__auto___1290]));

var G__1291 = (i__4731__auto___1290 + (1));
i__4731__auto___1290 = G__1291;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return react_native_web.react.view.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

react_native_web.react.view.cljs$core$IFn$_invoke$arity$variadic = (function (props){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view_class()], null),(function (){var G__1288 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,props);
if(((cljs.core.map_QMARK_(cljs.core.first(props))) && ((!(cljs.core.contains_QMARK_(cljs.core.first(props),cljs.core.cst$kw$style)))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__1288,(0),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.first(props)], null));
} else {
return G__1288;
}
})()));
});

react_native_web.react.view.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
react_native_web.react.view.cljs$lang$applyTo = (function (seq1287){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1287));
});

react_native_web.react.prepare_text_props = (function react_native_web$react$prepare_text_props(props){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(props,cljs.core.cst$kw$style,status_im.typography.get_style);
});
/**
 * For nested text elements, use nested-text instead
 */
react_native_web.react.text = (function react_native_web$react$text(var_args){
var G__1293 = arguments.length;
switch (G__1293) {
case 1:
return react_native_web.react.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return react_native_web.react.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

react_native_web.react.text.cljs$core$IFn$_invoke$arity$1 = (function (text_element){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text,cljs.core.PersistentArrayMap.EMPTY,text_element], null);
});

react_native_web.react.text.cljs$core$IFn$_invoke$arity$2 = (function (options,text_element){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text_class(),react_native_web.react.prepare_text_props(options),text_element], null);
});

react_native_web.react.text.cljs$lang$maxFixedArity = 2;

react_native_web.react.text_input = (function react_native_web$react$text_input(p__1295,text){
var map__1296 = p__1295;
var map__1296__$1 = (((((!((map__1296 == null))))?(((((map__1296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1296):map__1296);
var opts = map__1296__$1;
var font = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__1296__$1,cljs.core.cst$kw$font,cljs.core.cst$kw$default);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1296__$1,cljs.core.cst$kw$style);
var font__$1 = null;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text_input_class(),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$underline_DASH_color_DASH_android,cljs.core.cst$kw$transparent,cljs.core.cst$kw$value,text], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$font),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style,font__$1], 0)))], 0))], null);
});
