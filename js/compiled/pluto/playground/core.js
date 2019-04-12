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
var G__3040__delegate = function (args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("re-frame: overwriting",cljs.core.first(args))){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pluto.playground.core.warn,args);

}
};
var G__3040 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3041__i = 0, G__3041__a = new Array(arguments.length -  0);
while (G__3041__i < G__3041__a.length) {G__3041__a[G__3041__i] = arguments[G__3041__i + 0]; ++G__3041__i;}
  args = new cljs.core.IndexedSeq(G__3041__a,0,null);
} 
return G__3040__delegate.call(this,args);};
G__3040.cljs$lang$maxFixedArity = 0;
G__3040.cljs$lang$applyTo = (function (arglist__3042){
var args = cljs.core.seq(arglist__3042);
return G__3040__delegate(args);
});
G__3040.cljs$core$IFn$_invoke$arity$variadic = G__3040__delegate;
return G__3040;
})()
], null));
pluto.playground.core.dispatch_events = (function pluto$playground$core$dispatch_events(ctx,events){
var seq__3043 = cljs.core.seq(events);
var chunk__3044 = null;
var count__3045 = (0);
var i__3046 = (0);
while(true){
if((i__3046 < count__3045)){
var event = chunk__3044.cljs$core$IIndexed$_nth$arity$2(null,i__3046);
if(cljs.core.vector_QMARK_(event)){
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(event) : re_frame.core.dispatch.call(null,event));
} else {
pluto.log.fire_BANG_(ctx,cljs.core.cst$kw$pluto$log_SLASH_error,cljs.core.cst$kw$event_SLASH_dispatch,event);
}


var G__3047 = seq__3043;
var G__3048 = chunk__3044;
var G__3049 = count__3045;
var G__3050 = (i__3046 + (1));
seq__3043 = G__3047;
chunk__3044 = G__3048;
count__3045 = G__3049;
i__3046 = G__3050;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__3043);
if(temp__5720__auto__){
var seq__3043__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__3043__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__3043__$1);
var G__3051 = cljs.core.chunk_rest(seq__3043__$1);
var G__3052 = c__4550__auto__;
var G__3053 = cljs.core.count(c__4550__auto__);
var G__3054 = (0);
seq__3043 = G__3051;
chunk__3044 = G__3052;
count__3045 = G__3053;
i__3046 = G__3054;
continue;
} else {
var event = cljs.core.first(seq__3043__$1);
if(cljs.core.vector_QMARK_(event)){
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(event) : re_frame.core.dispatch.call(null,event));
} else {
pluto.log.fire_BANG_(ctx,cljs.core.cst$kw$pluto$log_SLASH_error,cljs.core.cst$kw$event_SLASH_dispatch,event);
}


var G__3055 = cljs.core.next(seq__3043__$1);
var G__3056 = null;
var G__3057 = (0);
var G__3058 = (0);
seq__3043 = G__3055;
chunk__3044 = G__3056;
count__3045 = G__3057;
i__3046 = G__3058;
continue;
}
} else {
return null;
}
}
break;
}
});
pluto.playground.core.resolve_query = (function pluto$playground$core$resolve_query(ctx,p__3059){
var vec__3060 = p__3059;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3060,(0),null);
var data = vec__3060;
if(cljs.core.truth_(re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sub,id))){
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(data) : re_frame.core.subscribe.call(null,data));
} else {
return pluto.log.fire_BANG_(ctx,cljs.core.cst$kw$pluto$log_SLASH_error,cljs.core.cst$kw$query_SLASH_resolve,data);
}
});
pluto.playground.core.cartouche = (function pluto$playground$core$cartouche(p__3063,data){
var map__3064 = p__3063;
var map__3064__$1 = (((((!((map__3064 == null))))?(((((map__3064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3064):map__3064);
var m = map__3064__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3064__$1,cljs.core.cst$kw$path);
var p = cljs.core.deref((function (){var G__3066 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_selected], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__3066) : re_frame.core.subscribe.call(null,G__3066));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_mouse_DASH_enter,((function (p,map__3064,map__3064__$1,m,path){
return (function (){
var G__3067 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_set_DASH_selected,path], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__3067) : re_frame.core.dispatch.call(null,G__3067));
});})(p,map__3064,map__3064__$1,m,path))
,cljs.core.cst$kw$on_DASH_mouse_DASH_leave,((function (p,map__3064,map__3064__$1,m,path){
return (function (){
var G__3068 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_set_DASH_selected,null], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__3068) : re_frame.core.dispatch.call(null,G__3068));
});})(p,map__3064,map__3064__$1,m,path))
,cljs.core.cst$kw$style,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,path))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border,"1px solid black"], null):null)], null),data], null);
});
pluto.playground.core.wrap_view = (function pluto$playground$core$wrap_view(parent_ctx,data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.cartouche,parent_ctx,data], null);
});
pluto.playground.core.ctx = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"Extension ID"], null),cljs.core.cst$kw$capacities,react_native_web.extensions.capacities,cljs.core.cst$kw$query_DASH_fn,pluto.playground.core.resolve_query,cljs.core.cst$kw$event_DASH_fn,pluto.playground.core.dispatch_events,cljs.core.cst$kw$log_DASH_fn,(function (p1__3069_SHARP_){
var G__3070 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_append_DASH_log,p1__3069_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__3070) : re_frame.core.dispatch.call(null,G__3070));
})], null);
pluto.playground.core.flatten_errors = (function pluto$playground$core$flatten_errors(m){
if(cljs.core.map_QMARK_(m)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.reduce_kv((function (p1__3071_SHARP_,p2__3073_SHARP_,p3__3072_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p1__3071_SHARP_,((cljs.core.map_QMARK_(p3__3072_SHARP_))?cljs.core.vals(p3__3072_SHARP_):p3__3072_SHARP_));
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
var extension_selection3074 = (function (){var G__3077 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_selection], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__3077) : re_frame.core.subscribe.call(null,G__3077));
})();
var props3075 = (function (){var G__3078 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_selected_DASH_properties], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__3078) : re_frame.core.subscribe.call(null,G__3078));
})();
var data3076 = (function (){var G__3079 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_parsed], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__3079) : re_frame.core.subscribe.call(null,G__3079));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (extension_selection3074,props3075,data3076){
return (function (){
var extension_selection = cljs.core.deref(extension_selection3074);
var props = cljs.core.deref(props3075);
var data = cljs.core.deref(data3076);
var vec__3080 = pluto.playground.core.parse_extension_id(extension_selection);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3080,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3080,(1),null);
var G__3083 = type;
var G__3083__$1 = (((G__3083 instanceof cljs.core.Keyword))?G__3083.fqn:null);
switch (G__3083__$1) {
case "hooks":
return react_native_web.hooks.hook_in(id,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hooks,id], null)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.cst$kw$lifecycle),props);

