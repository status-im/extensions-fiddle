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
pluto.playground.core.select = (function pluto$playground$core$select(p__2019){
var map__2020 = p__2019;
var map__2020__$1 = (((((!((map__2020 == null))))?(((((map__2020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2020):map__2020);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2020__$1,cljs.core.cst$kw$on_DASH_change);
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2020__$1,cljs.core.cst$kw$selected);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2020__$1,cljs.core.cst$kw$options);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.core.Select,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,(function (){var or__4131__auto__ = selected;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})(),cljs.core.cst$kw$on_DASH_change,on_change,cljs.core.cst$kw$auto_DASH_width,true], null),(function (){var iter__4523__auto__ = ((function (map__2020,map__2020__$1,on_change,selected,options){
return (function pluto$playground$core$select_$_iter__2022(s__2023){
return (new cljs.core.LazySeq(null,((function (map__2020,map__2020__$1,on_change,selected,options){
return (function (){
var s__2023__$1 = s__2023;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__2023__$1);
if(temp__5457__auto__){
var s__2023__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__2023__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__2023__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__2025 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__2024 = (0);
while(true){
if((i__2024 < size__4522__auto__)){
var map__2026 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__2024);
var map__2026__$1 = (((((!((map__2026 == null))))?(((((map__2026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2026):map__2026);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2026__$1,cljs.core.cst$kw$value);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2026__$1,cljs.core.cst$kw$label);
cljs.core.chunk_append(b__2025,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.core.MenuItem,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,value], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,value], null)));

var G__2030 = (i__2024 + (1));
i__2024 = G__2030;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__2025),pluto$playground$core$select_$_iter__2022(cljs.core.chunk_rest(s__2023__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__2025),null);
}
} else {
var map__2028 = cljs.core.first(s__2023__$2);
var map__2028__$1 = (((((!((map__2028 == null))))?(((((map__2028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2028):map__2028);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2028__$1,cljs.core.cst$kw$value);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2028__$1,cljs.core.cst$kw$label);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.core.MenuItem,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,value], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,value], null)),pluto$playground$core$select_$_iter__2022(cljs.core.rest(s__2023__$2)));
}
} else {
return null;
}
break;
}
});})(map__2020,map__2020__$1,on_change,selected,options))
,null,null));
});})(map__2020,map__2020__$1,on_change,selected,options))
;
return iter__4523__auto__(options);
})()], null);
});
pluto.playground.core.AppBar = (MaterialUI["AppBar"]);
pluto.playground.core.Toolbar = (MaterialUI["Toolbar"]);
pluto.playground.core.Typography = (MaterialUI["Typography"]);
pluto.playground.core.warn = console.warn.bind(console);
re_frame.loggers.set_loggers_BANG_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$warn,(function() { 
var G__2031__delegate = function (args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("re-frame: overwriting",cljs.core.first(args))){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pluto.playground.core.warn,args);

}
};
var G__2031 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2032__i = 0, G__2032__a = new Array(arguments.length -  0);
while (G__2032__i < G__2032__a.length) {G__2032__a[G__2032__i] = arguments[G__2032__i + 0]; ++G__2032__i;}
  args = new cljs.core.IndexedSeq(G__2032__a,0,null);
} 
return G__2031__delegate.call(this,args);};
G__2031.cljs$lang$maxFixedArity = 0;
G__2031.cljs$lang$applyTo = (function (arglist__2033){
var args = cljs.core.seq(arglist__2033);
return G__2031__delegate(args);
});
G__2031.cljs$core$IFn$_invoke$arity$variadic = G__2031__delegate;
return G__2031;
})()
], null));
pluto.playground.core.dispatch_events = (function pluto$playground$core$dispatch_events(ctx,events){
var seq__2034 = cljs.core.seq(events);
var chunk__2035 = null;
var count__2036 = (0);
var i__2037 = (0);
while(true){
if((i__2037 < count__2036)){
var event = chunk__2035.cljs$core$IIndexed$_nth$arity$2(null,i__2037);
if(cljs.core.vector_QMARK_(event)){
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(event) : re_frame.core.dispatch.call(null,event));
} else {
pluto.log.fire_BANG_(ctx,cljs.core.cst$kw$pluto$log_SLASH_error,cljs.core.cst$kw$event_SLASH_dispatch,event);
}


var G__2038 = seq__2034;
var G__2039 = chunk__2035;
var G__2040 = count__2036;
var G__2041 = (i__2037 + (1));
seq__2034 = G__2038;
chunk__2035 = G__2039;
count__2036 = G__2040;
i__2037 = G__2041;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__2034);
if(temp__5457__auto__){
var seq__2034__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__2034__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__2034__$1);
var G__2042 = cljs.core.chunk_rest(seq__2034__$1);
var G__2043 = c__4550__auto__;
var G__2044 = cljs.core.count(c__4550__auto__);
var G__2045 = (0);
seq__2034 = G__2042;
chunk__2035 = G__2043;
count__2036 = G__2044;
i__2037 = G__2045;
continue;
} else {
var event = cljs.core.first(seq__2034__$1);
if(cljs.core.vector_QMARK_(event)){
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(event) : re_frame.core.dispatch.call(null,event));
} else {
pluto.log.fire_BANG_(ctx,cljs.core.cst$kw$pluto$log_SLASH_error,cljs.core.cst$kw$event_SLASH_dispatch,event);
}


var G__2046 = cljs.core.next(seq__2034__$1);
var G__2047 = null;
var G__2048 = (0);
var G__2049 = (0);
seq__2034 = G__2046;
chunk__2035 = G__2047;
count__2036 = G__2048;
i__2037 = G__2049;
continue;
}
} else {
return null;
}
}
break;
}
});
pluto.playground.core.resolve_query = (function pluto$playground$core$resolve_query(ctx,p__2050){
var vec__2051 = p__2050;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2051,(0),null);
var data = vec__2051;
if(cljs.core.truth_(re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sub,id))){
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(data) : re_frame.core.subscribe.call(null,data));
} else {
return pluto.log.fire_BANG_(ctx,cljs.core.cst$kw$pluto$log_SLASH_error,cljs.core.cst$kw$query_SLASH_resolve,data);
}
});
pluto.playground.core.cartouche = (function pluto$playground$core$cartouche(p__2054,data){
var map__2055 = p__2054;
var map__2055__$1 = (((((!((map__2055 == null))))?(((((map__2055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2055):map__2055);
var m = map__2055__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2055__$1,cljs.core.cst$kw$path);
var p = cljs.core.deref((function (){var G__2057 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_selected], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2057) : re_frame.core.subscribe.call(null,G__2057));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_mouse_DASH_enter,((function (p,map__2055,map__2055__$1,m,path){
return (function (){
var G__2058 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_set_DASH_selected,path], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2058) : re_frame.core.dispatch.call(null,G__2058));
});})(p,map__2055,map__2055__$1,m,path))
,cljs.core.cst$kw$on_DASH_mouse_DASH_leave,((function (p,map__2055,map__2055__$1,m,path){
return (function (){
var G__2059 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_set_DASH_selected,null], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2059) : re_frame.core.dispatch.call(null,G__2059));
});})(p,map__2055,map__2055__$1,m,path))
,cljs.core.cst$kw$style,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,path))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border,"1px solid black"], null):null)], null),data], null);
});
pluto.playground.core.wrap_view = (function pluto$playground$core$wrap_view(parent_ctx,data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.cartouche,parent_ctx,data], null);
});
pluto.playground.core.ctx = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"Extension ID"], null),cljs.core.cst$kw$capacities,react_native_web.extensions.capacities,cljs.core.cst$kw$query_DASH_fn,pluto.playground.core.resolve_query,cljs.core.cst$kw$event_DASH_fn,pluto.playground.core.dispatch_events,cljs.core.cst$kw$log_DASH_fn,(function (p1__2060_SHARP_){
var G__2061 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_append_DASH_log,p1__2060_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2061) : re_frame.core.dispatch.call(null,G__2061));
})], null);
pluto.playground.core.flatten_errors = (function pluto$playground$core$flatten_errors(m){
if(cljs.core.map_QMARK_(m)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.reduce_kv((function (p1__2062_SHARP_,p2__2064_SHARP_,p3__2063_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p1__2062_SHARP_,cljs.core.vals(p3__2063_SHARP_));
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
var extension_selection2065 = (function (){var G__2068 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_selection], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2068) : re_frame.core.subscribe.call(null,G__2068));
})();
var props2066 = (function (){var G__2069 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_selected_DASH_properties], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2069) : re_frame.core.subscribe.call(null,G__2069));
})();
var data2067 = (function (){var G__2070 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_parsed], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2070) : re_frame.core.subscribe.call(null,G__2070));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (extension_selection2065,props2066,data2067){
return (function (){
var extension_selection = cljs.core.deref(extension_selection2065);
var props = cljs.core.deref(props2066);
var data = cljs.core.deref(data2067);
var vec__2071 = pluto.playground.core.parse_extension_id(extension_selection);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2071,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2071,(1),null);
var G__2074 = type;
var G__2074__$1 = (((G__2074 instanceof cljs.core.Keyword))?G__2074.fqn:null);
switch (G__2074__$1) {
case "hooks":
return react_native_web.hooks.hook_in(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hooks,id], null))], null),props);

