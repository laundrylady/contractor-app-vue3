import { Q as QPage } from "./QPage.00e39669.js";
import { u as useMixinSecurity } from "./security.b020fbcb.js";
import { B as defineComponent, r as ref, i as inject, o as onMounted, G as onBeforeUnmount, S as unref, m as openBlock, n as createElementBlock, l as createVNode, L as withCtx, O as QIcon, z as createCommentVNode, q as createBaseVNode, aI as toDisplayString, R as QBtn, M as QCardSection, aj as createTextVNode, F as Fragment, be as renderList, Q as QCard, K as createBlock, t as normalizeClass } from "./index.fa2b967f.js";
import { Q as QBreadcrumbsEl, a as QBreadcrumbs } from "./QBreadcrumbs.2b2e85a7.js";
import { Q as QSpace } from "./QSpace.488004bf.js";
import { Q as QTab } from "./QTab.d49762d9.js";
import { Q as QTabs } from "./QTabs.268e0a85.js";
import { a as api } from "./axios.814b97a2.js";
import { _ as _sfc_main$2 } from "./OrderCreate.81471bff.js";
import { _ as _sfc_main$3 } from "./OrderListFormat.8eef52ab.js";
import { u as useMixinDebug } from "./debug.972d445d.js";
import { h as hourBookingDisplay } from "./help.f5e0718f.js";
import "./QResizeObserver.1b458485.js";
import "./rtl.b51694b1.js";
import "./QToolbarTitle.74b355c8.js";
import "./QSelect.6207932e.js";
import "./selection.3328651a.js";
import "./QItemLabel.589b6673.js";
import "./QMenu.a931a59a.js";
import "./format.3e32b8d9.js";
import "./ClosePopup.fc0abb68.js";
import "./index.esm.7a448bf8.js";
import "./helpers.d66ac7c2.js";
import "./vue-i18n.runtime.esm-bundler.e59fb91d.js";
import "./DateField.6cc0bbd1.js";
import "./QDate.08f685c0.js";
import "./use-cache.b0833c75.js";
import "./use-quasar.8b6f305b.js";
import "./OrderContractorManagement.ac089c7e.js";
import "./QLinearProgress.e78cbb65.js";
import "./QList.468f0009.js";
import "./UserAvatar.b1ba3556.js";
import "./QImg.9979c59c.js";
import "./use-ratio.640b4c6a.js";
import "./open-url.c304bd08.js";
import "./geolocation.53be8175.js";
import "./StatusTag.8e4e723e.js";
import "./QBadge.13851b9d.js";
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
const _hoisted_8 = { class: "text-h6 q-mb-md" };
const _hoisted_9 = { key: 0 };
const _hoisted_10 = { key: 1 };
const _hoisted_11 = { key: 0 };
const _hoisted_12 = { key: 2 };
const _hoisted_13 = { key: 0 };
const _hoisted_14 = { key: 3 };
const _hoisted_15 = { key: 0 };
const _hoisted_16 = { class: "col-xs-12 col-sm-6" };
const _hoisted_17 = { class: "text-h6 q-mb-md" };
const _hoisted_18 = { key: 0 };
const _hoisted_19 = { class: "col-xs-12 col-sm-6" };
const _hoisted_20 = { class: "text-h6 q-mb-md" };
const _hoisted_21 = { key: 0 };
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
                      createBaseVNode("div", _hoisted_8, [
                        createTextVNode("Pickups / Deliveries "),
                        createVNode(QBtn, {
                          icon: "info",
                          onClick: _cache[1] || (_cache[1] = ($event) => showHelp.value = !showHelp.value),
                          size: "sm",
                          round: "",
                          dense: "",
                          flat: ""
                        })
                      ]),
                      showHelp.value ? (openBlock(), createElementBlock("p", _hoisted_9, [
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
                      pickupTab.value === "today" ? (openBlock(), createElementBlock("div", _hoisted_10, [
                        !dashboard.value.pickupsToday.length ? (openBlock(), createElementBlock("div", _hoisted_11, "No " + toDisplayString(_ctx.$t("order.namePlural").toLowerCase()) + " found. ", 1)) : createCommentVNode("", true),
                        (openBlock(true), createElementBlock(Fragment, null, renderList(dashboard.value.pickupsToday, (k) => {
                          return openBlock(), createElementBlock("div", {
                            key: k.key,
                            class: "q-mb-sm"
                          }, [
                            createVNode(_sfc_main$3, {
                              orders: k.data,
                              "no-avatar": true,
                              drag: true,
                              label: unref(hourBookingDisplay)(k.key),
                              optimal: true
                            }, null, 8, ["orders", "label"])
                          ]);
                        }), 128))
                      ])) : createCommentVNode("", true),
                      pickupTab.value === "week" ? (openBlock(), createElementBlock("div", _hoisted_12, [
                        !dashboard.value.pickupsWeek.length ? (openBlock(), createElementBlock("div", _hoisted_13, "No " + toDisplayString(_ctx.$t("order.namePlural").toLowerCase()) + " found. ", 1)) : createCommentVNode("", true),
                        createVNode(_sfc_main$3, {
                          orders: dashboard.value.pickupsWeek,
                          "no-avatar": true,
                          drag: true,
                          optimal: true
                        }, null, 8, ["orders"])
                      ])) : createCommentVNode("", true),
                      pickupTab.value === "missed" ? (openBlock(), createElementBlock("div", _hoisted_14, [
                        !dashboard.value.pickupsMissed.length ? (openBlock(), createElementBlock("div", _hoisted_15, "No " + toDisplayString(_ctx.$t("order.namePlural").toLowerCase()) + " found. ", 1)) : createCommentVNode("", true),
                        createVNode(_sfc_main$3, {
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
