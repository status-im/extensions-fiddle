// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('fipp.engine');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('fipp.deque');
if((typeof fipp !== 'undefined') && (typeof fipp.engine !== 'undefined') && (typeof fipp.engine.serialize_node !== 'undefined')){
} else {
fipp.engine.serialize_node = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__2296 = cljs.core.get_global_hierarchy;
return (fexpr__2296.cljs$core$IFn$_invoke$arity$0 ? fexpr__2296.cljs$core$IFn$_invoke$arity$0() : fexpr__2296.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("fipp.engine","serialize-node"),cljs.core.first,cljs.core.cst$kw$default,hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
fipp.engine.serialize = (function fipp$engine$serialize(doc){
if((doc == null)){
return null;
} else {
if(cljs.core.seq_QMARK_(doc)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(fipp.engine.serialize,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([doc], 0));
} else {
if(typeof doc === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$op,cljs.core.cst$kw$text,cljs.core.cst$kw$text,doc], null)], null);
} else {
if((doc instanceof cljs.core.Keyword)){
var G__2297 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null);
return (fipp.engine.serialize_node.cljs$core$IFn$_invoke$arity$1 ? fipp.engine.serialize_node.cljs$core$IFn$_invoke$arity$1(G__2297) : fipp.engine.serialize_node.call(null,G__2297));
} else {
if(cljs.core.vector_QMARK_(doc)){
return (fipp.engine.serialize_node.cljs$core$IFn$_invoke$arity$1 ? fipp.engine.serialize_node.cljs$core$IFn$_invoke$arity$1(doc) : fipp.engine.serialize_node.call(null,doc));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected class for doc node",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$node,doc], null));

}
}
}
}
}
});
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$text,(function (p__2298){
var vec__2299 = p__2298;
var seq__2300 = cljs.core.seq(vec__2299);
var first__2301 = cljs.core.first(seq__2300);
var seq__2300__$1 = cljs.core.next(seq__2300);
var _ = first__2301;
var text = seq__2300__$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$op,cljs.core.cst$kw$text,cljs.core.cst$kw$text,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,text)], null)], null);
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$pass,(function (p__2302){
var vec__2303 = p__2302;
var seq__2304 = cljs.core.seq(vec__2303);
var first__2305 = cljs.core.first(seq__2304);
var seq__2304__$1 = cljs.core.next(seq__2304);
var _ = first__2305;
var text = seq__2304__$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$op,cljs.core.cst$kw$pass,cljs.core.cst$kw$text,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,text)], null)], null);
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$escaped,(function (p__2306){
var vec__2307 = p__2306;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2307,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2307,(1),null);
if(typeof text === 'string'){
} else {
throw (new Error("Assert failed: (string? text)"));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$op,cljs.core.cst$kw$escaped,cljs.core.cst$kw$text,text], null)], null);
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$span,(function (p__2310){
var vec__2311 = p__2310;
var seq__2312 = cljs.core.seq(vec__2311);
var first__2313 = cljs.core.first(seq__2312);
var seq__2312__$1 = cljs.core.next(seq__2312);
var _ = first__2313;
var children = seq__2312__$1;
return fipp.engine.serialize(children);
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$line,(function (p__2314){
var vec__2315 = p__2314;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2315,(0),null);
var inline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2315,(1),null);
var terminate = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2315,(2),null);
var inline__$1 = (function (){var or__4131__auto__ = inline;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return " ";
}
})();
var terminate__$1 = (function (){var or__4131__auto__ = terminate;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})();
if(typeof inline__$1 === 'string'){
} else {
throw (new Error("Assert failed: (string? inline)"));
}

