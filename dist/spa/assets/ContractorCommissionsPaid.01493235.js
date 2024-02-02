import { B as defineComponent, r as ref, o as onMounted, m as openBlock, n as createElementBlock, q as createBaseVNode, l as createVNode, R as unref, P as QBtn, K as withCtx, ac as toDisplayString, N as QIcon, ab as createTextVNode, z as createCommentVNode, F as Fragment, Q as QCard } from "./index.84f10f3f.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.e3dc489f.js";
import { Q as QRouteTab } from "./QRouteTab.294f2829.js";
import { Q as QTabs } from "./QTabs.0a289df7.js";
import { Q as QTd } from "./QTd.82a057fe.js";
import { Q as QTable } from "./QTable.97a37a05.js";
import { o as openURL } from "./open-url.2bb66722.js";
import { a as api } from "./axios.0eb76a38.js";
import { u as useMixinDebug } from "./debug.b9d7424b.js";
import { x as getRowsPerPage, k as currencyFormat, v as dbDateDisplay, y as rowsPerPageOptions, z as setRowsPerPage } from "./help.6ab24264.js";
import "./QResizeObserver.9363291d.js";
import "./rtl.b51694b1.js";
import "./QList.6cde1eb1.js";
import "./QMarkupTable.ec0874b5.js";
import "./QSelect.429e8d47.js";
import "./QItemSection.bb85dabb.js";
import "./QItemLabel.44c04347.js";
import "./QMenu.bd1c4216.js";
import "./selection.1ac97dc8.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.d97fea42.js";
import "./use-fullscreen.e17cec5e.js";
const _hoisted_1$1 = { class: "text-right q-pr-md q-mb-sm" };
const _hoisted_2$1 = { class: "flex items-center no-wrap" };
const _hoisted_3 = { class: "text-h6" };
const _hoisted_4 = ["onClick"];
const _hoisted_5 = { key: 1 };
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
    const originalServerPagination = {
      page: 1,
      rowsNumber: getRowsPerPage(),
      rowsPerPage: getRowsPerPage(),
      sortBy: "id",
      descending: true
    };
    const serverPagination = ref(JSON.parse(JSON.stringify(originalServerPagination)));
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
        page = originalServerPagination.page;
        rowsPerPage = originalServerPagination.rowsPerPage;
        sortBy = originalServerPagination.sortBy;
        descending = originalServerPagination.descending;
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
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$1, [
          createVNode(QBtn, {
            onClick: _cache[0] || (_cache[0] = ($event) => unref(openURL)("https://teamlaundrylady.co/a/docs/payments-and-commissions/when-and-how-you-will-receive-your-payments")),
            icon: "question_mark",
            round: "",
            color: "primary",
            size: "sm",
            title: "Click here for more information regarding commission payments"
          })
        ]),
        createVNode(QTable, {
          rows: data.value,
          columns,
          "row-key": "id",
          loading: loading.value,
          pagination: serverPagination.value,
          "onUpdate:pagination": _cache[1] || (_cache[1] = ($event) => serverPagination.value = $event),
          onRequest: request,
          "rows-per-page-options": unref(rowsPerPageOptions),
          "hide-header": "",
          flat: ""
        }, {
          "body-cell-commission_paid_date": withCtx((props) => [
            createVNode(QTd, { props }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_2$1, [
                  createBaseVNode("div", null, [
                    createBaseVNode("div", _hoisted_3, toDisplayString(unref(currencyFormat)(props.row.commission_paid_amount_grand)), 1),
                    createBaseVNode("div", null, "Week: " + toDisplayString(unref(dbDateDisplay)(props.row.start)) + " -> " + toDisplayString(unref(dbDateDisplay)(props.row.end)), 1),
                    parseFloat(props.row.commission_paid_amount_grand) > 0 ? (openBlock(), createElementBlock("a", {
                      key: 0,
                      class: "link items-center flex",
                      onClick: ($event) => unref(openURL)(`/api/public/usercommissionpaid/statement/${props.row.id}`)
                    }, [
                      createVNode(QIcon, {
                        name: "print",
                        class: "q-mr-xs"
                      }),
                      createTextVNode(" Statement")
                    ], 8, _hoisted_4)) : createCommentVNode("", true),
                    parseFloat(props.row.commission_paid_amount_grand) === 0 ? (openBlock(), createElementBlock("div", _hoisted_5, "No payments received")) : createCommentVNode("", true)
                  ])
                ])
              ]),
              _: 2
            }, 1032, ["props"])
          ]),
          _: 1
        }, 8, ["rows", "loading", "pagination", "rows-per-page-options"])
      ], 64);
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
            createVNode(QTabs, {
              align: "left",
              class: "q-mb-sm"
            }, {
              default: withCtx(() => [
                createVNode(QRouteTab, {
                  to: { name: "contractor-commission-paid" },
                  label: "Commissions"
                }),
                createVNode(QRouteTab, {
                  to: { name: "contractor-invoices" },
                  label: "Invoices"
                })
              ]),
              _: 1
            }),
            createVNode(_sfc_main$1)
          ]),
          _: 1
        })
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };