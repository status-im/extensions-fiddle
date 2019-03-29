// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.playground.ipfs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.core');
goog.require('re_frame.core');
goog.require('clojure.string');
pluto.playground.ipfs.set_url = (function pluto$playground$ipfs$set_url(hash){
return history.pushState(null,null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(document.location.href,/\?/))),"?hash=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''));
});
pluto.playground.ipfs.save = (function pluto$playground$ipfs$save(content){

var form_data = (function (){var G__8113 = (new FormData());
G__8113.append("extension.edn",content);

return G__8113;
})();
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic("https://ipfs.infura.io:5001/api/v0/add",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$body,form_data,cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$json,cljs.core.cst$kw$keywords_QMARK_,true,cljs.core.cst$kw$handler,((function (form_data){
return (function (p__8114){
var map__8115 = p__8114;
var map__8115__$1 = (((((!((map__8115 == null))))?(((((map__8115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8115):map__8115);
var Hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8115__$1,cljs.core.cst$kw$Hash);
var G__8117_8120 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$publish,cljs.core.cst$kw$in_DASH_progress_QMARK_], null),false], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__8117_8120) : re_frame.core.dispatch.call(null,G__8117_8120));

if(cljs.core.truth_(Hash)){
var G__8118_8121 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$publish,cljs.core.cst$kw$hash], null),Hash], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__8118_8121) : re_frame.core.dispatch.call(null,G__8118_8121));

return pluto.playground.ipfs.set_url(Hash);
} else {
return null;
}
});})(form_data))
,cljs.core.cst$kw$error_DASH_handler,((function (form_data){
return (function (x){
var G__8119_8122 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$publish,cljs.core.cst$kw$in_DASH_progress_QMARK_], null),false], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__8119_8122) : re_frame.core.dispatch.call(null,G__8119_8122));

return ["ERROR",cljs.core.str.cljs$core$IFn$_invoke$arity$1(console.log(x))].join('');
});})(form_data))
], null)], 0));
});
pluto.playground.ipfs.load = (function pluto$playground$ipfs$load(hash,handler){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(["https://ipfs.infura.io/ipfs/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false,cljs.core.cst$kw$handler,(cljs.core.truth_(handler)?(function (p1__8123_SHARP_){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(p1__8123_SHARP_) : handler.call(null,p1__8123_SHARP_));
}):null)], null)], 0));
});