break;
case "views":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex,(1),cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$center,cljs.core.cst$kw$max_DASH_width,"100%"], null)], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$max_DASH_width,"100%",cljs.core.cst$kw$border,"blue 1px solid"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.view,props,data,id], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(props),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join('')], null))], null);

break;
default:
return null;

}
});})(extension_selection2065,props2066,data2067))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$selected_DASH_ui)], null)], 0)));
});
if(cljs.core.truth_(cljs.core.find_ns(cljs.core.cst$sym$re_DASH_frame$core))){
} else {
goog.require('re_frame.core');
}

pluto.playground.core.eth_wallet = (function pluto$playground$core$eth_wallet(){
var ethereum_addr2078 = (function (){var G__2079 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$ethereum_DASH_addr], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2079) : re_frame.core.subscribe.call(null,G__2079));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (ethereum_addr2078){
return (function (){
var ethereum_addr = cljs.core.deref(ethereum_addr2078);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$flex,(1),cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$flex_DASH_end,cljs.core.cst$kw$padding,(10)], null)], null),(cljs.core.truth_(ethereum_addr)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Wallet connected: ",ethereum_addr], null):null)], null);
});})(ethereum_addr2078))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$eth_DASH_wallet)], null)], 0)));
});
if(cljs.core.truth_(cljs.core.find_ns(cljs.core.cst$sym$re_DASH_frame$core))){
} else {
goog.require('re_frame.core');
}

