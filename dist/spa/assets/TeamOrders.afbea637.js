import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.54dd95e4.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.397bbb4f.js";
import "./QTd.e71850b2.js";
import "./QItemSection.cad3aa81.js";
import "./QList.b8d58b8d.js";
import "./QMenu.7d3b2215.js";
import "./selection.fcec5241.js";
import "./QTable.2a5f9b5d.js";
import "./QMarkupTable.3f9e3b1f.js";
import "./QSelect.1f2f5325.js";
import "./QItemLabel.06bf30d0.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.499acee6.js";
import "./use-fullscreen.8f384bf2.js";
import "./ClosePopup.5b718ea6.js";
import "./axios.e5bf32bb.js";
import "./StatusTag.d0e9950b.js";
import "./QBadge.3e10258c.js";
import "./debug.972d445d.js";
import "./help.a38f3a12.js";
import "./vue-i18n.runtime.esm-bundler.773047fb.js";
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
