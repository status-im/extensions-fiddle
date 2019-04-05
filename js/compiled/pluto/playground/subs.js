// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.playground.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
var G__2548_2554 = cljs.core.cst$kw$get;
var G__2549_2555 = ((function (G__2548_2554){
return (function (db,p__2550){
var vec__2551 = p__2550;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2551,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2551,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,k);
});})(G__2548_2554))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2548_2554,G__2549_2555) : re_frame.core.reg_sub.call(null,G__2548_2554,G__2549_2555));
var G__2556_2562 = cljs.core.cst$kw$get_DASH_in;
var G__2557_2563 = ((function (G__2556_2562){
return (function (db,p__2558){
var vec__2559 = p__2558;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2559,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2559,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path);
});})(G__2556_2562))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2556_2562,G__2557_2563) : re_frame.core.reg_sub.call(null,G__2556_2562,G__2557_2563));
pluto.playground.subs.extension_parsed = (function pluto$playground$subs$extension_parsed(db,v){
return cljs.core.cst$kw$parsed.cljs$core$IFn$_invoke$arity$1(db);
});
var G__2564_2566 = cljs.core.cst$kw$extension_SLASH_parsed;
var G__2565_2567 = pluto.playground.subs.extension_parsed;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2564_2566,G__2565_2567) : re_frame.core.reg_sub.call(null,G__2564_2566,G__2565_2567));
pluto.playground.subs.extension_data = (function pluto$playground$subs$extension_data(db,v){
return cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(db);
});
var G__2568_2570 = cljs.core.cst$kw$extension_SLASH_data;
var G__2569_2571 = pluto.playground.subs.extension_data;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2568_2570,G__2569_2571) : re_frame.core.reg_sub.call(null,G__2568_2570,G__2569_2571));
pluto.playground.subs.extension_source = (function pluto$playground$subs$extension_source(db,v){
return cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db);
});
var G__2572_2574 = cljs.core.cst$kw$extension_SLASH_source;
var G__2573_2575 = pluto.playground.subs.extension_source;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2572_2574,G__2573_2575) : re_frame.core.reg_sub.call(null,G__2572_2574,G__2573_2575));
var G__2576_2578 = cljs.core.cst$kw$extension_SLASH_logs;
var G__2577_2579 = cljs.core.cst$kw$logs;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2576_2578,G__2577_2579) : re_frame.core.reg_sub.call(null,G__2576_2578,G__2577_2579));
var G__2580_2582 = cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs_QMARK_;
var G__2581_2583 = cljs.core.cst$kw$filtered_DASH_logs;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2580_2582,G__2581_2583) : re_frame.core.reg_sub.call(null,G__2580_2582,G__2581_2583));
var G__2585_2595 = cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs;
var G__2586_2596 = cljs.core.cst$kw$_LT__DASH_;
var G__2587_2597 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_logs], null);
var G__2588_2598 = cljs.core.cst$kw$_LT__DASH_;
var G__2589_2599 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs_QMARK_], null);
var G__2590_2600 = ((function (G__2585_2595,G__2586_2596,G__2587_2597,G__2588_2598,G__2589_2599){
return (function (p__2591){
var vec__2592 = p__2591;
var logs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2592,(0),null);
var filtered_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2592,(1),null);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__2592,logs,filtered_QMARK_,G__2585_2595,G__2586_2596,G__2587_2597,G__2588_2598,G__2589_2599){
return (function (p1__2584_SHARP_){
if(filtered_QMARK_ === true){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$category.cljs$core$IFn$_invoke$arity$1(p1__2584_SHARP_),cljs.core.cst$kw$pluto$log_SLASH_trace);
} else {
return true;
}
});})(vec__2592,logs,filtered_QMARK_,G__2585_2595,G__2586_2596,G__2587_2597,G__2588_2598,G__2589_2599))
,logs);
});})(G__2585_2595,G__2586_2596,G__2587_2597,G__2588_2598,G__2589_2599))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__2585_2595,G__2586_2596,G__2587_2597,G__2588_2598,G__2589_2599,G__2590_2600) : re_frame.core.reg_sub.call(null,G__2585_2595,G__2586_2596,G__2587_2597,G__2588_2598,G__2589_2599,G__2590_2600));
var G__2601_2603 = cljs.core.cst$kw$extension_SLASH_errors;
var G__2602_2604 = cljs.core.cst$kw$errors;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2601_2603,G__2602_2604) : re_frame.core.reg_sub.call(null,G__2601_2603,G__2602_2604));
pluto.playground.subs.selected = (function pluto$playground$subs$selected(db,v){
return cljs.core.cst$kw$selected.cljs$core$IFn$_invoke$arity$1(db);
});
var G__2605_2607 = cljs.core.cst$kw$extension_SLASH_selected;
var G__2606_2608 = pluto.playground.subs.selected;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2605_2607,G__2606_2608) : re_frame.core.reg_sub.call(null,G__2605_2607,G__2606_2608));
pluto.playground.subs.preview = (function pluto$playground$subs$preview(db,v){
var or__4131__auto__ = cljs.core.cst$kw$preview.cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return false;
}
});
var G__2609_2611 = cljs.core.cst$kw$extension_SLASH_preview;
var G__2610_2612 = pluto.playground.subs.preview;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2609_2611,G__2610_2612) : re_frame.core.reg_sub.call(null,G__2609_2611,G__2610_2612));
var G__2613_2619 = cljs.core.cst$kw$extension_SLASH_properties;
var G__2614_2620 = ((function (G__2613_2619){
return (function (db,p__2615){
var vec__2616 = p__2615;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2616,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2616,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2616,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_properties,id], null));
});})(G__2613_2619))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2613_2619,G__2614_2620) : re_frame.core.reg_sub.call(null,G__2613_2619,G__2614_2620));
var G__2623_2630 = cljs.core.cst$kw$extension_DASH_keys;
var G__2624_2631 = cljs.core.cst$kw$_LT__DASH_;
var G__2625_2632 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_parsed], null);
var G__2626_2633 = ((function (G__2623_2630,G__2624_2631,G__2625_2632){
return (function (p__2627){
var map__2628 = p__2627;
var map__2628__$1 = (((((!((map__2628 == null))))?(((((map__2628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2628):map__2628);
var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2628__$1,cljs.core.cst$kw$views);
var hooks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2628__$1,cljs.core.cst$kw$hooks);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__2628,map__2628__$1,views,hooks,G__2623_2630,G__2624_2631,G__2625_2632){
return (function (p1__2621_SHARP_){
return ["hooks/",cljs.core.name(p1__2621_SHARP_)].join('');
});})(map__2628,map__2628__$1,views,hooks,G__2623_2630,G__2624_2631,G__2625_2632))
,cljs.core.keys(hooks)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__2628,map__2628__$1,views,hooks,G__2623_2630,G__2624_2631,G__2625_2632){
return (function (p1__2622_SHARP_){
return ["views/",cljs.core.name(p1__2622_SHARP_)].join('');
});})(map__2628,map__2628__$1,views,hooks,G__2623_2630,G__2624_2631,G__2625_2632))
,cljs.core.keys(views)));
});})(G__2623_2630,G__2624_2631,G__2625_2632))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__2623_2630,G__2624_2631,G__2625_2632,G__2626_2633) : re_frame.core.reg_sub.call(null,G__2623_2630,G__2624_2631,G__2625_2632,G__2626_2633));
var G__2634_2644 = cljs.core.cst$kw$extension_DASH_selection;
var G__2635_2645 = cljs.core.cst$kw$_LT__DASH_;
var G__2636_2646 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$extension_DASH_selection], null);
var G__2637_2647 = cljs.core.cst$kw$_LT__DASH_;
var G__2638_2648 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_keys], null);
var G__2639_2649 = ((function (G__2634_2644,G__2635_2645,G__2636_2646,G__2637_2647,G__2638_2648){
return (function (p__2640){
var vec__2641 = p__2640;
var extension_selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2641,(0),null);
var extension_keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2641,(1),null);
if(cljs.core.truth_(extension_selection)){
return extension_selection;
} else {
return cljs.core.first(extension_keys);
}
});})(G__2634_2644,G__2635_2645,G__2636_2646,G__2637_2647,G__2638_2648))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__2634_2644,G__2635_2645,G__2636_2646,G__2637_2647,G__2638_2648,G__2639_2649) : re_frame.core.reg_sub.call(null,G__2634_2644,G__2635_2645,G__2636_2646,G__2637_2647,G__2638_2648,G__2639_2649));
var G__2650_2660 = cljs.core.cst$kw$extension_SLASH_selected_DASH_properties;
var G__2651_2661 = cljs.core.cst$kw$_LT__DASH_;
var G__2652_2662 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$extensions_SLASH_properties], null);
var G__2653_2663 = cljs.core.cst$kw$_LT__DASH_;
var G__2654_2664 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_selection], null);
var G__2655_2665 = ((function (G__2650_2660,G__2651_2661,G__2652_2662,G__2653_2663,G__2654_2664){
return (function (p__2656){
var vec__2657 = p__2656;
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2657,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2657,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,id);
});})(G__2650_2660,G__2651_2661,G__2652_2662,G__2653_2663,G__2654_2664))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__2650_2660,G__2651_2661,G__2652_2662,G__2653_2663,G__2654_2664,G__2655_2665) : re_frame.core.reg_sub.call(null,G__2650_2660,G__2651_2661,G__2652_2662,G__2653_2663,G__2654_2664,G__2655_2665));
