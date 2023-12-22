import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.0dbcee2d.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.b2f4aca3.js";
import "./QTd.cd60cc37.js";
import "./QItemSection.a93e6b70.js";
import "./QList.31c4473f.js";
import "./QMenu.f441d7a0.js";
import "./selection.54a583a0.js";
import "./QTable.796d4712.js";
import "./QMarkupTable.6cdd41e1.js";
import "./QSelect.522178b7.js";
import "./QItemLabel.0fb67170.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.37100551.js";
import "./use-fullscreen.01f17741.js";
import "./ClosePopup.af94a7f8.js";
import "./axios.32e1d547.js";
import "./StatusTag.91c5fcfc.js";
import "./QBadge.ef439336.js";
import "./debug.972d445d.js";
import "./help.0d31cbdd.js";
import "./vue-i18n.runtime.esm-bundler.bc0c1c98.js";
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
