// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__5645 = e.target.readyState;
var fexpr__5644 = new cljs.core.PersistentArrayMap(null, 6, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready,cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null);
return (fexpr__5644.cljs$core$IFn$_invoke$arity$1 ? fexpr__5644.cljs$core$IFn$_invoke$arity$1(G__5645) : fexpr__5644.call(null,G__5645));
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

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__5647,handler){
var map__5648 = p__5647;
var map__5648__$1 = (((((!((map__5648 == null))))?(((((map__5648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5648):map__5648);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5648__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5648__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5648__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5648__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__5648__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__5648__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5648__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__5648,map__5648__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__5646_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__5646_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__5648,map__5648__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5457__auto___5666 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5457__auto___5666)){
var response_type_5667 = temp__5457__auto___5666;
this$__$1.responseType = cljs.core.name(response_type_5667);
} else {
}

var seq__5650_5668 = cljs.core.seq(headers);
var chunk__5651_5669 = null;
var count__5652_5670 = (0);
var i__5653_5671 = (0);
while(true){
if((i__5653_5671 < count__5652_5670)){
var vec__5660_5672 = chunk__5651_5669.cljs$core$IIndexed$_nth$arity$2(null,i__5653_5671);
var k_5673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5660_5672,(0),null);
var v_5674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5660_5672,(1),null);
this$__$1.setRequestHeader(k_5673,v_5674);


var G__5675 = seq__5650_5668;
var G__5676 = chunk__5651_5669;
var G__5677 = count__5652_5670;
var G__5678 = (i__5653_5671 + (1));
seq__5650_5668 = G__5675;
chunk__5651_5669 = G__5676;
count__5652_5670 = G__5677;
i__5653_5671 = G__5678;
continue;
} else {
var temp__5457__auto___5679 = cljs.core.seq(seq__5650_5668);
if(temp__5457__auto___5679){
var seq__5650_5680__$1 = temp__5457__auto___5679;
if(cljs.core.chunked_seq_QMARK_(seq__5650_5680__$1)){
var c__4550__auto___5681 = cljs.core.chunk_first(seq__5650_5680__$1);
var G__5682 = cljs.core.chunk_rest(seq__5650_5680__$1);
var G__5683 = c__4550__auto___5681;
var G__5684 = cljs.core.count(c__4550__auto___5681);
var G__5685 = (0);
seq__5650_5668 = G__5682;
chunk__5651_5669 = G__5683;
count__5652_5670 = G__5684;
i__5653_5671 = G__5685;
continue;
} else {
var vec__5663_5686 = cljs.core.first(seq__5650_5680__$1);
var k_5687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5663_5686,(0),null);
var v_5688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5663_5686,(1),null);
this$__$1.setRequestHeader(k_5687,v_5688);


var G__5689 = cljs.core.next(seq__5650_5680__$1);
var G__5690 = null;
var G__5691 = (0);
var G__5692 = (0);
seq__5650_5668 = G__5689;
chunk__5651_5669 = G__5690;
count__5652_5670 = G__5691;
i__5653_5671 = G__5692;
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
