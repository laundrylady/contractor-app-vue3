import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.230fd95d.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aI as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.d24090f9.js";
import "./QTd.aa3a74e4.js";
import "./selection.65db3133.js";
import "./QList.d829e119.js";
import "./QMenu.58abcd6d.js";
import "./QTable.42e9c911.js";
import "./QMarkupTable.1d278012.js";
import "./QSelect.f2db8adb.js";
import "./QItemLabel.4d6f9b5e.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.0e0ea0fe.js";
import "./use-fullscreen.14fb770f.js";
import "./ClosePopup.7dcd8c4a.js";
import "./axios.19035272.js";
import "./StatusTag.6d273e2a.js";
import "./QBadge.ff89707f.js";
import "./debug.972d445d.js";
import "./help.7cc62a8f.js";
import "./vue-i18n.runtime.esm-bundler.98243bf4.js";
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
