// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.playground.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('pluto.core');
goog.require('pluto.playground.ipfs');
goog.require('pluto.storages');
goog.require('clojure.string');
pluto.playground.fx.get_source_from_sources = (function pluto$playground$fx$get_source_from_sources(sources){
var meta = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__1231){
var vec__1232 = p__1231;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1232,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1232,(1),null);
return (clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(key,"meta") === (0));
}),sources);
var life = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (meta){
return (function (p__1235){
var vec__1236 = p__1235;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1236,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1236,(1),null);
return (clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(key,"lifecycle") === (0));
});})(meta))
,sources);
var events = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (meta,life){
return (function (p__1239){
var vec__1240 = p__1239;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1240,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1240,(1),null);
return (clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(key,"events/") === (0));
});})(meta,life))
,sources);
var views = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (meta,life,events){
return (function (p__1243){
var vec__1244 = p__1243;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1244,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1244,(1),null);
return (clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(key,"views/") === (0));
});})(meta,life,events))
,sources);
var hooks = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (meta,life,events,views){
return (function (p__1247){
var vec__1248 = p__1247;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1248,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1248,(1),null);
return (clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(key,"hooks/") === (0));
});})(meta,life,events,views))
,sources);
return ["{\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (meta,life,events,views,hooks){
return (function (p__1255){
var vec__1256 = p__1255;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1256,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1256,(1),null);
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(value,/\n/,"\n "))].join('');
});})(meta,life,events,views,hooks))
,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(meta,life,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([events,views,hooks], 0))))),"\n}"].join('');
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set,(function (db,p__1259){
var vec__1260 = p__1259;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1260,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1260,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1260,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k,v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_in,(function (db,p__1263){
var vec__1264 = p__1263;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1264,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1264,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1264,(2),null);
return cljs.core.assoc_in(db,path,v);
}));
pluto.playground.fx.update_extension_errors = (function pluto$playground$fx$update_extension_errors(p__1267,p__1268){
var map__1269 = p__1267;
var map__1269__$1 = (((((!((map__1269 == null))))?(((((map__1269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1269):map__1269);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1269__$1,cljs.core.cst$kw$db);
var vec__1270 = p__1268;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1270,(0),null);
var errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1270,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$errors,errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_errors,pluto.playground.fx.update_extension_errors);
pluto.playground.fx.clear_errors = (function pluto$playground$fx$clear_errors(p__1274,_){
var map__1275 = p__1274;
var map__1275__$1 = (((((!((map__1275 == null))))?(((((map__1275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1275):map__1275);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1275__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_clear_DASH_errors,pluto.playground.fx.clear_errors);
pluto.playground.fx.update_extension_parsed = (function pluto$playground$fx$update_extension_parsed(p__1277,p__1278){
var map__1279 = p__1277;
var map__1279__$1 = (((((!((map__1279 == null))))?(((((map__1279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1279):map__1279);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1279__$1,cljs.core.cst$kw$db);
var vec__1280 = p__1278;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1280,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1280,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$parsed,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,pluto.playground.fx.update_extension_parsed);
var G__1284_1294 = cljs.core.cst$kw$extension_SLASH_parse;
var G__1285_1295 = ((function (G__1284_1294){
return (function (p__1286){
var vec__1287 = p__1286;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1287,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1287,(1),null);
var map__1290 = pluto.core.parse(ctx,data);
var map__1290__$1 = (((((!((map__1290 == null))))?(((((map__1290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1290):map__1290);
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1290__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1290__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__1292 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1292) : re_frame.core.dispatch.call(null,G__1292));
} else {
var G__1293 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,data__$1], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1293) : re_frame.core.dispatch.call(null,G__1293));
}
});})(G__1284_1294))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1284_1294,G__1285_1295) : re_frame.core.reg_fx.call(null,G__1284_1294,G__1285_1295));
pluto.playground.fx.update_extension_data = (function pluto$playground$fx$update_extension_data(p__1296,p__1297){
var map__1298 = p__1296;
var map__1298__$1 = (((((!((map__1298 == null))))?(((((map__1298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1298):map__1298);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1298__$1,cljs.core.cst$kw$db);
var vec__1299 = p__1297;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1299,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1299,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1299,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$data,data),cljs.core.cst$kw$extension_SLASH_parse,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_data,pluto.playground.fx.update_extension_data);
var G__1303_1314 = cljs.core.cst$kw$extension_SLASH_read;
var G__1304_1315 = ((function (G__1303_1314){
return (function (p__1305){
var vec__1306 = p__1305;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1306,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1306,(1),null);
var G__1309_1316 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_clear_DASH_errors], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1309_1316) : re_frame.core.dispatch.call(null,G__1309_1316));

var map__1310 = pluto.core.read(source);
var map__1310__$1 = (((((!((map__1310 == null))))?(((((map__1310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1310):map__1310);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1310__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1310__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__1312 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1312) : re_frame.core.dispatch.call(null,G__1312));
} else {
var G__1313 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_data,ctx,data], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1313) : re_frame.core.dispatch.call(null,G__1313));
}
});})(G__1303_1314))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1303_1314,G__1304_1315) : re_frame.core.reg_fx.call(null,G__1303_1314,G__1304_1315));
pluto.playground.fx.update_extension_source = (function pluto$playground$fx$update_extension_source(p__1317,p__1318){
var map__1319 = p__1317;
var map__1319__$1 = (((((!((map__1319 == null))))?(((((map__1319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1319):map__1319);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1319__$1,cljs.core.cst$kw$db);
var vec__1320 = p__1318;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1320,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1320,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1320,(2),null);
if(cljs.core.truth_(cljs.core.cst$kw$simple_DASH_mode_QMARK_.cljs$core$IFn$_invoke$arity$1(db))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$simple_DASH_sources,cljs.core.cst$kw$simple_DASH_item.cljs$core$IFn$_invoke$arity$1(db)], null),data)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$source,data)], null);
}
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_source,pluto.playground.fx.update_extension_source);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_read,(function (p__1324,p__1325){
var map__1326 = p__1324;
var map__1326__$1 = (((((!((map__1326 == null))))?(((((map__1326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1326):map__1326);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1326__$1,cljs.core.cst$kw$db);
var vec__1327 = p__1325;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1327,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1327,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extension_SLASH_read,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$source)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_run,(function (p__1331,p__1332){
var map__1333 = p__1331;
var map__1333__$1 = (((((!((map__1333 == null))))?(((((map__1333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1333):map__1333);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1333__$1,cljs.core.cst$kw$db);
var vec__1334 = p__1332;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1334,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1334,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$simple_DASH_mode_QMARK_.cljs$core$IFn$_invoke$arity$1(db))){
var source = pluto.playground.fx.get_source_from_sources(cljs.core.cst$kw$simple_DASH_sources.cljs$core$IFn$_invoke$arity$1(db));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$source,source),cljs.core.cst$kw$extension_SLASH_read,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,source], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extension_SLASH_read,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$source)], null)], null);
}
}));
var G__1338_1344 = cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value;
var G__1339_1345 = ((function (G__1338_1344){
return (function (p__1340){
var vec__1341 = p__1340;
var cm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1341,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1341,(1),null);
if(cljs.core.truth_(source)){
return cm.setValue(source);
} else {
return null;
}
});})(G__1338_1344))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1338_1344,G__1339_1345) : re_frame.core.reg_fx.call(null,G__1338_1344,G__1339_1345));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_editor,(function (p__1346,p__1347){
var map__1348 = p__1346;
var map__1348__$1 = (((((!((map__1348 == null))))?(((((map__1348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1348):map__1348);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1348__$1,cljs.core.cst$kw$db);
var vec__1349 = p__1347;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1349,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1349,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code_DASH_mirror.cljs$core$IFn$_invoke$arity$1(db),data], null)], null);
}));
pluto.playground.fx.append_log = (function pluto$playground$fx$append_log(p__1353,p__1354){
var map__1355 = p__1353;
var map__1355__$1 = (((((!((map__1355 == null))))?(((((map__1355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1355):map__1355);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1355__$1,cljs.core.cst$kw$db);
var vec__1356 = p__1354;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1356,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1356,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$logs,cljs.core.conj,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_append_DASH_log,pluto.playground.fx.append_log);
pluto.playground.fx.switch_filter_logs = (function pluto$playground$fx$switch_filter_logs(p__1360,p__1361){
var map__1362 = p__1360;
var map__1362__$1 = (((((!((map__1362 == null))))?(((((map__1362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1362):map__1362);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1362__$1,cljs.core.cst$kw$db);
var vec__1363 = p__1361;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1363,(0),null);
var checked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1363,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$filtered_DASH_logs,checked)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_filter_DASH_logs,pluto.playground.fx.switch_filter_logs);
pluto.playground.fx.clear_logs = (function pluto$playground$fx$clear_logs(p__1367,_){
var map__1368 = p__1367;
var map__1368__$1 = (((((!((map__1368 == null))))?(((((map__1368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1368):map__1368);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1368__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$logs)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_clear_DASH_logs,pluto.playground.fx.clear_logs);
pluto.playground.fx.set_selected = (function pluto$playground$fx$set_selected(p__1370,p__1371){
var map__1372 = p__1370;
var map__1372__$1 = (((((!((map__1372 == null))))?(((((map__1372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1372):map__1372);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1372__$1,cljs.core.cst$kw$db);
var vec__1373 = p__1371;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1373,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1373,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selected,path)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_selected,pluto.playground.fx.set_selected);
pluto.playground.fx.switch_preview = (function pluto$playground$fx$switch_preview(p__1377,p__1378){
var map__1379 = p__1377;
var map__1379__$1 = (((((!((map__1379 == null))))?(((((map__1379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1379):map__1379);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1379__$1,cljs.core.cst$kw$db);
var vec__1380 = p__1378;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1380,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$preview,cljs.core.not)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_preview,pluto.playground.fx.switch_preview);
var G__1384_1386 = cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs;
var G__1385_1387 = ((function (G__1384_1386){
return (function (value){
return pluto.playground.ipfs.save(value);
});})(G__1384_1386))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1384_1386,G__1385_1387) : re_frame.core.reg_fx.call(null,G__1384_1386,G__1385_1387));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_publish,(function (p__1388,_){
var map__1389 = p__1388;
var map__1389__$1 = (((((!((map__1389 == null))))?(((((map__1389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1389):map__1389);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1389__$1,cljs.core.cst$kw$db);
if(cljs.core.truth_(cljs.core.cst$kw$simple_DASH_mode_QMARK_.cljs$core$IFn$_invoke$arity$1(db))){
var source = pluto.playground.fx.get_source_from_sources(cljs.core.cst$kw$simple_DASH_sources.cljs$core$IFn$_invoke$arity$1(db));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$publish,cljs.core.cst$kw$in_DASH_progress_QMARK_], null),true),cljs.core.cst$kw$source,source),cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs,source], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$publish,cljs.core.cst$kw$in_DASH_progress_QMARK_], null),true),cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs,cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db)], null);
}
}));
var G__1392_1395 = cljs.core.cst$kw$fetch_DASH_extension_DASH_fx;
var G__1393_1396 = ((function (G__1392_1395){
return (function (){
var hash = (new URL(document.location)).searchParams.get("hash");
var uri = (cljs.core.truth_(hash)?["ipfs@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''):"url@assets/extensions/command/");
return pluto.storages.fetch(uri,((function (hash,uri,G__1392_1395){
return (function (p1__1391_SHARP_){
var G__1394 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_editor,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__1391_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value,cljs.core.cst$kw$content], null))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1394) : re_frame.core.dispatch.call(null,G__1394));
});})(hash,uri,G__1392_1395))
);
});})(G__1392_1395))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1392_1395,G__1393_1396) : re_frame.core.reg_fx.call(null,G__1392_1395,G__1393_1396));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fetch_DASH_extension,(function (p__1397,_){
var map__1398 = p__1397;
var map__1398__$1 = (((((!((map__1398 == null))))?(((((map__1398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1398):map__1398);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1398__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fetch_DASH_extension_DASH_fx,null,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$store_SLASH_clear_DASH_all], null)], null);
}));
var G__1400_1402 = cljs.core.cst$kw$set_DASH_url_DASH_fx;
var G__1401_1403 = ((function (G__1400_1402){
return (function (hash){
return pluto.playground.ipfs.set_url(hash);
});})(G__1400_1402))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1400_1402,G__1401_1403) : re_frame.core.reg_fx.call(null,G__1400_1402,G__1401_1403));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$open_DASH_example,(function (p__1404,p__1405){
var map__1406 = p__1404;
var map__1406__$1 = (((((!((map__1406 == null))))?(((((map__1406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1406):map__1406);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1406__$1,cljs.core.cst$kw$db);
var vec__1407 = p__1405;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1407,(0),null);
var hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1407,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$simple_DASH_mode_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$examples,cljs.core.cst$kw$extensions_SLASH_properties,cljs.core.cst$kw$extension_DASH_selection,cljs.core.cst$kw$extensions_SLASH_store,cljs.core.cst$kw$extension_DASH_props], 0)),cljs.core.cst$kw$set_DASH_url_DASH_fx,hash,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fetch_DASH_extension], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_properties,(function (p__1411,p__1412){
var map__1413 = p__1411;
var map__1413__$1 = (((((!((map__1413 == null))))?(((((map__1413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1413):map__1413);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1413__$1,cljs.core.cst$kw$db);
var vec__1414 = p__1412;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1414,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1414,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1414,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_properties,id], null),m)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_app_DASH_db,(function (p__1418,p__1419){
var map__1420 = p__1418;
var map__1420__$1 = (((((!((map__1420 == null))))?(((((map__1420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1420):map__1420);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1420__$1,cljs.core.cst$kw$db);
var vec__1421 = p__1419;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1421,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1421,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_store,"Extension ID"], null),m)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_mode,(function (p__1425,p__1426){
var map__1427 = p__1425;
var map__1427__$1 = (((((!((map__1427 == null))))?(((((map__1427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1427):map__1427);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1427__$1,cljs.core.cst$kw$db);
var vec__1428 = p__1426;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1428,(0),null);
var simple_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1428,(1),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$simple_DASH_mode_QMARK_,simple_QMARK_)], null),(cljs.core.truth_(simple_QMARK_)?(function (){var map__1432 = pluto.core.read(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db));
var map__1432__$1 = (((((!((map__1432 == null))))?(((((map__1432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1432):map__1432);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1432__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1432__$1,cljs.core.cst$kw$errors);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([errors], 0));

if(cljs.core.truth_(errors)){
return null;
} else {
var simple_items = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__1432,map__1432__$1,data,errors,map__1427,map__1427__$1,db,vec__1428,_,simple_QMARK_){
return (function (p__1437){
var vec__1438 = p__1437;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1438,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1438,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1445_1449 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1446_1450 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1447_1451 = true;
var _STAR_print_fn_STAR__temp_val__1448_1452 = ((function (_STAR_print_newline_STAR__orig_val__1445_1449,_STAR_print_fn_STAR__orig_val__1446_1450,_STAR_print_newline_STAR__temp_val__1447_1451,sb__4661__auto__,vec__1438,key,value,map__1432,map__1432__$1,data,errors,map__1427,map__1427__$1,db,vec__1428,_,simple_QMARK_){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__1445_1449,_STAR_print_fn_STAR__orig_val__1446_1450,_STAR_print_newline_STAR__temp_val__1447_1451,sb__4661__auto__,vec__1438,key,value,map__1432,map__1432__$1,data,errors,map__1427,map__1427__$1,db,vec__1428,_,simple_QMARK_))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1447_1451;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1448_1452;

try{cljs.pprint.pprint(value);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1446_1450;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1445_1449;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})()]);
});})(map__1432,map__1432__$1,data,errors,map__1427,map__1427__$1,db,vec__1428,_,simple_QMARK_))
,data));
var vec__1434 = cljs.core.first(simple_items);
var first_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1434,(0),null);
var first_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1434,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$simple_DASH_mode_QMARK_,simple_QMARK_),cljs.core.cst$kw$simple_DASH_sources,simple_items),cljs.core.cst$kw$simple_DASH_item,first_key),cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code_DASH_mirror.cljs$core$IFn$_invoke$arity$1(db),first_value], null)], null);
}
})():(function (){var source = pluto.playground.fx.get_source_from_sources(cljs.core.cst$kw$simple_DASH_sources.cljs$core$IFn$_invoke$arity$1(db));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$source,source),cljs.core.cst$kw$simple_DASH_mode_QMARK_,simple_QMARK_),cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code_DASH_mirror.cljs$core$IFn$_invoke$arity$1(db),source], null)], null);
})())], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_select_DASH_simple_DASH_item,(function (p__1453,p__1454){
var map__1455 = p__1453;
var map__1455__$1 = (((((!((map__1455 == null))))?(((((map__1455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1455):map__1455);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1455__$1,cljs.core.cst$kw$db);
var vec__1456 = p__1454;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1456,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1456,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$simple_DASH_item,item),cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code_DASH_mirror.cljs$core$IFn$_invoke$arity$1(db),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$simple_DASH_sources,item], null))], null)], null);
}));
pluto.playground.fx.get_full_name = (function pluto$playground$fx$get_full_name(item_type,item_name){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__1461 = item_type;
switch (G__1461) {
case "views/chat":
return "views/";

break;
default:
return item_type;

}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(clojure.string.replace(clojure.string.trim(item_name),/ /,"-")))].join('');
});
pluto.playground.fx.get_new_source = (function pluto$playground$fx$get_new_source(item_type){
var G__1463 = item_type;
switch (G__1463) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1463)].join('')));

}
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_add_DASH_edn_DASH_item,(function (p__1465,_){
var map__1466 = p__1465;
var map__1466__$1 = (((((!((map__1466 == null))))?(((((map__1466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1466):map__1466);
var map__1467 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1466__$1,cljs.core.cst$kw$db);
var map__1467__$1 = (((((!((map__1467 == null))))?(((((map__1467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1467):map__1467);
var db = map__1467__$1;
var add_edn_item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1467__$1,cljs.core.cst$kw$add_DASH_edn_DASH_item);
var map__1470 = add_edn_item;
var map__1470__$1 = (((((!((map__1470 == null))))?(((((map__1470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1470):map__1470);
var item_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1470__$1,cljs.core.cst$kw$item_DASH_name);
var item_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1470__$1,cljs.core.cst$kw$item_DASH_type);
var full_name = pluto.playground.fx.get_full_name(item_type,item_name);
var new_source = pluto.playground.fx.get_new_source(item_type);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$add_DASH_edn_DASH_item),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$simple_DASH_sources,full_name], null),new_source),cljs.core.cst$kw$simple_DASH_item,full_name),cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code_DASH_mirror.cljs$core$IFn$_invoke$arity$1(db),new_source], null)], null);
}));
