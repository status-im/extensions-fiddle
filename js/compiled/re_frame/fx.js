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
var _STAR_current_trace_STAR__orig_val__4749 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__4750 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__4750;

try{try{var seq__4751 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__4752 = null;
var count__4753 = (0);
var i__4754 = (0);
while(true){
if((i__4754 < count__4753)){
var vec__4761 = chunk__4752.cljs$core$IIndexed$_nth$arity$2(null,i__4754);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4761,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4761,(1),null);
var temp__5718__auto___4783 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___4783)){
var effect_fn_4784 = temp__5718__auto___4783;
(effect_fn_4784.cljs$core$IFn$_invoke$arity$1 ? effect_fn_4784.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_4784.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__4785 = seq__4751;
var G__4786 = chunk__4752;
var G__4787 = count__4753;
var G__4788 = (i__4754 + (1));
seq__4751 = G__4785;
chunk__4752 = G__4786;
count__4753 = G__4787;
i__4754 = G__4788;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__4751);
if(temp__5720__auto__){
var seq__4751__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__4751__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__4751__$1);
var G__4789 = cljs.core.chunk_rest(seq__4751__$1);
var G__4790 = c__4550__auto__;
var G__4791 = cljs.core.count(c__4550__auto__);
var G__4792 = (0);
seq__4751 = G__4789;
chunk__4752 = G__4790;
count__4753 = G__4791;
i__4754 = G__4792;
continue;
} else {
var vec__4764 = cljs.core.first(seq__4751__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4764,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4764,(1),null);
var temp__5718__auto___4793 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___4793)){
var effect_fn_4794 = temp__5718__auto___4793;
(effect_fn_4794.cljs$core$IFn$_invoke$arity$1 ? effect_fn_4794.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_4794.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__4795 = cljs.core.next(seq__4751__$1);
var G__4796 = null;
var G__4797 = (0);
var G__4798 = (0);
seq__4751 = G__4795;
chunk__4752 = G__4796;
count__4753 = G__4797;
i__4754 = G__4798;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__4569__auto___4799 = re_frame.interop.now();
var duration__4570__auto___4800 = (end__4569__auto___4799 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__4570__auto___4800,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__4569__auto___4799);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__4749;
}} else {
var seq__4767 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__4768 = null;
var count__4769 = (0);
var i__4770 = (0);
while(true){
if((i__4770 < count__4769)){
var vec__4777 = chunk__4768.cljs$core$IIndexed$_nth$arity$2(null,i__4770);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4777,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4777,(1),null);
var temp__5718__auto___4801 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___4801)){
var effect_fn_4802 = temp__5718__auto___4801;
(effect_fn_4802.cljs$core$IFn$_invoke$arity$1 ? effect_fn_4802.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_4802.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__4803 = seq__4767;
var G__4804 = chunk__4768;
var G__4805 = count__4769;
var G__4806 = (i__4770 + (1));
seq__4767 = G__4803;
chunk__4768 = G__4804;
count__4769 = G__4805;
i__4770 = G__4806;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__4767);
if(temp__5720__auto__){
var seq__4767__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__4767__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__4767__$1);
var G__4807 = cljs.core.chunk_rest(seq__4767__$1);
var G__4808 = c__4550__auto__;
var G__4809 = cljs.core.count(c__4550__auto__);
var G__4810 = (0);
seq__4767 = G__4807;
chunk__4768 = G__4808;
count__4769 = G__4809;
i__4770 = G__4810;
continue;
} else {
var vec__4780 = cljs.core.first(seq__4767__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4780,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4780,(1),null);
var temp__5718__auto___4811 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___4811)){
var effect_fn_4812 = temp__5718__auto___4811;
(effect_fn_4812.cljs$core$IFn$_invoke$arity$1 ? effect_fn_4812.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_4812.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__4813 = cljs.core.next(seq__4767__$1);
var G__4814 = null;
var G__4815 = (0);
var G__4816 = (0);
seq__4767 = G__4813;
chunk__4768 = G__4814;
count__4769 = G__4815;
i__4770 = G__4816;
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
var seq__4817 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__4818 = null;
var count__4819 = (0);
var i__4820 = (0);
while(true){
if((i__4820 < count__4819)){
var map__4825 = chunk__4818.cljs$core$IIndexed$_nth$arity$2(null,i__4820);
var map__4825__$1 = (((((!((map__4825 == null))))?(((((map__4825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4825):map__4825);
var effect = map__4825__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4825__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4825__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__4817,chunk__4818,count__4819,i__4820,map__4825,map__4825__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__4817,chunk__4818,count__4819,i__4820,map__4825,map__4825__$1,effect,ms,dispatch))
,ms);
}


var G__4829 = seq__4817;
var G__4830 = chunk__4818;
var G__4831 = count__4819;
var G__4832 = (i__4820 + (1));
seq__4817 = G__4829;
chunk__4818 = G__4830;
count__4819 = G__4831;
i__4820 = G__4832;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__4817);
if(temp__5720__auto__){
var seq__4817__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__4817__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__4817__$1);
var G__4833 = cljs.core.chunk_rest(seq__4817__$1);
var G__4834 = c__4550__auto__;
var G__4835 = cljs.core.count(c__4550__auto__);
var G__4836 = (0);
seq__4817 = G__4833;
chunk__4818 = G__4834;
count__4819 = G__4835;
i__4820 = G__4836;
continue;
} else {
var map__4827 = cljs.core.first(seq__4817__$1);
var map__4827__$1 = (((((!((map__4827 == null))))?(((((map__4827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4827):map__4827);
var effect = map__4827__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4827__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4827__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__4817,chunk__4818,count__4819,i__4820,map__4827,map__4827__$1,effect,ms,dispatch,seq__4817__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__4817,chunk__4818,count__4819,i__4820,map__4827,map__4827__$1,effect,ms,dispatch,seq__4817__$1,temp__5720__auto__))
,ms);
}


var G__4837 = cljs.core.next(seq__4817__$1);
var G__4838 = null;
var G__4839 = (0);
var G__4840 = (0);
seq__4817 = G__4837;
chunk__4818 = G__4838;
count__4819 = G__4839;
i__4820 = G__4840;
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
var seq__4841 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__4842 = null;
var count__4843 = (0);
var i__4844 = (0);
while(true){
if((i__4844 < count__4843)){
var event = chunk__4842.cljs$core$IIndexed$_nth$arity$2(null,i__4844);
re_frame.router.dispatch(event);


var G__4845 = seq__4841;
var G__4846 = chunk__4842;
var G__4847 = count__4843;
var G__4848 = (i__4844 + (1));
seq__4841 = G__4845;
chunk__4842 = G__4846;
count__4843 = G__4847;
i__4844 = G__4848;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__4841);
if(temp__5720__auto__){
var seq__4841__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__4841__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__4841__$1);
var G__4849 = cljs.core.chunk_rest(seq__4841__$1);
var G__4850 = c__4550__auto__;
var G__4851 = cljs.core.count(c__4550__auto__);
var G__4852 = (0);
seq__4841 = G__4849;
chunk__4842 = G__4850;
count__4843 = G__4851;
i__4844 = G__4852;
continue;
} else {
var event = cljs.core.first(seq__4841__$1);
re_frame.router.dispatch(event);


var G__4853 = cljs.core.next(seq__4841__$1);
var G__4854 = null;
var G__4855 = (0);
var G__4856 = (0);
seq__4841 = G__4853;
chunk__4842 = G__4854;
count__4843 = G__4855;
i__4844 = G__4856;
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
var seq__4857 = cljs.core.seq(value);
var chunk__4858 = null;
var count__4859 = (0);
var i__4860 = (0);
while(true){
if((i__4860 < count__4859)){
var event = chunk__4858.cljs$core$IIndexed$_nth$arity$2(null,i__4860);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__4861 = seq__4857;
var G__4862 = chunk__4858;
var G__4863 = count__4859;
var G__4864 = (i__4860 + (1));
seq__4857 = G__4861;
chunk__4858 = G__4862;
count__4859 = G__4863;
i__4860 = G__4864;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__4857);
if(temp__5720__auto__){
var seq__4857__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__4857__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__4857__$1);
var G__4865 = cljs.core.chunk_rest(seq__4857__$1);
var G__4866 = c__4550__auto__;
var G__4867 = cljs.core.count(c__4550__auto__);
var G__4868 = (0);
seq__4857 = G__4865;
chunk__4858 = G__4866;
count__4859 = G__4867;
i__4860 = G__4868;
continue;
} else {
var event = cljs.core.first(seq__4857__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__4869 = cljs.core.next(seq__4857__$1);
var G__4870 = null;
var G__4871 = (0);
var G__4872 = (0);
seq__4857 = G__4869;
chunk__4858 = G__4870;
count__4859 = G__4871;
i__4860 = G__4872;
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