if(typeof terminate__$1 === 'string'){
} else {
throw (new Error("Assert failed: (string? terminate)"));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$op,cljs.core.cst$kw$line,cljs.core.cst$kw$inline,inline__$1,cljs.core.cst$kw$terminate,terminate__$1], null)], null);
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$break,(function() { 
var G__2318__delegate = function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op,cljs.core.cst$kw$break], null)], null);
};
var G__2318 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__2319__i = 0, G__2319__a = new Array(arguments.length -  0);
while (G__2319__i < G__2319__a.length) {G__2319__a[G__2319__i] = arguments[G__2319__i + 0]; ++G__2319__i;}
  _ = new cljs.core.IndexedSeq(G__2319__a,0,null);
} 
return G__2318__delegate.call(this,_);};
G__2318.cljs$lang$maxFixedArity = 0;
G__2318.cljs$lang$applyTo = (function (arglist__2320){
var _ = cljs.core.seq(arglist__2320);
return G__2318__delegate(_);
});
G__2318.cljs$core$IFn$_invoke$arity$variadic = G__2318__delegate;
return G__2318;
})()
);
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$group,(function (p__2321){
var vec__2322 = p__2321;
var seq__2323 = cljs.core.seq(vec__2322);
var first__2324 = cljs.core.first(seq__2323);
var seq__2323__$1 = cljs.core.next(seq__2323);
var _ = first__2324;
var children = seq__2323__$1;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op,cljs.core.cst$kw$begin], null)], null),fipp.engine.serialize(children),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op,cljs.core.cst$kw$end], null)], null)], 0));
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nest,(function (p__2325){
var vec__2326 = p__2325;
var seq__2327 = cljs.core.seq(vec__2326);
var first__2328 = cljs.core.first(seq__2327);
var seq__2327__$1 = cljs.core.next(seq__2327);
var _ = first__2328;
var args = seq__2327__$1;
var vec__2329 = ((typeof cljs.core.first(args) === 'number')?args:cljs.core.cons((2),args));
var seq__2330 = cljs.core.seq(vec__2329);
var first__2331 = cljs.core.first(seq__2330);
var seq__2330__$1 = cljs.core.next(seq__2330);
var offset = first__2331;
var children = seq__2330__$1;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$op,cljs.core.cst$kw$nest,cljs.core.cst$kw$offset,offset], null)], null),fipp.engine.serialize(children),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op,cljs.core.cst$kw$outdent], null)], null)], 0));
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$align,(function (p__2332){
var vec__2333 = p__2332;
var seq__2334 = cljs.core.seq(vec__2333);
var first__2335 = cljs.core.first(seq__2334);
var seq__2334__$1 = cljs.core.next(seq__2334);
var _ = first__2335;
var args = seq__2334__$1;
var vec__2336 = ((typeof cljs.core.first(args) === 'number')?args:cljs.core.cons((0),args));
var seq__2337 = cljs.core.seq(vec__2336);
var first__2338 = cljs.core.first(seq__2337);
var seq__2337__$1 = cljs.core.next(seq__2337);
var offset = first__2338;
var children = seq__2337__$1;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$op,cljs.core.cst$kw$align,cljs.core.cst$kw$offset,offset], null)], null),fipp.engine.serialize(children),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op,cljs.core.cst$kw$outdent], null)], null)], 0));
}));
/**
 * A transducer which annotates the right-side of nodes assuming a
 *   hypothetical single-line formatting of the document. Groups and indentation
 *   directives are temporarily assumed to be zero-width. These values are used
 *   by subsequent passes to produce the final layout.
 */
