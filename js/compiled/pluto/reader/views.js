// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.reader.views');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('cljs.spec.alpha');
goog.require('reagent.core');
goog.require('pluto.error');
goog.require('pluto.log');
goog.require('pluto.reader.blocks');
goog.require('pluto.reader.reference');
goog.require('pluto.reader.types');
goog.require('pluto.utils');
cljs.spec.alpha.def_impl(cljs.core.cst$kw$pluto$reader$views_SLASH_form,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$string,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$kw$number,cljs.core.cst$sym$cljs$core_SLASH_number_QMARK_,cljs.core.cst$kw$symbol,cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_,cljs.core.cst$kw$element,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$kw$block,cljs.core.cst$sym$cljs$core_SLASH_list_QMARK_),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string,cljs.core.cst$kw$number,cljs.core.cst$kw$symbol,cljs.core.cst$kw$element,cljs.core.cst$kw$block], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_number_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_list_QMARK_], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.number_QMARK_,cljs.core.symbol_QMARK_,cljs.core.vector_QMARK_,cljs.core.list_QMARK_], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$pluto$reader$views_SLASH_property_DASH_map,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$sym$keyword_QMARK_,cljs.core.cst$sym$any_QMARK_),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,cljs.core.any_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__1575){
return cljs.core.map_QMARK_(G__1575);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__365__auto__,v__366__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__366__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$pluto$reader$views_SLASH_element,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$tag,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$symbol,cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_,cljs.core.cst$kw$fn,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_),cljs.core.cst$kw$attrs,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_),cljs.core.cst$kw$children,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_,cljs.core.cst$kw$pluto$reader$views_SLASH_form)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tag,cljs.core.cst$kw$attrs,cljs.core.cst$kw$children], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$symbol,cljs.core.cst$kw$fn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,cljs.core.fn_QMARK_], null),null),cljs.spec.alpha.maybe_impl(cljs.core.map_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_),cljs.spec.alpha.rep_impl(cljs.core.cst$kw$pluto$reader$views_SLASH_form,cljs.core.cst$kw$pluto$reader$views_SLASH_form)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$symbol,cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_,cljs.core.cst$kw$fn,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_,cljs.core.cst$kw$pluto$reader$views_SLASH_form)], null)));
pluto.reader.views.parse_hiccup_children = (function pluto$reader$views$parse_hiccup_children(ctx,ext,parent,children){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__1577_SHARP_,p2__1576_SHARP_){
var map__1578 = (pluto.reader.views.parse.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.views.parse.cljs$core$IFn$_invoke$arity$4(ctx,ext,parent,p2__1576_SHARP_) : pluto.reader.views.parse.call(null,ctx,ext,parent,p2__1576_SHARP_));
var map__1578__$1 = (((((!((map__1578 == null))))?(((((map__1578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1578):map__1578);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1578__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1578__$1,cljs.core.cst$kw$errors);
return pluto.error.merge_result.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__1577_SHARP_,cljs.core.cst$kw$data,cljs.core.conj,data),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,errors], null));
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.PersistentVector.EMPTY], null),children);
});
pluto.reader.views.component_QMARK_ = (function pluto$reader$views$component_QMARK_(o){
return (o instanceof cljs.core.Symbol);
});
pluto.reader.views.block_QMARK_ = (function pluto$reader$views$block_QMARK_(o){
return cljs.core.fn_QMARK_(o);
});
pluto.reader.views.resolve_component = (function pluto$reader$views$resolve_component(ctx,ext,p__1580){
var vec__1581 = p__1580;
var element = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1581,(0),null);
var o = vec__1581;
if(pluto.reader.views.block_QMARK_(element)){
return element;
} else {
if((element instanceof cljs.core.Symbol)){
var or__4131__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$capacities,cljs.core.cst$kw$components,element,cljs.core.cst$kw$data], null));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1((function (){var G__1584 = ctx;
var G__1585 = ext;
var G__1586 = cljs.core.cst$kw$view;
var G__1587 = o;
return (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(G__1584,G__1585,G__1586,G__1587) : pluto.reader.types.resolve.call(null,G__1584,G__1585,G__1586,G__1587));
})());
}
} else {
return null;
}
}
});
if((typeof pluto !== 'undefined') && (typeof pluto.reader !== 'undefined') && (typeof pluto.reader.views !== 'undefined') && (typeof pluto.reader.views.resolve_default_component_properties !== 'undefined')){
} else {
/**
 * Resolve default properties available for all components.
 */
pluto.reader.views.resolve_default_component_properties = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__1588 = cljs.core.get_global_hierarchy;
return (fexpr__1588.cljs$core$IFn$_invoke$arity$0 ? fexpr__1588.cljs$core$IFn$_invoke$arity$0() : fexpr__1588.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("pluto.reader.views","resolve-default-component-properties"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (property,value){
return property;
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,cljs.core.cst$kw$default,hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
pluto.reader.views.resolve_default_component_properties.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$style,(function (_,value){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,value], null);
}));
pluto.reader.views.resolve_default_component_properties.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (_,___$1){
return null;
}));
pluto.reader.views.resolve_custom_component_properties = (function pluto$reader$views$resolve_custom_component_properties(ctx,ext,component,k,v){
var temp__5718__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$capacities,cljs.core.cst$kw$components,component,cljs.core.cst$kw$properties,k], null));
if(cljs.core.truth_(temp__5718__auto__)){
var type = temp__5718__auto__;
if(cljs.core.not((function (){var and__4120__auto__ = (pluto.reader.types.reference_types.cljs$core$IFn$_invoke$arity$1 ? pluto.reader.types.reference_types.cljs$core$IFn$_invoke$arity$1(type) : pluto.reader.types.reference_types.call(null,type));
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not((function (){var fexpr__1589 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$event,null,cljs.core.cst$kw$view,null], null), null);
return (fexpr__1589.cljs$core$IFn$_invoke$arity$1 ? fexpr__1589.cljs$core$IFn$_invoke$arity$1(type) : fexpr__1589.call(null,type));
})());
} else {
return and__4120__auto__;
}
})())){
if((!((v instanceof cljs.core.Symbol)))){
var map__1590 = (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(ctx,ext,type,v) : pluto.reader.types.resolve.call(null,ctx,ext,type,v));
var map__1590__$1 = (((((!((map__1590 == null))))?(((((map__1590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1590):map__1590);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1590__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1590__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,errors], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,data], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,v], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.error.syntax.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$pluto$error_SLASH_invalid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$view], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$reason,cljs.core.cst$kw$component_DASH_property_DASH_type,cljs.core.cst$kw$component,component,cljs.core.cst$kw$property,k,cljs.core.cst$kw$type,type], null))], null)], null);
}
} else {
if(cljs.core.truth_((function (){var G__1592 = ctx;
var G__1593 = ext;
var G__1594 = cljs.core.cst$kw$view;
var G__1595 = v;
return (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(G__1592,G__1593,G__1594,G__1595) : pluto.reader.types.resolve.call(null,G__1592,G__1593,G__1594,G__1595));
})())){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,v], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.error.syntax.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$pluto$error_SLASH_invalid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$view], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$reason,cljs.core.cst$kw$unknown_DASH_component_DASH_property,cljs.core.cst$kw$component,component,cljs.core.cst$kw$property,k], null))], null)], null);
}
}
});
pluto.reader.views.resolve_component_property = (function pluto$reader$views$resolve_component_property(ctx,ext,component,k,v){
var or__4131__auto__ = (pluto.reader.views.resolve_default_component_properties.cljs$core$IFn$_invoke$arity$2 ? pluto.reader.views.resolve_default_component_properties.cljs$core$IFn$_invoke$arity$2(k,v) : pluto.reader.views.resolve_default_component_properties.call(null,k,v));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return pluto.reader.views.resolve_custom_component_properties(ctx,ext,component,k,v);
}
});
pluto.reader.views.resolve_property = (function pluto$reader$views$resolve_property(ctx,ext,component,k,v){
if(pluto.reader.views.component_QMARK_(component)){
return pluto.reader.views.resolve_component_property(ctx,ext,component,k,v);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,v], null);
}
});
pluto.reader.views.resolve_component_properties = (function pluto$reader$views$resolve_component_properties(ctx,ext,component,properties){
var temp__5718__auto__ = cljs.spec.alpha.explain_data(cljs.core.cst$kw$pluto$reader$views_SLASH_property_DASH_map,properties);
if(cljs.core.truth_(temp__5718__auto__)){
var explain = temp__5718__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.error.syntax.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$pluto$error_SLASH_invalid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$view], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$reason,cljs.core.cst$kw$property_DASH_map,cljs.core.cst$kw$data,properties,cljs.core.cst$kw$explain_DASH_data,explain], null))], null)], null);
} else {
return cljs.core.reduce_kv(((function (temp__5718__auto__){
return (function (acc,k,v){
var map__1596 = pluto.reader.views.resolve_property(ctx,ext,component,k,v);
var map__1596__$1 = (((((!((map__1596 == null))))?(((((map__1596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1596):map__1596);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1596__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1596__$1,cljs.core.cst$kw$errors);
return pluto.error.merge_result.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$5(acc,cljs.core.cst$kw$data,cljs.core.assoc,k,data),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,errors], null));
});})(temp__5718__auto__))
,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$errors,cljs.core.PersistentVector.EMPTY], null),properties);
}
});
pluto.reader.views.resolve_properties_children = (function pluto$reader$views$resolve_properties_children(p__1598){
var vec__1599 = p__1598;
var seq__1600 = cljs.core.seq(vec__1599);
var first__1601 = cljs.core.first(seq__1600);
var seq__1600__$1 = cljs.core.next(seq__1600);
var properties_QMARK_ = first__1601;
var children = seq__1600__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var and__4120__auto__ = cljs.core.map_QMARK_(properties_QMARK_);
if(and__4120__auto__){
return properties_QMARK_;
} else {
return and__4120__auto__;
}
})(),((cljs.core.map_QMARK_(properties_QMARK_))?children:(((!((properties_QMARK_ == null))))?cljs.core.cons(properties_QMARK_,children):children
))], null);
});
pluto.reader.views.parse_hiccup_element = (function pluto$reader$views$parse_hiccup_element(ctx,ext,parent_ctx,o){
var explain = ((cljs.core.vector_QMARK_(o))?cljs.spec.alpha.explain_data(cljs.core.cst$kw$pluto$reader$views_SLASH_element,o):cljs.spec.alpha.explain_data(cljs.core.cst$kw$pluto$reader$views_SLASH_form,o));
if((!((explain == null)))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.error.syntax.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$pluto$error_SLASH_invalid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$view], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,o,cljs.core.cst$kw$explain_DASH_data,explain], null))], null)], null);
} else {
if((((o instanceof cljs.core.Symbol)) || (pluto.utils.primitive_QMARK_(o)))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,o], null);
} else {
if(cljs.core.vector_QMARK_(o)){
var vec__1603 = o;
var seq__1604 = cljs.core.seq(vec__1603);
var first__1605 = cljs.core.first(seq__1604);
var seq__1604__$1 = cljs.core.next(seq__1604);
var element = first__1605;
var properties_children = seq__1604__$1;
var component = pluto.reader.views.resolve_component(ctx,ext,o);
var vec__1606 = pluto.reader.views.resolve_properties_children(properties_children);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1606,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1606,(1),null);
var map__1609 = (cljs.core.truth_(properties)?pluto.reader.views.resolve_component_properties(ctx,ext,element,properties):null);
var map__1609__$1 = (((((!((map__1609 == null))))?(((((map__1609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1609):map__1609);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1609__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1609__$1,cljs.core.cst$kw$errors);
return pluto.error.merge_result.cljs$core$IFn$_invoke$arity$2((function (){var m = pluto.reader.views.parse_hiccup_children(ctx,ext,o,children);
if(cljs.core.truth_(component)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$data,((function (m,vec__1603,seq__1604,first__1605,seq__1604__$1,element,properties_children,component,vec__1606,properties,children,map__1609,map__1609__$1,data,errors,explain){
return (function (p1__1602_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,(cljs.core.truth_(data)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,data], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null)),p1__1602_SHARP_);
});})(m,vec__1603,seq__1604,first__1605,seq__1604__$1,element,properties_children,component,vec__1606,properties,children,map__1609,map__1609__$1,data,errors,explain))
);
} else {
return m;
}
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,cljs.core.concat.cljs$core$IFn$_invoke$arity$2((((component == null))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.error.syntax.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$pluto$error_SLASH_unknown,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$view], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,o,cljs.core.cst$kw$type,cljs.core.cst$kw$component], null))], null):null),errors)], null));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.error.syntax.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$pluto$error_SLASH_unknown,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$view], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,o,cljs.core.cst$kw$type,cljs.core.cst$kw$component], null))], null)], null);

}
}
}
});
pluto.reader.views.unresolved_properties = (function pluto$reader$views$unresolved_properties(acc,o){
if((o instanceof cljs.core.Symbol)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,o);
} else {
if(cljs.core.map_QMARK_(o)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__1611_SHARP_,p2__1612_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,p1__1611_SHARP_,(pluto.reader.views.unresolved_properties.cljs$core$IFn$_invoke$arity$2 ? pluto.reader.views.unresolved_properties.cljs$core$IFn$_invoke$arity$2(acc,p2__1612_SHARP_) : pluto.reader.views.unresolved_properties.call(null,acc,p2__1612_SHARP_)));
}),acc,cljs.core.vals(o));
} else {
if(cljs.core.vector_QMARK_(o)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__1613_SHARP_,p2__1614_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,p1__1613_SHARP_,(pluto.reader.views.unresolved_properties.cljs$core$IFn$_invoke$arity$2 ? pluto.reader.views.unresolved_properties.cljs$core$IFn$_invoke$arity$2(acc,p2__1614_SHARP_) : pluto.reader.views.unresolved_properties.call(null,acc,p2__1614_SHARP_)));
}),acc,o);
} else {
return acc;

}
}
}
});
pluto.reader.views.event__GT_fn = (function pluto$reader$views$event__GT_fn(ctx,ext,event,f){
return (function() { 
var G__1622__delegate = function (o){
if(cljs.core.truth_(event)){
var map__1615 = (function (){var G__1616 = ctx;
var G__1617 = ext;
var G__1618 = cljs.core.cst$kw$event;
var G__1619 = event;
return (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(G__1616,G__1617,G__1618,G__1619) : pluto.reader.types.resolve.call(null,G__1616,G__1617,G__1618,G__1619));
})();
var map__1615__$1 = (((((!((map__1615 == null))))?(((((map__1615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1615):map__1615);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1615__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1615__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(data)){
var G__1621 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,o);
return (data.cljs$core$IFn$_invoke$arity$1 ? data.cljs$core$IFn$_invoke$arity$1(G__1621) : data.call(null,G__1621));
} else {
return null;
}
} else {
return null;
}
};
var G__1622 = function (var_args){
var o = null;
if (arguments.length > 0) {
var G__1623__i = 0, G__1623__a = new Array(arguments.length -  0);
while (G__1623__i < G__1623__a.length) {G__1623__a[G__1623__i] = arguments[G__1623__i + 0]; ++G__1623__i;}
  o = new cljs.core.IndexedSeq(G__1623__a,0,null);
} 
return G__1622__delegate.call(this,o);};
G__1622.cljs$lang$maxFixedArity = 0;
G__1622.cljs$lang$applyTo = (function (arglist__1624){
var o = cljs.core.seq(arglist__1624);
return G__1622__delegate(o);
});
G__1622.cljs$core$IFn$_invoke$arity$variadic = G__1622__delegate;
return G__1622;
})()
;
});
pluto.reader.views.default_logger = (function pluto$reader$views$default_logger(ctx,error,info){
return pluto.log.fire_BANG_(ctx,cljs.core.cst$kw$pluto$log_SLASH_error,cljs.core.cst$kw$view,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,error,cljs.core.cst$kw$info,info], null));
});
pluto.reader.views.error_boundary = (function pluto$reader$views$error_boundary(ctx,component){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display_DASH_name,"error-boundary-wrapper",cljs.core.cst$kw$component_DASH_did_DASH_catch,(function (p1__1625_SHARP_,p2__1626_SHARP_){
return pluto.reader.views.default_logger(ctx,p1__1625_SHARP_,p2__1626_SHARP_);
}),cljs.core.cst$kw$reagent_DASH_render,(function pluto$reader$views$error_boundary_$_error_boundary(_){
return component;
})], null));
});
/**
 * Inject `properties` into the top level `let` block.
 */
