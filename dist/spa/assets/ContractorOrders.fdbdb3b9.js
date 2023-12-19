import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.3c3dbd48.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.9d209411.js";
import "./QTd.8dd01fd3.js";
import "./QItemSection.9dfc9174.js";
import "./QList.d72596b3.js";
import "./QMenu.12e99d26.js";
import "./selection.2937e51d.js";
import "./QTable.7818d624.js";
import "./QMarkupTable.29ad7eae.js";
import "./QSelect.35b85a20.js";
import "./QItemLabel.9fccdf4f.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.406f2c41.js";
import "./use-fullscreen.3fa215bd.js";
import "./ClosePopup.0a4dde7b.js";
import "./axios.3379d02c.js";
import "./StatusTag.f744cafe.js";
import "./QBadge.8b0cccd4.js";
import "./debug.972d445d.js";
import "./help.f0fd5515.js";
import "./vue-i18n.runtime.esm-bundler.5ad873d3.js";
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
