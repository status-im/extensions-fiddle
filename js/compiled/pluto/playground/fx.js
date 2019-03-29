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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set,(function (db,p__1821){
var vec__1822 = p__1821;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1822,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1822,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1822,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k,v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_in,(function (db,p__1825){
var vec__1826 = p__1825;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1826,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1826,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1826,(2),null);
return cljs.core.assoc_in(db,path,v);
}));
pluto.playground.fx.update_extension_errors = (function pluto$playground$fx$update_extension_errors(p__1829,p__1830){
var map__1831 = p__1829;
var map__1831__$1 = (((((!((map__1831 == null))))?(((((map__1831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1831):map__1831);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1831__$1,cljs.core.cst$kw$db);
var vec__1832 = p__1830;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1832,(0),null);
var errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1832,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$errors,errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_errors,pluto.playground.fx.update_extension_errors);
pluto.playground.fx.clear_errors = (function pluto$playground$fx$clear_errors(p__1836,_){
var map__1837 = p__1836;
var map__1837__$1 = (((((!((map__1837 == null))))?(((((map__1837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1837):map__1837);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1837__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_clear_DASH_errors,pluto.playground.fx.clear_errors);
pluto.playground.fx.update_extension_parsed = (function pluto$playground$fx$update_extension_parsed(p__1839,p__1840){
var map__1841 = p__1839;
var map__1841__$1 = (((((!((map__1841 == null))))?(((((map__1841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1841):map__1841);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1841__$1,cljs.core.cst$kw$db);
var vec__1842 = p__1840;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1842,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1842,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$parsed,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,pluto.playground.fx.update_extension_parsed);
var G__1846_1858 = cljs.core.cst$kw$extension_SLASH_parse;
var G__1847_1859 = ((function (G__1846_1858){
return (function (p__1848){
var vec__1849 = p__1848;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1849,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1849,(1),null);
var map__1852 = pluto.core.parse(ctx,data);
var map__1852__$1 = (((((!((map__1852 == null))))?(((((map__1852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1852):map__1852);
var m = map__1852__$1;
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1852__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1852__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__1854 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1854) : re_frame.core.dispatch.call(null,G__1854));
} else {
var G__1855_1860 = react_native_web.hooks.hook_in(cljs.core.first(cljs.core.cst$kw$hooks.cljs$core$IFn$_invoke$arity$1(data__$1)));
var G__1856_1861 = document.getElementById("extension");
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__1855_1860,G__1856_1861) : reagent.core.render_component.call(null,G__1855_1860,G__1856_1861));

var G__1857 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,data__$1], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1857) : re_frame.core.dispatch.call(null,G__1857));
}
});})(G__1846_1858))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1846_1858,G__1847_1859) : re_frame.core.reg_fx.call(null,G__1846_1858,G__1847_1859));
pluto.playground.fx.update_extension_data = (function pluto$playground$fx$update_extension_data(p__1862,p__1863){
var map__1864 = p__1862;
var map__1864__$1 = (((((!((map__1864 == null))))?(((((map__1864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1864):map__1864);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1864__$1,cljs.core.cst$kw$db);
var vec__1865 = p__1863;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1865,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1865,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1865,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$data,data),cljs.core.cst$kw$extension_SLASH_parse,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_data,pluto.playground.fx.update_extension_data);
var G__1869_1880 = cljs.core.cst$kw$extension_SLASH_read;
var G__1870_1881 = ((function (G__1869_1880){
return (function (p__1871){
var vec__1872 = p__1871;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1872,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1872,(1),null);
var G__1875_1882 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_clear_DASH_errors], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1875_1882) : re_frame.core.dispatch.call(null,G__1875_1882));

var map__1876 = pluto.core.read(source);
var map__1876__$1 = (((((!((map__1876 == null))))?(((((map__1876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1876):map__1876);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1876__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1876__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__1878 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1878) : re_frame.core.dispatch.call(null,G__1878));
} else {
var G__1879 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_data,ctx,data], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1879) : re_frame.core.dispatch.call(null,G__1879));
}
});})(G__1869_1880))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1869_1880,G__1870_1881) : re_frame.core.reg_fx.call(null,G__1869_1880,G__1870_1881));
pluto.playground.fx.update_extension_source = (function pluto$playground$fx$update_extension_source(p__1883,p__1884){
var map__1885 = p__1883;
var map__1885__$1 = (((((!((map__1885 == null))))?(((((map__1885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1885):map__1885);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1885__$1,cljs.core.cst$kw$db);
var vec__1886 = p__1884;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1886,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1886,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1886,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$source,data),cljs.core.cst$kw$extension_SLASH_read,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_source,pluto.playground.fx.update_extension_source);
var G__1890_1896 = cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value;
var G__1891_1897 = ((function (G__1890_1896){
return (function (p__1892){
var vec__1893 = p__1892;
var cm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1893,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1893,(1),null);
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
});})(G__1890_1896))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1890_1896,G__1891_1897) : re_frame.core.reg_fx.call(null,G__1890_1896,G__1891_1897));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_editor,(function (p__1898,p__1899){
var map__1900 = p__1898;
var map__1900__$1 = (((((!((map__1900 == null))))?(((((map__1900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1900):map__1900);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1900__$1,cljs.core.cst$kw$db);
var vec__1901 = p__1899;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1901,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1901,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code_DASH_mirror.cljs$core$IFn$_invoke$arity$1(db),data], null)], null);
}));
pluto.playground.fx.append_log = (function pluto$playground$fx$append_log(p__1905,p__1906){
var map__1907 = p__1905;
var map__1907__$1 = (((((!((map__1907 == null))))?(((((map__1907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1907):map__1907);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1907__$1,cljs.core.cst$kw$db);
var vec__1908 = p__1906;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1908,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1908,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$logs,cljs.core.conj,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_append_DASH_log,pluto.playground.fx.append_log);
pluto.playground.fx.set_selected = (function pluto$playground$fx$set_selected(p__1912,p__1913){
var map__1914 = p__1912;
var map__1914__$1 = (((((!((map__1914 == null))))?(((((map__1914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1914):map__1914);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1914__$1,cljs.core.cst$kw$db);
var vec__1915 = p__1913;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1915,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1915,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selected,path)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_selected,pluto.playground.fx.set_selected);
pluto.playground.fx.switch_preview = (function pluto$playground$fx$switch_preview(p__1919,p__1920){
var map__1921 = p__1919;
var map__1921__$1 = (((((!((map__1921 == null))))?(((((map__1921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1921):map__1921);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1921__$1,cljs.core.cst$kw$db);
var vec__1922 = p__1920;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1922,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$preview,cljs.core.not)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_preview,pluto.playground.fx.switch_preview);
var G__1926_1928 = cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs;
var G__1927_1929 = ((function (G__1926_1928){
return (function (value){
return pluto.playground.ipfs.save(value);
});})(G__1926_1928))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1926_1928,G__1927_1929) : re_frame.core.reg_fx.call(null,G__1926_1928,G__1927_1929));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_publish,(function (p__1930,_){
var map__1931 = p__1930;
var map__1931__$1 = (((((!((map__1931 == null))))?(((((map__1931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1931):map__1931);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1931__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$publish,cljs.core.cst$kw$in_DASH_progress_QMARK_], null),true),cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs,cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db)], null);
}));
var G__1934_1937 = cljs.core.cst$kw$fetch_DASH_extension_DASH_fx;
var G__1935_1938 = ((function (G__1934_1937){
return (function (){
var hash = (new URL(document.location)).searchParams.get("hash");
var uri = (cljs.core.truth_(hash)?["ipfs@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''):"url@assets/extensions/command/");
return pluto.storages.fetch(uri,((function (hash,uri,G__1934_1937){
return (function (p1__1933_SHARP_){
var G__1936 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_editor,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__1933_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value,cljs.core.cst$kw$content], null))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1936) : re_frame.core.dispatch.call(null,G__1936));
});})(hash,uri,G__1934_1937))
);
});})(G__1934_1937))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1934_1937,G__1935_1938) : re_frame.core.reg_fx.call(null,G__1934_1937,G__1935_1938));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fetch_DASH_extension,(function (p__1939,_){
var map__1940 = p__1939;
var map__1940__$1 = (((((!((map__1940 == null))))?(((((map__1940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1940):map__1940);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1940__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fetch_DASH_extension_DASH_fx,null], null);
}));
