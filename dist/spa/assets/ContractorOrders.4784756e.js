import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.e3650393.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.9d591b1c.js";
import "./QTd.95568e3c.js";
import "./QItemSection.8e564bc4.js";
import "./QList.b4bd41f3.js";
import "./QMenu.96d27bd9.js";
import "./selection.2874b1b3.js";
import "./QTable.e5f53493.js";
import "./QMarkupTable.0e23dd9f.js";
import "./QSelect.9c2c8019.js";
import "./QItemLabel.d08ee18c.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.b20e4b9c.js";
import "./use-fullscreen.10b646dc.js";
import "./ClosePopup.432271df.js";
import "./axios.ffd06d42.js";
import "./StatusTag.d53fcbea.js";
import "./QBadge.579e47d8.js";
import "./debug.972d445d.js";
import "./help.b8d14fc4.js";
import "./vue-i18n.runtime.esm-bundler.cb7a3db2.js";
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
