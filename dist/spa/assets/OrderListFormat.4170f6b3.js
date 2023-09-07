import { a as QItem, Q as QItemSection } from "./selection.0f6039c3.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, N as QIcon, aG as createTextVNode, F as Fragment, bc as renderList, aH as toDisplayString, y as createCommentVNode, i as inject, bw as resolveComponent, J as createBlock, K as withCtx, q as normalizeStyle, p as createBaseVNode, R as unref, P as QBtn } from "./index.0a73f961.js";
import { Q as QSpace } from "./QSpace.b8c9fdeb.js";
import { Q as QList } from "./QList.79d8c960.js";
import { Q as QMenu } from "./QMenu.44421817.js";
import { e as displayDateDay, h as hourBookingDisplay, f as hourAgreedDisplay, o as openMapLink, g as currencyFormat, c as confirmDelete } from "./help.4d339a4c.js";
import { _ as _sfc_main$3 } from "./StatusTag.24193045.js";
import { _ as _sfc_main$2 } from "./UserAvatar.44d6fe9f.js";
import { g as getLocationPromise } from "./geolocation.65278eee.js";
import { a as api } from "./axios.753e2493.js";
import { u as useMixinDebug } from "./debug.ffa51329.js";
const _hoisted_1$1 = { key: 0 };
const _hoisted_2$1 = {
  key: 0,
  class: "q-ml-xs q-mr-xs"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "OrderProductCategoryDisplay",
  props: {
    o: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(QIcon, {
          name: "settings",
          color: "grey-7"
        }),
        createTextVNode(),
        __props.o.productcategories ? (openBlock(), createElementBlock("span", _hoisted_1$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.o.productcategories.filter((q) => q.meta && q.meta.pivot_active), (c, index) => {
            return openBlock(), createElementBlock("span", {
              key: c.id
            }, [
              createTextVNode(toDisplayString(c.name), 1),
              index + 1 !== __props.o.productcategories.filter((q) => q.meta && q.meta.pivot_active).length ? (openBlock(), createElementBlock("span", _hoisted_2$1, "&")) : createCommentVNode("", true)
            ]);
          }), 128)),
          createTextVNode(" pickup with " + toDisplayString(__props.o.team.name), 1)
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const _hoisted_1 = { class: "flex no-wrap" };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { key: 1 };
const _hoisted_5 = { class: "text-grey-7" };
const _hoisted_6 = { class: "text-grey-7" };
const _hoisted_7 = {
  key: 0,
  class: "q-mr-sm"
};
const _hoisted_8 = { class: "q-ml-xs text-right" };
const _hoisted_9 = {
  key: 0,
  class: "q-mb-xs"
};
const _hoisted_10 = { class: "text-right" };
const _hoisted_11 = { class: "text-h7 q-mt-xs" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OrderListFormat",
  props: {
    orders: null,
    noAvatar: { type: Boolean },
    dense: { type: Boolean },
    status: { type: Boolean },
    bookingId: { type: Boolean }
  },
  setup(__props) {
    const bus = inject("bus");
    const onMyWay = async (o) => {
      const currentLoc = await getLocationPromise();
      let latLng = { lat: null, lng: null };
      if (currentLoc.lat && currentLoc.lng) {
        latLng = { lat: currentLoc.lat, lng: currentLoc.lng };
      } else {
        latLng = { lat: o.contractor.lat, lng: o.contractor.lng };
      }
      confirmDelete("This will send an SMS to the customer notifying them you are on your way to pickup").onOk(() => {
        api.post(`/public/order/onmyway/${o.id}`, { origin: latLng }).then(() => {
          bus.emit("orderLoadMore");
        }).catch((error) => {
          useMixinDebug(error);
        });
      });
    };
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createBlock(QList, {
        separator: "",
        class: "bg-white",
        dense: __props.dense
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.orders, (o) => {
            return openBlock(), createBlock(QItem, {
              key: o.id,
              style: normalizeStyle(__props.dense ? "padding:0" : "")
            }, {
              default: withCtx(() => [
                !__props.noAvatar && o.contractor ? (openBlock(), createBlock(QItemSection, {
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
                    createBaseVNode("div", _hoisted_1, [
                      createBaseVNode("div", null, [
                        createBaseVNode("div", null, [
                          __props.bookingId ? (openBlock(), createElementBlock("div", _hoisted_2, " Booking: #" + toDisplayString(o.display_id), 1)) : createCommentVNode("", true),
                          createVNode(_component_router_link, {
                            to: { name: "order-edit", params: { id: o.id } },
                            class: "link"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(displayDateDay)(o.scheduled_pickup_date)) + " " + toDisplayString(o.scheduled_pickup_date) + " (", 1),
                              !o.agreed_pickup_time && o.scheduled_pickup_time ? (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(unref(hourBookingDisplay)(o.scheduled_pickup_time)), 1)) : createCommentVNode("", true),
                              o.agreed_pickup_time ? (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(unref(hourAgreedDisplay)(o.agreed_pickup_time)), 1)) : createCommentVNode("", true),
                              createTextVNode(")")
                            ]),
                            _: 2
                          }, 1032, ["to"])
                        ]),
                        createBaseVNode("div", _hoisted_5, [
                          createVNode(_sfc_main$1, { o }, null, 8, ["o"])
                        ]),
                        createBaseVNode("div", _hoisted_6, [
                          createVNode(QIcon, {
                            name: "place",
                            color: "grey-7"
                          }),
                          createTextVNode(),
                          o.team.suburbpostcoderegion ? (openBlock(), createElementBlock("span", _hoisted_7, toDisplayString(o.team.suburbpostcoderegion.locality) + " " + toDisplayString(o.team.suburbpostcoderegion.state), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode(QSpace),
                      createBaseVNode("div", _hoisted_8, [
                        __props.status ? (openBlock(), createElementBlock("div", _hoisted_9, [
                          createVNode(_sfc_main$3, {
                            status: o.status,
                            small: true
                          }, null, 8, ["status"])
                        ])) : createCommentVNode("", true),
                        createBaseVNode("div", _hoisted_10, [
                          createVNode(QBtn, {
                            flat: "",
                            icon: "place",
                            dense: "",
                            round: "",
                            color: "grey-8"
                          }, {
                            default: withCtx(() => [
                              createVNode(QMenu, null, {
                                default: withCtx(() => [
                                  createVNode(QList, null, {
                                    default: withCtx(() => [
                                      createVNode(QItem, {
                                        onClick: ($event) => unref(openMapLink)(o.lat, o.lng, "google"),
                                        clickable: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(QItemSection, null, {
                                            default: withCtx(() => [
                                              createTextVNode(" Open in Google Maps ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"]),
                                      createVNode(QItem, {
                                        onClick: ($event) => unref(openMapLink)(o.lat, o.lng, "apple"),
                                        clickable: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(QItemSection, null, {
                                            default: withCtx(() => [
                                              createTextVNode(" Open in Apple Maps ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024),
                          o.status === "confirmed" ? (openBlock(), createBlock(QBtn, {
                            key: 0,
                            onClick: ($event) => onMyWay(o),
                            color: "primary",
                            round: "",
                            dense: "",
                            icon: "directions_car",
                            class: "q-ml-xs",
                            title: "Notify the customer you are on your way to pickup",
                            flat: ""
                          }, null, 8, ["onClick"])) : createCommentVNode("", true)
                        ])
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024),
                o.grand_total_price > 0 ? (openBlock(), createBlock(QItemSection, {
                  key: 1,
                  side: ""
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_11, toDisplayString(unref(currencyFormat)(o.grand_total_price)), 1)
                  ]),
                  _: 2
                }, 1024)) : createCommentVNode("", true)
              ]),
              _: 2
            }, 1032, ["style"]);
          }), 128))
        ]),
        _: 1
      }, 8, ["dense"]);
    };
  }
});
export { _sfc_main as _ };
