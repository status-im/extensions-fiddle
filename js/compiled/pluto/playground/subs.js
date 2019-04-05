// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.playground.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
var G__1807_1813 = cljs.core.cst$kw$get;
var G__1808_1814 = ((function (G__1807_1813){
return (function (db,p__1809){
var vec__1810 = p__1809;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1810,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1810,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,k);
});})(G__1807_1813))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1807_1813,G__1808_1814) : re_frame.core.reg_sub.call(null,G__1807_1813,G__1808_1814));
var G__1815_1821 = cljs.core.cst$kw$get_DASH_in;
var G__1816_1822 = ((function (G__1815_1821){
return (function (db,p__1817){
var vec__1818 = p__1817;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1818,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1818,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path);
});})(G__1815_1821))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1815_1821,G__1816_1822) : re_frame.core.reg_sub.call(null,G__1815_1821,G__1816_1822));
pluto.playground.subs.extension_parsed = (function pluto$playground$subs$extension_parsed(db,v){
return cljs.core.cst$kw$parsed.cljs$core$IFn$_invoke$arity$1(db);
});
var G__1823_1825 = cljs.core.cst$kw$extension_SLASH_parsed;
var G__1824_1826 = pluto.playground.subs.extension_parsed;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1823_1825,G__1824_1826) : re_frame.core.reg_sub.call(null,G__1823_1825,G__1824_1826));
pluto.playground.subs.extension_data = (function pluto$playground$subs$extension_data(db,v){
return cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(db);
});
var G__1827_1829 = cljs.core.cst$kw$extension_SLASH_data;
var G__1828_1830 = pluto.playground.subs.extension_data;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1827_1829,G__1828_1830) : re_frame.core.reg_sub.call(null,G__1827_1829,G__1828_1830));
pluto.playground.subs.extension_source = (function pluto$playground$subs$extension_source(db,v){
return cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db);
});
var G__1831_1833 = cljs.core.cst$kw$extension_SLASH_source;
var G__1832_1834 = pluto.playground.subs.extension_source;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1831_1833,G__1832_1834) : re_frame.core.reg_sub.call(null,G__1831_1833,G__1832_1834));
var G__1835_1837 = cljs.core.cst$kw$extension_SLASH_logs;
var G__1836_1838 = cljs.core.cst$kw$logs;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1835_1837,G__1836_1838) : re_frame.core.reg_sub.call(null,G__1835_1837,G__1836_1838));
var G__1839_1841 = cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs_QMARK_;
var G__1840_1842 = cljs.core.cst$kw$filtered_DASH_logs;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1839_1841,G__1840_1842) : re_frame.core.reg_sub.call(null,G__1839_1841,G__1840_1842));
var G__1844_1854 = cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs;
var G__1845_1855 = cljs.core.cst$kw$_LT__DASH_;
var G__1846_1856 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_logs], null);
var G__1847_1857 = cljs.core.cst$kw$_LT__DASH_;
var G__1848_1858 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_filtered_DASH_logs_QMARK_], null);
var G__1849_1859 = ((function (G__1844_1854,G__1845_1855,G__1846_1856,G__1847_1857,G__1848_1858){
return (function (p__1850){
var vec__1851 = p__1850;
var logs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1851,(0),null);
var filtered_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1851,(1),null);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__1851,logs,filtered_QMARK_,G__1844_1854,G__1845_1855,G__1846_1856,G__1847_1857,G__1848_1858){
return (function (p1__1843_SHARP_){
if(filtered_QMARK_ === true){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$category.cljs$core$IFn$_invoke$arity$1(p1__1843_SHARP_),cljs.core.cst$kw$pluto$log_SLASH_trace);
} else {
return true;
}
});})(vec__1851,logs,filtered_QMARK_,G__1844_1854,G__1845_1855,G__1846_1856,G__1847_1857,G__1848_1858))
,logs);
});})(G__1844_1854,G__1845_1855,G__1846_1856,G__1847_1857,G__1848_1858))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__1844_1854,G__1845_1855,G__1846_1856,G__1847_1857,G__1848_1858,G__1849_1859) : re_frame.core.reg_sub.call(null,G__1844_1854,G__1845_1855,G__1846_1856,G__1847_1857,G__1848_1858,G__1849_1859));
var G__1860_1862 = cljs.core.cst$kw$extension_SLASH_errors;
var G__1861_1863 = cljs.core.cst$kw$errors;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1860_1862,G__1861_1863) : re_frame.core.reg_sub.call(null,G__1860_1862,G__1861_1863));
pluto.playground.subs.selected = (function pluto$playground$subs$selected(db,v){
return cljs.core.cst$kw$selected.cljs$core$IFn$_invoke$arity$1(db);
});
var G__1864_1866 = cljs.core.cst$kw$extension_SLASH_selected;
var G__1865_1867 = pluto.playground.subs.selected;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1864_1866,G__1865_1867) : re_frame.core.reg_sub.call(null,G__1864_1866,G__1865_1867));
pluto.playground.subs.preview = (function pluto$playground$subs$preview(db,v){
var or__4131__auto__ = cljs.core.cst$kw$preview.cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return false;
}
});
var G__1868_1870 = cljs.core.cst$kw$extension_SLASH_preview;
var G__1869_1871 = pluto.playground.subs.preview;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1868_1870,G__1869_1871) : re_frame.core.reg_sub.call(null,G__1868_1870,G__1869_1871));
var G__1872_1878 = cljs.core.cst$kw$extension_SLASH_properties;
var G__1873_1879 = ((function (G__1872_1878){
return (function (db,p__1874){
var vec__1875 = p__1874;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1875,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1875,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1875,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extensions_SLASH_properties,id], null));
});})(G__1872_1878))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1872_1878,G__1873_1879) : re_frame.core.reg_sub.call(null,G__1872_1878,G__1873_1879));
var G__1882_1889 = cljs.core.cst$kw$extension_DASH_keys;
var G__1883_1890 = cljs.core.cst$kw$_LT__DASH_;
var G__1884_1891 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_parsed], null);
var G__1885_1892 = ((function (G__1882_1889,G__1883_1890,G__1884_1891){
return (function (p__1886){
var map__1887 = p__1886;
var map__1887__$1 = (((((!((map__1887 == null))))?(((((map__1887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1887):map__1887);
var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1887__$1,cljs.core.cst$kw$views);
var hooks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1887__$1,cljs.core.cst$kw$hooks);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__1887,map__1887__$1,views,hooks,G__1882_1889,G__1883_1890,G__1884_1891){
return (function (p1__1880_SHARP_){
return ["hooks/",cljs.core.name(p1__1880_SHARP_)].join('');
});})(map__1887,map__1887__$1,views,hooks,G__1882_1889,G__1883_1890,G__1884_1891))
,cljs.core.keys(hooks)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__1887,map__1887__$1,views,hooks,G__1882_1889,G__1883_1890,G__1884_1891){
return (function (p1__1881_SHARP_){
return ["views/",cljs.core.name(p1__1881_SHARP_)].join('');
});})(map__1887,map__1887__$1,views,hooks,G__1882_1889,G__1883_1890,G__1884_1891))
,cljs.core.keys(views)));
});})(G__1882_1889,G__1883_1890,G__1884_1891))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__1882_1889,G__1883_1890,G__1884_1891,G__1885_1892) : re_frame.core.reg_sub.call(null,G__1882_1889,G__1883_1890,G__1884_1891,G__1885_1892));
var G__1893_1903 = cljs.core.cst$kw$extension_DASH_selection;
var G__1894_1904 = cljs.core.cst$kw$_LT__DASH_;
var G__1895_1905 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$extension_DASH_selection], null);
var G__1896_1906 = cljs.core.cst$kw$_LT__DASH_;
var G__1897_1907 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_keys], null);
var G__1898_1908 = ((function (G__1893_1903,G__1894_1904,G__1895_1905,G__1896_1906,G__1897_1907){
return (function (p__1899){
var vec__1900 = p__1899;
var extension_selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1900,(0),null);
var extension_keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1900,(1),null);
if(cljs.core.truth_(extension_selection)){
return extension_selection;
} else {
return cljs.core.first(extension_keys);
}
});})(G__1893_1903,G__1894_1904,G__1895_1905,G__1896_1906,G__1897_1907))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__1893_1903,G__1894_1904,G__1895_1905,G__1896_1906,G__1897_1907,G__1898_1908) : re_frame.core.reg_sub.call(null,G__1893_1903,G__1894_1904,G__1895_1905,G__1896_1906,G__1897_1907,G__1898_1908));
var G__1909_1919 = cljs.core.cst$kw$extension_SLASH_selected_DASH_properties;
var G__1910_1920 = cljs.core.cst$kw$_LT__DASH_;
var G__1911_1921 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$extensions_SLASH_properties], null);
var G__1912_1922 = cljs.core.cst$kw$_LT__DASH_;
var G__1913_1923 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_DASH_selection], null);
var G__1914_1924 = ((function (G__1909_1919,G__1910_1920,G__1911_1921,G__1912_1922,G__1913_1923){
return (function (p__1915){
var vec__1916 = p__1915;
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1916,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1916,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,id);
});})(G__1909_1919,G__1910_1920,G__1911_1921,G__1912_1922,G__1913_1923))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__1909_1919,G__1910_1920,G__1911_1921,G__1912_1922,G__1913_1923,G__1914_1924) : re_frame.core.reg_sub.call(null,G__1909_1919,G__1910_1920,G__1911_1921,G__1912_1922,G__1913_1923,G__1914_1924));
