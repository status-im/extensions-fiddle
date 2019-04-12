// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.playground.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('pluto.playground.components.source');
goog.require('pluto.playground.components.logs');
goog.require('pluto.playground.fx');
goog.require('pluto.playground.subs');
goog.require('pluto.reader.events');
goog.require('pluto.reader.views');
goog.require('pluto.log');
goog.require('react_native_web.extensions');
goog.require('react_native_web.hooks');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('react_native_web.react');
goog.require('pluto.playground.components.dialogs');
goog.require('pluto.playground.components.material_ui');
pluto.playground.core.warn = console.warn.bind(console);
pluto.playground.core.margin = (10);
re_frame.loggers.set_loggers_BANG_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$warn,(function() { 
var G__2399__delegate = function (args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("re-frame: overwriting",cljs.core.first(args))){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pluto.playground.core.warn,args);

}
};
var G__2399 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2400__i = 0, G__2400__a = new Array(arguments.length -  0);
while (G__2400__i < G__2400__a.length) {G__2400__a[G__2400__i] = arguments[G__2400__i + 0]; ++G__2400__i;}
  args = new cljs.core.IndexedSeq(G__2400__a,0,null);
} 
return G__2399__delegate.call(this,args);};
G__2399.cljs$lang$maxFixedArity = 0;
G__2399.cljs$lang$applyTo = (function (arglist__2401){
var args = cljs.core.seq(arglist__2401);
return G__2399__delegate(args);
});
G__2399.cljs$core$IFn$_invoke$arity$variadic = G__2399__delegate;
return G__2399;
})()
], null));
pluto.playground.core.dispatch_events = (function pluto$playground$core$dispatch_events(ctx,events){
var seq__2402 = cljs.core.seq(events);
var chunk__2403 = null;
var count__2404 = (0);
var i__2405 = (0);
while(true){
if((i__2405 < count__2404)){
var event = chunk__2403.cljs$core$IIndexed$_nth$arity$2(null,i__2405);
if(cljs.core.vector_QMARK_(event)){
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(event) : re_frame.core.dispatch.call(null,event));
} else {
pluto.log.fire_BANG_(ctx,cljs.core.cst$kw$pluto$log_SLASH_error,cljs.core.cst$kw$event_SLASH_dispatch,event);
}


var G__2406 = seq__2402;
var G__2407 = chunk__2403;
var G__2408 = count__2404;
var G__2409 = (i__2405 + (1));
seq__2402 = G__2406;
chunk__2403 = G__2407;
count__2404 = G__2408;
i__2405 = G__2409;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__2402);
if(temp__5720__auto__){
var seq__2402__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__2402__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__2402__$1);
var G__2410 = cljs.core.chunk_rest(seq__2402__$1);
var G__2411 = c__4550__auto__;
var G__2412 = cljs.core.count(c__4550__auto__);
var G__2413 = (0);
seq__2402 = G__2410;
chunk__2403 = G__2411;
count__2404 = G__2412;
i__2405 = G__2413;
continue;
} else {
var event = cljs.core.first(seq__2402__$1);
if(cljs.core.vector_QMARK_(event)){
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(event) : re_frame.core.dispatch.call(null,event));
} else {
pluto.log.fire_BANG_(ctx,cljs.core.cst$kw$pluto$log_SLASH_error,cljs.core.cst$kw$event_SLASH_dispatch,event);
}


var G__2414 = cljs.core.next(seq__2402__$1);
var G__2415 = null;
var G__2416 = (0);
var G__2417 = (0);
seq__2402 = G__2414;
chunk__2403 = G__2415;
count__2404 = G__2416;
i__2405 = G__2417;
continue;
}
} else {
return null;
}
}
break;
}
});
pluto.playground.core.resolve_query = (function pluto$playground$core$resolve_query(ctx,p__2418){
var vec__2419 = p__2418;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2419,(0),null);
var data = vec__2419;
if(cljs.core.truth_(re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sub,id))){
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(data) : re_frame.core.subscribe.call(null,data));
} else {
return pluto.log.fire_BANG_(ctx,cljs.core.cst$kw$pluto$log_SLASH_error,cljs.core.cst$kw$query_SLASH_resolve,data);
}
});
pluto.playground.core.cartouche = (function pluto$playground$core$cartouche(p__2422,data){
var map__2423 = p__2422;
var map__2423__$1 = (((((!((map__2423 == null))))?(((((map__2423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2423):map__2423);
var m = map__2423__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2423__$1,cljs.core.cst$kw$path);
var p = cljs.core.deref((function (){var G__2425 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_selected], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2425) : re_frame.core.subscribe.call(null,G__2425));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_mouse_DASH_enter,((function (p,map__2423,map__2423__$1,m,path){
return (function (){
var G__2426 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_set_DASH_selected,path], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2426) : re_frame.core.dispatch.call(null,G__2426));
});})(p,map__2423,map__2423__$1,m,path))
,cljs.core.cst$kw$on_DASH_mouse_DASH_leave,((function (p,map__2423,map__2423__$1,m,path){
return (function (){
var G__2427 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_set_DASH_selected,null], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2427) : re_frame.core.dispatch.call(null,G__2427));
});})(p,map__2423,map__2423__$1,m,path))
,cljs.core.cst$kw$style,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,path))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border,"1px solid black"], null):null)], null),data], null);
});
pluto.playground.core.wrap_view = (function pluto$playground$core$wrap_view(parent_ctx,data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.cartouche,parent_ctx,data], null);
});
pluto.playground.core.ctx = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"Extension ID"], null),cljs.core.cst$kw$capacities,react_native_web.extensions.capacities,cljs.core.cst$kw$query_DASH_fn,pluto.playground.core.resolve_query,cljs.core.cst$kw$event_DASH_fn,pluto.playground.core.dispatch_events,cljs.core.cst$kw$log_DASH_fn,(function (p1__2428_SHARP_){
var G__2429 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_append_DASH_log,p1__2428_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2429) : re_frame.core.dispatch.call(null,G__2429));
})], null);
pluto.playground.core.flatten_errors = (function pluto$playground$core$flatten_errors(m){
if(cljs.core.map_QMARK_(m)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.reduce_kv((function (p1__2430_SHARP_,p2__2432_SHARP_,p3__2431_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p1__2430_SHARP_,((cljs.core.map_QMARK_(p3__2431_SHARP_))?cljs.core.vals(p3__2431_SHARP_):p3__2431_SHARP_));
}),cljs.core.PersistentVector.EMPTY,m));
} else {
return null;
}
});
pluto.playground.core.parse_extension_id = (function pluto$playground$core$parse_extension_id(extension_selection){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,clojure.string.split.cljs$core$IFn$_invoke$arity$2(extension_selection,/\//));
});
pluto.playground.core.view = (function pluto$playground$core$view(props,data,id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$views,id], null)),props], null);
});
if(cljs.core.truth_(cljs.core.find_ns(cljs.core.cst$sym$re_DASH_frame$core))){
} else {
goog.require('re_frame.core');
}

