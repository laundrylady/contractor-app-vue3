import { Q as QHeader } from "./QHeader.d4c8713e.js";
import { B as defineComponent, i as inject, aj as useRoute, r as ref, C as reactive, o as onMounted, G as onBeforeUnmount, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, F as Fragment, t as normalizeClass, q as createBaseVNode, ab as createTextVNode, ac as toDisplayString, N as QIcon, z as createCommentVNode, ar as QToggle, P as QBtn, Q as QCard, R as unref } from "./index.cbceafe4.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.b436637c.js";
import { Q as QSelect } from "./QSelect.e5dc6c2c.js";
import { Q as QTable } from "./QTable.4aeb8dbc.js";
import { Q as QPage } from "./QPage.c9c5a2eb.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.30b388dc.js";
import { a as api, m as moment } from "./axios.5b47d216.js";
import { _ as _sfc_main$3 } from "./DateField.1f7a49bc.js";
import { _ as _sfc_main$1, b as _sfc_main$2, a as _sfc_main$4 } from "./OrderListFormat.04a6b84b.js";
import { u as useMixinDebug } from "./debug.b9d7424b.js";
import { x as getRowsPerPage, z as setRowsPerPage, y as rowsPerPageOptions } from "./help.7461b2ea.js";
import { u as useI18n } from "./vue-i18n.runtime.esm-bundler.d1fe40d6.js";
import "./QResizeObserver.591e9aff.js";
import "./format.2132c131.js";
import "./QItemLabel.3781752a.js";
import "./selection.f04d2dc8.js";
import "./rtl.b51694b1.js";
import "./QList.0e75c36e.js";
import "./QMarkupTable.2402e974.js";
import "./QLinearProgress.49727588.js";
import "./use-fullscreen.f99ad7f1.js";
import "./QDate.24ee2e4a.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.ba6b337f.js";
import "./QPopupProxy.d4ad706d.js";
import "./use-quasar.05910a29.js";
import "./QToolbarTitle.0489e3d4.js";
import "./QSpace.026ed126.js";
import "./QToolbar.32a54c86.js";
import "./QBadge.cb4bc132.js";
import "./index.esm.1e61170a.js";
import "./security.bbf3594c.js";
import "./helpers.69f35569.js";
import "./OrderContractorManagement.09705c72.js";
import "./UserAvatar.a5414028.js";
import "./QImg.5759dd3e.js";
import "./use-ratio.46149913.js";
import "./open-url.ed35081a.js";
import "./geolocation.fbc36eb2.js";
import "./StatusTag.1b99ff07.js";
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
      } else {
        search.start = moment().startOf("isoWeek").format("DD/MM/YYYY");
        search.end = moment().endOf("isoWeek").format("DD/MM/YYYY");
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
                  class: normalizeClass({ "q-pa-md": _ctx.$q.screen.xs })
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
                          options: [{ value: "confirmed", label: "Confirmed" }, { value: "in_progress", label: "In Progress" }, { value: "AUTHORIZED", label: "Awaiting Payment" }, { value: "ready_for_delivery", label: "Ready for Delivery" }, { value: "completed", label: "Completed" }],
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
                          createVNode(_sfc_main$2, {
                            modelValue: search.team_id,
                            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => search.team_id = $event),
                            label: _ctx.$t("team.name"),
                            dense: true,
                            outlined: true,
                            status: "active",
                            clearable: true
                          }, null, 8, ["modelValue", "label"])
                        ]),
                        createBaseVNode("div", _hoisted_10, [
                          createVNode(_sfc_main$3, {
                            modelValue: search.start,
                            "onUpdate:modelValue": [
                              _cache[6] || (_cache[6] = ($event) => search.start = $event),
                              _cache[7] || (_cache[7] = ($event) => request())
                            ],
                            label: "Start",
                            dense: true,
                            outlined: true,
                            clearable: true
                          }, null, 8, ["modelValue"])
                        ]),
                        createBaseVNode("div", _hoisted_11, [
                          createVNode(_sfc_main$3, {
                            modelValue: search.end,
                            "onUpdate:modelValue": [
                              _cache[8] || (_cache[8] = ($event) => search.end = $event),
                              _cache[9] || (_cache[9] = ($event) => request())
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
                            "onUpdate:pagination": _cache[10] || (_cache[10] = ($event) => serverPagination.value = $event),
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
