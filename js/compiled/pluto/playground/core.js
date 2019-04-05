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
pluto.playground.core.Button = (MaterialUI["Button"]);
pluto.playground.core.button = (function pluto$playground$core$button(props,label){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.core.Button,props,label], null);
});
pluto.playground.core.Switch = (MaterialUI["Switch"]);
pluto.playground.core.switch$ = (function pluto$playground$core$switch(props){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.core.Switch,props], null);
});
pluto.playground.core.Select = (MaterialUI["Select"]);
pluto.playground.core.MenuItem = (MaterialUI["MenuItem"]);
pluto.playground.core.select = (function pluto$playground$core$select(p__2409){
var map__2410 = p__2409;
var map__2410__$1 = (((((!((map__2410 == null))))?(((((map__2410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2410):map__2410);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2410__$1,cljs.core.cst$kw$on_DASH_change);
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2410__$1,cljs.core.cst$kw$selected);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2410__$1,cljs.core.cst$kw$options);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.core.Select,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,(function (){var or__4131__auto__ = selected;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})(),cljs.core.cst$kw$on_DASH_change,on_change,cljs.core.cst$kw$auto_DASH_width,true], null),(function (){var iter__4523__auto__ = ((function (map__2410,map__2410__$1,on_change,selected,options){
return (function pluto$playground$core$select_$_iter__2412(s__2413){
return (new cljs.core.LazySeq(null,((function (map__2410,map__2410__$1,on_change,selected,options){
return (function (){
var s__2413__$1 = s__2413;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__2413__$1);
if(temp__5457__auto__){
var s__2413__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__2413__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__2413__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__2415 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__2414 = (0);
while(true){
if((i__2414 < size__4522__auto__)){
var map__2416 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__2414);
var map__2416__$1 = (((((!((map__2416 == null))))?(((((map__2416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2416):map__2416);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2416__$1,cljs.core.cst$kw$value);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2416__$1,cljs.core.cst$kw$label);
cljs.core.chunk_append(b__2415,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.core.MenuItem,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,value], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,value], null)));

var G__2420 = (i__2414 + (1));
i__2414 = G__2420;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__2415),pluto$playground$core$select_$_iter__2412(cljs.core.chunk_rest(s__2413__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__2415),null);
}
} else {
var map__2418 = cljs.core.first(s__2413__$2);
var map__2418__$1 = (((((!((map__2418 == null))))?(((((map__2418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2418):map__2418);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2418__$1,cljs.core.cst$kw$value);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2418__$1,cljs.core.cst$kw$label);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.core.MenuItem,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,value], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,value], null)),pluto$playground$core$select_$_iter__2412(cljs.core.rest(s__2413__$2)));
}
} else {
return null;
}
break;
}
});})(map__2410,map__2410__$1,on_change,selected,options))
,null,null));
});})(map__2410,map__2410__$1,on_change,selected,options))
;
return iter__4523__auto__(options);
})()], null);
});
pluto.playground.core.AppBar = (MaterialUI["AppBar"]);
pluto.playground.core.Toolbar = (MaterialUI["Toolbar"]);
pluto.playground.core.Typography = (MaterialUI["Typography"]);
pluto.playground.core.warn = console.warn.bind(console);
re_frame.loggers.set_loggers_BANG_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$warn,(function() { 
var G__2421__delegate = function (args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("re-frame: overwriting",cljs.core.first(args))){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pluto.playground.core.warn,args);

}
};
var G__2421 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2422__i = 0, G__2422__a = new Array(arguments.length -  0);
while (G__2422__i < G__2422__a.length) {G__2422__a[G__2422__i] = arguments[G__2422__i + 0]; ++G__2422__i;}
  args = new cljs.core.IndexedSeq(G__2422__a,0,null);
} 
return G__2421__delegate.call(this,args);};
G__2421.cljs$lang$maxFixedArity = 0;
G__2421.cljs$lang$applyTo = (function (arglist__2423){
var args = cljs.core.seq(arglist__2423);
return G__2421__delegate(args);
});
G__2421.cljs$core$IFn$_invoke$arity$variadic = G__2421__delegate;
return G__2421;
})()
], null));
pluto.playground.core.dispatch_events = (function pluto$playground$core$dispatch_events(ctx,events){
var seq__2424 = cljs.core.seq(events);
var chunk__2425 = null;
var count__2426 = (0);
var i__2427 = (0);
while(true){
if((i__2427 < count__2426)){
var event = chunk__2425.cljs$core$IIndexed$_nth$arity$2(null,i__2427);
if(cljs.core.vector_QMARK_(event)){
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(event) : re_frame.core.dispatch.call(null,event));
} else {
pluto.log.fire_BANG_(ctx,cljs.core.cst$kw$pluto$log_SLASH_error,cljs.core.cst$kw$event_SLASH_dispatch,event);
}


var G__2428 = seq__2424;
var G__2429 = chunk__2425;
var G__2430 = count__2426;
var G__2431 = (i__2427 + (1));
seq__2424 = G__2428;
chunk__2425 = G__2429;
count__2426 = G__2430;
i__2427 = G__2431;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__2424);
if(temp__5457__auto__){
var seq__2424__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__2424__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__2424__$1);
var G__2432 = cljs.core.chunk_rest(seq__2424__$1);
var G__2433 = c__4550__auto__;
var G__2434 = cljs.core.count(c__4550__auto__);
var G__2435 = (0);
seq__2424 = G__2432;
chunk__2425 = G__2433;
count__2426 = G__2434;
i__2427 = G__2435;
continue;
} else {
var event = cljs.core.first(seq__2424__$1);
if(cljs.core.vector_QMARK_(event)){
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(event) : re_frame.core.dispatch.call(null,event));
} else {
pluto.log.fire_BANG_(ctx,cljs.core.cst$kw$pluto$log_SLASH_error,cljs.core.cst$kw$event_SLASH_dispatch,event);
}


var G__2436 = cljs.core.next(seq__2424__$1);
var G__2437 = null;
var G__2438 = (0);
var G__2439 = (0);
seq__2424 = G__2436;
chunk__2425 = G__2437;
count__2426 = G__2438;
i__2427 = G__2439;
continue;
}
} else {
return null;
}
}
break;
}
});
pluto.playground.core.resolve_query = (function pluto$playground$core$resolve_query(ctx,p__2440){
var vec__2441 = p__2440;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2441,(0),null);
var data = vec__2441;
if(cljs.core.truth_(re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sub,id))){
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(data) : re_frame.core.subscribe.call(null,data));
} else {
return pluto.log.fire_BANG_(ctx,cljs.core.cst$kw$pluto$log_SLASH_error,cljs.core.cst$kw$query_SLASH_resolve,data);
}
});
pluto.playground.core.cartouche = (function pluto$playground$core$cartouche(p__2444,data){
var map__2445 = p__2444;
var map__2445__$1 = (((((!((map__2445 == null))))?(((((map__2445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2445):map__2445);
var m = map__2445__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2445__$1,cljs.core.cst$kw$path);
var p = cljs.core.deref((function (){var G__2447 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_selected], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2447) : re_frame.core.subscribe.call(null,G__2447));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_mouse_DASH_enter,((function (p,map__2445,map__2445__$1,m,path){
return (function (){
var G__2448 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_set_DASH_selected,path], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2448) : re_frame.core.dispatch.call(null,G__2448));
});})(p,map__2445,map__2445__$1,m,path))
,cljs.core.cst$kw$on_DASH_mouse_DASH_leave,((function (p,map__2445,map__2445__$1,m,path){
return (function (){
var G__2449 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_set_DASH_selected,null], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2449) : re_frame.core.dispatch.call(null,G__2449));
});})(p,map__2445,map__2445__$1,m,path))
,cljs.core.cst$kw$style,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,path))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border,"1px solid black"], null):null)], null),data], null);
});
pluto.playground.core.wrap_view = (function pluto$playground$core$wrap_view(parent_ctx,data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.cartouche,parent_ctx,data], null);
});
pluto.playground.core.ctx = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"Extension ID"], null),cljs.core.cst$kw$capacities,react_native_web.extensions.capacities,cljs.core.cst$kw$query_DASH_fn,pluto.playground.core.resolve_query,cljs.core.cst$kw$event_DASH_fn,pluto.playground.core.dispatch_events,cljs.core.cst$kw$log_DASH_fn,(function (p1__2450_SHARP_){
var G__2451 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_append_DASH_log,p1__2450_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2451) : re_frame.core.dispatch.call(null,G__2451));
})], null);
pluto.playground.core.flatten_errors = (function pluto$playground$core$flatten_errors(m){
if(cljs.core.map_QMARK_(m)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.reduce_kv((function (p1__2452_SHARP_,p2__2454_SHARP_,p3__2453_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p1__2452_SHARP_,cljs.core.vals(p3__2453_SHARP_));
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
var extension_selection2455 = (function (){var G__2458 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_selection], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2458) : re_frame.core.subscribe.call(null,G__2458));
})();
var props2456 = (function (){var G__2459 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_selected_DASH_properties], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2459) : re_frame.core.subscribe.call(null,G__2459));
})();
var data2457 = (function (){var G__2460 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_parsed], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2460) : re_frame.core.subscribe.call(null,G__2460));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (extension_selection2455,props2456,data2457){
return (function (){
var extension_selection = cljs.core.deref(extension_selection2455);
var props = cljs.core.deref(props2456);
var data = cljs.core.deref(data2457);
var vec__2461 = pluto.playground.core.parse_extension_id(extension_selection);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2461,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2461,(1),null);
var G__2464 = type;
var G__2464__$1 = (((G__2464 instanceof cljs.core.Keyword))?G__2464.fqn:null);
switch (G__2464__$1) {
case "hooks":
return react_native_web.hooks.hook_in(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hooks,id], null))], null),props);