pluto.playground.core.selected_ui = (function pluto$playground$core$selected_ui(){
var extension_selection2433 = (function (){var G__2436 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_selection], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2436) : re_frame.core.subscribe.call(null,G__2436));
})();
var props2434 = (function (){var G__2437 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_selected_DASH_properties], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2437) : re_frame.core.subscribe.call(null,G__2437));
})();
var data2435 = (function (){var G__2438 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_parsed], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2438) : re_frame.core.subscribe.call(null,G__2438));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (extension_selection2433,props2434,data2435){
return (function (){
var extension_selection = cljs.core.deref(extension_selection2433);
var props = cljs.core.deref(props2434);
var data = cljs.core.deref(data2435);
var vec__2439 = pluto.playground.core.parse_extension_id(extension_selection);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2439,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2439,(1),null);
var G__2442 = type;
var G__2442__$1 = (((G__2442 instanceof cljs.core.Keyword))?G__2442.fqn:null);
switch (G__2442__$1) {
case "hooks":
return react_native_web.hooks.hook_in(id,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hooks,id], null)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.cst$kw$lifecycle),props);

break;
case "views":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex,(1),cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$center,cljs.core.cst$kw$max_DASH_width,"100%"], null)], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex,(1),cljs.core.cst$kw$height,cljs.core.cst$kw$max_DASH_content,cljs.core.cst$kw$overflow,cljs.core.cst$kw$auto,cljs.core.cst$kw$max_DASH_width,"100%",cljs.core.cst$kw$border,"blue 1px solid"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.view,props,data,id], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(props),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join('')], null))], null);

