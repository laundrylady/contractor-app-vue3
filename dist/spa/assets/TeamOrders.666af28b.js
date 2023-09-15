import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.8ed819f5.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode, p as createBaseVNode } from "./index.75c589dc.js";
import "./QTable.b5db4e8b.js";
import "./QList.64ccde9f.js";
import "./QMarkupTable.9747b35b.js";
import "./QSelect.279ab0ff.js";
import "./selection.7cbdbbe5.js";
import "./QItemLabel.a15b7d1a.js";
import "./QMenu.faa99aa9.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.260f6d4e.js";
import "./use-fullscreen.af37fc26.js";
import "./ClosePopup.486c41e5.js";
import "./axios.a7e15516.js";
import "./StatusTag.74d3ddb3.js";
import "./QBadge.44e41182.js";
import "./debug.ffa51329.js";
import "./help.2d75e567.js";
import "./vue-i18n.runtime.esm-bundler.afe62f6e.js";
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
