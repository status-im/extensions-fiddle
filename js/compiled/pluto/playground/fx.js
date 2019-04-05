// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.playground.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('pluto.core');
goog.require('reagent.core');
goog.require('react_native_web.hooks');
goog.require('pluto.playground.ipfs');
goog.require('pluto.storages');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set,(function (db,p__1974){
var vec__1975 = p__1974;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1975,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1975,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1975,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k,v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_in,(function (db,p__1978){
var vec__1979 = p__1978;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1979,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1979,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1979,(2),null);
return cljs.core.assoc_in(db,path,v);
}));
pluto.playground.fx.update_extension_errors = (function pluto$playground$fx$update_extension_errors(p__1982,p__1983){
var map__1984 = p__1982;
var map__1984__$1 = (((((!((map__1984 == null))))?(((((map__1984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1984):map__1984);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1984__$1,cljs.core.cst$kw$db);
var vec__1985 = p__1983;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1985,(0),null);
var errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1985,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$errors,errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_errors,pluto.playground.fx.update_extension_errors);
pluto.playground.fx.clear_errors = (function pluto$playground$fx$clear_errors(p__1989,_){
var map__1990 = p__1989;
var map__1990__$1 = (((((!((map__1990 == null))))?(((((map__1990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1990):map__1990);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1990__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_clear_DASH_errors,pluto.playground.fx.clear_errors);
pluto.playground.fx.update_extension_parsed = (function pluto$playground$fx$update_extension_parsed(p__1992,p__1993){
var map__1994 = p__1992;
var map__1994__$1 = (((((!((map__1994 == null))))?(((((map__1994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1994):map__1994);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1994__$1,cljs.core.cst$kw$db);
var vec__1995 = p__1993;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1995,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1995,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$parsed,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,pluto.playground.fx.update_extension_parsed);
var G__1999_2009 = cljs.core.cst$kw$extension_SLASH_parse;
var G__2000_2010 = ((function (G__1999_2009){
return (function (p__2001){
var vec__2002 = p__2001;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2002,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2002,(1),null);
var map__2005 = pluto.core.parse(ctx,data);
var map__2005__$1 = (((((!((map__2005 == null))))?(((((map__2005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2005):map__2005);
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2005__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2005__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__2007 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2007) : re_frame.core.dispatch.call(null,G__2007));
} else {
var G__2008 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,data__$1], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2008) : re_frame.core.dispatch.call(null,G__2008));
}
});})(G__1999_2009))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1999_2009,G__2000_2010) : re_frame.core.reg_fx.call(null,G__1999_2009,G__2000_2010));
pluto.playground.fx.update_extension_data = (function pluto$playground$fx$update_extension_data(p__2011,p__2012){
var map__2013 = p__2011;
var map__2013__$1 = (((((!((map__2013 == null))))?(((((map__2013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2013):map__2013);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2013__$1,cljs.core.cst$kw$db);
var vec__2014 = p__2012;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2014,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2014,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2014,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$data,data),cljs.core.cst$kw$extension_SLASH_parse,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_data,pluto.playground.fx.update_extension_data);
var G__2018_2029 = cljs.core.cst$kw$extension_SLASH_read;
var G__2019_2030 = ((function (G__2018_2029){
return (function (p__2020){
var vec__2021 = p__2020;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2021,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2021,(1),null);
var G__2024_2031 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_clear_DASH_errors], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2024_2031) : re_frame.core.dispatch.call(null,G__2024_2031));

var map__2025 = pluto.core.read(source);
var map__2025__$1 = (((((!((map__2025 == null))))?(((((map__2025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2025):map__2025);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2025__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2025__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__2027 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2027) : re_frame.core.dispatch.call(null,G__2027));
} else {
var G__2028 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_data,ctx,data], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2028) : re_frame.core.dispatch.call(null,G__2028));
}
});})(G__2018_2029))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2018_2029,G__2019_2030) : re_frame.core.reg_fx.call(null,G__2018_2029,G__2019_2030));
pluto.playground.fx.update_extension_source = (function pluto$playground$fx$update_extension_source(p__2032,p__2033){
var map__2034 = p__2032;
var map__2034__$1 = (((((!((map__2034 == null))))?(((((map__2034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2034):map__2034);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2034__$1,cljs.core.cst$kw$db);
var vec__2035 = p__2033;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2035,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2035,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2035,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$source,data),cljs.core.cst$kw$extension_SLASH_read,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_source,pluto.playground.fx.update_extension_source);
var G__2039_2045 = cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value;
var G__2040_2046 = ((function (G__2039_2045){
return (function (p__2041){
var vec__2042 = p__2041;
var cm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2042,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2042,(1),null);
if(cljs.core.truth_((function (){var and__4120__auto__ = cm;
if(cljs.core.truth_(and__4120__auto__)){
return source;
} else {
return and__4120__auto__;
}
})())){
return cm.setValue(source);
} else {
return null;
}
});})(G__2039_2045))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2039_2045,G__2040_2046) : re_frame.core.reg_fx.call(null,G__2039_2045,G__2040_2046));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_editor,(function (p__2047,p__2048){
var map__2049 = p__2047;
var map__2049__$1 = (((((!((map__2049 == null))))?(((((map__2049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2049):map__2049);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2049__$1,cljs.core.cst$kw$db);
var vec__2050 = p__2048;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2050,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2050,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code_DASH_mirror.cljs$core$IFn$_invoke$arity$1(db),data], null)], null);
}));
pluto.playground.fx.append_log = (function pluto$playground$fx$append_log(p__2054,p__2055){
var map__2056 = p__2054;
var map__2056__$1 = (((((!((map__2056 == null))))?(((((map__2056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2056):map__2056);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2056__$1,cljs.core.cst$kw$db);
var vec__2057 = p__2055;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2057,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2057,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$logs,cljs.core.conj,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_append_DASH_log,pluto.playground.fx.append_log);
pluto.playground.fx.switch_filter_logs = (function pluto$playground$fx$switch_filter_logs(p__2061,p__2062){
var map__2063 = p__2061;
var map__2063__$1 = (((((!((map__2063 == null))))?(((((map__2063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2063):map__2063);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2063__$1,cljs.core.cst$kw$db);
var vec__2064 = p__2062;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2064,(0),null);
var checked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2064,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$filtered_DASH_logs,checked)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_filter_DASH_logs,pluto.playground.fx.switch_filter_logs);
pluto.playground.fx.clear_logs = (function pluto$playground$fx$clear_logs(p__2068,_){
var map__2069 = p__2068;
var map__2069__$1 = (((((!((map__2069 == null))))?(((((map__2069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2069):map__2069);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2069__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$logs)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_clear_DASH_logs,pluto.playground.fx.clear_logs);
pluto.playground.fx.set_selected = (function pluto$playground$fx$set_selected(p__2071,p__2072){
var map__2073 = p__2071;
var map__2073__$1 = (((((!((map__2073 == null))))?(((((map__2073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2073):map__2073);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2073__$1,cljs.core.cst$kw$db);
var vec__2074 = p__2072;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2074,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2074,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selected,path)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_selected,pluto.playground.fx.set_selected);
pluto.playground.fx.switch_preview = (function pluto$playground$fx$switch_preview(p__2078,p__2079){
var map__2080 = p__2078;
var map__2080__$1 = (((((!((map__2080 == null))))?(((((map__2080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2080):map__2080);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2080__$1,cljs.core.cst$kw$db);
var vec__2081 = p__2079;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2081,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$preview,cljs.core.not)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_preview,pluto.playground.fx.switch_preview);
var G__2085_2087 = cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs;
var G__2086_2088 = ((function (G__2085_2087){
return (function (value){
return pluto.playground.ipfs.save(value);
});})(G__2085_2087))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2085_2087,G__2086_2088) : re_frame.core.reg_fx.call(null,G__2085_2087,G__2086_2088));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_publish,(function (p__2089,_){
var map__2090 = p__2089;
var map__2090__$1 = (((((!((map__2090 == null))))?(((((map__2090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2090):map__2090);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2090__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$publish,cljs.core.cst$kw$in_DASH_progress_QMARK_], null),true),cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs,cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db)], null);
}));
var G__2093_2096 = cljs.core.cst$kw$fetch_DASH_extension_DASH_fx;
var G__2094_2097 = ((function (G__2093_2096){
return (function (){
var hash = (new URL(document.location)).searchParams.get("hash");
var uri = (cljs.core.truth_(hash)?["ipfs@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''):"url@assets/extensions/command/");
return pluto.storages.fetch(uri,((function (hash,uri,G__2093_2096){
return (function (p1__2092_SHARP_){
var G__2095 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_editor,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__2092_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value,cljs.core.cst$kw$content], null))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2095) : re_frame.core.dispatch.call(null,G__2095));
});})(hash,uri,G__2093_2096))
);
});})(G__2093_2096))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2093_2096,G__2094_2097) : re_frame.core.reg_fx.call(null,G__2093_2096,G__2094_2097));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fetch_DASH_extension,(function (p__2098,_){
var map__2099 = p__2098;
var map__2099__$1 = (((((!((map__2099 == null))))?(((((map__2099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2099):map__2099);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2099__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fetch_DASH_extension_DASH_fx,null,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$store_SLASH_clear_DASH_all], null)], null);
}));
var G__2101_2103 = cljs.core.cst$kw$set_DASH_url_DASH_fx;
var G__2102_2104 = ((function (G__2101_2103){
return (function (hash){
return pluto.playground.ipfs.set_url(hash);
});})(G__2101_2103))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2101_2103,G__2102_2104) : re_frame.core.reg_fx.call(null,G__2101_2103,G__2102_2104));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$open_DASH_example,(function (p__2105,p__2106){
var map__2107 = p__2105;
var map__2107__$1 = (((((!((map__2107 == null))))?(((((map__2107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2107):map__2107);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2107__$1,cljs.core.cst$kw$db);
var vec__2108 = p__2106;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2108,(0),null);
var hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2108,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$examples),cljs.core.cst$kw$set_DASH_url_DASH_fx,hash,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fetch_DASH_extension], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_properties,(function (p__2112,p__2113){
var map__2114 = p__2112;
var map__2114__$1 = (((((!((map__2114 == null))))?(((((map__2114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2114):map__2114);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2114__$1,cljs.core.cst$kw$db);
var vec__2115 = p__2113;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2115,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2115,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2115,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_properties,id], null),m)], null);
}));
