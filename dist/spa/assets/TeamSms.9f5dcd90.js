import { B as defineComponent, i as inject, r as ref, C as reactive, o as onMounted, G as onBeforeUnmount, m as openBlock, K as createBlock, L as withCtx, l as createVNode, N as QInput, O as QIcon, ak as createTextVNode, aj as toDisplayString, S as unref, q as createBaseVNode, n as createElementBlock, z as createCommentVNode, Q as QCard } from "./index.97c2c6d1.js";
import { Q as QTd } from "./QTd.c4e31207.js";
import { Q as QTable } from "./QTable.eeeb72f9.js";
import { a as api } from "./axios.8cf8e3fb.js";
import { u as useMixinDebug } from "./debug.972d445d.js";
import { w as getRowsPerPage, A as fromNowTz, z as dateTimeTz, x as rowsPerPageOptions, y as setRowsPerPage } from "./help.c787d25e.js";
import "./QList.a38dce86.js";
import "./QMarkupTable.57ae8111.js";
import "./QSelect.5af92377.js";
import "./QItemSection.f2e348a7.js";
import "./QItemLabel.79ba59e5.js";
import "./QMenu.ea67b5ad.js";
import "./selection.4b973c29.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.88d354ea.js";
import "./use-fullscreen.a93965f7.js";
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_2$1 = { class: "text-grey" };
const _hoisted_3 = { key: 0 };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
                  _hoisted_1$1,
                  createBaseVNode("small", _hoisted_2$1, toDisplayString(unref(dateTimeTz)(props2.row.created_at)), 1)
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
const _hoisted_1 = { key: 0 };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5" }, "SMS Activities", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TeamSms",
  props: {
    model: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.model.id ? (openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("p", null, "Send an SMS or view the history for this " + toDisplayString(_ctx.$t("team.name")) + ".", 1),
        createVNode(_sfc_main$1, {
          team_id: __props.model.id
        }, null, 8, ["team_id"])
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
