import { Q as QPage } from "./QPage.10b9ef9c.js";
import { u as useMixinSecurity } from "./security.51dfc81b.js";
import { Q as QHeader } from "./QHeader.7a92dd26.js";
import { Q as QSpace } from "./QSpace.a65fbdcd.js";
import { B as defineComponent, r as ref, i as inject, o as onMounted, G as onBeforeUnmount, S as unref, m as openBlock, K as createBlock, L as withCtx, l as createVNode, t as normalizeClass, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, R as QBtn, z as createCommentVNode, Q as QCard, M as QCardSection, ak as createTextVNode, O as QIcon, F as Fragment, be as renderList } from "./index.6a5c0810.js";
import { Q as QTab } from "./QTab.245fe20d.js";
import { Q as QTabs } from "./QTabs.0376e625.js";
import { a as QPageContainer, Q as QLayout } from "./QLayout.3ebe14f1.js";
import { a as api } from "./axios.83cf9320.js";
import { _ as _sfc_main$3 } from "./OrderCreate.37d1b5e8.js";
import { _ as _sfc_main$4 } from "./OrderListFormat.1d11241a.js";
import { u as useMixinCommon } from "./common.4d070ab1.js";
import { u as useMixinDebug } from "./debug.972d445d.js";
import { h as hourBookingDisplay } from "./help.4330a8b0.js";
import { _ as _sfc_main$2 } from "./ContractorNav.923504ff.js";
import "./QResizeObserver.878bf649.js";
import "./rtl.b51694b1.js";
import "./QToolbarTitle.b7277457.js";
import "./QSelect.fde53a09.js";
import "./QItemSection.cb2915ec.js";
import "./QItemLabel.64d93eb6.js";
import "./QMenu.49b63711.js";
import "./selection.2a9bbdda.js";
import "./format.3e32b8d9.js";
import "./QBadge.da8585b9.js";
import "./ClosePopup.22eaac01.js";
import "./index.esm.411ccfd3.js";
import "./helpers.f9678c13.js";
import "./vue-i18n.runtime.esm-bundler.213fcb16.js";
import "./DateField.c93fb4cb.js";
import "./QDate.27353972.js";
import "./use-cache.b0833c75.js";
import "./use-quasar.6e6abd74.js";
import "./OrderContractorManagement.62c59035.js";
import "./QLinearProgress.85cd81a0.js";
import "./QList.969289e2.js";
import "./UserAvatar.29cec905.js";
import "./QImg.a85fb193.js";
import "./use-ratio.092c2364.js";
import "./open-url.d85b1019.js";
import "./geolocation.6a823884.js";
import "./StatusTag.b4eefc3b.js";
import "./common.441c1ece.js";
import "./QRouteTab.71391499.js";
const _hoisted_1 = {
  key: 0,
  class: "layout-container"
};
const _hoisted_2 = { class: "flex q-mb-md items-center" };
const _hoisted_3 = { class: "text-h6" };
const _hoisted_4 = { key: 0 };
const _hoisted_5 = { class: "row q-col-gutter-md" };
const _hoisted_6 = { class: "col-xs-12 col-sm-6" };
const _hoisted_7 = { class: "text-h6 q-mb-md" };
const _hoisted_8 = { key: 0 };
const _hoisted_9 = { key: 1 };
const _hoisted_10 = { key: 0 };
const _hoisted_11 = { key: 2 };
const _hoisted_12 = { key: 0 };
const _hoisted_13 = { key: 3 };
const _hoisted_14 = { key: 0 };
const _hoisted_15 = { class: "col-xs-12 col-sm-6" };
const _hoisted_16 = { class: "text-h6 q-mb-md" };
const _hoisted_17 = { key: 0 };
const _hoisted_18 = { class: "col-xs-12 col-sm-6" };
const _hoisted_19 = { class: "text-h6 q-mb-md" };
const _hoisted_20 = { key: 0 };
const _hoisted_21 = { class: "col-xs-12 col-sm-6" };
const _hoisted_22 = { class: "text-h6 q-mb-md" };
const _hoisted_23 = { key: 0 };
const _hoisted_24 = { key: 1 };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppDashboardContractor",
  setup(__props) {
    const { user } = useMixinSecurity();
    const dashboard = ref();
    const pickupTab = ref("today");
    const showHelp = ref(false);
    const common = useMixinCommon();
    const bus = inject("bus");
    const getDashboard = () => {
      api.get("/public/user/contractor/dashboard?bare=true").then((response) => {
        dashboard.value = response.data;
      }).catch((error) => {
        useMixinDebug(error);
      });
    };
    const newOrder = () => {
      bus.emit("newOrder");
    };
    onMounted(() => {
      getDashboard();
      bus.on("orderLoadMore", () => {
        getDashboard();
      });
    });
    onBeforeUnmount(() => {
      bus.off("orderLoadMore");
    });
    return (_ctx, _cache) => {
      return unref(user) && unref(user).id ? (openBlock(), createBlock(QLayout, {
        key: 0,
        view: "lHh Lpr lFf",
        container: "",
        class: "layout-height"
      }, {
        default: withCtx(() => [
          createVNode(QHeader, {
            class: normalizeClass({ "page-title text-black": !_ctx.$q.dark.isActive, "bg-dark": _ctx.$q.dark.isActive }),
            bordered: ""
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$2)
            ]),
            _: 1
          }, 8, ["class"]),
          createVNode(QPageContainer, null, {
            default: withCtx(() => [
              createVNode(QPage, {
                padding: "",
                class: "q-pt-md layout-container q-pa-md"
              }, {
                default: withCtx(() => {
                  var _a;
                  return [
                    unref(user) && unref(user).id ? (openBlock(), createElementBlock("div", _hoisted_1, [
                      createVNode(_sfc_main$3),
                      createBaseVNode("div", _hoisted_2, [
                        createBaseVNode("div", _hoisted_3, "Hi " + toDisplayString(unref(user).first_name), 1),
                        createVNode(QSpace),
                        ((_a = unref(common)) == null ? void 0 : _a.operating_country) === "nzd" ? (openBlock(), createBlock(QBtn, {
                          key: 0,
                          round: "",
                          icon: "add",
                          onClick: _cache[0] || (_cache[0] = ($event) => newOrder()),
                          color: "primary",
                          dense: "",
                          title: "Add new Booking"
                        })) : createCommentVNode("", true)
                      ]),
                      dashboard.value ? (openBlock(), createElementBlock("div", _hoisted_4, [
                        createBaseVNode("div", _hoisted_5, [
                          createBaseVNode("div", _hoisted_6, [
                            createVNode(QCard, { class: "bg-seamless q-mb-lg" }, {
                              default: withCtx(() => [
                                createVNode(QCardSection, null, {
                                  default: withCtx(() => [
                                    createBaseVNode("div", _hoisted_7, [
                                      createTextVNode("Pickups "),
                                      createVNode(QBtn, {
                                        icon: "info",
                                        onClick: _cache[1] || (_cache[1] = ($event) => showHelp.value = !showHelp.value),
                                        size: "sm",
                                        round: "",
                                        dense: "",
                                        flat: ""
                                      })
                                    ]),
                                    showHelp.value ? (openBlock(), createElementBlock("p", _hoisted_8, [
                                      createTextVNode("To reorder your bookings, click the "),
                                      createVNode(QIcon, { name: "drag_indicator" }),
                                      createTextVNode(" button, drag the bookings, then click the "),
                                      createVNode(QIcon, { name: "drag_indicator" }),
                                      createTextVNode(" button again to exit re-order mode.")
                                    ])) : createCommentVNode("", true),
                                    createVNode(QTabs, {
                                      modelValue: pickupTab.value,
                                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => pickupTab.value = $event),
                                      class: "q-mb-md",
                                      align: !_ctx.$q.screen.xs ? "left" : "center"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(QTab, {
                                          name: "today",
                                          label: `Today (${dashboard.value.pickupsToday.length})`
                                        }, null, 8, ["label"]),
                                        createVNode(QTab, {
                                          name: "week",
                                          label: `Upcoming (${dashboard.value.pickupsWeek.length})`
                                        }, null, 8, ["label"]),
                                        createVNode(QTab, {
                                          name: "missed",
                                          label: `Missed (${dashboard.value.pickupsMissed.length})`
                                        }, null, 8, ["label"])
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "align"]),
                                    pickupTab.value === "today" ? (openBlock(), createElementBlock("div", _hoisted_9, [
                                      !dashboard.value.pickupsToday.length ? (openBlock(), createElementBlock("div", _hoisted_10, "No " + toDisplayString(_ctx.$t("order.namePlural").toLowerCase()) + " found. ", 1)) : createCommentVNode("", true),
                                      (openBlock(true), createElementBlock(Fragment, null, renderList(dashboard.value.pickupsToday, (k) => {
                                        return openBlock(), createElementBlock("div", {
                                          key: k.key,
                                          class: "q-mb-sm"
                                        }, [
                                          createVNode(_sfc_main$4, {
                                            orders: k.data,
                                            "no-avatar": true,
                                            drag: true,
                                            label: unref(hourBookingDisplay)(k.key),
                                            optimal: true
                                          }, null, 8, ["orders", "label"])
                                        ]);
                                      }), 128))
                                    ])) : createCommentVNode("", true),
                                    pickupTab.value === "week" ? (openBlock(), createElementBlock("div", _hoisted_11, [
                                      !dashboard.value.pickupsWeek.length ? (openBlock(), createElementBlock("div", _hoisted_12, "No " + toDisplayString(_ctx.$t("order.namePlural").toLowerCase()) + " found. ", 1)) : createCommentVNode("", true),
                                      createVNode(_sfc_main$4, {
                                        orders: dashboard.value.pickupsWeek,
                                        "no-avatar": true,
                                        drag: true,
                                        optimal: true
                                      }, null, 8, ["orders"])
                                    ])) : createCommentVNode("", true),
                                    pickupTab.value === "missed" ? (openBlock(), createElementBlock("div", _hoisted_13, [
                                      !dashboard.value.pickupsMissed.length ? (openBlock(), createElementBlock("div", _hoisted_14, "No " + toDisplayString(_ctx.$t("order.namePlural").toLowerCase()) + " found. ", 1)) : createCommentVNode("", true),
                                      createVNode(_sfc_main$4, {
                                        orders: dashboard.value.pickupsMissed,
                                        "no-avatar": true,
                                        optimal: true
                                      }, null, 8, ["orders"])
                                    ])) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          createBaseVNode("div", _hoisted_15, [
                            createVNode(QCard, { class: "bg-seamless q-mb-lg" }, {
                              default: withCtx(() => [
                                createVNode(QCardSection, null, {
                                  default: withCtx(() => [
                                    createBaseVNode("div", _hoisted_16, "In Progress (" + toDisplayString(dashboard.value.ordersInprogress.length) + ")", 1),
                                    !dashboard.value.ordersInprogress.length ? (openBlock(), createElementBlock("div", _hoisted_17, "No " + toDisplayString(_ctx.$t("order.namePlural").toLowerCase()) + " found. ", 1)) : createCommentVNode("", true),
                                    createVNode(_sfc_main$4, {
                                      orders: dashboard.value.ordersInprogress,
                                      "no-avatar": true,
                                      "booking-id": true
                                    }, null, 8, ["orders"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          createBaseVNode("div", _hoisted_18, [
                            createVNode(QCard, { class: "bg-seamless q-mb-lg" }, {
                              default: withCtx(() => [
                                createVNode(QCardSection, null, {
                                  default: withCtx(() => [
                                    createBaseVNode("div", _hoisted_19, "Awaiting Payment (" + toDisplayString(dashboard.value.sentForPayment.length) + ")", 1),
                                    !dashboard.value.sentForPayment.length ? (openBlock(), createElementBlock("div", _hoisted_20, "No " + toDisplayString(_ctx.$t("order.namePlural").toLowerCase()) + " found. ", 1)) : createCommentVNode("", true),
                                    createVNode(_sfc_main$4, {
                                      orders: dashboard.value.sentForPayment,
                                      "no-avatar": true,
                                      "booking-id": true
                                    }, null, 8, ["orders"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          createBaseVNode("div", _hoisted_21, [
                            createVNode(QCard, { class: "bg-seamless q-mb-lg" }, {
                              default: withCtx(() => [
                                createVNode(QCardSection, null, {
                                  default: withCtx(() => [
                                    createBaseVNode("div", _hoisted_22, [
                                      createTextVNode("Deliveries "),
                                      createVNode(QBtn, {
                                        icon: "info",
                                        onClick: _cache[3] || (_cache[3] = ($event) => showHelp.value = !showHelp.value),
                                        size: "sm",
                                        round: "",
                                        dense: "",
                                        flat: ""
                                      })
                                    ]),
                                    showHelp.value ? (openBlock(), createElementBlock("p", _hoisted_23, [
                                      createTextVNode("To reorder your bookings, click the "),
                                      createVNode(QIcon, { name: "drag_indicator" }),
                                      createTextVNode(" button, drag the bookings, then click the "),
                                      createVNode(QIcon, { name: "drag_indicator" }),
                                      createTextVNode(" button again to exit re-order mode.")
                                    ])) : createCommentVNode("", true),
                                    !dashboard.value.readyForDelivery.length ? (openBlock(), createElementBlock("div", _hoisted_24, "No " + toDisplayString(_ctx.$t("order.namePlural").toLowerCase()) + " found. ", 1)) : createCommentVNode("", true),
                                    createVNode(_sfc_main$4, {
                                      orders: dashboard.value.readyForDelivery,
                                      "no-avatar": true,
                                      optimal: true,
                                      drag: true
                                    }, null, 8, ["orders"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ])) : createCommentVNode("", true)
                    ])) : createCommentVNode("", true)
                  ];
                }),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : createCommentVNode("", true);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppDashboard",
  setup(__props) {
    const { user } = useMixinSecurity();
    onMounted(() => {
      console.log("mounted");
    });
    onBeforeUnmount(() => {
      console.log("unmounted");
    });
    return (_ctx, _cache) => {
      return unref(user) && unref(user).id ? (openBlock(), createBlock(QPage, { key: 0 }, {
        default: withCtx(() => [
          unref(user).role === "contractor" ? (openBlock(), createBlock(_sfc_main$1, { key: 0 })) : createCommentVNode("", true)
        ]),
        _: 1
      })) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
