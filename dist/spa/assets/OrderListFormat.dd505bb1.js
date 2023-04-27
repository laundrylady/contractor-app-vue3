import { a as QItem, Q as QItemSection } from "./QItemSection.9ea19b97.js";
import { A as defineComponent, i as inject, m as openBlock, K as createBlock, L as withCtx, n as createElementBlock, F as Fragment, bi as renderList, l as createVNode, y as createCommentVNode, q as createBaseVNode, R as createTextVNode, aF as toDisplayString, U as unref, O as QIcon } from "./index.f0b4ebe6.js";
import { Q as QList } from "./QList.4c7ed513.js";
import { i as displayDateDay, j as hourBookingDisplay, k as hourAgreedDisplay, a as currencyFormat } from "./help.cd1e743b.js";
import { _ as _sfc_main$2 } from "./StatusTag.5102fbf8.js";
import { _ as _sfc_main$1 } from "./UserAvatar.cff2b3e8.js";
const _hoisted_1 = ["onClick"];
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { key: 1 };
const _hoisted_4 = { class: "text-grey-7" };
const _hoisted_5 = { key: 0 };
const _hoisted_6 = {
  key: 0,
  class: "q-ml-xs q-mr-xs"
};
const _hoisted_7 = { class: "text-grey-7" };
const _hoisted_8 = {
  key: 0,
  class: "q-mr-sm"
};
const _hoisted_9 = { class: "text-h7 q-mt-xs" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OrderListFormat",
  props: {
    orders: null,
    noAvatar: { type: Boolean }
  },
  setup(__props) {
    const bus = inject("bus");
    const editOrderModal = (id) => {
      bus.emit("editOrderModal", id);
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QList, {
        separator: "",
        class: "bg-white"
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.orders, (o) => {
            return openBlock(), createBlock(QItem, {
              key: o.id
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
                    createBaseVNode("div", null, [
                      createBaseVNode("a", {
                        onClick: ($event) => editOrderModal(o.id),
                        class: "link"
                      }, [
                        createTextVNode(toDisplayString(unref(displayDateDay)(o.scheduled_pickup_date)) + " " + toDisplayString(o.scheduled_pickup_date) + " (", 1),
                        !o.agreed_pickup_time ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(unref(hourBookingDisplay)(o.scheduled_pickup_time)), 1)) : createCommentVNode("", true),
                        o.agreed_pickup_time ? (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(unref(hourAgreedDisplay)(o.agreed_pickup_time)), 1)) : createCommentVNode("", true),
                        createTextVNode(")")
                      ], 8, _hoisted_1),
                      createVNode(_sfc_main$2, {
                        status: o.status,
                        small: true,
                        class: "q-ml-xs"
                      }, null, 8, ["status"])
                    ]),
                    createBaseVNode("div", _hoisted_4, [
                      createVNode(QIcon, {
                        name: "settings",
                        color: "grey-7"
                      }),
                      createTextVNode(),
                      o.productcategories ? (openBlock(), createElementBlock("span", _hoisted_5, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(o.productcategories, (c, index) => {
                          return openBlock(), createElementBlock("span", {
                            key: c.id
                          }, [
                            createTextVNode(toDisplayString(c.name), 1),
                            index + 1 !== o.productcategories.length ? (openBlock(), createElementBlock("span", _hoisted_6, "&")) : createCommentVNode("", true)
                          ]);
                        }), 128)),
                        createTextVNode(" pickup with " + toDisplayString(o.team.name), 1)
                      ])) : createCommentVNode("", true)
                    ]),
                    createBaseVNode("div", _hoisted_7, [
                      createVNode(QIcon, {
                        name: "place",
                        color: "grey-7"
                      }),
                      createTextVNode(),
                      o.team.suburbpostcoderegion ? (openBlock(), createElementBlock("span", _hoisted_8, toDisplayString(o.team.suburbpostcoderegion.locality) + " " + toDisplayString(o.team.suburbpostcoderegion.state), 1)) : createCommentVNode("", true)
                    ])
                  ]),
                  _: 2
                }, 1024),
                o.grand_total_price > 0 ? (openBlock(), createBlock(QItemSection, {
                  key: 1,
                  side: ""
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_9, toDisplayString(unref(currencyFormat)(o.grand_total_price)), 1)
                  ]),
                  _: 2
                }, 1024)) : createCommentVNode("", true)
              ]),
              _: 2
            }, 1024);
          }), 128))
        ]),
        _: 1
      });
    };
  }
});
export { _sfc_main as _ };
