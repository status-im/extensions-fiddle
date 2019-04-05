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
pluto.playground.core.select = (function pluto$playground$core$select(p__1323){
var map__1324 = p__1323;
var map__1324__$1 = (((((!((map__1324 == null))))?(((((map__1324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1324):map__1324);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1324__$1,cljs.core.cst$kw$on_DASH_change);
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1324__$1,cljs.core.cst$kw$selected);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1324__$1,cljs.core.cst$kw$options);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.core.Select,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,(function (){var or__4131__auto__ = selected;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})(),cljs.core.cst$kw$on_DASH_change,on_change,cljs.core.cst$kw$auto_DASH_width,true], null),(function (){var iter__4523__auto__ = ((function (map__1324,map__1324__$1,on_change,selected,options){
return (function pluto$playground$core$select_$_iter__1326(s__1327){
return (new cljs.core.LazySeq(null,((function (map__1324,map__1324__$1,on_change,selected,options){
return (function (){
var s__1327__$1 = s__1327;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__1327__$1);
if(temp__5457__auto__){
var s__1327__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1327__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__1327__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__1329 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__1328 = (0);
while(true){
if((i__1328 < size__4522__auto__)){
var map__1330 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__1328);
var map__1330__$1 = (((((!((map__1330 == null))))?(((((map__1330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1330):map__1330);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1330__$1,cljs.core.cst$kw$value);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1330__$1,cljs.core.cst$kw$label);
cljs.core.chunk_append(b__1329,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.core.MenuItem,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,value], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,value], null)));

var G__1334 = (i__1328 + (1));
i__1328 = G__1334;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1329),pluto$playground$core$select_$_iter__1326(cljs.core.chunk_rest(s__1327__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1329),null);
}
} else {
var map__1332 = cljs.core.first(s__1327__$2);
var map__1332__$1 = (((((!((map__1332 == null))))?(((((map__1332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1332):map__1332);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1332__$1,cljs.core.cst$kw$value);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1332__$1,cljs.core.cst$kw$label);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.core.MenuItem,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,value], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,value], null)),pluto$playground$core$select_$_iter__1326(cljs.core.rest(s__1327__$2)));
}
} else {
return null;
}
break;
}
});})(map__1324,map__1324__$1,on_change,selected,options))
,null,null));
});})(map__1324,map__1324__$1,on_change,selected,options))
;
return iter__4523__auto__(options);
})()], null);
});
pluto.playground.core.AppBar = (MaterialUI["AppBar"]);
pluto.playground.core.Toolbar = (MaterialUI["Toolbar"]);
pluto.playground.core.Typography = (MaterialUI["Typography"]);
pluto.playground.core.warn = console.warn.bind(console);
re_frame.loggers.set_loggers_BANG_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$warn,(function() { 
var G__1335__delegate = function (args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("re-frame: overwriting",cljs.core.first(args))){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pluto.playground.core.warn,args);

}
};
var G__1335 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1336__i = 0, G__1336__a = new Array(arguments.length -  0);
while (G__1336__i < G__1336__a.length) {G__1336__a[G__1336__i] = arguments[G__1336__i + 0]; ++G__1336__i;}
  args = new cljs.core.IndexedSeq(G__1336__a,0,null);
} 
return G__1335__delegate.call(this,args);};
G__1335.cljs$lang$maxFixedArity = 0;
G__1335.cljs$lang$applyTo = (function (arglist__1337){
var args = cljs.core.seq(arglist__1337);
return G__1335__delegate(args);
});
G__1335.cljs$core$IFn$_invoke$arity$variadic = G__1335__delegate;
return G__1335;
})()
], null));
pluto.playground.core.dispatch_events = (function pluto$playground$core$dispatch_events(ctx,events){
var seq__1338 = cljs.core.seq(events);
var chunk__1339 = null;
var count__1340 = (0);
var i__1341 = (0);
while(true){
if((i__1341 < count__1340)){
var event = chunk__1339.cljs$core$IIndexed$_nth$arity$2(null,i__1341);
if(cljs.core.vector_QMARK_(event)){
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(event) : re_frame.core.dispatch.call(null,event));
} else {
pluto.log.fire_BANG_(ctx,cljs.core.cst$kw$pluto$log_SLASH_error,cljs.core.cst$kw$event_SLASH_dispatch,event);
}


var G__1342 = seq__1338;
var G__1343 = chunk__1339;
var G__1344 = count__1340;
var G__1345 = (i__1341 + (1));
seq__1338 = G__1342;
chunk__1339 = G__1343;
count__1340 = G__1344;
i__1341 = G__1345;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__1338);
if(temp__5457__auto__){
var seq__1338__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__1338__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__1338__$1);
var G__1346 = cljs.core.chunk_rest(seq__1338__$1);
var G__1347 = c__4550__auto__;
var G__1348 = cljs.core.count(c__4550__auto__);
var G__1349 = (0);
seq__1338 = G__1346;
chunk__1339 = G__1347;
count__1340 = G__1348;
i__1341 = G__1349;
continue;
} else {
var event = cljs.core.first(seq__1338__$1);
if(cljs.core.vector_QMARK_(event)){
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(event) : re_frame.core.dispatch.call(null,event));
} else {
pluto.log.fire_BANG_(ctx,cljs.core.cst$kw$pluto$log_SLASH_error,cljs.core.cst$kw$event_SLASH_dispatch,event);
}


var G__1350 = cljs.core.next(seq__1338__$1);
var G__1351 = null;
var G__1352 = (0);
var G__1353 = (0);
seq__1338 = G__1350;
chunk__1339 = G__1351;
count__1340 = G__1352;
i__1341 = G__1353;
continue;
}
} else {
return null;
}
}
break;
}
});
pluto.playground.core.resolve_query = (function pluto$playground$core$resolve_query(ctx,p__1354){
var vec__1355 = p__1354;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1355,(0),null);
var data = vec__1355;
if(cljs.core.truth_(re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sub,id))){
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(data) : re_frame.core.subscribe.call(null,data));
} else {
return pluto.log.fire_BANG_(ctx,cljs.core.cst$kw$pluto$log_SLASH_error,cljs.core.cst$kw$query_SLASH_resolve,data);
}
});
pluto.playground.core.cartouche = (function pluto$playground$core$cartouche(p__1358,data){
var map__1359 = p__1358;
var map__1359__$1 = (((((!((map__1359 == null))))?(((((map__1359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1359):map__1359);
var m = map__1359__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1359__$1,cljs.core.cst$kw$path);
var p = cljs.core.deref((function (){var G__1361 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_selected], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__1361) : re_frame.core.subscribe.call(null,G__1361));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_mouse_DASH_enter,((function (p,map__1359,map__1359__$1,m,path){
return (function (){
var G__1362 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_set_DASH_selected,path], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1362) : re_frame.core.dispatch.call(null,G__1362));
});})(p,map__1359,map__1359__$1,m,path))
,cljs.core.cst$kw$on_DASH_mouse_DASH_leave,((function (p,map__1359,map__1359__$1,m,path){
return (function (){
var G__1363 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_set_DASH_selected,null], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1363) : re_frame.core.dispatch.call(null,G__1363));
});})(p,map__1359,map__1359__$1,m,path))
,cljs.core.cst$kw$style,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,path))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border,"1px solid black"], null):null)], null),data], null);
});
pluto.playground.core.wrap_view = (function pluto$playground$core$wrap_view(parent_ctx,data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.cartouche,parent_ctx,data], null);
});
pluto.playground.core.ctx = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"Extension ID"], null),cljs.core.cst$kw$capacities,react_native_web.extensions.capacities,cljs.core.cst$kw$query_DASH_fn,pluto.playground.core.resolve_query,cljs.core.cst$kw$event_DASH_fn,pluto.playground.core.dispatch_events,cljs.core.cst$kw$log_DASH_fn,(function (p1__1364_SHARP_){
var G__1365 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_append_DASH_log,p1__1364_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1365) : re_frame.core.dispatch.call(null,G__1365));
})], null);
pluto.playground.core.flatten_errors = (function pluto$playground$core$flatten_errors(m){
if(cljs.core.map_QMARK_(m)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.reduce_kv((function (p1__1366_SHARP_,p2__1368_SHARP_,p3__1367_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p1__1366_SHARP_,cljs.core.vals(p3__1367_SHARP_));
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
var extension_selection1369 = (function (){var G__1372 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_selection], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__1372) : re_frame.core.subscribe.call(null,G__1372));
})();
var props1370 = (function (){var G__1373 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_selected_DASH_properties], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__1373) : re_frame.core.subscribe.call(null,G__1373));
})();
var data1371 = (function (){var G__1374 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_parsed], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__1374) : re_frame.core.subscribe.call(null,G__1374));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (extension_selection1369,props1370,data1371){
return (function (){
var extension_selection = cljs.core.deref(extension_selection1369);
var props = cljs.core.deref(props1370);
var data = cljs.core.deref(data1371);
var vec__1375 = pluto.playground.core.parse_extension_id(extension_selection);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1375,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1375,(1),null);
var G__1378 = type;
var G__1378__$1 = (((G__1378 instanceof cljs.core.Keyword))?G__1378.fqn:null);
switch (G__1378__$1) {
case "hooks":
return react_native_web.hooks.hook_in(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hooks,id], null))], null),props);

