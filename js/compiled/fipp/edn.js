// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('fipp.edn');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('fipp.ednize');
goog.require('fipp.visit');
goog.require('fipp.engine');
fipp.edn.pretty_coll = (function fipp$edn$pretty_coll(p__2384,open,xs,sep,close,f){
var map__2385 = p__2384;
var map__2385__$1 = (((((!((map__2385 == null))))?(((((map__2385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2385):map__2385);
var printer = map__2385__$1;
var print_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2385__$1,cljs.core.cst$kw$print_DASH_level);
var print_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2385__$1,cljs.core.cst$kw$print_DASH_length);
var printer__$1 = (function (){var G__2387 = printer;
if(cljs.core.truth_(print_level)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__2387,cljs.core.cst$kw$print_DASH_level,cljs.core.dec);
} else {
return G__2387;
}
})();
var xform = cljs.core.comp.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(print_length)?cljs.core.take.cljs$core$IFn$_invoke$arity$1(print_length):cljs.core.identity),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (printer__$1,map__2385,map__2385__$1,printer,print_level,print_length){
return (function (p1__2383_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(printer__$1,p1__2383_SHARP_) : f.call(null,printer__$1,p1__2383_SHARP_));
});})(printer__$1,map__2385,map__2385__$1,printer,print_level,print_length))
),cljs.core.interpose.cljs$core$IFn$_invoke$arity$1(sep));
var ys = ((((function (){var or__4131__auto__ = print_level;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})() > (0)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(xform,xs):"#");
var ellipsis = (cljs.core.truth_((function (){var and__4120__auto__ = print_length;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(print_length,xs));
} else {
return and__4120__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,sep,"..."], null):null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$group,open,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$align,ys,ellipsis], null),close], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {fipp.visit.IVisitor}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
fipp.edn.EdnPrinter = (function (symbols,print_meta,print_length,print_level,__meta,__extmap,__hash){
this.symbols = symbols;
this.print_meta = print_meta;
this.print_length = print_length;
this.print_level = print_level;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
fipp.edn.EdnPrinter.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

fipp.edn.EdnPrinter.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k2389,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__2393 = k2389;
var G__2393__$1 = (((G__2393 instanceof cljs.core.Keyword))?G__2393.fqn:null);
switch (G__2393__$1) {
case "symbols":
return self__.symbols;

break;
case "print-meta":
return self__.print_meta;

break;
case "print-length":
return self__.print_length;

break;
case "print-level":
return self__.print_level;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k2389,else__4388__auto__);

}
});

fipp.edn.EdnPrinter.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__2394){
var vec__2395 = p__2394;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2395,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2395,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

fipp.edn.EdnPrinter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#fipp.edn.EdnPrinter{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$symbols,self__.symbols],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$print_DASH_meta,self__.print_meta],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$print_DASH_length,self__.print_length],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$print_DASH_level,self__.print_level],null))], null),self__.__extmap));
});

fipp.edn.EdnPrinter.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__2388){
var self__ = this;
var G__2388__$1 = this;
return (new cljs.core.RecordIter((0),G__2388__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$symbols,cljs.core.cst$kw$print_DASH_meta,cljs.core.cst$kw$print_DASH_length,cljs.core.cst$kw$print_DASH_level], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

fipp.edn.EdnPrinter.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

fipp.edn.EdnPrinter.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new fipp.edn.EdnPrinter(self__.symbols,self__.print_meta,self__.print_length,self__.print_level,self__.__meta,self__.__extmap,self__.__hash));
});

fipp.edn.EdnPrinter.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$ = cljs.core.PROTOCOL_SENTINEL;

fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_record$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return fipp.visit.visit(this$__$1,fipp.ednize.record__GT_tagged(x));
});

fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_meta$arity$3 = (function (this$,m,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.print_meta)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$align,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"^",fipp.visit.visit(this$__$1,m)], null),cljs.core.cst$kw$line,fipp.visit.visit_STAR_(this$__$1,x)], null);
} else {
return fipp.visit.visit_STAR_(this$__$1,x);
}
});

fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_number$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0))], null);
});

fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_pattern$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0))], null);
});

fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_unknown$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return fipp.visit.visit(this$__$1,fipp.ednize.edn(x));
});

fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_symbol$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)], null);
});

fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_seq$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var temp__5455__auto__ = (function (){var G__2398 = cljs.core.first(x);
return (self__.symbols.cljs$core$IFn$_invoke$arity$1 ? self__.symbols.cljs$core$IFn$_invoke$arity$1(G__2398) : self__.symbols.call(null,G__2398));
})();
if(cljs.core.truth_(temp__5455__auto__)){
var pretty = temp__5455__auto__;
return (pretty.cljs$core$IFn$_invoke$arity$2 ? pretty.cljs$core$IFn$_invoke$arity$2(this$__$1,x) : pretty.call(null,this$__$1,x));
} else {
return fipp.edn.pretty_coll(this$__$1,"(",x,cljs.core.cst$kw$line,")",fipp.visit.visit);
}
});

fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_boolean$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)], null);
});

fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_tagged$arity$2 = (function (this$,p__2399){
var self__ = this;
var map__2400 = p__2399;
var map__2400__$1 = (((((!((map__2400 == null))))?(((((map__2400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2400):map__2400);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2400__$1,cljs.core.cst$kw$tag);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2400__$1,cljs.core.cst$kw$form);
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$group,"#",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag], 0)),(cljs.core.truth_((function (){var or__4131__auto__ = (function (){var and__4120__auto__ = self__.print_meta;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.meta(form);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (!(cljs.core.coll_QMARK_(form)));
}
})())?" ":null),fipp.visit.visit(this$__$1,form)], null);
});

fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_keyword$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)], null);
});

fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_map$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return fipp.edn.pretty_coll(this$__$1,"{",x,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,",",cljs.core.cst$kw$line], null),"}",((function (this$__$1){
return (function (printer,p__2402){
var vec__2403 = p__2402;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2403,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2403,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,fipp.visit.visit(printer,k)," ",fipp.visit.visit(printer,v)], null);
});})(this$__$1))
);
});

fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_nil$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,"nil"], null);
});

fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_character$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0))], null);
});

fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_string$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0))], null);
});

fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_var$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)], null);
});

fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_set$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return fipp.edn.pretty_coll(this$__$1,"#{",x,cljs.core.cst$kw$line,"}",fipp.visit.visit);
});

fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_vector$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return fipp.edn.pretty_coll(this$__$1,"[",x,cljs.core.cst$kw$line,"]",fipp.visit.visit);
});

fipp.edn.EdnPrinter.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__2406 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (222486956 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__2406(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

fipp.edn.EdnPrinter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this2390,other2391){
var self__ = this;
var this2390__$1 = this;
return (((!((other2391 == null)))) && ((this2390__$1.constructor === other2391.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this2390__$1.symbols,other2391.symbols)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this2390__$1.print_meta,other2391.print_meta)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this2390__$1.print_length,other2391.print_length)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this2390__$1.print_level,other2391.print_level)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this2390__$1.__extmap,other2391.__extmap)));
});

fipp.edn.EdnPrinter.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$print_DASH_meta,null,cljs.core.cst$kw$print_DASH_level,null,cljs.core.cst$kw$print_DASH_length,null,cljs.core.cst$kw$symbols,null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new fipp.edn.EdnPrinter(self__.symbols,self__.print_meta,self__.print_length,self__.print_level,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

fipp.edn.EdnPrinter.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__2388){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__2407 = cljs.core.keyword_identical_QMARK_;
var expr__2408 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__2410 = cljs.core.cst$kw$symbols;
var G__2411 = expr__2408;
return (pred__2407.cljs$core$IFn$_invoke$arity$2 ? pred__2407.cljs$core$IFn$_invoke$arity$2(G__2410,G__2411) : pred__2407.call(null,G__2410,G__2411));
})())){
return (new fipp.edn.EdnPrinter(G__2388,self__.print_meta,self__.print_length,self__.print_level,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__2412 = cljs.core.cst$kw$print_DASH_meta;
var G__2413 = expr__2408;
return (pred__2407.cljs$core$IFn$_invoke$arity$2 ? pred__2407.cljs$core$IFn$_invoke$arity$2(G__2412,G__2413) : pred__2407.call(null,G__2412,G__2413));
})())){
return (new fipp.edn.EdnPrinter(self__.symbols,G__2388,self__.print_length,self__.print_level,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__2414 = cljs.core.cst$kw$print_DASH_length;
var G__2415 = expr__2408;
return (pred__2407.cljs$core$IFn$_invoke$arity$2 ? pred__2407.cljs$core$IFn$_invoke$arity$2(G__2414,G__2415) : pred__2407.call(null,G__2414,G__2415));
})())){
return (new fipp.edn.EdnPrinter(self__.symbols,self__.print_meta,G__2388,self__.print_level,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__2416 = cljs.core.cst$kw$print_DASH_level;
var G__2417 = expr__2408;
return (pred__2407.cljs$core$IFn$_invoke$arity$2 ? pred__2407.cljs$core$IFn$_invoke$arity$2(G__2416,G__2417) : pred__2407.call(null,G__2416,G__2417));
})())){
return (new fipp.edn.EdnPrinter(self__.symbols,self__.print_meta,self__.print_length,G__2388,self__.__meta,self__.__extmap,null));
} else {
return (new fipp.edn.EdnPrinter(self__.symbols,self__.print_meta,self__.print_length,self__.print_level,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__2388),null));
}
}
}
}
});

