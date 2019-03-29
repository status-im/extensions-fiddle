// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.playground.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('pluto.core');
goog.require('reagent.core');
goog.require('react_native_web.hooks');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set,(function (db,p__8100){
var vec__8101 = p__8100;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8101,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8101,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8101,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k,v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_in,(function (db,p__8104){
var vec__8105 = p__8104;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8105,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8105,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8105,(2),null);
return cljs.core.assoc_in(db,path,v);
}));
pluto.playground.fx.update_extension_parsed = (function pluto$playground$fx$update_extension_parsed(p__8108,p__8109){
var map__8110 = p__8108;
var map__8110__$1 = (((((!((map__8110 == null))))?(((((map__8110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8110):map__8110);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8110__$1,cljs.core.cst$kw$db);
var vec__8111 = p__8109;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8111,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8111,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$parsed,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,pluto.playground.fx.update_extension_parsed);
var G__8115_8126 = cljs.core.cst$kw$extension_SLASH_parse;
var G__8116_8127 = ((function (G__8115_8126){
return (function (p__8117){
var vec__8118 = p__8117;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8118,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8118,(1),null);
var map__8121 = pluto.core.parse(ctx,data);
var map__8121__$1 = (((((!((map__8121 == null))))?(((((map__8121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8121):map__8121);
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8121__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8121__$1,cljs.core.cst$kw$errors);
var G__8123_8128 = react_native_web.hooks.command_hook(cljs.core.first(cljs.core.cst$kw$hooks.cljs$core$IFn$_invoke$arity$1(data__$1)));
var G__8124_8129 = document.getElementById("extension");
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__8123_8128,G__8124_8129) : reagent.core.render_component.call(null,G__8123_8128,G__8124_8129));

var G__8125 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,data__$1], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__8125) : re_frame.core.dispatch.call(null,G__8125));
});})(G__8115_8126))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__8115_8126,G__8116_8127) : re_frame.core.reg_fx.call(null,G__8115_8126,G__8116_8127));
pluto.playground.fx.update_extension_data = (function pluto$playground$fx$update_extension_data(p__8130,p__8131){
var map__8132 = p__8130;
var map__8132__$1 = (((((!((map__8132 == null))))?(((((map__8132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8132):map__8132);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8132__$1,cljs.core.cst$kw$db);
var vec__8133 = p__8131;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8133,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8133,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8133,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$data,data),cljs.core.cst$kw$extension_SLASH_parse,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_data,pluto.playground.fx.update_extension_data);
var G__8137_8146 = cljs.core.cst$kw$extension_SLASH_read;
var G__8138_8147 = ((function (G__8137_8146){
return (function (p__8139){
var vec__8140 = p__8139;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8140,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8140,(1),null);
var map__8143 = pluto.core.read(source);
var map__8143__$1 = (((((!((map__8143 == null))))?(((((map__8143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8143):map__8143);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8143__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8143__$1,cljs.core.cst$kw$errors);
var G__8145 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_data,ctx,data], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__8145) : re_frame.core.dispatch.call(null,G__8145));
});})(G__8137_8146))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__8137_8146,G__8138_8147) : re_frame.core.reg_fx.call(null,G__8137_8146,G__8138_8147));
pluto.playground.fx.update_extension_source = (function pluto$playground$fx$update_extension_source(p__8148,p__8149){
var map__8150 = p__8148;
var map__8150__$1 = (((((!((map__8150 == null))))?(((((map__8150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8150):map__8150);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8150__$1,cljs.core.cst$kw$db);
var vec__8151 = p__8149;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8151,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8151,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8151,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$source,data),cljs.core.cst$kw$extension_SLASH_read,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_source,pluto.playground.fx.update_extension_source);
pluto.playground.fx.append_log = (function pluto$playground$fx$append_log(p__8155,p__8156){
var map__8157 = p__8155;
var map__8157__$1 = (((((!((map__8157 == null))))?(((((map__8157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8157):map__8157);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8157__$1,cljs.core.cst$kw$db);
var vec__8158 = p__8156;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8158,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8158,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$traces,cljs.core.conj,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_append_DASH_log,pluto.playground.fx.append_log);
pluto.playground.fx.set_selected = (function pluto$playground$fx$set_selected(p__8162,p__8163){
var map__8164 = p__8162;
var map__8164__$1 = (((((!((map__8164 == null))))?(((((map__8164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8164):map__8164);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8164__$1,cljs.core.cst$kw$db);
var vec__8165 = p__8163;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8165,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8165,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selected,path)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_selected,pluto.playground.fx.set_selected);
pluto.playground.fx.switch_preview = (function pluto$playground$fx$switch_preview(p__8169,p__8170){
var map__8171 = p__8169;
var map__8171__$1 = (((((!((map__8171 == null))))?(((((map__8171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8171):map__8171);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8171__$1,cljs.core.cst$kw$db);
var vec__8172 = p__8170;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8172,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$preview,cljs.core.not)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_preview,pluto.playground.fx.switch_preview);
