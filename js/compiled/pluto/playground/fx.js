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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set,(function (db,p__1781){
var vec__1782 = p__1781;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1782,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1782,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1782,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k,v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_in,(function (db,p__1785){
var vec__1786 = p__1785;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1786,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1786,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1786,(2),null);
return cljs.core.assoc_in(db,path,v);
}));
pluto.playground.fx.update_extension_errors = (function pluto$playground$fx$update_extension_errors(p__1789,p__1790){
var map__1791 = p__1789;
var map__1791__$1 = (((((!((map__1791 == null))))?(((((map__1791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1791):map__1791);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1791__$1,cljs.core.cst$kw$db);
var vec__1792 = p__1790;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1792,(0),null);
var errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1792,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$errors,errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_errors,pluto.playground.fx.update_extension_errors);
pluto.playground.fx.update_extension_parsed = (function pluto$playground$fx$update_extension_parsed(p__1796,p__1797){
var map__1798 = p__1796;
var map__1798__$1 = (((((!((map__1798 == null))))?(((((map__1798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1798):map__1798);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1798__$1,cljs.core.cst$kw$db);
var vec__1799 = p__1797;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1799,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1799,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$parsed,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,pluto.playground.fx.update_extension_parsed);
var G__1803_1815 = cljs.core.cst$kw$extension_SLASH_parse;
var G__1804_1816 = ((function (G__1803_1815){
return (function (p__1805){
var vec__1806 = p__1805;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1806,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1806,(1),null);
var map__1809 = pluto.core.parse(ctx,data);
var map__1809__$1 = (((((!((map__1809 == null))))?(((((map__1809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1809):map__1809);
var m = map__1809__$1;
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1809__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1809__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__1811 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1811) : re_frame.core.dispatch.call(null,G__1811));
} else {
var G__1812_1817 = react_native_web.hooks.hook_in(cljs.core.first(cljs.core.cst$kw$hooks.cljs$core$IFn$_invoke$arity$1(data__$1)));
var G__1813_1818 = document.getElementById("extension");
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__1812_1817,G__1813_1818) : reagent.core.render_component.call(null,G__1812_1817,G__1813_1818));

var G__1814 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,data__$1], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1814) : re_frame.core.dispatch.call(null,G__1814));
}
});})(G__1803_1815))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1803_1815,G__1804_1816) : re_frame.core.reg_fx.call(null,G__1803_1815,G__1804_1816));
pluto.playground.fx.update_extension_data = (function pluto$playground$fx$update_extension_data(p__1819,p__1820){
var map__1821 = p__1819;
var map__1821__$1 = (((((!((map__1821 == null))))?(((((map__1821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1821):map__1821);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1821__$1,cljs.core.cst$kw$db);
var vec__1822 = p__1820;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1822,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1822,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1822,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$data,data),cljs.core.cst$kw$extension_SLASH_parse,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_data,pluto.playground.fx.update_extension_data);
var G__1826_1836 = cljs.core.cst$kw$extension_SLASH_read;
var G__1827_1837 = ((function (G__1826_1836){
return (function (p__1828){
var vec__1829 = p__1828;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1829,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1829,(1),null);
var map__1832 = pluto.core.read(source);
var map__1832__$1 = (((((!((map__1832 == null))))?(((((map__1832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1832):map__1832);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1832__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1832__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__1834 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1834) : re_frame.core.dispatch.call(null,G__1834));
} else {
var G__1835 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_data,ctx,data], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1835) : re_frame.core.dispatch.call(null,G__1835));
}
});})(G__1826_1836))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1826_1836,G__1827_1837) : re_frame.core.reg_fx.call(null,G__1826_1836,G__1827_1837));
pluto.playground.fx.update_extension_source = (function pluto$playground$fx$update_extension_source(p__1838,p__1839){
var map__1840 = p__1838;
var map__1840__$1 = (((((!((map__1840 == null))))?(((((map__1840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1840):map__1840);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1840__$1,cljs.core.cst$kw$db);
var vec__1841 = p__1839;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1841,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1841,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1841,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$source,data),cljs.core.cst$kw$extension_SLASH_read,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_source,pluto.playground.fx.update_extension_source);
var G__1845_1851 = cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value;
var G__1846_1852 = ((function (G__1845_1851){
return (function (p__1847){
var vec__1848 = p__1847;
var cm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1848,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1848,(1),null);
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
});})(G__1845_1851))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1845_1851,G__1846_1852) : re_frame.core.reg_fx.call(null,G__1845_1851,G__1846_1852));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_editor,(function (p__1853,p__1854){
var map__1855 = p__1853;
var map__1855__$1 = (((((!((map__1855 == null))))?(((((map__1855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1855):map__1855);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1855__$1,cljs.core.cst$kw$db);
var vec__1856 = p__1854;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1856,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1856,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code_DASH_mirror.cljs$core$IFn$_invoke$arity$1(db),data], null)], null);
}));
pluto.playground.fx.append_log = (function pluto$playground$fx$append_log(p__1860,p__1861){
var map__1862 = p__1860;
var map__1862__$1 = (((((!((map__1862 == null))))?(((((map__1862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1862):map__1862);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1862__$1,cljs.core.cst$kw$db);
var vec__1863 = p__1861;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1863,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1863,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$logs,cljs.core.conj,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_append_DASH_log,pluto.playground.fx.append_log);
pluto.playground.fx.set_selected = (function pluto$playground$fx$set_selected(p__1867,p__1868){
var map__1869 = p__1867;
var map__1869__$1 = (((((!((map__1869 == null))))?(((((map__1869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1869):map__1869);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1869__$1,cljs.core.cst$kw$db);
var vec__1870 = p__1868;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1870,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1870,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selected,path)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_selected,pluto.playground.fx.set_selected);
pluto.playground.fx.switch_preview = (function pluto$playground$fx$switch_preview(p__1874,p__1875){
var map__1876 = p__1874;
var map__1876__$1 = (((((!((map__1876 == null))))?(((((map__1876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1876):map__1876);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1876__$1,cljs.core.cst$kw$db);
var vec__1877 = p__1875;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1877,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$preview,cljs.core.not)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_preview,pluto.playground.fx.switch_preview);
var G__1881_1883 = cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs;
var G__1882_1884 = ((function (G__1881_1883){
return (function (value){
return pluto.playground.ipfs.save(value);
});})(G__1881_1883))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1881_1883,G__1882_1884) : re_frame.core.reg_fx.call(null,G__1881_1883,G__1882_1884));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_publish,(function (p__1885,_){
var map__1886 = p__1885;
var map__1886__$1 = (((((!((map__1886 == null))))?(((((map__1886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1886):map__1886);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1886__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$publish,cljs.core.cst$kw$in_DASH_progress_QMARK_], null),true),cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs,cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db)], null);
}));
var G__1889_1892 = cljs.core.cst$kw$fetch_DASH_extension_DASH_fx;
var G__1890_1893 = ((function (G__1889_1892){
return (function (){
var hash = (new URL(document.location)).searchParams.get("hash");
var uri = (cljs.core.truth_(hash)?["ipfs@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''):"url@assets/extensions/command/");
return pluto.storages.fetch(uri,((function (hash,uri,G__1889_1892){
return (function (p1__1888_SHARP_){
var G__1891 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_editor,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__1888_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value,cljs.core.cst$kw$content], null))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1891) : re_frame.core.dispatch.call(null,G__1891));
});})(hash,uri,G__1889_1892))
);
});})(G__1889_1892))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1889_1892,G__1890_1893) : re_frame.core.reg_fx.call(null,G__1889_1892,G__1890_1893));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fetch_DASH_extension,(function (p__1894,_){
var map__1895 = p__1894;
var map__1895__$1 = (((((!((map__1895 == null))))?(((((map__1895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1895):map__1895);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1895__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fetch_DASH_extension_DASH_fx,null], null);
}));