fipp.engine.annotate_rights = (function fipp$engine$annotate_rights(rf){
var pos = cljs.core.volatile_BANG_((0));
return ((function (pos){
return (function() {
var G__2342 = null;
var G__2342__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__2342__1 = (function (res){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(res) : rf.call(null,res));
});
var G__2342__2 = (function (res,node){
var delta = (function (){var G__2339 = cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(node);
var G__2339__$1 = (((G__2339 instanceof cljs.core.Keyword))?G__2339.fqn:null);
switch (G__2339__$1) {
case "text":
return cljs.core.count(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(node));

break;
case "line":
return cljs.core.count(cljs.core.cst$kw$inline.cljs$core$IFn$_invoke$arity$1(node));

break;
case "escaped":
return (1);

break;
default:
return (0);

}
})();
var p = pos.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(pos.cljs$core$IDeref$_deref$arity$1(null) + delta));
var G__2340 = res;
var G__2341 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,cljs.core.cst$kw$right,p);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__2340,G__2341) : rf.call(null,G__2340,G__2341));
});
G__2342 = function(res,node){
switch(arguments.length){
case 0:
return G__2342__0.call(this);
case 1:
return G__2342__1.call(this,res);
case 2:
return G__2342__2.call(this,res,node);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__2342.cljs$core$IFn$_invoke$arity$0 = G__2342__0;
G__2342.cljs$core$IFn$_invoke$arity$1 = G__2342__1;
G__2342.cljs$core$IFn$_invoke$arity$2 = G__2342__2;
return G__2342;
})()
;})(pos))
});
fipp.engine.update_right = (function fipp$engine$update_right(var_args){
var args__4736__auto__ = [];
var len__4730__auto___2349 = arguments.length;
var i__4731__auto___2350 = (0);
while(true){
if((i__4731__auto___2350 < len__4730__auto___2349)){
args__4736__auto__.push((arguments[i__4731__auto___2350]));

var G__2351 = (i__4731__auto___2350 + (1));
i__4731__auto___2350 = G__2351;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return fipp.engine.update_right.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

fipp.engine.update_right.cljs$core$IFn$_invoke$arity$variadic = (function (deque,f,args){
var G__2347 = cljs.core.pop(deque);
var G__2348 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.peek(deque),args);
return (fipp.deque.conjr.cljs$core$IFn$_invoke$arity$2 ? fipp.deque.conjr.cljs$core$IFn$_invoke$arity$2(G__2347,G__2348) : fipp.deque.conjr.call(null,G__2347,G__2348));
});

fipp.engine.update_right.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fipp.engine.update_right.cljs$lang$applyTo = (function (seq2344){
var G__2345 = cljs.core.first(seq2344);
var seq2344__$1 = cljs.core.next(seq2344);
var G__2346 = cljs.core.first(seq2344__$1);
var seq2344__$2 = cljs.core.next(seq2344__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2345,G__2346,seq2344__$2);
});

/**
 * Given printing options, returns a transducer which annotate the right-side
 *   of groups on their :begin nodes.  This includes the pruning algorithm which
 *   will annotate some :begin nodes as being :too-far to the right without
 *   calculating their exact sizes.
 */
fipp.engine.annotate_begins = (function fipp$engine$annotate_begins(p__2352){
var map__2353 = p__2352;
var map__2353__$1 = (((((!((map__2353 == null))))?(((((map__2353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2353):map__2353);
var options = map__2353__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2353__$1,cljs.core.cst$kw$width);
return ((function (map__2353,map__2353__$1,options,width){
return (function (rf){
var pos = cljs.core.volatile_BANG_((0));
var bufs = cljs.core.volatile_BANG_(fipp.deque.empty);
return ((function (pos,bufs,map__2353,map__2353__$1,options,width){
return (function() {
var G__2360 = null;
var G__2360__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__2360__1 = (function (res){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(res) : rf.call(null,res));
});
var G__2360__2 = (function (res,p__2355){
var map__2356 = p__2355;
var map__2356__$1 = (((((!((map__2356 == null))))?(((((map__2356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2356):map__2356);
var node = map__2356__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2356__$1,cljs.core.cst$kw$op);
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2356__$1,cljs.core.cst$kw$right);
var buffers = cljs.core.deref(bufs);
if(cljs.core.empty_QMARK_(buffers)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$begin)){
var position_STAR_ = (right + width);
var buffer = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,position_STAR_,cljs.core.cst$kw$nodes,fipp.deque.empty], null);
cljs.core.vreset_BANG_(pos,position_STAR_);

cljs.core.vreset_BANG_(bufs,(fipp.deque.create.cljs$core$IFn$_invoke$arity$1 ? fipp.deque.create.cljs$core$IFn$_invoke$arity$1(buffer) : fipp.deque.create.call(null,buffer)));

return res;
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(res,node) : rf.call(null,res,node));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$end)){
var buffer = cljs.core.peek(buffers);
var buffers_STAR_ = cljs.core.pop(buffers);
var begin = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$op,cljs.core.cst$kw$begin,cljs.core.cst$kw$right,right], null);
var nodes = fipp.deque.conjlr(begin,cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(buffer),node);
if(cljs.core.empty_QMARK_(buffers_STAR_)){
cljs.core.vreset_BANG_(pos,(0));

cljs.core.vreset_BANG_(bufs,fipp.deque.empty);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,res,nodes);
} else {
if(cljs.core.vector_QMARK_(buffers_STAR_)){
} else {
throw (new Error("Assert failed: (vector? buffers*)"));
}

if(cljs.core.vector_QMARK_(nodes)){
} else {
throw (new Error("Assert failed: (vector? nodes)"));
}

cljs.core.vreset_BANG_(bufs,fipp.engine.update_right.cljs$core$IFn$_invoke$arity$variadic(buffers_STAR_,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nodes], null),fipp.deque.concat,nodes], 0)));

return res;
}
} else {
var buffers_STAR_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$begin))?(function (){var G__2358 = buffers;
var G__2359 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,(right + width),cljs.core.cst$kw$nodes,fipp.deque.empty], null);
return (fipp.deque.conjr.cljs$core$IFn$_invoke$arity$2 ? fipp.deque.conjr.cljs$core$IFn$_invoke$arity$2(G__2358,G__2359) : fipp.deque.conjr.call(null,G__2358,G__2359));
})():fipp.engine.update_right.cljs$core$IFn$_invoke$arity$variadic(buffers,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nodes], null),fipp.deque.conjr,node], 0)));
var res__$1 = res;
while(true){
if((((right <= cljs.core.deref(pos))) && ((cljs.core.count(buffers_STAR_) <= width)))){
cljs.core.vreset_BANG_(bufs,buffers_STAR_);

return res__$1;
} else {
var buffer = cljs.core.first(buffers_STAR_);
var buffers_STAR__STAR_ = fipp.deque.popl(buffers_STAR_);
var begin = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$op,cljs.core.cst$kw$begin,cljs.core.cst$kw$right,cljs.core.cst$kw$too_DASH_far], null);
var res_STAR_ = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(res__$1,begin) : rf.call(null,res__$1,begin));
var res_STAR___$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,res_STAR_,cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(buffer));
if(cljs.core.empty_QMARK_(buffers_STAR__STAR_)){
cljs.core.vreset_BANG_(pos,(0));

cljs.core.vreset_BANG_(bufs,fipp.deque.empty);

return res_STAR___$1;
} else {
cljs.core.vreset_BANG_(pos,cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(cljs.core.first(buffers_STAR__STAR_)));

var G__2361 = buffers_STAR__STAR_;
var G__2362 = res_STAR___$1;
buffers_STAR_ = G__2361;
res__$1 = G__2362;
continue;
}
}
break;
}
}
}
});
G__2360 = function(res,p__2355){
switch(arguments.length){
case 0:
return G__2360__0.call(this);
case 1:
return G__2360__1.call(this,res);
case 2:
return G__2360__2.call(this,res,p__2355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__2360.cljs$core$IFn$_invoke$arity$0 = G__2360__0;
G__2360.cljs$core$IFn$_invoke$arity$1 = G__2360__1;
G__2360.cljs$core$IFn$_invoke$arity$2 = G__2360__2;
return G__2360;
})()
;})(pos,bufs,map__2353,map__2353__$1,options,width))
});
;})(map__2353,map__2353__$1,options,width))
});
/**
 * Given printing options, returns a transducer which produces the fully
 *   laid-out strings.
 */
