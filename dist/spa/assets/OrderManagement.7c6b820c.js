import { Q as QSpace } from "./QSpace.3eb453ef.js";
import { B as defineComponent, i as inject, aj as useRoute, r as ref, C as reactive, o as onMounted, G as onBeforeUnmount, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, F as Fragment, t as normalizeClass, q as createBaseVNode, ab as createTextVNode, ac as toDisplayString, P as QBtn, z as createCommentVNode, N as QIcon, Q as QCard, R as unref } from "./index.4d63580c.js";
import { Q as QHeader } from "./QHeader.17984325.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.a1dc4fe8.js";
import { Q as QSelect } from "./QSelect.1e082333.js";
import { Q as QTable } from "./QTable.8c01b04e.js";
import { Q as QPage } from "./QPage.257e84ca.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.62ad12ef.js";
import { a as api } from "./axios.80bd9ce9.js";
import { _ as _sfc_main$2 } from "./DateField.e433f161.js";
import { _ as _sfc_main$1, b as _sfc_main$3, a as _sfc_main$4 } from "./OrderListFormat.a34bbc3a.js";
import { u as useMixinDebug } from "./debug.b9d7424b.js";
import { x as getRowsPerPage, z as setRowsPerPage, y as rowsPerPageOptions } from "./help.b5149410.js";
import { u as useI18n } from "./vue-i18n.runtime.esm-bundler.1b1d6f8b.js";
import "./QResizeObserver.c4eeb9f7.js";
import "./format.eea8744c.js";
import "./QItemLabel.9e02e9cb.js";
import "./selection.61bdbeb8.js";
import "./rtl.b51694b1.js";
import "./QList.b2f00f55.js";
import "./QMarkupTable.365e3f99.js";
import "./QLinearProgress.c141117e.js";
import "./use-fullscreen.b13201d6.js";
import "./QDate.60d7a89b.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.bf718225.js";
import "./QPopupProxy.341af208.js";
import "./use-quasar.c0d0135c.js";
import "./QToolbarTitle.49b8a1b0.js";
import "./QToolbar.54de0628.js";
import "./QBadge.a53e40a3.js";
import "./index.esm.a81c3694.js";
import "./security.c9465d01.js";
import "./helpers.4c9a6e38.js";
import "./OrderContractorManagement.f34489f8.js";
import "./UserAvatar.777a261a.js";
import "./QImg.2ad3a31d.js";
import "./use-ratio.c068e323.js";
import "./open-url.428909ae.js";
import "./geolocation.16bff1ae.js";
import "./StatusTag.52caf9f4.js";
const _hoisted_1 = { class: "flex items-center" };
const _hoisted_2 = { class: "text-h6" };
const _hoisted_3 = { class: "text-caption" };
const _hoisted_4 = {
  key: 0,
  class: "row q-col-gutter-md q-mt-xs"
};
const _hoisted_5 = { class: "col-xs-6" };
const _hoisted_6 = { class: "col-xs-6" };
const _hoisted_7 = { class: "col-xs-12" };
const _hoisted_8 = { class: "col-xs-12 text-right" };
const _hoisted_9 = { class: "layout-container" };
const _hoisted_10 = {
  key: 0,
  class: "flex items-center q-mb-md",
  style: { "padding-top": "11px" }
};
const _hoisted_11 = { class: "q-mb-sm" };
const _hoisted_12 = { class: "col-xs-12" };
const _hoisted_13 = { class: "q-pl-xs q-pr-xs" };
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
    const search = reactive({ team_id: null, start: null, end: null, status: "confirmed" });
    const columns = [{
      name: "display_id",
      label: i8n.t("order.name"),
      align: "left",
      field: "display_id",
      sortable: true,
      style: "width:100px"
    }];
    const originalServerPagination = {
      page: 1,
      rowsNumber: getRowsPerPage(),
      rowsPerPage: getRowsPerPage(),
      sortBy: "scheduled_pickup_date",
      descending: false
    };
    const serverPagination = ref(JSON.parse(JSON.stringify(originalServerPagination)));
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
        page = originalServerPagination.page;
        rowsPerPage = originalServerPagination.rowsPerPage;
        sortBy = originalServerPagination.sortBy;
        descending = originalServerPagination.descending;
      }
      loading.value = true;
      api.post(`/public/order/datatable/${page}`, {
        sortBy,
        sort_order: descending ? "desc" : "asc",
        skip: page,
        rowsPerPage,
        team_id: search.team_id,
        start: search.start,
        end: search.end,
        status: search.status
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
                      createTextVNode(toDisplayString(_ctx.$t("order.namePlural")), 1),
                      createBaseVNode("div", _hoisted_3, "Search your " + toDisplayString(_ctx.$t("order.name")) + " history ", 1)
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
                        outlined: true,
                        clearable: true
                      }, null, 8, ["modelValue"])
                    ]),
                    createBaseVNode("div", _hoisted_6, [
                      createVNode(_sfc_main$2, {
                        modelValue: search.end,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => search.end = $event),
                        label: "End",
                        dense: true,
                        outlined: true,
                        clearable: true
                      }, null, 8, ["modelValue"])
                    ]),
                    createBaseVNode("div", _hoisted_7, [
                      createVNode(_sfc_main$3, {
                        modelValue: search.team_id,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => search.team_id = $event),
                        label: _ctx.$t("team.name"),
                        dense: true,
                        outlined: true,
                        status: "active",
                        clearable: true
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
                      createBaseVNode("div", _hoisted_11, [
                        createVNode(QSelect, {
                          modelValue: search.status,
                          "onUpdate:modelValue": [
                            _cache[5] || (_cache[5] = ($event) => search.status = $event),
                            _cache[6] || (_cache[6] = ($event) => request())
                          ],
                          dense: "",
                          outlined: "",
                          label: "Booking Status",
                          options: [{ value: "confirmed", label: "Confirmed" }, { value: "in_progress", label: "In Progress" }, { value: "AUTHORIZED", label: "Awaiting Payment" }, { value: "ready_for_delivery", label: "Ready for Delivery" }, { value: "completed", label: "Completed" }],
                          "map-options": "",
                          "emit-value": ""
                        }, null, 8, ["modelValue"])
                      ]),
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
                            "onUpdate:pagination": _cache[7] || (_cache[7] = ($event) => serverPagination.value = $event),
                            onRequest: request,
                            class: "orders-table",
                            flat: "",
                            "rows-per-page-options": unref(rowsPerPageOptions),
                            "wrap-cells": "",
                            "hide-header": "",
                            grid: ""
                          }, {
                            item: withCtx((props) => [
                              createBaseVNode("div", _hoisted_12, [
                                createBaseVNode("div", _hoisted_13, [
                                  createVNode(_sfc_main$4, {
                                    orders: [props.row],
                                    "no-avatar": true,
                                    status: true,
                                    "booking-id": true
                                  }, null, 8, ["orders"])
                                ])
                              ])
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
