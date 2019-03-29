// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.playground.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
var G__1979_1985 = cljs.core.cst$kw$get;
var G__1980_1986 = ((function (G__1979_1985){
return (function (db,p__1981){
var vec__1982 = p__1981;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1982,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1982,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,k);
});})(G__1979_1985))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1979_1985,G__1980_1986) : re_frame.core.reg_sub.call(null,G__1979_1985,G__1980_1986));
var G__1987_1993 = cljs.core.cst$kw$get_DASH_in;
var G__1988_1994 = ((function (G__1987_1993){
return (function (db,p__1989){
var vec__1990 = p__1989;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1990,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1990,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path);
});})(G__1987_1993))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1987_1993,G__1988_1994) : re_frame.core.reg_sub.call(null,G__1987_1993,G__1988_1994));
pluto.playground.subs.extension_parsed = (function pluto$playground$subs$extension_parsed(db,v){
return cljs.core.cst$kw$parsed.cljs$core$IFn$_invoke$arity$1(db);
});
var G__1995_1997 = cljs.core.cst$kw$extension_SLASH_parsed;
var G__1996_1998 = pluto.playground.subs.extension_parsed;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1995_1997,G__1996_1998) : re_frame.core.reg_sub.call(null,G__1995_1997,G__1996_1998));
pluto.playground.subs.extension_data = (function pluto$playground$subs$extension_data(db,v){
return cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(db);
});
var G__1999_2001 = cljs.core.cst$kw$extension_SLASH_data;
var G__2000_2002 = pluto.playground.subs.extension_data;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1999_2001,G__2000_2002) : re_frame.core.reg_sub.call(null,G__1999_2001,G__2000_2002));
pluto.playground.subs.extension_source = (function pluto$playground$subs$extension_source(db,v){
return cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db);
});
var G__2003_2005 = cljs.core.cst$kw$extension_SLASH_source;
var G__2004_2006 = pluto.playground.subs.extension_source;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2003_2005,G__2004_2006) : re_frame.core.reg_sub.call(null,G__2003_2005,G__2004_2006));
var G__2007_2009 = cljs.core.cst$kw$extension_SLASH_logs;
var G__2008_2010 = cljs.core.cst$kw$logs;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2007_2009,G__2008_2010) : re_frame.core.reg_sub.call(null,G__2007_2009,G__2008_2010));
var G__2011_2013 = cljs.core.cst$kw$extension_SLASH_errors;
var G__2012_2014 = cljs.core.cst$kw$errors;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2011_2013,G__2012_2014) : re_frame.core.reg_sub.call(null,G__2011_2013,G__2012_2014));
pluto.playground.subs.selected = (function pluto$playground$subs$selected(db,v){
return cljs.core.cst$kw$selected.cljs$core$IFn$_invoke$arity$1(db);
});
var G__2015_2017 = cljs.core.cst$kw$extension_SLASH_selected;
var G__2016_2018 = pluto.playground.subs.selected;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2015_2017,G__2016_2018) : re_frame.core.reg_sub.call(null,G__2015_2017,G__2016_2018));
pluto.playground.subs.preview = (function pluto$playground$subs$preview(db,v){
var or__4131__auto__ = cljs.core.cst$kw$preview.cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return false;
}
});
var G__2019_2021 = cljs.core.cst$kw$extension_SLASH_preview;
var G__2020_2022 = pluto.playground.subs.preview;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2019_2021,G__2020_2022) : re_frame.core.reg_sub.call(null,G__2019_2021,G__2020_2022));
