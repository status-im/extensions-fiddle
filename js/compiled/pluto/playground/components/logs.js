// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.playground.components.logs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('fipp.edn');
goog.require('pluto.error');
goog.require('pluto.log');
goog.require('pluto.playground.components.source');
pluto.playground.components.logs.Table = (MaterialUI["Table"]);
pluto.playground.components.logs.TableHead = (MaterialUI["TableHead"]);
pluto.playground.components.logs.TableBody = (MaterialUI["TableBody"]);
pluto.playground.components.logs.TableRow = (MaterialUI["TableRow"]);
pluto.playground.components.logs.TableCell = (MaterialUI["TableCell"]);
pluto.playground.components.logs.reference = (function pluto$playground$components$logs$reference(v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.source.viewer,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$content,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__2362_2366 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__2363_2367 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__2364_2368 = true;
var _STAR_print_fn_STAR__temp_val__2365_2369 = ((function (_STAR_print_newline_STAR__orig_val__2362_2366,_STAR_print_fn_STAR__orig_val__2363_2367,_STAR_print_newline_STAR__temp_val__2364_2368,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__2362_2366,_STAR_print_fn_STAR__orig_val__2363_2367,_STAR_print_newline_STAR__temp_val__2364_2368,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__2364_2368;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__2365_2369;

try{fipp.edn.pprint.cljs$core$IFn$_invoke$arity$1(v);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__2363_2367;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__2362_2366;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})()], null)], null);
});
if((typeof pluto !== 'undefined') && (typeof pluto.playground !== 'undefined') && (typeof pluto.playground.components !== 'undefined') && (typeof pluto.playground.components.logs !== 'undefined') && (typeof pluto.playground.components.logs.pretty_print_data !== 'undefined')){
} else {
pluto.playground.components.logs.pretty_print_data = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__2370 = cljs.core.get_global_hierarchy;
return (fexpr__2370.cljs$core$IFn$_invoke$arity$0 ? fexpr__2370.cljs$core$IFn$_invoke$arity$0() : fexpr__2370.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("pluto.playground.components.logs","pretty-print-data"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (p__2371){
var map__2372 = p__2371;
var map__2372__$1 = (((((!((map__2372 == null))))?(((((map__2372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2372):map__2372);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2372__$1,cljs.core.cst$kw$category);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2372__$1,cljs.core.cst$kw$type);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,type], null);
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,cljs.core.cst$kw$default,hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
pluto.playground.components.logs.pretty_print_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pluto$log_SLASH_trace,cljs.core.cst$kw$query_SLASH_resolve], null),(function (p__2374){
var map__2375 = p__2374;
var map__2375__$1 = (((((!((map__2375 == null))))?(((((map__2375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2375):map__2375);
var map__2376 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2375__$1,cljs.core.cst$kw$data);
var map__2376__$1 = (((((!((map__2376 == null))))?(((((map__2376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2376):map__2376);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2376__$1,cljs.core.cst$kw$key);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2376__$1,cljs.core.cst$kw$value);
return reagent.core.as_element(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.logs.reference,query], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"to"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.source.viewer,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$content,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__2379_2383 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__2380_2384 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__2381_2385 = true;
var _STAR_print_fn_STAR__temp_val__2382_2386 = ((function (_STAR_print_newline_STAR__orig_val__2379_2383,_STAR_print_fn_STAR__orig_val__2380_2384,_STAR_print_newline_STAR__temp_val__2381_2385,sb__4661__auto__,map__2375,map__2375__$1,map__2376,map__2376__$1,query,value){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__2379_2383,_STAR_print_fn_STAR__orig_val__2380_2384,_STAR_print_newline_STAR__temp_val__2381_2385,sb__4661__auto__,map__2375,map__2375__$1,map__2376,map__2376__$1,query,value))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__2381_2385;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__2382_2386;

try{fipp.edn.pprint.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "nil";
}
})());
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__2380_2384;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__2379_2383;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})()], null)], null)], null));
}));
pluto.playground.components.logs.pretty_print_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pluto$log_SLASH_trace,cljs.core.cst$kw$event_SLASH_dispatch], null),(function (p__2387){
var map__2388 = p__2387;
var map__2388__$1 = (((((!((map__2388 == null))))?(((((map__2388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2388):map__2388);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2388__$1,cljs.core.cst$kw$data);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,(function (){var iter__4523__auto__ = ((function (map__2388,map__2388__$1,data){
return (function pluto$playground$components$logs$iter__2390(s__2391){
return (new cljs.core.LazySeq(null,((function (map__2388,map__2388__$1,data){
return (function (){
var s__2391__$1 = s__2391;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__2391__$1);
if(temp__5457__auto__){
var s__2391__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__2391__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__2391__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__2393 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__2392 = (0);
while(true){
if((i__2392 < size__4522__auto__)){
var event = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__2392);
cljs.core.chunk_append(b__2393,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.logs.reference,event], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,event], null)));

var G__2394 = (i__2392 + (1));
i__2392 = G__2394;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__2393),pluto$playground$components$logs$iter__2390(cljs.core.chunk_rest(s__2391__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__2393),null);
}
} else {
var event = cljs.core.first(s__2391__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.logs.reference,event], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,event], null)),pluto$playground$components$logs$iter__2390(cljs.core.rest(s__2391__$2)));
}
} else {
return null;
}
break;
}
});})(map__2388,map__2388__$1,data))
,null,null));
});})(map__2388,map__2388__$1,data))
;
return iter__4523__auto__(data);
})()], null);
}));
pluto.playground.components.logs.pretty_print_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pluto$error_SLASH_format,cljs.core.cst$kw$pluto$error_SLASH_invalid], null),(function (p__2395){
var map__2396 = p__2395;
var map__2396__$1 = (((((!((map__2396 == null))))?(((((map__2396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2396):map__2396);
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2396__$1,cljs.core.cst$kw$context);
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(context));
}));
pluto.playground.components.logs.pretty_print_data.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (m){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(m);
}));
pluto.playground.components.logs.data_wrapper = (function pluto$playground$components$logs$data_wrapper(child){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$max_DASH_height,"100px",cljs.core.cst$kw$overflow,"auto"], null)], null),child], null);
});
pluto.playground.components.logs.pretty_print_category = (function pluto$playground$components$logs$pretty_print_category(category){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category,cljs.core.cst$kw$pluto$log_SLASH_error))?cljs.core.cst$kw$red:cljs.core.cst$kw$blue)], null)], null),category], null));
});
pluto.playground.components.logs.table = (function pluto$playground$components$logs$table(v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.Table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableHead,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableRow,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,"Id"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,"Category"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,"Type"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,"Data"], null)], null)], null),(((!((cljs.core.first(v) instanceof cljs.core.Keyword))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableBody,(function (){var iter__4523__auto__ = (function pluto$playground$components$logs$table_$_iter__2398(s__2399){
return (new cljs.core.LazySeq(null,(function (){
var s__2399__$1 = s__2399;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__2399__$1);
if(temp__5457__auto__){
var s__2399__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__2399__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__2399__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__2401 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__2400 = (0);
while(true){
if((i__2400 < size__4522__auto__)){
var map__2402 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__2400);
var map__2402__$1 = (((((!((map__2402 == null))))?(((((map__2402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2402):map__2402);
var m = map__2402__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2402__$1,cljs.core.cst$kw$id);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2402__$1,cljs.core.cst$kw$category);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2402__$1,cljs.core.cst$kw$type);
cljs.core.chunk_append(b__2401,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableRow,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,pluto.playground.components.logs.pretty_print_category(category)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,type], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.logs.data_wrapper,(pluto.playground.components.logs.pretty_print_data.cljs$core$IFn$_invoke$arity$1 ? pluto.playground.components.logs.pretty_print_data.cljs$core$IFn$_invoke$arity$1(m) : pluto.playground.components.logs.pretty_print_data.call(null,m))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(function (){var or__4131__auto__ = id;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return m;
}
})()], null)));

var G__2406 = (i__2400 + (1));
i__2400 = G__2406;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__2401),pluto$playground$components$logs$table_$_iter__2398(cljs.core.chunk_rest(s__2399__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__2401),null);
}
} else {
var map__2404 = cljs.core.first(s__2399__$2);
var map__2404__$1 = (((((!((map__2404 == null))))?(((((map__2404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2404):map__2404);
var m = map__2404__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2404__$1,cljs.core.cst$kw$id);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2404__$1,cljs.core.cst$kw$category);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2404__$1,cljs.core.cst$kw$type);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableRow,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,pluto.playground.components.logs.pretty_print_category(category)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,type], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.logs.data_wrapper,(pluto.playground.components.logs.pretty_print_data.cljs$core$IFn$_invoke$arity$1 ? pluto.playground.components.logs.pretty_print_data.cljs$core$IFn$_invoke$arity$1(m) : pluto.playground.components.logs.pretty_print_data.call(null,m))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(function (){var or__4131__auto__ = id;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return m;
}
})()], null)),pluto$playground$components$logs$table_$_iter__2398(cljs.core.rest(s__2399__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(v);
})()], null):null)], null)], null);
});
