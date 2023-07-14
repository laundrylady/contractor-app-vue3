import { Q as QToolbar, a as QToolbarTitle } from "./QToolbarTitle.9c9c22c3.js";
import { A as defineComponent, f as computed, l as openBlock, J as createBlock, K as withCtx, aG as createTextVNode, aH as toDisplayString, R as unref, i as inject, r as ref, B as reactive, o as onMounted, E as onBeforeUnmount, m as createElementBlock, k as createVNode, Q as QCard, G as withDirectives, P as QBtn, L as QCardSection, p as createBaseVNode, aE as QDialog, M as QInput, N as QIcon, y as createCommentVNode, F as Fragment, bd as renderList, $ as noop, S as createComponent, bG as useBtnProps, aS as useTransitionProps, bC as uid, ag as getBtnDesignAttr, w as watch, h, V as hSlot, g as getCurrentInstance, aB as stop, aR as useModelToggleProps, aT as useModelToggleEmits, aU as useTick, aV as useTimeout, aW as useTransition, aX as useModelToggle, aY as usePortal, aO as cleanEvt, aN as addEvt, Z as getScrollTarget, H as Transition, ar as stopAndPrevent, aD as shouldIgnoreKey, az as prevent, ab as useDarkProps, ac as useDark, bH as useSplitAttrs, D as nextTick, b3 as addFocusFn } from "./index.859cb660.js";
import { a as QTable, Q as QTd } from "./QTable.d01b5a90.js";
import { C as ClosePopup } from "./ClosePopup.4ce26240.js";
import { a as api } from "./axios.c622a4bf.js";
import { u as useMixinDebug } from "./debug.805a8aef.js";
import { x as awsSesStatus, r as getRowsPerPage, s as rowsPerPageOptions, f as fromNowTz, w as dateTimeTz, t as setRowsPerPage } from "./help.d852d987.js";
import { Q as QBadge } from "./QBadge.c6a12190.js";
import { Q as QBtnGroup } from "./QBtnGroup.d235e979.js";
import { Q as QMenu, u as useAnchorProps, v as validatePosition, e as validateOffset, f as parsePosition, g as useScrollTarget, b as useAnchor, i as removeClickOutside, s as setPosition, c as clearSelection, j as addClickOutside } from "./format.40c4273f.js";
import { Q as QItemSection, a as QItem } from "./QItemSection.b7e689a7.js";
import { u as useFullscreenProps, a as useFullscreenEmits, b as useFullscreen } from "./use-fullscreen.44e22a52.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AmazonSesStatus",
  props: {
    status: null
  },
  setup(__props) {
    const props = __props;
    const color = computed(() => {
      if (props.status === "Send") {
        return "primary";
      }
      if (props.status === "Delivery") {
        return "positive";
      }
      if (props.status === "Open") {
        return "positive";
      }
      if (props.status === "Bounce") {
        return "negative";
      }
      if (props.status === "Click") {
        return "positive";
      }
      return "grey";
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QBadge, { color: unref(color) }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(unref(awsSesStatus)(__props.status)), 1)
        ]),
        _: 1
      }, 8, ["color"]);
    };
  }
});
const _hoisted_1 = ["innerHTML"];
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_3 = { class: "text-grey" };
const _hoisted_4 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GlobalNotifications",
  props: {
    notifiable_id: null,
    notifiable_type: null,
    bulk: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const bus = inject("bus");
    const data = ref();
    const loading = ref(false);
    const shown = ref();
    const showModal = ref(false);
    const search = reactive({ keyword: null });
    const columns = [{
      name: "created_at",
      label: "Sent",
      align: "left",
      field: "created_at",
      sortable: true
    }, {
      name: "to",
      sortable: true,
      label: "To",
      field: "to",
      align: "left"
    }, {
      name: "subject",
      sortable: true,
      label: "Subject",
      field: "subject",
      align: "left"
    }, {
      name: "actions",
      sortable: false,
      label: "",
      field: "actions",
      align: "right"
    }];
    const serverPagination = ref({
      page: 1,
      rowsNumber: getRowsPerPage(),
      rowsPerPage: getRowsPerPage(),
      sortBy: "created_at",
      descending: true
    });
    const request = (pageProps = null) => {
      let page;
      let rowsPerPage;
      let sortBy;
      let descending;
      if (pageProps && pageProps.pagination) {
        page = pageProps.pagination.page;
        rowsPerPage = pageProps.pagination.rowsPerPage;
        sortBy = pageProps.pagination.sortBy;
        descending = pageProps.pagination.descending;
      } else {
        page = serverPagination.value.page;
        rowsPerPage = serverPagination.value.rowsPerPage;
        sortBy = serverPagination.value.sortBy;
        descending = serverPagination.value.descending;
      }
      loading.value = true;
      api.post(`/notification/datatable/${page}`, {
        sortBy,
        sort_order: descending ? "desc" : "asc",
        skip: page,
        rowsPerPage,
        keyword: search.keyword,
        notifiable_id: props.notifiable_id,
        notifiable_type: props.notifiable_type,
        bulk: props.bulk
      }).then((response) => {
        data.value = response.data.rows;
        loading.value = false;
        setRowsPerPage(rowsPerPage);
        serverPagination.value.rowsNumber = response.data.total;
        serverPagination.value.page = page;
        serverPagination.value.rowsPerPage = rowsPerPage;
        serverPagination.value.sortBy = sortBy;
        serverPagination.value.descending = descending;
      }).catch((response) => {
        useMixinDebug(response);
      });
    };
    const showNotification = (notification) => {
      shown.value = notification;
      showModal.value = true;
    };
    onMounted(() => {
      request();
      bus.on("getNotifications", () => {
        request();
      });
    });
    onBeforeUnmount(() => {
      bus.off("getNotifications");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(QDialog, {
          modelValue: showModal.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => showModal.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(QCard, { class: "modal" }, {
              default: withCtx(() => [
                createVNode(QToolbar, null, {
                  default: withCtx(() => [
                    createVNode(QToolbarTitle, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(shown.value.subject), 1)
                      ]),
                      _: 1
                    }),
                    withDirectives(createVNode(QBtn, {
                      icon: "close",
                      flat: "",
                      round: "",
                      dense: ""
                    }, null, 512), [
                      [ClosePopup]
                    ])
                  ]),
                  _: 1
                }),
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    createBaseVNode("div", {
                      innerHTML: shown.value.html_content
                    }, null, 8, _hoisted_1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(QCard, null, {
          default: withCtx(() => [
            createVNode(QTable, {
              rows: data.value,
              columns,
              "row-key": "id",
              filter: search.keyword,
              loading: loading.value,
              pagination: serverPagination.value,
              "onUpdate:pagination": _cache[2] || (_cache[2] = ($event) => serverPagination.value = $event),
              onRequest: request,
              flat: "",
              "rows-per-page-options": unref(rowsPerPageOptions)
            }, {
              "top-left": withCtx(() => [
                createVNode(QInput, {
                  modelValue: search.keyword,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => search.keyword = $event),
                  debounce: 500,
                  placeholder: "Keyword"
                }, {
                  append: withCtx(() => [
                    createVNode(QIcon, { name: "search" })
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              "body-cell-created_at": withCtx((props2) => [
                createVNode(QTd, { props: props2 }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(fromNowTz)(props2.row.created_at)), 1),
                    _hoisted_2,
                    createBaseVNode("small", _hoisted_3, toDisplayString(unref(dateTimeTz)(props2.row.created_at)), 1)
                  ]),
                  _: 2
                }, 1032, ["props"])
              ]),
              "body-cell-to": withCtx((props2) => [
                createVNode(QTd, { props: props2 }, {
                  default: withCtx(() => [
                    !props2.row.amazonemails.length ? (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(props2.row.to), 1)) : createCommentVNode("", true),
                    props2.row.amazonemails ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(props2.row.amazonemails, (a) => {
                      return openBlock(), createElementBlock("span", {
                        key: a.email
                      }, [
                        createTextVNode(toDisplayString(a.email) + " ", 1),
                        createVNode(_sfc_main$1, {
                          status: props2.row.amazon_ses_status
                        }, null, 8, ["status"])
                      ]);
                    }), 128)) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1032, ["props"])
              ]),
              "body-cell-actions": withCtx((props2) => [
                createVNode(QTd, { props: props2 }, {
                  default: withCtx(() => [
                    createVNode(QBtn, {
                      onClick: ($event) => showNotification(props2.row),
                      icon: "visibility",
                      flat: ""
                    }, null, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["props"])
              ]),
              _: 1
            }, 8, ["rows", "filter", "loading", "pagination", "rows-per-page-options"])
          ]),
          _: 1
        })
      ], 64);
    };
  }
});
function getBlockElement(el, parent) {
  if (parent && el === parent) {
    return null;
  }
  const nodeName = el.nodeName.toLowerCase();
  if (["div", "li", "ul", "ol", "blockquote"].includes(nodeName) === true) {
    return el;
  }
  const style = window.getComputedStyle ? window.getComputedStyle(el) : el.currentStyle, display = style.display;
  if (display === "block" || display === "table") {
    return el;
  }
  return getBlockElement(el.parentNode);
}
function isChildOf(el, parent, orSame) {
  return !el || el === document.body ? false : orSame === true && el === parent || (parent === document ? document.body : parent).contains(el.parentNode);
}
function createRange(node, chars, range) {
  if (!range) {
    range = document.createRange();
    range.selectNode(node);
    range.setStart(node, 0);
  }
  if (chars.count === 0) {
    range.setEnd(node, chars.count);
  } else if (chars.count > 0) {
    if (node.nodeType === Node.TEXT_NODE) {
      if (node.textContent.length < chars.count) {
        chars.count -= node.textContent.length;
      } else {
        range.setEnd(node, chars.count);
        chars.count = 0;
      }
    } else {
      for (let lp = 0; chars.count !== 0 && lp < node.childNodes.length; lp++) {
        range = createRange(node.childNodes[lp], chars, range);
      }
    }
  }
  return range;
}
const urlRegex = /^https?:\/\//;
class Caret {
  constructor(el, eVm) {
    this.el = el;
    this.eVm = eVm;
    this._range = null;
  }
  get selection() {
    if (this.el) {
      const sel = document.getSelection();
      if (isChildOf(sel.anchorNode, this.el, true) && isChildOf(sel.focusNode, this.el, true)) {
        return sel;
      }
    }
    return null;
  }
  get hasSelection() {
    return this.selection !== null ? this.selection.toString().length !== 0 : false;
  }
  get range() {
    const sel = this.selection;
    if (sel !== null && sel.rangeCount) {
      return sel.getRangeAt(0);
    }
    return this._range;
  }
  get parent() {
    const range = this.range;
    if (range !== null) {
      const node = range.startContainer;
      return node.nodeType === document.ELEMENT_NODE ? node : node.parentNode;
    }
    return null;
  }
  get blockParent() {
    const parent = this.parent;
    if (parent !== null) {
      return getBlockElement(parent, this.el);
    }
    return null;
  }
  save(range = this.range) {
    if (range !== null) {
      this._range = range;
    }
  }
  restore(range = this._range) {
    const r = document.createRange(), sel = document.getSelection();
    if (range !== null) {
      r.setStart(range.startContainer, range.startOffset);
      r.setEnd(range.endContainer, range.endOffset);
      sel.removeAllRanges();
      sel.addRange(r);
    } else {
      sel.selectAllChildren(this.el);
      sel.collapseToEnd();
    }
  }
  savePosition() {
    let charCount = -1, node;
    const selection = document.getSelection(), parentEl = this.el.parentNode;
    if (selection.focusNode && isChildOf(selection.focusNode, parentEl)) {
      node = selection.focusNode;
      charCount = selection.focusOffset;
      while (node && node !== parentEl) {
        if (node !== this.el && node.previousSibling) {
          node = node.previousSibling;
          charCount += node.textContent.length;
        } else {
          node = node.parentNode;
        }
      }
    }
    this.savedPos = charCount;
  }
  restorePosition(length = 0) {
    if (this.savedPos > 0 && this.savedPos < length) {
      const selection = window.getSelection(), range = createRange(this.el, { count: this.savedPos });
      if (range) {
        range.collapse(false);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  }
  hasParent(name, spanLevel) {
    const el = spanLevel ? this.parent : this.blockParent;
    return el !== null ? el.nodeName.toLowerCase() === name.toLowerCase() : false;
  }
  hasParents(list, recursive, el = this.parent) {
    if (el === null) {
      return false;
    }
    if (list.includes(el.nodeName.toLowerCase()) === true) {
      return true;
    }
    return recursive === true ? this.hasParents(list, recursive, el.parentNode) : false;
  }
  is(cmd, param) {
    if (this.selection === null) {
      return false;
    }
    switch (cmd) {
      case "formatBlock":
        return param === "DIV" && this.parent === this.el || this.hasParent(param, param === "PRE");
      case "link":
        return this.hasParent("A", true);
      case "fontSize":
        return document.queryCommandValue(cmd) === param;
      case "fontName":
        const res = document.queryCommandValue(cmd);
        return res === `"${param}"` || res === param;
      case "fullscreen":
        return this.eVm.inFullscreen.value;
      case "viewsource":
        return this.eVm.isViewingSource.value;
      case void 0:
        return false;
      default:
        const state = document.queryCommandState(cmd);
        return param !== void 0 ? state === param : state;
    }
  }
  getParentAttribute(attrib) {
    if (this.parent !== null) {
      return this.parent.getAttribute(attrib);
    }
    return null;
  }
  can(name) {
    if (name === "outdent") {
      return this.hasParents(["blockquote", "li"], true);
    }
    if (name === "indent") {
      return this.hasParents(["li"], true);
    }
    if (name === "link") {
      return this.selection !== null || this.is("link");
    }
  }
  apply(cmd, param, done = noop) {
    if (cmd === "formatBlock") {
      if (["BLOCKQUOTE", "H1", "H2", "H3", "H4", "H5", "H6"].includes(param) && this.is(cmd, param)) {
        cmd = "outdent";
        param = null;
      }
      if (param === "PRE" && this.is(cmd, "PRE")) {
        param = "P";
      }
    } else if (cmd === "print") {
      done();
      const win = window.open();
      win.document.write(`
        <!doctype html>
        <html>
          <head>
            <title>Print - ${document.title}</title>
          </head>
          <body>
            <div>${this.el.innerHTML}</div>
          </body>
        </html>
      `);
      win.print();
      win.close();
      return;
    } else if (cmd === "link") {
      const link = this.getParentAttribute("href");
      if (link === null) {
        const selection = this.selectWord(this.selection);
        const url = selection ? selection.toString() : "";
        if (!url.length) {
          if (!this.range || !this.range.cloneContents().querySelector("img")) {
            return;
          }
        }
        this.eVm.editLinkUrl.value = urlRegex.test(url) ? url : "https://";
        document.execCommand("createLink", false, this.eVm.editLinkUrl.value);
        this.save(selection.getRangeAt(0));
      } else {
        this.eVm.editLinkUrl.value = link;
        this.range.selectNodeContents(this.parent);
        this.save();
      }
      return;
    } else if (cmd === "fullscreen") {
      this.eVm.toggleFullscreen();
      done();
      return;
    } else if (cmd === "viewsource") {
      this.eVm.isViewingSource.value = this.eVm.isViewingSource.value === false;
      this.eVm.setContent(this.eVm.props.modelValue);
      done();
      return;
    }
    document.execCommand(cmd, false, param);
    done();
  }
  selectWord(sel) {
    if (sel === null || sel.isCollapsed !== true || sel.modify === void 0) {
      return sel;
    }
    const range = document.createRange();
    range.setStart(sel.anchorNode, sel.anchorOffset);
    range.setEnd(sel.focusNode, sel.focusOffset);
    const direction = range.collapsed ? ["backward", "forward"] : ["forward", "backward"];
    range.detach();
    const endNode = sel.focusNode, endOffset = sel.focusOffset;
    sel.collapse(sel.anchorNode, sel.anchorOffset);
    sel.modify("move", direction[0], "character");
    sel.modify("move", direction[1], "word");
    sel.extend(endNode, endOffset);
    sel.modify("extend", direction[1], "character");
    sel.modify("extend", direction[0], "word");
    return sel;
  }
}
const btnPropsList = Object.keys(useBtnProps);
const passBtnProps = (props) => btnPropsList.reduce(
  (acc, key) => {
    const val = props[key];
    if (val !== void 0) {
      acc[key] = val;
    }
    return acc;
  },
  {}
);
var QBtnDropdown = createComponent({
  name: "QBtnDropdown",
  props: {
    ...useBtnProps,
    ...useTransitionProps,
    modelValue: Boolean,
    split: Boolean,
    dropdownIcon: String,
    contentClass: [Array, String, Object],
    contentStyle: [Array, String, Object],
    cover: Boolean,
    persistent: Boolean,
    noRouteDismiss: Boolean,
    autoClose: Boolean,
    menuAnchor: {
      type: String,
      default: "bottom end"
    },
    menuSelf: {
      type: String,
      default: "top end"
    },
    menuOffset: Array,
    disableMainBtn: Boolean,
    disableDropdown: Boolean,
    noIconAnimation: Boolean,
    toggleAriaLabel: String
  },
  emits: ["update:modelValue", "click", "beforeShow", "show", "beforeHide", "hide"],
  setup(props, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const showing = ref(props.modelValue);
    const menuRef = ref(null);
    const targetUid = uid();
    const ariaAttrs = computed(() => {
      const acc = {
        "aria-expanded": showing.value === true ? "true" : "false",
        "aria-haspopup": "true",
        "aria-controls": targetUid,
        "aria-label": props.toggleAriaLabel || proxy.$q.lang.label[showing.value === true ? "collapse" : "expand"](props.label)
      };
      if (props.disable === true || (props.split === false && props.disableMainBtn === true || props.disableDropdown === true)) {
        acc["aria-disabled"] = "true";
      }
      return acc;
    });
    const iconClass = computed(
      () => "q-btn-dropdown__arrow" + (showing.value === true && props.noIconAnimation === false ? " rotate-180" : "") + (props.split === false ? " q-btn-dropdown__arrow-container" : "")
    );
    const btnDesignAttr = computed(() => getBtnDesignAttr(props));
    const btnProps = computed(() => passBtnProps(props));
    watch(() => props.modelValue, (val) => {
      menuRef.value !== null && menuRef.value[val ? "show" : "hide"]();
    });
    watch(() => props.split, hide);
    function onBeforeShow(e) {
      showing.value = true;
      emit("beforeShow", e);
    }
    function onShow(e) {
      emit("show", e);
      emit("update:modelValue", true);
    }
    function onBeforeHide(e) {
      showing.value = false;
      emit("beforeHide", e);
    }
    function onHide(e) {
      emit("hide", e);
      emit("update:modelValue", false);
    }
    function onClick(e) {
      emit("click", e);
    }
    function onClickHide(e) {
      stop(e);
      hide();
      emit("click", e);
    }
    function toggle(evt) {
      menuRef.value !== null && menuRef.value.toggle(evt);
    }
    function show(evt) {
      menuRef.value !== null && menuRef.value.show(evt);
    }
    function hide(evt) {
      menuRef.value !== null && menuRef.value.hide(evt);
    }
    Object.assign(proxy, {
      show,
      hide,
      toggle
    });
    onMounted(() => {
      props.modelValue === true && show();
    });
    return () => {
      const Arrow = [
        h(QIcon, {
          class: iconClass.value,
          name: props.dropdownIcon || proxy.$q.iconSet.arrow.dropdown
        })
      ];
      props.disableDropdown !== true && Arrow.push(
        h(QMenu, {
          ref: menuRef,
          id: targetUid,
          class: props.contentClass,
          style: props.contentStyle,
          cover: props.cover,
          fit: true,
          persistent: props.persistent,
          noRouteDismiss: props.noRouteDismiss,
          autoClose: props.autoClose,
          anchor: props.menuAnchor,
          self: props.menuSelf,
          offset: props.menuOffset,
          separateClosePopup: true,
          transitionShow: props.transitionShow,
          transitionHide: props.transitionHide,
          transitionDuration: props.transitionDuration,
          onBeforeShow,
          onShow,
          onBeforeHide,
          onHide
        }, slots.default)
      );
      if (props.split === false) {
        return h(QBtn, {
          class: "q-btn-dropdown q-btn-dropdown--simple",
          ...btnProps.value,
          ...ariaAttrs.value,
          disable: props.disable === true || props.disableMainBtn === true,
          noWrap: true,
          round: false,
          onClick
        }, {
          default: () => hSlot(slots.label, []).concat(Arrow),
          loading: slots.loading
        });
      }
      return h(QBtnGroup, {
        class: "q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",
        rounded: props.rounded,
        square: props.square,
        ...btnDesignAttr.value,
        glossy: props.glossy,
        stretch: props.stretch
      }, () => [
        h(QBtn, {
          class: "q-btn-dropdown--current",
          ...btnProps.value,
          disable: props.disable === true || props.disableMainBtn === true,
          noWrap: true,
          round: false,
          onClick: onClickHide
        }, {
          default: slots.label,
          loading: slots.loading
        }),
        h(QBtn, {
          class: "q-btn-dropdown__arrow-container q-anchor--skip",
          ...ariaAttrs.value,
          ...btnDesignAttr.value,
          disable: props.disable === true || props.disableDropdown === true,
          rounded: props.rounded,
          color: props.color,
          textColor: props.textColor,
          dense: props.dense,
          size: props.size,
          padding: props.padding,
          ripple: props.ripple
        }, () => Arrow)
      ]);
    };
  }
});
var QTooltip = createComponent({
  name: "QTooltip",
  inheritAttrs: false,
  props: {
    ...useAnchorProps,
    ...useModelToggleProps,
    ...useTransitionProps,
    maxHeight: {
      type: String,
      default: null
    },
    maxWidth: {
      type: String,
      default: null
    },
    transitionShow: {
      default: "jump-down"
    },
    transitionHide: {
      default: "jump-up"
    },
    anchor: {
      type: String,
      default: "bottom middle",
      validator: validatePosition
    },
    self: {
      type: String,
      default: "top middle",
      validator: validatePosition
    },
    offset: {
      type: Array,
      default: () => [14, 14],
      validator: validateOffset
    },
    scrollTarget: {
      default: void 0
    },
    delay: {
      type: Number,
      default: 0
    },
    hideDelay: {
      type: Number,
      default: 0
    }
  },
  emits: [
    ...useModelToggleEmits
  ],
  setup(props, { slots, emit, attrs }) {
    let unwatchPosition, observer;
    const vm = getCurrentInstance();
    const { proxy: { $q } } = vm;
    const innerRef = ref(null);
    const showing = ref(false);
    const anchorOrigin = computed(() => parsePosition(props.anchor, $q.lang.rtl));
    const selfOrigin = computed(() => parsePosition(props.self, $q.lang.rtl));
    const hideOnRouteChange = computed(() => props.persistent !== true);
    const { registerTick, removeTick } = useTick();
    const { registerTimeout } = useTimeout();
    const { transitionProps, transitionStyle } = useTransition(props);
    const { localScrollTarget, changeScrollEvent, unconfigureScrollTarget } = useScrollTarget(props, configureScrollTarget);
    const { anchorEl, canShow, anchorEvents } = useAnchor({ showing, configureAnchorEl });
    const { show, hide } = useModelToggle({
      showing,
      canShow,
      handleShow,
      handleHide,
      hideOnRouteChange,
      processOnMount: true
    });
    Object.assign(anchorEvents, { delayShow, delayHide });
    const { showPortal, hidePortal, renderPortal } = usePortal(vm, innerRef, renderPortalContent, "tooltip");
    if ($q.platform.is.mobile === true) {
      const clickOutsideProps = {
        anchorEl,
        innerRef,
        onClickOutside(e) {
          hide(e);
          if (e.target.classList.contains("q-dialog__backdrop")) {
            stopAndPrevent(e);
          }
          return true;
        }
      };
      const hasClickOutside = computed(
        () => props.modelValue === null && props.persistent !== true && showing.value === true
      );
      watch(hasClickOutside, (val) => {
        const fn = val === true ? addClickOutside : removeClickOutside;
        fn(clickOutsideProps);
      });
      onBeforeUnmount(() => {
        removeClickOutside(clickOutsideProps);
      });
    }
    function handleShow(evt) {
      showPortal();
      registerTick(() => {
        observer = new MutationObserver(() => updatePosition());
        observer.observe(innerRef.value, { attributes: false, childList: true, characterData: true, subtree: true });
        updatePosition();
        configureScrollTarget();
      });
      if (unwatchPosition === void 0) {
        unwatchPosition = watch(
          () => $q.screen.width + "|" + $q.screen.height + "|" + props.self + "|" + props.anchor + "|" + $q.lang.rtl,
          updatePosition
        );
      }
      registerTimeout(() => {
        showPortal(true);
        emit("show", evt);
      }, props.transitionDuration);
    }
    function handleHide(evt) {
      removeTick();
      hidePortal();
      anchorCleanup();
      registerTimeout(() => {
        hidePortal(true);
        emit("hide", evt);
      }, props.transitionDuration);
    }
    function anchorCleanup() {
      if (observer !== void 0) {
        observer.disconnect();
        observer = void 0;
      }
      if (unwatchPosition !== void 0) {
        unwatchPosition();
        unwatchPosition = void 0;
      }
      unconfigureScrollTarget();
      cleanEvt(anchorEvents, "tooltipTemp");
    }
    function updatePosition() {
      setPosition({
        targetEl: innerRef.value,
        offset: props.offset,
        anchorEl: anchorEl.value,
        anchorOrigin: anchorOrigin.value,
        selfOrigin: selfOrigin.value,
        maxHeight: props.maxHeight,
        maxWidth: props.maxWidth
      });
    }
    function delayShow(evt) {
      if ($q.platform.is.mobile === true) {
        clearSelection();
        document.body.classList.add("non-selectable");
        const target = anchorEl.value;
        const evts = ["touchmove", "touchcancel", "touchend", "click"].map((e) => [target, e, "delayHide", "passiveCapture"]);
        addEvt(anchorEvents, "tooltipTemp", evts);
      }
      registerTimeout(() => {
        show(evt);
      }, props.delay);
    }
    function delayHide(evt) {
      if ($q.platform.is.mobile === true) {
        cleanEvt(anchorEvents, "tooltipTemp");
        clearSelection();
        setTimeout(() => {
          document.body.classList.remove("non-selectable");
        }, 10);
      }
      registerTimeout(() => {
        hide(evt);
      }, props.hideDelay);
    }
    function configureAnchorEl() {
      if (props.noParentEvent === true || anchorEl.value === null) {
        return;
      }
      const evts = $q.platform.is.mobile === true ? [
        [anchorEl.value, "touchstart", "delayShow", "passive"]
      ] : [
        [anchorEl.value, "mouseenter", "delayShow", "passive"],
        [anchorEl.value, "mouseleave", "delayHide", "passive"]
      ];
      addEvt(anchorEvents, "anchor", evts);
    }
    function configureScrollTarget() {
      if (anchorEl.value !== null || props.scrollTarget !== void 0) {
        localScrollTarget.value = getScrollTarget(anchorEl.value, props.scrollTarget);
        const fn = props.noParentEvent === true ? updatePosition : hide;
        changeScrollEvent(localScrollTarget.value, fn);
      }
    }
    function getTooltipContent() {
      return showing.value === true ? h("div", {
        ...attrs,
        ref: innerRef,
        class: [
          "q-tooltip q-tooltip--style q-position-engine no-pointer-events",
          attrs.class
        ],
        style: [
          attrs.style,
          transitionStyle.value
        ],
        role: "tooltip"
      }, hSlot(slots.default)) : null;
    }
    function renderPortalContent() {
      return h(Transition, transitionProps.value, getTooltipContent);
    }
    onBeforeUnmount(anchorCleanup);
    Object.assign(vm.proxy, { updatePosition });
    return renderPortal;
  }
});
function run(e, btn, eVm) {
  if (btn.handler) {
    btn.handler(e, eVm, eVm.caret);
  } else {
    eVm.runCmd(btn.cmd, btn.param);
  }
}
function getGroup(children) {
  return h("div", { class: "q-editor__toolbar-group" }, children);
}
function getBtn(eVm, btn, clickHandler, active = false) {
  const toggled = active || (btn.type === "toggle" ? btn.toggled ? btn.toggled(eVm) : btn.cmd && eVm.caret.is(btn.cmd, btn.param) : false), child = [];
  if (btn.tip && eVm.$q.platform.is.desktop) {
    const Key = btn.key ? h("div", [
      h("small", `(CTRL + ${String.fromCharCode(btn.key)})`)
    ]) : null;
    child.push(
      h(QTooltip, { delay: 1e3 }, () => [
        h("div", { innerHTML: btn.tip }),
        Key
      ])
    );
  }
  return h(QBtn, {
    ...eVm.buttonProps.value,
    icon: btn.icon !== null ? btn.icon : void 0,
    color: toggled ? btn.toggleColor || eVm.props.toolbarToggleColor : btn.color || eVm.props.toolbarColor,
    textColor: toggled && !eVm.props.toolbarPush ? null : btn.textColor || eVm.props.toolbarTextColor,
    label: btn.label,
    disable: btn.disable ? typeof btn.disable === "function" ? btn.disable(eVm) : true : false,
    size: "sm",
    onClick(e) {
      clickHandler && clickHandler();
      run(e, btn, eVm);
    }
  }, () => child);
}
function getDropdown(eVm, btn) {
  const onlyIcons = btn.list === "only-icons";
  let label = btn.label, icon = btn.icon !== null ? btn.icon : void 0, contentClass, Items;
  function closeDropdown() {
    Dropdown.component.proxy.hide();
  }
  if (onlyIcons) {
    Items = btn.options.map((btn2) => {
      const active = btn2.type === void 0 ? eVm.caret.is(btn2.cmd, btn2.param) : false;
      if (active) {
        label = btn2.tip;
        icon = btn2.icon !== null ? btn2.icon : void 0;
      }
      return getBtn(eVm, btn2, closeDropdown, active);
    });
    contentClass = eVm.toolbarBackgroundClass.value;
    Items = [
      getGroup(Items)
    ];
  } else {
    const activeClass = eVm.props.toolbarToggleColor !== void 0 ? `text-${eVm.props.toolbarToggleColor}` : null;
    const inactiveClass = eVm.props.toolbarTextColor !== void 0 ? `text-${eVm.props.toolbarTextColor}` : null;
    const noIcons = btn.list === "no-icons";
    Items = btn.options.map((btn2) => {
      const disable = btn2.disable ? btn2.disable(eVm) : false;
      const active = btn2.type === void 0 ? eVm.caret.is(btn2.cmd, btn2.param) : false;
      if (active) {
        label = btn2.tip;
        icon = btn2.icon !== null ? btn2.icon : void 0;
      }
      const htmlTip = btn2.htmlTip;
      return h(QItem, {
        active,
        activeClass,
        clickable: true,
        disable,
        dense: true,
        onClick(e) {
          closeDropdown();
          eVm.contentRef.value !== null && eVm.contentRef.value.focus();
          eVm.caret.restore();
          run(e, btn2, eVm);
        }
      }, () => [
        noIcons === true ? null : h(
          QItemSection,
          {
            class: active ? activeClass : inactiveClass,
            side: true
          },
          () => h(QIcon, { name: btn2.icon !== null ? btn2.icon : void 0 })
        ),
        h(
          QItemSection,
          htmlTip ? () => h("div", { class: "text-no-wrap", innerHTML: btn2.htmlTip }) : btn2.tip ? () => h("div", { class: "text-no-wrap" }, btn2.tip) : void 0
        )
      ]);
    });
    contentClass = [eVm.toolbarBackgroundClass.value, inactiveClass];
  }
  const highlight = btn.highlight && label !== btn.label;
  const Dropdown = h(QBtnDropdown, {
    ...eVm.buttonProps.value,
    noCaps: true,
    noWrap: true,
    color: highlight ? eVm.props.toolbarToggleColor : eVm.props.toolbarColor,
    textColor: highlight && !eVm.props.toolbarPush ? null : eVm.props.toolbarTextColor,
    label: btn.fixedLabel ? btn.label : label,
    icon: btn.fixedIcon ? btn.icon !== null ? btn.icon : void 0 : icon,
    contentClass,
    onShow: (evt) => eVm.emit("dropdownShow", evt),
    onHide: (evt) => eVm.emit("dropdownHide", evt),
    onBeforeShow: (evt) => eVm.emit("dropdownBeforeShow", evt),
    onBeforeHide: (evt) => eVm.emit("dropdownBeforeHide", evt)
  }, () => Items);
  return Dropdown;
}
function getToolbar(eVm) {
  if (eVm.caret) {
    return eVm.buttons.value.filter((f) => {
      return !eVm.isViewingSource.value || f.find((fb) => fb.cmd === "viewsource");
    }).map((group) => getGroup(
      group.map((btn) => {
        if (eVm.isViewingSource.value && btn.cmd !== "viewsource") {
          return false;
        }
        if (btn.type === "slot") {
          return hSlot(eVm.slots[btn.slot]);
        }
        if (btn.type === "dropdown") {
          return getDropdown(eVm, btn);
        }
        return getBtn(eVm, btn);
      })
    ));
  }
}
function getFonts(defaultFont, defaultFontLabel, defaultFontIcon, fonts = {}) {
  const aliases = Object.keys(fonts);
  if (aliases.length === 0) {
    return {};
  }
  const def = {
    default_font: {
      cmd: "fontName",
      param: defaultFont,
      icon: defaultFontIcon,
      tip: defaultFontLabel
    }
  };
  aliases.forEach((alias) => {
    const name = fonts[alias];
    def[alias] = {
      cmd: "fontName",
      param: name,
      icon: defaultFontIcon,
      tip: name,
      htmlTip: `<font face="${name}">${name}</font>`
    };
  });
  return def;
}
function getLinkEditor(eVm) {
  if (eVm.caret) {
    const color = eVm.props.toolbarColor || eVm.props.toolbarTextColor;
    let link = eVm.editLinkUrl.value;
    const updateLink = () => {
      eVm.caret.restore();
      if (link !== eVm.editLinkUrl.value) {
        document.execCommand("createLink", false, link === "" ? " " : link);
      }
      eVm.editLinkUrl.value = null;
    };
    return [
      h("div", { class: `q-mx-xs text-${color}` }, `${eVm.$q.lang.editor.url}: `),
      h("input", {
        key: "qedt_btm_input",
        class: "col q-editor__link-input",
        value: link,
        onInput: (evt) => {
          stop(evt);
          link = evt.target.value;
        },
        onKeydown: (evt) => {
          if (shouldIgnoreKey(evt) === true) {
            return;
          }
          switch (evt.keyCode) {
            case 13:
              prevent(evt);
              return updateLink();
            case 27:
              prevent(evt);
              eVm.caret.restore();
              if (!eVm.editLinkUrl.value || eVm.editLinkUrl.value === "https://") {
                document.execCommand("unlink");
              }
              eVm.editLinkUrl.value = null;
              break;
          }
        }
      }),
      getGroup([
        h(QBtn, {
          key: "qedt_btm_rem",
          tabindex: -1,
          ...eVm.buttonProps.value,
          label: eVm.$q.lang.label.remove,
          noCaps: true,
          onClick: () => {
            eVm.caret.restore();
            document.execCommand("unlink");
            eVm.editLinkUrl.value = null;
          }
        }),
        h(QBtn, {
          key: "qedt_btm_upd",
          ...eVm.buttonProps.value,
          label: eVm.$q.lang.label.update,
          noCaps: true,
          onClick: updateLink
        })
      ])
    ];
  }
}
const toString = Object.prototype.toString, hasOwn = Object.prototype.hasOwnProperty, notPlainObject = new Set(
  ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp"].map((name) => "[object " + name + "]")
);
function isPlainObject(obj) {
  if (obj !== Object(obj) || notPlainObject.has(toString.call(obj)) === true) {
    return false;
  }
  if (obj.constructor && hasOwn.call(obj, "constructor") === false && hasOwn.call(obj.constructor.prototype, "isPrototypeOf") === false) {
    return false;
  }
  let key;
  for (key in obj) {
  }
  return key === void 0 || hasOwn.call(obj, key);
}
function extend() {
  let options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, deep = false;
  const length = arguments.length;
  if (typeof target === "boolean") {
    deep = target;
    target = arguments[1] || {};
    i = 2;
  }
  if (Object(target) !== target && typeof target !== "function") {
    target = {};
  }
  if (length === i) {
    target = this;
    i--;
  }
  for (; i < length; i++) {
    if ((options = arguments[i]) !== null) {
      for (name in options) {
        src = target[name];
        copy = options[name];
        if (target === copy) {
          continue;
        }
        if (deep === true && copy && ((copyIsArray = Array.isArray(copy)) || isPlainObject(copy) === true)) {
          if (copyIsArray === true) {
            clone = Array.isArray(src) === true ? src : [];
          } else {
            clone = isPlainObject(src) === true ? src : {};
          }
          target[name] = extend(deep, clone, copy);
        } else if (copy !== void 0) {
          target[name] = copy;
        }
      }
    }
  }
  return target;
}
var QEditor = createComponent({
  name: "QEditor",
  props: {
    ...useDarkProps,
    ...useFullscreenProps,
    modelValue: {
      type: String,
      required: true
    },
    readonly: Boolean,
    disable: Boolean,
    minHeight: {
      type: String,
      default: "10rem"
    },
    maxHeight: String,
    height: String,
    definitions: Object,
    fonts: Object,
    placeholder: String,
    toolbar: {
      type: Array,
      validator: (v) => v.length === 0 || v.every((group) => group.length),
      default() {
        return [
          ["left", "center", "right", "justify"],
          ["bold", "italic", "underline", "strike"],
          ["undo", "redo"]
        ];
      }
    },
    toolbarColor: String,
    toolbarBg: String,
    toolbarTextColor: String,
    toolbarToggleColor: {
      type: String,
      default: "primary"
    },
    toolbarOutline: Boolean,
    toolbarPush: Boolean,
    toolbarRounded: Boolean,
    paragraphTag: {
      type: String,
      validator: (v) => ["div", "p"].includes(v),
      default: "div"
    },
    contentStyle: Object,
    contentClass: [Object, Array, String],
    square: Boolean,
    flat: Boolean,
    dense: Boolean
  },
  emits: [
    ...useFullscreenEmits,
    "update:modelValue",
    "keydown",
    "click",
    "mouseup",
    "keyup",
    "touchend",
    "focus",
    "blur",
    "dropdownShow",
    "dropdownHide",
    "dropdownBeforeShow",
    "dropdownBeforeHide",
    "linkShow",
    "linkHide"
  ],
  setup(props, { slots, emit, attrs }) {
    const { proxy, vnode } = getCurrentInstance();
    const { $q } = proxy;
    const isDark = useDark(props, $q);
    const { inFullscreen, toggleFullscreen } = useFullscreen();
    const splitAttrs = useSplitAttrs(attrs, vnode);
    const rootRef = ref(null);
    const contentRef = ref(null);
    const editLinkUrl = ref(null);
    const isViewingSource = ref(false);
    const editable = computed(() => !props.readonly && !props.disable);
    let defaultFont, offsetBottom;
    let lastEmit = props.modelValue;
    {
      document.execCommand("defaultParagraphSeparator", false, props.paragraphTag);
      defaultFont = window.getComputedStyle(document.body).fontFamily;
    }
    const toolbarBackgroundClass = computed(() => props.toolbarBg ? ` bg-${props.toolbarBg}` : "");
    const buttonProps = computed(() => {
      const flat = props.toolbarOutline !== true && props.toolbarPush !== true;
      return {
        type: "a",
        flat,
        noWrap: true,
        outline: props.toolbarOutline,
        push: props.toolbarPush,
        rounded: props.toolbarRounded,
        dense: true,
        color: props.toolbarColor,
        disable: !editable.value,
        size: "sm"
      };
    });
    const buttonDef = computed(() => {
      const e = $q.lang.editor, i = $q.iconSet.editor;
      return {
        bold: { cmd: "bold", icon: i.bold, tip: e.bold, key: 66 },
        italic: { cmd: "italic", icon: i.italic, tip: e.italic, key: 73 },
        strike: { cmd: "strikeThrough", icon: i.strikethrough, tip: e.strikethrough, key: 83 },
        underline: { cmd: "underline", icon: i.underline, tip: e.underline, key: 85 },
        unordered: { cmd: "insertUnorderedList", icon: i.unorderedList, tip: e.unorderedList },
        ordered: { cmd: "insertOrderedList", icon: i.orderedList, tip: e.orderedList },
        subscript: { cmd: "subscript", icon: i.subscript, tip: e.subscript, htmlTip: "x<subscript>2</subscript>" },
        superscript: { cmd: "superscript", icon: i.superscript, tip: e.superscript, htmlTip: "x<superscript>2</superscript>" },
        link: { cmd: "link", disable: (eVm2) => eVm2.caret && !eVm2.caret.can("link"), icon: i.hyperlink, tip: e.hyperlink, key: 76 },
        fullscreen: { cmd: "fullscreen", icon: i.toggleFullscreen, tip: e.toggleFullscreen, key: 70 },
        viewsource: { cmd: "viewsource", icon: i.viewSource, tip: e.viewSource },
        quote: { cmd: "formatBlock", param: "BLOCKQUOTE", icon: i.quote, tip: e.quote, key: 81 },
        left: { cmd: "justifyLeft", icon: i.left, tip: e.left },
        center: { cmd: "justifyCenter", icon: i.center, tip: e.center },
        right: { cmd: "justifyRight", icon: i.right, tip: e.right },
        justify: { cmd: "justifyFull", icon: i.justify, tip: e.justify },
        print: { type: "no-state", cmd: "print", icon: i.print, tip: e.print, key: 80 },
        outdent: { type: "no-state", disable: (eVm2) => eVm2.caret && !eVm2.caret.can("outdent"), cmd: "outdent", icon: i.outdent, tip: e.outdent },
        indent: { type: "no-state", disable: (eVm2) => eVm2.caret && !eVm2.caret.can("indent"), cmd: "indent", icon: i.indent, tip: e.indent },
        removeFormat: { type: "no-state", cmd: "removeFormat", icon: i.removeFormat, tip: e.removeFormat },
        hr: { type: "no-state", cmd: "insertHorizontalRule", icon: i.hr, tip: e.hr },
        undo: { type: "no-state", cmd: "undo", icon: i.undo, tip: e.undo, key: 90 },
        redo: { type: "no-state", cmd: "redo", icon: i.redo, tip: e.redo, key: 89 },
        h1: { cmd: "formatBlock", param: "H1", icon: i.heading1 || i.heading, tip: e.heading1, htmlTip: `<h1 class="q-ma-none">${e.heading1}</h1>` },
        h2: { cmd: "formatBlock", param: "H2", icon: i.heading2 || i.heading, tip: e.heading2, htmlTip: `<h2 class="q-ma-none">${e.heading2}</h2>` },
        h3: { cmd: "formatBlock", param: "H3", icon: i.heading3 || i.heading, tip: e.heading3, htmlTip: `<h3 class="q-ma-none">${e.heading3}</h3>` },
        h4: { cmd: "formatBlock", param: "H4", icon: i.heading4 || i.heading, tip: e.heading4, htmlTip: `<h4 class="q-ma-none">${e.heading4}</h4>` },
        h5: { cmd: "formatBlock", param: "H5", icon: i.heading5 || i.heading, tip: e.heading5, htmlTip: `<h5 class="q-ma-none">${e.heading5}</h5>` },
        h6: { cmd: "formatBlock", param: "H6", icon: i.heading6 || i.heading, tip: e.heading6, htmlTip: `<h6 class="q-ma-none">${e.heading6}</h6>` },
        p: { cmd: "formatBlock", param: props.paragraphTag, icon: i.heading, tip: e.paragraph },
        code: { cmd: "formatBlock", param: "PRE", icon: i.code, htmlTip: `<code>${e.code}</code>` },
        "size-1": { cmd: "fontSize", param: "1", icon: i.size1 || i.size, tip: e.size1, htmlTip: `<font size="1">${e.size1}</font>` },
        "size-2": { cmd: "fontSize", param: "2", icon: i.size2 || i.size, tip: e.size2, htmlTip: `<font size="2">${e.size2}</font>` },
        "size-3": { cmd: "fontSize", param: "3", icon: i.size3 || i.size, tip: e.size3, htmlTip: `<font size="3">${e.size3}</font>` },
        "size-4": { cmd: "fontSize", param: "4", icon: i.size4 || i.size, tip: e.size4, htmlTip: `<font size="4">${e.size4}</font>` },
        "size-5": { cmd: "fontSize", param: "5", icon: i.size5 || i.size, tip: e.size5, htmlTip: `<font size="5">${e.size5}</font>` },
        "size-6": { cmd: "fontSize", param: "6", icon: i.size6 || i.size, tip: e.size6, htmlTip: `<font size="6">${e.size6}</font>` },
        "size-7": { cmd: "fontSize", param: "7", icon: i.size7 || i.size, tip: e.size7, htmlTip: `<font size="7">${e.size7}</font>` }
      };
    });
    const buttons = computed(() => {
      const userDef = props.definitions || {};
      const def = props.definitions || props.fonts ? extend(
        true,
        {},
        buttonDef.value,
        userDef,
        getFonts(
          defaultFont,
          $q.lang.editor.defaultFont,
          $q.iconSet.editor.font,
          props.fonts
        )
      ) : buttonDef.value;
      return props.toolbar.map(
        (group) => group.map((token) => {
          if (token.options) {
            return {
              type: "dropdown",
              icon: token.icon,
              label: token.label,
              size: "sm",
              dense: true,
              fixedLabel: token.fixedLabel,
              fixedIcon: token.fixedIcon,
              highlight: token.highlight,
              list: token.list,
              options: token.options.map((item) => def[item])
            };
          }
          const obj = def[token];
          if (obj) {
            return obj.type === "no-state" || userDef[token] && (obj.cmd === void 0 || buttonDef.value[obj.cmd] && buttonDef.value[obj.cmd].type === "no-state") ? obj : Object.assign({ type: "toggle" }, obj);
          } else {
            return {
              type: "slot",
              slot: token
            };
          }
        })
      );
    });
    const eVm = {
      $q,
      props,
      slots,
      emit,
      inFullscreen,
      toggleFullscreen,
      runCmd,
      isViewingSource,
      editLinkUrl,
      toolbarBackgroundClass,
      buttonProps,
      contentRef,
      buttons,
      setContent
    };
    watch(() => props.modelValue, (v) => {
      if (lastEmit !== v) {
        lastEmit = v;
        setContent(v, true);
      }
    });
    watch(editLinkUrl, (v) => {
      emit(`link${v ? "Show" : "Hide"}`);
    });
    const hasToolbar = computed(() => props.toolbar && props.toolbar.length !== 0);
    const keys = computed(() => {
      const k = {}, add = (btn) => {
        if (btn.key) {
          k[btn.key] = {
            cmd: btn.cmd,
            param: btn.param
          };
        }
      };
      buttons.value.forEach((group) => {
        group.forEach((token) => {
          if (token.options) {
            token.options.forEach(add);
          } else {
            add(token);
          }
        });
      });
      return k;
    });
    const innerStyle = computed(() => inFullscreen.value ? props.contentStyle : [
      {
        minHeight: props.minHeight,
        height: props.height,
        maxHeight: props.maxHeight
      },
      props.contentStyle
    ]);
    const classes = computed(
      () => `q-editor q-editor--${isViewingSource.value === true ? "source" : "default"}` + (props.disable === true ? " disabled" : "") + (inFullscreen.value === true ? " fullscreen column" : "") + (props.square === true ? " q-editor--square no-border-radius" : "") + (props.flat === true ? " q-editor--flat" : "") + (props.dense === true ? " q-editor--dense" : "") + (isDark.value === true ? " q-editor--dark q-dark" : "")
    );
    const innerClass = computed(() => [
      props.contentClass,
      "q-editor__content",
      { col: inFullscreen.value, "overflow-auto": inFullscreen.value || props.maxHeight }
    ]);
    const attributes = computed(() => props.disable === true ? { "aria-disabled": "true" } : props.readonly === true ? { "aria-readonly": "true" } : {});
    function onInput() {
      if (contentRef.value !== null) {
        const prop = `inner${isViewingSource.value === true ? "Text" : "HTML"}`;
        const val = contentRef.value[prop];
        if (val !== props.modelValue) {
          lastEmit = val;
          emit("update:modelValue", val);
        }
      }
    }
    function onKeydown(e) {
      emit("keydown", e);
      if (e.ctrlKey !== true || shouldIgnoreKey(e) === true) {
        refreshToolbar();
        return;
      }
      const key = e.keyCode;
      const target = keys.value[key];
      if (target !== void 0) {
        const { cmd, param } = target;
        stopAndPrevent(e);
        runCmd(cmd, param, false);
      }
    }
    function onClick(e) {
      refreshToolbar();
      emit("click", e);
    }
    function onBlur(e) {
      if (contentRef.value !== null) {
        const { scrollTop, scrollHeight } = contentRef.value;
        offsetBottom = scrollHeight - scrollTop;
      }
      eVm.caret.save();
      emit("blur", e);
    }
    function onFocus(e) {
      nextTick(() => {
        if (contentRef.value !== null && offsetBottom !== void 0) {
          contentRef.value.scrollTop = contentRef.value.scrollHeight - offsetBottom;
        }
      });
      emit("focus", e);
    }
    function onFocusin(e) {
      const root = rootRef.value;
      if (root !== null && root.contains(e.target) === true && (e.relatedTarget === null || root.contains(e.relatedTarget) !== true)) {
        const prop = `inner${isViewingSource.value === true ? "Text" : "HTML"}`;
        eVm.caret.restorePosition(contentRef.value[prop].length);
        refreshToolbar();
      }
    }
    function onFocusout(e) {
      const root = rootRef.value;
      if (root !== null && root.contains(e.target) === true && (e.relatedTarget === null || root.contains(e.relatedTarget) !== true)) {
        eVm.caret.savePosition();
        refreshToolbar();
      }
    }
    function onPointerStart() {
      offsetBottom = void 0;
    }
    function onSelectionchange(e) {
      eVm.caret.save();
    }
    function setContent(v, restorePosition) {
      if (contentRef.value !== null) {
        if (restorePosition === true) {
          eVm.caret.savePosition();
        }
        const prop = `inner${isViewingSource.value === true ? "Text" : "HTML"}`;
        contentRef.value[prop] = v;
        if (restorePosition === true) {
          eVm.caret.restorePosition(contentRef.value[prop].length);
          refreshToolbar();
        }
      }
    }
    function runCmd(cmd, param, update = true) {
      focus();
      eVm.caret.restore();
      eVm.caret.apply(cmd, param, () => {
        focus();
        eVm.caret.save();
        if (update) {
          refreshToolbar();
        }
      });
    }
    function refreshToolbar() {
      setTimeout(() => {
        editLinkUrl.value = null;
        proxy.$forceUpdate();
      }, 1);
    }
    function focus() {
      addFocusFn(() => {
        contentRef.value !== null && contentRef.value.focus({ preventScroll: true });
      });
    }
    function getContentEl() {
      return contentRef.value;
    }
    onMounted(() => {
      eVm.caret = proxy.caret = new Caret(contentRef.value, eVm);
      setContent(props.modelValue);
      refreshToolbar();
      document.addEventListener("selectionchange", onSelectionchange);
    });
    onBeforeUnmount(() => {
      document.removeEventListener("selectionchange", onSelectionchange);
    });
    Object.assign(proxy, {
      runCmd,
      refreshToolbar,
      focus,
      getContentEl
    });
    return () => {
      let toolbars;
      if (hasToolbar.value) {
        const bars = [
          h("div", {
            key: "qedt_top",
            class: "q-editor__toolbar row no-wrap scroll-x" + toolbarBackgroundClass.value
          }, getToolbar(eVm))
        ];
        editLinkUrl.value !== null && bars.push(
          h("div", {
            key: "qedt_btm",
            class: "q-editor__toolbar row no-wrap items-center scroll-x" + toolbarBackgroundClass.value
          }, getLinkEditor(eVm))
        );
        toolbars = h("div", {
          key: "toolbar_ctainer",
          class: "q-editor__toolbars-container"
        }, bars);
      }
      return h("div", {
        ref: rootRef,
        class: classes.value,
        style: { height: inFullscreen.value === true ? "100%" : null },
        ...attributes.value,
        onFocusin,
        onFocusout
      }, [
        toolbars,
        h("div", {
          ref: contentRef,
          style: innerStyle.value,
          class: innerClass.value,
          contenteditable: editable.value,
          placeholder: props.placeholder,
          ...{},
          ...splitAttrs.listeners.value,
          onInput,
          onKeydown,
          onClick,
          onBlur,
          onFocus,
          onMousedown: onPointerStart,
          onTouchstartPassive: onPointerStart
        })
      ]);
    };
  }
});
export { QEditor as Q, _sfc_main as _ };
