import { a as QItem, Q as QItemSection } from "./QItemSection.d4f7e02a.js";
import { A as defineComponent, J as resolveComponent, m as openBlock, K as createBlock, L as withCtx, n as createElementBlock, F as Fragment, be as renderList, l as createVNode, y as createCommentVNode, q as createBaseVNode, R as createTextVNode, aI as toDisplayString, U as unref, O as QIcon } from "./index.743d7681.js";
import { Q as QList } from "./QList.9ba32f52.js";
import { i as displayDateDay, j as hourBookingDisplay, k as hourAgreedDisplay } from "./help.dfac819e.js";
import { _ as _sfc_main$1 } from "./UserAvatar.992447d7.js";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { key: 1 };
const _hoisted_3 = { class: "text-grey-7 text-caption" };
const _hoisted_4 = { key: 0 };
const _hoisted_5 = {
  key: 0,
  class: "q-ml-xs q-mr-xs"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
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
                    createVNode(_sfc_main$1, {
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
                        target: "_blank",
                        class: "link"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(displayDateDay)(o.scheduled_pickup_date)) + " (", 1),
                          !o.agreed_pickup_time ? (openBlock(), createElementBlock("span", _hoisted_1, toDisplayString(unref(hourBookingDisplay)(o.scheduled_pickup_time)), 1)) : createCommentVNode("", true),
                          o.agreed_pickup_time ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(unref(hourAgreedDisplay)(o.agreed_pickup_time)), 1)) : createCommentVNode("", true),
                          createTextVNode(")")
                        ]),
                        _: 2
                      }, 1032, ["to"]),
                      createBaseVNode("div", _hoisted_3, [
                        createVNode(QIcon, {
                          name: "settings",
                          color: "grey-7"
                        }),
                        createTextVNode(),
                        o.productcategories ? (openBlock(), createElementBlock("span", _hoisted_4, [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(o.productcategories, (c, index) => {
                            return openBlock(), createElementBlock("span", {
                              key: c.id
                            }, [
                              createTextVNode(toDisplayString(c.name), 1),
                              index + 1 !== o.productcategories.length ? (openBlock(), createElementBlock("span", _hoisted_5, "&")) : createCommentVNode("", true)
                            ]);
                          }), 128)),
                          createTextVNode(" pickup with " + toDisplayString(o.team.name), 1)
                        ])) : createCommentVNode("", true)
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
export { _sfc_main as _ };
