import { Q as QHeader } from "./QHeader.24e2bcef.js";
import { B as defineComponent, i as inject, aj as useRoute, r as ref, C as reactive, o as onMounted, G as onBeforeUnmount, m as openBlock, a9 as createBlock, K as withCtx, l as createVNode, q as createBaseVNode, ab as createTextVNode, ac as toDisplayString, t as normalizeClass, n as createElementBlock, N as QIcon, z as createCommentVNode, ar as QToggle, P as QBtn, Q as QCard, R as unref } from "./index.17833339.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.50584de1.js";
import { Q as QSelect } from "./QSelect.6163ca24.js";
import { Q as QTable } from "./QTable.9ea800fb.js";
import { Q as QPage } from "./QPage.c3b3f1a0.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.7f4f2a8c.js";
import { a as api } from "./axios.09203366.js";
import { _ as _sfc_main$2 } from "./DateField.2d63a1bb.js";
import { _ as _sfc_main$1 } from "./TeamField.f1f9682c.js";
import { _ as _sfc_main$3 } from "./OrderListFormat.28325bf0.js";
import { u as useMixinDebug } from "./debug.b9d7424b.js";
import { x as getRowsPerPage, z as setRowsPerPage, y as rowsPerPageOptions } from "./help.6ffb50b6.js";
import { u as useI18n } from "./vue-i18n.runtime.esm-bundler.0f8d52f3.js";
import "./QResizeObserver.b0762022.js";
import "./QItemSection.2e00f0a9.js";
import "./QItemLabel.7df690d2.js";
import "./QMenu.6ccbcb91.js";
import "./selection.093ede3f.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QList.46fbaee9.js";
import "./QMarkupTable.9e8924fb.js";
import "./QLinearProgress.daf0fc30.js";
import "./use-fullscreen.2b8d871e.js";
import "./QDate.2c0e4b92.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.ff6c1328.js";
import "./QPopupProxy.5724d055.js";
import "./use-quasar.ac540f78.js";
import "./QSpace.c4b4cf62.js";
import "./QBadge.1cd3f386.js";
import "./open-url.b2d73fc9.js";
import "./geolocation.4ee98787.js";
import "./StatusTag.b7f48fd5.js";
import "./UserAvatar.431ca453.js";
import "./use-ratio.092656cd.js";
import "./security.125e10ee.js";
const _hoisted_1 = { class: "flex items-center" };
const _hoisted_2 = { class: "text-h6" };
const _hoisted_3 = { class: "text-caption" };
const _hoisted_4 = { class: "layout-container" };
const _hoisted_5 = {
  key: 0,
  class: "flex items-center q-mb-md",
  style: { "padding-top": "11px" }
};
const _hoisted_6 = { class: "flex q-mt-md" };
const _hoisted_7 = { class: "col-shrink" };
const _hoisted_8 = {
  key: 1,
  class: "row q-col-gutter-md q-mt-xs q-mb-md"
};
const _hoisted_9 = { class: "col-xs-12 col-lg-6" };
const _hoisted_10 = { class: "col-xs-6 col-lg-3" };
const _hoisted_11 = { class: "col-xs-6 col-lg-3" };
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
    const showFilters = ref(true);
    const topRef = ref(null);
    const search = reactive({ team_id: null, start: null, end: null, status: "confirmed", recurring: false });
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
        status: search.status,
        recurring: search.recurring
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
    const toggleRecurring = () => {
      if (search.recurring) {
        search.status = "";
        search.start = null;
        search.end = null;
      }
      request();
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
      return openBlock(), createBlock(QLayout, {
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
                  ])
                ])
              ], 2)
            ]),
            _: 1
          }, 8, ["class"]),
          createVNode(QPageContainer, null, {
            default: withCtx(() => [
              createVNode(QPage, {
                padding: "",
                class: normalizeClass([{ "q-pa-md": _ctx.$q.screen.xs }, "q-pb-xl"])
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_4, [
                    !_ctx.$q.screen.xs ? (openBlock(), createElementBlock("div", _hoisted_5, [
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
                    createBaseVNode("div", _hoisted_6, [
                      createVNode(QSelect, {
                        modelValue: search.status,
                        "onUpdate:modelValue": [
                          _cache[0] || (_cache[0] = ($event) => search.status = $event),
                          _cache[1] || (_cache[1] = ($event) => request())
                        ],
                        dense: "",
                        outlined: "",
                        label: "Booking Status",
                        options: [{ value: "confirmed", label: "Confirmed" }, { value: "in_progress", label: "In Progress" }, { value: "AUTHORIZED", label: "Awaiting Payment" }, { value: "ready_for_delivery", label: "Ready for Delivery" }, { value: "completed", label: "Completed" }, { value: "cancelled", label: "Cancelled" }],
                        "map-options": "",
                        "emit-value": "",
                        class: "col-grow"
                      }, null, 8, ["modelValue"]),
                      createBaseVNode("div", _hoisted_7, [
                        createVNode(QToggle, {
                          modelValue: search.recurring,
                          "onUpdate:modelValue": [
                            _cache[2] || (_cache[2] = ($event) => search.recurring = $event),
                            _cache[3] || (_cache[3] = ($event) => toggleRecurring())
                          ],
                          label: "Recurring"
                        }, null, 8, ["modelValue"])
                      ]),
                      createVNode(QBtn, {
                        icon: "filter_alt",
                        onClick: _cache[4] || (_cache[4] = ($event) => toggleFilters()),
                        flat: "",
                        round: "",
                        class: "q-ml-xs"
                      })
                    ]),
                    showFilters.value ? (openBlock(), createElementBlock("div", _hoisted_8, [
                      createBaseVNode("div", _hoisted_9, [
                        createVNode(_sfc_main$1, {
                          modelValue: search.team_id,
                          "onUpdate:modelValue": [
                            _cache[5] || (_cache[5] = ($event) => search.team_id = $event),
                            _cache[6] || (_cache[6] = ($event) => request())
                          ],
                          label: _ctx.$t("team.name"),
                          dense: true,
                          outlined: true,
                          status: "active",
                          clearable: true
                        }, null, 8, ["modelValue", "label"])
                      ]),
                      createBaseVNode("div", _hoisted_10, [
                        createVNode(_sfc_main$2, {
                          modelValue: search.start,
                          "onUpdate:modelValue": [
                            _cache[7] || (_cache[7] = ($event) => search.start = $event),
                            _cache[8] || (_cache[8] = ($event) => request())
                          ],
                          label: "Start",
                          dense: true,
                          outlined: true,
                          clearable: true
                        }, null, 8, ["modelValue"])
                      ]),
                      createBaseVNode("div", _hoisted_11, [
                        createVNode(_sfc_main$2, {
                          modelValue: search.end,
                          "onUpdate:modelValue": [
                            _cache[9] || (_cache[9] = ($event) => search.end = $event),
                            _cache[10] || (_cache[10] = ($event) => request())
                          ],
                          label: "End",
                          dense: true,
                          outlined: true,
                          clearable: true
                        }, null, 8, ["modelValue"])
                      ])
                    ])) : createCommentVNode("", true),
                    createVNode(QCard, null, {
                      default: withCtx(() => [
                        createBaseVNode("div", {
                          ref_key: "topRef",
                          ref: topRef,
                          class: "q-mt-sm"
                        }, null, 512),
                        createVNode(QTable, {
                          rows: data.value,
                          columns,
                          "row-key": "id",
                          loading: loading.value,
                          pagination: serverPagination.value,
                          "onUpdate:pagination": _cache[11] || (_cache[11] = ($event) => serverPagination.value = $event),
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
                                createVNode(_sfc_main$3, {
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
      });
    };
  }
});
export { _sfc_main as default };
