import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.90c0f3bd.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.350647ef.js";
import "./QTd.614b9079.js";
import "./QItemSection.b9dcc858.js";
import "./QList.d5d141cd.js";
import "./QMenu.7c067e85.js";
import "./selection.06c21360.js";
import "./QTable.e601d8cb.js";
import "./QMarkupTable.5cf07a11.js";
import "./QSelect.53ebc878.js";
import "./QItemLabel.a8f6f695.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.0255cee4.js";
import "./use-fullscreen.e7b79ad2.js";
import "./ClosePopup.95dac8cc.js";
import "./axios.e286ea64.js";
import "./StatusTag.23948390.js";
import "./QBadge.55270bd5.js";
import "./debug.972d445d.js";
import "./help.3d30d2fa.js";
import "./vue-i18n.runtime.esm-bundler.9bdeedf2.js";
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