fipp.engine.format_nodes = (function fipp$engine$format_nodes(p__2363){
var map__2364 = p__2363;
var map__2364__$1 = (((((!((map__2364 == null))))?(((((map__2364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2364):map__2364);
var options = map__2364__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2364__$1,cljs.core.cst$kw$width);
return ((function (map__2364,map__2364__$1,options,width){
return (function (rf){
var fits = cljs.core.volatile_BANG_((0));
var length = cljs.core.volatile_BANG_(width);
var tab_stops = cljs.core.volatile_BANG_(cljs.core.list((0)));
var column = cljs.core.volatile_BANG_((0));
return ((function (fits,length,tab_stops,column,map__2364,map__2364__$1,options,width){
return (function() {
var G__2378 = null;
var G__2378__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__2378__1 = (function (res){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(res) : rf.call(null,res));
});
var G__2378__2 = (function (res,p__2366){
var map__2367 = p__2366;
var map__2367__$1 = (((((!((map__2367 == null))))?(((((map__2367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2367):map__2367);
var node = map__2367__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2367__$1,cljs.core.cst$kw$op);
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2367__$1,cljs.core.cst$kw$right);
var indent = cljs.core.peek(cljs.core.deref(tab_stops));
var G__2369 = op;
var G__2369__$1 = (((G__2369 instanceof cljs.core.Keyword))?G__2369.fqn:null);
switch (G__2369__$1) {
case "text":
var text = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(node);
var res_STAR_ = (((cljs.core.deref(column) === (0)))?(function (){
column.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(column.cljs$core$IDeref$_deref$arity$1(null) + indent));

var G__2370 = res;
var G__2371 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(indent," "));
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__2370,G__2371) : rf.call(null,G__2370,G__2371));
})()
:res);
column.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(column.cljs$core$IDeref$_deref$arity$1(null) + cljs.core.count(text)));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(res_STAR_,text) : rf.call(null,res_STAR_,text));

break;
case "escaped":
var text = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(node);
var res_STAR_ = (((cljs.core.deref(column) === (0)))?(function (){
column.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(column.cljs$core$IDeref$_deref$arity$1(null) + indent));

var G__2372 = res;
var G__2373 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(indent," "));
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__2372,G__2373) : rf.call(null,G__2372,G__2373));
})()
:res);
column.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(column.cljs$core$IDeref$_deref$arity$1(null) + (1)));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(res_STAR_,text) : rf.call(null,res_STAR_,text));

break;
case "pass":
var G__2374 = res;
var G__2375 = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(node);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__2374,G__2375) : rf.call(null,G__2374,G__2375));

break;
case "line":
if((cljs.core.deref(fits) === (0))){
cljs.core.vreset_BANG_(length,((right + width) - indent));

cljs.core.vreset_BANG_(column,(0));

var G__2376 = res;
var G__2377 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$terminate.cljs$core$IFn$_invoke$arity$1(node)),"\n"].join('');
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__2376,G__2377) : rf.call(null,G__2376,G__2377));
} else {
var inline = cljs.core.cst$kw$inline.cljs$core$IFn$_invoke$arity$1(node);
column.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(column.cljs$core$IDeref$_deref$arity$1(null) + cljs.core.count(inline)));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(res,inline) : rf.call(null,res,inline));
}

break;
case "break":
cljs.core.vreset_BANG_(length,((right + width) - indent));

cljs.core.vreset_BANG_(column,(0));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(res,"\n") : rf.call(null,res,"\n"));

break;
case "nest":
tab_stops.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tab_stops.cljs$core$IDeref$_deref$arity$1(null),(indent + cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(node))));