break;
case "views":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex,(1),cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$center,cljs.core.cst$kw$max_DASH_width,"100%"], null)], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$max_DASH_width,"100%",cljs.core.cst$kw$border,"blue 1px solid"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.view,props,data,id], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(props),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join('')], null))], null);

break;
default:
return null;

}
});})(extension_selection1369,props1370,data1371))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$selected_DASH_ui)], null)], 0)));
});
if(cljs.core.truth_(cljs.core.find_ns(cljs.core.cst$sym$re_DASH_frame$core))){
} else {
goog.require('re_frame.core');
}

pluto.playground.core.eth_wallet = (function pluto$playground$core$eth_wallet(){
var ethereum_addr1382 = (function (){var G__1383 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$ethereum_DASH_addr], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__1383) : re_frame.core.subscribe.call(null,G__1383));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (ethereum_addr1382){
return (function (){
var ethereum_addr = cljs.core.deref(ethereum_addr1382);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$flex,(1),cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$flex_DASH_end,cljs.core.cst$kw$padding,(10)], null)], null),(cljs.core.truth_(ethereum_addr)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Wallet connected: ",ethereum_addr], null):null)], null);
});})(ethereum_addr1382))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$eth_DASH_wallet)], null)], 0)));
});
if(cljs.core.truth_(cljs.core.find_ns(cljs.core.cst$sym$re_DASH_frame$core))){
} else {
goog.require('re_frame.core');
}

