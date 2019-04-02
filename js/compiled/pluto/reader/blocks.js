// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.reader.blocks');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.walk');
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
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__2051 = cljs.core.get_global_hierarchy;
return (fexpr__2051.cljs$core$IFn$_invoke$arity$0 ? fexpr__2051.cljs$core$IFn$_invoke$arity$0() : fexpr__2051.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("pluto.reader.blocks","parse"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (ctx,ext,parent,p__2052){
var vec__2053 = p__2052;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2053,(0),null);
return type;
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,cljs.core.cst$kw$default,hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
pluto.reader.blocks.interpolate = (function pluto$reader$blocks$interpolate(ctx,m,v){
var map__2056 = pluto.utils.interpolate(m,v);
var map__2056__$1 = (((((!((map__2056 == null))))?(((((map__2056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2056):map__2056);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2056__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2056__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
return pluto.log.fire_BANG_(ctx,cljs.core.cst$kw$pluto$log_SLASH_error,cljs.core.cst$kw$query_SLASH_interpolation,errors);
} else {
return data;
}
});
pluto.reader.blocks.substitute_query_values = (function pluto$reader$blocks$substitute_query_values(ctx,m,v){
return clojure.walk.prewalk((function (p1__2058_SHARP_){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,p1__2058_SHARP_);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = ((typeof p1__2058_SHARP_ === 'string')?pluto.reader.blocks.interpolate(ctx,m,p1__2058_SHARP_):null);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return p1__2058_SHARP_;
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
pluto.reader.blocks.resolve_rhs = (function pluto$reader$blocks$resolve_rhs(p__2059,env,v){
var map__2060 = p__2059;
var map__2060__$1 = (((((!((map__2060 == null))))?(((((map__2060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2060):map__2060);
var ctx = map__2060__$1;
var query_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2060__$1,cljs.core.cst$kw$query_DASH_fn);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.cst$sym$properties)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$pluto$reader_SLASH_properties);
} else {
if((v instanceof cljs.core.Symbol)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,v);
} else {
if(pluto.reader.blocks.query_QMARK_(v)){
if(cljs.core.truth_(query_fn)){
var temp__5720__auto__ = (function (){var G__2062 = ctx;
var G__2063 = pluto.reader.blocks.substitute_query_values(ctx,env,v);
return (query_fn.cljs$core$IFn$_invoke$arity$2 ? query_fn.cljs$core$IFn$_invoke$arity$2(G__2062,G__2063) : query_fn.call(null,G__2062,G__2063));
})();
if(cljs.core.truth_(temp__5720__auto__)){
var signal = temp__5720__auto__;
var o = cljs.core.deref(signal);
pluto.log.fire_BANG_(ctx,cljs.core.cst$kw$pluto$log_SLASH_trace,cljs.core.cst$kw$query_SLASH_resolve,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,v,cljs.core.cst$kw$value,o], null));

return o;
} else {
return null;
}
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__2064_SHARP_,p2__2065_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(pluto.reader.blocks.resolve_binding,ctx,p1__2064_SHARP_,p2__2065_SHARP_);
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
return (function (p1__2066_SHARP_,p2__2067_SHARP_){
var G__2068 = p1__2066_SHARP_;
var G__2069 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p2__2067_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$env,values], null)], 0));
return (o.cljs$core$IFn$_invoke$arity$2 ? o.cljs$core$IFn$_invoke$arity$2(G__2068,G__2069) : o.call(null,G__2068,G__2069));
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

pluto.reader.blocks.let_block = (function pluto$reader$blocks$let_block(p__2072,children){
var map__2073 = p__2072;
var map__2073__$1 = (((((!((map__2073 == null))))?(((((map__2073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2073):map__2073);
var ctx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2073__$1,cljs.core.cst$kw$ctx);
var prev_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2073__$1,cljs.core.cst$kw$prev_DASH_env);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2073__$1,cljs.core.cst$kw$bindings);
var new_env = pluto.reader.blocks.resolve_bindings_into(ctx,prev_env,bindings);
return pluto.reader.blocks.walkup_upto_leaf(((function (new_env,map__2073,map__2073__$1,ctx,prev_env,bindings){
return (function (p1__2070_SHARP_){
return pluto.reader.blocks.replace_atom(ctx,new_env,p1__2070_SHARP_);
});})(new_env,map__2073,map__2073__$1,ctx,prev_env,bindings))
,((function (new_env,map__2073,map__2073__$1,ctx,prev_env,bindings){
return (function (p1__2071_SHARP_){
var and__4120__auto__ = cljs.core.vector_QMARK_(p1__2071_SHARP_);
if(and__4120__auto__){
var G__2078 = cljs.core.first(p1__2071_SHARP_);
var fexpr__2077 = cljs.core.PersistentHashSet.createAsIfByAssoc([pluto.reader.blocks.for_block,pluto.reader.blocks.let_block]);
return (fexpr__2077.cljs$core$IFn$_invoke$arity$1 ? fexpr__2077.cljs$core$IFn$_invoke$arity$1(G__2078) : fexpr__2077.call(null,G__2078));
} else {
return and__4120__auto__;
}
});})(new_env,map__2073,map__2073__$1,ctx,prev_env,bindings))
,((function (new_env,map__2073,map__2073__$1,ctx,prev_env,bindings){
return (function (p__2079){
var vec__2080 = p__2079;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2080,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2080,(1),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2080,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,cljs.core.cst$kw$prev_DASH_env,new_env),children__$1], null);
});})(new_env,map__2073,map__2073__$1,ctx,prev_env,bindings))
,children);
});
pluto.reader.blocks.for_block = (function pluto$reader$blocks$for_block(p__2083,children){
var map__2084 = p__2083;
var map__2084__$1 = (((((!((map__2084 == null))))?(((((map__2084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2084):map__2084);
var ctx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2084__$1,cljs.core.cst$kw$ctx);
var prev_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2084__$1,cljs.core.cst$kw$prev_DASH_env);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2084__$1,cljs.core.cst$kw$bindings);
var vec__2086 = bindings;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2086,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2086,(1),null);
var for_values = pluto.reader.blocks.resolve_rhs(ctx,prev_env,v);
if(cljs.core.sequential_QMARK_(for_values)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,(function (){var iter__4523__auto__ = ((function (vec__2086,k,v,for_values,map__2084,map__2084__$1,ctx,prev_env,bindings){
return (function pluto$reader$blocks$for_block_$_iter__2089(s__2090){
return (new cljs.core.LazySeq(null,((function (vec__2086,k,v,for_values,map__2084,map__2084__$1,ctx,prev_env,bindings){
return (function (){
var s__2090__$1 = s__2090;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__2090__$1);
if(temp__5720__auto__){
var s__2090__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__2090__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__2090__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__2092 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__2091 = (0);
while(true){
if((i__2091 < size__4522__auto__)){
var val = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__2091);
cljs.core.chunk_append(b__2092,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.let_block,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ctx,ctx,cljs.core.cst$kw$prev_DASH_env,prev_env,cljs.core.cst$kw$bindings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,val], null)], null),children], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,val], null)));

var G__2093 = (i__2091 + (1));
i__2091 = G__2093;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__2092),pluto$reader$blocks$for_block_$_iter__2089(cljs.core.chunk_rest(s__2090__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__2092),null);
}
} else {
var val = cljs.core.first(s__2090__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.let_block,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ctx,ctx,cljs.core.cst$kw$prev_DASH_env,prev_env,cljs.core.cst$kw$bindings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,val], null)], null),children], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,val], null)),pluto$reader$blocks$for_block_$_iter__2089(cljs.core.rest(s__2090__$2)));
}
} else {
return null;
}
break;
}
});})(vec__2086,k,v,for_values,map__2084,map__2084__$1,ctx,prev_env,bindings))
,null,null));
});})(vec__2086,k,v,for_values,map__2084,map__2084__$1,ctx,prev_env,bindings))
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (accum,p__2094){
var vec__2095 = p__2094;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2095,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2095,(1),null);
if(cljs.core.vector_QMARK_(v)){
var map__2098 = (function (){var G__2099 = ctx;
var G__2100 = ext;
var G__2101 = cljs.core.cst$kw$query;
var G__2102 = v;
return (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(G__2099,G__2100,G__2101,G__2102) : pluto.reader.types.resolve.call(null,G__2099,G__2100,G__2101,G__2102));
})();
var map__2098__$1 = (((((!((map__2098 == null))))?(((((map__2098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2098):map__2098);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2098__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2098__$1,cljs.core.cst$kw$errors);
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
return (function (p1__2105_SHARP_){
return pluto.reader.blocks.invalid_block(cljs.core.cst$sym$let,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,p1__2105_SHARP_,cljs.core.cst$kw$reason,cljs.core.cst$kw$bindings], null));
});})(binding_pairs))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (binding_pairs){
return (function (p1__2104_SHARP_){
return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pluto.reader.blocks.valid_bindings_QMARK_,p1__2104_SHARP_));
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
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$let,(function (ctx,ext,_,p__2106){
var vec__2107 = p__2106;
var seq__2108 = cljs.core.seq(vec__2107);
var first__2109 = cljs.core.first(seq__2108);
var seq__2108__$1 = cljs.core.next(seq__2108);
var ___$1 = first__2109;
var first__2109__$1 = cljs.core.first(seq__2108__$1);
var seq__2108__$2 = cljs.core.next(seq__2108__$1);
var bindings = first__2109__$1;
var body = seq__2108__$2;
if((!(pluto.reader.blocks.valid_let_block_QMARK_(body)))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.invalid_block(cljs.core.cst$sym$let,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,body,cljs.core.cst$kw$reason,cljs.core.cst$kw$body], null))], null)], null);
} else {
var binding_errors = pluto.reader.blocks.validate_bindings(bindings);
if(cljs.core.truth_(cljs.core.not_empty(binding_errors))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,binding_errors], null);
} else {
var map__2110 = pluto.reader.blocks.resolve_and_validate_queries(ctx,ext,bindings);
var map__2110__$1 = (((((!((map__2110 == null))))?(((((map__2110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2110):map__2110);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2110__$1,cljs.core.cst$kw$errors);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2110__$1,cljs.core.cst$kw$data);
if(cljs.core.truth_(cljs.core.not_empty(errors))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,errors], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.let_block,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ctx,ctx,cljs.core.cst$kw$bindings,data], null),cljs.core.last(body)], null)], null);
}
}
}
}));
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$for,(function (ctx,ext,_,p__2112){
var vec__2113 = p__2112;
var seq__2114 = cljs.core.seq(vec__2113);
var first__2115 = cljs.core.first(seq__2114);
var seq__2114__$1 = cljs.core.next(seq__2114);
var ___$1 = first__2115;
var first__2115__$1 = cljs.core.first(seq__2114__$1);
var seq__2114__$2 = cljs.core.next(seq__2114__$1);
var binding = first__2115__$1;
var body = seq__2114__$2;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(body))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.invalid_block(cljs.core.cst$sym$for,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,body,cljs.core.cst$kw$reason,cljs.core.cst$kw$body], null))], null)], null);
} else {
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(binding))) || (cljs.core.not((function (){var G__2119 = cljs.core.first(binding);
var fexpr__2118 = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,cljs.core.map_QMARK_);
return (fexpr__2118.cljs$core$IFn$_invoke$arity$1 ? fexpr__2118.cljs$core$IFn$_invoke$arity$1(G__2119) : fexpr__2118.call(null,G__2119));
})())))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.invalid_block(cljs.core.cst$sym$for,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,binding,cljs.core.cst$kw$reason,cljs.core.cst$kw$bindings], null))], null)], null);
} else {
var map__2120 = pluto.reader.blocks.resolve_and_validate_queries(ctx,ext,binding);
var map__2120__$1 = (((((!((map__2120 == null))))?(((((map__2120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2120):map__2120);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2120__$1,cljs.core.cst$kw$errors);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2120__$1,cljs.core.cst$kw$data);
if(cljs.core.truth_(cljs.core.not_empty(errors))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,errors], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.for_block,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ctx,ctx,cljs.core.cst$kw$bindings,data], null),cljs.core.last(body)], null)], null);
}

}
}
}));
pluto.reader.blocks.when_block = (function pluto$reader$blocks$when_block(p__2122,body){
var map__2123 = p__2122;
var map__2123__$1 = (((((!((map__2123 == null))))?(((((map__2123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2123):map__2123);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2123__$1,cljs.core.cst$kw$test);
if(cljs.core.truth_(test)){
return body;
} else {
return null;
}
});
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$when,(function (_,___$1,___$2,p__2125){
var vec__2126 = p__2125;
var seq__2127 = cljs.core.seq(vec__2126);
var first__2128 = cljs.core.first(seq__2127);
var seq__2127__$1 = cljs.core.next(seq__2127);
var ___$3 = first__2128;
var first__2128__$1 = cljs.core.first(seq__2127__$1);
var seq__2127__$2 = cljs.core.next(seq__2127__$1);
var test = first__2128__$1;
var body = seq__2127__$2;
var parts = vec__2126;
var errors = (function (){var G__2129 = null;
var G__2129__$1 = (((!((test instanceof cljs.core.Symbol))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__2129,pluto.reader.blocks.invalid_block(cljs.core.cst$sym$when,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,test,cljs.core.cst$kw$reason,cljs.core.cst$kw$invalid_DASH_test_DASH_type], null))):G__2129);
if(cljs.core.empty_QMARK_(body)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__2129__$1,pluto.reader.blocks.invalid_block(cljs.core.cst$sym$when,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,parts,cljs.core.cst$kw$reason,cljs.core.cst$kw$empty_DASH_body_DASH_clause], null)));
} else {
return G__2129__$1;
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
var len__4730__auto___2135 = arguments.length;
var i__4731__auto___2136 = (0);
while(true){
if((i__4731__auto___2136 < len__4730__auto___2135)){
args__4736__auto__.push((arguments[i__4731__auto___2136]));

var G__2137 = (i__4731__auto___2136 + (1));
i__4731__auto___2136 = G__2137;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return pluto.reader.blocks.if_block.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

pluto.reader.blocks.if_block.cljs$core$IFn$_invoke$arity$variadic = (function (p__2132,body){
var map__2133 = p__2132;
var map__2133__$1 = (((((!((map__2133 == null))))?(((((map__2133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2133):map__2133);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2133__$1,cljs.core.cst$kw$test);
if(cljs.core.truth_(test)){
return cljs.core.first(body);
} else {
return cljs.core.second(body);
}
});

pluto.reader.blocks.if_block.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
pluto.reader.blocks.if_block.cljs$lang$applyTo = (function (seq2130){
var G__2131 = cljs.core.first(seq2130);
var seq2130__$1 = cljs.core.next(seq2130);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2131,seq2130__$1);
});

pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$if,(function (_,___$1,___$2,p__2138){
var vec__2139 = p__2138;
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2139,(0),null);
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2139,(1),null);
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2139,(2),null);
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2139,(3),null);
var parts = vec__2139;
var parts_count = cljs.core.count(cljs.core.rest(parts));
var errors = (function (){var G__2142 = null;
var G__2142__$1 = (((!((test instanceof cljs.core.Symbol))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__2142,pluto.reader.blocks.invalid_block(cljs.core.cst$sym$if,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reason,cljs.core.cst$kw$test,cljs.core.cst$kw$data,test], null))):G__2142);
var G__2142__$2 = ((((3) < parts_count))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__2142__$1,pluto.reader.blocks.invalid_block(cljs.core.cst$sym$if,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reason,cljs.core.cst$kw$too_DASH_many_DASH_clauses,cljs.core.cst$kw$data,parts], null))):G__2142__$1);
if(((3) > parts_count)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__2142__$2,pluto.reader.blocks.invalid_block(cljs.core.cst$sym$if,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reason,cljs.core.cst$kw$three_DASH_clauses_DASH_required,cljs.core.cst$kw$data,parts], null)));
} else {
return G__2142__$2;
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
var len__4730__auto___2149 = arguments.length;
var i__4731__auto___2150 = (0);
while(true){
if((i__4731__auto___2150 < len__4730__auto___2149)){
args__4736__auto__.push((arguments[i__4731__auto___2150]));

var G__2151 = (i__4731__auto___2150 + (1));
i__4731__auto___2150 = G__2151;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return pluto.reader.blocks.case_block.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

pluto.reader.blocks.case_block.cljs$core$IFn$_invoke$arity$variadic = (function (p__2146,results){
var map__2147 = p__2146;
var map__2147__$1 = (((((!((map__2147 == null))))?(((((map__2147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2147):map__2147);
var expression = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2147__$1,cljs.core.cst$kw$expression);
var tests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2147__$1,cljs.core.cst$kw$tests);
var or__4131__auto__ = cljs.core.some(((function (map__2147,map__2147__$1,expression,tests){
return (function (p1__2143_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expression,cljs.core.key(p1__2143_SHARP_))){
return cljs.core.val(p1__2143_SHARP_);
} else {
return null;
}
});})(map__2147,map__2147__$1,expression,tests))
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
pluto.reader.blocks.case_block.cljs$lang$applyTo = (function (seq2144){
var G__2145 = cljs.core.first(seq2144);
var seq2144__$1 = cljs.core.next(seq2144);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2145,seq2144__$1);
});

pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$case,(function (_,___$1,___$2,p__2152){
var vec__2153 = p__2152;
var seq__2154 = cljs.core.seq(vec__2153);
var first__2155 = cljs.core.first(seq__2154);
var seq__2154__$1 = cljs.core.next(seq__2154);
var ___$3 = first__2155;
var first__2155__$1 = cljs.core.first(seq__2154__$1);
var seq__2154__$2 = cljs.core.next(seq__2154__$1);
var expression = first__2155__$1;
var clauses = seq__2154__$2;
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses);
var errors = (function (){var G__2156 = null;
if((!(cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__2156,pluto.reader.blocks.invalid_block(cljs.core.cst$sym$case,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reason,cljs.core.cst$kw$tests,cljs.core.cst$kw$data,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs)], null)));
} else {
return G__2156;
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
