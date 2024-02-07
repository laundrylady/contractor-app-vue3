import { Q as QSelect } from "./QSelect.c1681cd1.js";
import { B as defineComponent, r as ref, m as openBlock, a9 as createBlock, K as withCtx, l as createVNode, N as QIcon, R as unref, q as createBaseVNode, H as withDirectives, P as QBtn, M as QInput, C as reactive, o as onMounted, by as resolveComponent, n as createElementBlock, z as createCommentVNode, t as normalizeClass, Q as QCard, L as QCardSection, ab as createTextVNode, ac as toDisplayString, F as Fragment } from "./index.ae9373f8.js";
import { Q as QSpace } from "./QSpace.dbda70ac.js";
import { Q as QTd } from "./QTd.20861bbb.js";
import { Q as QTable } from "./QTable.fa28e3fb.js";
import { o as openURL } from "./open-url.8ee761b6.js";
import { m as moment, a as api } from "./axios.177cad41.js";
import { _ as _sfc_main$2 } from "./StatusTag.83cc3093.js";
import { _ as _sfc_main$3 } from "./UserAvatar.a0c358ca.js";
import { Q as QDate } from "./QDate.4ee6cfbc.js";
import { C as ClosePopup } from "./ClosePopup.33af78e1.js";
import { Q as QPopupProxy } from "./QPopupProxy.1e6ad5a8.js";
import { u as useQuasar } from "./use-quasar.6e4ce33e.js";
import { u as useMixinDebug } from "./debug.b9d7424b.js";
import { x as getRowsPerPage, y as rowsPerPageOptions, v as dbDateDisplay, k as currencyFormat, z as setRowsPerPage } from "./help.f50b0519.js";
import { u as useI18n } from "./vue-i18n.runtime.esm-bundler.1bb65a5b.js";
const _hoisted_1$1 = { class: "row items-center justify-end" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DateFieldSlim",
  props: {
    label: null,
    placeholder: null,
    modelValue: null,
    fdc: { type: Boolean },
    disabled: { type: Boolean },
    dark: { type: Boolean },
    previous: null,
    after: null,
    samePrevious: null,
    borderless: { type: Boolean },
    outlined: { type: Boolean },
    hint: null,
    year: null,
    filled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const $q = useQuasar();
    const hintCurrent = ref();
    const qDateProxy = ref();
    const fromCalendar = (val) => {
      if (qDateProxy.value) {
        qDateProxy.value.hide();
      }
      emits("update:modelValue", val);
    };
    const handleChange = (val) => {
      emits("update:modelValue", val);
    };
    const checkDate = () => {
      hintCurrent.value = false;
      if (props.modelValue) {
        let dateStr = props.modelValue;
        dateStr = dateStr.replace("/", "");
        dateStr = dateStr.replace("/", "");
        dateStr = dateStr.replace(/\D/g, "");
        dateStr = dateStr.replace(" ", "");
        if (dateStr.length < 6) {
          emits("update:modelValue", null);
          hintCurrent.value = "Please enter a valid date";
        } else {
          const dFm = dateStr;
          const dFd = dateStr;
          const dFy = dateStr;
          let dSday = dFd.slice(0, 2);
          dSday += "/";
          let dSmonth = dFm.slice(2, 4);
          dSmonth += "/";
          let dSyear = dFy.slice(4, 8);
          if (dSyear.length !== 4) {
            dSyear = dSyear.slice(0, 2);
            if (props.year) {
              dSyear = props.year + dSyear;
            } else {
              dSyear = `20${dSyear}`;
            }
          }
          const newDateStr = dSday + dSmonth + dSyear;
          if (newDateStr && !newDateStr.match("undefined")) {
            const mNewDateStr = moment(newDateStr, "DD/MM/YYYY");
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            if (mNewDateStr.isValid()) {
              let validDate = true;
              let hint = null;
              if (props.fdc) {
                if (!mNewDateStr.isAfter(today) && !mNewDateStr.isSame(today)) {
                  validDate = false;
                  $q.dialog({
                    title: "Invalid date",
                    message: `Please enter a date on or after ${props.after}`
                  });
                }
              }
              if (props.after) {
                if (!mNewDateStr.isSameOrAfter(moment(props.after, "DD/MM/YYYY"))) {
                  validDate = false;
                  hint = `Please enter a date on or after ${props.after}`;
                }
              }
              if (props.previous) {
                if (mNewDateStr.isAfter(today)) {
                  validDate = false;
                  hint = "Please enter a previous date";
                }
              }
              if (props.samePrevious) {
                if (!mNewDateStr.endOf("day").isSameOrBefore(moment(today).endOf("day"))) {
                  validDate = false;
                  hint = "Please enter a previous date";
                }
              }
              hintCurrent.value = hint;
              if (validDate) {
                emits("update:modelValue", newDateStr);
              } else {
                emits("update:modelValue", null);
              }
            } else {
              emits("update:modelValue", null);
              hintCurrent.value = "Please enter a valid date";
            }
          }
        }
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QInput, {
        filled: __props.filled,
        outlined: __props.outlined,
        "model-value": __props.modelValue,
        mask: "##/##/####",
        label: __props.label,
        style: { "width": "130px" },
        "onUpdate:modelValue": handleChange,
        onBlur: _cache[1] || (_cache[1] = ($event) => checkDate())
      }, {
        append: withCtx(() => [
          createVNode(QIcon, {
            name: "event",
            class: "cursor-pointer",
            onBlur: _cache[0] || (_cache[0] = ($event) => checkDate())
          }, {
            default: withCtx(() => [
              createVNode(unref(QPopupProxy), {
                cover: "",
                "transition-show": "scale",
                "transition-hide": "scale",
                ref_key: "qDateProxy",
                ref: qDateProxy
              }, {
                default: withCtx(() => [
                  createVNode(QDate, {
                    "model-value": __props.modelValue,
                    "onUpdate:modelValue": fromCalendar,
                    mask: "DD/MM/YYYY",
                    color: "secondary"
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_1$1, [
                        withDirectives(createVNode(QBtn, {
                          label: "Close",
                          color: "primary",
                          flat: ""
                        }, null, 512), [
                          [ClosePopup]
                        ])
                      ])
                    ]),
                    _: 1
                  }, 8, ["model-value"])
                ]),
                _: 1
              }, 512)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["filled", "outlined", "model-value", "label"]);
    };
  }
});
const _hoisted_1 = { class: "col-xs-12" };
const _hoisted_2 = { class: "flex" };
const _hoisted_3 = {
  key: 0,
  class: "col-xs-6 col-lg-2"
};
const _hoisted_4 = {
  key: 1,
  class: "col-xs-6 col-lg-2"
};
const _hoisted_5 = {
  key: 2,
  class: "col-xs-12"
};
const _hoisted_6 = {
  key: 1,
  class: "q-ml-sm"
};
const _hoisted_7 = {
  key: 3,
  class: "text-red"
};
const _hoisted_8 = { class: "text-right" };
const _hoisted_9 = { class: "text-bold text-h6" };
const _hoisted_10 = ["onClick"];
const _hoisted_11 = { class: "flex items-center no-wrap" };
const _hoisted_12 = {
  key: 2,
  class: "q-ml-sm"
};
const _hoisted_13 = {
  key: 0,
  class: "q-ml-sm",
  title: "Has Refunds"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "InvoiceManagement",
  props: {
    team_id: null
  },
  setup(__props) {
    const props = __props;
    const showFilters = ref(false);
    const i8n = useI18n();
    const data = ref();
    const loading = ref(false);
    const topRef = ref(null);
    const search = reactive({ keyword: null, start: null, end: null, status: null, team_id: null });
    const columns = [{
      name: "invoice_date",
      label: i8n.t("invoice.invoiceDate"),
      align: "left",
      field: "invoice_date",
      sortable: true,
      style: "width:100px"
    }, {
      name: "display_id",
      label: i8n.t("invoice.displayId"),
      align: "left",
      field: "display_id",
      sortable: true,
      style: "width:100px"
    }, {
      name: "order_id",
      label: "Booking",
      align: "left",
      field: "order_id",
      sortable: true
    }, {
      name: "team_id",
      label: "Customer",
      align: "left",
      field: "team_id",
      sortable: true
    }, {
      name: "total_price",
      label: "Total",
      align: "left",
      field: "total_price",
      sortable: true
    }, {
      name: "owing",
      label: "Owing",
      align: "left",
      field: "owing",
      sortable: false
    }, {
      name: "status",
      label: "Status",
      align: "left",
      field: "status",
      sortable: true,
      style: "width:110px;"
    }, {
      label: "",
      name: "actions",
      sortable: false,
      field: "actions"
    }];
    const originalServerPagination = {
      page: 1,
      rowsNumber: getRowsPerPage(),
      rowsPerPage: getRowsPerPage(),
      sortBy: "invoice_date",
      descending: true
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
      api.post(`/public/invoice/datatable/${page}`, {
        sortBy,
        sort_order: descending ? "desc" : "asc",
        skip: page,
        rowsPerPage,
        keyword: search.keyword,
        start: search.start,
        end: search.end,
        status: search.status,
        team_id: search.team_id
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
    onMounted(() => {
      if (props.team_id) {
        search.team_id = props.team_id;
      }
      request();
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", {
          class: normalizeClass(["row q-col-gutter-sm q-mt-sm q-mb-sm", { "q-ml-sm q-mr-sm": !props.team_id }])
        }, [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(QSelect, {
                modelValue: search.status,
                "onUpdate:modelValue": [
                  _cache[0] || (_cache[0] = ($event) => search.status = $event),
                  _cache[1] || (_cache[1] = ($event) => request())
                ],
                outlined: "",
                dense: "",
                options: [{ value: "DRAFT", label: "Draft" }, { value: "AUTHORISED", label: "Awaiting Payment" }, { value: "PAID", label: "Paid" }],
                label: "Status",
                "emit-value": "",
                "map-options": "",
                clearable: "",
                class: "col-grow"
              }, null, 8, ["modelValue"]),
              createVNode(QBtn, {
                icon: "filter_alt",
                onClick: _cache[2] || (_cache[2] = ($event) => showFilters.value = !showFilters.value),
                flat: "",
                round: "",
                class: "q-ml-xs"
              })
            ])
          ]),
          showFilters.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
            createVNode(_sfc_main$1, {
              modelValue: search.start,
              "onUpdate:modelValue": [
                _cache[3] || (_cache[3] = ($event) => search.start = $event),
                _cache[4] || (_cache[4] = ($event) => request())
              ],
              label: "Start",
              outlined: "",
              dense: "",
              class: "full-width",
              clearable: true
            }, null, 8, ["modelValue"])
          ])) : createCommentVNode("", true),
          showFilters.value ? (openBlock(), createElementBlock("div", _hoisted_4, [
            createVNode(_sfc_main$1, {
              modelValue: search.end,
              "onUpdate:modelValue": [
                _cache[5] || (_cache[5] = ($event) => search.end = $event),
                _cache[6] || (_cache[6] = ($event) => request())
              ],
              label: "End",
              outlined: "",
              dense: "",
              class: "full-width",
              clearable: true
            }, null, 8, ["modelValue"])
          ])) : createCommentVNode("", true),
          showFilters.value ? (openBlock(), createElementBlock("div", _hoisted_5, [
            createVNode(QInput, {
              modelValue: search.keyword,
              "onUpdate:modelValue": [
                _cache[7] || (_cache[7] = ($event) => search.keyword = $event),
                _cache[8] || (_cache[8] = ($event) => request())
              ],
              debounce: 800,
              placeholder: `Search ${_ctx.$t("invoice.namePlural").toLowerCase()}`,
              filled: "",
              dense: ""
            }, {
              prepend: withCtx(() => [
                createVNode(QIcon, { name: "search" })
              ]),
              _: 1
            }, 8, ["modelValue", "placeholder"])
          ])) : createCommentVNode("", true)
        ], 2),
        createVNode(QCard, null, {
          default: withCtx(() => [
            createBaseVNode("div", {
              ref_key: "topRef",
              ref: topRef
            }, null, 512),
            createVNode(QTable, {
              rows: data.value,
              columns,
              "row-key": "id",
              filter: search.keyword,
              loading: loading.value,
              pagination: serverPagination.value,
              "onUpdate:pagination": _cache[9] || (_cache[9] = ($event) => serverPagination.value = $event),
              onRequest: request,
              class: "no-shadow",
              "rows-per-page-options": unref(rowsPerPageOptions),
              grid: _ctx.$q.screen.xs
            }, {
              item: withCtx((props2) => [
                createVNode(QCard, { class: "col-xs-12" }, {
                  default: withCtx(() => [
                    createVNode(QCardSection, { class: "flex no-wrap" }, {
                      default: withCtx(() => [
                        createBaseVNode("div", null, [
                          createTextVNode("#" + toDisplayString(props2.row.display_id) + " | " + toDisplayString(props2.row.invoice_date) + " ", 1),
                          createBaseVNode("div", null, [
                            props2.row.order ? (openBlock(), createBlock(_component_router_link, {
                              key: 0,
                              to: { name: "order-edit", params: { id: props2.row.order.id } },
                              class: "link"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("order.name")) + " #" + toDisplayString(props2.row.order.display_id), 1)
                              ]),
                              _: 2
                            }, 1032, ["to"])) : createCommentVNode("", true),
                            createTextVNode(" | "),
                            props2.row.team ? (openBlock(), createBlock(_component_router_link, {
                              key: 1,
                              to: { name: "team-dashboard", params: { id: props2.row.team_id } },
                              class: "link"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(props2.row.team.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["to"])) : createCommentVNode("", true)
                          ]),
                          props2.row.status === "PAID" ? (openBlock(), createBlock(_sfc_main$2, {
                            key: 0,
                            status: props2.row.status,
                            small: ""
                          }, null, 8, ["status"])) : createCommentVNode("", true),
                          props2.row.status === "PAID" && props2.row.paid_date ? (openBlock(), createElementBlock("span", _hoisted_6, toDisplayString(unref(dbDateDisplay)(props2.row.paid_date)), 1)) : createCommentVNode("", true),
                          props2.row.status === "AUTHORISED" ? (openBlock(), createBlock(_sfc_main$2, {
                            key: 2,
                            status: "Awaiting Payment",
                            "text-only": true
                          })) : createCommentVNode("", true),
                          props2.row.owing > 0 ? (openBlock(), createElementBlock("div", _hoisted_7, "Owing: " + toDisplayString(unref(currencyFormat)(props2.row.owing)), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode(QSpace),
                        createBaseVNode("div", _hoisted_8, [
                          createBaseVNode("div", _hoisted_9, toDisplayString(unref(currencyFormat)(props2.row.grand_total_price)), 1),
                          createVNode(QBtn, {
                            flat: "",
                            onClick: ($event) => unref(openURL)(`/invoice/print/${props2.row.id} `),
                            icon: "picture_as_pdf",
                            title: "Print Invoice",
                            round: ""
                          }, null, 8, ["onClick"])
                        ])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ]),
              "body-cell-display_id": withCtx((props2) => [
                createVNode(QTd, { props: props2 }, {
                  default: withCtx(() => [
                    createTextVNode(" #" + toDisplayString(props2.row.display_id), 1)
                  ]),
                  _: 2
                }, 1032, ["props"])
              ]),
              "body-cell-user_id": withCtx((props2) => [
                createVNode(QTd, { props: props2 }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$3, {
                      user: props2.row.user,
                      class: "q-mr-sm"
                    }, null, 8, ["user"]),
                    createTextVNode(" " + toDisplayString(props2.row.user.fullname), 1)
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
              "body-cell-owing": withCtx((props2) => [
                createVNode(QTd, { props: props2 }, {
                  default: withCtx(() => [
                    createBaseVNode("span", {
                      class: normalizeClass({ "text-red": props2.row.owing > 0 })
                    }, toDisplayString(unref(currencyFormat)(props2.row.owing)), 3)
                  ]),
                  _: 2
                }, 1032, ["props"])
              ]),
              "body-cell-team_id": withCtx((props2) => [
                createVNode(QTd, { props: props2 }, {
                  default: withCtx(() => [
                    props2.row.team ? (openBlock(), createBlock(_component_router_link, {
                      key: 0,
                      to: { name: "team-dashboard", params: { id: props2.row.team_id } },
                      class: "link"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props2.row.team.name), 1)
                      ]),
                      _: 2
                    }, 1032, ["to"])) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1032, ["props"])
              ]),
              "body-cell-order_id": withCtx((props2) => [
                createVNode(QTd, { props: props2 }, {
                  default: withCtx(() => [
                    props2.row.order ? (openBlock(), createBlock(_component_router_link, {
                      key: 0,
                      to: { name: "order-edit", params: { id: props2.row.order.id } },
                      class: "link"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("order.name")) + " #" + toDisplayString(props2.row.order.display_id), 1)
                      ]),
                      _: 2
                    }, 1032, ["to"])) : createCommentVNode("", true),
                    props2.row.giftvoucher ? (openBlock(), createElementBlock("a", {
                      key: 1,
                      class: "link",
                      onClick: ($event) => unref(openURL)(`/ api / public / giftvoucher / pdf / ${props2.row.giftvoucher.id} `)
                    }, "Gift Voucher", 8, _hoisted_10)) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1032, ["props"])
              ]),
              "body-cell-status": withCtx((props2) => [
                createVNode(QTd, { props: props2 }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_11, [
                      createBaseVNode("div", null, [
                        props2.row.status !== "AUTHORISED" ? (openBlock(), createBlock(_sfc_main$2, {
                          key: 0,
                          status: props2.row.status
                        }, null, 8, ["status"])) : createCommentVNode("", true),
                        props2.row.status === "AUTHORISED" ? (openBlock(), createBlock(_sfc_main$2, {
                          key: 1,
                          status: "Awaiting Payment"
                        })) : createCommentVNode("", true),
                        props2.row.status === "PAID" && props2.row.paid_date ? (openBlock(), createElementBlock("span", _hoisted_12, toDisplayString(unref(dbDateDisplay)(props2.row.paid_date)), 1)) : createCommentVNode("", true)
                      ]),
                      props2.row.meta.refunds > 0 ? (openBlock(), createElementBlock("div", _hoisted_13, [
                        createVNode(QIcon, {
                          name: "sync",
                          color: "negative",
                          size: "22px"
                        })
                      ])) : createCommentVNode("", true)
                    ])
                  ]),
                  _: 2
                }, 1032, ["props"])
              ]),
              "body-cell-actions": withCtx((props2) => [
                createVNode(QTd, { props: props2 }, {
                  default: withCtx(() => [
                    createVNode(QBtn, {
                      flat: "",
                      onClick: ($event) => unref(openURL)(`/invoice/print/${props2.row.id} `),
                      icon: "picture_as_pdf",
                      title: "Print Invoice",
                      round: ""
                    }, null, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["props"])
              ]),
              _: 1
            }, 8, ["rows", "filter", "loading", "pagination", "rows-per-page-options", "grid"])
          ]),
          _: 1
        })
      ], 64);
    };
  }
});
export { _sfc_main as _ };