pluto.playground.core.view_selection = (function pluto$playground$core$view_selection(){
var selection2085 = (function (){var G__2087 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_selection], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2087) : re_frame.core.subscribe.call(null,G__2087));
})();
var extension_keys2086 = (function (){var G__2088 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_keys], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2088) : re_frame.core.subscribe.call(null,G__2088));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (selection2085,extension_keys2086){
return (function (){
var selection = cljs.core.deref(selection2085);
var extension_keys = cljs.core.deref(extension_keys2086);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$flex_DASH_end,cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center,cljs.core.cst$kw$margin,"10px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,(10)], null)], null),"Selection"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.select,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_change,((function (selection,extension_keys,selection2085,extension_keys2086){
return (function (p1__2083_SHARP_,p2__2082_SHARP_){
var G__2089 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$extension_DASH_selection,p2__2082_SHARP_.key], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2089) : re_frame.core.dispatch.call(null,G__2089));
});})(selection,extension_keys,selection2085,extension_keys2086))
,cljs.core.cst$kw$selected,selection,cljs.core.cst$kw$options,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (selection,extension_keys,selection2085,extension_keys2086){
return (function (p1__2084_SHARP_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,p1__2084_SHARP_,cljs.core.cst$kw$label,p1__2084_SHARP_], null);
});})(selection,extension_keys,selection2085,extension_keys2086))
,extension_keys)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,(10)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,"primary",cljs.core.cst$kw$variant,"contained",cljs.core.cst$kw$on_DASH_click,((function (selection,extension_keys,selection2085,extension_keys2086){
return (function (){
var G__2090 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$browse_DASH_properties,true], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2090) : re_frame.core.dispatch.call(null,G__2090));
});})(selection,extension_keys,selection2085,extension_keys2086))
], null),"Data"], null)], null)], null);
});})(selection2085,extension_keys2086))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$view_DASH_selection)], null)], 0)));
});
if(cljs.core.truth_(cljs.core.find_ns(cljs.core.cst$sym$re_DASH_frame$core))){
} else {
goog.require('re_frame.core');
}

