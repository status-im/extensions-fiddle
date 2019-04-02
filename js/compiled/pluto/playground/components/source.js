// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.playground.components.source');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
pluto.playground.components.source.viewer = (function pluto$playground$components$source$viewer(p__1899){
var map__1900 = p__1899;
var map__1900__$1 = (((((!((map__1900 == null))))?(((((map__1900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1900):map__1900);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1900__$1,cljs.core.cst$kw$on_DASH_change);
var debounce = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component_DASH_did_DASH_mount,((function (debounce,map__1900,map__1900__$1,on_change){
return (function (this$){
var el = (new CodeMirror(reagent.core.dom_node(this$),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$viewportMargin,Infinity,cljs.core.cst$kw$matchBrackets,true,cljs.core.cst$kw$styleActiveLine,true,cljs.core.cst$kw$autofocus,true,cljs.core.cst$kw$mode,"clojure"], null))));
parinferCodeMirror.init(el);

var G__1902_1904 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$code_DASH_mirror,el], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1902_1904) : re_frame.core.dispatch.call(null,G__1902_1904));

if(cljs.core.truth_(on_change)){
return el.on("change",((function (el,debounce,map__1900,map__1900__$1,on_change){
return (function (_){
if(cljs.core.truth_(cljs.core.deref(debounce))){
clearTimeout(cljs.core.deref(debounce));
} else {
}

return cljs.core.reset_BANG_(debounce,setTimeout(((function (el,debounce,map__1900,map__1900__$1,on_change){
return (function (){
var G__1903 = el.getValue();
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__1903) : on_change.call(null,G__1903));
});})(el,debounce,map__1900,map__1900__$1,on_change))
,(400)));
});})(el,debounce,map__1900,map__1900__$1,on_change))
);
} else {
return null;
}
});})(debounce,map__1900,map__1900__$1,on_change))
,cljs.core.cst$kw$reagent_DASH_render,((function (debounce,map__1900,map__1900__$1,on_change){
return (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div], null);
});})(debounce,map__1900,map__1900__$1,on_change))
], null));
});
