import { a as QItem, Q as QItemSection } from "./QItemSection.4ac56135.js";
import { A as defineComponent, bv as resolveComponent, l as openBlock, J as createBlock, K as withCtx, m as createElementBlock, F as Fragment, bd as renderList, q as normalizeStyle, k as createVNode, y as createCommentVNode, p as createBaseVNode, aH as toDisplayString, aG as createTextVNode, R as unref, N as QIcon } from "./index.b831cb22.js";
import { Q as QSpace } from "./QSpace.b77f9c3c.js";
import { Q as QList } from "./QList.6332f811.js";
import { b as displayDateDay, e as hourBookingDisplay, f as hourAgreedDisplay, g as currencyFormat } from "./help.e6021a60.js";
import { _ as _sfc_main$1 } from "./UserAvatar.2770df2a.js";
import { _ as _sfc_main$2 } from "./StatusTag.17a522de.js";
const _hoisted_1 = { class: "flex no-wrap" };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { key: 1 };
const _hoisted_5 = { class: "text-grey-7" };
const _hoisted_6 = { key: 0 };
const _hoisted_7 = {
  key: 0,
  class: "q-ml-xs q-mr-xs"
};
const _hoisted_8 = {
  key: 0,
  class: "text-grey-7"
};
const _hoisted_9 = {
  key: 0,
  class: "q-mr-sm"
};
const _hoisted_10 = {
  key: 0,
  class: "q-ml-xs"
};
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
                    createVNode(_sfc_main$1, {
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
                              !o.agreed_pickup_time ? (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(unref(hourBookingDisplay)(o.scheduled_pickup_time)), 1)) : createCommentVNode("", true),
                              o.agreed_pickup_time ? (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(unref(hourAgreedDisplay)(o.agreed_pickup_time)), 1)) : createCommentVNode("", true),
                              createTextVNode(")")
                            ]),
                            _: 2
                          }, 1032, ["to"])
                        ]),
                        createBaseVNode("div", _hoisted_5, [
                          createVNode(QIcon, {
                            name: "settings",
                            color: "grey-7"
                          }),
                          createTextVNode(),
                          o.productcategories ? (openBlock(), createElementBlock("span", _hoisted_6, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(o.productcategories, (c, index) => {
                              return openBlock(), createElementBlock("span", {
                                key: c.id
                              }, [
                                createTextVNode(toDisplayString(c.name), 1),
                                index + 1 !== o.productcategories.length ? (openBlock(), createElementBlock("span", _hoisted_7, "&")) : createCommentVNode("", true)
                              ]);
                            }), 128)),
                            createTextVNode(" pickup with " + toDisplayString(o.team.name), 1)
                          ])) : createCommentVNode("", true)
                        ]),
                        !__props.bookingId ? (openBlock(), createElementBlock("div", _hoisted_8, [
                          createVNode(QIcon, {
                            name: "place",
                            color: "grey-7"
                          }),
                          createTextVNode(),
                          o.team.suburbpostcoderegion ? (openBlock(), createElementBlock("span", _hoisted_9, toDisplayString(o.team.suburbpostcoderegion.locality) + " " + toDisplayString(o.team.suburbpostcoderegion.state), 1)) : createCommentVNode("", true)
                        ])) : createCommentVNode("", true)
                      ]),
                      createVNode(QSpace),
                      __props.status ? (openBlock(), createElementBlock("div", _hoisted_10, [
                        createVNode(_sfc_main$2, {
                          status: o.status,
                          small: true
                        }, null, 8, ["status"])
                      ])) : createCommentVNode("", true)
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
