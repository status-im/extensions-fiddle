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
var G__1267 = (node__$1.arr[((i__$1 >> shift__$2) & (31))]);
var G__1268 = (shift__$2 - (5));
node__$1 = G__1267;
shift__$2 = G__1268;
continue;
}
break;
}
} else {
var rngs = clojure.core.rrb_vector.nodes.node_ranges(node);
var j = (function (){var j = ((i__$1 >> shift__$1) & (31));
while(true){
if((i__$1 < (rngs[j]))){
return j;
} else {
var G__1269 = (j + (1));
j = G__1269;
continue;
}
break;
}
})();
var i__$2 = (((j > (0)))?(i__$1 - (rngs[(j - (1))])):i__$1);
var G__1270 = i__$2;
var G__1271 = (node.arr[j]);
var G__1272 = (shift__$1 - (5));
i__$1 = G__1270;
node = G__1271;
shift__$1 = G__1272;
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

var G__1273 = (s + (5));
var G__1274 = ret;
s = G__1273;
n = G__1274;
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

var G__1275 = (s + (5));
var G__1276 = ret;
s = G__1275;
n = G__1276;
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
var n_1282 = ret;
var shift_1283__$1 = shift;
while(true){
var arr_1284__$1 = n_1282.arr;
var subidx_1285 = (((cnt - (1)) >> shift_1283__$1) & (31));
if((shift_1283__$1 === (5))){
(arr_1284__$1[subidx_1285] = tail_node);
} else {
var temp__5455__auto___1286 = (arr_1284__$1[subidx_1285]);
if(cljs.core.truth_(temp__5455__auto___1286)){
var child_1287 = temp__5455__auto___1286;
var new_carr_1288 = cljs.core.aclone(child_1287.arr);
var new_child_1289 = cljs.core.__GT_VectorNode(root_edit,new_carr_1288);
(arr_1284__$1[subidx_1285] = new_child_1289);

var G__1290 = new_child_1289;
var G__1291 = (shift_1283__$1 - (5));
n_1282 = G__1290;
shift_1283__$1 = G__1291;
continue;
} else {
(arr_1284__$1[subidx_1285] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift_1283__$1 - (5)),tail_node));
}
}
break;
}

return ret;
} else {
var arr = cljs.core.aclone(current_node.arr);
var rngs = clojure.core.rrb_vector.nodes.node_ranges(current_node);
var li = ((rngs[(32)]) - (1));
var ret = cljs.core.__GT_VectorNode(current_node.edit,arr);
var cret = (((shift === (5)))?null:(function (){var child = (arr[li]);
var ccnt = (((li > (0)))?((rngs[li]) - (rngs[(li - (1))])):(rngs[(0)]));
if((!((ccnt === ((1) << shift))))){
var G__1277 = (shift - (5));
var G__1278 = (ccnt + (1));
var G__1279 = root_edit;
var G__1280 = child;
var G__1281 = tail_node;
return (clojure.core.rrb_vector.trees.push_tail.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.trees.push_tail.cljs$core$IFn$_invoke$arity$5(G__1277,G__1278,G__1279,G__1280,G__1281) : clojure.core.rrb_vector.trees.push_tail.call(null,G__1277,G__1278,G__1279,G__1280,G__1281));
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
var new_child = (function (){var G__1292 = (shift - (5));
var G__1293 = cnt;
var G__1294 = root_edit;
var G__1295 = (current_node.arr[subidx]);
return (clojure.core.rrb_vector.trees.pop_tail.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.trees.pop_tail.cljs$core$IFn$_invoke$arity$4(G__1292,G__1293,G__1294,G__1295) : clojure.core.rrb_vector.trees.pop_tail.call(null,G__1292,G__1293,G__1294,G__1295));
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
var rngs = clojure.core.rrb_vector.nodes.node_ranges(current_node);
var subidx__$1 = (function (){var subidx__$1 = subidx;
while(true){
if((((((rngs[(subidx__$1 + (1))]) | (0)) === (0))) || ((subidx__$1 === (31))))){
return subidx__$1;
} else {
var G__1300 = (subidx__$1 + (1));
subidx__$1 = G__1300;
continue;
}
break;
}
})();
var new_rngs = cljs.core.aclone(rngs);
if((shift > (5))){
var child = (current_node.arr[subidx__$1]);
var child_cnt = (((subidx__$1 === (0)))?(rngs[(0)]):((rngs[subidx__$1]) - (rngs[(subidx__$1 - (1))])));
var new_child = (function (){var G__1296 = (shift - (5));
var G__1297 = child_cnt;
var G__1298 = root_edit;
var G__1299 = child;
return (clojure.core.rrb_vector.trees.pop_tail.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.trees.pop_tail.cljs$core$IFn$_invoke$arity$4(G__1296,G__1297,G__1298,G__1299) : clojure.core.rrb_vector.trees.pop_tail.call(null,G__1296,G__1297,G__1298,G__1299));
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
var shift_1305__$1 = shift;
var node_1306__$1 = node;
while(true){
if((shift_1305__$1 === (0))){
var arr_1307 = node_1306__$1.arr;
(arr_1307[(i & (31))] = val);
} else {
var arr_1308 = node_1306__$1.arr;
var subidx_1309 = ((i >> shift_1305__$1) & (31));
var child_1310 = clojure.core.rrb_vector.nodes.clone(shift_1305__$1,(arr_1308[subidx_1309]));
(arr_1308[subidx_1309] = child_1310);

var G__1311 = (shift_1305__$1 - (5));
var G__1312 = child_1310;
shift_1305__$1 = G__1311;
node_1306__$1 = G__1312;
continue;
}
break;
}

return node;
} else {
var arr = cljs.core.aclone(current_node.arr);
var rngs = clojure.core.rrb_vector.nodes.node_ranges(current_node);
var subidx = ((i >> shift) & (31));
var subidx__$1 = (function (){var subidx__$1 = subidx;
while(true){
if((i < ((rngs[subidx__$1]) | (0)))){
return subidx__$1;
} else {
var G__1313 = (subidx__$1 + (1));
subidx__$1 = G__1313;
continue;
}
break;
}
})();
var i__$1 = (((subidx__$1 === (0)))?i:(i - (rngs[(subidx__$1 - (1))])));
(arr[subidx__$1] = (function (){var G__1301 = (shift - (5));
var G__1302 = (arr[subidx__$1]);
var G__1303 = i__$1;
var G__1304 = val;
return (clojure.core.rrb_vector.trees.do_assoc.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.trees.do_assoc.cljs$core$IFn$_invoke$arity$4(G__1301,G__1302,G__1303,G__1304) : clojure.core.rrb_vector.trees.do_assoc.call(null,G__1301,G__1302,G__1303,G__1304));
})());

return cljs.core.__GT_VectorNode(current_node.edit,arr);
}
});
