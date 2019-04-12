// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.playground.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('clojure.string');
var G__2138_2144 = cljs.core.cst$kw$get;
var G__2139_2145 = ((function (G__2138_2144){
return (function (db,p__2140){
var vec__2141 = p__2140;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2141,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2141,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,k);
});})(G__2138_2144))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2138_2144,G__2139_2145) : re_frame.core.reg_sub.call(null,G__2138_2144,G__2139_2145));
var G__2146_2152 = cljs.core.cst$kw$get_DASH_in;
var G__2147_2153 = ((function (G__2146_2152){
return (function (db,p__2148){
var vec__2149 = p__2148;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2149,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2149,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path);
});})(G__2146_2152))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2146_2152,G__2147_2153) : re_frame.core.reg_sub.call(null,G__2146_2152,G__2147_2153));
pluto.playground.subs.extension_parsed = (function pluto$playground$subs$extension_parsed(db,v){
return cljs.core.cst$kw$parsed.cljs$core$IFn$_invoke$arity$1(db);
});
var G__2154_2156 = cljs.core.cst$kw$extension_SLASH_parsed;
var G__2155_2157 = pluto.playground.subs.extension_parsed;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2154_2156,G__2155_2157) : re_frame.core.reg_sub.call(null,G__2154_2156,G__2155_2157));
pluto.playground.subs.extension_data = (function pluto$playground$subs$extension_data(db,v){
return cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(db);
});
var G__2158_2160 = cljs.core.cst$kw$extension_SLASH_data;
var G__2159_2161 = pluto.playground.subs.extension_data;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2158_2160,G__2159_2161) : re_frame.core.reg_sub.call(null,G__2158_2160,G__2159_2161));
pluto.playground.subs.extension_source = (function pluto$playground$subs$extension_source(db,v){
return cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db);
});
var G__2162_2164 = cljs.core.cst$kw$extension_SLASH_source;
var G__2163_2165 = pluto.playground.subs.extension_source;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2162_2164,G__2163_2165) : re_frame.core.reg_sub.call(null,G__2162_2164,G__2163_2165));
var G__2166_2168 = cljs.core.cst$kw$extension_SLASH_logs;
var G__2167_2169 = cljs.core.cst$kw$logs;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2166_2168,G__2167_2169) : re_frame.core.reg_sub.call(null,G__2166_2168,G__2167_2169));
var G__2170_2172 = cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs_QMARK_;
var G__2171_2173 = cljs.core.cst$kw$filtered_DASH_logs;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2170_2172,G__2171_2173) : re_frame.core.reg_sub.call(null,G__2170_2172,G__2171_2173));
var G__2175_2185 = cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs;
var G__2176_2186 = cljs.core.cst$kw$_LT__DASH_;
var G__2177_2187 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_logs], null);
var G__2178_2188 = cljs.core.cst$kw$_LT__DASH_;
var G__2179_2189 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs_QMARK_], null);
var G__2180_2190 = ((function (G__2175_2185,G__2176_2186,G__2177_2187,G__2178_2188,G__2179_2189){
return (function (p__2181){
var vec__2182 = p__2181;
var logs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2182,(0),null);
var filtered_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2182,(1),null);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__2182,logs,filtered_QMARK_,G__2175_2185,G__2176_2186,G__2177_2187,G__2178_2188,G__2179_2189){
return (function (p1__2174_SHARP_){
if(filtered_QMARK_ === true){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$category.cljs$core$IFn$_invoke$arity$1(p1__2174_SHARP_),cljs.core.cst$kw$pluto$log_SLASH_trace);
} else {
return true;
}
});})(vec__2182,logs,filtered_QMARK_,G__2175_2185,G__2176_2186,G__2177_2187,G__2178_2188,G__2179_2189))
,logs);
});})(G__2175_2185,G__2176_2186,G__2177_2187,G__2178_2188,G__2179_2189))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__2175_2185,G__2176_2186,G__2177_2187,G__2178_2188,G__2179_2189,G__2180_2190) : re_frame.core.reg_sub.call(null,G__2175_2185,G__2176_2186,G__2177_2187,G__2178_2188,G__2179_2189,G__2180_2190));
var G__2191_2193 = cljs.core.cst$kw$extension_SLASH_errors;
var G__2192_2194 = cljs.core.cst$kw$errors;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2191_2193,G__2192_2194) : re_frame.core.reg_sub.call(null,G__2191_2193,G__2192_2194));
pluto.playground.subs.selected = (function pluto$playground$subs$selected(db,v){
return cljs.core.cst$kw$selected.cljs$core$IFn$_invoke$arity$1(db);
});
var G__2195_2197 = cljs.core.cst$kw$extension_SLASH_selected;
var G__2196_2198 = pluto.playground.subs.selected;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2195_2197,G__2196_2198) : re_frame.core.reg_sub.call(null,G__2195_2197,G__2196_2198));
pluto.playground.subs.preview = (function pluto$playground$subs$preview(db,v){
var or__4131__auto__ = cljs.core.cst$kw$preview.cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return false;
}
});
var G__2199_2201 = cljs.core.cst$kw$extension_SLASH_preview;
var G__2200_2202 = pluto.playground.subs.preview;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2199_2201,G__2200_2202) : re_frame.core.reg_sub.call(null,G__2199_2201,G__2200_2202));
var G__2203_2209 = cljs.core.cst$kw$extension_SLASH_properties;
var G__2204_2210 = ((function (G__2203_2209){
return (function (db,p__2205){
var vec__2206 = p__2205;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2206,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2206,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2206,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_properties,id], null));
});})(G__2203_2209))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2203_2209,G__2204_2210) : re_frame.core.reg_sub.call(null,G__2203_2209,G__2204_2210));
var G__2213_2220 = cljs.core.cst$kw$extension_DASH_keys;
var G__2214_2221 = cljs.core.cst$kw$_LT__DASH_;
var G__2215_2222 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_parsed], null);
var G__2216_2223 = ((function (G__2213_2220,G__2214_2221,G__2215_2222){
return (function (p__2217){
var map__2218 = p__2217;
var map__2218__$1 = (((((!((map__2218 == null))))?(((((map__2218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2218):map__2218);
var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2218__$1,cljs.core.cst$kw$views);
var hooks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2218__$1,cljs.core.cst$kw$hooks);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__2218,map__2218__$1,views,hooks,G__2213_2220,G__2214_2221,G__2215_2222){
return (function (p1__2211_SHARP_){
return ["hooks/",cljs.core.name(p1__2211_SHARP_)].join('');
});})(map__2218,map__2218__$1,views,hooks,G__2213_2220,G__2214_2221,G__2215_2222))
,cljs.core.keys(hooks)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__2218,map__2218__$1,views,hooks,G__2213_2220,G__2214_2221,G__2215_2222){
return (function (p1__2212_SHARP_){
return ["views/",cljs.core.name(p1__2212_SHARP_)].join('');
});})(map__2218,map__2218__$1,views,hooks,G__2213_2220,G__2214_2221,G__2215_2222))
,cljs.core.keys(views)));
});})(G__2213_2220,G__2214_2221,G__2215_2222))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__2213_2220,G__2214_2221,G__2215_2222,G__2216_2223) : re_frame.core.reg_sub.call(null,G__2213_2220,G__2214_2221,G__2215_2222,G__2216_2223));
var G__2224_2234 = cljs.core.cst$kw$extension_DASH_selection;
var G__2225_2235 = cljs.core.cst$kw$_LT__DASH_;
var G__2226_2236 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$extension_DASH_selection], null);
var G__2227_2237 = cljs.core.cst$kw$_LT__DASH_;
var G__2228_2238 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_keys], null);
var G__2229_2239 = ((function (G__2224_2234,G__2225_2235,G__2226_2236,G__2227_2237,G__2228_2238){
return (function (p__2230){
var vec__2231 = p__2230;
var extension_selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2231,(0),null);
var extension_keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2231,(1),null);
if(cljs.core.truth_(extension_selection)){
return extension_selection;
} else {
return cljs.core.first(extension_keys);
}
});})(G__2224_2234,G__2225_2235,G__2226_2236,G__2227_2237,G__2228_2238))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__2224_2234,G__2225_2235,G__2226_2236,G__2227_2237,G__2228_2238,G__2229_2239) : re_frame.core.reg_sub.call(null,G__2224_2234,G__2225_2235,G__2226_2236,G__2227_2237,G__2228_2238,G__2229_2239));
var G__2240_2250 = cljs.core.cst$kw$extension_SLASH_selected_DASH_properties;
var G__2241_2251 = cljs.core.cst$kw$_LT__DASH_;
var G__2242_2252 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$extensions_SLASH_properties], null);
var G__2243_2253 = cljs.core.cst$kw$_LT__DASH_;
var G__2244_2254 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_selection], null);
var G__2245_2255 = ((function (G__2240_2250,G__2241_2251,G__2242_2252,G__2243_2253,G__2244_2254){
return (function (p__2246){
var vec__2247 = p__2246;
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2247,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2247,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,id);
});})(G__2240_2250,G__2241_2251,G__2242_2252,G__2243_2253,G__2244_2254))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__2240_2250,G__2241_2251,G__2242_2252,G__2243_2253,G__2244_2254,G__2245_2255) : re_frame.core.reg_sub.call(null,G__2240_2250,G__2241_2251,G__2242_2252,G__2243_2253,G__2244_2254,G__2245_2255));
var G__2256_2258 = cljs.core.cst$kw$store_SLASH_all;
var G__2257_2259 = ((function (G__2256_2258){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_store,"Extension ID"], null));
});})(G__2256_2258))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2256_2258,G__2257_2259) : re_frame.core.reg_sub.call(null,G__2256_2258,G__2257_2259));
var G__2260_2284 = cljs.core.cst$kw$extension_SLASH_simple_DASH_sources;
var G__2261_2285 = cljs.core.cst$kw$_LT__DASH_;
var G__2262_2286 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$simple_DASH_sources], null);
var G__2263_2287 = ((function (G__2260_2284,G__2261_2285,G__2262_2286){
return (function (sources){
var meta = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__2260_2284,G__2261_2285,G__2262_2286){
return (function (p__2264){
var vec__2265 = p__2264;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2265,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2265,(1),null);
return (clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(key,"meta") === (0));
});})(G__2260_2284,G__2261_2285,G__2262_2286))
,sources);
var life = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (meta,G__2260_2284,G__2261_2285,G__2262_2286){
return (function (p__2268){
var vec__2269 = p__2268;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2269,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2269,(1),null);
return (clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(key,"lifecycle") === (0));
});})(meta,G__2260_2284,G__2261_2285,G__2262_2286))
,sources);
var events = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (meta,life,G__2260_2284,G__2261_2285,G__2262_2286){
return (function (p__2272){
var vec__2273 = p__2272;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2273,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2273,(1),null);
return (clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(key,"events/") === (0));
});})(meta,life,G__2260_2284,G__2261_2285,G__2262_2286))
,sources);
var views = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (meta,life,events,G__2260_2284,G__2261_2285,G__2262_2286){
return (function (p__2276){
var vec__2277 = p__2276;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2277,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2277,(1),null);
return (clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(key,"views/") === (0));
});})(meta,life,events,G__2260_2284,G__2261_2285,G__2262_2286))
,sources);
var hooks = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (meta,life,events,views,G__2260_2284,G__2261_2285,G__2262_2286){
return (function (p__2280){
var vec__2281 = p__2280;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2281,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2281,(1),null);
return (clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(key,"hooks/") === (0));
});})(meta,life,events,views,G__2260_2284,G__2261_2285,G__2262_2286))
,sources);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$meta,meta,cljs.core.cst$kw$events,events,cljs.core.cst$kw$views,views,cljs.core.cst$kw$hooks,hooks,cljs.core.cst$kw$life,life], null);
});})(G__2260_2284,G__2261_2285,G__2262_2286))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__2260_2284,G__2261_2285,G__2262_2286,G__2263_2287) : re_frame.core.reg_sub.call(null,G__2260_2284,G__2261_2285,G__2262_2286,G__2263_2287));