break;
default:
return null;

}
});})(extension_selection2433,props2434,data2435))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$selected_DASH_ui)], null)], 0)));
});
if(cljs.core.truth_(cljs.core.find_ns(cljs.core.cst$sym$re_DASH_frame$core))){
} else {
goog.require('re_frame.core');
}

pluto.playground.core.eth_wallet = (function pluto$playground$core$eth_wallet(){
var ethereum_addr2446 = (function (){var G__2447 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$ethereum_DASH_addr], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2447) : re_frame.core.subscribe.call(null,G__2447));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (ethereum_addr2446){
return (function (){
var ethereum_addr = cljs.core.deref(ethereum_addr2446);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$flex,(1),cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$flex_DASH_end,cljs.core.cst$kw$padding,(10)], null)], null),(cljs.core.truth_(ethereum_addr)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"inherit"], null)], null),"Wallet connected: ",ethereum_addr], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.material_ui.button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$on_DASH_click,((function (ethereum_addr,ethereum_addr2446){
return (function (){
var G__2448 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_init_DASH_wallet], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2448) : re_frame.core.dispatch.call(null,G__2448));
});})(ethereum_addr,ethereum_addr2446))
], null),"Connect wallet"], null))], null);
});})(ethereum_addr2446))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$eth_DASH_wallet)], null)], 0)));
});
if(cljs.core.truth_(cljs.core.find_ns(cljs.core.cst$sym$re_DASH_frame$core))){
} else {
goog.require('re_frame.core');
}

pluto.playground.core.view_selection = (function pluto$playground$core$view_selection(){
var selection2454 = (function (){var G__2456 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_selection], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2456) : re_frame.core.subscribe.call(null,G__2456));
})();
var extension_keys2455 = (function (){var G__2457 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_keys], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2457) : re_frame.core.subscribe.call(null,G__2457));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (selection2454,extension_keys2455){
return (function (){
var selection = cljs.core.deref(selection2454);
var extension_keys = cljs.core.deref(extension_keys2455);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$flex_DASH_end,cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center,cljs.core.cst$kw$margin_DASH_top,pluto.playground.core.margin], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.material_ui.select,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_change,((function (selection,extension_keys,selection2454,extension_keys2455){
return (function (p1__2452_SHARP_,p2__2451_SHARP_){
var G__2458 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$extension_DASH_selection,p2__2451_SHARP_.key], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2458) : re_frame.core.dispatch.call(null,G__2458));
});})(selection,extension_keys,selection2454,extension_keys2455))
,cljs.core.cst$kw$selected,selection,cljs.core.cst$kw$options,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (selection,extension_keys,selection2454,extension_keys2455){
return (function (p1__2453_SHARP_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,p1__2453_SHARP_,cljs.core.cst$kw$label,p1__2453_SHARP_], null);
});})(selection,extension_keys,selection2454,extension_keys2455))
,extension_keys)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,pluto.playground.core.margin], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.material_ui.button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,"primary",cljs.core.cst$kw$variant,"contained",cljs.core.cst$kw$on_DASH_click,((function (selection,extension_keys,selection2454,extension_keys2455){
return (function (){
var G__2459 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$browse_DASH_properties,true], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2459) : re_frame.core.dispatch.call(null,G__2459));
});})(selection,extension_keys,selection2454,extension_keys2455))
], null),"Data"], null)], null)], null);
});})(selection2454,extension_keys2455))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$view_DASH_selection)], null)], 0)));
});
if(cljs.core.truth_(cljs.core.find_ns(cljs.core.cst$sym$re_DASH_frame$core))){
} else {
goog.require('re_frame.core');
}