return res;

break;
case "align":
tab_stops.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tab_stops.cljs$core$IDeref$_deref$arity$1(null),(cljs.core.deref(column) + cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(node))));

return res;

break;
case "outdent":
tab_stops.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.pop(tab_stops.cljs$core$IDeref$_deref$arity$1(null)));

return res;

break;
case "begin":
cljs.core.vreset_BANG_(fits,(((cljs.core.deref(fits) > (0)))?(cljs.core.deref(fits) + (1)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(right,cljs.core.cst$kw$too_DASH_far))?(0):(((right <= cljs.core.deref(length)))?(1):(0)
))));

return res;

break;
case "end":
cljs.core.vreset_BANG_(fits,(function (){var x__4219__auto__ = (0);
var y__4220__auto__ = (cljs.core.deref(fits) - (1));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})());

return res;

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected node op",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$node,node], null));

}
});
G__2378 = function(res,p__2366){
switch(arguments.length){
case 0:
return G__2378__0.call(this);
case 1:
return G__2378__1.call(this,res);
case 2:
return G__2378__2.call(this,res,p__2366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__2378.cljs$core$IFn$_invoke$arity$0 = G__2378__0;
G__2378.cljs$core$IFn$_invoke$arity$1 = G__2378__1;
G__2378.cljs$core$IFn$_invoke$arity$2 = G__2378__2;
return G__2378;
})()
;})(fits,length,tab_stops,column,map__2364,map__2364__$1,options,width))
});
;})(map__2364,map__2364__$1,options,width))
});
fipp.engine.pprint_document = (function fipp$engine$pprint_document(document,options){
var options_2380__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,(70)], null),options], 0));
cljs.core.run_BANG_(cljs.core.print,cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fipp.engine.annotate_rights,fipp.engine.annotate_begins(options_2380__$1),fipp.engine.format_nodes(options_2380__$1),fipp.engine.serialize(document)], 0)));

return cljs.core.println();
});
