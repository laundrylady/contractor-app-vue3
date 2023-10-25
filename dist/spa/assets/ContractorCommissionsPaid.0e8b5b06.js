import { B as defineComponent, r as ref, o as onMounted, m as openBlock, K as createBlock, L as withCtx, l as createVNode, q as createBaseVNode, aI as toDisplayString, S as unref, O as QIcon, aj as createTextVNode, n as createElementBlock, z as createCommentVNode, Q as QCard } from "./index.fbe50061.js";
import { a as QBreadcrumbs, Q as QBreadcrumbsEl } from "./QBreadcrumbs.b3b38306.js";
import { Q as QSpace } from "./QSpace.7ff4b9d1.js";
import { Q as QTd } from "./QTd.b14cf39d.js";
import { Q as QTable } from "./QTable.648f47ea.js";
import { o as openURL } from "./open-url.8d4b7917.js";
import { a as api } from "./axios.18ded2a9.js";
import { u as useMixinDebug } from "./debug.972d445d.js";
import { p as getRowsPerPage, i as currencyFormat, l as dbDateDisplay, r as rowsPerPageOptions, q as setRowsPerPage } from "./help.3381b671.js";
import { _ as _sfc_main$2 } from "./StatusTag.e25bd456.js";
import "./QList.bf907c35.js";
import "./QMarkupTable.84318991.js";
import "./QSelect.46e9e734.js";
import "./selection.87801179.js";
import "./QItemLabel.7c9eb75e.js";
import "./QMenu.7187a648.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.31e6377d.js";
import "./use-fullscreen.d808bef0.js";
import "./QBadge.5df903b6.js";
const _hoisted_1$1 = { class: "flex items-center no-wrap" };
const _hoisted_2$1 = { class: "text-h6" };
const _hoisted_3 = ["onClick"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UserCommissionPaidManagementContractor",
  setup(__props) {
    const data = ref();
    const loading = ref(false);
    const columns = [{
      name: "commission_paid_date",
      sortable: true,
      label: "",
      field: "commission_paid_date",
      align: "left",
      style: "width:100px"
    }];
    const serverPagination = ref({
      page: 1,
      rowsNumber: getRowsPerPage(),
      rowsPerPage: getRowsPerPage(),
      sortBy: "id",
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
      api.post(`/public/usercommissionpaid/datatable/${page}`, {
        sortBy,
        sort_order: descending ? "desc" : "asc",
        skip: page,
        rowsPerPage
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
    onMounted(() => {
      request();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QTable, {
        rows: data.value,
        columns,
        "row-key": "id",
        loading: loading.value,
        pagination: serverPagination.value,
        "onUpdate:pagination": _cache[0] || (_cache[0] = ($event) => serverPagination.value = $event),
        onRequest: request,
        "rows-per-page-options": unref(rowsPerPageOptions),
        "hide-header": "",
        flat: ""
      }, {
        "body-cell-commission_paid_date": withCtx((props) => [
          createVNode(QTd, { props }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1$1, [
                createBaseVNode("div", null, [
                  createBaseVNode("div", _hoisted_2$1, toDisplayString(unref(currencyFormat)(props.row.commission_paid_amount_grand)), 1),
                  createBaseVNode("div", null, "Week: " + toDisplayString(unref(dbDateDisplay)(props.row.start)) + " -> " + toDisplayString(unref(dbDateDisplay)(props.row.end)), 1),
                  createBaseVNode("a", {
                    class: "link items-center flex",
                    onClick: ($event) => unref(openURL)(`/api/public/usercommissionpaid/statement/${props.row.id}`)
                  }, [
                    createVNode(QIcon, {
                      name: "print",
                      class: "q-mr-xs"
                    }),
                    createTextVNode(" Statement")
                  ], 8, _hoisted_3)
                ]),
                createVNode(QSpace),
                createVNode(_sfc_main$2, {
                  status: props.row.status
                }, null, 8, ["status"])
              ])
            ]),
            _: 2
          }, 1032, ["props"])
        ]),
        _: 1
      }, 8, ["rows", "loading", "pagination", "rows-per-page-options"]);
    };
  }
});
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContractorCommissionsPaid",
  props: {
    model: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.model.id ? (openBlock(), createElementBlock("div", _hoisted_1, [
        !_ctx.$q.screen.xs ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createVNode(QBreadcrumbs, { class: "q-mb-md" }, {
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
                label: "Profile",
                to: { name: "contractor-dashboard" }
              }),
              createVNode(QBreadcrumbsEl, { label: "Commissions" })
            ]),
            _: 1
          })
        ])) : createCommentVNode("", true),
        createVNode(QCard, null, {
          default: withCtx(() => [
            createVNode(_sfc_main$1)
          ]),
          _: 1
        })
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
