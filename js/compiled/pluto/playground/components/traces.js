// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.playground.components.traces');
goog.require('cljs.core');
goog.require('cljs.core.constants');
pluto.playground.components.traces.Table = (MaterialUI["Table"]);
pluto.playground.components.traces.TableHead = (MaterialUI["TableHead"]);
pluto.playground.components.traces.TableBody = (MaterialUI["TableBody"]);
pluto.playground.components.traces.TableRow = (MaterialUI["TableRow"]);
pluto.playground.components.traces.TableCell = (MaterialUI["TableCell"]);
pluto.playground.components.traces.table = (function pluto$playground$components$traces$table(v){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$height,"30%",cljs.core.cst$kw$overflow,"auto"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.traces.Table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.traces.TableHead,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.traces.TableRow,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.traces.TableCell,"Id"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.traces.TableCell,"Category"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.traces.TableCell,"Type"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.traces.TableCell,"Data"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.traces.TableBody,(function (){var iter__4523__auto__ = (function pluto$playground$components$traces$table_$_iter__8169(s__8170){
return (new cljs.core.LazySeq(null,(function (){
var s__8170__$1 = s__8170;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__8170__$1);
if(temp__5720__auto__){
var s__8170__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8170__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__8170__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__8172 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__8171 = (0);
while(true){
if((i__8171 < size__4522__auto__)){
var map__8173 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__8171);
var map__8173__$1 = (((((!((map__8173 == null))))?(((((map__8173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8173):map__8173);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8173__$1,cljs.core.cst$kw$id);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8173__$1,cljs.core.cst$kw$category);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8173__$1,cljs.core.cst$kw$type);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8173__$1,cljs.core.cst$kw$data);
cljs.core.chunk_append(b__8172,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.traces.TableRow,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.traces.TableCell,id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.traces.TableCell,category], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.traces.TableCell,type], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.traces.TableCell,cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null)));

var G__8177 = (i__8171 + (1));
i__8171 = G__8177;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8172),pluto$playground$components$traces$table_$_iter__8169(cljs.core.chunk_rest(s__8170__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8172),null);
}
} else {
var map__8175 = cljs.core.first(s__8170__$2);
var map__8175__$1 = (((((!((map__8175 == null))))?(((((map__8175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8175):map__8175);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8175__$1,cljs.core.cst$kw$id);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8175__$1,cljs.core.cst$kw$category);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8175__$1,cljs.core.cst$kw$type);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8175__$1,cljs.core.cst$kw$data);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.traces.TableRow,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.traces.TableCell,id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.traces.TableCell,category], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.traces.TableCell,type], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.traces.TableCell,cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null)),pluto$playground$components$traces$table_$_iter__8169(cljs.core.rest(s__8170__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(v);
})()], null)], null)], null);
});
