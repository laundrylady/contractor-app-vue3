import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.88ec08bb.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.2c1bc8d2.js";
import "./QTd.e766a39d.js";
import "./selection.a97a1f9b.js";
import "./QList.3fdf49c6.js";
import "./QMenu.1a847d0c.js";
import "./QTable.c1174dcf.js";
import "./QMarkupTable.b9291195.js";
import "./QSelect.8e4495e5.js";
import "./QItemLabel.8c6bc0aa.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.545f33e7.js";
import "./use-fullscreen.a82cb636.js";
import "./ClosePopup.2af09889.js";
import "./axios.d4b7da8a.js";
import "./StatusTag.cbb86488.js";
import "./QBadge.488f67fd.js";
import "./debug.972d445d.js";
import "./help.03a1471a.js";
import "./vue-i18n.runtime.esm-bundler.60304d11.js";
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
