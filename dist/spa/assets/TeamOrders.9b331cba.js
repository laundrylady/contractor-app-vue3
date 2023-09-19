import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.6fb7ff7f.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode, p as createBaseVNode } from "./index.1cfe3334.js";
import "./QTd.52b68e2f.js";
import "./selection.13315fdc.js";
import "./QList.e91943c5.js";
import "./QMenu.a11350f0.js";
import "./QTable.7d0cdd7d.js";
import "./QMarkupTable.ed721e7b.js";
import "./QSelect.2fb93bbd.js";
import "./QItemLabel.f9f3755f.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.de30b1e2.js";
import "./use-fullscreen.ebb72e6f.js";
import "./ClosePopup.3a842474.js";
import "./axios.0c43222c.js";
import "./StatusTag.7b71ae4e.js";
import "./QBadge.26e0159e.js";
import "./debug.ffa51329.js";
import "./help.39141f00.js";
import "./vue-i18n.runtime.esm-bundler.db317ade.js";
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
