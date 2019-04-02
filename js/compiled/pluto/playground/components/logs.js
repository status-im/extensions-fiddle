// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.playground.components.logs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
pluto.playground.components.logs.Table = (MaterialUI["Table"]);
pluto.playground.components.logs.TableHead = (MaterialUI["TableHead"]);
pluto.playground.components.logs.TableBody = (MaterialUI["TableBody"]);
pluto.playground.components.logs.TableRow = (MaterialUI["TableRow"]);
pluto.playground.components.logs.TableCell = (MaterialUI["TableCell"]);
pluto.playground.components.logs.table = (function pluto$playground$components$logs$table(v){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex,0.4,cljs.core.cst$kw$overflow,"auto"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.Table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableHead,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableRow,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,"Id"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,"Category"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,"Type"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,"Data"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableBody,(function (){var iter__4523__auto__ = (function pluto$playground$components$logs$table_$_iter__1907(s__1908){
return (new cljs.core.LazySeq(null,(function (){
var s__1908__$1 = s__1908;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__1908__$1);
if(temp__5457__auto__){
var s__1908__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1908__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__1908__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__1910 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__1909 = (0);
while(true){
if((i__1909 < size__4522__auto__)){
var map__1911 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__1909);
var map__1911__$1 = (((((!((map__1911 == null))))?(((((map__1911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1911):map__1911);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1911__$1,cljs.core.cst$kw$id);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1911__$1,cljs.core.cst$kw$category);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1911__$1,cljs.core.cst$kw$type);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1911__$1,cljs.core.cst$kw$data);
cljs.core.chunk_append(b__1910,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableRow,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,category], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,type], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null)));

var G__1915 = (i__1909 + (1));
i__1909 = G__1915;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1910),pluto$playground$components$logs$table_$_iter__1907(cljs.core.chunk_rest(s__1908__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1910),null);
}
} else {
var map__1913 = cljs.core.first(s__1908__$2);
var map__1913__$1 = (((((!((map__1913 == null))))?(((((map__1913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1913):map__1913);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1913__$1,cljs.core.cst$kw$id);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1913__$1,cljs.core.cst$kw$category);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1913__$1,cljs.core.cst$kw$type);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1913__$1,cljs.core.cst$kw$data);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableRow,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,category], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,type], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null)),pluto$playground$components$logs$table_$_iter__1907(cljs.core.rest(s__1908__$2)));
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
