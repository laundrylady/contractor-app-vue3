import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.8d585fef.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.277d24a1.js";
import "./QTd.d1d31c16.js";
import "./QItemSection.16f5ae57.js";
import "./QList.bee620e4.js";
import "./QMenu.a14ae47e.js";
import "./selection.23d3862c.js";
import "./QTable.8b825d4d.js";
import "./QMarkupTable.4416838e.js";
import "./QSelect.8acef832.js";
import "./QItemLabel.929aeee0.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.747417f9.js";
import "./use-fullscreen.0d1738a8.js";
import "./ClosePopup.568a27e1.js";
import "./axios.1a7b9e5d.js";
import "./StatusTag.6ec70f00.js";
import "./QBadge.69792835.js";
import "./debug.972d445d.js";
import "./help.d064b2a0.js";
import "./vue-i18n.runtime.esm-bundler.580af2d8.js";
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
