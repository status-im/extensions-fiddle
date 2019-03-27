// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.playground.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('pluto.core');
goog.require('reagent.core');
goog.require('react_native_web.hooks');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set,(function (db,p__8091){
var vec__8092 = p__8091;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8092,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8092,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8092,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k,v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_in,(function (db,p__8095){
var vec__8096 = p__8095;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8096,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8096,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8096,(2),null);
return cljs.core.assoc_in(db,path,v);
}));
pluto.playground.fx.update_extension_parsed = (function pluto$playground$fx$update_extension_parsed(p__8099,p__8100){
var map__8101 = p__8099;
var map__8101__$1 = (((((!((map__8101 == null))))?(((((map__8101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8101):map__8101);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8101__$1,cljs.core.cst$kw$db);
var vec__8102 = p__8100;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8102,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8102,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$parsed,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,pluto.playground.fx.update_extension_parsed);
var G__8106_8117 = cljs.core.cst$kw$extension_SLASH_parse;
var G__8107_8118 = ((function (G__8106_8117){
return (function (p__8108){
var vec__8109 = p__8108;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8109,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8109,(1),null);
var map__8112 = pluto.core.parse(ctx,data);
var map__8112__$1 = (((((!((map__8112 == null))))?(((((map__8112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8112):map__8112);
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8112__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8112__$1,cljs.core.cst$kw$errors);
var G__8114_8119 = react_native_web.hooks.command_hook(cljs.core.first(cljs.core.cst$kw$hooks.cljs$core$IFn$_invoke$arity$1(data__$1)));
var G__8115_8120 = document.getElementById("extension");
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__8114_8119,G__8115_8120) : reagent.core.render_component.call(null,G__8114_8119,G__8115_8120));

var G__8116 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,data__$1], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__8116) : re_frame.core.dispatch.call(null,G__8116));
});})(G__8106_8117))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__8106_8117,G__8107_8118) : re_frame.core.reg_fx.call(null,G__8106_8117,G__8107_8118));
pluto.playground.fx.update_extension_data = (function pluto$playground$fx$update_extension_data(p__8121,p__8122){
var map__8123 = p__8121;
var map__8123__$1 = (((((!((map__8123 == null))))?(((((map__8123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8123):map__8123);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8123__$1,cljs.core.cst$kw$db);
var vec__8124 = p__8122;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8124,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8124,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8124,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$data,data),cljs.core.cst$kw$extension_SLASH_parse,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_data,pluto.playground.fx.update_extension_data);
var G__8128_8137 = cljs.core.cst$kw$extension_SLASH_read;
var G__8129_8138 = ((function (G__8128_8137){
return (function (p__8130){
var vec__8131 = p__8130;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8131,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8131,(1),null);
var map__8134 = pluto.core.read(source);
var map__8134__$1 = (((((!((map__8134 == null))))?(((((map__8134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8134):map__8134);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8134__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8134__$1,cljs.core.cst$kw$errors);
var G__8136 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_data,ctx,data], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__8136) : re_frame.core.dispatch.call(null,G__8136));
});})(G__8128_8137))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__8128_8137,G__8129_8138) : re_frame.core.reg_fx.call(null,G__8128_8137,G__8129_8138));
pluto.playground.fx.update_extension_source = (function pluto$playground$fx$update_extension_source(p__8139,p__8140){
var map__8141 = p__8139;
var map__8141__$1 = (((((!((map__8141 == null))))?(((((map__8141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8141):map__8141);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8141__$1,cljs.core.cst$kw$db);
var vec__8142 = p__8140;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8142,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8142,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8142,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$source,data),cljs.core.cst$kw$extension_SLASH_read,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_source,pluto.playground.fx.update_extension_source);
pluto.playground.fx.append_log = (function pluto$playground$fx$append_log(p__8146,p__8147){
var map__8148 = p__8146;
var map__8148__$1 = (((((!((map__8148 == null))))?(((((map__8148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8148):map__8148);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8148__$1,cljs.core.cst$kw$db);
var vec__8149 = p__8147;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8149,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8149,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$traces,cljs.core.conj,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_append_DASH_log,pluto.playground.fx.append_log);
pluto.playground.fx.set_selected = (function pluto$playground$fx$set_selected(p__8153,p__8154){
var map__8155 = p__8153;
var map__8155__$1 = (((((!((map__8155 == null))))?(((((map__8155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8155):map__8155);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8155__$1,cljs.core.cst$kw$db);
var vec__8156 = p__8154;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8156,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8156,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selected,path)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_selected,pluto.playground.fx.set_selected);
pluto.playground.fx.switch_preview = (function pluto$playground$fx$switch_preview(p__8160,p__8161){
var map__8162 = p__8160;
var map__8162__$1 = (((((!((map__8162 == null))))?(((((map__8162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8162):map__8162);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8162__$1,cljs.core.cst$kw$db);
var vec__8163 = p__8161;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8163,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$preview,cljs.core.not)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_preview,pluto.playground.fx.switch_preview);
