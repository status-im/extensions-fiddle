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

var form_data = (function (){var G__1768 = (new FormData());
G__1768.append("extension.edn",content);

return G__1768;
})();
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic("https://ipfs.infura.io:5001/api/v0/add",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$body,form_data,cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$json,cljs.core.cst$kw$keywords_QMARK_,true,cljs.core.cst$kw$handler,((function (form_data){
return (function (p__1769){
var map__1770 = p__1769;
var map__1770__$1 = (((((!((map__1770 == null))))?(((((map__1770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1770):map__1770);
var Hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1770__$1,cljs.core.cst$kw$Hash);
var G__1772_1775 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$publish,cljs.core.cst$kw$in_DASH_progress_QMARK_], null),false], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1772_1775) : re_frame.core.dispatch.call(null,G__1772_1775));

if(cljs.core.truth_(Hash)){
var G__1773_1776 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$publish,cljs.core.cst$kw$hash], null),Hash], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1773_1776) : re_frame.core.dispatch.call(null,G__1773_1776));

return pluto.playground.ipfs.set_url(Hash);
} else {
return null;
}
});})(form_data))
,cljs.core.cst$kw$error_DASH_handler,((function (form_data){
return (function (x){
var G__1774_1777 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$publish,cljs.core.cst$kw$in_DASH_progress_QMARK_], null),false], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1774_1777) : re_frame.core.dispatch.call(null,G__1774_1777));

return ["ERROR",cljs.core.str.cljs$core$IFn$_invoke$arity$1(console.log(x))].join('');
});})(form_data))
], null)], 0));
});
pluto.playground.ipfs.load = (function pluto$playground$ipfs$load(hash,handler){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(["https://ipfs.infura.io/ipfs/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false,cljs.core.cst$kw$handler,(cljs.core.truth_(handler)?(function (p1__1778_SHARP_){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(p1__1778_SHARP_) : handler.call(null,p1__1778_SHARP_));
}):null)], null)], 0));
});
