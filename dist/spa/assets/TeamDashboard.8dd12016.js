import { B as defineComponent, by as resolveComponent, m as openBlock, K as createBlock, L as withCtx, n as createElementBlock, F as Fragment, be as renderList, l as createVNode, z as createCommentVNode, q as createBaseVNode, ak as createTextVNode, aj as toDisplayString, S as unref, O as QIcon, r as ref, o as onMounted, Q as QCard, M as QCardSection } from "./index.3b1f6dca.js";
import { a as api } from "./axios.306b0a63.js";
import { _ as _sfc_main$3 } from "./GlobalNotes.f073fddf.js";
import { _ as _sfc_main$4 } from "./OrderListFormat.0f20ab73.js";
import { a as QItem, Q as QItemSection } from "./QItemSection.19624de0.js";
import { Q as QList } from "./QList.d0ffde4f.js";
import { B as displayDateDay, h as hourBookingDisplay, g as hourAgreedDisplay } from "./help.cdbb3d30.js";
import { _ as _sfc_main$2 } from "./UserAvatar.a099689b.js";
import { u as useMixinDebug } from "./debug.972d445d.js";
import "./QToolbarTitle.a404fc38.js";
import "./security.04259ad9.js";
import "./QSpace.9e75d850.js";
import "./QMenu.1e7752f1.js";
import "./selection.29e02e4f.js";
import "./open-url.011f3d2e.js";
import "./use-quasar.9fc33113.js";
import "./geolocation.f8b925d2.js";
import "./StatusTag.6bbbb301.js";
import "./QBadge.cad84f5a.js";
import "./QImg.bad908e9.js";
import "./use-ratio.85cee1e8.js";
const _hoisted_1$1 = { key: 0 };
const _hoisted_2$1 = { key: 1 };
const _hoisted_3$1 = { class: "text-grey-7 text-caption" };
const _hoisted_4$1 = { key: 0 };
const _hoisted_5$1 = {
  key: 0,
  class: "q-ml-xs q-mr-xs"
};
const _hoisted_6$1 = { class: "text-grey-7" };
const _hoisted_7$1 = {
  key: 0,
  class: "q-mr-sm"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "OrderRecurringBookingFormat",
  props: {
    orders: null,
    noAvatar: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return __props.orders && __props.orders.length ? (openBlock(), createBlock(QList, {
        key: 0,
        class: "bg-white"
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.orders, (o) => {
            return openBlock(), createBlock(QItem, {
              key: o.id
            }, {
              default: withCtx(() => [
                o.contractor && !__props.noAvatar ? (openBlock(), createBlock(QItemSection, {
                  key: 0,
                  avatar: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$2, {
                      user: o.contractor
                    }, null, 8, ["user"])
                  ]),
                  _: 2
                }, 1024)) : createCommentVNode("", true),
                createVNode(QItemSection, null, {
                  default: withCtx(() => [
                    createBaseVNode("div", null, [
                      createVNode(_component_router_link, {
                        to: { name: "order-edit", params: { id: o.id } },
                        class: "link"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(displayDateDay)(o.scheduled_pickup_date)) + " (", 1),
                          !o.agreed_pickup_time ? (openBlock(), createElementBlock("span", _hoisted_1$1, toDisplayString(unref(hourBookingDisplay)(o.scheduled_pickup_time)), 1)) : createCommentVNode("", true),
                          o.agreed_pickup_time ? (openBlock(), createElementBlock("span", _hoisted_2$1, toDisplayString(unref(hourAgreedDisplay)(o.agreed_pickup_time)), 1)) : createCommentVNode("", true),
                          createTextVNode(")")
                        ]),
                        _: 2
                      }, 1032, ["to"]),
                      createBaseVNode("div", _hoisted_3$1, [
                        createVNode(QIcon, {
                          name: "settings",
                          color: "grey-7"
                        }),
                        createTextVNode(),
                        o.productcategories ? (openBlock(), createElementBlock("span", _hoisted_4$1, [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(o.productcategories, (c, index) => {
                            return openBlock(), createElementBlock("span", {
                              key: c.id
                            }, [
                              createTextVNode(toDisplayString(c.name), 1),
                              index + 1 !== o.productcategories.length ? (openBlock(), createElementBlock("span", _hoisted_5$1, "&")) : createCommentVNode("", true)
                            ]);
                          }), 128)),
                          createTextVNode(" pickup with " + toDisplayString(o.team.name), 1)
                        ])) : createCommentVNode("", true)
                      ]),
                      createBaseVNode("div", _hoisted_6$1, [
                        createVNode(QIcon, {
                          name: "place",
                          color: "grey-7"
                        }),
                        createTextVNode(),
                        o.team.suburbpostcoderegion ? (openBlock(), createElementBlock("span", _hoisted_7$1, toDisplayString(o.team.suburbpostcoderegion.locality) + " " + toDisplayString(o.team.suburbpostcoderegion.state), 1)) : createCommentVNode("", true)
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024);
          }), 128))
        ]),
        _: 1
      })) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "row q-col-gutter-md q-mb-lg" };
