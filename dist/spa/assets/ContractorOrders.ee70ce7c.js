import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.bed67297.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.925d5c0f.js";
import "./QTd.3e3ef1df.js";
import "./selection.3970f4d4.js";
import "./QList.942a0499.js";
import "./QMenu.e39a224d.js";
import "./QTable.78d731b6.js";
import "./QMarkupTable.5a4607db.js";
import "./QSelect.5d779f8f.js";
import "./QItemLabel.d5609942.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.050d2c54.js";
import "./use-fullscreen.fc6aa706.js";
import "./ClosePopup.183ee017.js";
import "./axios.a5d1de6e.js";
import "./StatusTag.7d1781cb.js";
import "./QBadge.5f16c34e.js";
import "./debug.972d445d.js";
import "./help.17b21ee7.js";
import "./vue-i18n.runtime.esm-bundler.25024cba.js";
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