pluto.reader.views.inject_properties = (function pluto$reader$views$inject_properties(h,properties){
if(cljs.core.vector_QMARK_(h)){
var vec__1628 = h;
var seq__1629 = cljs.core.seq(vec__1628);
var first__1630 = cljs.core.first(seq__1629);
var seq__1629__$1 = cljs.core.next(seq__1629);
var tag = first__1630;
var properties_children = seq__1629__$1;
var vec__1631 = pluto.reader.views.resolve_properties_children(properties_children);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1631,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1631,(1),null);
var props__$1 = (cljs.core.truth_((function (){var and__4120__auto__ = properties;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,pluto.reader.blocks.let_block);
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc_in(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$prev_DASH_env,cljs.core.cst$kw$pluto$reader_SLASH_properties], null),properties):props);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,(cljs.core.truth_(props__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,props__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag], null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__1628,seq__1629,first__1630,seq__1629__$1,tag,properties_children,vec__1631,props,children,props__$1){
return (function (p1__1627_SHARP_){
return (pluto.reader.views.inject_properties.cljs$core$IFn$_invoke$arity$2 ? pluto.reader.views.inject_properties.cljs$core$IFn$_invoke$arity$2(p1__1627_SHARP_,properties) : pluto.reader.views.inject_properties.call(null,p1__1627_SHARP_,properties));
});})(vec__1628,seq__1629,first__1630,seq__1629__$1,tag,properties_children,vec__1631,props,children,props__$1))
,children));
} else {
return h;
}
});
pluto.reader.views.create_reagent_spec = (function pluto$reader$views$create_reagent_spec(ctx,ext,p__1645,data){
var map__1646 = p__1645;
var map__1646__$1 = (((((!((map__1646 == null))))?(((((map__1646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1646):map__1646);
var get_initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1646__$1,cljs.core.cst$kw$get_DASH_initial_DASH_state);
var component_will_receive_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1646__$1,cljs.core.cst$kw$component_DASH_will_DASH_receive_DASH_props);
var should_component_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1646__$1,cljs.core.cst$kw$should_DASH_component_DASH_update);
var component_will_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1646__$1,cljs.core.cst$kw$component_DASH_will_DASH_mount);
var component_did_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1646__$1,cljs.core.cst$kw$component_DASH_did_DASH_mount);
var component_will_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1646__$1,cljs.core.cst$kw$component_DASH_will_DASH_update);
var component_did_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1646__$1,cljs.core.cst$kw$component_DASH_did_DASH_update);
var component_will_unmount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1646__$1,cljs.core.cst$kw$component_DASH_will_DASH_unmount);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display_DASH_name,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(data)),cljs.core.cst$kw$reagent_DASH_render,((function (map__1646,map__1646__$1,get_initial_state,component_will_receive_props,should_component_update,component_will_mount,component_did_mount,component_will_update,component_did_update,component_will_unmount){
return (function (o){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.views.error_boundary,ctx,pluto.reader.views.inject_properties(data,o)], null);
});})(map__1646,map__1646__$1,get_initial_state,component_will_receive_props,should_component_update,component_will_mount,component_did_mount,component_will_update,component_did_update,component_will_unmount))
], null),(cljs.core.truth_(get_initial_state)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$get_DASH_initial_DASH_state_DASH_mount,pluto.reader.views.event__GT_fn(ctx,ext,get_initial_state,((function (map__1646,map__1646__$1,get_initial_state,component_will_receive_props,should_component_update,component_will_mount,component_did_mount,component_will_update,component_did_update,component_will_unmount){
return (function (p1__1634_SHARP_){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(p1__1634_SHARP_);
});})(map__1646,map__1646__$1,get_initial_state,component_will_receive_props,should_component_update,component_will_mount,component_did_mount,component_will_update,component_did_update,component_will_unmount))
)], null):null),(cljs.core.truth_(component_will_receive_props)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component_DASH_will_DASH_receive_DASH_props,pluto.reader.views.event__GT_fn(ctx,ext,component_will_receive_props,((function (map__1646,map__1646__$1,get_initial_state,component_will_receive_props,should_component_update,component_will_mount,component_did_mount,component_will_update,component_did_update,component_will_unmount){
return (function (p1__1635_SHARP_,p2__1636_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(p1__1635_SHARP_),cljs.core.cst$kw$new,p2__1636_SHARP_);
});})(map__1646,map__1646__$1,get_initial_state,component_will_receive_props,should_component_update,component_will_mount,component_did_mount,component_will_update,component_did_update,component_will_unmount))
)], null):null),(cljs.core.truth_(should_component_update)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$should_DASH_component_DASH_update,pluto.reader.views.event__GT_fn(ctx,ext,should_component_update,((function (map__1646,map__1646__$1,get_initial_state,component_will_receive_props,should_component_update,component_will_mount,component_did_mount,component_will_update,component_did_update,component_will_unmount){
return (function (p1__1637_SHARP_,p2__1638_SHARP_,p3__1639_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(p1__1637_SHARP_),cljs.core.cst$kw$old,p2__1638_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$new,p3__1639_SHARP_], 0));
});})(map__1646,map__1646__$1,get_initial_state,component_will_receive_props,should_component_update,component_will_mount,component_did_mount,component_will_update,component_did_update,component_will_unmount))
)], null):null),(cljs.core.truth_(component_will_mount)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component_DASH_will_DASH_mount,pluto.reader.views.event__GT_fn(ctx,ext,component_will_mount,((function (map__1646,map__1646__$1,get_initial_state,component_will_receive_props,should_component_update,component_will_mount,component_did_mount,component_will_update,component_did_update,component_will_unmount){
return (function (p1__1640_SHARP_){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(p1__1640_SHARP_);
});})(map__1646,map__1646__$1,get_initial_state,component_will_receive_props,should_component_update,component_will_mount,component_did_mount,component_will_update,component_did_update,component_will_unmount))
)], null):null),(cljs.core.truth_(component_did_mount)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component_DASH_did_DASH_mount,pluto.reader.views.event__GT_fn(ctx,ext,component_did_mount,((function (map__1646,map__1646__$1,get_initial_state,component_will_receive_props,should_component_update,component_will_mount,component_did_mount,component_will_update,component_did_update,component_will_unmount){
return (function (){
return cljs.core.PersistentArrayMap.EMPTY;
});})(map__1646,map__1646__$1,get_initial_state,component_will_receive_props,should_component_update,component_will_mount,component_did_mount,component_will_update,component_did_update,component_will_unmount))
)], null):null),(cljs.core.truth_(component_will_update)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component_DASH_will_DASH_update,pluto.reader.views.event__GT_fn(ctx,ext,component_will_update,((function (map__1646,map__1646__$1,get_initial_state,component_will_receive_props,should_component_update,component_will_mount,component_did_mount,component_will_update,component_did_update,component_will_unmount){
return (function (p1__1641_SHARP_,p2__1642_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(p1__1641_SHARP_),cljs.core.cst$kw$new,p2__1642_SHARP_);
});})(map__1646,map__1646__$1,get_initial_state,component_will_receive_props,should_component_update,component_will_mount,component_did_mount,component_will_update,component_did_update,component_will_unmount))
)], null):null),(cljs.core.truth_(component_did_update)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component_DASH_did_DASH_update,pluto.reader.views.event__GT_fn(ctx,ext,component_did_update,((function (map__1646,map__1646__$1,get_initial_state,component_will_receive_props,should_component_update,component_will_mount,component_did_mount,component_will_update,component_did_update,component_will_unmount){
return (function (p1__1643_SHARP_,p2__1644_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(p1__1643_SHARP_),cljs.core.cst$kw$old,p2__1644_SHARP_);
});})(map__1646,map__1646__$1,get_initial_state,component_will_receive_props,should_component_update,component_will_mount,component_did_mount,component_will_update,component_did_update,component_will_unmount))
)], null):null),(cljs.core.truth_(component_will_unmount)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component_DASH_will_DASH_unmount,pluto.reader.views.event__GT_fn(ctx,ext,component_will_unmount,((function (map__1646,map__1646__$1,get_initial_state,component_will_receive_props,should_component_update,component_will_mount,component_did_mount,component_will_update,component_did_update,component_will_unmount){
return (function (){
return cljs.core.PersistentArrayMap.EMPTY;
});})(map__1646,map__1646__$1,get_initial_state,component_will_receive_props,should_component_update,component_will_mount,component_did_mount,component_will_update,component_did_update,component_will_unmount))
)], null):null)], 0));
});
pluto.reader.views.bindings = (function pluto$reader$views$bindings(data){
var o = cljs.core.first(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.cst$kw$bindings], null)));
if(cljs.core.map_QMARK_(o)){
return cljs.core.set(cljs.core.keys(o));
} else {
return null;
}
});
pluto.reader.views.parse = (function pluto$reader$views$parse(var_args){
var G__1650 = arguments.length;
switch (G__1650) {
case 3:
return pluto.reader.views.parse.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return pluto.reader.views.parse.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pluto.reader.views.parse.cljs$core$IFn$_invoke$arity$3 = (function (ctx,ext,o){
var map__1651 = pluto.reader.views.parse.cljs$core$IFn$_invoke$arity$4(ctx,ext,null,((cljs.core.map_QMARK_(o))?cljs.core.cst$kw$view.cljs$core$IFn$_invoke$arity$1(o):o));
var map__1651__$1 = (((((!((map__1651 == null))))?(((((map__1651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1651):map__1651);
var m = map__1651__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1651__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1651__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
return m;
} else {
if(cljs.core.map_QMARK_(o)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,reagent.core.create_class(pluto.reader.views.create_reagent_spec(ctx,ext,o,data))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,((function (map__1651,map__1651__$1,m,data,errors){
return (function (o__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.views.error_boundary,ctx,pluto.reader.views.inject_properties(data,o__$1)], null);
});})(map__1651,map__1651__$1,m,data,errors))
], null);
}
}
});

pluto.reader.views.parse.cljs$core$IFn$_invoke$arity$4 = (function (p__1653,ext,p__1654,o){
var map__1655 = p__1653;
var map__1655__$1 = (((((!((map__1655 == null))))?(((((map__1655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1655):map__1655);
var ctx = map__1655__$1;
var view_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1655__$1,cljs.core.cst$kw$view_DASH_fn);
var map__1656 = p__1654;
var map__1656__$1 = (((((!((map__1656 == null))))?(((((map__1656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1656):map__1656);
var parent_ctx = map__1656__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1656__$1,cljs.core.cst$kw$path);
var G__1660 = ((cljs.core.list_QMARK_(o))?(function (){var map__1661 = (pluto.reader.blocks.parse.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.blocks.parse.cljs$core$IFn$_invoke$arity$4(ctx,ext,parent_ctx,o) : pluto.reader.blocks.parse.call(null,ctx,ext,parent_ctx,o));
var map__1661__$1 = (((((!((map__1661 == null))))?(((((map__1661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1661):map__1661);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1661__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1661__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,errors], null);
} else {
var d = pluto.reader.views.parse.cljs$core$IFn$_invoke$arity$4(ctx,ext,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$parent,o,cljs.core.cst$kw$path,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,(0))], null),data);
var props = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(pluto.reader.views.unresolved_properties,cljs.core.PersistentHashSet.EMPTY,d),pluto.reader.views.bindings(data));
return pluto.error.merge_result.cljs$core$IFn$_invoke$arity$2(d,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,cljs.core.PersistentVector.EMPTY], null));
}
})():pluto.reader.views.parse_hiccup_element(ctx,ext,parent_ctx,o));
var fexpr__1659 = (cljs.core.truth_(view_fn)?((function (G__1660,map__1655,map__1655__$1,ctx,view_fn,map__1656,map__1656__$1,parent_ctx,path){
return (function (p1__1648_SHARP_){
return (view_fn.cljs$core$IFn$_invoke$arity$2 ? view_fn.cljs$core$IFn$_invoke$arity$2(parent_ctx,p1__1648_SHARP_) : view_fn.call(null,parent_ctx,p1__1648_SHARP_));
});})(G__1660,map__1655,map__1655__$1,ctx,view_fn,map__1656,map__1656__$1,parent_ctx,path))
:cljs.core.identity);
return (fexpr__1659.cljs$core$IFn$_invoke$arity$1 ? fexpr__1659.cljs$core$IFn$_invoke$arity$1(G__1660) : fexpr__1659.call(null,G__1660));
});

pluto.reader.views.parse.cljs$lang$maxFixedArity = 4;

pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$view,(function (ctx,ext,type,value){
var map__1664 = pluto.reader.reference.resolve(ctx,ext,type,value);
var map__1664__$1 = (((((!((map__1664 == null))))?(((((map__1664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1664):map__1664);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1664__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1664__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(data)){
return pluto.reader.views.parse.cljs$core$IFn$_invoke$arity$3(ctx,ext,data);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,errors], null);
}
}));
