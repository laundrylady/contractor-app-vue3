import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.7f804594.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.8de41301.js";
import "./QTd.aad9959a.js";
import "./selection.ac0446c0.js";
import "./QList.c0b37bba.js";
import "./QMenu.40e69310.js";
import "./QTable.a8cf06a5.js";
import "./QMarkupTable.3ab3547c.js";
import "./QSelect.ad059350.js";
import "./QItemLabel.aed68b16.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.722a6ba9.js";
import "./use-fullscreen.48463a2c.js";
import "./ClosePopup.dc1cce1a.js";
import "./axios.fd57f097.js";
import "./StatusTag.e3f4a4b8.js";
import "./QBadge.5bb99b39.js";
import "./debug.ffa51329.js";
import "./help.4240928c.js";
import "./vue-i18n.runtime.esm-bundler.81cad9a6.js";
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
