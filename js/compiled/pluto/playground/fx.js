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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set,(function (db,p__1910){
var vec__1911 = p__1910;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1911,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1911,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1911,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k,v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_in,(function (db,p__1914){
var vec__1915 = p__1914;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1915,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1915,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1915,(2),null);
return cljs.core.assoc_in(db,path,v);
}));
pluto.playground.fx.update_extension_errors = (function pluto$playground$fx$update_extension_errors(p__1918,p__1919){
var map__1920 = p__1918;
var map__1920__$1 = (((((!((map__1920 == null))))?(((((map__1920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1920):map__1920);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1920__$1,cljs.core.cst$kw$db);
var vec__1921 = p__1919;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1921,(0),null);
var errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1921,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$errors,errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_errors,pluto.playground.fx.update_extension_errors);
pluto.playground.fx.clear_errors = (function pluto$playground$fx$clear_errors(p__1925,_){
var map__1926 = p__1925;
var map__1926__$1 = (((((!((map__1926 == null))))?(((((map__1926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1926):map__1926);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1926__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_clear_DASH_errors,pluto.playground.fx.clear_errors);
pluto.playground.fx.update_extension_parsed = (function pluto$playground$fx$update_extension_parsed(p__1928,p__1929){
var map__1930 = p__1928;
var map__1930__$1 = (((((!((map__1930 == null))))?(((((map__1930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1930):map__1930);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1930__$1,cljs.core.cst$kw$db);
var vec__1931 = p__1929;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1931,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1931,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$parsed,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,pluto.playground.fx.update_extension_parsed);
var G__1935_1947 = cljs.core.cst$kw$extension_SLASH_parse;
var G__1936_1948 = ((function (G__1935_1947){
return (function (p__1937){
var vec__1938 = p__1937;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1938,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1938,(1),null);
var map__1941 = pluto.core.parse(ctx,data);
var map__1941__$1 = (((((!((map__1941 == null))))?(((((map__1941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1941):map__1941);
var m = map__1941__$1;
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1941__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1941__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__1943 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1943) : re_frame.core.dispatch.call(null,G__1943));
} else {
var G__1944_1949 = react_native_web.hooks.hook_in(cljs.core.first(cljs.core.cst$kw$hooks.cljs$core$IFn$_invoke$arity$1(data__$1)));
var G__1945_1950 = document.getElementById("extension");
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__1944_1949,G__1945_1950) : reagent.core.render_component.call(null,G__1944_1949,G__1945_1950));

var G__1946 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,data__$1], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1946) : re_frame.core.dispatch.call(null,G__1946));
}
});})(G__1935_1947))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1935_1947,G__1936_1948) : re_frame.core.reg_fx.call(null,G__1935_1947,G__1936_1948));
pluto.playground.fx.update_extension_data = (function pluto$playground$fx$update_extension_data(p__1951,p__1952){
var map__1953 = p__1951;
var map__1953__$1 = (((((!((map__1953 == null))))?(((((map__1953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1953):map__1953);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1953__$1,cljs.core.cst$kw$db);
var vec__1954 = p__1952;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1954,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1954,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1954,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$data,data),cljs.core.cst$kw$extension_SLASH_parse,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_data,pluto.playground.fx.update_extension_data);
var G__1958_1969 = cljs.core.cst$kw$extension_SLASH_read;
var G__1959_1970 = ((function (G__1958_1969){
return (function (p__1960){
var vec__1961 = p__1960;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1961,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1961,(1),null);
var G__1964_1971 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_clear_DASH_errors], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1964_1971) : re_frame.core.dispatch.call(null,G__1964_1971));

var map__1965 = pluto.core.read(source);
var map__1965__$1 = (((((!((map__1965 == null))))?(((((map__1965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1965):map__1965);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1965__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1965__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__1967 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1967) : re_frame.core.dispatch.call(null,G__1967));
} else {
var G__1968 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_data,ctx,data], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1968) : re_frame.core.dispatch.call(null,G__1968));
}
});})(G__1958_1969))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1958_1969,G__1959_1970) : re_frame.core.reg_fx.call(null,G__1958_1969,G__1959_1970));
pluto.playground.fx.update_extension_source = (function pluto$playground$fx$update_extension_source(p__1972,p__1973){
var map__1974 = p__1972;
var map__1974__$1 = (((((!((map__1974 == null))))?(((((map__1974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1974):map__1974);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1974__$1,cljs.core.cst$kw$db);
var vec__1975 = p__1973;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1975,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1975,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1975,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$source,data),cljs.core.cst$kw$extension_SLASH_read,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_source,pluto.playground.fx.update_extension_source);
var G__1979_1985 = cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value;
var G__1980_1986 = ((function (G__1979_1985){
return (function (p__1981){
var vec__1982 = p__1981;
var cm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1982,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1982,(1),null);
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
});})(G__1979_1985))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1979_1985,G__1980_1986) : re_frame.core.reg_fx.call(null,G__1979_1985,G__1980_1986));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_editor,(function (p__1987,p__1988){
var map__1989 = p__1987;
var map__1989__$1 = (((((!((map__1989 == null))))?(((((map__1989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1989):map__1989);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1989__$1,cljs.core.cst$kw$db);
var vec__1990 = p__1988;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1990,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1990,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code_DASH_mirror.cljs$core$IFn$_invoke$arity$1(db),data], null)], null);
}));
pluto.playground.fx.append_log = (function pluto$playground$fx$append_log(p__1994,p__1995){
var map__1996 = p__1994;
var map__1996__$1 = (((((!((map__1996 == null))))?(((((map__1996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1996):map__1996);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1996__$1,cljs.core.cst$kw$db);
var vec__1997 = p__1995;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1997,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1997,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$logs,cljs.core.conj,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_append_DASH_log,pluto.playground.fx.append_log);
pluto.playground.fx.switch_filter_logs = (function pluto$playground$fx$switch_filter_logs(p__2001,p__2002){
var map__2003 = p__2001;
var map__2003__$1 = (((((!((map__2003 == null))))?(((((map__2003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2003):map__2003);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2003__$1,cljs.core.cst$kw$db);
var vec__2004 = p__2002;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2004,(0),null);
var checked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2004,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$filtered_DASH_logs,checked)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_filter_DASH_logs,pluto.playground.fx.switch_filter_logs);
pluto.playground.fx.clear_logs = (function pluto$playground$fx$clear_logs(p__2008,_){
var map__2009 = p__2008;
var map__2009__$1 = (((((!((map__2009 == null))))?(((((map__2009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2009):map__2009);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2009__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$logs)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_clear_DASH_logs,pluto.playground.fx.clear_logs);
pluto.playground.fx.set_selected = (function pluto$playground$fx$set_selected(p__2011,p__2012){
var map__2013 = p__2011;
var map__2013__$1 = (((((!((map__2013 == null))))?(((((map__2013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2013):map__2013);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2013__$1,cljs.core.cst$kw$db);
var vec__2014 = p__2012;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2014,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2014,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selected,path)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_selected,pluto.playground.fx.set_selected);
pluto.playground.fx.switch_preview = (function pluto$playground$fx$switch_preview(p__2018,p__2019){
var map__2020 = p__2018;
var map__2020__$1 = (((((!((map__2020 == null))))?(((((map__2020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2020):map__2020);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2020__$1,cljs.core.cst$kw$db);
var vec__2021 = p__2019;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2021,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$preview,cljs.core.not)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_preview,pluto.playground.fx.switch_preview);
var G__2025_2027 = cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs;
var G__2026_2028 = ((function (G__2025_2027){
return (function (value){
return pluto.playground.ipfs.save(value);
});})(G__2025_2027))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2025_2027,G__2026_2028) : re_frame.core.reg_fx.call(null,G__2025_2027,G__2026_2028));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_publish,(function (p__2029,_){
var map__2030 = p__2029;
var map__2030__$1 = (((((!((map__2030 == null))))?(((((map__2030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2030):map__2030);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2030__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$publish,cljs.core.cst$kw$in_DASH_progress_QMARK_], null),true),cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs,cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db)], null);
}));
var G__2033_2036 = cljs.core.cst$kw$fetch_DASH_extension_DASH_fx;
var G__2034_2037 = ((function (G__2033_2036){
return (function (){
var hash = (new URL(document.location)).searchParams.get("hash");
var uri = (cljs.core.truth_(hash)?["ipfs@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''):"url@assets/extensions/command/");
return pluto.storages.fetch(uri,((function (hash,uri,G__2033_2036){
return (function (p1__2032_SHARP_){
var G__2035 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_editor,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__2032_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value,cljs.core.cst$kw$content], null))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2035) : re_frame.core.dispatch.call(null,G__2035));
});})(hash,uri,G__2033_2036))
);
});})(G__2033_2036))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2033_2036,G__2034_2037) : re_frame.core.reg_fx.call(null,G__2033_2036,G__2034_2037));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fetch_DASH_extension,(function (p__2038,_){
var map__2039 = p__2038;
var map__2039__$1 = (((((!((map__2039 == null))))?(((((map__2039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2039):map__2039);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2039__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fetch_DASH_extension_DASH_fx,null], null);
}));
