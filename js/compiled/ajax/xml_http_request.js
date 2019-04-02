// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__5636 = e.target.readyState;
var fexpr__5635 = new cljs.core.PersistentArrayMap(null, 6, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready,cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null);
return (fexpr__5635.cljs$core$IFn$_invoke$arity$1 ? fexpr__5635.cljs$core$IFn$_invoke$arity$1(G__5636) : fexpr__5635.call(null,G__5636));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__5638,handler){
var map__5639 = p__5638;
var map__5639__$1 = (((((!((map__5639 == null))))?(((((map__5639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5639):map__5639);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5639__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5639__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5639__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5639__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__5639__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__5639__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5639__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__5639,map__5639__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__5637_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__5637_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__5639,map__5639__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5720__auto___5657 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5720__auto___5657)){
var response_type_5658 = temp__5720__auto___5657;
this$__$1.responseType = cljs.core.name(response_type_5658);
} else {
}

var seq__5641_5659 = cljs.core.seq(headers);
var chunk__5642_5660 = null;
var count__5643_5661 = (0);
var i__5644_5662 = (0);
while(true){
if((i__5644_5662 < count__5643_5661)){
var vec__5651_5663 = chunk__5642_5660.cljs$core$IIndexed$_nth$arity$2(null,i__5644_5662);
var k_5664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5651_5663,(0),null);
var v_5665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5651_5663,(1),null);
this$__$1.setRequestHeader(k_5664,v_5665);


var G__5666 = seq__5641_5659;
var G__5667 = chunk__5642_5660;
var G__5668 = count__5643_5661;
var G__5669 = (i__5644_5662 + (1));
seq__5641_5659 = G__5666;
chunk__5642_5660 = G__5667;
count__5643_5661 = G__5668;
i__5644_5662 = G__5669;
continue;
} else {
var temp__5720__auto___5670 = cljs.core.seq(seq__5641_5659);
if(temp__5720__auto___5670){
var seq__5641_5671__$1 = temp__5720__auto___5670;
if(cljs.core.chunked_seq_QMARK_(seq__5641_5671__$1)){
var c__4550__auto___5672 = cljs.core.chunk_first(seq__5641_5671__$1);
var G__5673 = cljs.core.chunk_rest(seq__5641_5671__$1);
var G__5674 = c__4550__auto___5672;
var G__5675 = cljs.core.count(c__4550__auto___5672);
var G__5676 = (0);
seq__5641_5659 = G__5673;
chunk__5642_5660 = G__5674;
count__5643_5661 = G__5675;
i__5644_5662 = G__5676;
continue;
} else {
var vec__5654_5677 = cljs.core.first(seq__5641_5671__$1);
var k_5678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5654_5677,(0),null);
var v_5679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5654_5677,(1),null);
this$__$1.setRequestHeader(k_5678,v_5679);


var G__5680 = cljs.core.next(seq__5641_5671__$1);
var G__5681 = null;
var G__5682 = (0);
var G__5683 = (0);
seq__5641_5659 = G__5680;
chunk__5642_5660 = G__5681;
count__5643_5661 = G__5682;
i__5644_5662 = G__5683;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4131__auto__ = body;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
