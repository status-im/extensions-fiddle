// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.playground.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
var G__2345_2351 = cljs.core.cst$kw$get;
var G__2346_2352 = ((function (G__2345_2351){
return (function (db,p__2347){
var vec__2348 = p__2347;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2348,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2348,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,k);
});})(G__2345_2351))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2345_2351,G__2346_2352) : re_frame.core.reg_sub.call(null,G__2345_2351,G__2346_2352));
var G__2353_2359 = cljs.core.cst$kw$get_DASH_in;
var G__2354_2360 = ((function (G__2353_2359){
return (function (db,p__2355){
var vec__2356 = p__2355;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2356,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2356,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path);
});})(G__2353_2359))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2353_2359,G__2354_2360) : re_frame.core.reg_sub.call(null,G__2353_2359,G__2354_2360));
pluto.playground.subs.extension_parsed = (function pluto$playground$subs$extension_parsed(db,v){
return cljs.core.cst$kw$parsed.cljs$core$IFn$_invoke$arity$1(db);
});
var G__2361_2363 = cljs.core.cst$kw$extension_SLASH_parsed;
var G__2362_2364 = pluto.playground.subs.extension_parsed;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2361_2363,G__2362_2364) : re_frame.core.reg_sub.call(null,G__2361_2363,G__2362_2364));
pluto.playground.subs.extension_data = (function pluto$playground$subs$extension_data(db,v){
return cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(db);
});
var G__2365_2367 = cljs.core.cst$kw$extension_SLASH_data;
var G__2366_2368 = pluto.playground.subs.extension_data;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2365_2367,G__2366_2368) : re_frame.core.reg_sub.call(null,G__2365_2367,G__2366_2368));
pluto.playground.subs.extension_source = (function pluto$playground$subs$extension_source(db,v){
return cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db);
});
var G__2369_2371 = cljs.core.cst$kw$extension_SLASH_source;
var G__2370_2372 = pluto.playground.subs.extension_source;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2369_2371,G__2370_2372) : re_frame.core.reg_sub.call(null,G__2369_2371,G__2370_2372));
var G__2373_2375 = cljs.core.cst$kw$extension_SLASH_logs;
var G__2374_2376 = cljs.core.cst$kw$logs;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2373_2375,G__2374_2376) : re_frame.core.reg_sub.call(null,G__2373_2375,G__2374_2376));
var G__2377_2379 = cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs_QMARK_;
var G__2378_2380 = cljs.core.cst$kw$filtered_DASH_logs;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2377_2379,G__2378_2380) : re_frame.core.reg_sub.call(null,G__2377_2379,G__2378_2380));
var G__2382_2392 = cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs;
var G__2383_2393 = cljs.core.cst$kw$_LT__DASH_;
var G__2384_2394 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_logs], null);
var G__2385_2395 = cljs.core.cst$kw$_LT__DASH_;
var G__2386_2396 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs_QMARK_], null);
var G__2387_2397 = ((function (G__2382_2392,G__2383_2393,G__2384_2394,G__2385_2395,G__2386_2396){
return (function (p__2388){
var vec__2389 = p__2388;
var logs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2389,(0),null);
var filtered_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2389,(1),null);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__2389,logs,filtered_QMARK_,G__2382_2392,G__2383_2393,G__2384_2394,G__2385_2395,G__2386_2396){
return (function (p1__2381_SHARP_){
if(filtered_QMARK_ === true){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$category.cljs$core$IFn$_invoke$arity$1(p1__2381_SHARP_),cljs.core.cst$kw$pluto$log_SLASH_trace);
} else {
return true;
}
});})(vec__2389,logs,filtered_QMARK_,G__2382_2392,G__2383_2393,G__2384_2394,G__2385_2395,G__2386_2396))
,logs);
});})(G__2382_2392,G__2383_2393,G__2384_2394,G__2385_2395,G__2386_2396))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__2382_2392,G__2383_2393,G__2384_2394,G__2385_2395,G__2386_2396,G__2387_2397) : re_frame.core.reg_sub.call(null,G__2382_2392,G__2383_2393,G__2384_2394,G__2385_2395,G__2386_2396,G__2387_2397));
var G__2398_2400 = cljs.core.cst$kw$extension_SLASH_errors;
var G__2399_2401 = cljs.core.cst$kw$errors;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2398_2400,G__2399_2401) : re_frame.core.reg_sub.call(null,G__2398_2400,G__2399_2401));
pluto.playground.subs.selected = (function pluto$playground$subs$selected(db,v){
return cljs.core.cst$kw$selected.cljs$core$IFn$_invoke$arity$1(db);
});
var G__2402_2404 = cljs.core.cst$kw$extension_SLASH_selected;
var G__2403_2405 = pluto.playground.subs.selected;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2402_2404,G__2403_2405) : re_frame.core.reg_sub.call(null,G__2402_2404,G__2403_2405));
pluto.playground.subs.preview = (function pluto$playground$subs$preview(db,v){
var or__4131__auto__ = cljs.core.cst$kw$preview.cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return false;
}
});
var G__2406_2408 = cljs.core.cst$kw$extension_SLASH_preview;
var G__2407_2409 = pluto.playground.subs.preview;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2406_2408,G__2407_2409) : re_frame.core.reg_sub.call(null,G__2406_2408,G__2407_2409));
