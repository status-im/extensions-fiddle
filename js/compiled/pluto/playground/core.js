// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.playground.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pluto.playground.components.source');
goog.require('pluto.playground.components.logs');
goog.require('pluto.playground.fx');
goog.require('pluto.playground.subs');
goog.require('pluto.reader.events');
goog.require('pluto.reader.views');
goog.require('pluto.log');
goog.require('react_native_web.extensions');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('react_native_web.react');
goog.require('pluto.playground.components.dialogs');
pluto.playground.core.warn = console.warn.bind(console);
re_frame.loggers.set_loggers_BANG_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$warn,(function() { 
var G__1962__delegate = function (args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("re-frame: overwriting",cljs.core.first(args))){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pluto.playground.core.warn,args);

}
};
var G__1962 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1963__i = 0, G__1963__a = new Array(arguments.length -  0);
while (G__1963__i < G__1963__a.length) {G__1963__a[G__1963__i] = arguments[G__1963__i + 0]; ++G__1963__i;}
  args = new cljs.core.IndexedSeq(G__1963__a,0,null);
} 
return G__1962__delegate.call(this,args);};
G__1962.cljs$lang$maxFixedArity = 0;
G__1962.cljs$lang$applyTo = (function (arglist__1964){
var args = cljs.core.seq(arglist__1964);
return G__1962__delegate(args);
});
G__1962.cljs$core$IFn$_invoke$arity$variadic = G__1962__delegate;
return G__1962;
})()
], null));
pluto.playground.core.dispatch_events = (function pluto$playground$core$dispatch_events(ctx,events){
var seq__1965 = cljs.core.seq(events);
var chunk__1966 = null;
var count__1967 = (0);
var i__1968 = (0);
while(true){
if((i__1968 < count__1967)){
var event = chunk__1966.cljs$core$IIndexed$_nth$arity$2(null,i__1968);
if(cljs.core.vector_QMARK_(event)){
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(event) : re_frame.core.dispatch.call(null,event));
} else {
pluto.log.fire_BANG_(ctx,cljs.core.cst$kw$pluto$log_SLASH_error,cljs.core.cst$kw$event_SLASH_dispatch,event);
}


var G__1969 = seq__1965;
var G__1970 = chunk__1966;
var G__1971 = count__1967;
var G__1972 = (i__1968 + (1));
seq__1965 = G__1969;
chunk__1966 = G__1970;
count__1967 = G__1971;
i__1968 = G__1972;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__1965);
if(temp__5457__auto__){
var seq__1965__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__1965__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__1965__$1);
var G__1973 = cljs.core.chunk_rest(seq__1965__$1);
var G__1974 = c__4550__auto__;
var G__1975 = cljs.core.count(c__4550__auto__);
var G__1976 = (0);
seq__1965 = G__1973;
chunk__1966 = G__1974;
count__1967 = G__1975;
i__1968 = G__1976;
continue;
} else {
var event = cljs.core.first(seq__1965__$1);
if(cljs.core.vector_QMARK_(event)){
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(event) : re_frame.core.dispatch.call(null,event));
} else {
pluto.log.fire_BANG_(ctx,cljs.core.cst$kw$pluto$log_SLASH_error,cljs.core.cst$kw$event_SLASH_dispatch,event);
}


var G__1977 = cljs.core.next(seq__1965__$1);
var G__1978 = null;
var G__1979 = (0);
var G__1980 = (0);
seq__1965 = G__1977;
chunk__1966 = G__1978;
count__1967 = G__1979;
i__1968 = G__1980;
continue;
}
} else {
return null;
}
}
break;
}
});
pluto.playground.core.resolve_query = (function pluto$playground$core$resolve_query(ctx,p__1981){
var vec__1982 = p__1981;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1982,(0),null);
var data = vec__1982;
if(cljs.core.truth_(re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sub,id))){
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(data) : re_frame.core.subscribe.call(null,data));
} else {
return pluto.log.fire_BANG_(ctx,cljs.core.cst$kw$pluto$log_SLASH_error,cljs.core.cst$kw$query_SLASH_resolve,data);
}
});
pluto.playground.core.cartouche = (function pluto$playground$core$cartouche(p__1985,data){
var map__1986 = p__1985;
var map__1986__$1 = (((((!((map__1986 == null))))?(((((map__1986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1986):map__1986);
var m = map__1986__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1986__$1,cljs.core.cst$kw$path);
var p = cljs.core.deref((function (){var G__1988 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_selected], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__1988) : re_frame.core.subscribe.call(null,G__1988));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_mouse_DASH_enter,((function (p,map__1986,map__1986__$1,m,path){
return (function (){
var G__1989 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_set_DASH_selected,path], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1989) : re_frame.core.dispatch.call(null,G__1989));
});})(p,map__1986,map__1986__$1,m,path))
,cljs.core.cst$kw$on_DASH_mouse_DASH_leave,((function (p,map__1986,map__1986__$1,m,path){
return (function (){
var G__1990 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_set_DASH_selected,null], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1990) : re_frame.core.dispatch.call(null,G__1990));
});})(p,map__1986,map__1986__$1,m,path))
,cljs.core.cst$kw$style,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,path))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border,"1px solid black"], null):null)], null),data], null);
});
pluto.playground.core.wrap_view = (function pluto$playground$core$wrap_view(parent_ctx,data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.cartouche,parent_ctx,data], null);
});
pluto.playground.core.ctx = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"Extension ID"], null),cljs.core.cst$kw$capacities,react_native_web.extensions.capacities,cljs.core.cst$kw$query_DASH_fn,pluto.playground.core.resolve_query,cljs.core.cst$kw$event_DASH_fn,pluto.playground.core.dispatch_events,cljs.core.cst$kw$log_DASH_fn,(function (p1__1991_SHARP_){
var G__1992 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_append_DASH_log,p1__1991_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1992) : re_frame.core.dispatch.call(null,G__1992));
})], null);
pluto.playground.core.payload = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Test Extension",cljs.core.cst$kw$users,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$nm,"Jane"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$nm,"Sue"], null)], null)], null);
pluto.playground.core.Button = (MaterialUI["Button"]);
pluto.playground.core.button = (function pluto$playground$core$button(props,label){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.core.Button,props,label], null);
});
pluto.playground.core.Switch = (MaterialUI["Switch"]);
pluto.playground.core.switch$ = (function pluto$playground$core$switch(props){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.core.Switch,props], null);
});
pluto.playground.core.flatten_errors = (function pluto$playground$core$flatten_errors(m){
if(cljs.core.map_QMARK_(m)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.reduce_kv((function (p1__1993_SHARP_,p2__1995_SHARP_,p3__1994_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p1__1993_SHARP_,cljs.core.vals(p3__1994_SHARP_));
}),cljs.core.PersistentVector.EMPTY,m));
} else {
return null;
}
});
if(cljs.core.truth_(cljs.core.find_ns(cljs.core.cst$sym$re_DASH_frame$core))){
} else {
goog.require('re_frame.core');
}

