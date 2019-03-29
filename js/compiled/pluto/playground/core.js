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
goog.require('pluto.playground.components.publish');
pluto.playground.core.warn = console.warn.bind(console);
re_frame.loggers.set_loggers_BANG_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$warn,(function() { 
var G__1918__delegate = function (args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("re-frame: overwriting",cljs.core.first(args))){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pluto.playground.core.warn,args);

}
};
var G__1918 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1919__i = 0, G__1919__a = new Array(arguments.length -  0);
while (G__1919__i < G__1919__a.length) {G__1919__a[G__1919__i] = arguments[G__1919__i + 0]; ++G__1919__i;}
  args = new cljs.core.IndexedSeq(G__1919__a,0,null);
} 
return G__1918__delegate.call(this,args);};
G__1918.cljs$lang$maxFixedArity = 0;
G__1918.cljs$lang$applyTo = (function (arglist__1920){
var args = cljs.core.seq(arglist__1920);
return G__1918__delegate(args);
});
G__1918.cljs$core$IFn$_invoke$arity$variadic = G__1918__delegate;
return G__1918;
})()
], null));
pluto.playground.core.dispatch_events = (function pluto$playground$core$dispatch_events(ctx,events){
var seq__1921 = cljs.core.seq(events);
var chunk__1922 = null;
var count__1923 = (0);
var i__1924 = (0);
while(true){
if((i__1924 < count__1923)){
var event = chunk__1922.cljs$core$IIndexed$_nth$arity$2(null,i__1924);
if(cljs.core.vector_QMARK_(event)){
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(event) : re_frame.core.dispatch.call(null,event));
} else {
pluto.log.fire_BANG_(ctx,cljs.core.cst$kw$pluto$log_SLASH_error,cljs.core.cst$kw$event_SLASH_dispatch,event);
}


var G__1925 = seq__1921;
var G__1926 = chunk__1922;
var G__1927 = count__1923;
var G__1928 = (i__1924 + (1));
seq__1921 = G__1925;
chunk__1922 = G__1926;
count__1923 = G__1927;
i__1924 = G__1928;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__1921);
if(temp__5457__auto__){
var seq__1921__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__1921__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__1921__$1);
var G__1929 = cljs.core.chunk_rest(seq__1921__$1);
var G__1930 = c__4550__auto__;
var G__1931 = cljs.core.count(c__4550__auto__);
var G__1932 = (0);
seq__1921 = G__1929;
chunk__1922 = G__1930;
count__1923 = G__1931;
i__1924 = G__1932;
continue;
} else {
var event = cljs.core.first(seq__1921__$1);
if(cljs.core.vector_QMARK_(event)){
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(event) : re_frame.core.dispatch.call(null,event));
} else {
pluto.log.fire_BANG_(ctx,cljs.core.cst$kw$pluto$log_SLASH_error,cljs.core.cst$kw$event_SLASH_dispatch,event);
}


var G__1933 = cljs.core.next(seq__1921__$1);
var G__1934 = null;
var G__1935 = (0);
var G__1936 = (0);
seq__1921 = G__1933;
chunk__1922 = G__1934;
count__1923 = G__1935;
i__1924 = G__1936;
continue;
}
} else {
return null;
}
}
break;
}
});
pluto.playground.core.resolve_query = (function pluto$playground$core$resolve_query(ctx,p__1937){
var vec__1938 = p__1937;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1938,(0),null);
var data = vec__1938;
if(cljs.core.truth_(re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sub,id))){
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(data) : re_frame.core.subscribe.call(null,data));
} else {
return pluto.log.fire_BANG_(ctx,cljs.core.cst$kw$pluto$log_SLASH_error,cljs.core.cst$kw$query_SLASH_resolve,data);
}
});
pluto.playground.core.cartouche = (function pluto$playground$core$cartouche(p__1941,data){
var map__1942 = p__1941;
var map__1942__$1 = (((((!((map__1942 == null))))?(((((map__1942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1942):map__1942);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1942__$1,cljs.core.cst$kw$path);
var p = cljs.core.deref((function (){var G__1944 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_selected], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__1944) : re_frame.core.subscribe.call(null,G__1944));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_mouse_DASH_enter,((function (p,map__1942,map__1942__$1,path){
return (function (){
var G__1945 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_set_DASH_selected,path], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1945) : re_frame.core.dispatch.call(null,G__1945));
});})(p,map__1942,map__1942__$1,path))
,cljs.core.cst$kw$on_DASH_mouse_DASH_leave,((function (p,map__1942,map__1942__$1,path){
return (function (){
var G__1946 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_set_DASH_selected,null], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1946) : re_frame.core.dispatch.call(null,G__1946));
});})(p,map__1942,map__1942__$1,path))
,cljs.core.cst$kw$style,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,path))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border,"1px solid black"], null):null)], null),data], null);
});
pluto.playground.core.wrap_view = (function pluto$playground$core$wrap_view(parent_ctx,p__1947){
var map__1948 = p__1947;
var map__1948__$1 = (((((!((map__1948 == null))))?(((((map__1948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1948):map__1948);
var m = map__1948__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1948__$1,cljs.core.cst$kw$data);
if(cljs.core.vector_QMARK_(data)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.cartouche,parent_ctx,data], null)], null);
} else {
return m;
}
});
pluto.playground.core.ctx = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"Extension ID"], null),cljs.core.cst$kw$capacities,react_native_web.extensions.capacities,cljs.core.cst$kw$query_DASH_fn,pluto.playground.core.resolve_query,cljs.core.cst$kw$event_DASH_fn,pluto.playground.core.dispatch_events,cljs.core.cst$kw$log_DASH_fn,(function (p1__1950_SHARP_){
var G__1951 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_append_DASH_log,p1__1950_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1951) : re_frame.core.dispatch.call(null,G__1951));
})], null);
pluto.playground.core.payload = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Test Extension",cljs.core.cst$kw$users,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$nm,"Jane"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$nm,"Sue"], null)], null)], null);
pluto.playground.core.Button = (MaterialUI["Button"]);
pluto.playground.core.flatten_errors = (function pluto$playground$core$flatten_errors(m){
if(cljs.core.map_QMARK_(m)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.reduce_kv((function (p1__1952_SHARP_,p2__1954_SHARP_,p3__1953_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p1__1952_SHARP_,cljs.core.vals(p3__1953_SHARP_));
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
var logs1956 = (function (){var G__1958 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_logs], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__1958) : re_frame.core.subscribe.call(null,G__1958));
})();
var errors1957 = (function (){var G__1959 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_errors], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__1959) : re_frame.core.subscribe.call(null,G__1959));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (logs1956,errors1957){
return (function (){
var logs = cljs.core.deref(logs1956);
var errors = cljs.core.deref(errors1957);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$row,cljs.core.cst$kw$flex,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.publish.publish_dialog], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column,cljs.core.cst$kw$flex,(1)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex,(1),cljs.core.cst$kw$overflow,cljs.core.cst$kw$scroll,cljs.core.cst$kw$min_DASH_width,(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.source.viewer,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_change,((function (logs,errors,logs1956,errors1957){
return (function (p1__1955_SHARP_){
var G__1960 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_source,pluto.playground.core.ctx,p1__1955_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1960) : re_frame.core.dispatch.call(null,G__1960));
});})(logs,errors,logs1956,errors1957))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.logs.table,(function (){var or__4131__auto__ = pluto.playground.core.flatten_errors(errors);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return logs;
}
})()], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.core.Button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,"primary",cljs.core.cst$kw$variant,"contained",cljs.core.cst$kw$on_DASH_click,((function (logs,errors,logs1956,errors1957){
return (function (){
var G__1961 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_publish], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1961) : re_frame.core.dispatch.call(null,G__1961));
});})(logs,errors,logs1956,errors1957))
], null),"Publish"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$border,"40px solid #ddd",cljs.core.cst$kw$border_DASH_width,"55px 7px",cljs.core.cst$kw$border_DASH_radius,"40px",cljs.core.cst$kw$margin_DASH_top,(20)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(375),cljs.core.cst$kw$height,(667)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"extension",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex,(1)], null)], null)], null)], null)], null)], null)], null);
});})(logs1956,errors1957))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$layout)], null)], 0)));
});
pluto.playground.core.mount_root = (function pluto$playground$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.layout], null),document.getElementById("app"));
});
pluto.playground.core.bootstrap = (function pluto$playground$core$bootstrap(){
var G__1964_1965 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fetch_DASH_extension], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1964_1965) : re_frame.core.dispatch.call(null,G__1964_1965));

return pluto.playground.core.mount_root();
});
goog.exportSymbol('pluto.playground.core.bootstrap', pluto.playground.core.bootstrap);
