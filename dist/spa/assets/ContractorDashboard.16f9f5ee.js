import { B as defineComponent, r as ref, o as onMounted, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, q as createBaseVNode, F as Fragment, aa as renderList, R as unref, ac as toDisplayString, t as normalizeClass, aj as useRoute, i as inject, w as watch, z as createCommentVNode, Q as QCard, N as QIcon, L as QCardSection, P as QBtn, ae as QDialog, ab as createTextVNode, H as withDirectives, M as QInput, ad as QCardActions, a9 as createBlock } from "./index.42122499.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.ef95a6dc.js";
import { Q as QSpace } from "./QSpace.32c1692b.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.0b4e5fbf.js";
import { Q as QToolbar } from "./QToolbar.f27b95de.js";
import { Q as QCircularProgress } from "./QCircularProgress.191f5e47.js";
import { a as QItem, Q as QItemSection } from "./QItemSection.e283e48f.js";
import { Q as QList } from "./QList.32fbfd22.js";
import { C as ClosePopup } from "./ClosePopup.3b125499.js";
import { a as api } from "./axios.610c3e32.js";
import { Q as QMarkupTable } from "./QMarkupTable.3501db00.js";
import { u as useMixinDebug } from "./debug.b9d7424b.js";
import { l as hourOptions, m as dayOptions, k as currencyFormat } from "./help.debef161.js";
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
const _hoisted_5 = { class: "flex items-center" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Weekly Target", -1);
const _hoisted_7 = {
  class: "text-center",
  style: { "height": "65px" }
};
const _hoisted_8 = { class: "text-center q-mt-sm" };
const _hoisted_9 = { key: 0 };
const _hoisted_10 = { class: "col-xs-12 col-sm-6" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 q-mb-md" }, "Commissions", -1);
const _hoisted_12 = { class: "row q-col-gutter-md" };
const _hoisted_13 = { class: "col-xs-6" };
const _hoisted_14 = { class: "text-h6 text-center" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("div", { class: "text-center" }, "Owing", -1);
const _hoisted_16 = { class: "col-xs-6" };
const _hoisted_17 = { class: "text-h6 text-center" };
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("div", { class: "text-center" }, " Paid ", -1);
const _hoisted_19 = { class: "col-xs-12 col-sm-6" };
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 q-mb-md" }, "Current Capacity", -1);
const _hoisted_21 = { class: "row q-col-gutter-md" };
const _hoisted_22 = { class: "text-center" };
const _hoisted_23 = { class: "q-mb-sm" };
const _hoisted_24 = { class: "col-xs-12 col-sm-6" };
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 q-mb-md" }, "Invoicing", -1);
const _hoisted_26 = { class: "row q-col-gutter-md" };
const _hoisted_27 = { class: "col-xs-6" };
const _hoisted_28 = { class: "text-h6 text-center" };
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("div", { class: "text-center" }, "Invoiced", -1);
const _hoisted_30 = { class: "col-xs-6" };
const _hoisted_31 = { class: "text-h6 text-center" };
const _hoisted_32 = { class: "text-center" };
const _hoisted_33 = { key: 0 };
const _hoisted_34 = { class: "text-negative" };
const _hoisted_35 = { class: "col-xs-12 col-sm-6" };
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 q-mb-md" }, "Bookings", -1);
const _hoisted_37 = { class: "row q-col-gutter-md" };
const _hoisted_38 = { class: "col-xs-6" };
const _hoisted_39 = { class: "text-h6 text-center" };
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("div", { class: "text-center" }, "Total", -1);
const _hoisted_41 = { class: "col-xs-6" };
const _hoisted_42 = { class: "text-h6 text-center" };
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("div", { class: "text-center" }, " Recurring ", -1);
const _hoisted_44 = { class: "col-xs-12 col-sm-6" };
const _hoisted_45 = { class: "text-h6 q-mb-md" };
const _hoisted_46 = { class: "text-center" };
const _hoisted_47 = { class: "q-mt-sm" };
const _hoisted_48 = { class: "col-xs-12 col-sm-6" };
const _hoisted_49 = { class: "text-h6 q-mb-md" };
const _hoisted_50 = { class: "text-center" };
const _hoisted_51 = { class: "q-mt-sm" };
const _hoisted_52 = { class: "text-h6" };
const _hoisted_53 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("a", {
    href: "https://support.teamlaundrylady.co/support/tickets/new",
    class: "link",
    target: "_blank"
  }, "Click here to let us know if you need to make a change.")
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContractorDashboard",
  props: {
    model: null
  },
  setup(__props) {
    const route = useRoute();
    const bus = inject("bus");
    const showUnpaids = ref(false);
    const weeklyTarget = ref();
    const showWeeklyTargetInput = ref(false);
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
    const updateWeeklyTarget = () => {
      console.log(weeklyTarget.value);
      if (weeklyTarget.value) {
        api.put("/public/user/contractor/weeklytarget", { contractor_target: weeklyTarget.value }).then(() => {
          bus.emit("getContractor");
          getDashboard();
          showWeeklyTargetInput.value = false;
          weeklyTarget.value = null;
        }).catch((error) => {
          useMixinDebug(error);
        });
      }
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
                    createBaseVNode("div", _hoisted_5, [
                      _hoisted_6,
                      createVNode(QSpace),
                      createVNode(QBtn, {
                        icon: "edit",
                        flat: "",
                        round: "",
                        size: "sm",
                        onClick: _cache[0] || (_cache[0] = ($event) => showWeeklyTargetInput.value = true)
                      }),
                      createVNode(QDialog, {
                        modelValue: showWeeklyTargetInput.value,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => showWeeklyTargetInput.value = $event)
                      }, {
                        default: withCtx(() => [
                          createVNode(QCard, { class: "modal-sm" }, {
                            default: withCtx(() => [
                              createVNode(QToolbar, { class: "bg-primary text-white" }, {
                                default: withCtx(() => [
                                  createVNode(QToolbarTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Update Weekly Target")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(QSpace),
                                  withDirectives(createVNode(QBtn, {
                                    icon: "close",
                                    round: "",
                                    dense: "",
                                    flat: ""
                                  }, null, 512), [
                                    [ClosePopup]
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(QCardSection, null, {
                                default: withCtx(() => [
                                  createVNode(QInput, {
                                    modelValue: weeklyTarget.value,
                                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => weeklyTarget.value = $event),
                                    autofocus: "",
                                    outlined: "",
                                    label: "Enter a weekly target",
                                    type: "number"
                                  }, null, 8, ["modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(QCardActions, { align: "right" }, {
                                default: withCtx(() => [
                                  withDirectives(createVNode(QBtn, {
                                    label: "Cancel",
                                    flat: "",
                                    color: "secondary",
                                    rounded: ""
                                  }, null, 512), [
                                    [ClosePopup]
                                  ]),
                                  createTextVNode(),
                                  createVNode(QBtn, {
                                    onClick: _cache[2] || (_cache[2] = ($event) => updateWeeklyTarget()),
                                    label: "Update",
                                    color: "primary",
                                    rounded: ""
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    createBaseVNode("div", _hoisted_7, [
                      dashboard.value.weeklyOrders.percentage ? (openBlock(), createBlock(QCircularProgress, {
                        key: 0,
                        value: dashboard.value.weeklyOrders.percentage,
                        size: "64px",
                        color: "primary",
                        "track-color": "pink-1"
                      }, null, 8, ["value"])) : createCommentVNode("", true)
                    ]),
                    createBaseVNode("div", _hoisted_8, [
                      createTextVNode(toDisplayString(unref(currencyFormat)(dashboard.value.weeklyOrders.sum)) + " / " + toDisplayString(unref(currencyFormat)(__props.model.contractor_target)) + " ", 1),
                      dashboard.value.weeklyOrders.diff === 0 ? (openBlock(), createElementBlock("span", _hoisted_9, "~")) : createCommentVNode("", true),
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
          createBaseVNode("div", _hoisted_10, [
            createVNode(QCard, { class: "bg-secondary text-white fit" }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    _hoisted_11,
                    createBaseVNode("div", _hoisted_12, [
                      createBaseVNode("div", _hoisted_13, [
                        createBaseVNode("div", _hoisted_14, toDisplayString(unref(currencyFormat)(dashboard.value.totalCommissionsOwing.grandTotal)), 1),
                        _hoisted_15
                      ]),
                      createBaseVNode("div", _hoisted_16, [
                        createBaseVNode("div", _hoisted_17, toDisplayString(unref(currencyFormat)(dashboard.value.totalCommissionsPaid.grandTotal)), 1),
                        _hoisted_18
                      ])
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_19, [
            createVNode(QCard, { class: "fit" }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    _hoisted_20,
                    createBaseVNode("div", _hoisted_21, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(dashboard.value.capacity, (c) => {
                        return openBlock(), createElementBlock("div", {
                          class: "col-xs-6",
                          key: c.name
                        }, [
                          createBaseVNode("div", _hoisted_22, [
                            createBaseVNode("div", _hoisted_23, [
                              c.per ? (openBlock(), createBlock(QCircularProgress, {
                                key: 0,
                                value: parseFloat(c.per),
                                size: "64px",
                                color: "secondary",
                                "show-value": "",
                                "track-color": "grey-3"
                              }, {
                                default: withCtx(() => [
                                  createBaseVNode("small", null, toDisplayString(c.oc) + "/" + toDisplayString(c.cc), 1)
                                ]),
                                _: 2
                              }, 1032, ["value"])) : createCommentVNode("", true)
                            ]),
                            createTextVNode(" " + toDisplayString(c.name), 1)
                          ])
                        ]);
                      }), 128))
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_24, [
            createVNode(QCard, { class: "fit" }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    _hoisted_25,
                    createBaseVNode("div", _hoisted_26, [
                      createBaseVNode("div", _hoisted_27, [
                        createBaseVNode("div", _hoisted_28, toDisplayString(unref(currencyFormat)(dashboard.value.totalOrdersTotalPrice[0].sum)), 1),
                        _hoisted_29
                      ]),
                      createBaseVNode("div", _hoisted_30, [
                        createBaseVNode("div", _hoisted_31, toDisplayString(unref(currencyFormat)(dashboard.value.totalOrdersTotalOwingGrand)), 1),
                        createBaseVNode("div", _hoisted_32, [
                          createBaseVNode("a", {
                            class: "link",
                            onClick: _cache[4] || (_cache[4] = ($event) => showUnpaids.value = !showUnpaids.value)
                          }, "Unpaids")
                        ])
                      ])
                    ])
                  ]),
                  _: 1
                }),
                showUnpaids.value ? (openBlock(), createBlock(QCardSection, { key: 0 }, {
                  default: withCtx(() => [
                    createVNode(QList, {
                      bordered: "",
                      separator: ""
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(dashboard.value.totalOrdersTotalOwingData, (u) => {
                          return openBlock(), createBlock(QItem, {
                            key: u.id
                          }, {
                            default: withCtx(() => [
                              createVNode(QItemSection, null, {
                                default: withCtx(() => [
                                  createBaseVNode("strong", null, "Booking #" + toDisplayString(u.order.display_id), 1),
                                  u.team ? (openBlock(), createElementBlock("span", _hoisted_33, toDisplayString(u.team.name), 1)) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(QItemSection, { side: "" }, {
                                default: withCtx(() => [
                                  createBaseVNode("span", _hoisted_34, toDisplayString(unref(currencyFormat)(u.grand_total_price)), 1),
                                  createTextVNode("Due: " + toDisplayString(u.due_date), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_35, [
            createVNode(QCard, { class: "fit" }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    _hoisted_36,
                    createBaseVNode("div", _hoisted_37, [
                      createBaseVNode("div", _hoisted_38, [
                        createBaseVNode("div", _hoisted_39, toDisplayString(dashboard.value.totalOrdersCount[0].count), 1),
                        _hoisted_40
                      ]),
                      createBaseVNode("div", _hoisted_41, [
                        createBaseVNode("div", _hoisted_42, toDisplayString(dashboard.value.totalOrdersCountRecurring[0].count), 1),
                        _hoisted_43
                      ])
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_44, [
            createVNode(QCard, { class: "fit" }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_45, toDisplayString(_ctx.$t("team.namePlural")) + " Rebooked", 1),
                    createBaseVNode("div", _hoisted_46, [
                      dashboard.value.retainedRebooked.rebookedPercentage ? (openBlock(), createBlock(QCircularProgress, {
                        key: 0,
                        value: parseFloat(dashboard.value.retainedRebooked.rebookedPercentage),
                        size: "64px",
                        color: "positive",
                        "show-value": "",
                        "track-color": "grey-3"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(dashboard.value.retainedRebooked.rebooked), 1)
                        ]),
                        _: 1
                      }, 8, ["value"])) : createCommentVNode("", true),
                      createBaseVNode("div", _hoisted_47, "Rebooked (" + toDisplayString(dashboard.value.retainedRebooked.rebookedPercentage) + "%)", 1)
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_48, [
            createVNode(QCard, { class: "fit" }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_49, toDisplayString(_ctx.$t("team.namePlural")) + " Retained", 1),
                    createBaseVNode("div", _hoisted_50, [
                      dashboard.value.retainedRebooked.retainedPercentage >= 0 ? (openBlock(), createBlock(QCircularProgress, {
                        key: 0,
                        value: parseFloat(dashboard.value.retainedRebooked.retainedPercentage),
                        size: "64px",
                        color: "positive",
                        "show-value": "",
                        "track-color": "grey-3"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(dashboard.value.retainedRebooked.retained), 1)
                        ]),
                        _: 1
                      }, 8, ["value"])) : createCommentVNode("", true),
                      createBaseVNode("div", _hoisted_51, " Retained (" + toDisplayString(dashboard.value.retainedRebooked.retainedPercentage) + "%) ", 1)
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])
        ]),
        createBaseVNode("div", _hoisted_52, "Current " + toDisplayString(_ctx.$t("schedule.name")), 1),
        _hoisted_53,
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
