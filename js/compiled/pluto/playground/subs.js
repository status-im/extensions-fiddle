// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.playground.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('clojure.string');
var G__3341_3347 = cljs.core.cst$kw$get;
var G__3342_3348 = ((function (G__3341_3347){
return (function (db,p__3343){
var vec__3344 = p__3343;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3344,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3344,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,k);
});})(G__3341_3347))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__3341_3347,G__3342_3348) : re_frame.core.reg_sub.call(null,G__3341_3347,G__3342_3348));
var G__3349_3355 = cljs.core.cst$kw$get_DASH_in;
var G__3350_3356 = ((function (G__3349_3355){
return (function (db,p__3351){
var vec__3352 = p__3351;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3352,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3352,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path);
});})(G__3349_3355))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__3349_3355,G__3350_3356) : re_frame.core.reg_sub.call(null,G__3349_3355,G__3350_3356));
pluto.playground.subs.extension_parsed = (function pluto$playground$subs$extension_parsed(db,v){
return cljs.core.cst$kw$parsed.cljs$core$IFn$_invoke$arity$1(db);
});
var G__3357_3359 = cljs.core.cst$kw$extension_SLASH_parsed;
var G__3358_3360 = pluto.playground.subs.extension_parsed;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__3357_3359,G__3358_3360) : re_frame.core.reg_sub.call(null,G__3357_3359,G__3358_3360));
pluto.playground.subs.extension_data = (function pluto$playground$subs$extension_data(db,v){
return cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(db);
});
var G__3361_3363 = cljs.core.cst$kw$extension_SLASH_data;
var G__3362_3364 = pluto.playground.subs.extension_data;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__3361_3363,G__3362_3364) : re_frame.core.reg_sub.call(null,G__3361_3363,G__3362_3364));
pluto.playground.subs.extension_source = (function pluto$playground$subs$extension_source(db,v){
return cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db);
});
var G__3365_3367 = cljs.core.cst$kw$extension_SLASH_source;
var G__3366_3368 = pluto.playground.subs.extension_source;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__3365_3367,G__3366_3368) : re_frame.core.reg_sub.call(null,G__3365_3367,G__3366_3368));
var G__3369_3371 = cljs.core.cst$kw$extension_SLASH_logs;
var G__3370_3372 = cljs.core.cst$kw$logs;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__3369_3371,G__3370_3372) : re_frame.core.reg_sub.call(null,G__3369_3371,G__3370_3372));
var G__3373_3375 = cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs_QMARK_;
var G__3374_3376 = cljs.core.cst$kw$filtered_DASH_logs;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__3373_3375,G__3374_3376) : re_frame.core.reg_sub.call(null,G__3373_3375,G__3374_3376));
var G__3378_3388 = cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs;
var G__3379_3389 = cljs.core.cst$kw$_LT__DASH_;
var G__3380_3390 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_logs], null);
var G__3381_3391 = cljs.core.cst$kw$_LT__DASH_;
var G__3382_3392 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs_QMARK_], null);
var G__3383_3393 = ((function (G__3378_3388,G__3379_3389,G__3380_3390,G__3381_3391,G__3382_3392){
return (function (p__3384){
var vec__3385 = p__3384;
var logs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3385,(0),null);
var filtered_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3385,(1),null);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__3385,logs,filtered_QMARK_,G__3378_3388,G__3379_3389,G__3380_3390,G__3381_3391,G__3382_3392){
return (function (p1__3377_SHARP_){
if(filtered_QMARK_ === true){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$category.cljs$core$IFn$_invoke$arity$1(p1__3377_SHARP_),cljs.core.cst$kw$pluto$log_SLASH_trace);
} else {
return true;
}
});})(vec__3385,logs,filtered_QMARK_,G__3378_3388,G__3379_3389,G__3380_3390,G__3381_3391,G__3382_3392))
,logs);
});})(G__3378_3388,G__3379_3389,G__3380_3390,G__3381_3391,G__3382_3392))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__3378_3388,G__3379_3389,G__3380_3390,G__3381_3391,G__3382_3392,G__3383_3393) : re_frame.core.reg_sub.call(null,G__3378_3388,G__3379_3389,G__3380_3390,G__3381_3391,G__3382_3392,G__3383_3393));
var G__3394_3396 = cljs.core.cst$kw$extension_SLASH_errors;
var G__3395_3397 = cljs.core.cst$kw$errors;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__3394_3396,G__3395_3397) : re_frame.core.reg_sub.call(null,G__3394_3396,G__3395_3397));
pluto.playground.subs.selected = (function pluto$playground$subs$selected(db,v){
return cljs.core.cst$kw$selected.cljs$core$IFn$_invoke$arity$1(db);
});
var G__3398_3400 = cljs.core.cst$kw$extension_SLASH_selected;
var G__3399_3401 = pluto.playground.subs.selected;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__3398_3400,G__3399_3401) : re_frame.core.reg_sub.call(null,G__3398_3400,G__3399_3401));
pluto.playground.subs.preview = (function pluto$playground$subs$preview(db,v){
var or__4131__auto__ = cljs.core.cst$kw$preview.cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return false;
}
});
var G__3402_3404 = cljs.core.cst$kw$extension_SLASH_preview;
var G__3403_3405 = pluto.playground.subs.preview;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__3402_3404,G__3403_3405) : re_frame.core.reg_sub.call(null,G__3402_3404,G__3403_3405));
var G__3406_3412 = cljs.core.cst$kw$extension_SLASH_properties;
var G__3407_3413 = ((function (G__3406_3412){
return (function (db,p__3408){
var vec__3409 = p__3408;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3409,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3409,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3409,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_properties,id], null));
});})(G__3406_3412))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__3406_3412,G__3407_3413) : re_frame.core.reg_sub.call(null,G__3406_3412,G__3407_3413));
var G__3416_3423 = cljs.core.cst$kw$extension_DASH_keys;
var G__3417_3424 = cljs.core.cst$kw$_LT__DASH_;
var G__3418_3425 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_parsed], null);
var G__3419_3426 = ((function (G__3416_3423,G__3417_3424,G__3418_3425){
return (function (p__3420){
var map__3421 = p__3420;
var map__3421__$1 = (((((!((map__3421 == null))))?(((((map__3421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3421):map__3421);
var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3421__$1,cljs.core.cst$kw$views);
var hooks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3421__$1,cljs.core.cst$kw$hooks);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__3421,map__3421__$1,views,hooks,G__3416_3423,G__3417_3424,G__3418_3425){
return (function (p1__3414_SHARP_){
return ["hooks/",cljs.core.name(p1__3414_SHARP_)].join('');
});})(map__3421,map__3421__$1,views,hooks,G__3416_3423,G__3417_3424,G__3418_3425))
,cljs.core.keys(hooks)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__3421,map__3421__$1,views,hooks,G__3416_3423,G__3417_3424,G__3418_3425){
return (function (p1__3415_SHARP_){
return ["views/",cljs.core.name(p1__3415_SHARP_)].join('');
});})(map__3421,map__3421__$1,views,hooks,G__3416_3423,G__3417_3424,G__3418_3425))
,cljs.core.keys(views)));
});})(G__3416_3423,G__3417_3424,G__3418_3425))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__3416_3423,G__3417_3424,G__3418_3425,G__3419_3426) : re_frame.core.reg_sub.call(null,G__3416_3423,G__3417_3424,G__3418_3425,G__3419_3426));
var G__3427_3437 = cljs.core.cst$kw$extension_DASH_selection;
var G__3428_3438 = cljs.core.cst$kw$_LT__DASH_;
var G__3429_3439 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$extension_DASH_selection], null);
var G__3430_3440 = cljs.core.cst$kw$_LT__DASH_;
var G__3431_3441 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_keys], null);
var G__3432_3442 = ((function (G__3427_3437,G__3428_3438,G__3429_3439,G__3430_3440,G__3431_3441){
return (function (p__3433){
var vec__3434 = p__3433;
var extension_selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3434,(0),null);
var extension_keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3434,(1),null);
if(cljs.core.truth_(extension_selection)){
return extension_selection;
} else {
return cljs.core.first(extension_keys);
}
});})(G__3427_3437,G__3428_3438,G__3429_3439,G__3430_3440,G__3431_3441))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__3427_3437,G__3428_3438,G__3429_3439,G__3430_3440,G__3431_3441,G__3432_3442) : re_frame.core.reg_sub.call(null,G__3427_3437,G__3428_3438,G__3429_3439,G__3430_3440,G__3431_3441,G__3432_3442));
var G__3443_3453 = cljs.core.cst$kw$extension_SLASH_selected_DASH_properties;
var G__3444_3454 = cljs.core.cst$kw$_LT__DASH_;
var G__3445_3455 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$extensions_SLASH_properties], null);
var G__3446_3456 = cljs.core.cst$kw$_LT__DASH_;
var G__3447_3457 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_selection], null);
var G__3448_3458 = ((function (G__3443_3453,G__3444_3454,G__3445_3455,G__3446_3456,G__3447_3457){
return (function (p__3449){
var vec__3450 = p__3449;
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3450,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3450,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,id);
});})(G__3443_3453,G__3444_3454,G__3445_3455,G__3446_3456,G__3447_3457))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__3443_3453,G__3444_3454,G__3445_3455,G__3446_3456,G__3447_3457,G__3448_3458) : re_frame.core.reg_sub.call(null,G__3443_3453,G__3444_3454,G__3445_3455,G__3446_3456,G__3447_3457,G__3448_3458));
var G__3459_3461 = cljs.core.cst$kw$store_SLASH_all;
var G__3460_3462 = ((function (G__3459_3461){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_store,"Extension ID"], null));
});})(G__3459_3461))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__3459_3461,G__3460_3462) : re_frame.core.reg_sub.call(null,G__3459_3461,G__3460_3462));
var G__3463_3487 = cljs.core.cst$kw$extension_SLASH_simple_DASH_sources;
var G__3464_3488 = cljs.core.cst$kw$_LT__DASH_;
var G__3465_3489 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$simple_DASH_sources], null);
var G__3466_3490 = ((function (G__3463_3487,G__3464_3488,G__3465_3489){
return (function (sources){
var meta = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__3463_3487,G__3464_3488,G__3465_3489){
return (function (p__3467){
var vec__3468 = p__3467;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3468,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3468,(1),null);
return (clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(key,"meta") === (0));
});})(G__3463_3487,G__3464_3488,G__3465_3489))
,sources);
var life = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (meta,G__3463_3487,G__3464_3488,G__3465_3489){
return (function (p__3471){
var vec__3472 = p__3471;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3472,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3472,(1),null);
return (clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(key,"lifecycle") === (0));
});})(meta,G__3463_3487,G__3464_3488,G__3465_3489))
,sources);
var events = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (meta,life,G__3463_3487,G__3464_3488,G__3465_3489){
return (function (p__3475){
var vec__3476 = p__3475;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3476,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3476,(1),null);
return (clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(key,"events/") === (0));
});})(meta,life,G__3463_3487,G__3464_3488,G__3465_3489))
,sources);
var views = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (meta,life,events,G__3463_3487,G__3464_3488,G__3465_3489){
return (function (p__3479){
var vec__3480 = p__3479;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3480,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3480,(1),null);
return (clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(key,"views/") === (0));
});})(meta,life,events,G__3463_3487,G__3464_3488,G__3465_3489))
,sources);
var hooks = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (meta,life,events,views,G__3463_3487,G__3464_3488,G__3465_3489){
return (function (p__3483){
var vec__3484 = p__3483;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3484,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3484,(1),null);
return (clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(key,"hooks/") === (0));
});})(meta,life,events,views,G__3463_3487,G__3464_3488,G__3465_3489))
,sources);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$meta,meta,cljs.core.cst$kw$events,events,cljs.core.cst$kw$views,views,cljs.core.cst$kw$hooks,hooks,cljs.core.cst$kw$life,life], null);
});})(G__3463_3487,G__3464_3488,G__3465_3489))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__3463_3487,G__3464_3488,G__3465_3489,G__3466_3490) : re_frame.core.reg_sub.call(null,G__3463_3487,G__3464_3488,G__3465_3489,G__3466_3490));
