import { Q as QBadge } from "./QBadge.0a6574c4.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, F as Fragment, bd as renderList, J as createBlock } from "./index.f86c1423.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PostcodeRegionDisplay",
  props: {
    postcoderegions: null,
    white: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.postcoderegions, (s) => {
          return openBlock(), createBlock(QBadge, {
            label: `${s.locality} (${s.state} ${s.postcode})`,
            key: s.id,
            color: __props.white ? "transparent" : "grey-2",
            "text-color": __props.white ? "white" : "grey-8",
            class: "q-mr-xs q-mb-xs q-pa-sm"
          }, null, 8, ["label", "color", "text-color"]);
        }), 128))
      ]);
    };
  }
});
export { _sfc_main as _ };
