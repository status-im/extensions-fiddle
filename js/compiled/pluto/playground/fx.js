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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set,(function (db,p__1787){
var vec__1788 = p__1787;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1788,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1788,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1788,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k,v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_in,(function (db,p__1791){
var vec__1792 = p__1791;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1792,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1792,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1792,(2),null);
return cljs.core.assoc_in(db,path,v);
}));
pluto.playground.fx.update_extension_errors = (function pluto$playground$fx$update_extension_errors(p__1795,p__1796){
var map__1797 = p__1795;
var map__1797__$1 = (((((!((map__1797 == null))))?(((((map__1797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1797):map__1797);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1797__$1,cljs.core.cst$kw$db);
var vec__1798 = p__1796;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1798,(0),null);
var errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1798,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$errors,errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_errors,pluto.playground.fx.update_extension_errors);
pluto.playground.fx.clear_errors = (function pluto$playground$fx$clear_errors(p__1802,_){
var map__1803 = p__1802;
var map__1803__$1 = (((((!((map__1803 == null))))?(((((map__1803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1803):map__1803);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1803__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_clear_DASH_errors,pluto.playground.fx.clear_errors);
pluto.playground.fx.update_extension_parsed = (function pluto$playground$fx$update_extension_parsed(p__1805,p__1806){
var map__1807 = p__1805;
var map__1807__$1 = (((((!((map__1807 == null))))?(((((map__1807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1807):map__1807);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1807__$1,cljs.core.cst$kw$db);
var vec__1808 = p__1806;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1808,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1808,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$parsed,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,pluto.playground.fx.update_extension_parsed);
var G__1812_1824 = cljs.core.cst$kw$extension_SLASH_parse;
var G__1813_1825 = ((function (G__1812_1824){
return (function (p__1814){
var vec__1815 = p__1814;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1815,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1815,(1),null);
var map__1818 = pluto.core.parse(ctx,data);
var map__1818__$1 = (((((!((map__1818 == null))))?(((((map__1818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1818):map__1818);
var m = map__1818__$1;
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1818__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1818__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__1820 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1820) : re_frame.core.dispatch.call(null,G__1820));
} else {
var G__1821_1826 = react_native_web.hooks.hook_in(cljs.core.first(cljs.core.cst$kw$hooks.cljs$core$IFn$_invoke$arity$1(data__$1)));
var G__1822_1827 = document.getElementById("extension");
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__1821_1826,G__1822_1827) : reagent.core.render_component.call(null,G__1821_1826,G__1822_1827));

var G__1823 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,data__$1], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1823) : re_frame.core.dispatch.call(null,G__1823));
}
});})(G__1812_1824))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1812_1824,G__1813_1825) : re_frame.core.reg_fx.call(null,G__1812_1824,G__1813_1825));
pluto.playground.fx.update_extension_data = (function pluto$playground$fx$update_extension_data(p__1828,p__1829){
var map__1830 = p__1828;
var map__1830__$1 = (((((!((map__1830 == null))))?(((((map__1830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1830):map__1830);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1830__$1,cljs.core.cst$kw$db);
var vec__1831 = p__1829;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1831,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1831,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1831,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$data,data),cljs.core.cst$kw$extension_SLASH_parse,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_data,pluto.playground.fx.update_extension_data);
var G__1835_1846 = cljs.core.cst$kw$extension_SLASH_read;
var G__1836_1847 = ((function (G__1835_1846){
return (function (p__1837){
var vec__1838 = p__1837;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1838,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1838,(1),null);
var G__1841_1848 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_clear_DASH_errors], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1841_1848) : re_frame.core.dispatch.call(null,G__1841_1848));

var map__1842 = pluto.core.read(source);
var map__1842__$1 = (((((!((map__1842 == null))))?(((((map__1842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1842):map__1842);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1842__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1842__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__1844 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1844) : re_frame.core.dispatch.call(null,G__1844));
} else {
var G__1845 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_data,ctx,data], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1845) : re_frame.core.dispatch.call(null,G__1845));
}
});})(G__1835_1846))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1835_1846,G__1836_1847) : re_frame.core.reg_fx.call(null,G__1835_1846,G__1836_1847));
pluto.playground.fx.update_extension_source = (function pluto$playground$fx$update_extension_source(p__1849,p__1850){
var map__1851 = p__1849;
var map__1851__$1 = (((((!((map__1851 == null))))?(((((map__1851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1851):map__1851);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1851__$1,cljs.core.cst$kw$db);
var vec__1852 = p__1850;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1852,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1852,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1852,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$source,data),cljs.core.cst$kw$extension_SLASH_read,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_source,pluto.playground.fx.update_extension_source);
var G__1856_1862 = cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value;
var G__1857_1863 = ((function (G__1856_1862){
return (function (p__1858){
var vec__1859 = p__1858;
var cm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1859,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1859,(1),null);
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
});})(G__1856_1862))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1856_1862,G__1857_1863) : re_frame.core.reg_fx.call(null,G__1856_1862,G__1857_1863));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_editor,(function (p__1864,p__1865){
var map__1866 = p__1864;
var map__1866__$1 = (((((!((map__1866 == null))))?(((((map__1866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1866):map__1866);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1866__$1,cljs.core.cst$kw$db);
var vec__1867 = p__1865;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1867,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1867,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code_DASH_mirror.cljs$core$IFn$_invoke$arity$1(db),data], null)], null);
}));
pluto.playground.fx.append_log = (function pluto$playground$fx$append_log(p__1871,p__1872){
var map__1873 = p__1871;
var map__1873__$1 = (((((!((map__1873 == null))))?(((((map__1873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1873):map__1873);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1873__$1,cljs.core.cst$kw$db);
var vec__1874 = p__1872;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1874,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1874,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$logs,cljs.core.conj,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_append_DASH_log,pluto.playground.fx.append_log);
pluto.playground.fx.switch_filter_logs = (function pluto$playground$fx$switch_filter_logs(p__1878,p__1879){
var map__1880 = p__1878;
var map__1880__$1 = (((((!((map__1880 == null))))?(((((map__1880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1880):map__1880);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1880__$1,cljs.core.cst$kw$db);
var vec__1881 = p__1879;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1881,(0),null);
var checked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1881,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$filtered_DASH_logs,checked)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_filter_DASH_logs,pluto.playground.fx.switch_filter_logs);
pluto.playground.fx.clear_logs = (function pluto$playground$fx$clear_logs(p__1885,_){
var map__1886 = p__1885;
var map__1886__$1 = (((((!((map__1886 == null))))?(((((map__1886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1886):map__1886);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1886__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$logs)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_clear_DASH_logs,pluto.playground.fx.clear_logs);
pluto.playground.fx.set_selected = (function pluto$playground$fx$set_selected(p__1888,p__1889){
var map__1890 = p__1888;
var map__1890__$1 = (((((!((map__1890 == null))))?(((((map__1890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1890):map__1890);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1890__$1,cljs.core.cst$kw$db);
var vec__1891 = p__1889;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1891,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1891,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selected,path)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_selected,pluto.playground.fx.set_selected);
pluto.playground.fx.switch_preview = (function pluto$playground$fx$switch_preview(p__1895,p__1896){
var map__1897 = p__1895;
var map__1897__$1 = (((((!((map__1897 == null))))?(((((map__1897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1897):map__1897);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1897__$1,cljs.core.cst$kw$db);
var vec__1898 = p__1896;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1898,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$preview,cljs.core.not)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_preview,pluto.playground.fx.switch_preview);
var G__1902_1904 = cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs;
var G__1903_1905 = ((function (G__1902_1904){
return (function (value){
return pluto.playground.ipfs.save(value);
});})(G__1902_1904))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1902_1904,G__1903_1905) : re_frame.core.reg_fx.call(null,G__1902_1904,G__1903_1905));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_publish,(function (p__1906,_){
var map__1907 = p__1906;
var map__1907__$1 = (((((!((map__1907 == null))))?(((((map__1907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1907):map__1907);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1907__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$publish,cljs.core.cst$kw$in_DASH_progress_QMARK_], null),true),cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs,cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db)], null);
}));
var G__1910_1913 = cljs.core.cst$kw$fetch_DASH_extension_DASH_fx;
var G__1911_1914 = ((function (G__1910_1913){
return (function (){
var hash = (new URL(document.location)).searchParams.get("hash");
var uri = (cljs.core.truth_(hash)?["ipfs@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''):"url@assets/extensions/command/");
return pluto.storages.fetch(uri,((function (hash,uri,G__1910_1913){
return (function (p1__1909_SHARP_){
var G__1912 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_editor,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__1909_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value,cljs.core.cst$kw$content], null))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1912) : re_frame.core.dispatch.call(null,G__1912));
});})(hash,uri,G__1910_1913))
);
});})(G__1910_1913))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1910_1913,G__1911_1914) : re_frame.core.reg_fx.call(null,G__1910_1913,G__1911_1914));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fetch_DASH_extension,(function (p__1915,_){
var map__1916 = p__1915;
var map__1916__$1 = (((((!((map__1916 == null))))?(((((map__1916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1916):map__1916);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1916__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fetch_DASH_extension_DASH_fx,null], null);
}));
var G__1918_1920 = cljs.core.cst$kw$set_DASH_url_DASH_fx;
var G__1919_1921 = ((function (G__1918_1920){
return (function (hash){
return pluto.playground.ipfs.set_url(hash);
});})(G__1918_1920))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1918_1920,G__1919_1921) : re_frame.core.reg_fx.call(null,G__1918_1920,G__1919_1921));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$open_DASH_example,(function (p__1922,p__1923){
var map__1924 = p__1922;
var map__1924__$1 = (((((!((map__1924 == null))))?(((((map__1924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1924):map__1924);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1924__$1,cljs.core.cst$kw$db);
var vec__1925 = p__1923;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1925,(0),null);
var hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1925,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$examples),cljs.core.cst$kw$set_DASH_url_DASH_fx,hash,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fetch_DASH_extension], null)], null);
}));
