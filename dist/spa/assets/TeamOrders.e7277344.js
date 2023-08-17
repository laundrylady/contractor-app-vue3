import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.d27e9f77.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode, p as createBaseVNode } from "./index.b831cb22.js";
import "./QTable.218b6a4f.js";
import "./QList.6332f811.js";
import "./QMarkupTable.097c9cfc.js";
import "./QSelect.9dc7a6c7.js";
import "./QItemSection.4ac56135.js";
import "./selection.4cb35218.js";
import "./QMenu.af8e1e92.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.d46b9629.js";
import "./use-fullscreen.1db19e64.js";
import "./ClosePopup.46405e5b.js";
import "./axios.68b9268b.js";
import "./StatusTag.17a522de.js";
import "./QBadge.49d723be.js";
import "./debug.ffa51329.js";
import "./help.e6021a60.js";
import "./vue-i18n.runtime.esm-bundler.aa2b85bf.js";
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