pluto.playground.core.view_selection = (function pluto$playground$core$view_selection(){
var selection1389 = (function (){var G__1391 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_selection], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__1391) : re_frame.core.subscribe.call(null,G__1391));
})();
var extension_keys1390 = (function (){var G__1392 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_keys], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__1392) : re_frame.core.subscribe.call(null,G__1392));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (selection1389,extension_keys1390){
return (function (){
var selection = cljs.core.deref(selection1389);
var extension_keys = cljs.core.deref(extension_keys1390);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$flex_DASH_end,cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center,cljs.core.cst$kw$margin,"10px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,(10)], null)], null),"Selection"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.select,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_change,((function (selection,extension_keys,selection1389,extension_keys1390){
return (function (p1__1387_SHARP_,p2__1386_SHARP_){
var G__1393 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$extension_DASH_selection,p2__1386_SHARP_.key], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1393) : re_frame.core.dispatch.call(null,G__1393));
});})(selection,extension_keys,selection1389,extension_keys1390))
,cljs.core.cst$kw$selected,selection,cljs.core.cst$kw$options,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (selection,extension_keys,selection1389,extension_keys1390){
return (function (p1__1388_SHARP_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,p1__1388_SHARP_,cljs.core.cst$kw$label,p1__1388_SHARP_], null);
});})(selection,extension_keys,selection1389,extension_keys1390))
,extension_keys)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,(10)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,"primary",cljs.core.cst$kw$variant,"contained",cljs.core.cst$kw$on_DASH_click,((function (selection,extension_keys,selection1389,extension_keys1390){
return (function (){
var G__1394 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$browse_DASH_properties,true], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1394) : re_frame.core.dispatch.call(null,G__1394));
});})(selection,extension_keys,selection1389,extension_keys1390))
], null),"Data"], null)], null)], null);
});})(selection1389,extension_keys1390))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$view_DASH_selection)], null)], 0)));
});
if(cljs.core.truth_(cljs.core.find_ns(cljs.core.cst$sym$re_DASH_frame$core))){
} else {
goog.require('re_frame.core');
}

