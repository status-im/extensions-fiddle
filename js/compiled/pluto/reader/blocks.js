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
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__3047 = cljs.core.get_global_hierarchy;
return (fexpr__3047.cljs$core$IFn$_invoke$arity$0 ? fexpr__3047.cljs$core$IFn$_invoke$arity$0() : fexpr__3047.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("pluto.reader.blocks","parse"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (ctx,ext,parent,p__3048){
var vec__3049 = p__3048;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3049,(0),null);
return type;
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,cljs.core.cst$kw$default,hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
pluto.reader.blocks.interpolate = (function pluto$reader$blocks$interpolate(ctx,m,v){
var map__3052 = pluto.utils.interpolate(m,v);
var map__3052__$1 = (((((!((map__3052 == null))))?(((((map__3052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3052):map__3052);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3052__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3052__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
return pluto.log.fire_BANG_(ctx,cljs.core.cst$kw$pluto$log_SLASH_error,cljs.core.cst$kw$query_SLASH_interpolation,errors);
} else {
return data;
}
});
pluto.reader.blocks.substitute_query_values = (function pluto$reader$blocks$substitute_query_values(ctx,m,v){
return clojure.walk.prewalk((function (p1__3054_SHARP_){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,p1__3054_SHARP_);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = ((typeof p1__3054_SHARP_ === 'string')?pluto.reader.blocks.interpolate(ctx,m,p1__3054_SHARP_):null);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return p1__3054_SHARP_;
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
pluto.reader.blocks.resolve_rhs = (function pluto$reader$blocks$resolve_rhs(p__3055,env,v){
var map__3056 = p__3055;
var map__3056__$1 = (((((!((map__3056 == null))))?(((((map__3056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3056):map__3056);
var ctx = map__3056__$1;
var query_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3056__$1,cljs.core.cst$kw$query_DASH_fn);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.cst$sym$properties)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$pluto$reader_SLASH_properties);
} else {
if((v instanceof cljs.core.Symbol)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,v);
} else {
if(pluto.reader.blocks.query_QMARK_(v)){
if(cljs.core.fn_QMARK_(query_fn)){
var temp__5457__auto__ = (function (){var G__3058 = ctx;
var G__3059 = pluto.reader.blocks.substitute_query_values(ctx,env,v);
return (query_fn.cljs$core$IFn$_invoke$arity$2 ? query_fn.cljs$core$IFn$_invoke$arity$2(G__3058,G__3059) : query_fn.call(null,G__3058,G__3059));
})();
if(cljs.core.truth_(temp__5457__auto__)){
var signal = temp__5457__auto__;
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__3060_SHARP_,p2__3061_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(pluto.reader.blocks.resolve_binding,ctx,p1__3060_SHARP_,p2__3061_SHARP_);
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
return (function (p1__3062_SHARP_,p2__3063_SHARP_){
var G__3064 = p1__3062_SHARP_;
var G__3065 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p2__3063_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$env,values], null)], 0));
return (o.cljs$core$IFn$_invoke$arity$2 ? o.cljs$core$IFn$_invoke$arity$2(G__3064,G__3065) : o.call(null,G__3064,G__3065));
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

pluto.reader.blocks.let_block = (function pluto$reader$blocks$let_block(p__3068,children){
var map__3069 = p__3068;
var map__3069__$1 = (((((!((map__3069 == null))))?(((((map__3069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3069):map__3069);
var ctx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3069__$1,cljs.core.cst$kw$ctx);
var prev_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3069__$1,cljs.core.cst$kw$prev_DASH_env);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3069__$1,cljs.core.cst$kw$bindings);
var new_env = pluto.reader.blocks.resolve_bindings_into(ctx,prev_env,bindings);
return pluto.reader.blocks.walkup_upto_leaf(((function (new_env,map__3069,map__3069__$1,ctx,prev_env,bindings){
return (function (p1__3066_SHARP_){
return pluto.reader.blocks.replace_atom(ctx,new_env,p1__3066_SHARP_);
});})(new_env,map__3069,map__3069__$1,ctx,prev_env,bindings))
,((function (new_env,map__3069,map__3069__$1,ctx,prev_env,bindings){
return (function (p1__3067_SHARP_){
var and__4120__auto__ = cljs.core.vector_QMARK_(p1__3067_SHARP_);
if(and__4120__auto__){
var G__3074 = cljs.core.first(p1__3067_SHARP_);
var fexpr__3073 = cljs.core.PersistentHashSet.createAsIfByAssoc([pluto.reader.blocks.for_block,pluto.reader.blocks.let_block]);
return (fexpr__3073.cljs$core$IFn$_invoke$arity$1 ? fexpr__3073.cljs$core$IFn$_invoke$arity$1(G__3074) : fexpr__3073.call(null,G__3074));
} else {
return and__4120__auto__;
}
});})(new_env,map__3069,map__3069__$1,ctx,prev_env,bindings))
,((function (new_env,map__3069,map__3069__$1,ctx,prev_env,bindings){
return (function (p__3075){
var vec__3076 = p__3075;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3076,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3076,(1),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3076,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,cljs.core.cst$kw$prev_DASH_env,new_env),children__$1], null);
});})(new_env,map__3069,map__3069__$1,ctx,prev_env,bindings))
,children);
});
pluto.reader.blocks.for_block = (function pluto$reader$blocks$for_block(p__3079,children){
var map__3080 = p__3079;
var map__3080__$1 = (((((!((map__3080 == null))))?(((((map__3080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3080):map__3080);
var ctx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3080__$1,cljs.core.cst$kw$ctx);
var prev_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3080__$1,cljs.core.cst$kw$prev_DASH_env);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3080__$1,cljs.core.cst$kw$bindings);
var vec__3082 = bindings;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3082,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3082,(1),null);
var for_values = pluto.reader.blocks.resolve_rhs(ctx,prev_env,v);
if(cljs.core.sequential_QMARK_(for_values)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,(function (){var iter__4523__auto__ = ((function (vec__3082,k,v,for_values,map__3080,map__3080__$1,ctx,prev_env,bindings){
return (function pluto$reader$blocks$for_block_$_iter__3085(s__3086){
return (new cljs.core.LazySeq(null,((function (vec__3082,k,v,for_values,map__3080,map__3080__$1,ctx,prev_env,bindings){
return (function (){
var s__3086__$1 = s__3086;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__3086__$1);
if(temp__5457__auto__){
var s__3086__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__3086__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__3086__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__3088 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__3087 = (0);
while(true){
if((i__3087 < size__4522__auto__)){
var val = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__3087);
cljs.core.chunk_append(b__3088,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.let_block,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ctx,ctx,cljs.core.cst$kw$prev_DASH_env,prev_env,cljs.core.cst$kw$bindings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,val], null)], null),children], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,val], null)));

var G__3089 = (i__3087 + (1));
i__3087 = G__3089;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__3088),pluto$reader$blocks$for_block_$_iter__3085(cljs.core.chunk_rest(s__3086__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__3088),null);
}
} else {
var val = cljs.core.first(s__3086__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.let_block,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ctx,ctx,cljs.core.cst$kw$prev_DASH_env,prev_env,cljs.core.cst$kw$bindings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,val], null)], null),children], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,val], null)),pluto$reader$blocks$for_block_$_iter__3085(cljs.core.rest(s__3086__$2)));
}
} else {
return null;
}
break;
}
});})(vec__3082,k,v,for_values,map__3080,map__3080__$1,ctx,prev_env,bindings))
,null,null));
});})(vec__3082,k,v,for_values,map__3080,map__3080__$1,ctx,prev_env,bindings))
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
if(cljs.core.seqable_QMARK_(bindings)){
return cljs.core.even_QMARK_(cljs.core.count(bindings));
} else {
return null;
}
});
pluto.reader.blocks.resolve_and_validate_queries = (function pluto$reader$blocks$resolve_and_validate_queries(ctx,ext,bindings){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (accum,p__3090){
var vec__3091 = p__3090;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3091,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3091,(1),null);
if(cljs.core.vector_QMARK_(v)){
var map__3094 = (function (){var G__3095 = ctx;
var G__3096 = ext;
var G__3097 = cljs.core.cst$kw$query;
var G__3098 = v;
return (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(G__3095,G__3096,G__3097,G__3098) : pluto.reader.types.resolve.call(null,G__3095,G__3096,G__3097,G__3098));
})();
var map__3094__$1 = (((((!((map__3094 == null))))?(((((map__3094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3094):map__3094);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3094__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3094__$1,cljs.core.cst$kw$errors);
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
if(cljs.core.truth_(pluto.reader.blocks.valid_bindings_form_QMARK_(bindings))){
return cljs.core.not_empty((function (){var binding_pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (binding_pairs){
return (function (p1__3101_SHARP_){
return pluto.reader.blocks.invalid_block(cljs.core.cst$sym$let,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,p1__3101_SHARP_,cljs.core.cst$kw$reason,cljs.core.cst$kw$bindings], null));
});})(binding_pairs))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (binding_pairs){
return (function (p1__3100_SHARP_){
return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pluto.reader.blocks.valid_bindings_QMARK_,p1__3100_SHARP_));
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
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$let,(function (ctx,ext,_,p__3102){
var vec__3103 = p__3102;
var seq__3104 = cljs.core.seq(vec__3103);
var first__3105 = cljs.core.first(seq__3104);
var seq__3104__$1 = cljs.core.next(seq__3104);
var ___$1 = first__3105;
var first__3105__$1 = cljs.core.first(seq__3104__$1);
var seq__3104__$2 = cljs.core.next(seq__3104__$1);
var bindings = first__3105__$1;
var body = seq__3104__$2;
if((!(pluto.reader.blocks.valid_let_block_QMARK_(body)))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.invalid_block(cljs.core.cst$sym$let,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,body,cljs.core.cst$kw$reason,cljs.core.cst$kw$body], null))], null)], null);
} else {
var binding_errors = pluto.reader.blocks.validate_bindings(bindings);
if(cljs.core.truth_(cljs.core.not_empty(binding_errors))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,binding_errors], null);
} else {
var map__3106 = pluto.reader.blocks.resolve_and_validate_queries(ctx,ext,bindings);
var map__3106__$1 = (((((!((map__3106 == null))))?(((((map__3106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3106):map__3106);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3106__$1,cljs.core.cst$kw$errors);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3106__$1,cljs.core.cst$kw$data);
if(cljs.core.truth_(cljs.core.not_empty(errors))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,errors], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.let_block,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ctx,ctx,cljs.core.cst$kw$bindings,data], null),cljs.core.last(body)], null)], null);
}
}
}
}));
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$for,(function (ctx,ext,_,p__3108){
var vec__3109 = p__3108;
var seq__3110 = cljs.core.seq(vec__3109);
var first__3111 = cljs.core.first(seq__3110);
var seq__3110__$1 = cljs.core.next(seq__3110);
var ___$1 = first__3111;
var first__3111__$1 = cljs.core.first(seq__3110__$1);
var seq__3110__$2 = cljs.core.next(seq__3110__$1);
var binding = first__3111__$1;
var body = seq__3110__$2;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(body))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.invalid_block(cljs.core.cst$sym$for,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,body,cljs.core.cst$kw$reason,cljs.core.cst$kw$body], null))], null)], null);
} else {
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(binding))) || (cljs.core.not((function (){var G__3115 = cljs.core.first(binding);
var fexpr__3114 = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,cljs.core.map_QMARK_);
return (fexpr__3114.cljs$core$IFn$_invoke$arity$1 ? fexpr__3114.cljs$core$IFn$_invoke$arity$1(G__3115) : fexpr__3114.call(null,G__3115));
})())))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.invalid_block(cljs.core.cst$sym$for,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,binding,cljs.core.cst$kw$reason,cljs.core.cst$kw$bindings], null))], null)], null);
} else {
var map__3116 = pluto.reader.blocks.resolve_and_validate_queries(ctx,ext,binding);
var map__3116__$1 = (((((!((map__3116 == null))))?(((((map__3116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3116):map__3116);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3116__$1,cljs.core.cst$kw$errors);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3116__$1,cljs.core.cst$kw$data);
if(cljs.core.truth_(cljs.core.not_empty(errors))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,errors], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.for_block,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ctx,ctx,cljs.core.cst$kw$bindings,data], null),cljs.core.last(body)], null)], null);
}

}
}
}));
pluto.reader.blocks.when_block = (function pluto$reader$blocks$when_block(p__3118,body){
var map__3119 = p__3118;
var map__3119__$1 = (((((!((map__3119 == null))))?(((((map__3119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3119):map__3119);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3119__$1,cljs.core.cst$kw$test);
if(cljs.core.truth_(test)){
return body;
} else {
return null;
}
});
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$when,(function (_,___$1,___$2,p__3121){
var vec__3122 = p__3121;
var seq__3123 = cljs.core.seq(vec__3122);
var first__3124 = cljs.core.first(seq__3123);
var seq__3123__$1 = cljs.core.next(seq__3123);
var ___$3 = first__3124;
var first__3124__$1 = cljs.core.first(seq__3123__$1);
var seq__3123__$2 = cljs.core.next(seq__3123__$1);
var test = first__3124__$1;
var body = seq__3123__$2;
var parts = vec__3122;
var errors = (function (){var G__3125 = null;
var G__3125__$1 = (((!((test instanceof cljs.core.Symbol))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__3125,pluto.reader.blocks.invalid_block(cljs.core.cst$sym$when,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,test,cljs.core.cst$kw$reason,cljs.core.cst$kw$invalid_DASH_test_DASH_type], null))):G__3125);
if(cljs.core.empty_QMARK_(body)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__3125__$1,pluto.reader.blocks.invalid_block(cljs.core.cst$sym$when,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,parts,cljs.core.cst$kw$reason,cljs.core.cst$kw$empty_DASH_body_DASH_clause], null)));
} else {
return G__3125__$1;
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
var len__4730__auto___3131 = arguments.length;
var i__4731__auto___3132 = (0);
while(true){
if((i__4731__auto___3132 < len__4730__auto___3131)){
args__4736__auto__.push((arguments[i__4731__auto___3132]));

var G__3133 = (i__4731__auto___3132 + (1));
i__4731__auto___3132 = G__3133;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return pluto.reader.blocks.if_block.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

pluto.reader.blocks.if_block.cljs$core$IFn$_invoke$arity$variadic = (function (p__3128,body){
var map__3129 = p__3128;
var map__3129__$1 = (((((!((map__3129 == null))))?(((((map__3129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3129):map__3129);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3129__$1,cljs.core.cst$kw$test);
if(cljs.core.truth_(test)){
return cljs.core.first(body);
} else {
return cljs.core.second(body);
}
});

pluto.reader.blocks.if_block.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
pluto.reader.blocks.if_block.cljs$lang$applyTo = (function (seq3126){
var G__3127 = cljs.core.first(seq3126);
var seq3126__$1 = cljs.core.next(seq3126);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3127,seq3126__$1);
});

pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$if,(function (_,___$1,___$2,p__3134){
var vec__3135 = p__3134;
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3135,(0),null);
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3135,(1),null);
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3135,(2),null);
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3135,(3),null);
var parts = vec__3135;
var parts_count = cljs.core.count(cljs.core.rest(parts));
var errors = (function (){var G__3138 = null;
var G__3138__$1 = (((!((test instanceof cljs.core.Symbol))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__3138,pluto.reader.blocks.invalid_block(cljs.core.cst$sym$if,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reason,cljs.core.cst$kw$test,cljs.core.cst$kw$data,test], null))):G__3138);
var G__3138__$2 = ((((3) < parts_count))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__3138__$1,pluto.reader.blocks.invalid_block(cljs.core.cst$sym$if,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reason,cljs.core.cst$kw$too_DASH_many_DASH_clauses,cljs.core.cst$kw$data,parts], null))):G__3138__$1);
if(((3) > parts_count)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__3138__$2,pluto.reader.blocks.invalid_block(cljs.core.cst$sym$if,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reason,cljs.core.cst$kw$three_DASH_clauses_DASH_required,cljs.core.cst$kw$data,parts], null)));
} else {
return G__3138__$2;
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
var len__4730__auto___3145 = arguments.length;
var i__4731__auto___3146 = (0);
while(true){
if((i__4731__auto___3146 < len__4730__auto___3145)){
args__4736__auto__.push((arguments[i__4731__auto___3146]));

var G__3147 = (i__4731__auto___3146 + (1));
i__4731__auto___3146 = G__3147;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return pluto.reader.blocks.case_block.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

pluto.reader.blocks.case_block.cljs$core$IFn$_invoke$arity$variadic = (function (p__3142,results){
var map__3143 = p__3142;
var map__3143__$1 = (((((!((map__3143 == null))))?(((((map__3143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3143):map__3143);
var expression = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3143__$1,cljs.core.cst$kw$expression);
var tests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3143__$1,cljs.core.cst$kw$tests);
var or__4131__auto__ = cljs.core.some(((function (map__3143,map__3143__$1,expression,tests){
return (function (p1__3139_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expression,cljs.core.key(p1__3139_SHARP_))){
return cljs.core.val(p1__3139_SHARP_);
} else {
return null;
}
});})(map__3143,map__3143__$1,expression,tests))
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
pluto.reader.blocks.case_block.cljs$lang$applyTo = (function (seq3140){
var G__3141 = cljs.core.first(seq3140);
var seq3140__$1 = cljs.core.next(seq3140);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3141,seq3140__$1);
});

pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$case,(function (_,___$1,___$2,p__3148){
var vec__3149 = p__3148;
var seq__3150 = cljs.core.seq(vec__3149);
var first__3151 = cljs.core.first(seq__3150);
var seq__3150__$1 = cljs.core.next(seq__3150);
var ___$3 = first__3151;
var first__3151__$1 = cljs.core.first(seq__3150__$1);
var seq__3150__$2 = cljs.core.next(seq__3150__$1);
var expression = first__3151__$1;
var clauses = seq__3150__$2;
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses);
var errors = (function (){var G__3152 = null;
if((!(cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__3152,pluto.reader.blocks.invalid_block(cljs.core.cst$sym$case,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reason,cljs.core.cst$kw$tests,cljs.core.cst$kw$data,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs)], null)));
} else {
return G__3152;
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
