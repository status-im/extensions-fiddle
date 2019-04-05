// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('clojure.core.rrb_vector.rrbt');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.core.rrb_vector.protocols');
goog.require('clojure.core.rrb_vector.nodes');
goog.require('clojure.core.rrb_vector.trees');
goog.require('clojure.core.rrb_vector.transients');
clojure.core.rrb_vector.rrbt.rrbt_concat_threshold = (33);
clojure.core.rrb_vector.rrbt.max_extra_search_steps = (2);

/**
 * @interface
 */
clojure.core.rrb_vector.rrbt.AsRRBT = function(){};

clojure.core.rrb_vector.rrbt._as_rrbt = (function clojure$core$rrb_vector$rrbt$_as_rrbt(v){
if((((!((v == null)))) && ((!((v.clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1 == null)))))){
return v.clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1(v);
} else {
var x__4433__auto__ = (((v == null))?null:v);
var m__4434__auto__ = (clojure.core.rrb_vector.rrbt._as_rrbt[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(v) : m__4434__auto__.call(null,v));
} else {
var m__4431__auto__ = (clojure.core.rrb_vector.rrbt._as_rrbt["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(v) : m__4431__auto__.call(null,v));
} else {
throw cljs.core.missing_protocol("AsRRBT.-as-rrbt",v);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ASeq}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IChunkedNext}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {clojure.core.rrb_vector.rrbt.Object}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IChunkedSeq}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
clojure.core.rrb_vector.rrbt.RRBChunkedSeq = (function (vec,node,i,off,meta,__hash){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2179858668;
this.cljs$lang$protocol_mask$partition1$ = 1536;
});
clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,this$__$1);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(((self__.off + (1)) < self__.node.length)){
var s = (function (){var G__1361 = self__.vec;
var G__1362 = self__.node;
var G__1363 = self__.i;
var G__1364 = (self__.off + (1));
return (clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$4(G__1361,G__1362,G__1363,G__1364) : clojure.core.rrb_vector.rrbt.rrb_chunked_seq.call(null,G__1361,G__1362,G__1363,G__1364));
})();
if((s == null)){
return null;
} else {
return s;
}
} else {
return coll__$1.cljs$core$IChunkedNext$_chunked_next$arity$1(null);
}
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(self__.vec,(self__.i + self__.off),cljs.core.count(self__.vec)),f);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(self__.vec,(self__.i + self__.off),cljs.core.count(self__.vec)),f,start);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (self__.node[self__.off]);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(((self__.off + (1)) < self__.node.length)){
var s = (function (){var G__1365 = self__.vec;
var G__1366 = self__.node;
var G__1367 = self__.i;
var G__1368 = (self__.off + (1));
return (clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$4(G__1365,G__1366,G__1367,G__1368) : clojure.core.rrb_vector.rrbt.rrb_chunked_seq.call(null,G__1365,G__1366,G__1367,G__1368));
})();
if((s == null)){
return cljs.core.List.EMPTY;
} else {
return s;
}
} else {
return coll__$1.cljs$core$IChunkedSeq$_chunked_rest$arity$1(null);
}
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_chunk.cljs$core$IFn$_invoke$arity$2(self__.node,self__.off);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var l = self__.node.length;
var s = ((((self__.i + l) < cljs.core._count(self__.vec)))?(function (){var G__1369 = self__.vec;
var G__1370 = (self__.i + l);
var G__1371 = (0);
return (clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$3 ? clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$3(G__1369,G__1370,G__1371) : clojure.core.rrb_vector.rrbt.rrb_chunked_seq.call(null,G__1369,G__1370,G__1371));
})():null);
if((s == null)){
return cljs.core.List.EMPTY;
} else {
return s;
}
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var self__ = this;
var coll__$1 = this;
return (clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$5(self__.vec,self__.node,self__.i,self__.off,m) : clojure.core.rrb_vector.rrbt.rrb_chunked_seq.call(null,self__.vec,self__.node,self__.i,self__.off,m));
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var l = self__.node.length;
var s = ((((self__.i + l) < cljs.core._count(self__.vec)))?(function (){var G__1372 = self__.vec;
var G__1373 = (self__.i + l);
var G__1374 = (0);
return (clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$3 ? clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$3(G__1372,G__1373,G__1374) : clojure.core.rrb_vector.rrbt.rrb_chunked_seq.call(null,G__1372,G__1373,G__1374));
})():null);
if((s == null)){
return null;
} else {
return s;
}
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$vec,cljs.core.cst$sym$node,cljs.core.cst$sym$i,cljs.core.cst$sym$off,cljs.core.cst$sym$meta,cljs.core.with_meta(cljs.core.cst$sym$__hash,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.cljs$lang$type = true;

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.cljs$lang$ctorStr = "clojure.core.rrb-vector.rrbt/RRBChunkedSeq";

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"clojure.core.rrb-vector.rrbt/RRBChunkedSeq");
});

/**
 * Positional factory function for clojure.core.rrb-vector.rrbt/RRBChunkedSeq.
 */
clojure.core.rrb_vector.rrbt.__GT_RRBChunkedSeq = (function clojure$core$rrb_vector$rrbt$__GT_RRBChunkedSeq(vec,node,i,off,meta,__hash){
return (new clojure.core.rrb_vector.rrbt.RRBChunkedSeq(vec,node,i,off,meta,__hash));
});

