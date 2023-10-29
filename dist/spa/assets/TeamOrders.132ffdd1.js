import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.d7566721.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.fa2b967f.js";
import "./QTd.33ff342e.js";
import "./selection.3328651a.js";
import "./QList.468f0009.js";
import "./QMenu.a931a59a.js";
import "./QTable.98281917.js";
import "./QMarkupTable.15808611.js";
import "./QSelect.6207932e.js";
import "./QItemLabel.589b6673.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.e78cbb65.js";
import "./use-fullscreen.a7e72f92.js";
import "./ClosePopup.fc0abb68.js";
import "./axios.814b97a2.js";
import "./StatusTag.8e4e723e.js";
import "./QBadge.13851b9d.js";
import "./debug.972d445d.js";
import "./help.f5e0718f.js";
import "./vue-i18n.runtime.esm-bundler.e59fb91d.js";
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
