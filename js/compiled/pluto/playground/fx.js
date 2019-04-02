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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set,(function (db,p__1810){
var vec__1811 = p__1810;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1811,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1811,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1811,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k,v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_in,(function (db,p__1814){
var vec__1815 = p__1814;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1815,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1815,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1815,(2),null);
return cljs.core.assoc_in(db,path,v);
}));
pluto.playground.fx.update_extension_errors = (function pluto$playground$fx$update_extension_errors(p__1818,p__1819){
var map__1820 = p__1818;
var map__1820__$1 = (((((!((map__1820 == null))))?(((((map__1820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1820):map__1820);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1820__$1,cljs.core.cst$kw$db);
var vec__1821 = p__1819;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1821,(0),null);
var errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1821,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$errors,errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_errors,pluto.playground.fx.update_extension_errors);
pluto.playground.fx.clear_errors = (function pluto$playground$fx$clear_errors(p__1825,_){
var map__1826 = p__1825;
var map__1826__$1 = (((((!((map__1826 == null))))?(((((map__1826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1826):map__1826);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1826__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_clear_DASH_errors,pluto.playground.fx.clear_errors);
pluto.playground.fx.update_extension_parsed = (function pluto$playground$fx$update_extension_parsed(p__1828,p__1829){
var map__1830 = p__1828;
var map__1830__$1 = (((((!((map__1830 == null))))?(((((map__1830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1830):map__1830);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1830__$1,cljs.core.cst$kw$db);
var vec__1831 = p__1829;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1831,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1831,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$parsed,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,pluto.playground.fx.update_extension_parsed);
var G__1835_1847 = cljs.core.cst$kw$extension_SLASH_parse;
var G__1836_1848 = ((function (G__1835_1847){
return (function (p__1837){
var vec__1838 = p__1837;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1838,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1838,(1),null);
var map__1841 = pluto.core.parse(ctx,data);
var map__1841__$1 = (((((!((map__1841 == null))))?(((((map__1841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1841):map__1841);
var m = map__1841__$1;
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1841__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1841__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__1843 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1843) : re_frame.core.dispatch.call(null,G__1843));
} else {
var G__1844_1849 = react_native_web.hooks.hook_in(cljs.core.first(cljs.core.cst$kw$hooks.cljs$core$IFn$_invoke$arity$1(data__$1)));
var G__1845_1850 = document.getElementById("extension");
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__1844_1849,G__1845_1850) : reagent.core.render_component.call(null,G__1844_1849,G__1845_1850));

var G__1846 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,data__$1], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1846) : re_frame.core.dispatch.call(null,G__1846));
}
});})(G__1835_1847))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1835_1847,G__1836_1848) : re_frame.core.reg_fx.call(null,G__1835_1847,G__1836_1848));
pluto.playground.fx.update_extension_data = (function pluto$playground$fx$update_extension_data(p__1851,p__1852){
var map__1853 = p__1851;
var map__1853__$1 = (((((!((map__1853 == null))))?(((((map__1853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1853):map__1853);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1853__$1,cljs.core.cst$kw$db);
var vec__1854 = p__1852;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1854,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1854,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1854,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$data,data),cljs.core.cst$kw$extension_SLASH_parse,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_data,pluto.playground.fx.update_extension_data);
var G__1858_1869 = cljs.core.cst$kw$extension_SLASH_read;
var G__1859_1870 = ((function (G__1858_1869){
return (function (p__1860){
var vec__1861 = p__1860;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1861,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1861,(1),null);
var G__1864_1871 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_clear_DASH_errors], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1864_1871) : re_frame.core.dispatch.call(null,G__1864_1871));

var map__1865 = pluto.core.read(source);
var map__1865__$1 = (((((!((map__1865 == null))))?(((((map__1865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1865):map__1865);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1865__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1865__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__1867 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1867) : re_frame.core.dispatch.call(null,G__1867));
} else {
var G__1868 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_data,ctx,data], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1868) : re_frame.core.dispatch.call(null,G__1868));
}
});})(G__1858_1869))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1858_1869,G__1859_1870) : re_frame.core.reg_fx.call(null,G__1858_1869,G__1859_1870));
pluto.playground.fx.update_extension_source = (function pluto$playground$fx$update_extension_source(p__1872,p__1873){
var map__1874 = p__1872;
var map__1874__$1 = (((((!((map__1874 == null))))?(((((map__1874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1874):map__1874);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1874__$1,cljs.core.cst$kw$db);
var vec__1875 = p__1873;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1875,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1875,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1875,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$source,data),cljs.core.cst$kw$extension_SLASH_read,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_source,pluto.playground.fx.update_extension_source);
var G__1879_1885 = cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value;
var G__1880_1886 = ((function (G__1879_1885){
return (function (p__1881){
var vec__1882 = p__1881;
var cm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1882,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1882,(1),null);
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
});})(G__1879_1885))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1879_1885,G__1880_1886) : re_frame.core.reg_fx.call(null,G__1879_1885,G__1880_1886));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_editor,(function (p__1887,p__1888){
var map__1889 = p__1887;
var map__1889__$1 = (((((!((map__1889 == null))))?(((((map__1889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1889):map__1889);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1889__$1,cljs.core.cst$kw$db);
var vec__1890 = p__1888;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1890,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1890,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code_DASH_mirror.cljs$core$IFn$_invoke$arity$1(db),data], null)], null);
}));
pluto.playground.fx.append_log = (function pluto$playground$fx$append_log(p__1894,p__1895){
var map__1896 = p__1894;
var map__1896__$1 = (((((!((map__1896 == null))))?(((((map__1896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1896):map__1896);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1896__$1,cljs.core.cst$kw$db);
var vec__1897 = p__1895;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1897,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1897,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$logs,cljs.core.conj,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_append_DASH_log,pluto.playground.fx.append_log);
pluto.playground.fx.switch_filter_logs = (function pluto$playground$fx$switch_filter_logs(p__1901,p__1902){
var map__1903 = p__1901;
var map__1903__$1 = (((((!((map__1903 == null))))?(((((map__1903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1903):map__1903);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1903__$1,cljs.core.cst$kw$db);
var vec__1904 = p__1902;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1904,(0),null);
var checked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1904,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$filtered_DASH_logs,checked)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_filter_DASH_logs,pluto.playground.fx.switch_filter_logs);
pluto.playground.fx.clear_logs = (function pluto$playground$fx$clear_logs(p__1908,_){
var map__1909 = p__1908;
var map__1909__$1 = (((((!((map__1909 == null))))?(((((map__1909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1909):map__1909);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1909__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$logs)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_clear_DASH_logs,pluto.playground.fx.clear_logs);
pluto.playground.fx.set_selected = (function pluto$playground$fx$set_selected(p__1911,p__1912){
var map__1913 = p__1911;
var map__1913__$1 = (((((!((map__1913 == null))))?(((((map__1913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1913):map__1913);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1913__$1,cljs.core.cst$kw$db);
var vec__1914 = p__1912;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1914,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1914,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selected,path)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_selected,pluto.playground.fx.set_selected);
pluto.playground.fx.switch_preview = (function pluto$playground$fx$switch_preview(p__1918,p__1919){
var map__1920 = p__1918;
var map__1920__$1 = (((((!((map__1920 == null))))?(((((map__1920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1920):map__1920);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1920__$1,cljs.core.cst$kw$db);
var vec__1921 = p__1919;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1921,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$preview,cljs.core.not)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_preview,pluto.playground.fx.switch_preview);
var G__1925_1927 = cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs;
var G__1926_1928 = ((function (G__1925_1927){
return (function (value){
return pluto.playground.ipfs.save(value);
});})(G__1925_1927))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1925_1927,G__1926_1928) : re_frame.core.reg_fx.call(null,G__1925_1927,G__1926_1928));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_publish,(function (p__1929,_){
var map__1930 = p__1929;
var map__1930__$1 = (((((!((map__1930 == null))))?(((((map__1930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1930):map__1930);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1930__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$publish,cljs.core.cst$kw$in_DASH_progress_QMARK_], null),true),cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs,cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db)], null);
}));
var G__1933_1936 = cljs.core.cst$kw$fetch_DASH_extension_DASH_fx;
var G__1934_1937 = ((function (G__1933_1936){
return (function (){
var hash = (new URL(document.location)).searchParams.get("hash");
var uri = (cljs.core.truth_(hash)?["ipfs@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''):"url@assets/extensions/command/");
return pluto.storages.fetch(uri,((function (hash,uri,G__1933_1936){
return (function (p1__1932_SHARP_){
var G__1935 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_editor,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__1932_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value,cljs.core.cst$kw$content], null))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1935) : re_frame.core.dispatch.call(null,G__1935));
});})(hash,uri,G__1933_1936))
);
});})(G__1933_1936))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1933_1936,G__1934_1937) : re_frame.core.reg_fx.call(null,G__1933_1936,G__1934_1937));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fetch_DASH_extension,(function (p__1938,_){
var map__1939 = p__1938;
var map__1939__$1 = (((((!((map__1939 == null))))?(((((map__1939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1939):map__1939);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1939__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fetch_DASH_extension_DASH_fx,null], null);
}));
