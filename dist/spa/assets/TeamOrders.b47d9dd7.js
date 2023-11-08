import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.e0a35d14.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.1c3f43c8.js";
import "./QTd.0c448bb1.js";
import "./selection.86d747e5.js";
import "./QList.b8b2bfb8.js";
import "./QMenu.9c9cfd8c.js";
import "./QTable.15d440d6.js";
import "./QMarkupTable.5e83005c.js";
import "./QSelect.9179fadf.js";
import "./QItemLabel.832f641e.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.7ed99f62.js";
import "./use-fullscreen.3da0ccd1.js";
import "./ClosePopup.071b0067.js";
import "./axios.bd02ada1.js";
import "./StatusTag.013d91df.js";
import "./QBadge.95d5673f.js";
import "./debug.972d445d.js";
import "./help.842e93c9.js";
import "./vue-i18n.runtime.esm-bundler.aed8346c.js";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5" }, "Booking History", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "Below is the complete booking history.", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TeamOrders",
  props: {
    model: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.model.id ? (openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        _hoisted_3,
        createVNode(_sfc_main$1, {
          team_id: __props.model.id
        }, null, 8, ["team_id"])
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
