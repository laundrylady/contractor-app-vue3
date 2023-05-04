import { A as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, l as createVNode, S as QBtn } from "./index.1b2f6b7e.js";
import { _ as _sfc_main$1 } from "./AppLogo.190f0f08.js";
const _hoisted_1 = { class: "fullscreen text-center q-pa-md flex flex-center" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", {
  class: "text-h6 q-mt-md",
  style: { "opacity": ".4" }
}, " We couldn't find the page or resource you're looking for. ", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ErrorNotFound",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", null, [
          createVNode(_sfc_main$1),
          _hoisted_2,
          createVNode(QBtn, {
            class: "q-mt-xl",
            color: "white",
            "text-color": "blue",
            unelevated: "",
            to: "/",
            label: "Go Home",
            "no-caps": ""
          })
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
