import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.a364611f.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.f13a0a63.js";
import "./QTd.c9d3d84d.js";
import "./selection.61767fca.js";
import "./QList.72ea9ff3.js";
import "./QMenu.c2446229.js";
import "./QTable.2d314a5c.js";
import "./QMarkupTable.44c01df5.js";
import "./QSelect.af8d3bce.js";
import "./QItemLabel.694406e9.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.3caa48da.js";
import "./use-fullscreen.ddc15a5e.js";
import "./ClosePopup.89a732ba.js";
import "./axios.094dfea6.js";
import "./StatusTag.b44fec98.js";
import "./QBadge.c68b1132.js";
import "./debug.972d445d.js";
import "./help.70c21ff9.js";
import "./vue-i18n.runtime.esm-bundler.ee362ea0.js";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5" }, "Booking History", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContractorOrders",
  props: {
    model: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.model.id ? (openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("p", null, "Below is the complete booking history for this " + toDisplayString(_ctx.$t("contractor.name").toLowerCase()) + ".", 1),
        createVNode(_sfc_main$1, {
          contractor_user_id: __props.model.id
        }, null, 8, ["contractor_user_id"])
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
