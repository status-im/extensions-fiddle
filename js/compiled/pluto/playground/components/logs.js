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
var _STAR_print_newline_STAR__orig_val__5336_5340 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__5337_5341 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__5338_5342 = true;
var _STAR_print_fn_STAR__temp_val__5339_5343 = ((function (_STAR_print_newline_STAR__orig_val__5336_5340,_STAR_print_fn_STAR__orig_val__5337_5341,_STAR_print_newline_STAR__temp_val__5338_5342,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__5336_5340,_STAR_print_fn_STAR__orig_val__5337_5341,_STAR_print_newline_STAR__temp_val__5338_5342,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__5338_5342;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__5339_5343;

try{fipp.edn.pprint.cljs$core$IFn$_invoke$arity$1(v);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__5337_5341;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__5336_5340;
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
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__5344 = cljs.core.get_global_hierarchy;
return (fexpr__5344.cljs$core$IFn$_invoke$arity$0 ? fexpr__5344.cljs$core$IFn$_invoke$arity$0() : fexpr__5344.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("pluto.playground.components.logs","pretty-print-data"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (p__5345){
var map__5346 = p__5345;
var map__5346__$1 = (((((!((map__5346 == null))))?(((((map__5346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5346):map__5346);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5346__$1,cljs.core.cst$kw$category);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5346__$1,cljs.core.cst$kw$type);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,type], null);
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,cljs.core.cst$kw$default,hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
pluto.playground.components.logs.pretty_print_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pluto$log_SLASH_trace,cljs.core.cst$kw$query_SLASH_resolve], null),(function (p__5348){
var map__5349 = p__5348;
var map__5349__$1 = (((((!((map__5349 == null))))?(((((map__5349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5349):map__5349);
var map__5350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5349__$1,cljs.core.cst$kw$data);
var map__5350__$1 = (((((!((map__5350 == null))))?(((((map__5350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5350):map__5350);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5350__$1,cljs.core.cst$kw$key);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5350__$1,cljs.core.cst$kw$value);
return reagent.core.as_element(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.logs.reference,query], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"to"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.source.viewer,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$content,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__5353_5357 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__5354_5358 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__5355_5359 = true;
var _STAR_print_fn_STAR__temp_val__5356_5360 = ((function (_STAR_print_newline_STAR__orig_val__5353_5357,_STAR_print_fn_STAR__orig_val__5354_5358,_STAR_print_newline_STAR__temp_val__5355_5359,sb__4661__auto__,map__5349,map__5349__$1,map__5350,map__5350__$1,query,value){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__5353_5357,_STAR_print_fn_STAR__orig_val__5354_5358,_STAR_print_newline_STAR__temp_val__5355_5359,sb__4661__auto__,map__5349,map__5349__$1,map__5350,map__5350__$1,query,value))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__5355_5359;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__5356_5360;

try{fipp.edn.pprint.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "nil";
}
})());
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__5354_5358;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__5353_5357;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})()], null)], null)], null));
}));
pluto.playground.components.logs.pretty_print_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pluto$log_SLASH_trace,cljs.core.cst$kw$event_SLASH_dispatch], null),(function (p__5361){
var map__5362 = p__5361;
var map__5362__$1 = (((((!((map__5362 == null))))?(((((map__5362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5362):map__5362);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5362__$1,cljs.core.cst$kw$data);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,(function (){var iter__4523__auto__ = ((function (map__5362,map__5362__$1,data){
return (function pluto$playground$components$logs$iter__5364(s__5365){
return (new cljs.core.LazySeq(null,((function (map__5362,map__5362__$1,data){
return (function (){
var s__5365__$1 = s__5365;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__5365__$1);
if(temp__5457__auto__){
var s__5365__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__5365__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__5365__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__5367 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__5366 = (0);
while(true){
if((i__5366 < size__4522__auto__)){
var event = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__5366);
cljs.core.chunk_append(b__5367,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.logs.reference,event], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,event], null)));

var G__5368 = (i__5366 + (1));
i__5366 = G__5368;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__5367),pluto$playground$components$logs$iter__5364(cljs.core.chunk_rest(s__5365__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__5367),null);
}
} else {
var event = cljs.core.first(s__5365__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.logs.reference,event], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,event], null)),pluto$playground$components$logs$iter__5364(cljs.core.rest(s__5365__$2)));
}
} else {
return null;
}
break;
}
});})(map__5362,map__5362__$1,data))
,null,null));
});})(map__5362,map__5362__$1,data))
;
return iter__4523__auto__(data);
})()], null);
}));
pluto.playground.components.logs.pretty_print_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pluto$error_SLASH_format,cljs.core.cst$kw$pluto$error_SLASH_invalid], null),(function (p__5369){
var map__5370 = p__5369;
var map__5370__$1 = (((((!((map__5370 == null))))?(((((map__5370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5370):map__5370);
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5370__$1,cljs.core.cst$kw$context);
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(context));
}));
pluto.playground.components.logs.pretty_print_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pluto$error_SLASH_syntax,cljs.core.cst$kw$pluto$error_SLASH_invalid], null),(function (p__5372){
var map__5373 = p__5372;
var map__5373__$1 = (((((!((map__5373 == null))))?(((((map__5373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5373):map__5373);
var map__5374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5373__$1,cljs.core.cst$kw$context);
var map__5374__$1 = (((((!((map__5374 == null))))?(((((map__5374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5374):map__5374);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5374__$1,cljs.core.cst$kw$data);
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5374__$1,cljs.core.cst$kw$reason);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5374__$1,cljs.core.cst$kw$type);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5373__$1,cljs.core.cst$kw$target);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Target",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"blue",cljs.core.cst$kw$margin,(5)], null)], null),cljs.core.name(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(target))], null),"is invalid",(cljs.core.truth_(type)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span," for type",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"blue",cljs.core.cst$kw$margin,(5)], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)], null)], null):null),(((reason instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"because",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"blue",cljs.core.cst$kw$margin,(5)], null)], null),cljs.core.name(reason)], null)], null):null),(cljs.core.truth_(data)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"( data",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"blue",cljs.core.cst$kw$margin,(5)], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)], null),")"], null):null)], null);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.Table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableHead,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableRow,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,"Id"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,"Category"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,"Type"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,"Data"], null)], null)], null),(((!((cljs.core.first(v) instanceof cljs.core.Keyword))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableBody,(function (){var iter__4523__auto__ = (function pluto$playground$components$logs$table_$_iter__5377(s__5378){
return (new cljs.core.LazySeq(null,(function (){
var s__5378__$1 = s__5378;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__5378__$1);
if(temp__5457__auto__){
var s__5378__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__5378__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__5378__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__5380 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__5379 = (0);
while(true){
if((i__5379 < size__4522__auto__)){
var map__5381 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__5379);
var map__5381__$1 = (((((!((map__5381 == null))))?(((((map__5381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5381):map__5381);
var m = map__5381__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5381__$1,cljs.core.cst$kw$id);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5381__$1,cljs.core.cst$kw$category);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5381__$1,cljs.core.cst$kw$type);
cljs.core.chunk_append(b__5380,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableRow,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,pluto.playground.components.logs.pretty_print_category(category)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,type], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.logs.data_wrapper,(pluto.playground.components.logs.pretty_print_data.cljs$core$IFn$_invoke$arity$1 ? pluto.playground.components.logs.pretty_print_data.cljs$core$IFn$_invoke$arity$1(m) : pluto.playground.components.logs.pretty_print_data.call(null,m))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(function (){var or__4131__auto__ = id;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return m;
}
})()], null)));

var G__5385 = (i__5379 + (1));
i__5379 = G__5385;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__5380),pluto$playground$components$logs$table_$_iter__5377(cljs.core.chunk_rest(s__5378__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__5380),null);
}
} else {
var map__5383 = cljs.core.first(s__5378__$2);
var map__5383__$1 = (((((!((map__5383 == null))))?(((((map__5383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5383):map__5383);
var m = map__5383__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5383__$1,cljs.core.cst$kw$id);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5383__$1,cljs.core.cst$kw$category);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5383__$1,cljs.core.cst$kw$type);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableRow,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,pluto.playground.components.logs.pretty_print_category(category)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,type], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.logs.data_wrapper,(pluto.playground.components.logs.pretty_print_data.cljs$core$IFn$_invoke$arity$1 ? pluto.playground.components.logs.pretty_print_data.cljs$core$IFn$_invoke$arity$1(m) : pluto.playground.components.logs.pretty_print_data.call(null,m))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(function (){var or__4131__auto__ = id;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return m;
}
})()], null)),pluto$playground$components$logs$table_$_iter__5377(cljs.core.rest(s__5378__$2)));
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
