import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.803e8be3.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.b933ddc7.js";
import "./QTd.118c335d.js";
import "./QItemSection.541395cc.js";
import "./QList.0e92e88d.js";
import "./QMenu.80fdd35e.js";
import "./selection.a38a2ac7.js";
import "./QTable.b9016f2e.js";
import "./QMarkupTable.857d6778.js";
import "./QSelect.2e393bff.js";
import "./QItemLabel.1e5d20ef.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.235efbed.js";
import "./use-fullscreen.f6213573.js";
import "./ClosePopup.3d66101d.js";
import "./axios.cc67cde9.js";
import "./StatusTag.6040d9f4.js";
import "./QBadge.25543fb2.js";
import "./debug.972d445d.js";
import "./help.cac0f575.js";
import "./vue-i18n.runtime.esm-bundler.f0f940b6.js";
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
