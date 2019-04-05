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
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__2219 = cljs.core.get_global_hierarchy;
return (fexpr__2219.cljs$core$IFn$_invoke$arity$0 ? fexpr__2219.cljs$core$IFn$_invoke$arity$0() : fexpr__2219.call(null));
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
var G__2220 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null);
return (fipp.engine.serialize_node.cljs$core$IFn$_invoke$arity$1 ? fipp.engine.serialize_node.cljs$core$IFn$_invoke$arity$1(G__2220) : fipp.engine.serialize_node.call(null,G__2220));
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
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$text,(function (p__2221){
var vec__2222 = p__2221;
var seq__2223 = cljs.core.seq(vec__2222);
var first__2224 = cljs.core.first(seq__2223);
var seq__2223__$1 = cljs.core.next(seq__2223);
var _ = first__2224;
var text = seq__2223__$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$op,cljs.core.cst$kw$text,cljs.core.cst$kw$text,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,text)], null)], null);
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$pass,(function (p__2225){
var vec__2226 = p__2225;
var seq__2227 = cljs.core.seq(vec__2226);
var first__2228 = cljs.core.first(seq__2227);
var seq__2227__$1 = cljs.core.next(seq__2227);
var _ = first__2228;
var text = seq__2227__$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$op,cljs.core.cst$kw$pass,cljs.core.cst$kw$text,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,text)], null)], null);
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$escaped,(function (p__2229){
var vec__2230 = p__2229;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2230,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2230,(1),null);
if(typeof text === 'string'){
} else {
throw (new Error("Assert failed: (string? text)"));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$op,cljs.core.cst$kw$escaped,cljs.core.cst$kw$text,text], null)], null);
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$span,(function (p__2233){
var vec__2234 = p__2233;
var seq__2235 = cljs.core.seq(vec__2234);
var first__2236 = cljs.core.first(seq__2235);
var seq__2235__$1 = cljs.core.next(seq__2235);
var _ = first__2236;
var children = seq__2235__$1;
return fipp.engine.serialize(children);
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$line,(function (p__2237){
var vec__2238 = p__2237;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2238,(0),null);
var inline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2238,(1),null);
var terminate = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2238,(2),null);
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
var G__2241__delegate = function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op,cljs.core.cst$kw$break], null)], null);
};
var G__2241 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__2242__i = 0, G__2242__a = new Array(arguments.length -  0);
while (G__2242__i < G__2242__a.length) {G__2242__a[G__2242__i] = arguments[G__2242__i + 0]; ++G__2242__i;}
  _ = new cljs.core.IndexedSeq(G__2242__a,0,null);
} 
return G__2241__delegate.call(this,_);};
G__2241.cljs$lang$maxFixedArity = 0;
G__2241.cljs$lang$applyTo = (function (arglist__2243){
var _ = cljs.core.seq(arglist__2243);
return G__2241__delegate(_);
});
G__2241.cljs$core$IFn$_invoke$arity$variadic = G__2241__delegate;
return G__2241;
})()
);
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$group,(function (p__2244){
var vec__2245 = p__2244;
var seq__2246 = cljs.core.seq(vec__2245);
var first__2247 = cljs.core.first(seq__2246);
var seq__2246__$1 = cljs.core.next(seq__2246);
var _ = first__2247;
var children = seq__2246__$1;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op,cljs.core.cst$kw$begin], null)], null),fipp.engine.serialize(children),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op,cljs.core.cst$kw$end], null)], null)], 0));
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nest,(function (p__2248){
var vec__2249 = p__2248;
var seq__2250 = cljs.core.seq(vec__2249);
var first__2251 = cljs.core.first(seq__2250);
var seq__2250__$1 = cljs.core.next(seq__2250);
var _ = first__2251;
var args = seq__2250__$1;
var vec__2252 = ((typeof cljs.core.first(args) === 'number')?args:cljs.core.cons((2),args));
var seq__2253 = cljs.core.seq(vec__2252);
var first__2254 = cljs.core.first(seq__2253);
var seq__2253__$1 = cljs.core.next(seq__2253);
var offset = first__2254;
var children = seq__2253__$1;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$op,cljs.core.cst$kw$nest,cljs.core.cst$kw$offset,offset], null)], null),fipp.engine.serialize(children),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op,cljs.core.cst$kw$outdent], null)], null)], 0));
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$align,(function (p__2255){
var vec__2256 = p__2255;
var seq__2257 = cljs.core.seq(vec__2256);
var first__2258 = cljs.core.first(seq__2257);
var seq__2257__$1 = cljs.core.next(seq__2257);
var _ = first__2258;
var args = seq__2257__$1;
var vec__2259 = ((typeof cljs.core.first(args) === 'number')?args:cljs.core.cons((0),args));
var seq__2260 = cljs.core.seq(vec__2259);
var first__2261 = cljs.core.first(seq__2260);
var seq__2260__$1 = cljs.core.next(seq__2260);
var offset = first__2261;
var children = seq__2260__$1;
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
var G__2265 = null;
var G__2265__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__2265__1 = (function (res){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(res) : rf.call(null,res));
});
var G__2265__2 = (function (res,node){
var delta = (function (){var G__2262 = cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(node);
var G__2262__$1 = (((G__2262 instanceof cljs.core.Keyword))?G__2262.fqn:null);
switch (G__2262__$1) {
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
var G__2263 = res;
var G__2264 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,cljs.core.cst$kw$right,p);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__2263,G__2264) : rf.call(null,G__2263,G__2264));
});
G__2265 = function(res,node){
switch(arguments.length){
case 0:
return G__2265__0.call(this);
case 1:
return G__2265__1.call(this,res);
case 2:
return G__2265__2.call(this,res,node);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__2265.cljs$core$IFn$_invoke$arity$0 = G__2265__0;
G__2265.cljs$core$IFn$_invoke$arity$1 = G__2265__1;
G__2265.cljs$core$IFn$_invoke$arity$2 = G__2265__2;
return G__2265;
})()
;})(pos))
});
fipp.engine.update_right = (function fipp$engine$update_right(var_args){
var args__4736__auto__ = [];
var len__4730__auto___2272 = arguments.length;
var i__4731__auto___2273 = (0);
while(true){
if((i__4731__auto___2273 < len__4730__auto___2272)){
args__4736__auto__.push((arguments[i__4731__auto___2273]));

var G__2274 = (i__4731__auto___2273 + (1));
i__4731__auto___2273 = G__2274;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return fipp.engine.update_right.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

fipp.engine.update_right.cljs$core$IFn$_invoke$arity$variadic = (function (deque,f,args){
var G__2270 = cljs.core.pop(deque);
var G__2271 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.peek(deque),args);
return (fipp.deque.conjr.cljs$core$IFn$_invoke$arity$2 ? fipp.deque.conjr.cljs$core$IFn$_invoke$arity$2(G__2270,G__2271) : fipp.deque.conjr.call(null,G__2270,G__2271));
});

fipp.engine.update_right.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fipp.engine.update_right.cljs$lang$applyTo = (function (seq2267){
var G__2268 = cljs.core.first(seq2267);
var seq2267__$1 = cljs.core.next(seq2267);
var G__2269 = cljs.core.first(seq2267__$1);
var seq2267__$2 = cljs.core.next(seq2267__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2268,G__2269,seq2267__$2);
});

/**
 * Given printing options, returns a transducer which annotate the right-side
 *   of groups on their :begin nodes.  This includes the pruning algorithm which
 *   will annotate some :begin nodes as being :too-far to the right without
 *   calculating their exact sizes.
 */
fipp.engine.annotate_begins = (function fipp$engine$annotate_begins(p__2275){
var map__2276 = p__2275;
var map__2276__$1 = (((((!((map__2276 == null))))?(((((map__2276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2276):map__2276);
var options = map__2276__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2276__$1,cljs.core.cst$kw$width);
return ((function (map__2276,map__2276__$1,options,width){
return (function (rf){
var pos = cljs.core.volatile_BANG_((0));
var bufs = cljs.core.volatile_BANG_(fipp.deque.empty);
return ((function (pos,bufs,map__2276,map__2276__$1,options,width){
return (function() {
var G__2283 = null;
var G__2283__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__2283__1 = (function (res){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(res) : rf.call(null,res));
});
var G__2283__2 = (function (res,p__2278){
var map__2279 = p__2278;
var map__2279__$1 = (((((!((map__2279 == null))))?(((((map__2279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2279):map__2279);
var node = map__2279__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2279__$1,cljs.core.cst$kw$op);
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2279__$1,cljs.core.cst$kw$right);
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
var buffers_STAR_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$begin))?(function (){var G__2281 = buffers;
var G__2282 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,(right + width),cljs.core.cst$kw$nodes,fipp.deque.empty], null);
return (fipp.deque.conjr.cljs$core$IFn$_invoke$arity$2 ? fipp.deque.conjr.cljs$core$IFn$_invoke$arity$2(G__2281,G__2282) : fipp.deque.conjr.call(null,G__2281,G__2282));
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

var G__2284 = buffers_STAR__STAR_;
var G__2285 = res_STAR___$1;
buffers_STAR_ = G__2284;
res__$1 = G__2285;
continue;
}
}
break;
}
}
}
});
G__2283 = function(res,p__2278){
switch(arguments.length){
case 0:
return G__2283__0.call(this);
case 1:
return G__2283__1.call(this,res);
case 2:
return G__2283__2.call(this,res,p__2278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__2283.cljs$core$IFn$_invoke$arity$0 = G__2283__0;
G__2283.cljs$core$IFn$_invoke$arity$1 = G__2283__1;
G__2283.cljs$core$IFn$_invoke$arity$2 = G__2283__2;
return G__2283;
})()
;})(pos,bufs,map__2276,map__2276__$1,options,width))
});
;})(map__2276,map__2276__$1,options,width))
});
/**
 * Given printing options, returns a transducer which produces the fully
 *   laid-out strings.
 */
fipp.engine.format_nodes = (function fipp$engine$format_nodes(p__2286){
var map__2287 = p__2286;
var map__2287__$1 = (((((!((map__2287 == null))))?(((((map__2287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2287):map__2287);
var options = map__2287__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2287__$1,cljs.core.cst$kw$width);
return ((function (map__2287,map__2287__$1,options,width){
return (function (rf){
var fits = cljs.core.volatile_BANG_((0));
var length = cljs.core.volatile_BANG_(width);
var tab_stops = cljs.core.volatile_BANG_(cljs.core.list((0)));
var column = cljs.core.volatile_BANG_((0));
return ((function (fits,length,tab_stops,column,map__2287,map__2287__$1,options,width){
return (function() {
var G__2301 = null;
var G__2301__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__2301__1 = (function (res){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(res) : rf.call(null,res));
});
var G__2301__2 = (function (res,p__2289){
var map__2290 = p__2289;
var map__2290__$1 = (((((!((map__2290 == null))))?(((((map__2290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2290):map__2290);
var node = map__2290__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2290__$1,cljs.core.cst$kw$op);
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2290__$1,cljs.core.cst$kw$right);
var indent = cljs.core.peek(cljs.core.deref(tab_stops));
var G__2292 = op;
var G__2292__$1 = (((G__2292 instanceof cljs.core.Keyword))?G__2292.fqn:null);
switch (G__2292__$1) {
case "text":
var text = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(node);
var res_STAR_ = (((cljs.core.deref(column) === (0)))?(function (){
column.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(column.cljs$core$IDeref$_deref$arity$1(null) + indent));

var G__2293 = res;
var G__2294 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(indent," "));
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__2293,G__2294) : rf.call(null,G__2293,G__2294));
})()
:res);
column.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(column.cljs$core$IDeref$_deref$arity$1(null) + cljs.core.count(text)));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(res_STAR_,text) : rf.call(null,res_STAR_,text));

break;
case "escaped":
var text = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(node);
var res_STAR_ = (((cljs.core.deref(column) === (0)))?(function (){
column.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(column.cljs$core$IDeref$_deref$arity$1(null) + indent));

var G__2295 = res;
var G__2296 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(indent," "));
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__2295,G__2296) : rf.call(null,G__2295,G__2296));
})()
:res);
column.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(column.cljs$core$IDeref$_deref$arity$1(null) + (1)));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(res_STAR_,text) : rf.call(null,res_STAR_,text));

break;
case "pass":
var G__2297 = res;
var G__2298 = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(node);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__2297,G__2298) : rf.call(null,G__2297,G__2298));

break;
case "line":
if((cljs.core.deref(fits) === (0))){
cljs.core.vreset_BANG_(length,((right + width) - indent));

cljs.core.vreset_BANG_(column,(0));

var G__2299 = res;
var G__2300 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$terminate.cljs$core$IFn$_invoke$arity$1(node)),"\n"].join('');
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__2299,G__2300) : rf.call(null,G__2299,G__2300));
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
G__2301 = function(res,p__2289){
switch(arguments.length){
case 0:
return G__2301__0.call(this);
case 1:
return G__2301__1.call(this,res);
case 2:
return G__2301__2.call(this,res,p__2289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__2301.cljs$core$IFn$_invoke$arity$0 = G__2301__0;
G__2301.cljs$core$IFn$_invoke$arity$1 = G__2301__1;
G__2301.cljs$core$IFn$_invoke$arity$2 = G__2301__2;
return G__2301;
})()
;})(fits,length,tab_stops,column,map__2287,map__2287__$1,options,width))
});
;})(map__2287,map__2287__$1,options,width))
});
fipp.engine.pprint_document = (function fipp$engine$pprint_document(var_args){
var G__2304 = arguments.length;
switch (G__2304) {
case 1:
return fipp.engine.pprint_document.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fipp.engine.pprint_document.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fipp.engine.pprint_document.cljs$core$IFn$_invoke$arity$1 = (function (document){
return fipp.engine.pprint_document.cljs$core$IFn$_invoke$arity$2(document,cljs.core.PersistentArrayMap.EMPTY);
});

fipp.engine.pprint_document.cljs$core$IFn$_invoke$arity$2 = (function (document,options){
var options_2306__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,(70)], null),options], 0));
cljs.core.run_BANG_(cljs.core.print,cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fipp.engine.annotate_rights,fipp.engine.annotate_begins(options_2306__$1),fipp.engine.format_nodes(options_2306__$1),fipp.engine.serialize(document)], 0)));

return cljs.core.println();
});

fipp.engine.pprint_document.cljs$lang$maxFixedArity = 2;

