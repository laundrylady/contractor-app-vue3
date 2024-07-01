import { Q as QBadge } from "./QBadge.1515a847.js";
import { u as useMixinCommon } from "./common.5e8cb1e5.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, F as Fragment, ab as renderList, aa as createBlock, R as unref } from "./index.f0bcd142.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PostcodeRegionDisplay",
  props: {
    postcoderegions: null,
    white: { type: Boolean }
  },
  setup(__props) {
    const common = useMixinCommon();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.postcoderegions, (s) => {
          var _a;
          return openBlock(), createBlock(QBadge, {
            label: `${s.locality}${((_a = unref(common)) == null ? void 0 : _a.operating_country) === "aud" ? ` (${s.state})` : ` (${s.region})`}`,
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