clojure.core.rrb_vector.rrbt.rrb_chunked_seq = (function clojure$core$rrb_vector$rrbt$rrb_chunked_seq(var_args){
var G__1376 = arguments.length;
switch (G__1376) {
case 3:
return clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$3 = (function (vec,i,off){
var cnt = vec.cnt;
var shift = vec.shift;
var root = vec.root;
var tail = vec.tail;
return (new clojure.core.rrb_vector.rrbt.RRBChunkedSeq(vec,clojure.core.rrb_vector.trees.array_for(cnt,shift,root,tail,i),i,off,null,null));
});

clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$4 = (function (vec,node,i,off){
return (new clojure.core.rrb_vector.rrbt.RRBChunkedSeq(vec,node,i,off,null,null));
});

clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$5 = (function (vec,node,i,off,meta){
return (new clojure.core.rrb_vector.rrbt.RRBChunkedSeq(vec,node,i,off,meta,null));
});

clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$lang$maxFixedArity = 5;

clojure.core.rrb_vector.rrbt.slice_right = (function clojure$core$rrb_vector$rrbt$slice_right(node,shift,end){
if((shift === (0))){
var arr = node.arr;
var new_arr = (new Array(end));
cljs.core.array_copy(arr,(0),new_arr,(0),end);

return cljs.core.__GT_VectorNode(null,new_arr);
} else {
var reg_QMARK_ = clojure.core.rrb_vector.nodes.regular_QMARK_(node);
var rngs = (((!(reg_QMARK_)))?clojure.core.rrb_vector.nodes.node_ranges(node):null);
var i = (((end - (1)) >> shift) & (31));
var i__$1 = ((reg_QMARK_)?i:(function (){var j = i;
while(true){
if((end <= (rngs[j]))){
return j;
} else {
var G__1381 = (j + (1));
j = G__1381;
continue;
}
break;
}
})());
var child_end = ((reg_QMARK_)?(function (){var ce = cljs.core.mod(end,((1) << shift));
if((ce === (0))){
return ((1) << shift);
} else {
return ce;
}
})():(((i__$1 > (0)))?(end - (rngs[(i__$1 - (1))])):end));
var arr = node.arr;
var new_child = (function (){var G__1378 = (arr[i__$1]);
var G__1379 = (shift - (5));
var G__1380 = child_end;
return (clojure.core.rrb_vector.rrbt.slice_right.cljs$core$IFn$_invoke$arity$3 ? clojure.core.rrb_vector.rrbt.slice_right.cljs$core$IFn$_invoke$arity$3(G__1378,G__1379,G__1380) : clojure.core.rrb_vector.rrbt.slice_right.call(null,G__1378,G__1379,G__1380));
})();
var regular_child_QMARK_ = (((shift === (5)))?((32) === new_child.arr.length):clojure.core.rrb_vector.nodes.regular_QMARK_(new_child));
var new_arr = (new Array(((((reg_QMARK_) && (regular_child_QMARK_)))?(32):(33))));
var new_child_rng = ((regular_child_QMARK_)?(function (){var m = cljs.core.mod(child_end,((1) << shift));
if((m === (0))){
return ((1) << shift);
} else {
return m;
}
})():(((shift === (5)))?new_child.arr.length:clojure.core.rrb_vector.nodes.last_range(new_child)));
cljs.core.array_copy(arr,(0),new_arr,(0),i__$1);

(new_arr[i__$1] = new_child);

if((!(((reg_QMARK_) && (regular_child_QMARK_))))){
var new_rngs_1382 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var step_1383 = ((1) << shift);
if(reg_QMARK_){
var n__4607__auto___1384 = i__$1;
var j_1385 = (0);
while(true){
if((j_1385 < n__4607__auto___1384)){
(new_rngs_1382[j_1385] = ((j_1385 + (1)) * step_1383));

var G__1386 = (j_1385 + (1));
j_1385 = G__1386;
continue;
} else {
}
break;
}
} else {
var n__4607__auto___1387 = i__$1;
var j_1388 = (0);
while(true){
if((j_1388 < n__4607__auto___1387)){
(new_rngs_1382[j_1388] = (rngs[j_1388]));

var G__1389 = (j_1388 + (1));
j_1388 = G__1389;
continue;
} else {
}
break;
}
}

(new_rngs_1382[i__$1] = ((((i__$1 > (0)))?(new_rngs_1382[(i__$1 - (1))]):(0)) + new_child_rng));

(new_rngs_1382[(32)] = (i__$1 + (1)));

(new_arr[(32)] = new_rngs_1382);
} else {
}

return cljs.core.__GT_VectorNode(null,new_arr);
}
});
clojure.core.rrb_vector.rrbt.slice_left = (function clojure$core$rrb_vector$rrbt$slice_left(node,shift,start,end){
if((shift === (0))){
var arr = node.arr;
var new_len = (arr.length - start);
var new_arr = (new Array(new_len));
cljs.core.array_copy(arr,start,new_arr,(0),new_len);

return cljs.core.__GT_VectorNode(null,new_arr);
} else {
var reg_QMARK_ = clojure.core.rrb_vector.nodes.regular_QMARK_(node);
var arr = node.arr;
var rngs = (((!(reg_QMARK_)))?clojure.core.rrb_vector.nodes.node_ranges(node):null);
var i = ((start >> shift) & (31));
var i__$1 = ((reg_QMARK_)?i:(function (){var j = i;
while(true){
if((start < (rngs[j]))){
return j;
} else {
var G__1394 = (j + (1));
j = G__1394;
continue;
}
break;
}
})());
var len = ((reg_QMARK_)?(function (){var i__$2 = i__$1;
while(true){
if((((i__$2 === (32))) || (((arr[i__$2]) == null)))){
return i__$2;
} else {
var G__1395 = (i__$2 + (1));
i__$2 = G__1395;
continue;
}
break;
}
})():(rngs[(32)]));
var child_start = (((i__$1 > (0)))?(start - ((reg_QMARK_)?(i__$1 * ((1) << shift)):(rngs[(i__$1 - (1))]))):start);
var child_end = (function (){var x__4222__auto__ = ((1) << shift);
var y__4223__auto__ = (((i__$1 > (0)))?(end - ((reg_QMARK_)?(i__$1 * ((1) << shift)):(rngs[(i__$1 - (1))]))):end);
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var new_child = (function (){var G__1390 = (arr[i__$1]);
var G__1391 = (shift - (5));
var G__1392 = child_start;
var G__1393 = child_end;
return (clojure.core.rrb_vector.rrbt.slice_left.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.rrbt.slice_left.cljs$core$IFn$_invoke$arity$4(G__1390,G__1391,G__1392,G__1393) : clojure.core.rrb_vector.rrbt.slice_left.call(null,G__1390,G__1391,G__1392,G__1393));
})();
var new_len = (len - i__$1);
var new_len__$1 = (((new_child == null))?(new_len - (1)):new_len);
if((new_len__$1 === (0))){
return null;
} else {
if(reg_QMARK_){
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var rngs__$1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var rng0 = (((((new_child == null)) || ((shift === (5))) || (clojure.core.rrb_vector.nodes.regular_QMARK_(new_child))))?(((1) << shift) - ((start >> (shift - (5))) & (31))):clojure.core.rrb_vector.nodes.last_range(new_child));
var step = ((1) << shift);
var j_1396 = (0);
var r_1397 = rng0;
while(true){
if((j_1396 < new_len__$1)){
(rngs__$1[j_1396] = r_1397);

var G__1398 = (j_1396 + (1));
var G__1399 = (r_1397 + step);
j_1396 = G__1398;
r_1397 = G__1399;
continue;
} else {
}
break;
}

if((new_len__$1 > (1))){
(rngs__$1[(new_len__$1 - (1))] = (end - start));
} else {
}

(rngs__$1[(32)] = new_len__$1);

cljs.core.array_copy(arr,(((new_child == null))?(i__$1 + (1)):i__$1),new_arr,(0),new_len__$1);

if((!((new_child == null)))){
(new_arr[(0)] = new_child);
} else {
}

(new_arr[(32)] = rngs__$1);

return cljs.core.__GT_VectorNode(node.edit,new_arr);
} else {
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var j_1400 = (0);
var i_1401__$2 = i__$1;
while(true){
if((j_1400 < new_len__$1)){
(new_rngs[j_1400] = ((rngs[i_1401__$2]) - start));

var G__1402 = (j_1400 + (1));
var G__1403 = (i_1401__$2 + (1));
j_1400 = G__1402;
i_1401__$2 = G__1403;
continue;
} else {
}
break;
}

(new_rngs[(32)] = new_len__$1);

cljs.core.array_copy(arr,(((new_child == null))?(i__$1 + (1)):i__$1),new_arr,(0),new_len__$1);

if((!((new_child == null)))){
(new_arr[(0)] = new_child);
} else {
}

(new_arr[(32)] = new_rngs);

return cljs.core.__GT_VectorNode(node.edit,new_arr);

}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IVector}
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEditableCollection}
 * @implements {clojure.core.rrb_vector.rrbt.AsRRBT}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {clojure.core.rrb_vector.protocols.PSliceableVector}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IStack}
 * @implements {cljs.core.IMapEntry}
 * @implements {clojure.core.rrb_vector.rrbt.Object}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IComparable}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {clojure.core.rrb_vector.protocols.PSpliceableVector}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
clojure.core.rrb_vector.rrbt.Vector = (function (cnt,shift,root,tail,meta,__hash){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2315152159;
this.cljs$lang$protocol_mask$partition1$ = 2052;
});
clojure.core.rrb_vector.rrbt.Vector.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_(this$);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IIndexed$_nth$arity$3(null,k,null);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this$,f,init){
var self__ = this;
var this$__$1 = this;
var i = (0);
var j = (0);
var init__$1 = init;
var arr = clojure.core.rrb_vector.trees.array_for(self__.cnt,self__.shift,self__.root,self__.tail,i);
var lim = (arr.length - (1));
var step = (lim + (1));
while(true){
var init__$2 = (function (){var G__1408 = init__$1;
var G__1409 = (i + j);
var G__1410 = (arr[j]);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__1408,G__1409,G__1410) : f.call(null,G__1408,G__1409,G__1410));
})();
if(cljs.core.reduced_QMARK_(init__$2)){
return cljs.core.deref(init__$2);
} else {
if((j < lim)){
var G__1421 = i;
var G__1422 = (j + (1));
var G__1423 = init__$2;
var G__1424 = arr;
var G__1425 = lim;
var G__1426 = step;
i = G__1421;
j = G__1422;
init__$1 = G__1423;
arr = G__1424;
lim = G__1425;
step = G__1426;
continue;
} else {
var i__$1 = (i + step);
if((i__$1 < self__.cnt)){
var arr__$1 = clojure.core.rrb_vector.trees.array_for(self__.cnt,self__.shift,self__.root,self__.tail,i__$1);
var len = arr__$1.length;
var lim__$1 = (len - (1));
var G__1427 = i__$1;
var G__1428 = (0);
var G__1429 = init__$2;
var G__1430 = arr__$1;
var G__1431 = lim__$1;
var G__1432 = len;
i = G__1427;
j = G__1428;
init__$1 = G__1429;
arr = G__1430;
lim = G__1431;
step = G__1432;
continue;
} else {
return init__$2;
}
}
}
break;
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,i){
var self__ = this;
var this$__$1 = this;
if(((((0) <= i)) && ((i < self__.cnt)))){
var tail_off = (self__.cnt - self__.tail.length);
if((tail_off <= i)){
return (self__.tail[(i - tail_off)]);
} else {
var i__$1 = i;
var node = self__.root;
var shift__$1 = self__.shift;
while(true){
if((shift__$1 === (0))){
var arr = node.arr;
return (arr[((i__$1 >> shift__$1) & (31))]);
} else {
if(clojure.core.rrb_vector.nodes.regular_QMARK_(node)){
var arr = node.arr;
var idx = ((i__$1 >> shift__$1) & (31));
var i__$2 = i__$1;
var node__$1 = (arr[idx]);
var shift__$2 = (shift__$1 - (5));
while(true){
var arr__$1 = node__$1.arr;
var idx__$1 = ((i__$2 >> shift__$2) & (31));
if((shift__$2 === (0))){
return (arr__$1[idx__$1]);
} else {
var G__1433 = i__$2;
var G__1434 = (arr__$1[idx__$1]);
var G__1435 = (shift__$2 - (5));
i__$2 = G__1433;
node__$1 = G__1434;
shift__$2 = G__1435;
continue;
}
break;
}
} else {
var arr = node.arr;
var rngs = clojure.core.rrb_vector.nodes.node_ranges(node);
var idx = (function (){var j = ((i__$1 >> shift__$1) & (31));
while(true){
if((i__$1 < (rngs[j]))){
return j;
} else {
var G__1436 = (j + (1));
j = G__1436;
continue;
}
break;
}
})();
var i__$2 = (((idx === (0)))?i__$1:(i__$1 - (rngs[(idx - (1))])));
var G__1437 = i__$2;
var G__1438 = (arr[idx]);
var G__1439 = (shift__$1 - (5));
i__$1 = G__1437;
node = G__1438;
shift__$1 = G__1439;
continue;
}
}
break;
}
}
} else {
return cljs.core.vector_index_out_of_bounds(i,self__.cnt);
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,i,not_found){
var self__ = this;
var this$__$1 = this;
if((((i >= (0))) && ((i < self__.cnt)))){
return this$__$1.cljs$core$IIndexed$_nth$arity$2(null,i);
} else {
return not_found;
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,this$__$1);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (this$,i,val){
var self__ = this;
var this$__$1 = this;
if(((((0) <= i)) && ((i < self__.cnt)))){
var tail_off = clojure.core.rrb_vector.trees.tail_offset(self__.cnt,self__.tail);
if((i >= tail_off)){
var new_tail = (new Array(self__.tail.length));
var idx = (i - tail_off);
cljs.core.array_copy(self__.tail,(0),new_tail,(0),self__.tail.length);

(new_tail[idx] = val);

return (new clojure.core.rrb_vector.rrbt.Vector(self__.cnt,self__.shift,self__.root,new_tail,self__.meta,null));
} else {
return (new clojure.core.rrb_vector.rrbt.Vector(self__.cnt,self__.shift,clojure.core.rrb_vector.trees.do_assoc(self__.shift,self__.root,i,val),self__.tail,self__.meta,null));
}
} else {
if((i === self__.cnt)){
return this$__$1.cljs$core$ICollection$_conj$arity$2(null,val);
} else {
return cljs.core.vector_index_out_of_bounds(i,self__.cnt);

}
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cnt;
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IIndexed$_nth$arity$2(null,(0));
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IIndexed$_nth$arity$2(null,(1));
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.cnt > (0))){
return this$__$1.cljs$core$IIndexed$_nth$arity$2(null,(self__.cnt - (1)));
} else {
return null;
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.cnt === (0))){
throw (new Error("Can't pop empty vector"));
} else {
if(((1) === self__.cnt)){
return cljs.core._with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
} else {
if((self__.tail.length > (1))){
var new_tail = (new Array((self__.tail.length - (1))));
cljs.core.array_copy(self__.tail,(0),new_tail,(0),new_tail.length);

return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt - (1)),self__.shift,self__.root,new_tail,self__.meta,null));
} else {
var new_tail = clojure.core.rrb_vector.trees.array_for(self__.cnt,self__.shift,self__.root,self__.tail,(self__.cnt - (2)));
var root_cnt = clojure.core.rrb_vector.trees.tail_offset(self__.cnt,self__.tail);
var new_root = clojure.core.rrb_vector.trees.pop_tail(self__.shift,root_cnt,self__.root.edit,self__.root);
if((new_root == null)){
return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt - (1)),self__.shift,clojure.core.rrb_vector.nodes.empty_node,new_tail,self__.meta,null));
} else {
if((((self__.shift > (5))) && (((new_root.arr[(1)]) == null)))){
return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt - (1)),(self__.shift - (5)),(new_root.arr[(0)]),new_tail,self__.meta,null));
} else {
return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt - (1)),self__.shift,new_root,new_tail,self__.meta,null));

}
}

}
}
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.cnt > (0))){
return (new cljs.core.RSeq(this$__$1,(self__.cnt - (1)),null));
} else {
return null;
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = cljs.core.hash_ordered_coll(this$__$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return cljs.core.equiv_sequential(this$__$1,that);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__1411 = self__.cnt;
var G__1412 = self__.shift;
var G__1413 = clojure.core.rrb_vector.transients.editable_root(self__.root);
var G__1414 = clojure.core.rrb_vector.transients.editable_tail(self__.tail);
var G__1415 = self__.tail.length;
return (clojure.core.rrb_vector.rrbt.__GT_Transient.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.rrbt.__GT_Transient.cljs$core$IFn$_invoke$arity$5(G__1411,G__1412,G__1413,G__1414,G__1415) : clojure.core.rrb_vector.rrbt.__GT_Transient.call(null,G__1411,G__1412,G__1413,G__1414,G__1415));
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$protocols$PSliceableVector$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$protocols$PSliceableVector$_slicev$arity$3 = (function (this$,start,end){
var self__ = this;
var this$__$1 = this;
var new_cnt = (end - start);
if((((start < (0))) || ((end > self__.cnt)))){
throw (new Error("vector index out of bounds"));
} else {
if((start === end)){
return cljs.core.empty(this$__$1);
} else {
if((start > end)){
throw (new Error("start index greater than end index"));
} else {
var tail_off = clojure.core.rrb_vector.trees.tail_offset(self__.cnt,self__.tail);
if((start >= tail_off)){
var new_tail = (new Array(new_cnt));
cljs.core.array_copy(self__.tail,(start - tail_off),new_tail,(0),new_cnt);

return (new clojure.core.rrb_vector.rrbt.Vector(new_cnt,(5),clojure.core.rrb_vector.nodes.empty_node,new_tail,self__.meta,null));
} else {
var tail_cut_QMARK_ = (end > tail_off);
var new_root = ((tail_cut_QMARK_)?self__.root:clojure.core.rrb_vector.rrbt.slice_right(self__.root,self__.shift,end));
var new_root__$1 = (((start === (0)))?new_root:clojure.core.rrb_vector.rrbt.slice_left(new_root,self__.shift,start,(function (){var x__4222__auto__ = end;
var y__4223__auto__ = tail_off;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})()));
var new_tail = ((tail_cut_QMARK_)?(function (){var new_len = (end - tail_off);
var new_tail = (new Array(new_len));
cljs.core.array_copy(self__.tail,(0),new_tail,(0),new_len);

return new_tail;
})():clojure.core.rrb_vector.trees.array_for(new_cnt,self__.shift,new_root__$1,[],(new_cnt - (1))));
var new_root__$2 = ((tail_cut_QMARK_)?new_root__$1:clojure.core.rrb_vector.trees.pop_tail(self__.shift,new_cnt,new_root__$1.edit,new_root__$1));
if((new_root__$2 == null)){
return (new clojure.core.rrb_vector.rrbt.Vector(new_cnt,(5),clojure.core.rrb_vector.nodes.empty_node,new_tail,self__.meta,null));
} else {
var r = new_root__$2;
var s = self__.shift;
while(true){
if((((s > (5))) && (((r.arr[(1)]) == null)))){
var G__1440 = (r.arr[(0)]);
var G__1441 = (s - (5));
r = G__1440;
s = G__1441;
continue;
} else {
return (new clojure.core.rrb_vector.rrbt.Vector(new_cnt,s,r,new_tail,self__.meta,null));
}
break;
}
}
}

}
}
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(this$__$1,f);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var self__ = this;
var this$__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(this$__$1,f,start);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,k,v){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IVector$_assoc_n$arity$3(null,k,v);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.cnt === (0))){
return null;
} else {
if((clojure.core.rrb_vector.trees.tail_offset(self__.cnt,self__.tail) === (0))){
return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(self__.tail);
} else {
return clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$3(this$__$1,(0),(0));

}
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new clojure.core.rrb_vector.rrbt.Vector(self__.cnt,self__.shift,self__.root,self__.tail,meta__$1,self__.__hash));
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,val){
var self__ = this;
var this$__$1 = this;
if((self__.tail.length < (32))){
var tail_len = self__.tail.length;
var new_tail = (new Array((tail_len + (1))));
cljs.core.array_copy(self__.tail,(0),new_tail,(0),tail_len);

(new_tail[tail_len] = val);

return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt + (1)),self__.shift,self__.root,new_tail,self__.meta,null));
} else {
var tail_node = cljs.core.__GT_VectorNode(self__.root.edit,self__.tail);
var new_tail = (function (){var new_arr = [null];
(new_arr[(0)] = val);

return new_arr;
})();
if(clojure.core.rrb_vector.nodes.overflow_QMARK_(self__.root,self__.shift,self__.cnt)){
if(clojure.core.rrb_vector.nodes.regular_QMARK_(self__.root)){
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_root = cljs.core.__GT_VectorNode(self__.root.edit,new_arr);
var G__1416_1442 = new_arr;
(G__1416_1442[(0)] = self__.root);

(G__1416_1442[(1)] = clojure.core.rrb_vector.trees.new_path(self__.tail,self__.root.edit,self__.shift,tail_node));


return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt + (1)),(self__.shift + (5)),new_root,new_tail,self__.meta,null));
} else {
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_root = cljs.core.__GT_VectorNode(self__.root.edit,new_arr);
var root_total_range = (clojure.core.rrb_vector.nodes.node_ranges(self__.root)[(31)]);
var G__1417_1443 = new_arr;
(G__1417_1443[(0)] = self__.root);

(G__1417_1443[(1)] = clojure.core.rrb_vector.trees.new_path(self__.tail,self__.root.edit,self__.shift,tail_node));

(G__1417_1443[(32)] = new_rngs);


var G__1418_1444 = new_rngs;
(G__1418_1444[(0)] = root_total_range);

(G__1418_1444[(1)] = (root_total_range + (32)));

(G__1418_1444[(32)] = (2));


return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt + (1)),(self__.shift + (5)),new_root,new_tail,self__.meta,null));
}
} else {
return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt + (1)),self__.shift,clojure.core.rrb_vector.trees.push_tail(self__.shift,self__.cnt,self__.root.edit,self__.root,tail_node),new_tail,self__.meta,null));
}
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.call = (function() {
var G__1445 = null;
var G__1445__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$IIndexed$_nth$arity$2(null,k);
});
var G__1445__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
G__1445 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__1445__2.call(this,self__,k);
case 3:
return G__1445__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__1445.cljs$core$IFn$_invoke$arity$2 = G__1445__2;
G__1445.cljs$core$IFn$_invoke$arity$3 = G__1445__3;
return G__1445;
})()
;

