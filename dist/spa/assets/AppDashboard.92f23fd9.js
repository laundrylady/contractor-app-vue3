import { Q as QPage } from "./QPage.8242c5d7.js";
import { u as useMixinSecurity } from "./security.8c1d927d.js";
import { Q as QHeader } from "./QHeader.7049cefb.js";
import { Q as QSpace } from "./QSpace.edc70da3.js";
import { B as defineComponent, r as ref, i as inject, o as onMounted, G as onBeforeUnmount, S as unref, m as openBlock, K as createBlock, L as withCtx, l as createVNode, t as normalizeClass, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, R as QBtn, z as createCommentVNode, Q as QCard, M as QCardSection, ak as createTextVNode, O as QIcon, F as Fragment, be as renderList } from "./index.9d591b1c.js";
import { Q as QTab } from "./QTab.474a6f74.js";
import { Q as QTabs } from "./QTabs.a2b357ed.js";
import { a as QPageContainer, Q as QLayout } from "./QLayout.0801c319.js";
import { a as api } from "./axios.ffd06d42.js";
import { _ as _sfc_main$3 } from "./OrderCreate.d2b3ade4.js";
import { _ as _sfc_main$4 } from "./OrderListFormat.7e3e281f.js";
import { u as useMixinCommon } from "./common.f7c2d978.js";
import { u as useMixinDebug } from "./debug.972d445d.js";
import { h as hourBookingDisplay } from "./help.b8d14fc4.js";
import { _ as _sfc_main$2 } from "./ContractorNav.3e625912.js";
import "./QResizeObserver.38531d9e.js";
import "./rtl.b51694b1.js";
import "./QToolbarTitle.db8b86c2.js";
import "./QSelect.9c2c8019.js";
import "./QItemSection.8e564bc4.js";
import "./QItemLabel.d08ee18c.js";
import "./QMenu.96d27bd9.js";
import "./selection.2874b1b3.js";
import "./format.3e32b8d9.js";
import "./ClosePopup.432271df.js";
import "./index.esm.b83bc449.js";
import "./helpers.aba36b93.js";
import "./vue-i18n.runtime.esm-bundler.cb7a3db2.js";
import "./DateField.6f5a1188.js";
import "./QDate.a93b57ec.js";
import "./use-cache.b0833c75.js";
import "./use-quasar.7e15747c.js";
import "./OrderContractorManagement.29be57c2.js";
import "./QLinearProgress.b20e4b9c.js";
import "./QList.b4bd41f3.js";
import "./UserAvatar.44ecbeb1.js";
import "./QImg.b093fa43.js";
import "./use-ratio.fc4bc233.js";
import "./open-url.3ac8f92d.js";
import "./geolocation.5808ae75.js";
import "./StatusTag.d53fcbea.js";
import "./QBadge.579e47d8.js";
import "./common.818e15cd.js";
import "./QRouteTab.7ffd4ebe.js";
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
