// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('fipp.ednize');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('fipp.util');

/**
 * Perform a shallow conversion to an Edn data structure.
 * @interface
 */
fipp.ednize.IEdn = function(){};

fipp.ednize._edn = (function fipp$ednize$_edn(x){
if((((!((x == null)))) && ((!((x.fipp$ednize$IEdn$_edn$arity$1 == null)))))){
return x.fipp$ednize$IEdn$_edn$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (fipp.ednize._edn[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (fipp.ednize._edn["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("IEdn.-edn",x);
}
}
}
});


/**
 * Mark object as preferring its custom IEdn behavior.
 * @interface
 */
fipp.ednize.IOverride = function(){};

fipp.ednize.override_QMARK_ = (function fipp$ednize$override_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.fipp$ednize$IEdn$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(fipp.ednize.IEdn,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(fipp.ednize.IEdn,x);
}
});
fipp.ednize.edn = (function fipp$ednize$edn(x){
if(fipp.ednize.override_QMARK_(x)){
return fipp.ednize._edn(x);
} else {
if(cljs.core.object_QMARK_(x)){
return cljs.core.tagged_literal(cljs.core.cst$sym$js,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function fipp$ednize$edn_$_iter__1643(s__1644){
return (new cljs.core.LazySeq(null,(function (){
var s__1644__$1 = s__1644;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__1644__$1);
if(temp__5457__auto__){
var s__1644__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1644__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__1644__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__1646 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__1645 = (0);
while(true){
if((i__1645 < size__4522__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__1645);
cljs.core.chunk_append(b__1646,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(x[k])], null));

var G__1651 = (i__1645 + (1));
i__1645 = G__1651;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1646),fipp$ednize$edn_$_iter__1643(cljs.core.chunk_rest(s__1644__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1646),null);
}
} else {
var k = cljs.core.first(s__1644__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(x[k])], null),fipp$ednize$edn_$_iter__1643(cljs.core.rest(s__1644__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.js_keys(x));
})()));
} else {
if(cljs.core.array_QMARK_(x)){
return cljs.core.tagged_literal(cljs.core.cst$sym$js,cljs.core.vec(x));
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x))){
var pending_QMARK_ = (function (){var and__4120__auto__ = (((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IPending$))))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPending,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPending,x));
if(and__4120__auto__){
return (!(cljs.core.realized_QMARK_(x)));
} else {
return and__4120__auto__;
}
})();
var val = ((pending_QMARK_)?null:cljs.core.deref(x));
var status = ((pending_QMARK_)?cljs.core.cst$kw$pending:cljs.core.cst$kw$ready);
return cljs.core.tagged_literal(cljs.core.cst$sym$object,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(x)], 0))),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$status,status,cljs.core.cst$kw$val,val], null)], null));
} else {
if((x instanceof Date)){
return cljs.core.tagged_literal(cljs.core.cst$sym$inst,(function (){var normalize = (function (n,len){
var ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(n);
while(true){
if((cljs.core.count(ns) < len)){
var G__1652 = ["0",ns].join('');
ns = G__1652;
continue;
} else {
return ns;
}
break;
}
});
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x.getUTCFullYear()),"-",normalize((x.getUTCMonth() + (1)),(2)),"-",normalize(x.getUTCDate(),(2)),"T",normalize(x.getUTCHours(),(2)),":",normalize(x.getUTCMinutes(),(2)),":",normalize(x.getUTCSeconds(),(2)),".",normalize(x.getUTCMilliseconds(),(3)),"-","00:00"].join('');
})());
} else {
if((((!((x == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.fipp$ednize$IEdn$))))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(fipp.ednize.IEdn,x):false)):cljs.core.native_satisfies_QMARK_(fipp.ednize.IEdn,x))){
return fipp.ednize._edn(x);
} else {
if(cljs.core.truth_(fipp.util.edn_QMARK_(x))){
return x;
} else {
return cljs.core.tagged_literal(cljs.core.cst$sym$object,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(x)], 0)))], null));

}
}
}
}
}
}
}
});
cljs.core.UUID.prototype.fipp$ednize$IEdn$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.fipp$ednize$IEdn$_edn$arity$1 = (function (x){
var x__$1 = this;
return cljs.core.tagged_literal(cljs.core.cst$sym$uuid,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1));
});

cljs.core.ExceptionInfo.prototype.fipp$ednize$IEdn$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ExceptionInfo.prototype.fipp$ednize$IEdn$_edn$arity$1 = (function (x){
var x__$1 = this;
return cljs.core.tagged_literal(cljs.core.cst$sym$ExceptionInfo,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$message,cljs.core.ex_message(x__$1),cljs.core.cst$kw$data,cljs.core.ex_data(x__$1)], null),(function (){var temp__5457__auto__ = cljs.core.ex_cause(x__$1);
if(cljs.core.truth_(temp__5457__auto__)){
var cause = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cause,cause], null);
} else {
return null;
}
})()], 0)));
});
fipp.ednize.record__GT_tagged = (function fipp$ednize$record__GT_tagged(x){
return cljs.core.tagged_literal(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol,clojure.string.split.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(x)], 0)),/\//,(2))),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x));
});