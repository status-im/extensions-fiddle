// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('status_im.abi_spec');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
status_im.abi_spec.right_pad = (function status_im$abi_spec$right_pad(x){
var len = cljs.core.count(x);
var to_pad = ((64) - cljs.core.mod(len,(64)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((64),to_pad)){
return x;
} else {
return Web3Utils.rightPad(x,(len + to_pad));
}
});
status_im.abi_spec.left_pad = (function status_im$abi_spec$left_pad(x){
var len = cljs.core.count(x);
var to_pad = ((64) - cljs.core.mod(len,(64)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((64),to_pad)){
return x;
} else {
return Web3Utils.leftPad(x,(len + to_pad));
}
});
status_im.abi_spec.to_two_complement = (function status_im$abi_spec$to_two_complement(x){
if(cljs.core.truth_(x)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(Web3Utils.toTwosComplement(x),(2));
} else {
return null;
}
});
status_im.abi_spec.from_utf8 = (function status_im$abi_spec$from_utf8(x){
if(cljs.core.truth_(x)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(Web3Utils.fromUtf8(x),(2));
} else {
return null;
}
});
status_im.abi_spec.bytes_to_hex = (function status_im$abi_spec$bytes_to_hex(x){
if(cljs.core.truth_(x)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(Web3Utils.bytesToHex(x),(2));
} else {
return null;
}
});
status_im.abi_spec.number_to_hex = (function status_im$abi_spec$number_to_hex(x){
if(cljs.core.truth_(x)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(Web3Utils.numberToHex(x),(2));
} else {
return null;
}
});
status_im.abi_spec.hex_to_utf8 = (function status_im$abi_spec$hex_to_utf8(x){
return Web3Utils.hexToUtf8(["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
});
status_im.abi_spec.hex_to_number = (function status_im$abi_spec$hex_to_number(x){
if(cljs.core.truth_(x)){
return toBigNumber(["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
} else {
return null;
}
});
status_im.abi_spec.sha3 = (function status_im$abi_spec$sha3(s){
return Web3Utils.sha3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
});
status_im.abi_spec.is_hex_QMARK_ = (function status_im$abi_spec$is_hex_QMARK_(value){
if(cljs.core.truth_(value)){
return clojure.string.starts_with_QMARK_(value,"0x");
} else {
return null;
}
});
if((typeof status_im !== 'undefined') && (typeof status_im.abi_spec !== 'undefined') && (typeof status_im.abi_spec.enc !== 'undefined')){
} else {
status_im.abi_spec.enc = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__1164 = cljs.core.get_global_hierarchy;
return (fexpr__1164.cljs$core$IFn$_invoke$arity$0 ? fexpr__1164.cljs$core$IFn$_invoke$arity$0() : fexpr__1164.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("status-im.abi-spec","enc"),cljs.core.cst$kw$type,cljs.core.cst$kw$default,hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
status_im.abi_spec.enc.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$bool,(function (p__1165){
var map__1166 = p__1165;
var map__1166__$1 = (((((!((map__1166 == null))))?(((((map__1166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1166):map__1166);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1166__$1,cljs.core.cst$kw$value);
return status_im.abi_spec.left_pad((cljs.core.truth_(value)?"1":"0"));
}));
status_im.abi_spec.enc.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$int,(function (p__1168){
var map__1169 = p__1168;
var map__1169__$1 = (((((!((map__1169 == null))))?(((((map__1169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1169):map__1169);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1169__$1,cljs.core.cst$kw$value);
return status_im.abi_spec.to_two_complement(value);
}));
status_im.abi_spec.enc.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$uint,(function (p__1171){
var map__1172 = p__1171;
var map__1172__$1 = (((((!((map__1172 == null))))?(((((map__1172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1172):map__1172);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1172__$1,cljs.core.cst$kw$value);
return status_im.abi_spec.left_pad(status_im.abi_spec.number_to_hex(value));
}));
status_im.abi_spec.enc.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$address,(function (p__1174){
var map__1175 = p__1174;
var map__1175__$1 = (((((!((map__1175 == null))))?(((((map__1175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1175):map__1175);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1175__$1,cljs.core.cst$kw$value);
if(typeof value === 'string'){
return status_im.abi_spec.left_pad(clojure.string.replace(value,"0x",""));
} else {
return null;
}
}));
status_im.abi_spec.enc.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$bytes,(function (p__1177){
var map__1178 = p__1177;
var map__1178__$1 = (((((!((map__1178 == null))))?(((((map__1178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1178):map__1178);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1178__$1,cljs.core.cst$kw$value);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__1178__$1,cljs.core.cst$kw$size,(256));
var dynamic_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1178__$1,cljs.core.cst$kw$dynamic_QMARK_);
var encoded_value_QMARK_ = status_im.abi_spec.is_hex_QMARK_(value);
var encoded_value = (cljs.core.truth_(encoded_value_QMARK_)?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,(2)):status_im.abi_spec.from_utf8(value));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(dynamic_QMARK_)?(function (){var G__1181 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$int,cljs.core.cst$kw$value,(cljs.core.count(encoded_value) / (2))], null);
return (status_im.abi_spec.enc.cljs$core$IFn$_invoke$arity$1 ? status_im.abi_spec.enc.cljs$core$IFn$_invoke$arity$1(G__1181) : status_im.abi_spec.enc.call(null,G__1181));
})():null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_im.abi_spec.right_pad(encoded_value))].join('');
}));
status_im.abi_spec.enc.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$string,(function (p__1182){
var map__1183 = p__1182;
var map__1183__$1 = (((((!((map__1183 == null))))?(((((map__1183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1183):map__1183);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1183__$1,cljs.core.cst$kw$value);
var dynamic_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1183__$1,cljs.core.cst$kw$dynamic_QMARK_);
var G__1185 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$bytes,cljs.core.cst$kw$value,value,cljs.core.cst$kw$dynamic_QMARK_,dynamic_QMARK_], null);
return (status_im.abi_spec.enc.cljs$core$IFn$_invoke$arity$1 ? status_im.abi_spec.enc.cljs$core$IFn$_invoke$arity$1(G__1185) : status_im.abi_spec.enc.call(null,G__1185));
}));
status_im.abi_spec.enc.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fixed,(function (p__1186){
var map__1187 = p__1186;
var map__1187__$1 = (((((!((map__1187 == null))))?(((((map__1187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1187):map__1187);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1187__$1,cljs.core.cst$kw$value);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__1187__$1,cljs.core.cst$kw$size,(128));
var power = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__1187__$1,cljs.core.cst$kw$power,(18));
var G__1189 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$int,cljs.core.cst$kw$value,(value * Math.pow((10),power))], null);
return (status_im.abi_spec.enc.cljs$core$IFn$_invoke$arity$1 ? status_im.abi_spec.enc.cljs$core$IFn$_invoke$arity$1(G__1189) : status_im.abi_spec.enc.call(null,G__1189));
}));
status_im.abi_spec.enc.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ufixed,(function (p__1190){
var map__1191 = p__1190;
var map__1191__$1 = (((((!((map__1191 == null))))?(((((map__1191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1191):map__1191);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1191__$1,cljs.core.cst$kw$value);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__1191__$1,cljs.core.cst$kw$size,(128));
var power = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__1191__$1,cljs.core.cst$kw$power,(18));
var G__1193 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$uint,cljs.core.cst$kw$value,(value * Math.pow((10),power))], null);
return (status_im.abi_spec.enc.cljs$core$IFn$_invoke$arity$1 ? status_im.abi_spec.enc.cljs$core$IFn$_invoke$arity$1(G__1193) : status_im.abi_spec.enc.call(null,G__1193));
}));
status_im.abi_spec.enc.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$array,(function (p__1195){
var map__1196 = p__1195;
var map__1196__$1 = (((((!((map__1196 == null))))?(((((map__1196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1196):map__1196);
var x = map__1196__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1196__$1,cljs.core.cst$kw$value);
var dynamic_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1196__$1,cljs.core.cst$kw$dynamic_QMARK_);
var array_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1196__$1,cljs.core.cst$kw$array_DASH_of);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(dynamic_QMARK_)?(function (){var G__1200 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$int,cljs.core.cst$kw$value,cljs.core.count(value)], null);
return (status_im.abi_spec.enc.cljs$core$IFn$_invoke$arity$1 ? status_im.abi_spec.enc.cljs$core$IFn$_invoke$arity$1(G__1200) : status_im.abi_spec.enc.call(null,G__1200));
})():null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__1201 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$tuple,cljs.core.cst$kw$value,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__1196,map__1196__$1,x,value,dynamic_QMARK_,array_of){
return (function (p1__1194_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(array_of,cljs.core.cst$kw$value,p1__1194_SHARP_);
});})(map__1196,map__1196__$1,x,value,dynamic_QMARK_,array_of))
,value)], null);
return (status_im.abi_spec.enc.cljs$core$IFn$_invoke$arity$1 ? status_im.abi_spec.enc.cljs$core$IFn$_invoke$arity$1(G__1201) : status_im.abi_spec.enc.call(null,G__1201));
})())].join('');
}));
status_im.abi_spec.enc.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$tuple,(function (p__1202){
var map__1203 = p__1202;
var map__1203__$1 = (((((!((map__1203 == null))))?(((((map__1203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1203):map__1203);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1203__$1,cljs.core.cst$kw$value);
var vec__1205 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__1203,map__1203__$1,value){
return (function (p__1211,p__1212){
var vec__1213 = p__1211;
var len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1213,(0),null);
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1213,(1),null);
var map__1216 = p__1212;
var map__1216__$1 = (((((!((map__1216 == null))))?(((((map__1216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1216):map__1216);
var x = map__1216__$1;
var dynamic_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1216__$1,cljs.core.cst$kw$dynamic_QMARK_);
var enc_x = (status_im.abi_spec.enc.cljs$core$IFn$_invoke$arity$1 ? status_im.abi_spec.enc.cljs$core$IFn$_invoke$arity$1(x) : status_im.abi_spec.enc.call(null,x));
if(cljs.core.truth_(dynamic_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(len + (32)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,cljs.core.cst$kw$tail,enc_x))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(len + (cljs.core.count(enc_x) / (2))),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,cljs.core.cst$kw$head,enc_x))], null);
}
});})(map__1203,map__1203__$1,value))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY], null),value);
var len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1205,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1205,(1),null);
var vec__1208 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__1205,len,x,map__1203,map__1203__$1,value){
return (function (p__1218,p__1219){
var vec__1220 = p__1218;
var len__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1220,(0),null);
var heads = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1220,(1),null);
var tails = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1220,(2),null);
var map__1223 = p__1219;
var map__1223__$1 = (((((!((map__1223 == null))))?(((((map__1223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1223):map__1223);
var x__$1 = map__1223__$1;
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1223__$1,cljs.core.cst$kw$head);
var tail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1223__$1,cljs.core.cst$kw$tail);
if(cljs.core.truth_(tail)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(len__$1 + (cljs.core.count(tail) / (2))),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(heads,(function (){var G__1225 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$int,cljs.core.cst$kw$value,len__$1], null);
return (status_im.abi_spec.enc.cljs$core$IFn$_invoke$arity$1 ? status_im.abi_spec.enc.cljs$core$IFn$_invoke$arity$1(G__1225) : status_im.abi_spec.enc.call(null,G__1225));
})()),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tails,tail)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [len__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(heads,head),tails], null);
}
});})(vec__1205,len,x,map__1203,map__1203__$1,value))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [len,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),x);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1208,(0),null);
var heads = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1208,(1),null);
var tails = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1208,(2),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(heads,tails));
}));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_params,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_param,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_param,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_separator,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_comma))),cljs.spec.alpha.rep_impl(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_param,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_param,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_separator,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_comma)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_param,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_separator], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_param,cljs.spec.alpha.maybe_impl(cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_comma,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_comma)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_param,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_comma)], null))));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_param,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_type,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_string,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_size,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_number),cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_x,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_x),cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_power,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_number),cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_array,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_array)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_type,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_size,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_x,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_power,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_array], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_string,cljs.spec.alpha.maybe_impl(cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_number,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_number),cljs.spec.alpha.maybe_impl(cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_x,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_x),cljs.spec.alpha.maybe_impl(cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_number,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_number),cljs.spec.alpha.rep_impl(cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_array,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_array)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_string,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_number),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_x),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_number),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_array)], null)));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_array,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_open_DASH_bracket,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_open_DASH_bracket,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_size,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_number),cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_close_DASH_bracket,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_close_DASH_bracket),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_open_DASH_bracket,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_size,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_close_DASH_bracket], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_open_DASH_bracket,cljs.spec.alpha.maybe_impl(cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_number,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_number),cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_close_DASH_bracket], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_open_DASH_bracket,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_number),cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_close_DASH_bracket], null)));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["x","null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["x",null], null), null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_open_DASH_bracket,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["[","null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["[",null], null), null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_close_DASH_bracket,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["]","null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["]",null], null), null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_comma,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [",","null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [",",null], null), null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_number,cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_,cljs.core.int_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_string,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_);
status_im.abi_spec.single_char = (function status_im$abi_spec$single_char(code){
var temp__5718__auto__ = (function (){var G__1227 = cljs.core.first(code);
var fexpr__1226 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [",",null,"x",null,"[",null,"]",null], null), null);
return (fexpr__1226.cljs$core$IFn$_invoke$arity$1 ? fexpr__1226.cljs$core$IFn$_invoke$arity$1(G__1227) : fexpr__1226.call(null,G__1227));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var m = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),m], null);
} else {
return null;
}
});
status_im.abi_spec.number = (function status_im$abi_spec$number(code){
var temp__5718__auto__ = cljs.core.re_find(/^[0-9]+/,code);
if(cljs.core.truth_(temp__5718__auto__)){
var m = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(m),parseInt(m)], null);
} else {
return null;
}
});
status_im.abi_spec.string = (function status_im$abi_spec$string(s){
var temp__5718__auto__ = cljs.core.re_find(/^[a-z]+/,s);
if(cljs.core.truth_(temp__5718__auto__)){
var m = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(m),m], null);
} else {
return null;
}
});
status_im.abi_spec.tokenise = (function status_im$abi_spec$tokenise(code){
if(cljs.core.seq(code)){
var temp__5718__auto__ = (function (){var or__4131__auto__ = status_im.abi_spec.string(code);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = status_im.abi_spec.single_char(code);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return status_im.abi_spec.number(code);
}
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var vec__1228 = temp__5718__auto__;
var len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1228,(0),null);
var token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1228,(1),null);
return cljs.core.cons(token,(function (){var G__1231 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(code,len);
return (status_im.abi_spec.tokenise.cljs$core$IFn$_invoke$arity$1 ? status_im.abi_spec.tokenise.cljs$core$IFn$_invoke$arity$1(G__1231) : status_im.abi_spec.tokenise.call(null,G__1231));
})());
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected token",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$code,code], null));
}
} else {
return null;
}
});
/**
 * Takes a parsed parameter and returns a parameter that can
 *   be encoded by associng the :dynamic? key for dynamic parameters
 *   and recursively defining arrays
 */
