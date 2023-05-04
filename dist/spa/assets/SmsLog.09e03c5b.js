import { A as defineComponent, r as ref, B as reactive, o as onMounted, m as openBlock, K as createBlock, L as withCtx, l as createVNode, O as QIcon, U as unref, N as QInput, R as createTextVNode, aI as toDisplayString, q as createBaseVNode, n as createElementBlock, y as createCommentVNode, Q as QCard } from "./index.743d7681.js";
import { Q as QBreadcrumbsEl, a as QBreadcrumbs } from "./QBreadcrumbs.deae7ed4.js";
import { a as QTable, Q as QTd } from "./QTable.ed4938f5.js";
import { Q as QPage } from "./QPage.fb804c54.js";
import { a as api } from "./axios.67dbaacc.js";
import { u as useMixinDebug } from "./debug.805a8aef.js";
import { x as getRowsPerPage, z as setRowsPerPage, y as rowsPerPageOptions, l as fromNowTz, f as dateTimeTz } from "./help.dfac819e.js";
import "./QList.9ba32f52.js";
import "./QMarkupTable.6eacd957.js";
import "./QSelect.dbc7f1c3.js";
import "./QItemSection.d4f7e02a.js";
import "./rtl.e9486434.js";
import "./format.99445b5f.js";
import "./QLinearProgress.b1cba332.js";
import "./use-fullscreen.86dbb208.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h4 q-mb-md" }, " SMS Log ", -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_3 = { class: "text-grey" };
const _hoisted_4 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SmsLog",
  setup(__props) {
    const data = ref();
    const topRef = ref(null);
    const loading = ref(false);
    const search = reactive({ keyword: null, type: "contractor", status: "active", role: "contractor" });
    const columns = [{
      name: "created_at",
      label: "Sent",
      align: "left",
      field: "created_at",
      sortable: true
    }, {
      name: "sending_user_id",
      label: "Sent by",
      align: "left",
      field: "sending_user_id",
      sortable: true
    }, {
      name: "mobile",
      sortable: true,
      label: "Mobile",
      field: "mobile",
      align: "left"
    }, {
      name: "message",
      sortable: true,
      label: "Message",
      field: "message",
      align: "left"
    }, {
      name: "message_id",
      sortable: true,
      label: "Message ID",
      field: "message_id",
      align: "left"
    }];
    const serverPagination = ref({
      page: 1,
      rowsNumber: getRowsPerPage(),
      rowsPerPage: getRowsPerPage(),
      sortBy: "created_at",
      descending: false
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
      api.post(`/sms/datatable/${page}`, {
        sortBy,
        sort_order: descending ? "desc" : "asc",
        skip: page,
        rowsPerPage,
        keyword: search.keyword
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
    onMounted(() => {
      request();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, { padding: "" }, {
        default: withCtx(() => [
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
              createVNode(QBreadcrumbsEl, { label: "SMS Log" })
            ]),
            _: 1
          }),
          _hoisted_1,
          createVNode(QCard, null, {
            default: withCtx(() => [
              createVNode(QTable, {
                rows: data.value,
                columns,
                "row-key": "id",
                filter: search.keyword,
                loading: loading.value,
                pagination: serverPagination.value,
                "onUpdate:pagination": _cache[1] || (_cache[1] = ($event) => serverPagination.value = $event),
                onRequest: request,
                class: "no-shadow",
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
                "body-cell-created_at": withCtx((props) => [
                  createVNode(QTd, { props }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(fromNowTz)(props.row.created_at)), 1),
                      _hoisted_2,
                      createBaseVNode("small", _hoisted_3, toDisplayString(unref(dateTimeTz)(props.row.created_at)), 1)
                    ]),
                    _: 2
                  }, 1032, ["props"])
                ]),
                "body-cell-sending_user_id": withCtx((props) => [
                  createVNode(QTd, { props }, {
                    default: withCtx(() => [
                      props.row.sendingUser ? (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(props.row.sendingUser.fullname), 1)) : createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1032, ["props"])
                ]),
                _: 1
              }, 8, ["rows", "filter", "loading", "pagination", "rows-per-page-options"])
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