break;
case "views":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex,(1),cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$center,cljs.core.cst$kw$max_DASH_width,"100%"], null)], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex,(1),cljs.core.cst$kw$height,cljs.core.cst$kw$max_DASH_content,cljs.core.cst$kw$overflow,cljs.core.cst$kw$auto,cljs.core.cst$kw$max_DASH_width,"100%",cljs.core.cst$kw$border,"blue 1px solid"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.view,props,data,id], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(props),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join('')], null))], null);

break;
default:
return null;

}
});})(extension_selection3074,props3075,data3076))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$selected_DASH_ui)], null)], 0)));
});
if(cljs.core.truth_(cljs.core.find_ns(cljs.core.cst$sym$re_DASH_frame$core))){
} else {
goog.require('re_frame.core');
}

pluto.playground.core.eth_wallet = (function pluto$playground$core$eth_wallet(){
var ethereum_addr3087 = (function (){var G__3088 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$ethereum_DASH_addr], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__3088) : re_frame.core.subscribe.call(null,G__3088));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (ethereum_addr3087){
return (function (){
var ethereum_addr = cljs.core.deref(ethereum_addr3087);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$flex,(1),cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$flex_DASH_end,cljs.core.cst$kw$padding,(10)], null)], null),(cljs.core.truth_(ethereum_addr)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"inherit"], null)], null),"Wallet connected: ",ethereum_addr], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.material_ui.button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$on_DASH_click,((function (ethereum_addr,ethereum_addr3087){
return (function (){
var G__3089 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_init_DASH_wallet], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__3089) : re_frame.core.dispatch.call(null,G__3089));
});})(ethereum_addr,ethereum_addr3087))
], null),"Connect wallet"], null))], null);
});})(ethereum_addr3087))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$eth_DASH_wallet)], null)], 0)));
});
if(cljs.core.truth_(cljs.core.find_ns(cljs.core.cst$sym$re_DASH_frame$core))){
} else {
goog.require('re_frame.core');
}

