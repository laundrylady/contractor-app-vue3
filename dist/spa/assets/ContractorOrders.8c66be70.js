import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.60a996ff.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.ff28a0be.js";
import "./QTable.72abe654.js";
import "./QList.fea27c01.js";
import "./QSelect.d9c1a7f5.js";
import "./QItemSection.46a22740.js";
import "./format.0f02b137.js";
import "./QLinearProgress.c11c5cee.js";
import "./use-fullscreen.a67c953b.js";
import "./ClosePopup.bda7fd1c.js";
import "./axios.31973f2c.js";
import "./StatusTag.79673dc4.js";
import "./QBadge.7fd0a1ea.js";
import "./debug.805a8aef.js";
import "./help.805c841c.js";
import "./vue-i18n.runtime.esm-bundler.d7717bc4.js";
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
