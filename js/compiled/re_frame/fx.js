// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__4722 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__4723 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__4723;

try{try{var seq__4724 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__4725 = null;
var count__4726 = (0);
var i__4727 = (0);
while(true){
if((i__4727 < count__4726)){
var vec__4734 = chunk__4725.cljs$core$IIndexed$_nth$arity$2(null,i__4727);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4734,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4734,(1),null);
var temp__5718__auto___4756 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___4756)){
var effect_fn_4757 = temp__5718__auto___4756;
(effect_fn_4757.cljs$core$IFn$_invoke$arity$1 ? effect_fn_4757.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_4757.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__4758 = seq__4724;
var G__4759 = chunk__4725;
var G__4760 = count__4726;
var G__4761 = (i__4727 + (1));
seq__4724 = G__4758;
chunk__4725 = G__4759;
count__4726 = G__4760;
i__4727 = G__4761;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__4724);
if(temp__5720__auto__){
var seq__4724__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__4724__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__4724__$1);
var G__4762 = cljs.core.chunk_rest(seq__4724__$1);
var G__4763 = c__4550__auto__;
var G__4764 = cljs.core.count(c__4550__auto__);
var G__4765 = (0);
seq__4724 = G__4762;
chunk__4725 = G__4763;
count__4726 = G__4764;
i__4727 = G__4765;
continue;
} else {
var vec__4737 = cljs.core.first(seq__4724__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4737,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4737,(1),null);
var temp__5718__auto___4766 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___4766)){
var effect_fn_4767 = temp__5718__auto___4766;
(effect_fn_4767.cljs$core$IFn$_invoke$arity$1 ? effect_fn_4767.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_4767.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__4768 = cljs.core.next(seq__4724__$1);
var G__4769 = null;
var G__4770 = (0);
var G__4771 = (0);
seq__4724 = G__4768;
chunk__4725 = G__4769;
count__4726 = G__4770;
i__4727 = G__4771;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__4542__auto___4772 = re_frame.interop.now();
var duration__4543__auto___4773 = (end__4542__auto___4772 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__4543__auto___4773,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__4542__auto___4772);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__4722;
}} else {
var seq__4740 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__4741 = null;
var count__4742 = (0);
var i__4743 = (0);
while(true){
if((i__4743 < count__4742)){
var vec__4750 = chunk__4741.cljs$core$IIndexed$_nth$arity$2(null,i__4743);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4750,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4750,(1),null);
var temp__5718__auto___4774 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___4774)){
var effect_fn_4775 = temp__5718__auto___4774;
(effect_fn_4775.cljs$core$IFn$_invoke$arity$1 ? effect_fn_4775.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_4775.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__4776 = seq__4740;
var G__4777 = chunk__4741;
var G__4778 = count__4742;
var G__4779 = (i__4743 + (1));
seq__4740 = G__4776;
chunk__4741 = G__4777;
count__4742 = G__4778;
i__4743 = G__4779;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__4740);
if(temp__5720__auto__){
var seq__4740__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__4740__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__4740__$1);
var G__4780 = cljs.core.chunk_rest(seq__4740__$1);
var G__4781 = c__4550__auto__;
var G__4782 = cljs.core.count(c__4550__auto__);
var G__4783 = (0);
seq__4740 = G__4780;
chunk__4741 = G__4781;
count__4742 = G__4782;
i__4743 = G__4783;
continue;
} else {
var vec__4753 = cljs.core.first(seq__4740__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4753,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4753,(1),null);
var temp__5718__auto___4784 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___4784)){
var effect_fn_4785 = temp__5718__auto___4784;
(effect_fn_4785.cljs$core$IFn$_invoke$arity$1 ? effect_fn_4785.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_4785.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__4786 = cljs.core.next(seq__4740__$1);
var G__4787 = null;
var G__4788 = (0);
var G__4789 = (0);
seq__4740 = G__4786;
chunk__4741 = G__4787;
count__4742 = G__4788;
i__4743 = G__4789;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
var seq__4790 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__4791 = null;
var count__4792 = (0);
var i__4793 = (0);
while(true){
if((i__4793 < count__4792)){
var map__4798 = chunk__4791.cljs$core$IIndexed$_nth$arity$2(null,i__4793);
var map__4798__$1 = (((((!((map__4798 == null))))?(((((map__4798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4798):map__4798);
var effect = map__4798__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4798__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4798__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__4790,chunk__4791,count__4792,i__4793,map__4798,map__4798__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__4790,chunk__4791,count__4792,i__4793,map__4798,map__4798__$1,effect,ms,dispatch))
,ms);
}


var G__4802 = seq__4790;
var G__4803 = chunk__4791;
var G__4804 = count__4792;
var G__4805 = (i__4793 + (1));
seq__4790 = G__4802;
chunk__4791 = G__4803;
count__4792 = G__4804;
i__4793 = G__4805;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__4790);
if(temp__5720__auto__){
var seq__4790__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__4790__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__4790__$1);
var G__4806 = cljs.core.chunk_rest(seq__4790__$1);
var G__4807 = c__4550__auto__;
var G__4808 = cljs.core.count(c__4550__auto__);
var G__4809 = (0);
seq__4790 = G__4806;
chunk__4791 = G__4807;
count__4792 = G__4808;
i__4793 = G__4809;
continue;
} else {
var map__4800 = cljs.core.first(seq__4790__$1);
var map__4800__$1 = (((((!((map__4800 == null))))?(((((map__4800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4800):map__4800);
var effect = map__4800__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4800__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4800__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__4790,chunk__4791,count__4792,i__4793,map__4800,map__4800__$1,effect,ms,dispatch,seq__4790__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__4790,chunk__4791,count__4792,i__4793,map__4800,map__4800__$1,effect,ms,dispatch,seq__4790__$1,temp__5720__auto__))
,ms);
}


var G__4810 = cljs.core.next(seq__4790__$1);
var G__4811 = null;
var G__4812 = (0);
var G__4813 = (0);
seq__4790 = G__4810;
chunk__4791 = G__4811;
count__4792 = G__4812;
i__4793 = G__4813;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__4814 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__4815 = null;
var count__4816 = (0);
var i__4817 = (0);
while(true){
if((i__4817 < count__4816)){
var event = chunk__4815.cljs$core$IIndexed$_nth$arity$2(null,i__4817);
re_frame.router.dispatch(event);


var G__4818 = seq__4814;
var G__4819 = chunk__4815;
var G__4820 = count__4816;
var G__4821 = (i__4817 + (1));
seq__4814 = G__4818;
chunk__4815 = G__4819;
count__4816 = G__4820;
i__4817 = G__4821;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__4814);
if(temp__5720__auto__){
var seq__4814__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__4814__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__4814__$1);
var G__4822 = cljs.core.chunk_rest(seq__4814__$1);
var G__4823 = c__4550__auto__;
var G__4824 = cljs.core.count(c__4550__auto__);
var G__4825 = (0);
seq__4814 = G__4822;
chunk__4815 = G__4823;
count__4816 = G__4824;
i__4817 = G__4825;
continue;
} else {
var event = cljs.core.first(seq__4814__$1);
re_frame.router.dispatch(event);


var G__4826 = cljs.core.next(seq__4814__$1);
var G__4827 = null;
var G__4828 = (0);
var G__4829 = (0);
seq__4814 = G__4826;
chunk__4815 = G__4827;
count__4816 = G__4828;
i__4817 = G__4829;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__4830 = cljs.core.seq(value);
var chunk__4831 = null;
var count__4832 = (0);
var i__4833 = (0);
while(true){
if((i__4833 < count__4832)){
var event = chunk__4831.cljs$core$IIndexed$_nth$arity$2(null,i__4833);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__4834 = seq__4830;
var G__4835 = chunk__4831;
var G__4836 = count__4832;
var G__4837 = (i__4833 + (1));
seq__4830 = G__4834;
chunk__4831 = G__4835;
count__4832 = G__4836;
i__4833 = G__4837;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__4830);
if(temp__5720__auto__){
var seq__4830__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__4830__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__4830__$1);
var G__4838 = cljs.core.chunk_rest(seq__4830__$1);
var G__4839 = c__4550__auto__;
var G__4840 = cljs.core.count(c__4550__auto__);
var G__4841 = (0);
seq__4830 = G__4838;
chunk__4831 = G__4839;
count__4832 = G__4840;
i__4833 = G__4841;
continue;
} else {
var event = cljs.core.first(seq__4830__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__4842 = cljs.core.next(seq__4830__$1);
var G__4843 = null;
var G__4844 = (0);
var G__4845 = (0);
seq__4830 = G__4842;
chunk__4831 = G__4843;
count__4832 = G__4844;
i__4833 = G__4845;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
