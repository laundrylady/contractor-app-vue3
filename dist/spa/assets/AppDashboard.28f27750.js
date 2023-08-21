import { Q as QPage } from "./QPage.c9d1d2c4.js";
import { u as useMixinSecurity } from "./security.3ad81f2f.js";
import { A as defineComponent, r as ref, i as inject, o as onMounted, E as onBeforeUnmount, R as unref, l as openBlock, m as createElementBlock, k as createVNode, K as withCtx, N as QIcon, y as createCommentVNode, p as createBaseVNode, aH as toDisplayString, P as QBtn, L as QCardSection, Q as QCard, aG as createTextVNode, J as createBlock, s as normalizeClass } from "./index.0a9ea33a.js";
import { Q as QBreadcrumbsEl, a as QBreadcrumbs } from "./QBreadcrumbs.17f64dd2.js";
import { Q as QSpace } from "./QSpace.428f95cc.js";
import { Q as QTab } from "./QTab.f4d7f025.js";
import { Q as QTabs } from "./QTabs.9e736a56.js";
import { a as api } from "./axios.2d1b6d62.js";
import { _ as _sfc_main$2 } from "./OrderCreate.e50ed779.js";
import { _ as _sfc_main$3 } from "./OrderListFormat.65ee6aeb.js";
import { _ as _sfc_main$4 } from "./OrderRecurringBookingFormat.b963e381.js";
import { u as useMixinDebug } from "./debug.ffa51329.js";
import "./QResizeObserver.b45d4c06.js";
import "./rtl.b51694b1.js";
import "./QToolbarTitle.bad7d3b8.js";
import "./QSelect.60ccb65b.js";
import "./QItemSection.1b23b510.js";
import "./selection.963fd4f5.js";
import "./QMenu.704ea9b1.js";
import "./format.3e32b8d9.js";
import "./ClosePopup.80d7fe1a.js";
import "./index.esm.c00db31c.js";
import "./help.ce523e76.js";
import "./helpers.126a0fc5.js";
import "./vue-i18n.runtime.esm-bundler.d61305fd.js";
import "./DateField.2386e018.js";
import "./use-cache.b0833c75.js";
import "./use-quasar.8cbfbeee.js";
import "./QLinearProgress.21adcba5.js";
import "./UserAvatar.491cc510.js";
import "./QImg.c253bdc9.js";
import "./use-ratio.c5deb4e1.js";
import "./QList.125653f0.js";
import "./StatusTag.1f55fb82.js";
import "./QBadge.eb8ee236.js";
const _hoisted_1 = {
  key: 0,
  class: "layout-container"
};
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { class: "flex q-mb-md" };
const _hoisted_4 = { class: "text-h6" };
const _hoisted_5 = { key: 1 };
const _hoisted_6 = { class: "row q-col-gutter-md" };
const _hoisted_7 = { class: "col-xs-12 col-sm-6" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 q-mb-md" }, "Pickups", -1);
const _hoisted_9 = { key: 0 };
const _hoisted_10 = { key: 0 };
const _hoisted_11 = { key: 1 };
const _hoisted_12 = { key: 0 };
const _hoisted_13 = { key: 2 };
const _hoisted_14 = { key: 0 };
const _hoisted_15 = { class: "col-xs-12 col-sm-6" };
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 q-mb-md" }, "In Progress", -1);
const _hoisted_17 = { key: 0 };
const _hoisted_18 = { class: "col-xs-12 col-sm-6" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 q-mb-md" }, "Sent for Payment", -1);
const _hoisted_20 = { key: 0 };
const _hoisted_21 = { class: "col-xs-12 col-sm-6" };
const _hoisted_22 = { class: "text-h6 q-mb-md" };
const _hoisted_23 = { key: 0 };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppDashboardContractor",
  setup(__props) {
    const { user } = useMixinSecurity();
    const dashboard = ref();
    const pickupTab = ref("today");
    const recurringOrders = ref();
    const bus = inject("bus");
    const getDashboard = () => {
      api.get("/public/user/contractor/dashboard?bare=true").then((response) => {
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
    const newOrder = () => {
      bus.emit("newOrder");
    };
    onMounted(() => {
      getDashboard();
      getRecurringOrders();
      bus.on("orderLoadMore", () => {
        getDashboard();
        getRecurringOrders();
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
            dense: ""
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
                        createVNode(_sfc_main$3, {
                          orders: dashboard.value.pickupsToday,
                          "no-avatar": true
                        }, null, 8, ["orders"])
                      ])) : createCommentVNode("", true),
                      pickupTab.value === "week" ? (openBlock(), createElementBlock("div", _hoisted_11, [
                        !dashboard.value.pickupsWeek.length ? (openBlock(), createElementBlock("div", _hoisted_12, "No " + toDisplayString(_ctx.$t("order.namePlural").toLowerCase()) + " found. ", 1)) : createCommentVNode("", true),
                        createVNode(_sfc_main$3, {
                          orders: dashboard.value.pickupsWeek,
                          "no-avatar": true
                        }, null, 8, ["orders"])
                      ])) : createCommentVNode("", true),
                      pickupTab.value === "missed" ? (openBlock(), createElementBlock("div", _hoisted_13, [
                        !dashboard.value.pickupsMissed.length ? (openBlock(), createElementBlock("div", _hoisted_14, "No " + toDisplayString(_ctx.$t("order.namePlural").toLowerCase()) + " found. ", 1)) : createCommentVNode("", true),
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
            createBaseVNode("div", _hoisted_15, [
              createVNode(QCard, { class: "bg-seamless q-mb-lg" }, {
                default: withCtx(() => [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      _hoisted_16,
                      !dashboard.value.ordersInprogress.length ? (openBlock(), createElementBlock("div", _hoisted_17, "No " + toDisplayString(_ctx.$t("order.namePlural").toLowerCase()) + " found. ", 1)) : createCommentVNode("", true),
                      createVNode(_sfc_main$3, {
                        orders: dashboard.value.ordersInprogress,
                        "no-avatar": true
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
                      _hoisted_19,
                      !dashboard.value.sentForPayment.length ? (openBlock(), createElementBlock("div", _hoisted_20, "No " + toDisplayString(_ctx.$t("order.namePlural").toLowerCase()) + " found. ", 1)) : createCommentVNode("", true),
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
            createBaseVNode("div", _hoisted_21, [
              createVNode(QCard, { class: "bg-seamless q-mb-lg" }, {
                default: withCtx(() => [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_22, [
                        createVNode(QIcon, { name: "sync" }),
                        createTextVNode(" Recurring " + toDisplayString(_ctx.$t("order.namePlural")), 1)
                      ]),
                      !recurringOrders.value || !recurringOrders.value.length ? (openBlock(), createElementBlock("div", _hoisted_23, "No " + toDisplayString(_ctx.$t("order.namePlural").toLowerCase()) + " found. ", 1)) : createCommentVNode("", true),
                      recurringOrders.value ? (openBlock(), createBlock(_sfc_main$4, {
                        key: 1,
                        orders: recurringOrders.value,
                        "no-avatar": true
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
