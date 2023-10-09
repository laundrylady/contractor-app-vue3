import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.d7eec368.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.ce4c1a7a.js";
import "./QTd.1a37e1d1.js";
import "./selection.65eebc9b.js";
import "./QList.05512999.js";
import "./QMenu.9894afac.js";
import "./QTable.5629925a.js";
import "./QMarkupTable.fd46d04d.js";
import "./QSelect.34b2bc9a.js";
import "./QItemLabel.ee47553a.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.6889a73e.js";
import "./use-fullscreen.4c3a5d4e.js";
import "./ClosePopup.c33d2dae.js";
import "./axios.b7066d7d.js";
import "./StatusTag.717559bf.js";
import "./QBadge.8ce50fcc.js";
import "./debug.ffa51329.js";
import "./help.78e61210.js";
import "./vue-i18n.runtime.esm-bundler.504df29d.js";
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
