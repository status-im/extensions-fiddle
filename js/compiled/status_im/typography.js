// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('status_im.typography');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('status_im.colors');
status_im.typography.default_font_family = "Inter";
status_im.typography.default_style = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,status_im.colors.black,cljs.core.cst$kw$font_DASH_weight,"400",cljs.core.cst$kw$font_DASH_size,(15)], null);
status_im.typography.get_line_height = (function status_im$typography$get_line_height(font_size){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap.fromArrays([(20),(27),(24),(15),(21),(31),(32),(40),(33),(13),(22),(29),(28),(25),(34),(17),(12),(23),(19),(11),(14),(26),(16),(30),(10),(18)],[(26),(35),(31),(21),(27),(38),(40),(50),(41),(17),(28),(36),(35),(32),(42),(23),(16),(30),(24),(15),(19),(34),(22),(37),(14),(23)]),font_size);
});
status_im.typography.typography_styles = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$header,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_weight,"700",cljs.core.cst$kw$font_DASH_size,(22)], null),cljs.core.cst$kw$title_DASH_bold,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_weight,"700",cljs.core.cst$kw$font_DASH_size,(17)], null),cljs.core.cst$kw$title,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,(17)], null),cljs.core.cst$kw$main_DASH_semibold,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_weight,"600"], null),cljs.core.cst$kw$main_DASH_medium,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_weight,"500"], null),cljs.core.cst$kw$caption,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,(12)], null),cljs.core.cst$kw$timestamp,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$font_DASH_size,(10),cljs.core.cst$kw$letter_DASH_spacing,(1),cljs.core.cst$kw$text_DASH_transform,cljs.core.cst$kw$uppercase], null)], null);
status_im.typography.get_style = (function status_im$typography$get_style(p__1563){
var map__1564 = p__1563;
var map__1564__$1 = (((((!((map__1564 == null))))?(((((map__1564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1564):map__1564);
var style = map__1564__$1;
var typography = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1564__$1,cljs.core.cst$kw$typography);
if((((typography == null)) || (cljs.core.contains_QMARK_(status_im.typography.typography_styles,typography)))){
} else {
throw (new Error("Assert failed: (or (nil? typography) (contains? typography-styles typography))"));
}

var map__1566 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([status_im.typography.default_style,cljs.core.get.cljs$core$IFn$_invoke$arity$2(status_im.typography.typography_styles,typography),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(style,cljs.core.cst$kw$typography)], 0));
var map__1566__$1 = (((((!((map__1566 == null))))?(((((map__1566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1566):map__1566);
var style__$1 = map__1566__$1;
var font_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1566__$1,cljs.core.cst$kw$font_DASH_weight);
var font_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1566__$1,cljs.core.cst$kw$font_DASH_style);
var font_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1566__$1,cljs.core.cst$kw$font_DASH_size);
var line_height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__1566__$1,cljs.core.cst$kw$line_DASH_height,status_im.typography.get_line_height(font_size));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(style__$1,cljs.core.cst$kw$font_DASH_family,status_im.typography.default_font_family,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$line_DASH_height,line_height], 0));
});