clojure.core.rrb_vector.rrbt.Vector.prototype.apply = (function (self__,args1404){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args1404)));
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$IIndexed$_nth$arity$2(null,k);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2(this$__$1,that);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$protocols$PSpliceableVector$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$protocols$PSpliceableVector$_splicev$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
var G__1419 = this$__$1;
var G__1420 = clojure.core.rrb_vector.rrbt._as_rrbt(that);
return (clojure.core.rrb_vector.rrbt.splice_rrbts.cljs$core$IFn$_invoke$arity$2 ? clojure.core.rrb_vector.rrbt.splice_rrbts.cljs$core$IFn$_invoke$arity$2(G__1419,G__1420) : clojure.core.rrb_vector.rrbt.splice_rrbts.call(null,G__1419,G__1420));
});

clojure.core.rrb_vector.rrbt.Vector.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cnt,cljs.core.cst$sym$shift,cljs.core.cst$sym$root,cljs.core.cst$sym$tail,cljs.core.cst$sym$meta,cljs.core.with_meta(cljs.core.cst$sym$__hash,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

clojure.core.rrb_vector.rrbt.Vector.cljs$lang$type = true;

clojure.core.rrb_vector.rrbt.Vector.cljs$lang$ctorStr = "clojure.core.rrb-vector.rrbt/Vector";

clojure.core.rrb_vector.rrbt.Vector.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"clojure.core.rrb-vector.rrbt/Vector");
});

