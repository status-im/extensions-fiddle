// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.playground.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
var G__7896_7902 = cljs.core.cst$kw$get;
var G__7897_7903 = ((function (G__7896_7902){
return (function (db,p__7898){
var vec__7899 = p__7898;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7899,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7899,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,k);
});})(G__7896_7902))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__7896_7902,G__7897_7903) : re_frame.core.reg_sub.call(null,G__7896_7902,G__7897_7903));
var G__7904_7910 = cljs.core.cst$kw$get_DASH_in;
var G__7905_7911 = ((function (G__7904_7910){
return (function (db,p__7906){
var vec__7907 = p__7906;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7907,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7907,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path);
});})(G__7904_7910))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__7904_7910,G__7905_7911) : re_frame.core.reg_sub.call(null,G__7904_7910,G__7905_7911));
pluto.playground.subs.extension_parsed = (function pluto$playground$subs$extension_parsed(db,v){
return cljs.core.cst$kw$parsed.cljs$core$IFn$_invoke$arity$1(db);
});
var G__7912_7914 = cljs.core.cst$kw$extension_SLASH_parsed;
var G__7913_7915 = pluto.playground.subs.extension_parsed;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__7912_7914,G__7913_7915) : re_frame.core.reg_sub.call(null,G__7912_7914,G__7913_7915));
pluto.playground.subs.extension_data = (function pluto$playground$subs$extension_data(db,v){
return cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(db);
});
var G__7916_7918 = cljs.core.cst$kw$extension_SLASH_data;
var G__7917_7919 = pluto.playground.subs.extension_data;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__7916_7918,G__7917_7919) : re_frame.core.reg_sub.call(null,G__7916_7918,G__7917_7919));
pluto.playground.subs.extension_source = (function pluto$playground$subs$extension_source(db,v){
return cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db);
});
var G__7920_7922 = cljs.core.cst$kw$extension_SLASH_source;
var G__7921_7923 = pluto.playground.subs.extension_source;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__7920_7922,G__7921_7923) : re_frame.core.reg_sub.call(null,G__7920_7922,G__7921_7923));
pluto.playground.subs.extension_traces = (function pluto$playground$subs$extension_traces(db,v){
return cljs.core.cst$kw$traces.cljs$core$IFn$_invoke$arity$1(db);
});
var G__7924_7926 = cljs.core.cst$kw$extension_SLASH_traces;
var G__7925_7927 = pluto.playground.subs.extension_traces;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__7924_7926,G__7925_7927) : re_frame.core.reg_sub.call(null,G__7924_7926,G__7925_7927));
pluto.playground.subs.selected = (function pluto$playground$subs$selected(db,v){
return cljs.core.cst$kw$selected.cljs$core$IFn$_invoke$arity$1(db);
});
var G__7928_7930 = cljs.core.cst$kw$extension_SLASH_selected;
var G__7929_7931 = pluto.playground.subs.selected;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__7928_7930,G__7929_7931) : re_frame.core.reg_sub.call(null,G__7928_7930,G__7929_7931));
pluto.playground.subs.preview = (function pluto$playground$subs$preview(db,v){
var or__4131__auto__ = cljs.core.cst$kw$preview.cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return false;
}
});
var G__7932_7934 = cljs.core.cst$kw$extension_SLASH_preview;
var G__7933_7935 = pluto.playground.subs.preview;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__7932_7934,G__7933_7935) : re_frame.core.reg_sub.call(null,G__7932_7934,G__7933_7935));
