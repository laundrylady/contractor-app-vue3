import { A as defineComponent, r as ref, g as computed, o as onMounted, J as resolveComponent, m as openBlock, K as createBlock, L as withCtx, l as createVNode, O as QIcon, q as createBaseVNode, ak as QToggle, n as createElementBlock, be as renderList, U as unref, F as Fragment, aI as toDisplayString, y as createCommentVNode, S as QBtn, R as createTextVNode } from "./index.743d7681.js";
import { Q as QBreadcrumbsEl, a as QBreadcrumbs } from "./QBreadcrumbs.deae7ed4.js";
import { Q as QBadge } from "./QBadge.5cb6bd65.js";
import { a as QItem, Q as QItemSection } from "./QItemSection.d4f7e02a.js";
import { Q as QList } from "./QList.9ba32f52.js";
import { Q as QMarkupTable } from "./QMarkupTable.6eacd957.js";
import { Q as QPage } from "./QPage.fb804c54.js";
import { u as useQuasar } from "./use-quasar.61edf80b.js";
import { a as api } from "./axios.67dbaacc.js";
import { u as useMixinDebug } from "./debug.805a8aef.js";
import { a as currencyFormat, c as confirmDelete, b as doNotify, o as dbDateDisplay } from "./help.dfac819e.js";
const _hoisted_1 = { class: "row q-col-gutter-md" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "col-xs-9" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "text-h4 q-mb-md" }, " Commissions Owing ")
], -1);
const _hoisted_3 = { class: "col-xs-3 text-right" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("thead", null, [
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
const _hoisted_5 = ["onClick"];
const _hoisted_6 = { key: 0 };
const _hoisted_7 = { class: "bg-grey-2 text-bold" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("td", null, null, -1);
const _hoisted_9 = {
  key: 1,
  class: "q-mt-md text-right"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CommissionsOwing",
  setup(__props) {
    const data = ref();
    const $q = useQuasar();
    const owingOnly = ref(true);
    const getCommissionsOwing = () => {
      $q.loading.show({ message: "Fetching commission data..." });
      api.post("/user/contractor/reporting/commissionsowing").then((response) => {
        data.value = response.data;
        $q.loading.hide();
      }).catch((error) => {
        useMixinDebug(error);
        $q.loading.hide();
      });
    };
    const commissionsData = computed(() => {
      if (data.value && data.value) {
        if (owingOnly.value) {
          return data.value.data.filter((o) => o.commission.total > 0);
        }
        return data.value.data;
      }
      return [];
    });
    const showOrders = (o) => {
      o.showOrders = !o.showOrders;
    };
    const queueCommissionOwing = () => {
      confirmDelete("This will queue the Xero commissions batch push").onOk(() => {
        api.post("/user/contractor/xero/queuecommissionbatch").then(() => {
          doNotify("positive", "Commission batch queued for Xero processing");
        }).catch((error) => {
          useMixinDebug(error);
        });
      });
    };
    onMounted(() => {
      getCommissionsOwing();
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
              createVNode(QBreadcrumbsEl, { label: "Commissions Owing" })
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_1, [
            _hoisted_2,
            createBaseVNode("div", _hoisted_3, [
              createVNode(QToggle, {
                modelValue: owingOnly.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => owingOnly.value = $event),
                label: "Only show owing"
              }, null, 8, ["modelValue"])
            ])
          ]),
          data.value ? (openBlock(), createBlock(QMarkupTable, { key: 0 }, {
            default: withCtx(() => [
              _hoisted_4,
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
                      ], 8, _hoisted_5),
                      d.showOrders ? (openBlock(), createElementBlock("div", _hoisted_6, [
                        createVNode(QList, { dense: "" }, {
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
                                        createTextVNode(" - " + toDisplayString(o.team) + " - " + toDisplayString(unref(dbDateDisplay)(o.paid_date)) + " - " + toDisplayString(unref(currencyFormat)(o.commissionTotal)), 1)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128)),
                            d.commission.penalty > 0 ? (openBlock(), createBlock(QItem, {
                              key: 1,
                              class: "text-negative"
                            }, {
                              default: withCtx(() => [
                                createVNode(QItemSection, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Current Penalty: " + toDisplayString(unref(currencyFormat)(d.commission.penalty)), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)
                      ])) : createCommentVNode("", true)
                    ]),
                    createBaseVNode("td", null, toDisplayString(unref(currencyFormat)(d.commission.total)), 1),
                    createBaseVNode("td", null, toDisplayString(unref(currencyFormat)(d.commission.totalGst)), 1),
                    createBaseVNode("td", null, toDisplayString(unref(currencyFormat)(d.commission.grandTotal)), 1)
                  ]);
                }), 128))
              ]),
              createBaseVNode("tfoot", null, [
                createBaseVNode("tr", _hoisted_7, [
                  _hoisted_8,
                  createBaseVNode("td", null, toDisplayString(unref(currencyFormat)(data.value.total.total)), 1),
                  createBaseVNode("td", null, toDisplayString(unref(currencyFormat)(data.value.total.gst)), 1),
                  createBaseVNode("td", null, toDisplayString(unref(currencyFormat)(data.value.total.grand)), 1)
                ])
              ])
            ]),
            _: 1
          })) : createCommentVNode("", true),
          unref(commissionsData).length ? (openBlock(), createElementBlock("div", _hoisted_9, [
            createVNode(QBtn, {
              onClick: _cache[1] || (_cache[1] = ($event) => queueCommissionOwing()),
              label: "Queue Xero push",
              color: "primary"
            })
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
export { _sfc_main as default };