/**
 * Positional factory function for clojure.core.rrb-vector.rrbt/Vector.
 */
clojure.core.rrb_vector.rrbt.__GT_Vector = (function clojure$core$rrb_vector$rrbt$__GT_Vector(cnt,shift,root,tail,meta,__hash){
return (new clojure.core.rrb_vector.rrbt.Vector(cnt,shift,root,tail,meta,__hash));
});

cljs.core.PersistentVector.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1 = (function (this$){
var this$__$1 = this;
return (new clojure.core.rrb_vector.rrbt.Vector(cljs.core.count(this$__$1),this$__$1.shift,this$__$1.root,this$__$1.tail,cljs.core.meta(this$__$1),null));
});

cljs.core.Subvec.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Subvec.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1 = (function (this$){
var this$__$1 = this;
var v = this$__$1.v;
var start = this$__$1.start;
var end = this$__$1.end;
return clojure.core.rrb_vector.protocols._slicev(clojure.core.rrb_vector.rrbt._as_rrbt(v),start,end);
});
clojure.core.rrb_vector.rrbt.shift_from_to = (function clojure$core$rrb_vector$rrbt$shift_from_to(node,from,to){
while(true){
if((from === to)){
return node;
} else {
if(clojure.core.rrb_vector.nodes.regular_QMARK_(node)){
var G__1449 = cljs.core.__GT_VectorNode(node.edit,(function (){var G__1446 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__1446[(0)] = node);

return G__1446;
})());
var G__1450 = ((5) + from);
var G__1451 = to;
node = G__1449;
from = G__1450;
to = G__1451;
continue;
} else {
var G__1452 = cljs.core.__GT_VectorNode(node.edit,(function (){var G__1447 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__1447[(0)] = node);

(G__1447[(32)] = (function (){var G__1448 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__1448[(0)] = clojure.core.rrb_vector.nodes.last_range(node));

(G__1448[(32)] = (1));

return G__1448;
})());

return G__1447;
})());
var G__1453 = ((5) + from);
var G__1454 = to;
node = G__1452;
from = G__1453;
to = G__1454;
continue;

}
}
break;
}
});
clojure.core.rrb_vector.rrbt.slot_count = (function clojure$core$rrb_vector$rrbt$slot_count(node,shift){
var arr = node.arr;
if((shift === (0))){
return arr.length;
} else {
if(clojure.core.rrb_vector.nodes.regular_QMARK_(node)){
return clojure.core.rrb_vector.nodes.index_of_nil(arr);
} else {
var rngs = clojure.core.rrb_vector.nodes.node_ranges(node);
return (rngs[(32)]);
}
}
});
clojure.core.rrb_vector.rrbt.subtree_branch_count = (function clojure$core$rrb_vector$rrbt$subtree_branch_count(node,shift){
var arr = node.arr;
var cs = (shift - (5));
if(clojure.core.rrb_vector.nodes.regular_QMARK_(node)){
var i = (0);
var sbc = (0);
while(true){
if((i === (32))){
return sbc;
} else {
var temp__5455__auto__ = (arr[i]);
if(cljs.core.truth_(temp__5455__auto__)){
var child = temp__5455__auto__;
var G__1455 = (i + (1));
var G__1456 = (sbc + clojure.core.rrb_vector.rrbt.slot_count(child,cs));
i = G__1455;
sbc = G__1456;
continue;
} else {
return sbc;
}
}
break;
}
} else {
var lim = (clojure.core.rrb_vector.nodes.node_ranges(node)[(32)]);
var i = (0);
var sbc = (0);
while(true){
if((i === lim)){
return sbc;
} else {
var child = (arr[i]);
var G__1457 = (i + (1));
var G__1458 = (sbc + clojure.core.rrb_vector.rrbt.slot_count(child,cs));
i = G__1457;
sbc = G__1458;
continue;
}
break;
}
}
});
clojure.core.rrb_vector.rrbt.leaf_seq = (function clojure$core$rrb_vector$rrbt$leaf_seq(arr){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__1459_SHARP_){
return p1__1459_SHARP_.arr;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.take.cljs$core$IFn$_invoke$arity$2(clojure.core.rrb_vector.nodes.index_of_nil(arr),arr)], 0));
});
clojure.core.rrb_vector.rrbt.rebalance_leaves = (function clojure$core$rrb_vector$rrbt$rebalance_leaves(n1,cnt1,n2,cnt2,transferred_leaves){
var slc1 = clojure.core.rrb_vector.rrbt.slot_count(n1,(5));
var slc2 = clojure.core.rrb_vector.rrbt.slot_count(n2,(5));
var a = (slc1 + slc2);
var sbc1 = clojure.core.rrb_vector.rrbt.subtree_branch_count(n1,(5));
var sbc2 = clojure.core.rrb_vector.rrbt.subtree_branch_count(n2,(5));
var p = (sbc1 + sbc2);
var e = (a - (cljs.core.quot((p - (1)),(32)) + (1)));
if((e <= (2))){
return [n1,n2];
} else {
if(((sbc1 + sbc2) <= (1024))){
var reg_QMARK_ = (cljs.core.mod(p,(32)) === (0));
var new_arr = (new Array(((reg_QMARK_)?(32):(33))));
var new_n1 = cljs.core.__GT_VectorNode(null,new_arr);
var i_1460 = (0);
var bs_1461 = cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((32),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.core.rrb_vector.rrbt.leaf_seq(n1.arr),clojure.core.rrb_vector.rrbt.leaf_seq(n2.arr)));
while(true){
var temp__5457__auto___1462 = cljs.core.seq(bs_1461);
if(temp__5457__auto___1462){
var xs__6012__auto___1463 = temp__5457__auto___1462;
var block_1464 = cljs.core.first(xs__6012__auto___1463);
var a_1465__$1 = (new Array(cljs.core.count(block_1464)));
var i_1466__$1 = (0);
var xs_1467 = cljs.core.seq(block_1464);
while(true){
if(xs_1467){
(a_1465__$1[i_1466__$1] = cljs.core.first(xs_1467));

var G__1468 = (i_1466__$1 + (1));
var G__1469 = cljs.core.next(xs_1467);
i_1466__$1 = G__1468;
xs_1467 = G__1469;
continue;
} else {
}
break;
}

(new_arr[i_1460] = cljs.core.__GT_VectorNode(null,a_1465__$1));

var G__1470 = (i_1460 + (1));
var G__1471 = cljs.core.next(bs_1461);
i_1460 = G__1470;
bs_1461 = G__1471;
continue;
} else {
}
break;
}

if((!(reg_QMARK_))){
(new_arr[(32)] = clojure.core.rrb_vector.nodes.regular_ranges((5),p));
} else {
}

transferred_leaves.val = sbc2;

return [new_n1,null];
} else {
var reg_QMARK_ = (cljs.core.mod(p,(32)) === (0));
var new_arr1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_arr2 = (new Array(((reg_QMARK_)?(32):(33))));
var new_n1 = cljs.core.__GT_VectorNode(null,new_arr1);
var new_n2 = cljs.core.__GT_VectorNode(null,new_arr2);
var i_1472 = (0);
var bs_1473 = cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((32),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.core.rrb_vector.rrbt.leaf_seq(n1.arr),clojure.core.rrb_vector.rrbt.leaf_seq(n2.arr)));
while(true){
var temp__5457__auto___1474 = cljs.core.seq(bs_1473);
if(temp__5457__auto___1474){
var xs__6012__auto___1475 = temp__5457__auto___1474;
var block_1476 = cljs.core.first(xs__6012__auto___1475);
var a_1477__$1 = (new Array(cljs.core.count(block_1476)));
var i_1478__$1 = (0);
var xs_1479 = cljs.core.seq(block_1476);
while(true){
if(xs_1479){
(a_1477__$1[i_1478__$1] = cljs.core.first(xs_1479));

var G__1480 = (i_1478__$1 + (1));
var G__1481 = cljs.core.next(xs_1479);
i_1478__$1 = G__1480;
xs_1479 = G__1481;
continue;
} else {
}
break;
}

if((i_1472 < (32))){
(new_arr1[i_1472] = cljs.core.__GT_VectorNode(null,a_1477__$1));
} else {
(new_arr2[(i_1472 - (32))] = cljs.core.__GT_VectorNode(null,a_1477__$1));
}

var G__1482 = (i_1472 + (1));
var G__1483 = cljs.core.next(bs_1473);
i_1472 = G__1482;
bs_1473 = G__1483;
continue;
} else {
}
break;
}

if((!(reg_QMARK_))){
(new_arr2[(32)] = clojure.core.rrb_vector.nodes.regular_ranges((5),(p - (1024))));
} else {
}

transferred_leaves.val = ((1024) - sbc1);

return [new_n1,new_n2];

}
}
});
clojure.core.rrb_vector.rrbt.child_seq = (function clojure$core$rrb_vector$rrbt$child_seq(node,shift,cnt){
var arr = node.arr;
var rngs = ((clojure.core.rrb_vector.nodes.regular_QMARK_(node))?clojure.core.rrb_vector.nodes.regular_ranges(shift,cnt):clojure.core.rrb_vector.nodes.node_ranges(node));
var cs = (cljs.core.truth_(rngs)?(rngs[(32)]):clojure.core.rrb_vector.nodes.index_of_nil(arr));
var cseq = ((function (arr,rngs,cs){
return (function clojure$core$rrb_vector$rrbt$child_seq_$_cseq(c,r){
var arr__$1 = c.arr;
var rngs__$1 = ((clojure.core.rrb_vector.nodes.regular_QMARK_(c))?clojure.core.rrb_vector.nodes.regular_ranges((shift - (5)),r):clojure.core.rrb_vector.nodes.node_ranges(c));
var gcs = (cljs.core.truth_(rngs__$1)?(rngs__$1[(32)]):clojure.core.rrb_vector.nodes.index_of_nil(arr__$1));
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.list,cljs.core.take.cljs$core$IFn$_invoke$arity$2(gcs,arr__$1),cljs.core.take.cljs$core$IFn$_invoke$arity$2(gcs,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,rngs__$1,cljs.core.cons((0),rngs__$1))));
});})(arr,rngs,cs))
;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cseq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.take.cljs$core$IFn$_invoke$arity$2(cs,arr),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cs,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,rngs,cljs.core.cons((0),rngs)))], 0));
});
clojure.core.rrb_vector.rrbt.rebalance = (function clojure$core$rrb_vector$rrbt$rebalance(shift,n1,cnt1,n2,cnt2,transferred_leaves){
if((n2 == null)){
return [n1,null];
} else {
var slc1 = clojure.core.rrb_vector.rrbt.slot_count(n1,shift);
var slc2 = clojure.core.rrb_vector.rrbt.slot_count(n2,shift);
var a = (slc1 + slc2);
var sbc1 = clojure.core.rrb_vector.rrbt.subtree_branch_count(n1,shift);
var sbc2 = clojure.core.rrb_vector.rrbt.subtree_branch_count(n2,shift);
var p = (sbc1 + sbc2);
var e = (a - (cljs.core.quot((p - (1)),(32)) + (1)));
if((e <= (2))){
return [n1,n2];
} else {
if(((sbc1 + sbc2) <= (1024))){
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_n1 = cljs.core.__GT_VectorNode(null,new_arr);
var i_1490 = (0);
var bs_1491 = cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((32),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.core.rrb_vector.rrbt.child_seq(n1,shift,cnt1),clojure.core.rrb_vector.rrbt.child_seq(n2,shift,cnt2)));
while(true){
var temp__5457__auto___1492 = cljs.core.seq(bs_1491);
if(temp__5457__auto___1492){
var xs__6012__auto___1493 = temp__5457__auto___1492;
var block_1494 = cljs.core.first(xs__6012__auto___1493);
var a_1495__$1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var r_1496 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(a_1495__$1[(32)] = r_1496);

(r_1496[(32)] = cljs.core.count(block_1494));

var i_1497__$1 = (0);
var o_1498 = (0);
var gcs_1499 = cljs.core.seq(block_1494);
while(true){
var temp__5457__auto___1500__$1 = cljs.core.seq(gcs_1499);
if(temp__5457__auto___1500__$1){
var xs__6012__auto___1501__$1 = temp__5457__auto___1500__$1;
var vec__1484_1502 = cljs.core.first(xs__6012__auto___1501__$1);
var gc_1503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1484_1502,(0),null);
var gcr_1504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1484_1502,(1),null);
(a_1495__$1[i_1497__$1] = gc_1503);

(r_1496[i_1497__$1] = (o_1498 + gcr_1504));

var G__1505 = (i_1497__$1 + (1));
var G__1506 = (o_1498 + gcr_1504);
var G__1507 = cljs.core.next(gcs_1499);
i_1497__$1 = G__1505;
o_1498 = G__1506;
gcs_1499 = G__1507;
continue;
} else {
}
break;
}

(new_arr[i_1490] = cljs.core.__GT_VectorNode(null,a_1495__$1));

(new_rngs[i_1490] = ((r_1496[((r_1496[(32)]) - (1))]) + (((i_1490 > (0)))?(new_rngs[(i_1490 - (1))]):(0))));

(new_rngs[(32)] = (i_1490 + (1)));

var G__1508 = (i_1490 + (1));
var G__1509 = cljs.core.next(bs_1491);
i_1490 = G__1508;
bs_1491 = G__1509;
continue;
} else {
}
break;
}

(new_arr[(32)] = new_rngs);

transferred_leaves.val = cnt2;

return [new_n1,null];
} else {
var new_arr1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_arr2 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs2 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_n1 = cljs.core.__GT_VectorNode(null,new_arr1);
var new_n2 = cljs.core.__GT_VectorNode(null,new_arr2);
var i_1510 = (0);
var bs_1511 = cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((32),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.core.rrb_vector.rrbt.child_seq(n1,shift,cnt1),clojure.core.rrb_vector.rrbt.child_seq(n2,shift,cnt2)));
while(true){
var temp__5457__auto___1512 = cljs.core.seq(bs_1511);
if(temp__5457__auto___1512){
var xs__6012__auto___1513 = temp__5457__auto___1512;
var block_1514 = cljs.core.first(xs__6012__auto___1513);
var a_1515__$1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var r_1516 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(a_1515__$1[(32)] = r_1516);

(r_1516[(32)] = cljs.core.count(block_1514));

var i_1517__$1 = (0);
var o_1518 = (0);
var gcs_1519 = cljs.core.seq(block_1514);
while(true){
var temp__5457__auto___1520__$1 = cljs.core.seq(gcs_1519);
if(temp__5457__auto___1520__$1){
var xs__6012__auto___1521__$1 = temp__5457__auto___1520__$1;
var vec__1487_1522 = cljs.core.first(xs__6012__auto___1521__$1);
var gc_1523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1487_1522,(0),null);
var gcr_1524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1487_1522,(1),null);
(a_1515__$1[i_1517__$1] = gc_1523);

(r_1516[i_1517__$1] = (o_1518 + gcr_1524));

var G__1525 = (i_1517__$1 + (1));
var G__1526 = (o_1518 + gcr_1524);
var G__1527 = cljs.core.next(gcs_1519);
i_1517__$1 = G__1525;
o_1518 = G__1526;
gcs_1519 = G__1527;
continue;
} else {
}
break;
}

if((((i_1510 < (32))) && ((((i_1510 * (32)) + cljs.core.count(block_1514)) > sbc1)))){
var tbs_1528 = (((i_1510 * (32)) + cljs.core.count(block_1514)) - sbc1);
var li_1529 = ((r_1516[(32)]) - (1));
var d_1530 = (((tbs_1528 >= (32)))?(r_1516[li_1529]):((r_1516[li_1529]) - (r_1516[(li_1529 - tbs_1528)])));
transferred_leaves.val = (transferred_leaves.val + d_1530);
} else {
}

var new_arr_1531 = (((i_1510 < (32)))?new_arr1:new_arr2);
var new_rngs_1532 = (((i_1510 < (32)))?new_rngs1:new_rngs2);
var i_1533__$1 = cljs.core.mod(i_1510,(32));
(new_arr_1531[i_1533__$1] = cljs.core.__GT_VectorNode(null,a_1515__$1));

(new_rngs_1532[i_1533__$1] = ((r_1516[((r_1516[(32)]) - (1))]) + (((i_1533__$1 > (0)))?(new_rngs_1532[(i_1533__$1 - (1))]):(0))));

(new_rngs_1532[(32)] = (i_1533__$1 + (1)));

var G__1534 = (i_1510 + (1));
var G__1535 = cljs.core.next(bs_1511);
i_1510 = G__1534;
bs_1511 = G__1535;
continue;
} else {
}
break;
}

