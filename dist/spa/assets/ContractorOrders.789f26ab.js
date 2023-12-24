import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.fbcccc80.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.f3826b35.js";
import "./QTd.4137564b.js";
import "./QItemSection.cc0d0b61.js";
import "./QList.8ab39670.js";
import "./QMenu.7ce22bf8.js";
import "./selection.baeadaa7.js";
import "./QTable.e9a94727.js";
import "./QMarkupTable.d523c261.js";
import "./QSelect.9148827d.js";
import "./QItemLabel.8ea3d53c.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.5130c9be.js";
import "./use-fullscreen.e3b182fc.js";
import "./ClosePopup.fcbb03a2.js";
import "./axios.afd10d98.js";
import "./StatusTag.1b2e76da.js";
import "./QBadge.b7d8a479.js";
import "./debug.972d445d.js";
import "./help.bbbdd6ab.js";
import "./vue-i18n.runtime.esm-bundler.224a54cd.js";
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
