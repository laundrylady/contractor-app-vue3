import { S as createComponent, f as computed, h, V as hSlot, A as defineComponent, r as ref, B as reactive, o as onMounted, l as openBlock, m as createElementBlock, y as createCommentVNode, k as createVNode, K as withCtx, R as unref, M as QInput, N as QIcon, F as Fragment, bd as renderList, J as createBlock, aH as toDisplayString, aG as createTextVNode, p as createBaseVNode, P as QBtn, G as withDirectives, d4 as vShow, Q as QCard } from "./index.1fffc460.js";
import { Q as QTd } from "./QTd.265f9e1d.js";
import { Q as QItemSection, a as QItem } from "./selection.e2a402a4.js";
import { Q as QList } from "./QList.20eb8605.js";
import { Q as QTable } from "./QTable.1392a9c5.js";
import { a as api } from "./axios.b822c0d0.js";
import { u as useMixinDebug } from "./debug.ffa51329.js";
import { p as getRowsPerPage, r as rowsPerPageOptions, w as fromNowTz, t as dateTimeTz, q as setRowsPerPage } from "./help.b605acf3.js";
var QTr = createComponent({
  name: "QTr",
  props: {
    props: Object,
    noHover: Boolean
  },
  setup(props, { slots }) {
    const classes = computed(
      () => "q-tr" + (props.props === void 0 || props.props.header === true ? "" : " " + props.props.__trClass) + (props.noHover === true ? " q-tr--no-hover" : "")
    );
    return () => h("tr", { class: classes.value }, hSlot(slots.default));
  }
});
const _hoisted_1 = { key: 0 };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5" }, "Audit History", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "Below is the audit trail for the module.", -1);
const _hoisted_4 = [
  _hoisted_2,
  _hoisted_3
];
const _hoisted_5 = { key: 0 };
const _hoisted_6 = { key: 1 };
const _hoisted_7 = { key: 2 };
const _hoisted_8 = { class: "text-grey" };
const _hoisted_9 = {
  key: 3,
  class: "text-bold"
};
const _hoisted_10 = { key: 4 };
const _hoisted_11 = { class: "text-capitalize text-grey-6" };
const _hoisted_12 = { class: "text-capitalize text-grey-6" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AuditTimeline",
  props: {
    auditable_id: null,
    auditable_type: null,
    nobox: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const data = ref();
    const loading = ref(false);
    const search = reactive({ keyword: null, user_id: null });
    const columns = [{
      name: "event",
      sortable: true,
      label: "Event",
      field: "event",
      align: "left",
      format: (val) => val.toUpperCase()
    }, {
      name: "created_at",
      sortable: true,
      label: "When",
      field: "created_at",
      align: "left"
    }, {
      name: "user_id",
      sortable: true,
      label: "User",
      field: "user_id",
      align: "left"
    }, {
      name: "ip",
      sortable: true,
      label: "IP",
      field: "ip",
      align: "left"
    }];
    const serverPagination = reactive({
      page: 1,
      rowsNumber: getRowsPerPage(),
      rowsPerPage: getRowsPerPage(),
      sortBy: "id",
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
        page = serverPagination.page;
        rowsPerPage = serverPagination.rowsPerPage;
        sortBy = serverPagination.sortBy;
        descending = serverPagination.descending;
      }
      loading.value = true;
      api.post(`/audit/datatable/${page}`, {
        sortBy,
        sort_order: descending ? "desc" : "asc",
        skip: page,
        rowsPerPage,
        keyword: search.keyword,
        user_id: search.user_id,
        auditable_id: props.auditable_id,
        auditable: props.auditable_type
      }).then((response) => {
        serverPagination.rowsNumber = response.data.total;
        data.value = response.data.rows;
        loading.value = false;
        setRowsPerPage(rowsPerPage);
      }).catch((response) => {
        useMixinDebug(response);
      });
    };
    onMounted(() => {
      request();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        !__props.nobox ? (openBlock(), createElementBlock("div", _hoisted_1, _hoisted_4)) : createCommentVNode("", true),
        createVNode(QCard, null, {
          default: withCtx(() => [
            createVNode(QTable, {
              rows: data.value,
              columns,
              "row-key": "id",
              filter: search.keyword,
              loading: loading.value,
              pagination: serverPagination,
              "onUpdate:pagination": _cache[1] || (_cache[1] = ($event) => serverPagination = $event),
              onRequest: request,
              "rows-per-page-options": unref(rowsPerPageOptions)
            }, {
              "top-left": withCtx(() => [
                createVNode(QInput, {
                  modelValue: search.keyword,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => search.keyword = $event),
                  debounce: 500,
                  placeholder: "Keyword"
                }, {
                  append: withCtx(() => [
                    createVNode(QIcon, { name: "search" })
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              body: withCtx((props2) => [
                createVNode(QTr, { props: props2 }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(props2.cols, (col) => {
                      return openBlock(), createBlock(QTd, {
                        key: col.name,
                        props: props2
                      }, {
                        default: withCtx(() => [
                          col.name === "user_id" && props2.row.user ? (openBlock(), createElementBlock("span", _hoisted_5, toDisplayString(props2.row.user.fullname), 1)) : createCommentVNode("", true),
                          col.name === "auditable" ? (openBlock(), createElementBlock("span", _hoisted_6, toDisplayString(props2.row.auditable), 1)) : createCommentVNode("", true),
                          col.name === "created_at" ? (openBlock(), createElementBlock("span", _hoisted_7, [
                            createTextVNode(toDisplayString(unref(fromNowTz)(props2.row.created_at)) + " - ", 1),
                            createBaseVNode("span", _hoisted_8, toDisplayString(unref(dateTimeTz)(props2.row.created_at)), 1)
                          ])) : createCommentVNode("", true),
                          col.name === "event" ? (openBlock(), createElementBlock("span", _hoisted_9, [
                            createVNode(QBtn, {
                              size: "sm",
                              color: "primary",
                              round: "",
                              dense: "",
                              onClick: ($event) => props2.expand = !props2.expand,
                              icon: props2.expand ? "remove" : "add",
                              class: "q-mr-xs"
                            }, null, 8, ["onClick", "icon"]),
                            createTextVNode(" " + toDisplayString(col.value) + " (" + toDisplayString(props2.row.changes.length) + ")", 1)
                          ])) : createCommentVNode("", true),
                          col.name === "ip" ? (openBlock(), createElementBlock("span", _hoisted_10, toDisplayString(col.value), 1)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1032, ["props"]);
                    }), 128))
                  ]),
                  _: 2
                }, 1032, ["props"]),
                withDirectives(createVNode(QTr, { props: props2 }, {
                  default: withCtx(() => [
                    createVNode(QTd, { colspan: "100%" }, {
                      default: withCtx(() => [
                        createVNode(QList, { dense: "" }, {
                          default: withCtx(() => [
                            props2.row.event === "update" ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(props2.row.changes, (n, index) => {
                              return openBlock(), createBlock(QItem, { key: index }, {
                                default: withCtx(() => [
                                  createVNode(QItemSection, { side: "" }, {
                                    default: withCtx(() => [
                                      createVNode(QIcon, { name: "chevron_right" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(QItemSection, null, {
                                    default: withCtx(() => [
                                      createBaseVNode("div", null, [
                                        createBaseVNode("strong", _hoisted_11, toDisplayString(n.field), 1),
                                        createTextVNode(' changed from "' + toDisplayString(n.oldValue) + '" to "' + toDisplayString(n.value) + '" ', 1)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128)) : createCommentVNode("", true),
                            props2.row.event === "create" ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(props2.row.changes, (n, index) => {
                              return openBlock(), createBlock(QItem, { key: index }, {
                                default: withCtx(() => [
                                  createVNode(QItemSection, { side: "" }, {
                                    default: withCtx(() => [
                                      createVNode(QIcon, { name: "chevron_right" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(QItemSection, null, {
                                    default: withCtx(() => [
                                      createBaseVNode("div", null, [
                                        createBaseVNode("strong", _hoisted_12, toDisplayString(n.field), 1),
                                        createTextVNode(' set to "' + toDisplayString(n.value) + '"', 1)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128)) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["props"]), [
                  [vShow, props2.expand]
                ])
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
export { _sfc_main as _ };
