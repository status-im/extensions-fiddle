// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.playground.components.source');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
pluto.playground.components.source.viewer = (function pluto$playground$components$source$viewer(p__8189){
var map__8190 = p__8189;
var map__8190__$1 = (((((!((map__8190 == null))))?(((((map__8190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8190):map__8190);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8190__$1,cljs.core.cst$kw$on_DASH_change);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8190__$1,cljs.core.cst$kw$content);
var cm = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$component_DASH_did_DASH_mount,((function (cm,map__8190,map__8190__$1,on_change,content){
return (function (this$){
var el = (new CodeMirror(reagent.core.dom_node(this$),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$lineNumbers,true,cljs.core.cst$kw$viewportMargin,Infinity,cljs.core.cst$kw$matchBrackets,true,cljs.core.cst$kw$styleActiveLine,true,cljs.core.cst$kw$autofocus,true,cljs.core.cst$kw$mode,"clojure"], null))));
parinferCodeMirror.init(el);

el.setValue(cljs.core.deref(content));

if(cljs.core.truth_(on_change)){
el.on("change",((function (el,cm,map__8190,map__8190__$1,on_change,content){
return (function (){
var G__8192 = el.getValue();
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__8192) : on_change.call(null,G__8192));
});})(el,cm,map__8190,map__8190__$1,on_change,content))
);
} else {
}

return cljs.core.reset_BANG_(cm,el);
});})(cm,map__8190,map__8190__$1,on_change,content))
,cljs.core.cst$kw$component_DASH_did_DASH_update,((function (cm,map__8190,map__8190__$1,on_change,content){
return (function (this$,old_argv){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(content),cljs.core.deref(cm).getValue())){
return null;
} else {
cljs.core.deref(cm).setValue(cljs.core.deref(content));

var last_line = cljs.core.deref(cm).lastLine();
var last_ch = cljs.core.count(cljs.core.deref(cm).getLine(last_line));
return cljs.core.deref(cm).setCursor(last_line,last_ch);
}
});})(cm,map__8190,map__8190__$1,on_change,content))
,cljs.core.cst$kw$reagent_DASH_render,((function (cm,map__8190,map__8190__$1,on_change,content){
return (function (_){
cljs.core.deref(content);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"codemirror"], null)], null);
});})(cm,map__8190,map__8190__$1,on_change,content))
], null));
});
