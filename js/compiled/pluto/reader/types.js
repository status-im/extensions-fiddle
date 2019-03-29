// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.reader.types');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('pluto.error');
goog.require('pluto.reader.reference');
pluto.reader.types.reference_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$event,null,cljs.core.cst$kw$query,null,cljs.core.cst$kw$view,null], null), null);
if((typeof pluto !== 'undefined') && (typeof pluto.reader !== 'undefined') && (typeof pluto.reader.types !== 'undefined') && (typeof pluto.reader.types.resolve !== 'undefined')){
} else {
/**
 * Resolve a value based on a type.
 * Returns a map of either:
 *  * data with the resolved data
 *  * errors encapsulating all errors generated during resolution
 */
pluto.reader.types.resolve = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__7210 = cljs.core.get_global_hierarchy;
return (fexpr__7210.cljs$core$IFn$_invoke$arity$0 ? fexpr__7210.cljs$core$IFn$_invoke$arity$0() : fexpr__7210.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("pluto.reader.types","resolve"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (ctx,ext,type,value){
if((value instanceof cljs.core.Symbol)){
return cljs.core.cst$kw$symbol;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$one_DASH_of.cljs$core$IFn$_invoke$arity$1(type))){
return cljs.core.cst$kw$one_DASH_of;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$or.cljs$core$IFn$_invoke$arity$1(type))){
return cljs.core.cst$kw$or;
} else {
if((type instanceof cljs.core.Keyword)){
return type;
} else {
if(cljs.core.set_QMARK_(type)){
return cljs.core.cst$kw$subset;
} else {
if(cljs.core.map_QMARK_(type)){
return cljs.core.cst$kw$assoc;
} else {
if(cljs.core.vector_QMARK_(type)){
return cljs.core.cst$kw$sequence;
} else {
return null;
}
}
}
}
}
}
}
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,cljs.core.cst$kw$default,hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$symbol,(function (_,___$1,___$2,value){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,value], null);
}));
pluto.reader.types.invalid_type_value = (function pluto$reader$types$invalid_type_value(type,value){
return pluto.error.syntax.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$pluto$error_SLASH_invalid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$type], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$data,value], null));
});
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$any,(function (_,___$1,___$2,value){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,value], null);
}));
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$boolean,(function (_,___$1,___$2,value){
if(cljs.core.boolean_QMARK_(value)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.types.invalid_type_value(cljs.core.cst$kw$boolean,value)], null)], null);
}
}));
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$number,(function (_,___$1,___$2,value){
if(typeof value === 'number'){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.types.invalid_type_value(cljs.core.cst$kw$number,value)], null)], null);
}
}));
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$string,(function (_,___$1,___$2,value){
if(typeof value === 'string'){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.types.invalid_type_value(cljs.core.cst$kw$string,value)], null)], null);
}
}));
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$keyword,(function (_,___$1,___$2,value){
if((value instanceof cljs.core.Keyword)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.types.invalid_type_value(cljs.core.cst$kw$keyword,value)], null)], null);
}
}));
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vector,(function (_,___$1,___$2,value){
if(cljs.core.vector_QMARK_(value)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.types.invalid_type_value(cljs.core.cst$kw$vector,value)], null)], null);
}
}));
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$map,(function (_,___$1,___$2,value){
if(cljs.core.map_QMARK_(value)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.types.invalid_type_value(cljs.core.cst$kw$map,value)], null)], null);
}
}));
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$subset,(function (_,___$1,type,value){
if(((cljs.core.set_QMARK_(value)) && (clojure.set.subset_QMARK_(value,type)))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.types.invalid_type_value(cljs.core.cst$kw$subset,value)], null)], null);
}
}));
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$sequence,(function (ctx,ext,type,value){
if(((cljs.core.vector_QMARK_(type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(type))) && (cljs.core.map_QMARK_(cljs.core.first(type))))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(pluto.error.merge_results_with,(function (p1__7211_SHARP_,p2__7212_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(p1__7211_SHARP_),p2__7212_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7213_SHARP_){
var G__7214 = ctx;
var G__7215 = ext;
var G__7216 = cljs.core.first(type);
var G__7217 = p1__7213_SHARP_;
return (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(G__7214,G__7215,G__7216,G__7217) : pluto.reader.types.resolve.call(null,G__7214,G__7215,G__7216,G__7217));
}),value));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.error.syntax.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$pluto$error_SLASH_invalid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$type], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$data,value,cljs.core.cst$kw$reason,cljs.core.cst$kw$sequential_DASH_type], null))], null)], null);
}
}));
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$one_DASH_of,(function (_,___$1,p__7218,value){
var map__7219 = p__7218;
var map__7219__$1 = (((((!((map__7219 == null))))?(((((map__7219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7219):map__7219);
var one_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7219__$1,cljs.core.cst$kw$one_DASH_of);
var temp__5718__auto__ = (one_of.cljs$core$IFn$_invoke$arity$1 ? one_of.cljs$core$IFn$_invoke$arity$1(value) : one_of.call(null,value));
if(cljs.core.truth_(temp__5718__auto__)){
var o = temp__5718__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,o], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.types.invalid_type_value(cljs.core.cst$kw$one_DASH_of,value)], null)], null);
}
}));
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$or,(function (ctx,ext,p__7222,value){
var map__7223 = p__7222;
var map__7223__$1 = (((((!((map__7223 == null))))?(((((map__7223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7223):map__7223);
var or = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7223__$1,cljs.core.cst$kw$or);
if(cljs.core.coll_QMARK_(or)){
var temp__5718__auto__ = cljs.core.some(((function (map__7223,map__7223__$1,or){
return (function (p1__7221_SHARP_){
var temp__5720__auto__ = (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(ctx,ext,p1__7221_SHARP_,value) : pluto.reader.types.resolve.call(null,ctx,ext,p1__7221_SHARP_,value));
if(cljs.core.truth_(temp__5720__auto__)){
var map__7225 = temp__5720__auto__;
var map__7225__$1 = (((((!((map__7225 == null))))?(((((map__7225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7225):map__7225);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7225__$1,cljs.core.cst$kw$data);
return data;
} else {
return null;
}
});})(map__7223,map__7223__$1,or))
,or);
if(cljs.core.truth_(temp__5718__auto__)){
var o = temp__5718__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,o], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.types.invalid_type_value(cljs.core.cst$kw$or,value)], null)], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.types.invalid_type_value(cljs.core.cst$kw$or,value)], null)], null);
}
}));
pluto.reader.types.sentinel = cljs.core.cst$kw$pluto$reader$types_SLASH_sentinel;
pluto.reader.types.property = (function pluto$reader$types$property(name,value){
var normalized_name = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.name(name),"?",""));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,cljs.core.get.cljs$core$IFn$_invoke$arity$3(value,normalized_name,pluto.reader.types.sentinel),cljs.core.cst$kw$name,normalized_name,cljs.core.cst$kw$optional_QMARK_,cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(name,normalized_name)], null);
});
pluto.reader.types.resolve_property = (function pluto$reader$types$resolve_property(ctx,ext,m,p__7228,type){
var map__7229 = p__7228;
var map__7229__$1 = (((((!((map__7229 == null))))?(((((map__7229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7229):map__7229);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7229__$1,cljs.core.cst$kw$name);
var optional_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7229__$1,cljs.core.cst$kw$optional_QMARK_);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7229__$1,cljs.core.cst$kw$value);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(pluto.reader.types.sentinel,value)){
var map__7231 = (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(ctx,ext,type,value) : pluto.reader.types.resolve.call(null,ctx,ext,type,value));
var map__7231__$1 = (((((!((map__7231 == null))))?(((((map__7231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7231):map__7231);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7231__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7231__$1,cljs.core.cst$kw$errors);
return pluto.error.merge_result.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(data)?cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,name], null),data):m),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,errors], null));
} else {
if(cljs.core.truth_(optional_QMARK_)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$data,((function (map__7229,map__7229__$1,name,optional_QMARK_,value){
return (function (p1__7227_SHARP_){
if(cljs.core.empty_QMARK_(p1__7227_SHARP_)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return p1__7227_SHARP_;
}
});})(map__7229,map__7229__$1,name,optional_QMARK_,value))
);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.error.syntax.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$pluto$error_SLASH_invalid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$type], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reason,cljs.core.cst$kw$missing_DASH_property,cljs.core.cst$kw$data,name], null))], null));
}
}
});
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$assoc,(function (ctx,ext,type,value){
if(cljs.core.map_QMARK_(type)){
return cljs.core.reduce_kv((function (p1__7233_SHARP_,p2__7234_SHARP_,p3__7235_SHARP_){
return pluto.reader.types.resolve_property(ctx,ext,p1__7233_SHARP_,pluto.reader.types.property(p2__7234_SHARP_,value),p3__7235_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,type);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.error.syntax.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$pluto$error_SLASH_invalid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$type], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$data,value,cljs.core.cst$kw$reason,cljs.core.cst$kw$assoc_DASH_type], null))], null)], null);
}
}));
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$query,(function (p__7236,ext,type,p__7237){
var map__7238 = p__7236;
var map__7238__$1 = (((((!((map__7238 == null))))?(((((map__7238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7238):map__7238);
var ctx = map__7238__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7238__$1,cljs.core.cst$kw$env);
var vec__7239 = p__7237;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7239,(0),null);
var arguments$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7239,(1),null);
var value = vec__7239;
var map__7243 = pluto.reader.reference.resolve(ctx,ext,type,value);
var map__7243__$1 = (((((!((map__7243 == null))))?(((((map__7243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7243):map__7243);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7243__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7243__$1,cljs.core.cst$kw$errors);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(data)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,(cljs.core.truth_(arguments$)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [data,env,arguments$], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [data,env], null))], null):null),(cljs.core.truth_(errors)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.error.syntax.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$pluto$error_SLASH_invalid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$type], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reason,cljs.core.cst$kw$unknown_DASH_query,cljs.core.cst$kw$data,name], null))], null),errors)], null):null)], 0));
}));
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (_,___$1,type,value){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.error.syntax.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$pluto$error_SLASH_invalid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$type], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,type], null),(cljs.core.truth_(value)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,value], null):null)], 0)))], null)], null);
}));
