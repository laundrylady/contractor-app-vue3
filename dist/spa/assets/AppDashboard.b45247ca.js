import { Q as QPage } from "./QPage.e0ac27ef.js";
import { u as useMixinSecurity } from "./security.89584419.js";
import { A as defineComponent, r as ref, i as inject, o as onMounted, E as onBeforeUnmount, R as unref, l as openBlock, m as createElementBlock, k as createVNode, K as withCtx, N as QIcon, y as createCommentVNode, p as createBaseVNode, aH as toDisplayString, P as QBtn, L as QCardSection, F as Fragment, bc as renderList, Q as QCard, J as createBlock, s as normalizeClass } from "./index.0a73f961.js";
import { Q as QBreadcrumbsEl, a as QBreadcrumbs } from "./QBreadcrumbs.9f9c6512.js";
import { Q as QSpace } from "./QSpace.b8c9fdeb.js";
import { Q as QTab } from "./QTab.3b0954c2.js";
import { Q as QTabs } from "./QTabs.a12612d1.js";
import { a as api } from "./axios.753e2493.js";
import { _ as _sfc_main$2 } from "./OrderCreate.5883b9c9.js";
import { _ as _sfc_main$3 } from "./OrderListFormat.4170f6b3.js";
import { u as useMixinDebug } from "./debug.ffa51329.js";
import { h as hourBookingDisplay } from "./help.4d339a4c.js";
import "./QResizeObserver.9e3533fe.js";
import "./rtl.b51694b1.js";
import "./QToolbarTitle.511823f7.js";
import "./QSelect.7216960a.js";
import "./selection.0f6039c3.js";
import "./QItemLabel.12f914f9.js";
import "./QMenu.44421817.js";
import "./format.3e32b8d9.js";
import "./ClosePopup.229e15b7.js";
import "./index.esm.9f21d7f0.js";
import "./helpers.50a1e4cf.js";
import "./vue-i18n.runtime.esm-bundler.e4d6af1c.js";
import "./DateField.b8478ca3.js";
import "./QDate.a738a7de.js";
import "./use-cache.b0833c75.js";
import "./use-quasar.05ea3f12.js";
import "./OrderContractorManagement.aa7e6bc7.js";
import "./QLinearProgress.a4b46bca.js";
import "./QList.79d8c960.js";
import "./UserAvatar.44d6fe9f.js";
import "./QImg.08ce88aa.js";
import "./use-ratio.9945c457.js";
import "./StatusTag.24193045.js";
import "./QBadge.5d380769.js";
import "./geolocation.65278eee.js";
const _hoisted_1 = {
  key: 0,
  class: "layout-container"
};
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { class: "flex q-mb-md items-center" };
const _hoisted_4 = { class: "text-h6" };
const _hoisted_5 = { key: 1 };
const _hoisted_6 = { class: "row q-col-gutter-md" };
const _hoisted_7 = { class: "col-xs-12 col-sm-6" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 q-mb-md" }, "Pickups", -1);
const _hoisted_9 = { key: 0 };
const _hoisted_10 = { key: 0 };
const _hoisted_11 = { class: "text-uppercase text-bold q-mb-sm" };
const _hoisted_12 = { key: 1 };
const _hoisted_13 = { key: 0 };
const _hoisted_14 = { key: 2 };
const _hoisted_15 = { key: 0 };
const _hoisted_16 = { class: "col-xs-12 col-sm-6" };
const _hoisted_17 = { class: "text-h6 q-mb-md" };
const _hoisted_18 = { key: 0 };
const _hoisted_19 = { class: "col-xs-12 col-sm-6" };
const _hoisted_20 = { class: "text-h6 q-mb-md" };
const _hoisted_21 = { key: 0 };
const _hoisted_22 = { class: "col-xs-12 col-sm-6" };
const _hoisted_23 = { class: "text-h6 q-mb-md" };
const _hoisted_24 = { key: 0 };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppDashboardContractor",
  setup(__props) {
    const { user } = useMixinSecurity();
    const dashboard = ref();
    const pickupTab = ref("today");
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
      return unref(user) && unref(user).id ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_sfc_main$2),
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
              })
            ]),
            _: 1
          })
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, "Hi " + toDisplayString(unref(user).first_name), 1),
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
        dashboard.value ? (openBlock(), createElementBlock("div", _hoisted_5, [
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("div", _hoisted_7, [
              createVNode(QCard, { class: "bg-seamless q-mb-lg" }, {
                default: withCtx(() => [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      _hoisted_8,
                      createVNode(QTabs, {
                        modelValue: pickupTab.value,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => pickupTab.value = $event),
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
                            key: k.key
                          }, [
                            createBaseVNode("div", _hoisted_11, toDisplayString(unref(hourBookingDisplay)(k.key)), 1),
                            createVNode(_sfc_main$3, {
                              orders: k.data,
                              "no-avatar": true
                            }, null, 8, ["orders"])
                          ]);
                        }), 128))
                      ])) : createCommentVNode("", true),
                      pickupTab.value === "week" ? (openBlock(), createElementBlock("div", _hoisted_12, [
                        !dashboard.value.pickupsWeek.length ? (openBlock(), createElementBlock("div", _hoisted_13, "No " + toDisplayString(_ctx.$t("order.namePlural").toLowerCase()) + " found. ", 1)) : createCommentVNode("", true),
                        createVNode(_sfc_main$3, {
                          orders: dashboard.value.pickupsWeek,
                          "no-avatar": true
                        }, null, 8, ["orders"])
                      ])) : createCommentVNode("", true),
                      pickupTab.value === "missed" ? (openBlock(), createElementBlock("div", _hoisted_14, [
                        !dashboard.value.pickupsMissed.length ? (openBlock(), createElementBlock("div", _hoisted_15, "No " + toDisplayString(_ctx.$t("order.namePlural").toLowerCase()) + " found. ", 1)) : createCommentVNode("", true),
                        createVNode(_sfc_main$3, {
                          orders: dashboard.value.pickupsMissed,
                          "no-avatar": true
                        }, null, 8, ["orders"])
                      ])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_16, [
              createVNode(QCard, { class: "bg-seamless q-mb-lg" }, {
                default: withCtx(() => [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_17, "In Progress (" + toDisplayString(dashboard.value.ordersInprogress.length) + ")", 1),
                      !dashboard.value.ordersInprogress.length ? (openBlock(), createElementBlock("div", _hoisted_18, "No " + toDisplayString(_ctx.$t("order.namePlural").toLowerCase()) + " found. ", 1)) : createCommentVNode("", true),
                      createVNode(_sfc_main$3, {
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
            createBaseVNode("div", _hoisted_19, [
              createVNode(QCard, { class: "bg-seamless q-mb-lg" }, {
                default: withCtx(() => [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_20, "Awaiting Payment (" + toDisplayString(dashboard.value.sentForPayment.length) + ")", 1),
                      !dashboard.value.sentForPayment.length ? (openBlock(), createElementBlock("div", _hoisted_21, "No " + toDisplayString(_ctx.$t("order.namePlural").toLowerCase()) + " found. ", 1)) : createCommentVNode("", true),
                      createVNode(_sfc_main$3, {
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
            createBaseVNode("div", _hoisted_22, [
              createVNode(QCard, { class: "bg-seamless q-mb-lg" }, {
                default: withCtx(() => [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_23, "Ready for Delivery (" + toDisplayString(dashboard.value.readyForDelivery.length) + ")", 1),
                      !dashboard.value.readyForDelivery || !dashboard.value.readyForDelivery.length ? (openBlock(), createElementBlock("div", _hoisted_24, "No " + toDisplayString(_ctx.$t("order.namePlural").toLowerCase()) + " found. ", 1)) : createCommentVNode("", true),
                      dashboard.value.readyForDelivery ? (openBlock(), createBlock(_sfc_main$3, {
                        key: 1,
                        orders: dashboard.value.readyForDelivery,
                        "no-avatar": true,
                        bookingId: true
                      }, null, 8, ["orders"])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ]),
          createVNode(QBtn, {
            to: { name: "orders" },
            label: "View All Bookings",
            flat: "",
            color: "primary",
            class: "q-mr-xs"
          })
        ])) : createCommentVNode("", true)
      ])) : createCommentVNode("", true);
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
      return unref(user) && unref(user).id ? (openBlock(), createBlock(QPage, {
        key: 0,
        padding: "",
        class: normalizeClass({ "q-pa-md": _ctx.$q.screen.xs })
      }, {
        default: withCtx(() => [
          unref(user).role === "contractor" ? (openBlock(), createBlock(_sfc_main$1, { key: 0 })) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["class"])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
