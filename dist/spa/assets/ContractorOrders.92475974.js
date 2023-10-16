import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.8fc9bab9.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.b7abd301.js";
import "./QTd.64ceb8f6.js";
import "./selection.a11a3ba2.js";
import "./QList.f150e006.js";
import "./QMenu.0c8d2be9.js";
import "./QTable.a2f08be2.js";
import "./QMarkupTable.93a6026d.js";
import "./QSelect.33228d01.js";
import "./QItemLabel.73012d76.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.017faa55.js";
import "./use-fullscreen.ac424ea4.js";
import "./ClosePopup.e5f69e1c.js";
import "./axios.ac485b3d.js";
import "./StatusTag.cb24ea67.js";
import "./QBadge.06998a76.js";
import "./debug.972d445d.js";
import "./help.ae81b970.js";
import "./vue-i18n.runtime.esm-bundler.2fbceb1a.js";
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
