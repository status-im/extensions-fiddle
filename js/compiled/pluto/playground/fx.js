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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set,(function (db,p__2715){
var vec__2716 = p__2715;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2716,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2716,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2716,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k,v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_in,(function (db,p__2719){
var vec__2720 = p__2719;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2720,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2720,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2720,(2),null);
return cljs.core.assoc_in(db,path,v);
}));
pluto.playground.fx.update_extension_errors = (function pluto$playground$fx$update_extension_errors(p__2723,p__2724){
var map__2725 = p__2723;
var map__2725__$1 = (((((!((map__2725 == null))))?(((((map__2725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2725):map__2725);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2725__$1,cljs.core.cst$kw$db);
var vec__2726 = p__2724;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2726,(0),null);
var errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2726,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$errors,errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_errors,pluto.playground.fx.update_extension_errors);
pluto.playground.fx.clear_errors = (function pluto$playground$fx$clear_errors(p__2730,_){
var map__2731 = p__2730;
var map__2731__$1 = (((((!((map__2731 == null))))?(((((map__2731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2731):map__2731);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2731__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_clear_DASH_errors,pluto.playground.fx.clear_errors);
pluto.playground.fx.update_extension_parsed = (function pluto$playground$fx$update_extension_parsed(p__2733,p__2734){
var map__2735 = p__2733;
var map__2735__$1 = (((((!((map__2735 == null))))?(((((map__2735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2735):map__2735);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2735__$1,cljs.core.cst$kw$db);
var vec__2736 = p__2734;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2736,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2736,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$parsed,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,pluto.playground.fx.update_extension_parsed);
var G__2740_2750 = cljs.core.cst$kw$extension_SLASH_parse;
var G__2741_2751 = ((function (G__2740_2750){
return (function (p__2742){
var vec__2743 = p__2742;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2743,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2743,(1),null);
var map__2746 = pluto.core.parse(ctx,data);
var map__2746__$1 = (((((!((map__2746 == null))))?(((((map__2746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2746):map__2746);
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2746__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2746__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__2748 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2748) : re_frame.core.dispatch.call(null,G__2748));
} else {
var G__2749 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,data__$1], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2749) : re_frame.core.dispatch.call(null,G__2749));
}
});})(G__2740_2750))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2740_2750,G__2741_2751) : re_frame.core.reg_fx.call(null,G__2740_2750,G__2741_2751));
pluto.playground.fx.update_extension_data = (function pluto$playground$fx$update_extension_data(p__2752,p__2753){
var map__2754 = p__2752;
var map__2754__$1 = (((((!((map__2754 == null))))?(((((map__2754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2754):map__2754);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2754__$1,cljs.core.cst$kw$db);
var vec__2755 = p__2753;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2755,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2755,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2755,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$data,data),cljs.core.cst$kw$extension_SLASH_parse,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_data,pluto.playground.fx.update_extension_data);
var G__2759_2770 = cljs.core.cst$kw$extension_SLASH_read;
var G__2760_2771 = ((function (G__2759_2770){
return (function (p__2761){
var vec__2762 = p__2761;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2762,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2762,(1),null);
var G__2765_2772 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_clear_DASH_errors], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2765_2772) : re_frame.core.dispatch.call(null,G__2765_2772));

var map__2766 = pluto.core.read(source);
var map__2766__$1 = (((((!((map__2766 == null))))?(((((map__2766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2766):map__2766);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2766__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2766__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__2768 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2768) : re_frame.core.dispatch.call(null,G__2768));
} else {
var G__2769 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_data,ctx,data], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2769) : re_frame.core.dispatch.call(null,G__2769));
}
});})(G__2759_2770))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2759_2770,G__2760_2771) : re_frame.core.reg_fx.call(null,G__2759_2770,G__2760_2771));
pluto.playground.fx.update_extension_source = (function pluto$playground$fx$update_extension_source(p__2773,p__2774){
var map__2775 = p__2773;
var map__2775__$1 = (((((!((map__2775 == null))))?(((((map__2775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2775):map__2775);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2775__$1,cljs.core.cst$kw$db);
var vec__2776 = p__2774;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2776,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2776,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2776,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$source,data),cljs.core.cst$kw$extension_SLASH_read,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_source,pluto.playground.fx.update_extension_source);
var G__2780_2786 = cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value;
var G__2781_2787 = ((function (G__2780_2786){
return (function (p__2782){
var vec__2783 = p__2782;
var cm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2783,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2783,(1),null);
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
});})(G__2780_2786))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2780_2786,G__2781_2787) : re_frame.core.reg_fx.call(null,G__2780_2786,G__2781_2787));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_editor,(function (p__2788,p__2789){
var map__2790 = p__2788;
var map__2790__$1 = (((((!((map__2790 == null))))?(((((map__2790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2790):map__2790);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2790__$1,cljs.core.cst$kw$db);
var vec__2791 = p__2789;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2791,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2791,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code_DASH_mirror.cljs$core$IFn$_invoke$arity$1(db),data], null)], null);
}));
pluto.playground.fx.append_log = (function pluto$playground$fx$append_log(p__2795,p__2796){
var map__2797 = p__2795;
var map__2797__$1 = (((((!((map__2797 == null))))?(((((map__2797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2797):map__2797);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2797__$1,cljs.core.cst$kw$db);
var vec__2798 = p__2796;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2798,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2798,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$logs,cljs.core.conj,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_append_DASH_log,pluto.playground.fx.append_log);
pluto.playground.fx.switch_filter_logs = (function pluto$playground$fx$switch_filter_logs(p__2802,p__2803){
var map__2804 = p__2802;
var map__2804__$1 = (((((!((map__2804 == null))))?(((((map__2804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2804):map__2804);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2804__$1,cljs.core.cst$kw$db);
var vec__2805 = p__2803;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2805,(0),null);
var checked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2805,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$filtered_DASH_logs,checked)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_filter_DASH_logs,pluto.playground.fx.switch_filter_logs);
pluto.playground.fx.clear_logs = (function pluto$playground$fx$clear_logs(p__2809,_){
var map__2810 = p__2809;
var map__2810__$1 = (((((!((map__2810 == null))))?(((((map__2810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2810):map__2810);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2810__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$logs)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_clear_DASH_logs,pluto.playground.fx.clear_logs);
pluto.playground.fx.set_selected = (function pluto$playground$fx$set_selected(p__2812,p__2813){
var map__2814 = p__2812;
var map__2814__$1 = (((((!((map__2814 == null))))?(((((map__2814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2814):map__2814);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2814__$1,cljs.core.cst$kw$db);
var vec__2815 = p__2813;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2815,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2815,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selected,path)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_selected,pluto.playground.fx.set_selected);
pluto.playground.fx.switch_preview = (function pluto$playground$fx$switch_preview(p__2819,p__2820){
var map__2821 = p__2819;
var map__2821__$1 = (((((!((map__2821 == null))))?(((((map__2821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2821):map__2821);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2821__$1,cljs.core.cst$kw$db);
var vec__2822 = p__2820;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2822,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$preview,cljs.core.not)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_preview,pluto.playground.fx.switch_preview);
var G__2826_2828 = cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs;
var G__2827_2829 = ((function (G__2826_2828){
return (function (value){
return pluto.playground.ipfs.save(value);
});})(G__2826_2828))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2826_2828,G__2827_2829) : re_frame.core.reg_fx.call(null,G__2826_2828,G__2827_2829));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_publish,(function (p__2830,_){
var map__2831 = p__2830;
var map__2831__$1 = (((((!((map__2831 == null))))?(((((map__2831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2831):map__2831);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2831__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$publish,cljs.core.cst$kw$in_DASH_progress_QMARK_], null),true),cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs,cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db)], null);
}));
var G__2834_2837 = cljs.core.cst$kw$fetch_DASH_extension_DASH_fx;
var G__2835_2838 = ((function (G__2834_2837){
return (function (){
var hash = (new URL(document.location)).searchParams.get("hash");
var uri = (cljs.core.truth_(hash)?["ipfs@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''):"url@assets/extensions/command/");
return pluto.storages.fetch(uri,((function (hash,uri,G__2834_2837){
return (function (p1__2833_SHARP_){
var G__2836 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_editor,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__2833_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value,cljs.core.cst$kw$content], null))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2836) : re_frame.core.dispatch.call(null,G__2836));
});})(hash,uri,G__2834_2837))
);
});})(G__2834_2837))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2834_2837,G__2835_2838) : re_frame.core.reg_fx.call(null,G__2834_2837,G__2835_2838));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fetch_DASH_extension,(function (p__2839,_){
var map__2840 = p__2839;
var map__2840__$1 = (((((!((map__2840 == null))))?(((((map__2840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2840):map__2840);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2840__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fetch_DASH_extension_DASH_fx,null,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$store_SLASH_clear_DASH_all], null)], null);
}));
var G__2842_2844 = cljs.core.cst$kw$set_DASH_url_DASH_fx;
var G__2843_2845 = ((function (G__2842_2844){
return (function (hash){
return pluto.playground.ipfs.set_url(hash);
});})(G__2842_2844))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2842_2844,G__2843_2845) : re_frame.core.reg_fx.call(null,G__2842_2844,G__2843_2845));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$open_DASH_example,(function (p__2846,p__2847){
var map__2848 = p__2846;
var map__2848__$1 = (((((!((map__2848 == null))))?(((((map__2848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2848):map__2848);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2848__$1,cljs.core.cst$kw$db);
var vec__2849 = p__2847;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2849,(0),null);
var hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2849,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$examples),cljs.core.cst$kw$set_DASH_url_DASH_fx,hash,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fetch_DASH_extension], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_properties,(function (p__2853,p__2854){
var map__2855 = p__2853;
var map__2855__$1 = (((((!((map__2855 == null))))?(((((map__2855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2855):map__2855);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2855__$1,cljs.core.cst$kw$db);
var vec__2856 = p__2854;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2856,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2856,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2856,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_properties,id], null),m)], null);
}));
