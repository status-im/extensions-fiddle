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
var n_1883 = ret;
var shift_1884__$1 = shift;
while(true){
var arr_1885 = n_1883.arr;
var subidx_1886 = (((cnt - (1)) >> shift_1884__$1) & (31));
if((shift_1884__$1 === (5))){
(arr_1885[subidx_1886] = tail_node);
} else {
var child_1887 = (arr_1885[subidx_1886]);
if((child_1887 == null)){
(arr_1885[subidx_1886] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift_1884__$1 - (5)),tail_node));
} else {
var editable_child_1888 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,child_1887);
(arr_1885[subidx_1886] = editable_child_1888);

var G__1889 = editable_child_1888;
var G__1890 = (shift_1884__$1 - (5));
n_1883 = G__1889;
shift_1884__$1 = G__1890;
continue;
}
}
break;
}

return ret;
} else {
var arr = ret.arr;
var rngs = clojure.core.rrb_vector.nodes.node_ranges(ret);
var li = ((rngs[(32)]) - (1));
var cret = (((shift === (5)))?null:(function (){var child = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr[li]));
var ccnt = (((li > (0)))?((rngs[li]) - (rngs[(li - (1))])):(rngs[(0)]));
if((!((ccnt === ((1) << shift))))){
var G__1878 = (shift - (5));
var G__1879 = (ccnt + (1));
var G__1880 = root_edit;
var G__1881 = child;
var G__1882 = tail_node;
return (clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5(G__1878,G__1879,G__1880,G__1881,G__1882) : clojure.core.rrb_vector.transients.push_tail_BANG_.call(null,G__1878,G__1879,G__1880,G__1881,G__1882));
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
var child = (function (){var G__1891 = (shift - (5));
var G__1892 = cnt;
var G__1893 = root_edit;
var G__1894 = (ret.arr[subidx]);
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__1891,G__1892,G__1893,G__1894) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__1891,G__1892,G__1893,G__1894));
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
var rngs = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx__$1 = (function (){var subidx__$1 = subidx;
while(true){
if((((((rngs[(subidx__$1 + (1))]) | (0)) === (0))) || ((subidx__$1 === (31))))){
return subidx__$1;
} else {
var G__1899 = (subidx__$1 + (1));
subidx__$1 = G__1899;
continue;
}
break;
}
})();
if((shift > (5))){
var child = (ret.arr[subidx__$1]);
var child_cnt = (((subidx__$1 === (0)))?(rngs[(0)]):((rngs[subidx__$1]) - (rngs[(subidx__$1 - (1))])));
var new_child = (function (){var G__1895 = (shift - (5));
var G__1896 = child_cnt;
var G__1897 = root_edit;
var G__1898 = child;
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__1895,G__1896,G__1897,G__1898) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__1895,G__1896,G__1897,G__1898));
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
var shift_1905__$1 = shift;
var node_1906 = ret;
while(true){
if((shift_1905__$1 === (0))){
var arr_1907 = node_1906.arr;
(arr_1907[(i & (31))] = val);
} else {
var arr_1908 = node_1906.arr;
var subidx_1909 = ((i >> shift_1905__$1) & (31));
var child_1910 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr_1908[subidx_1909]));
(arr_1908[subidx_1909] = child_1910);

var G__1911 = (shift_1905__$1 - (5));
var G__1912 = child_1910;
shift_1905__$1 = G__1911;
node_1906 = G__1912;
continue;
}
break;
}
} else {
var arr_1913 = ret.arr;
var rngs_1914 = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx_1915 = ((i >> shift) & (31));
var subidx_1916__$1 = (function (){var subidx__$1 = subidx_1915;
while(true){
if((i < ((rngs_1914[subidx__$1]) | (0)))){
return subidx__$1;
} else {
var G__1918 = (subidx__$1 + (1));
subidx__$1 = G__1918;
continue;
}
break;
}
})();
var i_1917__$1 = (((subidx_1916__$1 === (0)))?i:(i - (rngs_1914[(subidx_1916__$1 - (1))])));
(arr_1913[subidx_1916__$1] = (function (){var G__1900 = (shift - (5));
var G__1901 = root_edit;
var G__1902 = (arr_1913[subidx_1916__$1]);
var G__1903 = i_1917__$1;
var G__1904 = val;
return (clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5(G__1900,G__1901,G__1902,G__1903,G__1904) : clojure.core.rrb_vector.transients.do_assoc_BANG_.call(null,G__1900,G__1901,G__1902,G__1903,G__1904));
})());
}

return ret;
});
