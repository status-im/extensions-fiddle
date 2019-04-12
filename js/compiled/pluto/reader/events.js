// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.reader.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.walk');
goog.require('pluto.error');
goog.require('pluto.log');
goog.require('pluto.reader.destructuring');
goog.require('pluto.reader.reference');
goog.require('pluto.reader.types');
goog.require('pluto.utils');
pluto.reader.events.interpolate = (function pluto$reader$events$interpolate(ctx,m,v){
var map__2867 = pluto.utils.interpolate(m,v);
var map__2867__$1 = (((((!((map__2867 == null))))?(((((map__2867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2867):map__2867);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2867__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2867__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
return pluto.log.fire_BANG_(ctx,cljs.core.cst$kw$pluto$log_SLASH_error,cljs.core.cst$kw$query_SLASH_interpolation,errors);
} else {
return data;
}
});
pluto.reader.events.replace_atom = (function pluto$reader$events$replace_atom(ctx,env,o){
if(cljs.core.contains_QMARK_(env,o)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,o);
} else {
if((o instanceof cljs.core.Symbol)){
return null;
} else {
if(typeof o === 'string'){
return pluto.reader.events.interpolate(ctx,env,o);
} else {
if(cljs.core.fn_QMARK_(o)){
return (function (p1__2869_SHARP_,p2__2870_SHARP_){
var G__2871 = p1__2869_SHARP_;
var G__2872 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$a,p2__2870_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$env,env], null)], 0));
return (o.cljs$core$IFn$_invoke$arity$2 ? o.cljs$core$IFn$_invoke$arity$2(G__2871,G__2872) : o.call(null,G__2871,G__2872));
});
} else {
return clojure.walk.postwalk_replace(env,o);

}
}
}
}
});
/**
 * Resolve pairs from `env` in `m`.
 * Uses #replace-atom to perform the resolution.
 */
pluto.reader.events.resolve_env = (function pluto$reader$events$resolve_env(ctx,env,m){
return cljs.core.reduce_kv((function (p1__2873_SHARP_,p2__2874_SHARP_,p3__2875_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__2873_SHARP_,p2__2874_SHARP_,pluto.reader.events.replace_atom(ctx,env,p3__2875_SHARP_));
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
/**
 * Resolve an event arguments based on event definition
 */
pluto.reader.events.resolve_arguments = (function pluto$reader$events$resolve_arguments(ctx,ext,event,arguments$){
var temp__5455__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$capacities,cljs.core.cst$kw$events,event,cljs.core.cst$kw$arguments], null));
if(cljs.core.truth_(temp__5455__auto__)){
var type = temp__5455__auto__;
return (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(ctx,ext,type,arguments$) : pluto.reader.types.resolve.call(null,ctx,ext,type,arguments$));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.error.syntax.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$pluto$error_SLASH_invalid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reference], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$event,cljs.core.cst$kw$data,event], null))], null)], null);
}
});
/**
 * Safely call `event-fn`
 */
pluto.reader.events.dispatch_event = (function pluto$reader$events$dispatch_event(event_fn,ctx,events){
try{var temp__5457__auto__ = (event_fn.cljs$core$IFn$_invoke$arity$2 ? event_fn.cljs$core$IFn$_invoke$arity$2(ctx,events) : event_fn.call(null,ctx,events));
if(cljs.core.truth_(temp__5457__auto__)){
var o = temp__5457__auto__;
return pluto.log.fire_BANG_(ctx,cljs.core.cst$kw$pluto$log_SLASH_error,cljs.core.cst$kw$event_SLASH_dispatch,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reason,cljs.core.cst$kw$return_DASH_value_DASH_ignored,cljs.core.cst$kw$data,o], null));
} else {
return null;
}
}catch (e2876){var ex = e2876;
return pluto.log.fire_BANG_(ctx,cljs.core.cst$kw$pluto$log_SLASH_error,cljs.core.cst$kw$event_SLASH_dispatch,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reason,cljs.core.cst$kw$exception_DASH_thrown,cljs.core.cst$kw$data,ex], null));
}});
/**
 * Dispatches an event using ctx
 */
