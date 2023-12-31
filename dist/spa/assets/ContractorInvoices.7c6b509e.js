import { B as defineComponent, r as ref, m as openBlock, a9 as createBlock, K as withCtx, l as createVNode, N as QIcon, R as unref, q as createBaseVNode, H as withDirectives, P as QBtn, M as QInput, C as reactive, o as onMounted, by as resolveComponent, n as createElementBlock, Q as QCard, L as QCardSection, ab as createTextVNode, ac as toDisplayString, z as createCommentVNode, F as Fragment } from "./index.109aab81.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.6d497293.js";
import { Q as QRouteTab } from "./QRouteTab.070cb0a5.js";
import { Q as QTabs } from "./QTabs.f5768184.js";
import { Q as QSelect } from "./QSelect.2ac7a0e8.js";
import { Q as QSpace } from "./QSpace.c065e160.js";
import { Q as QTd } from "./QTd.b85e2a2f.js";
import { Q as QTable } from "./QTable.7e388159.js";
import { o as openURL } from "./open-url.9ad14281.js";
import { m as moment, a as api } from "./axios.122a6dc1.js";
import { _ as _sfc_main$3 } from "./StatusTag.f64fcc8c.js";
import { _ as _sfc_main$4 } from "./UserAvatar.0c195cde.js";
import { Q as QDate } from "./QDate.0fb6df98.js";
import { C as ClosePopup } from "./ClosePopup.9895b2d3.js";
import { Q as QPopupProxy } from "./QPopupProxy.300e49f9.js";
import { u as useQuasar } from "./use-quasar.861d00bf.js";
import { u as useMixinDebug } from "./debug.b9d7424b.js";
import { x as getRowsPerPage, y as rowsPerPageOptions, k as currencyFormat, z as setRowsPerPage } from "./help.083b28ce.js";
import { u as useI18n } from "./vue-i18n.runtime.esm-bundler.ca88c4c6.js";
import "./QResizeObserver.ffc5990c.js";
import "./rtl.b51694b1.js";
import "./QItemSection.3d6683d4.js";
import "./QItemLabel.6de4410d.js";
import "./QMenu.48463e4e.js";
import "./selection.678cafa9.js";
import "./format.3e32b8d9.js";
import "./QList.69f15000.js";
import "./QMarkupTable.b44db94c.js";
import "./QLinearProgress.ea084d2b.js";
import "./use-fullscreen.11fc1fcf.js";
import "./QBadge.2d4856a0.js";
import "./QImg.dc04bba7.js";
import "./use-ratio.035ecf32.js";
import "./use-cache.b0833c75.js";
const _hoisted_1$2 = { class: "row items-center justify-end" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
                      createBaseVNode("div", _hoisted_1$2, [
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
const _hoisted_1$1 = { class: "row q-col-gutter-sm q-mt-sm q-mb-sm q-ml-sm q-mr-sm" };
const _hoisted_2$1 = { class: "col-xs-6 col-lg-2" };
const _hoisted_3 = { class: "col-xs-6 col-lg-2" };
const _hoisted_4 = { class: "col-xs-12 col-lg-3" };
const _hoisted_5 = { class: "col-xs-10 col-lg-3" };
const _hoisted_6 = { class: "col-xs-2 col-lg-1" };
const _hoisted_7 = { key: 1 };
const _hoisted_8 = { class: "text-bold text-h6" };
const _hoisted_9 = { key: 0 };
const _hoisted_10 = ["onClick"];
const _hoisted_11 = { class: "flex items-center no-wrap" };
const _hoisted_12 = {
  key: 0,
  class: "q-ml-sm",
  title: "Has Refunds"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "InvoiceManagement",
  setup(__props) {
    const i8n = useI18n();
    const data = ref();
    const loading = ref(false);
    const topRef = ref(null);
    const search = reactive({ keyword: null, start: null, end: null, status: null });
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
      api.post(`/public/invoice/datatable/${page}`, {
        sortBy,
        sort_order: descending ? "desc" : "asc",
        skip: page,
        rowsPerPage,
        keyword: search.keyword,
        start: search.start,
        end: search.end,
        status: search.status
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
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("div", _hoisted_2$1, [
            createVNode(_sfc_main$2, {
              modelValue: search.start,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => search.start = $event),
              label: "Start",
              outlined: "",
              dense: "",
              class: "full-width",
              clearable: true
            }, null, 8, ["modelValue"])
          ]),
          createBaseVNode("div", _hoisted_3, [
            createVNode(_sfc_main$2, {
              modelValue: search.end,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => search.end = $event),
              label: "End",
              outlined: "",
              dense: "",
              class: "full-width",
              clearable: true
            }, null, 8, ["modelValue"])
          ]),
          createBaseVNode("div", _hoisted_4, [
            createVNode(QSelect, {
              modelValue: search.status,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => search.status = $event),
              outlined: "",
              dense: "",
              options: [{ value: "DRAFT", label: "Draft" }, { value: "AUTHORISED", label: "Awaiting Payment" }, { value: "PAID", label: "Paid" }],
              label: "Status",
              "emit-value": "",
              "map-options": "",
              clearable: ""
            }, null, 8, ["modelValue"])
          ]),
          createBaseVNode("div", _hoisted_5, [
            createVNode(QInput, {
              modelValue: search.keyword,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => search.keyword = $event),
              debounce: 500,
              placeholder: `Search ${_ctx.$t("invoice.namePlural").toLowerCase()}`,
              filled: "",
              dense: ""
            }, {
              prepend: withCtx(() => [
                createVNode(QIcon, { name: "search" })
              ]),
              _: 1
            }, 8, ["modelValue", "placeholder"])
          ]),
          createBaseVNode("div", _hoisted_6, [
            createVNode(QBtn, {
              onClick: _cache[4] || (_cache[4] = ($event) => request()),
              icon: "search",
              color: "primary",
              class: "q-ml-sm",
              round: ""
            })
          ])
        ]),
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
              "onUpdate:pagination": _cache[5] || (_cache[5] = ($event) => serverPagination.value = $event),
              onRequest: request,
              class: "no-shadow",
              "rows-per-page-options": unref(rowsPerPageOptions),
              grid: _ctx.$q.screen.xs
            }, {
              item: withCtx((props) => [
                createVNode(QCard, { class: "col-xs-12" }, {
                  default: withCtx(() => [
                    createVNode(QCardSection, { class: "flex" }, {
                      default: withCtx(() => [
                        createBaseVNode("div", null, [
                          createTextVNode("#" + toDisplayString(props.row.display_id) + " | ", 1),
                          props.row.order ? (openBlock(), createBlock(_component_router_link, {
                            key: 0,
                            to: { name: "order-edit", params: { id: props.row.order.id } },
                            class: "link"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("order.name")) + " #" + toDisplayString(props.row.order.display_id), 1)
                            ]),
                            _: 2
                          }, 1032, ["to"])) : createCommentVNode("", true),
                          props.row.team ? (openBlock(), createElementBlock("div", _hoisted_7, toDisplayString(props.row.team.name), 1)) : createCommentVNode("", true),
                          props.row.status !== "AUTHORISED" ? (openBlock(), createBlock(_sfc_main$3, {
                            key: 2,
                            status: props.row.status,
                            "text-only": true
                          }, null, 8, ["status"])) : createCommentVNode("", true),
                          props.row.status === "AUTHORISED" ? (openBlock(), createBlock(_sfc_main$3, {
                            key: 3,
                            status: "Awaiting Payment",
                            "text-only": true
                          })) : createCommentVNode("", true),
                          createVNode(QBtn, {
                            flat: "",
                            onClick: ($event) => unref(openURL)(`/api/public/invoice/pdf/${props.row.id} `),
                            icon: "print",
                            title: "Print Invoice",
                            round: "",
                            size: "sm"
                          }, null, 8, ["onClick"])
                        ]),
                        createVNode(QSpace),
                        createBaseVNode("div", _hoisted_8, toDisplayString(unref(currencyFormat)(props.row.grand_total_price)), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ]),
              "body-cell-display_id": withCtx((props) => [
                createVNode(QTd, { props }, {
                  default: withCtx(() => [
                    createTextVNode(" #" + toDisplayString(props.row.display_id), 1)
                  ]),
                  _: 2
                }, 1032, ["props"])
              ]),
              "body-cell-user_id": withCtx((props) => [
                createVNode(QTd, { props }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$4, {
                      user: props.row.user,
                      class: "q-mr-sm"
                    }, null, 8, ["user"]),
                    createTextVNode(" " + toDisplayString(props.row.user.fullname), 1)
                  ]),
                  _: 2
                }, 1032, ["props"])
              ]),
              "body-cell-total_price": withCtx((props) => [
                createVNode(QTd, { props }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(currencyFormat)(props.row.grand_total_price)), 1)
                  ]),
                  _: 2
                }, 1032, ["props"])
              ]),
              "body-cell-team_id": withCtx((props) => [
                createVNode(QTd, { props }, {
                  default: withCtx(() => [
                    props.row.team ? (openBlock(), createElementBlock("span", _hoisted_9, toDisplayString(props.row.team.name), 1)) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1032, ["props"])
              ]),
              "body-cell-order_id": withCtx((props) => [
                createVNode(QTd, { props }, {
                  default: withCtx(() => [
                    props.row.order ? (openBlock(), createBlock(_component_router_link, {
                      key: 0,
                      to: { name: "order-edit", params: { id: props.row.order.id } },
                      class: "link"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("order.name")) + " #" + toDisplayString(props.row.order.display_id), 1)
                      ]),
                      _: 2
                    }, 1032, ["to"])) : createCommentVNode("", true),
                    props.row.giftvoucher ? (openBlock(), createElementBlock("a", {
                      key: 1,
                      class: "link",
                      onClick: ($event) => unref(openURL)(`/api/public/giftvoucher/pdf/${props.row.giftvoucher.id}`)
                    }, "Gift Voucher", 8, _hoisted_10)) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1032, ["props"])
              ]),
              "body-cell-status": withCtx((props) => [
                createVNode(QTd, { props }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_11, [
                      createBaseVNode("div", null, [
                        props.row.status !== "AUTHORISED" ? (openBlock(), createBlock(_sfc_main$3, {
                          key: 0,
                          status: props.row.status
                        }, null, 8, ["status"])) : createCommentVNode("", true),
                        props.row.status === "AUTHORISED" ? (openBlock(), createBlock(_sfc_main$3, {
                          key: 1,
                          status: "Awaiting Payment"
                        })) : createCommentVNode("", true)
                      ]),
                      props.row.meta.refunds > 0 ? (openBlock(), createElementBlock("div", _hoisted_12, [
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
              "body-cell-actions": withCtx((props) => [
                createVNode(QTd, { props }, {
                  default: withCtx(() => [
                    createVNode(QBtn, {
                      flat: "",
                      onClick: ($event) => unref(openURL)(`/api/public/invoice/pdf/${props.row.id} `),
                      icon: "print",
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
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContractorInvoices",
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
            createVNode(QTabs, { align: "left" }, {
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
