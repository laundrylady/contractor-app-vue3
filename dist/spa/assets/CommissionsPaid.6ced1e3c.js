import { A as defineComponent, r as ref, B as reactive, g as computed, o as onMounted, J as resolveComponent, m as openBlock, K as createBlock, L as withCtx, l as createVNode, O as QIcon, M as QCardSection, q as createBaseVNode, ak as QToggle, S as QBtn, Q as QCard, n as createElementBlock, be as renderList, U as unref, F as Fragment, aI as toDisplayString, y as createCommentVNode, R as createTextVNode } from "./index.2706d944.js";
import { Q as QBreadcrumbsEl, a as QBreadcrumbs } from "./QBreadcrumbs.0092657a.js";
import { Q as QBadge } from "./QBadge.599d0aed.js";
import { a as QItem, Q as QItemSection } from "./QItemSection.27d6c59c.js";
import { Q as QList } from "./QList.5b3facef.js";
import { Q as QMarkupTable } from "./QMarkupTable.d71103c4.js";
import { Q as QPage } from "./QPage.8755609c.js";
import { m as moment, a as api } from "./axios.8e14cdcb.js";
import { u as useQuasar } from "./use-quasar.4f7e3ed2.js";
import { _ as _sfc_main$1 } from "./DateField.887276a0.js";
import { u as useMixinDebug } from "./debug.805a8aef.js";
import { a as currencyFormat } from "./help.04414549.js";
import "./use-cache.b0833c75.js";
import "./format.cebc1930.js";
import "./ClosePopup.331a5eb4.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 q-mb-md" }, " Commissions Paid", -1);
const _hoisted_2 = { class: "row q-col-gutter-md" };
const _hoisted_3 = { class: "col-xs-12 col-sm-5" };
const _hoisted_4 = { class: "col-xs-12 col-sm-5" };
const _hoisted_5 = { class: "col-xs-12 col-sm-2" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("tr", null, [
    /* @__PURE__ */ createBaseVNode("th", { class: "text-left" }, "Contractor"),
    /* @__PURE__ */ createBaseVNode("th", {
      style: { "width": "100px" },
      class: "text-left"
    }, "Total"),
    /* @__PURE__ */ createBaseVNode("th", {
      style: { "width": "100px" },
      class: "text-left"
    }, "GST"),
    /* @__PURE__ */ createBaseVNode("th", {
      style: { "width": "100px" },
      class: "text-left"
    }, "Grand")
  ])
], -1);
const _hoisted_7 = ["onClick"];
const _hoisted_8 = { class: "bg-grey-2 text-bold" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("td", null, null, -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CommissionsPaid",
  setup(__props) {
    const data = ref();
    const $q = useQuasar();
    const paidOnly = ref(true);
    const search = reactive({ start: moment().startOf("isoWeek").format("DD/MM/YYYY"), end: moment().endOf("isoWeek").format("DD/MM/YYYY") });
    const getCommissionsPaid = () => {
      $q.loading.show({ message: "Fetching commission data..." });
      api.post("/user/contractor/reporting/commissionspaid", search).then((response) => {
        data.value = response.data;
        $q.loading.hide();
      }).catch((error) => {
        useMixinDebug(error);
        $q.loading.hide();
      });
    };
    const showOrders = (o) => {
      o.showOrders = !o.showOrders;
    };
    const commissionsData = computed(() => {
      if (data.value && data.value) {
        if (paidOnly.value) {
          return data.value.data.filter((o) => o.commission.total > 0);
        }
        return data.value.data;
      }
      return [];
    });
    onMounted(() => {
      getCommissionsPaid();
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createBlock(QPage, { padding: "" }, {
        default: withCtx(() => [
          createVNode(QBreadcrumbs, { class: "q-mb-md q-mt-md" }, {
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
                label: "Reporting",
                to: { name: "reporting" }
              }),
              createVNode(QBreadcrumbsEl, { label: "Commissions Paid" })
            ]),
            _: 1
          }),
          createVNode(QCard, { class: "bg-seamless q-mb-lg" }, {
            default: withCtx(() => [
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  _hoisted_1,
                  createBaseVNode("div", _hoisted_2, [
                    createBaseVNode("div", _hoisted_3, [
                      createVNode(_sfc_main$1, {
                        modelValue: search.start,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => search.start = $event),
                        label: "Start",
                        dense: true,
                        outlined: true
                      }, null, 8, ["modelValue"])
                    ]),
                    createBaseVNode("div", _hoisted_4, [
                      createVNode(_sfc_main$1, {
                        modelValue: search.end,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => search.end = $event),
                        label: "End",
                        dense: true,
                        outlined: true
                      }, null, 8, ["modelValue"])
                    ]),
                    createBaseVNode("div", _hoisted_5, [
                      createVNode(QToggle, {
                        modelValue: paidOnly.value,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => paidOnly.value = $event),
                        label: "Only paid",
                        class: "q-mr-md"
                      }, null, 8, ["modelValue"]),
                      createVNode(QBtn, {
                        onClick: _cache[3] || (_cache[3] = ($event) => getCommissionsPaid()),
                        label: "Submit",
                        color: "primary"
                      })
                    ])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          data.value ? (openBlock(), createBlock(QMarkupTable, { key: 0 }, {
            default: withCtx(() => [
              _hoisted_6,
              createBaseVNode("tbody", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(commissionsData), (d) => {
                  return openBlock(), createElementBlock("tr", {
                    key: d.id
                  }, [
                    createBaseVNode("td", null, [
                      createBaseVNode("a", {
                        class: "link text-h6",
                        onClick: ($event) => showOrders(d)
                      }, [
                        createTextVNode(toDisplayString(d.fullname) + " ", 1),
                        d.contractor_gst_registered ? (openBlock(), createBlock(QBadge, {
                          key: 0,
                          label: "GST",
                          color: "secondary"
                        })) : createCommentVNode("", true)
                      ], 8, _hoisted_7),
                      d.showOrders ? (openBlock(), createBlock(QList, {
                        key: 0,
                        dense: ""
                      }, {
                        default: withCtx(() => [
                          !d.commission.orders.length ? (openBlock(), createBlock(QItem, { key: 0 }, {
                            default: withCtx(() => [
                              createVNode(QItemSection, null, {
                                default: withCtx(() => [
                                  createTextVNode("No orders found")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          (openBlock(true), createElementBlock(Fragment, null, renderList(d.commission.orders, (o) => {
                            return openBlock(), createBlock(QItem, {
                              key: o.id
                            }, {
                              default: withCtx(() => [
                                createVNode(QItemSection, null, {
                                  default: withCtx(() => [
                                    createBaseVNode("div", null, [
                                      createVNode(_component_router_link, {
                                        to: { name: "order-edit", params: { id: o.id } },
                                        class: "link",
                                        target: "_blank"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("#" + toDisplayString(o.display_id), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["to"]),
                                      createTextVNode(" - " + toDisplayString(o.team.name) + " - " + toDisplayString(o.scheduled_pickup_date) + " - " + toDisplayString(unref(currencyFormat)(o.commission_paid_amount)) + " / " + toDisplayString(unref(currencyFormat)(o.commission_paid_amount_gst)), 1)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024)) : createCommentVNode("", true)
                    ]),
                    createBaseVNode("td", null, toDisplayString(unref(currencyFormat)(d.commission.total)), 1),
                    createBaseVNode("td", null, toDisplayString(unref(currencyFormat)(d.commission.totalGst)), 1),
                    createBaseVNode("td", null, toDisplayString(unref(currencyFormat)(d.commission.grandTotal)), 1)
                  ]);
                }), 128))
              ]),
              createBaseVNode("tfoot", null, [
                createBaseVNode("tr", _hoisted_8, [
                  _hoisted_9,
                  createBaseVNode("td", null, toDisplayString(unref(currencyFormat)(data.value.total.total)), 1),
                  createBaseVNode("td", null, toDisplayString(unref(currencyFormat)(data.value.total.gst)), 1),
                  createBaseVNode("td", null, toDisplayString(unref(currencyFormat)(data.value.total.grand)), 1)
                ])
              ])
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
export { _sfc_main as default };