pluto.reader.events.dispatch_events = (function pluto$reader$events$dispatch_events(p__2877,events,raw_QMARK_){
var map__2878 = p__2877;
var map__2878__$1 = (((((!((map__2878 == null))))?(((((map__2878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2878):map__2878);
var ctx = map__2878__$1;
var event_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2878__$1,cljs.core.cst$kw$event_DASH_fn);
if(cljs.core.seq(events)){
pluto.log.fire_BANG_(ctx,cljs.core.cst$kw$pluto$log_SLASH_trace,cljs.core.cst$kw$event_SLASH_dispatch,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,events], null));

if(cljs.core.truth_(raw_QMARK_)){
return events;
} else {
if(cljs.core.fn_QMARK_(event_fn)){
return pluto.reader.events.dispatch_event(event_fn,ctx,events);
} else {
return pluto.log.fire_BANG_(ctx,cljs.core.cst$kw$pluto$log_SLASH_error,cljs.core.cst$kw$event_SLASH_dispatch,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reason,(cljs.core.truth_(event_fn)?cljs.core.cst$kw$invalid_DASH_event_DASH_fn:cljs.core.cst$kw$missing_DASH_event_DASH_fn),cljs.core.cst$kw$data,events], null));

}
}
} else {
return pluto.log.fire_BANG_(ctx,cljs.core.cst$kw$pluto$log_SLASH_error,cljs.core.cst$kw$event_SLASH_dispatch,cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Returns the final event vector
 */
pluto.reader.events.resolve_event = (function pluto$reader$events$resolve_event(ctx,ext,env,p__2880){
var vec__2881 = p__2880;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2881,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2881,(1),null);
var reference = vec__2881;
var map__2884 = pluto.reader.reference.resolve(ctx,ext,cljs.core.cst$kw$event,reference);
var map__2884__$1 = (((((!((map__2884 == null))))?(((((map__2884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2884):map__2884);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2884__$1,cljs.core.cst$kw$data);
var map__2885 = pluto.reader.events.resolve_arguments(ctx,ext,event,(function (){var or__4131__auto__ = args;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
var map__2885__$1 = (((((!((map__2885 == null))))?(((((map__2885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2885):map__2885);
var inline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2885__$1,cljs.core.cst$kw$data);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [data,cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx),pluto.reader.events.resolve_env(ctx,env,inline)], null);
});
pluto.reader.events.create_event = (function pluto$reader$events$create_event(ctx,ext,env,ref){
if(cljs.core.vector_QMARK_(ref)){
return pluto.reader.events.resolve_event(ctx,ext,env,ref);
} else {
var vec__2888 = ref;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2888,(0),null);
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2888,(1),null);
var if$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2888,(2),null);
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2888,(3),null);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,test))){
return pluto.reader.events.resolve_event(ctx,ext,env,if$);
} else {
return pluto.reader.events.resolve_event(ctx,ext,env,else$);
}

}
});
/**
 * Resolve a query using ctx
 */
pluto.reader.events.resolve_query = (function pluto$reader$events$resolve_query(p__2891,ext,query){
var map__2892 = p__2891;
var map__2892__$1 = (((((!((map__2892 == null))))?(((((map__2892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2892):map__2892);
var ctx = map__2892__$1;
var query_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2892__$1,cljs.core.cst$kw$query_DASH_fn);
var map__2894 = (function (){var G__2895 = ctx;
var G__2896 = ext;
var G__2897 = cljs.core.cst$kw$query;
var G__2898 = query;
return (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(G__2895,G__2896,G__2897,G__2898) : pluto.reader.types.resolve.call(null,G__2895,G__2896,G__2897,G__2898));
})();
var map__2894__$1 = (((((!((map__2894 == null))))?(((((map__2894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2894):map__2894);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2894__$1,cljs.core.cst$kw$data);
if(cljs.core.truth_(query_fn)){
var temp__5457__auto__ = (query_fn.cljs$core$IFn$_invoke$arity$2 ? query_fn.cljs$core$IFn$_invoke$arity$2(ctx,data) : query_fn.call(null,ctx,data));
if(cljs.core.truth_(temp__5457__auto__)){
var signal = temp__5457__auto__;
var o = cljs.core.deref(signal);
pluto.log.fire_BANG_(ctx,cljs.core.cst$kw$pluto$log_SLASH_trace,cljs.core.cst$kw$query_SLASH_resolve,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,o,cljs.core.cst$kw$query,query], null));

return o;
} else {
return null;
}
} else {
return null;
}
});
pluto.reader.events.merge_resolved_query = (function pluto$reader$events$merge_resolved_query(ctx,ext,m,p__2900){
var map__2901 = p__2900;
var map__2901__$1 = (((((!((map__2901 == null))))?(((((map__2901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2901):map__2901);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2901__$1,cljs.core.cst$kw$value);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2901__$1,cljs.core.cst$kw$bindings);
if(cljs.core.map_QMARK_(bindings)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(pluto.reader.destructuring.destructure(bindings,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,pluto.reader.events.resolve_query(ctx,ext,value)], 0))))], 0));
} else {
if((bindings instanceof cljs.core.Symbol)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,bindings,pluto.reader.events.resolve_query(ctx,ext,value));
} else {
return null;
}
}
});
/**
 * Returns a function of 2 arguments 
 */
pluto.reader.events.event_dispatcher = (function pluto$reader$events$event_dispatcher(ctx,ext,refs,arguments$,p__2906){
var map__2907 = p__2906;
var map__2907__$1 = (((((!((map__2907 == null))))?(((((map__2907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2907):map__2907);
var queries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2907__$1,cljs.core.cst$kw$queries);
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2907__$1,cljs.core.cst$kw$properties);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.with_meta(((function (map__2907,map__2907__$1,queries,properties){
return (function (dynamic,p__2909){
var map__2910 = p__2909;
var map__2910__$1 = (((((!((map__2910 == null))))?(((((map__2910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2910):map__2910);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2910__$1,cljs.core.cst$kw$env);
var raw_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2910__$1,cljs.core.cst$kw$raw_QMARK_);
var map__2912 = pluto.reader.destructuring.destructure(properties,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dynamic,arguments$], 0)));
var map__2912__$1 = (((((!((map__2912 == null))))?(((((map__2912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2912):map__2912);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2912__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2912__$1,cljs.core.cst$kw$errors);
if(cljs.core.seq(errors)){
pluto.log.fire_BANG_(ctx,cljs.core.cst$kw$pluto$log_SLASH_error,cljs.core.cst$kw$event_SLASH_destructuring,errors);
} else {
}

var env_SINGLEQUOTE_ = pluto.reader.events.resolve_env(ctx,env,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__2912,map__2912__$1,data,errors,map__2910,map__2910__$1,env,raw_QMARK_,map__2907,map__2907__$1,queries,properties){
return (function (p1__2903_SHARP_,p2__2904_SHARP_){
return pluto.reader.events.merge_resolved_query(ctx,ext,p1__2903_SHARP_,p2__2904_SHARP_);
});})(map__2912,map__2912__$1,data,errors,map__2910,map__2910__$1,env,raw_QMARK_,map__2907,map__2907__$1,queries,properties))
,data,queries)], 0)));
return pluto.reader.events.dispatch_events(ctx,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (env_SINGLEQUOTE_,map__2912,map__2912__$1,data,errors,map__2910,map__2910__$1,env,raw_QMARK_,map__2907,map__2907__$1,queries,properties){
return (function (p1__2905_SHARP_){
return pluto.reader.events.create_event(ctx,ext,env_SINGLEQUOTE_,p1__2905_SHARP_);
});})(env_SINGLEQUOTE_,map__2912,map__2912__$1,data,errors,map__2910,map__2910__$1,env,raw_QMARK_,map__2907,map__2907__$1,queries,properties))
,refs),raw_QMARK_);
});})(map__2907,map__2907__$1,queries,properties))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$event,true], null))], null);
});
/**
 * Returns a list of local event references
 */
pluto.reader.events.references = (function pluto$reader$events$references(data){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),data);
});
pluto.reader.events.if_block_QMARK_ = (function pluto$reader$events$if_block_QMARK_(o){
var and__4120__auto__ = cljs.core.list_QMARK_(o);
if(and__4120__auto__){
var vec__2917 = o;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2917,(0),null);
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2917,(1),null);
var if$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2917,(2),null);
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2917,(3),null);
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$if,s);
if(and__4120__auto____$1){
var and__4120__auto____$2 = (test instanceof cljs.core.Symbol);
if(and__4120__auto____$2){
var and__4120__auto____$3 = pluto.reader.reference.reference_QMARK_(if$);
if(cljs.core.truth_(and__4120__auto____$3)){
var and__4120__auto____$4 = else$;
if(cljs.core.truth_(and__4120__auto____$4)){
return pluto.reader.reference.reference_QMARK_(else$);
} else {
return and__4120__auto____$4;
}
} else {
return and__4120__auto____$3;
}
} else {
return and__4120__auto____$2;
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
pluto.reader.events.event_QMARK_ = (function pluto$reader$events$event_QMARK_(o){
var or__4131__auto__ = pluto.reader.reference.reference_QMARK_(o);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return pluto.reader.events.if_block_QMARK_(o);
}
});
/**
 * A local event must define a let block and have a single destructuring binding accessing 'properties.
 */
pluto.reader.events.local_event_QMARK_ = (function pluto$reader$events$local_event_QMARK_(data){
if(cljs.core.list_QMARK_(data)){
var vec__2920 = data;
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2920,(0),null);
var bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2920,(1),null);
return ((((2) < cljs.core.count(data))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$let,form)) && (cljs.core.even_QMARK_(cljs.core.count(bindings))) && (cljs.core.map_QMARK_(cljs.core.first(bindings))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$properties,cljs.core.second(bindings))) && (cljs.core.every_QMARK_(pluto.reader.events.event_QMARK_,pluto.reader.events.references(data))));
} else {
return null;
}
});
pluto.reader.events.merge_pair = (function pluto$reader$events$merge_pair(m,p__2923){
var vec__2924 = p__2923;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2924,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2924,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.cst$sym$properties)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$properties,k);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(m,cljs.core.cst$kw$queries,cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,v,cljs.core.cst$kw$bindings,k], null)], null));

}
});
pluto.reader.events.parse_let_bindings = (function pluto$reader$events$parse_let_bindings(bindings){
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(pluto.reader.events.merge_pair,cljs.core.PersistentArrayMap.EMPTY,pairs);
});
/**
 * Parses local references defining let blocks
 */