pluto.playground.core.layout = (function pluto$playground$core$layout(){
var logs1999 = (function (){var G__2001 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2001) : re_frame.core.subscribe.call(null,G__2001));
})();
var errors2000 = (function (){var G__2002 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_errors], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2002) : re_frame.core.subscribe.call(null,G__2002));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (logs1999,errors2000){
return (function (){
var logs = cljs.core.deref(logs1999);
var errors = cljs.core.deref(errors2000);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.dialogs.dialogs], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$inline_DASH_block,cljs.core.cst$kw$width,"calc(100% - 400px)"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$flex_DASH_end,cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center,cljs.core.cst$kw$margin,"10px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,"primary",cljs.core.cst$kw$variant,"contained",cljs.core.cst$kw$on_DASH_click,((function (logs,errors,logs1999,errors2000){
return (function (){
var G__2003 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$browse_DASH_app_DASH_db,true], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2003) : re_frame.core.dispatch.call(null,G__2003));
});})(logs,errors,logs1999,errors2000))
], null),"Local app DB"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.source.editor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_change,((function (logs,errors,logs1999,errors2000){
return (function (p1__1996_SHARP_){
var G__2004 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_source,pluto.playground.core.ctx,p1__1996_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2004) : re_frame.core.dispatch.call(null,G__2004));
});})(logs,errors,logs1999,errors2000))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$flex_DASH_end,cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center,cljs.core.cst$kw$margin,"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.switch$,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"primary",cljs.core.cst$kw$on_DASH_change,((function (logs,errors,logs1999,errors2000){
return (function (p1__1998_SHARP_,p2__1997_SHARP_){
var G__2005 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_switch_DASH_filter_DASH_logs,p2__1997_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2005) : re_frame.core.dispatch.call(null,G__2005));
});})(logs,errors,logs1999,errors2000))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,"10px"], null)], null),"Filter traces"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,"primary",cljs.core.cst$kw$variant,"contained",cljs.core.cst$kw$on_DASH_click,((function (logs,errors,logs1999,errors2000){
return (function (){
var G__2006 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_clear_DASH_logs], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2006) : re_frame.core.dispatch.call(null,G__2006));
});})(logs,errors,logs1999,errors2000))
], null),"Clear logs"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$height,"calc(40% - 50px)",cljs.core.cst$kw$overflow,cljs.core.cst$kw$auto], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.logs.table,(function (){var or__4131__auto__ = pluto.playground.core.flatten_errors(errors);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return logs;
}
})()], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$flex_DASH_end,cljs.core.cst$kw$padding_DASH_right,(20),cljs.core.cst$kw$margin,"10px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,"primary",cljs.core.cst$kw$variant,"contained",cljs.core.cst$kw$on_DASH_click,((function (logs,errors,logs1999,errors2000){
return (function (){
var G__2007 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$examples,true], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2007) : re_frame.core.dispatch.call(null,G__2007));
});})(logs,errors,logs1999,errors2000))
], null),"Examples"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,(10)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,"primary",cljs.core.cst$kw$variant,"contained",cljs.core.cst$kw$on_DASH_click,((function (logs,errors,logs1999,errors2000){
return (function (){
var G__2008 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_publish], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2008) : re_frame.core.dispatch.call(null,G__2008));
});})(logs,errors,logs1999,errors2000))
], null),"Publish"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$border,"40px solid #ddd",cljs.core.cst$kw$border_DASH_width,"20px 7px",cljs.core.cst$kw$border_DASH_radius,"40px",cljs.core.cst$kw$margin,(20)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(375),cljs.core.cst$kw$height,(667)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"extension",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex,(1)], null)], null)], null)], null)], null)], null)], null);
});})(logs1999,errors2000))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$layout)], null)], 0)));
});
pluto.playground.core.mount_root = (function pluto$playground$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.layout], null),document.getElementById("app"));
});
pluto.playground.core.bootstrap = (function pluto$playground$core$bootstrap(){
var G__2011_2012 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fetch_DASH_extension], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2011_2012) : re_frame.core.dispatch.call(null,G__2011_2012));

return pluto.playground.core.mount_root();
});
goog.exportSymbol('pluto.playground.core.bootstrap', pluto.playground.core.bootstrap);