pluto.playground.core.logs_errors = (function pluto$playground$core$logs_errors(){
var logs1397 = (function (){var G__1399 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__1399) : re_frame.core.subscribe.call(null,G__1399));
})();
var errors1398 = (function (){var G__1400 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_errors], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__1400) : re_frame.core.subscribe.call(null,G__1400));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (logs1397,errors1398){
return (function (){
var logs = cljs.core.deref(logs1397);
var errors = cljs.core.deref(errors1398);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.logs.table,(function (){var or__4131__auto__ = pluto.playground.core.flatten_errors(errors);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return logs;
}
})()], null);
});})(logs1397,errors1398))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$logs_DASH_errors)], null)], 0)));
});
pluto.playground.core.margin = (10);
if(cljs.core.truth_(cljs.core.find_ns(cljs.core.cst$sym$re_DASH_frame$core))){
} else {
goog.require('re_frame.core');
}

pluto.playground.core.layout = (function pluto$playground$core$layout(){
var logs1411 = (function (){var G__1415 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__1415) : re_frame.core.subscribe.call(null,G__1415));
})();
var errors1412 = (function (){var G__1416 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_errors], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__1416) : re_frame.core.subscribe.call(null,G__1416));
})();
var keys1413 = (function (){var G__1417 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_parsed], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__1417) : re_frame.core.subscribe.call(null,G__1417));
})();
var extension_selection1414 = (function (){var G__1418 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$extension_DASH_selection], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__1418) : re_frame.core.subscribe.call(null,G__1418));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (logs1411,errors1412,keys1413,extension_selection1414){
return (function (){
var logs = cljs.core.deref(logs1411);
var errors = cljs.core.deref(errors1412);
var map__1419 = cljs.core.deref(keys1413);
var map__1419__$1 = (((((!((map__1419 == null))))?(((((map__1419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1419):map__1419);
var data = map__1419__$1;
var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1419__$1,cljs.core.cst$kw$views);
var hooks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1419__$1,cljs.core.cst$kw$hooks);
var extension_selection = cljs.core.deref(extension_selection1414);
var keys = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (logs,errors,map__1419,map__1419__$1,data,views,hooks,extension_selection,logs1411,errors1412,keys1413,extension_selection1414){
return (function (p1__1403_SHARP_){
return ["hooks/",cljs.core.name(p1__1403_SHARP_)].join('');
});})(logs,errors,map__1419,map__1419__$1,data,views,hooks,extension_selection,logs1411,errors1412,keys1413,extension_selection1414))
,cljs.core.keys(hooks)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (logs,errors,map__1419,map__1419__$1,data,views,hooks,extension_selection,logs1411,errors1412,keys1413,extension_selection1414){
return (function (p1__1404_SHARP_){
return ["views/",cljs.core.name(p1__1404_SHARP_)].join('');
});})(logs,errors,map__1419,map__1419__$1,data,views,hooks,extension_selection,logs1411,errors1412,keys1413,extension_selection1414))
,cljs.core.keys(views)));
var selection = (function (){var or__4131__auto__ = extension_selection;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.first(keys);
}
})();
var props = cljs.core.deref((function (){var G__1421 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_properties,selection], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__1421) : re_frame.core.subscribe.call(null,G__1421));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.core.AppBar,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,cljs.core.cst$kw$static], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.core.Toolbar,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$variant,"dense"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex,(1),cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$space_DASH_between,cljs.core.cst$kw$margin,pluto.playground.core.margin], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.core.Typography,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$variant,"h6"], null),"Extensions Fiddle"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$on_DASH_click,((function (keys,selection,props,logs,errors,map__1419,map__1419__$1,data,views,hooks,extension_selection,logs1411,errors1412,keys1413,extension_selection1414){
return (function (){
var G__1422 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$examples,true], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1422) : re_frame.core.dispatch.call(null,G__1422));
});})(keys,selection,props,logs,errors,map__1419,map__1419__$1,data,views,hooks,extension_selection,logs1411,errors1412,keys1413,extension_selection1414))
], null),"Examples"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$on_DASH_click,((function (keys,selection,props,logs,errors,map__1419,map__1419__$1,data,views,hooks,extension_selection,logs1411,errors1412,keys1413,extension_selection1414){
return (function (){
var G__1423 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_publish], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1423) : re_frame.core.dispatch.call(null,G__1423));
});})(keys,selection,props,logs,errors,map__1419,map__1419__$1,data,views,hooks,extension_selection,logs1411,errors1412,keys1413,extension_selection1414))
], null),"Publish"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.dialogs.dialogs,selection], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$inline_DASH_block,cljs.core.cst$kw$width,"calc(100% - 400px)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.source.editor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_change,((function (keys,selection,props,logs,errors,map__1419,map__1419__$1,data,views,hooks,extension_selection,logs1411,errors1412,keys1413,extension_selection1414){
return (function (p1__1405_SHARP_){
var G__1424 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_source,pluto.playground.core.ctx,p1__1405_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1424) : re_frame.core.dispatch.call(null,G__1424));
});})(keys,selection,props,logs,errors,map__1419,map__1419__$1,data,views,hooks,extension_selection,logs1411,errors1412,keys1413,extension_selection1414))
], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"#fafafa"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex,(1),cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$space_DASH_between], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.core.Typography,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,pluto.playground.core.margin], null),cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$variant,"h6"], null),"Logs"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$flex_DASH_end,cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.switch$,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$on_DASH_change,((function (keys,selection,props,logs,errors,map__1419,map__1419__$1,data,views,hooks,extension_selection,logs1411,errors1412,keys1413,extension_selection1414){
return (function (p1__1407_SHARP_,p2__1406_SHARP_){
var G__1425 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_switch_DASH_filter_DASH_logs,p2__1406_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1425) : re_frame.core.dispatch.call(null,G__1425));
});})(keys,selection,props,logs,errors,map__1419,map__1419__$1,data,views,hooks,extension_selection,logs1411,errors1412,keys1413,extension_selection1414))
], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.core.Typography,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,"10px"], null)], null),"Filter traces"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$on_DASH_click,((function (keys,selection,props,logs,errors,map__1419,map__1419__$1,data,views,hooks,extension_selection,logs1411,errors1412,keys1413,extension_selection1414){
return (function (){
var G__1426 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_clear_DASH_logs], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1426) : re_frame.core.dispatch.call(null,G__1426));
});})(keys,selection,props,logs,errors,map__1419,map__1419__$1,data,views,hooks,extension_selection,logs1411,errors1412,keys1413,extension_selection1414))
], null),"Clear logs"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$height,"calc(40% - 100px)",cljs.core.cst$kw$overflow,cljs.core.cst$kw$auto], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.logs.table,(function (){var or__4131__auto__ = pluto.playground.core.flatten_errors(errors);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return logs;
}
})()], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$background_DASH_color,"#fafafa",cljs.core.cst$kw$width,(400),cljs.core.cst$kw$height,"calc(100% - 64px)",cljs.core.cst$kw$overflow,cljs.core.cst$kw$auto], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$border,"40px solid #ddd",cljs.core.cst$kw$border_DASH_width,"20px 7px",cljs.core.cst$kw$border_DASH_radius,"40px",cljs.core.cst$kw$margin,(20)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,(667)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"extension",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex,(1)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.selected_ui,props,selection,data], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$center,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column,cljs.core.cst$kw$margin,pluto.playground.core.margin], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$flex_DASH_end], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,"primary",cljs.core.cst$kw$variant,"contained",cljs.core.cst$kw$on_DASH_click,((function (keys,selection,props,logs,errors,map__1419,map__1419__$1,data,views,hooks,extension_selection,logs1411,errors1412,keys1413,extension_selection1414){
return (function (){
var G__1427 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$browse_DASH_app_DASH_db,true], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1427) : re_frame.core.dispatch.call(null,G__1427));
});})(keys,selection,props,logs,errors,map__1419,map__1419__$1,data,views,hooks,extension_selection,logs1411,errors1412,keys1413,extension_selection1414))
], null),"Local app DB"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$flex_DASH_end,cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center,cljs.core.cst$kw$margin_DASH_top,pluto.playground.core.margin], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.select,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_change,((function (keys,selection,props,logs,errors,map__1419,map__1419__$1,data,views,hooks,extension_selection,logs1411,errors1412,keys1413,extension_selection1414){
return (function (p1__1409_SHARP_,p2__1408_SHARP_){
var G__1428 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$extension_DASH_selection,p2__1408_SHARP_.key], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1428) : re_frame.core.dispatch.call(null,G__1428));
});})(keys,selection,props,logs,errors,map__1419,map__1419__$1,data,views,hooks,extension_selection,logs1411,errors1412,keys1413,extension_selection1414))
,cljs.core.cst$kw$selected,selection,cljs.core.cst$kw$options,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (keys,selection,props,logs,errors,map__1419,map__1419__$1,data,views,hooks,extension_selection,logs1411,errors1412,keys1413,extension_selection1414){
return (function (p1__1410_SHARP_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,p1__1410_SHARP_,cljs.core.cst$kw$label,p1__1410_SHARP_], null);
});})(keys,selection,props,logs,errors,map__1419,map__1419__$1,data,views,hooks,extension_selection,logs1411,errors1412,keys1413,extension_selection1414))
,keys)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,pluto.playground.core.margin], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,"primary",cljs.core.cst$kw$variant,"contained",cljs.core.cst$kw$on_DASH_click,((function (keys,selection,props,logs,errors,map__1419,map__1419__$1,data,views,hooks,extension_selection,logs1411,errors1412,keys1413,extension_selection1414){
return (function (){
var G__1429 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$browse_DASH_properties,true], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1429) : re_frame.core.dispatch.call(null,G__1429));
});})(keys,selection,props,logs,errors,map__1419,map__1419__$1,data,views,hooks,extension_selection,logs1411,errors1412,keys1413,extension_selection1414))
], null),"Data"], null)], null)], null)], null)], null)], null)], null);
});})(logs1411,errors1412,keys1413,extension_selection1414))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$layout)], null)], 0)));
});
pluto.playground.core.mount_root = (function pluto$playground$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.layout], null),document.getElementById("app"));
});
pluto.playground.core.bootstrap = (function pluto$playground$core$bootstrap(){
var G__1432_1434 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fetch_DASH_extension], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1432_1434) : re_frame.core.dispatch.call(null,G__1432_1434));

var G__1433_1435 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_init_DASH_wallet], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1433_1435) : re_frame.core.dispatch.call(null,G__1433_1435));

return pluto.playground.core.mount_root();
});
goog.exportSymbol('pluto.playground.core.bootstrap', pluto.playground.core.bootstrap);