break;
case "views":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex,(1),cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$center,cljs.core.cst$kw$max_DASH_width,"100%"], null)], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex,(1),cljs.core.cst$kw$height,cljs.core.cst$kw$max_DASH_content,cljs.core.cst$kw$overflow,cljs.core.cst$kw$auto,cljs.core.cst$kw$max_DASH_width,"100%",cljs.core.cst$kw$border,"blue 1px solid"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.view,props,data,id], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(props),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join('')], null))], null);

break;
default:
return null;

}
});})(extension_selection2455,props2456,data2457))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$selected_DASH_ui)], null)], 0)));
});
if(cljs.core.truth_(cljs.core.find_ns(cljs.core.cst$sym$re_DASH_frame$core))){
} else {
goog.require('re_frame.core');
}

pluto.playground.core.eth_wallet = (function pluto$playground$core$eth_wallet(){
var ethereum_addr2468 = (function (){var G__2469 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$ethereum_DASH_addr], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2469) : re_frame.core.subscribe.call(null,G__2469));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (ethereum_addr2468){
return (function (){
var ethereum_addr = cljs.core.deref(ethereum_addr2468);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$flex,(1),cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$flex_DASH_end,cljs.core.cst$kw$padding,(10)], null)], null),(cljs.core.truth_(ethereum_addr)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"inherit"], null)], null),"Wallet connected: ",ethereum_addr], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$on_DASH_click,((function (ethereum_addr,ethereum_addr2468){
return (function (){
var G__2470 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_init_DASH_wallet], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2470) : re_frame.core.dispatch.call(null,G__2470));
});})(ethereum_addr,ethereum_addr2468))
], null),"Connect wallet"], null))], null);
});})(ethereum_addr2468))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$eth_DASH_wallet)], null)], 0)));
});
if(cljs.core.truth_(cljs.core.find_ns(cljs.core.cst$sym$re_DASH_frame$core))){
} else {
goog.require('re_frame.core');
}

