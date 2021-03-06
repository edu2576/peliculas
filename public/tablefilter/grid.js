/** 
 *	 tablefilter v0.1.19 by Max Guglielmi
 *	 build date: 2016-03-11T05:55:58.914Z 
 *	 MIT License  
 */

! function(t, e) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var i = e();
        for (var s in i)("object" == typeof exports ? exports : t)[s] = i[s]
    }
}(this, function() {
    return function(t) {
        function e(i) {
            if (s[i]) return s[i].exports;
            var n = s[i] = {
                exports: {},
                id: i,
                loaded: !1
            };
            return t[i].call(n.exports, n, n.exports, e), n.loaded = !0, n.exports
        }
        var i = window.webpackJsonp;
        window.webpackJsonp = function(s, r) {
            for (var l, a, o = 0, u = []; o < s.length; o++) a = s[o], n[a] && u.push.apply(u, n[a]), n[a] = 0;
            for (l in r) t[l] = r[l];
            for (i && i(s, r); u.length;) u.shift().call(null, e)
        };
        var s = {},
            n = {
                0: 0
            };
        return e.e = function(t, i) {
            if (0 === n[t]) return i.call(null, e);
            if (void 0 !== n[t]) n[t].push(i);
            else {
                n[t] = [i];
                var s = document.getElementsByTagName("head")[0],
                    r = document.createElement("script");
                r.type = "text/javascript", r.charset = "utf-8", r.async = !0, r.src = e.p + "tf-" + ({}[t] || t) + ".js", s.appendChild(r)
            }
        }, e.m = t, e.c = s, e.p = "", e(0)
    }([function(t, e, i) {
        "use strict";

        function s(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.TableFilter = void 0;
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            },
            l = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var s = e[i];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                    }
                }
                return function(e, i, s) {
                    return i && t(e.prototype, i), s && t(e, s), e
                }
            }(),
            a = i(1),
            o = s(a),
            u = i(2),
            h = s(u),
            f = i(3),
            d = s(f),
            c = i(4),
            p = s(c),
            g = i(5),
            v = s(g),
            b = i(6),
            m = s(b),
            y = i(7),
            _ = i(8),
            C = i(10),
            w = i(12),
            x = i(13),
            k = i(14),
            T = i(15),
            P = i(18),
            F = i(19),
            R = i(20),
            S = i(21),
            I = i(22),
            O = i(23),
            E = i(24),
            L = i(25),
            N = window,
            B = N.document;
        e.TableFilter = function() {
            function t() {
                var e = this;
                n(this, t);
                for (var i = arguments.length, s = Array(i), l = 0; i > l; l++) s[l] = arguments[l];
                if (0 !== s.length) {
                    console.log(t.nodeName)
                    console.log(t)
                    if (this.id = null, this.version = "0.1.19", this.year = (new Date).getFullYear(), this.tbl = null, this.startRow = null, this.refRow = null, this.headersRow = null, this.cfg = {}, this.nbFilterableRows = null, this.nbRows = null, this.nbCells = null, this._hasGrid = !1, s.forEach(function(t) {
                            var i = "undefined" == typeof t ? "undefined" : r(t);
                            "object" === i && t && "TABLE" === t.nodeName ? (e.tbl = t, e.id = t.id || "tf_" + (new Date).getTime() + "_") : "string" === i ? (e.id = t, e.tbl = h["default"].id(t)) : "number" === i ? e.startRow = t : "object" === i && (e.cfg = t)
                        }), !this.tbl || "TABLE" != this.tbl.nodeName || 0 === this.getRowsNb()) throw new Error("Could not instantiate TableFilter: HTML table not found.");
                    var a = this.cfg;
                    this.emitter = new y.Emitter, this.refRow = null === this.startRow ? 2 : this.startRow + 1;
                    try {
                        this.nbCells = this.getCellsNb(this.refRow)
                    } catch (u) {
                        this.nbCells = this.getCellsNb(0)
                    }
                    this.basePath = a.base_path || "../../js/tablefilter/", this.fltTypeInp = "input", this.fltTypeSlc = "select", this.fltTypeMulti = "multiple", this.fltTypeCheckList = "checklist", this.fltTypeNone = "none", this.fltGrid = a.grid === !1 ? !1 : !0, this.gridLayout = Boolean(a.grid_layout), this.filtersRowIndex = isNaN(a.filters_row_index) ? 0 : a.filters_row_index, this.headersRow = isNaN(a.headers_row_index) ? 0 === this.filtersRowIndex ? 1 : 0 : a.headers_row_index, this.fltCellTag = "th" !== a.filters_cell_tag || "td" !== a.filters_cell_tag ? "td" : a.filters_cell_tag, this.fltIds = [], this.fltElms = [], this.validRowsIndex = [], this.fltGridEl = null, this.infDiv = null, this.lDiv = null, this.rDiv = null, this.mDiv = null, this.infDivCssClass = a.inf_div_css_class || "inf", this.lDivCssClass = a.left_div_css_class || "ldiv", this.rDivCssClass = a.right_div_css_class || "rdiv", this.mDivCssClass = a.middle_div_css_class || "mdiv", this.contDivCssClass = a.content_div_css_class || "cont", this.stylePath = a.style_path || this.basePath + "style/", this.stylesheet = a.stylesheet || this.stylePath + "tablefilter.css", this.stylesheetId = this.id + "_style", this.fltsRowCssClass = a.flts_row_css_class || "fltrow", this.enableIcons = a.enable_icons === !1 ? !1 : !0, this.alternateRows = Boolean(a.alternate_rows), this.hasColWidths = p["default"].isArray(a.col_widths), this.colWidths = this.hasColWidths ? a.col_widths : null, this.fltCssClass = a.flt_css_class || "flt", this.fltMultiCssClass = a.flt_multi_css_class || "flt_multi", this.fltSmallCssClass = a.flt_small_css_class || "flt_s", this.singleFltCssClass = a.single_flt_css_class || "single_flt", this.enterKey = a.enter_key === !1 ? !1 : !0, this.onBeforeFilter = p["default"].isFn(a.on_before_filter) ? a.on_before_filter : null, this.onAfterFilter = p["default"].isFn(a.on_after_filter) ? a.on_after_filter : null, this.caseSensitive = Boolean(a.case_sensitive), this.hasExactMatchByCol = p["default"].isArray(a.columns_exact_match), this.exactMatchByCol = this.hasExactMatchByCol ? a.columns_exact_match : [], this.exactMatch = Boolean(a.exact_match), this.linkedFilters = Boolean(a.linked_filters), this.disableExcludedOptions = Boolean(a.disable_excluded_options), this.activeFlt = null, this.activeFilterId = null, this.hasVisibleRows = Boolean(a.rows_always_visible), this.visibleRows = this.hasVisibleRows ? a.rows_always_visible : [], this.isExternalFlt = Boolean(a.external_flt_grid), this.externalFltTgtIds = a.external_flt_grid_ids || [], this.externalFltEls = [], this.execDelay = isNaN(a.exec_delay) ? 100 : parseInt(a.exec_delay, 10), this.onFiltersLoaded = p["default"].isFn(a.on_filters_loaded) ? a.on_filters_loaded : null, this.singleSearchFlt = Boolean(a.single_filter), this.onRowValidated = p["default"].isFn(a.on_row_validated) ? a.on_row_validated : null, this.customCellDataCols = a.custom_cell_data_cols ? a.custom_cell_data_cols : [], this.customCellData = p["default"].isFn(a.custom_cell_data) ? a.custom_cell_data : null, this.watermark = a.watermark || "", this.isWatermarkArray = p["default"].isArray(this.watermark), this.toolBarTgtId = a.toolbar_target_id || null, this.help = p["default"].isUndef(a.help_instructions) ? void 0 : Boolean(a.help_instructions), this.popupFilters = Boolean(a.popup_filters), this.markActiveColumns = Boolean(a.mark_active_columns), this.activeColumnsCssClass = a.active_columns_css_class || "activeHeader", this.onBeforeActiveColumn = p["default"].isFn(a.on_before_active_column) ? a.on_before_active_column : null, this.onAfterActiveColumn = p["default"].isFn(a.on_after_active_column) ? a.on_after_active_column : null, this.displayAllText = a.display_all_text || "Clear", this.enableEmptyOption = Boolean(a.enable_empty_option), this.emptyText = a.empty_text || "(Empty)", this.enableNonEmptyOption = Boolean(a.enable_non_empty_option), this.nonEmptyText = a.non_empty_text || "(Non empty)", this.onSlcChange = a.on_change === !1 ? !1 : !0, this.sortSlc = a.sort_select === !1 ? !1 : !0, this.isSortNumAsc = Boolean(a.sort_num_asc), this.sortNumAsc = this.isSortNumAsc ? a.sort_num_asc : [], this.isSortNumDesc = Boolean(a.sort_num_desc), this.sortNumDesc = this.isSortNumDesc ? a.sort_num_desc : [], this.loadFltOnDemand = Boolean(a.load_filters_on_demand), this.hasCustomOptions = p["default"].isObj(a.custom_options), this.customOptions = a.custom_options, this.rgxOperator = a.regexp_operator || "rgx:", this.emOperator = a.empty_operator || "[empty]", this.nmOperator = a.nonempty_operator || "[nonempty]", this.orOperator = a.or_operator || "||", this.anOperator = a.and_operator || "&&", this.grOperator = a.greater_operator || ">", this.lwOperator = a.lower_operator || "<", this.leOperator = a.lower_equal_operator || "<=", this.geOperator = a.greater_equal_operator || ">=", this.dfOperator = a.different_operator || "!", this.lkOperator = a.like_operator || "*", this.eqOperator = a.equal_operator || "=", this.stOperator = a.start_with_operator || "{", this.enOperator = a.end_with_operator || "}", this.curExp = a.cur_exp || "^[¥£€$]", this.separator = a.separator || ",", this.rowsCounter = Boolean(a.rows_counter), this.statusBar = Boolean(a.status_bar), this.loader = Boolean(a.loader), this.displayBtn = Boolean(a.btn), this.btnText = a.btn_text || (this.enableIcons ? "" : "Go"), this.btnCssClass = a.btn_css_class || (this.enableIcons ? "btnflt_icon" : "btnflt"), this.btnReset = Boolean(a.btn_reset), this.btnResetCssClass = a.btn_reset_css_class || "reset", this.onBeforeReset = p["default"].isFn(a.on_before_reset) ? a.on_before_reset : null, this.onAfterReset = p["default"].isFn(a.on_after_reset) ? a.on_after_reset : null, this.paging = Boolean(a.paging), this.nbVisibleRows = 0, this.nbHiddenRows = 0, this.autoFilter = Boolean(a.auto_filter), this.autoFilterDelay = isNaN(a.auto_filter_delay) ? 900 : a.auto_filter_delay, this.isUserTyping = null, this.autoFilterTimer = null, this.highlightKeywords = Boolean(a.highlight_keywords), this.noResults = p["default"].isObj(a.no_results_message) || Boolean(a.no_results_message), this.defaultDateType = a.default_date_type || "DMY", this.thousandsSeparator = a.thousands_separator || ",", this.decimalSeparator = a.decimal_separator || ".", this.hasColNbFormat = p["default"].isArray(a.col_number_format), this.colNbFormat = this.hasColNbFormat ? a.col_number_format : null, this.hasColDateType = p["default"].isArray(a.col_date_type), this.colDateType = this.hasColDateType ? a.col_date_type : null, this.prfxTf = "TF", this.prfxFlt = "flt", this.prfxValButton = "btn", this.prfxInfDiv = "inf_", this.prfxLDiv = "ldiv_", this.prfxRDiv = "rdiv_", this.prfxMDiv = "mdiv_", this.prfxCookieFltsValues = "tf_flts_", this.prfxCookiePageNb = "tf_pgnb_", this.prfxCookiePageLen = "tf_pglen_", this.rememberGridValues = Boolean(a.remember_grid_values), this.rememberPageNb = this.paging && a.remember_page_number, this.rememberPageLen = this.paging && a.remember_page_length, this.hasPersistence = this.rememberGridValues || this.rememberPageNb || this.rememberPageLen, this.extensions = a.extensions, this.hasExtensions = p["default"].isArray(this.extensions), this.enableDefaultTheme = Boolean(a.enable_default_theme), this.hasThemes = this.enableDefaultTheme || p["default"].isArray(a.themes), this.themes = a.themes || [], this.themesPath = a.themes_path || this.stylePath + "themes/", this.Mod = {}, this.ExtRegistry = {}, this.Evt = {
                        detectKey: function(t) {
                            if (this.enterKey && t) {
                                var e = o["default"].keyCode(t);
                                13 === e ? (this.filter(), o["default"].cancel(t), o["default"].stop(t)) : (this.isUserTyping = !0, N.clearInterval(this.autoFilterTimer), this.autoFilterTimer = null)
                            }
                        },
                        onKeyUp: function(t) {
                            function e() {
                                N.clearInterval(this.autoFilterTimer), this.autoFilterTimer = null, this.isUserTyping || (this.filter(), this.isUserTyping = null)
                            }
                            if (this.autoFilter) {
                                var i = o["default"].keyCode(t);
                                this.isUserTyping = !1, 13 !== i && 9 !== i && 27 !== i && 38 !== i && 40 !== i ? null === this.autoFilterTimer && (this.autoFilterTimer = N.setInterval(e.bind(this), this.autoFilterDelay)) : (N.clearInterval(this.autoFilterTimer), this.autoFilterTimer = null)
                            }
                        },
                        onKeyDown: function() {
                            this.autoFilter && (this.isUserTyping = !0)
                        },
                        onInpBlur: function() {
                            this.autoFilter && (this.isUserTyping = !1, N.clearInterval(this.autoFilterTimer)), this.emitter.emit("filter-blur", this)
                        },
                        onInpFocus: function(t) {
                            var e = o["default"].target(t);
                            this.activeFilterId = e.getAttribute("id"), this.activeFlt = h["default"].id(this.activeFilterId), this.emitter.emit("filter-focus", this)
                        }
                    }
                }
            }
            return l(t, [{
                key: "init",
                value: function() {
                    var t = this;
                    if (!this._hasGrid) {
                        var e = this.Mod,
                            i = this.singleSearchFlt ? 1 : this.nbCells,
                            s = void 0;
                        if (this["import"](this.stylesheetId, this.stylesheet, null, "link"), this.hasThemes && this.loadThemes(), e.help || (e.help = new O.Help(this)), this.help && e.help.init(), this.hasPersistence && (e.store || (e.store = new _.Store(this)), e.store.init()), this.gridLayout && (e.gridLayout || (e.gridLayout = new C.GridLayout(this)), e.gridLayout.init()), this.loader && (e.loader || (e.loader = new w.Loader(this)), e.loader.init()), this.highlightKeywords && (e.highlightKeyword = new x.HighlightKeyword(this), e.highlightKeyword.init()), this.popupFilters && (e.popupFilter || (e.popupFilter = new k.PopupFilter(this)), e.popupFilter.init()), this.fltGrid) {
                            var n = this._insertFiltersRow();
                            this.nbFilterableRows = this.getRowsNb(), this.nbVisibleRows = this.nbFilterableRows, this.nbRows = this.tbl.rows.length;
                            for (var r = 0; i > r; r++) {
                                this.emitter.emit("before-filter-init", this, r);
                                var l = h["default"].create(this.fltCellTag),
                                    a = this.getFilterType(r);
                                this.singleSearchFlt && (l.colSpan = this.nbCells), this.gridLayout || n.appendChild(l), s = r == i - 1 && this.displayBtn ? this.fltSmallCssClass : this.fltCssClass, this.singleSearchFlt && (a = this.fltTypeInp, s = this.singleFltCssClass), a === this.fltTypeSlc || a === this.fltTypeMulti ? (e.dropdown || (e.dropdown = new T.Dropdown(this)), e.dropdown.init(r, this.isExternalFlt, l)) : a === this.fltTypeCheckList ? (e.checkList || (e.checkList = new P.CheckList(this)), e.checkList.init(r, this.isExternalFlt, l)) : this._buildInputFilter(r, s, l), r == i - 1 && this.displayBtn && this._buildSubmitButton(r, l), this.emitter.emit("after-filter-init", this, r)
                            }
                        } else this._initNoFilters();
                        this.hasVisibleRows && (this.emitter.on(["after-filtering"], function() {
                            return t.enforceVisibility()
                        }), this.enforceVisibility()), this.rowsCounter && (e.rowsCounter = new F.RowsCounter(this), e.rowsCounter.init()), this.statusBar && (e.statusBar = new R.StatusBar(this), e.statusBar.init()), this.paging && (e.paging ? e.paging.reset() : (e.paging = new S.Paging(this), e.paging.init())), this.btnReset && (e.clearButton = new I.ClearButton(this), e.clearButton.init()), this.hasColWidths && !this.gridLayout && this.setColWidths(), this.alternateRows && (e.alternateRows = new E.AlternateRows(this), e.alternateRows.init()), this.noResults && (e.noResults || (e.noResults = new L.NoResults(this)), e.noResults.init()), this._hasGrid = !0, this.hasPersistence && this.resetFilterValues(), this.gridLayout || h["default"].addClass(this.tbl, this.prfxTf), this.hasExtensions && this.initExtensions(), this.markActiveColumns && (this.emitter.on(["before-filtering"], function() {
                            return t.clearActiveColumns()
                        }), this.emitter.on(["cell-processed"], function(e, i) {
                            return t.markActiveColumn(i)
                        })), this.linkedFilters && this.emitter.on(["after-filtering"], function() {
                            return t.linkFilters()
                        }), this.onFiltersLoaded && this.onFiltersLoaded.call(null, this), this.initialized = !0, this.emitter.emit("initialized", this)
                    }
                }
            }, {
                key: "_insertFiltersRow",
                value: function() {
                    if (!this.gridLayout) {
                        var t = void 0,
                            e = h["default"].tag(this.tbl, "thead");
                        return t = e.length > 0 ? e[0].insertRow(this.filtersRowIndex) : this.tbl.insertRow(this.filtersRowIndex), t.className = this.fltsRowCssClass, this.isExternalFlt && (t.style.display = "none"), this.emitter.emit("filters-row-inserted", this, t), t
                    }
                }
            }, {
                key: "_initNoFilters",
                value: function() {
                    this.fltGrid || (this.refRow = this.refRow > 0 ? this.refRow - 1 : 0, this.nbFilterableRows = this.getRowsNb(), this.nbVisibleRows = this.nbFilterableRows, this.nbRows = this.nbFilterableRows + this.refRow)
                }
            }, {
                key: "_buildInputFilter",
                value: function(t, e, i) {
                    var s = this.getFilterType(t),
                        n = this.isExternalFlt ? this.externalFltTgtIds[t] : null,
                        r = s === this.fltTypeInp ? "text" : "hidden",
                        l = h["default"].create(this.fltTypeInp, ["id", this.prfxFlt + t + "_" + this.id], ["type", r], ["ct", t]);
                    "hidden" !== r && this.watermark && l.setAttribute("placeholder", this.isWatermarkArray ? this.watermark[t] || "" : this.watermark), l.className = e || this.fltCssClass, o["default"].add(l, "focus", this.Evt.onInpFocus.bind(this)), n ? (h["default"].id(n).appendChild(l), this.externalFltEls.push(l)) : i.appendChild(l), this.fltIds.push(l.id), o["default"].add(l, "keypress", this.Evt.detectKey.bind(this)), o["default"].add(l, "keydown", this.Evt.onKeyDown.bind(this)), o["default"].add(l, "keyup", this.Evt.onKeyUp.bind(this)), o["default"].add(l, "blur", this.Evt.onInpBlur.bind(this))
                }
            }, {
                key: "_buildSubmitButton",
                value: function(t, e) {
                    var i = this,
                        s = this.isExternalFlt ? this.externalFltTgtIds[t] : null,
                        n = h["default"].create(this.fltTypeInp, ["id", this.prfxValButton + t + "_" + this.id], ["type", "button"], ["value", this.btnText]);
                    n.className = this.btnCssClass, s ? h["default"].id(s).appendChild(n) : e.appendChild(n), o["default"].add(n, "click", function() {
                        return i.filter()
                    })
                }
            }, {
                key: "feature",
                value: function(t) {
                    return this.Mod[t]
                }
            }, {
                key: "initExtensions",
                value: function() {
                    var t = this.extensions;
                    i.p = this.basePath, this.emitter.emit("before-loading-extensions", this);
                    for (var e = 0, s = t.length; s > e; e++) {
                        var n = t[e];
                        this.ExtRegistry[n.name] || this.loadExtension(n)
                    }
                    this.emitter.emit("after-loading-extensions", this)
                }
            }, {
                key: "loadExtension",
                value: function(t) {
                    var e = this;
                    if (t && t.name) {
                        var s = t.name,
                            n = t.path,
                            r = void 0;
                        s && n ? r = t.path + s : (s = s.replace(".js", ""), r = "extensions/{}/{}".replace(/{}/g, s)), i.e(1, function(i) {
                            var n = [i(26)("./" + r)];
                            (function(i) {
                                var n = new i["default"](e, t);
                                n.init(), e.ExtRegistry[s] = n
                            }).apply(null, n)
                        })
                    }
                }
            }, {
                key: "extension",
                value: function(t) {
                    return this.ExtRegistry[t]
                }
            }, {
                key: "hasExtension",
                value: function(t) {
                    return !p["default"].isEmpty(this.ExtRegistry[t])
                }
            }, {
                key: "destroyExtensions",
                value: function() {
                    for (var t = this.extensions, e = 0, i = t.length; i > e; e++) {
                        var s = t[e],
                            n = this.ExtRegistry[s.name];
                        n && (n.destroy(), this.ExtRegistry[s.name] = null)
                    }
                }
            }, {
                key: "loadThemes",
                value: function() {
                    var t = this.themes;
                    if (this.emitter.emit("before-loading-themes", this), this.enableDefaultTheme) {
                        var e = {
                            name: "default"
                        };
                        this.themes.push(e)
                    }
                    if (p["default"].isArray(t))
                        for (var i = 0, s = t.length; s > i; i++) {
                            var n = t[i],
                                r = n.name,
                                l = n.path,
                                a = this.prfxTf + r;
                            r && !l ? l = this.themesPath + r + "/" + r + ".css" : !r && n.path && (r = "theme{0}".replace("{0}", i)), this.isImported(l, "link") || this["import"](a, l, null, "link")
                        }
                    this.btnResetText = null, this.btnResetHtml = '<input type="button" value="" class="' + this.btnResetCssClass + '" title="Clear filters" />', this.btnPrevPageHtml = '<input type="button" value="" class="' + this.btnPageCssClass + ' previousPage" title="Previous page" />', this.btnNextPageHtml = '<input type="button" value="" class="' + this.btnPageCssClass + ' nextPage" title="Next page" />', this.btnFirstPageHtml = '<input type="button" value="" class="' + this.btnPageCssClass + ' firstPage" title="First page" />', this.btnLastPageHtml = '<input type="button" value="" class="' + this.btnPageCssClass + ' lastPage" title="Last page" />', this.loader = !0, this.loaderHtml = '<div class="defaultLoader"></div>', this.loaderText = null, this.emitter.emit("after-loading-themes", this)
                }
            }, {
                key: "getStylesheet",
                value: function() {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? "default" : arguments[0];
                    return h["default"].id(this.prfxTf + t)
                }
            }, {
                key: "destroy",
                value: function() {
                    var t = this;
                    if (this._hasGrid) {
                        var e = this.tbl.rows,
                            i = this.Mod,
                            s = this.emitter;
                        this.isExternalFlt && !this.popupFilters && this.removeExternalFlts(), this.infDiv && this.removeToolbar(), this.markActiveColumns && (this.clearActiveColumns(), s.off(["before-filtering"], function() {
                            return t.clearActiveColumns()
                        }), s.off(["cell-processed"], function(e, i) {
                            return t.markActiveColumn(i)
                        })), this.hasExtensions && this.destroyExtensions(), this.validateAllRows(), this.fltGrid && !this.gridLayout && (this.fltGridEl = e[this.filtersRowIndex], this.tbl.deleteRow(this.filtersRowIndex)), s.emit("destroy", this), Object.keys(i).forEach(function(t) {
                            var e = i[t];
                            e && p["default"].isFn(e.destroy) && e.destroy()
                        }), this.hasVisibleRows && s.off(["after-filtering"], function() {
                            return t.enforceVisibility()
                        }), this.linkedFilters && s.off(["after-filtering"], function() {
                            return t.linkFilters()
                        }), h["default"].removeClass(this.tbl, this.prfxTf), this.nbHiddenRows = 0, this.validRowsIndex = [], this.fltIds = [], this.activeFlt = null, this._hasGrid = !1, this.initialized = !1
                    }
                }
            }, {
                key: "setToolbar",
                value: function() {
                    if (!this.infDiv) {
                        var t = h["default"].create("div", ["id", this.prfxInfDiv + this.id]);
                        if (t.className = this.infDivCssClass, this.toolBarTgtId) h["default"].id(this.toolBarTgtId).appendChild(t);
                        else if (this.gridLayout) {
                            var e = this.Mod.gridLayout;
                            e.tblMainCont.appendChild(t), t.className = e.gridInfDivCssClass
                        } else {
                            var i = h["default"].create("caption");
                            i.appendChild(t), this.tbl.insertBefore(i, this.tbl.firstChild)
                        }
                        this.infDiv = h["default"].id(this.prfxInfDiv + this.id);
                        var s = h["default"].create("div", ["id", this.prfxLDiv + this.id]);
                        s.className = this.lDivCssClass, t.appendChild(s), this.lDiv = h["default"].id(this.prfxLDiv + this.id);
                        var n = h["default"].create("div", ["id", this.prfxRDiv + this.id]);
                        n.className = this.rDivCssClass, t.appendChild(n), this.rDiv = h["default"].id(this.prfxRDiv + this.id);
                        var r = h["default"].create("div", ["id", this.prfxMDiv + this.id]);
                        r.className = this.mDivCssClass, t.appendChild(r), this.mDiv = h["default"].id(this.prfxMDiv + this.id), p["default"].isUndef(this.help) && this.emitter.emit("init-help", this)
                    }
                }
            }, {
                key: "removeToolbar",
                value: function() {
                    if (this.infDiv) {
                        h["default"].remove(this.infDiv), this.infDiv = null;
                        var t = this.tbl,
                            e = h["default"].tag(t, "caption");
                        e.length > 0 && [].forEach.call(e, function(e) {
                            return t.removeChild(e)
                        })
                    }
                }
            }, {
                key: "removeExternalFlts",
                value: function() {
                    if (this.isExternalFlt)
                        for (var t = this.externalFltTgtIds, e = t.length, i = 0; e > i; i++) {
                            var s = t[i],
                                n = h["default"].id(s);
                            n && (n.innerHTML = "")
                        }
                }
            }, {
                key: "isCustomOptions",
                value: function(t) {
                    return this.hasCustomOptions && -1 != this.customOptions.cols.indexOf(t)
                }
            }, {
                key: "getCustomOptions",
                value: function(t) {
                    if (!p["default"].isEmpty(t) && this.isCustomOptions(t)) {
                        for (var e = this.customOptions, i = e.cols, s = [], n = [], r = i.indexOf(t), l = e.values[r], a = e.texts[r], o = e.sorts[r], u = 0, h = l.length; h > u; u++) n.push(l[u]), a[u] ? s.push(a[u]) : s.push(l[u]);
                        return o && (n.sort(), s.sort()), [n, s]
                    }
                }
            }, {
                key: "resetFilterValues",
                value: function() {
                    var t = this;
                    if (this.rememberGridValues) {
                        var e = this.Mod.store.getFilterValues();
                        e.forEach(function(e, i) {
                            " " !== e && t.setFilterValue(i, e)
                        }), this.filter()
                    }
                }
            }, {
                key: "filter",
                value: function() {
                    function t(t, e, i) {
                        if (this.highlightKeywords && e) {
                            t = t.replace(g, ""), t = t.replace(b, ""), t = t.replace(y, ""), t = t.replace(_, "");
                            var s = t;
                            (a.test(t) || o.test(t) || u.test(t) || f.test(t) || c.test(t)) && (s = h["default"].getText(i)), "" !== s && this.emitter.emit("highlight-keyword", this, i, s)
                        }
                    }

                    function e(t, e, i) {
                        t = d["default"].matchCase(t, this.caseSensitive);
                        var s = void 0,
                            l = m["default"].removeNbFormat,
                            h = u.test(t),
                            p = a.test(t),
                            k = f.test(t),
                            T = o.test(t),
                            P = c.test(t),
                            F = b.test(t),
                            R = g.test(t),
                            S = y.test(t),
                            I = _.test(t),
                            O = C === t,
                            L = w === t,
                            N = x.test(t),
                            B = h && v["default"].isValid(t.replace(u, ""), E),
                            D = p && v["default"].isValid(t.replace(a, ""), E),
                            M = k && v["default"].isValid(t.replace(f, ""), E),
                            A = T && v["default"].isValid(t.replace(o, ""), E),
                            j = P && v["default"].isValid(t.replace(c, ""), E),
                            H = F && v["default"].isValid(t.replace(b, ""), E),
                            V = void 0,
                            U = void 0;
                        if (v["default"].isValid(e, E)) V = v["default"].format(e, E), B ? (U = v["default"].format(t.replace(u, ""), E), s = U > V) : D ? (U = v["default"].format(t.replace(a, ""), E), s = U >= V) : A ? (U = v["default"].format(t.replace(o, ""), E), s = V >= U) : M ? (U = v["default"].format(t.replace(f, ""), E), s = V > U) : j ? (U = v["default"].format(t.replace(c, ""), E), s = V.toString() != U.toString()) : H ? (U = v["default"].format(t.replace(b, ""), E), s = V.toString() == U.toString()) : g.test(t) ? s = d["default"].contains(t.replace(g, ""), e, !1, this.caseSensitive) : v["default"].isValid(t, E) ? (U = v["default"].format(t, E), s = V.toString() === U.toString()) : s = O ? d["default"].isEmpty(e) : L ? !d["default"].isEmpty(e) : d["default"].contains(t, e, this.isExactMatch(i), this.caseSensitive);
                        else if (this.hasColNbFormat && this.colNbFormat[i] ? (n = l(e, this.colNbFormat[i]), r = this.colNbFormat[i]) : "," === this.thousandsSeparator && "." === this.decimalSeparator ? (n = l(e, "us"), r = "us") : (n = l(e, "eu"), r = "eu"), p) s = n <= l(t.replace(a, ""), r);
                        else if (T) s = n >= l(t.replace(o, ""), r);
                        else if (h) s = n < l(t.replace(u, ""), r);
                        else if (k) s = n > l(t.replace(f, ""), r);
                        else if (P) s = d["default"].contains(t.replace(c, ""), e, !1, this.caseSensitive) ? !1 : !0;
                        else if (R) s = d["default"].contains(t.replace(g, ""), e, !1, this.caseSensitive);
                        else if (F) s = d["default"].contains(t.replace(b, ""), e, !0, this.caseSensitive);
                        else if (S) s = 0 === e.indexOf(t.replace(y, "")) ? !0 : !1;
                        else if (I) {
                            var z = t.replace(_, "");
                            s = e.lastIndexOf(z, e.length - 1) === e.length - 1 - (z.length - 1) && e.lastIndexOf(z, e.length - 1) > -1 ? !0 : !1
                        } else if (O) s = d["default"].isEmpty(e);
                        else if (L) s = !d["default"].isEmpty(e);
                        else if (N) try {
                            var W = t.replace(x, ""),
                                G = new RegExp(W);
                            s = G.test(e)
                        } catch ($) {
                            s = !1
                        } else s = d["default"].contains(t, e, this.isExactMatch(i), this.caseSensitive);
                        return s
                    }
                    if (this.fltGrid && this._hasGrid) {
                        this.onBeforeFilter && this.onBeforeFilter.call(null, this), this.emitter.emit("before-filtering", this);
                        var i = this.tbl.rows,
                            s = 0;
                        this.validRowsIndex = [];
                        for (var n, r, l = this.getFiltersValue(), a = new RegExp(this.leOperator), o = new RegExp(this.geOperator), u = new RegExp(this.lwOperator), f = new RegExp(this.grOperator), c = new RegExp(this.dfOperator), g = new RegExp(d["default"].rgxEsc(this.lkOperator)), b = new RegExp(this.eqOperator), y = new RegExp(this.stOperator), _ = new RegExp(this.enOperator), C = this.emOperator, w = this.nmOperator, x = new RegExp(d["default"].rgxEsc(this.rgxOperator)), k = this.refRow; k < this.nbRows; k++) {
                            i[k].style.display = "";
                            var T = i[k].cells,
                                P = T.length;
                            if (P === this.nbCells) {
                                for (var F = [], R = !0, S = !1, I = 0; P > I; I++) {
                                    var O = l[this.singleSearchFlt ? 0 : I],
                                        E = this.hasColDateType ? this.colDateType[I] : this.defaultDateType;
                                    if ("" !== O) {
                                        var L = d["default"].matchCase(this.getCellData(T[I]), this.caseSensitive),
                                            N = O.toString().split(this.orOperator),
                                            B = N.length > 1,
                                            D = O.toString().split(this.anOperator),
                                            M = D.length > 1;
                                        if (p["default"].isArray(O) || B || M) {
                                            var A = void 0,
                                                j = void 0,
                                                H = !1;
                                            j = p["default"].isArray(O) ? O : B ? N : D;
                                            for (var V = 0, U = j.length; U > V && (A = d["default"].trim(j[V]), H = e.call(this, A, L, I), t.call(this, A, H, T[I]), !(B && H || M && !H)) && (!p["default"].isArray(O) || !H); V++);
                                            F[I] = H
                                        } else F[I] = e.call(this, d["default"].trim(O), L, I), t.call(this, O, F[I], T[I]);
                                        F[I] || (R = !1), this.singleSearchFlt && F[I] && (S = !0), this.emitter.emit("cell-processed", this, I, T[I])
                                    }
                                }
                                this.singleSearchFlt && S && (R = !0), R ? this.validateRow(k, !0) : (this.validateRow(k, !1), s++), this.emitter.emit("row-processed", this, k, this.validRowsIndex.length, R)
                            }
                        }
                        this.nbVisibleRows = this.validRowsIndex.length, this.nbHiddenRows = s, this.onAfterFilter && this.onAfterFilter.call(null, this), this.emitter.emit("after-filtering", this)
                    }
                }
            }, {
                key: "getColValues",
                value: function(t) {
                    var e = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
                        i = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2],
                        s = arguments.length <= 3 || void 0 === arguments[3] ? [] : arguments[3];
                    if (this.fltGrid) {
                        var n = this.tbl.rows,
                            r = [];
                        e && r.push(this.getHeadersText()[t]);
                        for (var l = this.refRow; l < this.nbRows; l++) {
                            var a = !1;
                            s.length > 0 && (a = -1 != s.indexOf(l));
                            var o = n[l].cells,
                                u = o.length;
                            if (u === this.nbCells && !a)
                                for (var h = 0; u > h; h++)
                                    if (h == t && "" === n[l].style.display) {
                                        var f = this.getCellData(o[h]),
                                            d = this.colNbFormat ? this.colNbFormat[t] : null,
                                            c = i ? m["default"].removeNbFormat(f, d) : f;
                                        r.push(c)
                                    }
                        }
                        return r
                    }
                }
            }, {
                key: "getFilterValue",
                value: function(t) {
                    if (this.fltGrid) {
                        var e = "",
                            i = [],
                            s = this.getFilterElement(t);
                        if (!s) return "";
                        var n = this.getFilterType(t);
                        if (n !== this.fltTypeMulti && n !== this.fltTypeCheckList) e = s.value;
                        else if (n === this.fltTypeMulti) {
                            for (var r = 0, l = s.options.length; l > r; r++) s.options[r].selected && i.push(s.options[r].value);
                            e = i.length > 0 ? i : ""
                        } else n === this.fltTypeCheckList && (null !== s.getAttribute("value") && (i = s.getAttribute("value"), i = i.substr(0, i.length - 3), i = i.split(" " + this.orOperator + " ")), e = i.length > 0 ? i : "");
                        return p["default"].isArray(e) && 1 === e.length && "" === e[0] && (e = ""), e
                    }
                }
            }, {
                key: "getFiltersValue",
                value: function() {
                    if (this.fltGrid) {
                        for (var t = [], e = 0, i = this.fltIds.length; i > e; e++) {
                            var s = this.getFilterValue(e);
                            p["default"].isArray(s) ? t.push(s) : t.push(d["default"].trim(s))
                        }
                        return t
                    }
                }
            }, {
                key: "getFilterId",
                value: function(t) {
                    return this.fltGrid ? this.fltIds[t] : void 0
                }
            }, {
                key: "getFiltersByType",
                value: function(t, e) {
                    if (this.fltGrid) {
                        for (var i = [], s = 0, n = this.fltIds.length; n > s; s++) {
                            var r = this.getFilterType(s);
                            if (r === d["default"].lower(t)) {
                                var l = e ? s : this.fltIds[s];
                                i.push(l)
                            }
                        }
                        return i
                    }
                }
            }, {
                key: "getFilterElement",
                value: function(t) {
                    var e = this.fltIds[t];
                    return h["default"].id(e)
                }
            }, {
                key: "getCellsNb",
                value: function() {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0],
                        e = this.tbl.rows[t];
                    return e.cells.length
                }
            }, {
                key: "getRowsNb",
                value: function(t) {
                    var e = p["default"].isUndef(this.refRow) ? 0 : this.refRow,
                        i = this.tbl.rows.length;
                    return t && (e = 0), parseInt(i - e, 10)
                }
            }, {
                key: "getCellData",
                value: function(t) {
                    var e = t.cellIndex;
                    return this.customCellData && -1 != this.customCellDataCols.indexOf(e) ? this.customCellData.call(null, this, t, e) : h["default"].getText(t)
                }
            }, {
                key: "getTableData",
                value: function() {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? !1 : arguments[0],
                        e = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
                        i = this.tbl.rows,
                        s = [];
                    if (t) {
                        var n = this.getHeadersText(e);
                        s.push([this.getHeadersRowIndex(), n])
                    }
                    for (var r = this.refRow; r < this.nbRows; r++) {
                        for (var l = [r, []], a = i[r].cells, o = 0, u = a.length; u > o; o++)
                            if (!(e && this.hasExtension("colsVisibility") && this.extension("colsVisibility").isColHidden(o))) {
                                var h = this.getCellData(a[o]);
                                l[1].push(h)
                            }
                        s.push(l)
                    }
                    return s
                }
            }, {
                key: "getFilteredData",
                value: function() {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? !1 : arguments[0],
                        e = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1];
                    if (!this.validRowsIndex) return [];
                    var i = this.tbl.rows,
                        s = [];
                    if (t) {
                        var n = this.getHeadersText(e);
                        s.push([this.getHeadersRowIndex(), n])
                    }
                    for (var r = this.getValidRows(!0), l = 0; l < r.length; l++) {
                        for (var a = [this.validRowsIndex[l],
                                []
                            ], o = i[this.validRowsIndex[l]].cells, u = 0; u < o.length; u++)
                            if (!(e && this.hasExtension("colsVisibility") && this.extension("colsVisibility").isColHidden(u))) {
                                var h = this.getCellData(o[u]);
                                a[1].push(h)
                            }
                        s.push(a)
                    }
                    return s
                }
            }, {
                key: "getFilteredDataCol",
                value: function(t) {
                    var e = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1];
                    if (p["default"].isUndef(t)) return [];
                    var i = this.getFilteredData(),
                        s = [];
                    e && s.push(this.getHeadersText()[t]);
                    for (var n = 0, r = i.length; r > n; n++) {
                        var l = i[n],
                            a = l[1],
                            o = a[t];
                        s.push(o)
                    }
                    return s
                }
            }, {
                key: "getRowDisplay",
                value: function(t) {
                    return p["default"].isObj(t) ? t.style.display : null
                }
            }, {
                key: "validateRow",
                value: function(t, e) {
                    var i = this.tbl.rows[t];
                    if (i && "boolean" == typeof e) {
                        this.hasVisibleRows && -1 !== this.visibleRows.indexOf(t) && (e = !0);
                        var s = e ? "" : "none",
                            n = e ? "true" : "false";
                        i.style.display = s, this.paging && i.setAttribute("validRow", n), e && (-1 === this.validRowsIndex.indexOf(t) && this.validRowsIndex.push(t), this.onRowValidated && this.onRowValidated.call(null, this, t), this.emitter.emit("row-validated", this, t))
                    }
                }
            }, {
                key: "validateAllRows",
                value: function() {
                    if (this._hasGrid) {
                        this.validRowsIndex = [];
                        for (var t = this.refRow; t < this.nbFilterableRows; t++) this.validateRow(t, !0)
                    }
                }
            }, {
                key: "setFilterValue",
                value: function(t) {
                    var e = arguments.length <= 1 || void 0 === arguments[1] ? "" : arguments[1];
                    if (this.fltGrid) {
                        var i = this.getFilterElement(t),
                            s = this.getFilterType(t);
                        if (s !== this.fltTypeMulti && s != this.fltTypeCheckList) this.loadFltOnDemand && !this.initialized && this.emitter.emit("build-select-filter", this, t, this.linkedFilters, this.isExternalFlt), i.value = e;
                        else if (s === this.fltTypeMulti) {
                            var n = p["default"].isArray(e) ? e : e.split(" " + this.orOperator + " ");
                            this.loadFltOnDemand && !this.initialized && this.emitter.emit("build-select-filter", this, t, this.linkedFilters, this.isExternalFlt), this.emitter.emit("select-options", this, t, n)
                        } else if (s === this.fltTypeCheckList) {
                            var n = [];
                            this.loadFltOnDemand && !this.initialized && this.emitter.emit("build-checklist-filter", this, t, this.isExternalFlt), p["default"].isArray(e) ? n = e : (e = d["default"].matchCase(e, this.caseSensitive), n = e.split(" " + this.orOperator + " ")), this.emitter.emit("select-checklist-options", this, t, n)
                        }
                    }
                }
            }, {
                key: "setColWidths",
                value: function(t) {
                    function e() {
                        for (var e = this.nbCells, i = this.colWidths, s = h["default"].tag(t, "col"), n = s.length > 0, r = n ? null : B.createDocumentFragment(), l = 0; e > l; l++) {
                            var a = void 0;
                            n ? a = s[l] : (a = h["default"].create("col", ["id", this.id + "_col_" + l]), r.appendChild(a)), a.style.width = i[l]
                        }
                        n || t.insertBefore(r, t.firstChild)
                    }
                    this.hasColWidths && (t = t || this.tbl, e.call(this))
                }
            }, {
                key: "enforceVisibility",
                value: function() {
                    if (this.hasVisibleRows)
                        for (var t = 0, e = this.visibleRows.length; e > t; t++) {
                            var i = this.visibleRows[t];
                            i <= this.nbRows && this.validateRow(i, !0)
                        }
                }
            }, {
                key: "clearFilters",
                value: function() {
                    if (this.fltGrid) {
                        this.emitter.emit("before-clearing-filters", this), this.onBeforeReset && this.onBeforeReset.call(null, this, this.getFiltersValue());
                        for (var t = 0, e = this.fltIds.length; e > t; t++) this.setFilterValue(t, "");
                        this.filter(), this.onAfterReset && this.onAfterReset.call(null, this), this.emitter.emit("after-clearing-filters", this)
                    }
                }
            }, {
                key: "clearActiveColumns",
                value: function() {
                    for (var t = 0, e = this.getCellsNb(this.headersRow); e > t; t++) h["default"].removeClass(this.getHeaderElement(t), this.activeColumnsCssClass)
                }
            }, {
                key: "markActiveColumn",
                value: function(t) {
                    var e = this.getHeaderElement(t);
                    h["default"].hasClass(e, this.activeColumnsCssClass) || (this.onBeforeActiveColumn && this.onBeforeActiveColumn.call(null, this, t), h["default"].addClass(e, this.activeColumnsCssClass), this.onAfterActiveColumn && this.onAfterActiveColumn.call(null, this, t))
                }
            }, {
                key: "linkFilters",
                value: function() {
                    if (this.linkedFilters && this.activeFilterId) {
                        var t = this.getFiltersByType(this.fltTypeSlc, !0),
                            e = this.getFiltersByType(this.fltTypeMulti, !0),
                            i = this.getFiltersByType(this.fltTypeCheckList, !0),
                            s = t.concat(e);
                        s = s.concat(i);
                        var n = this.activeFilterId.split("_")[0];
                        n = n.split(this.prfxFlt)[1];
                        for (var r = void 0, l = 0, a = s.length; a > l; l++) {
                            var o = h["default"].id(this.fltIds[s[l]]);
                            if (r = this.getFilterValue(s[l]),
                                n !== s[l] || this.paging && -1 != t.indexOf(s[l]) && n === s[l] || !this.paging && (-1 != i.indexOf(s[l]) || -1 != e.indexOf(s[l])) || r === this.displayAllText) {
                                if (this.loadFltOnDemand) {
                                    var u = h["default"].createOpt(this.displayAllText, "");
                                    o.innerHTML = "", o.appendChild(u)
                                } - 1 != i.indexOf(s[l]) ? this.emitter.emit("build-checklist-filter", this, s[l]) : this.emitter.emit("build-select-filter", this, s[l], !0), this.setFilterValue(s[l], r)
                            }
                        }
                    }
                }
            }, {
                key: "isExactMatch",
                value: function(t) {
                    var e = this.getFilterType(t);
                    return this.exactMatchByCol[t] || this.exactMatch || e !== this.fltTypeInp
                }
            }, {
                key: "isImported",
                value: function(t, e) {
                    for (var i = !1, s = e ? e : "script", n = "script" == s ? "src" : "href", r = h["default"].tag(B, s), l = 0, a = r.length; a > l; l++)
                        if (void 0 !== r[l][n] && r[l][n].match(t)) {
                            i = !0;
                            break
                        }
                    return i
                }
            }, {
                key: "import",
                value: function(t, e, i, s) {
                    var n = s ? s : "script",
                        r = this.isImported(e, n);
                    if (!r) {
                        var l = this,
                            a = !1,
                            o = void 0,
                            u = h["default"].tag(B, "head")[0];
                        o = "link" === d["default"].lower(n) ? h["default"].create("link", ["id", t], ["type", "text/css"], ["rel", "stylesheet"], ["href", e]) : h["default"].create("script", ["id", t], ["type", "text/javascript"], ["src", e]), o.onload = o.onreadystatechange = function() {
                            a || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (a = !0, "function" == typeof i && i.call(null, l))
                        }, o.onerror = function() {
                            throw new Error("TF script could not load: " + e)
                        }, u.appendChild(o)
                    }
                }
            }, {
                key: "hasGrid",
                value: function() {
                    return this._hasGrid
                }
            }, {
                key: "getFiltersId",
                value: function() {
                    return this.fltIds || []
                }
            }, {
                key: "getValidRows",
                value: function(t) {
                    if (!t) return this.validRowsIndex;
                    this.validRowsIndex = [];
                    for (var e = this.refRow; e < this.getRowsNb(!0); e++) {
                        var i = this.tbl.rows[e];
                        this.paging ? ("true" === i.getAttribute("validRow") || null === i.getAttribute("validRow")) && this.validRowsIndex.push(i.rowIndex) : "none" !== this.getRowDisplay(i) && this.validRowsIndex.push(i.rowIndex)
                    }
                    return this.validRowsIndex
                }
            }, {
                key: "getFiltersRowIndex",
                value: function() {
                    return this.filtersRowIndex
                }
            }, {
                key: "getHeadersRowIndex",
                value: function() {
                    return this.headersRow
                }
            }, {
                key: "getStartRowIndex",
                value: function() {
                    return this.refRow
                }
            }, {
                key: "getLastRowIndex",
                value: function() {
                    return this.nbRows - 1
                }
            }, {
                key: "getHeaderElement",
                value: function(t) {
                    for (var e = this.gridLayout ? this.Mod.gridLayout.headTbl : this.tbl, i = h["default"].tag(e, "thead"), s = this.headersRow, n = void 0, r = 0; r < this.nbCells; r++)
                        if (r === t) {
                            0 === i.length && (n = e.rows[s].cells[r]), 1 === i.length && (n = i[0].rows[s].cells[r]);
                            break
                        }
                    return n
                }
            }, {
                key: "getHeadersText",
                value: function() {
                    for (var t = arguments.length <= 0 || void 0 === arguments[0] ? !1 : arguments[0], e = [], i = 0; i < this.nbCells; i++)
                        if (!(t && this.hasExtension("colsVisibility") && this.extension("colsVisibility").isColHidden(i))) {
                            var s = this.getHeaderElement(i),
                                n = h["default"].getFirstTextNode(s);
                            e.push(n)
                        }
                    return e
                }
            }, {
                key: "getFilterType",
                value: function(t) {
                    var e = this.cfg["col_" + t];
                    return e ? d["default"].lower(e) : this.fltTypeInp
                }
            }, {
                key: "getFilterableRowsNb",
                value: function() {
                    return this.getRowsNb(!1)
                }
            }, {
                key: "config",
                value: function() {
                    return this.cfg
                }
            }]), t
        }()
    }, function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e["default"] = {
            add: function(t, e, i, s) {
                t.addEventListener ? t.addEventListener(e, i, s) : t.attachEvent ? t.attachEvent("on" + e, i) : t["on" + e] = i
            },
            remove: function(t, e, i, s) {
                t.detachEvent ? t.detachEvent("on" + e, i) : t.removeEventListener ? t.removeEventListener(e, i, s) : t["on" + e] = null
            },
            stop: function(t) {
                t || (t = window.event), t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
            },
            cancel: function(t) {
                t || (t = window.event), t.preventDefault ? t.preventDefault() : t.returnValue = !1
            },
            target: function(t) {
                return t && t.target || window.event && window.event.srcElement
            },
            keyCode: function(t) {
                return t.charCode ? t.charCode : t.keyCode ? t.keyCode : t.which ? t.which : 0
            }
        }
    }, function(t, e) {
        "use strict";

        function i() {
            return document.documentElement.classList
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
        };
        e["default"] = {
            getText: function(t) {
                var e = t.textContent || t.innerText || t.innerHTML.replace(/<[^<>]+>/g, "");
                return e = e.replace(/^\s+/, "").replace(/\s+$/, "")
            },
            getFirstTextNode: function(t) {
                for (var e = 0; e < t.childNodes.length; e++) {
                    var i = t.childNodes[e];
                    if (3 === i.nodeType) return i.data
                }
            },
            create: function(t) {
                if (t && "" !== t) {
                    var e = document.createElement(t),
                        i = arguments;
                    if (i.length > 1)
                        for (var n = 0; n < i.length; n++) {
                            var r = s(i[n]);
                            "object" === r.toLowerCase() && 2 === i[n].length && e.setAttribute(i[n][0], i[n][1])
                        }
                    return e
                }
            },
            remove: function(t) {
                return t.parentNode.removeChild(t)
            },
            text: function(t) {
                return document.createTextNode(t)
            },
            hasClass: function(t, e) {
                return t ? i() ? t.classList.contains(e) : t.className.match(new RegExp("(\\s|^)" + e + "(\\s|$)")) : !1
            },
            addClass: function(t, e) {
                return t ? i() ? void t.classList.add(e) : void("" === t.className ? t.className = e : this.hasClass(t, e) || (t.className += " " + e)) : void 0
            },
            removeClass: function(t, e) {
                if (t) {
                    if (i()) return void t.classList.remove(e);
                    var s = new RegExp("(\\s|^)" + e + "(\\s|$)", "g");
                    t.className = t.className.replace(s, "")
                }
            },
            createOpt: function(t, e, i) {
                var s = i ? !0 : !1,
                    n = s ? this.create("option", ["value", e], ["selected", "true"]) : this.create("option", ["value", e]);
                return n.appendChild(this.text(t)), n
            },
            createCheckItem: function(t, e, i) {
                var s = this.create("li"),
                    n = this.create("label", ["for", t]),
                    r = this.create("input", ["id", t], ["name", t], ["type", "checkbox"], ["value", e]);
                return n.appendChild(r), n.appendChild(this.text(i)), s.appendChild(n), s.label = n, s.check = r, s
            },
            id: function(t) {
                return document.getElementById(t)
            },
            tag: function(t, e) {
                return t.getElementsByTagName(e)
            }
        }
    }, function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e["default"] = {
            lower: function(t) {
                return t.toLowerCase()
            },
            upper: function(t) {
                return t.toUpperCase()
            },
            trim: function(t) {
                return t.trim ? t.trim() : t.replace(/^\s*|\s*$/g, "")
            },
            isEmpty: function(t) {
                return "" === this.trim(t)
            },
            rgxEsc: function(t) {
                var e = /[-\/\\^$*+?.()|[\]{}]/g,
                    i = "\\$&";
                return String(t).replace(e, i)
            },
            matchCase: function(t, e) {
                return e ? t : this.lower(t)
            },
            contains: function(t, e) {
                var i = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2],
                    s = arguments.length <= 3 || void 0 === arguments[3] ? !1 : arguments[3],
                    n = void 0,
                    r = s ? "g" : "gi";
                return n = i ? new RegExp("(^\\s*)" + this.rgxEsc(t) + "(\\s*$)", r) : new RegExp(this.rgxEsc(t), r), n.test(e)
            }
        }
    }, function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            },
            s = void 0;
        e["default"] = {
            isObj: function(t) {
                var e = !1;
                return "string" == typeof t ? window[t] && "object" === i(window[t]) && (e = !0) : t && "object" === ("undefined" == typeof t ? "undefined" : i(t)) && (e = !0), e
            },
            isFn: function(t) {
                return t && t.constructor == Function
            },
            isArray: function(t) {
                return t && t.constructor == Array
            },
            isUndef: function(t) {
                return t === s
            },
            isNull: function(t) {
                return null === t
            },
            isEmpty: function(t) {
                return this.isUndef(t) || this.isNull(t) || 0 === t.length
            }
        }
    }, function(t, e) {
        "use strict";

        function i(t) {
            if (void 0 === t) return 0;
            if (t.length > 2) return t;
            var e = void 0;
            return 99 >= t && t > 50 && (e = "19" + t), (50 > t || "00" === t) && (e = "20" + t), e
        }

        function s(t) {
            if (void 0 === t) return 0;
            for (var e = void 0, i = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december", "jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"], s = 0; s < i.length; s++) {
                var n = i[s];
                if (t.toLowerCase() === n) {
                    e = s + 1;
                    break
                }
            }
            return (e > 11 || 23 > e) && (e -= 12), 1 > e || e > 12 ? 0 : e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e["default"] = {
            isValid: function(t, e) {
                if (e || (e = "DMY"), e = e.toUpperCase(), 3 != e.length && "DDMMMYYYY" === e) {
                    var i = this.format(t, e);
                    t = i.getDate() + "/" + (i.getMonth() + 1) + "/" + i.getFullYear(), e = "DMY"
                }(-1 === e.indexOf("M") || -1 === e.indexOf("D") || -1 === e.indexOf("Y")) && (e = "DMY");
                var s = void 0,
                    n = void 0;
                if ("Y" === e.substring(0, 1) ? (s = /^\d{2}(\-|\/|\.)\d{1,2}\1\d{1,2}$/, n = /^\d{4}(\-|\/|\.)\d{1,2}\1\d{1,2}$/) : "Y" === e.substring(1, 2) ? (s = /^\d{1,2}(\-|\/|\.)\d{2}\1\d{1,2}$/, n = /^\d{1,2}(\-|\/|\.)\d{4}\1\d{1,2}$/) : (s = /^\d{1,2}(\-|\/|\.)\d{1,2}\1\d{2}$/, n = /^\d{1,2}(\-|\/|\.)\d{1,2}\1\d{4}$/), s.test(t) === !1 && n.test(t) === !1) return !1;
                var r = t.split(RegExp.$1),
                    l = void 0,
                    a = void 0,
                    o = void 0;
                l = "M" === e.substring(0, 1) ? r[0] : "M" === e.substring(1, 2) ? r[1] : r[2], a = "D" === e.substring(0, 1) ? r[0] : "D" === e.substring(1, 2) ? r[1] : r[2], o = "Y" === e.substring(0, 1) ? r[0] : "Y" === e.substring(1, 2) ? r[1] : r[2], parseInt(o, 10) <= 50 && (o = (parseInt(o, 10) + 2e3).toString()), parseInt(o, 10) <= 99 && (o = (parseInt(o, 10) + 1900).toString());
                var u = new Date(parseInt(o, 10), parseInt(l, 10) - 1, parseInt(a, 10), 0, 0, 0, 0);
                return parseInt(a, 10) != u.getDate() ? !1 : parseInt(l, 10) - 1 != u.getMonth() ? !1 : !0
            },
            format: function(t, e) {
                if (e || (e = "DMY"), !t || "" === t) return new Date(1001, 0, 1);
                var n = void 0,
                    r = void 0;
                switch (e.toUpperCase()) {
                    case "DDMMMYYYY":
                        r = t.replace(/[- \/.]/g, " ").split(" "), n = new Date(i(r[2]), s(r[1]) - 1, r[0]);
                        break;
                    case "DMY":
                        r = t.replace(/^(0?[1-9]|[12][0-9]|3[01])([- \/.])(0?[1-9]|1[012])([- \/.])((\d\d)?\d\d)$/, "$1 $3 $5").split(" "), n = new Date(i(r[2]), r[1] - 1, r[0]);
                        break;
                    case "MDY":
                        r = t.replace(/^(0?[1-9]|1[012])([- \/.])(0?[1-9]|[12][0-9]|3[01])([- \/.])((\d\d)?\d\d)$/, "$1 $3 $5").split(" "), n = new Date(i(r[2]), r[0] - 1, r[1]);
                        break;
                    case "YMD":
                        r = t.replace(/^((\d\d)?\d\d)([- \/.])(0?[1-9]|1[012])([- \/.])(0?[1-9]|[12][0-9]|3[01])$/, "$1 $4 $6").split(" "), n = new Date(i(r[0]), r[1] - 1, r[2]);
                        break;
                    default:
                        r = t.replace(/^(0?[1-9]|[12][0-9]|3[01])([- \/.])(0?[1-9]|1[012])([- \/.])((\d\d)?\d\d)$/, "$1 $3 $5").split(" "), n = new Date(i(r[2]), r[1] - 1, r[0])
                }
                return n
            }
        }
    }, function(t, e, i) {
        "use strict";

        function s(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(3),
            r = s(n);
        e["default"] = {
            removeNbFormat: function(t, e) {
                if (t) {
                    e || (e = "us");
                    var i = t;
                    return i = "us" === r["default"].lower(e) ? +i.replace(/[^\d\.-]/g, "") : +i.replace(/[^\d\,-]/g, "").replace(",", ".")
                }
            }
        }
    }, function(t, e) {
        "use strict";

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var s = e[i];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                }
            }
            return function(e, i, s) {
                return i && t(e.prototype, i), s && t(e, s), e
            }
        }();
        e.Emitter = function() {
            function t() {
                i(this, t), this.events = {}
            }
            return s(t, [{
                key: "on",
                value: function(t, e) {
                    var i = this;
                    t.forEach(function(t) {
                        i.events[t] = i.events[t] || [], i.events[t].push(e)
                    })
                }
            }, {
                key: "off",
                value: function(t, e) {
                    var i = this;
                    t.forEach(function(t) {
                        t in i.events && i.events[t].splice(i.events[t].indexOf(e), 1)
                    })
                }
            }, {
                key: "emit",
                value: function(t) {
                    if (t in this.events)
                        for (var e = 0; e < this.events[t].length; e++) this.events[t][e].apply(this, [].slice.call(arguments, 1))
                }
            }]), t
        }()
    }, function(t, e, i) {
        "use strict";

        function s(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Store = void 0;
        var r = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var s = e[i];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                    }
                }
                return function(e, i, s) {
                    return i && t(e.prototype, i), s && t(e, s), e
                }
            }(),
            l = i(9),
            a = s(l),
            o = i(4),
            u = s(o);
        e.Store = function() {
            function t(e) {
                n(this, t);
                var i = e.config();
                this.fltsValuesCookie = e.prfxCookieFltsValues + e.id, this.pgNbCookie = e.prfxCookiePageNb + e.id, this.pgLenCookie = e.prfxCookiePageLen + e.id, this.duration = isNaN(i.set_cookie_duration) ? 1e5 : parseInt(i.set_cookie_duration, 10), this.tf = e, this.emitter = e.emitter
            }
            return r(t, [{
                key: "init",
                value: function() {
                    var t = this;
                    this.emitter.on(["after-filtering"], function() {
                        return t.saveFilterValues()
                    }), this.emitter.on(["after-clearing-filters"], function() {
                        return t.clearCookies()
                    }), this.emitter.on(["after-changing-page"], function(e, i) {
                        return t.savePageNb(i)
                    }), this.emitter.on(["after-changing-results-per-page"], function(e, i) {
                        return t.savePageLength(i)
                    })
                }
            }, {
                key: "saveFilterValues",
                value: function() {
                    var t = this.tf,
                        e = [];
                    if (t.rememberGridValues) {
                        for (var i = 0; i < t.fltIds.length; i++) {
                            var s = t.getFilterValue(i);
                            if (u["default"].isArray(s)) {
                                var n = new RegExp(t.separator, "g");
                                s = s.toString().replace(n, " " + t.orOperator + " ")
                            }
                            "" === s && (s = " "), e.push(s)
                        }
                        a["default"].write(this.fltsValuesCookie, e.join(t.separator), this.duration)
                    }
                }
            }, {
                key: "getFilterValues",
                value: function() {
                    var t = a["default"].read(this.fltsValuesCookie),
                        e = new RegExp(this.tf.separator, "g");
                    return t.split(e)
                }
            }, {
                key: "savePageNb",
                value: function(t) {
                    this.tf.rememberPageNb && a["default"].write(this.pgNbCookie, t + 1, this.duration)
                }
            }, {
                key: "getPageNb",
                value: function() {
                    return a["default"].read(this.pgNbCookie)
                }
            }, {
                key: "savePageLength",
                value: function(t) {
                    this.tf.rememberPageLen && a["default"].write(this.pgLenCookie, t, this.duration)
                }
            }, {
                key: "getPageLength",
                value: function() {
                    return a["default"].read(this.pgLenCookie)
                }
            }, {
                key: "clearCookies",
                value: function() {
                    a["default"].remove(this.fltsValuesCookie), a["default"].remove(this.pgLenCookie), a["default"].remove(this.pgNbCookie)
                }
            }, {
                key: "destroy",
                value: function() {
                    var t = this;
                    this.emitter.off(["after-filtering"], function() {
                        return t.saveFilterValues()
                    }), this.emitter.off(["after-clearing-filters"], function() {
                        return t.clearCookies()
                    }), this.emitter.off(["after-changing-page"], function(e, i) {
                        return t.savePageNb(i)
                    }), this.emitter.off(["after-changing-results-per-page"], function(e, i) {
                        return t.savePageLength(i)
                    })
                }
            }]), t
        }()
    }, function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e["default"] = {
            write: function(t, e, i) {
                var s = "";
                i && (s = new Date((new Date).getTime() + 36e5 * i), s = "; expires=" + s.toGMTString()), document.cookie = t + "=" + escape(e) + s
            },
            read: function(t) {
                var e = "",
                    i = t + "=";
                if (document.cookie.length > 0) {
                    var s = document.cookie,
                        n = s.indexOf(i);
                    if (-1 !== n) {
                        n += i.length;
                        var r = s.indexOf(";", n); - 1 === r && (r = s.length), e = unescape(s.substring(n, r))
                    }
                }
                return e
            },
            remove: function(t) {
                this.write(t, "", -1)
            },
            valueToArray: function(t, e) {
                e || (e = ",");
                var i = this.read(t),
                    s = i.split(e);
                return s
            },
            getValueByIndex: function(t, e, i) {
                i || (i = ",");
                var s = this.valueToArray(t, i);
                return s[e]
            }
        }
    }, function(t, e, i) {
        "use strict";

        function s(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function r(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function l(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.GridLayout = void 0;
        var a = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var s = e[i];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                    }
                }
                return function(e, i, s) {
                    return i && t(e.prototype, i), s && t(e, s), e
                }
            }(),
            o = i(11),
            u = i(2),
            h = s(u),
            f = i(4),
            d = s(f),
            c = i(1),
            p = s(c),
            g = i(3),
            v = s(g);
        e.GridLayout = function(t) {
            function e(t) {
                n(this, e);
                var i = r(this, Object.getPrototypeOf(e).call(this, t, "gridLayout")),
                    s = i.config;
                return i.gridWidth = s.grid_width || null, i.gridHeight = s.grid_height || null, i.gridMainContCssClass = s.grid_cont_css_class || "grd_Cont", i.gridContCssClass = s.grid_tbl_cont_css_class || "grd_tblCont", i.gridHeadContCssClass = s.grid_tblHead_cont_css_class || "grd_headTblCont", i.gridInfDivCssClass = s.grid_inf_grid_css_class || "grd_inf", i.gridHeadRowIndex = s.grid_headers_row_index || 0, i.gridHeadRows = s.grid_headers_rows || [0], i.gridEnableFilters = void 0 !== s.grid_enable_default_filters ? s.grid_enable_default_filters : !0, i.noHeaders = Boolean(s.grid_no_headers), i.gridDefaultColWidth = s.grid_default_col_width || "100px", i.gridColElms = [], i.prfxMainTblCont = "gridCont_", i.prfxTblCont = "tblCont_", i.prfxHeadTblCont = "tblHeadCont_", i.prfxHeadTbl = "tblHead_", i.prfxGridFltTd = "_td_", i.prfxGridTh = "tblHeadTh_", i.sourceTblHtml = t.tbl.outerHTML, t.fltGrid = i.gridEnableFilters, i
            }
            return l(e, t), a(e, [{
                key: "init",
                value: function() {
                    var t = this,
                        e = this.tf,
                        i = this.config,
                        s = e.tbl;
                    if (!this.initialized) {
                        if (e.refRow = d["default"].isNull(e.startRow) ? 0 : e.startRow, e.headersRow = 0, e.filtersRowIndex = 1, e.isExternalFlt = !0, !e.hasColWidths) {
                            e.colWidths = [];
                            for (var n = 0; n < e.nbCells; n++) {
                                var r = void 0,
                                    l = s.rows[this.gridHeadRowIndex].cells[n];
                                r = "" !== l.width ? l.width : "" !== l.style.width ? parseInt(l.style.width, 10) : this.gridDefaultColWidth, e.colWidths[n] = r
                            }
                            e.hasColWidths = !0
                        }
                        e.setColWidths();
                        var a = void 0;
                        a = "" !== s.width ? s.width : "" !== s.style.width ? parseInt(s.style.width, 10) : s.clientWidth, this.tblMainCont = h["default"].create("div", ["id", this.prfxMainTblCont + e.id]), this.tblMainCont.className = this.gridMainContCssClass, this.gridWidth && (this.tblMainCont.style.width = this.gridWidth), s.parentNode.insertBefore(this.tblMainCont, s), this.tblCont = h["default"].create("div", ["id", this.prfxTblCont + e.id]), this.tblCont.className = this.gridContCssClass, this.gridWidth && (-1 != this.gridWidth.indexOf("%") ? this.tblCont.style.width = "100%" : this.tblCont.style.width = this.gridWidth), this.gridHeight && (this.tblCont.style.height = this.gridHeight), s.parentNode.insertBefore(this.tblCont, s);
                        var o = h["default"].remove(s);
                        this.tblCont.appendChild(o), "" === s.style.width && (s.style.width = (v["default"].contains("%", a) ? s.clientWidth : a) + "px");
                        var u = h["default"].remove(this.tblCont);
                        this.tblMainCont.appendChild(u), this.headTblCont = h["default"].create("div", ["id", this.prfxHeadTblCont + e.id]), this.headTblCont.className = this.gridHeadContCssClass, this.gridWidth && (-1 != this.gridWidth.indexOf("%") ? this.headTblCont.style.width = "100%" : this.headTblCont.style.width = this.gridWidth), this.headTbl = h["default"].create("table", ["id", this.prfxHeadTbl + e.id]);
                        for (var f = h["default"].create("tHead"), c = s.rows[this.gridHeadRowIndex], g = [], b = 0; b < e.nbCells; b++) {
                            var m = c.cells[b],
                                y = m.getAttribute("id");
                            y && "" !== y || (y = this.prfxGridTh + b + "_" + e.id, m.setAttribute("id", y)), g.push(y)
                        }
                        var _ = h["default"].create("tr");
                        if (this.gridEnableFilters && e.fltGrid) {
                            e.externalFltTgtIds = [];
                            for (var C = 0; C < e.nbCells; C++) {
                                var w = e.prfxFlt + C + this.prfxGridFltTd + e.id,
                                    x = h["default"].create(e.fltCellTag, ["id", w]);
                                _.appendChild(x), e.externalFltTgtIds[C] = w
                            }
                        }
                        if (this.noHeaders) f.appendChild(h["default"].create("tr"));
                        else
                            for (var k = 0; k < this.gridHeadRows.length; k++) {
                                var T = s.rows[this.gridHeadRows[0]];
                                f.appendChild(T)
                            }
                        this.headTbl.appendChild(f), 0 === e.filtersRowIndex ? f.insertBefore(_, c) : f.appendChild(_), this.headTblCont.appendChild(this.headTbl), this.tblCont.parentNode.insertBefore(this.headTblCont, this.tblCont);
                        var P = h["default"].tag(s, "thead");
                        P.length > 0 && s.removeChild(P[0]), this.headTbl.style.tableLayout = "fixed", s.style.tableLayout = "fixed", this.headTbl.cellPadding = s.cellPadding, this.headTbl.cellSpacing = s.cellSpacing, e.setColWidths(this.headTbl), s.style.width = "", this.headTbl.style.width = s.clientWidth + "px", p["default"].add(this.tblCont, "scroll", function(e) {
                            var i = p["default"].target(e),
                                s = i.scrollLeft;
                            t.headTblCont.scrollLeft = s
                        });
                        var F = (i.extensions || []).filter(function(t) {
                            return "sort" === t.name
                        });
                        1 === F.length && (F[0].async_sort = !0, F[0].trigger_ids = g), this.tblHasColTag = h["default"].tag(s, "col").length > 0 ? !0 : !1;
                        var R = function() {
                            for (var t = e.nbCells - 1; t >= 0; t--) {
                                var i = h["default"].create("col", ["id", e.id + "_col_" + t]);
                                s.insertBefore(i, s.firstChild), i.style.width = e.colWidths[t], this.gridColElms[t] = i
                            }
                            this.tblHasColTag = !0
                        };
                        if (this.tblHasColTag)
                            for (var S = h["default"].tag(s, "col"), I = 0; I < e.nbCells; I++) S[I].setAttribute("id", e.id + "_col_" + I), S[I].style.width = e.colWidths[I], this.gridColElms.push(S[I]);
                        else R.call(this);
                        var O = d["default"].isFn(i.on_after_col_resized) ? i.on_after_col_resized : null;
                        i.on_after_col_resized = function(t, e) {
                            if (e) {
                                var i = t.crWColsRow.cells[e].style.width,
                                    n = t.gridColElms[e];
                                n.style.width = i;
                                var r = t.crWColsRow.cells[e].clientWidth,
                                    l = t.crWRowDataTbl.cells[e].clientWidth;
                                r != l && (t.headTbl.style.width = s.clientWidth + "px"), O && O.call(null, t, e)
                            }
                        }, e.popupFilters && (_.style.display = "none"), s.clientWidth !== this.headTbl.clientWidth && (s.style.width = this.headTbl.clientWidth + "px"), this.initialized = !0
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    var t = this.tf,
                        e = t.tbl;
                    if (this.initialized) {
                        var i = h["default"].remove(e);
                        this.tblMainCont.parentNode.insertBefore(i, this.tblMainCont), h["default"].remove(this.tblMainCont), this.tblMainCont = null, this.headTblCont = null, this.headTbl = null, this.tblCont = null, e.outerHTML = this.sourceTblHtml, this.tf.tbl = h["default"].id(t.id), this.initialized = !1
                    }
                }
            }]), e
        }(o.Feature)
    }, function(t, e) {
        "use strict";

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var s = e[i];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                    }
                }
                return function(e, i, s) {
                    return i && t(e.prototype, i), s && t(e, s), e
                }
            }(),
            n = "Not implemented.";
        e.Feature = function() {
            function t(e, s) {
                i(this, t), this.tf = e, this.feature = s, this.enabled = e[s], this.config = e.config(), this.emitter = e.emitter, this.initialized = !1
            }
            return s(t, [{
                key: "init",
                value: function() {
                    throw new Error(n)
                }
            }, {
                key: "reset",
                value: function() {
                    this.enable(), this.init()
                }
            }, {
                key: "destroy",
                value: function() {
                    throw new Error(n)
                }
            }, {
                key: "enable",
                value: function() {
                    this.enabled = !0
                }
            }, {
                key: "disable",
                value: function() {
                    this.enabled = !1
                }
            }, {
                key: "isEnabled",
                value: function() {
                    return this.enabled
                }
            }]), t
        }()
    }, function(t, e, i) {
        "use strict";

        function s(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function r(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function l(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Loader = void 0;
        var a = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var s = e[i];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                    }
                }
                return function(e, i, s) {
                    return i && t(e.prototype, i), s && t(e, s), e
                }
            }(),
            o = i(11),
            u = i(2),
            h = s(u),
            f = i(4),
            d = s(f),
            c = window;
        e.Loader = function(t) {
            function e(t) {
                n(this, e);
                var i = r(this, Object.getPrototypeOf(e).call(this, t, "loader")),
                    s = i.config;
                return i.loaderTgtId = s.loader_target_id || null, i.loaderDiv = null, i.loaderText = s.loader_text || "Loading...", i.loaderHtml = s.loader_html || null, i.loaderCssClass = s.loader_css_class || "loader", i.loaderCloseDelay = 250, i.onShowLoader = d["default"].isFn(s.on_show_loader) ? s.on_show_loader : null, i.onHideLoader = d["default"].isFn(s.on_hide_loader) ? s.on_hide_loader : null, i.prfxLoader = "load_", i
            }
            return l(e, t), a(e, [{
                key: "init",
                value: function() {
                    var t = this;
                    if (!this.initialized) {
                        var e = this.tf,
                            i = this.emitter,
                            s = h["default"].create("div", ["id", this.prfxLoader + e.id]);
                        s.className = this.loaderCssClass;
                        var n = this.loaderTgtId ? h["default"].id(this.loaderTgtId) : e.tbl.parentNode;
                        this.loaderTgtId ? n.appendChild(s) : n.insertBefore(s, e.tbl), this.loaderDiv = s, this.loaderHtml ? this.loaderDiv.innerHTML = this.loaderHtml : this.loaderDiv.appendChild(h["default"].text(this.loaderText)), this.show("none"), i.on(["before-filtering", "before-populating-filter", "before-changing-page", "before-clearing-filters", "before-changing-results-per-page", "before-reset-page", "before-reset-page-length", "before-loading-extensions", "before-loading-themes"], function() {
                            return t.show("")
                        }), i.on(["after-filtering", "after-populating-filter", "after-changing-page", "after-clearing-filters", "after-changing-results-per-page", "after-reset-page", "after-reset-page-length", "after-loading-extensions", "after-loading-themes"], function() {
                            return t.show("none")
                        }), this.initialized = !0
                    }
                }
            }, {
                key: "show",
                value: function(t) {
                    var e = this;
                    if (this.isEnabled()) {
                        var i = function() {
                                e.loaderDiv && (e.onShowLoader && "none" !== t && e.onShowLoader.call(null, e), e.loaderDiv.style.display = t, e.onHideLoader && "none" === t && e.onHideLoader.call(null, e))
                            },
                            s = "none" === t ? this.loaderCloseDelay : 1;
                        c.setTimeout(i, s)
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    var t = this;
                    if (this.initialized) {
                        var e = this.emitter;
                        h["default"].remove(this.loaderDiv), this.loaderDiv = null, e.off(["before-filtering", "before-populating-filter", "before-changing-page", "before-clearing-filters", "before-changing-results-per-page", "before-reset-page", "before-reset-page-length", "before-loading-extensions", "before-loading-themes"], function() {
                            return t.show("")
                        }), e.off(["after-filtering", "after-populating-filter", "after-changing-page", "after-clearing-filters", "after-changing-results-per-page", "after-reset-page", "after-reset-page-length", "after-loading-extensions", "after-loading-themes"], function() {
                            return t.show("none")
                        }), this.initialized = !1
                    }
                }
            }]), e
        }(o.Feature)
    }, function(t, e, i) {
        "use strict";

        function s(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.HighlightKeyword = void 0;
        var r = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var s = e[i];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                    }
                }
                return function(e, i, s) {
                    return i && t(e.prototype, i), s && t(e, s), e
                }
            }(),
            l = i(2),
            a = s(l),
            o = i(3),
            u = s(o),
            h = i(4),
            f = s(h);
        e.HighlightKeyword = function() {
            function t(e) {
                n(this, t);
                var i = e.config();
                this.highlightCssClass = i.highlight_css_class || "keyword", this.highlightedNodes = [], this.tf = e, this.emitter = e.emitter
            }
            return r(t, [{
                key: "init",
                value: function() {
                    var t = this;
                    this.emitter.on(["before-filtering", "destroy"], function() {
                        return t.unhighlightAll()
                    }), this.emitter.on(["highlight-keyword"], function(e, i, s) {
                        return t.highlight(i, s, t.highlightCssClass)
                    })
                }
            }, {
                key: "highlight",
                value: function(t, e, i) {
                    if (t.hasChildNodes)
                        for (var s = t.childNodes, n = 0; n < s.length; n++) this.highlight(s[n], e, i);
                    if (3 === t.nodeType) {
                        var r = u["default"].lower(t.nodeValue),
                            l = u["default"].lower(e);
                        if (-1 != r.indexOf(l)) {
                            var o = t.parentNode;
                            if (o && o.className != i) {
                                var h = t.nodeValue,
                                    f = r.indexOf(l),
                                    d = a["default"].text(h.substr(0, f)),
                                    c = h.substr(f, e.length),
                                    p = a["default"].text(h.substr(f + e.length)),
                                    g = a["default"].text(c),
                                    v = a["default"].create("span");
                                v.className = i, v.appendChild(g), o.insertBefore(d, t), o.insertBefore(v, t), o.insertBefore(p, t), o.removeChild(t), this.highlightedNodes.push(v.firstChild)
                            }
                        }
                    }
                }
            }, {
                key: "unhighlight",
                value: function(t, e) {
                    for (var i = [], s = this.highlightedNodes, n = 0; n < s.length; n++) {
                        var r = s[n];
                        if (r) {
                            var l = u["default"].lower(r.nodeValue),
                                a = u["default"].lower(t);
                            if (-1 !== l.indexOf(a)) {
                                var o = r.parentNode;
                                if (o && o.className === e) {
                                    var h = o.previousSibling,
                                        f = o.nextSibling;
                                    if (!h || !f) continue;
                                    f.nodeValue = h.nodeValue + r.nodeValue + f.nodeValue, h.nodeValue = "", r.nodeValue = "", i.push(n)
                                }
                            }
                        }
                    }
                    for (var d = 0; d < i.length; d++) s.splice(i[d], 1)
                }
            }, {
                key: "unhighlightAll",
                value: function() {
                    var t = this;
                    this.tf.highlightKeywords && (this.tf.getFiltersValue().forEach(function(e) {
                        f["default"].isArray(e) ? e.forEach(function(e) {
                            return t.unhighlight(e, t.highlightCssClass)
                        }) : t.unhighlight(e, t.highlightCssClass)
                    }), this.highlightedNodes = [])
                }
            }, {
                key: "destroy",
                value: function() {
                    var t = this;
                    this.emitter.off(["before-filtering", "destroy"], function() {
                        return t.unhighlightAll()
                    }), this.emitter.off(["highlight-keyword"], function(e, i, s) {
                        return t.highlight(i, s, t.highlightCssClass)
                    })
                }
            }]), t
        }()
    }, function(t, e, i) {
        (function(t) {
            "use strict";

            function s(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function n(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function r(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function l(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.PopupFilter = void 0;
            var a = function() {
                    function t(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var s = e[i];
                            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                        }
                    }
                    return function(e, i, s) {
                        return i && t(e.prototype, i), s && t(e, s), e
                    }
                }(),
                o = i(11),
                u = i(4),
                h = s(u),
                f = i(2),
                d = s(f),
                c = i(1),
                p = s(c);
            e.PopupFilter = function(e) {
                function i(t) {
                    n(this, i);
                    var e = r(this, Object.getPrototypeOf(i).call(this, t, "popupFilters")),
                        s = e.config;
                    return t.isExternalFlt = !0, t.externalFltTgtIds = [], e.popUpImgFlt = s.popup_filters_image || t.themesPath + "icn_filter.gif", e.popUpImgFltActive = s.popup_filters_image_active || t.themesPath + "icn_filterActive.gif", e.popUpImgFltHtml = s.popup_filters_image_html || '<img src="' + e.popUpImgFlt + '" alt="Column filter" />', e.popUpDivCssClass = s.popup_div_css_class || "popUpFilter", e.onBeforePopUpOpen = h["default"].isFn(s.on_before_popup_filter_open) ? s.on_before_popup_filter_open : null, e.onAfterPopUpOpen = h["default"].isFn(s.on_after_popup_filter_open) ? s.on_after_popup_filter_open : null, e.onBeforePopUpClose = h["default"].isFn(s.on_before_popup_filter_close) ? s.on_before_popup_filter_close : null, e.onAfterPopUpClose = h["default"].isFn(s.on_after_popup_filter_close) ? s.on_after_popup_filter_close : null, e.popUpFltSpans = [], e.popUpFltImgs = [], e.popUpFltElms = e.popUpFltElmCache || [], e.popUpFltAdjustToContainer = !0, e.prfxPopUpSpan = "popUpSpan_", e.prfxPopUpDiv = "popUpDiv_", e
                }
                return l(i, e), a(i, [{
                    key: "onClick",
                    value: function(e) {
                        var i = e || t.event,
                            s = i.target.parentNode,
                            n = parseInt(s.getAttribute("ci"), 10);
                        if (this.closeAll(n), this.toggle(n), this.popUpFltAdjustToContainer) {
                            var r = this.popUpFltElms[n],
                                l = this.tf.getHeaderElement(n),
                                a = .95 * l.clientWidth;
                            r.style.width = parseInt(a, 10) + "px"
                        }
                        p["default"].cancel(i), p["default"].stop(i)
                    }
                }, {
                    key: "init",
                    value: function() {
                        var t = this;
                        if (!this.initialized) {
                            var e = this.tf;
                            e.headersRow <= 1 && (e.headersRow = 0);
                            for (var i = 0; i < e.nbCells; i++)
                                if (e.getFilterType(i) !== e.fltTypeNone) {
                                    var s = d["default"].create("span", ["id", this.prfxPopUpSpan + e.id + "_" + i], ["ci", i]);
                                    s.innerHTML = this.popUpImgFltHtml;
                                    var n = e.getHeaderElement(i);
                                    n.appendChild(s), p["default"].add(s, "click", function(e) {
                                        t.onClick(e)
                                    }), this.popUpFltSpans[i] = s, this.popUpFltImgs[i] = s.firstChild
                                }
                            this.emitter.on(["before-filtering"], function() {
                                return t.buildIcons()
                            }), this.emitter.on(["after-filtering"], function() {
                                return t.closeAll()
                            }), this.emitter.on(["cell-processed"], function(e, i) {
                                return t.buildIcon(i, !0)
                            }), this.emitter.on(["filters-row-inserted"], function() {
                                return t.tf.headersRow++
                            }), this.emitter.on(["before-filter-init"], function(e, i) {
                                return t.build(i)
                            }), this.initialized = !0
                        }
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.enable(), this.init(), this.buildAll()
                    }
                }, {
                    key: "buildAll",
                    value: function() {
                        for (var t = 0; t < this.popUpFltElmCache.length; t++) this.build(t, this.popUpFltElmCache[t])
                    }
                }, {
                    key: "build",
                    value: function(t, e) {
                        var i = this.tf,
                            s = e ? e : d["default"].create("div", ["id", this.prfxPopUpDiv + i.id + "_" + t]);
                        s.className = this.popUpDivCssClass, i.externalFltTgtIds.push(s.id);
                        var n = i.getHeaderElement(t);
                        n.insertBefore(s, n.firstChild), p["default"].add(s, "click", function(t) {
                            return p["default"].stop(t)
                        }), this.popUpFltElms[t] = s
                    }
                }, {
                    key: "toggle",
                    value: function(t) {
                        var e = this.tf,
                            i = this.popUpFltElms[t];
                        if ("none" === i.style.display || "" === i.style.display) {
                            if (this.onBeforePopUpOpen && this.onBeforePopUpOpen.call(null, this, this.popUpFltElms[t], t), i.style.display = "block", e.getFilterType(t) === e.fltTypeInp) {
                                var s = e.getFilterElement(t);
                                s && s.focus()
                            }
                            this.onAfterPopUpOpen && this.onAfterPopUpOpen.call(null, this, this.popUpFltElms[t], t)
                        } else this.onBeforePopUpClose && this.onBeforePopUpClose.call(null, this, this.popUpFltElms[t], t), i.style.display = "none", this.onAfterPopUpClose && this.onAfterPopUpClose.call(null, this, this.popUpFltElms[t], t)
                    }
                }, {
                    key: "closeAll",
                    value: function(t) {
                        for (var e = 0; e < this.popUpFltElms.length; e++)
                            if (e !== t) {
                                var i = this.popUpFltElms[e];
                                i && (i.style.display = "none")
                            }
                    }
                }, {
                    key: "buildIcons",
                    value: function() {
                        for (var t = 0; t < this.popUpFltImgs.length; t++) this.buildIcon(t, !1);
                    }
                }, {
                    key: "buildIcon",
                    value: function(t, e) {
                        this.popUpFltImgs[t] && (this.popUpFltImgs[t].src = e ? this.popUpImgFltActive : this.popUpImgFlt)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var t = this;
                        if (this.initialized) {
                            this.popUpFltElmCache = [];
                            for (var e = 0; e < this.popUpFltElms.length; e++) {
                                var i = this.popUpFltElms[e],
                                    s = this.popUpFltSpans[e],
                                    n = this.popUpFltImgs[e];
                                i && (d["default"].remove(i), this.popUpFltElmCache[e] = i), i = null, s && d["default"].remove(s), s = null, n && d["default"].remove(n), n = null
                            }
                            this.popUpFltElms = [], this.popUpFltSpans = [], this.popUpFltImgs = [], this.emitter.off(["before-filtering"], function() {
                                return t.buildIcons()
                            }), this.emitter.off(["after-filtering"], function() {
                                return t.closeAll()
                            }), this.emitter.off(["cell-processed"], function(e, i) {
                                return t.buildIcon(i, !0)
                            }), this.emitter.off(["filters-row-inserted"], function() {
                                return t.tf.headersRow++
                            }), this.emitter.off(["before-filter-init"], function(e, i) {
                                return t.build(i)
                            }), this.initialized = !1
                        }
                    }
                }]), i
            }(o.Feature)
        }).call(e, function() {
            return this
        }())
    }, function(t, e, i) {
        "use strict";

        function s(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function r(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function l(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Dropdown = void 0;
        var a = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var s = e[i];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                    }
                }
                return function(e, i, s) {
                    return i && t(e.prototype, i), s && t(e, s), e
                }
            }(),
            o = i(11),
            u = i(2),
            h = s(u),
            f = i(16),
            d = s(f),
            c = i(3),
            p = s(c),
            g = i(17),
            v = s(g),
            b = i(1),
            m = s(b),
            y = "Filter options for column {0} cannot be sorted in {1} manner.";
        e.Dropdown = function(t) {
            function e(t) {
                n(this, e);
                var i = r(this, Object.getPrototypeOf(e).call(this, t, "dropdown")),
                    s = t.config();
                return i.enableSlcResetFilter = s.enable_slc_reset_filter === !1 ? !1 : !0, i.nonEmptyText = s.non_empty_text || "(Non empty)", i.activateSlcTooltip = s.activate_slc_tooltip || "Click to activate", i.multipleSlcTooltip = s.multiple_slc_tooltip || "Use Ctrl key for multiple selections", i.isCustom = null, i.opts = null, i.optsTxt = null, i.slcInnerHtml = null, i
            }
            return l(e, t), a(e, [{
                key: "onSlcFocus",
                value: function(t) {
                    var e = m["default"].target(t),
                        i = this.tf;
                    if (i.activeFilterId = e.getAttribute("id"), i.activeFlt = h["default"].id(i.activeFilterId), i.loadFltOnDemand && "0" === e.getAttribute("filled")) {
                        var s = e.getAttribute("ct");
                        this.build(s)
                    }
                    this.emitter.emit("filter-focus", i, this)
                }
            }, {
                key: "onSlcChange",
                value: function() {
                    this.tf.onSlcChange && this.tf.filter()
                }
            }, {
                key: "init",
                value: function(t, e, i) {
                    var s = this,
                        n = this.tf,
                        r = n.getFilterType(t),
                        l = e ? n.externalFltTgtIds[t] : null,
                        a = h["default"].create(n.fltTypeSlc, ["id", n.prfxFlt + t + "_" + n.id], ["ct", t], ["filled", "0"]);
                    if (r === n.fltTypeMulti && (a.multiple = n.fltTypeMulti, a.title = this.multipleSlcTooltip), a.className = p["default"].lower(r) === n.fltTypeSlc ? n.fltCssClass : n.fltMultiCssClass, l ? (h["default"].id(l).appendChild(a), n.externalFltEls.push(a)) : i.appendChild(a), n.fltIds.push(a.id), n.loadFltOnDemand) {
                        var o = h["default"].createOpt(n.displayAllText, "");
                        a.appendChild(o)
                    } else this.build(t);
                    m["default"].add(a, "change", function() {
                        return s.onSlcChange()
                    }), m["default"].add(a, "focus", function(t) {
                        return s.onSlcFocus(t)
                    }), this.emitter.on(["build-select-filter"], function(t, e, i, n) {
                        return s.build(e, i, n)
                    }), this.emitter.on(["select-options"], function(t, e, i) {
                        return s.selectOptions(e, i)
                    }), this.initialized = !0
                }
            }, {
                key: "build",
                value: function(t) {
                    var e = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
                        i = this.tf;
                    t = parseInt(t, 10), this.emitter.emit("before-populating-filter", i, t), this.opts = [], this.optsTxt = [], this.slcInnerHtml = "";
                    var s = i.fltIds[t],
                        n = h["default"].id(s),
                        r = i.tbl.rows,
                        l = i.matchCase;
                    this.isCustom = i.isCustomOptions(t);
                    var a = void 0;
                    e && i.activeFilterId && (a = i.activeFilterId.split("_")[0], a = a.split(i.prfxFlt)[1]);
                    var o = null,
                        u = null;
                    e && i.disableExcludedOptions && (o = [], u = []);
                    for (var f = i.refRow; f < i.nbRows; f++)
                        if (!i.hasVisibleRows || -1 === i.visibleRows.indexOf(f)) {
                            var c = r[f].cells,
                                g = c.length;
                            if (g === i.nbCells && !this.isCustom)
                                for (var b = 0; g > b; b++)
                                    if (t === b && (!e || e && i.disableExcludedOptions) || t === b && e && ("" === r[f].style.display && !i.paging || i.paging && (!i.validRowsIndex || i.validRowsIndex && -1 != i.validRowsIndex.indexOf(f)) && (void 0 === a || a === t || a != t && -1 != i.validRowsIndex.indexOf(f)))) {
                                        var m = i.getCellData(c[b]),
                                            _ = p["default"].matchCase(m, l);
                                        if (d["default"].has(this.opts, _, l) || this.opts.push(m), e && i.disableExcludedOptions) {
                                            var C = u[b];
                                            C || (C = i.getFilteredDataCol(b)), d["default"].has(C, _, l) || d["default"].has(o, _, l) || o.push(m)
                                        }
                                    }
                        }
                    if (this.isCustom) {
                        var w = i.getCustomOptions(t);
                        this.opts = w[0], this.optsTxt = w[1]
                    }
                    if (i.sortSlc && !this.isCustom && (l ? (this.opts.sort(), o && o.sort()) : (this.opts.sort(v["default"].ignoreCase), o && o.sort(v["default"].ignoreCase))), -1 != i.sortNumAsc.indexOf(t)) try {
                        this.opts.sort(v["default"].numSortAsc), o && o.sort(v["default"].numSortAsc), this.isCustom && this.optsTxt.sort(v["default"].numSortAsc)
                    } catch (x) {
                        throw new Error(y.replace("{0}", t).replace("{1}", "ascending"))
                    }
                    if (-1 != i.sortNumDesc.indexOf(t)) try {
                        this.opts.sort(v["default"].numSortDesc), o && o.sort(v["default"].numSortDesc), this.isCustom && this.optsTxt.sort(v["default"].numSortDesc)
                    } catch (x) {
                        throw new Error(y.replace("{0}", t).replace("{1}", "ascending"))
                    }
                    this.addOptions(t, n, e, o), this.emitter.emit("after-populating-filter", i, t, n)
                }
            }, {
                key: "addOptions",
                value: function(t, e, i, s) {
                    var n = this.tf,
                        r = e.value;
                    e.innerHTML = "", e = this.addFirstOption(e);
                    for (var l = 0; l < this.opts.length; l++)
                        if ("" !== this.opts[l]) {
                            var a = this.opts[l],
                                o = this.isCustom ? this.optsTxt[l] : a,
                                u = !1;
                            i && n.disableExcludedOptions && d["default"].has(s, p["default"].matchCase(a, n.matchCase), n.matchCase) && (u = !0);
                            var f = void 0;
                            f = n.loadFltOnDemand && r === this.opts[l] && n.getFilterType(t) === n.fltTypeSlc ? h["default"].createOpt(o, a, !0) : h["default"].createOpt(o, a, !1), u && (f.disabled = !0), e.appendChild(f)
                        }
                    e.setAttribute("filled", "1")
                }
            }, {
                key: "addFirstOption",
                value: function(t) {
                    var e = this.tf,
                        i = h["default"].createOpt(this.enableSlcResetFilter ? e.displayAllText : "", "");
                    if (this.enableSlcResetFilter || (i.style.display = "none"), t.appendChild(i), e.enableEmptyOption) {
                        var s = h["default"].createOpt(e.emptyText, e.emOperator);
                        t.appendChild(s)
                    }
                    if (e.enableNonEmptyOption) {
                        var n = h["default"].createOpt(e.nonEmptyText, e.nmOperator);
                        t.appendChild(n)
                    }
                    return t
                }
            }, {
                key: "selectOptions",
                value: function(t) {
                    var e = arguments.length <= 1 || void 0 === arguments[1] ? [] : arguments[1],
                        i = this.tf;
                    if (i.getFilterType(t) === i.fltTypeMulti && 0 !== e.length) {
                        var s = i.getFilterElement(t);
                        [].forEach.call(s.options, function(t) {
                            ("" === e[0] || "" === t.value) && (t.selected = !1), "" !== t.value && d["default"].has(e, t.value, !0) && (t.selected = !0)
                        })
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    var t = this;
                    this.emitter.off(["build-select-filter"], function(e, i, s) {
                        return t.build(e, i, s)
                    }), this.emitter.off(["select-options"], function(e, i, s) {
                        return t.selectOptions(i, s)
                    })
                }
            }]), e
        }(o.Feature)
    }, function(t, e, i) {
        "use strict";

        function s(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(3),
            r = s(n);
        e["default"] = {
            has: function(t, e, i) {
                for (var s = void 0 === i ? !1 : i, n = 0; n < t.length; n++)
                    if (r["default"].matchCase(t[n].toString(), s) == e) return !0;
                return !1
            }
        }
    }, function(t, e, i) {
        "use strict";

        function s(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(3),
            r = s(n);
        e["default"] = {
            ignoreCase: function(t, e) {
                var i = r["default"].lower(t),
                    s = r["default"].lower(e);
                return s > i ? -1 : i > s ? 1 : 0
            },
            numSortAsc: function(t, e) {
                return t - e
            },
            numSortDesc: function(t, e) {
                return e - t
            }
        }
    }, function(t, e, i) {
        "use strict";

        function s(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function r(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function l(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.CheckList = void 0;
        var a = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var s = e[i];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                    }
                }
                return function(e, i, s) {
                    return i && t(e.prototype, i), s && t(e, s), e
                }
            }(),
            o = i(11),
            u = i(2),
            h = s(u),
            f = i(16),
            d = s(f),
            c = i(3),
            p = s(c),
            g = i(17),
            v = s(g),
            b = i(1),
            m = s(b),
            y = "Filter options for column {0} cannot be sorted in {1} manner.";
        e.CheckList = function(t) {
            function e(t) {
                n(this, e);
                var i = r(this, Object.getPrototypeOf(e).call(this, t, "checkList")),
                    s = t.config();
                return i.checkListDiv = [], i.checkListDivCssClass = s.div_checklist_css_class || "div_checklist", i.checkListCssClass = s.checklist_css_class || "flt_checklist", i.checkListItemCssClass = s.checklist_item_css_class || "flt_checklist_item", i.checkListSlcItemCssClass = s.checklist_selected_item_css_class || "flt_checklist_slc_item", i.activateCheckListTxt = s.activate_checklist_text || "Click to load filter data", i.checkListItemDisabledCssClass = s.checklist_item_disabled_css_class || "flt_checklist_item_disabled", i.enableCheckListResetFilter = s.enable_checklist_reset_filter === !1 ? !1 : !0, i.prfxCheckListDiv = "chkdiv_", i.isCustom = null, i.opts = null, i.optsTxt = null, i.excludedOpts = null, i
            }
            return l(e, t), a(e, [{
                key: "onChange",
                value: function(t) {
                    var e = t.target,
                        i = this.tf;
                    i.activeFilterId = e.getAttribute("id"), i.activeFlt = h["default"].id(i.activeFilterId), i.filter()
                }
            }, {
                key: "optionClick",
                value: function(t) {
                    this.setCheckListValues(t.target), this.onChange(t)
                }
            }, {
                key: "onCheckListClick",
                value: function(t) {
                    var e = this,
                        i = m["default"].target(t);
                    if (this.tf.loadFltOnDemand && "0" === i.getAttribute("filled")) {
                        var s = i.getAttribute("ct"),
                            n = this.checkListDiv[s];
                        this.build(s), m["default"].remove(n, "click", function(t) {
                            return e.onCheckListClick(t)
                        })
                    }
                }
            }, {
                key: "init",
                value: function(t, e, i) {
                    var s = this,
                        n = this.tf,
                        r = e ? n.externalFltTgtIds[t] : null,
                        l = h["default"].create("div", ["id", this.prfxCheckListDiv + t + "_" + n.id], ["ct", t], ["filled", "0"]);
                    l.className = this.checkListDivCssClass, r ? (h["default"].id(r).appendChild(l), n.externalFltEls.push(l)) : i.appendChild(l), this.checkListDiv[t] = l, n.fltIds.push(n.prfxFlt + t + "_" + n.id), n.loadFltOnDemand ? (m["default"].add(l, "click", function(t) {
                        return s.onCheckListClick(t)
                    }), l.appendChild(h["default"].text(this.activateCheckListTxt))) : this.build(t), this.emitter.on(["build-checklist-filter"], function(t, e, i) {
                        return s.build(e, i)
                    }), this.emitter.on(["select-checklist-options"], function(t, e, i) {
                        return s.selectOptions(e, i)
                    }), this.initialized = !0
                }
            }, {
                key: "build",
                value: function(t) {
                    var e = this,
                        i = this.tf;
                    t = parseInt(t, 10), this.emitter.emit("before-populating-filter", i, t), this.opts = [], this.optsTxt = [];
                    var s = this.checkListDiv[t],
                        n = h["default"].create("ul", ["id", i.fltIds[t]], ["colIndex", t]);
                    n.className = this.checkListCssClass, m["default"].add(n, "change", function(t) {
                        return e.onChange(t)
                    });
                    var r = i.tbl.rows;
                    this.isCustom = i.isCustomOptions(t);
                    var l = void 0;
                    i.linkedFilters && i.activeFilterId && (l = i.activeFilterId.split("_")[0], l = l.split(i.prfxFlt)[1]);
                    var a = [];
                    i.linkedFilters && i.disableExcludedOptions && (this.excludedOpts = []), s.innerHTML = "";
                    for (var o = i.refRow; o < i.nbRows; o++)
                        if (!i.hasVisibleRows || -1 === i.visibleRows.indexOf(o)) {
                            var u = r[o].cells,
                                f = u.length;
                            if (f === i.nbCells && !this.isCustom)
                                for (var c = 0; f > c; c++)
                                    if (t === c && (!i.linkedFilters || i.linkedFilters && i.disableExcludedOptions) || t === c && i.linkedFilters && ("" === r[o].style.display && !i.paging || i.paging && (!l || l === t || l != t && -1 != i.validRowsIndex.indexOf(o)))) {
                                        var g = i.getCellData(u[c]),
                                            b = p["default"].matchCase(g, i.matchCase);
                                        d["default"].has(this.opts, b, i.matchCase) || this.opts.push(g);
                                        var _ = a[c];
                                        i.linkedFilters && i.disableExcludedOptions && (_ || (_ = i.getFilteredDataCol(c)), d["default"].has(_, b, i.matchCase) || d["default"].has(this.excludedOpts, b, i.matchCase) || this.excludedOpts.push(g))
                                    }
                        }
                    if (this.isCustom) {
                        var C = i.getCustomOptions(t);
                        this.opts = C[0], this.optsTxt = C[1]
                    }
                    if (i.sortSlc && !this.isCustom && (i.matchCase ? (this.opts.sort(), this.excludedOpts && this.excludedOpts.sort()) : (this.opts.sort(v["default"].ignoreCase), this.excludedOpts && this.excludedOpts.sort(v["default"].ignoreCase))), -1 != i.sortNumAsc.indexOf(t)) try {
                        this.opts.sort(v["default"].numSortAsc), this.excludedOpts && this.excludedOpts.sort(v["default"].numSortAsc), this.isCustom && this.optsTxt.sort(v["default"].numSortAsc)
                    } catch (w) {
                        throw new Error(y.replace("{0}", t).replace("{1}", "ascending"))
                    }
                    if (-1 != i.sortNumDesc.indexOf(t)) try {
                        this.opts.sort(v["default"].numSortDesc), this.excludedOpts && this.excludedOpts.sort(v["default"].numSortDesc), this.isCustom && this.optsTxt.sort(v["default"].numSortDesc)
                    } catch (w) {
                        throw new Error(y.replace("{0}", t).replace("{1}", "descending"))
                    }
                    this.addChecks(t, n), i.loadFltOnDemand && (s.innerHTML = ""), s.appendChild(n), s.setAttribute("filled", "1"), this.emitter.emit("after-populating-filter", i, t, s)
                }
            }, {
                key: "addChecks",
                value: function(t, e) {
                    for (var i = this, s = this.tf, n = this.addTChecks(t, e), r = 0; r < this.opts.length; r++) {
                        var l = this.opts[r],
                            a = this.isCustom ? this.optsTxt[r] : l,
                            o = h["default"].createCheckItem(s.fltIds[t] + "_" + (r + n), l, a);
                        o.className = this.checkListItemCssClass, s.linkedFilters && s.disableExcludedOptions && d["default"].has(this.excludedOpts, p["default"].matchCase(l, s.matchCase), s.matchCase) ? (h["default"].addClass(o, this.checkListItemDisabledCssClass), o.check.disabled = !0, o.disabled = !0) : m["default"].add(o.check, "click", function(t) {
                            return i.optionClick(t)
                        }), e.appendChild(o), "" === l && (o.style.display = "none")
                    }
                }
            }, {
                key: "addTChecks",
                value: function(t, e) {
                    var i = this,
                        s = this.tf,
                        n = 1,
                        r = h["default"].createCheckItem(s.fltIds[t] + "_0", "", s.displayAllText);
                    if (r.className = this.checkListItemCssClass, e.appendChild(r), m["default"].add(r.check, "click", function(t) {
                            return i.optionClick(t)
                        }), this.enableCheckListResetFilter || (r.style.display = "none"), s.enableEmptyOption) {
                        var l = h["default"].createCheckItem(s.fltIds[t] + "_1", s.emOperator, s.emptyText);
                        l.className = this.checkListItemCssClass, e.appendChild(l), m["default"].add(l.check, "click", function(t) {
                            return i.optionClick(t)
                        }), n++
                    }
                    if (s.enableNonEmptyOption) {
                        var a = h["default"].createCheckItem(s.fltIds[t] + "_2", s.nmOperator, s.nonEmptyText);
                        a.className = this.checkListItemCssClass, e.appendChild(a), m["default"].add(a.check, "click", function(t) {
                            return i.optionClick(t)
                        }), n++
                    }
                    return n
                }
            }, {
                key: "setCheckListValues",
                value: function(t) {
                    if (t) {
                        var e = this.tf,
                            i = t.value,
                            s = parseInt(t.id.split("_")[2], 10),
                            n = t.id.split("_")[0].replace(e.prfxFlt, ""),
                            r = "LI",
                            l = e.getFilterElement(parseInt(n, 10)),
                            a = l.childNodes[s],
                            o = l.getAttribute("colIndex"),
                            u = l.getAttribute("value"),
                            f = l.getAttribute("indexes");
                        if (t.checked) {
                            if ("" === i) {
                                if (f && "" !== f)
                                    for (var d = f.split(e.separator), c = 0; c < d.length; c++) {
                                        var g = h["default"].id(e.fltIds[o] + "_" + d[c]);
                                        g && (g.checked = !1, h["default"].removeClass(l.childNodes[d[c]], this.checkListSlcItemCssClass))
                                    }
                                l.setAttribute("value", ""), l.setAttribute("indexes", "")
                            } else u = u ? u : "", i = p["default"].trim(u + " " + i + " " + e.orOperator), s = f + s + e.separator, l.setAttribute("value", i), l.setAttribute("indexes", s), h["default"].id(e.fltIds[o] + "_0") && (h["default"].id(e.fltIds[o] + "_0").checked = !1);
                            a.nodeName === r && (h["default"].removeClass(l.childNodes[0], this.checkListSlcItemCssClass), h["default"].addClass(a, this.checkListSlcItemCssClass))
                        } else {
                            if ("" !== i) {
                                var v = new RegExp(p["default"].rgxEsc(i + " " + e.orOperator));
                                u = u.replace(v, ""), l.setAttribute("value", p["default"].trim(u));
                                var b = new RegExp(p["default"].rgxEsc(s + e.separator));
                                f = f.replace(b, ""), l.setAttribute("indexes", f)
                            }
                            a.nodeName === r && h["default"].removeClass(a, this.checkListSlcItemCssClass)
                        }
                    }
                }
            }, {
                key: "selectOptions",
                value: function(t) {
                    var e = arguments.length <= 1 || void 0 === arguments[1] ? [] : arguments[1],
                        i = this.tf;
                    if (i.getFilterType(t) === i.fltTypeCheckList && 0 !== e.length) {
                        var s = i.getFilterElement(t),
                            n = h["default"].tag(s, "li").length;
                        s.setAttribute("value", ""), s.setAttribute("indexes", "");
                        for (var r = 0; n > r; r++) {
                            var l = h["default"].tag(s, "li")[r],
                                a = h["default"].tag(l, "label")[0],
                                o = h["default"].tag(l, "input")[0],
                                u = p["default"].matchCase(h["default"].getText(a), i.caseSensitive);
                            "" !== u && d["default"].has(e, u, i.caseSensitive) ? (o.checked = !0, this.setCheckListValues(o)) : (o.checked = !1, this.setCheckListValues(o))
                        }
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    var t = this;
                    this.emitter.off(["build-checklist-filter"], function(e, i, s) {
                        return t.build(i, s)
                    }), this.emitter.off(["select-checklist-options"], function(e, i, s) {
                        return t.selectOptions(i, s)
                    })
                }
            }]), e
        }(o.Feature)
    }, function(t, e, i) {
        "use strict";

        function s(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function r(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function l(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.RowsCounter = void 0;
        var a = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var s = e[i];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                    }
                }
                return function(e, i, s) {
                    return i && t(e.prototype, i), s && t(e, s), e
                }
            }(),
            o = i(11),
            u = i(2),
            h = s(u),
            f = i(4),
            d = s(f);
        e.RowsCounter = function(t) {
            function e(t) {
                n(this, e);
                var i = r(this, Object.getPrototypeOf(e).call(this, t, "rowsCounter")),
                    s = i.config;
                return i.rowsCounterTgtId = s.rows_counter_target_id || null, i.rowsCounterDiv = null, i.rowsCounterSpan = null, i.rowsCounterText = s.rows_counter_text || "Rows: ", i.fromToTextSeparator = s.from_to_text_separator || "-", i.overText = s.over_text || " / ", i.totRowsCssClass = s.tot_rows_css_class || "tot", i.prfxCounter = "counter_", i.prfxTotRows = "totrows_span_", i.prfxTotRowsTxt = "totRowsTextSpan_", i.onBeforeRefreshCounter = d["default"].isFn(s.on_before_refresh_counter) ? s.on_before_refresh_counter : null, i.onAfterRefreshCounter = d["default"].isFn(s.on_after_refresh_counter) ? s.on_after_refresh_counter : null, i
            }
            return l(e, t), a(e, [{
                key: "init",
                value: function() {
                    var t = this;
                    if (!this.initialized) {
                        var e = this.tf,
                            i = h["default"].create("div", ["id", this.prfxCounter + e.id]);
                        i.className = this.totRowsCssClass;
                        var s = h["default"].create("span", ["id", this.prfxTotRows + e.id]),
                            n = h["default"].create("span", ["id", this.prfxTotRowsTxt + e.id]);
                        n.appendChild(h["default"].text(this.rowsCounterText)), this.rowsCounterTgtId || e.setToolbar();
                        var r = this.rowsCounterTgtId ? h["default"].id(this.rowsCounterTgtId) : e.lDiv;
                        this.rowsCounterTgtId ? (r.appendChild(n), r.appendChild(s)) : (i.appendChild(n), i.appendChild(s), r.appendChild(i)), this.rowsCounterDiv = i, this.rowsCounterSpan = s, this.emitter.on(["after-filtering", "grouped-by-page"], function() {
                            return t.refresh(e.nbVisibleRows)
                        }), this.emitter.on(["rows-changed"], function() {
                            return t.refresh()
                        }), this.initialized = !0, this.refresh()
                    }
                }
            }, {
                key: "refresh",
                value: function(t) {
                    if (this.initialized && this.isEnabled()) {
                        var e = this.tf;
                        this.onBeforeRefreshCounter && this.onBeforeRefreshCounter.call(null, e, this.rowsCounterSpan);
                        var i;
                        if (e.paging) {
                            var s = e.feature("paging");
                            if (s) {
                                var n = parseInt(s.startPagingRow, 10) + (e.nbVisibleRows > 0 ? 1 : 0),
                                    r = n + s.pagingLength - 1 <= e.nbVisibleRows ? n + s.pagingLength - 1 : e.nbVisibleRows;
                                i = n + this.fromToTextSeparator + r + this.overText + e.nbVisibleRows
                            }
                        } else i = t && "" !== t ? t : e.nbFilterableRows - e.nbHiddenRows;
                        this.rowsCounterSpan.innerHTML = i, this.onAfterRefreshCounter && this.onAfterRefreshCounter.call(null, e, this.rowsCounterSpan, i)
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    var t = this;
                    this.initialized && (!this.rowsCounterTgtId && this.rowsCounterDiv ? h["default"].remove(this.rowsCounterDiv) : h["default"].id(this.rowsCounterTgtId).innerHTML = "", this.rowsCounterSpan = null, this.rowsCounterDiv = null, this.emitter.off(["after-filtering", "grouped-by-page"], function() {
                        return t.refresh(tf.nbVisibleRows)
                    }), this.emitter.off(["rows-changed"], function() {
                        return t.refresh()
                    }), this.initialized = !1)
                }
            }]), e
        }(o.Feature)
    }, function(t, e, i) {
        "use strict";

        function s(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function r(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function l(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.StatusBar = void 0;
        var a = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var s = e[i];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                    }
                }
                return function(e, i, s) {
                    return i && t(e.prototype, i), s && t(e, s), e
                }
            }(),
            o = i(11),
            u = i(2),
            h = s(u),
            f = i(4),
            d = s(f),
            c = window;
        e.StatusBar = function(t) {
            function e(t) {
                n(this, e);
                var i = r(this, Object.getPrototypeOf(e).call(this, t, "statusBar")),
                    s = i.config;
                return i.statusBarTgtId = s.status_bar_target_id || null, i.statusBarDiv = null, i.statusBarSpan = null, i.statusBarSpanText = null, i.statusBarText = s.status_bar_text || "", i.statusBarCssClass = s.status_bar_css_class || "status", i.statusBarCloseDelay = 250, i.onBeforeShowMsg = d["default"].isFn(s.on_before_show_msg) ? s.on_before_show_msg : null, i.onAfterShowMsg = d["default"].isFn(s.on_after_show_msg) ? s.on_after_show_msg : null, i.msgFilter = s.msg_filter || "Filtering data...", i.msgPopulate = s.msg_populate || "Populating filter...", i.msgPopulateCheckList = s.msg_populate_checklist || "Populating list...", i.msgChangePage = s.msg_change_page || "Collecting paging data...", i.msgClear = s.msg_clear || "Clearing filters...", i.msgChangeResults = s.msg_change_results || "Changing results per page...", i.msgResetPage = s.msg_reset_page || "Re-setting page...", i.msgResetPageLength = s.msg_reset_page_length || "Re-setting page length...", i.msgSort = s.msg_sort || "Sorting data...", i.msgLoadExtensions = s.msg_load_extensions || "Loading extensions...", i.msgLoadThemes = s.msg_load_themes || "Loading theme(s)...", i.prfxStatus = "status_", i.prfxStatusSpan = "statusSpan_", i.prfxStatusTxt = "statusText_", i
            }
            return l(e, t), a(e, [{
                key: "init",
                value: function() {
                    var t = this;
                    if (!this.initialized) {
                        var e = this.tf,
                            i = this.emitter,
                            s = h["default"].create("div", ["id", this.prfxStatus + e.id]);
                        s.className = this.statusBarCssClass;
                        var n = h["default"].create("span", ["id", this.prfxStatusSpan + e.id]),
                            r = h["default"].create("span", ["id", this.prfxStatusTxt + e.id]);
                        r.appendChild(h["default"].text(this.statusBarText)), this.statusBarTgtId || e.setToolbar();
                        var l = this.statusBarTgtId ? h["default"].id(this.statusBarTgtId) : e.lDiv;
                        this.statusBarTgtId ? (l.appendChild(r), l.appendChild(n)) : (s.appendChild(r), s.appendChild(n), l.appendChild(s)), this.statusBarDiv = s, this.statusBarSpan = n, this.statusBarSpanText = r, i.on(["before-filtering"], function() {
                            return t.message(t.msgFilter)
                        }), i.on(["before-populating-filter"], function() {
                            return t.message(t.msgPopulate)
                        }), i.on(["before-changing-page"], function() {
                            return t.message(t.msgChangePage)
                        }), i.on(["before-clearing-filters"], function() {
                            return t.message(t.msgClear)
                        }), i.on(["before-changing-results-per-page"], function() {
                            return t.message(t.msgChangeResults)
                        }), i.on(["before-reset-page"], function() {
                            return t.message(t.msgResetPage)
                        }), i.on(["before-reset-page-length"], function() {
                            return t.message(t.msgResetPageLength)
                        }), i.on(["before-loading-extensions"], function() {
                            return t.message(t.msgLoadExtensions)
                        }), i.on(["before-loading-themes"], function() {
                            return t.message(t.msgLoadThemes)
                        }), i.on(["after-filtering", "after-populating-filter", "after-changing-page", "after-clearing-filters", "after-changing-results-per-page", "after-reset-page", "after-reset-page-length", "after-loading-extensions", "after-loading-themes"], function() {
                            return t.message("")
                        }), this.initialized = !0
                    }
                }
            }, {
                key: "message",
                value: function() {
                    var t = this,
                        e = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0];
                    if (this.isEnabled()) {
                        this.onBeforeShowMsg && this.onBeforeShowMsg.call(null, this.tf, e);
                        var i = "" === e ? this.statusBarCloseDelay : 1;
                        c.setTimeout(function() {
                            t.initialized && (t.statusBarSpan.innerHTML = e, t.onAfterShowMsg && t.onAfterShowMsg.call(null, t.tf, e))
                        }, i)
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    var t = this;
                    if (this.initialized) {
                        var e = this.emitter;
                        this.statusBarDiv.innerHTML = "", this.statusBarTgtId || h["default"].remove(this.statusBarDiv), this.statusBarSpan = null, this.statusBarSpanText = null, this.statusBarDiv = null, e.off(["before-filtering"], function() {
                            return t.message(t.msgFilter)
                        }), e.off(["before-populating-filter"], function() {
                            return t.message(t.msgPopulate)
                        }), e.off(["before-changing-page"], function() {
                            return t.message(t.msgChangePage)
                        }), e.off(["before-clearing-filters"], function() {
                            return t.message(t.msgClear)
                        }), e.off(["before-changing-results-per-page"], function() {
                            return t.message(t.msgChangeResults)
                        }), e.off(["before-reset-page"], function() {
                            return t.message(t.msgResetPage)
                        }), e.off(["before-reset-page-length"], function() {
                            return t.message(t.msgResetPageLength)
                        }), e.off(["before-loading-extensions"], function() {
                            return t.message(t.msgLoadExtensions)
                        }), e.off(["before-loading-themes"], function() {
                            return t.message(t.msgLoadThemes)
                        }), e.off(["after-filtering", "after-populating-filter", "after-changing-page", "after-clearing-filters", "after-changing-results-per-page", "after-reset-page", "after-reset-page-length", "after-loading-extensions", "after-loading-themes"], function() {
                            return t.message("")
                        }), this.initialized = !1
                    }
                }
            }]), e
        }(o.Feature)
    }, function(t, e, i) {
        "use strict";

        function s(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function r(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function l(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Paging = void 0;
        var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            },
            o = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var s = e[i];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                    }
                }
                return function(e, i, s) {
                    return i && t(e.prototype, i), s && t(e, s), e
                }
            }(),
            u = i(11),
            h = i(2),
            f = s(h),
            d = i(4),
            c = s(d),
            p = i(3),
            g = s(p),
            v = i(1),
            b = s(v);
        e.Paging = function(t) {
            function e(t) {
                n(this, e);
                var i = r(this, Object.getPrototypeOf(e).call(this, t, "paging")),
                    s = i.config;
                i.btnPageCssClass = s.paging_btn_css_class || "pgInp", i.pagingSlc = null, i.resultsPerPageSlc = null, i.pagingTgtId = s.paging_target_id || null, i.pagingLength = isNaN(s.paging_length) ? 10 : s.paging_length, i.resultsPerPageTgtId = s.results_per_page_target_id || null, i.pgSlcCssClass = s.paging_slc_css_class || "pgSlc", i.pgInpCssClass = s.paging_inp_css_class || "pgNbInp", i.resultsPerPage = s.results_per_page || null, i.hasResultsPerPage = c["default"].isArray(i.resultsPerPage), i.resultsSlcCssClass = s.results_slc_css_class || "rspg", i.resultsSpanCssClass = s.results_span_css_class || "rspgSpan", i.startPagingRow = 0, i.nbPages = 0, i.currentPageNb = 1, i.btnNextPageText = s.btn_next_page_text || ">", i.btnPrevPageText = s.btn_prev_page_text || "<", i.btnLastPageText = s.btn_last_page_text || ">|", i.btnFirstPageText = s.btn_first_page_text || "|<", i.btnNextPageHtml = s.btn_next_page_html || (t.enableIcons ? '<input type="button" value="" class="' + i.btnPageCssClass + ' nextPage" title="Página siguiente" />' : null), i.btnPrevPageHtml = s.btn_prev_page_html || (t.enableIcons ? '<input type="button" value="" class="' + i.btnPageCssClass + ' previousPage" title="Página Anterior" />' : null), i.btnFirstPageHtml = s.btn_first_page_html || (t.enableIcons ? '<input type="button" value="" class="' + i.btnPageCssClass + ' firstPage" title="Primera página" />' : null), i.btnLastPageHtml = s.btn_last_page_html || (t.enableIcons ? '<input type="button" value="" class="' + i.btnPageCssClass + ' lastPage" title="Última página" />' : null), i.pageText = s.page_text || " Page ", i.ofText = s.of_text || " of ", i.nbPgSpanCssClass = s.nb_pages_css_class || "nbpg", i.hasPagingBtns = s.paging_btns === !1 ? !1 : !0, i.pageSelectorType = s.page_selector_type || t.fltTypeSlc, i.onBeforeChangePage = c["default"].isFn(s.on_before_change_page) ? s.on_before_change_page : null, i.onAfterChangePage = c["default"].isFn(s.on_after_change_page) ? s.on_after_change_page : null, i.prfxSlcPages = "slcPages_", i.prfxSlcResults = "slcResults_", i.prfxSlcResultsTxt = "slcResultsTxt_", i.prfxBtnNextSpan = "btnNextSpan_", i.prfxBtnPrevSpan = "btnPrevSpan_", i.prfxBtnLastSpan = "btnLastSpan_", i.prfxBtnFirstSpan = "btnFirstSpan_", i.prfxBtnNext = "btnNext_", i.prfxBtnPrev = "btnPrev_", i.prfxBtnLast = "btnLast_", i.prfxBtnFirst = "btnFirst_", i.prfxPgSpan = "pgspan_", i.prfxPgBeforeSpan = "pgbeforespan_", i.prfxPgAfterSpan = "pgafterspan_";
                var l = t.refRow,
                    a = t.nbRows;
                i.nbPages = Math.ceil((a - l) / i.pagingLength);
                var o = i;
                return i.evt = {
                    slcIndex: function() {
                        return o.pageSelectorType === t.fltTypeSlc ? o.pagingSlc.options.selectedIndex : parseInt(o.pagingSlc.value, 10) - 1
                    },
                    nbOpts: function() {
                        return o.pageSelectorType === t.fltTypeSlc ? parseInt(o.pagingSlc.options.length, 10) - 1 : o.nbPages - 1
                    },
                    next: function() {
                        var t = o.evt.slcIndex() < o.evt.nbOpts() ? o.evt.slcIndex() + 1 : 0;
                        o.changePage(t)
                    },
                    prev: function() {
                        var t = o.evt.slcIndex() > 0 ? o.evt.slcIndex() - 1 : o.evt.nbOpts();
                        o.changePage(t)
                    },
                    last: function() {
                        o.changePage(o.evt.nbOpts())
                    },
                    first: function() {
                        o.changePage(0)
                    },
                    _detectKey: function(e) {
                        var i = b["default"].keyCode(e);
                        13 === i && (t.sorted ? (t.filter(), o.changePage(o.evt.slcIndex())) : o.changePage(), this.blur())
                    },
                    slcPagesChange: null,
                    nextEvt: null,
                    prevEvt: null,
                    lastEvt: null,
                    firstEvt: null
                }, i
            }
            return l(e, t), o(e, [{
                key: "init",
                value: function() {
                    var t, e = this,
                        i = this.tf,
                        s = this.evt;
                    if (!this.initialized) {
                        this.hasResultsPerPage && (this.resultsPerPage.length < 2 ? this.hasResultsPerPage = !1 : (this.pagingLength = this.resultsPerPage[1][0], this.setResultsPerPage())), s.slcPagesChange = function(t) {
                            var i = t.target;
                            e.changePage(i.selectedIndex)
                        }, this.pageSelectorType === i.fltTypeSlc && (t = f["default"].create(i.fltTypeSlc, ["id", this.prfxSlcPages + i.id]), t.className = this.pgSlcCssClass, b["default"].add(t, "change", s.slcPagesChange)), this.pageSelectorType === i.fltTypeInp && (t = f["default"].create(i.fltTypeInp, ["id", this.prfxSlcPages + i.id], ["value", this.currentPageNb]), t.className = this.pgInpCssClass, b["default"].add(t, "keypress", s._detectKey));
                        var n = f["default"].create("span", ["id", this.prfxBtnNextSpan + i.id]),
                            r = f["default"].create("span", ["id", this.prfxBtnPrevSpan + i.id]),
                            l = f["default"].create("span", ["id", this.prfxBtnLastSpan + i.id]),
                            a = f["default"].create("span", ["id", this.prfxBtnFirstSpan + i.id]);
                        if (this.hasPagingBtns) {
                            if (this.btnNextPageHtml) n.innerHTML = this.btnNextPageHtml, b["default"].add(n, "click", s.next);
                            else {
                                var o = f["default"].create(i.fltTypeInp, ["id", this.prfxBtnNext + i.id], ["type", "button"], ["value", this.btnNextPageText], ["title", "Next"]);
                                o.className = this.btnPageCssClass, b["default"].add(o, "click", s.next), n.appendChild(o)
                            }
                            if (this.btnPrevPageHtml) r.innerHTML = this.btnPrevPageHtml, b["default"].add(r, "click", s.prev);
                            else {
                                var u = f["default"].create(i.fltTypeInp, ["id", this.prfxBtnPrev + i.id], ["type", "button"], ["value", this.btnPrevPageText], ["title", "Previous"]);
                                u.className = this.btnPageCssClass, b["default"].add(u, "click", s.prev), r.appendChild(u)
                            }
                            if (this.btnLastPageHtml) l.innerHTML = this.btnLastPageHtml,
                                b["default"].add(l, "click", s.last);
                            else {
                                var h = f["default"].create(i.fltTypeInp, ["id", this.prfxBtnLast + i.id], ["type", "button"], ["value", this.btnLastPageText], ["title", "Last"]);
                                h.className = this.btnPageCssClass, b["default"].add(h, "click", s.last), l.appendChild(h)
                            }
                            if (this.btnFirstPageHtml) a.innerHTML = this.btnFirstPageHtml, b["default"].add(a, "click", s.first);
                            else {
                                var d = f["default"].create(i.fltTypeInp, ["id", this.prfxBtnFirst + i.id], ["type", "button"], ["value", this.btnFirstPageText], ["title", "First"]);
                                d.className = this.btnPageCssClass, b["default"].add(d, "click", s.first), a.appendChild(d)
                            }
                        }
                        this.pagingTgtId || i.setToolbar();
                        var c = this.pagingTgtId ? f["default"].id(this.pagingTgtId) : i.mDiv;
                        c.appendChild(a), c.appendChild(r);
                        var p = f["default"].create("span", ["id", this.prfxPgBeforeSpan + i.id]);
                        p.appendChild(f["default"].text(this.pageText)), p.className = this.nbPgSpanCssClass, c.appendChild(p), c.appendChild(t);
                        var g = f["default"].create("span", ["id", this.prfxPgAfterSpan + i.id]);
                        g.appendChild(f["default"].text(this.ofText)), g.className = this.nbPgSpanCssClass, c.appendChild(g);
                        var v = f["default"].create("span", ["id", this.prfxPgSpan + i.id]);
                        v.className = this.nbPgSpanCssClass, v.appendChild(f["default"].text(" " + this.nbPages + " ")), c.appendChild(v), c.appendChild(n), c.appendChild(l), this.pagingSlc = f["default"].id(this.prfxSlcPages + i.id), i.rememberGridValues || this.setPagingInfo(), i.fltGrid || (i.validateAllRows(), this.setPagingInfo(i.validRowsIndex)), this.emitter.on(["after-filtering"], function() {
                            return e.resetPagingInfo()
                        }), this.emitter.on(["initialized"], function() {
                            return e.resetValues()
                        }), this.initialized = !0
                    }
                }
            }, {
                key: "reset",
                value: function() {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? !1 : arguments[0],
                        e = this.tf;
                    this.isEnabled() || (this.enable(), this.init(), t && e.filter())
                }
            }, {
                key: "resetPagingInfo",
                value: function() {
                    this.startPagingRow = 0, this.currentPageNb = 1, this.setPagingInfo(this.tf.validRowsIndex)
                }
            }, {
                key: "setPagingInfo",
                value: function(t) {
                    var e = this.tf,
                        i = this.pagingTgtId ? f["default"].id(this.pagingTgtId) : e.mDiv,
                        s = f["default"].id(this.prfxPgSpan + e.id);
                    if (e.validRowsIndex = t || e.getValidRows(!0), this.nbPages = Math.ceil(e.validRowsIndex.length / this.pagingLength), s.innerHTML = this.nbPages, this.pageSelectorType === e.fltTypeSlc && (this.pagingSlc.innerHTML = ""), this.nbPages > 0)
                        if (i.style.visibility = "visible", this.pageSelectorType === e.fltTypeSlc)
                            for (var n = 0; n < this.nbPages; n++) {
                                var r = f["default"].createOpt(n + 1, n * this.pagingLength, !1);
                                this.pagingSlc.options[n] = r
                            } else this.pagingSlc.value = this.currentPageNb;
                        else i.style.visibility = "hidden";
                    this.groupByPage(e.validRowsIndex)
                }
            }, {
                key: "groupByPage",
                value: function(t) {
                    var e = this.tf,
                        i = e.tbl.rows,
                        s = parseInt(this.startPagingRow, 10),
                        n = s + parseInt(this.pagingLength, 10);
                    t && (e.validRowsIndex = t);
                    for (var r = 0, l = e.validRowsIndex.length; l > r; r++) {
                        var a = e.validRowsIndex[r],
                            o = i[a],
                            u = o.getAttribute("validRow"),
                            h = !1;
                        r >= s && n > r ? (c["default"].isNull(u) || Boolean("true" === u)) && (o.style.display = "", h = !0) : o.style.display = "none", this.emitter.emit("row-paged", e, a, r, h)
                    }
                    e.nbVisibleRows = e.validRowsIndex.length, this.emitter.emit("grouped-by-page", e, this)
                }
            }, {
                key: "getPage",
                value: function() {
                    return this.currentPageNb
                }
            }, {
                key: "setPage",
                value: function(t) {
                    var e = this.tf;
                    if (e.hasGrid() && this.isEnabled()) {
                        var i = this.evt,
                            s = "undefined" == typeof t ? "undefined" : a(t);
                        if ("string" === s) switch (g["default"].lower(t)) {
                            case "next":
                                i.next();
                                break;
                            case "previous":
                                i.prev();
                                break;
                            case "last":
                                i.last();
                                break;
                            case "first":
                                i.first();
                                break;
                            default:
                                i.next()
                        } else "number" === s && this.changePage(t - 1)
                    }
                }
            }, {
                key: "setResultsPerPage",
                value: function() {
                    var t = this,
                        e = this.tf,
                        i = this.evt;
                    if (!this.resultsPerPageSlc && this.resultsPerPage) {
                        i.slcResultsChange = function(e) {
                            t.changeResultsPerPage(), e.target.blur()
                        };
                        var s = f["default"].create(e.fltTypeSlc, ["id", this.prfxSlcResults + e.id]);
                        s.className = this.resultsSlcCssClass;
                        var n = this.resultsPerPage[0],
                            r = this.resultsPerPage[1],
                            l = f["default"].create("span", ["id", this.prfxSlcResultsTxt + e.id]);
                        l.className = this.resultsSpanCssClass, this.resultsPerPageTgtId || e.setToolbar();
                        var a = this.resultsPerPageTgtId ? f["default"].id(this.resultsPerPageTgtId) : e.rDiv;
                        l.appendChild(f["default"].text(n));
                        var o = e.feature("help");
                        o && o.btn ? (o.btn.parentNode.insertBefore(l, o.btn), o.btn.parentNode.insertBefore(s, o.btn)) : (a.appendChild(l), a.appendChild(s));
                        for (var u = 0; u < r.length; u++) {
                            var h = new Option(r[u], r[u], !1, !1);
                            s.options[u] = h
                        }
                        b["default"].add(s, "change", i.slcResultsChange), this.resultsPerPageSlc = s
                    }
                }
            }, {
                key: "removeResultsPerPage",
                value: function() {
                    var t = this.tf;
                    if (t.hasGrid() && this.resultsPerPageSlc && this.resultsPerPage) {
                        var e = this.resultsPerPageSlc,
                            i = f["default"].id(this.prfxSlcResultsTxt + t.id);
                        e && f["default"].remove(e), i && f["default"].remove(i), this.resultsPerPageSlc = null
                    }
                }
            }, {
                key: "changePage",
                value: function(t) {
                    var e = this.tf;
                    this.isEnabled() && (this.emitter.emit("before-changing-page", e, t), null === t && (t = this.pageSelectorType === e.fltTypeSlc ? this.pagingSlc.options.selectedIndex : this.pagingSlc.value - 1), t >= 0 && t <= this.nbPages - 1 && (this.onBeforeChangePage && this.onBeforeChangePage.call(null, this, t), this.currentPageNb = parseInt(t, 10) + 1, this.pageSelectorType === e.fltTypeSlc ? this.pagingSlc.options[t].selected = !0 : this.pagingSlc.value = this.currentPageNb, this.startPagingRow = this.pageSelectorType === e.fltTypeSlc ? this.pagingSlc.value : t * this.pagingLength, this.groupByPage(), this.onAfterChangePage && this.onAfterChangePage.call(null, this, t)), this.emitter.emit("after-changing-page", e, t))
                }
            }, {
                key: "changeResultsPerPage",
                value: function() {
                    var t = this.tf;
                    if (this.isEnabled()) {
                        this.emitter.emit("before-changing-results-per-page", t);
                        var e = this.resultsPerPageSlc,
                            i = e.selectedIndex,
                            s = this.pageSelectorType === t.fltTypeSlc ? this.pagingSlc.selectedIndex : parseInt(this.pagingSlc.value - 1, 10);
                        if (this.pagingLength = parseInt(e.options[i].value, 10), this.startPagingRow = this.pagingLength * s, !isNaN(this.pagingLength) && (this.startPagingRow >= t.nbFilterableRows && (this.startPagingRow = t.nbFilterableRows - this.pagingLength), this.setPagingInfo(), this.pageSelectorType === t.fltTypeSlc)) {
                            var n = this.pagingSlc.options.length - 1 <= s ? this.pagingSlc.options.length - 1 : s;
                            this.pagingSlc.options[n].selected = !0
                        }
                        this.emitter.emit("after-changing-results-per-page", t, i)
                    }
                }
            }, {
                key: "resetValues",
                value: function() {
                    var t = this.tf;
                    t.rememberPageLen && this.resetPageLength(), t.rememberPageNb && this.resetPage()
                }
            }, {
                key: "resetPage",
                value: function() {
                    var t = this.tf;
                    if (this.isEnabled()) {
                        this.emitter.emit("before-reset-page", t);
                        var e = t.feature("store").getPageNb();
                        "" !== e && this.changePage(e - 1), this.emitter.emit("after-reset-page", t, e)
                    }
                }
            }, {
                key: "resetPageLength",
                value: function() {
                    var t = this.tf;
                    if (this.isEnabled()) {
                        this.emitter.emit("before-reset-page-length", t);
                        var e = t.feature("store").getPageLength();
                        "" !== e && (this.resultsPerPageSlc.options[e].selected = !0, this.changeResultsPerPage()), this.emitter.emit("after-reset-page-length", t, e)
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    var t = this,
                        e = this.tf;
                    if (this.initialized) {
                        var i = f["default"].id(this.prfxBtnNextSpan + e.id),
                            s = f["default"].id(this.prfxBtnPrevSpan + e.id),
                            n = f["default"].id(this.prfxBtnLastSpan + e.id),
                            r = f["default"].id(this.prfxBtnFirstSpan + e.id),
                            l = f["default"].id(this.prfxPgBeforeSpan + e.id),
                            a = f["default"].id(this.prfxPgAfterSpan + e.id),
                            o = f["default"].id(this.prfxPgSpan + e.id),
                            u = this.evt;
                        this.pagingSlc && (this.pageSelectorType === e.fltTypeSlc ? b["default"].remove(this.pagingSlc, "change", u.slcPagesChange) : this.pageSelectorType === e.fltTypeInp && b["default"].remove(this.pagingSlc, "keypress", u._detectKey), f["default"].remove(this.pagingSlc)), i && (b["default"].remove(i, "click", u.next), f["default"].remove(i)), s && (b["default"].remove(s, "click", u.prev), f["default"].remove(s)), n && (b["default"].remove(n, "click", u.last), f["default"].remove(n)), r && (b["default"].remove(r, "click", u.first), f["default"].remove(r)), l && f["default"].remove(l), a && f["default"].remove(a), o && f["default"].remove(o), this.hasResultsPerPage && this.removeResultsPerPage(), this.emitter.off(["after-filtering"], function() {
                            return t.resetPagingInfo()
                        }), this.emitter.off(["initialized"], function() {
                            return t.resetValues()
                        }), this.pagingSlc = null, this.nbPages = 0, this.disable(), this.initialized = !1
                    }
                }
            }]), e
        }(u.Feature)
    }, function(t, e, i) {
        "use strict";

        function s(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function r(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function l(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.ClearButton = void 0;
        var a = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var s = e[i];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                    }
                }
                return function(e, i, s) {
                    return i && t(e.prototype, i), s && t(e, s), e
                }
            }(),
            o = i(11),
            u = i(2),
            h = s(u),
            f = i(1),
            d = s(f);
        e.ClearButton = function(t) {
            function e(t) {
                n(this, e);
                var i = r(this, Object.getPrototypeOf(e).call(this, t, "btnReset")),
                    s = i.config;
                return i.btnResetTgtId = s.btn_reset_target_id || null, i.btnResetEl = null, i.btnResetText = s.btn_reset_text || "Reset", i.btnResetTooltip = s.btn_reset_tooltip || "Clear filters", i.btnResetHtml = s.btn_reset_html || (t.enableIcons ? '<input type="button" value="" class="' + t.btnResetCssClass + '" title="' + i.btnResetTooltip + '" />' : null), i.prfxResetSpan = "resetspan_", i
            }
            return l(e, t), a(e, [{
                key: "onClick",
                value: function() {
                    this.isEnabled() && this.tf.clearFilters()
                }
            }, {
                key: "init",
                value: function() {
                    var t = this,
                        e = this.tf;
                    if (!this.initialized) {
                        var i = h["default"].create("span", ["id", this.prfxResetSpan + e.id]);
                        this.btnResetTgtId || e.setToolbar();
                        var s = this.btnResetTgtId ? h["default"].id(this.btnResetTgtId) : e.rDiv;
                        if (s.appendChild(i), this.btnResetHtml) {
                            i.innerHTML = this.btnResetHtml;
                            var n = i.firstChild;
                            d["default"].add(n, "click", function() {
                                t.onClick()
                            })
                        } else {
                            var r = h["default"].create("a", ["href", "javascript:void(0);"]);
                            r.className = e.btnResetCssClass, r.appendChild(h["default"].text(this.btnResetText)), i.appendChild(r), d["default"].add(r, "click", function() {
                                t.onClick()
                            })
                        }
                        this.btnResetEl = i.firstChild, this.initialized = !0
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    var t = this.tf;
                    if (this.initialized) {
                        var e = h["default"].id(this.prfxResetSpan + t.id);
                        e && h["default"].remove(e), this.btnResetEl = null, this.initialized = !1
                    }
                }
            }]), e
        }(o.Feature)
    }, function(t, e, i) {
        "use strict";

        function s(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function r(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function l(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Help = void 0;
        var a = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var s = e[i];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                    }
                }
                return function(e, i, s) {
                    return i && t(e.prototype, i), s && t(e, s), e
                }
            }(),
            o = i(11),
            u = i(2),
            h = s(u),
            f = i(1),
            d = s(f),
            c = "https://github.com/koalyptus/TableFilter/wiki/4.-Filter-operators",
            p = "http://koalyptus.github.io/TableFilter/";
        e.Help = function(t) {
            function e(t) {
                n(this, e);
                var i = r(this, Object.getPrototypeOf(e).call(this, t, "help")),
                    s = i.config;
                return i.tgtId = s.help_instructions_target_id || null, i.contTgtId = s.help_instructions_container_target_id || null, i.instrText = s.help_instructions_text ? s.help_instructions_text : 'Use the filters above each column to filter and limit table data. Advanced searches can be performed by using the following operators: <br /><b>&lt;</b>, <b>&lt;=</b>, <b>&gt;</b>, <b>&gt;=</b>, <b>=</b>, <b>*</b>, <b>!</b>, <b>{</b>, <b>}</b>, <b>||</b>,<b>&amp;&amp;</b>, <b>[empty]</b>, <b>[nonempty]</b>, <b>rgx:</b><br/><a href="' + c + '" target="_blank">Learn more</a><hr/>', i.instrHtml = s.help_instructions_html || null, i.btnText = s.help_instructions_btn_text || "?", i.btnHtml = s.help_instructions_btn_html || null, i.btnCssClass = s.help_instructions_btn_css_class || "helpBtn", i.contCssClass = s.help_instructions_container_css_class || "helpCont", i.btn = null, i.cont = null, i.defaultHtml = '<div class="helpFooter"><h4>TableFilter v' + t.version + '</h4><a href="' + p + '" target="_blank">' + p + "</a><br/><span>&copy;2015-" + t.year + ' Max Guglielmi</span><div align="center" style="margin-top:8px;"><a href="javascript:void(0);" class="close">Close</a></div></div>', i.prfxHelpSpan = "helpSpan_", i.prfxHelpDiv = "helpDiv_", i.emitter.on(["init-help"], function() {
                    return i.init()
                }), i
            }
            return l(e, t), a(e, [{
                key: "init",
                value: function() {
                    var t = this;
                    if (!this.initialized) {
                        var e = this.tf,
                            i = h["default"].create("span", ["id", this.prfxHelpSpan + e.id]),
                            s = h["default"].create("div", ["id", this.prfxHelpDiv + e.id]);
                        this.tgtId || e.setToolbar();
                        var n = this.tgtId ? h["default"].id(this.tgtId) : e.rDiv;
                        n.appendChild(i);
                        var r = this.contTgtId ? h["default"].id(this.contTgtId) : i;
                        if (this.btnHtml) {
                            i.innerHTML = this.btnHtml;
                            var l = i.firstChild;
                            d["default"].add(l, "click", function() {
                                t.toggle()
                            }), r.appendChild(s)
                        } else {
                            r.appendChild(s);
                            var a = h["default"].create("a", ["href", "javascript:void(0);"]);
                            a.className = this.btnCssClass, a.appendChild(h["default"].text(this.btnText)), i.appendChild(a), d["default"].add(a, "click", function() {
                                t.toggle()
                            })
                        }
                        this.instrHtml ? (this.contTgtId && r.appendChild(s), s.innerHTML = this.instrHtml, this.contTgtId || (s.className = this.contCssClass, d["default"].add(s, "dblclick", function() {
                            t.toggle()
                        }))) : (s.innerHTML = this.instrText, s.className = this.contCssClass, d["default"].add(s, "dblclick", function() {
                            t.toggle()
                        })), s.innerHTML += this.defaultHtml, d["default"].add(s, "click", function() {
                            t.toggle()
                        }), this.cont = s, this.btn = i, this.initialized = !0
                    }
                }
            }, {
                key: "toggle",
                value: function() {
                    if (this.enabled !== !1) {
                        var t = this.cont.style.display;
                        "" === t || "none" === t ? this.cont.style.display = "inline" : this.cont.style.display = "none"
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    this.initialized && (h["default"].remove(this.btn), this.btn = null, this.cont && (h["default"].remove(this.cont), this.cont = null, this.initialized = !1))
                }
            }]), e
        }(o.Feature)
    }, function(t, e, i) {
        "use strict";

        function s(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function r(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function l(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.AlternateRows = void 0;
        var a = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var s = e[i];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                    }
                }
                return function(e, i, s) {
                    return i && t(e.prototype, i), s && t(e, s), e
                }
            }(),
            o = i(11),
            u = i(2),
            h = s(u);
        e.AlternateRows = function(t) {
            function e(t) {
                n(this, e);
                var i = r(this, Object.getPrototypeOf(e).call(this, t, "alternateRows")),
                    s = i.config;
                return i.evenCss = s.even_row_css_class || "even", i.oddCss = s.odd_row_css_class || "odd", i
            }
            return l(e, t), a(e, [{
                key: "init",
                value: function() {
                    var t = this;
                    this.initialized || (this.processAll(), this.emitter.on(["row-processed", "row-paged"], function(e, i, s, n) {
                        return t.processRow(i, s, n)
                    }), this.emitter.on(["column-sorted"], function() {
                        return t.processAll()
                    }), this.initialized = !0)
                }
            }, {
                key: "processAll",
                value: function() {
                    if (this.isEnabled())
                        for (var t = this.tf, e = t.getValidRows(!0), i = 0 === e.length, s = i ? t.refRow : 0, n = i ? t.nbFilterableRows + s : e.length, r = 0, l = s; n > l; l++) {
                            var a = i ? l : e[l];
                            this.setRowBg(a, r), r++
                        }
                }
            }, {
                key: "processRow",
                value: function(t, e, i) {
                    i ? this.setRowBg(t, e) : this.removeRowBg(t)
                }
            }, {
                key: "setRowBg",
                value: function(t, e) {
                    if (this.isEnabled() && !isNaN(t)) {
                        var i = this.tf.tbl.rows,
                            s = isNaN(e) ? t : e;
                        this.removeRowBg(t), h["default"].addClass(i[t], s % 2 ? this.evenCss : this.oddCss)
                    }
                }
            }, {
                key: "removeRowBg",
                value: function(t) {
                    if (!isNaN(t)) {
                        var e = this.tf.tbl.rows;
                        h["default"].removeClass(e[t], this.oddCss), h["default"].removeClass(e[t], this.evenCss)
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    var t = this;
                    if (this.initialized) {
                        for (var e = 0; e < this.tf.nbRows; e++) this.removeRowBg(e);
                        this.emitter.off(["row-processed", "row-paged"], function(e, i, s, n) {
                            return t.processRow(i, s, n)
                        }), this.emitter.off(["column-sorted"], function() {
                            return t.processAll()
                        }), this.initialized = !1
                    }
                }
            }]), e
        }(o.Feature)
    }, function(t, e, i) {
        "use strict";

        function s(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function r(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function l(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.NoResults = void 0;
        var a = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var s = e[i];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                    }
                }
                return function(e, i, s) {
                    return i && t(e.prototype, i), s && t(e, s), e
                }
            }(),
            o = i(11),
            u = i(2),
            h = s(u),
            f = i(4),
            d = s(f);
        e.NoResults = function(t) {
            function e(t) {
                n(this, e);
                var i = r(this, Object.getPrototypeOf(e).call(this, t, "noResults")),
                    s = i.config.no_results_message;
                return i.content = s.content || "No results", i.customContainer = s.custom_container || null, i.customContainerId = s.custom_container_id || null, i.isExternal = !d["default"].isEmpty(i.customContainer) || !d["default"].isEmpty(i.customContainerId), i.cssClass = s.css_class || "no-results", i.cont = null, i.onBeforeShowMsg = d["default"].isFn(s.on_before_show_msg) ? s.on_before_show_msg : null, i.onAfterShowMsg = d["default"].isFn(s.on_after_show_msg) ? s.on_after_show_msg : null, i.onBeforeHideMsg = d["default"].isFn(s.on_before_hide_msg) ? s.on_before_hide_msg : null, i.onAfterHideMsg = d["default"].isFn(s.on_after_hide_msg) ? s.on_after_hide_msg : null, i.prfxNoResults = "nores_", i
            }
            return l(e, t), a(e, [{
                key: "init",
                value: function() {
                    var t = this;
                    if (!this.initialized) {
                        var e = this.tf,
                            i = this.customContainer || h["default"].id(this.customContainerId) || e.tbl,
                            s = h["default"].create("div", ["id", this.prfxNoResults + e.id]);
                        s.className = this.cssClass, s.innerHTML = this.content, this.isExternal ? i.appendChild(s) : i.parentNode.insertBefore(s, i.nextSibling), this.cont = s, this.emitter.on(["after-filtering"], function() {
                            return t.toggle()
                        }), this.initialized = !0, this.hide()
                    }
                }
            }, {
                key: "toggle",
                value: function() {
                    this.tf.nbVisibleRows > 0 ? this.hide() : this.show()
                }
            }, {
                key: "show",
                value: function() {
                    this.initialized && this.isEnabled() && (this.onBeforeShowMsg && this.onBeforeShowMsg.call(null, this.tf, this), this.setWidth(), this.cont.style.display = "block", this.onAfterShowMsg && this.onAfterShowMsg.call(null, this.tf, this))
                }
            }, {
                key: "hide",
                value: function() {
                    this.initialized && this.isEnabled() && (this.onBeforeHideMsg && this.onBeforeHideMsg.call(null, this.tf, this), this.cont.style.display = "none", this.onBeforeHideMsg && this.onBeforeHideMsg.call(null, this.tf, this))
                }
            }, {
                key: "setWidth",
                value: function() {
                    if (this.initialized && !this.isExternal && this.isEnabled())
                        if (this.tf.gridLayout) {
                            var t = this.tf.feature("gridLayout");
                            this.cont.style.width = t.tblCont.clientWidth + "px"
                        } else this.cont.style.width = this.tf.tbl.clientWidth + "px"
                }
            }, {
                key: "destroy",
                value: function() {
                    var t = this;
                    this.initialized && (h["default"].remove(this.cont), this.cont = null, this.emitter.off(["after-filtering"], function() {
                        return t.toggle()
                    }), this.initialized = !1)
                }
            }]), e
        }(o.Feature)
    }])
});