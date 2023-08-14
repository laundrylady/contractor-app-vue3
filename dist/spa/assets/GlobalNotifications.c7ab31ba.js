import { Q as QToolbar, a as QToolbarTitle } from "./QToolbarTitle.26478d01.js";
import { A as defineComponent, f as computed, l as openBlock, J as createBlock, K as withCtx, aG as createTextVNode, aH as toDisplayString, R as unref, i as inject, r as ref, B as reactive, o as onMounted, E as onBeforeUnmount, m as createElementBlock, k as createVNode, Q as QCard, G as withDirectives, P as QBtn, L as QCardSection, p as createBaseVNode, aE as QDialog, M as QInput, N as QIcon, y as createCommentVNode, F as Fragment, bd as renderList } from "./index.ef1b2cb4.js";
import { a as QTable, Q as QTd } from "./QTable.c6c6941a.js";
import { C as ClosePopup } from "./ClosePopup.0453095b.js";
import { a as api } from "./axios.b301f987.js";
import { u as useMixinDebug } from "./debug.ffa51329.js";
import { w as awsSesStatus, o as getRowsPerPage, r as rowsPerPageOptions, v as fromNowTz, t as dateTimeTz, p as setRowsPerPage } from "./help.470b0717.js";
import { Q as QBadge } from "./QBadge.095bbffc.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AmazonSesStatus",
  props: {
    status: null
  },
  setup(__props) {
    const props = __props;
    const color = computed(() => {
      if (props.status === "Send") {
        return "primary";
      }
      if (props.status === "Delivery") {
        return "positive";
      }
      if (props.status === "Open") {
        return "positive";
      }
      if (props.status === "Bounce") {
        return "negative";
      }
      if (props.status === "Click") {
        return "positive";
      }
      return "grey";
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QBadge, { color: unref(color) }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(unref(awsSesStatus)(__props.status)), 1)
        ]),
        _: 1
      }, 8, ["color"]);
    };
  }
});
const _hoisted_1 = ["innerHTML"];
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_3 = { class: "text-grey" };
const _hoisted_4 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GlobalNotifications",
  props: {
    notifiable_id: null,
    notifiable_type: null,
    bulk: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const bus = inject("bus");
    const data = ref();
    const loading = ref(false);
    const shown = ref();
    const showModal = ref(false);
    const search = reactive({ keyword: null });
    const columns = [{
      name: "created_at",
      label: "Sent",
      align: "left",
      field: "created_at",
      sortable: true
    }, {
      name: "to",
      sortable: true,
      label: "To",
      field: "to",
      align: "left"
    }, {
      name: "subject",
      sortable: true,
      label: "Subject",
      field: "subject",
      align: "left"
    }, {
      name: "actions",
      sortable: false,
      label: "",
      field: "actions",
      align: "right"
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
      api.post(`/notification/datatable/${page}`, {
        sortBy,
        sort_order: descending ? "desc" : "asc",
        skip: page,
        rowsPerPage,
        keyword: search.keyword,
        notifiable_id: props.notifiable_id,
        notifiable_type: props.notifiable_type,
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
    const showNotification = (notification) => {
      shown.value = notification;
      showModal.value = true;
    };
    onMounted(() => {
      request();
      bus.on("getNotifications", () => {
        request();
      });
    });
    onBeforeUnmount(() => {
      bus.off("getNotifications");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(QDialog, {
          modelValue: showModal.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => showModal.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(QCard, { class: "modal" }, {
              default: withCtx(() => [
                createVNode(QToolbar, null, {
                  default: withCtx(() => [
                    createVNode(QToolbarTitle, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(shown.value.subject), 1)
                      ]),
                      _: 1
                    }),
                    withDirectives(createVNode(QBtn, {
                      icon: "close",
                      flat: "",
                      round: "",
                      dense: ""
                    }, null, 512), [
                      [ClosePopup]
                    ])
                  ]),
                  _: 1
                }),
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    createBaseVNode("div", {
                      innerHTML: shown.value.html_content
                    }, null, 8, _hoisted_1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(QCard, null, {
          default: withCtx(() => [
            createVNode(QTable, {
              rows: data.value,
              columns,
              "row-key": "id",
              filter: search.keyword,
              loading: loading.value,
              pagination: serverPagination.value,
              "onUpdate:pagination": _cache[2] || (_cache[2] = ($event) => serverPagination.value = $event),
              onRequest: request,
              flat: "",
              "rows-per-page-options": unref(rowsPerPageOptions)
            }, {
              "top-left": withCtx(() => [
                createVNode(QInput, {
                  modelValue: search.keyword,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => search.keyword = $event),
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
                    _hoisted_2,
                    createBaseVNode("small", _hoisted_3, toDisplayString(unref(dateTimeTz)(props2.row.created_at)), 1)
                  ]),
                  _: 2
                }, 1032, ["props"])
              ]),
              "body-cell-to": withCtx((props2) => [
                createVNode(QTd, { props: props2 }, {
                  default: withCtx(() => [
                    !props2.row.amazonemails.length ? (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(props2.row.to), 1)) : createCommentVNode("", true),
                    props2.row.amazonemails ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(props2.row.amazonemails, (a) => {
                      return openBlock(), createElementBlock("span", {
                        key: a.email
                      }, [
                        createTextVNode(toDisplayString(a.email) + " ", 1),
                        createVNode(_sfc_main$1, {
                          status: props2.row.amazon_ses_status
                        }, null, 8, ["status"])
                      ]);
                    }), 128)) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1032, ["props"])
              ]),
              "body-cell-actions": withCtx((props2) => [
                createVNode(QTd, { props: props2 }, {
                  default: withCtx(() => [
                    createVNode(QBtn, {
                      onClick: ($event) => showNotification(props2.row),
                      icon: "visibility",
                      flat: ""
                    }, null, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["props"])
              ]),
              _: 1
            }, 8, ["rows", "filter", "loading", "pagination", "rows-per-page-options"])
          ]),
          _: 1
        })
      ], 64);
    };
  }
});
export { _sfc_main as _ };
