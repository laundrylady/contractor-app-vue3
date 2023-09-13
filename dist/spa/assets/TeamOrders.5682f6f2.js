import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.e4dc584f.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode, p as createBaseVNode } from "./index.7f551f6a.js";
import "./QTable.3117d750.js";
import "./QList.a07706d2.js";
import "./QMarkupTable.6f777f51.js";
import "./QSelect.0c3fd45e.js";
import "./selection.62639f9a.js";
import "./QItemLabel.4aa4ec2c.js";
import "./QMenu.c6beb16c.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.9dc7a49f.js";
import "./use-fullscreen.be5526f2.js";
import "./ClosePopup.34ca9f24.js";
import "./axios.3311feff.js";
import "./StatusTag.a5ee9b51.js";
import "./QBadge.422c4cfa.js";
import "./debug.ffa51329.js";
import "./help.ceb9b487.js";
import "./vue-i18n.runtime.esm-bundler.422c3646.js";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5" }, "Booking History", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "Below is the complete booking history.", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TeamOrders",
  props: {
    model: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.model.id ? (openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        _hoisted_3,
        createVNode(_sfc_main$1, {
          team_id: __props.model.id
        }, null, 8, ["team_id"])
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
