// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.playground.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('pluto.core');
goog.require('reagent.core');
goog.require('react_native_web.hooks');
goog.require('pluto.playground.ipfs');
goog.require('pluto.storages');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set,(function (db,p__8126){
var vec__8127 = p__8126;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8127,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8127,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8127,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k,v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_in,(function (db,p__8130){
var vec__8131 = p__8130;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8131,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8131,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8131,(2),null);
return cljs.core.assoc_in(db,path,v);
}));
pluto.playground.fx.update_extension_errors = (function pluto$playground$fx$update_extension_errors(p__8134,p__8135){
var map__8136 = p__8134;
var map__8136__$1 = (((((!((map__8136 == null))))?(((((map__8136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8136):map__8136);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8136__$1,cljs.core.cst$kw$db);
var vec__8137 = p__8135;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8137,(0),null);
var errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8137,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$errors,errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_errors,pluto.playground.fx.update_extension_errors);
pluto.playground.fx.update_extension_parsed = (function pluto$playground$fx$update_extension_parsed(p__8141,p__8142){
var map__8143 = p__8141;
var map__8143__$1 = (((((!((map__8143 == null))))?(((((map__8143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8143):map__8143);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8143__$1,cljs.core.cst$kw$db);
var vec__8144 = p__8142;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8144,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8144,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$parsed,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,pluto.playground.fx.update_extension_parsed);
var G__8148_8160 = cljs.core.cst$kw$extension_SLASH_parse;
var G__8149_8161 = ((function (G__8148_8160){
return (function (p__8150){
var vec__8151 = p__8150;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8151,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8151,(1),null);
var map__8154 = pluto.core.parse(ctx,data);
var map__8154__$1 = (((((!((map__8154 == null))))?(((((map__8154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8154):map__8154);
var m = map__8154__$1;
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8154__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8154__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__8156 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__8156) : re_frame.core.dispatch.call(null,G__8156));
} else {
var G__8157_8162 = react_native_web.hooks.hook_in(cljs.core.first(cljs.core.cst$kw$hooks.cljs$core$IFn$_invoke$arity$1(data__$1)));
var G__8158_8163 = document.getElementById("extension");
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__8157_8162,G__8158_8163) : reagent.core.render_component.call(null,G__8157_8162,G__8158_8163));

var G__8159 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,data__$1], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__8159) : re_frame.core.dispatch.call(null,G__8159));
}
});})(G__8148_8160))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__8148_8160,G__8149_8161) : re_frame.core.reg_fx.call(null,G__8148_8160,G__8149_8161));
pluto.playground.fx.update_extension_data = (function pluto$playground$fx$update_extension_data(p__8164,p__8165){
var map__8166 = p__8164;
var map__8166__$1 = (((((!((map__8166 == null))))?(((((map__8166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8166):map__8166);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8166__$1,cljs.core.cst$kw$db);
var vec__8167 = p__8165;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8167,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8167,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8167,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$data,data),cljs.core.cst$kw$extension_SLASH_parse,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_data,pluto.playground.fx.update_extension_data);
var G__8171_8181 = cljs.core.cst$kw$extension_SLASH_read;
var G__8172_8182 = ((function (G__8171_8181){
return (function (p__8173){
var vec__8174 = p__8173;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8174,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8174,(1),null);
var map__8177 = pluto.core.read(source);
var map__8177__$1 = (((((!((map__8177 == null))))?(((((map__8177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8177):map__8177);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8177__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8177__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__8179 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__8179) : re_frame.core.dispatch.call(null,G__8179));
} else {
var G__8180 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_data,ctx,data], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__8180) : re_frame.core.dispatch.call(null,G__8180));
}
});})(G__8171_8181))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__8171_8181,G__8172_8182) : re_frame.core.reg_fx.call(null,G__8171_8181,G__8172_8182));
pluto.playground.fx.update_extension_source = (function pluto$playground$fx$update_extension_source(p__8183,p__8184){
var map__8185 = p__8183;
var map__8185__$1 = (((((!((map__8185 == null))))?(((((map__8185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8185):map__8185);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8185__$1,cljs.core.cst$kw$db);
var vec__8186 = p__8184;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8186,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8186,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8186,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$source,data),cljs.core.cst$kw$extension_SLASH_read,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_source,pluto.playground.fx.update_extension_source);
var G__8190_8196 = cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value;
var G__8191_8197 = ((function (G__8190_8196){
return (function (p__8192){
var vec__8193 = p__8192;
var cm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8193,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8193,(1),null);
if(cljs.core.truth_((function (){var and__4120__auto__ = cm;
if(cljs.core.truth_(and__4120__auto__)){
return source;
} else {
return and__4120__auto__;
}
})())){
return cm.setValue(source);
} else {
return null;
}
});})(G__8190_8196))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__8190_8196,G__8191_8197) : re_frame.core.reg_fx.call(null,G__8190_8196,G__8191_8197));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_editor,(function (p__8198,p__8199){
var map__8200 = p__8198;
var map__8200__$1 = (((((!((map__8200 == null))))?(((((map__8200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8200):map__8200);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8200__$1,cljs.core.cst$kw$db);
var vec__8201 = p__8199;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8201,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8201,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code_DASH_mirror.cljs$core$IFn$_invoke$arity$1(db),data], null)], null);
}));
pluto.playground.fx.append_log = (function pluto$playground$fx$append_log(p__8205,p__8206){
var map__8207 = p__8205;
var map__8207__$1 = (((((!((map__8207 == null))))?(((((map__8207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8207):map__8207);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8207__$1,cljs.core.cst$kw$db);
var vec__8208 = p__8206;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8208,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8208,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$logs,cljs.core.conj,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_append_DASH_log,pluto.playground.fx.append_log);
pluto.playground.fx.set_selected = (function pluto$playground$fx$set_selected(p__8212,p__8213){
var map__8214 = p__8212;
var map__8214__$1 = (((((!((map__8214 == null))))?(((((map__8214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8214):map__8214);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8214__$1,cljs.core.cst$kw$db);
var vec__8215 = p__8213;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8215,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8215,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selected,path)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_selected,pluto.playground.fx.set_selected);
pluto.playground.fx.switch_preview = (function pluto$playground$fx$switch_preview(p__8219,p__8220){
var map__8221 = p__8219;
var map__8221__$1 = (((((!((map__8221 == null))))?(((((map__8221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8221):map__8221);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8221__$1,cljs.core.cst$kw$db);
var vec__8222 = p__8220;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8222,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$preview,cljs.core.not)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_preview,pluto.playground.fx.switch_preview);
var G__8226_8228 = cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs;
var G__8227_8229 = ((function (G__8226_8228){
return (function (value){
return pluto.playground.ipfs.save(value);
});})(G__8226_8228))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__8226_8228,G__8227_8229) : re_frame.core.reg_fx.call(null,G__8226_8228,G__8227_8229));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_publish,(function (p__8230,_){
var map__8231 = p__8230;
var map__8231__$1 = (((((!((map__8231 == null))))?(((((map__8231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8231):map__8231);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8231__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$publish,cljs.core.cst$kw$in_DASH_progress_QMARK_], null),true),cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs,cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db)], null);
}));
var G__8234_8237 = cljs.core.cst$kw$fetch_DASH_extension_DASH_fx;
var G__8235_8238 = ((function (G__8234_8237){
return (function (){
var hash = (new URL(document.location)).searchParams.get("hash");
var uri = (cljs.core.truth_(hash)?["ipfs@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''):"url@assets/extensions/command/");
return pluto.storages.fetch(uri,((function (hash,uri,G__8234_8237){
return (function (p1__8233_SHARP_){
var G__8236 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_editor,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__8233_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value,cljs.core.cst$kw$content], null))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__8236) : re_frame.core.dispatch.call(null,G__8236));
});})(hash,uri,G__8234_8237))
);
});})(G__8234_8237))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__8234_8237,G__8235_8238) : re_frame.core.reg_fx.call(null,G__8234_8237,G__8235_8238));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fetch_DASH_extension,(function (p__8239,_){
var map__8240 = p__8239;
var map__8240__$1 = (((((!((map__8240 == null))))?(((((map__8240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8240):map__8240);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8240__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fetch_DASH_extension_DASH_fx,null], null);
}));