status_im.abi_spec.parse_param = (function status_im$abi_spec$parse_param(p__1232){
var map__1233 = p__1232;
var map__1233__$1 = (((((!((map__1233 == null))))?(((((map__1233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1233):map__1233);
var param = map__1233__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1233__$1,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_type);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1233__$1,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_size);
var array = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1233__$1,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_array);
var power = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1233__$1,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_power);
if(cljs.core.truth_(array)){
var map__1235 = cljs.core.last(array);
var map__1235__$1 = (((((!((map__1235 == null))))?(((((map__1235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1235):map__1235);
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1235__$1,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_size);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$array,cljs.core.cst$kw$dynamic_QMARK_,(size__$1 == null),cljs.core.cst$kw$array_DASH_of,(function (){var G__1237 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(param,cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_array,cljs.core.butlast);
return (status_im.abi_spec.parse_param.cljs$core$IFn$_invoke$arity$1 ? status_im.abi_spec.parse_param.cljs$core$IFn$_invoke$arity$1(G__1237) : status_im.abi_spec.parse_param.call(null,G__1237));
})()], null);
} else {
var type__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type);
var param__$1 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,type__$1,cljs.core.cst$kw$dynamic_QMARK_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type__$1,cljs.core.cst$kw$string)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type__$1,cljs.core.cst$kw$bytes)) && ((size == null))))),cljs.core.cst$kw$size,size], null);
if(cljs.core.truth_(power)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(param__$1,cljs.core.cst$kw$power,power);
} else {
return param__$1;
}
}
});
status_im.abi_spec.parse_params = (function status_im$abi_spec$parse_params(method_signature){
var tokens = status_im.abi_spec.tokenise(cljs.core.second(cljs.core.re_find(/\((.*)\)/,method_signature)));
var params = cljs.spec.alpha.conform(cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_params,tokens);
if(cljs.spec.alpha.invalid_QMARK_(params)){
return cljs.spec.alpha.explain_data(cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_params,tokens);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (tokens,params){
return (function (p1__1238_SHARP_){
return status_im.abi_spec.parse_param(cljs.core.cst$kw$status_DASH_im$abi_DASH_spec_SLASH_param.cljs$core$IFn$_invoke$arity$1(p1__1238_SHARP_));
});})(tokens,params))
,params);
}
});
status_im.abi_spec.signature__GT_method_id = (function status_im$abi_spec$signature__GT_method_id(signature){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),status_im.abi_spec.sha3(signature)));
});
status_im.abi_spec.encode = (function status_im$abi_spec$encode(method,params){
var method_id = status_im.abi_spec.signature__GT_method_id(method);
var params__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (method_id){
return (function (p1__1239_SHARP_,p2__1240_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__1239_SHARP_,cljs.core.cst$kw$value,p2__1240_SHARP_);
});})(method_id))
,status_im.abi_spec.parse_params(method),params);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__1242 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$tuple,cljs.core.cst$kw$value,params__$1], null);
return (status_im.abi_spec.enc.cljs$core$IFn$_invoke$arity$1 ? status_im.abi_spec.enc.cljs$core$IFn$_invoke$arity$1(G__1242) : status_im.abi_spec.enc.call(null,G__1242));
})())].join('');
});
status_im.abi_spec.substr = (function status_im$abi_spec$substr(val,s,l){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(val,s,(s + l));
});
status_im.abi_spec.arr_size = (function status_im$abi_spec$arr_size(val){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.rest(cljs.core.butlast(val))) | (0));
});
status_im.abi_spec.nested_size = (function status_im$abi_spec$nested_size(val){
var num = status_im.abi_spec.arr_size(val);
if((num === (0))){
return (1);
} else {
return num;
}
});
status_im.abi_spec.list_of_nested_types = (function status_im$abi_spec$list_of_nested_types(type){
var temp__5720__auto__ = cljs.core.re_seq(/(\[[0-9]*\])/,type);
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,res);
} else {
return null;
}
});
status_im.abi_spec.nested_name = (function status_im$abi_spec$nested_name(type){
var ntypes = status_im.abi_spec.list_of_nested_types(type);
if(cljs.core.truth_(ntypes)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(type,(0),(cljs.core.count(type) - cljs.core.count(cljs.core.last(ntypes))));
} else {
return type;
}
});
status_im.abi_spec.is_arr_QMARK_ = (function status_im$abi_spec$is_arr_QMARK_(type){
return cljs.core.boolean$(status_im.abi_spec.list_of_nested_types(type));
});
status_im.abi_spec.is_dynamic_arr_QMARK_ = (function status_im$abi_spec$is_dynamic_arr_QMARK_(type){
var ntypes = status_im.abi_spec.list_of_nested_types(type);
var and__4120__auto__ = ntypes;
if(cljs.core.truth_(and__4120__auto__)){
return (status_im.abi_spec.arr_size(cljs.core.last(ntypes)) === (0));
} else {
return and__4120__auto__;
}
});
status_im.abi_spec.static_arr_len = (function status_im$abi_spec$static_arr_len(type){
var ntypes = status_im.abi_spec.list_of_nested_types(type);
if(cljs.core.truth_(ntypes)){
return status_im.abi_spec.nested_size(cljs.core.last(ntypes));
} else {
return (1);
}
});
status_im.abi_spec.static_part_length = (function status_im$abi_spec$static_part_length(type){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(status_im.abi_spec.nested_size,(function (){var or__4131__auto__ = status_im.abi_spec.list_of_nested_types(type);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.list("1");
}
})()),(32)));
});
status_im.abi_spec.offset_reducer = (function status_im$abi_spec$offset_reducer(p__1243,val){
var map__1244 = p__1243;
var map__1244__$1 = (((((!((map__1244 == null))))?(((((map__1244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1244):map__1244);
var cnt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1244__$1,cljs.core.cst$kw$cnt);
var coll = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1244__$1,cljs.core.cst$kw$coll);
var cnt_SINGLEQUOTE_ = (cnt + val);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cnt,cnt_SINGLEQUOTE_,cljs.core.cst$kw$coll,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,cnt_SINGLEQUOTE_)], null);
});
status_im.abi_spec.get_offsets = (function status_im$abi_spec$get_offsets(types){
var lengths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(status_im.abi_spec.static_part_length,types);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(cljs.core.cst$kw$coll.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(status_im.abi_spec.offset_reducer,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cnt,(0),cljs.core.cst$kw$coll,cljs.core.PersistentVector.EMPTY], null),lengths))),(0));
});
status_im.abi_spec.hex_to_bytes = (function status_im$abi_spec$hex_to_bytes(hex){
var len = (status_im.abi_spec.hex_to_number(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(hex,(0),(64))) * (2));
return status_im.abi_spec.substr(hex,(64),len);
});
status_im.abi_spec.dyn_hex_to_value = (function status_im$abi_spec$dyn_hex_to_value(hex,type){
if(clojure.string.starts_with_QMARK_(type,"bytes")){
return ["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_im.abi_spec.hex_to_bytes(hex))].join('');
} else {
if(clojure.string.starts_with_QMARK_(type,"string")){
return status_im.abi_spec.hex_to_utf8(status_im.abi_spec.hex_to_bytes(hex));
} else {
return null;
}
}
});
status_im.abi_spec.hex_to_bytesM = (function status_im$abi_spec$hex_to_bytesM(hex,type){
var size = (cljs.core.second(cljs.core.re_matches(/^bytes([0-9]*)/,type)) | (0));
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(hex,(0),((2) * size));
});
status_im.abi_spec.hex_to_value = (function status_im$abi_spec$hex_to_value(hex,type){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("bool",type)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hex,"0000000000000000000000000000000000000000000000000000000000000001");
} else {
if(clojure.string.starts_with_QMARK_(type,"uint")){
return status_im.abi_spec.hex_to_number(hex);
} else {
if(clojure.string.starts_with_QMARK_(type,"int")){
return status_im.abi_spec.hex_to_number(hex);
} else {
if(clojure.string.starts_with_QMARK_(type,"address")){
return ["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(hex,(cljs.core.count(hex) - (40))))].join('');
} else {
if(clojure.string.starts_with_QMARK_(type,"bytes")){
return status_im.abi_spec.hex_to_bytesM(hex,type);
} else {
return null;
}
}
}
}
}
});
status_im.abi_spec.dec_type = (function status_im$abi_spec$dec_type(bytes){
return (function (offset,type){
if(status_im.abi_spec.is_arr_QMARK_(type)){
var dyn_arr_QMARK_ = status_im.abi_spec.is_dynamic_arr_QMARK_(type);
var arr_off = parseInt(["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_im.abi_spec.substr(bytes,(offset * (2)),(64)))].join(''));
var len = (cljs.core.truth_(dyn_arr_QMARK_)?parseInt(["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_im.abi_spec.substr(bytes,(arr_off * (2)),(64)))].join('')):status_im.abi_spec.static_arr_len(type));
var arr_start = (cljs.core.truth_(dyn_arr_QMARK_)?(arr_off + (32)):offset);
var nname = status_im.abi_spec.nested_name(type);
var nstatpartlen = status_im.abi_spec.static_part_length(nname);
var rnstatpartlen = (Math.floor(((nstatpartlen + (31)) / (32))) * (32));
var res = cljs.core.PersistentVector.EMPTY;
var i = (0);
while(true){
if((i >= (len * rnstatpartlen))){
return res;
} else {
var G__1252 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,(function (){var G__1250 = (arr_start + i);
var G__1251 = nname;
var fexpr__1249 = (status_im.abi_spec.dec_type.cljs$core$IFn$_invoke$arity$1 ? status_im.abi_spec.dec_type.cljs$core$IFn$_invoke$arity$1(bytes) : status_im.abi_spec.dec_type.call(null,bytes));
return (fexpr__1249.cljs$core$IFn$_invoke$arity$2 ? fexpr__1249.cljs$core$IFn$_invoke$arity$2(G__1250,G__1251) : fexpr__1249.call(null,G__1250,G__1251));
})());
var G__1253 = (i + rnstatpartlen);
res = G__1252;
i = G__1253;
continue;
}
break;
}
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.re_matches(/^bytes(\[([0-9]*)\])*$/,type);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return clojure.string.starts_with_QMARK_(type,"string");
}
})())){
var dyn_off = parseInt(["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_im.abi_spec.substr(bytes,(offset * (2)),(64)))].join(''));
var len = parseInt(["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_im.abi_spec.substr(bytes,(dyn_off * (2)),(64)))].join(''));
var rlen = Math.floor(((len + (31)) / (32)));
var val = status_im.abi_spec.substr(bytes,(dyn_off * (2)),((rlen + (1)) * (64)));
return status_im.abi_spec.dyn_hex_to_value(val,type);
} else {
var len = status_im.abi_spec.static_part_length(type);
var val = status_im.abi_spec.substr(bytes,(offset * (2)),(len * (2)));
return status_im.abi_spec.hex_to_value(val,type);

}
}
});
});
status_im.abi_spec.decode = (function status_im$abi_spec$decode(bytes,types){
if(cljs.core.truth_(bytes)){
var bytes__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(bytes,(2));
if(cljs.core.empty_QMARK_(bytes__$1)){
return null;
} else {
var offsets = status_im.abi_spec.get_offsets(types);
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(status_im.abi_spec.dec_type(bytes__$1),offsets,types);
}
} else {
return null;
}
});
