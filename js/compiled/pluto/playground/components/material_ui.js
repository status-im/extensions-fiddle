// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.playground.components.material_ui');
goog.require('cljs.core');
goog.require('cljs.core.constants');
pluto.playground.components.material_ui.Button = (MaterialUI["Button"]);
pluto.playground.components.material_ui.Input = (MaterialUI["Input"]);
pluto.playground.components.material_ui.button = (function pluto$playground$components$material_ui$button(props,label){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.material_ui.Button,props,label], null);
});
pluto.playground.components.material_ui.Switch = (MaterialUI["Switch"]);
pluto.playground.components.material_ui.switch$ = (function pluto$playground$components$material_ui$switch(props){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.material_ui.Switch,props], null);
});
pluto.playground.components.material_ui.Select = (MaterialUI["Select"]);
pluto.playground.components.material_ui.MenuItem = (MaterialUI["MenuItem"]);
pluto.playground.components.material_ui.select = (function pluto$playground$components$material_ui$select(p__1938){
var map__1939 = p__1938;
var map__1939__$1 = (((((!((map__1939 == null))))?(((((map__1939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1939):map__1939);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1939__$1,cljs.core.cst$kw$on_DASH_change);
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1939__$1,cljs.core.cst$kw$selected);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1939__$1,cljs.core.cst$kw$options);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.material_ui.Select,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,(function (){var or__4131__auto__ = selected;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})(),cljs.core.cst$kw$on_DASH_change,on_change,cljs.core.cst$kw$auto_DASH_width,true], null),(function (){var iter__4523__auto__ = ((function (map__1939,map__1939__$1,on_change,selected,options){
return (function pluto$playground$components$material_ui$select_$_iter__1941(s__1942){
return (new cljs.core.LazySeq(null,((function (map__1939,map__1939__$1,on_change,selected,options){
return (function (){
var s__1942__$1 = s__1942;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__1942__$1);
if(temp__5720__auto__){
var s__1942__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1942__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__1942__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__1944 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__1943 = (0);
while(true){
if((i__1943 < size__4522__auto__)){
var map__1945 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__1943);
var map__1945__$1 = (((((!((map__1945 == null))))?(((((map__1945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1945):map__1945);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1945__$1,cljs.core.cst$kw$value);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1945__$1,cljs.core.cst$kw$label);
cljs.core.chunk_append(b__1944,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.material_ui.MenuItem,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,value], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,value], null)));

var G__1949 = (i__1943 + (1));
i__1943 = G__1949;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1944),pluto$playground$components$material_ui$select_$_iter__1941(cljs.core.chunk_rest(s__1942__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1944),null);
}
} else {
var map__1947 = cljs.core.first(s__1942__$2);
var map__1947__$1 = (((((!((map__1947 == null))))?(((((map__1947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1947):map__1947);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1947__$1,cljs.core.cst$kw$value);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1947__$1,cljs.core.cst$kw$label);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.material_ui.MenuItem,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,value], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,value], null)),pluto$playground$components$material_ui$select_$_iter__1941(cljs.core.rest(s__1942__$2)));
}
} else {
return null;
}
break;
}
});})(map__1939,map__1939__$1,on_change,selected,options))
,null,null));
});})(map__1939,map__1939__$1,on_change,selected,options))
;
return iter__4523__auto__(options);
})()], null);
});
pluto.playground.components.material_ui.AppBar = (MaterialUI["AppBar"]);
pluto.playground.components.material_ui.Toolbar = (MaterialUI["Toolbar"]);
pluto.playground.components.material_ui.Typography = (MaterialUI["Typography"]);
pluto.playground.components.material_ui.Dialog = (MaterialUI["Dialog"]);
pluto.playground.components.material_ui.DialogTitle = (MaterialUI["DialogTitle"]);
pluto.playground.components.material_ui.CircularProgress = (MaterialUI["CircularProgress"]);
