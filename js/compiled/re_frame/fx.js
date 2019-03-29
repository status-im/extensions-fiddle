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
var _STAR_current_trace_STAR__orig_val__4731 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__4732 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__4732;

try{try{var seq__4733 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__4734 = null;
var count__4735 = (0);
var i__4736 = (0);
while(true){
if((i__4736 < count__4735)){
var vec__4743 = chunk__4734.cljs$core$IIndexed$_nth$arity$2(null,i__4736);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4743,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4743,(1),null);
var temp__5455__auto___4765 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___4765)){
var effect_fn_4766 = temp__5455__auto___4765;
(effect_fn_4766.cljs$core$IFn$_invoke$arity$1 ? effect_fn_4766.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_4766.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__4767 = seq__4733;
var G__4768 = chunk__4734;
var G__4769 = count__4735;
var G__4770 = (i__4736 + (1));
seq__4733 = G__4767;
chunk__4734 = G__4768;
count__4735 = G__4769;
i__4736 = G__4770;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__4733);
if(temp__5457__auto__){
var seq__4733__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__4733__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__4733__$1);
var G__4771 = cljs.core.chunk_rest(seq__4733__$1);
var G__4772 = c__4550__auto__;
var G__4773 = cljs.core.count(c__4550__auto__);
var G__4774 = (0);
seq__4733 = G__4771;
chunk__4734 = G__4772;
count__4735 = G__4773;
i__4736 = G__4774;
continue;
} else {
var vec__4746 = cljs.core.first(seq__4733__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4746,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4746,(1),null);
var temp__5455__auto___4775 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___4775)){
var effect_fn_4776 = temp__5455__auto___4775;
(effect_fn_4776.cljs$core$IFn$_invoke$arity$1 ? effect_fn_4776.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_4776.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__4777 = cljs.core.next(seq__4733__$1);
var G__4778 = null;
var G__4779 = (0);
var G__4780 = (0);
seq__4733 = G__4777;
chunk__4734 = G__4778;
count__4735 = G__4779;
i__4736 = G__4780;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__4551__auto___4781 = re_frame.interop.now();
var duration__4552__auto___4782 = (end__4551__auto___4781 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__4552__auto___4782,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__4551__auto___4781);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__4731;
}} else {
var seq__4749 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__4750 = null;
var count__4751 = (0);
var i__4752 = (0);
while(true){
if((i__4752 < count__4751)){
var vec__4759 = chunk__4750.cljs$core$IIndexed$_nth$arity$2(null,i__4752);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4759,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4759,(1),null);
var temp__5455__auto___4783 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___4783)){
var effect_fn_4784 = temp__5455__auto___4783;
(effect_fn_4784.cljs$core$IFn$_invoke$arity$1 ? effect_fn_4784.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_4784.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__4785 = seq__4749;
var G__4786 = chunk__4750;
var G__4787 = count__4751;
var G__4788 = (i__4752 + (1));
seq__4749 = G__4785;
chunk__4750 = G__4786;
count__4751 = G__4787;
i__4752 = G__4788;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__4749);
if(temp__5457__auto__){
var seq__4749__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__4749__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__4749__$1);
var G__4789 = cljs.core.chunk_rest(seq__4749__$1);
var G__4790 = c__4550__auto__;
var G__4791 = cljs.core.count(c__4550__auto__);
var G__4792 = (0);
seq__4749 = G__4789;
chunk__4750 = G__4790;
count__4751 = G__4791;
i__4752 = G__4792;
continue;
} else {
var vec__4762 = cljs.core.first(seq__4749__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4762,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4762,(1),null);
var temp__5455__auto___4793 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___4793)){
var effect_fn_4794 = temp__5455__auto___4793;
(effect_fn_4794.cljs$core$IFn$_invoke$arity$1 ? effect_fn_4794.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_4794.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__4795 = cljs.core.next(seq__4749__$1);
var G__4796 = null;
var G__4797 = (0);
var G__4798 = (0);
seq__4749 = G__4795;
chunk__4750 = G__4796;
count__4751 = G__4797;
i__4752 = G__4798;
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
var seq__4799 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__4800 = null;
var count__4801 = (0);
var i__4802 = (0);
while(true){
if((i__4802 < count__4801)){
var map__4807 = chunk__4800.cljs$core$IIndexed$_nth$arity$2(null,i__4802);
var map__4807__$1 = (((((!((map__4807 == null))))?(((((map__4807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4807):map__4807);
var effect = map__4807__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4807__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4807__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__4799,chunk__4800,count__4801,i__4802,map__4807,map__4807__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__4799,chunk__4800,count__4801,i__4802,map__4807,map__4807__$1,effect,ms,dispatch))
,ms);
}


var G__4811 = seq__4799;
var G__4812 = chunk__4800;
var G__4813 = count__4801;
var G__4814 = (i__4802 + (1));
seq__4799 = G__4811;
chunk__4800 = G__4812;
count__4801 = G__4813;
i__4802 = G__4814;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__4799);
if(temp__5457__auto__){
var seq__4799__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__4799__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__4799__$1);
var G__4815 = cljs.core.chunk_rest(seq__4799__$1);
var G__4816 = c__4550__auto__;
var G__4817 = cljs.core.count(c__4550__auto__);
var G__4818 = (0);
seq__4799 = G__4815;
chunk__4800 = G__4816;
count__4801 = G__4817;
i__4802 = G__4818;
continue;
} else {
var map__4809 = cljs.core.first(seq__4799__$1);
var map__4809__$1 = (((((!((map__4809 == null))))?(((((map__4809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4809):map__4809);
var effect = map__4809__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4809__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4809__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__4799,chunk__4800,count__4801,i__4802,map__4809,map__4809__$1,effect,ms,dispatch,seq__4799__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__4799,chunk__4800,count__4801,i__4802,map__4809,map__4809__$1,effect,ms,dispatch,seq__4799__$1,temp__5457__auto__))
,ms);
}


var G__4819 = cljs.core.next(seq__4799__$1);
var G__4820 = null;
var G__4821 = (0);
var G__4822 = (0);
seq__4799 = G__4819;
chunk__4800 = G__4820;
count__4801 = G__4821;
i__4802 = G__4822;
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
var seq__4823 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__4824 = null;
var count__4825 = (0);
var i__4826 = (0);
while(true){
if((i__4826 < count__4825)){
var event = chunk__4824.cljs$core$IIndexed$_nth$arity$2(null,i__4826);
re_frame.router.dispatch(event);


var G__4827 = seq__4823;
var G__4828 = chunk__4824;
var G__4829 = count__4825;
var G__4830 = (i__4826 + (1));
seq__4823 = G__4827;
chunk__4824 = G__4828;
count__4825 = G__4829;
i__4826 = G__4830;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__4823);
if(temp__5457__auto__){
var seq__4823__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__4823__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__4823__$1);
var G__4831 = cljs.core.chunk_rest(seq__4823__$1);
var G__4832 = c__4550__auto__;
var G__4833 = cljs.core.count(c__4550__auto__);
var G__4834 = (0);
seq__4823 = G__4831;
chunk__4824 = G__4832;
count__4825 = G__4833;
i__4826 = G__4834;
continue;
} else {
var event = cljs.core.first(seq__4823__$1);
re_frame.router.dispatch(event);


var G__4835 = cljs.core.next(seq__4823__$1);
var G__4836 = null;
var G__4837 = (0);
var G__4838 = (0);
seq__4823 = G__4835;
chunk__4824 = G__4836;
count__4825 = G__4837;
i__4826 = G__4838;
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
var seq__4839 = cljs.core.seq(value);
var chunk__4840 = null;
var count__4841 = (0);
var i__4842 = (0);
while(true){
if((i__4842 < count__4841)){
var event = chunk__4840.cljs$core$IIndexed$_nth$arity$2(null,i__4842);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__4843 = seq__4839;
var G__4844 = chunk__4840;
var G__4845 = count__4841;
var G__4846 = (i__4842 + (1));
seq__4839 = G__4843;
chunk__4840 = G__4844;
count__4841 = G__4845;
i__4842 = G__4846;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__4839);
if(temp__5457__auto__){
var seq__4839__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__4839__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__4839__$1);
var G__4847 = cljs.core.chunk_rest(seq__4839__$1);
var G__4848 = c__4550__auto__;
var G__4849 = cljs.core.count(c__4550__auto__);
var G__4850 = (0);
seq__4839 = G__4847;
chunk__4840 = G__4848;
count__4841 = G__4849;
i__4842 = G__4850;
continue;
} else {
var event = cljs.core.first(seq__4839__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__4851 = cljs.core.next(seq__4839__$1);
var G__4852 = null;
var G__4853 = (0);
var G__4854 = (0);
seq__4839 = G__4851;
chunk__4840 = G__4852;
count__4841 = G__4853;
i__4842 = G__4854;
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