const _hoisted_3 = { class: "col-xs-12 col-sm-6" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 q-mb-md" }, "Awaiting Pickup", -1);
const _hoisted_5 = { key: 0 };
const _hoisted_6 = { class: "col-xs-12 col-sm-6" };
const _hoisted_7 = { class: "text-h6 q-mb-md" };
const _hoisted_8 = { key: 0 };
const _hoisted_9 = { class: "col-xs-12 col-sm-6" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 q-mb-md" }, "In Progress", -1);
const _hoisted_11 = { key: 0 };
const _hoisted_12 = { class: "col-xs-12 col-sm-6" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 q-mb-md" }, "Recently Completed", -1);
const _hoisted_14 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TeamDashboard",
  props: {
    model: null
  },
  setup(__props) {
    const props = __props;
    const dashboard = ref();
    const recurringOrders = ref();
    const getDashboard = () => {
      if (props.model) {
        api.get(`/team/dashboard/${props.model.id}`).then((response) => {
          dashboard.value = response.data;
        }).catch((error) => {
          useMixinDebug(error);
        });
      }
    };
    const getRecurringOrders = () => {
      api.get(`/team/recurring/${props.model.id}`).then((response) => {
        recurringOrders.value = response.data;
      }).catch((error) => {
        useMixinDebug(error);
      });
    };
    onMounted(() => {
      getDashboard();
      getRecurringOrders();
    });
    return (_ctx, _cache) => {
      return __props.model.id && dashboard.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(QCard, { class: "bg-seamless" }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    _hoisted_4,
                    !dashboard.value.ordersConfirmed.length ? (openBlock(), createElementBlock("div", _hoisted_5, "No " + toDisplayString(_ctx.$t("order.namePlural").toLowerCase()) + " found. ", 1)) : createCommentVNode("", true),
                    createVNode(_sfc_main$4, {
                      orders: dashboard.value.ordersConfirmed
                    }, null, 8, ["orders"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_6, [
            createVNode(QCard, { class: "bg-seamless" }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_7, [
                      createVNode(QIcon, { name: "sync" }),
                      createTextVNode(" Recurring " + toDisplayString(_ctx.$t("order.namePlural")), 1)
                    ]),
                    !recurringOrders.value || !recurringOrders.value.length ? (openBlock(), createElementBlock("div", _hoisted_8, "No " + toDisplayString(_ctx.$t("order.namePlural").toLowerCase()) + " found. ", 1)) : createCommentVNode("", true),
                    recurringOrders.value ? (openBlock(), createBlock(_sfc_main$1, {
                      key: 1,
                      orders: recurringOrders.value
                    }, null, 8, ["orders"])) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_9, [
            createVNode(QCard, { class: "bg-seamless" }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    _hoisted_10,
                    !dashboard.value.ordersInprogress.length ? (openBlock(), createElementBlock("div", _hoisted_11, "No " + toDisplayString(_ctx.$t("order.namePlural").toLowerCase()) + " found. ", 1)) : createCommentVNode("", true),
                    createVNode(_sfc_main$4, {
                      orders: dashboard.value.ordersInprogress
                    }, null, 8, ["orders"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_12, [
            createVNode(QCard, { class: "bg-seamless" }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    _hoisted_13,
                    !dashboard.value.ordersRecentCompleted.length ? (openBlock(), createElementBlock("div", _hoisted_14, "No " + toDisplayString(_ctx.$t("order.namePlural").toLowerCase()) + " found. ", 1)) : createCommentVNode("", true),
                    createVNode(_sfc_main$4, {
                      orders: dashboard.value.ordersRecentCompleted
                    }, null, 8, ["orders"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])
        ]),
        createVNode(_sfc_main$3, {
          notable_id: __props.model.id,
          notable_type: "Team",
          nobox: true
        }, null, 8, ["notable_id"])
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
