// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('clojure.core.rrb_vector.transients');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.core.rrb_vector.nodes');
goog.require('clojure.core.rrb_vector.trees');
clojure.core.rrb_vector.transients.ensure_editable = (function clojure$core$rrb_vector$transients$ensure_editable(edit,node){
if((node.edit === edit)){
return node;
} else {
var new_arr = cljs.core.aclone(node.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone((new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(edit,new_arr));
}
});
clojure.core.rrb_vector.transients.editable_root = (function clojure$core$rrb_vector$transients$editable_root(root){
return (new cljs.core.VectorNode(({}),cljs.core.aclone(root.arr)));
});
clojure.core.rrb_vector.transients.editable_tail = (function clojure$core$rrb_vector$transients$editable_tail(tail){
var ret = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
cljs.core.array_copy(tail,(0),ret,(0),tail.length);

return ret;
});
clojure.core.rrb_vector.transients.push_tail_BANG_ = (function clojure$core$rrb_vector$transients$push_tail_BANG_(shift,cnt,root_edit,current_node,tail_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var n_1946 = ret;
var shift_1947__$1 = shift;
while(true){
var arr_1948 = n_1946.arr;
var subidx_1949 = (((cnt - (1)) >> shift_1947__$1) & (31));
if((shift_1947__$1 === (5))){
(arr_1948[subidx_1949] = tail_node);
} else {
var child_1950 = (arr_1948[subidx_1949]);
if((child_1950 == null)){
(arr_1948[subidx_1949] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift_1947__$1 - (5)),tail_node));
} else {
var editable_child_1951 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,child_1950);
(arr_1948[subidx_1949] = editable_child_1951);

var G__1952 = editable_child_1951;
var G__1953 = (shift_1947__$1 - (5));
n_1946 = G__1952;
shift_1947__$1 = G__1953;
continue;
}
}
break;
}

return ret;
} else {
var arr = ret.arr;
var rngs = clojure.core.rrb_vector.nodes.ranges(ret);
var li = ((rngs[(32)]) - (1));
var cret = (((shift === (5)))?null:(function (){var child = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr[li]));
var ccnt = (((li > (0)))?((rngs[li]) - (rngs[(li - (1))])):(rngs[(0)]));
if((!((ccnt === ((1) << shift))))){
var G__1941 = (shift - (5));
var G__1942 = (ccnt + (1));
var G__1943 = root_edit;
var G__1944 = child;
var G__1945 = tail_node;
return (clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5(G__1941,G__1942,G__1943,G__1944,G__1945) : clojure.core.rrb_vector.transients.push_tail_BANG_.call(null,G__1941,G__1942,G__1943,G__1944,G__1945));
} else {
return null;
}
})());
if(cljs.core.truth_(cret)){
(arr[li] = cret);

(rngs[li] = ((rngs[li]) + (32)));

return ret;
} else {
(arr[(li + (1))] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift - (5)),tail_node));

(rngs[(li + (1))] = ((rngs[li]) + (32)));

(rngs[(32)] = ((rngs[(32)]) + (1)));

return ret;
}
}
});
clojure.core.rrb_vector.transients.pop_tail_BANG_ = (function clojure$core$rrb_vector$transients$pop_tail_BANG_(shift,cnt,root_edit,current_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var subidx = (((cnt - (1)) >> shift) & (31));
if((shift > (5))){
var child = (function (){var G__1954 = (shift - (5));
var G__1955 = cnt;
var G__1956 = root_edit;
var G__1957 = (ret.arr[subidx]);
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__1954,G__1955,G__1956,G__1957) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__1954,G__1955,G__1956,G__1957));
})();
if((((child == null)) && ((subidx === (0))))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = child);

return ret;
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = null);

return ret;

}
}
} else {
var subidx = (((cnt - (1)) >> shift) & (31));
var rngs = clojure.core.rrb_vector.nodes.ranges(ret);
var subidx__$1 = (function (){var subidx__$1 = subidx;
while(true){
if((((((rngs[(subidx__$1 + (1))]) | (0)) === (0))) || ((subidx__$1 === (31))))){
return subidx__$1;
} else {
var G__1962 = (subidx__$1 + (1));
subidx__$1 = G__1962;
continue;
}
break;
}
})();
if((shift > (5))){
var child = (ret.arr[subidx__$1]);
var child_cnt = (((subidx__$1 === (0)))?(rngs[(0)]):((rngs[subidx__$1]) - (rngs[(subidx__$1 - (1))])));
var new_child = (function (){var G__1958 = (shift - (5));
var G__1959 = child_cnt;
var G__1960 = root_edit;
var G__1961 = child;
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__1958,G__1959,G__1960,G__1961) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__1958,G__1959,G__1960,G__1961));
})();
if((((new_child == null)) && ((subidx__$1 === (0))))){
return null;
} else {
if(clojure.core.rrb_vector.nodes.regular_QMARK_(child)){
var arr = ret.arr;
(rngs[subidx__$1] = ((rngs[subidx__$1]) - (32)));

(arr[subidx__$1] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;
} else {
var rng = clojure.core.rrb_vector.nodes.last_range(child);
var diff = (rng - (cljs.core.truth_(new_child)?clojure.core.rrb_vector.nodes.last_range(new_child):(0)));
var arr = ret.arr;
(rngs[subidx__$1] = ((rngs[subidx__$1]) - diff));

(arr[subidx__$1] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;

}
}
} else {
if((subidx__$1 === (0))){
return null;
} else {
var arr = ret.arr;
var child = (arr[subidx__$1]);
(arr[subidx__$1] = null);

(rngs[subidx__$1] = (0));

(rngs[(32)] = ((rngs[(32)]) - (1)));

return ret;

}
}
}
});
clojure.core.rrb_vector.transients.do_assoc_BANG_ = (function clojure$core$rrb_vector$transients$do_assoc_BANG_(shift,root_edit,current_node,i,val){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var shift_1968__$1 = shift;
var node_1969 = ret;
while(true){
if((shift_1968__$1 === (0))){
var arr_1970 = node_1969.arr;
(arr_1970[(i & (31))] = val);
} else {
var arr_1971 = node_1969.arr;
var subidx_1972 = ((i >> shift_1968__$1) & (31));
var child_1973 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr_1971[subidx_1972]));
(arr_1971[subidx_1972] = child_1973);

var G__1974 = (shift_1968__$1 - (5));
var G__1975 = child_1973;
shift_1968__$1 = G__1974;
node_1969 = G__1975;
continue;
}
break;
}
} else {
var arr_1976 = ret.arr;
var rngs_1977 = clojure.core.rrb_vector.nodes.ranges(ret);
var subidx_1978 = ((i >> shift) & (31));
var subidx_1979__$1 = (function (){var subidx__$1 = subidx_1978;
while(true){
if((i < ((rngs_1977[subidx__$1]) | (0)))){
return subidx__$1;
} else {
var G__1981 = (subidx__$1 + (1));
subidx__$1 = G__1981;
continue;
}
break;
}
})();
var i_1980__$1 = (((subidx_1979__$1 === (0)))?i:(i - (rngs_1977[(subidx_1979__$1 - (1))])));
(arr_1976[subidx_1979__$1] = (function (){var G__1963 = (shift - (5));
var G__1964 = root_edit;
var G__1965 = (arr_1976[subidx_1979__$1]);
var G__1966 = i_1980__$1;
var G__1967 = val;
return (clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5(G__1963,G__1964,G__1965,G__1966,G__1967) : clojure.core.rrb_vector.transients.do_assoc_BANG_.call(null,G__1963,G__1964,G__1965,G__1966,G__1967));
})());
}

return ret;
});
