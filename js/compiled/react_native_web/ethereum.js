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
var G__1399_1401 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(result) : f.call(null,result))], null);
(on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(G__1399_1401) : on_success.call(null,G__1399_1401));
} else {
}

if(cljs.core.truth_((function (){var and__4120__auto__ = error;
if(cljs.core.truth_(and__4120__auto__)){
return on_failure;
} else {
return and__4120__auto__;
}
})())){
var G__1400 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,error], null);
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(G__1400) : on_failure.call(null,G__1400));
} else {
return null;
}
});
react_native_web.ethereum.execute_ethcall = (function react_native_web$ethereum$execute_ethcall(p__1404,ethereum_addr){
var map__1405 = p__1404;
var map__1405__$1 = (((((!((map__1405 == null))))?(((((map__1405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1405):map__1405);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1405__$1,cljs.core.cst$kw$to);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1405__$1,cljs.core.cst$kw$method);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1405__$1,cljs.core.cst$kw$params);
var outputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1405__$1,cljs.core.cst$kw$outputs);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1405__$1,cljs.core.cst$kw$on_DASH_success);
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1405__$1,cljs.core.cst$kw$on_DASH_failure);
var tx_object = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$to,to,cljs.core.cst$kw$data,(cljs.core.truth_(method)?status_im.abi_spec.encode(method,params):null)], null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extensions_SLASH_send_DASH_async,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.ethereum.rpc_args("eth_call",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx_object,"latest"], null),ethereum_addr),((function (tx_object,map__1405,map__1405__$1,to,method,params,outputs,on_success,on_failure){
return (function (p1__1402_SHARP_,p2__1403_SHARP_){
return react_native_web.ethereum.rpc_dispatch(p1__1402_SHARP_,p2__1403_SHARP_,((function (tx_object,map__1405,map__1405__$1,to,method,params,outputs,on_success,on_failure){
return (function (o){
return react_native_web.ethereum.parse_call_result(o,outputs);
});})(tx_object,map__1405,map__1405__$1,to,method,params,outputs,on_success,on_failure))
,on_success,on_failure);
});})(tx_object,map__1405,map__1405__$1,to,method,params,outputs,on_success,on_failure))
], null)], null);
});
react_native_web.ethereum.execute_send_transaction = (function react_native_web$ethereum$execute_send_transaction(p__1409,ethereum_addr){
var map__1410 = p__1409;
var map__1410__$1 = (((((!((map__1410 == null))))?(((((map__1410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1410):map__1410);
var arguments$ = map__1410__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1410__$1,cljs.core.cst$kw$method);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1410__$1,cljs.core.cst$kw$params);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1410__$1,cljs.core.cst$kw$on_DASH_success);
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1410__$1,cljs.core.cst$kw$on_DASH_failure);
var tx_object = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.select_keys(arguments$,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$to,cljs.core.cst$kw$gas,cljs.core.cst$kw$gas_DASH_price,cljs.core.cst$kw$value,cljs.core.cst$kw$nonce], null)),cljs.core.cst$kw$from,ethereum_addr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data,(cljs.core.truth_((function (){var and__4120__auto__ = method;
if(cljs.core.truth_(and__4120__auto__)){
return params;
} else {
return and__4120__auto__;
}
})())?status_im.abi_spec.encode(method,params):null)], 0));
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extensions_SLASH_send_DASH_async,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.ethereum.rpc_args("eth_sendTransaction",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx_object], null),ethereum_addr),((function (tx_object,map__1410,map__1410__$1,arguments$,method,params,on_success,on_failure){
return (function (p1__1407_SHARP_,p2__1408_SHARP_){
return react_native_web.ethereum.rpc_dispatch(p1__1407_SHARP_,p2__1408_SHARP_,((function (tx_object,map__1410,map__1410__$1,arguments$,method,params,on_success,on_failure){
return (function (o){
return react_native_web.ethereum.parse_call_result(o,null);
});})(tx_object,map__1410,map__1410__$1,arguments$,method,params,on_success,on_failure))
,on_success,on_failure);
});})(tx_object,map__1410,map__1410__$1,arguments$,method,params,on_success,on_failure))
], null)], null);
});
var G__1412_1418 = cljs.core.cst$kw$extensions_SLASH_send_DASH_async;
var G__1413_1419 = ((function (G__1412_1418){
return (function (p__1414){
var vec__1415 = p__1414;
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1415,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1415,(1),null);
return ethereum.sendAsync(cljs.core.clj__GT_js(obj),callback);
});})(G__1412_1418))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1412_1418,G__1413_1419) : re_frame.core.reg_fx.call(null,G__1412_1418,G__1413_1419));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_call,(function (p__1420,p__1421){
var map__1422 = p__1420;
var map__1422__$1 = (((((!((map__1422 == null))))?(((((map__1422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1422):map__1422);
var map__1423 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1422__$1,cljs.core.cst$kw$db);
var map__1423__$1 = (((((!((map__1423 == null))))?(((((map__1423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1423):map__1423);
var ethereum_addr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1423__$1,cljs.core.cst$kw$ethereum_DASH_addr);
var vec__1424 = p__1421;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1424,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1424,(1),null);
var arguments$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1424,(2),null);
if(cljs.core.truth_(ethereum_addr)){
return react_native_web.ethereum.execute_ethcall(arguments$,ethereum_addr);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_send_DASH_transaction,(function (p__1429,p__1430){
var map__1431 = p__1429;
var map__1431__$1 = (((((!((map__1431 == null))))?(((((map__1431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1431):map__1431);
var map__1432 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1431__$1,cljs.core.cst$kw$db);
var map__1432__$1 = (((((!((map__1432 == null))))?(((((map__1432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1432):map__1432);
var ethereum_addr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1432__$1,cljs.core.cst$kw$ethereum_DASH_addr);
var vec__1433 = p__1430;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1433,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1433,(1),null);
var arguments$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1433,(2),null);
if(cljs.core.truth_(ethereum_addr)){
return react_native_web.ethereum.execute_send_transaction(arguments$,ethereum_addr);
} else {
return null;
}
}));
var G__1439_1442 = cljs.core.cst$kw$extensions_SLASH_init_DASH_wallet_DASH_fx;
var G__1440_1443 = ((function (G__1439_1442){
return (function (){
if((typeof ethereum !== 'undefined')){
return ethereum.enable().then(((function (G__1439_1442){
return (function (p1__1438_SHARP_){
var G__1441 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$ethereum_DASH_addr,cljs.core.first(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(p1__1438_SHARP_))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1441) : re_frame.core.dispatch.call(null,G__1441));
});})(G__1439_1442))
).catch(((function (G__1439_1442){
return (function (){
return cljs.core.List.EMPTY;
});})(G__1439_1442))
);
} else {
return null;
}
});})(G__1439_1442))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1439_1442,G__1440_1443) : re_frame.core.reg_fx.call(null,G__1439_1442,G__1440_1443));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions_SLASH_init_DASH_wallet,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extensions_SLASH_init_DASH_wallet_DASH_fx,null], null);
}));
