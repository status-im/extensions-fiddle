// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.playground.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('pluto.core');
goog.require('reagent.core');
goog.require('react_native_web.hooks');
goog.require('pluto.playground.ipfs');
goog.require('pluto.storages');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set,(function (db,p__2617){
var vec__2618 = p__2617;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2618,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2618,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2618,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k,v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_in,(function (db,p__2621){
var vec__2622 = p__2621;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2622,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2622,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2622,(2),null);
return cljs.core.assoc_in(db,path,v);
}));
pluto.playground.fx.update_extension_errors = (function pluto$playground$fx$update_extension_errors(p__2625,p__2626){
var map__2627 = p__2625;
var map__2627__$1 = (((((!((map__2627 == null))))?(((((map__2627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2627):map__2627);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2627__$1,cljs.core.cst$kw$db);
var vec__2628 = p__2626;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2628,(0),null);
var errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2628,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$errors,errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_errors,pluto.playground.fx.update_extension_errors);
pluto.playground.fx.clear_errors = (function pluto$playground$fx$clear_errors(p__2632,_){
var map__2633 = p__2632;
var map__2633__$1 = (((((!((map__2633 == null))))?(((((map__2633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2633):map__2633);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2633__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_clear_DASH_errors,pluto.playground.fx.clear_errors);
pluto.playground.fx.update_extension_parsed = (function pluto$playground$fx$update_extension_parsed(p__2635,p__2636){
var map__2637 = p__2635;
var map__2637__$1 = (((((!((map__2637 == null))))?(((((map__2637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2637):map__2637);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2637__$1,cljs.core.cst$kw$db);
var vec__2638 = p__2636;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2638,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2638,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$parsed,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,pluto.playground.fx.update_extension_parsed);
var G__2642_2654 = cljs.core.cst$kw$extension_SLASH_parse;
var G__2643_2655 = ((function (G__2642_2654){
return (function (p__2644){
var vec__2645 = p__2644;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2645,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2645,(1),null);
var map__2648 = pluto.core.parse(ctx,data);
var map__2648__$1 = (((((!((map__2648 == null))))?(((((map__2648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2648):map__2648);
var m = map__2648__$1;
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2648__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2648__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__2650 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2650) : re_frame.core.dispatch.call(null,G__2650));
} else {
var G__2651_2656 = react_native_web.hooks.hook_in(cljs.core.first(cljs.core.cst$kw$hooks.cljs$core$IFn$_invoke$arity$1(data__$1)));
var G__2652_2657 = document.getElementById("extension");
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__2651_2656,G__2652_2657) : reagent.core.render_component.call(null,G__2651_2656,G__2652_2657));

var G__2653 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,data__$1], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2653) : re_frame.core.dispatch.call(null,G__2653));
}
});})(G__2642_2654))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2642_2654,G__2643_2655) : re_frame.core.reg_fx.call(null,G__2642_2654,G__2643_2655));
pluto.playground.fx.update_extension_data = (function pluto$playground$fx$update_extension_data(p__2658,p__2659){
var map__2660 = p__2658;
var map__2660__$1 = (((((!((map__2660 == null))))?(((((map__2660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2660):map__2660);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2660__$1,cljs.core.cst$kw$db);
var vec__2661 = p__2659;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2661,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2661,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2661,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$data,data),cljs.core.cst$kw$extension_SLASH_parse,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_data,pluto.playground.fx.update_extension_data);
var G__2665_2676 = cljs.core.cst$kw$extension_SLASH_read;
var G__2666_2677 = ((function (G__2665_2676){
return (function (p__2667){
var vec__2668 = p__2667;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2668,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2668,(1),null);
var G__2671_2678 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_clear_DASH_errors], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2671_2678) : re_frame.core.dispatch.call(null,G__2671_2678));

var map__2672 = pluto.core.read(source);
var map__2672__$1 = (((((!((map__2672 == null))))?(((((map__2672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2672):map__2672);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2672__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2672__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__2674 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2674) : re_frame.core.dispatch.call(null,G__2674));
} else {
var G__2675 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_data,ctx,data], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2675) : re_frame.core.dispatch.call(null,G__2675));
}
});})(G__2665_2676))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2665_2676,G__2666_2677) : re_frame.core.reg_fx.call(null,G__2665_2676,G__2666_2677));
pluto.playground.fx.update_extension_source = (function pluto$playground$fx$update_extension_source(p__2679,p__2680){
var map__2681 = p__2679;
var map__2681__$1 = (((((!((map__2681 == null))))?(((((map__2681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2681):map__2681);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2681__$1,cljs.core.cst$kw$db);
var vec__2682 = p__2680;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2682,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2682,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2682,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$source,data),cljs.core.cst$kw$extension_SLASH_read,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_source,pluto.playground.fx.update_extension_source);
var G__2686_2692 = cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value;
var G__2687_2693 = ((function (G__2686_2692){
return (function (p__2688){
var vec__2689 = p__2688;
var cm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2689,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2689,(1),null);
if(cljs.core.truth_((function (){var and__4120__auto__ = cm;
if(cljs.core.truth_(and__4120__auto__)){
return source;
} else {
return and__4120__auto__;
}
})())){
return cm.setValue(source);
} else {
return null;
}
});})(G__2686_2692))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2686_2692,G__2687_2693) : re_frame.core.reg_fx.call(null,G__2686_2692,G__2687_2693));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_editor,(function (p__2694,p__2695){
var map__2696 = p__2694;
var map__2696__$1 = (((((!((map__2696 == null))))?(((((map__2696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2696):map__2696);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2696__$1,cljs.core.cst$kw$db);
var vec__2697 = p__2695;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2697,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2697,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code_DASH_mirror.cljs$core$IFn$_invoke$arity$1(db),data], null)], null);
}));
pluto.playground.fx.append_log = (function pluto$playground$fx$append_log(p__2701,p__2702){
var map__2703 = p__2701;
var map__2703__$1 = (((((!((map__2703 == null))))?(((((map__2703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2703):map__2703);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2703__$1,cljs.core.cst$kw$db);
var vec__2704 = p__2702;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2704,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2704,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$logs,cljs.core.conj,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_append_DASH_log,pluto.playground.fx.append_log);
pluto.playground.fx.switch_filter_logs = (function pluto$playground$fx$switch_filter_logs(p__2708,p__2709){
var map__2710 = p__2708;
var map__2710__$1 = (((((!((map__2710 == null))))?(((((map__2710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2710):map__2710);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2710__$1,cljs.core.cst$kw$db);
var vec__2711 = p__2709;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2711,(0),null);
var checked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2711,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$filtered_DASH_logs,checked)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_filter_DASH_logs,pluto.playground.fx.switch_filter_logs);
pluto.playground.fx.clear_logs = (function pluto$playground$fx$clear_logs(p__2715,_){
var map__2716 = p__2715;
var map__2716__$1 = (((((!((map__2716 == null))))?(((((map__2716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2716):map__2716);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2716__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$logs)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_clear_DASH_logs,pluto.playground.fx.clear_logs);
pluto.playground.fx.set_selected = (function pluto$playground$fx$set_selected(p__2718,p__2719){
var map__2720 = p__2718;
var map__2720__$1 = (((((!((map__2720 == null))))?(((((map__2720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2720):map__2720);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2720__$1,cljs.core.cst$kw$db);
var vec__2721 = p__2719;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2721,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2721,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selected,path)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_selected,pluto.playground.fx.set_selected);
pluto.playground.fx.switch_preview = (function pluto$playground$fx$switch_preview(p__2725,p__2726){
var map__2727 = p__2725;
var map__2727__$1 = (((((!((map__2727 == null))))?(((((map__2727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2727):map__2727);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2727__$1,cljs.core.cst$kw$db);
var vec__2728 = p__2726;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2728,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$preview,cljs.core.not)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_preview,pluto.playground.fx.switch_preview);
var G__2732_2734 = cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs;
var G__2733_2735 = ((function (G__2732_2734){
return (function (value){
return pluto.playground.ipfs.save(value);
});})(G__2732_2734))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2732_2734,G__2733_2735) : re_frame.core.reg_fx.call(null,G__2732_2734,G__2733_2735));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_publish,(function (p__2736,_){
var map__2737 = p__2736;
var map__2737__$1 = (((((!((map__2737 == null))))?(((((map__2737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2737):map__2737);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2737__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$publish,cljs.core.cst$kw$in_DASH_progress_QMARK_], null),true),cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs,cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db)], null);
}));
var G__2740_2743 = cljs.core.cst$kw$fetch_DASH_extension_DASH_fx;
var G__2741_2744 = ((function (G__2740_2743){
return (function (){
var hash = (new URL(document.location)).searchParams.get("hash");
var uri = (cljs.core.truth_(hash)?["ipfs@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''):"url@assets/extensions/command/");
return pluto.storages.fetch(uri,((function (hash,uri,G__2740_2743){
return (function (p1__2739_SHARP_){
var G__2742 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_editor,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__2739_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value,cljs.core.cst$kw$content], null))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2742) : re_frame.core.dispatch.call(null,G__2742));
});})(hash,uri,G__2740_2743))
);
});})(G__2740_2743))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2740_2743,G__2741_2744) : re_frame.core.reg_fx.call(null,G__2740_2743,G__2741_2744));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fetch_DASH_extension,(function (p__2745,_){
var map__2746 = p__2745;
var map__2746__$1 = (((((!((map__2746 == null))))?(((((map__2746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2746):map__2746);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2746__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fetch_DASH_extension_DASH_fx,null], null);
}));
