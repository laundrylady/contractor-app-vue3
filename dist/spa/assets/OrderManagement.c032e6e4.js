import { Q as QSpace } from "./QSpace.57444ed1.js";
import { B as defineComponent, i as inject, aa as useRoute, r as ref, C as reactive, o as onMounted, G as onBeforeUnmount, m as openBlock, n as createElementBlock, l as createVNode, L as withCtx, F as Fragment, t as normalizeClass, q as createBaseVNode, ak as createTextVNode, aj as toDisplayString, R as QBtn, z as createCommentVNode, O as QIcon, Q as QCard, S as unref } from "./index.96a3f834.js";
import { Q as QHeader } from "./QHeader.937af4ba.js";
import { a as QBreadcrumbs, Q as QBreadcrumbsEl } from "./QBreadcrumbs.cf0205f9.js";
import { Q as QTable } from "./QTable.118042b4.js";
import { Q as QPage } from "./QPage.647b437d.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.eb7c6c29.js";
import { a as api } from "./axios.be3a5f7e.js";
import { _ as _sfc_main$2 } from "./DateField.7e2966d6.js";
import { _ as _sfc_main$1, a as _sfc_main$3 } from "./OrderCreate.15c587f7.js";
import { _ as _sfc_main$4 } from "./OrderListFormat.f786ba75.js";
import { u as useMixinDebug } from "./debug.972d445d.js";
import { p as getRowsPerPage, q as setRowsPerPage, r as rowsPerPageOptions, o as orderColor } from "./help.076bc519.js";
import { u as useI18n } from "./vue-i18n.runtime.esm-bundler.096e4e9a.js";
import "./QResizeObserver.0eac7671.js";
import "./QList.b5a66286.js";
import "./QMarkupTable.c47dbd7d.js";
import "./QSelect.02973d19.js";
import "./selection.1e405919.js";
import "./QItemLabel.5d90c580.js";
import "./QMenu.bc1b86fc.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.a85f4616.js";
import "./use-fullscreen.8d093f29.js";
import "./QDate.7383f059.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.a29420e5.js";
import "./use-quasar.23e01791.js";
import "./QToolbarTitle.e1f2cc02.js";
import "./index.esm.83dcbc34.js";
import "./security.b36affb0.js";
import "./helpers.998e08da.js";
import "./OrderContractorManagement.5bc4af3b.js";
import "./UserAvatar.f1543d1b.js";
import "./QImg.18ca530f.js";
import "./use-ratio.3f706227.js";
import "./open-url.a22e2aaf.js";
import "./geolocation.b00df5de.js";
import "./StatusTag.60b8ee36.js";
import "./QBadge.3302adab.js";
const _hoisted_1 = { class: "flex items-center" };
const _hoisted_2 = { class: "text-h6" };
const _hoisted_3 = { class: "text-caption" };
const _hoisted_4 = {
  key: 0,
  class: "row q-col-gutter-md q-mt-xs"
};
const _hoisted_5 = { class: "col-xs-6" };
const _hoisted_6 = { class: "col-xs-6" };
const _hoisted_7 = { class: "col-xs-9" };
const _hoisted_8 = { class: "col-xs-3" };
const _hoisted_9 = { class: "layout-container" };
const _hoisted_10 = {
  key: 0,
  class: "flex items-center q-mb-md",
  style: { "padding-top": "11px" }
};
const _hoisted_11 = { class: "q-pa-md" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OrderManagement",
  setup(__props) {
    const bus = inject("bus");
    const route = useRoute();
    const i8n = useI18n();
    const data = ref();
    const loading = ref(false);
    const showFilters = ref(false);
    const topRef = ref(null);
    const search = reactive({ team_id: null, start: null, end: null });
    const columns = [{
      name: "display_id",
      label: i8n.t("order.name"),
      align: "left",
      field: "display_id",
      sortable: true,
      style: "width:100px"
    }];
    const serverPagination = ref({
      page: 1,
      rowsNumber: getRowsPerPage(),
      rowsPerPage: getRowsPerPage(),
      sortBy: "display_id",
      descending: true
    });
    const request = (props = null) => {
      let page;
      let rowsPerPage;
      let sortBy;
      let descending;
      if (props && props.pagination) {
        page = props.pagination.page;
        rowsPerPage = props.pagination.rowsPerPage;
        sortBy = props.pagination.sortBy;
        descending = props.pagination.descending;
      } else {
        page = serverPagination.value.page;
        rowsPerPage = serverPagination.value.rowsPerPage;
        sortBy = serverPagination.value.sortBy;
        descending = serverPagination.value.descending;
      }
      loading.value = true;
      api.post(`/public/order/datatable/${page}`, {
        sortBy,
        sort_order: descending ? "desc" : "asc",
        skip: page,
        rowsPerPage,
        team_id: search.team_id,
        start: search.start,
        end: search.end
      }).then((response) => {
        var _a;
        data.value = response.data.rows;
        loading.value = false;
        setRowsPerPage(rowsPerPage);
        serverPagination.value.rowsNumber = response.data.total;
        serverPagination.value.page = page;
        serverPagination.value.rowsPerPage = rowsPerPage;
        serverPagination.value.sortBy = sortBy;
        serverPagination.value.descending = descending;
        if (props) {
          (_a = topRef.value) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }).catch((response) => {
        useMixinDebug(response);
      });
    };
    const toggleFilters = () => {
      showFilters.value = !showFilters.value;
    };
    onMounted(() => {
      bus.on("orderLoadMore", () => {
        request();
      });
      if (route.params.team_id) {
        search.team_id = parseFloat(route.params.team_id.toString());
        showFilters.value = true;
      }
      request();
    });
    onBeforeUnmount(() => {
      bus.off("orderLoadMore");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$1),
        createVNode(QLayout, {
          view: "lHh LpR fFf",
          container: "",
          class: "layout-height"
        }, {
          default: withCtx(() => [
            createVNode(QHeader, {
              class: normalizeClass({ "page-title text-black": !_ctx.$q.dark.isActive, "bg-dark": _ctx.$q.dark.isActive }),
              bordered: ""
            }, {
              default: withCtx(() => [
                createBaseVNode("div", {
                  class: normalizeClass([{ "q-pl-md q-pr-md": _ctx.$q.screen.xs }, "layout-container q-pt-md q-pb-md"])
                }, [
                  createBaseVNode("div", _hoisted_1, [
                    createBaseVNode("div", _hoisted_2, [
                      createTextVNode("All " + toDisplayString(_ctx.$t("order.namePlural")), 1),
                      createBaseVNode("div", _hoisted_3, "Search your previous " + toDisplayString(_ctx.$t("order.name")) + " history", 1)
                    ]),
                    createVNode(QSpace),
                    createVNode(QBtn, {
                      icon: "filter_alt",
                      onClick: _cache[0] || (_cache[0] = ($event) => toggleFilters()),
                      flat: "",
                      round: ""
                    })
                  ]),
                  showFilters.value ? (openBlock(), createElementBlock("div", _hoisted_4, [
                    createBaseVNode("div", _hoisted_5, [
                      createVNode(_sfc_main$2, {
                        modelValue: search.start,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => search.start = $event),
                        label: "Start",
                        dense: true,
                        outlined: true
                      }, null, 8, ["modelValue"])
                    ]),
                    createBaseVNode("div", _hoisted_6, [
                      createVNode(_sfc_main$2, {
                        modelValue: search.end,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => search.end = $event),
                        label: "End",
                        dense: true,
                        outlined: true
                      }, null, 8, ["modelValue"])
                    ]),
                    createBaseVNode("div", _hoisted_7, [
                      createVNode(_sfc_main$3, {
                        modelValue: search.team_id,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => search.team_id = $event),
                        label: _ctx.$t("team.name"),
                        dense: true,
                        outlined: true,
                        status: "active"
                      }, null, 8, ["modelValue", "label"])
                    ]),
                    createBaseVNode("div", _hoisted_8, [
                      createVNode(QBtn, {
                        onClick: _cache[4] || (_cache[4] = ($event) => request()),
                        icon: "search",
                        color: "primary"
                      })
                    ])
                  ])) : createCommentVNode("", true)
                ], 2)
              ]),
              _: 1
            }, 8, ["class"]),
            createVNode(QPageContainer, null, {
              default: withCtx(() => [
                createVNode(QPage, {
                  padding: "",
                  class: normalizeClass({ "q-pa-md": _ctx.$q.screen.xs })
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_9, [
                      !_ctx.$q.screen.xs ? (openBlock(), createElementBlock("div", _hoisted_10, [
                        createVNode(QBreadcrumbs, null, {
                          separator: withCtx(() => [
                            createVNode(QIcon, {
                              size: "1.5em",
                              name: "chevron_right"
                            })
                          ]),
                          default: withCtx(() => [
                            createVNode(QBreadcrumbsEl, {
                              label: "Home",
                              icon: "home",
                              to: { name: "appDashboard" }
                            }),
                            createVNode(QBreadcrumbsEl, {
                              label: _ctx.$t("order.namePlural")
                            }, null, 8, ["label"])
                          ]),
                          _: 1
                        })
                      ])) : createCommentVNode("", true),
                      createVNode(QCard, null, {
                        default: withCtx(() => [
                          createBaseVNode("div", {
                            ref_key: "topRef",
                            ref: topRef
                          }, null, 512),
                          createVNode(QTable, {
                            rows: data.value,
                            columns,
                            "row-key": "id",
                            loading: loading.value,
                            pagination: serverPagination.value,
                            "onUpdate:pagination": _cache[5] || (_cache[5] = ($event) => serverPagination.value = $event),
                            onRequest: request,
                            class: "orders-table",
                            flat: "",
                            "rows-per-page-options": unref(rowsPerPageOptions),
                            "wrap-cells": "",
                            "hide-header": "",
                            grid: ""
                          }, {
                            item: withCtx((props) => [
                              createBaseVNode("div", {
                                class: normalizeClass([unref(orderColor)(props.row), "col-xs-12"])
                              }, [
                                createBaseVNode("div", _hoisted_11, [
                                  createVNode(_sfc_main$4, {
                                    orders: [props.row],
                                    "no-avatar": true,
                                    dense: true,
                                    status: true,
                                    "booking-id": true,
                                    nobackground: true
                                  }, null, 8, ["orders"])
                                ])
                              ], 2)
                            ]),
                            _: 1
                          }, 8, ["rows", "loading", "pagination", "rows-per-page-options"])
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                }, 8, ["class"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ], 64);
    };
  }
});
export { _sfc_main as default };