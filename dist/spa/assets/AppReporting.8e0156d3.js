import { _ as _export_sfc, J as resolveComponent, m as openBlock, K as createBlock, L as withCtx, l as createVNode, O as QIcon, q as createBaseVNode, M as QCardSection, aF as toDisplayString, R as createTextVNode, Q as QCard } from "./index.f0b4ebe6.js";
import { Q as QBreadcrumbsEl, a as QBreadcrumbs } from "./QBreadcrumbs.a1f4fd82.js";
import { a as QItem, Q as QItemSection } from "./QItemSection.9ea19b97.js";
import { Q as QList } from "./QList.4c7ed513.js";
import { Q as QPage } from "./QPage.4ff7b878.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h4 q-mb-md" }, " Reporting ", -1);
const _hoisted_2 = { class: "row q-col-gutter-md" };
const _hoisted_3 = { class: "col-xs-12 col-sm-6 q-mb-md" };
const _hoisted_4 = { class: "text-h6 q-mb-md" };
const _hoisted_5 = { class: "col-xs-12 col-sm-6 q-mb-md" };
const _hoisted_6 = { class: "text-h6 q-mb-md" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createBlock(QPage, { padding: "" }, {
    default: withCtx(() => [
      createVNode(QBreadcrumbs, { class: "q-mb-md q-mt-md" }, {
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
          }),
          createVNode(QBreadcrumbsEl, { label: "Reporting" })
        ]),
        _: 1
      }),
      _hoisted_1,
      createBaseVNode("div", _hoisted_2, [
        createBaseVNode("div", _hoisted_3, [
          createVNode(QCard, null, {
            default: withCtx(() => [
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_4, toDisplayString(_ctx.$t("contractor.namePlural")), 1),
                  createVNode(QList, { separator: "" }, {
                    default: withCtx(() => [
                      createVNode(QItem, null, {
                        default: withCtx(() => [
                          createVNode(QItemSection, null, {
                            default: withCtx(() => [
                              createVNode(_component_router_link, {
                                to: { name: "reporting-contractor-commissions-overview" },
                                class: "link"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Commissions Overview")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(QItem, null, {
                        default: withCtx(() => [
                          createVNode(QItemSection, null, {
                            default: withCtx(() => [
                              createVNode(_component_router_link, {
                                to: { name: "reporting-contractor-commissions-owing" },
                                class: "link"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Commissions Owing")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(QItem, null, {
                        default: withCtx(() => [
                          createVNode(QItemSection, null, {
                            default: withCtx(() => [
                              createVNode(_component_router_link, {
                                to: { name: "reporting-contractor-commissions-paid" },
                                class: "link"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Commissions Paid")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_5, [
          createVNode(QCard, null, {
            default: withCtx(() => [
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_6, toDisplayString(_ctx.$t("order.namePlural")), 1),
                  createVNode(QList, { separator: "" }, {
                    default: withCtx(() => [
                      createVNode(QItem, null, {
                        default: withCtx(() => [
                          createVNode(QItemSection, null, {
                            default: withCtx(() => [
                              createVNode(_component_router_link, {
                                to: { name: "reporting-order-overview" },
                                class: "link"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Overview")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _: 1
  });
}
var AppReporting = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { AppReporting as default };