pluto.playground.core.view_selection = (function pluto$playground$core$view_selection(){
var selection3095 = (function (){var G__3097 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_selection], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__3097) : re_frame.core.subscribe.call(null,G__3097));
})();
var extension_keys3096 = (function (){var G__3098 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_keys], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__3098) : re_frame.core.subscribe.call(null,G__3098));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (selection3095,extension_keys3096){
return (function (){
var selection = cljs.core.deref(selection3095);
var extension_keys = cljs.core.deref(extension_keys3096);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$flex_DASH_end,cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center,cljs.core.cst$kw$margin_DASH_top,pluto.playground.core.margin], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.material_ui.select,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_change,((function (selection,extension_keys,selection3095,extension_keys3096){
return (function (p1__3093_SHARP_,p2__3092_SHARP_){
var G__3099 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$extension_DASH_selection,p2__3092_SHARP_.key], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__3099) : re_frame.core.dispatch.call(null,G__3099));
});})(selection,extension_keys,selection3095,extension_keys3096))
,cljs.core.cst$kw$selected,selection,cljs.core.cst$kw$options,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (selection,extension_keys,selection3095,extension_keys3096){
return (function (p1__3094_SHARP_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,p1__3094_SHARP_,cljs.core.cst$kw$label,p1__3094_SHARP_], null);
});})(selection,extension_keys,selection3095,extension_keys3096))
,extension_keys)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,pluto.playground.core.margin], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.material_ui.button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,"primary",cljs.core.cst$kw$variant,"contained",cljs.core.cst$kw$on_DASH_click,((function (selection,extension_keys,selection3095,extension_keys3096){
return (function (){
var G__3100 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$browse_DASH_properties,true], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__3100) : re_frame.core.dispatch.call(null,G__3100));
});})(selection,extension_keys,selection3095,extension_keys3096))
], null),"Data"], null)], null)], null);
});})(selection3095,extension_keys3096))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$view_DASH_selection)], null)], 0)));
});
if(cljs.core.truth_(cljs.core.find_ns(cljs.core.cst$sym$re_DASH_frame$core))){
} else {
goog.require('re_frame.core');
}

