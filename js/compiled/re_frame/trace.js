// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__4573){
var map__4574 = p__4573;
var map__4574__$1 = (((((!((map__4574 == null))))?(((((map__4574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4574):map__4574);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4574__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4574__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4574__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4574__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),cljs.core.cst$kw$start,re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__4576_4600 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__4577_4601 = null;
var count__4578_4602 = (0);
var i__4579_4603 = (0);
while(true){
if((i__4579_4603 < count__4578_4602)){
var vec__4590_4604 = chunk__4577_4601.cljs$core$IIndexed$_nth$arity$2(null,i__4579_4603);
var k_4605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4590_4604,(0),null);
var cb_4606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4590_4604,(1),null);
try{var G__4594_4607 = cljs.core.deref(re_frame.trace.traces);
(cb_4606.cljs$core$IFn$_invoke$arity$1 ? cb_4606.cljs$core$IFn$_invoke$arity$1(G__4594_4607) : cb_4606.call(null,G__4594_4607));
}catch (e4593){var e_4608 = e4593;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_4605,"while storing",cljs.core.deref(re_frame.trace.traces),e_4608], 0));
}

var G__4609 = seq__4576_4600;
var G__4610 = chunk__4577_4601;
var G__4611 = count__4578_4602;
var G__4612 = (i__4579_4603 + (1));
seq__4576_4600 = G__4609;
chunk__4577_4601 = G__4610;
count__4578_4602 = G__4611;
i__4579_4603 = G__4612;
continue;
} else {
var temp__5457__auto___4613 = cljs.core.seq(seq__4576_4600);
if(temp__5457__auto___4613){
var seq__4576_4614__$1 = temp__5457__auto___4613;
if(cljs.core.chunked_seq_QMARK_(seq__4576_4614__$1)){
var c__4550__auto___4615 = cljs.core.chunk_first(seq__4576_4614__$1);
var G__4616 = cljs.core.chunk_rest(seq__4576_4614__$1);
var G__4617 = c__4550__auto___4615;
var G__4618 = cljs.core.count(c__4550__auto___4615);
var G__4619 = (0);
seq__4576_4600 = G__4616;
chunk__4577_4601 = G__4617;
count__4578_4602 = G__4618;
i__4579_4603 = G__4619;
continue;
} else {
var vec__4595_4620 = cljs.core.first(seq__4576_4614__$1);
var k_4621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4595_4620,(0),null);
var cb_4622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4595_4620,(1),null);
try{var G__4599_4623 = cljs.core.deref(re_frame.trace.traces);
(cb_4622.cljs$core$IFn$_invoke$arity$1 ? cb_4622.cljs$core$IFn$_invoke$arity$1(G__4599_4623) : cb_4622.call(null,G__4599_4623));
}catch (e4598){var e_4624 = e4598;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_4621,"while storing",cljs.core.deref(re_frame.trace.traces),e_4624], 0));
}

var G__4625 = cljs.core.next(seq__4576_4614__$1);
var G__4626 = null;
var G__4627 = (0);
var G__4628 = (0);
seq__4576_4600 = G__4625;
chunk__4577_4601 = G__4626;
count__4578_4602 = G__4627;
i__4579_4603 = G__4628;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});
