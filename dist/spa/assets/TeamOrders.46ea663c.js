import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.8c6ddc4c.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.a8c2088f.js";
import "./QTd.d50cc249.js";
import "./QItemSection.e7fc41e3.js";
import "./QList.6dac2cc1.js";
import "./QMenu.d17a803f.js";
import "./selection.2269a595.js";
import "./QTable.757a8e60.js";
import "./QMarkupTable.51386de5.js";
import "./QSelect.a486286b.js";
import "./QItemLabel.71296e9c.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.b89a7092.js";
import "./use-fullscreen.55a28642.js";
import "./ClosePopup.2b5e4b81.js";
import "./axios.6170ef9f.js";
import "./StatusTag.6cf8b52a.js";
import "./QBadge.26c616f1.js";
import "./debug.972d445d.js";
import "./help.565e8b52.js";
import "./vue-i18n.runtime.esm-bundler.2cd83188.js";
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