pluto.playground.core.view_selection = (function pluto$playground$core$view_selection(){
var selection2476 = (function (){var G__2478 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_selection], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2478) : re_frame.core.subscribe.call(null,G__2478));
})();
var extension_keys2477 = (function (){var G__2479 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_keys], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2479) : re_frame.core.subscribe.call(null,G__2479));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (selection2476,extension_keys2477){
return (function (){
var selection = cljs.core.deref(selection2476);
var extension_keys = cljs.core.deref(extension_keys2477);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$flex_DASH_end,cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center,cljs.core.cst$kw$margin,"10px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,(10)], null)], null),"Selection"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.select,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_change,((function (selection,extension_keys,selection2476,extension_keys2477){
return (function (p1__2474_SHARP_,p2__2473_SHARP_){
var G__2480 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$extension_DASH_selection,p2__2473_SHARP_.key], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2480) : re_frame.core.dispatch.call(null,G__2480));
});})(selection,extension_keys,selection2476,extension_keys2477))
,cljs.core.cst$kw$selected,selection,cljs.core.cst$kw$options,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (selection,extension_keys,selection2476,extension_keys2477){
return (function (p1__2475_SHARP_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,p1__2475_SHARP_,cljs.core.cst$kw$label,p1__2475_SHARP_], null);
});})(selection,extension_keys,selection2476,extension_keys2477))
,extension_keys)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,(10)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,"primary",cljs.core.cst$kw$variant,"contained",cljs.core.cst$kw$on_DASH_click,((function (selection,extension_keys,selection2476,extension_keys2477){
return (function (){
var G__2481 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$browse_DASH_properties,true], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2481) : re_frame.core.dispatch.call(null,G__2481));
});})(selection,extension_keys,selection2476,extension_keys2477))
], null),"Data"], null)], null)], null);
});})(selection2476,extension_keys2477))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$view_DASH_selection)], null)], 0)));
});
if(cljs.core.truth_(cljs.core.find_ns(cljs.core.cst$sym$re_DASH_frame$core))){
} else {
goog.require('re_frame.core');
}

