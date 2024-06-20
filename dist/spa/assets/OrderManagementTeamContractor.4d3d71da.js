import { C as defineComponent, i as inject, r as ref, D as reactive, o as onMounted, G as onBeforeUnmount, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, N as QIcon, z as createCommentVNode, q as createBaseVNode, as as QToggle, P as QBtn, R as unref, Q as QCard, F as Fragment } from "./index.370d568b.js";
import { a as QBreadcrumbsEl, Q as QBreadcrumbs } from "./QBreadcrumbs.a9b3762c.js";
import { Q as QSelect } from "./QSelect.4b2b6f1c.js";
import { Q as QTable } from "./QTable.5dba33db.js";
import { a as api } from "./axios.d95458b2.js";
import { _ as _sfc_main$1 } from "./DateField.f9c8f28a.js";
import { _ as _sfc_main$2 } from "./OrderListFormat.8d14c8da.js";
import { u as useMixinDebug } from "./debug.b9d7424b.js";
import { x as getRowsPerPage, y as rowsPerPageOptions, z as setRowsPerPage } from "./help.3de5c98f.js";
import { u as useI18n } from "./vue-i18n.runtime.esm-bundler.54b38b06.js";
const _hoisted_1 = {
  key: 0,
  class: "flex items-center q-mb-md",
  style: { "padding-top": "11px" }
};
const _hoisted_2 = { class: "flex q-mt-md" };
const _hoisted_3 = { class: "col-shrink" };
const _hoisted_4 = {
  key: 1,
  class: "row q-col-gutter-md q-mt-xs q-mb-md"
};
const _hoisted_5 = { class: "col-xs-6" };
const _hoisted_6 = { class: "col-xs-6" };
const _hoisted_7 = { class: "col-xs-12" };
const _hoisted_8 = { class: "q-pl-xs q-pr-xs" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OrderManagementTeamContractor",
  props: {
    team_id: null
  },
  setup(__props) {
    const props = __props;
    const bus = inject("bus");
    const i8n = useI18n();
    const data = ref([]);
    const loading = ref(false);
    const showFilters = ref(true);
    const topRef = ref(null);
    const search = reactive({
      team_id: null,
      start: null,
      end: null,
      status: "confirmed",
      recurring: false
    });
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
    const request = (props2 = null) => {
      let page;
      let rowsPerPage;
      let sortBy;
      let descending;
      if (props2 && props2.pagination) {
        page = props2.pagination.page;
        rowsPerPage = props2.pagination.rowsPerPage;
        sortBy = props2.pagination.sortBy;
        descending = props2.pagination.descending;
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
        if (props2) {
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
      if (props.team_id) {
        search.team_id = props.team_id;
      }
      request();
    });
    onBeforeUnmount(() => {
      bus.off("orderLoadMore");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        !_ctx.$q.screen.xs ? (openBlock(), createElementBlock("div", _hoisted_1, [
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
        createBaseVNode("div", _hoisted_2, [
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
          createBaseVNode("div", _hoisted_3, [
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
        showFilters.value ? (openBlock(), createElementBlock("div", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, [
            createVNode(_sfc_main$1, {
              modelValue: search.start,
              "onUpdate:modelValue": [
                _cache[5] || (_cache[5] = ($event) => search.start = $event),
                _cache[6] || (_cache[6] = ($event) => request())
              ],
              label: "Start",
              dense: true,
              outlined: true,
              clearable: true
            }, null, 8, ["modelValue"])
          ]),
          createBaseVNode("div", _hoisted_6, [
            createVNode(_sfc_main$1, {
              modelValue: search.end,
              "onUpdate:modelValue": [
                _cache[7] || (_cache[7] = ($event) => search.end = $event),
                _cache[8] || (_cache[8] = ($event) => request())
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
              "onUpdate:pagination": _cache[9] || (_cache[9] = ($event) => serverPagination.value = $event),
              onRequest: request,
              class: "orders-table",
              flat: "",
              "rows-per-page-options": unref(rowsPerPageOptions),
              "wrap-cells": "",
              "hide-header": "",
              grid: ""
            }, {
              item: withCtx((props2) => [
                createBaseVNode("div", _hoisted_7, [
                  createBaseVNode("div", _hoisted_8, [
                    createVNode(_sfc_main$2, {
                      orders: [props2.row],
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
      ], 64);
    };
  }
});
export { _sfc_main as _ };
