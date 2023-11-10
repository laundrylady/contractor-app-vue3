import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.9f8d631c.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.0095e572.js";
import "./QTd.6bf64332.js";
import "./selection.c2acc0d2.js";
import "./QList.74ad8538.js";
import "./QMenu.11ae87e4.js";
import "./QTable.44371d61.js";
import "./QMarkupTable.93811146.js";
import "./QSelect.56e6ee3f.js";
import "./QItemLabel.fd9abae6.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.400d6087.js";
import "./use-fullscreen.28b7f5e4.js";
import "./ClosePopup.f66bea2c.js";
import "./axios.fc6bc4c0.js";
import "./StatusTag.4eca9652.js";
import "./QBadge.59846f77.js";
import "./debug.972d445d.js";
import "./help.667e8e69.js";
import "./vue-i18n.runtime.esm-bundler.c3118e91.js";
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
