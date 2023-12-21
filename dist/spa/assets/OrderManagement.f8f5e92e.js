import { Q as QSpace } from "./QSpace.add34f87.js";
import { B as defineComponent, i as inject, aa as useRoute, r as ref, C as reactive, o as onMounted, G as onBeforeUnmount, m as openBlock, n as createElementBlock, l as createVNode, L as withCtx, F as Fragment, t as normalizeClass, q as createBaseVNode, ak as createTextVNode, aj as toDisplayString, R as QBtn, z as createCommentVNode, O as QIcon, Q as QCard, al as QToggle, S as unref } from "./index.a8c2088f.js";
import { Q as QHeader } from "./QHeader.6f2f00f6.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.505dfec4.js";
import { Q as QTable } from "./QTable.757a8e60.js";
import { Q as QPage } from "./QPage.1f72f643.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.d3a90569.js";
import { a as api } from "./axios.6170ef9f.js";
import { _ as _sfc_main$2 } from "./DateField.c09861f5.js";
import { _ as _sfc_main$1, a as _sfc_main$3 } from "./OrderCreate.d8c53232.js";
import { _ as _sfc_main$4 } from "./OrderListFormat.a391fef3.js";
import { u as useMixinDebug } from "./debug.972d445d.js";
import { x as getRowsPerPage, z as setRowsPerPage, y as rowsPerPageOptions, o as orderColor } from "./help.565e8b52.js";
import { u as useI18n } from "./vue-i18n.runtime.esm-bundler.2cd83188.js";
import "./QResizeObserver.b5bd3494.js";
import "./QList.6dac2cc1.js";
import "./QMarkupTable.51386de5.js";
import "./QSelect.a486286b.js";
import "./QItemSection.e7fc41e3.js";
import "./QItemLabel.71296e9c.js";
import "./QMenu.d17a803f.js";
import "./selection.2269a595.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.b89a7092.js";
import "./use-fullscreen.55a28642.js";
import "./QDate.a1a6119b.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.2b5e4b81.js";
import "./use-quasar.263f5bc3.js";
import "./QToolbarTitle.18413c1f.js";
import "./QBadge.26c616f1.js";
import "./index.esm.5c9ce508.js";
import "./security.1d01dc28.js";
import "./helpers.b26deaad.js";
import "./OrderContractorManagement.a5605254.js";
import "./UserAvatar.8a9bd36e.js";
import "./QImg.0192b93e.js";
import "./use-ratio.2bce0c81.js";
import "./open-url.d801b7e1.js";
import "./geolocation.610d03cd.js";
import "./StatusTag.6cf8b52a.js";
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
const _hoisted_11 = { class: "text-right" };
const _hoisted_12 = { class: "q-pa-md" };
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
    const search = reactive({ team_id: null, start: null, end: null, confirmed: true });
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
        confirmed: search.confirmed
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
                      createVNode(QCard, null, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_11, [
                            createVNode(QToggle, {
                              modelValue: search.confirmed,
                              "onUpdate:modelValue": [
                                _cache[5] || (_cache[5] = ($event) => search.confirmed = $event),
                                _cache[6] || (_cache[6] = ($event) => request())
                              ],
                              label: "Pickups Only",
                              class: "q-mr-md"
                            }, null, 8, ["modelValue"])
                          ]),
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
                              createBaseVNode("div", {
                                class: normalizeClass([unref(orderColor)(props.row), "col-xs-12"])
                              }, [
                                createBaseVNode("div", _hoisted_12, [
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
