// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.playground.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
var G__2031_2037 = cljs.core.cst$kw$get;
var G__2032_2038 = ((function (G__2031_2037){
return (function (db,p__2033){
var vec__2034 = p__2033;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2034,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2034,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,k);
});})(G__2031_2037))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2031_2037,G__2032_2038) : re_frame.core.reg_sub.call(null,G__2031_2037,G__2032_2038));
var G__2039_2045 = cljs.core.cst$kw$get_DASH_in;
var G__2040_2046 = ((function (G__2039_2045){
return (function (db,p__2041){
var vec__2042 = p__2041;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2042,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2042,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path);
});})(G__2039_2045))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2039_2045,G__2040_2046) : re_frame.core.reg_sub.call(null,G__2039_2045,G__2040_2046));
pluto.playground.subs.extension_parsed = (function pluto$playground$subs$extension_parsed(db,v){
return cljs.core.cst$kw$parsed.cljs$core$IFn$_invoke$arity$1(db);
});
var G__2047_2049 = cljs.core.cst$kw$extension_SLASH_parsed;
var G__2048_2050 = pluto.playground.subs.extension_parsed;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2047_2049,G__2048_2050) : re_frame.core.reg_sub.call(null,G__2047_2049,G__2048_2050));
pluto.playground.subs.extension_data = (function pluto$playground$subs$extension_data(db,v){
return cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(db);
});
var G__2051_2053 = cljs.core.cst$kw$extension_SLASH_data;
var G__2052_2054 = pluto.playground.subs.extension_data;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2051_2053,G__2052_2054) : re_frame.core.reg_sub.call(null,G__2051_2053,G__2052_2054));
pluto.playground.subs.extension_source = (function pluto$playground$subs$extension_source(db,v){
return cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db);
});
var G__2055_2057 = cljs.core.cst$kw$extension_SLASH_source;
var G__2056_2058 = pluto.playground.subs.extension_source;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2055_2057,G__2056_2058) : re_frame.core.reg_sub.call(null,G__2055_2057,G__2056_2058));
var G__2059_2061 = cljs.core.cst$kw$extension_SLASH_logs;
var G__2060_2062 = cljs.core.cst$kw$logs;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2059_2061,G__2060_2062) : re_frame.core.reg_sub.call(null,G__2059_2061,G__2060_2062));
var G__2063_2065 = cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs_QMARK_;
var G__2064_2066 = cljs.core.cst$kw$filtered_DASH_logs;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2063_2065,G__2064_2066) : re_frame.core.reg_sub.call(null,G__2063_2065,G__2064_2066));
var G__2068_2078 = cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs;
var G__2069_2079 = cljs.core.cst$kw$_LT__DASH_;
var G__2070_2080 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_logs], null);
var G__2071_2081 = cljs.core.cst$kw$_LT__DASH_;
var G__2072_2082 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs_QMARK_], null);
var G__2073_2083 = ((function (G__2068_2078,G__2069_2079,G__2070_2080,G__2071_2081,G__2072_2082){
return (function (p__2074){
var vec__2075 = p__2074;
var logs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2075,(0),null);
var filtered_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2075,(1),null);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__2075,logs,filtered_QMARK_,G__2068_2078,G__2069_2079,G__2070_2080,G__2071_2081,G__2072_2082){
return (function (p1__2067_SHARP_){
if(filtered_QMARK_ === true){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$category.cljs$core$IFn$_invoke$arity$1(p1__2067_SHARP_),cljs.core.cst$kw$pluto$log_SLASH_trace);
} else {
return true;
}
});})(vec__2075,logs,filtered_QMARK_,G__2068_2078,G__2069_2079,G__2070_2080,G__2071_2081,G__2072_2082))
,logs);
});})(G__2068_2078,G__2069_2079,G__2070_2080,G__2071_2081,G__2072_2082))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__2068_2078,G__2069_2079,G__2070_2080,G__2071_2081,G__2072_2082,G__2073_2083) : re_frame.core.reg_sub.call(null,G__2068_2078,G__2069_2079,G__2070_2080,G__2071_2081,G__2072_2082,G__2073_2083));
var G__2084_2086 = cljs.core.cst$kw$extension_SLASH_errors;
var G__2085_2087 = cljs.core.cst$kw$errors;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2084_2086,G__2085_2087) : re_frame.core.reg_sub.call(null,G__2084_2086,G__2085_2087));
pluto.playground.subs.selected = (function pluto$playground$subs$selected(db,v){
return cljs.core.cst$kw$selected.cljs$core$IFn$_invoke$arity$1(db);
});
var G__2088_2090 = cljs.core.cst$kw$extension_SLASH_selected;
var G__2089_2091 = pluto.playground.subs.selected;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2088_2090,G__2089_2091) : re_frame.core.reg_sub.call(null,G__2088_2090,G__2089_2091));
pluto.playground.subs.preview = (function pluto$playground$subs$preview(db,v){
var or__4131__auto__ = cljs.core.cst$kw$preview.cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return false;
}
});
var G__2092_2094 = cljs.core.cst$kw$extension_SLASH_preview;
var G__2093_2095 = pluto.playground.subs.preview;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2092_2094,G__2093_2095) : re_frame.core.reg_sub.call(null,G__2092_2094,G__2093_2095));
var G__2096_2102 = cljs.core.cst$kw$extension_SLASH_properties;
var G__2097_2103 = ((function (G__2096_2102){
return (function (db,p__2098){
var vec__2099 = p__2098;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2099,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2099,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2099,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_properties,id], null));
});})(G__2096_2102))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2096_2102,G__2097_2103) : re_frame.core.reg_sub.call(null,G__2096_2102,G__2097_2103));
var G__2106_2113 = cljs.core.cst$kw$extension_DASH_keys;
var G__2107_2114 = cljs.core.cst$kw$_LT__DASH_;
var G__2108_2115 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_parsed], null);
var G__2109_2116 = ((function (G__2106_2113,G__2107_2114,G__2108_2115){
return (function (p__2110){
var map__2111 = p__2110;
var map__2111__$1 = (((((!((map__2111 == null))))?(((((map__2111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2111):map__2111);
var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2111__$1,cljs.core.cst$kw$views);
var hooks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2111__$1,cljs.core.cst$kw$hooks);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__2111,map__2111__$1,views,hooks,G__2106_2113,G__2107_2114,G__2108_2115){
return (function (p1__2104_SHARP_){
return ["hooks/",cljs.core.name(p1__2104_SHARP_)].join('');
});})(map__2111,map__2111__$1,views,hooks,G__2106_2113,G__2107_2114,G__2108_2115))
,cljs.core.keys(hooks)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__2111,map__2111__$1,views,hooks,G__2106_2113,G__2107_2114,G__2108_2115){
return (function (p1__2105_SHARP_){
return ["views/",cljs.core.name(p1__2105_SHARP_)].join('');
});})(map__2111,map__2111__$1,views,hooks,G__2106_2113,G__2107_2114,G__2108_2115))
,cljs.core.keys(views)));
});})(G__2106_2113,G__2107_2114,G__2108_2115))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__2106_2113,G__2107_2114,G__2108_2115,G__2109_2116) : re_frame.core.reg_sub.call(null,G__2106_2113,G__2107_2114,G__2108_2115,G__2109_2116));
var G__2117_2127 = cljs.core.cst$kw$extension_DASH_selection;
var G__2118_2128 = cljs.core.cst$kw$_LT__DASH_;
var G__2119_2129 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$extension_DASH_selection], null);
var G__2120_2130 = cljs.core.cst$kw$_LT__DASH_;
var G__2121_2131 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_keys], null);
var G__2122_2132 = ((function (G__2117_2127,G__2118_2128,G__2119_2129,G__2120_2130,G__2121_2131){
return (function (p__2123){
var vec__2124 = p__2123;
var extension_selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2124,(0),null);
var extension_keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2124,(1),null);
if(cljs.core.truth_(extension_selection)){
return extension_selection;
} else {
return cljs.core.first(extension_keys);
}
});})(G__2117_2127,G__2118_2128,G__2119_2129,G__2120_2130,G__2121_2131))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__2117_2127,G__2118_2128,G__2119_2129,G__2120_2130,G__2121_2131,G__2122_2132) : re_frame.core.reg_sub.call(null,G__2117_2127,G__2118_2128,G__2119_2129,G__2120_2130,G__2121_2131,G__2122_2132));
var G__2133_2143 = cljs.core.cst$kw$extension_SLASH_selected_DASH_properties;
var G__2134_2144 = cljs.core.cst$kw$_LT__DASH_;
var G__2135_2145 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$extensions_SLASH_properties], null);
var G__2136_2146 = cljs.core.cst$kw$_LT__DASH_;
var G__2137_2147 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_selection], null);
var G__2138_2148 = ((function (G__2133_2143,G__2134_2144,G__2135_2145,G__2136_2146,G__2137_2147){
return (function (p__2139){
var vec__2140 = p__2139;
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2140,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2140,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,id);
});})(G__2133_2143,G__2134_2144,G__2135_2145,G__2136_2146,G__2137_2147))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__2133_2143,G__2134_2144,G__2135_2145,G__2136_2146,G__2137_2147,G__2138_2148) : re_frame.core.reg_sub.call(null,G__2133_2143,G__2134_2144,G__2135_2145,G__2136_2146,G__2137_2147,G__2138_2148));
var G__2149_2151 = cljs.core.cst$kw$store_SLASH_all;
var G__2150_2152 = ((function (G__2149_2151){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_store,"Extension ID"], null));
});})(G__2149_2151))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2149_2151,G__2150_2152) : re_frame.core.reg_sub.call(null,G__2149_2151,G__2150_2152));
