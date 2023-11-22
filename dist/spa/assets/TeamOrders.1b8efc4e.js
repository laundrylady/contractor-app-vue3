import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.11b795dc.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.54585565.js";
import "./QTd.300e2b78.js";
import "./QItemSection.3d6dd23a.js";
import "./QList.0477e43a.js";
import "./QMenu.dc22a363.js";
import "./selection.201d97d8.js";
import "./QTable.18827576.js";
import "./QMarkupTable.effa9df6.js";
import "./QSelect.bb083088.js";
import "./QItemLabel.64fe3631.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.336a3cc5.js";
import "./use-fullscreen.ef561827.js";
import "./ClosePopup.e6a61557.js";
import "./axios.1853c8fa.js";
import "./StatusTag.8383be46.js";
import "./QBadge.6f0cdf60.js";
import "./debug.972d445d.js";
import "./help.2ef6de69.js";
import "./vue-i18n.runtime.esm-bundler.07e5b034.js";
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
