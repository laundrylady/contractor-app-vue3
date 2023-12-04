import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.197c13c5.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.e4f8656c.js";
import "./QTd.17fddcd2.js";
import "./QItemSection.72d2cb0c.js";
import "./QList.11ae1195.js";
import "./QMenu.8ba97455.js";
import "./selection.be3f87ce.js";
import "./QTable.dd51e14f.js";
import "./QMarkupTable.e5e9c85e.js";
import "./QSelect.0d308ce8.js";
import "./QItemLabel.93d26f0e.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.565337dd.js";
import "./use-fullscreen.8fb385a9.js";
import "./ClosePopup.03b1d908.js";
import "./axios.66f61733.js";
import "./StatusTag.22a7d014.js";
import "./QBadge.d9f6bd9a.js";
import "./debug.972d445d.js";
import "./help.b38df1d7.js";
import "./vue-i18n.runtime.esm-bundler.1606bcbb.js";
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