pluto.playground.core.logs_errors = (function pluto$playground$core$logs_errors(){
var logs2462 = (function (){var G__2464 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2464) : re_frame.core.subscribe.call(null,G__2464));
})();
var errors2463 = (function (){var G__2465 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_errors], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2465) : re_frame.core.subscribe.call(null,G__2465));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (logs2462,errors2463){
return (function (){
var logs = cljs.core.deref(logs2462);
var errors = cljs.core.deref(errors2463);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.logs.table,(function (){var or__4131__auto__ = pluto.playground.core.flatten_errors(errors);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return logs;
}
})()], null);
});})(logs2462,errors2463))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$logs_DASH_errors)], null)], 0)));
});
pluto.playground.core.simple_item = (function pluto$playground$core$simple_item(key,item){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex,(1)], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,item))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$width,(5),cljs.core.cst$kw$background_DASH_color,"#3f51b5",cljs.core.cst$kw$min_DASH_width,(5)], null)], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$cursor,cljs.core.cst$kw$pointer,cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$border_DASH_radius,"4px",cljs.core.cst$kw$padding,(5),cljs.core.cst$kw$font_DASH_weight,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,item))?cljs.core.cst$kw$bold:null)], null),cljs.core.cst$kw$on_DASH_click,(function (){
var G__2468 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_select_DASH_simple_DASH_item,key], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2468) : re_frame.core.dispatch.call(null,G__2468));
})], null),key], null)], null);
});
pluto.playground.core.simple_edn_type_items = (function pluto$playground$core$simple_edn_type_items(value,label,item){
if(cljs.core.seq(value)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column,cljs.core.cst$kw$margin_DASH_top,(10)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_weight,cljs.core.cst$kw$bold], null)], null),label], null),(function (){var iter__4523__auto__ = (function pluto$playground$core$simple_edn_type_items_$_iter__2469(s__2470){
return (new cljs.core.LazySeq(null,(function (){
var s__2470__$1 = s__2470;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__2470__$1);
if(temp__5720__auto__){
var s__2470__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__2470__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__2470__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__2472 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__2471 = (0);
while(true){
if((i__2471 < size__4522__auto__)){
var vec__2473 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__2471);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2473,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2473,(1),null);
cljs.core.chunk_append(b__2472,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.simple_item,key,item], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,key], null)));

var G__2479 = (i__2471 + (1));
i__2471 = G__2479;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__2472),pluto$playground$core$simple_edn_type_items_$_iter__2469(cljs.core.chunk_rest(s__2470__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__2472),null);
}
} else {
var vec__2476 = cljs.core.first(s__2470__$2);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2476,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2476,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.simple_item,key,item], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,key], null)),pluto$playground$core$simple_edn_type_items_$_iter__2469(cljs.core.rest(s__2470__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(value);
})()], null);
} else {
return null;
}
});
if(cljs.core.truth_(cljs.core.find_ns(cljs.core.cst$sym$re_DASH_frame$core))){
} else {
goog.require('re_frame.core');
}

pluto.playground.core.simple_panel = (function pluto$playground$core$simple_panel(){
var keys2480 = (function (){var G__2483 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_simple_DASH_sources], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2483) : re_frame.core.subscribe.call(null,G__2483));
})();
var simple_QMARK_2481 = (function (){var G__2484 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$simple_DASH_mode_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2484) : re_frame.core.subscribe.call(null,G__2484));
})();
var item2482 = (function (){var G__2485 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$simple_DASH_item], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2485) : re_frame.core.subscribe.call(null,G__2485));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (keys2480,simple_QMARK_2481,item2482){
return (function (){
var map__2486 = cljs.core.deref(keys2480);
var map__2486__$1 = (((((!((map__2486 == null))))?(((((map__2486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2486):map__2486);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2486__$1,cljs.core.cst$kw$meta);
var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2486__$1,cljs.core.cst$kw$views);
var events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2486__$1,cljs.core.cst$kw$events);
var hooks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2486__$1,cljs.core.cst$kw$hooks);
var life = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2486__$1,cljs.core.cst$kw$life);
var simple_QMARK_ = cljs.core.deref(simple_QMARK_2481);
var item = cljs.core.deref(item2482);
if(cljs.core.truth_(simple_QMARK_)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex,(1),cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column,cljs.core.cst$kw$padding,(5),cljs.core.cst$kw$width,(200)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.material_ui.button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,"primary",cljs.core.cst$kw$variant,"contained",cljs.core.cst$kw$on_DASH_click,((function (map__2486,map__2486__$1,meta,views,events,hooks,life,simple_QMARK_,item,keys2480,simple_QMARK_2481,item2482){
return (function (){
var G__2488 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$add_DASH_edn_DASH_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$item_DASH_type,"views/"], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2488) : re_frame.core.dispatch.call(null,G__2488));
});})(map__2486,map__2486__$1,meta,views,events,hooks,life,simple_QMARK_,item,keys2480,simple_QMARK_2481,item2482))
], null),"Add"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex,(1),cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column,cljs.core.cst$kw$overflow,cljs.core.cst$kw$auto,cljs.core.cst$kw$margin_DASH_top,(10)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.simple_edn_type_items,meta,"Meta",item], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.simple_edn_type_items,life,"Lifecycle",item], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.simple_edn_type_items,events,"Events",item], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.simple_edn_type_items,views,"Views",item], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.simple_edn_type_items,hooks,"Hooks",item], null)], null)], null);
} else {
return null;
}
});})(keys2480,simple_QMARK_2481,item2482))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$simple_DASH_panel)], null)], 0)));
});
if(cljs.core.truth_(cljs.core.find_ns(cljs.core.cst$sym$re_DASH_frame$core))){
} else {
goog.require('re_frame.core');
}

