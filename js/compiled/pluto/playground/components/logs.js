// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.playground.components.logs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('pluto.error');
goog.require('pluto.log');
goog.require('pluto.playground.components.source');
pluto.playground.components.logs.Table = (MaterialUI["Table"]);
pluto.playground.components.logs.TableHead = (MaterialUI["TableHead"]);
pluto.playground.components.logs.TableBody = (MaterialUI["TableBody"]);
pluto.playground.components.logs.TableRow = (MaterialUI["TableRow"]);
pluto.playground.components.logs.TableCell = (MaterialUI["TableCell"]);
pluto.playground.components.logs.reference = (function pluto$playground$components$logs$reference(v){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"red",cljs.core.cst$kw$margin,"10px"], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)], null);
});
if((typeof pluto !== 'undefined') && (typeof pluto.playground !== 'undefined') && (typeof pluto.playground.components !== 'undefined') && (typeof pluto.playground.components.logs !== 'undefined') && (typeof pluto.playground.components.logs.pretty_print_data !== 'undefined')){
} else {
pluto.playground.components.logs.pretty_print_data = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__2761 = cljs.core.get_global_hierarchy;
return (fexpr__2761.cljs$core$IFn$_invoke$arity$0 ? fexpr__2761.cljs$core$IFn$_invoke$arity$0() : fexpr__2761.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("pluto.playground.components.logs","pretty-print-data"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (p__2762){
var map__2763 = p__2762;
var map__2763__$1 = (((((!((map__2763 == null))))?(((((map__2763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2763):map__2763);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2763__$1,cljs.core.cst$kw$category);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2763__$1,cljs.core.cst$kw$type);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,type], null);
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,cljs.core.cst$kw$default,hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
pluto.playground.components.logs.pretty_print_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pluto$log_SLASH_trace,cljs.core.cst$kw$query_SLASH_resolve], null),(function (p__2765){
var map__2766 = p__2765;
var map__2766__$1 = (((((!((map__2766 == null))))?(((((map__2766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2766):map__2766);
var map__2767 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2766__$1,cljs.core.cst$kw$data);
var map__2767__$1 = (((((!((map__2767 == null))))?(((((map__2767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2767):map__2767);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2767__$1,cljs.core.cst$kw$key);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2767__$1,cljs.core.cst$kw$value);
return reagent.core.as_element(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.logs.reference,query], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"to"], null),(cljs.core.truth_(value)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.source.viewer,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$content,cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin,"10px",cljs.core.cst$kw$font_DASH_weight,"bold"], null)], null),"nil"], null))], null));
}));
pluto.playground.components.logs.pretty_print_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pluto$log_SLASH_trace,cljs.core.cst$kw$event_SLASH_dispatch], null),(function (p__2770){
var map__2771 = p__2770;
var map__2771__$1 = (((((!((map__2771 == null))))?(((((map__2771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2771):map__2771);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2771__$1,cljs.core.cst$kw$data);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,(function (){var iter__4523__auto__ = ((function (map__2771,map__2771__$1,data){
return (function pluto$playground$components$logs$iter__2773(s__2774){
return (new cljs.core.LazySeq(null,((function (map__2771,map__2771__$1,data){
return (function (){
var s__2774__$1 = s__2774;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__2774__$1);
if(temp__5720__auto__){
var s__2774__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__2774__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__2774__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__2776 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__2775 = (0);
while(true){
if((i__2775 < size__4522__auto__)){
var event = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__2775);
cljs.core.chunk_append(b__2776,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.logs.reference,event], null));

var G__2777 = (i__2775 + (1));
i__2775 = G__2777;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__2776),pluto$playground$components$logs$iter__2773(cljs.core.chunk_rest(s__2774__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__2776),null);
}
} else {
var event = cljs.core.first(s__2774__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.logs.reference,event], null),pluto$playground$components$logs$iter__2773(cljs.core.rest(s__2774__$2)));
}
} else {
return null;
}
break;
}
});})(map__2771,map__2771__$1,data))
,null,null));
});})(map__2771,map__2771__$1,data))
;
return iter__4523__auto__(data);
})()], null);
}));
pluto.playground.components.logs.pretty_print_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pluto$error_SLASH_format,cljs.core.cst$kw$pluto$error_SLASH_invalid], null),(function (p__2778){
var map__2779 = p__2778;
var map__2779__$1 = (((((!((map__2779 == null))))?(((((map__2779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2779):map__2779);
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2779__$1,cljs.core.cst$kw$context);
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(context));
}));
pluto.playground.components.logs.pretty_print_data.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (m){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(m);
}));
pluto.playground.components.logs.data_wrapper = (function pluto$playground$components$logs$data_wrapper(child){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$max_DASH_height,"100px",cljs.core.cst$kw$overflow,"auto"], null)], null),child], null);
});
pluto.playground.components.logs.table = (function pluto$playground$components$logs$table(v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.Table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableHead,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableRow,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,"Id"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,"Category"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,"Type"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,"Data"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableBody,(function (){var iter__4523__auto__ = (function pluto$playground$components$logs$table_$_iter__2781(s__2782){
return (new cljs.core.LazySeq(null,(function (){
var s__2782__$1 = s__2782;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__2782__$1);
if(temp__5720__auto__){
var s__2782__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__2782__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__2782__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__2784 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__2783 = (0);
while(true){
if((i__2783 < size__4522__auto__)){
var map__2785 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__2783);
var map__2785__$1 = (((((!((map__2785 == null))))?(((((map__2785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2785):map__2785);
var m = map__2785__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2785__$1,cljs.core.cst$kw$id);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2785__$1,cljs.core.cst$kw$category);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2785__$1,cljs.core.cst$kw$type);
cljs.core.chunk_append(b__2784,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableRow,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,category], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,type], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.logs.data_wrapper,(pluto.playground.components.logs.pretty_print_data.cljs$core$IFn$_invoke$arity$1 ? pluto.playground.components.logs.pretty_print_data.cljs$core$IFn$_invoke$arity$1(m) : pluto.playground.components.logs.pretty_print_data.call(null,m))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null)));

var G__2789 = (i__2783 + (1));
i__2783 = G__2789;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__2784),pluto$playground$components$logs$table_$_iter__2781(cljs.core.chunk_rest(s__2782__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__2784),null);
}
} else {
var map__2787 = cljs.core.first(s__2782__$2);
var map__2787__$1 = (((((!((map__2787 == null))))?(((((map__2787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2787):map__2787);
var m = map__2787__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2787__$1,cljs.core.cst$kw$id);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2787__$1,cljs.core.cst$kw$category);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2787__$1,cljs.core.cst$kw$type);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableRow,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,category], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,type], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,pluto.playground.components.logs.TableCell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.playground.components.logs.data_wrapper,(pluto.playground.components.logs.pretty_print_data.cljs$core$IFn$_invoke$arity$1 ? pluto.playground.components.logs.pretty_print_data.cljs$core$IFn$_invoke$arity$1(m) : pluto.playground.components.logs.pretty_print_data.call(null,m))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null)),pluto$playground$components$logs$table_$_iter__2781(cljs.core.rest(s__2782__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(v);
})()], null)], null)], null);
});
