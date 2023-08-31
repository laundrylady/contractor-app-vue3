import { A as defineComponent, r as ref, o as onMounted, l as openBlock, m as createElementBlock, k as createVNode, K as withCtx, p as createBaseVNode, F as Fragment, bc as renderList, R as unref, aH as toDisplayString, s as normalizeClass, a9 as useRoute, w as watch, y as createCommentVNode, Q as QCard, aG as createTextVNode, N as QIcon, L as QCardSection, J as createBlock } from "./index.09db86c6.js";
import { a as QBreadcrumbs, Q as QBreadcrumbsEl } from "./QBreadcrumbs.6904a9f2.js";
import { Q as QCircularProgress } from "./QCircularProgress.c2d1cb10.js";
import { a as api } from "./axios.a630860f.js";
import { Q as QMarkupTable } from "./QMarkupTable.319b04dd.js";
import { u as useMixinDebug } from "./debug.ffa51329.js";
import { i as hourOptions, j as dayOptions, g as currencyFormat } from "./help.43e74e3a.js";
import "./format.3e32b8d9.js";
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("th", null, null, -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UserRosterView",
  setup(__props) {
    const roster = ref();
    const isActive = (h, d) => {
      if (!roster.value) {
        return false;
      }
      return roster.value.find((o) => {
        if (o.start_time && o.end_time) {
          return o.day === d && h >= o.start_time && h <= o.end_time;
        }
        return false;
      });
    };
    onMounted(() => {
      api.get("/public/userroster/index").then((response) => {
        roster.value = response.data;
      }).catch((error) => {
        useMixinDebug(error);
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(QMarkupTable, {
          dense: "",
          separator: "cell",
          flat: ""
        }, {
          default: withCtx(() => [
            createBaseVNode("thead", null, [
              createBaseVNode("tr", null, [
                _hoisted_1$1,
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(hourOptions), (h, hindex) => {
                  return openBlock(), createElementBlock("th", { key: hindex }, toDisplayString(h.label), 1);
                }), 128))
              ])
            ]),
            createBaseVNode("tbody", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(dayOptions), (d, dindex) => {
                return openBlock(), createElementBlock("tr", { key: dindex }, [
                  createBaseVNode("td", null, toDisplayString(d.label.slice(0, 1)), 1),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(hourOptions), (h, hindex) => {
                    return openBlock(), createElementBlock("td", {
                      key: hindex,
                      class: normalizeClass({ "bg-positive": isActive(h.value, d.value) })
                    }, null, 2);
                  }), 128))
                ]);
              }), 128))
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
});
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { class: "row q-col-gutter-md q-mb-lg" };
const _hoisted_4 = { class: "col-xs-12 col-sm-6" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Weekly Target", -1);
const _hoisted_6 = {
  class: "text-center",
  style: { "height": "65px" }
};
const _hoisted_7 = { class: "text-center q-mt-sm" };
const _hoisted_8 = { key: 0 };
const _hoisted_9 = { class: "col-xs-12 col-sm-6" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 q-mb-md" }, "Commissions", -1);
const _hoisted_11 = { class: "row q-col-gutter-md" };
const _hoisted_12 = { class: "col-xs-6" };
const _hoisted_13 = { class: "text-h6 text-center" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("div", { class: "text-center" }, "Owing", -1);
const _hoisted_15 = { class: "col-xs-6" };
const _hoisted_16 = { class: "text-h6 text-center" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("div", { class: "text-center" }, " Paid ", -1);
const _hoisted_18 = { class: "col-xs-12 col-sm-6" };
const _hoisted_19 = { class: "text-h6 q-mb-md" };
const _hoisted_20 = { class: "text-center" };
const _hoisted_21 = { class: "q-mt-sm" };
const _hoisted_22 = { class: "col-xs-12 col-sm-6" };
const _hoisted_23 = { class: "text-h6 q-mb-md" };
const _hoisted_24 = { class: "text-center" };
const _hoisted_25 = { class: "q-mt-sm" };
const _hoisted_26 = { class: "text-h6" };
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("We are generating your schedule from the roster below. If you need to permenantly make a change to your roster, "),
  /* @__PURE__ */ createBaseVNode("a", {
    href: "mailto:support@thelaundrylady.com.au",
    class: "link"
  }, "click here to let us know!")
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContractorDashboard",
  props: {
    model: null
  },
  setup(__props) {
    const route = useRoute();
    const dashboard = ref();
    const recurringOrders = ref();
    const getDashboard = () => {
      api.get("/public/user/contractor/dashboard").then((response) => {
        dashboard.value = response.data;
      }).catch((error) => {
        useMixinDebug(error);
      });
    };
    const getRecurringOrders = () => {
      api.get("/public/user/contractor/recurring").then((response) => {
        recurringOrders.value = response.data;
      }).catch((error) => {
        useMixinDebug(error);
      });
    };
    onMounted(() => {
      getDashboard();
      getRecurringOrders();
    });
    watch(() => route.params.id, (newVal) => {
      if (route.name === "contractor-dashboard") {
        if (newVal) {
          getDashboard();
          getRecurringOrders();
        }
      }
    });
    return (_ctx, _cache) => {
      return __props.model.id && dashboard.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
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
                to: { name: "orders" }
              })
            ]),
            _: 1
          })
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createVNode(QCard, {
              class: "bg-accent fit",
              style: { "height": "160px" }
            }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    _hoisted_5,
                    createBaseVNode("div", _hoisted_6, [
                      dashboard.value.weeklyOrders.percentage ? (openBlock(), createBlock(QCircularProgress, {
                        key: 0,
                        value: dashboard.value.weeklyOrders.percentage,
                        size: "64px",
                        color: "primary",
                        "track-color": "pink-1"
                      }, null, 8, ["value"])) : createCommentVNode("", true)
                    ]),
                    createBaseVNode("div", _hoisted_7, [
                      createTextVNode(toDisplayString(unref(currencyFormat)(dashboard.value.weeklyOrders.sum)) + " / " + toDisplayString(unref(currencyFormat)(__props.model.contractor_target)) + " ", 1),
                      dashboard.value.weeklyOrders.diff === 0 ? (openBlock(), createElementBlock("span", _hoisted_8, "~")) : createCommentVNode("", true),
                      dashboard.value.weeklyOrders.diff < 0 ? (openBlock(), createBlock(QIcon, {
                        key: 1,
                        name: "arrow_downward",
                        color: "negative"
                      })) : createCommentVNode("", true),
                      dashboard.value.weeklyOrders.diff > 0 ? (openBlock(), createBlock(QIcon, {
                        key: 2,
                        name: "arrow_upward",
                        color: "positive"
                      })) : createCommentVNode("", true),
                      createTextVNode(),
                      dashboard.value.weeklyOrders.diff !== 0 ? (openBlock(), createElementBlock("span", {
                        key: 3,
                        class: normalizeClass({ "text-positive": dashboard.value.weeklyOrders.diff > 0, "text-negative": dashboard.value.weeklyOrders.diff < 0 })
                      }, toDisplayString(dashboard.value.weeklyOrders.diff) + "%", 3)) : createCommentVNode("", true)
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_9, [
            createVNode(QCard, { class: "bg-secondary text-white fit" }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    _hoisted_10,
                    createBaseVNode("div", _hoisted_11, [
                      createBaseVNode("div", _hoisted_12, [
                        createBaseVNode("div", _hoisted_13, toDisplayString(unref(currencyFormat)(dashboard.value.totalCommissionsOwing.grandTotal)), 1),
                        _hoisted_14
                      ]),
                      createBaseVNode("div", _hoisted_15, [
                        createBaseVNode("div", _hoisted_16, toDisplayString(unref(currencyFormat)(dashboard.value.totalCommissionsPaid.grandTotal)), 1),
                        _hoisted_17
                      ])
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_18, [
            createVNode(QCard, { class: "fit" }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_19, toDisplayString(_ctx.$t("team.namePlural")) + " Rebooked", 1),
                    createBaseVNode("div", _hoisted_20, [
                      dashboard.value.retainedRebooked.rebookedPercentage ? (openBlock(), createBlock(QCircularProgress, {
                        key: 0,
                        value: parseFloat(dashboard.value.retainedRebooked.rebookedPercentage),
                        size: "64px",
                        color: "secondary",
                        "show-value": "",
                        "track-color": "grey-3"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(dashboard.value.retainedRebooked.rebooked), 1)
                        ]),
                        _: 1
                      }, 8, ["value"])) : createCommentVNode("", true),
                      createBaseVNode("div", _hoisted_21, "Rebooked (" + toDisplayString(dashboard.value.retainedRebooked.rebookedPercentage) + "%)", 1)
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_22, [
            createVNode(QCard, { class: "fit" }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_23, toDisplayString(_ctx.$t("team.namePlural")) + " Retained", 1),
                    createBaseVNode("div", _hoisted_24, [
                      dashboard.value.retainedRebooked.retainedPercentage ? (openBlock(), createBlock(QCircularProgress, {
                        key: 0,
                        value: parseFloat(dashboard.value.retainedRebooked.retainedPercentage),
                        size: "64px",
                        color: "secondary",
                        "show-value": "",
                        "track-color": "grey-3"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(dashboard.value.retainedRebooked.retained), 1)
                        ]),
                        _: 1
                      }, 8, ["value"])) : createCommentVNode("", true),
                      createBaseVNode("div", _hoisted_25, " Retained (" + toDisplayString(dashboard.value.retainedRebooked.retainedPercentage) + "%) ", 1)
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])
        ]),
        createBaseVNode("div", _hoisted_26, "Current " + toDisplayString(_ctx.$t("schedule.name")), 1),
        _hoisted_27,
        createVNode(QCard, null, {
          default: withCtx(() => [
            createVNode(_sfc_main$1, { rosterUser: __props.model }, null, 8, ["rosterUser"])
          ]),
          _: 1
        })
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
