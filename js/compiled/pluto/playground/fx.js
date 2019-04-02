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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set,(function (db,p__2559){
var vec__2560 = p__2559;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2560,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2560,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2560,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k,v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_in,(function (db,p__2563){
var vec__2564 = p__2563;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2564,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2564,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2564,(2),null);
return cljs.core.assoc_in(db,path,v);
}));
pluto.playground.fx.update_extension_errors = (function pluto$playground$fx$update_extension_errors(p__2567,p__2568){
var map__2569 = p__2567;
var map__2569__$1 = (((((!((map__2569 == null))))?(((((map__2569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2569):map__2569);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2569__$1,cljs.core.cst$kw$db);
var vec__2570 = p__2568;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2570,(0),null);
var errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2570,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$errors,errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_errors,pluto.playground.fx.update_extension_errors);
pluto.playground.fx.clear_errors = (function pluto$playground$fx$clear_errors(p__2574,_){
var map__2575 = p__2574;
var map__2575__$1 = (((((!((map__2575 == null))))?(((((map__2575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2575):map__2575);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2575__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_clear_DASH_errors,pluto.playground.fx.clear_errors);
pluto.playground.fx.update_extension_parsed = (function pluto$playground$fx$update_extension_parsed(p__2577,p__2578){
var map__2579 = p__2577;
var map__2579__$1 = (((((!((map__2579 == null))))?(((((map__2579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2579):map__2579);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2579__$1,cljs.core.cst$kw$db);
var vec__2580 = p__2578;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2580,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2580,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$parsed,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,pluto.playground.fx.update_extension_parsed);
var G__2584_2596 = cljs.core.cst$kw$extension_SLASH_parse;
var G__2585_2597 = ((function (G__2584_2596){
return (function (p__2586){
var vec__2587 = p__2586;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2587,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2587,(1),null);
var map__2590 = pluto.core.parse(ctx,data);
var map__2590__$1 = (((((!((map__2590 == null))))?(((((map__2590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2590):map__2590);
var m = map__2590__$1;
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2590__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2590__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__2592 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2592) : re_frame.core.dispatch.call(null,G__2592));
} else {
var G__2593_2598 = react_native_web.hooks.hook_in(cljs.core.first(cljs.core.cst$kw$hooks.cljs$core$IFn$_invoke$arity$1(data__$1)));
var G__2594_2599 = document.getElementById("extension");
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__2593_2598,G__2594_2599) : reagent.core.render_component.call(null,G__2593_2598,G__2594_2599));

var G__2595 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,data__$1], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2595) : re_frame.core.dispatch.call(null,G__2595));
}
});})(G__2584_2596))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2584_2596,G__2585_2597) : re_frame.core.reg_fx.call(null,G__2584_2596,G__2585_2597));
pluto.playground.fx.update_extension_data = (function pluto$playground$fx$update_extension_data(p__2600,p__2601){
var map__2602 = p__2600;
var map__2602__$1 = (((((!((map__2602 == null))))?(((((map__2602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2602):map__2602);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2602__$1,cljs.core.cst$kw$db);
var vec__2603 = p__2601;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2603,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2603,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2603,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$data,data),cljs.core.cst$kw$extension_SLASH_parse,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_data,pluto.playground.fx.update_extension_data);
var G__2607_2618 = cljs.core.cst$kw$extension_SLASH_read;
var G__2608_2619 = ((function (G__2607_2618){
return (function (p__2609){
var vec__2610 = p__2609;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2610,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2610,(1),null);
var G__2613_2620 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_clear_DASH_errors], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2613_2620) : re_frame.core.dispatch.call(null,G__2613_2620));

var map__2614 = pluto.core.read(source);
var map__2614__$1 = (((((!((map__2614 == null))))?(((((map__2614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2614):map__2614);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2614__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2614__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__2616 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2616) : re_frame.core.dispatch.call(null,G__2616));
} else {
var G__2617 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_data,ctx,data], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2617) : re_frame.core.dispatch.call(null,G__2617));
}
});})(G__2607_2618))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2607_2618,G__2608_2619) : re_frame.core.reg_fx.call(null,G__2607_2618,G__2608_2619));
pluto.playground.fx.update_extension_source = (function pluto$playground$fx$update_extension_source(p__2621,p__2622){
var map__2623 = p__2621;
var map__2623__$1 = (((((!((map__2623 == null))))?(((((map__2623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2623):map__2623);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2623__$1,cljs.core.cst$kw$db);
var vec__2624 = p__2622;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2624,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2624,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2624,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$source,data),cljs.core.cst$kw$extension_SLASH_read,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_source,pluto.playground.fx.update_extension_source);
var G__2628_2634 = cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value;
var G__2629_2635 = ((function (G__2628_2634){
return (function (p__2630){
var vec__2631 = p__2630;
var cm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2631,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2631,(1),null);
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
});})(G__2628_2634))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2628_2634,G__2629_2635) : re_frame.core.reg_fx.call(null,G__2628_2634,G__2629_2635));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_editor,(function (p__2636,p__2637){
var map__2638 = p__2636;
var map__2638__$1 = (((((!((map__2638 == null))))?(((((map__2638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2638):map__2638);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2638__$1,cljs.core.cst$kw$db);
var vec__2639 = p__2637;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2639,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2639,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code_DASH_mirror.cljs$core$IFn$_invoke$arity$1(db),data], null)], null);
}));
pluto.playground.fx.append_log = (function pluto$playground$fx$append_log(p__2643,p__2644){
var map__2645 = p__2643;
var map__2645__$1 = (((((!((map__2645 == null))))?(((((map__2645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2645):map__2645);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2645__$1,cljs.core.cst$kw$db);
var vec__2646 = p__2644;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2646,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2646,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$logs,cljs.core.conj,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_append_DASH_log,pluto.playground.fx.append_log);
pluto.playground.fx.switch_filter_logs = (function pluto$playground$fx$switch_filter_logs(p__2650,p__2651){
var map__2652 = p__2650;
var map__2652__$1 = (((((!((map__2652 == null))))?(((((map__2652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2652):map__2652);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2652__$1,cljs.core.cst$kw$db);
var vec__2653 = p__2651;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2653,(0),null);
var checked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2653,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$filtered_DASH_logs,checked)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_filter_DASH_logs,pluto.playground.fx.switch_filter_logs);
pluto.playground.fx.clear_logs = (function pluto$playground$fx$clear_logs(p__2657,_){
var map__2658 = p__2657;
var map__2658__$1 = (((((!((map__2658 == null))))?(((((map__2658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2658):map__2658);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2658__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$logs)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_clear_DASH_logs,pluto.playground.fx.clear_logs);
pluto.playground.fx.set_selected = (function pluto$playground$fx$set_selected(p__2660,p__2661){
var map__2662 = p__2660;
var map__2662__$1 = (((((!((map__2662 == null))))?(((((map__2662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2662):map__2662);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2662__$1,cljs.core.cst$kw$db);
var vec__2663 = p__2661;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2663,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2663,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selected,path)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_selected,pluto.playground.fx.set_selected);
pluto.playground.fx.switch_preview = (function pluto$playground$fx$switch_preview(p__2667,p__2668){
var map__2669 = p__2667;
var map__2669__$1 = (((((!((map__2669 == null))))?(((((map__2669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2669):map__2669);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2669__$1,cljs.core.cst$kw$db);
var vec__2670 = p__2668;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2670,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$preview,cljs.core.not)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_preview,pluto.playground.fx.switch_preview);
var G__2674_2676 = cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs;
var G__2675_2677 = ((function (G__2674_2676){
return (function (value){
return pluto.playground.ipfs.save(value);
});})(G__2674_2676))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2674_2676,G__2675_2677) : re_frame.core.reg_fx.call(null,G__2674_2676,G__2675_2677));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_publish,(function (p__2678,_){
var map__2679 = p__2678;
var map__2679__$1 = (((((!((map__2679 == null))))?(((((map__2679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2679):map__2679);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2679__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$publish,cljs.core.cst$kw$in_DASH_progress_QMARK_], null),true),cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs,cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db)], null);
}));
var G__2682_2685 = cljs.core.cst$kw$fetch_DASH_extension_DASH_fx;
var G__2683_2686 = ((function (G__2682_2685){
return (function (){
var hash = (new URL(document.location)).searchParams.get("hash");
var uri = (cljs.core.truth_(hash)?["ipfs@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''):"url@assets/extensions/command/");
return pluto.storages.fetch(uri,((function (hash,uri,G__2682_2685){
return (function (p1__2681_SHARP_){
var G__2684 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_editor,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__2681_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value,cljs.core.cst$kw$content], null))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2684) : re_frame.core.dispatch.call(null,G__2684));
});})(hash,uri,G__2682_2685))
);
});})(G__2682_2685))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2682_2685,G__2683_2686) : re_frame.core.reg_fx.call(null,G__2682_2685,G__2683_2686));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fetch_DASH_extension,(function (p__2687,_){
var map__2688 = p__2687;
var map__2688__$1 = (((((!((map__2688 == null))))?(((((map__2688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2688):map__2688);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2688__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fetch_DASH_extension_DASH_fx,null], null);
}));
