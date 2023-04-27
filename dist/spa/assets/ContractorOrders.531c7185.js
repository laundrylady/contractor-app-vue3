import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.05358437.js";
import { A as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aF as toDisplayString, l as createVNode, y as createCommentVNode } from "./index.253fe345.js";
import "./QTable.73f79253.js";
import "./QList.17898fd8.js";
import "./QMarkupTable.daa445b9.js";
import "./QSelect.50985c2c.js";
import "./QItemSection.04ae4ed1.js";
import "./rtl.341eb743.js";
import "./format.8649e8ee.js";
import "./QLinearProgress.46fe0bb7.js";
import "./ClosePopup.abe5ec32.js";
import "./axios.2d898732.js";
import "./StatusTag.b7d3f538.js";
import "./QBadge.7e8baaf6.js";
import "./debug.805a8aef.js";
import "./help.b5179f9e.js";
import "./vue-i18n.runtime.esm-bundler.fed34c1b.js";
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
