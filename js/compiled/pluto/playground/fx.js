// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.playground.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('pluto.core');
goog.require('pluto.playground.ipfs');
goog.require('pluto.storages');
goog.require('clojure.string');
goog.require('cljs.pprint');
pluto.playground.fx.get_source_from_sources = (function pluto$playground$fx$get_source_from_sources(sources){
var meta = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__2797){
var vec__2798 = p__2797;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2798,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2798,(1),null);
return (clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(key,"meta") === (0));
}),sources);
var life = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (meta){
return (function (p__2801){
var vec__2802 = p__2801;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2802,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2802,(1),null);
return (clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(key,"lifecycle") === (0));
});})(meta))
,sources);
var events = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (meta,life){
return (function (p__2805){
var vec__2806 = p__2805;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2806,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2806,(1),null);
return (clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(key,"events/") === (0));
});})(meta,life))
,sources);
var views = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (meta,life,events){
return (function (p__2809){
var vec__2810 = p__2809;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2810,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2810,(1),null);
return (clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(key,"views/") === (0));
});})(meta,life,events))
,sources);
var hooks = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (meta,life,events,views){
return (function (p__2813){
var vec__2814 = p__2813;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2814,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2814,(1),null);
return (clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(key,"hooks/") === (0));
});})(meta,life,events,views))
,sources);
return ["{\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (meta,life,events,views,hooks){
return (function (p__2821){
var vec__2822 = p__2821;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2822,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2822,(1),null);
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(value,/\n/,"\n "))].join('');
});})(meta,life,events,views,hooks))
,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(meta,life,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([events,views,hooks], 0))))),"\n}"].join('');
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set,(function (db,p__2825){
var vec__2826 = p__2825;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2826,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2826,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2826,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k,v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_in,(function (db,p__2829){
var vec__2830 = p__2829;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2830,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2830,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2830,(2),null);
return cljs.core.assoc_in(db,path,v);
}));
pluto.playground.fx.update_extension_errors = (function pluto$playground$fx$update_extension_errors(p__2833,p__2834){
var map__2835 = p__2833;
var map__2835__$1 = (((((!((map__2835 == null))))?(((((map__2835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2835):map__2835);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2835__$1,cljs.core.cst$kw$db);
var vec__2836 = p__2834;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2836,(0),null);
var errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2836,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$errors,errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_errors,pluto.playground.fx.update_extension_errors);
pluto.playground.fx.clear_errors = (function pluto$playground$fx$clear_errors(p__2840,_){
var map__2841 = p__2840;
var map__2841__$1 = (((((!((map__2841 == null))))?(((((map__2841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2841):map__2841);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2841__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_clear_DASH_errors,pluto.playground.fx.clear_errors);
pluto.playground.fx.update_extension_parsed = (function pluto$playground$fx$update_extension_parsed(p__2843,p__2844){
var map__2845 = p__2843;
var map__2845__$1 = (((((!((map__2845 == null))))?(((((map__2845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2845):map__2845);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2845__$1,cljs.core.cst$kw$db);
var vec__2846 = p__2844;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2846,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2846,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$parsed,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,pluto.playground.fx.update_extension_parsed);
var G__2850_2860 = cljs.core.cst$kw$extension_SLASH_parse;
var G__2851_2861 = ((function (G__2850_2860){
return (function (p__2852){
var vec__2853 = p__2852;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2853,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2853,(1),null);
var map__2856 = pluto.core.parse(ctx,data);
var map__2856__$1 = (((((!((map__2856 == null))))?(((((map__2856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2856):map__2856);
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2856__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2856__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__2858 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2858) : re_frame.core.dispatch.call(null,G__2858));
} else {
var G__2859 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,data__$1], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2859) : re_frame.core.dispatch.call(null,G__2859));
}
});})(G__2850_2860))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2850_2860,G__2851_2861) : re_frame.core.reg_fx.call(null,G__2850_2860,G__2851_2861));
pluto.playground.fx.update_extension_data = (function pluto$playground$fx$update_extension_data(p__2862,p__2863){
var map__2864 = p__2862;
var map__2864__$1 = (((((!((map__2864 == null))))?(((((map__2864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2864):map__2864);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2864__$1,cljs.core.cst$kw$db);
var vec__2865 = p__2863;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2865,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2865,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2865,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$data,data),cljs.core.cst$kw$extension_SLASH_parse,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_data,pluto.playground.fx.update_extension_data);
var G__2869_2880 = cljs.core.cst$kw$extension_SLASH_read;
var G__2870_2881 = ((function (G__2869_2880){
return (function (p__2871){
var vec__2872 = p__2871;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2872,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2872,(1),null);
var G__2875_2882 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_clear_DASH_errors], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2875_2882) : re_frame.core.dispatch.call(null,G__2875_2882));

var map__2876 = pluto.core.read(source);
var map__2876__$1 = (((((!((map__2876 == null))))?(((((map__2876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2876):map__2876);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2876__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2876__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__2878 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2878) : re_frame.core.dispatch.call(null,G__2878));
} else {
var G__2879 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_data,ctx,data], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2879) : re_frame.core.dispatch.call(null,G__2879));
}
});})(G__2869_2880))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2869_2880,G__2870_2881) : re_frame.core.reg_fx.call(null,G__2869_2880,G__2870_2881));
pluto.playground.fx.update_extension_source = (function pluto$playground$fx$update_extension_source(p__2883,p__2884){
var map__2885 = p__2883;
var map__2885__$1 = (((((!((map__2885 == null))))?(((((map__2885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2885):map__2885);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2885__$1,cljs.core.cst$kw$db);
var vec__2886 = p__2884;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2886,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2886,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2886,(2),null);
if(cljs.core.truth_(cljs.core.cst$kw$simple_DASH_mode_QMARK_.cljs$core$IFn$_invoke$arity$1(db))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$simple_DASH_sources,cljs.core.cst$kw$simple_DASH_item.cljs$core$IFn$_invoke$arity$1(db)], null),data)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$source,data)], null);
}
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_source,pluto.playground.fx.update_extension_source);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_read,(function (p__2890,p__2891){
var map__2892 = p__2890;
var map__2892__$1 = (((((!((map__2892 == null))))?(((((map__2892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2892):map__2892);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2892__$1,cljs.core.cst$kw$db);
var vec__2893 = p__2891;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2893,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2893,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extension_SLASH_read,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$source)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_run,(function (p__2897,p__2898){
var map__2899 = p__2897;
var map__2899__$1 = (((((!((map__2899 == null))))?(((((map__2899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2899):map__2899);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2899__$1,cljs.core.cst$kw$db);
var vec__2900 = p__2898;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2900,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2900,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$simple_DASH_mode_QMARK_.cljs$core$IFn$_invoke$arity$1(db))){
var source = pluto.playground.fx.get_source_from_sources(cljs.core.cst$kw$simple_DASH_sources.cljs$core$IFn$_invoke$arity$1(db));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$source,source),cljs.core.cst$kw$extension_SLASH_read,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,source], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extension_SLASH_read,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$source)], null)], null);
}
}));
var G__2904_2910 = cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value;
var G__2905_2911 = ((function (G__2904_2910){
return (function (p__2906){
var vec__2907 = p__2906;
var cm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2907,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2907,(1),null);
if(cljs.core.truth_(source)){
return cm.setValue(source);
} else {
return null;
}
});})(G__2904_2910))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2904_2910,G__2905_2911) : re_frame.core.reg_fx.call(null,G__2904_2910,G__2905_2911));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_editor,(function (p__2912,p__2913){
var map__2914 = p__2912;
var map__2914__$1 = (((((!((map__2914 == null))))?(((((map__2914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2914):map__2914);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2914__$1,cljs.core.cst$kw$db);
var vec__2915 = p__2913;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2915,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2915,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code_DASH_mirror.cljs$core$IFn$_invoke$arity$1(db),data], null)], null);
}));
pluto.playground.fx.append_log = (function pluto$playground$fx$append_log(p__2919,p__2920){
var map__2921 = p__2919;
var map__2921__$1 = (((((!((map__2921 == null))))?(((((map__2921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2921):map__2921);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2921__$1,cljs.core.cst$kw$db);
var vec__2922 = p__2920;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2922,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2922,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$logs,cljs.core.conj,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_append_DASH_log,pluto.playground.fx.append_log);
pluto.playground.fx.switch_filter_logs = (function pluto$playground$fx$switch_filter_logs(p__2926,p__2927){
var map__2928 = p__2926;
var map__2928__$1 = (((((!((map__2928 == null))))?(((((map__2928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2928):map__2928);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2928__$1,cljs.core.cst$kw$db);
var vec__2929 = p__2927;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2929,(0),null);
var checked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2929,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$filtered_DASH_logs,checked)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_filter_DASH_logs,pluto.playground.fx.switch_filter_logs);
pluto.playground.fx.clear_logs = (function pluto$playground$fx$clear_logs(p__2933,_){
var map__2934 = p__2933;
var map__2934__$1 = (((((!((map__2934 == null))))?(((((map__2934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2934):map__2934);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2934__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$logs)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_clear_DASH_logs,pluto.playground.fx.clear_logs);
pluto.playground.fx.set_selected = (function pluto$playground$fx$set_selected(p__2936,p__2937){
var map__2938 = p__2936;
var map__2938__$1 = (((((!((map__2938 == null))))?(((((map__2938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2938):map__2938);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2938__$1,cljs.core.cst$kw$db);
var vec__2939 = p__2937;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2939,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2939,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selected,path)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_selected,pluto.playground.fx.set_selected);
pluto.playground.fx.switch_preview = (function pluto$playground$fx$switch_preview(p__2943,p__2944){
var map__2945 = p__2943;
var map__2945__$1 = (((((!((map__2945 == null))))?(((((map__2945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2945):map__2945);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2945__$1,cljs.core.cst$kw$db);
var vec__2946 = p__2944;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2946,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$preview,cljs.core.not)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_preview,pluto.playground.fx.switch_preview);
var G__2950_2952 = cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs;
var G__2951_2953 = ((function (G__2950_2952){
return (function (value){
return pluto.playground.ipfs.save(value);
});})(G__2950_2952))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2950_2952,G__2951_2953) : re_frame.core.reg_fx.call(null,G__2950_2952,G__2951_2953));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_publish,(function (p__2954,_){
var map__2955 = p__2954;
var map__2955__$1 = (((((!((map__2955 == null))))?(((((map__2955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2955):map__2955);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2955__$1,cljs.core.cst$kw$db);
if(cljs.core.truth_(cljs.core.cst$kw$simple_DASH_mode_QMARK_.cljs$core$IFn$_invoke$arity$1(db))){
var source = pluto.playground.fx.get_source_from_sources(cljs.core.cst$kw$simple_DASH_sources.cljs$core$IFn$_invoke$arity$1(db));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$publish,cljs.core.cst$kw$in_DASH_progress_QMARK_], null),true),cljs.core.cst$kw$source,source),cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs,source], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$publish,cljs.core.cst$kw$in_DASH_progress_QMARK_], null),true),cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs,cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db)], null);
}
}));
var G__2958_2961 = cljs.core.cst$kw$fetch_DASH_extension_DASH_fx;
var G__2959_2962 = ((function (G__2958_2961){
return (function (){
var hash = (new URL(document.location)).searchParams.get("hash");
var uri = (cljs.core.truth_(hash)?["ipfs@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''):"url@assets/extensions/command/");
return pluto.storages.fetch(uri,((function (hash,uri,G__2958_2961){
return (function (p1__2957_SHARP_){
var G__2960 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_editor,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__2957_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value,cljs.core.cst$kw$content], null))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2960) : re_frame.core.dispatch.call(null,G__2960));
});})(hash,uri,G__2958_2961))
);
});})(G__2958_2961))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2958_2961,G__2959_2962) : re_frame.core.reg_fx.call(null,G__2958_2961,G__2959_2962));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fetch_DASH_extension,(function (p__2963,_){
var map__2964 = p__2963;
var map__2964__$1 = (((((!((map__2964 == null))))?(((((map__2964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2964):map__2964);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2964__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fetch_DASH_extension_DASH_fx,null,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$store_SLASH_clear_DASH_all], null)], null);
}));
var G__2966_2968 = cljs.core.cst$kw$set_DASH_url_DASH_fx;
var G__2967_2969 = ((function (G__2966_2968){
return (function (hash){
return pluto.playground.ipfs.set_url(hash);
});})(G__2966_2968))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2966_2968,G__2967_2969) : re_frame.core.reg_fx.call(null,G__2966_2968,G__2967_2969));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$open_DASH_example,(function (p__2970,p__2971){
var map__2972 = p__2970;
var map__2972__$1 = (((((!((map__2972 == null))))?(((((map__2972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2972):map__2972);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2972__$1,cljs.core.cst$kw$db);
var vec__2973 = p__2971;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2973,(0),null);
var hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2973,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$simple_DASH_mode_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$examples,cljs.core.cst$kw$extensions_SLASH_properties,cljs.core.cst$kw$extension_DASH_selection,cljs.core.cst$kw$extensions_SLASH_store,cljs.core.cst$kw$extension_DASH_props], 0)),cljs.core.cst$kw$set_DASH_url_DASH_fx,hash,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fetch_DASH_extension], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_properties,(function (p__2977,p__2978){
var map__2979 = p__2977;
var map__2979__$1 = (((((!((map__2979 == null))))?(((((map__2979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2979):map__2979);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2979__$1,cljs.core.cst$kw$db);
var vec__2980 = p__2978;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2980,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2980,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2980,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_properties,id], null),m)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_app_DASH_db,(function (p__2984,p__2985){
var map__2986 = p__2984;
var map__2986__$1 = (((((!((map__2986 == null))))?(((((map__2986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2986):map__2986);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2986__$1,cljs.core.cst$kw$db);
var vec__2987 = p__2985;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2987,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2987,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_store,"Extension ID"], null),m)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_mode,(function (p__2991,p__2992){
var map__2993 = p__2991;
var map__2993__$1 = (((((!((map__2993 == null))))?(((((map__2993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2993):map__2993);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2993__$1,cljs.core.cst$kw$db);
var vec__2994 = p__2992;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2994,(0),null);
var simple_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2994,(1),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$simple_DASH_mode_QMARK_,simple_QMARK_)], null),(cljs.core.truth_(simple_QMARK_)?(function (){var map__2998 = pluto.core.read(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db));
var map__2998__$1 = (((((!((map__2998 == null))))?(((((map__2998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2998):map__2998);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2998__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2998__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
return null;
} else {
var simple_items = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__2998,map__2998__$1,data,errors,map__2993,map__2993__$1,db,vec__2994,_,simple_QMARK_){
return (function (p__3003){
var vec__3004 = p__3003;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3004,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3004,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__3011_3015 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__3012_3016 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__3013_3017 = true;
var _STAR_print_fn_STAR__temp_val__3014_3018 = ((function (_STAR_print_newline_STAR__orig_val__3011_3015,_STAR_print_fn_STAR__orig_val__3012_3016,_STAR_print_newline_STAR__temp_val__3013_3017,sb__4661__auto__,vec__3004,key,value,map__2998,map__2998__$1,data,errors,map__2993,map__2993__$1,db,vec__2994,_,simple_QMARK_){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__3011_3015,_STAR_print_fn_STAR__orig_val__3012_3016,_STAR_print_newline_STAR__temp_val__3013_3017,sb__4661__auto__,vec__3004,key,value,map__2998,map__2998__$1,data,errors,map__2993,map__2993__$1,db,vec__2994,_,simple_QMARK_))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__3013_3017;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__3014_3018;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(value);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__3012_3016;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__3011_3015;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})()]);
});})(map__2998,map__2998__$1,data,errors,map__2993,map__2993__$1,db,vec__2994,_,simple_QMARK_))
,data));
var vec__3000 = cljs.core.first(simple_items);
var first_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3000,(0),null);
var first_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3000,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$simple_DASH_mode_QMARK_,simple_QMARK_),cljs.core.cst$kw$simple_DASH_sources,simple_items),cljs.core.cst$kw$simple_DASH_item,first_key),cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code_DASH_mirror.cljs$core$IFn$_invoke$arity$1(db),first_value], null)], null);
}
})():(function (){var source = pluto.playground.fx.get_source_from_sources(cljs.core.cst$kw$simple_DASH_sources.cljs$core$IFn$_invoke$arity$1(db));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$source,source),cljs.core.cst$kw$simple_DASH_mode_QMARK_,simple_QMARK_),cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code_DASH_mirror.cljs$core$IFn$_invoke$arity$1(db),source], null)], null);
})())], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_select_DASH_simple_DASH_item,(function (p__3019,p__3020){
var map__3021 = p__3019;
var map__3021__$1 = (((((!((map__3021 == null))))?(((((map__3021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3021):map__3021);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3021__$1,cljs.core.cst$kw$db);
var vec__3022 = p__3020;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3022,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3022,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$simple_DASH_item,item),cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code_DASH_mirror.cljs$core$IFn$_invoke$arity$1(db),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$simple_DASH_sources,item], null))], null)], null);
}));
pluto.playground.fx.get_full_name = (function pluto$playground$fx$get_full_name(item_type,item_name){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__3027 = item_type;
switch (G__3027) {
case "views/chat":
return "views/";

break;
default:
return item_type;

}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(clojure.string.replace(clojure.string.trim(item_name),/ /,"-")))].join('');
});
pluto.playground.fx.get_new_source = (function pluto$playground$fx$get_new_source(item_type){
var G__3029 = item_type;
switch (G__3029) {
case "views/":
return "[view]";

break;
case "views/chat":
return "(let [{{{id :id} :params} :content} properties] \n [view \n [text id]])";

break;
case "events/":
return "[]";

break;
case "hooks/chat.command.":
return "{:description   \"\"\n :scope         #{:personal-chats :public-chats}\n :preview       [preview]\n :short-preview [short-preview]\n :parameters    [{:id          :id\n                  :type        :text\n                  :placeholder \"My placeholder\"\n                  :suggestions [suggestions-view]}]}";

break;
case "hooks/wallet.settings.":
return "{:label   \"\"\n :view    [my-view]}";

break;
case "hooks/profile.settings.":
return "{:label   \"\"\n :view    [my-view]}";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__3029)].join('')));

}
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_add_DASH_edn_DASH_item,(function (p__3031,_){
var map__3032 = p__3031;
var map__3032__$1 = (((((!((map__3032 == null))))?(((((map__3032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3032):map__3032);
var map__3033 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3032__$1,cljs.core.cst$kw$db);
var map__3033__$1 = (((((!((map__3033 == null))))?(((((map__3033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3033):map__3033);
var db = map__3033__$1;
var add_edn_item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3033__$1,cljs.core.cst$kw$add_DASH_edn_DASH_item);
var map__3036 = add_edn_item;
var map__3036__$1 = (((((!((map__3036 == null))))?(((((map__3036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3036):map__3036);
var item_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3036__$1,cljs.core.cst$kw$item_DASH_name);
var item_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3036__$1,cljs.core.cst$kw$item_DASH_type);
var full_name = pluto.playground.fx.get_full_name(item_type,item_name);
var new_source = pluto.playground.fx.get_new_source(item_type);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$add_DASH_edn_DASH_item),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$simple_DASH_sources,full_name], null),new_source),cljs.core.cst$kw$simple_DASH_item,full_name),cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code_DASH_mirror.cljs$core$IFn$_invoke$arity$1(db),new_source], null)], null);
}));
