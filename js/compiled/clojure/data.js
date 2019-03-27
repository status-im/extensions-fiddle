// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__4880){
var vec__4881 = p__4880;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4881,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4881,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__4884 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4884,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4884,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4884,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__4888 = arguments.length;
switch (G__4888) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__4890_4914 = clojure.data.equality_partition;
var G__4891_4915 = "null";
var G__4892_4916 = ((function (G__4890_4914,G__4891_4915){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__4890_4914,G__4891_4915))
;
goog.object.set(G__4890_4914,G__4891_4915,G__4892_4916);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__4893_4917 = clojure.data.equality_partition;
var G__4894_4918 = "string";
var G__4895_4919 = ((function (G__4893_4917,G__4894_4918){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__4893_4917,G__4894_4918))
;
goog.object.set(G__4893_4917,G__4894_4918,G__4895_4919);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__4896_4920 = clojure.data.equality_partition;
var G__4897_4921 = "number";
var G__4898_4922 = ((function (G__4896_4920,G__4897_4921){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__4896_4920,G__4897_4921))
;
goog.object.set(G__4896_4920,G__4897_4921,G__4898_4922);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__4899_4923 = clojure.data.equality_partition;
var G__4900_4924 = "array";
var G__4901_4925 = ((function (G__4899_4923,G__4900_4924){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__4899_4923,G__4900_4924))
;
goog.object.set(G__4899_4923,G__4900_4924,G__4901_4925);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__4902_4926 = clojure.data.equality_partition;
var G__4903_4927 = "function";
var G__4904_4928 = ((function (G__4902_4926,G__4903_4927){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__4902_4926,G__4903_4927))
;
goog.object.set(G__4902_4926,G__4903_4927,G__4904_4928);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__4905_4929 = clojure.data.equality_partition;
var G__4906_4930 = "boolean";
var G__4907_4931 = ((function (G__4905_4929,G__4906_4930){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__4905_4929,G__4906_4930))
;
goog.object.set(G__4905_4929,G__4906_4930,G__4907_4931);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__4908_4932 = clojure.data.equality_partition;
var G__4909_4933 = "_";
var G__4910_4934 = ((function (G__4908_4932,G__4909_4933){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return cljs.core.cst$kw$map;
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return cljs.core.cst$kw$set;
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return cljs.core.cst$kw$sequential;
} else {
return cljs.core.cst$kw$atom;

}
}
}
});})(G__4908_4932,G__4909_4933))
;
goog.object.set(G__4908_4932,G__4909_4933,G__4910_4934);
goog.object.set(clojure.data.Diff,"null",true);

var G__4935_4959 = clojure.data.diff_similar;
var G__4936_4960 = "null";
var G__4937_4961 = ((function (G__4935_4959,G__4936_4960){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__4935_4959,G__4936_4960))
;
goog.object.set(G__4935_4959,G__4936_4960,G__4937_4961);

goog.object.set(clojure.data.Diff,"string",true);

var G__4938_4962 = clojure.data.diff_similar;
var G__4939_4963 = "string";
var G__4940_4964 = ((function (G__4938_4962,G__4939_4963){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__4938_4962,G__4939_4963))
;
goog.object.set(G__4938_4962,G__4939_4963,G__4940_4964);

goog.object.set(clojure.data.Diff,"number",true);

var G__4941_4965 = clojure.data.diff_similar;
var G__4942_4966 = "number";
var G__4943_4967 = ((function (G__4941_4965,G__4942_4966){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__4941_4965,G__4942_4966))
;
goog.object.set(G__4941_4965,G__4942_4966,G__4943_4967);

goog.object.set(clojure.data.Diff,"array",true);

var G__4944_4968 = clojure.data.diff_similar;
var G__4945_4969 = "array";
var G__4946_4970 = ((function (G__4944_4968,G__4945_4969){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__4944_4968,G__4945_4969))
;
goog.object.set(G__4944_4968,G__4945_4969,G__4946_4970);

goog.object.set(clojure.data.Diff,"function",true);

var G__4947_4971 = clojure.data.diff_similar;
var G__4948_4972 = "function";
var G__4949_4973 = ((function (G__4947_4971,G__4948_4972){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__4947_4971,G__4948_4972))
;
goog.object.set(G__4947_4971,G__4948_4972,G__4949_4973);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__4950_4974 = clojure.data.diff_similar;
var G__4951_4975 = "boolean";
var G__4952_4976 = ((function (G__4950_4974,G__4951_4975){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__4950_4974,G__4951_4975))
;
goog.object.set(G__4950_4974,G__4951_4975,G__4952_4976);

goog.object.set(clojure.data.Diff,"_",true);

var G__4953_4977 = clojure.data.diff_similar;
var G__4954_4978 = "_";
var G__4955_4979 = ((function (G__4953_4977,G__4954_4978){
return (function (a,b){
var fexpr__4957 = (function (){var G__4958 = clojure.data.equality_partition(a);
var G__4958__$1 = (((G__4958 instanceof cljs.core.Keyword))?G__4958.fqn:null);
switch (G__4958__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4958__$1)].join('')));

}
})();
return (fexpr__4957.cljs$core$IFn$_invoke$arity$2 ? fexpr__4957.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__4957.call(null,a,b));
});})(G__4953_4977,G__4954_4978))
;
goog.object.set(G__4953_4977,G__4954_4978,G__4955_4979);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});
