// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.playground.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('pluto.core');
goog.require('pluto.playground.ipfs');
goog.require('pluto.storages');
goog.require('clojure.string');
goog.require('cljs.pprint');
pluto.playground.fx.get_source_from_sources = (function pluto$playground$fx$get_source_from_sources(sources){
var meta = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__5093){
var vec__5094 = p__5093;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5094,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5094,(1),null);
return (clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(key,"meta") === (0));
}),sources);
var life = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (meta){
return (function (p__5097){
var vec__5098 = p__5097;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5098,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5098,(1),null);
return (clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(key,"lifecycle") === (0));
});})(meta))
,sources);
var events = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (meta,life){
return (function (p__5101){
var vec__5102 = p__5101;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5102,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5102,(1),null);
return (clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(key,"events/") === (0));
});})(meta,life))
,sources);
var views = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (meta,life,events){
return (function (p__5105){
var vec__5106 = p__5105;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5106,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5106,(1),null);
return (clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(key,"views/") === (0));
});})(meta,life,events))
,sources);
var hooks = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (meta,life,events,views){
return (function (p__5109){
var vec__5110 = p__5109;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5110,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5110,(1),null);
return (clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(key,"hooks/") === (0));
});})(meta,life,events,views))
,sources);
return ["{\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (meta,life,events,views,hooks){
return (function (p__5117){
var vec__5118 = p__5117;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5118,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5118,(1),null);
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(value,/\n/,"\n "))].join('');
});})(meta,life,events,views,hooks))
,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(meta,life,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([events,views,hooks], 0))))),"\n}"].join('');
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set,(function (db,p__5121){
var vec__5122 = p__5121;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5122,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5122,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5122,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k,v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_in,(function (db,p__5125){
var vec__5126 = p__5125;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5126,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5126,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5126,(2),null);
return cljs.core.assoc_in(db,path,v);
}));
pluto.playground.fx.update_extension_errors = (function pluto$playground$fx$update_extension_errors(p__5129,p__5130){
var map__5131 = p__5129;
var map__5131__$1 = (((((!((map__5131 == null))))?(((((map__5131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5131):map__5131);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5131__$1,cljs.core.cst$kw$db);
var vec__5132 = p__5130;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5132,(0),null);
var errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5132,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$errors,errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_errors,pluto.playground.fx.update_extension_errors);
pluto.playground.fx.clear_errors = (function pluto$playground$fx$clear_errors(p__5136,_){
var map__5137 = p__5136;
var map__5137__$1 = (((((!((map__5137 == null))))?(((((map__5137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5137):map__5137);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5137__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_clear_DASH_errors,pluto.playground.fx.clear_errors);
pluto.playground.fx.update_extension_parsed = (function pluto$playground$fx$update_extension_parsed(p__5139,p__5140){
var map__5141 = p__5139;
var map__5141__$1 = (((((!((map__5141 == null))))?(((((map__5141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5141):map__5141);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5141__$1,cljs.core.cst$kw$db);
var vec__5142 = p__5140;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5142,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5142,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$parsed,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,pluto.playground.fx.update_extension_parsed);
var G__5146_5156 = cljs.core.cst$kw$extension_SLASH_parse;
var G__5147_5157 = ((function (G__5146_5156){
return (function (p__5148){
var vec__5149 = p__5148;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5149,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5149,(1),null);
var map__5152 = pluto.core.parse(ctx,data);
var map__5152__$1 = (((((!((map__5152 == null))))?(((((map__5152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5152):map__5152);
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5152__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5152__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__5154 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__5154) : re_frame.core.dispatch.call(null,G__5154));
} else {
var G__5155 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,data__$1], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__5155) : re_frame.core.dispatch.call(null,G__5155));
}
});})(G__5146_5156))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__5146_5156,G__5147_5157) : re_frame.core.reg_fx.call(null,G__5146_5156,G__5147_5157));
pluto.playground.fx.update_extension_data = (function pluto$playground$fx$update_extension_data(p__5158,p__5159){
var map__5160 = p__5158;
var map__5160__$1 = (((((!((map__5160 == null))))?(((((map__5160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5160):map__5160);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5160__$1,cljs.core.cst$kw$db);
var vec__5161 = p__5159;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5161,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5161,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5161,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$data,data),cljs.core.cst$kw$extension_SLASH_parse,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_data,pluto.playground.fx.update_extension_data);
var G__5165_5176 = cljs.core.cst$kw$extension_SLASH_read;
var G__5166_5177 = ((function (G__5165_5176){
return (function (p__5167){
var vec__5168 = p__5167;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5168,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5168,(1),null);
var G__5171_5178 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_clear_DASH_errors], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__5171_5178) : re_frame.core.dispatch.call(null,G__5171_5178));

var map__5172 = pluto.core.read(source);
var map__5172__$1 = (((((!((map__5172 == null))))?(((((map__5172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5172):map__5172);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5172__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5172__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__5174 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__5174) : re_frame.core.dispatch.call(null,G__5174));
} else {
var G__5175 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_data,ctx,data], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__5175) : re_frame.core.dispatch.call(null,G__5175));
}
});})(G__5165_5176))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__5165_5176,G__5166_5177) : re_frame.core.reg_fx.call(null,G__5165_5176,G__5166_5177));
pluto.playground.fx.update_extension_source = (function pluto$playground$fx$update_extension_source(p__5179,p__5180){
var map__5181 = p__5179;
var map__5181__$1 = (((((!((map__5181 == null))))?(((((map__5181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5181):map__5181);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5181__$1,cljs.core.cst$kw$db);
var vec__5182 = p__5180;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5182,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5182,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5182,(2),null);
if(cljs.core.truth_(cljs.core.cst$kw$simple_DASH_mode_QMARK_.cljs$core$IFn$_invoke$arity$1(db))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$simple_DASH_sources,cljs.core.cst$kw$simple_DASH_item.cljs$core$IFn$_invoke$arity$1(db)], null),data)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$source,data)], null);
}
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_source,pluto.playground.fx.update_extension_source);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_read,(function (p__5186,p__5187){
var map__5188 = p__5186;
var map__5188__$1 = (((((!((map__5188 == null))))?(((((map__5188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5188):map__5188);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5188__$1,cljs.core.cst$kw$db);
var vec__5189 = p__5187;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5189,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5189,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extension_SLASH_read,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$source)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_run,(function (p__5193,p__5194){
var map__5195 = p__5193;
var map__5195__$1 = (((((!((map__5195 == null))))?(((((map__5195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5195):map__5195);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5195__$1,cljs.core.cst$kw$db);
var vec__5196 = p__5194;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5196,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5196,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$simple_DASH_mode_QMARK_.cljs$core$IFn$_invoke$arity$1(db))){
var source = pluto.playground.fx.get_source_from_sources(cljs.core.cst$kw$simple_DASH_sources.cljs$core$IFn$_invoke$arity$1(db));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$source,source),cljs.core.cst$kw$extension_SLASH_read,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,source], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extension_SLASH_read,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$source)], null)], null);
}
}));
var G__5200_5206 = cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value;
var G__5201_5207 = ((function (G__5200_5206){
return (function (p__5202){
var vec__5203 = p__5202;
var cm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5203,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5203,(1),null);
if(cljs.core.truth_(source)){
return cm.setValue(source);
} else {
return null;
}
});})(G__5200_5206))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__5200_5206,G__5201_5207) : re_frame.core.reg_fx.call(null,G__5200_5206,G__5201_5207));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_editor,(function (p__5208,p__5209){
var map__5210 = p__5208;
var map__5210__$1 = (((((!((map__5210 == null))))?(((((map__5210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5210):map__5210);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5210__$1,cljs.core.cst$kw$db);
var vec__5211 = p__5209;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5211,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5211,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code_DASH_mirror.cljs$core$IFn$_invoke$arity$1(db),data], null)], null);
}));
pluto.playground.fx.append_log = (function pluto$playground$fx$append_log(p__5215,p__5216){
var map__5217 = p__5215;
var map__5217__$1 = (((((!((map__5217 == null))))?(((((map__5217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5217):map__5217);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5217__$1,cljs.core.cst$kw$db);
var vec__5218 = p__5216;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5218,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5218,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$logs,cljs.core.conj,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_append_DASH_log,pluto.playground.fx.append_log);
pluto.playground.fx.switch_filter_logs = (function pluto$playground$fx$switch_filter_logs(p__5222,p__5223){
var map__5224 = p__5222;
var map__5224__$1 = (((((!((map__5224 == null))))?(((((map__5224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5224):map__5224);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5224__$1,cljs.core.cst$kw$db);
var vec__5225 = p__5223;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5225,(0),null);
var checked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5225,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$filtered_DASH_logs,checked)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_filter_DASH_logs,pluto.playground.fx.switch_filter_logs);
pluto.playground.fx.clear_logs = (function pluto$playground$fx$clear_logs(p__5229,_){
var map__5230 = p__5229;
var map__5230__$1 = (((((!((map__5230 == null))))?(((((map__5230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5230):map__5230);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5230__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$logs)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_clear_DASH_logs,pluto.playground.fx.clear_logs);
pluto.playground.fx.set_selected = (function pluto$playground$fx$set_selected(p__5232,p__5233){
var map__5234 = p__5232;
var map__5234__$1 = (((((!((map__5234 == null))))?(((((map__5234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5234):map__5234);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5234__$1,cljs.core.cst$kw$db);
var vec__5235 = p__5233;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5235,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5235,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selected,path)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_selected,pluto.playground.fx.set_selected);
pluto.playground.fx.switch_preview = (function pluto$playground$fx$switch_preview(p__5239,p__5240){
var map__5241 = p__5239;
var map__5241__$1 = (((((!((map__5241 == null))))?(((((map__5241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5241):map__5241);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5241__$1,cljs.core.cst$kw$db);
var vec__5242 = p__5240;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5242,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$preview,cljs.core.not)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_preview,pluto.playground.fx.switch_preview);
var G__5246_5248 = cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs;
var G__5247_5249 = ((function (G__5246_5248){
return (function (value){
return pluto.playground.ipfs.save(value);
});})(G__5246_5248))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__5246_5248,G__5247_5249) : re_frame.core.reg_fx.call(null,G__5246_5248,G__5247_5249));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_publish,(function (p__5250,_){
var map__5251 = p__5250;
var map__5251__$1 = (((((!((map__5251 == null))))?(((((map__5251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5251):map__5251);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5251__$1,cljs.core.cst$kw$db);
if(cljs.core.truth_(cljs.core.cst$kw$simple_DASH_mode_QMARK_.cljs$core$IFn$_invoke$arity$1(db))){
var source = pluto.playground.fx.get_source_from_sources(cljs.core.cst$kw$simple_DASH_sources.cljs$core$IFn$_invoke$arity$1(db));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$publish,cljs.core.cst$kw$in_DASH_progress_QMARK_], null),true),cljs.core.cst$kw$source,source),cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs,source], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$publish,cljs.core.cst$kw$in_DASH_progress_QMARK_], null),true),cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs,cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db)], null);
}
}));
var G__5254_5257 = cljs.core.cst$kw$fetch_DASH_extension_DASH_fx;
var G__5255_5258 = ((function (G__5254_5257){
return (function (){
var hash = (new URL(document.location)).searchParams.get("hash");
var uri = (cljs.core.truth_(hash)?["ipfs@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''):"url@assets/extensions/command/");
return pluto.storages.fetch(uri,((function (hash,uri,G__5254_5257){
return (function (p1__5253_SHARP_){
var G__5256 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_editor,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__5253_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value,cljs.core.cst$kw$content], null))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__5256) : re_frame.core.dispatch.call(null,G__5256));
});})(hash,uri,G__5254_5257))
);
});})(G__5254_5257))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__5254_5257,G__5255_5258) : re_frame.core.reg_fx.call(null,G__5254_5257,G__5255_5258));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fetch_DASH_extension,(function (p__5259,_){
var map__5260 = p__5259;
var map__5260__$1 = (((((!((map__5260 == null))))?(((((map__5260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5260):map__5260);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5260__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fetch_DASH_extension_DASH_fx,null,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$store_SLASH_clear_DASH_all], null)], null);
}));
var G__5262_5264 = cljs.core.cst$kw$set_DASH_url_DASH_fx;
var G__5263_5265 = ((function (G__5262_5264){
return (function (hash){
return pluto.playground.ipfs.set_url(hash);
});})(G__5262_5264))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__5262_5264,G__5263_5265) : re_frame.core.reg_fx.call(null,G__5262_5264,G__5263_5265));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$open_DASH_example,(function (p__5266,p__5267){
var map__5268 = p__5266;
var map__5268__$1 = (((((!((map__5268 == null))))?(((((map__5268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5268):map__5268);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5268__$1,cljs.core.cst$kw$db);
var vec__5269 = p__5267;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5269,(0),null);
var hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5269,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$simple_DASH_mode_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$examples,cljs.core.cst$kw$extensions_SLASH_properties,cljs.core.cst$kw$extension_DASH_selection,cljs.core.cst$kw$extensions_SLASH_store,cljs.core.cst$kw$extension_DASH_props], 0)),cljs.core.cst$kw$set_DASH_url_DASH_fx,hash,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fetch_DASH_extension], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_properties,(function (p__5273,p__5274){
var map__5275 = p__5273;
var map__5275__$1 = (((((!((map__5275 == null))))?(((((map__5275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5275):map__5275);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5275__$1,cljs.core.cst$kw$db);
var vec__5276 = p__5274;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5276,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5276,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5276,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_properties,id], null),m)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_app_DASH_db,(function (p__5280,p__5281){
var map__5282 = p__5280;
var map__5282__$1 = (((((!((map__5282 == null))))?(((((map__5282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5282):map__5282);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5282__$1,cljs.core.cst$kw$db);
var vec__5283 = p__5281;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5283,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5283,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_store,"Extension ID"], null),m)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_mode,(function (p__5287,p__5288){
var map__5289 = p__5287;
var map__5289__$1 = (((((!((map__5289 == null))))?(((((map__5289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5289):map__5289);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5289__$1,cljs.core.cst$kw$db);
var vec__5290 = p__5288;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5290,(0),null);
var simple_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5290,(1),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$simple_DASH_mode_QMARK_,simple_QMARK_)], null),(cljs.core.truth_(simple_QMARK_)?(function (){var map__5294 = pluto.core.read(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db));
var map__5294__$1 = (((((!((map__5294 == null))))?(((((map__5294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5294):map__5294);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5294__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5294__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
return null;
} else {
var simple_items = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__5294,map__5294__$1,data,errors,map__5289,map__5289__$1,db,vec__5290,_,simple_QMARK_){
return (function (p__5299){
var vec__5300 = p__5299;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5300,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5300,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__5307_5311 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__5308_5312 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__5309_5313 = true;
var _STAR_print_fn_STAR__temp_val__5310_5314 = ((function (_STAR_print_newline_STAR__orig_val__5307_5311,_STAR_print_fn_STAR__orig_val__5308_5312,_STAR_print_newline_STAR__temp_val__5309_5313,sb__4661__auto__,vec__5300,key,value,map__5294,map__5294__$1,data,errors,map__5289,map__5289__$1,db,vec__5290,_,simple_QMARK_){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__5307_5311,_STAR_print_fn_STAR__orig_val__5308_5312,_STAR_print_newline_STAR__temp_val__5309_5313,sb__4661__auto__,vec__5300,key,value,map__5294,map__5294__$1,data,errors,map__5289,map__5289__$1,db,vec__5290,_,simple_QMARK_))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__5309_5313;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__5310_5314;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(value);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__5308_5312;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__5307_5311;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})()]);
});})(map__5294,map__5294__$1,data,errors,map__5289,map__5289__$1,db,vec__5290,_,simple_QMARK_))
,data));
var vec__5296 = cljs.core.first(simple_items);
var first_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5296,(0),null);
var first_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5296,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$simple_DASH_mode_QMARK_,simple_QMARK_),cljs.core.cst$kw$simple_DASH_sources,simple_items),cljs.core.cst$kw$simple_DASH_item,first_key),cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code_DASH_mirror.cljs$core$IFn$_invoke$arity$1(db),first_value], null)], null);
}
})():(function (){var source = pluto.playground.fx.get_source_from_sources(cljs.core.cst$kw$simple_DASH_sources.cljs$core$IFn$_invoke$arity$1(db));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$source,source),cljs.core.cst$kw$simple_DASH_mode_QMARK_,simple_QMARK_),cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code_DASH_mirror.cljs$core$IFn$_invoke$arity$1(db),source], null)], null);
})())], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_select_DASH_simple_DASH_item,(function (p__5315,p__5316){
var map__5317 = p__5315;
var map__5317__$1 = (((((!((map__5317 == null))))?(((((map__5317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5317):map__5317);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5317__$1,cljs.core.cst$kw$db);
var vec__5318 = p__5316;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5318,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5318,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$simple_DASH_item,item),cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code_DASH_mirror.cljs$core$IFn$_invoke$arity$1(db),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$simple_DASH_sources,item], null))], null)], null);
}));
pluto.playground.fx.get_full_name = (function pluto$playground$fx$get_full_name(item_type,item_name){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__5323 = item_type;
switch (G__5323) {
case "views/chat":
return "views/";

break;
default:
return item_type;

}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(clojure.string.replace(clojure.string.trim(item_name),/ /,"-")))].join('');
});
pluto.playground.fx.get_new_source = (function pluto$playground$fx$get_new_source(item_type){
var G__5325 = item_type;
switch (G__5325) {
case "views/":
return "[view]";

break;
case "views/chat":
return "(let [{{{id :id} :params} :content} properties] \n [view \n [text id]])";

break;
case "events/":
return "[]";

break;
case "hooks/chat.command.":
return "{:description   \"\"\n :scope         #{:personal-chats :public-chats}\n :preview       [preview]\n :short-preview [short-preview]\n :parameters    [{:id          :id\n                  :type        :text\n                  :placeholder \"My placeholder\"\n                  :suggestions [suggestions-view]}]}";

break;
case "hooks/wallet.settings.":
return "{:label   \"\"\n :view    [my-view]}";

break;
case "hooks/profile.settings.":
return "{:label   \"\"\n :view    [my-view]}";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__5325)].join('')));

}
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_add_DASH_edn_DASH_item,(function (p__5327,_){
var map__5328 = p__5327;
var map__5328__$1 = (((((!((map__5328 == null))))?(((((map__5328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5328):map__5328);
var map__5329 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5328__$1,cljs.core.cst$kw$db);
var map__5329__$1 = (((((!((map__5329 == null))))?(((((map__5329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5329):map__5329);
var db = map__5329__$1;
var add_edn_item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5329__$1,cljs.core.cst$kw$add_DASH_edn_DASH_item);
var map__5332 = add_edn_item;
var map__5332__$1 = (((((!((map__5332 == null))))?(((((map__5332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5332):map__5332);
var item_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5332__$1,cljs.core.cst$kw$item_DASH_name);
var item_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5332__$1,cljs.core.cst$kw$item_DASH_type);
var full_name = pluto.playground.fx.get_full_name(item_type,item_name);
var new_source = pluto.playground.fx.get_new_source(item_type);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$add_DASH_edn_DASH_item),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$simple_DASH_sources,full_name], null),new_source),cljs.core.cst$kw$simple_DASH_item,full_name),cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code_DASH_mirror.cljs$core$IFn$_invoke$arity$1(db),new_source], null)], null);
}));
