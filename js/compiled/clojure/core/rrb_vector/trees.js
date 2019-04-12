// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('clojure.core.rrb_vector.trees');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.core.rrb_vector.nodes');
clojure.core.rrb_vector.trees.tail_offset = (function clojure$core$rrb_vector$trees$tail_offset(cnt,tail){
return (cnt - tail.length);
});
clojure.core.rrb_vector.trees.array_for = (function clojure$core$rrb_vector$trees$array_for(cnt,shift,root,tail,i){
if(((((0) <= i)) && ((i < cnt)))){
if((i >= clojure.core.rrb_vector.trees.tail_offset(cnt,tail))){
return tail;
} else {
var i__$1 = i;
var node = root;
var shift__$1 = shift;
while(true){
if((shift__$1 === (0))){
return node.arr;
} else {
if(clojure.core.rrb_vector.nodes.regular_QMARK_(node)){
var node__$1 = (node.arr[((i__$1 >> shift__$1) & (31))]);
var shift__$2 = (shift__$1 - (5));
while(true){
if((shift__$2 === (0))){
return node__$1.arr;
} else {
var G__1890 = (node__$1.arr[((i__$1 >> shift__$2) & (31))]);
var G__1891 = (shift__$2 - (5));
node__$1 = G__1890;
shift__$2 = G__1891;
continue;
}
break;
}
} else {
var rngs = clojure.core.rrb_vector.nodes.ranges(node);
var j = (function (){var j = ((i__$1 >> shift__$1) & (31));
while(true){
if((i__$1 < (rngs[j]))){
return j;
} else {
var G__1892 = (j + (1));
j = G__1892;
continue;
}
break;
}
})();
var i__$2 = (((j > (0)))?(i__$1 - (rngs[(j - (1))])):i__$1);
var G__1893 = i__$2;
var G__1894 = (node.arr[j]);
var G__1895 = (shift__$1 - (5));
i__$1 = G__1893;
node = G__1894;
shift__$1 = G__1895;
continue;
}
}
break;
}
}
} else {
return cljs.core.vector_index_out_of_bounds(i,cnt);
}
});
clojure.core.rrb_vector.trees.new_path = (function clojure$core$rrb_vector$trees$new_path(tail,edit,shift,current_node){
if((tail.length === (32))){
var s = (0);
var n = current_node;
while(true){
if((s === shift)){
return n;
} else {
var arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var ret = cljs.core.__GT_VectorNode(edit,arr);
(arr[(0)] = n);

var G__1896 = (s + (5));
var G__1897 = ret;
s = G__1896;
n = G__1897;
continue;
}
break;
}
} else {
var s = (0);
var n = current_node;
while(true){
if((s === shift)){
return n;
} else {
var arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var ret = cljs.core.__GT_VectorNode(edit,arr);
(arr[(0)] = n);

(arr[(32)] = rngs);

(rngs[(32)] = (1));

(rngs[(0)] = tail.length);

var G__1898 = (s + (5));
var G__1899 = ret;
s = G__1898;
n = G__1899;
continue;
}
break;
}
}
});
clojure.core.rrb_vector.trees.push_tail = (function clojure$core$rrb_vector$trees$push_tail(shift,cnt,root_edit,current_node,tail_node){
if(clojure.core.rrb_vector.nodes.regular_QMARK_(current_node)){
var arr = cljs.core.aclone(current_node.arr);
var ret = cljs.core.__GT_VectorNode(current_node.edit,arr);
var n_1905 = ret;
var shift_1906__$1 = shift;
while(true){
var arr_1907__$1 = n_1905.arr;
var subidx_1908 = (((cnt - (1)) >> shift_1906__$1) & (31));
if((shift_1906__$1 === (5))){
(arr_1907__$1[subidx_1908] = tail_node);
} else {
var temp__5455__auto___1909 = (arr_1907__$1[subidx_1908]);
if(cljs.core.truth_(temp__5455__auto___1909)){
var child_1910 = temp__5455__auto___1909;
var new_carr_1911 = cljs.core.aclone(child_1910.arr);
var new_child_1912 = cljs.core.__GT_VectorNode(root_edit,new_carr_1911);
(arr_1907__$1[subidx_1908] = new_child_1912);

var G__1913 = new_child_1912;
var G__1914 = (shift_1906__$1 - (5));
n_1905 = G__1913;
shift_1906__$1 = G__1914;
continue;
} else {
(arr_1907__$1[subidx_1908] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift_1906__$1 - (5)),tail_node));
}
}
break;
}

return ret;
} else {
var arr = cljs.core.aclone(current_node.arr);
var rngs = clojure.core.rrb_vector.nodes.ranges(current_node);
var li = ((rngs[(32)]) - (1));
var ret = cljs.core.__GT_VectorNode(current_node.edit,arr);
var cret = (((shift === (5)))?null:(function (){var child = (arr[li]);
var ccnt = (((li > (0)))?((rngs[li]) - (rngs[(li - (1))])):(rngs[(0)]));
if((!((ccnt === ((1) << shift))))){
var G__1900 = (shift - (5));
var G__1901 = (ccnt + (1));
var G__1902 = root_edit;
var G__1903 = child;
var G__1904 = tail_node;
return (clojure.core.rrb_vector.trees.push_tail.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.trees.push_tail.cljs$core$IFn$_invoke$arity$5(G__1900,G__1901,G__1902,G__1903,G__1904) : clojure.core.rrb_vector.trees.push_tail.call(null,G__1900,G__1901,G__1902,G__1903,G__1904));
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
clojure.core.rrb_vector.trees.pop_tail = (function clojure$core$rrb_vector$trees$pop_tail(shift,cnt,root_edit,current_node){
if(clojure.core.rrb_vector.nodes.regular_QMARK_(current_node)){
var subidx = (((cnt - (1)) >> shift) & (31));
if((shift > (5))){
var new_child = (function (){var G__1915 = (shift - (5));
var G__1916 = cnt;
var G__1917 = root_edit;
var G__1918 = (current_node.arr[subidx]);
return (clojure.core.rrb_vector.trees.pop_tail.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.trees.pop_tail.cljs$core$IFn$_invoke$arity$4(G__1915,G__1916,G__1917,G__1918) : clojure.core.rrb_vector.trees.pop_tail.call(null,G__1915,G__1916,G__1917,G__1918));
})();
if((((new_child == null)) && ((subidx === (0))))){
return null;
} else {
var arr = cljs.core.aclone(current_node.arr);
(arr[subidx] = new_child);

return cljs.core.__GT_VectorNode(root_edit,arr);
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = cljs.core.aclone(current_node.arr);
(arr[subidx] = null);

return cljs.core.__GT_VectorNode(root_edit,arr);

}
}
} else {
var subidx = (((cnt - (1)) >> shift) & (31));
var rngs = clojure.core.rrb_vector.nodes.ranges(current_node);
var subidx__$1 = (function (){var subidx__$1 = subidx;
while(true){
if((((((rngs[(subidx__$1 + (1))]) | (0)) === (0))) || ((subidx__$1 === (31))))){
return subidx__$1;
} else {
var G__1923 = (subidx__$1 + (1));
subidx__$1 = G__1923;
continue;
}
break;
}
})();
var new_rngs = cljs.core.aclone(rngs);
if((shift > (5))){
var child = (current_node.arr[subidx__$1]);
var child_cnt = (((subidx__$1 === (0)))?(rngs[(0)]):((rngs[subidx__$1]) - (rngs[(subidx__$1 - (1))])));
var new_child = (function (){var G__1919 = (shift - (5));
var G__1920 = child_cnt;
var G__1921 = root_edit;
var G__1922 = child;
return (clojure.core.rrb_vector.trees.pop_tail.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.trees.pop_tail.cljs$core$IFn$_invoke$arity$4(G__1919,G__1920,G__1921,G__1922) : clojure.core.rrb_vector.trees.pop_tail.call(null,G__1919,G__1920,G__1921,G__1922));
})();
if((((new_child == null)) && ((subidx__$1 === (0))))){
return null;
} else {
if(clojure.core.rrb_vector.nodes.regular_QMARK_(child)){
var arr = cljs.core.aclone(current_node.arr);
(new_rngs[subidx__$1] = ((new_rngs[subidx__$1]) - (32)));

(arr[subidx__$1] = new_child);

(arr[(32)] = new_rngs);

if((new_child == null)){
(new_rngs[(32)] = ((new_rngs[(32)]) - (1)));
} else {
}

return cljs.core.__GT_VectorNode(root_edit,arr);
} else {
var rng = clojure.core.rrb_vector.nodes.last_range(child);
var diff = (rng - (cljs.core.truth_(new_child)?clojure.core.rrb_vector.nodes.last_range(new_child):(0)));
var arr = cljs.core.aclone(current_node.arr);
(new_rngs[subidx__$1] = ((new_rngs[subidx__$1]) - diff));

(arr[subidx__$1] = new_child);

(arr[(32)] = new_rngs);

if((new_child == null)){
(new_rngs[(32)] = ((new_rngs[(32)]) - (1)));
} else {
}

return cljs.core.__GT_VectorNode(root_edit,arr);

}
}
} else {
if((subidx__$1 === (0))){
return null;
} else {
var arr = cljs.core.aclone(current_node.arr);
var child = (arr[subidx__$1]);
var new_rngs__$1 = cljs.core.aclone(rngs);
(arr[subidx__$1] = null);

(arr[(32)] = new_rngs__$1);

(new_rngs__$1[subidx__$1] = (0));

(new_rngs__$1[(32)] = ((new_rngs__$1[(32)]) - (1)));

return cljs.core.__GT_VectorNode(root_edit,arr);

}
}
}
});
clojure.core.rrb_vector.trees.do_assoc = (function clojure$core$rrb_vector$trees$do_assoc(shift,current_node,i,val){
if(clojure.core.rrb_vector.nodes.regular_QMARK_(current_node)){
var node = clojure.core.rrb_vector.nodes.clone(shift,current_node);
var shift_1928__$1 = shift;
var node_1929__$1 = node;
while(true){
if((shift_1928__$1 === (0))){
var arr_1930 = node_1929__$1.arr;
(arr_1930[(i & (31))] = val);
} else {
var arr_1931 = node_1929__$1.arr;
var subidx_1932 = ((i >> shift_1928__$1) & (31));
var child_1933 = clojure.core.rrb_vector.nodes.clone(shift_1928__$1,(arr_1931[subidx_1932]));
(arr_1931[subidx_1932] = child_1933);

var G__1934 = (shift_1928__$1 - (5));
var G__1935 = child_1933;
shift_1928__$1 = G__1934;
node_1929__$1 = G__1935;
continue;
}
break;
}

return node;
} else {
var arr = cljs.core.aclone(current_node.arr);
var rngs = clojure.core.rrb_vector.nodes.ranges(current_node);
var subidx = ((i >> shift) & (31));
var subidx__$1 = (function (){var subidx__$1 = subidx;
while(true){
if((i < ((rngs[subidx__$1]) | (0)))){
return subidx__$1;
} else {
var G__1936 = (subidx__$1 + (1));
subidx__$1 = G__1936;
continue;
}
break;
}
})();
var i__$1 = (((subidx__$1 === (0)))?i:(i - (rngs[(subidx__$1 - (1))])));
(arr[subidx__$1] = (function (){var G__1924 = (shift - (5));
var G__1925 = (arr[subidx__$1]);
var G__1926 = i__$1;
var G__1927 = val;
return (clojure.core.rrb_vector.trees.do_assoc.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.trees.do_assoc.cljs$core$IFn$_invoke$arity$4(G__1924,G__1925,G__1926,G__1927) : clojure.core.rrb_vector.trees.do_assoc.call(null,G__1924,G__1925,G__1926,G__1927));
})());

return cljs.core.__GT_VectorNode(current_node.edit,arr);
}
});
