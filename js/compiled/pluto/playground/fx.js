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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set,(function (db,p__1925){
var vec__1926 = p__1925;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1926,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1926,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1926,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k,v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_in,(function (db,p__1929){
var vec__1930 = p__1929;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1930,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1930,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1930,(2),null);
return cljs.core.assoc_in(db,path,v);
}));
pluto.playground.fx.update_extension_errors = (function pluto$playground$fx$update_extension_errors(p__1933,p__1934){
var map__1935 = p__1933;
var map__1935__$1 = (((((!((map__1935 == null))))?(((((map__1935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1935):map__1935);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1935__$1,cljs.core.cst$kw$db);
var vec__1936 = p__1934;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1936,(0),null);
var errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1936,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$errors,errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_errors,pluto.playground.fx.update_extension_errors);
pluto.playground.fx.clear_errors = (function pluto$playground$fx$clear_errors(p__1940,_){
var map__1941 = p__1940;
var map__1941__$1 = (((((!((map__1941 == null))))?(((((map__1941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1941):map__1941);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1941__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_clear_DASH_errors,pluto.playground.fx.clear_errors);
pluto.playground.fx.update_extension_parsed = (function pluto$playground$fx$update_extension_parsed(p__1943,p__1944){
var map__1945 = p__1943;
var map__1945__$1 = (((((!((map__1945 == null))))?(((((map__1945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1945):map__1945);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1945__$1,cljs.core.cst$kw$db);
var vec__1946 = p__1944;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1946,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1946,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$parsed,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,pluto.playground.fx.update_extension_parsed);
var G__1950_1960 = cljs.core.cst$kw$extension_SLASH_parse;
var G__1951_1961 = ((function (G__1950_1960){
return (function (p__1952){
var vec__1953 = p__1952;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1953,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1953,(1),null);
var map__1956 = pluto.core.parse(ctx,data);
var map__1956__$1 = (((((!((map__1956 == null))))?(((((map__1956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1956):map__1956);
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1956__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1956__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__1958 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1958) : re_frame.core.dispatch.call(null,G__1958));
} else {
var G__1959 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,data__$1], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1959) : re_frame.core.dispatch.call(null,G__1959));
}
});})(G__1950_1960))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1950_1960,G__1951_1961) : re_frame.core.reg_fx.call(null,G__1950_1960,G__1951_1961));
pluto.playground.fx.update_extension_data = (function pluto$playground$fx$update_extension_data(p__1962,p__1963){
var map__1964 = p__1962;
var map__1964__$1 = (((((!((map__1964 == null))))?(((((map__1964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1964):map__1964);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1964__$1,cljs.core.cst$kw$db);
var vec__1965 = p__1963;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1965,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1965,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1965,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$data,data),cljs.core.cst$kw$extension_SLASH_parse,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_data,pluto.playground.fx.update_extension_data);
var G__1969_1980 = cljs.core.cst$kw$extension_SLASH_read;
var G__1970_1981 = ((function (G__1969_1980){
return (function (p__1971){
var vec__1972 = p__1971;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1972,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1972,(1),null);
var G__1975_1982 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_clear_DASH_errors], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1975_1982) : re_frame.core.dispatch.call(null,G__1975_1982));

var map__1976 = pluto.core.read(source);
var map__1976__$1 = (((((!((map__1976 == null))))?(((((map__1976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1976):map__1976);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1976__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1976__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__1978 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1978) : re_frame.core.dispatch.call(null,G__1978));
} else {
var G__1979 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_data,ctx,data], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1979) : re_frame.core.dispatch.call(null,G__1979));
}
});})(G__1969_1980))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1969_1980,G__1970_1981) : re_frame.core.reg_fx.call(null,G__1969_1980,G__1970_1981));
pluto.playground.fx.update_extension_source = (function pluto$playground$fx$update_extension_source(p__1983,p__1984){
var map__1985 = p__1983;
var map__1985__$1 = (((((!((map__1985 == null))))?(((((map__1985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1985):map__1985);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1985__$1,cljs.core.cst$kw$db);
var vec__1986 = p__1984;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1986,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1986,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1986,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$source,data),cljs.core.cst$kw$extension_SLASH_read,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_source,pluto.playground.fx.update_extension_source);
var G__1990_1996 = cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value;
var G__1991_1997 = ((function (G__1990_1996){
return (function (p__1992){
var vec__1993 = p__1992;
var cm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1993,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1993,(1),null);
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
});})(G__1990_1996))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1990_1996,G__1991_1997) : re_frame.core.reg_fx.call(null,G__1990_1996,G__1991_1997));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_editor,(function (p__1998,p__1999){
var map__2000 = p__1998;
var map__2000__$1 = (((((!((map__2000 == null))))?(((((map__2000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2000):map__2000);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2000__$1,cljs.core.cst$kw$db);
var vec__2001 = p__1999;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2001,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2001,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code_DASH_mirror.cljs$core$IFn$_invoke$arity$1(db),data], null)], null);
}));
pluto.playground.fx.append_log = (function pluto$playground$fx$append_log(p__2005,p__2006){
var map__2007 = p__2005;
var map__2007__$1 = (((((!((map__2007 == null))))?(((((map__2007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2007):map__2007);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2007__$1,cljs.core.cst$kw$db);
var vec__2008 = p__2006;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2008,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2008,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$logs,cljs.core.conj,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_append_DASH_log,pluto.playground.fx.append_log);
pluto.playground.fx.switch_filter_logs = (function pluto$playground$fx$switch_filter_logs(p__2012,p__2013){
var map__2014 = p__2012;
var map__2014__$1 = (((((!((map__2014 == null))))?(((((map__2014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2014):map__2014);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2014__$1,cljs.core.cst$kw$db);
var vec__2015 = p__2013;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2015,(0),null);
var checked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2015,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$filtered_DASH_logs,checked)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_filter_DASH_logs,pluto.playground.fx.switch_filter_logs);
pluto.playground.fx.clear_logs = (function pluto$playground$fx$clear_logs(p__2019,_){
var map__2020 = p__2019;
var map__2020__$1 = (((((!((map__2020 == null))))?(((((map__2020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2020):map__2020);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2020__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$logs)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_clear_DASH_logs,pluto.playground.fx.clear_logs);
pluto.playground.fx.set_selected = (function pluto$playground$fx$set_selected(p__2022,p__2023){
var map__2024 = p__2022;
var map__2024__$1 = (((((!((map__2024 == null))))?(((((map__2024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2024):map__2024);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2024__$1,cljs.core.cst$kw$db);
var vec__2025 = p__2023;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2025,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2025,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selected,path)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_selected,pluto.playground.fx.set_selected);
pluto.playground.fx.switch_preview = (function pluto$playground$fx$switch_preview(p__2029,p__2030){
var map__2031 = p__2029;
var map__2031__$1 = (((((!((map__2031 == null))))?(((((map__2031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2031):map__2031);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2031__$1,cljs.core.cst$kw$db);
var vec__2032 = p__2030;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2032,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$preview,cljs.core.not)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_preview,pluto.playground.fx.switch_preview);
var G__2036_2038 = cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs;
var G__2037_2039 = ((function (G__2036_2038){
return (function (value){
return pluto.playground.ipfs.save(value);
});})(G__2036_2038))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2036_2038,G__2037_2039) : re_frame.core.reg_fx.call(null,G__2036_2038,G__2037_2039));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_publish,(function (p__2040,_){
var map__2041 = p__2040;
var map__2041__$1 = (((((!((map__2041 == null))))?(((((map__2041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2041):map__2041);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2041__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$publish,cljs.core.cst$kw$in_DASH_progress_QMARK_], null),true),cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs,cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db)], null);
}));
var G__2044_2047 = cljs.core.cst$kw$fetch_DASH_extension_DASH_fx;
var G__2045_2048 = ((function (G__2044_2047){
return (function (){
var hash = (new URL(document.location)).searchParams.get("hash");
var uri = (cljs.core.truth_(hash)?["ipfs@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''):"url@assets/extensions/command/");
return pluto.storages.fetch(uri,((function (hash,uri,G__2044_2047){
return (function (p1__2043_SHARP_){
var G__2046 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_editor,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__2043_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value,cljs.core.cst$kw$content], null))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2046) : re_frame.core.dispatch.call(null,G__2046));
});})(hash,uri,G__2044_2047))
);
});})(G__2044_2047))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2044_2047,G__2045_2048) : re_frame.core.reg_fx.call(null,G__2044_2047,G__2045_2048));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fetch_DASH_extension,(function (p__2049,_){
var map__2050 = p__2049;
var map__2050__$1 = (((((!((map__2050 == null))))?(((((map__2050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2050):map__2050);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2050__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fetch_DASH_extension_DASH_fx,null,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$store_SLASH_clear_DASH_all], null)], null);
}));
var G__2052_2054 = cljs.core.cst$kw$set_DASH_url_DASH_fx;
var G__2053_2055 = ((function (G__2052_2054){
return (function (hash){
return pluto.playground.ipfs.set_url(hash);
});})(G__2052_2054))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2052_2054,G__2053_2055) : re_frame.core.reg_fx.call(null,G__2052_2054,G__2053_2055));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$open_DASH_example,(function (p__2056,p__2057){
var map__2058 = p__2056;
var map__2058__$1 = (((((!((map__2058 == null))))?(((((map__2058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2058):map__2058);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2058__$1,cljs.core.cst$kw$db);
var vec__2059 = p__2057;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2059,(0),null);
var hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2059,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$examples),cljs.core.cst$kw$set_DASH_url_DASH_fx,hash,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fetch_DASH_extension], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_properties,(function (p__2063,p__2064){
var map__2065 = p__2063;
var map__2065__$1 = (((((!((map__2065 == null))))?(((((map__2065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2065):map__2065);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2065__$1,cljs.core.cst$kw$db);
var vec__2066 = p__2064;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2066,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2066,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2066,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_properties,id], null),m)], null);
}));
