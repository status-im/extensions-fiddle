// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.playground.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pluto.playground.components.source');
goog.require('pluto.playground.components.traces');
goog.require('pluto.playground.fx');
goog.require('pluto.playground.subs');
goog.require('pluto.reader.events');
goog.require('pluto.reader.views');
goog.require('pluto.storages');
goog.require('react_native_web.extensions');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
pluto.playground.core.warn = console.warn.bind(console);
re_frame.loggers.set_loggers_BANG_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$warn,(function() { 
var G__8186__delegate = function (args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("re-frame: overwriting",cljs.core.first(args))){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pluto.playground.core.warn,args);

}
};
var G__8186 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8187__i = 0, G__8187__a = new Array(arguments.length -  0);
while (G__8187__i < G__8187__a.length) {G__8187__a[G__8187__i] = arguments[G__8187__i + 0]; ++G__8187__i;}
  args = new cljs.core.IndexedSeq(G__8187__a,0,null);
} 
return G__8186__delegate.call(this,args);};
G__8186.cljs$lang$maxFixedArity = 0;
G__8186.cljs$lang$applyTo = (function (arglist__8188){
var args = cljs.core.seq(arglist__8188);
return G__8186__delegate(args);
});
G__8186.cljs$core$IFn$_invoke$arity$variadic = G__8186__delegate;
return G__8186;
})()
], null));
pluto.playground.core.dispatch_events = (function pluto$playground$core$dispatch_events(ctx,events){
var seq__8189 = cljs.core.seq(events);
var chunk__8190 = null;
var count__8191 = (0);
var i__8192 = (0);
while(true){
if((i__8192 < count__8191)){
var event = chunk__8190.cljs$core$IIndexed$_nth$arity$2(null,i__8192);
if(cljs.core.vector_QMARK_(event)){
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(event) : re_frame.core.dispatch.call(null,event));
} else {
}


var G__8193 = seq__8189;
var G__8194 = chunk__8190;
var G__8195 = count__8191;
var G__8196 = (i__8192 + (1));
seq__8189 = G__8193;
chunk__8190 = G__8194;
count__8191 = G__8195;
i__8192 = G__8196;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__8189);
if(temp__5720__auto__){
var seq__8189__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8189__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__8189__$1);
var G__8197 = cljs.core.chunk_rest(seq__8189__$1);
var G__8198 = c__4550__auto__;
var G__8199 = cljs.core.count(c__4550__auto__);
var G__8200 = (0);
seq__8189 = G__8197;
chunk__8190 = G__8198;
count__8191 = G__8199;
i__8192 = G__8200;
continue;
} else {
var event = cljs.core.first(seq__8189__$1);
if(cljs.core.vector_QMARK_(event)){
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(event) : re_frame.core.dispatch.call(null,event));
} else {
}


var G__8201 = cljs.core.next(seq__8189__$1);
var G__8202 = null;
var G__8203 = (0);
var G__8204 = (0);
seq__8189 = G__8201;
chunk__8190 = G__8202;
count__8191 = G__8203;
i__8192 = G__8204;
continue;
}
} else {
return null;
}
}
break;
}
});
pluto.playground.core.resolve_query = (function pluto$playground$core$resolve_query(ctx,p__8205){
var vec__8206 = p__8205;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8206,(0),null);
var data = vec__8206;
if(cljs.core.truth_(re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sub,id))){
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(data) : re_frame.core.subscribe.call(null,data));
} else {
return null;
}
});
pluto.playground.core.cartouche = (function pluto$playground$core$cartouche(p__8209,data){
var map__8210 = p__8209;
var map__8210__$1 = (((((!((map__8210 == null))))?(((((map__8210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8210):map__8210);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8210__$1,cljs.core.cst$kw$path);
var p = cljs.core.deref((function (){var G__8212 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_selected], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__8212) : re_frame.core.subscribe.call(null,G__8212));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_mouse_DASH_enter,((function (p,map__8210,map__8210__$1,path){
return (function (){
var G__8213 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_set_DASH_selected,path], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__8213) : re_frame.core.dispatch.call(null,G__8213));
});})(p,map__8210,map__8210__$1,path))
,cljs.core.cst$kw$on_DASH_mouse_DASH_leave,((function (p,map__8210,map__8210__$1,path){
return (function (){
var G__8214 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_set_DASH_selected,null], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__8214) : re_frame.core.dispatch.call(null,G__8214));
});})(p,map__8210,map__8210__$1,path))
,cljs.core.cst$kw$style,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,path))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border,"1px solid black"], null):null)], null),data], null);
});
pluto.playground.core.wrap_view = (function pluto$playground$core$wrap_view(parent_ctx,p__8215){
var map__8216 = p__8215;
var map__8216__$1 = (((((!((map__8216 == null))))?(((((map__8216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8216):map__8216);
var m = map__8216__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8216__$1,cljs.core.cst$kw$data);
if(cljs.core.vector_QMARK_(data)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.cartouche,parent_ctx,data], null)], null);
} else {
return m;
}
});
pluto.playground.core.ctx = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"Extension ID"], null),cljs.core.cst$kw$capacities,react_native_web.extensions.capacities,cljs.core.cst$kw$query_DASH_fn,pluto.playground.core.resolve_query,cljs.core.cst$kw$view_DASH_fn,pluto.playground.core.wrap_view,cljs.core.cst$kw$event_DASH_fn,pluto.playground.core.dispatch_events], null);
pluto.playground.core.payload = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Test Extension",cljs.core.cst$kw$users,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$nm,"Jane"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$nm,"Sue"], null)], null)], null);
pluto.playground.core.Switch = (MaterialUI["Switch"]);
pluto.playground.core.Button = (MaterialUI["Button"]);
pluto.playground.core.Dialog = (MaterialUI["Dialog"]);
pluto.playground.core.DialogTitle = (MaterialUI["DialogTitle"]);
pluto.playground.core.publish = (function pluto$playground$core$publish(s){
return cljs.core.List.EMPTY;
});
pluto.playground.core.layout = (function pluto$playground$core$layout(p__8219){
var map__8220 = p__8219;
var map__8220__$1 = (((((!((map__8220 == null))))?(((((map__8220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8220):map__8220);
var ctx = map__8220__$1;
var capacities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8220__$1,cljs.core.cst$kw$capacities);
var s = (function (){var G__8222 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_source], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__8222) : re_frame.core.subscribe.call(null,G__8222));
})();
var m = cljs.core.deref((function (){var G__8223 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_data], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__8223) : re_frame.core.subscribe.call(null,G__8223));
})());
var data = cljs.core.deref((function (){var G__8224 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_parsed], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__8224) : re_frame.core.subscribe.call(null,G__8224));
})());
var v = cljs.core.deref((function (){var G__8225 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_traces], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__8225) : re_frame.core.subscribe.call(null,G__8225));
})());
var preview = cljs.core.deref((function (){var G__8226 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_preview], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__8226) : re_frame.core.subscribe.call(null,G__8226));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$main,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"content"], null),(cljs.core.truth_(cljs.core.deref(s))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.source.viewer,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$content,s,cljs.core.cst$kw$on_DASH_change,((function (s,m,data,v,preview,map__8220,map__8220__$1,ctx,capacities){
return (function (p1__8218_SHARP_){
var G__8227 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_source,ctx,p1__8218_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__8227) : re_frame.core.dispatch.call(null,G__8227));
});})(s,m,data,v,preview,map__8220,map__8220__$1,ctx,capacities))
], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"extension"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.traces.table,v], null)], null)], null);
});
pluto.playground.core.on_extension_read = (function pluto$playground$core$on_extension_read(ctx,p__8228){
var map__8229 = p__8228;
var map__8229__$1 = (((((!((map__8229 == null))))?(((((map__8229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8229):map__8229);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8229__$1,cljs.core.cst$kw$type);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8229__$1,cljs.core.cst$kw$value);
var G__8231 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_source,ctx,cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(value)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__8231) : re_frame.core.dispatch.call(null,G__8231));
});
pluto.playground.core.bootstrap = (function pluto$playground$core$bootstrap(s){
pluto.storages.fetch(s,(function (p1__8232_SHARP_){
return pluto.playground.core.on_extension_read(pluto.playground.core.ctx,p1__8232_SHARP_);
}));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.core.layout,pluto.playground.core.ctx], null),document.getElementById("app"));
});
goog.exportSymbol('pluto.playground.core.bootstrap', pluto.playground.core.bootstrap);
