import { A as defineComponent, i as inject, r as ref, B as reactive, o as onMounted, E as onBeforeUnmount, l as openBlock, J as createBlock, K as withCtx, k as createVNode, M as QInput, N as QIcon, aG as createTextVNode, aH as toDisplayString, R as unref, p as createBaseVNode, m as createElementBlock, y as createCommentVNode, Q as QCard } from "./index.87bd49b7.js";
import { Q as QTd, a as QTable } from "./QTable.7636d595.js";
import { a as api } from "./axios.dbd6bbec.js";
import { u as useMixinDebug } from "./debug.805a8aef.js";
import { r as getRowsPerPage, f as fromNowTz, w as dateTimeTz, s as rowsPerPageOptions, t as setRowsPerPage } from "./help.741e177a.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_2 = { class: "text-grey" };
const _hoisted_3 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SmsLogComponent",
  props: {
    team_id: null,
    bulk: { type: Boolean },
    order_id: null,
    user_id: null
  },
  setup(__props) {
    const props = __props;
    const bus = inject("bus");
    const data = ref();
    const loading = ref(false);
    const search = reactive({ keyword: null });
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
      descending: true
    });
    const request = (pageProps = null) => {
      let page;
      let rowsPerPage;
      let sortBy;
      let descending;
      if (pageProps && pageProps.pagination) {
        page = pageProps.pagination.page;
        rowsPerPage = pageProps.pagination.rowsPerPage;
        sortBy = pageProps.pagination.sortBy;
        descending = pageProps.pagination.descending;
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
        keyword: search.keyword,
        user_id: props.user_id,
        team_id: props.team_id,
        order_id: props.order_id,
        bulk: props.bulk
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
      bus.on("getSmsLog", () => {
        request();
      });
    });
    onBeforeUnmount(() => {
      bus.off("getSmsLog");
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QCard, null, {
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
            "body-cell-created_at": withCtx((props2) => [
              createVNode(QTd, { props: props2 }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(fromNowTz)(props2.row.created_at)), 1),
                  _hoisted_1,
                  createBaseVNode("small", _hoisted_2, toDisplayString(unref(dateTimeTz)(props2.row.created_at)), 1)
                ]),
                _: 2
              }, 1032, ["props"])
            ]),
            "body-cell-sending_user_id": withCtx((props2) => [
              createVNode(QTd, { props: props2 }, {
                default: withCtx(() => [
                  props2.row.sendingUser ? (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(props2.row.sendingUser.fullname), 1)) : createCommentVNode("", true)
                ]),
                _: 2
              }, 1032, ["props"])
            ]),
            _: 1
          }, 8, ["rows", "filter", "loading", "pagination", "rows-per-page-options"])
        ]),
        _: 1
      });
    };
  }
});
export { _sfc_main as _ };
