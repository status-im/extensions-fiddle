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
var n_1323 = ret;
var shift_1324__$1 = shift;
while(true){
var arr_1325 = n_1323.arr;
var subidx_1326 = (((cnt - (1)) >> shift_1324__$1) & (31));
if((shift_1324__$1 === (5))){
(arr_1325[subidx_1326] = tail_node);
} else {
var child_1327 = (arr_1325[subidx_1326]);
if((child_1327 == null)){
(arr_1325[subidx_1326] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift_1324__$1 - (5)),tail_node));
} else {
var editable_child_1328 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,child_1327);
(arr_1325[subidx_1326] = editable_child_1328);

var G__1329 = editable_child_1328;
var G__1330 = (shift_1324__$1 - (5));
n_1323 = G__1329;
shift_1324__$1 = G__1330;
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
var G__1318 = (shift - (5));
var G__1319 = (ccnt + (1));
var G__1320 = root_edit;
var G__1321 = child;
var G__1322 = tail_node;
return (clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5(G__1318,G__1319,G__1320,G__1321,G__1322) : clojure.core.rrb_vector.transients.push_tail_BANG_.call(null,G__1318,G__1319,G__1320,G__1321,G__1322));
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
var child = (function (){var G__1331 = (shift - (5));
var G__1332 = cnt;
var G__1333 = root_edit;
var G__1334 = (ret.arr[subidx]);
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__1331,G__1332,G__1333,G__1334) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__1331,G__1332,G__1333,G__1334));
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
var G__1339 = (subidx__$1 + (1));
subidx__$1 = G__1339;
continue;
}
break;
}
})();
if((shift > (5))){
var child = (ret.arr[subidx__$1]);
var child_cnt = (((subidx__$1 === (0)))?(rngs[(0)]):((rngs[subidx__$1]) - (rngs[(subidx__$1 - (1))])));
var new_child = (function (){var G__1335 = (shift - (5));
var G__1336 = child_cnt;
var G__1337 = root_edit;
var G__1338 = child;
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__1335,G__1336,G__1337,G__1338) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__1335,G__1336,G__1337,G__1338));
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
var shift_1345__$1 = shift;
var node_1346 = ret;
while(true){
if((shift_1345__$1 === (0))){
var arr_1347 = node_1346.arr;
(arr_1347[(i & (31))] = val);
} else {
var arr_1348 = node_1346.arr;
var subidx_1349 = ((i >> shift_1345__$1) & (31));
var child_1350 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr_1348[subidx_1349]));
(arr_1348[subidx_1349] = child_1350);

var G__1351 = (shift_1345__$1 - (5));
var G__1352 = child_1350;
shift_1345__$1 = G__1351;
node_1346 = G__1352;
continue;
}
break;
}
} else {
var arr_1353 = ret.arr;
var rngs_1354 = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx_1355 = ((i >> shift) & (31));
var subidx_1356__$1 = (function (){var subidx__$1 = subidx_1355;
while(true){
if((i < ((rngs_1354[subidx__$1]) | (0)))){
return subidx__$1;
} else {
var G__1358 = (subidx__$1 + (1));
subidx__$1 = G__1358;
continue;
}
break;
}
})();
var i_1357__$1 = (((subidx_1356__$1 === (0)))?i:(i - (rngs_1354[(subidx_1356__$1 - (1))])));
(arr_1353[subidx_1356__$1] = (function (){var G__1340 = (shift - (5));
var G__1341 = root_edit;
var G__1342 = (arr_1353[subidx_1356__$1]);
var G__1343 = i_1357__$1;
var G__1344 = val;
return (clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5(G__1340,G__1341,G__1342,G__1343,G__1344) : clojure.core.rrb_vector.transients.do_assoc_BANG_.call(null,G__1340,G__1341,G__1342,G__1343,G__1344));
})());
}

return ret;
});
