import { Q as QPage } from "./QPage.1f72f643.js";
import { u as useMixinSecurity } from "./security.1d01dc28.js";
import { Q as QHeader } from "./QHeader.6f2f00f6.js";
import { Q as QSpace } from "./QSpace.add34f87.js";
import { B as defineComponent, r as ref, i as inject, o as onMounted, G as onBeforeUnmount, S as unref, m as openBlock, K as createBlock, L as withCtx, l as createVNode, t as normalizeClass, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, R as QBtn, Q as QCard, M as QCardSection, ak as createTextVNode, O as QIcon, z as createCommentVNode, F as Fragment, be as renderList } from "./index.a8c2088f.js";
import { Q as QTab } from "./QTab.eb0ff184.js";
import { Q as QTabs } from "./QTabs.e3f58ee8.js";
import { a as QPageContainer, Q as QLayout } from "./QLayout.d3a90569.js";
import { a as api } from "./axios.6170ef9f.js";
import { _ as _sfc_main$3 } from "./OrderCreate.d8c53232.js";
import { _ as _sfc_main$4 } from "./OrderListFormat.a391fef3.js";
import { u as useMixinDebug } from "./debug.972d445d.js";
import { h as hourBookingDisplay } from "./help.565e8b52.js";
import { _ as _sfc_main$2 } from "./ContractorNav.00a04d3d.js";
import "./QResizeObserver.b5bd3494.js";
import "./rtl.b51694b1.js";
import "./QToolbarTitle.18413c1f.js";
import "./QSelect.a486286b.js";
import "./QItemSection.e7fc41e3.js";
import "./QItemLabel.71296e9c.js";
import "./QMenu.d17a803f.js";
import "./selection.2269a595.js";
import "./format.3e32b8d9.js";
import "./QBadge.26c616f1.js";
import "./ClosePopup.2b5e4b81.js";
import "./index.esm.5c9ce508.js";
import "./helpers.b26deaad.js";
import "./vue-i18n.runtime.esm-bundler.2cd83188.js";
import "./DateField.c09861f5.js";
import "./QDate.a1a6119b.js";
import "./use-cache.b0833c75.js";
import "./use-quasar.263f5bc3.js";
import "./OrderContractorManagement.a5605254.js";
import "./QLinearProgress.b89a7092.js";
import "./QList.6dac2cc1.js";
import "./UserAvatar.8a9bd36e.js";
import "./QImg.0192b93e.js";
import "./use-ratio.2bce0c81.js";
import "./open-url.d801b7e1.js";
import "./geolocation.610d03cd.js";
import "./StatusTag.6cf8b52a.js";
import "./QRouteTab.d204041f.js";
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
                default: withCtx(() => [
                  unref(user) && unref(user).id ? (openBlock(), createElementBlock("div", _hoisted_1, [
                    createVNode(_sfc_main$3),
                    createBaseVNode("div", _hoisted_2, [
                      createBaseVNode("div", _hoisted_3, "Hi " + toDisplayString(unref(user).contractor_badge_name), 1),
                      createVNode(QSpace),
                      createVNode(QBtn, {
                        round: "",
                        icon: "add",
                        onClick: _cache[0] || (_cache[0] = ($event) => newOrder()),
                        color: "primary",
                        dense: "",
                        title: "Add new Booking"
                      })
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
                ]),
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