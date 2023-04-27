import { A as defineComponent, m as openBlock, n as createElementBlock, s as normalizeStyle } from "./index.f0b4ebe6.js";
var _imports_0 = "/portal/assets/logo.c4b3b21d.webp";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppLogo",
  props: {
    header: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("img", {
        src: _imports_0,
        style: normalizeStyle(`max-height:${__props.header ? "65" : "126"}px;`)
      }, null, 4);
    };
  }
});
export { _sfc_main as _ };
