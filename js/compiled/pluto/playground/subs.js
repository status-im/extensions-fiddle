// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.playground.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
var G__2059_2065 = cljs.core.cst$kw$get;
var G__2060_2066 = ((function (G__2059_2065){
return (function (db,p__2061){
var vec__2062 = p__2061;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2062,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2062,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,k);
});})(G__2059_2065))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2059_2065,G__2060_2066) : re_frame.core.reg_sub.call(null,G__2059_2065,G__2060_2066));
var G__2067_2073 = cljs.core.cst$kw$get_DASH_in;
var G__2068_2074 = ((function (G__2067_2073){
return (function (db,p__2069){
var vec__2070 = p__2069;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2070,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2070,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path);
});})(G__2067_2073))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2067_2073,G__2068_2074) : re_frame.core.reg_sub.call(null,G__2067_2073,G__2068_2074));
pluto.playground.subs.extension_parsed = (function pluto$playground$subs$extension_parsed(db,v){
return cljs.core.cst$kw$parsed.cljs$core$IFn$_invoke$arity$1(db);
});
var G__2075_2077 = cljs.core.cst$kw$extension_SLASH_parsed;
var G__2076_2078 = pluto.playground.subs.extension_parsed;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2075_2077,G__2076_2078) : re_frame.core.reg_sub.call(null,G__2075_2077,G__2076_2078));
pluto.playground.subs.extension_data = (function pluto$playground$subs$extension_data(db,v){
return cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(db);
});
var G__2079_2081 = cljs.core.cst$kw$extension_SLASH_data;
var G__2080_2082 = pluto.playground.subs.extension_data;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2079_2081,G__2080_2082) : re_frame.core.reg_sub.call(null,G__2079_2081,G__2080_2082));
pluto.playground.subs.extension_source = (function pluto$playground$subs$extension_source(db,v){
return cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db);
});
var G__2083_2085 = cljs.core.cst$kw$extension_SLASH_source;
var G__2084_2086 = pluto.playground.subs.extension_source;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2083_2085,G__2084_2086) : re_frame.core.reg_sub.call(null,G__2083_2085,G__2084_2086));
var G__2087_2089 = cljs.core.cst$kw$extension_SLASH_logs;
var G__2088_2090 = cljs.core.cst$kw$logs;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2087_2089,G__2088_2090) : re_frame.core.reg_sub.call(null,G__2087_2089,G__2088_2090));
var G__2091_2093 = cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs_QMARK_;
var G__2092_2094 = cljs.core.cst$kw$filtered_DASH_logs;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2091_2093,G__2092_2094) : re_frame.core.reg_sub.call(null,G__2091_2093,G__2092_2094));
var G__2096_2106 = cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs;
var G__2097_2107 = cljs.core.cst$kw$_LT__DASH_;
var G__2098_2108 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_logs], null);
var G__2099_2109 = cljs.core.cst$kw$_LT__DASH_;
var G__2100_2110 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs_QMARK_], null);
var G__2101_2111 = ((function (G__2096_2106,G__2097_2107,G__2098_2108,G__2099_2109,G__2100_2110){
return (function (p__2102){
var vec__2103 = p__2102;
var logs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2103,(0),null);
var filtered_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2103,(1),null);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__2103,logs,filtered_QMARK_,G__2096_2106,G__2097_2107,G__2098_2108,G__2099_2109,G__2100_2110){
return (function (p1__2095_SHARP_){
if(filtered_QMARK_ === true){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$category.cljs$core$IFn$_invoke$arity$1(p1__2095_SHARP_),cljs.core.cst$kw$pluto$log_SLASH_trace);
} else {
return true;
}
});})(vec__2103,logs,filtered_QMARK_,G__2096_2106,G__2097_2107,G__2098_2108,G__2099_2109,G__2100_2110))
,logs);
});})(G__2096_2106,G__2097_2107,G__2098_2108,G__2099_2109,G__2100_2110))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__2096_2106,G__2097_2107,G__2098_2108,G__2099_2109,G__2100_2110,G__2101_2111) : re_frame.core.reg_sub.call(null,G__2096_2106,G__2097_2107,G__2098_2108,G__2099_2109,G__2100_2110,G__2101_2111));
var G__2112_2114 = cljs.core.cst$kw$extension_SLASH_errors;
var G__2113_2115 = cljs.core.cst$kw$errors;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2112_2114,G__2113_2115) : re_frame.core.reg_sub.call(null,G__2112_2114,G__2113_2115));
pluto.playground.subs.selected = (function pluto$playground$subs$selected(db,v){
return cljs.core.cst$kw$selected.cljs$core$IFn$_invoke$arity$1(db);
});
var G__2116_2118 = cljs.core.cst$kw$extension_SLASH_selected;
var G__2117_2119 = pluto.playground.subs.selected;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2116_2118,G__2117_2119) : re_frame.core.reg_sub.call(null,G__2116_2118,G__2117_2119));
pluto.playground.subs.preview = (function pluto$playground$subs$preview(db,v){
var or__4131__auto__ = cljs.core.cst$kw$preview.cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return false;
}
});
var G__2120_2122 = cljs.core.cst$kw$extension_SLASH_preview;
var G__2121_2123 = pluto.playground.subs.preview;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2120_2122,G__2121_2123) : re_frame.core.reg_sub.call(null,G__2120_2122,G__2121_2123));
var G__2124_2130 = cljs.core.cst$kw$extension_SLASH_properties;
var G__2125_2131 = ((function (G__2124_2130){
return (function (db,p__2126){
var vec__2127 = p__2126;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2127,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2127,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2127,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_properties,id], null));
});})(G__2124_2130))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2124_2130,G__2125_2131) : re_frame.core.reg_sub.call(null,G__2124_2130,G__2125_2131));
var G__2134_2141 = cljs.core.cst$kw$extension_DASH_keys;
var G__2135_2142 = cljs.core.cst$kw$_LT__DASH_;
var G__2136_2143 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_parsed], null);
var G__2137_2144 = ((function (G__2134_2141,G__2135_2142,G__2136_2143){
return (function (p__2138){
var map__2139 = p__2138;
var map__2139__$1 = (((((!((map__2139 == null))))?(((((map__2139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2139):map__2139);
var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2139__$1,cljs.core.cst$kw$views);
var hooks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2139__$1,cljs.core.cst$kw$hooks);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__2139,map__2139__$1,views,hooks,G__2134_2141,G__2135_2142,G__2136_2143){
return (function (p1__2132_SHARP_){
return ["hooks/",cljs.core.name(p1__2132_SHARP_)].join('');
});})(map__2139,map__2139__$1,views,hooks,G__2134_2141,G__2135_2142,G__2136_2143))
,cljs.core.keys(hooks)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__2139,map__2139__$1,views,hooks,G__2134_2141,G__2135_2142,G__2136_2143){
return (function (p1__2133_SHARP_){
return ["views/",cljs.core.name(p1__2133_SHARP_)].join('');
});})(map__2139,map__2139__$1,views,hooks,G__2134_2141,G__2135_2142,G__2136_2143))
,cljs.core.keys(views)));
});})(G__2134_2141,G__2135_2142,G__2136_2143))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__2134_2141,G__2135_2142,G__2136_2143,G__2137_2144) : re_frame.core.reg_sub.call(null,G__2134_2141,G__2135_2142,G__2136_2143,G__2137_2144));
var G__2145_2155 = cljs.core.cst$kw$extension_DASH_selection;
var G__2146_2156 = cljs.core.cst$kw$_LT__DASH_;
var G__2147_2157 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$extension_DASH_selection], null);
var G__2148_2158 = cljs.core.cst$kw$_LT__DASH_;
var G__2149_2159 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_keys], null);
var G__2150_2160 = ((function (G__2145_2155,G__2146_2156,G__2147_2157,G__2148_2158,G__2149_2159){
return (function (p__2151){
var vec__2152 = p__2151;
var extension_selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2152,(0),null);
var extension_keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2152,(1),null);
if(cljs.core.truth_(extension_selection)){
return extension_selection;
} else {
return cljs.core.first(extension_keys);
}
});})(G__2145_2155,G__2146_2156,G__2147_2157,G__2148_2158,G__2149_2159))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__2145_2155,G__2146_2156,G__2147_2157,G__2148_2158,G__2149_2159,G__2150_2160) : re_frame.core.reg_sub.call(null,G__2145_2155,G__2146_2156,G__2147_2157,G__2148_2158,G__2149_2159,G__2150_2160));
var G__2161_2171 = cljs.core.cst$kw$extension_SLASH_selected_DASH_properties;
var G__2162_2172 = cljs.core.cst$kw$_LT__DASH_;
var G__2163_2173 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$extensions_SLASH_properties], null);
var G__2164_2174 = cljs.core.cst$kw$_LT__DASH_;
var G__2165_2175 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_selection], null);
var G__2166_2176 = ((function (G__2161_2171,G__2162_2172,G__2163_2173,G__2164_2174,G__2165_2175){
return (function (p__2167){
var vec__2168 = p__2167;
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2168,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2168,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,id);
});})(G__2161_2171,G__2162_2172,G__2163_2173,G__2164_2174,G__2165_2175))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__2161_2171,G__2162_2172,G__2163_2173,G__2164_2174,G__2165_2175,G__2166_2176) : re_frame.core.reg_sub.call(null,G__2161_2171,G__2162_2172,G__2163_2173,G__2164_2174,G__2165_2175,G__2166_2176));
