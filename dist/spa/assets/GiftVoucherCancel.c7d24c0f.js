import { B as defineComponent, m as openBlock, K as createBlock, L as withCtx, l as createVNode, q as createBaseVNode, Q as QCard, M as QCardSection, ab as QCardActions, R as QBtn } from "./index.925d5c0f.js";
import { Q as QPage } from "./QPage.21a1cd9b.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.ab83928f.js";
import { _ as _sfc_main$1 } from "./AppLogo.9366ac09.js";
import "./QResizeObserver.2f2e7330.js";
const _hoisted_1 = { class: "col-xs-12 col-sm-10 col-md-5" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5 q-mb-md" }, "Your purchase has been cancelled!", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GiftVoucherCancel",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QLayout, { view: "lHh Lpr lFf" }, {
        default: withCtx(() => [
          createVNode(QPageContainer, null, {
            default: withCtx(() => [
              createVNode(QPage, {
                class: "row justify-center items-center animated fadeIn",
                padding: ""
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_1, [
                    createVNode(QCard, null, {
                      default: withCtx(() => [
                        createVNode(QCardSection, { class: "q-pt-xs q-pb-xs" }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$1)
                          ]),
                          _: 1
                        }),
                        createVNode(QCardSection, null, {
                          default: withCtx(() => [
                            _hoisted_2
                          ]),
                          _: 1
                        }),
                        createVNode(QCardActions, null, {
                          default: withCtx(() => [
                            createVNode(QBtn, {
                              to: { name: "giftVoucherPurchase" },
                              label: "Click here to puchase another gift voucher",
                              "no-caps": "",
                              flat: "",
                              color: "primary",
                              rounded: ""
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
export { _sfc_main as default };