pluto.playground.core.logs_errors = (function pluto$playground$core$logs_errors(){
var logs3103 = (function (){var G__3105 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__3105) : re_frame.core.subscribe.call(null,G__3105));
})();
var errors3104 = (function (){var G__3106 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_errors], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__3106) : re_frame.core.subscribe.call(null,G__3106));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (logs3103,errors3104){
return (function (){
var logs = cljs.core.deref(logs3103);
var errors = cljs.core.deref(errors3104);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.logs.table,(function (){var or__4131__auto__ = pluto.playground.core.flatten_errors(errors);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return logs;
}
})()], null);
});})(logs3103,errors3104))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$logs_DASH_errors)], null)], 0)));
});
pluto.playground.core.simple_item = (function pluto$playground$core$simple_item(key,item){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex,(1)], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,item))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$width,(5),cljs.core.cst$kw$background_DASH_color,"#3f51b5",cljs.core.cst$kw$min_DASH_width,(5)], null)], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$cursor,cljs.core.cst$kw$pointer,cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$border_DASH_radius,"4px",cljs.core.cst$kw$padding,(5),cljs.core.cst$kw$font_DASH_weight,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,item))?cljs.core.cst$kw$bold:null)], null),cljs.core.cst$kw$on_DASH_click,(function (){
var G__3109 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_select_DASH_simple_DASH_item,key], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__3109) : re_frame.core.dispatch.call(null,G__3109));
})], null),key], null)], null);
});
pluto.playground.core.simple_edn_type_items = (function pluto$playground$core$simple_edn_type_items(value,label,item){
if(cljs.core.seq(value)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column,cljs.core.cst$kw$margin_DASH_top,(10)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_weight,cljs.core.cst$kw$bold], null)], null),label], null),(function (){var iter__4523__auto__ = (function pluto$playground$core$simple_edn_type_items_$_iter__3110(s__3111){
return (new cljs.core.LazySeq(null,(function (){
var s__3111__$1 = s__3111;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__3111__$1);
if(temp__5720__auto__){
var s__3111__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__3111__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__3111__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__3113 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__3112 = (0);
while(true){
if((i__3112 < size__4522__auto__)){
var vec__3114 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__3112);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3114,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3114,(1),null);
cljs.core.chunk_append(b__3113,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.simple_item,key,item], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,key], null)));

var G__3120 = (i__3112 + (1));
i__3112 = G__3120;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__3113),pluto$playground$core$simple_edn_type_items_$_iter__3110(cljs.core.chunk_rest(s__3111__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__3113),null);
}
} else {
var vec__3117 = cljs.core.first(s__3111__$2);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3117,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3117,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.simple_item,key,item], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,key], null)),pluto$playground$core$simple_edn_type_items_$_iter__3110(cljs.core.rest(s__3111__$2)));
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
var keys3121 = (function (){var G__3124 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_simple_DASH_sources], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__3124) : re_frame.core.subscribe.call(null,G__3124));
})();
var simple_QMARK_3122 = (function (){var G__3125 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$simple_DASH_mode_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__3125) : re_frame.core.subscribe.call(null,G__3125));
})();
var item3123 = (function (){var G__3126 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$simple_DASH_item], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__3126) : re_frame.core.subscribe.call(null,G__3126));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (keys3121,simple_QMARK_3122,item3123){
return (function (){
var map__3127 = cljs.core.deref(keys3121);
var map__3127__$1 = (((((!((map__3127 == null))))?(((((map__3127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3127):map__3127);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3127__$1,cljs.core.cst$kw$meta);
var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3127__$1,cljs.core.cst$kw$views);
var events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3127__$1,cljs.core.cst$kw$events);
var hooks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3127__$1,cljs.core.cst$kw$hooks);
var life = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3127__$1,cljs.core.cst$kw$life);
var simple_QMARK_ = cljs.core.deref(simple_QMARK_3122);
var item = cljs.core.deref(item3123);
if(cljs.core.truth_(simple_QMARK_)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex,(1),cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column,cljs.core.cst$kw$padding,(5),cljs.core.cst$kw$width,(200)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.material_ui.button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,"primary",cljs.core.cst$kw$variant,"contained",cljs.core.cst$kw$on_DASH_click,((function (map__3127,map__3127__$1,meta,views,events,hooks,life,simple_QMARK_,item,keys3121,simple_QMARK_3122,item3123){
return (function (){
var G__3129 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$add_DASH_edn_DASH_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$item_DASH_type,"views/"], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__3129) : re_frame.core.dispatch.call(null,G__3129));
});})(map__3127,map__3127__$1,meta,views,events,hooks,life,simple_QMARK_,item,keys3121,simple_QMARK_3122,item3123))
], null),"Add"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex,(1),cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column,cljs.core.cst$kw$overflow,cljs.core.cst$kw$auto,cljs.core.cst$kw$margin_DASH_top,(10)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.simple_edn_type_items,meta,"Meta",item], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.simple_edn_type_items,life,"Lifecycle",item], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.simple_edn_type_items,events,"Events",item], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.simple_edn_type_items,views,"Views",item], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.simple_edn_type_items,hooks,"Hooks",item], null)], null)], null);
} else {
return null;
}
});})(keys3121,simple_QMARK_3122,item3123))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$simple_DASH_panel)], null)], 0)));
});
if(cljs.core.truth_(cljs.core.find_ns(cljs.core.cst$sym$re_DASH_frame$core))){
} else {
goog.require('re_frame.core');
}

