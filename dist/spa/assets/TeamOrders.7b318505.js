import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.505cb8e1.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.d6d4bbef.js";
import "./QTd.7efd3e83.js";
import "./selection.db1a4dd6.js";
import "./QList.b214f7f0.js";
import "./QMenu.f8214587.js";
import "./QTable.0431a192.js";
import "./QMarkupTable.c52c3c99.js";
import "./QSelect.d0580ce8.js";
import "./QItemLabel.45c17f29.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.d61c5c83.js";
import "./use-fullscreen.4cd161d2.js";
import "./ClosePopup.c66f1348.js";
import "./axios.d2a2ec81.js";
import "./StatusTag.1a21786b.js";
import "./QBadge.fe09426b.js";
import "./debug.972d445d.js";
import "./help.895f4276.js";
import "./vue-i18n.runtime.esm-bundler.1af7506b.js";
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
