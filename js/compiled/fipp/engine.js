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
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__1659 = cljs.core.get_global_hierarchy;
return (fexpr__1659.cljs$core$IFn$_invoke$arity$0 ? fexpr__1659.cljs$core$IFn$_invoke$arity$0() : fexpr__1659.call(null));
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
var G__1660 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null);
return (fipp.engine.serialize_node.cljs$core$IFn$_invoke$arity$1 ? fipp.engine.serialize_node.cljs$core$IFn$_invoke$arity$1(G__1660) : fipp.engine.serialize_node.call(null,G__1660));
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
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$text,(function (p__1661){
var vec__1662 = p__1661;
var seq__1663 = cljs.core.seq(vec__1662);
var first__1664 = cljs.core.first(seq__1663);
var seq__1663__$1 = cljs.core.next(seq__1663);
var _ = first__1664;
var text = seq__1663__$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$op,cljs.core.cst$kw$text,cljs.core.cst$kw$text,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,text)], null)], null);
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$pass,(function (p__1665){
var vec__1666 = p__1665;
var seq__1667 = cljs.core.seq(vec__1666);
var first__1668 = cljs.core.first(seq__1667);
var seq__1667__$1 = cljs.core.next(seq__1667);
var _ = first__1668;
var text = seq__1667__$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$op,cljs.core.cst$kw$pass,cljs.core.cst$kw$text,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,text)], null)], null);
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$escaped,(function (p__1669){
var vec__1670 = p__1669;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1670,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1670,(1),null);
if(typeof text === 'string'){
} else {
throw (new Error("Assert failed: (string? text)"));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$op,cljs.core.cst$kw$escaped,cljs.core.cst$kw$text,text], null)], null);
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$span,(function (p__1673){
var vec__1674 = p__1673;
var seq__1675 = cljs.core.seq(vec__1674);
var first__1676 = cljs.core.first(seq__1675);
var seq__1675__$1 = cljs.core.next(seq__1675);
var _ = first__1676;
var children = seq__1675__$1;
return fipp.engine.serialize(children);
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$line,(function (p__1677){
var vec__1678 = p__1677;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1678,(0),null);
var inline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1678,(1),null);
var terminate = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1678,(2),null);
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
var G__1681__delegate = function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op,cljs.core.cst$kw$break], null)], null);
};
var G__1681 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__1682__i = 0, G__1682__a = new Array(arguments.length -  0);
while (G__1682__i < G__1682__a.length) {G__1682__a[G__1682__i] = arguments[G__1682__i + 0]; ++G__1682__i;}
  _ = new cljs.core.IndexedSeq(G__1682__a,0,null);
} 
return G__1681__delegate.call(this,_);};
G__1681.cljs$lang$maxFixedArity = 0;
G__1681.cljs$lang$applyTo = (function (arglist__1683){
var _ = cljs.core.seq(arglist__1683);
return G__1681__delegate(_);
});
G__1681.cljs$core$IFn$_invoke$arity$variadic = G__1681__delegate;
return G__1681;
})()
);
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$group,(function (p__1684){
var vec__1685 = p__1684;
var seq__1686 = cljs.core.seq(vec__1685);
var first__1687 = cljs.core.first(seq__1686);
var seq__1686__$1 = cljs.core.next(seq__1686);
var _ = first__1687;
var children = seq__1686__$1;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op,cljs.core.cst$kw$begin], null)], null),fipp.engine.serialize(children),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op,cljs.core.cst$kw$end], null)], null)], 0));
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nest,(function (p__1688){
var vec__1689 = p__1688;
var seq__1690 = cljs.core.seq(vec__1689);
var first__1691 = cljs.core.first(seq__1690);
var seq__1690__$1 = cljs.core.next(seq__1690);
var _ = first__1691;
var args = seq__1690__$1;
var vec__1692 = ((typeof cljs.core.first(args) === 'number')?args:cljs.core.cons((2),args));
var seq__1693 = cljs.core.seq(vec__1692);
var first__1694 = cljs.core.first(seq__1693);
var seq__1693__$1 = cljs.core.next(seq__1693);
var offset = first__1694;
var children = seq__1693__$1;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$op,cljs.core.cst$kw$nest,cljs.core.cst$kw$offset,offset], null)], null),fipp.engine.serialize(children),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op,cljs.core.cst$kw$outdent], null)], null)], 0));
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$align,(function (p__1695){
var vec__1696 = p__1695;
var seq__1697 = cljs.core.seq(vec__1696);
var first__1698 = cljs.core.first(seq__1697);
var seq__1697__$1 = cljs.core.next(seq__1697);
var _ = first__1698;
var args = seq__1697__$1;
var vec__1699 = ((typeof cljs.core.first(args) === 'number')?args:cljs.core.cons((0),args));
var seq__1700 = cljs.core.seq(vec__1699);
var first__1701 = cljs.core.first(seq__1700);
var seq__1700__$1 = cljs.core.next(seq__1700);
var offset = first__1701;
var children = seq__1700__$1;
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
var G__1705 = null;
var G__1705__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__1705__1 = (function (res){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(res) : rf.call(null,res));
});
var G__1705__2 = (function (res,node){
var delta = (function (){var G__1702 = cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(node);
var G__1702__$1 = (((G__1702 instanceof cljs.core.Keyword))?G__1702.fqn:null);
switch (G__1702__$1) {
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
var G__1703 = res;
var G__1704 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,cljs.core.cst$kw$right,p);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__1703,G__1704) : rf.call(null,G__1703,G__1704));
});
G__1705 = function(res,node){
switch(arguments.length){
case 0:
return G__1705__0.call(this);
case 1:
return G__1705__1.call(this,res);
case 2:
return G__1705__2.call(this,res,node);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__1705.cljs$core$IFn$_invoke$arity$0 = G__1705__0;
G__1705.cljs$core$IFn$_invoke$arity$1 = G__1705__1;
G__1705.cljs$core$IFn$_invoke$arity$2 = G__1705__2;
return G__1705;
})()
;})(pos))
});
fipp.engine.update_right = (function fipp$engine$update_right(var_args){
var args__4736__auto__ = [];
var len__4730__auto___1712 = arguments.length;
var i__4731__auto___1713 = (0);
while(true){
if((i__4731__auto___1713 < len__4730__auto___1712)){
args__4736__auto__.push((arguments[i__4731__auto___1713]));

var G__1714 = (i__4731__auto___1713 + (1));
i__4731__auto___1713 = G__1714;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return fipp.engine.update_right.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

fipp.engine.update_right.cljs$core$IFn$_invoke$arity$variadic = (function (deque,f,args){
var G__1710 = cljs.core.pop(deque);
var G__1711 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.peek(deque),args);
return (fipp.deque.conjr.cljs$core$IFn$_invoke$arity$2 ? fipp.deque.conjr.cljs$core$IFn$_invoke$arity$2(G__1710,G__1711) : fipp.deque.conjr.call(null,G__1710,G__1711));
});

fipp.engine.update_right.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fipp.engine.update_right.cljs$lang$applyTo = (function (seq1707){
var G__1708 = cljs.core.first(seq1707);
var seq1707__$1 = cljs.core.next(seq1707);
var G__1709 = cljs.core.first(seq1707__$1);
var seq1707__$2 = cljs.core.next(seq1707__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1708,G__1709,seq1707__$2);
});

/**
 * Given printing options, returns a transducer which annotate the right-side
 *   of groups on their :begin nodes.  This includes the pruning algorithm which
 *   will annotate some :begin nodes as being :too-far to the right without
 *   calculating their exact sizes.
 */
fipp.engine.annotate_begins = (function fipp$engine$annotate_begins(p__1715){
var map__1716 = p__1715;
var map__1716__$1 = (((((!((map__1716 == null))))?(((((map__1716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1716):map__1716);
var options = map__1716__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1716__$1,cljs.core.cst$kw$width);
return ((function (map__1716,map__1716__$1,options,width){
return (function (rf){
var pos = cljs.core.volatile_BANG_((0));
var bufs = cljs.core.volatile_BANG_(fipp.deque.empty);
return ((function (pos,bufs,map__1716,map__1716__$1,options,width){
return (function() {
var G__1723 = null;
var G__1723__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__1723__1 = (function (res){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(res) : rf.call(null,res));
});
var G__1723__2 = (function (res,p__1718){
var map__1719 = p__1718;
var map__1719__$1 = (((((!((map__1719 == null))))?(((((map__1719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1719):map__1719);
var node = map__1719__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1719__$1,cljs.core.cst$kw$op);
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1719__$1,cljs.core.cst$kw$right);
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
var buffers_STAR_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$begin))?(function (){var G__1721 = buffers;
var G__1722 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,(right + width),cljs.core.cst$kw$nodes,fipp.deque.empty], null);
return (fipp.deque.conjr.cljs$core$IFn$_invoke$arity$2 ? fipp.deque.conjr.cljs$core$IFn$_invoke$arity$2(G__1721,G__1722) : fipp.deque.conjr.call(null,G__1721,G__1722));
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

var G__1724 = buffers_STAR__STAR_;
var G__1725 = res_STAR___$1;
buffers_STAR_ = G__1724;
res__$1 = G__1725;
continue;
}
}
break;
}
}
}
});
G__1723 = function(res,p__1718){
switch(arguments.length){
case 0:
return G__1723__0.call(this);
case 1:
return G__1723__1.call(this,res);
case 2:
return G__1723__2.call(this,res,p__1718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__1723.cljs$core$IFn$_invoke$arity$0 = G__1723__0;
G__1723.cljs$core$IFn$_invoke$arity$1 = G__1723__1;
G__1723.cljs$core$IFn$_invoke$arity$2 = G__1723__2;
return G__1723;
})()
;})(pos,bufs,map__1716,map__1716__$1,options,width))
});
;})(map__1716,map__1716__$1,options,width))
});
/**
 * Given printing options, returns a transducer which produces the fully
 *   laid-out strings.
 */
fipp.engine.format_nodes = (function fipp$engine$format_nodes(p__1726){
var map__1727 = p__1726;
var map__1727__$1 = (((((!((map__1727 == null))))?(((((map__1727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1727):map__1727);
var options = map__1727__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1727__$1,cljs.core.cst$kw$width);
return ((function (map__1727,map__1727__$1,options,width){
return (function (rf){
var fits = cljs.core.volatile_BANG_((0));
var length = cljs.core.volatile_BANG_(width);
var tab_stops = cljs.core.volatile_BANG_(cljs.core.list((0)));
var column = cljs.core.volatile_BANG_((0));
return ((function (fits,length,tab_stops,column,map__1727,map__1727__$1,options,width){
return (function() {
var G__1741 = null;
var G__1741__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__1741__1 = (function (res){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(res) : rf.call(null,res));
});
var G__1741__2 = (function (res,p__1729){
var map__1730 = p__1729;
var map__1730__$1 = (((((!((map__1730 == null))))?(((((map__1730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1730):map__1730);
var node = map__1730__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1730__$1,cljs.core.cst$kw$op);
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1730__$1,cljs.core.cst$kw$right);
var indent = cljs.core.peek(cljs.core.deref(tab_stops));
var G__1732 = op;
var G__1732__$1 = (((G__1732 instanceof cljs.core.Keyword))?G__1732.fqn:null);
switch (G__1732__$1) {
case "text":
var text = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(node);
var res_STAR_ = (((cljs.core.deref(column) === (0)))?(function (){
column.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(column.cljs$core$IDeref$_deref$arity$1(null) + indent));

var G__1733 = res;
var G__1734 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(indent," "));
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__1733,G__1734) : rf.call(null,G__1733,G__1734));
})()
:res);
column.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(column.cljs$core$IDeref$_deref$arity$1(null) + cljs.core.count(text)));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(res_STAR_,text) : rf.call(null,res_STAR_,text));

break;
case "escaped":
var text = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(node);
var res_STAR_ = (((cljs.core.deref(column) === (0)))?(function (){
column.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(column.cljs$core$IDeref$_deref$arity$1(null) + indent));

var G__1735 = res;
var G__1736 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(indent," "));
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__1735,G__1736) : rf.call(null,G__1735,G__1736));
})()
:res);
column.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(column.cljs$core$IDeref$_deref$arity$1(null) + (1)));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(res_STAR_,text) : rf.call(null,res_STAR_,text));

break;
case "pass":
var G__1737 = res;
var G__1738 = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(node);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__1737,G__1738) : rf.call(null,G__1737,G__1738));

break;
case "line":
if((cljs.core.deref(fits) === (0))){
cljs.core.vreset_BANG_(length,((right + width) - indent));

cljs.core.vreset_BANG_(column,(0));

var G__1739 = res;
var G__1740 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$terminate.cljs$core$IFn$_invoke$arity$1(node)),"\n"].join('');
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__1739,G__1740) : rf.call(null,G__1739,G__1740));
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
G__1741 = function(res,p__1729){
switch(arguments.length){
case 0:
return G__1741__0.call(this);
case 1:
return G__1741__1.call(this,res);
case 2:
return G__1741__2.call(this,res,p__1729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__1741.cljs$core$IFn$_invoke$arity$0 = G__1741__0;
G__1741.cljs$core$IFn$_invoke$arity$1 = G__1741__1;
G__1741.cljs$core$IFn$_invoke$arity$2 = G__1741__2;
return G__1741;
})()
;})(fits,length,tab_stops,column,map__1727,map__1727__$1,options,width))
});
;})(map__1727,map__1727__$1,options,width))
});
fipp.engine.pprint_document = (function fipp$engine$pprint_document(var_args){
var G__1744 = arguments.length;
switch (G__1744) {
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
var options_1746__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,(70)], null),options], 0));
cljs.core.run_BANG_(cljs.core.print,cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fipp.engine.annotate_rights,fipp.engine.annotate_begins(options_1746__$1),fipp.engine.format_nodes(options_1746__$1),fipp.engine.serialize(document)], 0)));

return cljs.core.println();
});

fipp.engine.pprint_document.cljs$lang$maxFixedArity = 2;

