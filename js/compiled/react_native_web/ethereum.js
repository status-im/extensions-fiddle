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
var G__1394_1396 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(result) : f.call(null,result))], null);
(on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(G__1394_1396) : on_success.call(null,G__1394_1396));
} else {
}

if(cljs.core.truth_((function (){var and__4120__auto__ = error;
if(cljs.core.truth_(and__4120__auto__)){
return on_failure;
} else {
return and__4120__auto__;
}
})())){
var G__1395 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,error], null);
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(G__1395) : on_failure.call(null,G__1395));
} else {
return null;
}
});
react_native_web.ethereum.execute_ethcall = (function react_native_web$ethereum$execute_ethcall(p__1399,ethereum_addr){
var map__1400 = p__1399;
var map__1400__$1 = (((((!((map__1400 == null))))?(((((map__1400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1400):map__1400);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1400__$1,cljs.core.cst$kw$to);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1400__$1,cljs.core.cst$kw$method);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1400__$1,cljs.core.cst$kw$params);
var outputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1400__$1,cljs.core.cst$kw$outputs);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1400__$1,cljs.core.cst$kw$on_DASH_success);
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1400__$1,cljs.core.cst$kw$on_DASH_failure);
var tx_object = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$to,to,cljs.core.cst$kw$data,(cljs.core.truth_(method)?status_im.abi_spec.encode(method,params):null)], null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extensions_SLASH_send_DASH_async,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.ethereum.rpc_args("eth_call",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx_object,"latest"], null),ethereum_addr),((function (tx_object,map__1400,map__1400__$1,to,method,params,outputs,on_success,on_failure){
return (function (p1__1397_SHARP_,p2__1398_SHARP_){
return react_native_web.ethereum.rpc_dispatch(p1__1397_SHARP_,p2__1398_SHARP_,((function (tx_object,map__1400,map__1400__$1,to,method,params,outputs,on_success,on_failure){
return (function (o){
return react_native_web.ethereum.parse_call_result(o,outputs);
});})(tx_object,map__1400,map__1400__$1,to,method,params,outputs,on_success,on_failure))
,on_success,on_failure);
});})(tx_object,map__1400,map__1400__$1,to,method,params,outputs,on_success,on_failure))
], null)], null);
});
react_native_web.ethereum.execute_send_transaction = (function react_native_web$ethereum$execute_send_transaction(p__1404,ethereum_addr){
var map__1405 = p__1404;
var map__1405__$1 = (((((!((map__1405 == null))))?(((((map__1405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1405):map__1405);
var arguments$ = map__1405__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1405__$1,cljs.core.cst$kw$method);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1405__$1,cljs.core.cst$kw$params);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1405__$1,cljs.core.cst$kw$on_DASH_success);
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1405__$1,cljs.core.cst$kw$on_DASH_failure);
var tx_object = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.select_keys(arguments$,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$to,cljs.core.cst$kw$gas,cljs.core.cst$kw$gas_DASH_price,cljs.core.cst$kw$value,cljs.core.cst$kw$nonce], null)),cljs.core.cst$kw$from,ethereum_addr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data,(cljs.core.truth_((function (){var and__4120__auto__ = method;
if(cljs.core.truth_(and__4120__auto__)){
return params;
} else {
return and__4120__auto__;
}
})())?status_im.abi_spec.encode(method,params):null)], 0));
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extensions_SLASH_send_DASH_async,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.ethereum.rpc_args("eth_sendTransaction",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx_object], null),ethereum_addr),((function (tx_object,map__1405,map__1405__$1,arguments$,method,params,on_success,on_failure){
return (function (p1__1402_SHARP_,p2__1403_SHARP_){
return react_native_web.ethereum.rpc_dispatch(p1__1402_SHARP_,p2__1403_SHARP_,((function (tx_object,map__1405,map__1405__$1,arguments$,method,params,on_success,on_failure){
return (function (o){
return react_native_web.ethereum.parse_call_result(o,null);
});})(tx_object,map__1405,map__1405__$1,arguments$,method,params,on_success,on_failure))
,on_success,on_failure);
});})(tx_object,map__1405,map__1405__$1,arguments$,method,params,on_success,on_failure))
], null)], null);
});
var G__1407_1413 = cljs.core.cst$kw$extensions_SLASH_send_DASH_async;
var G__1408_1414 = ((function (G__1407_1413){
return (function (p__1409){
var vec__1410 = p__1409;
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1410,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1410,(1),null);
return ethereum.sendAsync(cljs.core.clj__GT_js(obj),callback);
});})(G__1407_1413))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1407_1413,G__1408_1414) : re_frame.core.reg_fx.call(null,G__1407_1413,G__1408_1414));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_call,(function (p__1415,p__1416){
var map__1417 = p__1415;
var map__1417__$1 = (((((!((map__1417 == null))))?(((((map__1417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1417):map__1417);
var map__1418 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1417__$1,cljs.core.cst$kw$db);
var map__1418__$1 = (((((!((map__1418 == null))))?(((((map__1418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1418):map__1418);
var ethereum_addr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1418__$1,cljs.core.cst$kw$ethereum_DASH_addr);
var vec__1419 = p__1416;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1419,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1419,(1),null);
var arguments$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1419,(2),null);
if(cljs.core.truth_(ethereum_addr)){
return react_native_web.ethereum.execute_ethcall(arguments$,ethereum_addr);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_send_DASH_transaction,(function (p__1424,p__1425){
var map__1426 = p__1424;
var map__1426__$1 = (((((!((map__1426 == null))))?(((((map__1426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1426):map__1426);
var map__1427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1426__$1,cljs.core.cst$kw$db);
var map__1427__$1 = (((((!((map__1427 == null))))?(((((map__1427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1427):map__1427);
var ethereum_addr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1427__$1,cljs.core.cst$kw$ethereum_DASH_addr);
var vec__1428 = p__1425;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1428,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1428,(1),null);
var arguments$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1428,(2),null);
if(cljs.core.truth_(ethereum_addr)){
return react_native_web.ethereum.execute_send_transaction(arguments$,ethereum_addr);
} else {
return null;
}
}));
var G__1434_1437 = cljs.core.cst$kw$extensions_SLASH_init_DASH_wallet_DASH_fx;
var G__1435_1438 = ((function (G__1434_1437){
return (function (){
if((typeof ethereum !== 'undefined')){
return ethereum.enable().then(((function (G__1434_1437){
return (function (p1__1433_SHARP_){
var G__1436 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$ethereum_DASH_addr,cljs.core.first(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(p1__1433_SHARP_))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1436) : re_frame.core.dispatch.call(null,G__1436));
});})(G__1434_1437))
).catch(((function (G__1434_1437){
return (function (){
return cljs.core.List.EMPTY;
});})(G__1434_1437))
);
} else {
return null;
}
});})(G__1434_1437))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1434_1437,G__1435_1438) : re_frame.core.reg_fx.call(null,G__1434_1437,G__1435_1438));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions_SLASH_init_DASH_wallet,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extensions_SLASH_init_DASH_wallet_DASH_fx,null], null);
}));
