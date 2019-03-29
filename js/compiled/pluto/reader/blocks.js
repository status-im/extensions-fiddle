// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.reader.blocks');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.walk');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('pluto.error');
goog.require('pluto.log');
goog.require('pluto.reader.destructuring');
goog.require('pluto.reader.types');
goog.require('pluto.utils');
pluto.reader.blocks.invalid_block = (function pluto$reader$blocks$invalid_block(type,m){
return pluto.error.syntax.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$pluto$error_SLASH_invalid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$block], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$type,type));
});
if((typeof pluto !== 'undefined') && (typeof pluto.reader !== 'undefined') && (typeof pluto.reader.blocks !== 'undefined') && (typeof pluto.reader.blocks.parse !== 'undefined')){
} else {
/**
 * Parse a block element. Return hiccup data.
 */
pluto.reader.blocks.parse = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__7708 = cljs.core.get_global_hierarchy;
return (fexpr__7708.cljs$core$IFn$_invoke$arity$0 ? fexpr__7708.cljs$core$IFn$_invoke$arity$0() : fexpr__7708.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("pluto.reader.blocks","parse"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (ctx,ext,parent,p__7709){
var vec__7710 = p__7709;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7710,(0),null);
return type;
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,cljs.core.cst$kw$default,hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
pluto.reader.blocks.interpolate = (function pluto$reader$blocks$interpolate(ctx,m,v){
var map__7713 = pluto.utils.interpolate(m,v);
var map__7713__$1 = (((((!((map__7713 == null))))?(((((map__7713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7713):map__7713);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7713__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7713__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
return pluto.log.fire_BANG_(ctx,cljs.core.cst$kw$pluto$log_SLASH_error,cljs.core.cst$kw$query_SLASH_interpolation,errors);
} else {
return data;
}
});
pluto.reader.blocks.substitute_query_values = (function pluto$reader$blocks$substitute_query_values(ctx,m,v){
return clojure.walk.prewalk((function (p1__7715_SHARP_){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,p1__7715_SHARP_);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = ((typeof p1__7715_SHARP_ === 'string')?pluto.reader.blocks.interpolate(ctx,m,p1__7715_SHARP_):null);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return p1__7715_SHARP_;
}
}
}),v);
});
pluto.reader.blocks.query_QMARK_ = (function pluto$reader$blocks$query_QMARK_(binding_value){
var and__4120__auto__ = cljs.core.vector_QMARK_(binding_value);
if(and__4120__auto__){
var s = cljs.core.first(binding_value);
return (((s instanceof cljs.core.Symbol)) || ((s instanceof cljs.core.Keyword)));
} else {
return and__4120__auto__;
}
});
pluto.reader.blocks.resolve_rhs = (function pluto$reader$blocks$resolve_rhs(ctx,env,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.cst$sym$properties)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$pluto$reader_SLASH_properties);
} else {
if((v instanceof cljs.core.Symbol)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,v);
} else {
if(pluto.reader.blocks.query_QMARK_(v)){
var temp__5720__auto__ = (function (){var G__7716 = pluto.reader.blocks.substitute_query_values(ctx,env,v);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__7716) : re_frame.core.subscribe.call(null,G__7716));
})();
if(cljs.core.truth_(temp__5720__auto__)){
var signal = temp__5720__auto__;
var o = cljs.core.deref(signal);
pluto.log.fire_BANG_(ctx,cljs.core.cst$kw$pluto$log_SLASH_trace,cljs.core.cst$kw$query_SLASH_resolve,o);

return o;
} else {
return null;
}
} else {
return v;

}
}
}
});
pluto.reader.blocks.destructure_into = (function pluto$reader$blocks$destructure_into(env,k,v){
if(cljs.core.map_QMARK_(k)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(pluto.reader.destructuring.destructure(k,v)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,k,v);
}
});
pluto.reader.blocks.resolve_binding = (function pluto$reader$blocks$resolve_binding(ctx,env,k,v){
var v_SINGLEQUOTE_ = pluto.reader.blocks.resolve_rhs(ctx,env,v);
return pluto.reader.blocks.destructure_into(env,k,v_SINGLEQUOTE_);
});
pluto.reader.blocks.resolve_bindings_into = (function pluto$reader$blocks$resolve_bindings_into(ctx,env,bindings){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__7717_SHARP_,p2__7718_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(pluto.reader.blocks.resolve_binding,ctx,p1__7717_SHARP_,p2__7718_SHARP_);
}),(function (){var or__4131__auto__ = env;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings));
});
pluto.reader.blocks.replace_atom = (function pluto$reader$blocks$replace_atom(ctx,values,o){
if(cljs.core.contains_QMARK_(values,o)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,o);
} else {
if((o instanceof cljs.core.Symbol)){
return null;
} else {
if(typeof o === 'string'){
return pluto.reader.blocks.interpolate(ctx,values,o);
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.fn_QMARK_(o);
if(and__4120__auto__){
return cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(o));
} else {
return and__4120__auto__;
}
})())){
return (function (p1__7719_SHARP_,p2__7720_SHARP_){
var G__7721 = p1__7719_SHARP_;
var G__7722 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p2__7720_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$env,values], null)], 0));
return (o.cljs$core$IFn$_invoke$arity$2 ? o.cljs$core$IFn$_invoke$arity$2(G__7721,G__7722) : o.call(null,G__7721,G__7722));
});
} else {
return clojure.walk.postwalk_replace(values,o);

}
}
}
}
});
pluto.reader.blocks.walkup_upto_leaf = (function pluto$reader$blocks$walkup_upto_leaf(f,lp_QMARK_,lf,tree){
if(cljs.core.truth_((lp_QMARK_.cljs$core$IFn$_invoke$arity$1 ? lp_QMARK_.cljs$core$IFn$_invoke$arity$1(tree) : lp_QMARK_.call(null,tree)))){
return (lf.cljs$core$IFn$_invoke$arity$1 ? lf.cljs$core$IFn$_invoke$arity$1(tree) : lf.call(null,tree));
} else {
var res = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(tree) : f.call(null,tree));
var f2 = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(pluto.reader.blocks.walkup_upto_leaf,f,lp_QMARK_,lf);
if(cljs.core.list_QMARK_(res)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f2,res));
} else {
if(cljs.core.map_entry_QMARK_(res)){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f2,res));
} else {
if(cljs.core.seq_QMARK_(res)){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f2,res));
} else {
if(cljs.core.coll_QMARK_(res)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(res),cljs.core.map.cljs$core$IFn$_invoke$arity$2(f2,res));
} else {
return res;

}
}
}
}
}
});

