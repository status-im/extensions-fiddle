// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.playground.components.source');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
pluto.playground.components.source.viewer = (function pluto$playground$components$source$viewer(p__1868){
var map__1869 = p__1868;
var map__1869__$1 = (((((!((map__1869 == null))))?(((((map__1869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1869):map__1869);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1869__$1,cljs.core.cst$kw$content);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component_DASH_did_DASH_mount,((function (map__1869,map__1869__$1,content){
return (function (this$){
var el = (new CodeMirror(reagent.core.dom_node(this$),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$lineWrapping,true,cljs.core.cst$kw$viewportMargin,(20),cljs.core.cst$kw$maxHighlightLength,Infinity,cljs.core.cst$kw$readOnly,true,cljs.core.cst$kw$mode,"clojure"], null))));
parinferCodeMirror.init(el);

parinferCodeMirror.setMode(el,"smart");

parinferCodeMirror.setOptions(el,({"forceBalance": true}));

return el.setValue(content);
});})(map__1869,map__1869__$1,content))
,cljs.core.cst$kw$reagent_DASH_render,((function (map__1869,map__1869__$1,content){
return (function (_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$overflow,"auto"], null)], null)], null);
});})(map__1869,map__1869__$1,content))
], null));
});
pluto.playground.components.source.editor = (function pluto$playground$components$source$editor(p__1871){
var map__1872 = p__1871;
var map__1872__$1 = (((((!((map__1872 == null))))?(((((map__1872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1872):map__1872);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1872__$1,cljs.core.cst$kw$on_DASH_change);
var debounce = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component_DASH_did_DASH_mount,((function (debounce,map__1872,map__1872__$1,on_change){
return (function (this$){
var el = (new CodeMirror(reagent.core.dom_node(this$),({"pollInterval": (1000)})));
parinferCodeMirror.init(el);

parinferCodeMirror.setMode(el,"smart");

parinferCodeMirror.setOptions(el,({"forceBalance": true}));

var G__1874_1876 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$code_DASH_mirror,el], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1874_1876) : re_frame.core.dispatch.call(null,G__1874_1876));

if(cljs.core.truth_(on_change)){
return el.on("change",((function (el,debounce,map__1872,map__1872__$1,on_change){
return (function (_){
if(cljs.core.truth_(cljs.core.deref(debounce))){
clearTimeout(cljs.core.deref(debounce));
} else {
}

return cljs.core.reset_BANG_(debounce,setTimeout(((function (el,debounce,map__1872,map__1872__$1,on_change){
return (function (){
var G__1875 = el.getValue();
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__1875) : on_change.call(null,G__1875));
});})(el,debounce,map__1872,map__1872__$1,on_change))
,(1000)));
});})(el,debounce,map__1872,map__1872__$1,on_change))
);
} else {
return null;
}
});})(debounce,map__1872,map__1872__$1,on_change))
,cljs.core.cst$kw$reagent_DASH_render,((function (debounce,map__1872,map__1872__$1,on_change){
return (function (_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,"59%"], null)], null)], null);
});})(debounce,map__1872,map__1872__$1,on_change))
], null));
});
pluto.playground.components.source.editor2 = (function pluto$playground$components$source$editor2(p__1877){
var map__1878 = p__1877;
var map__1878__$1 = (((((!((map__1878 == null))))?(((((map__1878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1878):map__1878);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1878__$1,cljs.core.cst$kw$on_DASH_change);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1878__$1,cljs.core.cst$kw$content);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component_DASH_did_DASH_mount,((function (map__1878,map__1878__$1,on_change,content){
return (function (this$){
var el = (new CodeMirror(reagent.core.dom_node(this$),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$lineWrapping,true,cljs.core.cst$kw$viewportMargin,(20),cljs.core.cst$kw$maxHighlightLength,Infinity,cljs.core.cst$kw$mode,"clojure"], null))));
parinferCodeMirror.init(el);

parinferCodeMirror.setMode(el,"smart");

parinferCodeMirror.setOptions(el,({"forceBalance": true}));

el.setValue(content);

if(cljs.core.truth_(on_change)){
return el.on("change",((function (el,map__1878,map__1878__$1,on_change,content){
return (function (){
var G__1880 = el.getValue();
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__1880) : on_change.call(null,G__1880));
});})(el,map__1878,map__1878__$1,on_change,content))
);
} else {
return null;
}
});})(map__1878,map__1878__$1,on_change,content))
,cljs.core.cst$kw$reagent_DASH_render,((function (map__1878,map__1878__$1,on_change,content){
return (function (_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$overflow,"auto"], null)], null)], null);
});})(map__1878,map__1878__$1,on_change,content))
], null));
});