(new_arr1[(32)] = new_rngs1);

(new_arr2[(32)] = new_rngs2);

return [new_n1,new_n2];

}
}
}
});
clojure.core.rrb_vector.rrbt.zippath = (function clojure$core$rrb_vector$rrbt$zippath(shift,n1,cnt1,n2,cnt2,transferred_leaves){
if((shift === (5))){
return clojure.core.rrb_vector.rrbt.rebalance_leaves(n1,cnt1,n2,cnt2,transferred_leaves);
} else {
var c1 = clojure.core.rrb_vector.nodes.last_child(n1);
var c2 = clojure.core.rrb_vector.nodes.first_child(n2);
var ccnt1 = ((clojure.core.rrb_vector.nodes.regular_QMARK_(n1))?(function (){var m = cljs.core.mod(cnt1,((1) << shift));
if((m === (0))){
return ((1) << shift);
} else {
return m;
}
})():(function (){var rngs = clojure.core.rrb_vector.nodes.node_ranges(n1);
var i = ((rngs[(32)]) - (1));
if((i === (0))){
return (rngs[(0)]);
} else {
return ((rngs[i]) - (rngs[(i - (1))]));
}
})());
var ccnt2 = ((clojure.core.rrb_vector.nodes.regular_QMARK_(n2))?(function (){var m = cljs.core.mod(cnt2,((1) << shift));
if((m === (0))){
return ((1) << shift);
} else {
return m;
}
})():(clojure.core.rrb_vector.nodes.node_ranges(n2)[(0)]));
var next_transferred_leaves = (new cljs.core.Box((0)));
var vec__1536 = (function (){var G__1539 = (shift - (5));
var G__1540 = c1;
var G__1541 = ccnt1;
var G__1542 = c2;
var G__1543 = ccnt2;
var G__1544 = next_transferred_leaves;
return (clojure.core.rrb_vector.rrbt.zippath.cljs$core$IFn$_invoke$arity$6 ? clojure.core.rrb_vector.rrbt.zippath.cljs$core$IFn$_invoke$arity$6(G__1539,G__1540,G__1541,G__1542,G__1543,G__1544) : clojure.core.rrb_vector.rrbt.zippath.call(null,G__1539,G__1540,G__1541,G__1542,G__1543,G__1544));
})();
var new_c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1536,(0),null);
var new_c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1536,(1),null);
var d = next_transferred_leaves.val;
transferred_leaves.val = (transferred_leaves.val + d);

return clojure.core.rrb_vector.rrbt.rebalance(shift,(((c1 === new_c1))?n1:clojure.core.rrb_vector.nodes.replace_rightmost_child(shift,n1,new_c1,d)),(cnt1 + d),(cljs.core.truth_(new_c2)?(((c2 === new_c2))?n2:clojure.core.rrb_vector.nodes.replace_leftmost_child(shift,n2,cnt2,new_c2,d)):clojure.core.rrb_vector.nodes.remove_leftmost_child(shift,n2)),(cnt2 - d),transferred_leaves);
}
});
clojure.core.rrb_vector.rrbt.squash_nodes = (function clojure$core$rrb_vector$rrbt$squash_nodes(shift,n1,cnt1,n2,cnt2){
var arr1 = n1.arr;
var arr2 = n2.arr;
var li1 = clojure.core.rrb_vector.nodes.index_of_nil(arr1);
var li2 = clojure.core.rrb_vector.nodes.index_of_nil(arr2);
var slots = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2(li1,arr1),cljs.core.take.cljs$core$IFn$_invoke$arity$2(li2,arr2));
if((cljs.core.count(slots) > (32))){
return [n1,n2];
} else {
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var rngs1 = cljs.core.take.cljs$core$IFn$_invoke$arity$2(li1,((clojure.core.rrb_vector.nodes.regular_QMARK_(n1))?clojure.core.rrb_vector.nodes.regular_ranges(shift,cnt1):clojure.core.rrb_vector.nodes.node_ranges(n1)));
var rngs2 = cljs.core.take.cljs$core$IFn$_invoke$arity$2(li2,((clojure.core.rrb_vector.nodes.regular_QMARK_(n2))?clojure.core.rrb_vector.nodes.regular_ranges(shift,cnt2):clojure.core.rrb_vector.nodes.node_ranges(n2)));
var rngs2__$1 = (function (){var r = cljs.core.last(rngs1);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (r,new_rngs,new_arr,rngs1,rngs2,arr1,arr2,li1,li2,slots){
return (function (p1__1545_SHARP_){
return (p1__1545_SHARP_ + r);
});})(r,new_rngs,new_arr,rngs1,rngs2,arr1,arr2,li1,li2,slots))
,rngs2);
})();
var rngs = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rngs1,rngs2__$1);
(new_arr[(32)] = new_rngs);