pluto.playground.core.layout = (function pluto$playground$core$layout(){
var keys2502 = (function (){var G__2504 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_parsed], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2504) : re_frame.core.subscribe.call(null,G__2504));
})();
var simple_QMARK_2503 = (function (){var G__2505 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$simple_DASH_mode_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2505) : re_frame.core.subscribe.call(null,G__2505));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (keys2502,simple_QMARK_2503){
return (function (){
var map__2506 = cljs.core.deref(keys2502);
var map__2506__$1 = (((((!((map__2506 == null))))?(((((map__2506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2506):map__2506);
var events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2506__$1,cljs.core.cst$kw$events);
var simple_QMARK_ = cljs.core.deref(simple_QMARK_2503);
var event_names = cljs.core.keys(events);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.material_ui.AppBar,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,cljs.core.cst$kw$static], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.material_ui.Toolbar,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$variant,"dense"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex,(1),cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$space_DASH_between], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$row,cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.material_ui.Typography,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$variant,"h6"], null),"Extensions Fiddle"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.material_ui.switch$,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,"default",cljs.core.cst$kw$checked,cljs.core.boolean$(simple_QMARK_),cljs.core.cst$kw$on_DASH_change,((function (event_names,map__2506,map__2506__$1,events,simple_QMARK_,keys2502,simple_QMARK_2503){
return (function (p1__2492_SHARP_,p2__2491_SHARP_){
var G__2508 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_switch_DASH_mode,p2__2491_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2508) : re_frame.core.dispatch.call(null,G__2508));
});})(event_names,map__2506,map__2506__$1,events,simple_QMARK_,keys2502,simple_QMARK_2503))
], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.material_ui.Typography,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$style,cljs.core.PersistentArrayMap.EMPTY], null),"Simple mode"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$row], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.material_ui.button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$on_DASH_click,((function (event_names,map__2506,map__2506__$1,events,simple_QMARK_,keys2502,simple_QMARK_2503){
return (function (){
return cljs.core.List.EMPTY;
});})(event_names,map__2506,map__2506__$1,events,simple_QMARK_,keys2502,simple_QMARK_2503))
], null),"New extension"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.eth_wallet], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.material_ui.button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$on_DASH_click,((function (event_names,map__2506,map__2506__$1,events,simple_QMARK_,keys2502,simple_QMARK_2503){
return (function (){
var G__2509 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$examples,true], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2509) : re_frame.core.dispatch.call(null,G__2509));
});})(event_names,map__2506,map__2506__$1,events,simple_QMARK_,keys2502,simple_QMARK_2503))
], null),"Examples"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.material_ui.button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$on_DASH_click,((function (event_names,map__2506,map__2506__$1,events,simple_QMARK_,keys2502,simple_QMARK_2503){
return (function (){
var G__2510 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_publish], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2510) : re_frame.core.dispatch.call(null,G__2510));
});})(event_names,map__2506,map__2506__$1,events,simple_QMARK_,keys2502,simple_QMARK_2503))
], null),"Publish"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.dialogs.dialogs], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.simple_panel], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$inline_DASH_block,cljs.core.cst$kw$width,["calc(100% - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(simple_QMARK_)?(600):(400))),"px)"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.source.editor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_change,((function (event_names,map__2506,map__2506__$1,events,simple_QMARK_,keys2502,simple_QMARK_2503){
return (function (p1__2493_SHARP_){
var G__2511 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_source,pluto.playground.core.ctx,p1__2493_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2511) : re_frame.core.dispatch.call(null,G__2511));
});})(event_names,map__2506,map__2506__$1,events,simple_QMARK_,keys2502,simple_QMARK_2503))
], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"#fafafa"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex,(1),cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$space_DASH_between], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.material_ui.Typography,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,pluto.playground.core.margin], null),cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$variant,"h6"], null),"Logs"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$flex_DASH_end,cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.material_ui.switch$,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"primary",cljs.core.cst$kw$on_DASH_change,((function (event_names,map__2506,map__2506__$1,events,simple_QMARK_,keys2502,simple_QMARK_2503){
return (function (p1__2495_SHARP_,p2__2494_SHARP_){
var G__2512 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_switch_DASH_filter_DASH_logs,p2__2494_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2512) : re_frame.core.dispatch.call(null,G__2512));
});})(event_names,map__2506,map__2506__$1,events,simple_QMARK_,keys2502,simple_QMARK_2503))
], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.material_ui.Typography,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,"10px"], null)], null),"Filter traces"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.material_ui.button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$on_DASH_click,((function (event_names,map__2506,map__2506__$1,events,simple_QMARK_,keys2502,simple_QMARK_2503){
return (function (){
var G__2513 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_clear_DASH_logs], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2513) : re_frame.core.dispatch.call(null,G__2513));
});})(event_names,map__2506,map__2506__$1,events,simple_QMARK_,keys2502,simple_QMARK_2503))
], null),"Clear logs"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$height,"calc(40% - 100px)",cljs.core.cst$kw$overflow,cljs.core.cst$kw$auto], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.logs_errors], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$background_DASH_color,"#fafafa",cljs.core.cst$kw$width,(400),cljs.core.cst$kw$height,"calc(100% - 64px)",cljs.core.cst$kw$overflow,cljs.core.cst$kw$auto,cljs.core.cst$kw$padding,(5)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.material_ui.button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,"primary",cljs.core.cst$kw$variant,"contained",cljs.core.cst$kw$on_DASH_click,((function (event_names,map__2506,map__2506__$1,events,simple_QMARK_,keys2502,simple_QMARK_2503){
return (function (){
var G__2514 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_run,pluto.playground.core.ctx], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2514) : re_frame.core.dispatch.call(null,G__2514));
});})(event_names,map__2506,map__2506__$1,events,simple_QMARK_,keys2502,simple_QMARK_2503))
], null),"Run"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$border,"40px solid #ddd",cljs.core.cst$kw$border_DASH_width,"20px 7px",cljs.core.cst$kw$border_DASH_radius,"40px",cljs.core.cst$kw$margin,(10)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,(667)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.selected_ui], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$center,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column,cljs.core.cst$kw$margin,pluto.playground.core.margin], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$space_DASH_between], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.material_ui.Typography,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,pluto.playground.core.margin], null),cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$variant,"h6"], null),"Inspect"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.material_ui.button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,"primary",cljs.core.cst$kw$variant,"contained",cljs.core.cst$kw$on_DASH_click,((function (event_names,map__2506,map__2506__$1,events,simple_QMARK_,keys2502,simple_QMARK_2503){
return (function (){
var G__2515 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$browse_DASH_app_DASH_db,true], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2515) : re_frame.core.dispatch.call(null,G__2515));
});})(event_names,map__2506,map__2506__$1,events,simple_QMARK_,keys2502,simple_QMARK_2503))
], null),"Local app DB"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.view_selection], null)], null)], null)], null)], null);
});})(keys2502,simple_QMARK_2503))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$layout)], null)], 0)));
});
pluto.playground.core.mount_root = (function pluto$playground$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.layout], null),document.getElementById("app"));
});
pluto.playground.core.bootstrap = (function pluto$playground$core$bootstrap(){
var G__2518_2520 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fetch_DASH_extension], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2518_2520) : re_frame.core.dispatch.call(null,G__2518_2520));

var G__2519_2521 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_init_DASH_wallet], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2519_2521) : re_frame.core.dispatch.call(null,G__2519_2521));

return pluto.playground.core.mount_root();
});
goog.exportSymbol('pluto.playground.core.bootstrap', pluto.playground.core.bootstrap);
