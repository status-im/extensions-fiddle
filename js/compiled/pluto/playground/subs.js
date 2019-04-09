// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.playground.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
var G__2019_2025 = cljs.core.cst$kw$get;
var G__2020_2026 = ((function (G__2019_2025){
return (function (db,p__2021){
var vec__2022 = p__2021;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2022,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2022,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,k);
});})(G__2019_2025))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2019_2025,G__2020_2026) : re_frame.core.reg_sub.call(null,G__2019_2025,G__2020_2026));
var G__2027_2033 = cljs.core.cst$kw$get_DASH_in;
var G__2028_2034 = ((function (G__2027_2033){
return (function (db,p__2029){
var vec__2030 = p__2029;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2030,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2030,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path);
});})(G__2027_2033))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2027_2033,G__2028_2034) : re_frame.core.reg_sub.call(null,G__2027_2033,G__2028_2034));
pluto.playground.subs.extension_parsed = (function pluto$playground$subs$extension_parsed(db,v){
return cljs.core.cst$kw$parsed.cljs$core$IFn$_invoke$arity$1(db);
});
var G__2035_2037 = cljs.core.cst$kw$extension_SLASH_parsed;
var G__2036_2038 = pluto.playground.subs.extension_parsed;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2035_2037,G__2036_2038) : re_frame.core.reg_sub.call(null,G__2035_2037,G__2036_2038));
pluto.playground.subs.extension_data = (function pluto$playground$subs$extension_data(db,v){
return cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(db);
});
var G__2039_2041 = cljs.core.cst$kw$extension_SLASH_data;
var G__2040_2042 = pluto.playground.subs.extension_data;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2039_2041,G__2040_2042) : re_frame.core.reg_sub.call(null,G__2039_2041,G__2040_2042));
pluto.playground.subs.extension_source = (function pluto$playground$subs$extension_source(db,v){
return cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db);
});
var G__2043_2045 = cljs.core.cst$kw$extension_SLASH_source;
var G__2044_2046 = pluto.playground.subs.extension_source;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2043_2045,G__2044_2046) : re_frame.core.reg_sub.call(null,G__2043_2045,G__2044_2046));
var G__2047_2049 = cljs.core.cst$kw$extension_SLASH_logs;
var G__2048_2050 = cljs.core.cst$kw$logs;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2047_2049,G__2048_2050) : re_frame.core.reg_sub.call(null,G__2047_2049,G__2048_2050));
var G__2051_2053 = cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs_QMARK_;
var G__2052_2054 = cljs.core.cst$kw$filtered_DASH_logs;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2051_2053,G__2052_2054) : re_frame.core.reg_sub.call(null,G__2051_2053,G__2052_2054));
var G__2056_2066 = cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs;
var G__2057_2067 = cljs.core.cst$kw$_LT__DASH_;
var G__2058_2068 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_logs], null);
var G__2059_2069 = cljs.core.cst$kw$_LT__DASH_;
var G__2060_2070 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs_QMARK_], null);
var G__2061_2071 = ((function (G__2056_2066,G__2057_2067,G__2058_2068,G__2059_2069,G__2060_2070){
return (function (p__2062){
var vec__2063 = p__2062;
var logs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2063,(0),null);
var filtered_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2063,(1),null);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__2063,logs,filtered_QMARK_,G__2056_2066,G__2057_2067,G__2058_2068,G__2059_2069,G__2060_2070){
return (function (p1__2055_SHARP_){
if(filtered_QMARK_ === true){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$category.cljs$core$IFn$_invoke$arity$1(p1__2055_SHARP_),cljs.core.cst$kw$pluto$log_SLASH_trace);
} else {
return true;
}
});})(vec__2063,logs,filtered_QMARK_,G__2056_2066,G__2057_2067,G__2058_2068,G__2059_2069,G__2060_2070))
,logs);
});})(G__2056_2066,G__2057_2067,G__2058_2068,G__2059_2069,G__2060_2070))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__2056_2066,G__2057_2067,G__2058_2068,G__2059_2069,G__2060_2070,G__2061_2071) : re_frame.core.reg_sub.call(null,G__2056_2066,G__2057_2067,G__2058_2068,G__2059_2069,G__2060_2070,G__2061_2071));
var G__2072_2074 = cljs.core.cst$kw$extension_SLASH_errors;
var G__2073_2075 = cljs.core.cst$kw$errors;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2072_2074,G__2073_2075) : re_frame.core.reg_sub.call(null,G__2072_2074,G__2073_2075));
pluto.playground.subs.selected = (function pluto$playground$subs$selected(db,v){
return cljs.core.cst$kw$selected.cljs$core$IFn$_invoke$arity$1(db);
});
var G__2076_2078 = cljs.core.cst$kw$extension_SLASH_selected;
var G__2077_2079 = pluto.playground.subs.selected;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2076_2078,G__2077_2079) : re_frame.core.reg_sub.call(null,G__2076_2078,G__2077_2079));
pluto.playground.subs.preview = (function pluto$playground$subs$preview(db,v){
var or__4131__auto__ = cljs.core.cst$kw$preview.cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return false;
}
});
var G__2080_2082 = cljs.core.cst$kw$extension_SLASH_preview;
var G__2081_2083 = pluto.playground.subs.preview;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2080_2082,G__2081_2083) : re_frame.core.reg_sub.call(null,G__2080_2082,G__2081_2083));
var G__2084_2090 = cljs.core.cst$kw$extension_SLASH_properties;
var G__2085_2091 = ((function (G__2084_2090){
return (function (db,p__2086){
var vec__2087 = p__2086;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2087,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2087,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2087,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_properties,id], null));
});})(G__2084_2090))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2084_2090,G__2085_2091) : re_frame.core.reg_sub.call(null,G__2084_2090,G__2085_2091));
var G__2094_2101 = cljs.core.cst$kw$extension_DASH_keys;
var G__2095_2102 = cljs.core.cst$kw$_LT__DASH_;
var G__2096_2103 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_parsed], null);
var G__2097_2104 = ((function (G__2094_2101,G__2095_2102,G__2096_2103){
return (function (p__2098){
var map__2099 = p__2098;
var map__2099__$1 = (((((!((map__2099 == null))))?(((((map__2099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2099):map__2099);
var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2099__$1,cljs.core.cst$kw$views);
var hooks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2099__$1,cljs.core.cst$kw$hooks);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__2099,map__2099__$1,views,hooks,G__2094_2101,G__2095_2102,G__2096_2103){
return (function (p1__2092_SHARP_){
return ["hooks/",cljs.core.name(p1__2092_SHARP_)].join('');
});})(map__2099,map__2099__$1,views,hooks,G__2094_2101,G__2095_2102,G__2096_2103))
,cljs.core.keys(hooks)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__2099,map__2099__$1,views,hooks,G__2094_2101,G__2095_2102,G__2096_2103){
return (function (p1__2093_SHARP_){
return ["views/",cljs.core.name(p1__2093_SHARP_)].join('');
});})(map__2099,map__2099__$1,views,hooks,G__2094_2101,G__2095_2102,G__2096_2103))
,cljs.core.keys(views)));
});})(G__2094_2101,G__2095_2102,G__2096_2103))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__2094_2101,G__2095_2102,G__2096_2103,G__2097_2104) : re_frame.core.reg_sub.call(null,G__2094_2101,G__2095_2102,G__2096_2103,G__2097_2104));
var G__2105_2115 = cljs.core.cst$kw$extension_DASH_selection;
var G__2106_2116 = cljs.core.cst$kw$_LT__DASH_;
var G__2107_2117 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$extension_DASH_selection], null);
var G__2108_2118 = cljs.core.cst$kw$_LT__DASH_;
var G__2109_2119 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_keys], null);
var G__2110_2120 = ((function (G__2105_2115,G__2106_2116,G__2107_2117,G__2108_2118,G__2109_2119){
return (function (p__2111){
var vec__2112 = p__2111;
var extension_selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2112,(0),null);
var extension_keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2112,(1),null);
if(cljs.core.truth_(extension_selection)){
return extension_selection;
} else {
return cljs.core.first(extension_keys);
}
});})(G__2105_2115,G__2106_2116,G__2107_2117,G__2108_2118,G__2109_2119))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__2105_2115,G__2106_2116,G__2107_2117,G__2108_2118,G__2109_2119,G__2110_2120) : re_frame.core.reg_sub.call(null,G__2105_2115,G__2106_2116,G__2107_2117,G__2108_2118,G__2109_2119,G__2110_2120));
var G__2121_2131 = cljs.core.cst$kw$extension_SLASH_selected_DASH_properties;
var G__2122_2132 = cljs.core.cst$kw$_LT__DASH_;
var G__2123_2133 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$extensions_SLASH_properties], null);
var G__2124_2134 = cljs.core.cst$kw$_LT__DASH_;
var G__2125_2135 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_selection], null);
var G__2126_2136 = ((function (G__2121_2131,G__2122_2132,G__2123_2133,G__2124_2134,G__2125_2135){
return (function (p__2127){
var vec__2128 = p__2127;
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2128,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2128,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,id);
});})(G__2121_2131,G__2122_2132,G__2123_2133,G__2124_2134,G__2125_2135))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__2121_2131,G__2122_2132,G__2123_2133,G__2124_2134,G__2125_2135,G__2126_2136) : re_frame.core.reg_sub.call(null,G__2121_2131,G__2122_2132,G__2123_2133,G__2124_2134,G__2125_2135,G__2126_2136));
var G__2137_2139 = cljs.core.cst$kw$store_SLASH_all;
var G__2138_2140 = ((function (G__2137_2139){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_store,"Extension ID"], null));
});})(G__2137_2139))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2137_2139,G__2138_2140) : re_frame.core.reg_sub.call(null,G__2137_2139,G__2138_2140));
