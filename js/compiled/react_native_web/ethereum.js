// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('react_native_web.ethereum');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('status_im.abi_spec');
react_native_web.ethereum.rpc_args = (function react_native_web$ethereum$rpc_args(method,params,from){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$method,method,cljs.core.cst$kw$params,params,cljs.core.cst$kw$from,from], null);
});
react_native_web.ethereum.parse_call_result = (function react_native_web$ethereum$parse_call_result(o,outputs){
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(o),"result");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("0x",result)){
return null;
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = outputs;
if(cljs.core.truth_(and__4120__auto__)){
return result;
} else {
return and__4120__auto__;
}
})())){
return status_im.abi_spec.decode(result,outputs);
} else {
return result;

}
}
});
react_native_web.ethereum.rpc_dispatch = (function react_native_web$ethereum$rpc_dispatch(error,result,f,on_success,on_failure){
if(cljs.core.truth_((function (){var and__4120__auto__ = result;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = on_success;
if(cljs.core.truth_(and__4120__auto____$1)){
return f;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
var G__1463_1465 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(result) : f.call(null,result))], null);
(on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(G__1463_1465) : on_success.call(null,G__1463_1465));
} else {
}

if(cljs.core.truth_((function (){var and__4120__auto__ = error;
if(cljs.core.truth_(and__4120__auto__)){
return on_failure;
} else {
return and__4120__auto__;
}
})())){
var G__1464 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,error], null);
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(G__1464) : on_failure.call(null,G__1464));
} else {
return null;
}
});
react_native_web.ethereum.execute_ethcall = (function react_native_web$ethereum$execute_ethcall(p__1468,ethereum_addr){
var map__1469 = p__1468;
var map__1469__$1 = (((((!((map__1469 == null))))?(((((map__1469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1469):map__1469);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1469__$1,cljs.core.cst$kw$to);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1469__$1,cljs.core.cst$kw$method);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1469__$1,cljs.core.cst$kw$params);
var outputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1469__$1,cljs.core.cst$kw$outputs);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1469__$1,cljs.core.cst$kw$on_DASH_success);
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1469__$1,cljs.core.cst$kw$on_DASH_failure);
var tx_object = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$to,to,cljs.core.cst$kw$data,(cljs.core.truth_(method)?status_im.abi_spec.encode(method,params):null)], null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extensions_SLASH_send_DASH_async,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.ethereum.rpc_args("eth_call",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx_object,"latest"], null),ethereum_addr),((function (tx_object,map__1469,map__1469__$1,to,method,params,outputs,on_success,on_failure){
return (function (p1__1466_SHARP_,p2__1467_SHARP_){
return react_native_web.ethereum.rpc_dispatch(p1__1466_SHARP_,p2__1467_SHARP_,((function (tx_object,map__1469,map__1469__$1,to,method,params,outputs,on_success,on_failure){
return (function (o){
return react_native_web.ethereum.parse_call_result(o,outputs);
});})(tx_object,map__1469,map__1469__$1,to,method,params,outputs,on_success,on_failure))
,on_success,on_failure);
});})(tx_object,map__1469,map__1469__$1,to,method,params,outputs,on_success,on_failure))
], null)], null);
});
react_native_web.ethereum.execute_send_transaction = (function react_native_web$ethereum$execute_send_transaction(p__1473,ethereum_addr){
var map__1474 = p__1473;
var map__1474__$1 = (((((!((map__1474 == null))))?(((((map__1474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1474):map__1474);
var arguments$ = map__1474__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1474__$1,cljs.core.cst$kw$method);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1474__$1,cljs.core.cst$kw$params);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1474__$1,cljs.core.cst$kw$on_DASH_success);
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1474__$1,cljs.core.cst$kw$on_DASH_failure);
var tx_object = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.select_keys(arguments$,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$to,cljs.core.cst$kw$gas,cljs.core.cst$kw$gas_DASH_price,cljs.core.cst$kw$value,cljs.core.cst$kw$nonce], null)),cljs.core.cst$kw$from,ethereum_addr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data,(cljs.core.truth_((function (){var and__4120__auto__ = method;
if(cljs.core.truth_(and__4120__auto__)){
return params;
} else {
return and__4120__auto__;
}
})())?status_im.abi_spec.encode(method,params):null)], 0));
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extensions_SLASH_send_DASH_async,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.ethereum.rpc_args("eth_sendTransaction",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx_object], null),ethereum_addr),((function (tx_object,map__1474,map__1474__$1,arguments$,method,params,on_success,on_failure){
return (function (p1__1471_SHARP_,p2__1472_SHARP_){
return react_native_web.ethereum.rpc_dispatch(p1__1471_SHARP_,p2__1472_SHARP_,((function (tx_object,map__1474,map__1474__$1,arguments$,method,params,on_success,on_failure){
return (function (o){
return react_native_web.ethereum.parse_call_result(o,null);
});})(tx_object,map__1474,map__1474__$1,arguments$,method,params,on_success,on_failure))
,on_success,on_failure);
});})(tx_object,map__1474,map__1474__$1,arguments$,method,params,on_success,on_failure))
], null)], null);
});
var G__1476_1482 = cljs.core.cst$kw$extensions_SLASH_send_DASH_async;
var G__1477_1483 = ((function (G__1476_1482){
return (function (p__1478){
var vec__1479 = p__1478;
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1479,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1479,(1),null);
return ethereum.sendAsync(cljs.core.clj__GT_js(obj),callback);
});})(G__1476_1482))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1476_1482,G__1477_1483) : re_frame.core.reg_fx.call(null,G__1476_1482,G__1477_1483));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_call,(function (p__1484,p__1485){
var map__1486 = p__1484;
var map__1486__$1 = (((((!((map__1486 == null))))?(((((map__1486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1486):map__1486);
var map__1487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1486__$1,cljs.core.cst$kw$db);
var map__1487__$1 = (((((!((map__1487 == null))))?(((((map__1487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1487):map__1487);
var ethereum_addr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1487__$1,cljs.core.cst$kw$ethereum_DASH_addr);
var vec__1488 = p__1485;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1488,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1488,(1),null);
var arguments$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1488,(2),null);
if(cljs.core.truth_(ethereum_addr)){
return react_native_web.ethereum.execute_ethcall(arguments$,ethereum_addr);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_send_DASH_transaction,(function (p__1493,p__1494){
var map__1495 = p__1493;
var map__1495__$1 = (((((!((map__1495 == null))))?(((((map__1495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1495):map__1495);
var map__1496 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1495__$1,cljs.core.cst$kw$db);
var map__1496__$1 = (((((!((map__1496 == null))))?(((((map__1496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1496):map__1496);
var ethereum_addr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1496__$1,cljs.core.cst$kw$ethereum_DASH_addr);
var vec__1497 = p__1494;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1497,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1497,(1),null);
var arguments$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1497,(2),null);
if(cljs.core.truth_(ethereum_addr)){
return react_native_web.ethereum.execute_send_transaction(arguments$,ethereum_addr);
} else {
return null;
}
}));
var G__1503_1506 = cljs.core.cst$kw$extensions_SLASH_init_DASH_wallet_DASH_fx;
var G__1504_1507 = ((function (G__1503_1506){
return (function (){
if((typeof ethereum !== 'undefined')){
return ethereum.enable().then(((function (G__1503_1506){
return (function (p1__1502_SHARP_){
var G__1505 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$ethereum_DASH_addr,cljs.core.first(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(p1__1502_SHARP_))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1505) : re_frame.core.dispatch.call(null,G__1505));
});})(G__1503_1506))
).catch(((function (G__1503_1506){
return (function (){
return cljs.core.List.EMPTY;
});})(G__1503_1506))
);
} else {
return null;
}
});})(G__1503_1506))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1503_1506,G__1504_1507) : re_frame.core.reg_fx.call(null,G__1503_1506,G__1504_1507));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions_SLASH_init_DASH_wallet,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extensions_SLASH_init_DASH_wallet_DASH_fx,null], null);
}));
