import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.3d23167e.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.644e4200.js";
import "./QTd.5dbb1c09.js";
import "./selection.9cd71d51.js";
import "./QList.7529ab5e.js";
import "./QMenu.48a0f8bf.js";
import "./QTable.78a280ee.js";
import "./QMarkupTable.48f8f9e8.js";
import "./QSelect.ab5d7e64.js";
import "./QItemLabel.bd8cb11b.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.c047bc8d.js";
import "./use-fullscreen.18231a48.js";
import "./ClosePopup.fd63b92d.js";
import "./axios.6442d350.js";
import "./StatusTag.220aba88.js";
import "./QBadge.2937004a.js";
import "./debug.972d445d.js";
import "./help.02d8b462.js";
import "./vue-i18n.runtime.esm-bundler.8c38f1d1.js";
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