var i_1546 = (0);
var cs_1547 = cljs.core.seq(slots);
while(true){
if(cs_1547){
(new_arr[i_1546] = cljs.core.first(cs_1547));

var G__1548 = (i_1546 + (1));
var G__1549 = cljs.core.next(cs_1547);
i_1546 = G__1548;
cs_1547 = G__1549;
continue;
} else {
}
break;
}

var i_1550 = (0);
var rngs_1551__$1 = cljs.core.seq(rngs);
while(true){
if(rngs_1551__$1){
(new_rngs[i_1550] = cljs.core.first(rngs_1551__$1));

var G__1552 = (i_1550 + (1));
var G__1553 = cljs.core.next(rngs_1551__$1);
i_1550 = G__1552;
rngs_1551__$1 = G__1553;
continue;
} else {
(new_rngs[(32)] = i_1550);
}
break;
}

return [cljs.core.__GT_VectorNode(null,new_arr),null];
}
});
clojure.core.rrb_vector.rrbt.splice_rrbts = (function clojure$core$rrb_vector$rrbt$splice_rrbts(v1,v2){
if((cljs.core.count(v1) === (0))){
return v2;
} else {
if((cljs.core.count(v2) < (33))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v1,v2);
} else {
var s1 = v1.shift;
var s2 = v2.shift;
var r1 = v1.root;
var o_QMARK_ = clojure.core.rrb_vector.nodes.overflow_QMARK_(r1,s1,(cljs.core.count(v1) + ((32) - v1.tail.length)));
var r1__$1 = ((o_QMARK_)?(function (){var tail = v1.tail;
var tail_node = cljs.core.__GT_VectorNode(null,tail);
var reg_QMARK_ = ((clojure.core.rrb_vector.nodes.regular_QMARK_(r1)) && ((tail.length === (32))));
var arr = (new Array(((reg_QMARK_)?(32):(33))));
(arr[(0)] = r1);

(arr[(1)] = clojure.core.rrb_vector.nodes.new_path_STAR_(s1,tail_node));

if((!(reg_QMARK_))){
var rngs_1561 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(rngs_1561[(32)] = (2));

(rngs_1561[(0)] = (cljs.core.count(v1) - tail.length));

(rngs_1561[(1)] = cljs.core.count(v1));

(arr[(32)] = rngs_1561);
} else {
}

return cljs.core.__GT_VectorNode(null,arr);
})():clojure.core.rrb_vector.nodes.fold_tail(r1,s1,clojure.core.rrb_vector.trees.tail_offset(v1.cnt,v1.tail),v1.tail));
var s1__$1 = ((o_QMARK_)?(s1 + (5)):s1);
var r2 = v2.root;
var s = (function (){var x__4219__auto__ = s1__$1;
var y__4220__auto__ = s2;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var r1__$2 = clojure.core.rrb_vector.rrbt.shift_from_to(r1__$1,s1__$1,s);
var r2__$1 = clojure.core.rrb_vector.rrbt.shift_from_to(r2,s2,s);
var transferred_leaves = (new cljs.core.Box((0)));
var vec__1554 = clojure.core.rrb_vector.rrbt.zippath(s,r1__$2,cljs.core.count(v1),r2__$1,(cljs.core.count(v2) - v2.tail.length),transferred_leaves);
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1554,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1554,(1),null);
var d = transferred_leaves.val;
var ncnt1 = (cljs.core.count(v1) + d);
var ncnt2 = ((cljs.core.count(v2) - v2.tail.length) - d);
var vec__1557 = (((n2 === r2__$1))?clojure.core.rrb_vector.rrbt.squash_nodes(s,n1,ncnt1,n2,ncnt2):[n1,n2]);
var n1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1557,(0),null);
var n2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1557,(1),null);
var ncnt1__$1 = (cljs.core.truth_(n2__$1)?ncnt1:(ncnt1 + ncnt2));
var ncnt2__$1 = (cljs.core.truth_(n2__$1)?ncnt2:(0));
if(cljs.core.truth_(n2__$1)){
var arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_root = cljs.core.__GT_VectorNode(null,arr);
(arr[(0)] = n1__$1);

(arr[(1)] = n2__$1);

(arr[(32)] = (function (){var G__1560 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__1560[(0)] = ncnt1__$1);

(G__1560[(1)] = (ncnt1__$1 + ncnt2__$1));

(G__1560[(32)] = (2));

return G__1560;
})());

return (new clojure.core.rrb_vector.rrbt.Vector((cljs.core.count(v1) + cljs.core.count(v2)),(s + (5)),new_root,v2.tail,null,null));
} else {
var r = n1__$1;
var s__$1 = s;
while(true){
if((((s__$1 > (5))) && (((r.arr[(1)]) == null)))){
var G__1562 = (r.arr[(0)]);
var G__1563 = (s__$1 - (5));
r = G__1562;
s__$1 = G__1563;
continue;
} else {
return (new clojure.core.rrb_vector.rrbt.Vector((cljs.core.count(v1) + cljs.core.count(v2)),s__$1,r,v2.tail,null,null));
}
break;
}
}

}
}
});