pluto.playground.core.layout = (function pluto$playground$core$layout(){
var keys3143 = (function (){var G__3145 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_parsed], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__3145) : re_frame.core.subscribe.call(null,G__3145));
})();
var simple_QMARK_3144 = (function (){var G__3146 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$simple_DASH_mode_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__3146) : re_frame.core.subscribe.call(null,G__3146));
})();
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (keys3143,simple_QMARK_3144){
return (function (){
var map__3147 = cljs.core.deref(keys3143);
var map__3147__$1 = (((((!((map__3147 == null))))?(((((map__3147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3147):map__3147);
var events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3147__$1,cljs.core.cst$kw$events);
var simple_QMARK_ = cljs.core.deref(simple_QMARK_3144);
var event_names = cljs.core.keys(events);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.material_ui.AppBar,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,cljs.core.cst$kw$static], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.material_ui.Toolbar,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$variant,"dense"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex,(1),cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$space_DASH_between], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$row,cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.material_ui.Typography,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$variant,"h6"], null),"Extensions Fiddle"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.material_ui.switch$,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,"default",cljs.core.cst$kw$checked,cljs.core.boolean$(simple_QMARK_),cljs.core.cst$kw$on_DASH_change,((function (event_names,map__3147,map__3147__$1,events,simple_QMARK_,keys3143,simple_QMARK_3144){
return (function (p1__3133_SHARP_,p2__3132_SHARP_){
var G__3149 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_switch_DASH_mode,p2__3132_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__3149) : re_frame.core.dispatch.call(null,G__3149));
});})(event_names,map__3147,map__3147__$1,events,simple_QMARK_,keys3143,simple_QMARK_3144))
], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.material_ui.Typography,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$style,cljs.core.PersistentArrayMap.EMPTY], null),"Simple mode"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$row], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.material_ui.button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$on_DASH_click,((function (event_names,map__3147,map__3147__$1,events,simple_QMARK_,keys3143,simple_QMARK_3144){
return (function (){
return cljs.core.List.EMPTY;
});})(event_names,map__3147,map__3147__$1,events,simple_QMARK_,keys3143,simple_QMARK_3144))
], null),"New extension"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.eth_wallet], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.material_ui.button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$on_DASH_click,((function (event_names,map__3147,map__3147__$1,events,simple_QMARK_,keys3143,simple_QMARK_3144){
return (function (){
var G__3150 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$examples,true], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__3150) : re_frame.core.dispatch.call(null,G__3150));
});})(event_names,map__3147,map__3147__$1,events,simple_QMARK_,keys3143,simple_QMARK_3144))
], null),"Examples"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.material_ui.button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$on_DASH_click,((function (event_names,map__3147,map__3147__$1,events,simple_QMARK_,keys3143,simple_QMARK_3144){
return (function (){
var G__3151 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_publish], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__3151) : re_frame.core.dispatch.call(null,G__3151));
});})(event_names,map__3147,map__3147__$1,events,simple_QMARK_,keys3143,simple_QMARK_3144))
], null),"Publish"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.dialogs.dialogs], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.simple_panel], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$inline_DASH_block,cljs.core.cst$kw$width,["calc(100% - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(simple_QMARK_)?(600):(400))),"px)"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.source.editor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_change,((function (event_names,map__3147,map__3147__$1,events,simple_QMARK_,keys3143,simple_QMARK_3144){
return (function (p1__3134_SHARP_){
var G__3152 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_source,pluto.playground.core.ctx,p1__3134_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__3152) : re_frame.core.dispatch.call(null,G__3152));
});})(event_names,map__3147,map__3147__$1,events,simple_QMARK_,keys3143,simple_QMARK_3144))
], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"#fafafa"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex,(1),cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$space_DASH_between], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.material_ui.Typography,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,pluto.playground.core.margin], null),cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$variant,"h6"], null),"Logs"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$flex_DASH_end,cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.material_ui.switch$,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"primary",cljs.core.cst$kw$on_DASH_change,((function (event_names,map__3147,map__3147__$1,events,simple_QMARK_,keys3143,simple_QMARK_3144){
return (function (p1__3136_SHARP_,p2__3135_SHARP_){
var G__3153 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_switch_DASH_filter_DASH_logs,p2__3135_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__3153) : re_frame.core.dispatch.call(null,G__3153));
});})(event_names,map__3147,map__3147__$1,events,simple_QMARK_,keys3143,simple_QMARK_3144))
], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.material_ui.Typography,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,"10px"], null)], null),"Filter traces"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.material_ui.button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$on_DASH_click,((function (event_names,map__3147,map__3147__$1,events,simple_QMARK_,keys3143,simple_QMARK_3144){
return (function (){
var G__3154 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_clear_DASH_logs], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__3154) : re_frame.core.dispatch.call(null,G__3154));
});})(event_names,map__3147,map__3147__$1,events,simple_QMARK_,keys3143,simple_QMARK_3144))
], null),"Clear logs"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$height,"calc(40% - 100px)",cljs.core.cst$kw$overflow,cljs.core.cst$kw$auto], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.logs_errors], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$background_DASH_color,"#fafafa",cljs.core.cst$kw$width,(400),cljs.core.cst$kw$height,"calc(100% - 64px)",cljs.core.cst$kw$overflow,cljs.core.cst$kw$auto,cljs.core.cst$kw$padding,(5)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.material_ui.button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,"primary",cljs.core.cst$kw$variant,"contained",cljs.core.cst$kw$on_DASH_click,((function (event_names,map__3147,map__3147__$1,events,simple_QMARK_,keys3143,simple_QMARK_3144){
return (function (){
var G__3155 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_run,pluto.playground.core.ctx], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__3155) : re_frame.core.dispatch.call(null,G__3155));
});})(event_names,map__3147,map__3147__$1,events,simple_QMARK_,keys3143,simple_QMARK_3144))
], null),"Run"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$border,"40px solid #ddd",cljs.core.cst$kw$border_DASH_width,"20px 7px",cljs.core.cst$kw$border_DASH_radius,"40px",cljs.core.cst$kw$margin,(10)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,(667)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.selected_ui], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$center,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column,cljs.core.cst$kw$margin,pluto.playground.core.margin], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$space_DASH_between], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.material_ui.Typography,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,pluto.playground.core.margin], null),cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$variant,"h6"], null),"Inspect"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.material_ui.button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,"primary",cljs.core.cst$kw$variant,"contained",cljs.core.cst$kw$on_DASH_click,((function (event_names,map__3147,map__3147__$1,events,simple_QMARK_,keys3143,simple_QMARK_3144){
return (function (){
var G__3156 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$browse_DASH_app_DASH_db,true], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__3156) : re_frame.core.dispatch.call(null,G__3156));
});})(event_names,map__3147,map__3147__$1,events,simple_QMARK_,keys3143,simple_QMARK_3144))
], null),"Local app DB"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.view_selection], null)], null)], null)], null)], null);
});})(keys3143,simple_QMARK_3144))
,cljs.core.cst$kw$display_DASH_name,cljs.core.name(cljs.core.cst$sym$layout)], null)], 0)));
});
pluto.playground.core.mount_root = (function pluto$playground$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.layout], null),document.getElementById("app"));
});
pluto.playground.core.bootstrap = (function pluto$playground$core$bootstrap(){
var G__3159_3161 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fetch_DASH_extension], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__3159_3161) : re_frame.core.dispatch.call(null,G__3159_3161));

var G__3160_3162 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_init_DASH_wallet], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__3160_3162) : re_frame.core.dispatch.call(null,G__3160_3162));

return pluto.playground.core.mount_root();
});
goog.exportSymbol('pluto.playground.core.bootstrap', pluto.playground.core.bootstrap);