pluto.playground.core.logs_errors = (function pluto$playground$core$logs_errors(){
var logs2484 = (function (){var G__2486 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2486) : re_frame.core.subscribe.call(null,G__2486));
})();
var errors2485 = (function (){var G__2487 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_errors], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2487) : re_frame.core.subscribe.call(null,G__2487));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (logs2484,errors2485){
return (function (){
var logs = cljs.core.deref(logs2484);
var errors = cljs.core.deref(errors2485);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.logs.table,(function (){var or__4131__auto__ = pluto.playground.core.flatten_errors(errors);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return logs;
}
})()], null);
});})(logs2484,errors2485))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$logs_DASH_errors)], null)], 0)));
});
pluto.playground.core.margin = (10);
if(cljs.core.truth_(cljs.core.find_ns(cljs.core.cst$sym$re_DASH_frame$core))){
} else {
goog.require('re_frame.core');
}

pluto.playground.core.layout = (function pluto$playground$core$layout(){
var logs2504 = (function (){var G__2508 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2508) : re_frame.core.subscribe.call(null,G__2508));
})();
var errors2505 = (function (){var G__2509 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_errors], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2509) : re_frame.core.subscribe.call(null,G__2509));
})();
var keys2506 = (function (){var G__2510 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_parsed], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2510) : re_frame.core.subscribe.call(null,G__2510));
})();
var extension_selection2507 = (function (){var G__2511 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$extension_DASH_selection], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2511) : re_frame.core.subscribe.call(null,G__2511));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (logs2504,errors2505,keys2506,extension_selection2507){
return (function (){
var logs = cljs.core.deref(logs2504);
var errors = cljs.core.deref(errors2505);
var map__2512 = cljs.core.deref(keys2506);
var map__2512__$1 = (((((!((map__2512 == null))))?(((((map__2512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2512):map__2512);
var data = map__2512__$1;
var events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2512__$1,cljs.core.cst$kw$events);
var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2512__$1,cljs.core.cst$kw$views);
var hooks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2512__$1,cljs.core.cst$kw$hooks);
var extension_selection = cljs.core.deref(extension_selection2507);
var event_names = cljs.core.keys(events);
var keys = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (event_names,logs,errors,map__2512,map__2512__$1,data,events,views,hooks,extension_selection,logs2504,errors2505,keys2506,extension_selection2507){
return (function (p1__2490_SHARP_){
return ["hooks/",cljs.core.name(p1__2490_SHARP_)].join('');
});})(event_names,logs,errors,map__2512,map__2512__$1,data,events,views,hooks,extension_selection,logs2504,errors2505,keys2506,extension_selection2507))
,cljs.core.keys(hooks)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (event_names,logs,errors,map__2512,map__2512__$1,data,events,views,hooks,extension_selection,logs2504,errors2505,keys2506,extension_selection2507){
return (function (p1__2491_SHARP_){
return ["views/",cljs.core.name(p1__2491_SHARP_)].join('');
});})(event_names,logs,errors,map__2512,map__2512__$1,data,events,views,hooks,extension_selection,logs2504,errors2505,keys2506,extension_selection2507))
,cljs.core.keys(views)));
var selection = (function (){var or__4131__auto__ = extension_selection;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.first(keys);
}
})();
var props = cljs.core.deref((function (){var G__2514 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_properties,selection], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2514) : re_frame.core.subscribe.call(null,G__2514));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.core.AppBar,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,cljs.core.cst$kw$static], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.core.Toolbar,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$variant,"dense"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex,(1),cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$space_DASH_between,cljs.core.cst$kw$margin,pluto.playground.core.margin], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.core.Typography,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$variant,"h6"], null),"Extensions Fiddle"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$row], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.eth_wallet], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$on_DASH_click,((function (event_names,keys,selection,props,logs,errors,map__2512,map__2512__$1,data,events,views,hooks,extension_selection,logs2504,errors2505,keys2506,extension_selection2507){
return (function (){
var G__2515 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$examples,true], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2515) : re_frame.core.dispatch.call(null,G__2515));
});})(event_names,keys,selection,props,logs,errors,map__2512,map__2512__$1,data,events,views,hooks,extension_selection,logs2504,errors2505,keys2506,extension_selection2507))
], null),"Examples"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$on_DASH_click,((function (event_names,keys,selection,props,logs,errors,map__2512,map__2512__$1,data,events,views,hooks,extension_selection,logs2504,errors2505,keys2506,extension_selection2507){
return (function (){
var G__2516 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_publish], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2516) : re_frame.core.dispatch.call(null,G__2516));
});})(event_names,keys,selection,props,logs,errors,map__2512,map__2512__$1,data,events,views,hooks,extension_selection,logs2504,errors2505,keys2506,extension_selection2507))
], null),"Publish"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.dialogs.dialogs,selection], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$inline_DASH_block,cljs.core.cst$kw$width,"calc(100% - 400px)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.source.editor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_change,((function (event_names,keys,selection,props,logs,errors,map__2512,map__2512__$1,data,events,views,hooks,extension_selection,logs2504,errors2505,keys2506,extension_selection2507){
return (function (p1__2492_SHARP_){
var G__2517 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_source,pluto.playground.core.ctx,p1__2492_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2517) : re_frame.core.dispatch.call(null,G__2517));
});})(event_names,keys,selection,props,logs,errors,map__2512,map__2512__$1,data,events,views,hooks,extension_selection,logs2504,errors2505,keys2506,extension_selection2507))
], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"#fafafa"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex,(1),cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$space_DASH_between], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.core.Typography,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,pluto.playground.core.margin], null),cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$variant,"h6"], null),"Logs"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$flex_DASH_end,cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.switch$,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"primary",cljs.core.cst$kw$on_DASH_change,((function (event_names,keys,selection,props,logs,errors,map__2512,map__2512__$1,data,events,views,hooks,extension_selection,logs2504,errors2505,keys2506,extension_selection2507){
return (function (p1__2494_SHARP_,p2__2493_SHARP_){
var G__2518 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_switch_DASH_filter_DASH_logs,p2__2493_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2518) : re_frame.core.dispatch.call(null,G__2518));
});})(event_names,keys,selection,props,logs,errors,map__2512,map__2512__$1,data,events,views,hooks,extension_selection,logs2504,errors2505,keys2506,extension_selection2507))
], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.core.Typography,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,"10px"], null)], null),"Filter traces"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$on_DASH_click,((function (event_names,keys,selection,props,logs,errors,map__2512,map__2512__$1,data,events,views,hooks,extension_selection,logs2504,errors2505,keys2506,extension_selection2507){
return (function (){
var G__2519 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_clear_DASH_logs], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2519) : re_frame.core.dispatch.call(null,G__2519));
});})(event_names,keys,selection,props,logs,errors,map__2512,map__2512__$1,data,events,views,hooks,extension_selection,logs2504,errors2505,keys2506,extension_selection2507))
], null),"Clear logs"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$height,"calc(40% - 100px)",cljs.core.cst$kw$overflow,cljs.core.cst$kw$auto], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.logs.table,(function (){var or__4131__auto__ = pluto.playground.core.flatten_errors(errors);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return logs;
}
})()], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$background_DASH_color,"#fafafa",cljs.core.cst$kw$width,(400),cljs.core.cst$kw$height,"calc(100% - 64px)",cljs.core.cst$kw$overflow,cljs.core.cst$kw$auto], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$border,"40px solid #ddd",cljs.core.cst$kw$border_DASH_width,"20px 7px",cljs.core.cst$kw$border_DASH_radius,"40px",cljs.core.cst$kw$margin,(20)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,(667)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex,(1)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.selected_ui,props,selection,data], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$center,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column,cljs.core.cst$kw$margin,pluto.playground.core.margin], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.core.Typography,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,pluto.playground.core.margin], null),cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$variant,"h6"], null),"Inspect"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$flex_DASH_end], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,"primary",cljs.core.cst$kw$variant,"contained",cljs.core.cst$kw$on_DASH_click,((function (event_names,keys,selection,props,logs,errors,map__2512,map__2512__$1,data,events,views,hooks,extension_selection,logs2504,errors2505,keys2506,extension_selection2507){
return (function (){
var G__2520 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$browse_DASH_app_DASH_db,true], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2520) : re_frame.core.dispatch.call(null,G__2520));
});})(event_names,keys,selection,props,logs,errors,map__2512,map__2512__$1,data,events,views,hooks,extension_selection,logs2504,errors2505,keys2506,extension_selection2507))
], null),"Local app DB"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$flex_DASH_end,cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center,cljs.core.cst$kw$margin_DASH_top,pluto.playground.core.margin], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.select,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_change,((function (event_names,keys,selection,props,logs,errors,map__2512,map__2512__$1,data,events,views,hooks,extension_selection,logs2504,errors2505,keys2506,extension_selection2507){
return (function (p1__2496_SHARP_,p2__2495_SHARP_){
var G__2521 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$extension_DASH_selection,p2__2495_SHARP_.key], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2521) : re_frame.core.dispatch.call(null,G__2521));
});})(event_names,keys,selection,props,logs,errors,map__2512,map__2512__$1,data,events,views,hooks,extension_selection,logs2504,errors2505,keys2506,extension_selection2507))
,cljs.core.cst$kw$selected,selection,cljs.core.cst$kw$options,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (event_names,keys,selection,props,logs,errors,map__2512,map__2512__$1,data,events,views,hooks,extension_selection,logs2504,errors2505,keys2506,extension_selection2507){
return (function (p1__2497_SHARP_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,p1__2497_SHARP_,cljs.core.cst$kw$label,p1__2497_SHARP_], null);
});})(event_names,keys,selection,props,logs,errors,map__2512,map__2512__$1,data,events,views,hooks,extension_selection,logs2504,errors2505,keys2506,extension_selection2507))
,keys)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,pluto.playground.core.margin], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,"primary",cljs.core.cst$kw$variant,"contained",cljs.core.cst$kw$on_DASH_click,((function (event_names,keys,selection,props,logs,errors,map__2512,map__2512__$1,data,events,views,hooks,extension_selection,logs2504,errors2505,keys2506,extension_selection2507){
return (function (){
var G__2522 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$browse_DASH_properties,true], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2522) : re_frame.core.dispatch.call(null,G__2522));
});})(event_names,keys,selection,props,logs,errors,map__2512,map__2512__$1,data,events,views,hooks,extension_selection,logs2504,errors2505,keys2506,extension_selection2507))
], null),"Data"], null)], null)], null)], null)], null)], null)], null);
});})(logs2504,errors2505,keys2506,extension_selection2507))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$layout)], null)], 0)));
});
pluto.playground.core.mount_root = (function pluto$playground$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.layout], null),document.getElementById("app"));
});
pluto.playground.core.bootstrap = (function pluto$playground$core$bootstrap(){
var G__2525_2527 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fetch_DASH_extension], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2525_2527) : re_frame.core.dispatch.call(null,G__2525_2527));

var G__2526_2528 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_init_DASH_wallet], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2526_2528) : re_frame.core.dispatch.call(null,G__2526_2528));

return pluto.playground.core.mount_root();
});
goog.exportSymbol('pluto.playground.core.bootstrap', pluto.playground.core.bootstrap);