pluto.reader.blocks.let_block = (function pluto$reader$blocks$let_block(p__7725,children){
var map__7726 = p__7725;
var map__7726__$1 = (((((!((map__7726 == null))))?(((((map__7726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7726):map__7726);
var ctx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7726__$1,cljs.core.cst$kw$ctx);
var prev_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7726__$1,cljs.core.cst$kw$prev_DASH_env);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7726__$1,cljs.core.cst$kw$bindings);
var new_env = pluto.reader.blocks.resolve_bindings_into(ctx,prev_env,bindings);
return pluto.reader.blocks.walkup_upto_leaf(((function (new_env,map__7726,map__7726__$1,ctx,prev_env,bindings){
return (function (p1__7723_SHARP_){
return pluto.reader.blocks.replace_atom(ctx,new_env,p1__7723_SHARP_);
});})(new_env,map__7726,map__7726__$1,ctx,prev_env,bindings))
,((function (new_env,map__7726,map__7726__$1,ctx,prev_env,bindings){
return (function (p1__7724_SHARP_){
var and__4120__auto__ = cljs.core.vector_QMARK_(p1__7724_SHARP_);
if(and__4120__auto__){
var G__7731 = cljs.core.first(p1__7724_SHARP_);
var fexpr__7730 = cljs.core.PersistentHashSet.createAsIfByAssoc([pluto.reader.blocks.for_block,pluto.reader.blocks.let_block]);
return (fexpr__7730.cljs$core$IFn$_invoke$arity$1 ? fexpr__7730.cljs$core$IFn$_invoke$arity$1(G__7731) : fexpr__7730.call(null,G__7731));
} else {
return and__4120__auto__;
}
});})(new_env,map__7726,map__7726__$1,ctx,prev_env,bindings))
,((function (new_env,map__7726,map__7726__$1,ctx,prev_env,bindings){
return (function (p__7732){
var vec__7733 = p__7732;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7733,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7733,(1),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7733,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,cljs.core.cst$kw$prev_DASH_env,new_env),children__$1], null);
});})(new_env,map__7726,map__7726__$1,ctx,prev_env,bindings))
,children);
});
pluto.reader.blocks.for_block = (function pluto$reader$blocks$for_block(p__7736,children){
var map__7737 = p__7736;
var map__7737__$1 = (((((!((map__7737 == null))))?(((((map__7737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7737):map__7737);
var ctx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7737__$1,cljs.core.cst$kw$ctx);
var prev_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7737__$1,cljs.core.cst$kw$prev_DASH_env);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7737__$1,cljs.core.cst$kw$bindings);
var vec__7739 = bindings;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7739,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7739,(1),null);
var for_values = pluto.reader.blocks.resolve_rhs(ctx,prev_env,v);
if(cljs.core.sequential_QMARK_(for_values)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,(function (){var iter__4523__auto__ = ((function (vec__7739,k,v,for_values,map__7737,map__7737__$1,ctx,prev_env,bindings){
return (function pluto$reader$blocks$for_block_$_iter__7742(s__7743){
return (new cljs.core.LazySeq(null,((function (vec__7739,k,v,for_values,map__7737,map__7737__$1,ctx,prev_env,bindings){
return (function (){
var s__7743__$1 = s__7743;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__7743__$1);
if(temp__5720__auto__){
var s__7743__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7743__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__7743__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__7745 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__7744 = (0);
while(true){
if((i__7744 < size__4522__auto__)){
var val = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__7744);
cljs.core.chunk_append(b__7745,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.let_block,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ctx,ctx,cljs.core.cst$kw$prev_DASH_env,prev_env,cljs.core.cst$kw$bindings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,val], null)], null),children], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,val], null)));

var G__7746 = (i__7744 + (1));
i__7744 = G__7746;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7745),pluto$reader$blocks$for_block_$_iter__7742(cljs.core.chunk_rest(s__7743__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7745),null);
}
} else {
var val = cljs.core.first(s__7743__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.let_block,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ctx,ctx,cljs.core.cst$kw$prev_DASH_env,prev_env,cljs.core.cst$kw$bindings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,val], null)], null),children], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,val], null)),pluto$reader$blocks$for_block_$_iter__7742(cljs.core.rest(s__7743__$2)));
}
} else {
return null;
}
break;
}
});})(vec__7739,k,v,for_values,map__7737,map__7737__$1,ctx,prev_env,bindings))
,null,null));
});})(vec__7739,k,v,for_values,map__7737,map__7737__$1,ctx,prev_env,bindings))
;
return iter__4523__auto__(for_values);
})()));
} else {
return null;
}
});
pluto.reader.blocks.static_value_QMARK_ = (function pluto$reader$blocks$static_value_QMARK_(v){
return ((pluto.utils.primitive_QMARK_(v)) || (cljs.core.map_QMARK_(v)));
});
pluto.reader.blocks.valid_bindings_QMARK_ = (function pluto$reader$blocks$valid_bindings_QMARK_(k,v){
return (((((k instanceof cljs.core.Symbol)) || (cljs.core.map_QMARK_(k)) || (cljs.core.vector_QMARK_(k)))) && ((((v instanceof cljs.core.Symbol)) || (pluto.reader.blocks.static_value_QMARK_(v)) || (pluto.reader.blocks.query_QMARK_(v)))));
});
pluto.reader.blocks.valid_bindings_form_QMARK_ = (function pluto$reader$blocks$valid_bindings_form_QMARK_(bindings){
return cljs.core.even_QMARK_(cljs.core.count(bindings));
});
pluto.reader.blocks.resolve_and_validate_queries = (function pluto$reader$blocks$resolve_and_validate_queries(ctx,ext,bindings){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (accum,p__7747){
var vec__7748 = p__7747;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7748,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7748,(1),null);
if(cljs.core.vector_QMARK_(v)){
var map__7751 = (function (){var G__7752 = ctx;
var G__7753 = ext;
var G__7754 = cljs.core.cst$kw$query;
var G__7755 = v;
return (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(G__7752,G__7753,G__7754,G__7755) : pluto.reader.types.resolve.call(null,G__7752,G__7753,G__7754,G__7755));
})();
var map__7751__$1 = (((((!((map__7751 == null))))?(((((map__7751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7751):map__7751);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7751__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7751__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(cljs.core.not_empty(errors))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(accum,cljs.core.cst$kw$errors,cljs.core.concat,errors);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(accum,cljs.core.cst$kw$data,cljs.core.concat,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,data], null));
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(accum,cljs.core.cst$kw$data,cljs.core.concat,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.PersistentVector.EMPTY], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings));
});
pluto.reader.blocks.validate_bindings = (function pluto$reader$blocks$validate_bindings(bindings){
if(pluto.reader.blocks.valid_bindings_form_QMARK_(bindings)){
return cljs.core.not_empty((function (){var binding_pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (binding_pairs){
return (function (p1__7758_SHARP_){
return pluto.reader.blocks.invalid_block(cljs.core.cst$sym$let,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,p1__7758_SHARP_,cljs.core.cst$kw$reason,cljs.core.cst$kw$bindings], null));
});})(binding_pairs))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (binding_pairs){
return (function (p1__7757_SHARP_){
return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pluto.reader.blocks.valid_bindings_QMARK_,p1__7757_SHARP_));
});})(binding_pairs))
,binding_pairs)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(pluto.reader.destructuring.validate_destructure_bindings,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.sequential_QMARK_,cljs.core.map_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,binding_pairs))], 0)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.invalid_block(cljs.core.cst$sym$let,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,bindings,cljs.core.cst$kw$reason,cljs.core.cst$kw$bindings_DASH_format], null))], null);
}
});
pluto.reader.blocks.valid_let_block_QMARK_ = (function pluto$reader$blocks$valid_let_block_QMARK_(body){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(body));
});
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$let,(function (ctx,ext,_,p__7759){
var vec__7760 = p__7759;
var seq__7761 = cljs.core.seq(vec__7760);
var first__7762 = cljs.core.first(seq__7761);
var seq__7761__$1 = cljs.core.next(seq__7761);
var ___$1 = first__7762;
var first__7762__$1 = cljs.core.first(seq__7761__$1);
var seq__7761__$2 = cljs.core.next(seq__7761__$1);
var bindings = first__7762__$1;
var body = seq__7761__$2;
if((!(pluto.reader.blocks.valid_let_block_QMARK_(body)))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.invalid_block(cljs.core.cst$sym$let,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,body,cljs.core.cst$kw$reason,cljs.core.cst$kw$body], null))], null)], null);
} else {
var binding_errors = pluto.reader.blocks.validate_bindings(bindings);
if(cljs.core.truth_(cljs.core.not_empty(binding_errors))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,binding_errors], null);
} else {
var map__7763 = pluto.reader.blocks.resolve_and_validate_queries(ctx,ext,bindings);
var map__7763__$1 = (((((!((map__7763 == null))))?(((((map__7763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7763):map__7763);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7763__$1,cljs.core.cst$kw$errors);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7763__$1,cljs.core.cst$kw$data);
if(cljs.core.truth_(cljs.core.not_empty(errors))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,errors], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.let_block,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ctx,ctx,cljs.core.cst$kw$bindings,data], null),cljs.core.last(body)], null)], null);
}
}
}
}));
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$for,(function (ctx,ext,_,p__7765){
var vec__7766 = p__7765;
var seq__7767 = cljs.core.seq(vec__7766);
var first__7768 = cljs.core.first(seq__7767);
var seq__7767__$1 = cljs.core.next(seq__7767);
var ___$1 = first__7768;
var first__7768__$1 = cljs.core.first(seq__7767__$1);
var seq__7767__$2 = cljs.core.next(seq__7767__$1);
var binding = first__7768__$1;
var body = seq__7767__$2;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(body))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.invalid_block(cljs.core.cst$sym$for,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,body,cljs.core.cst$kw$reason,cljs.core.cst$kw$body], null))], null)], null);
} else {
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(binding))) || (cljs.core.not((function (){var G__7772 = cljs.core.first(binding);
var fexpr__7771 = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,cljs.core.map_QMARK_);
return (fexpr__7771.cljs$core$IFn$_invoke$arity$1 ? fexpr__7771.cljs$core$IFn$_invoke$arity$1(G__7772) : fexpr__7771.call(null,G__7772));
})())))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.invalid_block(cljs.core.cst$sym$for,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,binding,cljs.core.cst$kw$reason,cljs.core.cst$kw$bindings], null))], null)], null);
} else {
var map__7773 = pluto.reader.blocks.resolve_and_validate_queries(ctx,ext,binding);
var map__7773__$1 = (((((!((map__7773 == null))))?(((((map__7773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7773):map__7773);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7773__$1,cljs.core.cst$kw$errors);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7773__$1,cljs.core.cst$kw$data);
if(cljs.core.truth_(cljs.core.not_empty(errors))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,errors], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.for_block,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ctx,ctx,cljs.core.cst$kw$bindings,data], null),cljs.core.last(body)], null)], null);
}

}
}
}));
pluto.reader.blocks.when_block = (function pluto$reader$blocks$when_block(p__7775,body){
var map__7776 = p__7775;
var map__7776__$1 = (((((!((map__7776 == null))))?(((((map__7776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7776):map__7776);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7776__$1,cljs.core.cst$kw$test);
if(cljs.core.truth_(test)){
return body;
} else {
return null;
}
});
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$when,(function (_,___$1,___$2,p__7778){
var vec__7779 = p__7778;
var seq__7780 = cljs.core.seq(vec__7779);
var first__7781 = cljs.core.first(seq__7780);
var seq__7780__$1 = cljs.core.next(seq__7780);
var ___$3 = first__7781;
var first__7781__$1 = cljs.core.first(seq__7780__$1);
var seq__7780__$2 = cljs.core.next(seq__7780__$1);
var test = first__7781__$1;
var body = seq__7780__$2;
var parts = vec__7779;
var errors = (function (){var G__7782 = null;
var G__7782__$1 = (((!((test instanceof cljs.core.Symbol))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__7782,pluto.reader.blocks.invalid_block(cljs.core.cst$sym$when,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,test,cljs.core.cst$kw$reason,cljs.core.cst$kw$invalid_DASH_test_DASH_type], null))):G__7782);
if(cljs.core.empty_QMARK_(body)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__7782__$1,pluto.reader.blocks.invalid_block(cljs.core.cst$sym$when,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,parts,cljs.core.cst$kw$reason,cljs.core.cst$kw$empty_DASH_body_DASH_clause], null)));
} else {
return G__7782__$1;
}
})();
if(cljs.core.truth_(cljs.core.not_empty(errors))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,errors], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.when_block,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$test,test], null)], null),body)], null);
}
}));
pluto.reader.blocks.if_block = (function pluto$reader$blocks$if_block(var_args){
var args__4736__auto__ = [];
var len__4730__auto___7788 = arguments.length;
var i__4731__auto___7789 = (0);
while(true){
if((i__4731__auto___7789 < len__4730__auto___7788)){
args__4736__auto__.push((arguments[i__4731__auto___7789]));

var G__7790 = (i__4731__auto___7789 + (1));
i__4731__auto___7789 = G__7790;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return pluto.reader.blocks.if_block.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

pluto.reader.blocks.if_block.cljs$core$IFn$_invoke$arity$variadic = (function (p__7785,body){
var map__7786 = p__7785;
var map__7786__$1 = (((((!((map__7786 == null))))?(((((map__7786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7786):map__7786);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7786__$1,cljs.core.cst$kw$test);
if(cljs.core.truth_(test)){
return cljs.core.first(body);
} else {
return cljs.core.second(body);
}
});

pluto.reader.blocks.if_block.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
pluto.reader.blocks.if_block.cljs$lang$applyTo = (function (seq7783){
var G__7784 = cljs.core.first(seq7783);
var seq7783__$1 = cljs.core.next(seq7783);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7784,seq7783__$1);
});

pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$if,(function (_,___$1,___$2,p__7791){
var vec__7792 = p__7791;
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7792,(0),null);
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7792,(1),null);
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7792,(2),null);
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7792,(3),null);
var parts = vec__7792;
var parts_count = cljs.core.count(cljs.core.rest(parts));
var errors = (function (){var G__7795 = null;
var G__7795__$1 = (((!((test instanceof cljs.core.Symbol))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__7795,pluto.reader.blocks.invalid_block(cljs.core.cst$sym$if,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reason,cljs.core.cst$kw$test,cljs.core.cst$kw$data,test], null))):G__7795);
var G__7795__$2 = ((((3) < parts_count))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__7795__$1,pluto.reader.blocks.invalid_block(cljs.core.cst$sym$if,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reason,cljs.core.cst$kw$too_DASH_many_DASH_clauses,cljs.core.cst$kw$data,parts], null))):G__7795__$1);
if(((3) > parts_count)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__7795__$2,pluto.reader.blocks.invalid_block(cljs.core.cst$sym$if,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reason,cljs.core.cst$kw$three_DASH_clauses_DASH_required,cljs.core.cst$kw$data,parts], null)));
} else {
return G__7795__$2;
}
})();
if(cljs.core.truth_(cljs.core.not_empty(errors))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,errors], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.if_block,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$test,test], null)], null),(new cljs.core.List(null,then,(new cljs.core.List(null,else$,null,(1),null)),(2),null)))], null);
}
}));
pluto.reader.blocks.case_block = (function pluto$reader$blocks$case_block(var_args){
var args__4736__auto__ = [];
var len__4730__auto___7802 = arguments.length;
var i__4731__auto___7803 = (0);
while(true){
if((i__4731__auto___7803 < len__4730__auto___7802)){
args__4736__auto__.push((arguments[i__4731__auto___7803]));

var G__7804 = (i__4731__auto___7803 + (1));
i__4731__auto___7803 = G__7804;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return pluto.reader.blocks.case_block.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

pluto.reader.blocks.case_block.cljs$core$IFn$_invoke$arity$variadic = (function (p__7799,results){
var map__7800 = p__7799;
var map__7800__$1 = (((((!((map__7800 == null))))?(((((map__7800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7800):map__7800);
var expression = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7800__$1,cljs.core.cst$kw$expression);
var tests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7800__$1,cljs.core.cst$kw$tests);
var or__4131__auto__ = cljs.core.some(((function (map__7800,map__7800__$1,expression,tests){
return (function (p1__7796_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expression,cljs.core.key(p1__7796_SHARP_))){
return cljs.core.val(p1__7796_SHARP_);
} else {
return null;
}
});})(map__7800,map__7800__$1,expression,tests))
,cljs.core.zipmap(tests,results));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(tests),cljs.core.count(results))){
return cljs.core.last(results);
} else {
return null;
}
}
});

pluto.reader.blocks.case_block.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
pluto.reader.blocks.case_block.cljs$lang$applyTo = (function (seq7797){
var G__7798 = cljs.core.first(seq7797);
var seq7797__$1 = cljs.core.next(seq7797);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7798,seq7797__$1);
});

pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$case,(function (_,___$1,___$2,p__7805){
var vec__7806 = p__7805;
var seq__7807 = cljs.core.seq(vec__7806);
var first__7808 = cljs.core.first(seq__7807);
var seq__7807__$1 = cljs.core.next(seq__7807);
var ___$3 = first__7808;
var first__7808__$1 = cljs.core.first(seq__7807__$1);
var seq__7807__$2 = cljs.core.next(seq__7807__$1);
var expression = first__7808__$1;
var clauses = seq__7807__$2;
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses);
var errors = (function (){var G__7809 = null;
if((!(cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__7809,pluto.reader.blocks.invalid_block(cljs.core.cst$sym$case,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reason,cljs.core.cst$kw$tests,cljs.core.cst$kw$data,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs)], null)));
} else {
return G__7809;
}
})();
if(cljs.core.truth_(cljs.core.not_empty(errors))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,errors], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.case_block,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$expression,expression,cljs.core.cst$kw$tests,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs)], null)], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs),((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last(clauses)], null):null)))], null);
}
}));
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (_,___$1,___$2,block){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.error.syntax.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$pluto$error_SLASH_unknown,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$block], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,block], null))], null)], null);
}));