fipp.edn.EdnPrinter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$symbols,self__.symbols,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$print_DASH_meta,self__.print_meta,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$print_DASH_length,self__.print_length,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$print_DASH_level,self__.print_level,null))], null),self__.__extmap));
});

fipp.edn.EdnPrinter.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__2388){
var self__ = this;
var this__4384__auto____$1 = this;
return (new fipp.edn.EdnPrinter(self__.symbols,self__.print_meta,self__.print_length,self__.print_level,G__2388,self__.__extmap,self__.__hash));
});

fipp.edn.EdnPrinter.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

fipp.edn.EdnPrinter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$symbols,cljs.core.cst$sym$print_DASH_meta,cljs.core.cst$sym$print_DASH_length,cljs.core.cst$sym$print_DASH_level], null);
});

fipp.edn.EdnPrinter.cljs$lang$type = true;

fipp.edn.EdnPrinter.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"fipp.edn/EdnPrinter",null,(1),null));
});

fipp.edn.EdnPrinter.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"fipp.edn/EdnPrinter");
});

/**
 * Positional factory function for fipp.edn/EdnPrinter.
 */
fipp.edn.__GT_EdnPrinter = (function fipp$edn$__GT_EdnPrinter(symbols,print_meta,print_length,print_level){
return (new fipp.edn.EdnPrinter(symbols,print_meta,print_length,print_level,null,null,null));
});

/**
 * Factory function for fipp.edn/EdnPrinter, taking a map of keywords to field values.
 */
fipp.edn.map__GT_EdnPrinter = (function fipp$edn$map__GT_EdnPrinter(G__2392){
var extmap__4424__auto__ = (function (){var G__2418 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__2392,cljs.core.cst$kw$symbols,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$print_DASH_meta,cljs.core.cst$kw$print_DASH_length,cljs.core.cst$kw$print_DASH_level], 0));
if(cljs.core.record_QMARK_(G__2392)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__2418);
} else {
return G__2418;
}
})();
return (new fipp.edn.EdnPrinter(cljs.core.cst$kw$symbols.cljs$core$IFn$_invoke$arity$1(G__2392),cljs.core.cst$kw$print_DASH_meta.cljs$core$IFn$_invoke$arity$1(G__2392),cljs.core.cst$kw$print_DASH_length.cljs$core$IFn$_invoke$arity$1(G__2392),cljs.core.cst$kw$print_DASH_level.cljs$core$IFn$_invoke$arity$1(G__2392),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

fipp.edn.pprint = (function fipp$edn$pprint(var_args){
var G__2421 = arguments.length;
switch (G__2421) {
case 1:
return fipp.edn.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fipp.edn.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fipp.edn.pprint.cljs$core$IFn$_invoke$arity$1 = (function (x){
return fipp.edn.pprint.cljs$core$IFn$_invoke$arity$2(x,cljs.core.PersistentArrayMap.EMPTY);
});

fipp.edn.pprint.cljs$core$IFn$_invoke$arity$2 = (function (x,options){
var defaults = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$symbols,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$print_DASH_length,cljs.core._STAR_print_length_STAR_,cljs.core.cst$kw$print_DASH_level,cljs.core._STAR_print_level_STAR_,cljs.core.cst$kw$print_DASH_meta,cljs.core._STAR_print_meta_STAR_], null);
var printer = fipp.edn.map__GT_EdnPrinter(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,options], 0)));
var _STAR_print_meta_STAR__orig_val__2422 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_meta_STAR__temp_val__2423 = false;
cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__2423;

try{return fipp.engine.pprint_document(fipp.visit.visit(printer,x),options);
}finally {cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__2422;
}});

fipp.edn.pprint.cljs$lang$maxFixedArity = 2;