/**
* @constructor
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ITransientCollection}
 * @implements {cljs.core.ITransientVector}
 * @implements {cljs.core.ITransientAssociative}
*/
clojure.core.rrb_vector.rrbt.Transient = (function (cnt,shift,root,tail,tidx){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.tidx = tidx;
this.cljs$lang$protocol_mask$partition1$ = 88;
this.cljs$lang$protocol_mask$partition0$ = 2;
});
clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
if(self__.root.edit){
if((self__.tidx < (32))){
(self__.tail[self__.tidx] = o);

self__.cnt = (self__.cnt + (1));

self__.tidx = (self__.tidx + (1));

return this$__$1;
} else {
var tail_node = cljs.core.__GT_VectorNode(self__.root.edit,self__.tail);
var new_tail = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(new_tail[(0)] = o);

self__.tail = new_tail;

self__.tidx = (1);

if(clojure.core.rrb_vector.nodes.overflow_QMARK_(self__.root,self__.shift,self__.cnt)){
if(clojure.core.rrb_vector.nodes.regular_QMARK_(self__.root)){
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var G__1564_1567 = new_arr;
(G__1564_1567[(0)] = self__.root);

(G__1564_1567[(1)] = clojure.core.rrb_vector.trees.new_path(self__.tail,self__.root.edit,self__.shift,tail_node));


self__.root = cljs.core.__GT_VectorNode(self__.root.edit,new_arr);

self__.shift = (self__.shift + (5));

self__.cnt = (self__.cnt + (1));

return this$__$1;
} else {
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_root = cljs.core.__GT_VectorNode(self__.root.edit,new_arr);
var root_total_range = (clojure.core.rrb_vector.nodes.node_ranges(self__.root)[(31)]);
var G__1565_1568 = new_arr;
(G__1565_1568[(0)] = self__.root);

(G__1565_1568[(1)] = clojure.core.rrb_vector.trees.new_path(self__.tail,self__.root.edit,self__.shift,tail_node));

(G__1565_1568[(32)] = new_rngs);


var G__1566_1569 = new_rngs;
(G__1566_1569[(0)] = root_total_range);

(G__1566_1569[(1)] = (root_total_range + (32)));

(G__1566_1569[(32)] = (2));


self__.root = new_root;

self__.shift = (self__.shift + (5));

self__.cnt = (self__.cnt + (1));

return this$__$1;
}
} else {
var new_root = clojure.core.rrb_vector.transients.push_tail_BANG_(self__.shift,self__.cnt,self__.root.edit,self__.root,tail_node);
self__.root = new_root;

self__.cnt = (self__.cnt + (1));

return this$__$1;
}
}
} else {
throw (new Error("conj! after persistent!"));
}
});

clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.root.edit){
self__.root.edit = null;

var trimmed_tail = (new Array(self__.tidx));
cljs.core.array_copy(self__.tail,(0),trimmed_tail,(0),self__.tidx);

return (new clojure.core.rrb_vector.rrbt.Vector(self__.cnt,self__.shift,self__.root,trimmed_tail,null,null));
} else {
throw (new Error("persistent! called twice"));
}
});

clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (this$,key,val){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(null,key,val);
});

clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (this$,i,val){
var self__ = this;
var this$__$1 = this;
if(self__.root.edit){
if(((((0) <= i)) && ((i < self__.cnt)))){
var tail_off = (self__.cnt - self__.tidx);
if((tail_off <= i)){
(self__.tail[(i - tail_off)] = val);
} else {
self__.root = clojure.core.rrb_vector.transients.do_assoc_BANG_(self__.shift,self__.root.edit,self__.root,i,val);
}

return this$__$1;
} else {
if((i === self__.cnt)){
return this$__$1.cljs$core$ITransientCollection$_conj_BANG_$arity$2(null,val);
} else {
return cljs.core.vector_index_out_of_bounds(i,self__.cnt);

}
}
} else {
throw (new Error("assoc! after persistent!"));
}
});

clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.root.edit){
if((self__.cnt === (0))){
throw (new Error("Can't pop empty vector"));
} else {
if(((1) === self__.cnt)){
self__.cnt = (0);

self__.tidx = (0);

(self__.tail[(0)] = null);

return this$__$1;
} else {
if((self__.tidx > (1))){
self__.cnt = (self__.cnt - (1));

self__.tidx = (self__.tidx - (1));

(self__.tail[self__.tidx] = null);

return this$__$1;
} else {
var new_tail_base = clojure.core.rrb_vector.trees.array_for(self__.cnt,self__.shift,self__.root,self__.tail,(self__.cnt - (2)));
var new_tail = cljs.core.aclone(new_tail_base);
var new_tidx = new_tail_base.length;
var new_root = clojure.core.rrb_vector.transients.pop_tail_BANG_(self__.shift,self__.cnt,self__.root.edit,self__.root);
if((new_root == null)){
self__.cnt = (self__.cnt - (1));

self__.root = clojure.core.rrb_vector.transients.ensure_editable(self__.root.edit,clojure.core.rrb_vector.nodes.empty_node);

self__.tail = new_tail;

self__.tidx = new_tidx;

return this$__$1;
} else {
if((((self__.shift > (5))) && (((new_root.arr[(1)]) == null)))){
self__.cnt = (self__.cnt - (1));

self__.shift = (self__.shift - (5));

self__.root = (new_root.arr[(0)]);

self__.tail = new_tail;

self__.tidx = new_tidx;

return this$__$1;
} else {
self__.cnt = (self__.cnt - (1));

self__.root = new_root;

self__.tail = new_tail;

self__.tidx = new_tidx;

return this$__$1;

}
}

}
}
}
} else {
throw (new Error("count after persistent!"));
}
});

clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.root.edit){
return self__.cnt;
} else {
throw (new Error("count after persistent!"));
}
});

clojure.core.rrb_vector.rrbt.Transient.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$cnt,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$shift,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$root,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$tail,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$tidx,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

clojure.core.rrb_vector.rrbt.Transient.cljs$lang$type = true;

clojure.core.rrb_vector.rrbt.Transient.cljs$lang$ctorStr = "clojure.core.rrb-vector.rrbt/Transient";

clojure.core.rrb_vector.rrbt.Transient.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"clojure.core.rrb-vector.rrbt/Transient");
});

/**
 * Positional factory function for clojure.core.rrb-vector.rrbt/Transient.
 */
clojure.core.rrb_vector.rrbt.__GT_Transient = (function clojure$core$rrb_vector$rrbt$__GT_Transient(cnt,shift,root,tail,tidx){
return (new clojure.core.rrb_vector.rrbt.Transient(cnt,shift,root,tail,tidx));
});

