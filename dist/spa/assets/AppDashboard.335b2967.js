import { Q as QPage } from "./QPage.8b26106d.js";
import { u as useMixinSecurity } from "./security.1bb23e1f.js";
import { A as defineComponent, r as ref, i as inject, o as onMounted, E as onBeforeUnmount, R as unref, l as openBlock, m as createElementBlock, k as createVNode, K as withCtx, N as QIcon, y as createCommentVNode, p as createBaseVNode, aH as toDisplayString, P as QBtn, L as QCardSection, F as Fragment, bd as renderList, Q as QCard, J as createBlock, s as normalizeClass } from "./index.75c589dc.js";
import { Q as QBreadcrumbsEl, a as QBreadcrumbs } from "./QBreadcrumbs.e58d5a90.js";
import { Q as QSpace } from "./QSpace.b50ea491.js";
import { Q as QTab } from "./QTab.5e66dcd7.js";
import { Q as QTabs } from "./QTabs.0cc2d1af.js";
import { a as api } from "./axios.a7e15516.js";
import { _ as _sfc_main$2 } from "./OrderCreate.50bf182e.js";
import { _ as _sfc_main$3 } from "./OrderListFormat.b21dbc9d.js";
import { u as useMixinDebug } from "./debug.ffa51329.js";
import { h as hourBookingDisplay } from "./help.2d75e567.js";
import "./QResizeObserver.b92702f2.js";
import "./rtl.b51694b1.js";
import "./QToolbarTitle.c1f6a73b.js";
import "./QSelect.279ab0ff.js";
import "./selection.7cbdbbe5.js";
import "./QItemLabel.a15b7d1a.js";
import "./QMenu.faa99aa9.js";
import "./format.3e32b8d9.js";
import "./ClosePopup.486c41e5.js";
import "./index.esm.543d1520.js";
import "./helpers.293c0aa1.js";
import "./vue-i18n.runtime.esm-bundler.afe62f6e.js";
import "./DateField.5f0f8cb6.js";
import "./QDate.0b193be4.js";
import "./use-cache.b0833c75.js";
import "./use-quasar.e76cf75e.js";
import "./OrderContractorManagement.00a47771.js";
import "./QLinearProgress.260f6d4e.js";
import "./QList.64ccde9f.js";
import "./UserAvatar.927717eb.js";
import "./QImg.fa5e3572.js";
import "./use-ratio.8a21d56d.js";
import "./geolocation.479128f6.js";
import "./StatusTag.74d3ddb3.js";
import "./QBadge.44e41182.js";
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
            rounded: ""
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
