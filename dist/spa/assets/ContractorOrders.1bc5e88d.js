import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.8927d69f.js";
import { A as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, b8 as toDisplayString, l as createVNode, y as createCommentVNode } from "./index.e647c85a.js";
import "./QTable.64a81add.js";
import "./QList.2f0afc60.js";
import "./QMarkupTable.981d9979.js";
import "./QSelect.853d535e.js";
import "./QItemSection.99659658.js";
import "./rtl.4f5e13e8.js";
import "./format.8e90d58d.js";
import "./QLinearProgress.c48fac34.js";
import "./ClosePopup.ef2f7039.js";
import "./axios.ccd3a804.js";
import "./StatusTag.c8d66888.js";
import "./QBadge.5efaf9f7.js";
import "./debug.805a8aef.js";
import "./help.c0f85e41.js";
import "./vue-i18n.runtime.esm-bundler.bec1d6a0.js";
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
