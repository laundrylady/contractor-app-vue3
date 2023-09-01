import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.88fd7d15.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.c8d47ef5.js";
import "./QTable.fc9ad5e6.js";
import "./QList.1476326b.js";
import "./QMarkupTable.d7024bbf.js";
import "./QSelect.99f12939.js";
import "./QItemSection.fc8141cf.js";
import "./selection.f35965d9.js";
import "./QMenu.c134495c.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.edb11cb6.js";
import "./use-fullscreen.a40ee58d.js";
import "./ClosePopup.e6df9abe.js";
import "./axios.415142fa.js";
import "./StatusTag.681ae6bd.js";
import "./QBadge.374c7b41.js";
import "./debug.ffa51329.js";
import "./help.26cc6078.js";
import "./vue-i18n.runtime.esm-bundler.f32b8cf6.js";
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