pluto.playground.core.logs_errors = (function pluto$playground$core$logs_errors(){
var logs2093 = (function (){var G__2095 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2095) : re_frame.core.subscribe.call(null,G__2095));
})();
var errors2094 = (function (){var G__2096 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_errors], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2096) : re_frame.core.subscribe.call(null,G__2096));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (logs2093,errors2094){
return (function (){
var logs = cljs.core.deref(logs2093);
var errors = cljs.core.deref(errors2094);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.logs.table,(function (){var or__4131__auto__ = pluto.playground.core.flatten_errors(errors);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return logs;
}
})()], null);
});})(logs2093,errors2094))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$logs_DASH_errors)], null)], 0)));
});
pluto.playground.core.margin = (10);
if(cljs.core.truth_(cljs.core.find_ns(cljs.core.cst$sym$re_DASH_frame$core))){
} else {
goog.require('re_frame.core');
}

pluto.playground.core.layout = (function pluto$playground$core$layout(){
var logs2107 = (function (){var G__2111 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2111) : re_frame.core.subscribe.call(null,G__2111));
})();
var errors2108 = (function (){var G__2112 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_errors], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2112) : re_frame.core.subscribe.call(null,G__2112));
})();
var keys2109 = (function (){var G__2113 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_parsed], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2113) : re_frame.core.subscribe.call(null,G__2113));
})();
var extension_selection2110 = (function (){var G__2114 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$extension_DASH_selection], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2114) : re_frame.core.subscribe.call(null,G__2114));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (logs2107,errors2108,keys2109,extension_selection2110){
return (function (){
var logs = cljs.core.deref(logs2107);
var errors = cljs.core.deref(errors2108);
var map__2115 = cljs.core.deref(keys2109);
var map__2115__$1 = (((((!((map__2115 == null))))?(((((map__2115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2115):map__2115);
var data = map__2115__$1;
var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2115__$1,cljs.core.cst$kw$views);
var hooks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2115__$1,cljs.core.cst$kw$hooks);
var extension_selection = cljs.core.deref(extension_selection2110);
var keys = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (logs,errors,map__2115,map__2115__$1,data,views,hooks,extension_selection,logs2107,errors2108,keys2109,extension_selection2110){
return (function (p1__2099_SHARP_){
return ["hooks/",cljs.core.name(p1__2099_SHARP_)].join('');
});})(logs,errors,map__2115,map__2115__$1,data,views,hooks,extension_selection,logs2107,errors2108,keys2109,extension_selection2110))
,cljs.core.keys(hooks)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (logs,errors,map__2115,map__2115__$1,data,views,hooks,extension_selection,logs2107,errors2108,keys2109,extension_selection2110){
return (function (p1__2100_SHARP_){
return ["views/",cljs.core.name(p1__2100_SHARP_)].join('');
});})(logs,errors,map__2115,map__2115__$1,data,views,hooks,extension_selection,logs2107,errors2108,keys2109,extension_selection2110))
,cljs.core.keys(views)));
var selection = (function (){var or__4131__auto__ = extension_selection;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.first(keys);
}
})();
var props = cljs.core.deref((function (){var G__2117 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_properties,selection], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2117) : re_frame.core.subscribe.call(null,G__2117));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.core.AppBar,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,cljs.core.cst$kw$static], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.core.Toolbar,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$variant,"dense"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex,(1),cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$space_DASH_between,cljs.core.cst$kw$margin,pluto.playground.core.margin], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.core.Typography,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$variant,"h6"], null),"Extensions Fiddle"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$on_DASH_click,((function (keys,selection,props,logs,errors,map__2115,map__2115__$1,data,views,hooks,extension_selection,logs2107,errors2108,keys2109,extension_selection2110){
return (function (){
var G__2118 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$examples,true], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2118) : re_frame.core.dispatch.call(null,G__2118));
});})(keys,selection,props,logs,errors,map__2115,map__2115__$1,data,views,hooks,extension_selection,logs2107,errors2108,keys2109,extension_selection2110))
], null),"Examples"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$on_DASH_click,((function (keys,selection,props,logs,errors,map__2115,map__2115__$1,data,views,hooks,extension_selection,logs2107,errors2108,keys2109,extension_selection2110){
return (function (){
var G__2119 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_publish], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2119) : re_frame.core.dispatch.call(null,G__2119));
});})(keys,selection,props,logs,errors,map__2115,map__2115__$1,data,views,hooks,extension_selection,logs2107,errors2108,keys2109,extension_selection2110))
], null),"Publish"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.dialogs.dialogs,selection], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$inline_DASH_block,cljs.core.cst$kw$width,"calc(100% - 400px)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.source.editor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_change,((function (keys,selection,props,logs,errors,map__2115,map__2115__$1,data,views,hooks,extension_selection,logs2107,errors2108,keys2109,extension_selection2110){
return (function (p1__2101_SHARP_){
var G__2120 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_source,pluto.playground.core.ctx,p1__2101_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2120) : re_frame.core.dispatch.call(null,G__2120));
});})(keys,selection,props,logs,errors,map__2115,map__2115__$1,data,views,hooks,extension_selection,logs2107,errors2108,keys2109,extension_selection2110))
], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"#fafafa"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex,(1),cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$space_DASH_between], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.core.Typography,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,pluto.playground.core.margin], null),cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$variant,"h6"], null),"Logs"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$flex_DASH_end,cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.switch$,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"primary",cljs.core.cst$kw$on_DASH_change,((function (keys,selection,props,logs,errors,map__2115,map__2115__$1,data,views,hooks,extension_selection,logs2107,errors2108,keys2109,extension_selection2110){
return (function (p1__2103_SHARP_,p2__2102_SHARP_){
var G__2121 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_switch_DASH_filter_DASH_logs,p2__2102_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2121) : re_frame.core.dispatch.call(null,G__2121));
});})(keys,selection,props,logs,errors,map__2115,map__2115__$1,data,views,hooks,extension_selection,logs2107,errors2108,keys2109,extension_selection2110))
], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.core.Typography,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,"10px"], null)], null),"Filter traces"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$on_DASH_click,((function (keys,selection,props,logs,errors,map__2115,map__2115__$1,data,views,hooks,extension_selection,logs2107,errors2108,keys2109,extension_selection2110){
return (function (){
var G__2122 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_clear_DASH_logs], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2122) : re_frame.core.dispatch.call(null,G__2122));
});})(keys,selection,props,logs,errors,map__2115,map__2115__$1,data,views,hooks,extension_selection,logs2107,errors2108,keys2109,extension_selection2110))
], null),"Clear logs"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$height,"calc(40% - 100px)",cljs.core.cst$kw$overflow,cljs.core.cst$kw$auto], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.logs.table,(function (){var or__4131__auto__ = pluto.playground.core.flatten_errors(errors);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return logs;
}
})()], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$background_DASH_color,"#fafafa",cljs.core.cst$kw$width,(400),cljs.core.cst$kw$height,"calc(100% - 64px)",cljs.core.cst$kw$overflow,cljs.core.cst$kw$auto], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$border,"40px solid #ddd",cljs.core.cst$kw$border_DASH_width,"20px 7px",cljs.core.cst$kw$border_DASH_radius,"40px",cljs.core.cst$kw$margin,(20)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,(667)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex,(1)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.selected_ui,props,selection,data], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$center,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column,cljs.core.cst$kw$margin,pluto.playground.core.margin], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.core.Typography,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,pluto.playground.core.margin], null),cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$variant,"h6"], null),"Inspect"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$flex_DASH_end], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,"primary",cljs.core.cst$kw$variant,"contained",cljs.core.cst$kw$on_DASH_click,((function (keys,selection,props,logs,errors,map__2115,map__2115__$1,data,views,hooks,extension_selection,logs2107,errors2108,keys2109,extension_selection2110){
return (function (){
var G__2123 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$browse_DASH_app_DASH_db,true], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2123) : re_frame.core.dispatch.call(null,G__2123));
});})(keys,selection,props,logs,errors,map__2115,map__2115__$1,data,views,hooks,extension_selection,logs2107,errors2108,keys2109,extension_selection2110))
], null),"Local app DB"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$flex_DASH_end,cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center,cljs.core.cst$kw$margin_DASH_top,pluto.playground.core.margin], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.select,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_change,((function (keys,selection,props,logs,errors,map__2115,map__2115__$1,data,views,hooks,extension_selection,logs2107,errors2108,keys2109,extension_selection2110){
return (function (p1__2105_SHARP_,p2__2104_SHARP_){
var G__2124 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$extension_DASH_selection,p2__2104_SHARP_.key], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2124) : re_frame.core.dispatch.call(null,G__2124));
});})(keys,selection,props,logs,errors,map__2115,map__2115__$1,data,views,hooks,extension_selection,logs2107,errors2108,keys2109,extension_selection2110))
,cljs.core.cst$kw$selected,selection,cljs.core.cst$kw$options,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (keys,selection,props,logs,errors,map__2115,map__2115__$1,data,views,hooks,extension_selection,logs2107,errors2108,keys2109,extension_selection2110){
return (function (p1__2106_SHARP_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,p1__2106_SHARP_,cljs.core.cst$kw$label,p1__2106_SHARP_], null);
});})(keys,selection,props,logs,errors,map__2115,map__2115__$1,data,views,hooks,extension_selection,logs2107,errors2108,keys2109,extension_selection2110))
,keys)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,pluto.playground.core.margin], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,"primary",cljs.core.cst$kw$variant,"contained",cljs.core.cst$kw$on_DASH_click,((function (keys,selection,props,logs,errors,map__2115,map__2115__$1,data,views,hooks,extension_selection,logs2107,errors2108,keys2109,extension_selection2110){
return (function (){
var G__2125 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$browse_DASH_properties,true], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2125) : re_frame.core.dispatch.call(null,G__2125));
});})(keys,selection,props,logs,errors,map__2115,map__2115__$1,data,views,hooks,extension_selection,logs2107,errors2108,keys2109,extension_selection2110))
], null),"Data"], null)], null)], null)], null)], null)], null)], null);
});})(logs2107,errors2108,keys2109,extension_selection2110))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$layout)], null)], 0)));
});
pluto.playground.core.mount_root = (function pluto$playground$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.layout], null),document.getElementById("app"));
});
pluto.playground.core.bootstrap = (function pluto$playground$core$bootstrap(){
var G__2128_2130 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fetch_DASH_extension], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2128_2130) : re_frame.core.dispatch.call(null,G__2128_2130));

var G__2129_2131 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_init_DASH_wallet], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2129_2131) : re_frame.core.dispatch.call(null,G__2129_2131));

return pluto.playground.core.mount_root();
});
goog.exportSymbol('pluto.playground.core.bootstrap', pluto.playground.core.bootstrap);
