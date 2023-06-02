import { A as defineComponent, l as openBlock, J as createBlock, K as withCtx, k as createVNode, p as createBaseVNode, Q as QCard, L as QCardSection, aa as QCardActions, P as QBtn } from "./index.e94f5960.js";
import { Q as QPage } from "./QPage.82bb27c1.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.c6f613ee.js";
import { _ as _sfc_main$1 } from "./AppLogo.2c22791d.js";
const _hoisted_1 = { class: "col-xs-12 col-sm-10 col-md-5" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5 q-mb-md" }, "Your Gift Voucher purchase has been successful!", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "Check your email for the Gift Voucher, Invoice, and instructions on how to use the Gift Voucher.", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GiftVoucherSuccess",
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
                        createVNode(QCardSection, null, {
                          default: withCtx(() => [
                            createVNode(QCardSection, { class: "q-pt-xs q-pb-xs" }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$1)
                              ]),
                              _: 1
                            }),
                            _hoisted_2,
                            _hoisted_3
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
                              color: "primary"
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