pluto.reader.events.parse = (function pluto$reader$events$parse(ctx,ext,p__2927,arguments$){
var vec__2928 = p__2927;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2928,(0),null);
var let_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2928,(1),null);
var local = vec__2928;
if(cljs.core.truth_(pluto.reader.events.local_event_QMARK_(local))){
return pluto.reader.events.event_dispatcher(ctx,ext,pluto.reader.events.references(local),arguments$,pluto.reader.events.parse_let_bindings(let_bindings));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.error.syntax.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$pluto$error_SLASH_invalid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$local_DASH_event], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,local], null))], null)], null);
}
});
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$event,(function (ctx,ext,_,p__2931){
var vec__2932 = p__2931;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2932,(0),null);
var arguments$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2932,(1),null);
var value = vec__2932;
var map__2935 = pluto.reader.reference.resolve(ctx,ext,cljs.core.cst$kw$event,value);
var map__2935__$1 = (((((!((map__2935 == null))))?(((((map__2935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2935):map__2935);
var m = map__2935__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2935__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2935__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(data)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(data)?(((data instanceof cljs.core.Keyword))?pluto.reader.events.event_dispatcher(ctx,ext,(new cljs.core.List(null,value,null,(1),null)),arguments$,null):pluto.reader.events.parse(ctx,ext,data,arguments$)):null),(cljs.core.truth_(errors)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.error.syntax.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$pluto$error_SLASH_unknown,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$event], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.symbol], null))], null),errors)], null):null)], 0));
} else {
return m;
}
}));
