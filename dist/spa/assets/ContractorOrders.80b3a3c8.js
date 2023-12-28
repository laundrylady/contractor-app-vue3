import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.d9c3f88c.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.64115597.js";
import "./QTd.d5f8b4b6.js";
import "./QItemSection.88e76e43.js";
import "./QList.0ce3daef.js";
import "./QMenu.8a7e34c1.js";
import "./selection.3353006d.js";
import "./QTable.bd895cb2.js";
import "./QMarkupTable.747deb8a.js";
import "./QSelect.f34191cd.js";
import "./QItemLabel.ce323bb3.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.93dc9c4f.js";
import "./use-fullscreen.22685618.js";
import "./ClosePopup.da75327b.js";
import "./axios.7b9c1ad1.js";
import "./StatusTag.ce94c4bf.js";
import "./QBadge.826d1bc7.js";
import "./debug.b9d7424b.js";
import "./help.384b7e66.js";
import "./vue-i18n.runtime.esm-bundler.bc7eb74b.js";
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
