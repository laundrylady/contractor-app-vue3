import { A as defineComponent, i as inject, r as ref, B as reactive, o as onMounted, E as onBeforeUnmount, J as resolveComponent, m as openBlock, K as createBlock, L as withCtx, l as createVNode, O as QIcon, N as QInput, R as createTextVNode, aF as toDisplayString, U as unref, S as QBtn, G as withDirectives } from "./index.e7424e86.js";
import { Q as QTd, a as QTable } from "./QTable.f1354ab1.js";
import { a as QItem, Q as QItemSection } from "./QItemSection.56dfbcc4.js";
import { Q as QList } from "./QList.4caebc00.js";
import { Q as QMenu } from "./format.711dd4cb.js";
import { C as ClosePopup } from "./ClosePopup.351cedad.js";
import { a as api } from "./axios.e112af7f.js";
import { _ as _sfc_main$1 } from "./StatusTag.ff22a4cf.js";
import { u as useMixinDebug } from "./debug.805a8aef.js";
import { x as getRowsPerPage, j as hourBookingDisplay, a as currencyFormat, y as rowsPerPageOptions, z as setRowsPerPage, c as confirmDelete } from "./help.f4bb6a30.js";
import { u as useI18n } from "./vue-i18n.runtime.esm-bundler.bd3fa8fd.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OrderManagementTeamContractor",
  props: {
    team_id: null,
    contractor_user_id: null
  },
  setup(__props) {
    const props = __props;
    const bus = inject("bus");
    const data = ref();
    const loading = ref(false);
    const i8n = useI18n();
    const search = reactive({ keyword: null });
    const columns = [{
      name: "display_id",
      label: i8n.t("order.id"),
      align: "left",
      field: "display_id",
      sortable: true,
      style: "width:100px"
    }, {
      name: "scheduled_pickup_date",
      sortable: true,
      label: i8n.t("order.scheduledPickupDate"),
      field: "scheduled_pickup_date",
      align: "left",
      style: "width:100px"
    }, {
      name: "team_id",
      label: i8n.t("team.name"),
      align: "left",
      field: "team_id",
      sortable: true
    }, {
      name: "contractor_user_id",
      label: i8n.t("contractor.name"),
      align: "left",
      field: "contractor_user_id",
      sortable: true
    }, {
      name: "total_price",
      label: "Total",
      align: "left",
      field: "total_price",
      sortable: true
    }, {
      name: "status",
      label: "Status",
      align: "left",
      field: "status",
      sortable: true
    }, {
      name: "actions",
      label: "Actions",
      field: "actions",
      sortable: false
    }];
    const serverPagination = ref({
      page: 1,
      rowsNumber: getRowsPerPage(),
      rowsPerPage: getRowsPerPage(),
      sortBy: "display_id",
      descending: true
    });
    const request = (tableProps = null) => {
      let page;
      let rowsPerPage;
      let sortBy;
      let descending;
      if (tableProps && tableProps.pagination) {
        page = tableProps.pagination.page;
        rowsPerPage = tableProps.pagination.rowsPerPage;
        sortBy = tableProps.pagination.sortBy;
        descending = tableProps.pagination.descending;
      } else {
        page = serverPagination.value.page;
        rowsPerPage = serverPagination.value.rowsPerPage;
        sortBy = serverPagination.value.sortBy;
        descending = serverPagination.value.descending;
      }
      loading.value = true;
      api.post(`/order/datatable/${page}`, {
        sortBy,
        sort_order: descending ? "desc" : "asc",
        skip: page,
        rowsPerPage,
        keyword: search.keyword,
        team_id: props.team_id,
        contractor_user_id: props.contractor_user_id
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
    const deleteOrder = (id) => {
      confirmDelete("This action is not reversible").onOk(() => {
        api.delete(`/order/${id}`).then(() => {
          request();
        }).catch((error) => {
          useMixinDebug(error);
        });
      });
    };
    onMounted(() => {
      request();
      bus.on("orderLoadMore", () => {
        request();
      });
    });
    onBeforeUnmount(() => {
      bus.off("orderLoadMore");
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createBlock(QTable, {
        rows: data.value,
        columns,
        "row-key": "id",
        filter: search.keyword,
        loading: loading.value,
        pagination: serverPagination.value,
        "onUpdate:pagination": _cache[1] || (_cache[1] = ($event) => serverPagination.value = $event),
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
        "body-cell-scheduled_pickup_date": withCtx((props2) => [
          createVNode(QTd, { props: props2 }, {
            default: withCtx(() => [
              createVNode(_component_router_link, {
                to: { name: "order-edit", params: { id: props2.row.id } },
                class: "link"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(props2.row.scheduled_pickup_date) + " (" + toDisplayString(unref(hourBookingDisplay)(props2.row.scheduled_pickup_time)) + ") ", 1)
                ]),
                _: 2
              }, 1032, ["to"])
            ]),
            _: 2
          }, 1032, ["props"])
        ]),
        "body-cell-display_id": withCtx((props2) => [
          createVNode(QTd, { props: props2 }, {
            default: withCtx(() => [
              createVNode(_component_router_link, {
                to: { name: "order-edit", params: { id: props2.row.id } },
                class: "link",
                target: "_blank"
              }, {
                default: withCtx(() => [
                  createTextVNode(" #" + toDisplayString(props2.row.display_id), 1)
                ]),
                _: 2
              }, 1032, ["to"])
            ]),
            _: 2
          }, 1032, ["props"])
        ]),
        "body-cell-team_id": withCtx((props2) => [
          createVNode(QTd, { props: props2 }, {
            default: withCtx(() => [
              createVNode(_component_router_link, {
                to: { name: "team-dashboard", params: { id: props2.row.team_id } },
                class: "link",
                target: "_blank"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(props2.row.team.name), 1)
                ]),
                _: 2
              }, 1032, ["to"])
            ]),
            _: 2
          }, 1032, ["props"])
        ]),
        "body-cell-contractor_user_id": withCtx((props2) => [
          createVNode(QTd, { props: props2 }, {
            default: withCtx(() => [
              createVNode(_component_router_link, {
                to: { name: "contractor-dashboard", params: { id: props2.row.contractor_user_id } },
                class: "link",
                target: "_blank"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(props2.row.contractor.fullname), 1)
                ]),
                _: 2
              }, 1032, ["to"])
            ]),
            _: 2
          }, 1032, ["props"])
        ]),
        "body-cell-total_price": withCtx((props2) => [
          createVNode(QTd, { props: props2 }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(currencyFormat)(props2.row.grand_total_price)), 1)
            ]),
            _: 2
          }, 1032, ["props"])
        ]),
        "body-cell-status": withCtx((props2) => [
          createVNode(QTd, { props: props2 }, {
            default: withCtx(() => [
              createVNode(_sfc_main$1, {
                status: props2.row.status
              }, null, 8, ["status"])
            ]),
            _: 2
          }, 1032, ["props"])
        ]),
        "body-cell-actions": withCtx((props2) => [
          createVNode(QTd, { props: props2 }, {
            default: withCtx(() => [
              createVNode(QBtn, {
                flat: "",
                icon: "more_vert"
              }, {
                default: withCtx(() => [
                  createVNode(QMenu, null, {
                    default: withCtx(() => [
                      createVNode(QList, null, {
                        default: withCtx(() => [
                          withDirectives((openBlock(), createBlock(QItem, {
                            clickable: "",
                            to: { name: "order-edit", params: { id: props2.row.id } }
                          }, {
                            default: withCtx(() => [
                              createVNode(QItemSection, null, {
                                default: withCtx(() => [
                                  createTextVNode("Edit record")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 2
                          }, 1032, ["to"])), [
                            [ClosePopup]
                          ]),
                          withDirectives((openBlock(), createBlock(QItem, {
                            clickable: "",
                            onClick: ($event) => deleteOrder(props2.row.id)
                          }, {
                            default: withCtx(() => [
                              createVNode(QItemSection, null, {
                                default: withCtx(() => [
                                  createTextVNode("Delete")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 2
                          }, 1032, ["onClick"])), [
                            [ClosePopup]
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1032, ["props"])
        ]),
        _: 1
      }, 8, ["rows", "filter", "loading", "pagination", "rows-per-page-options"]);
    };
  }
});
export { _sfc_main as _ };
