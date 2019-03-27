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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__4591){
var map__4592 = p__4591;
var map__4592__$1 = (((((!((map__4592 == null))))?(((((map__4592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4592):map__4592);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4592__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4592__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4592__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4592__$1,cljs.core.cst$kw$child_DASH_of);
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
var seq__4594_4618 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__4595_4619 = null;
var count__4596_4620 = (0);
var i__4597_4621 = (0);
while(true){
if((i__4597_4621 < count__4596_4620)){
var vec__4608_4622 = chunk__4595_4619.cljs$core$IIndexed$_nth$arity$2(null,i__4597_4621);
var k_4623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4608_4622,(0),null);
var cb_4624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4608_4622,(1),null);
try{var G__4612_4625 = cljs.core.deref(re_frame.trace.traces);
(cb_4624.cljs$core$IFn$_invoke$arity$1 ? cb_4624.cljs$core$IFn$_invoke$arity$1(G__4612_4625) : cb_4624.call(null,G__4612_4625));
}catch (e4611){var e_4626 = e4611;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_4623,"while storing",cljs.core.deref(re_frame.trace.traces),e_4626], 0));
}

var G__4627 = seq__4594_4618;
var G__4628 = chunk__4595_4619;
var G__4629 = count__4596_4620;
var G__4630 = (i__4597_4621 + (1));
seq__4594_4618 = G__4627;
chunk__4595_4619 = G__4628;
count__4596_4620 = G__4629;
i__4597_4621 = G__4630;
continue;
} else {
var temp__5720__auto___4631 = cljs.core.seq(seq__4594_4618);
if(temp__5720__auto___4631){
var seq__4594_4632__$1 = temp__5720__auto___4631;
if(cljs.core.chunked_seq_QMARK_(seq__4594_4632__$1)){
var c__4550__auto___4633 = cljs.core.chunk_first(seq__4594_4632__$1);
var G__4634 = cljs.core.chunk_rest(seq__4594_4632__$1);
var G__4635 = c__4550__auto___4633;
var G__4636 = cljs.core.count(c__4550__auto___4633);
var G__4637 = (0);
seq__4594_4618 = G__4634;
chunk__4595_4619 = G__4635;
count__4596_4620 = G__4636;
i__4597_4621 = G__4637;
continue;
} else {
var vec__4613_4638 = cljs.core.first(seq__4594_4632__$1);
var k_4639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4613_4638,(0),null);
var cb_4640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4613_4638,(1),null);
try{var G__4617_4641 = cljs.core.deref(re_frame.trace.traces);
(cb_4640.cljs$core$IFn$_invoke$arity$1 ? cb_4640.cljs$core$IFn$_invoke$arity$1(G__4617_4641) : cb_4640.call(null,G__4617_4641));
}catch (e4616){var e_4642 = e4616;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_4639,"while storing",cljs.core.deref(re_frame.trace.traces),e_4642], 0));
}

var G__4643 = cljs.core.next(seq__4594_4632__$1);
var G__4644 = null;
var G__4645 = (0);
var G__4646 = (0);
seq__4594_4618 = G__4643;
chunk__4595_4619 = G__4644;
count__4596_4620 = G__4645;
i__4597_4621 = G__4646;
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
